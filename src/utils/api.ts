import axios, { AxiosRequestConfig, Method } from "axios";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface ApiOptions extends Omit<AxiosRequestConfig, "data"> {
  jsonBody?: Record<string, any>; // Accept JSON
  multipartBody?: FormData; // Accept FormData for file uploads
  method?: HttpMethod;
}

export const fetchData = async <T>(
  endpoint: string,
  method: HttpMethod,
  options: ApiOptions = {}
): Promise<{ data: T; status: number }> => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const { jsonBody, multipartBody, ...restOptions } = options;

  // Remove trailing slash from BASE_URL and leading slash from endpoint
  const url = `${BASE_URL?.replace(/\/$/, "")}/${endpoint
    .replace(/^\//, "")
    .replace(/\/$/, "")}`;

  let headers: Record<string, string> = {};
  if (restOptions.headers) {
    Object.entries(restOptions.headers).forEach(([key, value]) => {
      if (typeof value !== "undefined") {
        headers[key] = String(value);
      }
    });
  }

  // Check for token only if the current page is inside /admin
  if (
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/admin")
  ) {
    const token = sessionStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      throw new Error("Authentication token not found");
    }
    headers = {
      Authorization: `Bearer ${token}`,
      ...(multipartBody ? {} : { "Content-Type": "application/json" }),
      ...headers,
    };
  } else {
    headers = {
      ...(multipartBody ? {} : { "Content-Type": "application/json" }),
      ...headers,
    };
  }

  if (process.env.NEXT_PUBLIC_APP_ENV != "production") {
    console.log("fetchData", process.env.NEXT_PUBLIC_APP_ENV || "none");
    console.log("fetchData", {
      url,
      method,
      jsonBody,
      multipartBody,
      ...restOptions,
    });
  }

  let axiosConfig: AxiosRequestConfig = {
    url,
    method: method as Method,
    headers,
    ...restOptions,
    data: undefined,
  };

  if (multipartBody) {
    axiosConfig.data = multipartBody;
  } else if (jsonBody && (method === "POST" || method === "PUT")) {
    axiosConfig.data = JSON.stringify(jsonBody);
  }

  if (process.env.NEXT_PUBLIC_APP_ENV != "production") {
    console.log("fetchData", url, axiosConfig);
  }

  try {
    const response = await axios(axiosConfig);
    if (response.status === 401) {
      if (
        typeof window !== "undefined" &&
        !window.location.pathname.startsWith("/login")
      ) {
        window.location.href = "/login";
      }
      throw new Error("Unauthorized: Invalid credentials");
    }
    const jsonResponse = response.data;
    if (!response.status || response.status < 200 || response.status >= 300) {
      throw new Error(`API error: ${response.status}`);
    }
    if (method === "DELETE" && response.status === 204) {
      return { data: {} as T, status: response.status };
    }
    if (
      jsonResponse &&
      typeof jsonResponse === "object" &&
      "data" in jsonResponse
    ) {
      return { data: jsonResponse.data as T, status: response.status };
    }
    return { data: jsonResponse as T, status: response.status };
  } catch (error: any) {
    if (error.response) {
      // API error
      throw new Error(
        `API error: ${error.response.status} ${error.response.statusText} ${
          error.response.data?.error || ""
        }`
      );
    } else if (error.request) {
      throw new Error("No response received from API");
    } else {
      throw error;
    }
  }
};

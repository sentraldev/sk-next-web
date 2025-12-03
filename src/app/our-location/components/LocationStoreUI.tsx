"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchData } from "../../../utils/api";
import Image from "next/image";
// Star rating removed; ratings are no longer fetched from Google Places
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faClock } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

interface Store {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  phone: string;
  image: string;
  googleMapsUrl: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  email?: string;
  openingHours?: string;
  openingTime?: string;
  closingTime?: string;
  isServiceCenter?: boolean;
  brands?: { id: number; name: string; slug?: string; logo?: string }[];
}

type OurLocationSearchProps = {
  cities: string[];
  onSearch: (query: string, city: string) => void;
};

function extractCityFromAddress(address: string): string | null {
  const regex = /([A-Za-z\s]+)\s\d{5}/;
  const match = address.match(regex);
  if (match && match[1]) {
    return match[1].trim();
  }
  return null;
}

function OurLocationSearch({ cities, onSearch }: OurLocationSearchProps) {
  const [query, setQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("Kota");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Automatically trigger search when selectedCity changes
  useEffect(() => {
    onSearch(query.trim(), selectedCity);
  }, [selectedCity, query, onSearch]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center gap-2 mb-4">
      <input
        type="text"
        placeholder="Cari Toko Sentral Komputer"
        className="w-[450px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) =>
          e.key === "Enter" && onSearch(query.trim(), selectedCity)
        }
      />
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setShowDropdown((prev) => !prev)}
          className="px-6 py-2 bg-blue-600 w-[120px] text-white font-semibold rounded-md hover:bg-blue-700 transition flex items-center gap-1">
          {selectedCity}
          <svg
            className={`w-4 h-4 transition-transform ${
              showDropdown ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {showDropdown && (
          <ul className="absolute right-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto z-10">
            {cities.map((city) => (
              <li
                key={city}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer select-none"
                onClick={() => {
                  setSelectedCity(city);
                  setShowDropdown(false);
                }}>
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const containerStyle = {
  width: "100%",
  height: "100%",
};

const centerDefault = {
  lat: -2.548926,
  lng: 118.0148634,
};

const storeLocations: Store[] = [
  {
    id: 1,
    name: "Sentral Komputer Jakarta",
    lat: -6.197745,
    lng: 106.935908,
    address:
      "Taman Pulo Indah Jl. Manggis No.34 blok M, RT.19/RW.7, Penggilingan, Cakung, East Jakarta City, Jakarta 13940",
    phone: "081977774057",
    image: "/temp/toko.png",
    googleMapsUrl: "https://maps.app.goo.gl/uSBykUGvZsyshuka6",
    instagramUrl: "https://www.instagram.com/sentralkomputer_id/",
    tiktokUrl: "https://www.tiktok.com/@sentralkomputer_id",
    email: "kevin@sentralkomputer.com",
    openingHours: "9.00am - 7.00pm",
  },
  {
    id: 2,
    name: "Sentral Komputer Mal Artha Gading",
    lat: -6.145018407976473,
    lng: 106.89332880551387,
    address:
      "Mall Artha Gading Lt. GF Blok A2 No. 26, Jl. Artha Gading Selatan No.1, Kelapa Gading, Jakarta Utara, Jakarta 14240",
    phone: "(+62) 819-7777-3600",
    image: "/temp/toko.png",
    googleMapsUrl: "https://maps.app.goo.gl/NFaqQ11HHTKFyQ5o9",
    instagramUrl: "https://www.instagram.com/sentralkomputer_id/",
    tiktokUrl: "https://www.tiktok.com/@sentralkomputer_id",
    email: "anwar@sentralkomputer.com",
    openingHours: "10.00am - 9.00pm",
  },
  {
    id: 3,
    name: "Sentral Service by Sentral Komputer (BCP)",
    lat: -6.246459430457757,
    lng: 106.99207207111063,
    address:
      "Bekasi Cyber Park Lt. 1 No.6-7 Blok A1, Kec. Bekasi Sel, Bekasi 17144",
    phone: "(+62) 819-7777-1800",
    image: "/temp/toko.png",
    googleMapsUrl: "https://maps.app.goo.gl/MUvc17twsXBmGD3T6",
    instagramUrl: "https://www.instagram.com/sentralkomputer_id/",
    tiktokUrl: "https://www.tiktok.com/@sentralkomputer_id",
    email: "akhiru@sentralkomputer.com",
    openingHours: "10.00am - 9.00pm",
  },
];

// Note: `uniqueCities` will be derived from runtime `stores` inside the component

const LocationStoreUI: React.FC = () => {
  // runtime store list (populated from API). No local fallback — rely on API
  const [stores, setStores] = useState<Store[]>([]);
  const [storesLoading, setStoresLoading] = useState<boolean>(true);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>(
    centerDefault
  );
  const [zoom, setZoom] = useState<number>(5);
  const [filteredStores, setFilteredStores] = useState<Store[]>([]);

  // Normalize API item -> Store shape
  function normalizeApiStore(api: any): Store {
    const image = api.image ?? "/temp/toko.png";

    const openingHours = api.opening_hours
      ? api.closing_hours
        ? `${api.opening_hours} - ${api.closing_hours}`
        : api.opening_hours
      : "";

    return {
      id: Number(api.id),
      name: api.name || "",
      lat: parseFloat(String(api.lat || api.latitude || 0)),
      lng: parseFloat(String(api.lng || api.longitude || 0)),
      address: `${api.address || ""}${api.city ? ", " + api.city : ""}`,
      phone: api.phone || "",
      image,
      googleMapsUrl: api.google_maps_link || api.googleMapsUrl || "",
      instagramUrl: api.instagram_link || api.instagramUrl || undefined,
      tiktokUrl: api.tiktok_link || api.tiktokUrl || undefined,
      email: api.email || undefined,
      openingHours,
      openingTime: api.opening_hours || undefined,
      closingTime: api.closing_hours || undefined,
      isServiceCenter: Boolean(api.is_service_center || false),
      brands:
        api.brands?.map((b: any) => {
          const logoRaw: string | undefined = b.logo || undefined;
          let logo: string | undefined;
          if (logoRaw) {
            // If logo is an absolute URL (http/https or protocol-relative), use as-is
            if (/^(https?:)?\/\//i.test(logoRaw)) {
              logo = logoRaw;
            } else if (process.env.NEXT_PUBLIC_MEDIA_URL) {
              logo = `${process.env.NEXT_PUBLIC_MEDIA_URL.replace(
                /\/$/,
                ""
              )}/${logoRaw.replace(/^\//, "")}`;
            } else {
              logo = `/${logoRaw.replace(/^\//, "")}`;
            }
          }
          return {
            id: Number(b.id),
            name: b.name,
            slug: b.slug,
            logo,
          };
        }) || undefined,
    };
  }

  // Fetch stores from API and replace fallback when available
  useEffect(() => {
    let canceled = false;

    async function fetchStores() {
      try {
        setStoresLoading(true);
        // use shared fetch helper which returns { data, status }
        const response = await fetchData<any[]>("api/v1/location", "GET");
        const items = Array.isArray(response.data)
          ? response.data
          : response.data
          ? response.data
          : [];
        const normalized: Store[] = items.map(normalizeApiStore);
        if (!canceled) {
          if (normalized.length > 0) {
            setStores(normalized);
            setFilteredStores(normalized);
            setMapCenter({ lat: normalized[0].lat, lng: normalized[0].lng });
            setZoom(16);
            setSelectedStore(normalized[0]);
          }
        }
      } catch (err) {
        // on error, fall back to bundled `storeLocations` already initialized
      } finally {
        if (!canceled) setStoresLoading(false);
      }
    }

    fetchStores();
    return () => {
      canceled = true;
    };
  }, []);

  const cities = [
    "Kota",
    ...Array.from(
      new Set(
        stores
          .map((store) => extractCityFromAddress(store.address))
          .filter((city): city is string => city !== null)
      )
    ),
  ];

  const onStoreClick = useCallback((store: Store) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      window.open(store.googleMapsUrl, "_blank");
      return;
    }

    setMapCenter({ lat: store.lat, lng: store.lng });
    setZoom(16);
    setSelectedStore(store);
  }, []);

  const onSearch = useCallback((query: string, city: string) => {
    let results = stores;

    if (query) {
      results = results.filter(
        (store) =>
          store.name.toLowerCase().includes(query.toLowerCase()) ||
          store.address.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (city && city !== "Kota") {
      results = results.filter(
        (store) =>
          extractCityFromAddress(store.address)?.toLowerCase() ===
          city.toLowerCase()
      );
    }

    setFilteredStores(results);

    if (results.length > 0) {
      setMapCenter({ lat: results[0].lat, lng: results[0].lng });
      setZoom(16);
      setSelectedStore(results[0]);
    } else {
      setMapCenter(centerDefault);
      setZoom(5);
      setSelectedStore(null);
    }
  }, []);

  // Helper: determine if a store is open now using openingTime/closingTime (HH:mm)
  function isOpenNow(store: Store) {
    const parse = (s?: string) => {
      if (!s) return null;
      const parts = s.split(":").map((p) => Number(p));
      if (parts.length < 1 || Number.isNaN(parts[0])) return null;
      const h = parts[0];
      const m = parts.length > 1 && !Number.isNaN(parts[1]) ? parts[1] : 0;
      return h * 60 + m;
    };

    const open = parse(store.openingTime);
    const close = parse(store.closingTime);
    if (open === null || close === null) return false;
    const now = new Date();
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    if (close > open) {
      return nowMinutes >= open && nowMinutes <= close;
    }
    // Overnight closing (e.g., open 22:00 close 04:00)
    return nowMinutes >= open || nowMinutes <= close;
  }

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div className="flex flex-col md:flex-row gap-6 md:h-[800px] bg-gray-50">
      <div className="md:w-1/2 overflow-y-auto space-y-6 rounded-lg">
        <OurLocationSearch cities={cities} onSearch={onSearch} />
        {storesLoading ? (
          <div className="p-4 text-gray-600">Loading stores...</div>
        ) : filteredStores.length === 0 ? (
          <div className="p-4 text-gray-600">No stores found.</div>
        ) : (
          <>
            {filteredStores.map((store: Store) => (
              <div
                key={store.id}
                className="flex flex-col md:flex-row cursor-pointer hover:bg-gray-50 border-b-2 border-gray-300 md:items-stretch pb-4"
                onClick={() => onStoreClick(store)}>
                <div className="flex w-full md:w-1/3 flex-shrink-0 md:items-stretch md:p-0 py-4">
                  <Image
                    src={store.image || "/temp/toko.png"}
                    alt={store.name}
                    width={600}
                    height={420}
                    className="w-full h-auto md:h-full object-cover rounded-lg"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col justify-between flex-grow pt-0 md:px-4">
                  <div>
                    <h3 className="text-md font-bold text-gray-900">
                      {store.name}
                      <span className="bg-gray-200 text-[10px] text-gray-400 ms-1 p-1 rounded-md">
                        Sentral service available
                      </span>
                    </h3>
                    <div className="flex items-center gap-3 mt-1 text-xs">
                      <p
                        className={`text-md font-semibold ${
                          isOpenNow(store) ? "text-green-600" : "text-red-600"
                        }`}>
                        {isOpenNow(store) ? "Open" : "Closed"}
                      </p>
                      <div className="w-px h-3 bg-gray-400 mx-1" />
                      <div className="flex items-center gap-2 text-2xl text-gray-400">
                        <a
                          href={store.instagramUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-gray-600">
                          <FontAwesomeIcon icon={faInstagram} size="sm" />
                        </a>
                        <a
                          href={store.tiktokUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-gray-600">
                          <FontAwesomeIcon icon={faTiktok} size="sm" />
                        </a>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-1 text-sm leading-1">
                      {store.address}
                    </p>
                    <div className="mt-4 text-gray-700">
                      <div className="flex items-center gap-2 mb-2">
                        <FontAwesomeIcon
                          icon={faClock}
                          className="text-black"
                        />
                        <span className="text-sm font-bold">
                          {store.openingHours}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="text-black"
                        />
                        <span className="text-sm font-bold">{store.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-black"
                        />
                        <span className="text-sm font-bold">{store.email}</span>
                      </div>
                    </div>
                  </div>
                  {store.brands && store.brands.length > 0 && (
                    <>
                      <div className="mt-2 text-xs text-gray-400 font-semibold">
                        <p>Certified service point:</p>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        {store.brands.map((b) => (
                          <Image
                            key={b.id}
                            src={b.logo || "/temp/toko.png"}
                            alt={b.name}
                            width={32}
                            height={32}
                            className="object-contain"
                            unoptimized
                          />
                        ))}
                      </div>
                    </>
                  )}
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => onStoreClick(store)}
                      className="flex-auto bg-primary-900 hover:bg-blue-700 text-white text-center rounded-md py-2 font-semibold text-sm">
                      Google Maps
                    </button>
                    <button className="flex-auto border border-primary-900 rounded-md py-2 font-semibold text-sm text-primary-900 hover:bg-gray-100">
                      Chat Toko
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="hidden md:block flex-1 rounded overflow-hidden">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={zoom}
          options={{ streetViewControl: false, fullscreenControl: false }}>
          {filteredStores.map((store: Store) => (
            <Marker
              key={store.id}
              position={{ lat: store.lat, lng: store.lng }}
              onClick={() => setSelectedStore(store)}
            />
          ))}
          {selectedStore && (
            <InfoWindow
              position={{ lat: selectedStore.lat, lng: selectedStore.lng }}
              onCloseClick={() => setSelectedStore(null)}>
              <div style={{ width: 200 }}>
                <h3 className="font-bold mb-1 mt-1 text-sm">
                  {selectedStore.name}
                </h3>
                <p className="mb-1 text-sm/5">{selectedStore.address}</p>
                <p className="text-sm">Tel: {selectedStore.phone}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </div>
  );
};

export default LocationStoreUI;

// pages/api/place-details.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { placeId } = req.query;

  if (!placeId || typeof placeId !== "string") {
    return res.status(400).json({ error: "Missing or invalid placeId" });
  }

  // Pastikan GOOGLE_MAPS_API_KEY sudah diset di .env.local
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; // Gunakan NEXT_PUBLIC_ jika ingin diakses di client side juga, atau biarkan tanpa NEXT_PUBLIC_ jika hanya untuk server side API.
  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured" });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,opening_hours&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.error_message) {
      // Lebih baik log error_message dari Google untuk debugging
      console.error("Google Places API Error:", data.error_message);
      return res.status(500).json({ error: data.error_message });
    }

    const rating = data.result?.rating ?? 0; // Memberikan nilai default 0 jika rating tidak tersedia
    const openNow = data.result?.opening_hours?.open_now ?? false; // Memberikan nilai default false

    res.status(200).json({ rating, openNow });
  } catch (error) {
    console.error("Failed to fetch data from Google Places API:", error);
    res.status(500).json({ error: "Failed to fetch data from Google Places API" });
  }
}

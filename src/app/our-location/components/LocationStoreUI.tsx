"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRating from "@/app/components/StarRating";
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faClock } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

interface Store {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  phone: string;
  image: string;
  googleMapsUrl: string;
  placeId: string; // Tambahkan placeId untuk Google Places API
  instagramUrl?: string;
  tiktokUrl?: string;
  email?: string;
  openingHours?: string;
}

type OurLocationSearchProps = {
  cities: string[];
  onSearch: (query: string, city: string) => void;
};

function extractCityFromAddress(address: string): string | null {
  // Asumsikan formatnya ada nama kota sebelum 5 digit kode pos
  const regex = /([A-Za-z\s]+)\s\d{5}/;
  const match = address.match(regex);
  if (match && match[1]) {
    return match[1].trim();
  }
  return null;
}

function OurLocationSearch({ cities, onSearch }: OurLocationSearchProps) {
  const [query, setQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState(cities[0] || "");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

// List toko yang sudah difilter berdasarkan kota terpilih
  const filteredStores = storeLocations.filter(
    store => extractCityFromAddress(store.address) === selectedCity
  );
  const handleSearch = () => {
    onSearch(query.trim(), selectedCity);
  };

  // Menutup dropdown jika klik di luar komponen
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
        className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown((prev) => !prev)}
            className="px-6 py-2 bg-blue-600 w-[120px] text-white font-semibold rounded-md hover:bg-blue-700 transition flex items-center gap-1"
          >
            {selectedCity} 
            <svg
              className={`w-4 h-4 transition-transform ${
                showDropdown ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                  }}
                >
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
  height: "600px",
};

const centerDefault = {
  lat: -2.548926,
  lng: 118.0148634, // titik tengah Indonesia
};

const storeLocations: Store[] = [
  {
    id: 1,
    name: "Sentral Komputer Jakarta",
    lat: -6.197745,
    lng: 106.935908,
    address: "Taman Pulo Indah Jl. Manggis No.34 blok M, RT.19/RW.7, Penggilingan, Cakung, East Jakarta City, Jakarta 13940",
    phone: "081977774057",
    image: "/temp/toko.png",
    googleMapsUrl: "https://maps.app.goo.gl/uSBykUGvZsyshuka6",
    placeId: "ChIJfYXfB2qLaS4RaXRKTddDz5M",
    instagramUrl: "https://www.instagram.com/sentralkomputer_id/",
    tiktokUrl: "https://www.tiktok.com/@sentralkomputer_id",
    email: "kevin@sentralkomputer.com",
    openingHours: "9.00am - 7.00pm"
  },
  {
    id: 2,
    name: "Sentral Komputer Mal Artha Gading",
    lat: -6.145018407976473,
    lng: 106.89332880551387,
    address: "Mall Artha Gading Lt. GF Blok A2 No. 26, Jl. Artha Gading Selatan No.1, Kelapa Gading, Jakarta Utara, Jakarta 14240",
    phone: "(+62) 819-7777-3600",
    image: "/temp/toko.png",
    googleMapsUrl: "https://maps.app.goo.gl/NFaqQ11HHTKFyQ5o9",
    placeId: "ChIJjxLiB0P1aS4R1192W3k-_iU",
    instagramUrl: "https://www.instagram.com/sentralkomputer_id/",
    tiktokUrl: "https://www.tiktok.com/@sentralkomputer_id",
    email: "anwar@sentralkomputer.com",
    openingHours: "10.00am - 9.00pm"
  },
  {
    id: 3,
    name: "Sentral Service by Sentral Komputer (BCP)",
    lat: -6.246459430457757,
    lng: 106.99207207111063,
    address: "Bekasi Cyber Park Lt. 1 No.6-7 Blok A1, Kec. Bekasi Sel, Bekasi 17144",
    phone: "(+62) 819-7777-1800",
    image: "/temp/toko.png",
    googleMapsUrl: "https://maps.app.goo.gl/MUvc17twsXBmGD3T6",
    placeId: "ChIJyb8cbDGMaS4RVL6gg0Ghi9g",
    instagramUrl: "https://www.instagram.com/sentralkomputer_id/",
    tiktokUrl: "https://www.tiktok.com/@sentralkomputer_id",
    email: "akhiru@sentralkomputer.com",
    openingHours: "10.00am - 9.00pm"
  }
];

// Mengambil nama kota unik
const uniqueCities = Array.from(
  new Set(
    storeLocations
      .map(store => extractCityFromAddress(store.address))
      .filter((city): city is string => city !== null)
  )
);

const LocationStoreUI: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>(centerDefault);
  const [zoom, setZoom] = useState<number>(5);
  const [data, setData] = useState<Record<number, { rating: number; openNow: boolean }>>({});
  const [filteredStores, setFilteredStores] = useState<Store[]>(storeLocations);

  const cities = uniqueCities;

  const onStoreClick = useCallback((store: Store) => {
    setMapCenter({ lat: store.lat, lng: store.lng });
    setZoom(16);
    setSelectedStore(store);
  }, []);

  const onSearch = useCallback((query: string, city: string) => {
    let results = storeLocations;

    if (query) {
      results = results.filter(store =>
        store.name.toLowerCase().includes(query.toLowerCase()) ||
        store.address.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (city && city !== "Semua Kota") {
      results = results.filter(store =>
        store.address.toLowerCase().includes(city.toLowerCase())
      );
    }

    setFilteredStores(results);

    // Jika ditemukan, fokus ke lokasi pertama hasil pencarian
    if (results.length > 0) {
      setMapCenter({ lat: results[0].lat, lng: results[0].lng });
      setZoom(16);
      setSelectedStore(results[0]);
    }
  }, []);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const promises = storeLocations.map(async (store) => {
          const res = await fetch(`/api/place-details?placeId=${store.placeId}`);
          const json = await res.json();
          return { id: store.id, rating: json.rating, openNow: json.openNow };
        });

        const results = await Promise.all(promises);

        const tempData: Record<number, { rating: number; openNow: boolean }> = {};
        results.forEach((r) => {
          if (r.rating !== undefined) {
            tempData[r.id] = { rating: r.rating, openNow: r.openNow };
          }
        });

        setData(tempData);
      } catch (error) {
        console.error("Fetch error", error);
      }
    }

    fetchDetails();
  }, []);


  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div className="flex flex-col md:flex-row gap-6 md:h-[600px]">
      {/* Daftar lokasi toko */}
      <div className="md:w-1/2 overflow-y-auto space-y-6 rounded-lg p-5 bg-white ">
        <OurLocationSearch cities={cities} onSearch={onSearch} />
        {storeLocations.map((store: Store) => (
          <div
            key={store.id}
            className="flex cursor-pointer hover:bg-gray-50 rounded-lg shadow-sm"
            style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}
            onClick={() => onStoreClick(store)}
          >
            {/* Foto toko */}
            <div className="flex flex-shrink-0 justify-center items-center">
              <img
                src={store.image}
                alt={store.name}
                className="w-50 h-50 object-cover rounded-lg"
              />
            </div>

            {/* Info Toko */}
            <div className="flex flex-col justify-between flex-grow p-4">
              {/* Nama, alamat, telp */}
              <div>
                <h3 className="text-md font-bold text-gray-900">{store.name}
                <span className="bg-gray-200 text-[10px] text-gray-400 ms-1 p-1 rounded-md">Sentral service available </span>
                </h3>
                <div className="flex items-center gap-3 mt-1 text-xs"> {/* Mengurangi ukuran teks */}
                  {data[store.id] ? (
                    <>
                      <StarRating rating={data[store.id].rating} />
                      <div className="w-px h-3 bg-gray-400 mx-1"></div> {/* Mengurangi tinggi pemisah */}
                      <p className={`text-md font-semibold ${data[store.id].openNow ? "text-green-600" : "text-red-600"}`}>
                        {data[store.id].openNow ? "Open" : "Closed"}
                      </p>
                    </>
                  ) : (
                    <p>Loading data...</p>
                  )}
                  <div className="w-px h-3 bg-gray-400 mx-1"></div> {/* Mengurangi tinggi pemisah */}
                    {/* Ikon Instagram */}
                    {store.instagramUrl && (
                      <a href={store.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-600 hover:text-gray-800">
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                      </a>
                    )}

                    {/* Ikon TikTok */}
                    {store.tiktokUrl && (
                      <a href={store.tiktokUrl} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-600 hover:text-gray-700">
                        <FontAwesomeIcon icon={faTiktok} size="lg" />
                      </a>
                    )}
                </div>
                <p className="text-gray-600 mt-1 text-sm leading-1">{store.address}</p>
                <div className="mt-4 text-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon icon={faClock} className="text-black" />
                  <span className="text-sm font-bold">{store.openingHours}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon icon={faPhone} className="text-black" />
                  <span className="text-sm font-bold">{store.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-black" />
                  <span className="text-sm font-bold">{store.email}</span>
                </div>
              </div>
              </div>
              <div className="mt-2 text-xs text-gray-400 font-semibold">
                <p>Certified service point:</p>
              </div>
              {/* Logo-brand */}
              <div className="flex items-center gap-2 mt-1">
                <img src="/temp/hp.png" alt="HP" className="w-15 h-15 object-contain" />
                <img src="/temp/lenovo.png" alt="Lenovo" className="w-6 h-6 object-contain" />
                <img src="/temp/asus.png" alt="Asus" className="w-6 h-6 object-contain" />
                <img src="/temp/msi.png" alt="MSI" className="w-6 h-6 object-contain" />
                <img src="/temp/acer.png" alt="Acer" className="w-6 h-6 object-contain" />
                <img src="/temp/zyrex.png" alt="Zyrex" className="w-6 h-6 object-contain" />
                <span className="text-xs bg-gray-200 px-2 py-0.5 rounded text-gray-800 font-semibold">5+</span>
              </div>

              {/* Tombol Aksi */}
              <div className="flex gap-3 mt-4">
                {/* Perubahan di sini: Mengganti <a> dengan <button> dan memanggil onStoreClick */}
                <button
                  onClick={() => onStoreClick(store)} // Memanggil onStoreClick saat tombol diklik
                  className="flex-auto bg-primary-900 hover:bg-blue-700 text-white text-center rounded-md py-2 font-semibold text-sm"
                >
                  Google Maps
                </button>
                <button
                  className="flex-auto border border-primary-900 rounded-md py-2 font-semibold text-sm text-primary-900 hover:bg-gray-100"
                  // Event handler chat WA bisa ditambahkan di sini
                >
                  Chat Toko
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Google Maps */}
      <div className="flex-1 rounded overflow-hidden border shadow-lg">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={zoom}
          options={{ streetViewControl: false, fullscreenControl: false }}
        >
          {storeLocations.map((store: Store) => (
            <Marker
              key={store.id}
              position={{ lat: store.lat, lng: store.lng }}
              onClick={() => setSelectedStore(store)}
            />
          ))}

          {selectedStore && (
            <InfoWindow
              position={{ lat: selectedStore.lat, lng: selectedStore.lng }}
              onCloseClick={() => setSelectedStore(null)}
            >
              <div style={{ width: 200 }}>
                {/* <img
                  src={selectedStore.image}
                  alt={selectedStore.name}
                  style={{ width: "100%", height: "auto", display: "block", borderTopLeftRadius: 8, borderTopRightRadius: 8, padding: 0, margin: 0 }}
                /> */}
                <h3 className="font-bold mb-1 mt-1 text-sm">{selectedStore.name}</h3>
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

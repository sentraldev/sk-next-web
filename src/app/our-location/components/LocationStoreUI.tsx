"use client";

import React, { useState, useCallback } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";

interface Store {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  phone: string;
  image: string;
  googleMapsUrl: string;
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
    name: "Sentral Komputer (Kantor Pusat)",
    lat: -6.197745,
    lng: 106.935908,
    address: "Taman Pulo Indah Jl. Manggis No.34 blok M, RT.19/RW.7, Penggilingan, Cakung, East Jakarta City, Jakarta 13940",
    phone: "081977774057",
    image: "/temp/toko.png",
    googleMapsUrl: "https://maps.app.goo.gl/uSBykUGvZsyshuka6",
  },
];

const LocationStoreUI: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>(centerDefault);
  const [zoom, setZoom] = useState<number>(5);

  const onStoreClick = useCallback((store: Store) => {
    setMapCenter({ lat: store.lat, lng: store.lng });
    setZoom(15);
    setSelectedStore(store);
  }, []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div className="flex flex-col md:flex-row gap-6 md:h-[600px] p-4">
      {/* Daftar lokasi toko */}
      <div className="md:w-1/3 overflow-y-auto space-y-6 border rounded p-4 bg-white shadow-lg">
        {storeLocations.map((store: Store) => (
          <div
            key={store.id}
            className="flex gap-4 cursor-pointer hover:bg-gray-100 p-3 rounded"
            onClick={() => onStoreClick(store)}
          >
            <img src={store.image} alt={store.name} className="rounded w-24 h-24 object-cover" />
            <div className="flex flex-col justify-between">
              <h3 className="font-bold text-lg">{store.name}</h3>
              <p className="text-sm text-gray-600">{store.address}</p>
              <p className="text-sm text-gray-600">Tel: {store.phone}</p>
              <div className="flex gap-2 mt-2">
                <a
                  href={store.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-xs"
                >
                  Google Maps
                </a>
                <button className="bg-gray-200 px-3 py-1 rounded text-xs">Detail</button>
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
              <div>
                <img
                  src={selectedStore.image}
                  alt={selectedStore.name}
                  className="w-200 object-cover rounded mb-2"
                />
                <h4 className="font-bold">{selectedStore.name}</h4>
                <p>{selectedStore.address}</p>
                <p>Tel: {selectedStore.phone}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </div>
  );
};

export default LocationStoreUI;

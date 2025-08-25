"use client";

import React, { useState } from "react";
import storesData from "@/json/stores";

const GOOGLE_API_KEY = "AIzaSyAYF5Ko2EvkimIVHtMXV4rqvI_KD1qJzm8";

function Branch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedStores, setDisplayedStores] = useState(2);
  const [filteredStores, setFilteredStores] = useState(
    storesData.slice(0, 2)
  );
  const [userLocation, setUserLocation] = useState(null);
  const [selectedStore, setSelectedStore] = useState(storesData[0]);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = storesData.filter(
      (store) =>
        store.storeName.toLowerCase().includes(term) ||
        store.storeAddress.toLowerCase().includes(term)
    );
    setFilteredStores(filtered.slice(0, displayedStores));
  };

  const findNearestStore = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/geolocation/v1/geolocate?key=${GOOGLE_API_KEY}`,
        { method: "POST" }
      );
      const data = await response.json();
      const { lat, lng } = data.location;
      setUserLocation({ latitude: lat, longitude: lng });

      let closestStore = null;
      let shortestDistance = Infinity;

      storesData.forEach((store) => {
        const distance = calculateDistance(
          lat,
          lng,
          parseFloat(store.location.latitude),
          parseFloat(store.location.longitude)
        );
        if (distance < shortestDistance) {
          shortestDistance = distance;
          closestStore = store;
        }
      });

      setSelectedStore(closestStore);
      setFilteredStores([closestStore]);
    } catch (error) {
      console.error("Geolocation API Error:", error);
      alert("Unable to retrieve location. Please enable location services.");
    }
  };

  return (
    <section className="flex flex-col md:flex-row gap-8 px-4">
      {/* Left column */}
      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-2 mb-5">
          <input
            type="text"
            placeholder="Search for a branch..."
            value={searchTerm}
            onChange={handleSearch}
            className="flex-grow border shadow-sm rounded-full py-2 px-4 focus:outline-none text-sm text-[#2C2E74] placeholder-gray-400"
          />
          <button
            onClick={findNearestStore}
            className="bg-[#237DC0] text-white rounded-full py-2 px-4 text-sm font-medium hover:bg-[#2C2E74] transition duration-300 ease-out"
          >
            Use My Location
          </button>
        </div>

        <div className="mt-4">
          {filteredStores.map((store, index) => (
            <div
              key={index}
              onClick={() => setSelectedStore(store)}
              className="p-4 border rounded-md shadow-sm hover:shadow-md transition mb-4 cursor-pointer"
            >
              <h3 className="font-bold text-[#2C2E74]">{store.storeName}</h3>
              <p className="text-sm text-gray-600">{store.storeAddress}</p>
              <p className="text-sm text-gray-500">
                Contact: {store.contactPerson}
              </p>
              <p className="text-sm text-gray-500">
                Hours: {store.workingHours}
              </p>
            </div>
          ))}

          {filteredStores.length < storesData.length && (
            <button
              onClick={() => {
                setDisplayedStores((prev) => prev + 3);
                setFilteredStores(
                  storesData.slice(0, displayedStores + 3)
                );
              }}
              className="w-full bg-[#237DC0] text-white py-2 px-4 rounded-md font-medium hover:bg-[#2C2E74] transition duration-300 ease-out mt-4"
            >
              Load More
            </button>
          )}
        </div>
      </div>

      {/* Right column: Map */}
      <div className="w-full md:w-1/2">
        <div className="h-[500px] bg-gray-100 rounded-md shadow-md">
          {selectedStore && (
            <iframe
              title={selectedStore.storeName}
              src={`https://www.google.com/maps?q=${selectedStore.location.latitude},${selectedStore.location.longitude}&z=15&output=embed`}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
}

export default Branch;

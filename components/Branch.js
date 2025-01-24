
'use client'
import React, { useState } from 'react';
import stores from '@/json/stores'; // Import the JSON file

function Branch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedStores, setDisplayedStores] = useState(2); // Initial store limit
  const [filteredStores, setFilteredStores] = useState(stores.slice(0, 2)); // Limit initial stores
  const [userLocation, setUserLocation] = useState(null); // User's coordinates
  const [selectedStore, setSelectedStore] = useState(filteredStores[0]); // Default map store

  // Function to calculate distance between two points using the Haversine formula
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180; // Convert degrees to radians

    const R = 6371; // Radius of Earth in kilometers
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
  };

  // Function to search for stores
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = stores.filter((store) =>
      store.storeName.toLowerCase().includes(term) || store.storeAddress.toLowerCase().includes(term)
    );
    setFilteredStores(filtered.slice(0, displayedStores)); // Keep limited display
    setSelectedStore(filtered[0]); // Update map to first store in filtered list
  };

  // Function to load more stores
  const loadMoreStores = () => {
    setDisplayedStores((prev) => prev + 3);
    const newDisplayedStores = stores.slice(0, displayedStores + 3);
    setFilteredStores(newDisplayedStores);
    setSelectedStore(newDisplayedStores[0]); // Update map to the first store in the expanded list
  };

  // Function to find the nearest store based on user location
  const findNearestStore = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });

        let closestStore = null;
        let shortestDistance = Infinity;

        stores.forEach((store) => {
          const distance = calculateDistance(
            parseFloat(latitude),
            parseFloat(longitude),
            parseFloat(store.location.latitude),
            parseFloat(store.location.longitude)
          );

          if (distance < shortestDistance) {
            shortestDistance = distance;
            closestStore = store;
          }
        });

        setSelectedStore(closestStore); // Update map to nearest store
        setFilteredStores([closestStore]); // Display only the nearest store
      },
      (error) => {
        alert('Unable to retrieve your location. Please enable location services.');
        console.error(error);
      }
    );
  };

  return (
    <section className="flex flex-col md:flex-row gap-8 px-4">
      {/* Left: Search and Store List */}
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

        {/* Display Stores */}
        <div className="mt-4">
          {filteredStores.length > 0 ? (
            <>
              {filteredStores.map((store) => (
                <div
                  key={store.id}
                  onClick={() => setSelectedStore(store)} // Update selected store on click
                  className="p-4 border rounded-md shadow-sm hover:shadow-md transition mb-4 cursor-pointer"
                >
                  <h3 className="font-bold text-[#2C2E74]">{store.storeName}</h3>
                  <p className="text-sm text-gray-600">{store.storeAddress}</p>
                  <p className="text-sm text-gray-500">Contact: {store.contactPerson}</p>
                  <p className="text-sm text-gray-500">Hours: {store.workingHours}</p>
                </div>
              ))}
              {filteredStores.length < stores.length && (
                <button
                  onClick={loadMoreStores}
                  className="w-full bg-[#237DC0] text-white py-2 px-4 rounded-md font-medium hover:bg-[#2C2E74] transition duration-300 ease-out mt-4"
                >
                  Load More
                </button>
              )}
            </>
          ) : (
            <p className="text-gray-500">No branches found.</p>
          )}
        </div>
      </div>

      {/* Right: Map */}
      <div className="w-full md:w-1/2">
        <div className="h-[500px] bg-gray-100 rounded-md shadow-md flex items-center justify-center">
          {selectedStore ? (
            <iframe
              title={selectedStore.storeName}
              src={`https://www.google.com/maps?q=${selectedStore.location.latitude},${selectedStore.location.longitude}&z=15&output=embed`}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
            ></iframe>
          ) : (
            <p className="text-gray-500">Select a branch or use your location to find the nearest one.</p>
          )}
        </div>

        {/* Get Directions Button */}
        {userLocation && selectedStore && (
          <button
            onClick={() =>
              window.open(
                `https://www.google.com/maps/dir/?api=1&origin=${userLocation.latitude},${userLocation.longitude}&destination=${selectedStore.location.latitude},${selectedStore.location.longitude}&travelmode=driving`,
                '_blank'
              )
            }
            className="w-full border-2 border-[#237DC0] text-[#237DC0] py-3 px-4 rounded-md font-medium hover:bg-[#237DC0] hover:text-white transition duration-300 ease-out mt-6"
          >
            Get Directions
          </button>
        )}
      </div>
    </section>
  );
}

export default Branch;

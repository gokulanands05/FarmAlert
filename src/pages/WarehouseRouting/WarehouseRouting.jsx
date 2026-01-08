import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./WarehouseRouting.css";

const INDIA_LOCATIONS = [
  { city: "Coimbatore", state: "Tamil Nadu", country: "India", lat: 11.0168, lng: 76.9558 },
  { city: "Chennai", state: "Tamil Nadu", country: "India", lat: 13.0827, lng: 80.2707 },
  { city: "Ahmedabad", state: "Gujarat", country: "India", lat: 23.0225, lng: 72.5714 },
  { city: "Bangalore", state: "Karnataka", country: "India", lat: 12.9716, lng: 77.5946 },
  { city: "Trichy", state: "Tamil Nadu", country: "India", lat: 10.7905, lng: 78.7047 },
  { city: "Salem", state: "Tamil Nadu", country: "India", lat: 11.6643, lng: 78.146 },
];

const warehouseData = [
  {
    id: 1,
    name: "GreenField Cold Storage",
    city: "Chennai",
    area: "Tambaram",
    distance: "2.3 km",
    storage: "Cold Storage",
    price: "₹2.5 / kg / month",
    capacity: "Available",
    position: [12.9249, 80.1000],
  },
  {
    id: 2,
    name: "Agro Dry Warehouse",
    city: "Chennai",
    area: "Perungalathur",
    distance: "3.1 km",
    storage: "Dry Storage",
    price: "₹1.4 / kg / month",
    capacity: "Limited",
    position: [12.9116, 80.0836],
  },
  {
    id: 3,
    name: "Central Market Warehouse",
    city: "Chennai",
    area: "Koyambedu",
    distance: "9 km",
    storage: "Mixed",
    price: "Price not available",
    capacity: "Full",
    position: [13.0695, 80.2088],
  },
];

const WarehouseRouting = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [filtered, setFiltered] = useState(warehouseData);
  const [error, setError] = useState("");
  const [mapCenter, setMapCenter] = useState([13.0827, 80.2707]);

  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    const q = query.toLowerCase();
    const matches = INDIA_LOCATIONS.filter(loc =>
      loc.city.toLowerCase().startsWith(q)
    );

    setSuggestions(matches);
  }, [query]);

  const handleSearch = () => {
    const result = warehouseData.filter(w =>
      w.city.toLowerCase().includes(query.toLowerCase())
    );

    if (result.length === 0) {
      setFiltered([]);
      setError("No warehouses found. Try nearby locations.");
    } else {
      setError("");
      setFiltered(result);
    }

    const city = INDIA_LOCATIONS.find(
      l => l.city.toLowerCase() === query.toLowerCase()
    );
    if (city) {
      setMapCenter([city.lat, city.lng]);
    }
  };

  return (
    <div className="wr-page">

      {/* HERO */}
      <section className="wr-hero">
        <h1>Finding Warehouses</h1>
        <p>
          Smart warehouse discovery with location, pricing, distance and
          availability all inside FarmAlert.
        </p>
      </section>

      {/* SEARCH */}
      <div className="wr-search-wrapper">
        <div className="wr-search">
          <input
            type="text"
            placeholder="Search city (eg: Coimbatore)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>

          {suggestions.length > 0 && (
            <ul className="wr-suggestions">
              {suggestions.map((loc, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setQuery(loc.city);
                    setSuggestions([]);
                  }}
                >
                  {loc.city}, {loc.state}, {loc.country}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

{error && (
  <div className="wr-error-box">
    <p className="wr-error-title">No warehouses found 😕</p>
    <p className="wr-error-text">
      We couldn’t find warehouses in this location.
    </p>

    <div className="wr-error-suggest">
      Try nearby locations:
      <span>Chennai</span>
      <span>Bangalore</span>
      <span>Coimbatore</span>
    </div>
  </div>
)}

      {/* MAP */}
      <section className="wr-map">
        <MapContainer center={mapCenter} zoom={11} scrollWheelZoom={false}>
          <TileLayer
            attribution="© OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {filtered.map(w => (
            <Marker key={w.id} position={w.position}>
              <Popup>
                <strong>{w.name}</strong><br />
                {w.area}, {w.city}<br />
                {w.storage}<br />
                {w.price}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>

      {/* CARDS */}
      <section className="wr-list">
        {filtered.map(w => (
          <div key={w.id} className="wr-card">
            <h3>{w.name}</h3>

            <span className={`wr-badge ${w.capacity.toLowerCase()}`}>
              {w.capacity}
            </span>

            <p><b>Location:</b> {w.area}, {w.city}</p>
            <p><b>Distance:</b> {w.distance}</p>
            <p><b>Storage:</b> {w.storage}</p>
            <p><b>Price:</b> {w.price}</p>

            <button className="wr-btn">Request Storage</button>
          </div>
        ))}
      </section>

    </div>
  );
};

export default WarehouseRouting;

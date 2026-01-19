import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./WarehouseRouting.css";
import axios from "axios";
import { submitStorageRequest } from "../../services/requestApi";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const WarehouseRouting = () => {
  const [query, setQuery] = useState("");
  const [warehouses, setWarehouses] = useState([]);
  const [error, setError] = useState("");
  const [mapCenter, setMapCenter] = useState([13.0827, 80.2707]);
  const [loading, setLoading] = useState(false);

  // 🔹 MODAL STATES
  const [showForm, setShowForm] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);

  const [formData, setFormData] = useState({
    userName: "",
    phone: "",
    city: "",
    message: ""
  });

  // 🔹 SEARCH
  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        `${API_BASE}/api/warehouses`,
        { params: { city: query } }
      );

      if (res.data.length === 0) {
        setWarehouses([]);
        setError("No warehouses found for this location");
        return;
      }

      setWarehouses(res.data);
      setMapCenter([res.data[0].lat, res.data[0].lng]);
    } catch (err) {
      console.error(err);
      setError("Backend error. Server not responding.");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 SUBMIT REQUEST
  const handleSubmitRequest = async () => {
    try {
      await submitStorageRequest({
        ...formData,
        warehouseId: selectedWarehouse._id
      });

      alert("Request sent successfully ✅");
      setShowForm(false);

      setFormData({
        userName: "",
        phone: "",
        city: "",
        message: ""
      });
    } catch (err) {
      console.error(err);
      alert("Request failed ❌");
    }
  };

  return (
    <div className="wr-page">

      {/* HERO */}
      <section className="wr-hero">
        <h1>Finding Warehouses</h1>
        <p>Smart warehouse discovery powered by FarmAlert</p>
      </section>

      {/* SEARCH */}
      <div className="wr-search-wrapper">
        <div className="wr-search">
          <input
            type="text"
            placeholder="Search city, area for warehouses..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/* ERROR */}
      {error && <p className="wr-error-box">{error}</p>}

      {/* MAP */}
      <section className="wr-map">
        <MapContainer center={mapCenter} zoom={11} scrollWheelZoom={false}>
          <TileLayer
            attribution="© OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {warehouses.map(w => (
            <Marker key={w._id} position={[w.lat, w.lng]}>
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

      {/* LIST */}
      <section className="wr-list">
        {loading && <p>Loading...</p>}

        {warehouses.map(w => (
          <div key={w._id} className="wr-card">
            <h3>{w.name}</h3>
            <p><b>Location:</b> {w.area}, {w.city}</p>
            <p><b>Storage:</b> {w.storage}</p>
            <p><b>Price:</b> {w.price}</p>

            <button
              className="wr-btn"
              onClick={() => {
                setSelectedWarehouse(w);
                setFormData({ ...formData, city: w.city });
                setShowForm(true);
              }}
            >
              Request Storage
            </button>
          </div>
        ))}
      </section>

      {/* 🔹 MODAL FORM */}
      {showForm && (
        <div className="wr-modal">
          <div className="wr-modal-box">

            <h3>Request Storage</h3>
            <p className="wr-modal-sub">
              {selectedWarehouse?.name}
            </p>

            <input
              placeholder="Your Name"
              value={formData.userName}
              onChange={(e) =>
                setFormData({ ...formData, userName: e.target.value })
              }
            />

            <input
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />

            <input
              placeholder="City"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />

            <textarea
              placeholder="Message (eg: Need cold storage for 2 months)"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button className="wr-btn" onClick={handleSubmitRequest}>
              Submit Request
            </button>

            <button
              className="wr-cancel"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default WarehouseRouting;

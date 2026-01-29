import { useState } from "react";
import "./DemandAnalysis.css";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";

const DemandAnalysis = () => {
  const [crop, setCrop] = useState("");
  const [area, setArea] = useState("");
  const [result, setResult] = useState(null);
  const [filteredAreas, setFilteredAreas] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const areaData = {
    ERODE: [
      "Bhavani",
      "Gobichettipalayam",
      "Kodumudi",
      "Perundurai",
      "Sathyamangalam",
      "Erode City",
      "Anthiyur",
      "Nambiyur",
    ],
    Nagapattinam: [
      "Nagapattinam Town",
      "Vedaranyam",
      "Thirukkuvalai",
      "Kilvelur",
      "Sirkali",
      "Mayiladuthurai",
      "Tharangambadi",
      "Porayur",
    ],
  };

  const areaCoordinates = {
    ERODE: {
      center: [11.3411, 77.7172],
      areas: [
        { name: "Bhavani", lat: 11.4533, lng: 77.6833, demand: "High" },
        { name: "Gobichettipalayam", lat: 11.1833, lng: 76.8667, demand: "Medium" },
        { name: "Kodumudi", lat: 10.8667, lng: 78.3333, demand: "High" },
        { name: "Perundurai", lat: 11.3333, lng: 77.8333, demand: "Medium" },
        { name: "Sathyamangalam", lat: 11.2167, lng: 77.0333, demand: "High" },
        { name: "Erode City", lat: 11.3411, lng: 77.7172, demand: "High" },
        { name: "Anthiyur", lat: 11.5833, lng: 77.5833, demand: "Medium" },
        { name: "Nambiyur", lat: 11.0667, lng: 77.6667, demand: "Medium" },
      ],
    },
    Nagapattinam: {
      center: [11.5, 79.8667],
      areas: [
        { name: "Nagapattinam Town", lat: 11.856, lng: 79.8711, demand: "High" },
        { name: "Vedaranyam", lat: 10.2381, lng: 79.8487, demand: "Medium" },
        { name: "Thirukkuvalai", lat: 11.1667, lng: 79.9, demand: "Medium" },
        { name: "Kilvelur", lat: 11.0833, lng: 79.8167, demand: "High" },
        { name: "Sirkali", lat: 11.5667, lng: 79.65, demand: "Medium" },
        { name: "Mayiladuthurai", lat: 11.1, lng: 79.7167, demand: "High" },
        { name: "Tharangambadi", lat: 11.0067, lng: 79.8533, demand: "Medium" },
        { name: "Porayur", lat: 11.35, lng: 79.5833, demand: "Medium" },
      ],
    },
  };

  const cityData = {
    ERODE: {
      name: "ERODE",
      district: "Tamil Nadu",
      altitude: "412 ft (125 m)",
      temperature: "28-35°C",
      demandLevel: "High",
      crops: "Cotton, Sugarcane, Rice",
      status: "high",
    },
    Nagapattinam: {
      name: "Nagapattinam",
      district: "Tamil Nadu",
      altitude: "5 ft (1.5 m)",
      temperature: "25-32°C",
      demandLevel: "Medium",
      crops: "Rice, Coconut, Fish",
      status: "medium",
    },
  };

  const getDistrictByArea = (selectedArea) => {
    if (areaData.ERODE.includes(selectedArea)) return "ERODE";
    if (areaData.Nagapattinam.includes(selectedArea)) return "Nagapattinam";
    return null;
  };

  const handleAreaSearch = (value) => {
    setSearchInput(value);
    if (value.trim() === "") {
      setFilteredAreas([]);
      return;
    }

    const allAreas = [...areaData.ERODE, ...areaData.Nagapattinam];
    const filtered = allAreas.filter((a) =>
      a.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredAreas(filtered);
  };

  const selectArea = (selectedArea) => {
    setArea(selectedArea);
    setSearchInput(selectedArea);
    setFilteredAreas([]);
  };

  const handleAnalysis = (e) => {
    e.preventDefault();
    if (!crop || !area) {
      alert("Please select both crop and area");
      return;
    }

    const demandData = {
      high: ["Wheat", "Rice", "Corn", "Cotton", "Sugarcane"],
      oversupply: ["Potato", "Onion", "Tomato"],
    };

    const isDemand = demandData.high.includes(crop);
    setResult({
      crop,
      area,
      status: isDemand ? "High Demand" : "Oversupply Risk",
      isDemand,
    });
  };

  const selectedDistrict = area ? getDistrictByArea(area) : null;
  const selectedCityData = selectedDistrict ? cityData[selectedDistrict] : null;
  const selectedCoordinates = selectedDistrict ? areaCoordinates[selectedDistrict] : null;
  const selectedAreaDetail = selectedCoordinates?.areas.find(
    (a) => a.name === area
  );

  return (
    <div className="analysis-page">
      <h1>Demand Analysis</h1>
      <p>Check demand and oversupply status for your crops</p>

      <form className="analysis-form" onSubmit={handleAnalysis}>
        <select
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
          required
        >
          <option value="">Select Crop</option>
          <option>Wheat</option>
          <option>Rice</option>
          <option>Corn</option>
          <option>Cotton</option>
          <option>Sugarcane</option>
          <option>Potato</option>
          <option>Onion</option>
          <option>Tomato</option>
        </select>

        <div className="search-area-wrapper">
          <input
            type="text"
            placeholder="Search or select area..."
            value={searchInput}
            onChange={(e) => handleAreaSearch(e.target.value)}
            required
          />
          {filteredAreas.length > 0 && (
            <div className="area-suggestions">
              {filteredAreas.map((suggestion, idx) => (
                <div
                  key={idx}
                  className="suggestion-item"
                  onClick={() => selectArea(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>

        <button type="submit">Analyze Demand</button>
      </form>

      {result && (
        <div className="result">
          <h2>
            {result.crop} in {result.area}
          </h2>
          <p className={result.isDemand ? "demand" : "oversupply"}>
            Status: {result.status}
          </p>
        </div>
      )}

      {/* SHOW ONLY SELECTED AREA CARD */}
      {selectedCityData && area && (
        <div className="city-info-cards">
          <div className="city-card">
            <h3>{selectedCityData.name}</h3>
            <p>
              <span className="label">District:</span>
              <span className="value">{selectedCityData.district}</span>
            </p>
            <p>
              <span className="label">Selected Area:</span>
              <span className="value">{area}</span>
            </p>
            <p>
              <span className="label">Altitude:</span>
              <span className="value">{selectedCityData.altitude}</span>
            </p>
            <p>
              <span className="label">Temperature:</span>
              <span className="value">{selectedCityData.temperature}</span>
            </p>
            <p>
              <span className="label">Main Crops:</span>
              <span className="value">{selectedCityData.crops}</span>
            </p>
            <span className={`demand-badge ${selectedCityData.status}`}>
              Demand: {selectedCityData.demandLevel}
            </span>
          </div>
        </div>
      )}

      {/* SHOW ONLY SELECTED AREA MAP */}
      {selectedCoordinates && area && (
        <div className="map-section">
          <h2>{selectedDistrict} District - {area}</h2>
          <p>Viewing demand areas in {selectedDistrict} district</p>

          <div className="maps-container">
            <div className="map-card">
              <h3>{selectedDistrict} District</h3>
              <div className="map-wrapper">
                <MapContainer
                  center={selectedCoordinates.center}
                  zoom={10}
                  scrollWheelZoom={true}
                >
                  <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {selectedCoordinates.areas.map((areaItem) => (
                    <CircleMarker
                      key={areaItem.name}
                      center={[areaItem.lat, areaItem.lng]}
                      radius={
                        areaItem.name === area
                          ? 12
                          : areaItem.demand === "High"
                          ? 10
                          : 7
                      }
                      fillColor={
                        areaItem.name === area
                          ? "#1b5e20"
                          : areaItem.demand === "High"
                          ? "red"
                          : "goldenrod"
                      }
                      color={
                        areaItem.name === area
                          ? "darkgreen"
                          : areaItem.demand === "High"
                          ? "darkred"
                          : "orange"
                      }
                      weight={areaItem.name === area ? 3 : 2}
                      opacity={0.8}
                      fillOpacity={areaItem.name === area ? 0.8 : 0.6}
                    >
                      <Popup>
                        <strong>{areaItem.name}</strong>
                        <p>
                          Demand:{" "}
                          <span
                            className={
                              areaItem.demand === "High"
                                ? "demand"
                                : "oversupply"
                            }
                          >
                            {areaItem.demand}
                          </span>
                        </p>
                      </Popup>
                    </CircleMarker>
                  ))}
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemandAnalysis;

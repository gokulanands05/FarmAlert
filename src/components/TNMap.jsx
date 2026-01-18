import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import marketStatus from "../data/marketStatus";

// 🔴 Demand icon
const redIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

// 🟡 Oversupply icon
const yellowIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

// 📍 Market coordinates
const marketCoordinates = {
  "Erode Central Market": [11.341, 77.717],
  "Perundurai Vegetable Market": [11.275, 77.583],
  "Gobichettipalayam Market": [11.454, 77.442],
  "Sathyamangalam Market": [11.505, 77.238],
  "Bhavani Market": [11.445, 77.682],

  "Nagapattinam Main Market": [10.766, 79.842],
  "Vedaranyam Market": [10.374, 79.850],
  "Kilvelur Market": [10.872, 79.740],
  "Thirukkuvalai Market": [10.728, 79.709],
  "Velankanni Market": [10.683, 79.847]
};

// 🎯 District center points (for auto focus)
const districtCenters = {
  Erode: [11.341, 77.717],
  Nagapattinam: [10.766, 79.842]
};

function TNMap({ district, crop }) {
  const cropData =
    district && crop && marketStatus[district]?.[crop]
      ? marketStatus[district][crop]
      : null;

  // 🔑 KEY forces map to refresh when district or crop changes
  const mapKey = `${district}-${crop}`;

  return (
    <MapContainer
      key={mapKey}
      center={districtCenters[district] || [11, 78]}
      zoom={8}
      style={{ height: "450px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* 🔴 Demand markers */}
      {cropData &&
        cropData.demand.map((market, i) => {
          const pos = marketCoordinates[market];
          if (!pos) return null;

          return (
            <Marker key={`d-${i}`} position={pos} icon={redIcon}>
              <Popup>
                🔴 <b>High Demand</b>
                <br />
                {market}
              </Popup>
            </Marker>
          );
        })}

      {/* 🟡 Oversupply markers */}
      {cropData &&
        cropData.oversupply.map((market, i) => {
          const pos = marketCoordinates[market];
          if (!pos) return null;

          return (
            <Marker key={`o-${i}`} position={pos} icon={yellowIcon}>
              <Popup>
                🟡 <b>Oversupply</b>
                <br />
                {market}
              </Popup>
            </Marker>
          );
        })}
    </MapContainer>
  );
}

export default TNMap;

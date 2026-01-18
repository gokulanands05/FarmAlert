import { useState } from "react";
import "./DemandAnalysis.css";
import marketStatus from "../../data/marketStatus.js";
import TNMap from "../../components/TNMap";

function DemandAnalysis() {
  const [district, setDistrict] = useState("");
  const [crop, setCrop] = useState("");
  const [result, setResult] = useState(null);

  const analyze = () => {
    if (district && crop) {
      setResult(marketStatus[district][crop]);
    }
  };

  return (
    <div className="analysis-page">
      <h1>District-wise Demand & Oversupply</h1>

      <div className="analysis-form">
        <input placeholder="Your Name" />
        <input value="Tamil Nadu" disabled />

        <select onChange={(e) => setDistrict(e.target.value)}>
          <option value="">Select District</option>
          <option value="Erode">Erode</option>
          <option value="Nagapattinam">Nagapattinam</option>
        </select>

        <select onChange={(e) => setCrop(e.target.value)}>
          <option value="">Select Crop</option>
          <option>Tomato</option>
          <option>Onion</option>
          <option>Green Chilli</option>
          <option>Groundnut</option>
          <option>Turmeric</option>
        </select>

        <button onClick={analyze}>Analyze</button>
      </div>

      {result && (
        <>
          <div className="result">
            <h3>🔴 High Demand Markets</h3>
            <ul>
              {result.demand.map((m, i) => (
                <li key={i} className="demand">{m}</li>
              ))}
            </ul>

            <h3>🟡 Oversupply Markets</h3>
            <ul>
              {result.oversupply.map((m, i) => (
                <li key={i} className="oversupply">{m}</li>
              ))}
            </ul>
          </div>

          <h2 style={{ marginTop: "30px" }}>Tamil Nadu Map</h2>
          <TNMap district={district} />
        </>
      )}
    </div>
  );
}

export default DemandAnalysis;

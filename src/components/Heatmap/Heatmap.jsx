import React from "react";
import { Map, HeatMap, GoogleApiWrapper } from "google-maps-react";
import { getDefaultProps } from "./heatmap.service.js";

import "./Heatmap.scss";

function Heatmap({ center, zoom, points, google: googleConfig, gradient }) {
  return (
    <div className="heatmap__container">
      <Map google={googleConfig} zoom={zoom} initialCenter={center}>
        <HeatMap
          positions={points}
          opacity={1}
          radius={40}
          gradient={gradient}
        />
      </Map>
    </div>
  );
}

HeatMap.defaultProps = getDefaultProps();

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  libraries: ["visualization"],
})(Heatmap);

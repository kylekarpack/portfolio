"use client";

import { Map } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapboxMap = () => (
  <Map
    mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
    mapStyle="mapbox://styles/mapbox/outdoors-v10"
    initialViewState={{
      latitude: 47.6498,
      longitude: -122.3458,
      zoom: 11,
    }}
    style={{ height: "100%" }}
  />
);

export default MapboxMap;

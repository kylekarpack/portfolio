import { Map } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

/**
 * Interactive Mapbox map island, hydrated with `client:visible` from the
 * Contact stub so the ~264 KiB gzip chunk only loads when the map is scrolled
 * near. Height reserved with the same wrapper as the old `LazyContactMap`.
 */
export const MapboxIsland = () => (
  <div className="h-64">
    <Map
      mapboxAccessToken={import.meta.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      mapStyle="mapbox://styles/mapbox/outdoors-v10"
      initialViewState={{
        latitude: 47.6498,
        longitude: -122.3458,
        zoom: 11,
      }}
      style={{ height: "100%" }}
    />
  </div>
);

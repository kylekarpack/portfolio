import { MetaFunction } from "@remix-run/server-runtime";
import { useState } from "react";
import { SITE_AUTHOR, SITE_TITLE } from "~/config/constants";
import { getMetaData } from "~/metadata";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export const meta: MetaFunction = (args) => {
  return {
    ...getMetaData({
      canonical: args.parentsData?.root?.canonical,
      description: `Contact ${SITE_AUTHOR}, a Software Engineer in Seattle, Washington`,
      title: `Contact | ${SITE_TITLE}`,
    }),
  };
};

export default function () {
  const [map, setMap] = useState({
    mapboxApiAccessToken:
      "pk.eyJ1Ijoia3lsZWthcnBhY2siLCJhIjoiY2pvZXZmNTh4MDZ2dzN3bm1pbmk1dDlmZiJ9.Gapqs5j98RUsHOBl2rqOGQ",
    mapStyle: "mapbox://styles/mapbox/outdoors-v10",
    viewport: {
      width: "100%",
      height: "40vh",
      latitude: 47.6798,
      longitude: -122.3258,
      zoom: 11,
    },
  });
  return (
    <div>
      <ReactMapGL
        mapboxAccessToken={map.mapboxApiAccessToken}
        mapStyle={map.mapStyle}
        onViewportChange={(viewport) => setMap({ ...map, viewport })}
        {...map.viewport}
      />
    </div>
  );
}

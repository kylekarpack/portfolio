import type { LinksFunction, MetaFunction } from "@remix-run/node";
import styles from "mapbox-gl/dist/mapbox-gl.css?url";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Map } from "react-map-gl";
import ContactForm from "~/components/ContactForm";
import { SITE_AUTHOR, SITE_TITLE } from "~/config/constants";
import { getMetaData } from "~/metadata";

export const links: LinksFunction = () => [
  {
    href: styles,
    media: "screen",
    rel: "stylesheet",
  },
];

export const meta: MetaFunction = () => {
  return [
    {
      ...getMetaData({
        description: `Contact ${SITE_AUTHOR}, a Software Engineer in Seattle, Washington`,
        title: `Contact | ${SITE_TITLE}`,
      }),
    },
  ];
};

export default function () {
  return (
    <>
      <div className="h-64">
        <Map
          mapboxAccessToken="pk.eyJ1Ijoia3lsZWthcnBhY2siLCJhIjoiY2pvZXZmNTh4MDZ2dzN3bm1pbmk1dDlmZiJ9.Gapqs5j98RUsHOBl2rqOGQ"
          mapStyle="mapbox://styles/mapbox/outdoors-v10"
          initialViewState={{
            latitude: 47.6498,
            longitude: -122.3458,
            zoom: 11,
          }}
          style={{ height: "100%" }}
        />
      </div>

      <div className="mx-auto my-12 max-w-lg px-8 md:px-0">
        <GoogleReCaptchaProvider
          reCaptchaKey="6LcU0XoUAAAAAA2IMX6btadVmmBjNfz-tgYSzgC0"
          scriptProps={{
            async: true,
            defer: true,
          }}>
          <ContactForm />
        </GoogleReCaptchaProvider>
      </div>
    </>
  );
}

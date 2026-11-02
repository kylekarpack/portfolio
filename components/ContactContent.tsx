"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactForm from "@/components/ContactForm";
import { LazyContactMap } from "@/components/LazyContactMap";

export const ContactContent = () => {
  return (
    <>
      <LazyContactMap />

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
};

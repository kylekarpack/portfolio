import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ContactForm } from "./ContactForm";

/**
 * Contact form + reCAPTCHA provider island, hydrated with `client:idle` from
 * the Contact stub. Container wrapper included for stub simplicity.
 */
export const ContactFormIsland = () => (
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
);

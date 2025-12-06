import { useForm } from "@formcarry/react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const ContactForm = () => {
  const { state, submit } = useForm({
    id: "S52M7fPOAJ",
  });
  const { executeRecaptcha } = useGoogleReCaptcha();

  const repopulateForm = async (currentTarget: EventTarget & HTMLFormElement) => {
    if (!executeRecaptcha) {
      throw new Error("Could not initialize ReCaptcha");
    }

    // Add the token to the form
    const contactPageToken = await executeRecaptcha("contactPage");
    const tokenElement = document.createElement("input");
    tokenElement.name = "g-recaptcha-response";
    tokenElement.type = "hidden";
    tokenElement.value = contactPageToken;
    currentTarget.append(tokenElement);

    return currentTarget;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const cachedCurrentTarget = e.currentTarget; // Cache for after default prevention
    e.preventDefault();
    e.currentTarget = await repopulateForm(cachedCurrentTarget);
    submit(e);
  };

  // Success message
  if (state.submitted) {
    return <div>Thank you! I have received your submission and will reply shortly.</div>;
  }

  return (
    <>
      <h1 className="mb-4 text-2xl text-gray-700">Contact Me</h1>
      <form className="flex flex-col justify-center" onSubmit={handleSubmit} action="">
        <div className="flex flex-col">
          <label htmlFor="name" className="hidden">
            Your Name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="Your Name"
            required
            className="w-100 mt-2 rounded-lg border border-gray-400 bg-white py-3 px-3 text-gray-800 focus:border-sky-500 focus:outline-none"
          />
        </div>

        <div className="mt-2 flex flex-col">
          <label htmlFor="email" className="hidden">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="w-100 mt-2 rounded-lg border border-gray-400 bg-white py-3 px-3 text-gray-800 focus:border-sky-500 focus:outline-none"
          />
        </div>

        <div className="mt-2 flex flex-col">
          <label htmlFor="message" className="hidden">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            className="w-100 mt-2 rounded-lg border border-gray-400 bg-white py-3 px-3 text-gray-800 focus:border-sky-500 focus:outline-none"
          />
        </div>

        <button
          disabled={state.submitting}
          type="submit"
          className="hover:bg-blue-dark mt-3 rounded-lg bg-sky-600 py-3 px-6 font-bold text-white transition duration-300 ease-in-out hover:bg-sky-500 md:inline-block">
          {state.submitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {state.error && (
        <div className="relative mt-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700" role="alert">
          <span className="block sm:inline">{state.error.message}</span>
        </div>
      )}
    </>
  );
};

export default ContactForm;

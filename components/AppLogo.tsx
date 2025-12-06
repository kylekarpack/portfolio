
import Image from "next/image";	

export const AppLogo = () => {
  return (
    <Image alt="Toggle Menu" loading="eager" style={{ height: "32px" }} height={32} src="/images/branding/logo.svg" />
  );
};

export interface AppLogoProps {
  className?: string;
  fill?: string;
  height?: number;
}

export const AppLogo = (props: AppLogoProps) => {
  return <img alt="Toggle Menu" loading="eager" style={{ height: "32px" }} src="/images/branding/logo.svg" />;
};

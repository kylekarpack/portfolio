import { MetaFunction } from "@remix-run/server-runtime";
import { SITE_AUTHOR, SITE_TITLE } from "~/config/constants";
import { getMetaData } from "~/metadata";

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
  return <div>Contact me</div>;
}

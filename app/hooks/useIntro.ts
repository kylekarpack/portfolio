import { useEffect } from "react";
import {
  SITE_AUTHOR,
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
} from "~/config/constants";

/**
 *
 */
export const useIntro = () => {
  const styleContact = "color: default; font-size: 14px;";
  const strContact = `%c
-----------------------------------------------------

${SITE_AUTHOR}

- Github: ${SOCIAL_GITHUB}
- LinkedIn: ${SOCIAL_LINKEDIN}
`;

  // Life Cycle
  useEffect(() => {
    console.group("Thank you for looking, let's connect!");
    console.log(strContact, styleContact);
    console.groupEnd();
  }, []);
};

import { useEffect } from "react";
import { SITE_AUTHOR, SOCIAL_GITHUB, SOCIAL_LINKEDIN } from "~/config/constants";

/**
 * Introduce myself in the console
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
    if (location.hostname !== "localhost") {
      console.group("Hi there!");
      console.log(strContact, styleContact);
      console.groupEnd();
    }
  }, [strContact]);
};

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
      console.group("Thank you for looking, let's connect!");
      console.log(strContact, styleContact);
      console.groupEnd();
    }
  }, []);
};

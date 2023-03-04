import {
  MESSAGE_HIRE_CONSOLE,
  SITE_AUTHOR,
  SITE_EMAIL_ADDRESS,
  SITE_YEAR,
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
} from "~/config/constants";

/**
 * @external https://textart.io/art/tag/rocket/1
 * @description Adding a personal touch never hurt anyone right, and some
 * shameless self-promotion isn't all that bad either.
 */
const artwork = `
<!--

  ${MESSAGE_HIRE_CONSOLE}

           |
          / \\
         / _ \\        ${SITE_AUTHOR}
        |.o '.|        
        |'._.'|
        |     |         - Github: ${SOCIAL_GITHUB}
      .*|  |  |*.       - LinkedIn ${SOCIAL_LINKEDIN}
     /  |  |  |  \\
     |,-'--|--'-.|
        \\     /        Ⓒ ${SITE_YEAR}
         \\ | /
           |

-->
`;

export { artwork };

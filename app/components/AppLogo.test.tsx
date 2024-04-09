import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import { AppLogo } from "./AppLogo";

describe("AppLogo Component", () => {
  const component = render(<AppLogo />);

  test("should render our AppLogo", () => {
    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <img
            alt="Toggle Menu"
            height="32"
            loading="eager"
            src="/images/branding/logo.svg"
            style="height: 32px;"
          />
        </div>
      </body>
    `);
  });
});

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
            alt="Kyle Karpack Logo"
            data-nimg="1"
            decoding="async"
            height="32"
            loading="eager"
            src="/images/branding/logo.svg"
            style="color: transparent;"
            width="110"
          />
        </div>
      </body>
    `);
  });
});

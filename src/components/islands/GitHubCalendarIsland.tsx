import * as React from "react";
import ReactGitHubCalendar from "react-github-calendar";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

// CJS interop: some bundlers surface the module namespace instead of the default
const GitHubCalendar = ((ReactGitHubCalendar as any).default ??
  ReactGitHubCalendar) as typeof ReactGitHubCalendar;

/**
 * GitHub contribution calendar + tooltip, hydrated with `client:visible`
 * from the About page stub. Section wrapper included for stub simplicity.
 */
export const GitHubCalendarIsland = () => (
  <section className="py-8 md:py-20">
    <div className="mx-auto max-w-3xl px-4 md:px-0">
      <GitHubCalendar
        username="kylekarpack"
        year="last"
        colorScheme="light"
        hideColorLegend
        fontSize={12}
        renderBlock={(block: any, activity: any) =>
          React.cloneElement(block, {
            "data-tooltip-id": "react-tooltip",
            "data-tooltip-html": `${activity.count} contribution${activity.count === 1 ? "" : "s"} on ${activity.date}`,
          })
        }
      />
      <Tooltip id="react-tooltip" />
    </div>
  </section>
);

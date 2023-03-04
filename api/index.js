var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// app/styles/index.css
var require_styles = __commonJS({
  "app/styles/index.css"(exports, module2) {
    module2.exports = "/build/_assets/index-46XM75W3.css";
  }
});

// app/styles/resume.css
var require_resume = __commonJS({
  "app/styles/resume.css"(exports, module2) {
    module2.exports = "/build/_assets/resume-O3FZ6YDT.css";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");

// app/config/constants.ts
var COOKIE_THEME = "theme", MESSAGE_HIRE_CONOSLE = "Well, since you've taken the time to read this, I guess you're interested...";
var SITE_AUTHOR = "Kyle Karpack", SITE_DESCRIPTION = `The portfolio of ${SITE_AUTHOR}`, SITE_EMAIL_ADDRESS = "kylekarpack@gmail.com", SITE_EMAIL_LINK = `mailto:${SITE_EMAIL_ADDRESS}`;
var SITE_SHARE_IMAGE = "/images/assets/share.jpg", SITE_TITLE = `${SITE_AUTHOR} - Software Engineer in Seattle`, SITE_UPDATED = new Date("2023-03-01"), SITE_URL = "https://kylekarpack.com", SITE_YEAR = new Date().getFullYear(), SOCIAL_GITHUB = "https://github.com/kylekarpack", SOCIAL_LINKEDIN = "https://linkedin.com/in/kylekarpack", SOCIAL_TWITTER = "https://twitter.com/kylekarpack";

// app/config/artwork.ts
var artwork = `
<!--

  ${MESSAGE_HIRE_CONOSLE}

           |
          / \\
         / _ \\         ${SITE_AUTHOR}
        |.o '.|        ${SITE_EMAIL_ADDRESS}
        |'._.'|
        |     |         - Github: ${SOCIAL_GITHUB}
      .*|  |  |*.       - LinkedIn ${SOCIAL_LINKEDIN}
     /  |  |  |  \\      - Twitter ${SOCIAL_TWITTER}
     |,-'--|--'-.|
        \\     /        \u24B8 ${SITE_YEAR}
         \\ | /
           |

-->
`;

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 13,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html; charset=UTF-8;"), new Response("<!DOCTYPE html>" + artwork + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_classnames4 = __toESM(require("classnames")), import_react8 = require("@remix-run/react"), import_node2 = require("@remix-run/node");

// app/cookies.ts
var import_node = require("@remix-run/node");
var cookieTheme = (0, import_node.createCookie)(COOKIE_THEME);

// app/components/AppFooter.tsx
var import_react2 = require("@remix-run/react");
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), AppFooter = () => {
  let { pathname } = (0, import_react2.useLocation)();
  return pathname.startsWith("/resume") ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "mt-10 justify-center gap-2 text-center text-sm print:hidden md:mt-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "m-auto flex justify-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "a",
        {
          className: "p-2",
          href: SOCIAL_LINKEDIN,
          target: "_blank",
          rel: "noreferrer",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "img",
            {
              alt: "Follow me on LinkedIn",
              className: "footer-social",
              height: 16,
              loading: "lazy",
              src: "/images/svg/linkedin-dark.svg",
              width: 16
            },
            void 0,
            !1,
            {
              fileName: "app/components/AppFooter.tsx",
              lineNumber: 28,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/AppFooter.tsx",
          lineNumber: 23,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "a",
        {
          className: "p-2",
          href: SOCIAL_GITHUB,
          target: "_blank",
          rel: "noreferrer",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "img",
            {
              alt: "Follow me on GitHub",
              className: "footer-social",
              height: 16,
              loading: "lazy",
              src: "/images/svg/github-dark.svg",
              width: 16
            },
            void 0,
            !1,
            {
              fileName: "app/components/AppFooter.tsx",
              lineNumber: 42,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/AppFooter.tsx",
          lineNumber: 37,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/AppFooter.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-font-monospace", children: [
      "\xA9 ",
      SITE_YEAR,
      ", ",
      SITE_AUTHOR
    ] }, void 0, !0, {
      fileName: "app/components/AppFooter.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AppFooter.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
};

// app/config/settings.server.ts
var BASE_URL = process.env.BASE_URL ?? "__undefined__", GOOGLE_ANALYTICS = process.env.GOOGLE_ANALYTICS ?? "__undefined__", GOOGLE_TAG_MANAGER = process.env.GOOGLE_TAG_MANAGER ?? "__undefined__", GRAPHCMS_ADMIN = process.env.GRAPHCMS_ADMIN ?? "__undefined__", GRAPHCMS_TOKEN = process.env.GRAPHCMS_TOKEN ?? "__undefined__", GRAPHCMS_URL = process.env.GRAPHCMS_URL ?? "__undefined__";

// app/components/AppHeader.tsx
var import_react3 = require("@remix-run/react"), import_classnames2 = __toESM(require("classnames")), import_react4 = require("react");

// app/components/AppLogo.tsx
var import_classnames = __toESM(require("classnames")), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), AppLogo = (props) => {
  let { className = "", fill = "", height = 59 } = props, cssComponent = (0, import_classnames.default)("logo", className);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "svg",
    {
      className: cssComponent,
      height,
      viewBox: "0 0 100 59",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "path",
        {
          d: "m72.573561 53.8100014-4.7761176-10.8100014-4.7761176 10.8100014h-5.2238824-5.2238824l-4.7761176-10.8100014-4.7761176 10.8100014h-18.9984302l23.7745478-53.8100014 10 22.6334489 10-22.6334489 23.7745479 53.8100014zm-65.46601601-32.0470011 9.61541491-21.7630003h2.8056379l-11.01823389 24.9380633zm2.7140959 6.5404709 12.50515171-28.3034712h3.8379913l-14.4241473 32.6468202zm18.90131901-28.3034712h15.8490314l-23.7745479 53.8100014-4-9.0533796 19.7745479-44.7566218zm0 0h5.441824l-18.5541552 41.9944523-2.7209119-6.1583623zm-23.36631575 14.1239332-5.35664415-12.1239332h10.7132883z",
          fill,
          textRendering: "geometricPrecision",
          renderingIntent: "geometricPrecision"
        },
        void 0,
        !1,
        {
          fileName: "app/components/AppLogo.tsx",
          lineNumber: 23,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/AppLogo.tsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  );
};

// app/components/AppHeader.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), AppHeader = () => {
  let [closed, setClosed] = (0, import_react4.useState)(!0), onClose = () => {
    setClosed(!0);
  }, onToggle = () => {
    setClosed(!closed);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "header",
    {
      className: (0, import_classnames2.default)(
        "header hidden overflow-hidden print:hidden md:block",
        { closed }
      ),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mx-auto flex h-full w-full max-w-5xl items-center justify-evenly md:text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "button",
          {
            className: "header-logo ml-4 gap-2 px-4 md:hidden",
            onClick: onToggle,
            title: "Toggle menu",
            type: "button",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "img",
              {
                alt: "Toggle Menu",
                className: "max-h-4",
                height: 16,
                loading: "eager",
                src: "/images/svg/menu.svg",
                width: 19
              },
              void 0,
              !1,
              {
                fileName: "app/components/AppHeader.tsx",
                lineNumber: 34,
                columnNumber: 11
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/AppHeader.tsx",
            lineNumber: 28,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex-1 md:hidden" }, void 0, !1, {
          fileName: "app/components/AppHeader.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.NavLink, { className: "header-logo ml-4 gap-2 px-4", to: "/", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AppLogo, {}, void 0, !1, {
            fileName: "app/components/AppHeader.tsx",
            lineNumber: 46,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Home" }, void 0, !1, {
            fileName: "app/components/AppHeader.tsx",
            lineNumber: 47,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/AppHeader.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex-1" }, void 0, !1, {
          fileName: "app/components/AppHeader.tsx",
          lineNumber: 50,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { className: "flex h-full flex-col font-font-monospace md:flex-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_react3.NavLink,
            {
              className: "header-link",
              onClick: onClose,
              prefetch: "intent",
              to: "/",
              children: "About"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AppHeader.tsx",
              lineNumber: 53,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_react3.NavLink,
            {
              className: "header-link",
              onClick: onClose,
              prefetch: "intent",
              to: "/blog",
              children: "Blog"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AppHeader.tsx",
              lineNumber: 61,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_react3.NavLink,
            {
              className: "header-link",
              onClick: onClose,
              prefetch: "intent",
              to: "/portfolio",
              children: "Portfolio"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AppHeader.tsx",
              lineNumber: 69,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_react3.NavLink,
            {
              className: "header-link",
              onClick: onClose,
              prefetch: "intent",
              to: "/resume",
              children: "Resume"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AppHeader.tsx",
              lineNumber: 77,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_react3.NavLink,
            {
              className: "header-link",
              onClick: onClose,
              prefetch: "intent",
              to: "/uses",
              children: "Uses"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AppHeader.tsx",
              lineNumber: 90,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AppHeader.tsx",
          lineNumber: 52,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/AppHeader.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/AppHeader.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
};

// app/components/AppHeaderMobile.tsx
var import_react5 = require("@remix-run/react"), import_classnames3 = __toESM(require("classnames")), import_react6 = require("react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), AppHeaderMobile = () => {
  let [closed, setClosed] = (0, import_react6.useState)(!0), onClose = () => {
    setClosed(!0);
  }, onToggle = () => {
    setClosed(!closed);
  }, renderNavigation = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("nav", { className: "mt-14 flex flex-col items-center gap-4 md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.NavLink, { className: "header-link", onClick: onClose, to: "/", children: "About" }, void 0, !1, {
      fileName: "app/components/AppHeaderMobile.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.NavLink, { className: "header-link", onClick: onClose, to: "/blog", children: "Blog" }, void 0, !1, {
      fileName: "app/components/AppHeaderMobile.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.NavLink, { className: "header-link", onClick: onClose, to: "/portfolio", children: "Portfolio" }, void 0, !1, {
      fileName: "app/components/AppHeaderMobile.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.NavLink, { className: "header-link", onClick: onClose, to: "/resume", children: "Resume" }, void 0, !1, {
      fileName: "app/components/AppHeaderMobile.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.NavLink, { className: "header-link", onClick: onClose, to: "/uses", children: "Uses" }, void 0, !1, {
      fileName: "app/components/AppHeaderMobile.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AppHeaderMobile.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "header",
    {
      className: (0, import_classnames3.default)("header overflow-hidden print:hidden md:hidden", {
        closed
      }),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex h-14 w-full items-center md:text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "button",
            {
              className: "header-logo ml-2 h-full gap-2 px-4 md:hidden",
              onClick: onToggle,
              title: "Toggle menu",
              type: "button",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                "img",
                {
                  alt: "Toggle Menu",
                  className: "max-h-4",
                  height: 16,
                  loading: "eager",
                  src: "/images/svg/menu.svg",
                  width: 19
                },
                void 0,
                !1,
                {
                  fileName: "app/components/AppHeaderMobile.tsx",
                  lineNumber: 61,
                  columnNumber: 11
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/AppHeaderMobile.tsx",
              lineNumber: 55,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex-1 md:hidden" }, void 0, !1, {
            fileName: "app/components/AppHeaderMobile.tsx",
            lineNumber: 70,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            import_react5.NavLink,
            {
              className: "header-logo ml-4 flex h-full items-center gap-2 px-4",
              to: "/",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AppLogo, { className: "h-full" }, void 0, !1, {
                  fileName: "app/components/AppHeaderMobile.tsx",
                  lineNumber: 76,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "sr-only", children: "Home" }, void 0, !1, {
                  fileName: "app/components/AppHeaderMobile.tsx",
                  lineNumber: 77,
                  columnNumber: 11
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/AppHeaderMobile.tsx",
              lineNumber: 72,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex-1 pl-20" }, void 0, !1, {
            fileName: "app/components/AppHeaderMobile.tsx",
            lineNumber: 80,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/AppHeaderMobile.tsx",
          lineNumber: 54,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-full font-font-monospace md:flex-row", children: !closed && renderNavigation() }, void 0, !1, {
          fileName: "app/components/AppHeaderMobile.tsx",
          lineNumber: 83,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/AppHeaderMobile.tsx",
      lineNumber: 49,
      columnNumber: 5
    },
    this
  );
};

// app/hooks/useIntro.ts
var React = __toESM(require("react"));
var useIntro = () => {
  let styleContact = "color: default; font-size: 14px;", styleMessage = "color: #f00; font-size: 18px;", strContact = `%c
  Well, since you've taken the time to read this shoot me an email and lets talk!

  -----------------------------------------------------

  ${SITE_AUTHOR}
  ${SITE_EMAIL_ADDRESS}

  - Github: ${SOCIAL_GITHUB}
  - LinkedIn: ${SOCIAL_LINKEDIN}
  - Twitter: ${SOCIAL_TWITTER}  

  `;
  React.useEffect(() => {
    console.group("\u{1F440} Thank you for looking, lets connect!"), console.log(`%c
\u{1F44B} What can I help you build?`, styleMessage), console.log(strContact, styleContact), console.groupEnd();
  }, []);
};

// app/metadata.ts
var defaults = {
  canonical: "",
  description: `The online portfolio of ${SITE_AUTHOR}, a Software Engineer!`,
  image: `${SITE_URL}${SITE_SHARE_IMAGE}`,
  title: SITE_TITLE
}, getMetaDataBase = () => ({
  charset: "utf-8",
  author: SITE_AUTHOR,
  "color-scheme": "dark light",
  "theme-color": "#ff0000",
  viewport: "initial-scale=1, viewport-fit=cover, width=device-width",
  "apple-mobile-web-app-capable": "yes",
  "apple-mobile-web-app-status-bar-style": "black",
  "apple-mobile-web-app-title": "2023 Portfolio"
}), getMetaData = (options) => ({
  ...getMetaDataBase(),
  description: options.description || defaults.description,
  image: options.image || defaults.image,
  name: options.title || defaults.title,
  title: options.title || defaults.title,
  "og:description": options.description || defaults.description,
  "og:image": options.image || defaults.image,
  "og:title": options.title || defaults.title,
  "og:type": "website",
  "og:url": options.canonical || defaults.canonical,
  "twitter:card": "summary_large_image",
  "twitter:creator": "@visormatt",
  "twitter:description": options.description || defaults.description,
  "twitter:image": options.image || defaults.image,
  "twitter:site": "@visormatt",
  "twitter:title": options.title || defaults.title
});

// app/hooks/usePageTracking.ts
var React2 = __toESM(require("react")), import_react7 = require("@remix-run/react");
var usePageTracking = () => {
  let { pathname } = (0, import_react7.useLocation)();
  React2.useEffect(() => {
    !window.gtag || window.gtag("event", "page_view", {
      page_location: `${BASE_URL}${pathname}`
    });
  }, [pathname]);
};

// app/root.tsx
var import_styles = __toESM(require_styles()), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: import_styles.default }], loader = async (args) => {
  let { request } = args, baseUrl = BASE_URL, canonical = request.url, header = request.headers.get("cookie"), cookie = await cookieTheme.parse(header) ?? {}, { theme = "light" } = cookie;
  return (0, import_node2.json)({ baseUrl, canonical, theme });
}, meta = (args) => {
  var _a;
  return {
    ...getMetaData({
      canonical: (_a = args.data) == null ? void 0 : _a.canonical,
      description: SITE_DESCRIPTION,
      image: `${SITE_URL}${SITE_SHARE_IMAGE}`,
      title: SITE_TITLE
    })
  };
};
function App() {
  let data3 = (0, import_react8.useLoaderData)(), { canonical, theme } = data3, isDark = theme === "dark", favicon = "/images/svg/logo.svg", manifest = "/manifest.json", cssComponent = (0, import_classnames4.default)(theme ?? "", isDark);
  return useIntro(), usePageTracking(), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", { lang: "en", className: cssComponent, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: canonical, rel: "canonical" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: favicon, rel: "apple-touch-icon", sizes: "48x48" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: favicon, rel: "favicon" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: favicon, rel: "icon", type: "image/svg+xml" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: favicon, rel: "mask-icon", type: "image/svg+xml" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: manifest, rel: "manifest" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AppHeader, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AppHeaderMobile, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AppFooter, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react8.useCatch)(), favicon = "/images/svg/logo.svg";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("title", { children: "Oh no!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: favicon, rel: "apple-touch-icon", sizes: "48x48" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: favicon, rel: "favicon" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: favicon, rel: "icon", type: "image/svg+xml" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: favicon, rel: "mask-icon", type: "image/svg+xml" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: "/manifest.json", rel: "manifest" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AppHeader, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AppHeaderMobile, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mx-auto max-w-5xl pt-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: [
          caught.status,
          " ",
          caught.statusText,
          " - Catch Boundary"
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere enim minima esse ipsam! Sit consequatur doloribus earum facere eaque quaerat molestiae. Sed cupiditate ea non ipsum? Sed aliquid quis quia." }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 136,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AppFooter, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 145,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 150,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 115,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  let favicon = "/images/svg/logo.svg", manifest = "/manifest.json";
  return console.error("\u{1F9E7} Error", error), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("title", { children: "Oh no!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: favicon, rel: "apple-touch-icon", sizes: "48x48" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: favicon, rel: "favicon" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 169,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: favicon, rel: "icon", type: "image/svg+xml" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 170,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: favicon, rel: "mask-icon", type: "image/svg+xml" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 171,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { href: manifest, rel: "manifest" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 172,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 173,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 165,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "m-auto flex h-screen max-w-5xl flex-col justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "mb-4 text-2xl", children: "Oh no!" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 178,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: [
          "Sorry but I seemed to have broken something.",
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 181,
            columnNumber: 13
          }, this),
          "Please try again later :("
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 179,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 176,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 164,
    columnNumber: 5
  }, this);
}

// app/routes/sandbox/css-polaroid.tsx
var css_polaroid_exports = {};
__export(css_polaroid_exports, {
  default: () => css_polaroid_default,
  meta: () => meta2
});

// app/components/AppHero.tsx
var import_classnames5 = __toESM(require("classnames")), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), AppHero = (props) => {
  let { className, copy, highlight, tag: Tag = "h2" } = props, cssComponent = (0, import_classnames5.default)("hero p-4 text-center", className);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: cssComponent, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Tag, { className: "inline-block font-font-serif text-xl font-extrabold md:text-4xl", children: [
    copy && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "font-font-monospace text-base font-normal md:text-2xl", children: copy }, void 0, !1, {
      fileName: "app/components/AppHero.tsx",
      lineNumber: 21,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-highlight px-3 text-4xl md:text-7xl", children: highlight }, void 0, !1, {
      fileName: "app/components/AppHero.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AppHero.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/AppHero.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
};

// app/components/SandboxSidebar.tsx
var import_classnames6 = __toESM(require("classnames")), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), SandboxSidebar = (props) => {
  let { className } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: (0, import_classnames6.default)("p-4", className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: "\u{1F517} Sandbox Sidebar" }, void 0, !1, {
    fileName: "app/components/SandboxSidebar.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/SandboxSidebar.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
};

// app/routes/sandbox/css-polaroid.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), meta2 = (args) => {
  var _a, _b;
  return {
    ...getMetaData({
      canonical: (_b = (_a = args.parentsData) == null ? void 0 : _a.root) == null ? void 0 : _b.canonical,
      description: "A Sandbox project making a Poloroid camera with CSS.",
      title: `Sandbox | ${SITE_TITLE}`
    })
  };
}, css_polaroid_default = () => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("section", { className: "bg-gradient-dark-- bg-color-background-dark text-color-background", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    AppHero,
    {
      className: "mx-auto max-w-6xl py-20 md:py-40",
      copy: "Looked like a fun challenge",
      highlight: "CSS Polaroid Camera",
      tag: "h1"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/sandbox/css-polaroid.tsx",
      lineNumber: 22,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex bg-white text-gray-800", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full py-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "div",
      {
        className: "relative mx-auto bg-slate-500",
        style: {
          backgroundImage: 'url("/images/sandbox/css-polaroid.jpg")',
          backgroundPosition: "bottom right",
          height: "550px",
          width: "650px"
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "ml-20 mr-20 mt-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { children: "Sandboxes" }, void 0, !1, {
          fileName: "app/routes/sandbox/css-polaroid.tsx",
          lineNumber: 41,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/sandbox/css-polaroid.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/sandbox/css-polaroid.tsx",
        lineNumber: 31,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/sandbox/css-polaroid.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SandboxSidebar, {}, void 0, !1, {
      fileName: "app/routes/sandbox/css-polaroid.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sandbox/css-polaroid.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/sandbox/css-polaroid.tsx",
  lineNumber: 21,
  columnNumber: 5
}, this);

// app/routes/api/portfolio/$slug.ts
var slug_exports = {};
__export(slug_exports, {
  loader: () => loader2
});
var import_node3 = require("@remix-run/node");

// app/utils/graphcms.ts
var fetchFromGraphCMS = async (query, variables) => {
  let body = { query };
  return variables && (body.variables = variables), fetch(GRAPHCMS_URL, {
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${GRAPHCMS_TOKEN}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  });
}, gql = String.raw;

// app/queries/getPortfolio.ts
var getPortfolioBySlug = gql`
  query portfolios($slug: String!) {
    portfolios(where: { slug: $slug }) {
      company
      content {
        html
      }
      description
      id
      images {
        url
      }
      intro
      slug
      title
    }
  }
`;

// app/routes/api/portfolio/$slug.ts
var loader2 = async (args) => {
  let { slug } = args.params, portfolios = (await (await fetchFromGraphCMS(getPortfolioBySlug, { slug })).json()).data.portfolios ?? [];
  if (portfolios.length !== 1)
    throw new import_node3.Response(`Portfolio "${slug}" not found`, { status: 404 });
  return portfolios[0];
};

// app/routes/api/portfolio/index.ts
var portfolio_exports = {};
__export(portfolio_exports, {
  loader: () => loader3
});
var import_node4 = require("@remix-run/node");

// app/queries/getPortfolios.ts
var getPortfolios = gql`
  query {
    portfolios(orderBy: date_DESC) {
      company
      current
      date
      description
      images {
        url
      }
      overview
      slug
      thumbnailTemp
      title
    }
  }
`;

// app/routes/api/portfolio/index.ts
var loader3 = async (args) => {
  let items = (await (await fetchFromGraphCMS(getPortfolios)).json()).data.portfolios ?? [];
  if (!items.length)
    throw new import_node4.Response("Portfolio items not found", { status: 404 });
  return items;
};

// app/routes/portfolio/$slug.tsx
var slug_exports2 = {};
__export(slug_exports2, {
  CatchBoundary: () => CatchBoundary2,
  default: () => slug_default,
  loader: () => loader2,
  meta: () => meta3
});
var import_react9 = require("@remix-run/react");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
var meta3 = (args) => {
  var _a, _b, _c, _d, _e, _f, _g;
  let image = (_a = args.data) != null && _a.images[0] ? (_c = (_b = args.data) == null ? void 0 : _b.images[0]) == null ? void 0 : _c.url : !1;
  return getMetaData({
    canonical: (_e = (_d = args.parentsData) == null ? void 0 : _d.root) == null ? void 0 : _e.canonical,
    description: (_f = args.data) == null ? void 0 : _f.description,
    image,
    title: (_g = args.data) == null ? void 0 : _g.title
  });
};
function slug_default() {
  var _a;
  let data3 = (0, import_react9.useLoaderData)(), img = data3.images[0] ? (_a = data3.images[0]) == null ? void 0 : _a.url : !1;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "m-auto max-w-3xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      AppHero,
      {
        className: "py-20 md:py-40",
        copy: data3.company,
        highlight: data3.title,
        tag: "h1"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/portfolio/$slug.tsx",
        lineNumber: 32,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/portfolio/$slug.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    img && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "img",
      {
        alt: data3.title,
        className: "mb-20 mt-0 w-full border-t border-b border-color-border",
        height: "auto",
        loading: "eager",
        src: img,
        style: { aspectRatio: "2/1" },
        width: "100%"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/portfolio/$slug.tsx",
        lineNumber: 41,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative m-auto flex max-w-3xl flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "div",
      {
        className: "wysiwyg px-4",
        dangerouslySetInnerHTML: { __html: data3.content.html }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/portfolio/$slug.tsx",
        lineNumber: 52,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/portfolio/$slug.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative m-auto mb-20 flex max-w-3xl flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("blockquote", { children: data3.intro }, void 0, !1, {
      fileName: "app/routes/portfolio/$slug.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/portfolio/$slug.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/portfolio/$slug.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
var CatchBoundary2 = () => {
  if ((0, import_react9.useCatch)().status === 404)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("section", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      AppHero,
      {
        className: "py-20 md:py-40",
        copy: "Uh oh...",
        highlight: "404",
        tag: "h1"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/portfolio/$slug.tsx",
        lineNumber: 94,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/portfolio/$slug.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this);
  throw new Error("Unexpected error");
};

// app/routes/portfolio/index.tsx
var portfolio_exports2 = {};
__export(portfolio_exports2, {
  default: () => portfolio_default,
  loader: () => loader3,
  meta: () => meta4
});
var import_react11 = require("@remix-run/react");

// app/components/PortfolioPreview.tsx
var import_react10 = require("@remix-run/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), PortfolioPreview = (props) => {
  let { current = !1, data: data3 } = props, date = new Date(data3.date), _renderImage = () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "img",
    {
      alt: "",
      className: "w-full border transition-all hover:rotate-3 hover:scale-110",
      height: "auto",
      src: data3.images[0].url,
      width: "auto"
    },
    void 0,
    !1,
    {
      fileName: "app/components/PortfolioPreview.tsx",
      lineNumber: 24,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/PortfolioPreview.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    import_react10.Link,
    {
      className: "work-preview text-color-copy",
      prefetch: "intent",
      to: `/portfolio/${data3.slug}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { className: "m-0 font-font-serif text-xl font-bold", children: data3.title }, void 0, !1, {
          fileName: "app/components/PortfolioPreview.tsx",
          lineNumber: 42,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mt-1 mb-6 flex items-baseline gap-2 font-medium text-color-copy-dark", children: [
          !current && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: new Date(date).getFullYear() }, void 0, !1, {
            fileName: "app/components/PortfolioPreview.tsx",
            lineNumber: 44,
            columnNumber: 22
          }, this),
          !current && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "font-light", children: "|" }, void 0, !1, {
            fileName: "app/components/PortfolioPreview.tsx",
            lineNumber: 45,
            columnNumber: 22
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: data3.company }, void 0, !1, {
            fileName: "app/components/PortfolioPreview.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/PortfolioPreview.tsx",
          lineNumber: 43,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: data3.overview }, void 0, !1, {
          fileName: "app/components/PortfolioPreview.tsx",
          lineNumber: 49,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/PortfolioPreview.tsx",
      lineNumber: 35,
      columnNumber: 5
    },
    this
  );
};

// app/routes/portfolio/index.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
var meta4 = (args) => {
  var _a, _b;
  return {
    ...getMetaData({
      canonical: (_b = (_a = args.parentsData) == null ? void 0 : _a.root) == null ? void 0 : _b.canonical,
      description: `A collection of ramblings by ${SITE_AUTHOR}.`,
      title: `Featured Work | ${SITE_TITLE}`
    })
  };
};
function portfolio_default() {
  let data3 = (0, import_react11.useLoaderData)(), current = data3.filter((node) => node.current), recent = data3.filter((node) => !node.current);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("section", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "bg-color-background-dark text-color-background", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        AppHero,
        {
          className: "py-20 md:py-40",
          copy: "Right now...",
          highlight: "What I'm building",
          tag: "h1"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/portfolio/index.tsx",
          lineNumber: 37,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/portfolio/index.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mx-auto md:max-w-6xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "my-20 grid grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3", children: current.map((node) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(PortfolioPreview, { current: !0, data: node }, node.slug, !1, {
        fileName: "app/routes/portfolio/index.tsx",
        lineNumber: 47,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/portfolio/index.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/portfolio/index.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/portfolio/index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("section", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "border-0 border-t border-b border-color-border bg-color-background-light text-color-background-dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        AppHero,
        {
          className: "py-20 md:py-40",
          copy: "In the past...",
          highlight: "What I've built",
          tag: "h2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/portfolio/index.tsx",
          lineNumber: 55,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/portfolio/index.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mx-auto md:max-w-6xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "my-20 grid grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3", children: recent.map((node) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(PortfolioPreview, { current: !1, data: node }, node.slug, !1, {
        fileName: "app/routes/portfolio/index.tsx",
        lineNumber: 65,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/portfolio/index.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/portfolio/index.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/portfolio/index.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/portfolio/index.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/api/blog/$slug.ts
var slug_exports3 = {};
__export(slug_exports3, {
  loader: () => loader4
});
var import_node5 = require("@remix-run/node");

// app/queries/getPost.ts
var getPost = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      content {
        html
        raw
      }
      createdAt
      date
      description
      images {
        url
      }
      imageTemp
      intro
      tags
      title
      updatedAt
    }
  }
`;

// app/routes/api/blog/$slug.ts
var loader4 = async (args) => {
  let { slug } = args.params, res = await (await fetchFromGraphCMS(getPost, { slug })).json();
  if (!res.data.post)
    throw new import_node5.Response(`Post "${slug}" not found`, { status: 404 });
  return res.data.post;
};

// app/routes/api/blog/index.ts
var blog_exports = {};
__export(blog_exports, {
  loader: () => loader5
});
var import_node6 = require("@remix-run/node");

// app/queries/getPosts.ts
var getPosts = gql`
  query {
    # Query enum values - https://graphcms.com/docs/api-reference/schema/enumerations
    __type(name: "Tags") {
      enumValues {
        name
      }
    }

    posts(orderBy: date_DESC) {
      content {
        html
      }
      date
      description
      id
      imageTemp
      intro
      slug
      tags
      sticky
      tags
      title
    }
  }
`;

// app/routes/api/blog/index.ts
var loader5 = async () => {
  try {
    let res = await (await fetchFromGraphCMS(getPosts)).json(), posts = res.data.posts ?? [], tags = (res.data.__type.enumValues ?? []).map((tag) => tag.name).sort();
    if (!posts.length)
      throw new import_node6.Response("Blog posts not found", { status: 404 });
    return {
      posts,
      tags
    };
  } catch (error) {
    throw error;
  }
};

// app/routes/[sitemap.xml].tsx
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader6
});

// app/queries/getSitemap.ts
var getSitemap = gql`
  query {
    # Query enum values - https://graphcms.com/docs/api-reference/schema/enumerations
    __type(name: "Tags") {
      enumValues {
        name
      }
    }

    portfolios(orderBy: date_DESC) {
      # company
      # current
      date
      # description
      # images {
      #   url
      # }
      # overview
      slug
      # thumbnailTemp
      title
    }

    posts(orderBy: createdAt_ASC) {
      # content {
      #   html
      # }
      date
      # description
      # id
      # imageTemp
      # intro
      slug
      # tags
      # sticky
      title
    }
  }
`;

// app/routes/[sitemap.xml].tsx
var loader6 = async (args) => {
  let res = await (await fetchFromGraphCMS(getSitemap)).json(), routes2 = ["/blog", "/portfolio", "/resume", "/uses"], { portfolios, posts } = res.data, links4 = routes2.map(
    (path) => `  <url>
    <changefreq>monthly</changefreq>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${SITE_UPDATED.toISOString()}</lastmod>
    <priority>1.0</priority>
  </url>`
  ), blog = posts.map(
    (p) => `  <url>
    <changefreq>monthly</changefreq>
    <loc>${BASE_URL}/blog/${p.slug}</loc>
    <lastmod>${new Date(p.date).toISOString()}</lastmod>
    <priority>0.8</priority>
  </url>`
  ), portfolio = portfolios.map(
    (p) => `  <url>
    <changefreq>monthly</changefreq>
    <loc>${BASE_URL}/portfolio/${p.slug}</loc>
    <lastmod>${new Date(p.date).toISOString()}</lastmod>
    <priority>0.9</priority>
  </url>`
  ), content = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <changefreq>monthly</changefreq>
    <loc>${BASE_URL}</loc>
    <lastmod>${SITE_UPDATED.toISOString()}</lastmod>
    <priority>1.0</priority>
  </url>
  ${links4.join(`
`)}
  ${portfolio.join(`
`)}
  ${blog.join(`
`)}
</urlset>`;
  return new Response(content, {
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8"
    },
    status: 200
  });
};

// app/routes/api/qualities.ts
var qualities_exports = {};
__export(qualities_exports, {
  getQuote: () => getQuote,
  loader: () => loader7
});
var qualities = [
  "A problem solver \u{1F9E9}",
  "A creative thinker \u{1F914}",
  "A team player \u{1F91D}",
  "A self starter  \u{1F3C7}",
  "An innovator \u{1F4A1}",
  "A perpetual learner \u{1F4DA}",
  "A rule breaker \u{1F64A}"
], loader7 = async (args) => getQuote(), getQuote = (value) => {
  let random = Math.floor(Math.random() * qualities.length);
  return qualities[random] === value ? getQuote(value) : qualities[random];
};

// app/routes/sandbox/index.tsx
var sandbox_exports = {};
__export(sandbox_exports, {
  default: () => sandbox_default,
  meta: () => meta5
});
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), meta5 = (args) => {
  var _a, _b;
  return {
    ...getMetaData({
      canonical: (_b = (_a = args.parentsData) == null ? void 0 : _a.root) == null ? void 0 : _b.canonical,
      description: "A Sandbox for Remix-Run and various web experiments.",
      title: `Sandbox | ${SITE_TITLE}`
    })
  };
}, sandbox_default = () => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("section", { className: "bg-gradient-dark-- bg-color-background-dark text-color-background", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    AppHero,
    {
      className: "mx-auto max-w-6xl py-20 md:py-40",
      copy: "Developer sandbox \u{1F3D6}\uFE0F",
      highlight: "A place to explore",
      tag: "h1"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/sandbox/index.tsx",
      lineNumber: 22,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni deleniti sunt aliquam animi corrupti quod dolorem libero obcaecati id harum similique iste iure, velit perspiciatis dolores nisi veniam. Eligendi, eum!" }, void 0, !1, {
      fileName: "app/routes/sandbox/index.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/sandbox/index.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(SandboxSidebar, {}, void 0, !1, {
      fileName: "app/routes/sandbox/index.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sandbox/index.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/sandbox/index.tsx",
  lineNumber: 21,
  columnNumber: 5
}, this);

// app/routes/[robots.txt].tsx
var robots_txt_exports = {};
__export(robots_txt_exports, {
  loader: () => loader8
});
var loader8 = () => {
  let robotText = `
User-agent: *
Disallow: /api
Sitemap: ${BASE_URL}/sitemap.xml
`;
  return new Response(robotText, {
    headers: { "Content-Type": "text/plain" },
    status: 200
  });
};

// app/routes/blog/$slug.tsx
var slug_exports4 = {};
__export(slug_exports4, {
  CatchBoundary: () => CatchBoundary3,
  default: () => slug_default2,
  links: () => links2,
  loader: () => loader4,
  meta: () => meta6
});
var import_react12 = require("@remix-run/react");

// app/components/AppWysiwyg.tsx
var React3 = __toESM(require("react")), import_prismjs = __toESM(require("prismjs")), import_rich_text_react_renderer = require("@graphcms/rich-text-react-renderer"), import_prism_line_numbers = require("prismjs/plugins/line-numbers/prism-line-numbers"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), AppWysiwyg = (props) => {
  let { content } = props;
  return React3.useEffect(() => {
    import_prismjs.default.highlightAll();
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "wysiwyg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    import_rich_text_react_renderer.RichText,
    {
      content,
      renderers: {
        code_block: ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("pre", { className: "line-numbers language-js", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("code", { className: "language-js", children }, void 0, !1, {
          fileName: "app/components/AppWysiwyg.tsx",
          lineNumber: 25,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/AppWysiwyg.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this)
      }
    },
    void 0,
    !1,
    {
      fileName: "app/components/AppWysiwyg.tsx",
      lineNumber: 20,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/AppWysiwyg.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};

// node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css
var prism_line_numbers_default = "/build/_assets/prism-line-numbers-F3IMUPQV.css";

// node_modules/prismjs/themes/prism-tomorrow.css
var prism_tomorrow_default = "/build/_assets/prism-tomorrow-ZVTVJTI7.css";

// app/routes/blog/$slug.tsx
var import_prism_line_numbers3 = require("prismjs/plugins/line-numbers/prism-line-numbers");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), links2 = () => [
  { rel: "stylesheet", href: prism_line_numbers_default },
  { rel: "stylesheet", href: prism_tomorrow_default }
];
var meta6 = (args) => {
  var _a, _b, _c, _d;
  return {
    ...getMetaData({
      canonical: (_b = (_a = args.parentsData) == null ? void 0 : _a.root) == null ? void 0 : _b.canonical,
      description: (_c = args.data) == null ? void 0 : _c.description,
      title: (_d = args.data) == null ? void 0 : _d.title
    })
  };
};
function slug_default2() {
  let data3 = (0, import_react12.useLoaderData)(), date = new Date(data3.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
    weekday: void 0,
    year: "numeric"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      AppHero,
      {
        className: "py-20 md:py-40",
        copy: date,
        highlight: data3.title,
        tag: "h1"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/blog/$slug.tsx",
        lineNumber: 52,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/blog/$slug.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      "img",
      {
        alt: data3.title,
        className: "w-full border-b border-t border-color-border-dark",
        height: "auto",
        loading: "eager",
        src: data3.imageTemp,
        width: "100%"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/blog/$slug.tsx",
        lineNumber: 60,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { className: "m-auto max-w-4xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mb-20 p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "my-8 md:my-12 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "text-highlight m-0 mb-2 inline-block text-left text-3xl md:text-4xl", children: data3.title }, void 0, !1, {
          fileName: "app/routes/blog/$slug.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "font-font-monospace text-sm", children: date }, void 0, !1, {
          fileName: "app/routes/blog/$slug.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/blog/$slug.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(AppWysiwyg, { content: data3.content.raw }, void 0, !1, {
        fileName: "app/routes/blog/$slug.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog/$slug.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/blog/$slug.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog/$slug.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
var CatchBoundary3 = () => {
  if ((0, import_react12.useCatch)().status === 400)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      AppHero,
      {
        className: "py-20 md:py-40",
        copy: "Uh oh...",
        highlight: "404",
        tag: "h1"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/blog/$slug.tsx",
        lineNumber: 93,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/blog/$slug.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this);
  throw new Error("Unexpected error");
};

// app/routes/blog/index.tsx
var blog_exports2 = {};
__export(blog_exports2, {
  default: () => blog_default,
  loader: () => loader5,
  meta: () => meta7
});
var import_react14 = require("@remix-run/react");

// app/components/BlogPreview.tsx
var import_react13 = require("@remix-run/react"), import_classnames7 = __toESM(require("classnames")), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), BlogPreview = (props) => {
  let { className, date, heading = "h3", slug, image, title } = props, Heading = heading, dateString = new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "UTC",
    weekday: void 0,
    year: "numeric"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
    import_react13.Link,
    {
      className: (0, import_classnames7.default)("blog-preview relative flex flex-col", className),
      prefetch: "intent",
      to: `/blog/${slug}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { alt: title, height: "auto", loading: "lazy", src: image, width: "auto" }, void 0, !1, {
          fileName: "app/components/BlogPreview.tsx",
          lineNumber: 36,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Heading, { className: "mt-4 mb-2 text-2xl", children: title }, void 0, !1, {
          fileName: "app/components/BlogPreview.tsx",
          lineNumber: 38,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "font-font-monospace text-sm", children: dateString }, void 0, !1, {
          fileName: "app/components/BlogPreview.tsx",
          lineNumber: 39,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/BlogPreview.tsx",
      lineNumber: 30,
      columnNumber: 5
    },
    this
  );
};

// app/components/BlogFeatured.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), BlogFeatured = (props) => {
  let { className, post } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    BlogPreview,
    {
      className,
      content: post.content.html,
      date: post.date,
      featured: post.sticky,
      heading: "h2",
      image: post.imageTemp,
      slug: post.slug,
      title: post.title
    },
    post.slug,
    !1,
    {
      fileName: "app/components/BlogFeatured.tsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  );
};

// app/components/BlogUpcoming.tsx
var import_classnames8 = __toESM(require("classnames")), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), BlogUpcoming = (props) => {
  let { className } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: (0, import_classnames8.default)("flex flex-col gap-10", className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h3", { className: "text-2xl", children: "Upcoming Posts" }, void 0, !1, {
      fileName: "app/components/BlogUpcoming.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("ul", { className: "mt-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("li", { className: "mb-2 rounded-md border bg-color-background-light p-2 text-sm", children: "Escape Hatches - brought up in Vercel conf" }, void 0, !1, {
        fileName: "app/components/BlogUpcoming.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("li", { className: "mb-2 rounded-md border bg-color-background-light p-2 text-sm", children: "We are all salesmen, quick prototypes, sandboxes" }, void 0, !1, {
        fileName: "app/components/BlogUpcoming.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("li", { className: "mb-2 rounded-md border bg-color-background-light p-2 text-sm", children: "Developer tooling - debuggers & loggers" }, void 0, !1, {
        fileName: "app/components/BlogUpcoming.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("li", { className: "mb-2 rounded-md border bg-color-background-light p-2 text-sm", children: "Lerna is back!" }, void 0, !1, {
        fileName: "app/components/BlogUpcoming.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("li", { className: "mb-2 rounded-md border bg-color-background-light p-2 text-sm", children: "You are not Google - moving quickly" }, void 0, !1, {
        fileName: "app/components/BlogUpcoming.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("li", { className: "mb-2 rounded-md border bg-color-background-light p-2 text-sm", children: "Reviewing pull requests - a simple framework" }, void 0, !1, {
        fileName: "app/components/BlogUpcoming.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BlogUpcoming.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/BlogUpcoming.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/BlogUpcoming.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
};

// app/utils/blog.ts
var filterBlogPosts = (posts) => {
  let diy = { data: [], featured: [] }, technical = { data: [], featured: [] };
  return posts.forEach((post) => {
    let node = post.tags.includes("DIY") ? diy : technical;
    (post.sticky ? node.featured : node.data).push(post);
  }), {
    diy,
    technical
  };
};

// app/routes/blog/index.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
var meta7 = (args) => {
  var _a, _b;
  return {
    ...getMetaData({
      canonical: (_b = (_a = args.parentsData) == null ? void 0 : _a.root) == null ? void 0 : _b.canonical,
      description: `A collection of ramblings by ${SITE_AUTHOR}.`,
      title: `A developers ramblings | ${SITE_TITLE}`
    })
  };
};
function blog_default() {
  let { posts, tags: _tags } = (0, import_react14.useLoaderData)(), data3 = filterBlogPosts(posts);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("section", { className: "bg-gradient-dark-- bg-color-background-dark text-color-background", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      AppHero,
      {
        className: "mx-auto max-w-6xl py-20 md:py-40",
        copy: "Yes, another blog...",
        highlight: "Developer ramblings",
        tag: "h1"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/blog/index.tsx",
        lineNumber: 36,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/blog/index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("section", { className: "section-full m-auto flex max-w-6xl flex-col items-center justify-center gap-20 px-4 py-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-col gap-20 md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          BlogFeatured,
          {
            className: "basis-2/3",
            post: data3.technical.featured[0]
          },
          void 0,
          !1,
          {
            fileName: "app/routes/blog/index.tsx",
            lineNumber: 46,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(BlogUpcoming, { className: "basis-1/3" }, void 0, !1, {
          fileName: "app/routes/blog/index.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/blog/index.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "grid w-full gap-10 md:grid-cols-2 lg:grid-cols-3", children: data3.technical.data.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        BlogPreview,
        {
          content: post.content.html,
          date: post.date,
          heading: "h2",
          image: post.imageTemp,
          slug: post.slug,
          title: post.title
        },
        post.id,
        !1,
        {
          fileName: "app/routes/blog/index.tsx",
          lineNumber: 55,
          columnNumber: 13
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/blog/index.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog/index.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("section", { className: "section-full m-auto flex max-w-6xl flex-col items-center justify-center gap-20 px-4 py-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { className: "mb-8 w-full text-left text-3xl", children: "Do it yourself" }, void 0, !1, {
          fileName: "app/routes/blog/index.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: `You see and hear the acronym "DIY" everywhere, and you probably already know what it stands for: "do it yourself." It's a pretty straightforward-sounding concept. Well, when I am not building things with code, I love to work with my hands around the house. It's also amazing to share the process and experience with my kids.` }, void 0, !1, {
          fileName: "app/routes/blog/index.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/blog/index.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      data3.diy.featured.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-col gap-20 md:flex-row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(BlogFeatured, { className: "basis-2/3", post: data3.diy.featured[0] }, void 0, !1, {
        fileName: "app/routes/blog/index.tsx",
        lineNumber: 82,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/blog/index.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "grid w-full gap-10 md:grid-cols-2 lg:grid-cols-3", children: data3.diy.data.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        BlogPreview,
        {
          content: post.content.html,
          date: post.date,
          heading: "h2",
          image: post.imageTemp,
          slug: post.slug,
          title: post.title
        },
        post.id,
        !1,
        {
          fileName: "app/routes/blog/index.tsx",
          lineNumber: 88,
          columnNumber: 13
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/blog/index.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog/index.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog/index.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/resume.tsx
var resume_exports = {};
__export(resume_exports, {
  default: () => resume_default,
  links: () => links3,
  meta: () => meta8
});

// app/data/resume.ts
var experience = [
  {
    company: "Adobe",
    companyUrl: "https://adobe.com/",
    date: "Sept 2022 - Present",
    dateRange: [new Date(2022, 9, 6)],
    description: `
      <p>
        After welcoming a baby girl in August, I'll be starting early September.
      </p>
    `,
    highlights: [],
    image: "https://assets-global.website-files.com/602a3f3e454f14956d14543a/602a3f3e454f1438b61455af_ShiftsmartIcon.png",
    tags: ["NodeJS", "TypeScript"],
    title: "Senior Software Engineer"
  },
  {
    company: "Haldi",
    companyUrl: "https://haldi.com/",
    date: "Apr 2021 - Aug 2022",
    dateRange: [new Date(2021, 4, 1), new Date(2022, 7, 15)],
    description: `
      <p>
        One year in we've jump-started the organization's code! Taking a
        "loosely typed and strongly coupled" system and successfully flipping it.
        The entire stack is now containerized and makes us of Firebase Emulators
        for an incredible development workflow.
      </p>
    `,
    highlights: [
      "0% - 80% Containerized stack and development workflow",
      "Introduced GraphQL and strongly types across services",
      "Delivered a full rebuild & rebrand of the Python + Django website to NextJS",
      "Survey Framework, CSS Style Guide, Monorepo, Unit/E2E Testing, and more"
    ],
    image: "https://haldi.com/favicon.ico",
    tags: [
      "Docker",
      "Google Cloud",
      "GraphQL",
      "GraphQL Nexus",
      "NextJS",
      "NodeJS",
      "Serverless",
      "TailwindCSS",
      "TypeScript"
    ],
    title: "Principal Engineer"
  },
  {
    company: "thredUP",
    companyUrl: "https://thredup.com",
    date: "Feb 2016 - Apr 2021",
    dateRange: [new Date("February 2016"), new Date("April 2021")],
    description: `<p>
      Successfully pitched, prototyped, and delivered several high-impact
      projects within the organization. Assisting in hiring, managing, and
      mentoring engineers at various levels, distributed across the globe.
    </p>`,
    highlights: [
      "Content Management System; Pitched, prototyped, and delivered",
      "Progressive Web App (PWA); Pitched, prototyped, and delivered",
      "Lerna Monorepo; Pitched, prototyped, and delivered",
      "CSS Overhaul; Pitched, prototyped, and delivered",
      "Apollo Migration, Redux Migration, Checkout Overhaul, and many more..."
    ],
    image: "https://cf-tup-assets.thredup.com/shop/images/manifest_v2/favicon_96.png",
    tags: [
      "CSS",
      "Docker",
      "HTML",
      "Kubernetes",
      "PostCSS",
      "NodeJS",
      "React",
      "TailwindCSS",
      "TypeScript",
      "Webpack"
    ],
    title: "Staff Engineer"
  },
  {
    company: "Bynd",
    companyUrl: "https://bynd.com",
    date: "Nov 2011 - Apr 2015",
    dateRange: [new Date(2011, 11, 1), new Date(2015, 4, 1)],
    description: `<p>
      Agency life in San Francisco affords the opportunity to work with a
      variety of "high profile" clients to create and deliver high-impact
      projects. As Team Lead, my responsibilities included: pitch work,
      application architecture, technical documentation, code reviews, and
      mentoring.
    </p>`,
    highlights: [
      "Google TrainUP; Pitched, architected, developed, and delivered",
      "Google Databoard; Conceptualized, architected, developed, and delivered",
      "Facebook Disaster Relief; Prototyped with BackboneJS and Facebook API's",
      "Apple iAds; Development of HTML micro sites internally for Apple",
      "Apple iAds; Pitched an abstraction to minimize production time/cost, which was adopted internally"
    ],
    image: "https://bynd.com/favicon.ico",
    tags: [
      "AngularJS",
      "BackboneJS",
      "CSS",
      "Google Cloud",
      "HTML",
      "Javascript"
    ],
    title: "Technical Team Lead"
  },
  {
    company: "Lift Agency",
    companyUrl: "https://liftagency.co",
    date: "Jul 2010 - Nov 2011",
    dateRange: [new Date(2010, 7, 1), new Date(2011, 11, 1)],
    description: `<p>
      Joining Lift Agency was a conscious decision to move away from any
      form of a "Design" related role and focus on "Engineering". At the time
      jQuery was the tool of choice and browser support/hacks were an art form.
    </p>`,
    highlights: [
      "Wrote the Charter Checkout system and client-side validation flow",
      'Experienced all the fun "quirks" of the IE days and Financial Systems',
      'Assisted in creating the "Lift Calculator" an iPhone application'
    ],
    image: "https://liftagency.co/favicon.ico",
    tags: [
      "ActionScript 3.0",
      "Adobe Flash",
      "CSS",
      "Development",
      "Git",
      "HTML",
      "Javascript",
      "jQuery",
      "PHP"
    ],
    title: "Interactive Developer"
  },
  {
    company: "Hotwire",
    companyUrl: "https://hotwire.com",
    contract: !0,
    date: "Apr 2010 - July 2010",
    dateRange: [new Date(2010, 4, 1), new Date(2010, 7, 1)],
    description: `<p>
      Worked in a hybrid Dev/Design capacity within the Creative Services
      department producing e-mails, banners, and 3rd party widgets.
    </p>`,
    highlights: [
      "Created initial prototypes for interactive widgets",
      "General design of marketing collateral"
    ],
    image: "https://hotwire.com/favicon.ico",
    tags: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "CSS",
      "Design",
      "HTML",
      "jQuery",
      "Prototyping"
    ],
    title: "Graphic Designer"
  },
  {
    company: "I.W. Group",
    companyUrl: "https://www.iwgroup.agency",
    date: "Sep 2008 - Feb 2010",
    dateRange: [new Date(2008, 8, 1), new Date(2010, 2, 1)],
    description: `<p>
      A hybrid Dev/Design role creating web and interactive materials for
      clients including; McDonald's, FedEx, PG&E, US Army, US Census, and
      others.
    </p>`,
    highlights: [
      "Management of the APAC Ronald McDonald House Charity web domain",
      "Design & development of interactive Flash media, across 3-5 languages",
      "Speaker: New York, non-profit meetup re: Using social networking to enhance brand awareness"
    ],
    image: "https://assets.website-files.com/6210110d90c0080391bd2d70/62ec7ce2c60a5c558566f5f1_IW%20favicon.png",
    tags: [
      "ActionScript 2.0",
      "ActionScript 3.0",
      "Adobe Flash",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "CSS",
      "HTML",
      "jQuery"
    ],
    title: "Interactive Designer/Developer"
  },
  {
    company: "Zipidee",
    companyUrl: "https://zipidee.com",
    date: "Oct 2007 - Aug 2008",
    dateRange: [new Date(2007, 10, 1), new Date(2008, 8, 1)],
    description: `<p>
      As with any startup, we tend to wear many hats, and this being my first
      professional / non-freelance position I took every opportunity I could
      to learn.
    </p>`,
    highlights: [
      "Implemented and managed the video encoding/transcoding processes",
      "Balancing speed/quality settings across multiple outputs for varying use-cases",
      "Development of custom branded, Flash video players for use on partner domains",
      "Partners include; TiVo, ASPCA, The Weather Channel, and others",
      "Development of interactive Flash components and banners used on site"
    ],
    tags: [
      "ActionScript 2.0",
      "Adobe Flash",
      "Adobe Photoshop",
      "CSS",
      "HTML",
      "Video encoding",
      "Video transcoding"
    ],
    title: "Multi-Media Production Artist"
  }
], social = [
  {
    icon: "/images/svg/github.svg",
    title: "kylekarpack",
    url: "https://github.com/kylekarpack"
  },
  {
    icon: "/images/svg/linkedin.svg",
    title: "/in/kylekarpack",
    url: "https://www.linkedin.com/in/kylekarpack"
  }
];

// app/hooks/useWebShareAPI.ts
var useWebShareAPI = () => {
  let isAvailable = typeof window < "u" && !!navigator.share, data3 = {
    text: SITE_DESCRIPTION,
    title: `Join me on ${SITE_TITLE}`
  };
  return {
    isAvailable,
    onShare: (url) => {
      !isAvailable || navigator.share({ ...data3, url }).then(() => {
        !window.gtag || window.gtag("event", "share", { method: "Web Share" });
      }).catch((error) => {
        console.error("Web Share error", error);
      });
    }
  };
};

// app/components/AppShareButton.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), AppShareLink = () => {
  let { isAvailable, onShare } = useWebShareAPI(), onClick = () => {
    onShare("https://mattscholta.com/resume");
  };
  return isAvailable ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    "button",
    {
      className: "ui-btn custom-bg-gradient whitespace-nowrap rounded-2xl py-2 px-4 text-sm font-normal text-white",
      onClick,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("img", { alt: "Share", height: 20, src: "/images/svg/share.svg", width: 20 }, void 0, !1, {
        fileName: "app/components/AppShareButton.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/AppShareButton.tsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  ) : null;
};

// app/components/AppSocialLink.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), AppSocialLink = (props) => {
  let { data: data3 } = props, alt = `Follow me on ${data3.title}`, size = 14;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    "a",
    {
      className: "flex items-center gap-4 break-words break-all text-sm text-color-copy-light",
      href: data3.url,
      rel: "noopener noreferrer",
      target: "_blank",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("img", { alt, height: size, src: data3.icon, width: size }, void 0, !1, {
          fileName: "app/components/AppSocialLink.tsx",
          lineNumber: 22,
          columnNumber: 7
        }, this),
        data3.title
      ]
    },
    data3.title,
    !0,
    {
      fileName: "app/components/AppSocialLink.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
};

// app/components/SectionEducation.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), SectionEducation = () => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("section", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h2", { className: "py-8 text-lg print:py-4 md:text-xl", children: "Education" }, void 0, !1, {
      fileName: "app/components/SectionEducation.tsx",
      lineNumber: 5,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mb-8 border-t border-solid border-color-border print:hidden" }, void 0, !1, {
      fileName: "app/components/SectionEducation.tsx",
      lineNumber: 6,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SectionEducation.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { children: "San Francisco State University" }, void 0, !1, {
    fileName: "app/components/SectionEducation.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h4", { className: "font-normal", children: [
    "Industrial Design",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("em", { className: "text-sm text-color-copy-light", children: "(incomplete)" }, void 0, !1, {
      fileName: "app/components/SectionEducation.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SectionEducation.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { className: "text-sm", children: [
    "A late change of major from ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("b", { children: "Mechanical Engineering" }, void 0, !1, {
      fileName: "app/components/SectionEducation.tsx",
      lineNumber: 17,
      columnNumber: 39
    }, this),
    " to",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("b", { children: "Industrial Design" }, void 0, !1, {
      fileName: "app/components/SectionEducation.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this),
    " and the lack of available courses I freelanced and went part-time over the course of several years doing graphic/web design, and web development."
  ] }, void 0, !0, {
    fileName: "app/components/SectionEducation.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/SectionEducation.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("ul", { className: "my-4 ml-4 list-disc text-sm font-light", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { className: "my-1", children: "Industrial Designers Society of America 2004 - 2007" }, void 0, !1, {
      fileName: "app/components/SectionEducation.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { className: "my-1", children: "Teaching Assistant: Automated Manufacturing Sys." }, void 0, !1, {
      fileName: "app/components/SectionEducation.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { className: "my-1", children: "Teaching Assistant: Metals Manufacturing" }, void 0, !1, {
      fileName: "app/components/SectionEducation.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { className: "my-1", children: "Teaching Assistant: Drafting & Sketching for Design" }, void 0, !1, {
      fileName: "app/components/SectionEducation.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SectionEducation.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/SectionEducation.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this);

// app/components/SectionExperience.tsx
var import_react15 = require("react");

// app/utils/date-time.ts
var import_date_fns = require("date-fns"), getTimeWorked = (start, end) => {
  let months = (0, import_date_fns.differenceInMonths)(end, start), years = Math.floor(months / 12), remainder = months % 12;
  return `${years} years and ${remainder} months`;
};

// app/components/SectionExperienceDetail.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), SectionExperienceDetail = (props) => {
  let { experience: experience2 } = props, {
    company,
    companyUrl,
    date,
    dateRange,
    description,
    highlights,
    image,
    title
  } = experience2, start = dateRange ? dateRange[0] : new Date(), stop = dateRange != null && dateRange[1] ? dateRange[1] : new Date(), _length = getTimeWorked(start, stop);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex flex-col gap-10 md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex flex-col gap-2 text-base print:basis-8 md:basis-[160px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h3", { className: "flex items-center gap-2 font-bold", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "a",
          {
            className: "underline-offset-4 hover:underline print:text-color-copy-dark",
            dangerouslySetInnerHTML: { __html: company },
            href: companyUrl,
            rel: "noreferrer",
            target: "_blank"
          },
          void 0,
          !1,
          {
            fileName: "app/components/SectionExperienceDetail.tsx",
            lineNumber: 36,
            columnNumber: 13
          },
          this
        ),
        experience2.contract && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("small", { className: "text-xs font-normal italic text-gray-700", children: "(contract)" }, void 0, !1, {
          fileName: "app/components/SectionExperienceDetail.tsx",
          lineNumber: 44,
          columnNumber: 15
        }, this),
        image && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "img",
          {
            alt: `${company} favicon`,
            className: "h-4 w-4",
            height: "auto",
            loading: "eager",
            src: image,
            width: "auto"
          },
          void 0,
          !1,
          {
            fileName: "app/components/SectionExperienceDetail.tsx",
            lineNumber: 49,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/SectionExperienceDetail.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/SectionExperienceDetail.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h3", { className: "uppercase- text-xs font-medium", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "uppercase", children: title }, void 0, !1, {
          fileName: "app/components/SectionExperienceDetail.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "text-color-copy-light", children: date }, void 0, !1, {
          fileName: "app/components/SectionExperienceDetail.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionExperienceDetail.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SectionExperienceDetail.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex-1 text-sm leading-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: description } }, void 0, !1, {
        fileName: "app/components/SectionExperienceDetail.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("ul", { className: "my-4 ml-4 list-disc text-sm font-light text-color-copy", children: highlights.map((highlight, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "li",
        {
          className: "my-1",
          dangerouslySetInnerHTML: { __html: highlight }
        },
        index,
        !1,
        {
          fileName: "app/components/SectionExperienceDetail.tsx",
          lineNumber: 70,
          columnNumber: 13
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/SectionExperienceDetail.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SectionExperienceDetail.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, title, !0, {
    fileName: "app/components/SectionExperienceDetail.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
};

// app/components/SectionExperience.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), SectionExperience = () => {
  let [shown, setShown] = (0, import_react15.useState)(4), experience2 = experience.slice(0, shown), onToggleExp = () => {
    setShown(shown === 4 ? experience.length : 4);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h2", { className: "py-8 text-lg print:py-4 md:text-xl", children: "Experience" }, void 0, !1, {
        fileName: "app/components/SectionExperience.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "mb-8 border-t border-solid border-color-border print:hidden" }, void 0, !1, {
        fileName: "app/components/SectionExperience.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SectionExperience.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "mb-10 flex flex-col gap-10", children: experience2.map((exp) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      SectionExperienceDetail,
      {
        experience: exp
      },
      `${exp.company}/${exp.title}`,
      !1,
      {
        fileName: "app/components/SectionExperience.tsx",
        lineNumber: 27,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/SectionExperience.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "print:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "button",
      {
        className: "ui-btn custom-bg-gradient m-10 mx-auto block rounded-2xl border border-color-border bg-color-background-light py-2 px-4 font-font-sans-serif text-xs text-white",
        onClick: onToggleExp,
        children: shown === 4 ? "Show more" : "Show less"
      },
      void 0,
      !1,
      {
        fileName: "app/components/SectionExperience.tsx",
        lineNumber: 34,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/SectionExperience.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SectionExperience.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};

// app/routes/resume.tsx
var import_resume3 = __toESM(require_resume()), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), links3 = () => [
  {
    href: import_resume3.default,
    media: "print",
    rel: "stylesheet"
  }
], meta8 = (args) => {
  var _a, _b;
  return {
    ...getMetaData({
      canonical: (_b = (_a = args.parentsData) == null ? void 0 : _a.root) == null ? void 0 : _b.canonical,
      description: `The online resume of ${SITE_AUTHOR}, a Software Engineer in Seattle, Washington`,
      title: `${SITE_YEAR} Resume | ${SITE_TITLE}`
    })
  };
};
function resume_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "m-auto max-w-5xl py-10 md:py-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex flex-col gap-20 px-4 md:flex-row md:px-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("aside", { className: "print:hidden md:w-1/5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "sticky top-32", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex flex-row items-center justify-center gap-6 md:flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          "img",
          {
            alt: SITE_AUTHOR,
            className: "custom-bg-gradient aspect-square max-h-48 overflow-hidden rounded-full p-1",
            height: "auto",
            loading: "eager",
            src: "/images/assets/matt-scaled.webp",
            width: "auto"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/resume.tsx",
            lineNumber: 38,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex flex-shrink-0 flex-col gap-2 p-4", children: social.map((data3) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AppSocialLink, { data: data3 }, data3.title, !1, {
          fileName: "app/routes/resume.tsx",
          lineNumber: 48,
          columnNumber: 19
        }, this)) }, void 0, !1, {
          fileName: "app/routes/resume.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/resume.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "mt-8 flex gap-4 print:hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          "a",
          {
            className: "ui-btn custom-bg-gradient flex-1 whitespace-nowrap rounded-2xl py-2 px-4 text-center text-sm font-normal text-white",
            download: !0,
            href: "/resume/Matthew_Scholta_2023.pdf",
            children: "Download Resume"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/resume.tsx",
            lineNumber: 53,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AppShareLink, {}, void 0, !1, {
          fileName: "app/routes/resume.tsx",
          lineNumber: 59,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/resume.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/resume.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/resume.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "resume-sections mb-20 flex flex-1 flex-col gap-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h1", { className: "uppercase- mb-10 text-2xl font-extrabold md:text-4xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "sr-only", children: [
            "The ",
            SITE_YEAR,
            " online resume of "
          ] }, void 0, !0, {
            fileName: "app/routes/resume.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this),
          SITE_AUTHOR
        ] }, void 0, !0, {
          fileName: "app/routes/resume.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "mb-8 border-t border-solid border-color-border print:hidden" }, void 0, !1, {
          fileName: "app/routes/resume.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex items-center gap-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "mr-1", children: "\u{1F468}\u200D\u{1F4BB}" }, void 0, !1, {
            fileName: "app/routes/resume.tsx",
            lineNumber: 73,
            columnNumber: 17
          }, this),
          " A Software Engineer whose passion lies in creating ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("b", { children: "quality code" }, void 0, !1, {
            fileName: "app/routes/resume.tsx",
            lineNumber: 74,
            columnNumber: 42
          }, this),
          " written",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("b", { children: "for humans" }, void 0, !1, {
            fileName: "app/routes/resume.tsx",
            lineNumber: 75,
            columnNumber: 17
          }, this),
          ", unlocking ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("b", { children: "developer productivity" }, void 0, !1, {
            fileName: "app/routes/resume.tsx",
            lineNumber: 75,
            columnNumber: 46
          }, this),
          ", and creating a delightful ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("b", { children: "user experience" }, void 0, !1, {
            fileName: "app/routes/resume.tsx",
            lineNumber: 76,
            columnNumber: 39
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/resume.tsx",
          lineNumber: 72,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/resume.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/resume.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(SectionExperience, {}, void 0, !1, {
        fileName: "app/routes/resume.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(SectionEducation, {}, void 0, !1, {
        fileName: "app/routes/resume.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/resume.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/resume.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/resume.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  meta: () => meta9
});
var React4 = __toESM(require("react"));

// app/data/companies.ts
var data = [
  {
    company: "shiftsmart",
    className: "h-4 md:h-8",
    image: "/images/svg/shiftsmart.svg",
    url: "https://shiftsmart.com"
  },
  {
    company: "thredUP",
    className: "h-4 md:h-8",
    image: "/images/svg/thredup.svg",
    url: "https://thredup.com"
  },
  {
    company: "Haldi",
    className: "h-3 md:h-6",
    image: "/images/svg/haldi.svg",
    url: "https://haldi.com"
  },
  {
    company: "Beyond",
    className: "h-5 md:h-10",
    image: "/images/svg/bynd.svg",
    url: "https://bynd.com"
  },
  {
    company: "Alphabet (Google)",
    className: "h-5 md:h-10",
    image: "/images/svg/google.svg",
    url: "https://abc.xyz/"
  },
  {
    company: "Apple",
    className: "h-6 md:h-12",
    image: "/images/svg/apple.svg",
    url: "https://www.apple.com/business/"
  },
  {
    company: "Meta (Facebook)",
    className: "h-4 md:h-8",
    image: "/images/svg/facebook.svg",
    url: "https://about.facebook.com/"
  },
  {
    company: "Hotwire",
    className: "h-4 md:h-8",
    image: "/images/svg/hotwire.svg",
    url: "https://hotwire.com"
  },
  {
    company: "McDonalds",
    className: "h-5 md:h-10",
    image: "/images/svg/mcdonalds.svg",
    url: "https://mcdonalds.com"
  },
  {
    company: "FedEx",
    className: "h-4 md:h-8",
    image: "/images/svg/fedex.svg",
    url: "https://www.fedex.com/en-us/home.html"
  },
  {
    company: "Charter",
    className: "h-5 md:h-10",
    image: "/images/svg/charter.svg",
    url: "https://charter.com"
  },
  {
    company: "PG&E",
    className: "h-7 md:h-14",
    image: "/images/svg/pge.svg",
    url: "https://pge.com"
  },
  {
    company: "US Census",
    className: "h-5 md:h-10",
    image: "/images/svg/census.svg",
    url: "https://www.census.gov"
  },
  {
    company: "US Army",
    className: "h-8 md:h-16",
    image: "/images/svg/army.svg",
    url: "https://www.army.mil"
  }
];

// app/components/SectionCompanies.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), SectionCompanies = () => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("section", { className: "work-companies border-0 border-b border-solid border-b-color-border ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex-1 py-10 md:py-20", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("h2", { className: "mb-10 text-center text-xl md:mb-20 md:text-4xl", children: "Companies I've built things for." }, void 0, !1, {
    fileName: "app/components/SectionCompanies.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
    "div",
    {
      className: "mx:mx-20 mx-10 flex flex-1 flex-wrap items-center justify-center gap-10 md:gap-20 lg:mx-40",
      style: {
        filter: "grayscale(1)"
      },
      children: data.map((node) => {
        let { className, company, image, url } = node;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("a", { href: url, rel: "noreferrer", target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "img",
          {
            alt: company,
            className: `${className} opacity-50 transition-opacity duration-500 hover:opacity-100`,
            height: "auto",
            loading: "lazy",
            src: image,
            width: "auto"
          },
          void 0,
          !1,
          {
            fileName: "app/components/SectionCompanies.tsx",
            lineNumber: 22,
            columnNumber: 17
          },
          this
        ) }, company, !1, {
          fileName: "app/components/SectionCompanies.tsx",
          lineNumber: 21,
          columnNumber: 15
        }, this);
      })
    },
    void 0,
    !1,
    {
      fileName: "app/components/SectionCompanies.tsx",
      lineNumber: 11,
      columnNumber: 9
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/SectionCompanies.tsx",
  lineNumber: 6,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/SectionCompanies.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this);

// app/components/SectionTechnology.tsx
var import_classnames9 = __toESM(require("classnames")), import_react16 = require("react");

// app/data/details.ts
var data2 = {
  default: `This is a <b class="font-bold">non exhaustive</b> list of tools and technologies I use to make products come to life. I'm also very comfortable pushing pixels in Figma, Adobe, Video, and 3D modelling.`,
  TypeScript: "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.",
  Remix: "Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience. People are gonna love using your stuff.",
  React: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
  "Node.js": "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
  TailwindCSS: "TailwindCSS is a framework like no other. Rather than constraining you to a set design, it gives you the tools and the standardization to build exactly what you want.",
  DevOps: "Working on small(er) teams has allowed me to venture out of my comfort zone and into fields like DevOps. The opportunity to impact the Developer experience every step of the way has been incredibly rewarding.",
  Docker: "A microservice architecture encourages the use of many application working in tandem. Using Docker and Docker Compose we can quickly spin up very complex systems mirroring what we use in production.",
  Javascript: "I've been using Javascript for well over a decade and I've only continued to find myself more excited about the language and accellerated growth it has seen.",
  Kubernetes: "Running an organization like thredUP at scale is a great way to learn about the Kubernetes ecosystem. I've been using Kubernetes for a while now and I'm very excited to learn more about it in the future.",
  NextJS: "Next.js is an open-source web development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.",
  PostCSS: "PostCSS is a software development tool that uses JavaScript-based plugins to automate routine CSS operations. A tool for transforming CSS with JavaScript",
  VSCode: "Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git. It rocks \u{1F918}!",
  CSS: "Pushing pixels is what got me into development so its no suprise I genuinely love CSS. My preferred tooling includes; TailwindCSS, CSS Modules, PostCSS, and Progressive Enhancement."
};

// app/components/SectionTechnology.tsx
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), SectionTechnology = () => {
  let refDescription = (0, import_react16.useRef)(null), [heading, setHeading] = (0, import_react16.useState)(), description = heading ? data2[heading] : data2.default, keys = Object.keys(data2).filter((key) => key !== "default");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:py-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "basis-2/5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h2", { className: "mb-8 text-xl md:text-3xl", children: [
        "Technology ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("span", { className: "ml-2", children: "\u{1F9F0}" }, void 0, !1, {
          fileName: "app/components/SectionTechnology.tsx",
          lineNumber: 22,
          columnNumber: 22
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionTechnology.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "work-details flex flex-wrap gap-2", children: keys.map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        "button",
        {
          className: (0, import_classnames9.default)("rounded-md px-2 py-1 text-sm", {
            active: key === heading
          }),
          onClick: () => {
            setHeading(heading === key ? void 0 : key);
          },
          type: "button",
          children: key
        },
        key,
        !1,
        {
          fileName: "app/components/SectionTechnology.tsx",
          lineNumber: 30,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/SectionTechnology.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SectionTechnology.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
      "blockquote",
      {
        className: "my-8 basis-3/5 text-xl font-light leading-relaxed",
        dangerouslySetInnerHTML: { __html: description },
        ref: refDescription
      },
      void 0,
      !1,
      {
        fileName: "app/components/SectionTechnology.tsx",
        lineNumber: 48,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/SectionTechnology.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};

// app/components/SectionAmbitions.tsx
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime"), SectionAmbitions = () => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("section", { className: "mx-auto my-20 max-w-3xl px-4 md:my-40 md:px-0", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("h2", { className: "my-4 text-xl md:text-3xl", children: "Ambitions \u{1F3AF}" }, void 0, !1, {
    fileName: "app/components/SectionAmbitions.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("b", { children: "15+" }, void 0, !1, {
      fileName: "app/components/SectionAmbitions.tsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    " years of professional experience, the past 7 years at startups, and I love the flexibility it provides! It's allowed me to shift focus from the Frontend, to Backend, and into DevOps. I'm always looking for ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("b", { className: "italic", children: "new challenges" }, void 0, !1, {
      fileName: "app/components/SectionAmbitions.tsx",
      lineNumber: 9,
      columnNumber: 21
    }, this),
    " and",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("b", { className: "italic", children: "opportunities" }, void 0, !1, {
      fileName: "app/components/SectionAmbitions.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    " to push myself, and the products I help create."
  ] }, void 0, !0, {
    fileName: "app/components/SectionAmbitions.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/SectionAmbitions.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this);

// app/routes/index.tsx
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), meta9 = (args) => {
  var _a, _b;
  return {
    ...getMetaData({
      canonical: (_b = (_a = args.parentsData) == null ? void 0 : _a.root) == null ? void 0 : _b.canonical,
      title: `${SITE_TITLE}`
    })
  };
};
function routes_default() {
  let [heading, setHeading] = React4.useState("A Software Engineer");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_jsx_dev_runtime29.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("section", { className: "relative z-0 m-auto flex max-w-6xl flex-col-reverse items-center justify-center gap-4 py-20 md:flex-row md:py-40", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        AppHero,
        {
          className: "py-10 md:py-20 md:text-right",
          copy: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { className: "whitespace-nowrap", children: heading }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 39,
            columnNumber: 19
          }, this),
          highlight: SITE_AUTHOR,
          tag: "h1"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 37,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        "img",
        {
          alt: SITE_AUTHOR,
          className: "custom-bg-gradient aspect-square max-h-32 cursor-pointer overflow-hidden rounded-full p-1 transition-transform hover:scale-110 active:rotate-6 md:max-h-40",
          height: "auto",
          loading: "eager",
          onClick: async () => {
            let data3 = await getQuote(heading);
            setHeading(data3);
          },
          src: "/images/assets/headshot.jpg",
          width: "auto"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 44,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("section", { className: "border-0 border-t border-b border-solid border-color-border bg-color-background-light px-8 py-20 text-color-background-dark md:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("blockquote", { className: "mx-auto my-20 max-w-4xl text-2xl font-normal md:my-40 md:text-3xl", children: [
      "Passionate about ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("b", { children: "quality code" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 58,
        columnNumber: 28
      }, this),
      " written ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("b", { children: "for humans" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 58,
        columnNumber: 56
      }, this),
      ", unlocking ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("b", { children: "developer productivity" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 59,
        columnNumber: 21
      }, this),
      ", and creating a delightful",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("b", { children: "user experience" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(SectionAmbitions, {}, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("section", { className: "bg-color-background-dark py-20 text-color-background-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(SectionTechnology, {}, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(SectionCompanies, {}, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/uses.tsx
var uses_exports = {};
__export(uses_exports, {
  default: () => uses_default,
  meta: () => meta10
});

// app/components/SectionHardware.tsx
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), SectionHardware = () => {
  let laptop = "https://www.apple.com/macbook-pro/", monitor = "https://www.amazon.com/gp/product/B074JKT894", storage = "https://www.amazon.com/gp/product/B01MRSRQLA", disks = "https://www.amazon.com/gp/product/B01AV1697A", desk = "https://www.amazon.com/gp/product/B07HJJLLML", keyboard = "https://www.apple.com/shop/product/MK2A3LL/A/magic-keyboard-us-english", headphones = "https://www.amazon.com/Bose-QuietComfort-Wireless-Headphones-Cancelling/dp/B0756CYWWD", mouse = "https://www.apple.com/shop/product/MMMQ3AM/A/magic-mouse-black-multi-touch-surface", linkProps = {
    rel: "noreferrer",
    target: "_blank"
  }, cssHardware = "flex gap-4 items-center justify-center flex-1 rounded-md border border-solid border-color-border bg-color-background-light px-4 py-8";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("section", { className: "m-auto max-w-6xl py-20 px-4 md:my-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h2", { className: "pb-8 text-3xl", children: [
      "Hardware ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { className: "ml-2", children: "\u{1F4BB}" }, void 0, !1, {
        fileName: "app/components/SectionHardware.tsx",
        lineNumber: 23,
        columnNumber: 18
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SectionHardware.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("p", { children: "I've been happily developing on a Mac over the last 10+ years. However, I grew up on PC's and built a few rigs over the years for gaming and work. Now days a perk of working in Software our employer often supplies a well equipped box." }, void 0, !1, {
      fileName: "app/components/SectionHardware.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("ul", { className: "my-10 list-disc columns-1 pl-4 md:columns-2 lg:columns-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("li", { children: [
        "Computer -",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("a", { ...linkProps, href: laptop, children: 'MacBook Pro 14"' }, void 0, !1, {
          fileName: "app/components/SectionHardware.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionHardware.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("li", { className: "ml-4", children: "M1 Max with 64GB of RAM \u{1F60D} \u{1F525}" }, void 0, !1, {
        fileName: "app/components/SectionHardware.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("li", { children: [
        "Monitor -",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("a", { ...linkProps, href: monitor, children: '34" LG Curved Ultra-wide' }, void 0, !1, {
          fileName: "app/components/SectionHardware.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionHardware.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("li", { children: [
        "Storage -",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("a", { ...linkProps, href: storage, children: "TerraMaster RAID Enclosure" }, void 0, !1, {
          fileName: "app/components/SectionHardware.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionHardware.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("li", { className: "ml-4", children: [
        "2x",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("a", { ...linkProps, href: disks, children: "WD Gold 4TB @7200 RPM" }, void 0, !1, {
          fileName: "app/components/SectionHardware.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionHardware.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("li", { children: [
        "Desk -",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("a", { ...linkProps, href: desk, children: "Adjustable height Desk" }, void 0, !1, {
          fileName: "app/components/SectionHardware.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionHardware.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("li", { children: [
        "Keyboard -",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("a", { ...linkProps, href: keyboard, children: "Apple Magic Keyboard" }, void 0, !1, {
          fileName: "app/components/SectionHardware.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionHardware.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("li", { children: [
        "Music -",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("a", { ...linkProps, href: headphones, children: "Bose Headphones" }, void 0, !1, {
          fileName: "app/components/SectionHardware.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionHardware.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("li", { children: [
        "Mouse -",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("a", { ...linkProps, href: mouse, children: "Apple Magic Mouse" }, void 0, !1, {
          fileName: "app/components/SectionHardware.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionHardware.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SectionHardware.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SectionHardware.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
};

// app/components/SectionMisc.tsx
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), SectionMisc = () => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("section", { className: "m-auto max-w-6xl px-4 md:my-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex flex-col gap-10 md:flex-row", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h2", { className: "mb-8 text-3xl", children: [
      "Miscellaneous ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { className: "ml-2", children: "\u{1F9E9}" }, void 0, !1, {
        fileName: "app/components/SectionMisc.tsx",
        lineNumber: 7,
        columnNumber: 27
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SectionMisc.tsx",
      lineNumber: 6,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("p", { children: "Living in San Diego you can find me and the family at the beach! Otherwise there's a good chance I am hauling ass along the coast on my motorcycle \u{1F3CD}\uFE0F\u{1F4A8}." }, void 0, !1, {
      fileName: "app/components/SectionMisc.tsx",
      lineNumber: 9,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SectionMisc.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex flex-shrink-0 flex-wrap gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
      "img",
      {
        alt: "Me, my son, and our dog at the beach",
        className: "aspect-square max-w-[47%] flex-grow",
        height: "auto",
        loading: "lazy",
        src: "https://s3-us-west-1.amazonaws.com/mattscholta/instagram/05.jpg",
        width: 200
      },
      void 0,
      !1,
      {
        fileName: "app/components/SectionMisc.tsx",
        lineNumber: 16,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
      "img",
      {
        alt: "My 2014 Triumph Thruxton 900 in front of a Lifeguard tower",
        className: "aspect-square max-w-[47%] flex-grow",
        height: "auto",
        loading: "lazy",
        src: "https://s3-us-west-1.amazonaws.com/mattscholta/instagram/07.jpg",
        width: 200
      },
      void 0,
      !1,
      {
        fileName: "app/components/SectionMisc.tsx",
        lineNumber: 24,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
      "img",
      {
        alt: "My 2014 Triumph Thruxton 900 in front some cool reeds",
        className: "aspect-square flex-grow",
        height: "auto",
        loading: "lazy",
        src: "https://s3-us-west-1.amazonaws.com/mattscholta/instagram/06.jpg",
        width: 200
      },
      void 0,
      !1,
      {
        fileName: "app/components/SectionMisc.tsx",
        lineNumber: 32,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/SectionMisc.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/SectionMisc.tsx",
  lineNumber: 4,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/SectionMisc.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this);

// app/components/SectionSoftware.tsx
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), SectionSoftware = () => {
  let linkProps = {
    className: "font-font-serif text-base text-color-copy-light",
    rel: "noreferrer",
    target: "_blank"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("section", { className: "m-auto max-w-5xl px-4 py-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h2", { className: "mb-8 text-3xl", children: [
      "Software ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "ml-2", children: "\u{1F468}\u200D\u{1F4BB}" }, void 0, !1, {
        fileName: "app/components/SectionSoftware.tsx",
        lineNumber: 12,
        columnNumber: 18
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SectionSoftware.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "my-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h3", { className: "my-4 text-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("a", { ...linkProps, href: "https://code.visualstudio.com/insiders", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "mr-2", children: "\u{1F9F0}" }, void 0, !1, {
            fileName: "app/components/SectionSoftware.tsx",
            lineNumber: 28,
            columnNumber: 15
          }, this),
          " Visual Studio Code"
        ] }, void 0, !0, {
          fileName: "app/components/SectionSoftware.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/SectionSoftware.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { children: "Is my editor of choice and I could not be happier! It 100% does everything I need it to and I am continuously impressed by the improvements I've seen to date." }, void 0, !1, {
          fileName: "app/components/SectionSoftware.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionSoftware.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h3", { className: "my-4 text-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("a", { ...linkProps, href: "https://iterm2.com/", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "mr-2", children: "$" }, void 0, !1, {
            fileName: "app/components/SectionSoftware.tsx",
            lineNumber: 41,
            columnNumber: 15
          }, this),
          " Iterm2"
        ] }, void 0, !0, {
          fileName: "app/components/SectionSoftware.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/SectionSoftware.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { children: "As far as terminal users go, I use it heavily every day. iTerm2 is free and full of features I use and many that I don't even know exist. Tabs, split-view, fast and reliable." }, void 0, !1, {
          fileName: "app/components/SectionSoftware.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionSoftware.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h3", { className: "my-4 text-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
          "a",
          {
            ...linkProps,
            href: "https://www.docker.com/products/docker-desktop",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "mr-2", children: "\u{1F433}" }, void 0, !1, {
                fileName: "app/components/SectionSoftware.tsx",
                lineNumber: 57,
                columnNumber: 15
              }, this),
              " Docker Desktop"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/SectionSoftware.tsx",
            lineNumber: 53,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/SectionSoftware.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { children: "At the core of the modern development workflow is \u{1F433} Docker. I can't begin to explain how enjoyable a great docker and docker-compose workflow can be." }, void 0, !1, {
          fileName: "app/components/SectionSoftware.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionSoftware.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h3", { className: "my-4 text-xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "mr-2", children: "\u{1F3A8}" }, void 0, !1, {
            fileName: "app/components/SectionSoftware.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("a", { ...linkProps, href: "https://www.figma.com/", children: "Figma" }, void 0, !1, {
            fileName: "app/components/SectionSoftware.tsx",
            lineNumber: 70,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/SectionSoftware.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { children: "It's not that often that get to play designer but I do enjoy keeping up with the tools. Figma is available in the browser + app, incredibly fast, powerful, and FREE. I love it!" }, void 0, !1, {
          fileName: "app/components/SectionSoftware.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SectionSoftware.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SectionSoftware.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SectionSoftware.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
};

// app/routes/uses.tsx
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime"), meta10 = (args) => {
  var _a, _b;
  return {
    ...getMetaData({
      canonical: (_b = (_a = args.parentsData) == null ? void 0 : _a.root) == null ? void 0 : _b.canonical,
      description: "Check out uses.tech for a list of more /uses pages!",
      title: `Uses | ${SITE_TITLE}`
    })
  };
};
function uses_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_jsx_dev_runtime33.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("section", { className: "bg-color-background-dark text-color-background", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
      AppHero,
      {
        className: "py-20 md:py-40",
        copy: "If you're curious",
        highlight: "What I'm using",
        tag: "h1"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/uses.tsx",
        lineNumber: 25,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/uses.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(SectionHardware, {}, void 0, !1, {
      fileName: "app/routes/uses.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "border-0 border-t border-solid border-t-color-border bg-color-background-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(SectionSoftware, {}, void 0, !1, {
      fileName: "app/routes/uses.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/uses.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "bg-color-background-dark py-20 text-color-background-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(SectionMisc, {}, void 0, !1, {
      fileName: "app/routes/uses.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/uses.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/uses.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "0ed3ace3", entry: { module: "/build/entry.client-7IQ75F7V.js", imports: ["/build/_shared/chunk-7RHL3K4S.js", "/build/_shared/chunk-VIPVJV6J.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-JO4IIS2H.js", imports: ["/build/_shared/chunk-FXIJPGLV.js", "/build/_shared/chunk-VKBADAWC.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/[robots.txt]": { id: "routes/[robots.txt]", parentId: "root", path: "robots.txt", index: void 0, caseSensitive: void 0, module: "/build/routes/[robots.txt]-VQ27HJRM.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/[sitemap.xml]": { id: "routes/[sitemap.xml]", parentId: "root", path: "sitemap.xml", index: void 0, caseSensitive: void 0, module: "/build/routes/[sitemap.xml]-LMNECGY7.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/blog/$slug": { id: "routes/api/blog/$slug", parentId: "root", path: "api/blog/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/api/blog/$slug-JZZI3NZE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/blog/index": { id: "routes/api/blog/index", parentId: "root", path: "api/blog", index: !0, caseSensitive: void 0, module: "/build/routes/api/blog/index-KN2T6G5T.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/portfolio/$slug": { id: "routes/api/portfolio/$slug", parentId: "root", path: "api/portfolio/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/api/portfolio/$slug-DQQPBBGD.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/portfolio/index": { id: "routes/api/portfolio/index", parentId: "root", path: "api/portfolio", index: !0, caseSensitive: void 0, module: "/build/routes/api/portfolio/index-4UH3B7ZO.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/qualities": { id: "routes/api/qualities", parentId: "root", path: "api/qualities", index: void 0, caseSensitive: void 0, module: "/build/routes/api/qualities-7A2F5LET.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/$slug": { id: "routes/blog/$slug", parentId: "root", path: "blog/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/$slug-UVOA3RUQ.js", imports: ["/build/_shared/chunk-NBWHSWK2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/blog/index": { id: "routes/blog/index", parentId: "root", path: "blog", index: !0, caseSensitive: void 0, module: "/build/routes/blog/index-FD3IO3YV.js", imports: ["/build/_shared/chunk-NBWHSWK2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-V7BCTFBC.js", imports: ["/build/_shared/chunk-NBWHSWK2.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/portfolio/$slug": { id: "routes/portfolio/$slug", parentId: "root", path: "portfolio/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/portfolio/$slug-RDD6SVVN.js", imports: ["/build/_shared/chunk-NBWHSWK2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/portfolio/index": { id: "routes/portfolio/index", parentId: "root", path: "portfolio", index: !0, caseSensitive: void 0, module: "/build/routes/portfolio/index-YQJXOT7O.js", imports: ["/build/_shared/chunk-NBWHSWK2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resume": { id: "routes/resume", parentId: "root", path: "resume", index: void 0, caseSensitive: void 0, module: "/build/routes/resume-UXYEI4PO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sandbox/css-polaroid": { id: "routes/sandbox/css-polaroid", parentId: "root", path: "sandbox/css-polaroid", index: void 0, caseSensitive: void 0, module: "/build/routes/sandbox/css-polaroid-OOFTRSQ3.js", imports: ["/build/_shared/chunk-YZZJMHG7.js", "/build/_shared/chunk-NBWHSWK2.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sandbox/index": { id: "routes/sandbox/index", parentId: "root", path: "sandbox", index: !0, caseSensitive: void 0, module: "/build/routes/sandbox/index-26HZXVWJ.js", imports: ["/build/_shared/chunk-YZZJMHG7.js", "/build/_shared/chunk-NBWHSWK2.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/uses": { id: "routes/uses", parentId: "root", path: "uses", index: void 0, caseSensitive: void 0, module: "/build/routes/uses-OJTYO55I.js", imports: ["/build/_shared/chunk-NBWHSWK2.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-0ED3ACE3.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/sandbox/css-polaroid": {
    id: "routes/sandbox/css-polaroid",
    parentId: "root",
    path: "sandbox/css-polaroid",
    index: void 0,
    caseSensitive: void 0,
    module: css_polaroid_exports
  },
  "routes/api/portfolio/$slug": {
    id: "routes/api/portfolio/$slug",
    parentId: "root",
    path: "api/portfolio/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/api/portfolio/index": {
    id: "routes/api/portfolio/index",
    parentId: "root",
    path: "api/portfolio",
    index: !0,
    caseSensitive: void 0,
    module: portfolio_exports
  },
  "routes/portfolio/$slug": {
    id: "routes/portfolio/$slug",
    parentId: "root",
    path: "portfolio/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports2
  },
  "routes/portfolio/index": {
    id: "routes/portfolio/index",
    parentId: "root",
    path: "portfolio",
    index: !0,
    caseSensitive: void 0,
    module: portfolio_exports2
  },
  "routes/api/blog/$slug": {
    id: "routes/api/blog/$slug",
    parentId: "root",
    path: "api/blog/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports3
  },
  "routes/api/blog/index": {
    id: "routes/api/blog/index",
    parentId: "root",
    path: "api/blog",
    index: !0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/[sitemap.xml]": {
    id: "routes/[sitemap.xml]",
    parentId: "root",
    path: "sitemap.xml",
    index: void 0,
    caseSensitive: void 0,
    module: sitemap_xml_exports
  },
  "routes/api/qualities": {
    id: "routes/api/qualities",
    parentId: "root",
    path: "api/qualities",
    index: void 0,
    caseSensitive: void 0,
    module: qualities_exports
  },
  "routes/sandbox/index": {
    id: "routes/sandbox/index",
    parentId: "root",
    path: "sandbox",
    index: !0,
    caseSensitive: void 0,
    module: sandbox_exports
  },
  "routes/[robots.txt]": {
    id: "routes/[robots.txt]",
    parentId: "root",
    path: "robots.txt",
    index: void 0,
    caseSensitive: void 0,
    module: robots_txt_exports
  },
  "routes/blog/$slug": {
    id: "routes/blog/$slug",
    parentId: "root",
    path: "blog/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports4
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: !0,
    caseSensitive: void 0,
    module: blog_exports2
  },
  "routes/resume": {
    id: "routes/resume",
    parentId: "root",
    path: "resume",
    index: void 0,
    caseSensitive: void 0,
    module: resume_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/uses": {
    id: "routes/uses",
    parentId: "root",
    path: "uses",
    index: void 0,
    caseSensitive: void 0,
    module: uses_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map

var j = Object.defineProperty;
var L = (a, o, t) => o in a ? j(a, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[o] = t;
var l = (a, o, t) => (L(a, typeof o != "symbol" ? o + "" : o, t), t), A = (a, o, t) => {
  if (!o.has(a))
    throw TypeError("Cannot " + t);
};
var i = (a, o, t) => (A(a, o, "read from private field"), t ? t.call(a) : o.get(a)), g = (a, o, t) => {
  if (o.has(a))
    throw TypeError("Cannot add the same private member more than once");
  o instanceof WeakSet ? o.add(a) : o.set(a, t);
}, d = (a, o, t, s) => (A(a, o, "write to private field"), s ? s.call(a, t) : o.set(a, t), t);
import { customElement as M, QuarkElement as e, property as G, state as v, createRef as R } from "quarkc";
import w from "@docsearch/js";
function c(a, o, t, s) {
  var b = arguments.length, h = b < 3 ? o : s === null ? s = Object.getOwnPropertyDescriptor(o, t) : s, k;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    h = Reflect.decorate(a, o, t, s);
  else
    for (var y = a.length - 1; y >= 0; y--)
      (k = a[y]) && (h = (b < 3 ? k(h) : b > 3 ? k(o, t, h) : k(o, t)) || h);
  return b > 3 && h && Object.defineProperty(o, t, h), h;
}
const B = `*{font-family:Inter var,Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}html,body,a,button,input{outline:0 none;border:0;text-decoration:none}p{margin:0}a{transition:all .25s}button{background-color:transparent;cursor:pointer}.header{z-index:30;top:0px;position:sticky;min-width:860px;width:100%;background:#fff}.toper-bar,.left-bar{display:flex;align-items:center}.menu-group{display:flex;gap:2rem}.left-bar a{color:#6b7280;display:flex;align-items:center;margin-right:.5rem}.left-bar img{height:2rem}.header>div{margin-left:auto;margin-right:auto}.header .container{margin:0 auto;padding:1.25rem;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--line-light);background-color:var(--main-bg)}.nav-item a{font-size:14px;color:var(--text-font-color-light);font-family:var(--font-family-base)}.nav-item a:hover{color:var(--nav-link-color)}.nav-item button{color:var(--text-font-color-light, rgba(60, 60, 67, .92));font-family:var(--font-family-base);transition:color .5s}.nav-item button:hover{color:var(--nav-link-color)}.active-nav a{color:var(--brand-color)}.translations,.appearance,.social-links{display:flex}.translations:before,.appearance:before,.social-links:before{margin:0 16px;width:1px;height:24px;background-color:#3c3c431f;content:""}.social-links,.translate-lang{display:flex;align-items:center;color:var(--text-font-color-light);font-family:var(--font-family-base)}.social-links a{width:40px;height:36px;display:flex;align-items:center;justify-content:center;color:var(--text-font-color-light);font-family:var(--font-family-base)}.social-links a:hover,.translate-lang:hover{color:var(--nav-link-color)}.social-links svg,.translate-lang svg{width:20px;height:20px;fill:currentColor}.flyout{position:relative}.flyout a{display:flex;align-items:center}.flyout svg{margin-left:4px;width:14pxpx;height:14px;fill:currentColor}.flyout-menu{position:absolute;top:calc(var(--nav-height) / 2 + 15px);right:0;opacity:0;visibility:hidden;transform:translateY(-4px);transition:opacity .25s,visibility .25s,transform .25s}.menu-wrap{border-radius:8px;padding:12px 0;min-width:192px;border:1px solid transparent;background:var(--main-bg);box-shadow:var(--main-shadow);transition:background-color .5s}.menu-items{transition:border-color .5s}.flyout-menu .menu-wrap .menu-item-group{padding:0 0 12px}.menu-group-title{padding:0 18px;line-height:28px;font-size:10px;font-weight:600;color:#cacaca;text-transform:uppercase;transition:color .25s}.menu-link{display:block;padding:0 18px;line-height:28px;font-size:13px;font-weight:400;color:var(--c-text-1);white-space:nowrap;transition:color .25s}.flyout:hover .flyout-menu,.flyout-button+.flyout-menu{opacity:1;visibility:visible;transform:translateY(0)}:root{--docsearch-primary-color: #5468ff;--docsearch-text-color: #1c1e21;--docsearch-spacing: 12px;--docsearch-icon-stroke-width: 1.4;--docsearch-highlight-color: var(--docsearch-primary-color);--docsearch-muted-color: #969faf;--docsearch-container-background: rgba(101, 108, 133, .8);--docsearch-logo-color: #5468ff;--docsearch-modal-width: 560px;--docsearch-modal-height: 600px;--docsearch-modal-background: #f5f6f7;--docsearch-modal-shadow: inset 1px 1px 0 0 hsla(0, 0%, 100%, .5),0 3px 8px 0 #555a64;--docsearch-searchbox-height: 56px;--docsearch-searchbox-background: #ebedf0;--docsearch-searchbox-focus-background: #fff;--docsearch-searchbox-shadow: inset 0 0 0 2px var(--docsearch-primary-color);--docsearch-hit-height: 56px;--docsearch-hit-color: #444950;--docsearch-hit-active-color: #fff;--docsearch-hit-background: #fff;--docsearch-hit-shadow: 0 1px 3px 0 #d4d9e1;--docsearch-key-gradient: linear-gradient(-225deg, #d5dbe4, #f8f8f8);--docsearch-key-shadow: inset 0 -2px 0 0 #cdcde6,inset 0 0 1px 1px #fff,0 1px 2px 1px rgba(30,35,90,.4);--docsearch-footer-height: 44px;--docsearch-footer-background: #fff;--docsearch-footer-shadow: 0 -1px 0 0 #e0e3e8,0 -3px 6px 0 rgba(69,98,155,.12)}.DocSearch-Button-Container{align-items:center;display:flex}.DocSearch-Button{align-items:center;background:var(--docsearch-searchbox-background, #969faf);border:0;border-radius:40px;color:var(--docsearch-muted-color, #969faf);cursor:pointer;display:flex;font-weight:500;height:36px;justify-content:space-between;margin:0 0 0 16px;padding:0 8px;user-select:none}.DocSearch-Button .DocSearch-Search-Icon{color:var(--docsearch-text-color)}.DocSearch-Button-Placeholder{font-size:1rem;padding:0 12px 0 6px}.DocSearch-Search-Icon{stroke-width:1.6}.left-bar span{display:flex;align-items:center;color:#9ca3af;font-size:14px}.DocSearch-Button-Keys{display:flex;min-width:calc(40px + .8em)}.DocSearch-Button-Key{align-items:center;background:var(--docsearch-key-gradient);border-radius:3px;box-shadow:var(--docsearch-key-shadow);color:var(--docsearch-muted-color);display:flex;height:18px;justify-content:center;margin-right:.4em;position:relative;padding:0 0 2px;border:0;top:-1px;width:20px}.DocSearch-Button:active,.DocSearch-Button:focus,.DocSearch-Button:hover{background:var(--docsearch-searchbox-focus-background);box-shadow:var(--docsearch-searchbox-shadow);color:var(--docsearch-text-color);outline:none}.toper-message{background-color:#000;text-align:center;line-height:30px;font-size:13px;color:#fff}.toper-message a{color:#fff;opacity:.85}.toper-message a:hover{opacity:1}
`, z = `*,:after,:before{box-sizing:border-box}:host{contain:content;display:inline-block}:host img{max-width:100%;margin-left:0;margin-right:0;margin-top:0;padding:0;margin-bottom:1.75rem}.toggle{position:relative;touch-action:pan-x;cursor:pointer;background-color:transparent;border:0;padding:0;-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent}.toggle .track{width:48px;height:22px;padding:0;border-radius:30px;background-color:#313136;transition:all .2s ease;border:1px solid rgba(82,82,89,.68)}.toggle .track .check,.toggle .track .x{position:absolute;width:17px;height:17px;top:0;bottom:0;margin-top:auto;margin-bottom:auto;line-height:0}.toggle .track .check{left:5px;opacity:0;transition:opacity .25s ease}.toggle .track .x{right:5px}.toggle.dark .track .check,.toggle.dark .track .x{opacity:1;transition:opacity .25s ease}.toggle.dark .track .x{opacity:0}.toggle .thumb{position:absolute;top:1px;left:1px;width:20px;height:20px;border-radius:50%;background-color:#fafafa;box-sizing:border-box;transition:all .5s cubic-bezier(.23,1,.32,1) 0ms;transform:translate(0)}.toggle.dark .thumb{transform:translate(26px);border-color:#19ab27}
`;
let S = class extends e {
  constructor() {
    super();
    l(this, "turnDark", () => {
      document.documentElement.classList.add("dark"), localStorage.setItem("theme", "dark");
    });
    l(this, "turnLight", () => {
      document.documentElement.classList.remove("dark"), localStorage.setItem("theme", "light");
    });
  }
  componentDidMount() {
    const t = window.matchMedia("(prefers-color-scheme: dark)"), s = this.shadowRoot.querySelector(".toggle");
    localStorage.theme === "dark" ? this.turnDark() : localStorage.theme === "light" ? (s.classList.toggle("dark"), this.turnLight()) : t.matches && document.documentElement.classList.add("dark"), s.addEventListener("click", (b) => {
      s.classList.toggle("dark"), s.classList.contains("dark") ? this.turnLight() : this.turnDark();
    });
  }
  render() {
    return e.h(
      "div",
      { class: "toggle" },
      e.h(
        "div",
        { class: "track" },
        e.h(
          "div",
          { class: "check" },
          e.h("img", { src: "data:image/png;base64,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", width: "16", height: "16", role: "presentation", style: "pointer-events: none;" })
        ),
        e.h(
          "div",
          { class: "x" },
          e.h("img", { src: "data:image/png;base64,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", width: "16", height: "16", role: "presentation", style: "pointer-events: none;" })
        )
      ),
      e.h("div", { class: "thumb" })
    );
  }
};
S = c([
  M({ tag: "dark-mode", style: z })
], S);
const I = {
  "zh-CN": {
    ecosystem: "生态系统",
    docsTitle: "组件库文档",
    component: "组件",
    docs: "组件库",
    guide: "指南",
    officialLibrary: "官方工具",
    stack: "用 Quark 构建跨技术栈组件",
    noFrame: "用 Quark 构建无框架应用（Beta）",
    resources: "资源",
    vscodePlugin: "VSCode 插件",
    help: "帮助",
    gitHubDiscussions: "GitHub 论坛",
    stacks: [
      "Vue",
      "React",
      "Vanilla",
      "Svelte",
      "Angular"
    ]
  },
  "en-US": {
    ecosystem: "Ecosystem",
    docsTitle: "Docs",
    component: "Components",
    docs: "Docs",
    guide: "Guide",
    officialLibrary: "Offical Tools",
    stack: "Building cross-technology-stack components with Quark",
    noFrame: "Building frameworkless applications with Quark (Beta)",
    resources: "RESOURCES",
    vscodePlugin: "VSCode Plugin",
    help: "HELP",
    gitHubDiscussions: "GitHub Discussions",
    stacks: [
      "Vue",
      "React",
      "Vanilla",
      "Svelte",
      "Angular"
    ]
  }
};
var p, r, u, m, x, f, C;
let n = (C = class extends e {
  constructor() {
    super();
    g(this, p, void 0);
    g(this, r, void 0);
    g(this, u, void 0);
    g(this, m, void 0);
    g(this, x, void 0);
    g(this, f, void 0);
    l(this, "from", "");
    l(this, "logo", "");
    l(this, "githubUrl", "");
    l(this, "homeUrl", "");
    l(this, "guideUrl", "");
    l(this, "componentUrl", "");
    l(this, "activeNav", "");
    l(this, "searchRef", R());
    l(this, "navActive", () => {
      location.hash.indexOf("guide") > -1 ? this.activeNav = "guide" : location.hash.indexOf("component") > -1 && (this.activeNav = "component");
    });
    l(this, "_quarkdLogoSwitch", () => {
      const t = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.theme === "dark" ? this.logo = "https://m.hellobike.com/resource/helloyun/13459/MRdWv_quarkd-light.png?x-oss-process=image/quality,q_80" : localStorage.theme === "light" ? this.logo = "https://m.hellobike.com/resource/helloyun/13459/Z_3qI_quarkd-dark.png?x-oss-process=image/quality,q_80" : t.matches && localStorage.theme !== "light" && (this.logo = "https://m.hellobike.com/resource/helloyun/13459/MRdWv_quarkd-light.png?x-oss-process=image/quality,q_80");
    });
    l(this, "_quarkcLogoSwitch", () => {
      const t = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.theme === "dark" ? this.logo = "https://m.hellobike.com/resource/helloyun/13459/H3kyK_quarkc-light.png?x-oss-process=image/quality,q_80" : localStorage.theme === "light" ? this.logo = "https://m.hellobike.com/resource/helloyun/13459/Dc16h_quarkc-dark.png?x-oss-process=image/quality,q_80" : t.matches && localStorage.theme !== "light" && (this.logo = "https://m.hellobike.com/resource/helloyun/13459/H3kyK_quarkc-light.png?x-oss-process=image/quality,q_80");
    });
    l(this, "_switchLang", () => {
      let t = "";
      localStorage.getItem("language") === "en-US" ? (localStorage.setItem("language", "zh-CN"), t = location.href.replace("en-US", "zh-CN")) : (localStorage.setItem("language", "en-US"), t = location.href.replace("zh-CN", "en-US")), location.href = t, window.location.reload();
    });
    d(this, p, localStorage.getItem("language") === "zh-CN"), d(this, r, i(this, p) ? I["zh-CN"] : I["en-US"]), d(this, u, location.origin), d(this, m, !1), d(this, x, location.host.indexOf("quark.hellobike.com") > -1), d(this, f, location.hostname.split("-").length > 1 ? location.hostname.split("-")[0] : !1), ~["vanilla", "angular", "svelte"].indexOf(location.hostname.split("-")[0]) && d(this, m, !0);
  }
  componentDidMount() {
    this.navActive(), localStorage.getItem("language") || localStorage.setItem("language", "zh-CN"), localStorage.getItem("theme") || localStorage.setItem("theme", "light"), this.homeUrl = i(this, u), this.guideUrl = `${i(this, u)}/#/${localStorage.getItem("language")}/guide/quickstart`, this.componentUrl = `${i(this, u)}/#/${localStorage.getItem("language")}/component/button`;
    const s = {
      container: this.searchRef.current,
      appId: "EA4BY59U66",
      apiKey: "5d1fd7c976a98a74421011f1374dd200"
    };
    location.host.indexOf("vue-quarkdesign") > -1 ? w({
      ...s,
      indexName: localStorage.getItem("language") === "en-US" ? "ENDoc" : "CNDoc"
    }) : location.host.indexOf("react-quarkdesign") > -1 && w({
      ...s,
      indexName: localStorage.getItem("language") === "en-US" ? "react-ENDoc" : "react-CNDoc"
    }), this.from === "quarkc" ? (this._quarkcLogoSwitch(), this.githubUrl = "https://github.com/hellof2e/quark") : (this._quarkdLogoSwitch(), this.githubUrl = "https://github.com/hellof2e/quark-design"), window.addEventListener("hashchange", () => {
      this.navActive();
    }, !1);
  }
  render() {
    return e.h(
      e.Fragment,
      null,
      i(this, m) ? e.h(
        "div",
        { className: "toper-message" },
        e.h("a", { href: "https://vue-quarkdesign.hellobike.com" }, "文档更新中（不影响使用），可先参照 Vue 文档（Coming soon, The document is being updated, does not affect the use, you can refer to the Vue document first...）")
      ) : null,
      e.h(
        "header",
        { class: "header" },
        e.h(
          "div",
          null,
          e.h(
            "div",
            { class: "container" },
            e.h(
              "div",
              { class: "left-bar" },
              e.h(
                "a",
                { href: this.homeUrl },
                e.h("img", { src: this.logo, alt: "logo" })
              ),
              i(this, f) && e.h(
                "div",
                { style: "margin-left: 20px; display: flex;" },
                e.h(
                  "span",
                  { style: "margin-right: 4px;" },
                  "(docs for ",
                  i(this, f),
                  ")"
                )
              ),
              e.h("div", { ref: this.searchRef, id: "docsearch" })
            ),
            e.h(
              "div",
              { class: "toper-bar" },
              e.h(
                "div",
                { class: "menu-group" },
                i(this, x) ? null : e.h(
                  e.Fragment,
                  null,
                  e.h(
                    "div",
                    { class: this.activeNav === "guide" ? "nav-item menu active-nav" : "nav-item menu" },
                    e.h("a", { href: this.guideUrl }, i(this, r).guide)
                  ),
                  e.h(
                    "div",
                    { class: this.activeNav === "component" ? "nav-item menu active-nav" : "nav-item menu" },
                    e.h("a", { href: this.componentUrl }, i(this, r).component)
                  )
                ),
                e.h(
                  "div",
                  { class: "nav-item flyout" },
                  e.h(
                    "button",
                    { type: "button" },
                    e.h("span", null, i(this, r).docs),
                    e.h(
                      "svg",
                      { xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", focusable: "false", viewBox: "0 0 24 24", class: "flyout-button-text-icon" },
                      e.h("path", { d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z" })
                    )
                  ),
                  e.h(
                    "div",
                    { class: "flyout-menu" },
                    e.h(
                      "div",
                      { class: "menu-wrap" },
                      e.h(
                        "div",
                        { class: "menu-items" },
                        e.h(
                          "div",
                          { class: "menu-item-group" },
                          e.h("p", { class: "menu-group-title" }, i(this, r).docsTitle),
                          i(this, r).stacks.map((t) => e.h(
                            "a",
                            { key: t, class: "link menu-link", href: `https://${t}-quarkdesign.hellobike.com/#/${i(this, p) ? "zh-CN" : "en-US"}/component/button`, target: "_blank", rel: "noopener noreferrer" },
                            t,
                            " ",
                            i(this, p) ? "文档" : "documentation",
                            e.h(
                              "svg",
                              { xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", focusable: "false", height: "24px", viewBox: "0 0 24 24", width: "24px", class: "link-icon" },
                              e.h("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                              e.h("path", { d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" })
                            )
                          ))
                        )
                      )
                    )
                  )
                ),
                e.h(
                  "div",
                  { class: "nav-item menu" },
                  e.h("a", { target: "_blank", href: "https://quark-playground.hellobike.com/#/hello-world" }, "Playground")
                ),
                e.h(
                  "div",
                  { class: "nav-item flyout" },
                  e.h(
                    "button",
                    { type: "button" },
                    e.h("span", null, i(this, r).ecosystem),
                    e.h(
                      "svg",
                      { xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", focusable: "false", viewBox: "0 0 24 24", class: "flyout-button-text-icon" },
                      e.h("path", { d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z" })
                    )
                  ),
                  e.h(
                    "div",
                    { class: "flyout-menu" },
                    e.h(
                      "div",
                      { class: "menu-wrap" },
                      e.h(
                        "div",
                        { class: "menu-items" },
                        e.h(
                          "div",
                          { class: "menu-item-group" },
                          e.h("p", { class: "menu-group-title" }, i(this, r).officialLibrary),
                          e.h(
                            "a",
                            { class: "link menu-link", href: "https://quark.hellobike.com", target: "_blank", rel: "noopener noreferrer" },
                            i(this, r).stack,
                            e.h(
                              "svg",
                              { xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", focusable: "false", height: "24px", viewBox: "0 0 24 24", width: "24px", class: "link-icon" },
                              e.h("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                              e.h("path", { d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" })
                            )
                          ),
                          e.h(
                            "a",
                            { class: "link menu-link", href: "https://github.com/hellof2e/quark-cli", target: "_blank", rel: "noopener noreferrer" },
                            i(this, r).noFrame,
                            e.h(
                              "svg",
                              { xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", focusable: "false", height: "24px", viewBox: "0 0 24 24", width: "24px", class: "link-icon" },
                              e.h("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                              e.h("path", { d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" })
                            )
                          )
                        ),
                        e.h(
                          "div",
                          { class: "menu-item-group" },
                          e.h("p", { class: "menu-group-title" }, i(this, r).resources),
                          e.h(
                            "a",
                            { target: "_blank", rel: "noopener noreferrer", class: "link menu-link", href: "https://marketplace.visualstudio.com/items?itemName=quarkd.quarkd-vscode-extension" },
                            i(this, r).vscodePlugin,
                            e.h(
                              "svg",
                              { xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", focusable: "false", height: "24px", viewBox: "0 0 24 24", width: "24px", class: "link-icon" },
                              e.h("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                              e.h("path", { d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" })
                            )
                          )
                        ),
                        e.h(
                          "div",
                          { class: "menu-item-group" },
                          e.h("p", { class: "menu-group-title" }, i(this, r).help),
                          e.h(
                            "a",
                            { class: "link menu-link", href: "https://github.com/hellof2e/quark-design/discussions", target: "_blank", rel: "noopener noreferrer" },
                            i(this, r).gitHubDiscussions,
                            e.h(
                              "svg",
                              { xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", focusable: "false", height: "24px", viewBox: "0 0 24 24", width: "24px", class: "link-icon" },
                              e.h("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                              e.h("path", { d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" })
                            )
                          )
                        )
                      )
                    )
                  )
                )
              ),
              e.h(
                "div",
                { class: "translations" },
                e.h(
                  "a",
                  { class: "translate-lang", href: "javascript:void(0);", onClick: this._switchLang },
                  e.h(
                    "svg",
                    { xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", focusable: "false", viewBox: "0 0 24 24" },
                    e.h("path", { d: "M0 0h24v24H0z", fill: "none" }),
                    e.h("path", { d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ", class: "css-c4d79v" })
                  )
                )
              ),
              e.h(
                "div",
                { class: "appearance" },
                e.h("dark-mode", null)
              ),
              e.h(
                "div",
                { class: "social-links" },
                e.h(
                  "a",
                  { href: "https://github.com/hellof2e/quark-design/discussions", class: "github-link", target: "_blank" },
                  e.h(
                    "svg",
                    { t: "1679995277175", class: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "5433", width: "200", height: "200" },
                    e.h("path", { d: "M860.16 430.08c0-223.744-192-402.944-431.616-402.944C191.488 27.136 0 209.408 0 430.08c0 73.728 22.528 143.872 57.344 201.216l-41.472 140.8c-9.728 35.328 9.728 51.2 41.472 41.472l134.144-44.544c67.072 41.472 146.944 64 233.472 64 243.2 3.072 435.2-179.2 435.2-402.944z m-214.528-54.272c28.672 0 54.272 25.6 54.272 54.272s-25.6 54.272-54.272 54.272-54.272-25.6-54.272-54.272 25.6-54.272 54.272-54.272zM214.016 484.352c-28.672 0-54.272-25.6-54.272-54.272s25.6-54.272 54.272-54.272 54.272 25.6 54.272 54.272-22.016 54.272-54.272 54.272z m163.328-54.272c0-28.672 25.6-54.272 54.272-54.272s54.272 25.6 54.272 54.272-25.6 54.272-54.272 54.272-54.272-22.528-54.272-54.272z m0 0", "p-id": "5434" }),
                    e.h("path", { d: "M965.632 794.624c35.328-60.928 57.344-128 57.344-201.216 0-112.128-48.128-210.944-124.928-284.672 12.8 38.4 18.944 79.872 18.944 124.928v35.328c18.944 38.4 28.672 82.944 28.672 128 0 57.344-15.872 112.128-44.544 159.744l-18.944 28.672 9.728 35.328 15.872 54.272-51.2-15.872-35.328-12.8-31.744 18.944c-57.344 35.328-124.928 54.272-192 54.272-51.2 0-99.328-9.728-140.8-28.672H437.76c-54.272 0-108.544-9.728-156.672-25.6 79.872 79.872 192 131.072 320 131.072 86.528 0 166.4-25.6 233.472-64l143.872 48.128c28.672 9.728 44.544-6.144 35.328-35.328l-48.128-150.528z m0 0", "p-id": "5435" })
                  )
                ),
                e.h(
                  "a",
                  { href: this.githubUrl, class: "github-link", target: "_blank" },
                  e.h(
                    "svg",
                    { viewBox: "0 0 16 16", fill: "currentColor" },
                    e.h("path", { d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" })
                  )
                )
              )
            )
          )
        )
      )
    );
  }
}, p = new WeakMap(), r = new WeakMap(), u = new WeakMap(), m = new WeakMap(), x = new WeakMap(), f = new WeakMap(), C);
c([
  G()
], n.prototype, "from", void 0);
c([
  v()
], n.prototype, "logo", void 0);
c([
  v()
], n.prototype, "githubUrl", void 0);
c([
  v()
], n.prototype, "homeUrl", void 0);
c([
  v()
], n.prototype, "guideUrl", void 0);
c([
  v()
], n.prototype, "componentUrl", void 0);
c([
  v()
], n.prototype, "activeNav", void 0);
n = c([
  M({ tag: "quark-doc-header", style: B })
], n);
const U = n;
export {
  U as default
};

import { QuarkElement, Fragment, property, state, customElement } from "quarkc"
import style from "./main.css"
import "./dark-light-mode.mjs"

import docsearch from "@docsearch/js";
import "@docsearch/css";

const langs = {
  "zh-CN": {
    ecosystem: "生态系统",
    docsTitle: "组件库文档",
    docs: "组件库文档",
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
      // "Svelte(开发中)",
      // "Angular(开发中)",
      // "JS/JQ(开发中)",
    ],
  },
  "en-US": {
    ecosystem: "Ecosystem",
    docsTitle: "Docs",
    docs: "Docs",
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
      // "Svelte(Work in progress)",
      // "Angular(Work in progress)",
      // "JS/JQ(Work in progress)",
    ],
  },
};

@customElement({ tag: "quark-doc-header", style })
class MyComponent extends QuarkElement {
  #isZhLang
  #ecosystemLangs
  #isSearchShow

  constructor() {
    super()
    this.#isZhLang = localStorage.getItem("language") === "zh-CN"
    this.#ecosystemLangs = this.#isZhLang ? langs["zh-CN"] : langs["en-US"]
    this.#isSearchShow = true
  }


  componentDidMount(): void {
    console.log(location, 333);
    if(location.host.indexOf("vue-quarkdesign") > -1) {
      docsearch({
        container: "#docsearch",
        appId: "EA4BY59U66",
        indexName:
          localStorage.getItem("language") === "en-US" ? "ENDoc" : "CNDoc",
        apiKey: "5d1fd7c976a98a74421011f1374dd200",
      });
    } else if(location.host.indexOf("react-quarkdesign") > -1) {
      docsearch({
        container: "#docsearch",
        appId: "EA4BY59U66",
        indexName:
          localStorage.getItem("language") === "en-US" ? "react-ENDoc" : "react-CNDoc",
        apiKey: "5d1fd7c976a98a74421011f1374dd200",
      });
    } else {
      this.#isSearchShow = false
    }
  }

  _switchLang = () => {
    let href = "";
    if (localStorage.getItem("language") === "en-US") {
      localStorage.setItem("language", "zh-CN");
      href = location.href.replace("en-US", "zh-CN");
    } else {
      localStorage.setItem("language", "en-US"); // 中文
      href = location.href.replace("zh-CN", "en-US");
    }
    location.href = href;
    window.location.reload();
  };

  render() {
    return (
      <Fragment>
        <header class="header">
          <div>
            <div class="container">
              <div class="left-bar">
                <a href="/">
                  <img src="https://quark.hellobike.com/assets/quark-logo.f9a6a307.png" alt="" />
                </a>
                {/* <span href="/"> @2023 </span> */}
                {
                  this.#isSearchShow ? <div id="docsearch"></div> : null
                }
              </div>

              <div class="toper-bar">
                <div class="menu-group">
                  <div class="nav-item flyout">
                    <button type="button">
                      <span>{this.#ecosystemLangs.docs}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        viewBox="0 0 24 24"
                        class="flyout-button-text-icon"
                      >
                        <path
                          d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"
                        ></path>
                      </svg>
                    </button>

                    <div class="flyout-menu">
                      <div class="menu-wrap">
                        <div class="menu-items">
                          <div class="menu-item-group">
                            <p class="menu-group-title">
                              { this.#ecosystemLangs.docsTitle }
                            </p>
                            {
                              this.#ecosystemLangs.stacks.map(item =>
                              <a
                                key={item}
                                class="link menu-link"
                                href={`https://${item}-quarkdesign.hellobike.com/#/${this.#isZhLang ? 'zh-CN' : 'en-US'}/component/button`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                { item } { this.#isZhLang ? "文档" : "documentation" }
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                  focusable="false"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  width="24px"
                                  class="link-icon"
                                >
                                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                                  <path
                                    d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"
                                  ></path>
                                </svg>
                              </a>
                              )
                            }
                            <p class="link menu-link" style="color: #aaa">
                              Angular (Work in progress)
                            </p>
                            <p class="link menu-link" style="color: #aaa">
                              Svelte (Work in progress)
                            </p>
                            <p class="link menu-link" style="color: #aaa">
                              Javascript (Work in progress)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="nav-item menu">
                    <a
                      target="_blank"
                      href="https://quark-playground.hellobike.com/#/hello-world"
                    >
                      Playground
                    </a>
                  </div>

                  <div class="nav-item flyout">
                    <button type="button">
                      <span>{ this.#ecosystemLangs.ecosystem }</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        viewBox="0 0 24 24"
                        class="flyout-button-text-icon"
                      >
                        <path
                          d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"
                        ></path>
                      </svg>
                    </button>
                    <div class="flyout-menu">
                      <div class="menu-wrap">
                        <div class="menu-items">
                          <div class="menu-item-group">
                            <p class="menu-group-title">
                              {this.#ecosystemLangs.officialLibrary}
                            </p>
                            <a
                              class="link menu-link"
                              href="https://quark.hellobike.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {this.#ecosystemLangs.stack}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                                class="link-icon"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none"></path>
                                <path
                                  d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"
                                ></path>
                              </svg>
                            </a>
                            <a
                              class="link menu-link"
                              href="https://github.com/hellof2e/quark-cli"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {this.#ecosystemLangs.noFrame}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                                class="link-icon"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none"></path>
                                <path
                                  d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"
                                ></path>
                              </svg>
                            </a>
                          </div>

                          <div class="menu-item-group">
                            <p class="menu-group-title">
                              {this.#ecosystemLangs.resources}
                            </p>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              class="link menu-link"
                              href="https://marketplace.visualstudio.com/items?itemName=quarkd.quarkd-vscode-extension"
                            >
                              {this.#ecosystemLangs.vscodePlugin}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                                class="link-icon"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none"></path>
                                <path
                                  d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"
                                ></path>
                              </svg>
                            </a>
                          </div>

                          <div class="menu-item-group">
                            <p class="menu-group-title">{this.#ecosystemLangs.help}</p>
                            <a
                              class="link menu-link"
                              href="https://github.com/hellof2e/quark-design/discussions"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {this.#ecosystemLangs.gitHubDiscussions}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                                class="link-icon"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none"></path>
                                <path
                                  d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="translations">
                  <a
                    class="translate-lang"
                    href="javascript:void(0);"
                    onClick={this._switchLang}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
                        class="css-c4d79v"
                      ></path>
                    </svg>
                  </a>
                </div>

                <div class="appearance">
                  <dark-light-mode />
                </div>

                <div class="social-links">
                  <a
                    href="https://github.com/hellof2e/quark-design/discussions"
                    class="github-link"
                    target="_blank"
                  >
                    <svg
                      t="1679995277175"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="5433"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M860.16 430.08c0-223.744-192-402.944-431.616-402.944C191.488 27.136 0 209.408 0 430.08c0 73.728 22.528 143.872 57.344 201.216l-41.472 140.8c-9.728 35.328 9.728 51.2 41.472 41.472l134.144-44.544c67.072 41.472 146.944 64 233.472 64 243.2 3.072 435.2-179.2 435.2-402.944z m-214.528-54.272c28.672 0 54.272 25.6 54.272 54.272s-25.6 54.272-54.272 54.272-54.272-25.6-54.272-54.272 25.6-54.272 54.272-54.272zM214.016 484.352c-28.672 0-54.272-25.6-54.272-54.272s25.6-54.272 54.272-54.272 54.272 25.6 54.272 54.272-22.016 54.272-54.272 54.272z m163.328-54.272c0-28.672 25.6-54.272 54.272-54.272s54.272 25.6 54.272 54.272-25.6 54.272-54.272 54.272-54.272-22.528-54.272-54.272z m0 0"
                        p-id="5434"
                      ></path>
                      <path
                        d="M965.632 794.624c35.328-60.928 57.344-128 57.344-201.216 0-112.128-48.128-210.944-124.928-284.672 12.8 38.4 18.944 79.872 18.944 124.928v35.328c18.944 38.4 28.672 82.944 28.672 128 0 57.344-15.872 112.128-44.544 159.744l-18.944 28.672 9.728 35.328 15.872 54.272-51.2-15.872-35.328-12.8-31.744 18.944c-57.344 35.328-124.928 54.272-192 54.272-51.2 0-99.328-9.728-140.8-28.672H437.76c-54.272 0-108.544-9.728-156.672-25.6 79.872 79.872 192 131.072 320 131.072 86.528 0 166.4-25.6 233.472-64l143.872 48.128c28.672 9.728 44.544-6.144 35.328-35.328l-48.128-150.528z m0 0"
                        p-id="5435"
                      ></path>
                    </svg>
                  </a>

                  <a
                    href="https://github.com/hellof2e/quark-design"
                    class="github-link"
                    target="_blank"
                  >
                    <svg viewBox="0 0 16 16" fill="currentColor">
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default MyComponent;
import { QuarkElement } from "quarkc";
import "./dark-light-mode.mjs";
import "@docsearch/css";
declare class MyComponent extends QuarkElement {
    #private;
    logo: string;
    githubUrl: string;
    homeUrl: string;
    guideUrl: string;
    componentUrl: string;
    isQuarkc: boolean;
    activeNav: string;
    searchRef: any;
    constructor();
    componentDidMount(): void;
    _quarkdLogoSwitch: () => void;
    _quarkcLogoSwitch: () => void;
    _switchLang: () => void;
    render(): any;
}
export default MyComponent;

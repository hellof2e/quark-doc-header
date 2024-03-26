import { QuarkElement } from "quarkc";
import "./dark-mode.tsx";
import "@docsearch/css";
declare class MyComponent extends QuarkElement {
    #private;
    from: string;
    logo: string;
    githubUrl: string;
    homeUrl: string;
    guideUrl: string;
    componentUrl: string;
    activeNav: string;
    searchRef: import("quarkc").Ref<any>;
    constructor();
    navActive: () => void;
    componentDidMount(): void;
    _quarkdLogoSwitch: () => void;
    _quarkcLogoSwitch: () => void;
    _switchLang: () => void;
    render(): any;
}
export default MyComponent;

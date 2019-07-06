import DATA from '../../data/browser_data.js';

const BROWSER    = 0,
      OS         = 1,
      VERSION    = 2,
      PATCH      = 3,
      NUMBER     = 4,
      RESOLUTION = 5,
      LANGUAGE   = 6,
      TIMEZONE   = 7;

class Fingerprint {
    constructor(key, weight, fontData, canvasData) {
        this.key = key;
        this.weight = weight;
        this.fontData = fontData;
        this.canvasData = canvasData;
    }

    get ua() {
        let browser = DATA.browsers[this.key[BROWSER]];
        let os = browser.os[this.key[OS]].name;
        let proc = browser.os[this.key[OS]].proc;
        let version = browser.versions[this.key[VERSION]];
        let osproc = os;
        let revision = "";
        let trail;
        if (os.includes("Win")) {
            if (proc !== "") {
                osproc += "; " + proc;
            }
        } else {
            osproc += " " + proc;
        }
        if (browser.name === "firefox") {
            revision = "; rv:" + version.number;
            trail = `Gecko/${browser.productSub} Firefox/${version.number}`;
        } else {
            let patch = version.patches[this.key[PATCH]];
            let number = patch.numbers[this.key[NUMBER]];
            let chrome, opera = "";
            if (browser.name === "chrome") {
                chrome = version.number + "." + number.toString();
            } else {
                chrome = patch.Chromium;
                opera = " OPR/" + version.number + "." + number.toString();
            }
            trail = `AppleWebKit/${browser.webkit_version} (KHTML, like Gecko) Chrome/${chrome} Safari/${browser.webkit_version}${opera}`;
        }
        return `Mozilla/5.0 (${osproc}${revision}) ${trail}`;
    }

    get http() {
        return {
            userAgent: this.ua,
            acceptEncoding: DATA.browsers[this.key[BROWSER]].http.encoding,
            acceptLanguage: DATA.languages[this.key[LANGUAGE]]
        };
    }

    get navigator() {
        let browser = DATA.browsers[this.key[BROWSER]];
        let language = DATA.languages[this.key[LANGUAGE]];
        let os = browser.os[this.key[OS]].name;
        let proc = browser.os[this.key[OS]].proc;
        let ua = this.ua;
        let platform = os.includes("Win") ? "Win32" : "Linux " + proc;
        let cpuClass = (proc.includes("Intel")) ? "x86" : (proc.includes("86")) ? "x86" : (proc.includes("PPC")) ? "PPC" : "Other";
        let appVersion = (browser.name === "opera") ? ua : ua.substring(8, ua.length);
        let nav = {
            userAgent: ua,
            appCodeName: browser.appcodename,
            appName: browser.appname,
            language: language, // languages array
            appVersion: appVersion, // different
            platform: platform,
            oscpu: platform,
            product: browser.product,
            productSub: browser.productSub,
            vendor: browser.vendor,
            cpuClass: cpuClass, // deprecated
            systemLanguage: language, // deprecated
            userLanguage: language // deprecated
        }
        if (browser.name === "firefox") {
            nav.buildID = browser.versions[this.key[VERSION]].buildid;
        }
        return nav;
    }

    get screen() {
        let os = DATA.browsers[this.key[BROWSER]].os[this.key[OS]].name;
        let resolution = DATA.screen.resolutions[this.key[RESOLUTION]];
        let taskbar = os.includes("Win") ? DATA.screen.taskbar.win : DATA.screen.taskbar.lin;
        return {
            width: resolution.width,
            height: resolution.height,
            colorDepth: DATA.screen.colordepth,
            availWidth: resolution.width,
            availHeight: resolution.height - taskbar,
            pixelDepth: DATA.screen.colordepth
        };
    }

    get date() {
        return {
            timezoneOffset: DATA.timezones[this.key[TIMEZONE]]
        };
    }
}
export default Fingerprint;

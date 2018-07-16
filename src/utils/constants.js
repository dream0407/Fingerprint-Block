export const BROWSER_PLUGINS = [
    "Flash",
    "Silverlight",
    "VLC",
    "QuickTime",
    "other"
];

export const SOCIAL_PLUGINS = {
    facebook: ["connect.facebook.net/en_US/all.js", "facebook.com/plugins/"],
    twitter: ["platform.twitter.com/widgets.js", "platform.twitter.com/widgets/"],
    googleplus: ["apis.google.com/js/platform.js", "apis.google.com/js/plusone.js"],
    linkedin: ["platform.linkedin.com/in.js"],
    tumblr: ["platform.tublr.com/v1/"],
    pinterest: ["assets.pinterest.com/js/pinit.js"]
}

export const SPOOF_ATTRIBUTES = [
    "App Code Name",
    "App Name",
    "App version",
    "Language",
    "OS CPU",
    "Platform",
    "Product",
    "User-Agent",
    "Vendor",
    "CPU Class",
    "System Language",
    "User Language", 
    "Available Height",
    "Available Width",
    "Color depth",
    "Screen Height",
    "Screen Width",
    "Pixel Depth",
    "Timezone"
];

export const DOM_OBJECTS = {
    navigator: {
        appCodeName: {name: "App Code Name", simple: true},
        appName: {name: "App Name", simple: true},
        appVersion: {name: "App version", simple: true},
        battery: {name: "Battery", simple: true},
        connection: {name: "Connection", simple: false},
        cookieEnabled: {name: "Cookie enabled", simple: true},
        geolocation: {name: "Geolocation", simple: true},
        language: {name: "Language", simple: true},
        mimeTypes: {name: "Mime Types", simple: false},
        onLine: {name: "Online", simple: true},
        oscpu: {name: "OS CPU", simple: true},
        platform: {name: "Platform", simple: true},
        plugins: {name: "Plugins", simple: false},
        product: {name: "Product", simple: true},
        userAgent: {name: "User-Agent", simple: true},
        buildID: {name: "BuildID", simple: true},
        doNotTrack: {name: "Do Not Track", simple: true},
        productSub: {name: "Product Subversion", simple: true},
        vendor: {name: "Vendor", simple: true},
        vendorSub: {name: "Vendor Subversion", simple: true},
        mozBattery: {name: "MozBattery", simple: true},
        cpuClass: {name: "CPU Class", simple: true},
        systemLanguage: {name: "System Language", simple: true},
        userLanguage: {name: "User Language", simple: true}
    },
    screen: {
        availHeight: {name: "Available Height", simple: true},
        availWidth: {name: "Available Width", simple: true},
        colorDepth: {name: "Color depth", simple: true},
        height: {name: "Screen Height", simple: true},
        width: {name: "Screen Width", simple: true},
        pixelDepth: {name: "Pixel Depth", simple: true}
    },
    //date: {
        //timezoneOffset: {name: "Timezone", simple: false}
    //},
    //windowObj: {
        //localStorage: {name: "DOM Local Storage", simple: true},
        //sessionStorage: {name: "DOM Session Storage", simple: true},
        //indexedDB: {name: "IndexedDB", simple: true},
        //openDatabase: {name: "OpenDatabase", simple: true}
    //}
};

export const DEFAULT_OPTIONS = {
    notify: true,
    block_thirdparty: true,
    dnt: true,
    remove_etag: false,
    block_social: true,
    block_browser: true
}

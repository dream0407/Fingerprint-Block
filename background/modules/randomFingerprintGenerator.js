var randomFingerprintGenerator = (function() {
    var testvalues = {
        userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9.8; rv:12.3) Gecko/20100101 Firefox/12.3.5",
        appVersion: "5.0 (Macintosh; Intel Mac OS X 10.9.8; rv:12.3) Gecko/20100101 Firefox/12.3.5",
        acceptEncoding: "gzip, deflate",
        language: "fr"
    };

    var generate = function() {
        return testvalues;
    };

    return {
        generate: generate
    };
})();
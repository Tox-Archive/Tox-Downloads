(function () {
    window.site = {
        getPlatform: function (b, a) {
            a = (a === "") ? "" : a || navigator.platform;
            b = b || navigator.userAgent;
            if (/Win(16|9[x58]|NT( [1234]| 5\.0| [^0-9]|[^ -]|$))/.test(b) || /Windows ([MC]E|9[x58]|3\.1|4\.10|NT( [1234]| 5\.0| [^0-9]|[^ ]|$))/.test(b) || /Windows_95/.test(b)) {
                return "windows"
            }
            if (b.indexOf("MSIE 6.0") !== -1 && b.indexOf("Windows NT 5.1") !== -1 && b.indexOf("SV1") === -1) {
                return "windows"
            }
            if (a.indexOf("Win32") !== -1 || a.indexOf("Win64") !== -1) {
                return "windows"
            }
            if (a.indexOf("Linux") !== -1) {
                return "linux"
            }
            if (/Mac OS X 10.[0-5]\D/.test(b)) {
                return "mac"
            }
            if (b.indexOf("MSIE 5.2") !== -1) {
                return "mac"
            }
            if (a.indexOf("Mac") !== -1) {
                return "mac"
            }
            return "other"
        },
        getArchType: function (b, a) {
            a = (a === "") ? "" : a || navigator.platform;
            b = b || navigator.userAgent;
            var c;
            if (navigator.cpuClass) {
                return navigator.cpuClass.toLowerCase()
            }
            c = /armv\d+/i;
            if (c.test(a) || c.test(b)) {
                return RegExp.lastMatch.toLowerCase()
            }
            c = /PowerPC|PPC/i;
            if (c.test(a) || c.test(b)) {
                return "ppc"
            }
            return "x86"
        },
        getArchSize: function (b, a) {
            a = (a === "") ? "" : a || navigator.platform;
            b = b || navigator.userAgent;
            var c = /x64|x86_64|Win64/i;
            if (c.test(a) || c.test(b)) {
                return 64
            }
            return 32
        },
        platform: "other",
        archType: "x64",
        archSize: 32
    };
    (function () {
        var d = document.documentElement;
        var b = window.site.platform = window.site.getPlatform();
        if (b !== "windows") {
            d.className = d.className.replace("windows", b)
        }
        var c = window.site.archType = window.site.getArchType();
        var a = window.site.archSize = window.site.getArchSize();
        if (c !== "x86") {
            d.className = d.className.replace("x86", c)
        }
        if (a === 64) {
            d.className += " x64"
        }
        d.className = d.className.replace(/\bno-js\b/, "js")
    })()
})();

(function() {
    function na() {
        return f
    }

    function u() {
        if (!0 !== f.isInitialized) {
            for (var a = f, b = {}, c = h.getElementsByTagName("meta"), d = 0; d < c.length; d++) b[c[d].name.toLowerCase()] = c[d].content;
            a.metas = b;
            for (var a = f, c = {}, d = location.search.substring(1).split("\x26"), g = 0; g < d.length; g++) b = d[g].split("\x3d"), c[b[0].toLowerCase()] = unescape(b[1]);
            a.args = c;
            f.pageName = f.args.vpagename || k.ewt_pagename || f.metas[U + "pagename"] || "";
            a = f;
            b = (b = f.metas["com.silverpop.primary_domain"]) && 0 < b.length ? ("." == b[0] ? "" : ".") + b : J(q.hostname);
            a.primaryDomain = b;
            a = f;
            b = [];
            c = null;
            if (c = f.metas["com.silverpop.brandeddomains"]) b = c.split(",");
            a.brandedDomains = b;
            f.metas[U + oa] && (s = !0);
            f.isInitialized = !0
        }
    }

    function J(a) {
        a = a.replace("http://", "").replace("https://", "").split(/[\/?#]/)[0];
        var b;
        a: if (b = a.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/), "0.0.0.0" === a || "255.255.255.255" === a || null === b) b = !1;
            else {
                for (var c = 0; 4 > c; c++)
                    if (255 < b[c]) {
                        b = !1;
                        break a
                    }
                b = !0
            }
        if (b) return a;
        a = a.split(".");
        return 1 == a.length ? "" : 3 <= a.length && 2 == a[a.length - 1].length &&
            2 <= a[a.length - 2].length && "www" != a[a.length - 3].toLowerCase() ? "." + a[a.length - 3] + "." + a[a.length - 2] + "." + a[a.length - 1] : "." + a[a.length - 2] + "." + a[a.length - 1]
    }

    function K(a) {
        if (!m || !m.cookieEnabled || !B()) return s && (a = n(".referrer"), null != h.referrer && "" == a && (a = {
            uid: encodeURIComponent(h.referrer),
            ttl: L,
            name: p + ".referrer"
        }, t(a))), !1;
        f.websync = C();
        a = a ? a : M ? M : v(!0);
        var b = N();
        V();
        w(O() + P({
            session: a,
            webSync: f.websync,
            newPageVisit: b
        }, "pageview"));
        for (var c = document.getElementsByTagName("FORM"), d = 0; d < c.length; d++) {
            var g =
                Q(c[d]),
                e = c[d].getAttribute("pageId"),
                r = c[d].getAttribute("siteId"),
                k = c[d].getAttribute("parentPageId");
            if (D(g) && e && r) {
                var l = W(g),
                    q = X(g),
                    g = Y(g);
                a.isNew = !1;
                w(O() + P({
                    session: a,
                    webSync: f.websync,
                    pageId: e,
                    siteId: r,
                    parentPageId: k,
                    hostname: l,
                    pathname: q,
                    pagename: g,
                    trackedExternalFormPost: "1",
                    newPageVisit: b
                }, "pageview"))
            }
        }
        return a
    }

    function B() {
        return s ? "true" == n(".accept_cookies") : !0
    }

    function O() {
        return z() + Z() + pa.path + "event.jpeg?accesskey\x3d" + $() + "\x26v\x3d" + qa
    }

    function z() {
        return q.protocol && "https:" ==
            q.protocol.toString().toLowerCase() ? "https://" : "http://"
    }

    function R(a) {
        return "" === a.target || "_self" === a.target.toLowerCase() || "_top" === a.target.toLowerCase() || "_parent" === a.target.toLowerCase()
    }

    function Z() {
        if (!k.ewt_host)
            for (var a = h.getElementsByTagName("script"), b = 0; b < a.length; b++)
                if (a[b].src && a[b].src.match(aa)) {
                    k.ewt_host = a[b].src.split("\x26")[1].substr(2);
                    break
                }
        return k.ewt_host
    }

    function P(a, b) {
        var c = {},
            d = (a.session.isNew ? "\x26isNewSession\x3d1" : "\x26isNewSession\x3d0") + "\x26type\x3d" + b;
        c.isNewVisitor =
            a.webSync ? a.webSync.isNew ? "1" : "0" : "";
        c.eventName = a.eventName || "";
        c.sessionGUID = a.session.uid;
        c.webSyncID = f.websync.uid;
        c.associatedWebSyncID = f.websync.associatedUID;
        c.url = h.URL;
        c.newSiteVisit = a.session.newSiteVisit ? "1" : "0";
        var g;
        s && a.session.newSiteVisit ? (g = n(".referrer"), null != g ? (E(p + ".referrer"), g = decodeURIComponent(g)) : g = h.referrer) : g = h.referrer;
        c.referringURL = g;
        c.gclid = f.args.gclid || "";
        c.hostname = a.hostname ? a.hostname : q.hostname;
        c.pathname = a.pathname ? a.pathname : q.pathname;
        c.pagename = a.pagename ?
            a.pagename : f.pageName;
        c.pageId = a.pageId;
        c.siteId = a.siteId;
        c.parentPageId = a.parentPageId || "";
        c.gwkey = f.args.gwkey || "";
        c.spMailingID = l(0) || "";
        c.spUserID = l(1) || "";
        c.spJobID = l(2) || "";
        c.spReportId = l(3) || "";
        c.trackedExternalFormPost = a.trackedExternalFormPost || "";
        c.defaultSource = f.args[f.metas["com.silverpop.defaultsourceparam"]];
        c.defaultSource || (c.defaultSource = f.metas["com.silverpop.defaultsource"]);
        c.defaultTerm = f.args[f.metas["com.silverpop.defaulttermparam"]];
        c.defaultTerm || (c.defaultTerm = f.metas["com.silverpop.defaultterm"]);
        "pageview" == b && (c.newPageVisit = a.newPageVisit ? a.newPageVisit : N());
        c.eventKey = S();
        g = "";
        for (var e in c) "string" == typeof c[e] && "" != c[e] && (g += "\x26" + e + "\x3d" + encodeURIComponent(c[e]));
        return d + g
    }

    function t(a) {
        m && m.cookieEnabled && (a = a.name + "\x3d" + a.uid + ba(a.ttl) + "; path\x3d/;domain\x3d" + f.primaryDomain + ";", h.cookie = a)
    }

    function ca(a, b, c) {
        m && m.cookieEnabled && (a = p + a + "\x3d" + b + ba(c) + "; path\x3d/;domain\x3d" + f.primaryDomain + ";", h.cookie = a)
    }

    function n(a) {
        var b = h.cookie ? h.cookie.split("; ") : [];
        a = p + a;
        for (var c =
                0; c < b.length; c++)
            if (0 == b[c].indexOf(a)) return b[c].split("\x3d")[1];
        return ""
    }

    function E(a) {
        t({
            name: a,
            uid: "",
            ttl: -1
        })
    }

    function S() {
        for (var a = "", b = 0; 32 > b; b++) a += Math.floor(15 * Math.random()).toString(15) + (7 == b || 11 == b || 15 == b || 19 == b ? "-" : "");
        return a
    }

    function ba(a) {
        if (a) {
            var b = new Date;
            b.setTime(b.getTime() + a);
            return "; expires\x3d" + b.toGMTString()
        }
        return ""
    }

    function w(a) {
        var b = h.createElement("img");
        b.style.display = "none";
        h.body.appendChild(b);
        b.src = a
    }

    function $() {
        if (!k.ewt_page_key)
            for (var a = h.getElementsByTagName("script"),
                    b = 0; b < a.length; b++)
                if (a[b].src && a[b].src.match(aa)) {
                    a = a[b].src.split("?")[1];
                    k.ewt_page_key = a.substr(0, a.indexOf("\x26"));
                    break
                }
        return k.ewt_page_key ? k.ewt_page_key : "no-key"
    }

    function C() {
        if (!f.websync) {
            var a = n("WebCookie"),
                b = n(".webSyncID");
            "" != a && "" != b && E(p + ".webSyncID");
            "" == a && "" != b && (t({
                uid: b,
                ttl: da,
                name: p + "WebCookie"
            }), E(p + ".webSyncID"));
            a = {
                uid: n("WebCookie"),
                ttl: da,
                name: p + "WebCookie",
                isNew: !1,
                associatedUID: ""
            };
            b = f.args.websyncid;
            null != b && ("" != a.uid && (a.associatedUID = a.uid), a.uid = b);
            "" == a.uid ?
                (a.uid = S(), t(a), a.isNew = !0) : ca("WebCookie", a.uid, a.ttl);
            f.websync = a
        }
        return f.websync
    }

    function v(a) {
        var b = {
                uid: n(".session"),
                ttl: L,
                name: p + ".session",
                isNew: !1,
                newSiteVisit: !1
            },
            c = f.args.sessionguid;
        a && (!b.uid || c && b.uid.toLowerCase() != c.toLowerCase()) && (b.newSiteVisit = !0);
        if (a) {
            for (var d = [], g = [], e = 0; 4 > e; e++) d[e] = f.args[x[e].toLowerCase()], "undefined" == typeof d[e] && (d[e] = ""), g[e] = n("." + F[e].toLowerCase());
            for (e = 0; 4 > e; e++)
                if (0 < d[e].length && 0 < g[e].length && d[e] != g[e]) {
                    b.uid = "";
                    break
                }
        }
        c && (b.uid = c);
        if (a && "" !=
            b.uid && h.referrer && 0 < h.referrer.length) {
            c = f.brandedDomains;
            d = !1;
            if (0 < c.length && -1 < h.referrer.indexOf("://"))
                for (g = h.referrer.toLowerCase(), e = 0; e < c.length; e++)
                    if (0 < g.indexOf(c[e].toLowerCase())) {
                        d = !0;
                        break
                    }
            if (c = !d) c = h.referrer.indexOf("://"), -1 != c ? (d = h.referrer.indexOf("/", c + 3), c = h.referrer.substring(c + 3, -1 == d ? h.referrer.length : d).toLowerCase(), c = c.replace("www.", ""), c = -1 != q.hostname.toLowerCase().indexOf(c)) : c = !1, c = !c;
            c && (b.uid = "")
        }
        "" == b.uid ? (E(p + G), b.uid = S(), t(b), b.isNew = !0, b.newSiteVisit = !0) : ca(".session",
            b.uid, b.ttl);
        a && H();
        return b
    }

    function N() {
        var a = n(G);
        return ea(a, q.pathname) ? "0" : "1"
    }

    function ea(a, b) {
        var c = T(b),
            d = 0 <= a.indexOf(":") ? a.split(":") : a.split(",");
        return 0 <= fa(d, c)
    }

    function T(a) {
        var b = 0;
        if (0 < a.length)
            for (var c = 0; c < a.length; c++) b = (b << 5) - b + a.charCodeAt(c), b &= b;
        return b + ""
    }

    function fa(a, b) {
        if (Array.prototype.indexOf) return a.indexOf(b);
        for (var c = 0; c < a.length; c++)
            if (a[c] === b) return c;
        return -1
    }

    function V() {
        var a = n(G);
        (a = ga(a, q.pathname)) && t({
            name: p + G,
            ttl: L,
            uid: a
        })
    }

    function ga(a, b) {
        var c = T(b),
            d = 0 <= a.indexOf(":") ? a.split(":") : a.split(",");
        return -1 == fa(d, c) ? (d.unshift(c), d.toString().replace(/,/g, ":").substr(0, 1024)) : null
    }

    function ha() {
        if (m && m.cookieEnabled && B()) {
            for (var a = ia(f), b = a, c = document.getElementsByTagName("A"), d = 0; d < c.length; d++) {
                var g = c[d].href;
                if (-1 == g.toLowerCase().indexOf("mailto:") && 0 != g.indexOf("#") && D(g)) {
                    var e = c[d].innerHTML,
                        r;
                    if (r = ja())
                        if (r = 8 >= ja())
                            if (r = e) r = e ? e.replace(/^\s+|\s+$/g, "") : e, r = 0 === g.lastIndexOf(r, 0);
                    r ? (c[d].href = I(g, b), c[d].innerHTML = e) : c[d].href = I(g, b)
                }
            }
            s &&
                (a += "\x26spWebTrackingOptIn\x3d1");
            ka(a)
        } else s && ka("spWebTrackingOptIn\x3d0")
    }

    function ja() {
        var a = navigator.userAgent.toLowerCase();
        return -1 != a.indexOf("msie") ? parseInt(a.split("msie")[1]) : !1
    }

    function Q(a) {
        var b = a.getAttribute("action");
        return b ? "string" == typeof b ? b : "string" != typeof b && "string" == typeof b.value ? a.attributes.action.value : "" : ""
    }

    function ka(a) {
        for (var b = document.getElementsByTagName("FORM"), c = 0; c < b.length; c++) {
            var d = Q(b[c]);
            D(d) && (b[c].attributes.action.value = I(d, a + "\x26trackedExternalFormPost\x3d1"))
        }
    }

    function la(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        var c;
        c = b.replace(/^\s+|\s+$/g, "");
        0 === c.indexOf("www.") && (c = c.substring(c.indexOf("www.") + 4, c.length));
        var d = a;
        0 === d.indexOf("https://") && (d = d.substring(d.indexOf("https://") + 8, d.length));
        0 === d.indexOf("http://") && (d = d.substring(d.indexOf("http://") + 7, d.length));
        0 === d.indexOf("www.") && (d = d.substring(d.indexOf("www.") + 4, d.length));
        return y(d, c)
    }

    function D(a) {
        if ((y(a, "http://") || y(a, "https://")) && J(a) !== f.primaryDomain) {
            if (y(a, "http://" + k.ewt_host) ||
                y(a, "https://" + k.ewt_host)) return !0;
            for (var b = 0; b < f.brandedDomains.length; b++)
                if (la(a, f.brandedDomains[b])) return !0
        }
        return !1
    }

    function y(a, b) {
        return 0 === a.indexOf(b)
    }

    function W(a) {
        var b = a.indexOf("://");
        return 0 > b ? "" : a.substring(b + 3).split("/")[0]
    }

    function X(a) {
        var b = a.indexOf("://");
        if (0 > b) return "";
        a = a.substring(b + 3);
        b = a.indexOf("/");
        return a = a.substring(b)
    }

    function Y(a) {
        if (0 > a.indexOf("://")) return "";
        a = a.split("/");
        return a[a.length - 1]
    }

    function I(a, b) {
        var c = -1,
            d = -1;
        if (-1 != (c = a.indexOf("\x26webSyncID\x3d")) ||
            -1 != (d = a.indexOf("?webSyncID\x3d"))) {
            for (var g = c = -1 == c ? d : c, e = c + 11; e < a.length; e++)
                if ("\x26" == a.charAt(e)) {
                    g = e;
                    break
                }
            g == c && (g = a.length);
            a = a.replace(a.substr(c, g - c), ""); - 1 != d && (a = a.replace("\x26", "?"))
        }
        d = a.indexOf("#");
        c = -1 == d ? a : a.substring(0, d);
        d = -1 == d ? "" : a.substring(d);
        return 0 < a.indexOf("?") ? c + "\x26" + b + d : c + "?" + b + d
    }

    function ia(a) {
        a = "webSyncID\x3d" + a.websync.uid + "\x26sessionGUID\x3d" + v(!1).uid;
        for (var b = null, c = 0; c < x.length; c++) b = n("." + F[c].toLowerCase()), "" != b && (a += "\x26" + x[c] + "\x3d" + b);
        return a
    }

    function H() {
        for (var a =
                null, b = 0; b < x.length; b++) null != (a = f.args[x[b].toLowerCase()]) && (a = {
            uid: a,
            name: p + "." + F[b].toLowerCase()
        }, t(a))
    }

    function l(a) {
        var b = n("." + F[a].toLowerCase());
        if (b) return b;
        b = f.args[x[a].toLowerCase()];
        "undefined" == typeof b && (b = "");
        return b
    }

    function ma(a) {
        var b = a.length,
            c = a.substring(b - 1);
        a = a.substring(0, b - 2);
        switch (parseInt(c, void 0)) {
            case 1:
                a += "*";
                break;
            case 2:
                a += "**"
        }
        c = [];
        for (b = 0; 25 >= b; b++) c[b] = String.fromCharCode(65 + b);
        for (b = 0; 25 >= b; b++) c[b + 26] = String.fromCharCode(97 + b);
        for (b = 0; 9 >= b; b++) c[b + 52] = String.fromCharCode(48 +
            b);
        c[62] = "_";
        c[63] = "-";
        for (var b = [], d = 0; 256 > d; d++) b[d] = -1;
        for (d = 0; 64 > d; d++) b[c[d].charCodeAt(0)] = d;
        b[61] = -2;
        for (var c = Array(3 * (a.length / 4)), g = 0, e = 0, f = 0, k = 0, d = 0; d < a.length; d++) {
            var h = a.charAt(d),
                h = "." == h ? "\n" : "*" == h ? "\x3d" : a.charAt(d),
                h = h.charCodeAt(0),
                h = 255 >= h ? b[h] : -1;
            switch (h) {
                case -1:
                    break;
                case -2:
                    h = 0, k++;
                default:
                    switch (g) {
                        case 0:
                            e = h;
                            g = 1;
                            break;
                        case 1:
                            e <<= 6;
                            e |= h;
                            g = 2;
                            break;
                        case 2:
                            e <<= 6;
                            e |= h;
                            g = 3;
                            break;
                        case 3:
                            e <<= 6, e |= h, c[f + 2] = e & 255, e >>>= 8, c[f + 1] = e & 255, e >>>= 8, c[f] = e & 255, f += 3, g = 0
                    }
            }
        }
        if (0 != g) a = null;
        else
            for (f -=
                k, a = "", b = c.length != f ? f : c.length, d = 0; d < b; d++) a += String.fromCharCode(c[d]);
        return a
    }
    var qa = 1.3,
        f = {},
        p = "com.silverpop.iMA",
        U = "com.silverpop.",
        oa = "webtrackingoptin",
        G = ".page_visit",
        da = 864E8,
        L = 12E5,
        x = ["spMailingID", "spUserID", "spJobID", "spReportId"],
        F = ["MID", "UID", "JID", "RID"],
        pa = {
            path: "/WTS/"
        },
        M, s = !1,
        h = document,
        q = location,
        m = navigator,
        k = window,
        A = [],
        aa = /iMAWebCookie(\.uncompressed)?\.js(\?.*)$/i;
    k.ewt = k.ewt || {
        track: function(a) {
            return k.ewt.trackEvent(a)
        },
        trackLink: function(a) {
            if (a.link)
                if (R(a.link)) a.onCompleteFunction =
                    function() {
                        document.location = a.link.href
                    };
                else return k.ewt.trackEvent(a), !0;
            return k.ewt.trackEvent(a)
        },
        trackFormSubmit: function(a) {
            a.form && (a.onCompleteFunction = function() {
                a.form.submit()
            });
            return k.ewt.trackEvent(a)
        },
        trackEvent: function(a) {
            if (!m || !m.cookieEnabled || !B()) return !0;
            var b = v(!1);
            b.isNew && (K(b), b.isNew = !1, b.newSiteVisit = !1);
            w(O() + P({
                session: b,
                eventName: a.name || "n/a"
            }, a.type));
            a.onCompleteFunction instanceof Function && setTimeout(a.onCompleteFunction, 700);
            return !1
        },
        cot: function(a) {
            u();
            H();
            var b = l(0),
                c = l(1),
                d = l(2);
            if ("" != b && "" != c && "" != d) {
                var g = null;
                if (g = f.metas["com.silverpop.cothost"]) {
                    var e = "";
                    a.action && 0 < a.action.length && (e = "\x26a\x3d" + encodeURIComponent(a.action));
                    a.detail && 0 < a.detail.length && (e += "\x26d\x3d" + encodeURIComponent(a.detail));
                    a.amount && 0 < a.amount.length && (e += "\x26amt\x3d" + encodeURIComponent(a.amount));
                    w(z() + g + "/cot?m\x3d" + b + "\x26r\x3d" + c + "\x26j\x3d" + d + e)
                }
            }
        },
        cotLink: function(a) {
            u();
            H();
            var b = l(0),
                c = l(1),
                d = l(2);
            if ("" != b && "" != c && "" != d) {
                var g = null;
                if (g = f.metas["com.silverpop.cothost"]) {
                    var e =
                        "";
                    a.action && 0 < a.action.length && (e = "\x26a\x3d" + encodeURIComponent(a.action));
                    a.detail && 0 < a.detail.length && (e += "\x26d\x3d" + encodeURIComponent(a.detail));
                    a.amount && 0 < a.amount.length && (e += "\x26amt\x3d" + encodeURIComponent(a.amount));
                    var h = a.link;
                    if (R(h)) return w(z() + g + "/cot?m\x3d" + b + "\x26r\x3d" + c + "\x26j\x3d" + d + e), setTimeout(function() {
                        document.location = h.href
                    }, 700), !1;
                    w(z() + g + "/cot?m\x3d" + b + "\x26r\x3d" + c + "\x26j\x3d" + d + e);
                    return !0
                }
            }
        },
        setIFrameSrc: function(a, b) {
            u();
            if (-1 == a.src.indexOf(b)) {
                var c = "";
                m &&
                    m.cookieEnabled && B() ? (H(), f.websync || (f.websync = C(), M = v(!0)), c = ia(f), s && (c += "\x26spWebTrackingOptIn\x3d1")) : c = s ? "spWebTrackingOptIn\x3d0" : "";
                a.src = I(b, c)
            }
        },
        init: function(a) {
            u();
            !a || a && a.generatePageViewEvent ? K(null) : f.websync || (f.websync = C(), v(!0));
            (!a || a && a.appendVisitoryKeyToLinks) && ha()
        },
        getVisitorKey: function() {
            return f.websync.uid
        },
        unitTest: function() {
            var a = {};
            a.getFormActionHostName = W;
            a.getFormActionResourceUri = X;
            a.getFormActionResourceName = Y;
            a.isTargetNonBlank = R;
            a.isUrlStartsWith = y;
            a.isUrlStartsWithBrandDomainScheme =
                la;
            a.isBrandedDomain = D;
            a.isFirstPageVisit = N;
            a.recordPageVisit = V;
            a.containsPage = ea;
            a.addPage = ga;
            a.hashString = T;
            a.getRootDomain = J;
            a.getPage = na;
            a.getFormActionUrl = Q;
            a.decode = ma;
            return a
        },
        smartContent: function(a, b) {
            u();
            var c = document.createElement("script");
            c.type = "text/javascript";
            var d = z() + Z() + "/service/smartcontent?contentUrl\x3d" + b + "\x26webSyncID\x3d";
            f.websync || (f.websync = C());
            d = d + f.websync.uid + "\x26sessionGUID\x3d" + v(!1).uid + "\x26orgGuid\x3d" + $() + "\x26elementId\x3d" + a;
            var g = l(0),
                e = l(1),
                h = l(2),
                k =
                l(3);
            c.src = d + (g && e ? "\x26spMailingID\x3d" + g + "\x26spUserID\x3d" + e + "\x26spJobID\x3d" + h + "\x26spReportId\x3d" + k : "");
            document.getElementsByTagName("head")[0].appendChild(c)
        },
        smartContentSuccess: function(a) {
            document.getElementById(a.elementId).innerHTML = a.content
        },
        getContactID: function() {
            return "" == l(1) ? null : ma(l(1))
        }
    };
    A.push(u);
    A.push(K);
    A.push(ha);
    (function(a) {
        if (k.addEventListener) k.addEventListener("load", a, !1);
        else if (k.attachEvent) k.attachEvent("onload", a);
        else {
            var b = k.onload;
            k.onload = function() {
                b &&
                    b(null);
                a()
            }
        }
    })(function() {
        for (var a = 0; a < A.length; a++) A[a]()
    })
})();
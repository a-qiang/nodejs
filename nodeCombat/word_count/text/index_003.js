!(function () {
  var t,
    n = {
      27704178: 1,
      33051329: 1,
      171256861: 1,
      379851785: 1,
      403788015: 1,
      545102791: 1,
      576436746: 1,
      642224047: 1,
      647318555: 1,
      705811353: 1,
      758128056: 1,
      764032660: 1,
      946468589: 1,
      1074182719: 1,
      1157646507: 1,
      1354576628: 1,
      1483607796: 1,
      1505998205: 1,
      1515796817: 1,
      1532821206: 1,
      1585768309: 1,
      1672743503: 1,
      1799790739: 1,
      1815769914: 1,
      1883128869: 1,
      1936852660: 1,
      1941794629: 1,
      2090634341: 1,
      2288541596: 1,
      2419216076: 1,
      2571044395: 1,
      2574006117: 1,
      2762029680: 1,
      2762029686: 1,
      2880605096: 1,
      3151328993: 1,
      3199788265: 1,
      3258406986: 1,
      3260134771: 1,
      3589387457: 1,
      4031914383: 1,
      4089893501: 1,
      4203979479: 1,
    },
    r = "//pointman.alibaba.com",
    a = document._ab_sample,
    e = 0.001;
  !(function (t) {
    function n(t, n) {
      for (var r = 0, a = t.length; r < a && n(t[r], r) !== !1; r++);
    }
    function r(t, n) {
      for (var r in t) c.call(t, r) && n(t[r], r);
    }
    function a(t) {
      switch (t.tagName) {
        case "LINK":
          return t.getAttribute("href");
        case "OBJECT":
          var n = t.getAttribute("data");
          if (n) return n;
          for (
            var r = t.getElementsByTagName("PARAM"), a = 0;
            a < r.length;
            a++
          ) {
            var e = r[a];
            if (/^src$|^movie$/i.test(e.name)) return e.value;
          }
          return null;
        default:
          return t.getAttribute("src");
      }
    }
    function e(t) {
      var n = t.match(u);
      if (!n) return null;
      var r = n[1];
      return l.test(r) && (r = r.split("@").pop().split(":")[0]), r;
    }
    function o(t) {
      return f.test(t);
    }
    function i(t) {
      if (o(t)) return t;
      var n = v.test(t) ? -3 : -2,
        r = t.split(".");
      return r.slice(n).join(".");
    }
    t.ArrayEach = n;
    var c = Object.prototype.hasOwnProperty;
    (t.MapEach = r), (t.GetUrlAttr = a);
    var u = /^\s*(?:https?:|wss?:)?\/{2,}([^\/\?\#\\]+)/i,
      l = /[@:]/;
    t.GetHostNameFromUrl = e;
    var f = /^(?:\d+\.)+\d+$/;
    t.IsIPAddr = o;
    var v = /\.com\.cn$|\.com\.hk$/;
    t.GetRootDomain = i;
  })(t || (t = {}));
  var o;
  !(function (t) {
    function n(t) {
      if (!(Math.random() >= e)) {
        var n = a * e,
          o = r + "/pv?p=" + n + "&uid=" + t;
        new Image().src = o;
      }
    }
    t.log = n;
  })(o || (o = {}));
  var i;
  !(function (n) {
    function r(n, r) {
      var a = document.querySelectorAll(n);
      t.ArrayEach(a, function (t) {
        var n = t.parentNode;
        n && (n.removeChild(t), u[r] || ((u[r] = !0), o.log(r)));
      });
    }
    function a() {
      t.MapEach(c, function (n, a) {
        var e = i(n).split(",");
        t.ArrayEach(e, function (t) {
          r(t, +a);
        });
      });
    }
    function e() {
      i && (a(), setInterval(a, 3e3));
    }
    var i = window.atob,
      c = {
        69: "LnRic2JfYmdfZGl2LCN0YnNiLW5vdGlmaWVycw==",
        7: "I3lvdWRhb0dXWlMxMSwjaHVpLXBsdWdpbjExLCN5b3VkYW9HV1pTLXNpZGViYXItcmlnaHQ=",
        21: "LnRiLW1ldGEgZGl2W3N0eWxlPSJtYXJnaW4tdG9wOjEwcHg7bWFyZ2luLWJvdHRvbTo1cHgiXQ==",
        22: "Lm1tel90b29sYmFyX2NvbnRhaW5lciwubW16X3Rvb2xiYXJfY29udHJvbF9zbWFsbCwubW16X2Nocm9tZV9pbnNlcnRfaW5mb19jb250YWluZXI=",
      },
      u = {};
    n.Init = e;
  })(i || (i = {}));
  var c;
  !(function (r) {
    function a(t) {
      for (var n = 0, r = 0, a = t.length; r < a; r++)
        (n = (n << 5) - n + t.charCodeAt(r)), (n >>>= 0);
      return n;
    }
    function e(t) {
      var n = t.parentNode;
      n && n.removeChild(t);
    }
    function i(r) {
      if (r.tagName in m) {
        var i = t.GetUrlAttr(r);
        if (i) {
          var c = t.GetHostNameFromUrl(i);
          if (c) {
            c = t.GetRootDomain(c);
            var u = s[c];
            u || (u = s[c] = a(c)), u in n && ((f[c] = !0), e(r), o.log(d));
          }
        }
      }
    }
    function c(n) {
      t.ArrayEach(n, function (n) {
        var r = n.addedNodes;
        t.ArrayEach(r, function (t) {
          1 === t.nodeType && i(t);
        });
      });
    }
    function u() {
      var t = new v(c);
      t.observe(document, { childList: !0, subtree: !0 });
    }
    function l() {
      if (v && "http:" == location.protocol) {
        var t = "__blkset__";
        (f = document[t]), f || ((f = document[t] = {}), (f.__raw = n)), u();
      }
    }
    var f,
      v = window.MutationObserver,
      d = 10,
      m = { SCRIPT: 1, IMG: 1, LINK: 1, IFRAME: 1 },
      s = {};
    r.Init = l;
  })(c || (c = {}));
  var u;
  !(function (t) {
    function n() {
      c.Init(), i.Init();
    }
    function r() {
      document[e] || ((document[e] = !0), a && n());
    }
    var e = "__adblk__";
    r();
  })(u || (u = {}));
})();

/* v2.2.0*/
!(function (t, n, r) {
  if (!n._sufei_data) {
    n._sufei_data = 1;
    var e;
    !(function (n) {
      function r() {
        return (4294967295 * Math.random()) >>> 0;
      }
      function e(t) {
        for (var n = 0, r = 0, e = t.length; e > r; r++)
          (n = (n << 5) - n + t.charCodeAt(r)), (n >>>= 0);
        return n;
      }
      function i(t, n, r, e, i) {
        if (u) {
          var o = void 0;
          e && (o = !0),
            i && (o = { capture: e, passive: i }),
            t.addEventListener(n, r, o);
        } else
          t.attachEvent("on" + n, function () {
            r(event);
          });
      }
      function o(t) {
        return /^(\d+\.)+\d+$/.test(t);
      }
      function c(t) {
        if (o(t)) return t;
        var n = f.test(t) ? -3 : -2,
          r = t.split(".");
        return r.slice(n).join(".");
      }
      function a(t) {
        if (t) {
          var n = t.match(s);
          if (n) {
            var r = n[1];
            return v.test(r) && (r = r.split("@").pop().split(":")[0]), r;
          }
        }
      }
      var u = !!t.addEventListener;
      (n.a = r),
        (n.b = e),
        (n.c =
          Date.now ||
          function () {
            return +new Date();
          }),
        (n.d = i),
        (n.e = o);
      var f = /\.com\.cn$|\.com\.hk$/;
      n.f = c;
      var s = /^\s*(?:https?:)?\/{2,}([^\/\?\#\\]+)/i,
        v = /[@:]/;
      n.g = a;
    })(e || (e = {}));
    var i;
    !(function (t) {
      function n(t) {
        for (var n = 0, r = t.length, i = []; r > n; ) {
          var o = (t[n++] << 16) | (t[n++] << 8) | t[n++];
          i.push(
            e.charAt(o >> 18),
            e.charAt((o >> 12) & 63),
            e.charAt((o >> 6) & 63),
            e.charAt(63 & o)
          );
        }
        return i.join("");
      }
      function r(t) {
        for (var n = 0, r = t.length, e = []; r > n; ) {
          var o =
            (i[t.charAt(n++)] << 18) |
            (i[t.charAt(n++)] << 12) |
            (i[t.charAt(n++)] << 6) |
            i[t.charAt(n++)];
          e.push(o >> 16, (o >> 8) & 255, 255 & o);
        }
        return e;
      }
      for (
        var e =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          i = {},
          o = 0;
        64 > o;
        o++
      )
        i[e[o]] = o;
      (t.h = n), (t.i = r);
    })(i || (i = {}));
    var o;
    !(function (t) {
      function r(t) {
        c++;
      }
      function i(t) {
        a++;
      }
      function o() {
        return (c << 16) | a;
      }
      var c = 0,
        a = 0,
        u =
          "onwheel" in n.createElement("div")
            ? "wheel"
            : "onmousewheel" in n
            ? "mousewheel"
            : "DOMMouseScroll";
      e.d(n, u, i, !0, !0),
        e.d(n, "mousemove", r),
        e.d(n, "touchmove", r),
        (t.j = o);
    })(o || (o = {}));
    var c;
    !(function (r) {
      function e() {
        var n = "";
        try {
          n =
            "ActiveXObject" in t
              ? new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                  .GetVariable("$version")
                  .replace(",", ".")
              : navigator.plugins["Shockwave Flash"].description;
        } catch (r) {}
        return +n.match(/\d+\.\d+/) || -1;
      }
      function i() {
        return "chrome" in t;
      }
      function o() {
        return "ActiveXObject" in t;
      }
      function c() {
        return "MozSettingsEvent" in t;
      }
      function a() {
        return "safari" in t;
      }
      function u() {
        return "sgAppName" in navigator;
      }
      function f() {
        return "callPhantom" in t;
      }
      function s() {
        return "webdriver" in t;
      }
      function v() {
        return "ontouchstart" in n;
      }
      function h() {
        return !0;
      }
      function l() {
        return navigator.javaEnabled();
      }
      function p() {
        try {
          return "localStorage" in t;
        } catch (n) {
          return !1;
        }
      }
      function d() {
        return w > 8;
      }
      function g() {
        return !1;
      }
      function m() {
        for (var t = 0, n = 0; 16 > n; n++) {
          var r = +y[n]();
          t = (t << 1) | r;
        }
        return t;
      }
      var w = e(),
        y = [i, o, c, a, u, g, g, f, s, g, g, v, h, l, p, d];
      r.k = m;
    })(c || (c = {}));
    var a,
      u = "l",
      f = "isg2",
      s = [
        /\.alicdn\.com\//,
        /\.mmstat\.com/,
        /\.tanx\.com/,
        /\.google\.com/,
        /\.googleapis\.com/,
      ],
      v = n.head || n.getElementsByTagName("head")[0];
    !(function (t) {
      function r(t) {
        var r = n.cookie,
          e = "; " + t + "=",
          i = r.indexOf(e);
        if (-1 == i) {
          if (((e = t + "="), r.substr(0, e.length) != e)) return;
          i = 0;
        }
        var o = i + e.length,
          c = r.indexOf("; ", o);
        return -1 == c && (c = r.length), r.substring(o, c);
      }
      function e(t, r, e, i, o) {
        var c = t + "=" + r;
        i && (c += "; domain=" + i),
          o && (c += "; path=" + o),
          e && (c += "; expires=" + e),
          (n.cookie = c);
      }
      function i(t, n, r) {
        this.write(t, "", "Thu, 01 Jan 1970 00:00:00 GMT", n, r);
      }
      (t.l = r), (t.m = e), (t.n = i);
    })(a || (a = {}));
    var h,
      l = (function () {
        function t(t) {
          this._fields = t;
        }
        return (
          (t.prototype.o = function () {
            for (
              var t = this._fields, n = [], r = -1, e = 0, i = t.length;
              i > e;
              e++
            )
              for (
                var o = this[e], c = t[e], a = (r += c);
                (n[a] = 255 & o), 0 != --c;

              )
                --a, (o >>= 8);
            return n;
          }),
          (t.prototype.i = function (t) {
            for (var n = this._fields, r = 0, e = 0, i = n.length; i > e; e++) {
              var o = n[e],
                c = 0;
              do c = (c << 8) + t[r++];
              while (--o > 0);
              this[e] = c >>> 0;
            }
          }),
          (t.prototype.p = function (t, n) {
            this._desc || (this._desc = []), (this._desc[t] = n);
          }),
          (t.prototype.q = function () {
            for (var t = {}, n = 0; n < this._fields.length; n++) {
              var r = this._desc[n] || n;
              t[r] = this[n];
            }
            return t;
          }),
          t
        );
      })();
    !(function (t) {
      function n(t) {
        for (var n = 0, r = 0, e = t.length; e > r; r++)
          n = (n << 5) - n + t[r];
        return 255 & n;
      }
      function r(t, n, r, e, i) {
        for (var o = t.length; o > n; )
          (r[e++] = t[n++] ^ (255 & i)), (i = ~(131 * i));
      }
      function e(t) {
        return i.h(t).replace(/\+/g, "-").replace(/\=/g, "_");
      }
      function o(t) {
        return (t = t.replace(/\-/g, "+").replace(/\_/g, "=")), i.i(t);
      }
      function c(t) {
        var i = n(t),
          o = [u, i];
        return r(t, 0, o, 2, i), e(o);
      }
      function a(t) {
        var e = o(t),
          i = e[0];
        if (i == u) {
          var c = e[1],
            a = [];
          if ((r(e, 2, a, 0, c), n(a) == c)) return a;
        }
      }
      var u = 2;
      (t.r = c), (t.s = a);
    })(h || (h = {}));
    var p;
    !(function (t) {
      function n() {
        var t = a.l(u);
        if (t && 32 == t.length) {
          var n = h.s(t);
          if (n && (s.i(n), 0 != s[d])) return;
        }
        s[d] = e.a();
      }
      function r() {
        s[v]++, (s[m] = (e.c() / 1e3) | 0);
        var t = o.j();
        (s[y] = t >> 16), (s[b] = 65535 & t);
        var n = s.o();
        return h.r(n);
      }
      function i() {
        var t = 4,
          r = 2;
        (s = new l([r, r, t, t, t, r, r, r])),
          n(),
          (s[p] = 65535 & e.a()),
          (s[v] = 0),
          (s[g] = e.b(navigator.userAgent)),
          (s[w] = c.k());
      }
      function f() {
        var t = r();
        return t;
      }
      var s,
        v = 0,
        p = 1,
        d = 2,
        g = 3,
        m = 4,
        w = 5,
        y = 6,
        b = 7;
      (t.t = i), (t.j = f);
    })(p || (p = {}));
    var d;
    !(function (r) {
      function i(t, n, r) {
        if (!t) return !1;
        var e = t[n];
        if (!e) return !1;
        var i = r(e);
        return (t[n] = i), !0;
      }
      function o(t, n, r) {
        if ("apply" in n) return n.apply(t, r);
        switch (r.length) {
          case 0:
            return n();
          case 1:
            return n(r[0]);
          case 2:
            return n(r[0], r[1]);
          default:
            return n(r[0], r[2], r[3]);
        }
      }
      function c() {
        var t = p.j();
        a.m(u, t, "Fri, 01 Feb 2030 00:00:00 GMT", M, "/");
      }
      function h(t) {
        var n = e.g(t);
        return n ? T.test(n) : !0;
      }
      function l() {
        function r(t) {
          if (!/^https?\:/.test(t.protocol)) return !1;
          var n = t.target;
          if (!n) {
            var r = i[0];
            r && (n = r.target);
          }
          var e = !n || /^_self$/i.test(n);
          if (e) {
            var o = t.href.split("#")[0];
            if (o == E && t.hash) return !1;
          }
          return !0;
        }
        var i = n.getElementsByTagName("base");
        e.d(n, "click", function (t) {
          for (var n = t.target || t.srcElement; n; ) {
            if ("A" == n.tagName) {
              r(n) && c();
              break;
            }
            n = n.parentNode;
          }
        }),
          e.d(n, "submit", c),
          e.d(t, "unload", c);
      }
      function d(t) {
        if (h(t)) return void c();
        var n = p.j();
        return t + (/\?/.test(t) ? "&" : "?") + f + "=" + encodeURIComponent(n);
      }
      function g(n, r) {
        n in t && i(t, n, r);
      }
      function m() {
        g("fetch", function (t) {
          return function (n, r) {
            if ("string" == typeof n && !A(n)) {
              var e = d(n);
              e
                ? (n = e)
                : ((r = r || {}), (r.credentials = r.credentials || "include"));
            }
            return t.call(this, n, r);
          };
        });
      }
      function w() {
        var n = t.XMLHttpRequest;
        n && y(n.prototype), b();
      }
      function y(n) {
        O
          ? i(n, "open", function (t) {
              return function () {
                try {
                  c();
                } catch (n) {}
                return t.apply(this, arguments);
              };
            })
          : i(t, "XMLHttpRequest", function (t) {
              return function () {
                try {
                  c();
                } catch (n) {}
                return new t();
              };
            });
      }
      function b() {
        i(t, "ActiveXObject", function (t) {
          return function (n) {
            if (n && /XMLHTTP/i.test(n))
              try {
                c();
              } catch (r) {}
            return new t(n);
          };
        });
      }
      function A(n) {
        var r = s,
          e = t.sufei_jsonp_ignore;
        e && (r = r.concat(e));
        for (var i = 0; i < r.length; i++) if (r[i].test(n)) return !0;
        return !1;
      }
      function _() {
        function t(t) {
          if (t && "SCRIPT" == t.tagName) {
            var n = t.src;
            /callback=/.test(n) &&
              (/isg2=/.test(n) || A(n) || (h(n) ? c() : (t.src = d(t.src))));
          }
        }
        function r(n) {
          return function (r) {
            try {
              t(r);
            } catch (e) {}
            return o(this, n, arguments);
          };
        }
        function e(t) {
          O ? i(Element.prototype, t, r) : (i(v, t, r), i(n.body, t, r));
        }
        e("insertBefore"), e("appendChild");
      }
      function j() {
        (E = location.href.split("#")[0]),
          (k = location.hostname),
          (M = e.f(k)),
          (T = new RegExp("\\.?" + M.replace(/\./g, "\\.") + "$", "i")),
          l(),
          w(),
          m(),
          _(),
          c();
      }
      var E,
        k,
        M,
        T,
        O = !!t.addEventListener;
      r.t = j;
    })(d || (d = {}));
    var g;
    !(function (t) {
      function n() {
        p.t(), d.t();
      }
      function r() {
        try {
          n();
        } catch (t) {}
      }
      r();
    })(g || (g = {}));
  }
})(window, document);

!(function () {
  if (!document._sufei_data2) {
    document._sufei_data2 = 220;
    var n;
    !(function (n) {
      function t(n) {
        for (var t = 0, r = n.length, i = []; r > t; ) {
          var o = (n[t++] << 16) | (n[t++] << 8) | n[t++];
          i.push(
            e.charAt(o >> 18),
            e.charAt((o >> 12) & 63),
            e.charAt((o >> 6) & 63),
            e.charAt(63 & o)
          );
        }
        return i.join("");
      }
      function r(n) {
        for (var t = 0, r = n.length, e = []; r > t; ) {
          var o =
            (i[n.charAt(t++)] << 18) |
            (i[n.charAt(t++)] << 12) |
            (i[n.charAt(t++)] << 6) |
            i[n.charAt(t++)];
          e.push(o >> 16, (o >> 8) & 255, 255 & o);
        }
        return e;
      }
      for (
        var e =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          i = {},
          o = 0;
        64 > o;
        o++
      )
        i[e[o]] = o;
      (n.a = t), (n.b = r);
    })(n || (n = {}));
    var t,
      r = "isg",
      e = [
        /\.alicdn\.com\/|\.mmstat\.com|\.tanx\.com|\.google\.com|\.googleapis\.com/,
      ],
      i = !!window.addEventListener,
      o = document.getElementsByTagName("head")[0];
    !(function (n) {
      function t() {
        return (4294967295 * Math.random()) >>> 0;
      }
      function r(n) {
        for (var t = 0, r = 0, e = n.length; e > r; r++)
          (t = (t << 5) - t + n.charCodeAt(r)), (t >>>= 0);
        return t;
      }
      function e(n, t, r, e, o) {
        if (i) {
          var u = void 0;
          e && (u = !0),
            o && (u = { capture: e, passive: o }),
            n.addEventListener(t, r, u);
        } else
          n.attachEvent("on" + t, function () {
            r(event);
          });
      }
      function o(n) {
        return /^(\d+\.)+\d+$/.test(n);
      }
      function u(n) {
        if (o(n)) return n;
        var t = d.test(n) ? -3 : -2,
          r = n.split(".");
        return r.slice(t).join(".");
      }
      function c(n) {
        if (!n) return null;
        var t = n.match(h);
        if (!t) return null;
        var r = t[1];
        return w.test(r) && (r = r.split("@").pop().split(":")[0]), r;
      }
      function a(n) {
        for (var t = 0, r = n.length - 1; r >= 0; r--) t = (t << 1) | n[r];
        return t;
      }
      function f(n, t, r) {
        if (!n) return !1;
        var e = n[t];
        if (!e) return !1;
        var i = r(e);
        return (n[t] = i), !0;
      }
      function s(n, t, r) {
        if (!g) return !1;
        var e = g(n, t);
        return e && e.set
          ? ((e.set = r(e.set)),
            i ||
              (e.get = (function (n) {
                return function () {
                  return n.call(this);
                };
              })(e.get)),
            Object.defineProperty(n, t, e),
            !0)
          : !1;
      }
      function v(n, t, r) {
        if ("apply" in t) return t.apply(n, r);
        switch (r.length) {
          case 0:
            return t();
          case 1:
            return t(r[0]);
          case 2:
            return t(r[0], r[1]);
          default:
            return t(r[0], r[2], r[3]);
        }
      }
      function l(n, t) {
        switch (t.length) {
          case 0:
            return new n();
          case 1:
            return new n(t[0]);
          case 2:
            return new n(t[0], t[1]);
          default:
            return new n(t[0], t[2], t[3]);
        }
      }
      (n.c = t),
        (n.d = r),
        (n.e =
          Date.now ||
          function () {
            return +new Date();
          }),
        (n.f = e),
        (n.g = o);
      var d = /\.com\.cn$|\.com\.hk$/;
      n.h = u;
      var h = /^\s*(?:https?:|wss?:)?\/{2,}([^\/\?\#\\]+)/i,
        w = /[@:]/;
      (n.i = c), (n.j = a), (n.k = f);
      var g = Object.getOwnPropertyDescriptor;
      (n.l = s), (n.m = v), (n.n = l);
    })(t || (t = {}));
    var u;
    !(function (n) {
      function r(n) {
        A++,
          (T = void 0 != n.isTrusted ? n.isTrusted : !0),
          (E = n.clientX),
          (M = n.clientY);
      }
      function e(n) {
        k++;
      }
      function i(n) {
        b++;
      }
      function u(n) {
        H++;
      }
      function c() {
        var n = screen.availWidth,
          t = window.outerWidth;
        null == t &&
          (t =
            document.documentElement.clientWidth || document.body.clientWidth),
          (_ = 20 > n - t);
      }
      function a(n) {
        (y = !0), (L = !0);
      }
      function f(n) {
        L = !1;
      }
      function s() {
        t.f(document, "mousemove", e, !0),
          t.f(document, "touchmove", e, !0),
          t.f(document, "click", r, !0),
          t.f(document, "keydown", u, !0);
        var n =
          "onwheel" in o
            ? "wheel"
            : "onmousewheel" in document
            ? "mousewheel"
            : "DOMMouseScroll";
        t.f(document, n, i, !0, !0),
          t.f(window, "focus", a),
          t.f(window, "blur", f),
          t.f(window, "resize", c),
          c();
      }
      function v() {
        return k;
      }
      function l() {
        return b;
      }
      function d() {
        return A;
      }
      function h() {
        return H;
      }
      function w() {
        return { t: E, u: M, v: T };
      }
      function g() {
        return L;
      }
      function p() {
        return y;
      }
      function m() {
        return _;
      }
      var _,
        y,
        k = 0,
        A = 0,
        b = 0,
        H = 0,
        E = 0,
        M = 0,
        T = !0,
        L = !0;
      (n.o = s),
        (n.p = v),
        (n.q = l),
        (n.r = d),
        (n.s = h),
        (n.w = w),
        (n.x = g),
        (n.y = p),
        (n.z = m);
    })(u || (u = {}));
    var c;
    !(function (n) {
      function r() {
        var n = "";
        try {
          n = M
            ? M["Shockwave Flash"].description
            : new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                .GetVariable("$version")
                .replace(",", ".");
        } catch (t) {}
        return +n.match(/\d+\.\d+/) || 0;
      }
      function e(n) {
        for (var t = 0; T > t; t++) {
          var r = M[t].name;
          if (n.test(r)) return !0;
        }
        return !1;
      }
      function u() {
        return r() > 8;
      }
      function c() {
        return navigator.javaEnabled();
      }
      function a() {
        return e(/PDF|Acrobat/i);
      }
      function f() {
        return e(/Native Client/);
      }
      function s() {
        return e(/WangWang/i);
      }
      function v() {
        return e(/Alipay/i);
      }
      function l() {
        return !1;
      }
      function d() {
        try {
          return "localStorage" in window;
        } catch (n) {
          return !1;
        }
      }
      function h() {
        return !!window.HTMLCanvasElement;
      }
      function w() {
        return "ontouchstart" in document;
      }
      function g() {
        var n = navigator.msDoNotTrack || navigator.doNotTrack;
        return "1" == n;
      }
      function p() {
        var n = navigator.language || navigator.systemLanguage;
        return /zh-cn/i.test(n);
      }
      function m() {
        var n = navigator.languages;
        return n && n.length > 0;
      }
      function _() {
        return -480 == new Date().getTimezoneOffset();
      }
      function y() {
        return "iso-8859-1" == document.defaultCharset;
      }
      function k() {
        if (null == E) {
          for (var n = [], r = 0; 16 > r; r++) n[r] = +L[r]();
          E = t.j(n);
        }
        return E;
      }
      function A() {
        for (var n in D)
          if (D.hasOwnProperty(n)) {
            var t = D[n];
            if (t()) return +n.substr(1);
          }
        return 0;
      }
      function b() {
        return T;
      }
      function H() {
        M && (T = M.length);
      }
      var E,
        M = navigator.plugins,
        T = 0,
        L = [u, c, a, f, s, v, l, l, d, h, w, g, p, m, _, y];
      n.A = k;
      var x = navigator.userAgent,
        B = navigator.vendor,
        j = "chrome" in window,
        O = "ActiveXObject" in window,
        W = o.style,
        D = {
          _13: function () {
            return "callPhantom" in window;
          },
          _14: function () {
            return /python/i.test(navigator.appVersion);
          },
          _15: function () {
            return "sgAppName" in navigator;
          },
          _16: function () {
            return /Maxthon/i.test(B);
          },
          _17: function () {
            return "opr" in window;
          },
          _18: function () {
            return j && /BIDUBrowser/i.test(x);
          },
          _19: function () {
            return j && /LBBROWSER/i.test(x);
          },
          _20: function () {
            return j && /QQBrowser/.test(x);
          },
          _21: function () {
            return j && /UBrowser/i.test(x);
          },
          _22: function () {
            return j && /2345Explorer/.test(x);
          },
          _23: function () {
            return j && /TheWorld/.test(x);
          },
          _24: function () {
            return j && "MSGesture" in window;
          },
          _25: function () {
            return "aef" in window;
          },
          _1: function () {
            return j;
          },
          _2: function () {
            return "MozSettingsEvent" in window;
          },
          _3: function () {
            return "safari" in window;
          },
          _4: function () {
            return O && !("maxHeight" in W);
          },
          _5: function () {
            return O && !("postMessage" in window);
          },
          _6: function () {
            return O && !i;
          },
          _7: function () {
            return O && !window.Uint8Array;
          },
          _8: function () {
            return O && !window.WeakMap;
          },
          _9: function () {
            return O && window.WeakMap;
          },
          _10: function () {
            return "Google Inc." == navigator.vendor;
          },
          _11: function () {
            return "Apple Computer, Inc." == navigator.vendor;
          },
          _12: function () {
            return O;
          },
        };
      (n.B = A), (n.C = b), (n.o = H);
    })(c || (c = {}));
    var a;
    !(function (n) {
      function t(n) {
        var t = document.cookie,
          r = "; " + n + "=",
          e = t.indexOf(r);
        if (-1 == e) {
          if (((r = n + "="), t.substr(0, r.length) != r)) return;
          e = 0;
        }
        var i = e + r.length,
          o = t.indexOf("; ", i);
        return -1 == o && (o = t.length), t.substring(i, o);
      }
      function r(n, t, r, e, i) {
        var o = n + "=" + t;
        e && (o += "; domain=" + e),
          i && (o += "; path=" + i),
          r && (o += "; expires=" + r),
          (document.cookie = o);
      }
      function e(n, t, e) {
        r(n, "", "Thu, 01 Jan 1970 00:00:00 GMT", t, e);
      }
      (n.D = t), (n.F = r), (n.G = e);
    })(a || (a = {}));
    var f;
    !(function (n) {
      function r(n) {
        return n.href.split("#")[0];
      }
      function e(n) {
        var t = n.target;
        if (!t) {
          var r = document.getElementsByTagName("base"),
            e = r.length;
          e > 0 && (t = r[e - 1].target);
        }
        return t;
      }
      function i(n) {
        if (/^https?\:/.test(n.protocol)) {
          var t = e(n),
            i = !t || /^_self$/i.test(t);
          if (i) {
            var o = r(n);
            if (o == f && n.hash) return;
          }
          w.H(n.href);
        }
      }
      function o(n) {
        if (!n.defaultPrevented)
          for (var t = n.target || n.srcElement; t; ) {
            var r = t.tagName;
            if ("A" == r || "AREA" == r) {
              i(t);
              break;
            }
            t = t.parentNode;
          }
      }
      function u(n) {
        var t = n.target || n.srcElement;
        if (t[s] != v) {
          w.H(t.action);
        }
      }
      function c(n) {
        return function () {
          try {
            var t = this;
            w.H(t.action), (t[s] = ++v);
          } catch (r) {}
          return n.apply(this, arguments);
        };
      }
      function a() {
        (f = r(location)),
          t.f(document, "click", o),
          t.f(document, "submit", u);
        var n = window.HTMLFormElement;
        n && t.k(n.prototype, "submit", c);
      }
      var f,
        s = "__chkid__",
        v = 0;
      n.o = a;
    })(f || (f = {}));
    var s;
    !(function (n) {
      function r(n) {
        t.k(n, "open", function (n) {
          return function (t, r) {
            return (this[a] = r), n.apply(this, arguments);
          };
        }),
          t.k(n, "send", function (n) {
            return function (t) {
              try {
                var r = this[a];
                w.H(r);
              } catch (e) {}
              return n.apply(this, arguments);
            };
          });
      }
      function e() {
        t.k(window, "XMLHttpRequest", function (n) {
          try {
            w.H("");
          } catch (r) {}
          return t.n(n, arguments);
        });
      }
      function i() {
        var n = window.XMLHttpRequest;
        if (n) {
          var t = n.prototype;
          t ? r(t) : e();
        }
      }
      function o() {
        t.k(window, "ActiveXObject", function (n) {
          return function (r) {
            try {
              r && /XMLHTTP/i.test(r) && w.H("");
            } catch (e) {}
            return t.n(n, arguments);
          };
        });
      }
      function u() {
        t.k(window, "fetch", function (n) {
          return function (t, r) {
            try {
              if ("string" == typeof t) {
                var e = w.H(t);
                e
                  ? (t = e)
                  : "" === e ||
                    ((r = r || {}),
                    (r.credentials = r.credentials || "include"));
              }
            } catch (i) {}
            return n.call(this, t, r);
          };
        });
      }
      function c() {
        i(), o(), u();
      }
      var a = "__sufei_url__";
      n.o = c;
    })(s || (s = {}));
    var v,
      l = (function () {
        function n(n) {
          this._fields = n;
          for (var t = 0, r = n.length; r > t; t++) this[t] = 0;
        }
        return (
          (n.prototype.I = function () {
            for (
              var n = this._fields, t = [], r = -1, e = 0, i = n.length;
              i > e;
              e++
            )
              for (
                var o = this[e], u = n[e], c = (r += u);
                (t[c] = 255 & o), 0 != --u;

              )
                --c, (o >>= 8);
            return t;
          }),
          (n.prototype.b = function (n) {
            for (var t = this._fields, r = 0, e = 0, i = t.length; i > e; e++) {
              var o = t[e],
                u = 0;
              do u = (u << 8) + n[r++];
              while (--o > 0);
              this[e] = u >>> 0;
            }
          }),
          n
        );
      })();
    !(function (t) {
      function r(n) {
        for (var t = 0, r = 0, e = n.length; e > r; r++)
          t = (t << 5) - t + n[r];
        return 255 & t;
      }
      function e(n, t, r, e, i) {
        for (var o = n.length; o > t; )
          (r[e++] = n[t++] ^ (255 & i)), (i = ~(131 * i));
      }
      function i(t) {
        return n.a(t);
      }
      function o(t) {
        return n.b(t);
      }
      function u(n) {
        var t = r(n),
          o = [a, t];
        return e(n, 0, o, 2, t), i(o);
      }
      function c(n) {
        var t = o(n),
          i = t[0];
        if (i == a) {
          var u = t[1],
            c = [];
          if ((e(t, 2, c, 0, u), r(c) == u)) return c;
        }
      }
      var a = 2;
      (t.J = u), (t.K = c);
    })(v || (v = {}));
    var d;
    !(function (n) {
      function t() {
        for (var n = navigator.platform, t = 0; t < r.length; t++)
          if (r[t].test(n)) return t + 1;
        return 0;
      }
      var r = [
        /^Win32/,
        /^Win64/,
        /^Linux armv/,
        /^Android/,
        /^iPhone/,
        /^iPad/,
        /^MacIntel/,
        /^Linux [ix]\d+/,
        /^ARM/,
        /^iPod/,
        /^BlackBerry/,
      ];
      n.L = t;
    })(d || (d = {}));
    var h;
    !(function (n) {
      function r() {
        return (t.e() / 1e3) >>> 0;
      }
      function e(n) {
        if ((u.o(), c.o(), n && 60 == n.length)) {
          var r = v.K(n);
          r && a.b(r);
        }
        (a[1] = t.c()),
          (a[5] = c.B()),
          (a[6] = d.L()),
          i(),
          (a[9] = t.d(navigator.userAgent)),
          (a[17] = c.A()),
          (a[18] = c.C());
      }
      function i() {
        var n = location.href.split("#")[0];
        a[7] = t.d(n);
      }
      function o(n, e) {
        var o;
        0 == a[4] && ((a[4] = t.c()), (a[3] = r()), (o = !0)),
          (a[2] = r()),
          (a[10] = u.p()),
          (a[11] = u.q()),
          (a[12] = u.r()),
          (a[13] = u.s());
        var c = u.w();
        (a[14] = c.t), (a[15] = c.u);
        var s = u.x(),
          l = u.y(),
          d = u.z(),
          h = [o, !document.hidden, n, s, c.v, history.length > 0, l, d];
        if (((a[16] = t.j(h)), n)) {
          (a[0] = ++f), i();
          var w = e.split("//").pop();
          a[8] = t.d(w);
        } else (a[0] = 0), (a[8] = 0);
        var g = a.I(),
          p = v.J(g);
        return p;
      }
      var a = new l([2, 2, 4, 4, 4, 1, 1, 2, 2, 4, 3, 2, 2, 2, 2, 2, 1, 2, 1]),
        f = 0;
      (n.o = e), (n.H = o);
    })(h || (h = {}));
    var w,
      g = "";
    !(function (n) {
      function i(n, t) {
        if (t) for (var r = 0; r < t.length; r++) if (t[r].test(n)) return !0;
        return !1;
      }
      function o(n) {
        return i(n, e) || i(n, window.sufei_jsonp_ignore);
      }
      function u(n) {
        var r = t.i(n);
        return r ? y.test(r) : !0;
      }
      function c(n) {
        A || (A = new Date(t.e() + 15552e6).toUTCString()),
          a.F(r, n, A, _, "/");
      }
      function v() {
        var n = h.H(!1, null);
        c(n);
      }
      function l(n) {
        var t = h.H(!0, n);
        c(t),
          k ||
            (k = setTimeout(function () {
              (k = 0), v();
            }, 0));
      }
      function d(n) {
        if (o(n)) return g;
        var t = h.H(!0, n),
          e = n + (/\?/.test(n) ? "&" : "?") + r + "=" + t;
        return e;
      }
      function w(n) {
        return null == n ? (n = "") : (n += ""), u(n) ? (l(n), null) : d(n);
      }
      function m() {
        var n = a.D(r);
        h.o(n);
        var e = location.hostname;
        (_ = t.h(e)),
          (y = new RegExp("\\.?" + _.replace(/\./g, "\\.") + "$", "i")),
          v(),
          t.f(window, "unload", function (n) {
            v();
          }),
          f.o(),
          s.o(),
          p.o();
      }
      var _, y, k, A;
      (n.H = w), (n.o = m);
    })(w || (w = {}));
    var p;
    !(function (n) {
      function r(n) {
        return f.test(n) ? (/isg=/.test(n) ? null : w.H(n)) : null;
      }
      function e(n) {
        return function (t) {
          try {
            var e = r(t);
            e && (t = e);
          } catch (i) {}
          return n.call(this, t);
        };
      }
      function i() {
        var n = window.HTMLScriptElement;
        return n ? t.l(n.prototype, "src", e) : !1;
      }
      function u(n) {
        return function (e) {
          if (e && "SCRIPT" == e.tagName)
            try {
              var i = r(e.src);
              i && (e.src = i);
            } catch (o) {}
          return t.m(this, n, arguments);
        };
      }
      function c(n) {
        var r = window.Element;
        r ? t.k(r.prototype, n, u) : (t.k(o, n, u), t.k(document.body, n, u));
      }
      function a() {
        i() || (c("insertBefore"), c("appendChild"));
      }
      var f = /callback=/;
      n.o = a;
    })(p || (p = {}));
    var m;
    !(function (n) {
      function t() {
        w.o();
      }
      function r() {
        try {
          t();
        } catch (n) {}
      }
      r();
    })(m || (m = {}));
  }
})();

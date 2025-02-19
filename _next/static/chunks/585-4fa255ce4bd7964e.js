(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [585],
  {
    80042: (e, t, r) => {
      "use strict";
      var n = r(85786),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var r,
          i,
          a,
          s,
          l,
          c,
          u,
          d,
          f = !1;
        t || (t = {}), (a = t.debug || !1);
        try {
          if (
            ((l = n()),
            (c = document.createRange()),
            (u = document.getSelection()),
            ((d = document.createElement("span")).textContent = e),
            (d.ariaHidden = "true"),
            (d.style.all = "unset"),
            (d.style.position = "fixed"),
            (d.style.top = 0),
            (d.style.clip = "rect(0, 0, 0, 0)"),
            (d.style.whiteSpace = "pre"),
            (d.style.webkitUserSelect = "text"),
            (d.style.MozUserSelect = "text"),
            (d.style.msUserSelect = "text"),
            (d.style.userSelect = "text"),
            d.addEventListener("copy", function (r) {
              if ((r.stopPropagation(), t.format)) {
                if ((r.preventDefault(), void 0 === r.clipboardData)) {
                  a && console.warn("unable to use e.clipboardData"),
                    a && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var n = o[t.format] || o.default;
                  window.clipboardData.setData(n, e);
                } else
                  r.clipboardData.clearData(),
                    r.clipboardData.setData(t.format, e);
              }
              t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData));
            }),
            document.body.appendChild(d),
            c.selectNodeContents(d),
            u.addRange(c),
            !document.execCommand("copy"))
          )
            throw Error("copy command was unsuccessful");
          f = !0;
        } catch (n) {
          a && console.error("unable to copy using execCommand: ", n),
            a && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (f = !0);
          } catch (n) {
            a && console.error("unable to copy using clipboardData: ", n),
              a && console.error("falling back to prompt"),
              (r =
                "message" in t
                  ? t.message
                  : "Copy to clipboard: #{key}, Enter"),
              (i =
                (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C"),
              (s = r.replace(/#{\s*key\s*}/g, i)),
              window.prompt(s, e);
          }
        } finally {
          u &&
            ("function" == typeof u.removeRange
              ? u.removeRange(c)
              : u.removeAllRanges()),
            d && document.body.removeChild(d),
            l();
        }
        return f;
      };
    },
    9535: (e) => {
      "use strict";
      var t = function (e) {
          var t;
          return (
            !!e &&
            "object" == typeof e &&
            "[object RegExp]" !== (t = Object.prototype.toString.call(e)) &&
            "[object Date]" !== t &&
            e.$$typeof !== r
          );
        },
        r =
          "function" == typeof Symbol && Symbol.for
            ? Symbol.for("react.element")
            : 60103;
      function n(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e)
          ? s(Array.isArray(e) ? [] : {}, e, t)
          : e;
      }
      function o(e, t, r) {
        return e.concat(t).map(function (e) {
          return n(e, r);
        });
      }
      function i(e) {
        return Object.keys(e).concat(
          Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(e).filter(function (t) {
                return Object.propertyIsEnumerable.call(e, t);
              })
            : []
        );
      }
      function a(e, t) {
        try {
          return t in e;
        } catch (e) {
          return !1;
        }
      }
      function s(e, r, l) {
        ((l = l || {}).arrayMerge = l.arrayMerge || o),
          (l.isMergeableObject = l.isMergeableObject || t),
          (l.cloneUnlessOtherwiseSpecified = n);
        var c,
          u,
          d = Array.isArray(r);
        return d !== Array.isArray(e)
          ? n(r, l)
          : d
          ? l.arrayMerge(e, r, l)
          : ((u = {}),
            (c = l).isMergeableObject(e) &&
              i(e).forEach(function (t) {
                u[t] = n(e[t], c);
              }),
            i(r).forEach(function (t) {
              (!a(e, t) ||
                (Object.hasOwnProperty.call(e, t) &&
                  Object.propertyIsEnumerable.call(e, t))) &&
                (a(e, t) && c.isMergeableObject(r[t])
                  ? (u[t] = (function (e, t) {
                      if (!t.customMerge) return s;
                      var r = t.customMerge(e);
                      return "function" == typeof r ? r : s;
                    })(t, c)(e[t], r[t], c))
                  : (u[t] = n(r[t], c)));
            }),
            u);
      }
      (s.all = function (e, t) {
        if (!Array.isArray(e)) throw Error("first argument should be an array");
        return e.reduce(function (e, r) {
          return s(e, r, t);
        }, {});
      }),
        (e.exports = s);
    },
    24054: (e) => {
      function t(e, t) {
        (e.onload = function () {
          (this.onerror = this.onload = null), t(null, e);
        }),
          (e.onerror = function () {
            (this.onerror = this.onload = null),
              t(Error("Failed to load " + this.src), e);
          });
      }
      e.exports = function (e, r, n) {
        var o = document.head || document.getElementsByTagName("head")[0],
          i = document.createElement("script");
        "function" == typeof r && ((n = r), (r = {})),
          (r = r || {}),
          (n = n || function () {}),
          (i.type = r.type || "text/javascript"),
          (i.charset = r.charset || "utf8"),
          (i.async = !("async" in r) || !!r.async),
          (i.src = e),
          r.attrs &&
            (function (e, t) {
              for (var r in t) e.setAttribute(r, t[r]);
            })(i, r.attrs),
          r.text && (i.text = "" + r.text),
          ("onload" in i
            ? t
            : function (e, t) {
                e.onreadystatechange = function () {
                  ("complete" == this.readyState ||
                    "loaded" == this.readyState) &&
                    ((this.onreadystatechange = null), t(null, e));
                };
              })(i, n),
          i.onload || t(i, n),
          o.appendChild(i);
      };
    },
    75356: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => i });
      var n =
        Number.isNaN ||
        function (e) {
          return "number" == typeof e && e != e;
        };
      function o(e, t) {
        if (e.length !== t.length) return !1;
        for (var r, o, i = 0; i < e.length; i++)
          if (!((r = e[i]) === (o = t[i]) || (n(r) && n(o)))) return !1;
        return !0;
      }
      let i = function (e, t) {
        void 0 === t && (t = o);
        var r,
          n,
          i = [],
          a = !1;
        return function () {
          for (var o = [], s = 0; s < arguments.length; s++)
            o[s] = arguments[s];
          return (
            (a && r === this && t(o, i)) ||
              ((n = e.apply(this, o)), (a = !0), (r = this), (i = o)),
            n
          );
        };
      };
    },
    38173: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let n = r(99920),
        o = r(41452),
        i = r(57437),
        a = o._(r(2265)),
        s = n._(r(54887)),
        l = n._(r(28321)),
        c = r(80497),
        u = r(7103),
        d = r(93938);
      r(72301);
      let f = r(60291),
        h = n._(r(21241)),
        p = r(77616),
        g = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function y(e, t, r, n, o, i, a) {
        let s = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== s &&
          ((e["data-loaded-src"] = s),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && o(!0), null == r ? void 0 : r.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let n = !1,
                    o = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => o,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (o = !0), t.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(e);
              }
            }));
      }
      function m(e) {
        return a.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let b = (0, a.forwardRef)((e, t) => {
        let {
            src: r,
            srcSet: n,
            sizes: o,
            height: s,
            width: l,
            decoding: c,
            className: u,
            style: d,
            fetchPriority: f,
            placeholder: h,
            loading: g,
            unoptimized: b,
            fill: v,
            onLoadRef: w,
            onLoadingCompleteRef: x,
            setBlurComplete: O,
            setShowAltText: _,
            sizesInput: k,
            onLoad: S,
            onError: P,
            ...E
          } = e,
          T = (0, a.useCallback)(
            (e) => {
              e && (P && (e.src = e.src), e.complete && y(e, h, w, x, O, b, k));
            },
            [r, h, w, x, O, P, b, k]
          ),
          C = (0, p.useMergedRef)(t, T);
        return (0, i.jsx)("img", {
          ...E,
          ...m(f),
          loading: g,
          width: l,
          height: s,
          decoding: c,
          "data-nimg": v ? "fill" : "1",
          className: u,
          style: d,
          sizes: o,
          srcSet: n,
          src: r,
          ref: C,
          onLoad: (e) => {
            y(e.currentTarget, h, w, x, O, b, k);
          },
          onError: (e) => {
            _(!0), "empty" !== h && O(!0), P && P(e);
          },
        });
      });
      function v(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...m(r.fetchPriority),
          };
        return t && s.default.preload
          ? (s.default.preload(r.src, n), null)
          : (0, i.jsx)(l.default, {
              children: (0, i.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...n },
                "__nimg-" + r.src + r.srcSet + r.sizes
              ),
            });
      }
      let w = (0, a.forwardRef)((e, t) => {
        let r = (0, a.useContext)(f.RouterContext),
          n = (0, a.useContext)(d.ImageConfigContext),
          o = (0, a.useMemo)(() => {
            let e = g || n || u.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              r = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: r };
          }, [n]),
          { onLoad: s, onLoadingComplete: l } = e,
          p = (0, a.useRef)(s);
        (0, a.useEffect)(() => {
          p.current = s;
        }, [s]);
        let y = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
          y.current = l;
        }, [l]);
        let [m, w] = (0, a.useState)(!1),
          [x, O] = (0, a.useState)(!1),
          { props: _, meta: k } = (0, c.getImgProps)(e, {
            defaultLoader: h.default,
            imgConf: o,
            blurComplete: m,
            showAltText: x,
          });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(b, {
              ..._,
              unoptimized: k.unoptimized,
              placeholder: k.placeholder,
              fill: k.fill,
              onLoadRef: p,
              onLoadingCompleteRef: y,
              setBlurComplete: w,
              setShowAltText: O,
              sizesInput: e.sizes,
              ref: t,
            }),
            k.priority
              ? (0, i.jsx)(v, { isAppRouter: !r, imgAttributes: _ })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    77616: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(2265);
      function o(e, t) {
        let r = (0, n.useRef)(() => {}),
          o = (0, n.useRef)(() => {});
        return (0, n.useMemo)(
          () =>
            e && t
              ? (n) => {
                  null === n
                    ? (r.current(), o.current())
                    : ((r.current = i(e, n)), (o.current = i(t, n)));
                }
              : e || t,
          [e, t]
        );
      }
      function i(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let r = e(t);
          return "function" == typeof r ? r : () => e(null);
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    82901: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(99920)._(r(2265)).default.createContext({});
    },
    40687: (e, t) => {
      "use strict";
      function r(e) {
        let {
          ampFirst: t = !1,
          hybrid: r = !1,
          hasQuery: n = !1,
        } = void 0 === e ? {} : e;
        return t || (r && n);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    80497: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }),
        r(72301);
      let n = r(51564),
        o = r(7103);
      function i(e) {
        return void 0 !== e.default;
      }
      function a(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function s(e, t) {
        var r;
        let s,
          l,
          c,
          {
            src: u,
            sizes: d,
            unoptimized: f = !1,
            priority: h = !1,
            loading: p,
            className: g,
            quality: y,
            width: m,
            height: b,
            fill: v = !1,
            style: w,
            overrideSrc: x,
            onLoad: O,
            onLoadingComplete: _,
            placeholder: k = "empty",
            blurDataURL: S,
            fetchPriority: P,
            decoding: E = "async",
            layout: T,
            objectFit: C,
            objectPosition: M,
            lazyBoundary: R,
            lazyRoot: j,
            ...A
          } = e,
          { imgConf: I, showAltText: D, blurComplete: L, defaultLoader: N } = t,
          z = I || o.imageConfigDefault;
        if ("allSizes" in z) s = z;
        else {
          let e = [...z.deviceSizes, ...z.imageSizes].sort((e, t) => e - t),
            t = z.deviceSizes.sort((e, t) => e - t);
          s = { ...z, allSizes: e, deviceSizes: t };
        }
        if (void 0 === N)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let B = A.loader || N;
        delete A.loader, delete A.srcSet;
        let F = "__next_img_default" in B;
        if (F) {
          if ("custom" === s.loader)
            throw Error(
              'Image with src "' +
                u +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = B;
          B = (t) => {
            let { config: r, ...n } = t;
            return e(n);
          };
        }
        if (T) {
          "fill" === T && (v = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[T];
          e && (w = { ...w, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[T];
          t && !d && (d = t);
        }
        let U = "",
          W = a(m),
          H = a(b);
        if ((r = u) && "object" == typeof r && (i(r) || void 0 !== r.src)) {
          let e = i(u) ? u.default : u;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((l = e.blurWidth),
            (c = e.blurHeight),
            (S = S || e.blurDataURL),
            (U = e.src),
            !v)
          ) {
            if (W || H) {
              if (W && !H) {
                let t = W / e.width;
                H = Math.round(e.height * t);
              } else if (!W && H) {
                let t = H / e.height;
                W = Math.round(e.width * t);
              }
            } else (W = e.width), (H = e.height);
          }
        }
        let q = !h && ("lazy" === p || void 0 === p);
        (!(u = "string" == typeof u ? u : U) ||
          u.startsWith("data:") ||
          u.startsWith("blob:")) &&
          ((f = !0), (q = !1)),
          s.unoptimized && (f = !0),
          F && u.endsWith(".svg") && !s.dangerouslyAllowSVG && (f = !0);
        let Y = a(y),
          V = Object.assign(
            v
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: C,
                  objectPosition: M,
                }
              : {},
            D ? {} : { color: "transparent" },
            w
          ),
          X =
            L || "empty" === k
              ? null
              : "blur" === k
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: W,
                  heightInt: H,
                  blurWidth: l,
                  blurHeight: c,
                  blurDataURL: S || "",
                  objectFit: V.objectFit,
                }) +
                '")'
              : 'url("' + k + '")',
          $ = X
            ? {
                backgroundSize: V.objectFit || "cover",
                backgroundPosition: V.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: X,
              }
            : {},
          K = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: n,
              width: o,
              quality: i,
              sizes: a,
              loader: s,
            } = e;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: c } = (function (e, t, r) {
                let { deviceSizes: n, allSizes: o } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let n; (n = e.exec(r)); n) t.push(parseInt(n[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: o.filter((t) => t >= n[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: o, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => o.find((t) => t >= e) || o[o.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, o, a),
              u = l.length - 1;
            return {
              sizes: a || "w" !== c ? a : "100vw",
              srcSet: l
                .map(
                  (e, n) =>
                    s({ config: t, src: r, quality: i, width: e }) +
                    " " +
                    ("w" === c ? e : n + 1) +
                    c
                )
                .join(", "),
              src: s({ config: t, src: r, quality: i, width: l[u] }),
            };
          })({
            config: s,
            src: u,
            unoptimized: f,
            width: W,
            quality: Y,
            sizes: d,
            loader: B,
          });
        return {
          props: {
            ...A,
            loading: q ? "lazy" : p,
            fetchPriority: P,
            width: W,
            height: H,
            decoding: E,
            className: g,
            style: { ...V, ...$ },
            sizes: K.sizes,
            srcSet: K.srcSet,
            src: x || K.src,
          },
          meta: { unoptimized: f, priority: h, placeholder: k, fill: v },
        };
      }
    },
    28321: (e, t, r) => {
      "use strict";
      var n = r(25566);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return y;
          },
          defaultHead: function () {
            return f;
          },
        });
      let o = r(99920),
        i = r(41452),
        a = r(57437),
        s = i._(r(2265)),
        l = o._(r(65960)),
        c = r(82901),
        u = r(36590),
        d = r(40687);
      function f(e) {
        void 0 === e && (e = !1);
        let t = [(0, a.jsx)("meta", { charSet: "utf-8" }, "charset")];
        return (
          e ||
            t.push(
              (0, a.jsx)(
                "meta",
                { name: "viewport", content: "width=device-width" },
                "viewport"
              )
            ),
          t
        );
      }
      function h(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === s.default.Fragment
          ? e.concat(
              s.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      r(72301);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function g(e, t) {
        let { inAmpMode: r } = t;
        return e
          .reduce(h, [])
          .reverse()
          .concat(f(r).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return (o) => {
                let i = !0,
                  a = !1;
                if (
                  o.key &&
                  "number" != typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  a = !0;
                  let t = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(t) ? (i = !1) : e.add(t);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (i = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (let e = 0, t = p.length; e < t; e++) {
                      let t = p[e];
                      if (o.props.hasOwnProperty(t)) {
                        if ("charSet" === t) r.has(t) ? (i = !1) : r.add(t);
                        else {
                          let e = o.props[t],
                            r = n[t] || new Set();
                          ("name" !== t || !a) && r.has(e)
                            ? (i = !1)
                            : (r.add(e), (n[t] = r));
                        }
                      }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let o = e.key || t;
            if (
              n.env.__NEXT_OPTIMIZE_FONTS &&
              !r &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                s.default.cloneElement(e, t)
              );
            }
            return s.default.cloneElement(e, { key: o });
          });
      }
      let y = function (e) {
        let { children: t } = e,
          r = (0, s.useContext)(c.AmpStateContext),
          n = (0, s.useContext)(u.HeadManagerContext);
        return (0, a.jsx)(l.default, {
          reduceComponentsToState: g,
          headManager: n,
          inAmpMode: (0, d.isInAmpMode)(r),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    51564: (e, t) => {
      "use strict";
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: n,
            blurHeight: o,
            blurDataURL: i,
            objectFit: a,
          } = e,
          s = n ? 40 * n : t,
          l = o ? 40 * o : r,
          c = s && l ? "viewBox='0 0 " + s + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          c +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (c
            ? "none"
            : "contain" === a
            ? "xMidYMid"
            : "cover" === a
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          i +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    93938: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(99920)._(r(2265)),
        o = r(7103),
        i = n.default.createContext(o.imageConfigDefault);
    },
    7103: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          VALID_LOADERS: function () {
            return r;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "attachment",
          localPatterns: void 0,
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    21241: (e, t) => {
      "use strict";
      function r(e) {
        let { config: t, src: r, width: n, quality: o } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(r) +
          "&w=" +
          n +
          "&q=" +
          (o || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (r.__next_img_default = !0);
      let n = r;
    },
    60291: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(99920)._(r(2265)).default.createContext(null);
    },
    65960: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = r(2265),
        o = "undefined" == typeof window,
        i = o ? () => {} : n.useLayoutEffect,
        a = o ? () => {} : n.useEffect;
      function s(e) {
        let { headManager: t, reduceComponentsToState: r } = e;
        function s() {
          if (t && t.mountedInstances) {
            let o = n.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(r(o, e));
          }
        }
        if (o) {
          var l;
          null == t || null == (l = t.mountedInstances) || l.add(e.children),
            s();
        }
        return (
          i(() => {
            var r;
            return (
              null == t ||
                null == (r = t.mountedInstances) ||
                r.add(e.children),
              () => {
                var r;
                null == t ||
                  null == (r = t.mountedInstances) ||
                  r.delete(e.children);
              }
            );
          }),
          i(
            () => (
              t && (t._pendingUpdate = s),
              () => {
                t && (t._pendingUpdate = s);
              }
            )
          ),
          a(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    58355: function (e, t) {
      var r, n, o;
      (n = []),
        void 0 !==
          (o =
            "function" ==
            typeof (r = function e() {
              "use strict";
              var t =
                  "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : void 0 !== t
                    ? t
                    : {},
                r = !t.document && !!t.postMessage,
                n = t.IS_PAPA_WORKER || !1,
                o = {},
                i = 0,
                a = {
                  parse: function (r, n) {
                    var s,
                      l = (n = n || {}).dynamicTyping || !1;
                    if (
                      (x(l) && ((n.dynamicTypingFunction = l), (l = {})),
                      (n.dynamicTyping = l),
                      (n.transform = !!x(n.transform) && n.transform),
                      n.worker && a.WORKERS_SUPPORTED)
                    ) {
                      var h = (function () {
                        if (!a.WORKERS_SUPPORTED) return !1;
                        var r,
                          n,
                          s =
                            ((r = t.URL || t.webkitURL || null),
                            (n = e.toString()),
                            a.BLOB_URL ||
                              (a.BLOB_URL = r.createObjectURL(
                                new Blob(
                                  [
                                    "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                                    "(",
                                    n,
                                    ")();",
                                  ],
                                  { type: "text/javascript" }
                                )
                              ))),
                          l = new t.Worker(s);
                        return (l.onmessage = y), (l.id = i++), (o[l.id] = l);
                      })();
                      return (
                        (h.userStep = n.step),
                        (h.userChunk = n.chunk),
                        (h.userComplete = n.complete),
                        (h.userError = n.error),
                        (n.step = x(n.step)),
                        (n.chunk = x(n.chunk)),
                        (n.complete = x(n.complete)),
                        (n.error = x(n.error)),
                        delete n.worker,
                        void h.postMessage({
                          input: r,
                          config: n,
                          workerId: h.id,
                        })
                      );
                    }
                    var p = null;
                    return (
                      a.NODE_STREAM_INPUT,
                      "string" == typeof r
                        ? ((r =
                            65279 === (s = r).charCodeAt(0) ? s.slice(1) : s),
                          (p = n.download ? new c(n) : new d(n)))
                        : !0 === r.readable && x(r.read) && x(r.on)
                        ? (p = new f(n))
                        : ((t.File && r instanceof File) ||
                            r instanceof Object) &&
                          (p = new u(n)),
                      p.stream(r)
                    );
                  },
                  unparse: function (e, t) {
                    var r = !1,
                      n = !0,
                      o = ",",
                      i = "\r\n",
                      s = '"',
                      l = s + s,
                      c = !1,
                      u = null,
                      d = !1;
                    !(function () {
                      if ("object" == typeof t) {
                        if (
                          ("string" != typeof t.delimiter ||
                            a.BAD_DELIMITERS.filter(function (e) {
                              return -1 !== t.delimiter.indexOf(e);
                            }).length ||
                            (o = t.delimiter),
                          ("boolean" == typeof t.quotes ||
                            "function" == typeof t.quotes ||
                            Array.isArray(t.quotes)) &&
                            (r = t.quotes),
                          ("boolean" != typeof t.skipEmptyLines &&
                            "string" != typeof t.skipEmptyLines) ||
                            (c = t.skipEmptyLines),
                          "string" == typeof t.newline && (i = t.newline),
                          "string" == typeof t.quoteChar && (s = t.quoteChar),
                          "boolean" == typeof t.header && (n = t.header),
                          Array.isArray(t.columns))
                        ) {
                          if (0 === t.columns.length)
                            throw Error("Option columns is empty");
                          u = t.columns;
                        }
                        void 0 !== t.escapeChar && (l = t.escapeChar + s),
                          ("boolean" == typeof t.escapeFormulae ||
                            t.escapeFormulae instanceof RegExp) &&
                            (d =
                              t.escapeFormulae instanceof RegExp
                                ? t.escapeFormulae
                                : /^[=+\-@\t\r].*$/);
                      }
                    })();
                    var f = RegExp(p(s), "g");
                    if (
                      ("string" == typeof e && (e = JSON.parse(e)),
                      Array.isArray(e))
                    ) {
                      if (!e.length || Array.isArray(e[0]))
                        return h(null, e, c);
                      if ("object" == typeof e[0])
                        return h(u || Object.keys(e[0]), e, c);
                    } else if ("object" == typeof e)
                      return (
                        "string" == typeof e.data &&
                          (e.data = JSON.parse(e.data)),
                        Array.isArray(e.data) &&
                          (e.fields ||
                            (e.fields = (e.meta && e.meta.fields) || u),
                          e.fields ||
                            (e.fields = Array.isArray(e.data[0])
                              ? e.fields
                              : "object" == typeof e.data[0]
                              ? Object.keys(e.data[0])
                              : []),
                          Array.isArray(e.data[0]) ||
                            "object" == typeof e.data[0] ||
                            (e.data = [e.data])),
                        h(e.fields || [], e.data || [], c)
                      );
                    throw Error("Unable to serialize unrecognized input");
                    function h(e, t, r) {
                      var a = "";
                      "string" == typeof e && (e = JSON.parse(e)),
                        "string" == typeof t && (t = JSON.parse(t));
                      var s = Array.isArray(e) && 0 < e.length,
                        l = !Array.isArray(t[0]);
                      if (s && n) {
                        for (var c = 0; c < e.length; c++)
                          0 < c && (a += o), (a += g(e[c], c));
                        0 < t.length && (a += i);
                      }
                      for (var u = 0; u < t.length; u++) {
                        var d = s ? e.length : t[u].length,
                          f = !1,
                          h = s
                            ? 0 === Object.keys(t[u]).length
                            : 0 === t[u].length;
                        if (
                          (r &&
                            !s &&
                            (f =
                              "greedy" === r
                                ? "" === t[u].join("").trim()
                                : 1 === t[u].length && 0 === t[u][0].length),
                          "greedy" === r && s)
                        ) {
                          for (var p = [], y = 0; y < d; y++) {
                            var m = l ? e[y] : y;
                            p.push(t[u][m]);
                          }
                          f = "" === p.join("").trim();
                        }
                        if (!f) {
                          for (var b = 0; b < d; b++) {
                            0 < b && !h && (a += o);
                            var v = s && l ? e[b] : b;
                            a += g(t[u][v], b);
                          }
                          u < t.length - 1 && (!r || (0 < d && !h)) && (a += i);
                        }
                      }
                      return a;
                    }
                    function g(e, t) {
                      if (null == e) return "";
                      if (e.constructor === Date)
                        return JSON.stringify(e).slice(1, 25);
                      var n = !1;
                      d &&
                        "string" == typeof e &&
                        d.test(e) &&
                        ((e = "'" + e), (n = !0));
                      var i = e.toString().replace(f, l);
                      return (n =
                        n ||
                        !0 === r ||
                        ("function" == typeof r && r(e, t)) ||
                        (Array.isArray(r) && r[t]) ||
                        (function (e, t) {
                          for (var r = 0; r < t.length; r++)
                            if (-1 < e.indexOf(t[r])) return !0;
                          return !1;
                        })(i, a.BAD_DELIMITERS) ||
                        -1 < i.indexOf(o) ||
                        " " === i.charAt(0) ||
                        " " === i.charAt(i.length - 1))
                        ? s + i + s
                        : i;
                    }
                  },
                };
              if (
                ((a.RECORD_SEP = "\x1e"),
                (a.UNIT_SEP = "\x1f"),
                (a.BYTE_ORDER_MARK = "\uFEFF"),
                (a.BAD_DELIMITERS = ["\r", "\n", '"', a.BYTE_ORDER_MARK]),
                (a.WORKERS_SUPPORTED = !r && !!t.Worker),
                (a.NODE_STREAM_INPUT = 1),
                (a.LocalChunkSize = 0xa00000),
                (a.RemoteChunkSize = 5242880),
                (a.DefaultDelimiter = ","),
                (a.Parser = g),
                (a.ParserHandle = h),
                (a.NetworkStreamer = c),
                (a.FileStreamer = u),
                (a.StringStreamer = d),
                (a.ReadableStreamStreamer = f),
                t.jQuery)
              ) {
                var s = t.jQuery;
                s.fn.parse = function (e) {
                  var r = e.config || {},
                    n = [];
                  return (
                    this.each(function (e) {
                      if (
                        !(
                          "INPUT" === s(this).prop("tagName").toUpperCase() &&
                          "file" === s(this).attr("type").toLowerCase() &&
                          t.FileReader
                        ) ||
                        !this.files ||
                        0 === this.files.length
                      )
                        return !0;
                      for (var o = 0; o < this.files.length; o++)
                        n.push({
                          file: this.files[o],
                          inputElem: this,
                          instanceConfig: s.extend({}, r),
                        });
                    }),
                    o(),
                    this
                  );
                  function o() {
                    if (0 !== n.length) {
                      var t,
                        r,
                        o,
                        l,
                        c = n[0];
                      if (x(e.before)) {
                        var u = e.before(c.file, c.inputElem);
                        if ("object" == typeof u) {
                          if ("abort" === u.action)
                            return (
                              (t = "AbortError"),
                              (r = c.file),
                              (o = c.inputElem),
                              (l = u.reason),
                              void (x(e.error) && e.error({ name: t }, r, o, l))
                            );
                          if ("skip" === u.action) return void i();
                          "object" == typeof u.config &&
                            (c.instanceConfig = s.extend(
                              c.instanceConfig,
                              u.config
                            ));
                        } else if ("skip" === u) return void i();
                      }
                      var d = c.instanceConfig.complete;
                      (c.instanceConfig.complete = function (e) {
                        x(d) && d(e, c.file, c.inputElem), i();
                      }),
                        a.parse(c.file, c.instanceConfig);
                    } else x(e.complete) && e.complete();
                  }
                  function i() {
                    n.splice(0, 1), o();
                  }
                };
              }
              function l(e) {
                (this._handle = null),
                  (this._finished = !1),
                  (this._completed = !1),
                  (this._halted = !1),
                  (this._input = null),
                  (this._baseIndex = 0),
                  (this._partialLine = ""),
                  (this._rowCount = 0),
                  (this._start = 0),
                  (this._nextChunk = null),
                  (this.isFirstChunk = !0),
                  (this._completeResults = { data: [], errors: [], meta: {} }),
                  function (e) {
                    var t = v(e);
                    (t.chunkSize = parseInt(t.chunkSize)),
                      e.step || e.chunk || (t.chunkSize = null),
                      (this._handle = new h(t)),
                      ((this._handle.streamer = this)._config = t);
                  }.call(this, e),
                  (this.parseChunk = function (e, r) {
                    if (this.isFirstChunk && x(this._config.beforeFirstChunk)) {
                      var o = this._config.beforeFirstChunk(e);
                      void 0 !== o && (e = o);
                    }
                    (this.isFirstChunk = !1), (this._halted = !1);
                    var i = this._partialLine + e;
                    this._partialLine = "";
                    var s = this._handle.parse(
                      i,
                      this._baseIndex,
                      !this._finished
                    );
                    if (!this._handle.paused() && !this._handle.aborted()) {
                      var l = s.meta.cursor;
                      this._finished ||
                        ((this._partialLine = i.substring(l - this._baseIndex)),
                        (this._baseIndex = l)),
                        s && s.data && (this._rowCount += s.data.length);
                      var c =
                        this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview);
                      if (n)
                        t.postMessage({
                          results: s,
                          workerId: a.WORKER_ID,
                          finished: c,
                        });
                      else if (x(this._config.chunk) && !r) {
                        if (
                          (this._config.chunk(s, this._handle),
                          this._handle.paused() || this._handle.aborted())
                        )
                          return void (this._halted = !0);
                        (s = void 0), (this._completeResults = void 0);
                      }
                      return (
                        this._config.step ||
                          this._config.chunk ||
                          ((this._completeResults.data =
                            this._completeResults.data.concat(s.data)),
                          (this._completeResults.errors =
                            this._completeResults.errors.concat(s.errors)),
                          (this._completeResults.meta = s.meta)),
                        this._completed ||
                          !c ||
                          !x(this._config.complete) ||
                          (s && s.meta.aborted) ||
                          (this._config.complete(
                            this._completeResults,
                            this._input
                          ),
                          (this._completed = !0)),
                        c || (s && s.meta.paused) || this._nextChunk(),
                        s
                      );
                    }
                    this._halted = !0;
                  }),
                  (this._sendError = function (e) {
                    x(this._config.error)
                      ? this._config.error(e)
                      : n &&
                        this._config.error &&
                        t.postMessage({
                          workerId: a.WORKER_ID,
                          error: e,
                          finished: !1,
                        });
                  });
              }
              function c(e) {
                var t;
                (e = e || {}).chunkSize || (e.chunkSize = a.RemoteChunkSize),
                  l.call(this, e),
                  (this._nextChunk = r
                    ? function () {
                        this._readChunk(), this._chunkLoaded();
                      }
                    : function () {
                        this._readChunk();
                      }),
                  (this.stream = function (e) {
                    (this._input = e), this._nextChunk();
                  }),
                  (this._readChunk = function () {
                    if (this._finished) this._chunkLoaded();
                    else {
                      if (
                        ((t = new XMLHttpRequest()),
                        this._config.withCredentials &&
                          (t.withCredentials = this._config.withCredentials),
                        r ||
                          ((t.onload = w(this._chunkLoaded, this)),
                          (t.onerror = w(this._chunkError, this))),
                        t.open(
                          this._config.downloadRequestBody ? "POST" : "GET",
                          this._input,
                          !r
                        ),
                        this._config.downloadRequestHeaders)
                      ) {
                        var e = this._config.downloadRequestHeaders;
                        for (var n in e) t.setRequestHeader(n, e[n]);
                      }
                      if (this._config.chunkSize) {
                        var o = this._start + this._config.chunkSize - 1;
                        t.setRequestHeader(
                          "Range",
                          "bytes=" + this._start + "-" + o
                        );
                      }
                      try {
                        t.send(this._config.downloadRequestBody);
                      } catch (e) {
                        this._chunkError(e.message);
                      }
                      r && 0 === t.status && this._chunkError();
                    }
                  }),
                  (this._chunkLoaded = function () {
                    var e;
                    4 === t.readyState &&
                      (t.status < 200 || 400 <= t.status
                        ? this._chunkError()
                        : ((this._start += this._config.chunkSize
                            ? this._config.chunkSize
                            : t.responseText.length),
                          (this._finished =
                            !this._config.chunkSize ||
                            this._start >=
                              (null ===
                              (e = t.getResponseHeader("Content-Range"))
                                ? -1
                                : parseInt(
                                    e.substring(e.lastIndexOf("/") + 1)
                                  ))),
                          this.parseChunk(t.responseText)));
                  }),
                  (this._chunkError = function (e) {
                    var r = t.statusText || e;
                    this._sendError(Error(r));
                  });
              }
              function u(e) {
                (e = e || {}).chunkSize || (e.chunkSize = a.LocalChunkSize),
                  l.call(this, e);
                var t,
                  r,
                  n = "undefined" != typeof FileReader;
                (this.stream = function (e) {
                  (this._input = e),
                    (r = e.slice || e.webkitSlice || e.mozSlice),
                    n
                      ? (((t = new FileReader()).onload = w(
                          this._chunkLoaded,
                          this
                        )),
                        (t.onerror = w(this._chunkError, this)))
                      : (t = new FileReaderSync()),
                    this._nextChunk();
                }),
                  (this._nextChunk = function () {
                    this._finished ||
                      (this._config.preview &&
                        !(this._rowCount < this._config.preview)) ||
                      this._readChunk();
                  }),
                  (this._readChunk = function () {
                    var e = this._input;
                    if (this._config.chunkSize) {
                      var o = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size
                      );
                      e = r.call(e, this._start, o);
                    }
                    var i = t.readAsText(e, this._config.encoding);
                    n || this._chunkLoaded({ target: { result: i } });
                  }),
                  (this._chunkLoaded = function (e) {
                    (this._start += this._config.chunkSize),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >= this._input.size),
                      this.parseChunk(e.target.result);
                  }),
                  (this._chunkError = function () {
                    this._sendError(t.error);
                  });
              }
              function d(e) {
                var t;
                l.call(this, (e = e || {})),
                  (this.stream = function (e) {
                    return (t = e), this._nextChunk();
                  }),
                  (this._nextChunk = function () {
                    if (!this._finished) {
                      var e,
                        r = this._config.chunkSize;
                      return (
                        r
                          ? ((e = t.substring(0, r)), (t = t.substring(r)))
                          : ((e = t), (t = "")),
                        (this._finished = !t),
                        this.parseChunk(e)
                      );
                    }
                  });
              }
              function f(e) {
                l.call(this, (e = e || {}));
                var t = [],
                  r = !0,
                  n = !1;
                (this.pause = function () {
                  l.prototype.pause.apply(this, arguments), this._input.pause();
                }),
                  (this.resume = function () {
                    l.prototype.resume.apply(this, arguments),
                      this._input.resume();
                  }),
                  (this.stream = function (e) {
                    (this._input = e),
                      this._input.on("data", this._streamData),
                      this._input.on("end", this._streamEnd),
                      this._input.on("error", this._streamError);
                  }),
                  (this._checkIsFinished = function () {
                    n && 1 === t.length && (this._finished = !0);
                  }),
                  (this._nextChunk = function () {
                    this._checkIsFinished(),
                      t.length ? this.parseChunk(t.shift()) : (r = !0);
                  }),
                  (this._streamData = w(function (e) {
                    try {
                      t.push(
                        "string" == typeof e
                          ? e
                          : e.toString(this._config.encoding)
                      ),
                        r &&
                          ((r = !1),
                          this._checkIsFinished(),
                          this.parseChunk(t.shift()));
                    } catch (e) {
                      this._streamError(e);
                    }
                  }, this)),
                  (this._streamError = w(function (e) {
                    this._streamCleanUp(), this._sendError(e);
                  }, this)),
                  (this._streamEnd = w(function () {
                    this._streamCleanUp(), (n = !0), this._streamData("");
                  }, this)),
                  (this._streamCleanUp = w(function () {
                    this._input.removeListener("data", this._streamData),
                      this._input.removeListener("end", this._streamEnd),
                      this._input.removeListener("error", this._streamError);
                  }, this));
              }
              function h(e) {
                var t,
                  r,
                  n,
                  o = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
                  i =
                    /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
                  s = this,
                  l = 0,
                  c = 0,
                  u = !1,
                  d = !1,
                  f = [],
                  h = { data: [], errors: [], meta: {} };
                if (x(e.step)) {
                  var y = e.step;
                  e.step = function (t) {
                    if (((h = t), w())) b();
                    else {
                      if ((b(), 0 === h.data.length)) return;
                      (l += t.data.length),
                        e.preview && l > e.preview
                          ? r.abort()
                          : ((h.data = h.data[0]), y(h, s));
                    }
                  };
                }
                function m(t) {
                  return "greedy" === e.skipEmptyLines
                    ? "" === t.join("").trim()
                    : 1 === t.length && 0 === t[0].length;
                }
                function b() {
                  return (
                    h &&
                      n &&
                      (O(
                        "Delimiter",
                        "UndetectableDelimiter",
                        "Unable to auto-detect delimiting character; defaulted to '" +
                          a.DefaultDelimiter +
                          "'"
                      ),
                      (n = !1)),
                    e.skipEmptyLines &&
                      (h.data = h.data.filter(function (e) {
                        return !m(e);
                      })),
                    w() &&
                      (function () {
                        if (h) {
                          if (Array.isArray(h.data[0])) {
                            for (var t = 0; w() && t < h.data.length; t++)
                              h.data[t].forEach(r);
                            h.data.splice(0, 1);
                          } else h.data.forEach(r);
                        }
                        function r(t, r) {
                          x(e.transformHeader) && (t = e.transformHeader(t, r)),
                            f.push(t);
                        }
                      })(),
                    (function () {
                      if (!h || (!e.header && !e.dynamicTyping && !e.transform))
                        return h;
                      function t(t, r) {
                        var n,
                          a = e.header ? {} : [];
                        for (n = 0; n < t.length; n++) {
                          var s,
                            l,
                            u = n,
                            d = t[n];
                          e.header &&
                            (u = n >= f.length ? "__parsed_extra" : f[n]),
                            e.transform && (d = e.transform(d, u)),
                            (s = u),
                            (l = d),
                            e.dynamicTypingFunction &&
                              void 0 === e.dynamicTyping[s] &&
                              (e.dynamicTyping[s] = e.dynamicTypingFunction(s)),
                            (d =
                              !0 === (e.dynamicTyping[s] || e.dynamicTyping)
                                ? "true" === l ||
                                  "TRUE" === l ||
                                  ("false" !== l &&
                                    "FALSE" !== l &&
                                    (!(function (e) {
                                      if (o.test(e)) {
                                        var t = parseFloat(e);
                                        if (
                                          -0x20000000000000 < t &&
                                          t < 0x20000000000000
                                        )
                                          return !0;
                                      }
                                      return !1;
                                    })(l)
                                      ? i.test(l)
                                        ? new Date(l)
                                        : "" === l
                                        ? null
                                        : l
                                      : parseFloat(l)))
                                : l),
                            "__parsed_extra" === u
                              ? ((a[u] = a[u] || []), a[u].push(d))
                              : (a[u] = d);
                        }
                        return (
                          e.header &&
                            (n > f.length
                              ? O(
                                  "FieldMismatch",
                                  "TooManyFields",
                                  "Too many fields: expected " +
                                    f.length +
                                    " fields but parsed " +
                                    n,
                                  c + r
                                )
                              : n < f.length &&
                                O(
                                  "FieldMismatch",
                                  "TooFewFields",
                                  "Too few fields: expected " +
                                    f.length +
                                    " fields but parsed " +
                                    n,
                                  c + r
                                )),
                          a
                        );
                      }
                      var r = 1;
                      return (
                        !h.data.length || Array.isArray(h.data[0])
                          ? ((h.data = h.data.map(t)), (r = h.data.length))
                          : (h.data = t(h.data, 0)),
                        e.header && h.meta && (h.meta.fields = f),
                        (c += r),
                        h
                      );
                    })()
                  );
                }
                function w() {
                  return e.header && 0 === f.length;
                }
                function O(e, t, r, n) {
                  var o = { type: e, code: t, message: r };
                  void 0 !== n && (o.row = n), h.errors.push(o);
                }
                (this.parse = function (o, i, s) {
                  var l = e.quoteChar || '"';
                  if (
                    (e.newline ||
                      (e.newline = (function (e, t) {
                        e = e.substring(0, 1048576);
                        var r = RegExp(p(t) + "([^]*?)" + p(t), "gm"),
                          n = (e = e.replace(r, "")).split("\r"),
                          o = e.split("\n"),
                          i = 1 < o.length && o[0].length < n[0].length;
                        if (1 === n.length || i) return "\n";
                        for (var a = 0, s = 0; s < n.length; s++)
                          "\n" === n[s][0] && a++;
                        return a >= n.length / 2 ? "\r\n" : "\r";
                      })(o, l)),
                    (n = !1),
                    e.delimiter)
                  )
                    x(e.delimiter) &&
                      ((e.delimiter = e.delimiter(o)),
                      (h.meta.delimiter = e.delimiter));
                  else {
                    var c = (function (t, r, n, o, i) {
                      var s, l, c, u;
                      i = i || [",", "	", "|", ";", a.RECORD_SEP, a.UNIT_SEP];
                      for (var d = 0; d < i.length; d++) {
                        var f = i[d],
                          h = 0,
                          p = 0,
                          y = 0;
                        c = void 0;
                        for (
                          var b = new g({
                              comments: o,
                              delimiter: f,
                              newline: r,
                              preview: 10,
                            }).parse(t),
                            v = 0;
                          v < b.data.length;
                          v++
                        )
                          if (n && m(b.data[v])) y++;
                          else {
                            var w = b.data[v].length;
                            (p += w),
                              void 0 !== c
                                ? 0 < w && ((h += Math.abs(w - c)), (c = w))
                                : (c = w);
                          }
                        0 < b.data.length && (p /= b.data.length - y),
                          (void 0 === l || h <= l) &&
                            (void 0 === u || u < p) &&
                            1.99 < p &&
                            ((l = h), (s = f), (u = p));
                      }
                      return {
                        successful: !!(e.delimiter = s),
                        bestDelimiter: s,
                      };
                    })(
                      o,
                      e.newline,
                      e.skipEmptyLines,
                      e.comments,
                      e.delimitersToGuess
                    );
                    c.successful
                      ? (e.delimiter = c.bestDelimiter)
                      : ((n = !0), (e.delimiter = a.DefaultDelimiter)),
                      (h.meta.delimiter = e.delimiter);
                  }
                  var d = v(e);
                  return (
                    e.preview && e.header && d.preview++,
                    (t = o),
                    (h = (r = new g(d)).parse(t, i, s)),
                    b(),
                    u ? { meta: { paused: !0 } } : h || { meta: { paused: !1 } }
                  );
                }),
                  (this.paused = function () {
                    return u;
                  }),
                  (this.pause = function () {
                    (u = !0),
                      r.abort(),
                      (t = x(e.chunk) ? "" : t.substring(r.getCharIndex()));
                  }),
                  (this.resume = function () {
                    s.streamer._halted
                      ? ((u = !1), s.streamer.parseChunk(t, !0))
                      : setTimeout(s.resume, 3);
                  }),
                  (this.aborted = function () {
                    return d;
                  }),
                  (this.abort = function () {
                    (d = !0),
                      r.abort(),
                      (h.meta.aborted = !0),
                      x(e.complete) && e.complete(h),
                      (t = "");
                  });
              }
              function p(e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
              }
              function g(e) {
                var t,
                  r = (e = e || {}).delimiter,
                  n = e.newline,
                  o = e.comments,
                  i = e.step,
                  s = e.preview,
                  l = e.fastMode,
                  c = (t =
                    void 0 === e.quoteChar || null === e.quoteChar
                      ? '"'
                      : e.quoteChar);
                if (
                  (void 0 !== e.escapeChar && (c = e.escapeChar),
                  ("string" != typeof r || -1 < a.BAD_DELIMITERS.indexOf(r)) &&
                    (r = ","),
                  o === r)
                )
                  throw Error("Comment character same as delimiter");
                !0 === o
                  ? (o = "#")
                  : ("string" != typeof o ||
                      -1 < a.BAD_DELIMITERS.indexOf(o)) &&
                    (o = !1),
                  "\n" !== n && "\r" !== n && "\r\n" !== n && (n = "\n");
                var u = 0,
                  d = !1;
                (this.parse = function (a, f, h) {
                  if ("string" != typeof a)
                    throw Error("Input must be a string");
                  var g = a.length,
                    y = r.length,
                    m = n.length,
                    b = o.length,
                    v = x(i),
                    w = [],
                    O = [],
                    _ = [],
                    k = (u = 0);
                  if (!a) return V();
                  if (e.header && !f) {
                    var S = a.split(n)[0].split(r),
                      P = [],
                      E = {},
                      T = !1;
                    for (var C in S) {
                      var M = S[C];
                      x(e.transformHeader) && (M = e.transformHeader(M, C));
                      var R = M,
                        j = E[M] || 0;
                      for (
                        0 < j && ((T = !0), (R = M + "_" + j)), E[M] = j + 1;
                        P.includes(R);

                      )
                        R = R + "_" + j;
                      P.push(R);
                    }
                    if (T) {
                      var A = a.split(n);
                      (A[0] = P.join(r)), (a = A.join(n));
                    }
                  }
                  if (l || (!1 !== l && -1 === a.indexOf(t))) {
                    for (var I = a.split(n), D = 0; D < I.length; D++) {
                      if (((_ = I[D]), (u += _.length), D !== I.length - 1))
                        u += n.length;
                      else if (h) break;
                      if (!o || _.substring(0, b) !== o) {
                        if (v) {
                          if (((w = []), W(_.split(r)), X(), d)) return V();
                        } else W(_.split(r));
                        if (s && s <= D) return (w = w.slice(0, s)), V(!0);
                      }
                    }
                    return V();
                  }
                  for (
                    var L = a.indexOf(r, u),
                      N = a.indexOf(n, u),
                      z = RegExp(p(c) + p(t), "g"),
                      B = a.indexOf(t, u);
                    ;

                  )
                    if (a[u] !== t) {
                      if (o && 0 === _.length && a.substring(u, u + b) === o) {
                        if (-1 === N) return V();
                        (u = N + m),
                          (N = a.indexOf(n, u)),
                          (L = a.indexOf(r, u));
                      } else if (-1 !== L && (L < N || -1 === N))
                        _.push(a.substring(u, L)),
                          (u = L + y),
                          (L = a.indexOf(r, u));
                      else {
                        if (-1 === N) break;
                        if (
                          (_.push(a.substring(u, N)), Y(N + m), v && (X(), d))
                        )
                          return V();
                        if (s && w.length >= s) return V(!0);
                      }
                    } else
                      for (B = u, u++; ; ) {
                        if (-1 === (B = a.indexOf(t, B + 1)))
                          return (
                            h ||
                              O.push({
                                type: "Quotes",
                                code: "MissingQuotes",
                                message: "Quoted field unterminated",
                                row: w.length,
                                index: u,
                              }),
                            q()
                          );
                        if (B === g - 1)
                          return q(a.substring(u, B).replace(z, t));
                        if (t !== c || a[B + 1] !== c) {
                          if (t === c || 0 === B || a[B - 1] !== c) {
                            -1 !== L && L < B + 1 && (L = a.indexOf(r, B + 1)),
                              -1 !== N &&
                                N < B + 1 &&
                                (N = a.indexOf(n, B + 1));
                            var F = H(-1 === N ? L : Math.min(L, N));
                            if (a.substr(B + 1 + F, y) === r) {
                              _.push(a.substring(u, B).replace(z, t)),
                                a[(u = B + 1 + F + y)] !== t &&
                                  (B = a.indexOf(t, u)),
                                (L = a.indexOf(r, u)),
                                (N = a.indexOf(n, u));
                              break;
                            }
                            var U = H(N);
                            if (a.substring(B + 1 + U, B + 1 + U + m) === n) {
                              if (
                                (_.push(a.substring(u, B).replace(z, t)),
                                Y(B + 1 + U + m),
                                (L = a.indexOf(r, u)),
                                (B = a.indexOf(t, u)),
                                v && (X(), d))
                              )
                                return V();
                              if (s && w.length >= s) return V(!0);
                              break;
                            }
                            O.push({
                              type: "Quotes",
                              code: "InvalidQuotes",
                              message:
                                "Trailing quote on quoted field is malformed",
                              row: w.length,
                              index: u,
                            }),
                              B++;
                          }
                        } else B++;
                      }
                  return q();
                  function W(e) {
                    w.push(e), (k = u);
                  }
                  function H(e) {
                    var t = 0;
                    if (-1 !== e) {
                      var r = a.substring(B + 1, e);
                      r && "" === r.trim() && (t = r.length);
                    }
                    return t;
                  }
                  function q(e) {
                    return (
                      h ||
                        (void 0 === e && (e = a.substring(u)),
                        _.push(e),
                        (u = g),
                        W(_),
                        v && X()),
                      V()
                    );
                  }
                  function Y(e) {
                    (u = e), W(_), (_ = []), (N = a.indexOf(n, u));
                  }
                  function V(e) {
                    return {
                      data: w,
                      errors: O,
                      meta: {
                        delimiter: r,
                        linebreak: n,
                        aborted: d,
                        truncated: !!e,
                        cursor: k + (f || 0),
                      },
                    };
                  }
                  function X() {
                    i(V()), (w = []), (O = []);
                  }
                }),
                  (this.abort = function () {
                    d = !0;
                  }),
                  (this.getCharIndex = function () {
                    return u;
                  });
              }
              function y(e) {
                var t = e.data,
                  r = o[t.workerId],
                  n = !1;
                if (t.error) r.userError(t.error, t.file);
                else if (t.results && t.results.data) {
                  var i = {
                    abort: function () {
                      (n = !0),
                        m(t.workerId, {
                          data: [],
                          errors: [],
                          meta: { aborted: !0 },
                        });
                    },
                    pause: b,
                    resume: b,
                  };
                  if (x(r.userStep)) {
                    for (
                      var a = 0;
                      a < t.results.data.length &&
                      (r.userStep(
                        {
                          data: t.results.data[a],
                          errors: t.results.errors,
                          meta: t.results.meta,
                        },
                        i
                      ),
                      !n);
                      a++
                    );
                    delete t.results;
                  } else
                    x(r.userChunk) &&
                      (r.userChunk(t.results, i, t.file), delete t.results);
                }
                t.finished && !n && m(t.workerId, t.results);
              }
              function m(e, t) {
                var r = o[e];
                x(r.userComplete) && r.userComplete(t),
                  r.terminate(),
                  delete o[e];
              }
              function b() {
                throw Error("Not implemented.");
              }
              function v(e) {
                if ("object" != typeof e || null === e) return e;
                var t = Array.isArray(e) ? [] : {};
                for (var r in e) t[r] = v(e[r]);
                return t;
              }
              function w(e, t) {
                return function () {
                  e.apply(t, arguments);
                };
              }
              function x(e) {
                return "function" == typeof e;
              }
              return (
                n &&
                  (t.onmessage = function (e) {
                    var r = e.data;
                    if (
                      (void 0 === a.WORKER_ID &&
                        r &&
                        (a.WORKER_ID = r.workerId),
                      "string" == typeof r.input)
                    )
                      t.postMessage({
                        workerId: a.WORKER_ID,
                        results: a.parse(r.input, r.config),
                        finished: !0,
                      });
                    else if (
                      (t.File && r.input instanceof File) ||
                      r.input instanceof Object
                    ) {
                      var n = a.parse(r.input, r.config);
                      n &&
                        t.postMessage({
                          workerId: a.WORKER_ID,
                          results: n,
                          finished: !0,
                        });
                    }
                  }),
                ((c.prototype = Object.create(l.prototype)).constructor = c),
                ((u.prototype = Object.create(l.prototype)).constructor = u),
                ((d.prototype = Object.create(d.prototype)).constructor = d),
                ((f.prototype = Object.create(l.prototype)).constructor = f),
                a
              );
            })
              ? r.apply(t, n)
              : r) && (e.exports = o);
    },
    99949: (e, t, r) => {
      "use strict";
      var n = r(88877);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, r, o, i, a) {
            if (a !== n) {
              var s = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((s.name = "Invariant Violation"), s);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var r = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return (r.PropTypes = r), r;
        });
    },
    41448: (e, t, r) => {
      e.exports = r(99949)();
    },
    88877: (e) => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    37586: (e, t, r) => {
      "use strict";
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var o = s(r(2265)),
        i = s(r(80042)),
        a = ["text", "onCopy", "options", "children"];
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                h(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function h(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var p = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && u(e, t);
        })(l, e);
        var t,
          r,
          s =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r = f(l);
              return (
                (e = t
                  ? Reflect.construct(r, arguments, f(this).constructor)
                  : r.apply(this, arguments)),
                (function (e, t) {
                  if (t && ("object" === n(t) || "function" == typeof t))
                    return t;
                  if (void 0 !== t)
                    throw TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return d(e);
                })(this, e)
              );
            });
        function l() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, l);
          for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            h(
              d((e = s.call.apply(s, [this].concat(r)))),
              "onClick",
              function (t) {
                var r = e.props,
                  n = r.text,
                  a = r.onCopy,
                  s = r.children,
                  l = r.options,
                  c = o.default.Children.only(s),
                  u = (0, i.default)(n, l);
                a && a(n, u),
                  c &&
                    c.props &&
                    "function" == typeof c.props.onClick &&
                    c.props.onClick(t);
              }
            ),
            e
          );
        }
        return (
          (r = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  r = (function (e, t) {
                    if (null == e) return {};
                    var r,
                      n,
                      o = (function (e, t) {
                        if (null == e) return {};
                        var r,
                          n,
                          o = {},
                          i = Object.keys(e);
                        for (n = 0; n < i.length; n++)
                          (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o;
                      })(e, t);
                    if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      for (n = 0; n < i.length; n++)
                        (r = i[n]),
                          !(t.indexOf(r) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(e, r) &&
                            (o[r] = e[r]);
                    }
                    return o;
                  })(e, a),
                  n = o.default.Children.only(t);
                return o.default.cloneElement(
                  n,
                  c(c({}, r), {}, { onClick: this.onClick })
                );
              },
            },
          ]),
          (function (e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          })(l.prototype, r),
          Object.defineProperty(l, "prototype", { writable: !1 }),
          l
        );
      })(o.default.PureComponent);
      (t.CopyToClipboard = p),
        h(p, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    45789: (e, t, r) => {
      "use strict";
      var n = r(37586).CopyToClipboard;
      (n.CopyToClipboard = n), (e.exports = n);
    },
    20450: (e) => {
      var t = "undefined" != typeof Element,
        r = "function" == typeof Map,
        n = "function" == typeof Set,
        o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
      e.exports = function (e, i) {
        try {
          return (function e(i, a) {
            if (i === a) return !0;
            if (i && a && "object" == typeof i && "object" == typeof a) {
              var s, l, c, u;
              if (i.constructor !== a.constructor) return !1;
              if (Array.isArray(i)) {
                if ((s = i.length) != a.length) return !1;
                for (l = s; 0 != l--; ) if (!e(i[l], a[l])) return !1;
                return !0;
              }
              if (r && i instanceof Map && a instanceof Map) {
                if (i.size !== a.size) return !1;
                for (u = i.entries(); !(l = u.next()).done; )
                  if (!a.has(l.value[0])) return !1;
                for (u = i.entries(); !(l = u.next()).done; )
                  if (!e(l.value[1], a.get(l.value[0]))) return !1;
                return !0;
              }
              if (n && i instanceof Set && a instanceof Set) {
                if (i.size !== a.size) return !1;
                for (u = i.entries(); !(l = u.next()).done; )
                  if (!a.has(l.value[0])) return !1;
                return !0;
              }
              if (o && ArrayBuffer.isView(i) && ArrayBuffer.isView(a)) {
                if ((s = i.length) != a.length) return !1;
                for (l = s; 0 != l--; ) if (i[l] !== a[l]) return !1;
                return !0;
              }
              if (i.constructor === RegExp)
                return i.source === a.source && i.flags === a.flags;
              if (
                i.valueOf !== Object.prototype.valueOf &&
                "function" == typeof i.valueOf &&
                "function" == typeof a.valueOf
              )
                return i.valueOf() === a.valueOf();
              if (
                i.toString !== Object.prototype.toString &&
                "function" == typeof i.toString &&
                "function" == typeof a.toString
              )
                return i.toString() === a.toString();
              if ((s = (c = Object.keys(i)).length) !== Object.keys(a).length)
                return !1;
              for (l = s; 0 != l--; )
                if (!Object.prototype.hasOwnProperty.call(a, c[l])) return !1;
              if (t && i instanceof Element) return !1;
              for (l = s; 0 != l--; )
                if (
                  (("_owner" !== c[l] && "__v" !== c[l] && "__o" !== c[l]) ||
                    !i.$$typeof) &&
                  !e(i[c[l]], a[c[l]])
                )
                  return !1;
              return !0;
            }
            return i != i && a != a;
          })(e, i);
        } catch (e) {
          if ((e.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw e;
        }
      };
    },
    68348: (e, t, r) => {
      var n = Object.create,
        o = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        a = Object.getOwnPropertyNames,
        s = Object.getPrototypeOf,
        l = Object.prototype.hasOwnProperty,
        c = (e, t, r) =>
          t in e
            ? o(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        u = (e, t, r, n) => {
          if ((t && "object" == typeof t) || "function" == typeof t)
            for (let s of a(t))
              l.call(e, s) ||
                s === r ||
                o(e, s, {
                  get: () => t[s],
                  enumerable: !(n = i(t, s)) || n.enumerable,
                });
          return e;
        },
        d = (e, t, r) => (
          (r = null != e ? n(s(e)) : {}),
          u(
            !t && e && e.__esModule
              ? r
              : o(r, "default", { value: e, enumerable: !0 }),
            e
          )
        ),
        f = (e, t, r) => (c(e, "symbol" != typeof t ? t + "" : t, r), r),
        h = {};
      ((e, t) => {
        for (var r in t) o(e, r, { get: t[r], enumerable: !0 });
      })(h, { default: () => b }),
        (e.exports = u(o({}, "__esModule", { value: !0 }), h));
      var p = d(r(2265)),
        g = d(r(20450)),
        y = r(44291),
        m = r(96561);
      class b extends p.Component {
        constructor() {
          super(...arguments),
            f(this, "mounted", !1),
            f(this, "isReady", !1),
            f(this, "isPlaying", !1),
            f(this, "isLoading", !0),
            f(this, "loadOnReady", null),
            f(this, "startOnPlay", !0),
            f(this, "seekOnPlay", null),
            f(this, "onDurationCalled", !1),
            f(this, "handlePlayerMount", (e) => {
              if (this.player) {
                this.progress();
                return;
              }
              (this.player = e),
                this.player.load(this.props.url),
                this.progress();
            }),
            f(this, "getInternalPlayer", (e) =>
              this.player ? this.player[e] : null
            ),
            f(this, "progress", () => {
              if (this.props.url && this.player && this.isReady) {
                let e = this.getCurrentTime() || 0,
                  t = this.getSecondsLoaded(),
                  r = this.getDuration();
                if (r) {
                  let n = { playedSeconds: e, played: e / r };
                  null !== t && ((n.loadedSeconds = t), (n.loaded = t / r)),
                    (n.playedSeconds !== this.prevPlayed ||
                      n.loadedSeconds !== this.prevLoaded) &&
                      this.props.onProgress(n),
                    (this.prevPlayed = n.playedSeconds),
                    (this.prevLoaded = n.loadedSeconds);
                }
              }
              this.progressTimeout = setTimeout(
                this.progress,
                this.props.progressFrequency || this.props.progressInterval
              );
            }),
            f(this, "handleReady", () => {
              if (!this.mounted) return;
              (this.isReady = !0), (this.isLoading = !1);
              let { onReady: e, playing: t, volume: r, muted: n } = this.props;
              e(),
                n || null === r || this.player.setVolume(r),
                this.loadOnReady
                  ? (this.player.load(this.loadOnReady, !0),
                    (this.loadOnReady = null))
                  : t && this.player.play(),
                this.handleDurationCheck();
            }),
            f(this, "handlePlay", () => {
              (this.isPlaying = !0), (this.isLoading = !1);
              let { onStart: e, onPlay: t, playbackRate: r } = this.props;
              this.startOnPlay &&
                (this.player.setPlaybackRate &&
                  1 !== r &&
                  this.player.setPlaybackRate(r),
                e(),
                (this.startOnPlay = !1)),
                t(),
                this.seekOnPlay &&
                  (this.seekTo(this.seekOnPlay), (this.seekOnPlay = null)),
                this.handleDurationCheck();
            }),
            f(this, "handlePause", (e) => {
              (this.isPlaying = !1), this.isLoading || this.props.onPause(e);
            }),
            f(this, "handleEnded", () => {
              let { activePlayer: e, loop: t, onEnded: r } = this.props;
              e.loopOnEnded && t && this.seekTo(0),
                t || ((this.isPlaying = !1), r());
            }),
            f(this, "handleError", (...e) => {
              (this.isLoading = !1), this.props.onError(...e);
            }),
            f(this, "handleDurationCheck", () => {
              clearTimeout(this.durationCheckTimeout);
              let e = this.getDuration();
              e
                ? this.onDurationCalled ||
                  (this.props.onDuration(e), (this.onDurationCalled = !0))
                : (this.durationCheckTimeout = setTimeout(
                    this.handleDurationCheck,
                    100
                  ));
            }),
            f(this, "handleLoaded", () => {
              this.isLoading = !1;
            });
        }
        componentDidMount() {
          this.mounted = !0;
        }
        componentWillUnmount() {
          clearTimeout(this.progressTimeout),
            clearTimeout(this.durationCheckTimeout),
            this.isReady &&
              this.props.stopOnUnmount &&
              (this.player.stop(),
              this.player.disablePIP && this.player.disablePIP()),
            (this.mounted = !1);
        }
        componentDidUpdate(e) {
          if (!this.player) return;
          let {
            url: t,
            playing: r,
            volume: n,
            muted: o,
            playbackRate: i,
            pip: a,
            loop: s,
            activePlayer: l,
            disableDeferredLoading: c,
          } = this.props;
          if (!(0, g.default)(e.url, t)) {
            if (
              this.isLoading &&
              !l.forceLoad &&
              !c &&
              !(0, m.isMediaStream)(t)
            ) {
              console.warn(
                `ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`
              ),
                (this.loadOnReady = t);
              return;
            }
            (this.isLoading = !0),
              (this.startOnPlay = !0),
              (this.onDurationCalled = !1),
              this.player.load(t, this.isReady);
          }
          e.playing || !r || this.isPlaying || this.player.play(),
            e.playing && !r && this.isPlaying && this.player.pause(),
            !e.pip && a && this.player.enablePIP && this.player.enablePIP(),
            e.pip && !a && this.player.disablePIP && this.player.disablePIP(),
            e.volume !== n && null !== n && this.player.setVolume(n),
            e.muted !== o &&
              (o
                ? this.player.mute()
                : (this.player.unmute(),
                  null !== n && setTimeout(() => this.player.setVolume(n)))),
            e.playbackRate !== i &&
              this.player.setPlaybackRate &&
              this.player.setPlaybackRate(i),
            e.loop !== s && this.player.setLoop && this.player.setLoop(s);
        }
        getDuration() {
          return this.isReady ? this.player.getDuration() : null;
        }
        getCurrentTime() {
          return this.isReady ? this.player.getCurrentTime() : null;
        }
        getSecondsLoaded() {
          return this.isReady ? this.player.getSecondsLoaded() : null;
        }
        seekTo(e, t, r) {
          if (!this.isReady) {
            0 !== e &&
              ((this.seekOnPlay = e),
              setTimeout(() => {
                this.seekOnPlay = null;
              }, 5e3));
            return;
          }
          if (t ? "fraction" === t : e > 0 && e < 1) {
            let t = this.player.getDuration();
            if (!t) {
              console.warn(
                "ReactPlayer: could not seek using fraction –\xa0duration not yet available"
              );
              return;
            }
            this.player.seekTo(t * e, r);
            return;
          }
          this.player.seekTo(e, r);
        }
        render() {
          let e = this.props.activePlayer;
          return e
            ? p.default.createElement(e, {
                ...this.props,
                onMount: this.handlePlayerMount,
                onReady: this.handleReady,
                onPlay: this.handlePlay,
                onPause: this.handlePause,
                onEnded: this.handleEnded,
                onLoaded: this.handleLoaded,
                onError: this.handleError,
              })
            : null;
        }
      }
      f(b, "displayName", "Player"),
        f(b, "propTypes", y.propTypes),
        f(b, "defaultProps", y.defaultProps);
    },
    10742: (e, t, r) => {
      var n = Object.create,
        o = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        a = Object.getOwnPropertyNames,
        s = Object.getPrototypeOf,
        l = Object.prototype.hasOwnProperty,
        c = (e, t, r) =>
          t in e
            ? o(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        u = (e, t, r, n) => {
          if ((t && "object" == typeof t) || "function" == typeof t)
            for (let s of a(t))
              l.call(e, s) ||
                s === r ||
                o(e, s, {
                  get: () => t[s],
                  enumerable: !(n = i(t, s)) || n.enumerable,
                });
          return e;
        },
        d = (e, t, r) => (
          (r = null != e ? n(s(e)) : {}),
          u(
            !t && e && e.__esModule
              ? r
              : o(r, "default", { value: e, enumerable: !0 }),
            e
          )
        ),
        f = (e, t, r) => (c(e, "symbol" != typeof t ? t + "" : t, r), r),
        h = {};
      ((e, t) => {
        for (var r in t) o(e, r, { get: t[r], enumerable: !0 });
      })(h, { createReactPlayer: () => E }),
        (e.exports = u(o({}, "__esModule", { value: !0 }), h));
      var p = d(r(2265)),
        g = d(r(9535)),
        y = d(r(75356)),
        m = d(r(20450)),
        b = r(44291),
        v = r(96561),
        w = d(r(68348));
      let x = (0, v.lazy)(() => r.e(664).then(r.t.bind(r, 56147, 23))),
        O =
          "undefined" != typeof window &&
          window.document &&
          "undefined" != typeof document,
        _ = void 0 !== r.g && r.g.window && r.g.window.document,
        k = Object.keys(b.propTypes),
        S = O || _ ? p.Suspense : () => null,
        P = [],
        E = (e, t) => {
          var r;
          return (
            (r = class extends p.Component {
              constructor() {
                super(...arguments),
                  f(this, "state", { showPreview: !!this.props.light }),
                  f(this, "references", {
                    wrapper: (e) => {
                      this.wrapper = e;
                    },
                    player: (e) => {
                      this.player = e;
                    },
                  }),
                  f(this, "handleClickPreview", (e) => {
                    this.setState({ showPreview: !1 }),
                      this.props.onClickPreview(e);
                  }),
                  f(this, "showPreview", () => {
                    this.setState({ showPreview: !0 });
                  }),
                  f(this, "getDuration", () =>
                    this.player ? this.player.getDuration() : null
                  ),
                  f(this, "getCurrentTime", () =>
                    this.player ? this.player.getCurrentTime() : null
                  ),
                  f(this, "getSecondsLoaded", () =>
                    this.player ? this.player.getSecondsLoaded() : null
                  ),
                  f(this, "getInternalPlayer", (e = "player") =>
                    this.player ? this.player.getInternalPlayer(e) : null
                  ),
                  f(this, "seekTo", (e, t, r) => {
                    if (!this.player) return null;
                    this.player.seekTo(e, t, r);
                  }),
                  f(this, "handleReady", () => {
                    this.props.onReady(this);
                  }),
                  f(
                    this,
                    "getActivePlayer",
                    (0, y.default)((r) => {
                      for (let t of [...P, ...e]) if (t.canPlay(r)) return t;
                      return t || null;
                    })
                  ),
                  f(
                    this,
                    "getConfig",
                    (0, y.default)((e, t) => {
                      let { config: r } = this.props;
                      return g.default.all([
                        b.defaultProps.config,
                        b.defaultProps.config[t] || {},
                        r,
                        r[t] || {},
                      ]);
                    })
                  ),
                  f(
                    this,
                    "getAttributes",
                    (0, y.default)((e) => (0, v.omit)(this.props, k))
                  ),
                  f(this, "renderActivePlayer", (e) => {
                    if (!e) return null;
                    let t = this.getActivePlayer(e);
                    if (!t) return null;
                    let r = this.getConfig(e, t.key);
                    return p.default.createElement(w.default, {
                      ...this.props,
                      key: t.key,
                      ref: this.references.player,
                      config: r,
                      activePlayer: t.lazyPlayer || t,
                      onReady: this.handleReady,
                    });
                  });
              }
              shouldComponentUpdate(e, t) {
                return (
                  !(0, m.default)(this.props, e) ||
                  !(0, m.default)(this.state, t)
                );
              }
              componentDidUpdate(e) {
                let { light: t } = this.props;
                !e.light && t && this.setState({ showPreview: !0 }),
                  e.light && !t && this.setState({ showPreview: !1 });
              }
              renderPreview(e) {
                if (!e) return null;
                let {
                  light: t,
                  playIcon: r,
                  previewTabIndex: n,
                  oEmbedUrl: o,
                  previewAriaLabel: i,
                } = this.props;
                return p.default.createElement(x, {
                  url: e,
                  light: t,
                  playIcon: r,
                  previewTabIndex: n,
                  previewAriaLabel: i,
                  oEmbedUrl: o,
                  onClick: this.handleClickPreview,
                });
              }
              render() {
                let {
                    url: e,
                    style: t,
                    width: r,
                    height: n,
                    fallback: o,
                    wrapper: i,
                  } = this.props,
                  { showPreview: a } = this.state,
                  s = this.getAttributes(e),
                  l = "string" == typeof i ? this.references.wrapper : void 0;
                return p.default.createElement(
                  i,
                  { ref: l, style: { ...t, width: r, height: n }, ...s },
                  p.default.createElement(
                    S,
                    { fallback: o },
                    a ? this.renderPreview(e) : this.renderActivePlayer(e)
                  )
                );
              }
            }),
            f(r, "displayName", "ReactPlayer"),
            f(r, "propTypes", b.propTypes),
            f(r, "defaultProps", b.defaultProps),
            f(r, "addCustomPlayer", (e) => {
              P.push(e);
            }),
            f(r, "removeCustomPlayers", () => {
              P.length = 0;
            }),
            f(r, "canPlay", (t) => {
              for (let r of [...P, ...e]) if (r.canPlay(t)) return !0;
              return !1;
            }),
            f(r, "canEnablePIP", (t) => {
              for (let r of [...P, ...e])
                if (r.canEnablePIP && r.canEnablePIP(t)) return !0;
              return !1;
            }),
            r
          );
        };
    },
    88492: (e, t, r) => {
      var n = Object.create,
        o = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        a = Object.getOwnPropertyNames,
        s = Object.getPrototypeOf,
        l = Object.prototype.hasOwnProperty,
        c = (e, t, r, n) => {
          if ((t && "object" == typeof t) || "function" == typeof t)
            for (let s of a(t))
              l.call(e, s) ||
                s === r ||
                o(e, s, {
                  get: () => t[s],
                  enumerable: !(n = i(t, s)) || n.enumerable,
                });
          return e;
        },
        u = {};
      ((e, t) => {
        for (var r in t) o(e, r, { get: t[r], enumerable: !0 });
      })(u, { default: () => p }),
        (e.exports = c(o({}, "__esModule", { value: !0 }), u));
      var d = ((e, t, r) => (
          (r = null != e ? n(s(e)) : {}),
          c(
            !t && e && e.__esModule
              ? r
              : o(r, "default", { value: e, enumerable: !0 }),
            e
          )
        ))(r(63872)),
        f = r(10742);
      let h = d.default[d.default.length - 1];
      var p = (0, f.createReactPlayer)(d.default, h);
    },
    84170: (e, t, r) => {
      var n = Object.defineProperty,
        o = Object.getOwnPropertyDescriptor,
        i = Object.getOwnPropertyNames,
        a = Object.prototype.hasOwnProperty,
        s = {};
      ((e, t) => {
        for (var r in t) n(e, r, { get: t[r], enumerable: !0 });
      })(s, {
        AUDIO_EXTENSIONS: () => _,
        DASH_EXTENSIONS: () => P,
        FLV_EXTENSIONS: () => E,
        HLS_EXTENSIONS: () => S,
        MATCH_URL_DAILYMOTION: () => v,
        MATCH_URL_FACEBOOK: () => h,
        MATCH_URL_FACEBOOK_WATCH: () => p,
        MATCH_URL_KALTURA: () => O,
        MATCH_URL_MIXCLOUD: () => w,
        MATCH_URL_MUX: () => f,
        MATCH_URL_SOUNDCLOUD: () => u,
        MATCH_URL_STREAMABLE: () => g,
        MATCH_URL_TWITCH_CHANNEL: () => b,
        MATCH_URL_TWITCH_VIDEO: () => m,
        MATCH_URL_VIDYARD: () => x,
        MATCH_URL_VIMEO: () => d,
        MATCH_URL_WISTIA: () => y,
        MATCH_URL_YOUTUBE: () => c,
        VIDEO_EXTENSIONS: () => k,
        canPlay: () => C,
      }),
        (e.exports = ((e, t, r, s) => {
          if ((t && "object" == typeof t) || "function" == typeof t)
            for (let l of i(t))
              a.call(e, l) ||
                l === r ||
                n(e, l, {
                  get: () => t[l],
                  enumerable: !(s = o(t, l)) || s.enumerable,
                });
          return e;
        })(n({}, "__esModule", { value: !0 }), s));
      var l = r(96561);
      let c =
          /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
        u = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/,
        d = /vimeo\.com\/(?!progressive_redirect).+/,
        f = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,
        h =
          /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,
        p = /^https?:\/\/fb\.watch\/.+$/,
        g = /streamable\.com\/([a-z0-9]+)$/,
        y =
          /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
        m = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,
        b = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,
        v =
          /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,
        w = /mixcloud\.com\/([^/]+\/[^/]+)/,
        x = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,
        O =
          /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,
        _ =
          /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
        k = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
        S = /\.(m3u8)($|\?)/i,
        P = /\.(mpd)($|\?)/i,
        E = /\.(flv)($|\?)/i,
        T = (e) => {
          if (e instanceof Array) {
            for (let t of e)
              if (("string" == typeof t && T(t)) || T(t.src)) return !0;
            return !1;
          }
          return (
            !!((0, l.isMediaStream)(e) || (0, l.isBlobUrl)(e)) ||
            _.test(e) ||
            k.test(e) ||
            S.test(e) ||
            P.test(e) ||
            E.test(e)
          );
        },
        C = {
          youtube: (e) =>
            e instanceof Array ? e.every((e) => c.test(e)) : c.test(e),
          soundcloud: (e) => u.test(e) && !_.test(e),
          vimeo: (e) => d.test(e) && !k.test(e) && !S.test(e),
          mux: (e) => f.test(e),
          facebook: (e) => h.test(e) || p.test(e),
          streamable: (e) => g.test(e),
          wistia: (e) => y.test(e),
          twitch: (e) => m.test(e) || b.test(e),
          dailymotion: (e) => v.test(e),
          mixcloud: (e) => w.test(e),
          vidyard: (e) => x.test(e),
          kaltura: (e) => O.test(e),
          file: T,
        };
    },
    63872: (e, t, r) => {
      Object.create;
      var n = Object.defineProperty,
        o = Object.getOwnPropertyDescriptor,
        i = Object.getOwnPropertyNames,
        a = (Object.getPrototypeOf, Object.prototype.hasOwnProperty),
        s = {};
      ((e, t) => {
        for (var r in t) n(e, r, { get: t[r], enumerable: !0 });
      })(s, { default: () => u }),
        (e.exports = ((e, t, r, s) => {
          if ((t && "object" == typeof t) || "function" == typeof t)
            for (let l of i(t))
              a.call(e, l) ||
                l === r ||
                n(e, l, {
                  get: () => t[l],
                  enumerable: !(s = o(t, l)) || s.enumerable,
                });
          return e;
        })(n({}, "__esModule", { value: !0 }), s));
      var l = r(96561),
        c = r(84170),
        u = [
          {
            key: "youtube",
            name: "YouTube",
            canPlay: c.canPlay.youtube,
            lazyPlayer: (0, l.lazy)(() =>
              r.e(439).then(r.t.bind(r, 24665, 23))
            ),
          },
          {
            key: "soundcloud",
            name: "SoundCloud",
            canPlay: c.canPlay.soundcloud,
            lazyPlayer: (0, l.lazy)(() =>
              r.e(125).then(r.t.bind(r, 61637, 23))
            ),
          },
          {
            key: "vimeo",
            name: "Vimeo",
            canPlay: c.canPlay.vimeo,
            lazyPlayer: (0, l.lazy)(() =>
              r.e(743).then(r.t.bind(r, 14781, 23))
            ),
          },
          {
            key: "mux",
            name: "Mux",
            canPlay: c.canPlay.mux,
            lazyPlayer: (0, l.lazy)(() =>
              r.e(258).then(r.t.bind(r, 12936, 23))
            ),
          },
          {
            key: "facebook",
            name: "Facebook",
            canPlay: c.canPlay.facebook,
            lazyPlayer: (0, l.lazy)(() =>
              r.e(121).then(r.t.bind(r, 73574, 23))
            ),
          },
          {
            key: "streamable",
            name: "Streamable",
            canPlay: c.canPlay.streamable,
            lazyPlayer: (0, l.lazy)(() =>
              r.e(546).then(r.t.bind(r, 79243, 23))
            ),
          },
          {
            key: "wistia",
            name: "Wistia",
            canPlay: c.canPlay.wistia,
            lazyPlayer: (0, l.lazy)(() => r.e(55).then(r.t.bind(r, 12842, 23))),
          },
          {
            key: "twitch",
            name: "Twitch",
            canPlay: c.canPlay.twitch,
            lazyPlayer: (0, l.lazy)(() =>
              r.e(216).then(r.t.bind(r, 96663, 23))
            ),
          },
          {
            key: "dailymotion",
            name: "DailyMotion",
            canPlay: c.canPlay.dailymotion,
            lazyPlayer: (0, l.lazy)(() => r.e(596).then(r.t.bind(r, 8816, 23))),
          },
          {
            key: "mixcloud",
            name: "Mixcloud",
            canPlay: c.canPlay.mixcloud,
            lazyPlayer: (0, l.lazy)(() =>
              r.e(667).then(r.t.bind(r, 21664, 23))
            ),
          },
          {
            key: "vidyard",
            name: "Vidyard",
            canPlay: c.canPlay.vidyard,
            lazyPlayer: (0, l.lazy)(() =>
              r.e(965).then(r.t.bind(r, 24812, 23))
            ),
          },
          {
            key: "kaltura",
            name: "Kaltura",
            canPlay: c.canPlay.kaltura,
            lazyPlayer: (0, l.lazy)(() =>
              r.e(261).then(r.t.bind(r, 54100, 23))
            ),
          },
          {
            key: "file",
            name: "FilePlayer",
            canPlay: c.canPlay.file,
            canEnablePIP: (e) =>
              c.canPlay.file(e) &&
              (document.pictureInPictureEnabled ||
                (0, l.supportsWebKitPresentationMode)()) &&
              !c.AUDIO_EXTENSIONS.test(e),
            lazyPlayer: (0, l.lazy)(() => r.e(11).then(r.t.bind(r, 16776, 23))),
          },
        ];
    },
    44291: (e, t, r) => {
      var n = Object.create,
        o = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        a = Object.getOwnPropertyNames,
        s = Object.getPrototypeOf,
        l = Object.prototype.hasOwnProperty,
        c = (e, t, r, n) => {
          if ((t && "object" == typeof t) || "function" == typeof t)
            for (let s of a(t))
              l.call(e, s) ||
                s === r ||
                o(e, s, {
                  get: () => t[s],
                  enumerable: !(n = i(t, s)) || n.enumerable,
                });
          return e;
        },
        u = {};
      ((e, t) => {
        for (var r in t) o(e, r, { get: t[r], enumerable: !0 });
      })(u, { defaultProps: () => O, propTypes: () => w }),
        (e.exports = c(o({}, "__esModule", { value: !0 }), u));
      let {
          string: d,
          bool: f,
          number: h,
          array: p,
          oneOfType: g,
          shape: y,
          object: m,
          func: b,
          node: v,
        } = ((e, t, r) => (
          (r = null != e ? n(s(e)) : {}),
          c(
            !t && e && e.__esModule
              ? r
              : o(r, "default", { value: e, enumerable: !0 }),
            e
          )
        ))(r(41448)).default,
        w = {
          url: g([d, p, m]),
          playing: f,
          loop: f,
          controls: f,
          volume: h,
          muted: f,
          playbackRate: h,
          width: g([d, h]),
          height: g([d, h]),
          style: m,
          progressInterval: h,
          playsinline: f,
          pip: f,
          stopOnUnmount: f,
          light: g([f, d, m]),
          playIcon: v,
          previewTabIndex: h,
          previewAriaLabel: d,
          fallback: v,
          oEmbedUrl: d,
          wrapper: g([d, b, y({ render: b.isRequired })]),
          config: y({
            soundcloud: y({ options: m }),
            youtube: y({ playerVars: m, embedOptions: m, onUnstarted: b }),
            facebook: y({ appId: d, version: d, playerId: d, attributes: m }),
            dailymotion: y({ params: m }),
            vimeo: y({ playerOptions: m, title: d }),
            mux: y({ attributes: m, version: d }),
            file: y({
              attributes: m,
              tracks: p,
              forceVideo: f,
              forceAudio: f,
              forceHLS: f,
              forceSafariHLS: f,
              forceDisableHls: f,
              forceDASH: f,
              forceFLV: f,
              hlsOptions: m,
              hlsVersion: d,
              dashVersion: d,
              flvVersion: d,
            }),
            wistia: y({ options: m, playerId: d, customControls: p }),
            mixcloud: y({ options: m }),
            twitch: y({ options: m, playerId: d }),
            vidyard: y({ options: m }),
          }),
          onReady: b,
          onStart: b,
          onPlay: b,
          onPause: b,
          onBuffer: b,
          onBufferEnd: b,
          onEnded: b,
          onError: b,
          onDuration: b,
          onSeek: b,
          onPlaybackRateChange: b,
          onPlaybackQualityChange: b,
          onProgress: b,
          onClickPreview: b,
          onEnablePIP: b,
          onDisablePIP: b,
        },
        x = () => {},
        O = {
          playing: !1,
          loop: !1,
          controls: !1,
          volume: null,
          muted: !1,
          playbackRate: 1,
          width: "640px",
          height: "360px",
          style: {},
          progressInterval: 1e3,
          playsinline: !1,
          pip: !1,
          stopOnUnmount: !0,
          light: !1,
          fallback: null,
          wrapper: "div",
          previewTabIndex: 0,
          previewAriaLabel: "",
          oEmbedUrl: "https://noembed.com/embed?url={url}",
          config: {
            soundcloud: {
              options: {
                visual: !0,
                buying: !1,
                liking: !1,
                download: !1,
                sharing: !1,
                show_comments: !1,
                show_playcount: !1,
              },
            },
            youtube: {
              playerVars: {
                playsinline: 1,
                showinfo: 0,
                rel: 0,
                iv_load_policy: 3,
                modestbranding: 1,
              },
              embedOptions: {},
              onUnstarted: x,
            },
            facebook: {
              appId: "1309697205772819",
              version: "v3.3",
              playerId: null,
              attributes: {},
            },
            dailymotion: { params: { api: 1, "endscreen-enable": !1 } },
            vimeo: {
              playerOptions: {
                autopause: !1,
                byline: !1,
                portrait: !1,
                title: !1,
              },
              title: null,
            },
            mux: { attributes: {}, version: "2" },
            file: {
              attributes: {},
              tracks: [],
              forceVideo: !1,
              forceAudio: !1,
              forceHLS: !1,
              forceDASH: !1,
              forceFLV: !1,
              hlsOptions: {},
              hlsVersion: "1.1.4",
              dashVersion: "3.1.3",
              flvVersion: "1.5.0",
              forceDisableHls: !1,
            },
            wistia: { options: {}, playerId: null, customControls: null },
            mixcloud: { options: { hide_cover: 1 } },
            twitch: { options: {}, playerId: null },
            vidyard: { options: {} },
          },
          onReady: x,
          onStart: x,
          onPlay: x,
          onPause: x,
          onBuffer: x,
          onBufferEnd: x,
          onEnded: x,
          onError: x,
          onDuration: x,
          onSeek: x,
          onPlaybackRateChange: x,
          onPlaybackQualityChange: x,
          onProgress: x,
          onClickPreview: x,
          onEnablePIP: x,
          onDisablePIP: x,
        };
    },
    96561: (e, t, r) => {
      var n = Object.create,
        o = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        a = Object.getOwnPropertyNames,
        s = Object.getPrototypeOf,
        l = Object.prototype.hasOwnProperty,
        c = (e, t, r, n) => {
          if ((t && "object" == typeof t) || "function" == typeof t)
            for (let s of a(t))
              l.call(e, s) ||
                s === r ||
                o(e, s, {
                  get: () => t[s],
                  enumerable: !(n = i(t, s)) || n.enumerable,
                });
          return e;
        },
        u = (e, t, r) => (
          (r = null != e ? n(s(e)) : {}),
          c(
            !t && e && e.__esModule
              ? r
              : o(r, "default", { value: e, enumerable: !0 }),
            e
          )
        ),
        d = {};
      ((e, t) => {
        for (var r in t) o(e, r, { get: t[r], enumerable: !0 });
      })(d, {
        callPlayer: () => M,
        getConfig: () => T,
        getSDK: () => E,
        isBlobUrl: () => j,
        isMediaStream: () => R,
        lazy: () => g,
        omit: () => C,
        parseEndTime: () => O,
        parseStartTime: () => x,
        queryString: () => k,
        randomString: () => _,
        supportsWebKitPresentationMode: () => A,
      }),
        (e.exports = c(o({}, "__esModule", { value: !0 }), d));
      var f = u(r(2265)),
        h = u(r(24054)),
        p = u(r(9535));
      let g = (e) =>
          f.default.lazy(async () => {
            let t = await e();
            return "function" == typeof t.default ? t : t.default;
          }),
        y = /[?&#](?:start|t)=([0-9hms]+)/,
        m = /[?&#]end=([0-9hms]+)/,
        b = /(\d+)(h|m|s)/g,
        v = /^\d+$/;
      function w(e, t) {
        if (e instanceof Array) return;
        let r = e.match(t);
        if (r) {
          let e = r[1];
          if (e.match(b))
            return (function (e) {
              let t = 0,
                r = b.exec(e);
              for (; null !== r; ) {
                let [, n, o] = r;
                "h" === o && (t += 3600 * parseInt(n, 10)),
                  "m" === o && (t += 60 * parseInt(n, 10)),
                  "s" === o && (t += parseInt(n, 10)),
                  (r = b.exec(e));
              }
              return t;
            })(e);
          if (v.test(e)) return parseInt(e);
        }
      }
      function x(e) {
        return w(e, y);
      }
      function O(e) {
        return w(e, m);
      }
      function _() {
        return Math.random().toString(36).substr(2, 5);
      }
      function k(e) {
        return Object.keys(e)
          .map((t) => `${t}=${e[t]}`)
          .join("&");
      }
      function S(e) {
        return window[e]
          ? window[e]
          : window.exports && window.exports[e]
          ? window.exports[e]
          : window.module && window.module.exports && window.module.exports[e]
          ? window.module.exports[e]
          : null;
      }
      let P = {},
        E = function (e, t, r = null, n = () => !0, o = h.default) {
          let i = S(t);
          return i && n(i)
            ? Promise.resolve(i)
            : new Promise((n, i) => {
                if (P[e]) {
                  P[e].push({ resolve: n, reject: i });
                  return;
                }
                P[e] = [{ resolve: n, reject: i }];
                let a = (t) => {
                  P[e].forEach((e) => e.resolve(t));
                };
                if (r) {
                  let e = window[r];
                  window[r] = function () {
                    e && e(), a(S(t));
                  };
                }
                o(e, (n) => {
                  n
                    ? (P[e].forEach((e) => e.reject(n)), (P[e] = null))
                    : r || a(S(t));
                });
              });
        };
      function T(e, t) {
        return (0, p.default)(t.config, e.config);
      }
      function C(e, ...t) {
        let r = [].concat(...t),
          n = {};
        for (let t of Object.keys(e)) -1 === r.indexOf(t) && (n[t] = e[t]);
        return n;
      }
      function M(e, ...t) {
        if (!this.player || !this.player[e]) {
          let t = `ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;
          return (
            this.player
              ? this.player[e] || (t += "The method was not available")
              : (t += "The player was not available"),
            console.warn(t, "font-weight: bold", ""),
            null
          );
        }
        return this.player[e](...t);
      }
      function R(e) {
        return (
          "undefined" != typeof window &&
          void 0 !== window.MediaStream &&
          e instanceof window.MediaStream
        );
      }
      function j(e) {
        return /^blob:/.test(e);
      }
      function A(e = document.createElement("video")) {
        let t = !1 === /iPhone|iPod/.test(navigator.userAgent);
        return (
          e.webkitSupportsPresentationMode &&
          "function" == typeof e.webkitSetPresentationMode &&
          t
        );
      }
    },
    57206: (e, t, r) => {
      "use strict";
      r.d(t, { QS: () => c });
      var n = r(2265);
      let o = {
          delta: 10,
          preventScrollOnSwipe: !1,
          rotationAngle: 0,
          trackMouse: !1,
          trackTouch: !0,
          swipeDuration: 1 / 0,
          touchEventOptions: { passive: !0 },
        },
        i = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
        a = "mousemove",
        s = "mouseup";
      function l(e, t) {
        if (0 === t) return e;
        let r = (Math.PI / 180) * t;
        return [
          e[0] * Math.cos(r) + e[1] * Math.sin(r),
          e[1] * Math.cos(r) - e[0] * Math.sin(r),
        ];
      }
      function c(e) {
        var t, r, c;
        let u;
        let { trackMouse: d } = e,
          f = n.useRef(Object.assign({}, i)),
          h = n.useRef(Object.assign({}, o)),
          p = n.useRef(Object.assign({}, h.current));
        for (u in ((p.current = Object.assign({}, h.current)),
        (h.current = Object.assign(Object.assign({}, o), e)),
        o))
          void 0 === h.current[u] && (h.current[u] = o[u]);
        let [g, y] = n.useMemo(
          () =>
            (function (e, t) {
              let r = (t) => {
                  let r = "touches" in t;
                  (r && t.touches.length > 1) ||
                    e((e, o) => {
                      o.trackMouse &&
                        !r &&
                        (document.addEventListener(a, n),
                        document.addEventListener(s, d));
                      let { clientX: c, clientY: u } = r ? t.touches[0] : t,
                        f = l([c, u], o.rotationAngle);
                      return (
                        o.onTouchStartOrOnMouseDown &&
                          o.onTouchStartOrOnMouseDown({ event: t }),
                        Object.assign(Object.assign(Object.assign({}, e), i), {
                          initial: f.slice(),
                          xy: f,
                          start: t.timeStamp || 0,
                        })
                      );
                    });
                },
                n = (t) => {
                  e((e, r) => {
                    let n = "touches" in t;
                    if (n && t.touches.length > 1) return e;
                    if (t.timeStamp - e.start > r.swipeDuration)
                      return e.swiping
                        ? Object.assign(Object.assign({}, e), { swiping: !1 })
                        : e;
                    let { clientX: i, clientY: a } = n ? t.touches[0] : t,
                      [s, c] = l([i, a], r.rotationAngle),
                      u = s - e.xy[0],
                      d = c - e.xy[1],
                      f = Math.abs(u),
                      h = Math.abs(d),
                      p = (t.timeStamp || 0) - e.start,
                      g = Math.sqrt(f * f + h * h) / (p || 1),
                      y =
                        f > h
                          ? u > 0
                            ? "Right"
                            : "Left"
                          : d > 0
                          ? "Down"
                          : "Up",
                      m =
                        "number" == typeof r.delta
                          ? r.delta
                          : r.delta[y.toLowerCase()] || o.delta;
                    if (f < m && h < m && !e.swiping) return e;
                    let b = {
                      absX: f,
                      absY: h,
                      deltaX: u,
                      deltaY: d,
                      dir: y,
                      event: t,
                      first: e.first,
                      initial: e.initial,
                      velocity: g,
                      vxvy: [u / (p || 1), d / (p || 1)],
                    };
                    b.first && r.onSwipeStart && r.onSwipeStart(b),
                      r.onSwiping && r.onSwiping(b);
                    let v = !1;
                    return (
                      (r.onSwiping || r.onSwiped || r[`onSwiped${y}`]) &&
                        (v = !0),
                      v &&
                        r.preventScrollOnSwipe &&
                        r.trackTouch &&
                        t.cancelable &&
                        t.preventDefault(),
                      Object.assign(Object.assign({}, e), {
                        first: !1,
                        eventData: b,
                        swiping: !0,
                      })
                    );
                  });
                },
                c = (t) => {
                  e((e, r) => {
                    let n;
                    if (e.swiping && e.eventData) {
                      if (t.timeStamp - e.start < r.swipeDuration) {
                        (n = Object.assign(Object.assign({}, e.eventData), {
                          event: t,
                        })),
                          r.onSwiped && r.onSwiped(n);
                        let o = r[`onSwiped${n.dir}`];
                        o && o(n);
                      }
                    } else r.onTap && r.onTap({ event: t });
                    return (
                      r.onTouchEndOrOnMouseUp &&
                        r.onTouchEndOrOnMouseUp({ event: t }),
                      Object.assign(Object.assign(Object.assign({}, e), i), {
                        eventData: n,
                      })
                    );
                  });
                },
                u = () => {
                  document.removeEventListener(a, n),
                    document.removeEventListener(s, d);
                },
                d = (e) => {
                  u(), c(e);
                },
                f = (e, t) => {
                  let i = () => {};
                  if (e && e.addEventListener) {
                    let a = Object.assign(
                        Object.assign({}, o.touchEventOptions),
                        t.touchEventOptions
                      ),
                      s = [
                        ["touchstart", r, a],
                        [
                          "touchmove",
                          n,
                          Object.assign(
                            Object.assign({}, a),
                            t.preventScrollOnSwipe ? { passive: !1 } : {}
                          ),
                        ],
                        ["touchend", c, a],
                      ];
                    s.forEach(([t, r, n]) => e.addEventListener(t, r, n)),
                      (i = () =>
                        s.forEach(([t, r]) => e.removeEventListener(t, r)));
                  }
                  return i;
                },
                h = {
                  ref: (t) => {
                    null !== t &&
                      e((e, r) => {
                        if (e.el === t) return e;
                        let n = {};
                        return (
                          e.el &&
                            e.el !== t &&
                            e.cleanUpTouch &&
                            (e.cleanUpTouch(), (n.cleanUpTouch = void 0)),
                          r.trackTouch && t && (n.cleanUpTouch = f(t, r)),
                          Object.assign(
                            Object.assign(Object.assign({}, e), { el: t }),
                            n
                          )
                        );
                      });
                  },
                };
              return t.trackMouse && (h.onMouseDown = r), [h, f];
            })((e) => (f.current = e(f.current, h.current)), { trackMouse: d }),
          [d]
        );
        return (
          (f.current =
            ((t = f.current),
            (r = h.current),
            (c = p.current),
            r.trackTouch && t.el
              ? t.cleanUpTouch
                ? r.preventScrollOnSwipe !== c.preventScrollOnSwipe ||
                  r.touchEventOptions.passive !== c.touchEventOptions.passive
                  ? (t.cleanUpTouch(),
                    Object.assign(Object.assign({}, t), {
                      cleanUpTouch: y(t.el, r),
                    }))
                  : t
                : Object.assign(Object.assign({}, t), {
                    cleanUpTouch: y(t.el, r),
                  })
              : (t.cleanUpTouch && t.cleanUpTouch(),
                Object.assign(Object.assign({}, t), {
                  cleanUpTouch: void 0,
                })))),
          g
        );
      }
    },
    85786: (e) => {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, r = [], n = 0;
          n < e.rangeCount;
          n++
        )
          r.push(e.getRangeAt(n));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                r.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
    89028: (e, t, r) => {
      "use strict";
      r.d(t, { kH: () => o });
      var n = r(93342);
      let o = (e) => i(e, e.eddsa.generateKeypair()),
        i = (e, t) => ({
          publicKey: t.publicKey,
          secretKey: t.secretKey,
          signMessage: async (r) => e.eddsa.sign(r, t),
          async signTransaction(r) {
            let o = r.serializedMessage,
              i = e.eddsa.sign(o, t);
            return (0, n.M)(r, i, t.publicKey);
          },
          async signAllTransactions(e) {
            return Promise.all(e.map((e) => this.signTransaction(e)));
          },
        });
    },
    93342: (e, t, r) => {
      "use strict";
      r.d(t, { M: () => o, t: () => n });
      let n = 1232,
        o = (e, t, r) => {
          let n = e.message.header.numRequiredSignatures,
            o = e.message.accounts.slice(0, n).findIndex((e) => e === r);
          if (o < 0)
            throw Error(
              "The provided signer is not required to sign this transaction."
            );
          let i = [...e.signatures];
          return (i[o] = t), { ...e, signatures: i };
        };
    },
    8496: (e, t, r) => {
      "use strict";
      r.d(t, { T: () => s });
      var n = r(21449),
        o = r(93342),
        i = r(41764);
      class a {
        constructor(e = [], t = {}) {
          (this.items = e), (this.options = t);
        }
        empty() {
          return new a([], this.options);
        }
        setItems(e) {
          return new a(this.parseItems(e), this.options);
        }
        prepend(e) {
          return new a([...this.parseItems(e), ...this.items], this.options);
        }
        append(e) {
          return new a([...this.items, ...this.parseItems(e)], this.options);
        }
        add(e) {
          return this.append(e);
        }
        mapInstructions(e) {
          return new a(this.items.map(e), this.options);
        }
        addRemainingAccounts(e, t) {
          t = t ?? this.items.length - 1;
          let r = Array.isArray(e) ? e : [e],
            n = r.map((e) =>
              "pubkey" in e
                ? e
                : {
                    pubkey: e.signer.publicKey,
                    isSigner: !0,
                    isWritable: e.isWritable,
                  }
            ),
            o = r.flatMap((e) => ("pubkey" in e ? [] : [e.signer]));
          return this.mapInstructions((e, r) => {
            if (r !== t) return e;
            let i = [...e.instruction.keys, ...n];
            return {
              ...e,
              instruction: { ...e.instruction, keys: i },
              signers: [...e.signers, ...o],
            };
          });
        }
        splitByIndex(e) {
          return [
            new a(this.items.slice(0, e), this.options),
            new a(this.items.slice(e), this.options),
          ];
        }
        unsafeSplitByTransactionSize(e) {
          return this.items.reduce(
            (t, r) => {
              let n = t.pop(),
                o = n.add(r);
              return (
                o.fitsInOneTransaction(e)
                  ? t.push(o)
                  : (t.push(n), t.push(n.empty().add(r))),
                t
              );
            },
            [this.empty()]
          );
        }
        setFeePayer(e) {
          return new a(this.items, { ...this.options, feePayer: e });
        }
        getFeePayer(e) {
          return this.options.feePayer ?? e.payer;
        }
        setVersion(e) {
          return new a(this.items, { ...this.options, version: e });
        }
        useLegacyVersion() {
          return this.setVersion("legacy");
        }
        useV0() {
          return this.setVersion(0);
        }
        setAddressLookupTables(e) {
          return new a(this.items, { ...this.options, addressLookupTables: e });
        }
        getBlockhash() {
          return "object" == typeof this.options.blockhash
            ? this.options.blockhash.blockhash
            : this.options.blockhash;
        }
        setBlockhash(e) {
          return new a(this.items, { ...this.options, blockhash: e });
        }
        async setLatestBlockhash(e, t = {}) {
          return this.setBlockhash(await e.rpc.getLatestBlockhash(t));
        }
        getInstructions() {
          return this.items.map((e) => e.instruction);
        }
        getSigners(e) {
          return (0, n.Eq)([
            this.getFeePayer(e),
            ...this.items.flatMap((e) => e.signers),
          ]);
        }
        getBytesCreatedOnChain() {
          return this.items.reduce((e, t) => e + t.bytesCreatedOnChain, 0);
        }
        async getRentCreatedOnChain(e) {
          return e.rpc.getRent(this.getBytesCreatedOnChain(), {
            includesHeaderBytes: !0,
          });
        }
        getTransactionSize(e) {
          return e.transactions.serialize(
            this.setBlockhash("11111111111111111111111111111111").build(e)
          ).length;
        }
        minimumTransactionsRequired(e) {
          return Math.ceil(this.getTransactionSize(e) / o.t);
        }
        fitsInOneTransaction(e) {
          return 1 === this.minimumTransactionsRequired(e);
        }
        build(e) {
          let t = this.getBlockhash();
          if (!t)
            throw new i.O(
              "Setting a blockhash is required to build a transaction. Please use the `setBlockhash` or `setLatestBlockhash` methods."
            );
          let r = {
            version: this.options.version ?? 0,
            payer: this.getFeePayer(e).publicKey,
            instructions: this.getInstructions(),
            blockhash: t,
          };
          return (
            0 === r.version &&
              this.options.addressLookupTables &&
              (r.addressLookupTables = this.options.addressLookupTables),
            e.transactions.create(r)
          );
        }
        async buildWithLatestBlockhash(e, t = {}) {
          let r = this;
          return (
            this.options.blockhash || (r = await this.setLatestBlockhash(e, t)),
            r.build(e)
          );
        }
        async buildAndSign(e) {
          return (0, n.OJ)(
            await this.buildWithLatestBlockhash(e),
            this.getSigners(e)
          );
        }
        async send(e, t = {}) {
          let r = await this.buildAndSign(e);
          return e.rpc.sendTransaction(r, t);
        }
        async confirm(e, t, r = {}) {
          let n,
            o = this;
          if (
            (this.options.blockhash || (o = await this.setLatestBlockhash(e)),
            r.strategy)
          )
            n = r.strategy;
          else {
            let t =
              "object" == typeof o.options.blockhash
                ? o.options.blockhash
                : await e.rpc.getLatestBlockhash();
            n = r.strategy ?? { type: "blockhash", ...t };
          }
          return e.rpc.confirmTransaction(t, { ...r, strategy: n });
        }
        async sendAndConfirm(e, t = {}) {
          let r = this;
          this.options.blockhash || (r = await this.setLatestBlockhash(e));
          let n = await r.send(e, t.send),
            o = await r.confirm(e, n, t.confirm);
          return { signature: n, result: o };
        }
        parseItems(e) {
          return (Array.isArray(e) ? e : [e]).flatMap((e) =>
            "items" in e ? e.items : [e]
          );
        }
      }
      let s = (e = []) => new a(e);
    },
    29276: (e, t, r) => {
      "use strict";
      r.d(t, { S: () => a });
      var n = r(2265),
        o = r(82426),
        i = r(7549);
      function a({ walletIcon: e, walletName: t, ...r }) {
        return n.createElement(o.z, {
          ...r,
          className: "wallet-adapter-button-trigger",
          startIcon:
            e && t
              ? n.createElement(i.o, {
                  wallet: { adapter: { icon: e, name: t } },
                })
              : void 0,
        });
      }
    },
    47906: (e, t, r) => {
      "use strict";
      r.d(t, { G: () => a });
      var n = r(28782),
        o = r(2265),
        i = r(29276);
      function a({ children: e, disabled: t, labels: r, onClick: a, ...s }) {
        let {
          buttonDisabled: l,
          buttonState: c,
          onButtonClick: u,
          walletIcon: d,
          walletName: f,
        } = (function () {
          let e;
          let { disconnecting: t, disconnect: r, wallet: i } = (0, n.O)();
          e = t ? "disconnecting" : i ? "has-wallet" : "no-wallet";
          let a = (0, o.useCallback)(() => {
            r().catch(() => {});
          }, [r]);
          return {
            buttonDisabled: "has-wallet" !== e,
            buttonState: e,
            onButtonClick: "has-wallet" === e ? a : void 0,
            walletIcon: i?.adapter.icon,
            walletName: i?.adapter.name,
          };
        })();
        return o.createElement(
          i.S,
          {
            ...s,
            disabled: t || l,
            onClick: (e) => {
              a && a(e), !e.defaultPrevented && u && u();
            },
            walletIcon: d,
            walletName: f,
          },
          e || r[c]
        );
      }
    },
    95678: (e, t, r) => {
      "use strict";
      r.d(t, { v: () => a });
      var n = r(2265),
        o = r(47906);
      let i = {
        disconnecting: "Disconnecting ...",
        "has-wallet": "Disconnect",
        "no-wallet": "Disconnect Wallet",
      };
      function a(e) {
        return n.createElement(o.G, { ...e, labels: i });
      }
    },
    38472: (e, t, r) => {
      "use strict";
      let n;
      r.d(t, { Z: () => tu });
      var o,
        i,
        a,
        s = {};
      function l(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      r.r(s),
        r.d(s, {
          hasBrowserEnv: () => eh,
          hasStandardBrowserEnv: () => eg,
          hasStandardBrowserWebWorkerEnv: () => ey,
          navigator: () => ep,
          origin: () => em,
        });
      var c = r(25566);
      let { toString: u } = Object.prototype,
        { getPrototypeOf: d } = Object,
        f = ((e) => (t) => {
          let r = u.call(t);
          return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
        })(Object.create(null)),
        h = (e) => ((e = e.toLowerCase()), (t) => f(t) === e),
        p = (e) => (t) => typeof t === e,
        { isArray: g } = Array,
        y = p("undefined"),
        m = h("ArrayBuffer"),
        b = p("string"),
        v = p("function"),
        w = p("number"),
        x = (e) => null !== e && "object" == typeof e,
        O = (e) => {
          if ("object" !== f(e)) return !1;
          let t = d(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        _ = h("Date"),
        k = h("File"),
        S = h("Blob"),
        P = h("FileList"),
        E = h("URLSearchParams"),
        [T, C, M, R] = ["ReadableStream", "Request", "Response", "Headers"].map(
          h
        );
      function j(e, t, { allOwnKeys: r = !1 } = {}) {
        let n, o;
        if (null != e) {
          if (("object" != typeof e && (e = [e]), g(e)))
            for (n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e);
          else {
            let o;
            let i = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
              a = i.length;
            for (n = 0; n < a; n++) (o = i[n]), t.call(null, e[o], o, e);
          }
        }
      }
      function A(e, t) {
        let r;
        t = t.toLowerCase();
        let n = Object.keys(e),
          o = n.length;
        for (; o-- > 0; ) if (t === (r = n[o]).toLowerCase()) return r;
        return null;
      }
      let I =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : global,
        D = (e) => !y(e) && e !== I,
        L = (
          (e) => (t) =>
            e && t instanceof e
        )("undefined" != typeof Uint8Array && d(Uint8Array)),
        N = h("HTMLFormElement"),
        z = (
          ({ hasOwnProperty: e }) =>
          (t, r) =>
            e.call(t, r)
        )(Object.prototype),
        B = h("RegExp"),
        F = (e, t) => {
          let r = Object.getOwnPropertyDescriptors(e),
            n = {};
          j(r, (r, o) => {
            let i;
            !1 !== (i = t(r, o, e)) && (n[o] = i || r);
          }),
            Object.defineProperties(e, n);
        },
        U = "abcdefghijklmnopqrstuvwxyz",
        W = "0123456789",
        H = { DIGIT: W, ALPHA: U, ALPHA_DIGIT: U + U.toUpperCase() + W },
        q = h("AsyncFunction"),
        Y =
          ((o = "function" == typeof setImmediate),
          (i = v(I.postMessage)),
          o
            ? setImmediate
            : i
            ? ((e, t) => (
                I.addEventListener(
                  "message",
                  ({ source: r, data: n }) => {
                    r === I && n === e && t.length && t.shift()();
                  },
                  !1
                ),
                (r) => {
                  t.push(r), I.postMessage(e, "*");
                }
              ))(`axios@${Math.random()}`, [])
            : (e) => setTimeout(e)),
        V =
          "undefined" != typeof queueMicrotask
            ? queueMicrotask.bind(I)
            : (void 0 !== c && c.nextTick) || Y,
        X = {
          isArray: g,
          isArrayBuffer: m,
          isBuffer: function (e) {
            return (
              null !== e &&
              !y(e) &&
              null !== e.constructor &&
              !y(e.constructor) &&
              v(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (("function" == typeof FormData && e instanceof FormData) ||
                (v(e.append) &&
                  ("formdata" === (t = f(e)) ||
                    ("object" === t &&
                      v(e.toString) &&
                      "[object FormData]" === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && m(e.buffer);
          },
          isString: b,
          isNumber: w,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: x,
          isPlainObject: O,
          isReadableStream: T,
          isRequest: C,
          isResponse: M,
          isHeaders: R,
          isUndefined: y,
          isDate: _,
          isFile: k,
          isBlob: S,
          isRegExp: B,
          isFunction: v,
          isStream: (e) => x(e) && v(e.pipe),
          isURLSearchParams: E,
          isTypedArray: L,
          isFileList: P,
          forEach: j,
          merge: function e() {
            let { caseless: t } = (D(this) && this) || {},
              r = {},
              n = (n, o) => {
                let i = (t && A(r, o)) || o;
                O(r[i]) && O(n)
                  ? (r[i] = e(r[i], n))
                  : O(n)
                  ? (r[i] = e({}, n))
                  : g(n)
                  ? (r[i] = n.slice())
                  : (r[i] = n);
              };
            for (let e = 0, t = arguments.length; e < t; e++)
              arguments[e] && j(arguments[e], n);
            return r;
          },
          extend: (e, t, r, { allOwnKeys: n } = {}) => (
            j(
              t,
              (t, n) => {
                r && v(t) ? (e[n] = l(t, r)) : (e[n] = t);
              },
              { allOwnKeys: n }
            ),
            e
          ),
          trim: (e) =>
            e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, r, n) => {
            (e.prototype = Object.create(t.prototype, n)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              r && Object.assign(e.prototype, r);
          },
          toFlatObject: (e, t, r, n) => {
            let o, i, a;
            let s = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (i = (o = Object.getOwnPropertyNames(e)).length; i-- > 0; )
                (a = o[i]),
                  (!n || n(a, e, t)) && !s[a] && ((t[a] = e[a]), (s[a] = !0));
              e = !1 !== r && d(e);
            } while (e && (!r || r(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: f,
          kindOfTest: h,
          endsWith: (e, t, r) => {
            (e = String(e)),
              (void 0 === r || r > e.length) && (r = e.length),
              (r -= t.length);
            let n = e.indexOf(t, r);
            return -1 !== n && n === r;
          },
          toArray: (e) => {
            if (!e) return null;
            if (g(e)) return e;
            let t = e.length;
            if (!w(t)) return null;
            let r = Array(t);
            for (; t-- > 0; ) r[t] = e[t];
            return r;
          },
          forEachEntry: (e, t) => {
            let r;
            let n = (e && e[Symbol.iterator]).call(e);
            for (; (r = n.next()) && !r.done; ) {
              let n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let r;
            let n = [];
            for (; null !== (r = e.exec(t)); ) n.push(r);
            return n;
          },
          isHTMLForm: N,
          hasOwnProperty: z,
          hasOwnProp: z,
          reduceDescriptors: F,
          freezeMethods: (e) => {
            F(e, (t, r) => {
              if (v(e) && -1 !== ["arguments", "caller", "callee"].indexOf(r))
                return !1;
              if (v(e[r])) {
                if (((t.enumerable = !1), "writable" in t)) {
                  t.writable = !1;
                  return;
                }
                t.set ||
                  (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + r + "'");
                  });
              }
            });
          },
          toObjectSet: (e, t) => {
            let r = {};
            return (
              ((e) => {
                e.forEach((e) => {
                  r[e] = !0;
                });
              })(g(e) ? e : String(e).split(t)),
              r
            );
          },
          toCamelCase: (e) =>
            e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, r) {
                return t.toUpperCase() + r;
              }),
          noop: () => {},
          toFiniteNumber: (e, t) =>
            null != e && Number.isFinite((e = +e)) ? e : t,
          findKey: A,
          global: I,
          isContextDefined: D,
          ALPHABET: H,
          generateString: (e = 16, t = H.ALPHA_DIGIT) => {
            let r = "",
              { length: n } = t;
            for (; e--; ) r += t[(Math.random() * n) | 0];
            return r;
          },
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              v(e.append) &&
              "FormData" === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: (e) => {
            let t = Array(10),
              r = (e, n) => {
                if (x(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!("toJSON" in e)) {
                    t[n] = e;
                    let o = g(e) ? [] : {};
                    return (
                      j(e, (e, t) => {
                        let i = r(e, n + 1);
                        y(i) || (o[t] = i);
                      }),
                      (t[n] = void 0),
                      o
                    );
                  }
                }
                return e;
              };
            return r(e, 0);
          },
          isAsyncFn: q,
          isThenable: (e) => e && (x(e) || v(e)) && v(e.then) && v(e.catch),
          setImmediate: Y,
          asap: V,
        };
      function $(e, t, r, n, o) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          r && (this.config = r),
          n && (this.request = n),
          o &&
            ((this.response = o), (this.status = o.status ? o.status : null));
      }
      X.inherits($, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: X.toJSONObject(this.config),
            code: this.code,
            status: this.status,
          };
        },
      });
      let K = $.prototype,
        J = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((e) => {
        J[e] = { value: e };
      }),
        Object.defineProperties($, J),
        Object.defineProperty(K, "isAxiosError", { value: !0 }),
        ($.from = (e, t, r, n, o, i) => {
          let a = Object.create(K);
          return (
            X.toFlatObject(
              e,
              a,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => "isAxiosError" !== e
            ),
            $.call(a, e.message, t, r, n, o),
            (a.cause = e),
            (a.name = e.name),
            i && Object.assign(a, i),
            a
          );
        });
      var G = r(9109).Buffer;
      function Q(e) {
        return X.isPlainObject(e) || X.isArray(e);
      }
      function Z(e) {
        return X.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function ee(e, t, r) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = Z(e)), !r && t ? "[" + e + "]" : e;
              })
              .join(r ? "." : "")
          : t;
      }
      let et = X.toFlatObject(X, {}, null, function (e) {
          return /^is[A-Z]/.test(e);
        }),
        er = function (e, t, r) {
          if (!X.isObject(e)) throw TypeError("target must be an object");
          t = t || new FormData();
          let n = (r = X.toFlatObject(
              r,
              { metaTokens: !0, dots: !1, indexes: !1 },
              !1,
              function (e, t) {
                return !X.isUndefined(t[e]);
              }
            )).metaTokens,
            o = r.visitor || c,
            i = r.dots,
            a = r.indexes,
            s =
              (r.Blob || ("undefined" != typeof Blob && Blob)) &&
              X.isSpecCompliantForm(t);
          if (!X.isFunction(o)) throw TypeError("visitor must be a function");
          function l(e) {
            if (null === e) return "";
            if (X.isDate(e)) return e.toISOString();
            if (!s && X.isBlob(e))
              throw new $("Blob is not supported. Use a Buffer instead.");
            return X.isArrayBuffer(e) || X.isTypedArray(e)
              ? s && "function" == typeof Blob
                ? new Blob([e])
                : G.from(e)
              : e;
          }
          function c(e, r, o) {
            let s = e;
            if (e && !o && "object" == typeof e) {
              if (X.endsWith(r, "{}"))
                (r = n ? r : r.slice(0, -2)), (e = JSON.stringify(e));
              else {
                var c;
                if (
                  (X.isArray(e) && ((c = e), X.isArray(c) && !c.some(Q))) ||
                  ((X.isFileList(e) || X.endsWith(r, "[]")) &&
                    (s = X.toArray(e)))
                )
                  return (
                    (r = Z(r)),
                    s.forEach(function (e, n) {
                      X.isUndefined(e) ||
                        null === e ||
                        t.append(
                          !0 === a ? ee([r], n, i) : null === a ? r : r + "[]",
                          l(e)
                        );
                    }),
                    !1
                  );
              }
            }
            return !!Q(e) || (t.append(ee(o, r, i), l(e)), !1);
          }
          let u = [],
            d = Object.assign(et, {
              defaultVisitor: c,
              convertValue: l,
              isVisitable: Q,
            });
          if (!X.isObject(e)) throw TypeError("data must be an object");
          return (
            !(function e(r, n) {
              if (!X.isUndefined(r)) {
                if (-1 !== u.indexOf(r))
                  throw Error("Circular reference detected in " + n.join("."));
                u.push(r),
                  X.forEach(r, function (r, i) {
                    !0 ===
                      (!(X.isUndefined(r) || null === r) &&
                        o.call(t, r, X.isString(i) ? i.trim() : i, n, d)) &&
                      e(r, n ? n.concat(i) : [i]);
                  }),
                  u.pop();
              }
            })(e),
            t
          );
        };
      function en(e) {
        let t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function eo(e, t) {
        (this._pairs = []), e && er(e, this, t);
      }
      let ei = eo.prototype;
      function ea(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function es(e, t, r) {
        let n;
        if (!t) return e;
        let o = (r && r.encode) || ea,
          i = r && r.serialize;
        if (
          (n = i
            ? i(t, r)
            : X.isURLSearchParams(t)
            ? t.toString()
            : new eo(t, r).toString(o))
        ) {
          let t = e.indexOf("#");
          -1 !== t && (e = e.slice(0, t)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + n);
        }
        return e;
      }
      (ei.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (ei.toString = function (e) {
          let t = e
            ? function (t) {
                return e.call(this, t, en);
              }
            : en;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      class el {
        constructor() {
          this.handlers = [];
        }
        use(e, t, r) {
          return (
            this.handlers.push({
              fulfilled: e,
              rejected: t,
              synchronous: !!r && r.synchronous,
              runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }
        eject(e) {
          this.handlers[e] && (this.handlers[e] = null);
        }
        clear() {
          this.handlers && (this.handlers = []);
        }
        forEach(e) {
          X.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }
      }
      let ec = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        eu = "undefined" != typeof URLSearchParams ? URLSearchParams : eo,
        ed = "undefined" != typeof FormData ? FormData : null,
        ef = "undefined" != typeof Blob ? Blob : null,
        eh = "undefined" != typeof window && "undefined" != typeof document,
        ep = ("object" == typeof navigator && navigator) || void 0,
        eg =
          eh &&
          (!ep ||
            0 > ["ReactNative", "NativeScript", "NS"].indexOf(ep.product)),
        ey =
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" == typeof self.importScripts,
        em = (eh && window.location.href) || "http://localhost",
        eb = {
          ...s,
          isBrowser: !0,
          classes: { URLSearchParams: eu, FormData: ed, Blob: ef },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        ev = function (e) {
          if (X.isFormData(e) && X.isFunction(e.entries)) {
            let t = {};
            return (
              X.forEachEntry(e, (e, r) => {
                !(function e(t, r, n, o) {
                  let i = t[o++];
                  if ("__proto__" === i) return !0;
                  let a = Number.isFinite(+i),
                    s = o >= t.length;
                  return (
                    ((i = !i && X.isArray(n) ? n.length : i), s)
                      ? X.hasOwnProp(n, i)
                        ? (n[i] = [n[i], r])
                        : (n[i] = r)
                      : ((n[i] && X.isObject(n[i])) || (n[i] = []),
                        e(t, r, n[i], o) &&
                          X.isArray(n[i]) &&
                          (n[i] = (function (e) {
                            let t, r;
                            let n = {},
                              o = Object.keys(e),
                              i = o.length;
                            for (t = 0; t < i; t++) n[(r = o[t])] = e[r];
                            return n;
                          })(n[i]))),
                    !a
                  );
                })(
                  X.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
                    "[]" === e[0] ? "" : e[1] || e[0]
                  ),
                  r,
                  t,
                  0
                );
              }),
              t
            );
          }
          return null;
        },
        ew = {
          transitional: ec,
          adapter: ["xhr", "http", "fetch"],
          transformRequest: [
            function (e, t) {
              let r;
              let n = t.getContentType() || "",
                o = n.indexOf("application/json") > -1,
                i = X.isObject(e);
              if (
                (i && X.isHTMLForm(e) && (e = new FormData(e)), X.isFormData(e))
              )
                return o ? JSON.stringify(ev(e)) : e;
              if (
                X.isArrayBuffer(e) ||
                X.isBuffer(e) ||
                X.isStream(e) ||
                X.isFile(e) ||
                X.isBlob(e) ||
                X.isReadableStream(e)
              )
                return e;
              if (X.isArrayBufferView(e)) return e.buffer;
              if (X.isURLSearchParams(e))
                return (
                  t.setContentType(
                    "application/x-www-form-urlencoded;charset=utf-8",
                    !1
                  ),
                  e.toString()
                );
              if (i) {
                if (n.indexOf("application/x-www-form-urlencoded") > -1) {
                  var a, s;
                  return ((a = e),
                  (s = this.formSerializer),
                  er(
                    a,
                    new eb.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, r, n) {
                          return eb.isNode && X.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : n.defaultVisitor.apply(this, arguments);
                        },
                      },
                      s
                    )
                  )).toString();
                }
                if (
                  (r = X.isFileList(e)) ||
                  n.indexOf("multipart/form-data") > -1
                ) {
                  let t = this.env && this.env.FormData;
                  return er(
                    r ? { "files[]": e } : e,
                    t && new t(),
                    this.formSerializer
                  );
                }
              }
              return i || o
                ? (t.setContentType("application/json", !1),
                  (function (e, t, r) {
                    if (X.isString(e))
                      try {
                        return (0, JSON.parse)(e), X.trim(e);
                      } catch (e) {
                        if ("SyntaxError" !== e.name) throw e;
                      }
                    return (0, JSON.stringify)(e);
                  })(e))
                : e;
            },
          ],
          transformResponse: [
            function (e) {
              let t = this.transitional || ew.transitional,
                r = t && t.forcedJSONParsing,
                n = "json" === this.responseType;
              if (X.isResponse(e) || X.isReadableStream(e)) return e;
              if (e && X.isString(e) && ((r && !this.responseType) || n)) {
                let r = t && t.silentJSONParsing;
                try {
                  return JSON.parse(e);
                } catch (e) {
                  if (!r && n) {
                    if ("SyntaxError" === e.name)
                      throw $.from(
                        e,
                        $.ERR_BAD_RESPONSE,
                        this,
                        null,
                        this.response
                      );
                    throw e;
                  }
                }
              }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: { FormData: eb.classes.FormData, Blob: eb.classes.Blob },
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: {
            common: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": void 0,
            },
          },
        };
      X.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
        ew.headers[e] = {};
      });
      let ex = X.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        eO = (e) => {
          let t, r, n;
          let o = {};
          return (
            e &&
              e.split("\n").forEach(function (e) {
                (n = e.indexOf(":")),
                  (t = e.substring(0, n).trim().toLowerCase()),
                  (r = e.substring(n + 1).trim()),
                  !t ||
                    (o[t] && ex[t]) ||
                    ("set-cookie" === t
                      ? o[t]
                        ? o[t].push(r)
                        : (o[t] = [r])
                      : (o[t] = o[t] ? o[t] + ", " + r : r));
              }),
            o
          );
        },
        e_ = Symbol("internals");
      function ek(e) {
        return e && String(e).trim().toLowerCase();
      }
      function eS(e) {
        return !1 === e || null == e ? e : X.isArray(e) ? e.map(eS) : String(e);
      }
      let eP = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
      function eE(e, t, r, n, o) {
        if (X.isFunction(n)) return n.call(this, t, r);
        if ((o && (t = r), X.isString(t))) {
          if (X.isString(n)) return -1 !== t.indexOf(n);
          if (X.isRegExp(n)) return n.test(t);
        }
      }
      class eT {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, r) {
          let n = this;
          function o(e, t, r) {
            let o = ek(t);
            if (!o) throw Error("header name must be a non-empty string");
            let i = X.findKey(n, o);
            (i &&
              void 0 !== n[i] &&
              !0 !== r &&
              (void 0 !== r || !1 === n[i])) ||
              (n[i || t] = eS(e));
          }
          let i = (e, t) => X.forEach(e, (e, r) => o(e, r, t));
          if (X.isPlainObject(e) || e instanceof this.constructor) i(e, t);
          else if (X.isString(e) && (e = e.trim()) && !eP(e)) i(eO(e), t);
          else if (X.isHeaders(e)) for (let [t, n] of e.entries()) o(n, t, r);
          else null != e && o(t, e, r);
          return this;
        }
        get(e, t) {
          if ((e = ek(e))) {
            let r = X.findKey(this, e);
            if (r) {
              let e = this[r];
              if (!t) return e;
              if (!0 === t)
                return (function (e) {
                  let t;
                  let r = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  for (; (t = n.exec(e)); ) r[t[1]] = t[2];
                  return r;
                })(e);
              if (X.isFunction(t)) return t.call(this, e, r);
              if (X.isRegExp(t)) return t.exec(e);
              throw TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(e, t) {
          if ((e = ek(e))) {
            let r = X.findKey(this, e);
            return !!(
              r &&
              void 0 !== this[r] &&
              (!t || eE(this, this[r], r, t))
            );
          }
          return !1;
        }
        delete(e, t) {
          let r = this,
            n = !1;
          function o(e) {
            if ((e = ek(e))) {
              let o = X.findKey(r, e);
              o && (!t || eE(r, r[o], o, t)) && (delete r[o], (n = !0));
            }
          }
          return X.isArray(e) ? e.forEach(o) : o(e), n;
        }
        clear(e) {
          let t = Object.keys(this),
            r = t.length,
            n = !1;
          for (; r--; ) {
            let o = t[r];
            (!e || eE(this, this[o], o, e, !0)) && (delete this[o], (n = !0));
          }
          return n;
        }
        normalize(e) {
          let t = this,
            r = {};
          return (
            X.forEach(this, (n, o) => {
              let i = X.findKey(r, o);
              if (i) {
                (t[i] = eS(n)), delete t[o];
                return;
              }
              let a = e
                ? o
                    .trim()
                    .toLowerCase()
                    .replace(
                      /([a-z\d])(\w*)/g,
                      (e, t, r) => t.toUpperCase() + r
                    )
                : String(o).trim();
              a !== o && delete t[o], (t[a] = eS(n)), (r[a] = !0);
            }),
            this
          );
        }
        concat(...e) {
          return this.constructor.concat(this, ...e);
        }
        toJSON(e) {
          let t = Object.create(null);
          return (
            X.forEach(this, (r, n) => {
              null != r &&
                !1 !== r &&
                (t[n] = e && X.isArray(r) ? r.join(", ") : r);
            }),
            t
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map(([e, t]) => e + ": " + t)
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e, ...t) {
          let r = new this(e);
          return t.forEach((e) => r.set(e)), r;
        }
        static accessor(e) {
          let t = (this[e_] = this[e_] = { accessors: {} }).accessors,
            r = this.prototype;
          function n(e) {
            let n = ek(e);
            t[n] ||
              (!(function (e, t) {
                let r = X.toCamelCase(" " + t);
                ["get", "set", "has"].forEach((n) => {
                  Object.defineProperty(e, n + r, {
                    value: function (e, r, o) {
                      return this[n].call(this, t, e, r, o);
                    },
                    configurable: !0,
                  });
                });
              })(r, e),
              (t[n] = !0));
          }
          return X.isArray(e) ? e.forEach(n) : n(e), this;
        }
      }
      function eC(e, t) {
        let r = this || ew,
          n = t || r,
          o = eT.from(n.headers),
          i = n.data;
        return (
          X.forEach(e, function (e) {
            i = e.call(r, i, o.normalize(), t ? t.status : void 0);
          }),
          o.normalize(),
          i
        );
      }
      function eM(e) {
        return !!(e && e.__CANCEL__);
      }
      function eR(e, t, r) {
        $.call(this, null == e ? "canceled" : e, $.ERR_CANCELED, t, r),
          (this.name = "CanceledError");
      }
      function ej(e, t, r) {
        let n = r.config.validateStatus;
        !r.status || !n || n(r.status)
          ? e(r)
          : t(
              new $(
                "Request failed with status code " + r.status,
                [$.ERR_BAD_REQUEST, $.ERR_BAD_RESPONSE][
                  Math.floor(r.status / 100) - 4
                ],
                r.config,
                r.request,
                r
              )
            );
      }
      eT.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        X.reduceDescriptors(eT.prototype, ({ value: e }, t) => {
          let r = t[0].toUpperCase() + t.slice(1);
          return {
            get: () => e,
            set(e) {
              this[r] = e;
            },
          };
        }),
        X.freezeMethods(eT),
        X.inherits(eR, $, { __CANCEL__: !0 });
      let eA = function (e, t) {
          let r;
          let n = Array((e = e || 10)),
            o = Array(e),
            i = 0,
            a = 0;
          return (
            (t = void 0 !== t ? t : 1e3),
            function (s) {
              let l = Date.now(),
                c = o[a];
              r || (r = l), (n[i] = s), (o[i] = l);
              let u = a,
                d = 0;
              for (; u !== i; ) (d += n[u++]), (u %= e);
              if (((i = (i + 1) % e) === a && (a = (a + 1) % e), l - r < t))
                return;
              let f = c && l - c;
              return f ? Math.round((1e3 * d) / f) : void 0;
            }
          );
        },
        eI = function (e, t) {
          let r,
            n,
            o = 0,
            i = 1e3 / t,
            a = (t, i = Date.now()) => {
              (o = i),
                (r = null),
                n && (clearTimeout(n), (n = null)),
                e.apply(null, t);
            };
          return [
            (...e) => {
              let t = Date.now(),
                s = t - o;
              s >= i
                ? a(e, t)
                : ((r = e),
                  n ||
                    (n = setTimeout(() => {
                      (n = null), a(r);
                    }, i - s)));
            },
            () => r && a(r),
          ];
        },
        eD = (e, t, r = 3) => {
          let n = 0,
            o = eA(50, 250);
          return eI((r) => {
            let i = r.loaded,
              a = r.lengthComputable ? r.total : void 0,
              s = i - n,
              l = o(s);
            (n = i),
              e({
                loaded: i,
                total: a,
                progress: a ? i / a : void 0,
                bytes: s,
                rate: l || void 0,
                estimated: l && a && i <= a ? (a - i) / l : void 0,
                event: r,
                lengthComputable: null != a,
                [t ? "download" : "upload"]: !0,
              });
          }, r);
        },
        eL = (e, t) => {
          let r = null != e;
          return [
            (n) => t[0]({ lengthComputable: r, total: e, loaded: n }),
            t[1],
          ];
        },
        eN =
          (e) =>
          (...t) =>
            X.asap(() => e(...t)),
        ez = eb.hasStandardBrowserEnv
          ? (function () {
              let e;
              let t =
                  eb.navigator &&
                  /(msie|trident)/i.test(eb.navigator.userAgent),
                r = document.createElement("a");
              function n(e) {
                let n = e;
                return (
                  t && (r.setAttribute("href", n), (n = r.href)),
                  r.setAttribute("href", n),
                  {
                    href: r.href,
                    protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                    host: r.host,
                    search: r.search ? r.search.replace(/^\?/, "") : "",
                    hash: r.hash ? r.hash.replace(/^#/, "") : "",
                    hostname: r.hostname,
                    port: r.port,
                    pathname:
                      "/" === r.pathname.charAt(0)
                        ? r.pathname
                        : "/" + r.pathname,
                  }
                );
              }
              return (
                (e = n(window.location.href)),
                function (t) {
                  let r = X.isString(t) ? n(t) : t;
                  return r.protocol === e.protocol && r.host === e.host;
                }
              );
            })()
          : function () {
              return !0;
            },
        eB = eb.hasStandardBrowserEnv
          ? {
              write(e, t, r, n, o, i) {
                let a = [e + "=" + encodeURIComponent(t)];
                X.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()),
                  X.isString(n) && a.push("path=" + n),
                  X.isString(o) && a.push("domain=" + o),
                  !0 === i && a.push("secure"),
                  (document.cookie = a.join("; "));
              },
              read(e) {
                let t = document.cookie.match(
                  RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove(e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : { write() {}, read: () => null, remove() {} };
      function eF(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? t
            ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "")
            : e
          : t;
      }
      let eU = (e) => (e instanceof eT ? { ...e } : e);
      function eW(e, t) {
        t = t || {};
        let r = {};
        function n(e, t, r) {
          return X.isPlainObject(e) && X.isPlainObject(t)
            ? X.merge.call({ caseless: r }, e, t)
            : X.isPlainObject(t)
            ? X.merge({}, t)
            : X.isArray(t)
            ? t.slice()
            : t;
        }
        function o(e, t, r) {
          return X.isUndefined(t)
            ? X.isUndefined(e)
              ? void 0
              : n(void 0, e, r)
            : n(e, t, r);
        }
        function i(e, t) {
          if (!X.isUndefined(t)) return n(void 0, t);
        }
        function a(e, t) {
          return X.isUndefined(t)
            ? X.isUndefined(e)
              ? void 0
              : n(void 0, e)
            : n(void 0, t);
        }
        function s(r, o, i) {
          return i in t ? n(r, o) : i in e ? n(void 0, r) : void 0;
        }
        let l = {
          url: i,
          method: i,
          data: i,
          baseURL: a,
          transformRequest: a,
          transformResponse: a,
          paramsSerializer: a,
          timeout: a,
          timeoutMessage: a,
          withCredentials: a,
          withXSRFToken: a,
          adapter: a,
          responseType: a,
          xsrfCookieName: a,
          xsrfHeaderName: a,
          onUploadProgress: a,
          onDownloadProgress: a,
          decompress: a,
          maxContentLength: a,
          maxBodyLength: a,
          beforeRedirect: a,
          transport: a,
          httpAgent: a,
          httpsAgent: a,
          cancelToken: a,
          socketPath: a,
          responseEncoding: a,
          validateStatus: s,
          headers: (e, t) => o(eU(e), eU(t), !0),
        };
        return (
          X.forEach(Object.keys(Object.assign({}, e, t)), function (n) {
            let i = l[n] || o,
              a = i(e[n], t[n], n);
            (X.isUndefined(a) && i !== s) || (r[n] = a);
          }),
          r
        );
      }
      let eH = (e) => {
          let t;
          let r = eW({}, e),
            {
              data: n,
              withXSRFToken: o,
              xsrfHeaderName: i,
              xsrfCookieName: a,
              headers: s,
              auth: l,
            } = r;
          if (
            ((r.headers = s = eT.from(s)),
            (r.url = es(eF(r.baseURL, r.url), e.params, e.paramsSerializer)),
            l &&
              s.set(
                "Authorization",
                "Basic " +
                  btoa(
                    (l.username || "") +
                      ":" +
                      (l.password
                        ? unescape(encodeURIComponent(l.password))
                        : "")
                  )
              ),
            X.isFormData(n))
          ) {
            if (eb.hasStandardBrowserEnv || eb.hasStandardBrowserWebWorkerEnv)
              s.setContentType(void 0);
            else if (!1 !== (t = s.getContentType())) {
              let [e, ...r] = t
                ? t
                    .split(";")
                    .map((e) => e.trim())
                    .filter(Boolean)
                : [];
              s.setContentType([e || "multipart/form-data", ...r].join("; "));
            }
          }
          if (
            eb.hasStandardBrowserEnv &&
            (o && X.isFunction(o) && (o = o(r)), o || (!1 !== o && ez(r.url)))
          ) {
            let e = i && a && eB.read(a);
            e && s.set(i, e);
          }
          return r;
        },
        eq =
          "undefined" != typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, r) {
              let n, o, i, a, s;
              let l = eH(e),
                c = l.data,
                u = eT.from(l.headers).normalize(),
                {
                  responseType: d,
                  onUploadProgress: f,
                  onDownloadProgress: h,
                } = l;
              function p() {
                a && a(),
                  s && s(),
                  l.cancelToken && l.cancelToken.unsubscribe(n),
                  l.signal && l.signal.removeEventListener("abort", n);
              }
              let g = new XMLHttpRequest();
              function y() {
                if (!g) return;
                let n = eT.from(
                  "getAllResponseHeaders" in g && g.getAllResponseHeaders()
                );
                ej(
                  function (e) {
                    t(e), p();
                  },
                  function (e) {
                    r(e), p();
                  },
                  {
                    data:
                      d && "text" !== d && "json" !== d
                        ? g.response
                        : g.responseText,
                    status: g.status,
                    statusText: g.statusText,
                    headers: n,
                    config: e,
                    request: g,
                  }
                ),
                  (g = null);
              }
              g.open(l.method.toUpperCase(), l.url, !0),
                (g.timeout = l.timeout),
                "onloadend" in g
                  ? (g.onloadend = y)
                  : (g.onreadystatechange = function () {
                      g &&
                        4 === g.readyState &&
                        (0 !== g.status ||
                          (g.responseURL &&
                            0 === g.responseURL.indexOf("file:"))) &&
                        setTimeout(y);
                    }),
                (g.onabort = function () {
                  g &&
                    (r(new $("Request aborted", $.ECONNABORTED, e, g)),
                    (g = null));
                }),
                (g.onerror = function () {
                  r(new $("Network Error", $.ERR_NETWORK, e, g)), (g = null);
                }),
                (g.ontimeout = function () {
                  let t = l.timeout
                      ? "timeout of " + l.timeout + "ms exceeded"
                      : "timeout exceeded",
                    n = l.transitional || ec;
                  l.timeoutErrorMessage && (t = l.timeoutErrorMessage),
                    r(
                      new $(
                        t,
                        n.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED,
                        e,
                        g
                      )
                    ),
                    (g = null);
                }),
                void 0 === c && u.setContentType(null),
                "setRequestHeader" in g &&
                  X.forEach(u.toJSON(), function (e, t) {
                    g.setRequestHeader(t, e);
                  }),
                X.isUndefined(l.withCredentials) ||
                  (g.withCredentials = !!l.withCredentials),
                d && "json" !== d && (g.responseType = l.responseType),
                h && (([i, s] = eD(h, !0)), g.addEventListener("progress", i)),
                f &&
                  g.upload &&
                  (([o, a] = eD(f)),
                  g.upload.addEventListener("progress", o),
                  g.upload.addEventListener("loadend", a)),
                (l.cancelToken || l.signal) &&
                  ((n = (t) => {
                    g &&
                      (r(!t || t.type ? new eR(null, e, g) : t),
                      g.abort(),
                      (g = null));
                  }),
                  l.cancelToken && l.cancelToken.subscribe(n),
                  l.signal &&
                    (l.signal.aborted
                      ? n()
                      : l.signal.addEventListener("abort", n)));
              let m = (function (e) {
                let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || "";
              })(l.url);
              if (m && -1 === eb.protocols.indexOf(m)) {
                r(
                  new $("Unsupported protocol " + m + ":", $.ERR_BAD_REQUEST, e)
                );
                return;
              }
              g.send(c || null);
            });
          },
        eY = (e, t) => {
          let { length: r } = (e = e ? e.filter(Boolean) : []);
          if (t || r) {
            let r,
              n = new AbortController(),
              o = function (e) {
                if (!r) {
                  (r = !0), a();
                  let t = e instanceof Error ? e : this.reason;
                  n.abort(
                    t instanceof $
                      ? t
                      : new eR(t instanceof Error ? t.message : t)
                  );
                }
              },
              i =
                t &&
                setTimeout(() => {
                  (i = null),
                    o(new $(`timeout ${t} of ms exceeded`, $.ETIMEDOUT));
                }, t),
              a = () => {
                e &&
                  (i && clearTimeout(i),
                  (i = null),
                  e.forEach((e) => {
                    e.unsubscribe
                      ? e.unsubscribe(o)
                      : e.removeEventListener("abort", o);
                  }),
                  (e = null));
              };
            e.forEach((e) => e.addEventListener("abort", o));
            let { signal: s } = n;
            return (s.unsubscribe = () => X.asap(a)), s;
          }
        },
        eV = function* (e, t) {
          let r,
            n = e.byteLength;
          if (!t || n < t) {
            yield e;
            return;
          }
          let o = 0;
          for (; o < n; ) (r = o + t), yield e.slice(o, r), (o = r);
        },
        eX = async function* (e, t) {
          for await (let r of e$(e)) yield* eV(r, t);
        },
        e$ = async function* (e) {
          if (e[Symbol.asyncIterator]) {
            yield* e;
            return;
          }
          let t = e.getReader();
          try {
            for (;;) {
              let { done: e, value: r } = await t.read();
              if (e) break;
              yield r;
            }
          } finally {
            await t.cancel();
          }
        },
        eK = (e, t, r, n) => {
          let o;
          let i = eX(e, t),
            a = 0,
            s = (e) => {
              !o && ((o = !0), n && n(e));
            };
          return new ReadableStream(
            {
              async pull(e) {
                try {
                  let { done: t, value: n } = await i.next();
                  if (t) {
                    s(), e.close();
                    return;
                  }
                  let o = n.byteLength;
                  if (r) {
                    let e = (a += o);
                    r(e);
                  }
                  e.enqueue(new Uint8Array(n));
                } catch (e) {
                  throw (s(e), e);
                }
              },
              cancel: (e) => (s(e), i.return()),
            },
            { highWaterMark: 2 }
          );
        },
        eJ =
          "function" == typeof fetch &&
          "function" == typeof Request &&
          "function" == typeof Response,
        eG = eJ && "function" == typeof ReadableStream,
        eQ =
          eJ &&
          ("function" == typeof TextEncoder
            ? ((n = new TextEncoder()), (e) => n.encode(e))
            : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
        eZ = (e, ...t) => {
          try {
            return !!e(...t);
          } catch (e) {
            return !1;
          }
        },
        e0 =
          eG &&
          eZ(() => {
            let e = !1,
              t = new Request(eb.origin, {
                body: new ReadableStream(),
                method: "POST",
                get duplex() {
                  return (e = !0), "half";
                },
              }).headers.has("Content-Type");
            return e && !t;
          }),
        e1 = eG && eZ(() => X.isReadableStream(new Response("").body)),
        e2 = { stream: e1 && ((e) => e.body) };
      eJ &&
        ((a = new Response()),
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
          e2[e] ||
            (e2[e] = X.isFunction(a[e])
              ? (t) => t[e]()
              : (t, r) => {
                  throw new $(
                    `Response type '${e}' is not supported`,
                    $.ERR_NOT_SUPPORT,
                    r
                  );
                });
        }));
      let e5 = async (e) => {
          if (null == e) return 0;
          if (X.isBlob(e)) return e.size;
          if (X.isSpecCompliantForm(e)) {
            let t = new Request(eb.origin, { method: "POST", body: e });
            return (await t.arrayBuffer()).byteLength;
          }
          return X.isArrayBufferView(e) || X.isArrayBuffer(e)
            ? e.byteLength
            : (X.isURLSearchParams(e) && (e += ""), X.isString(e))
            ? (await eQ(e)).byteLength
            : void 0;
        },
        e4 = async (e, t) => {
          let r = X.toFiniteNumber(e.getContentLength());
          return null == r ? e5(t) : r;
        },
        e3 = {
          http: null,
          xhr: eq,
          fetch:
            eJ &&
            (async (e) => {
              let t,
                r,
                {
                  url: n,
                  method: o,
                  data: i,
                  signal: a,
                  cancelToken: s,
                  timeout: l,
                  onDownloadProgress: c,
                  onUploadProgress: u,
                  responseType: d,
                  headers: f,
                  withCredentials: h = "same-origin",
                  fetchOptions: p,
                } = eH(e);
              d = d ? (d + "").toLowerCase() : "text";
              let g = eY([a, s && s.toAbortSignal()], l),
                y =
                  g &&
                  g.unsubscribe &&
                  (() => {
                    g.unsubscribe();
                  });
              try {
                if (
                  u &&
                  e0 &&
                  "get" !== o &&
                  "head" !== o &&
                  0 !== (r = await e4(f, i))
                ) {
                  let e,
                    t = new Request(n, {
                      method: "POST",
                      body: i,
                      duplex: "half",
                    });
                  if (
                    (X.isFormData(i) &&
                      (e = t.headers.get("content-type")) &&
                      f.setContentType(e),
                    t.body)
                  ) {
                    let [e, n] = eL(r, eD(eN(u)));
                    i = eK(t.body, 65536, e, n);
                  }
                }
                X.isString(h) || (h = h ? "include" : "omit");
                let a = "credentials" in Request.prototype;
                t = new Request(n, {
                  ...p,
                  signal: g,
                  method: o.toUpperCase(),
                  headers: f.normalize().toJSON(),
                  body: i,
                  duplex: "half",
                  credentials: a ? h : void 0,
                });
                let s = await fetch(t),
                  l = e1 && ("stream" === d || "response" === d);
                if (e1 && (c || (l && y))) {
                  let e = {};
                  ["status", "statusText", "headers"].forEach((t) => {
                    e[t] = s[t];
                  });
                  let t = X.toFiniteNumber(s.headers.get("content-length")),
                    [r, n] = (c && eL(t, eD(eN(c), !0))) || [];
                  s = new Response(
                    eK(s.body, 65536, r, () => {
                      n && n(), y && y();
                    }),
                    e
                  );
                }
                d = d || "text";
                let m = await e2[X.findKey(e2, d) || "text"](s, e);
                return (
                  !l && y && y(),
                  await new Promise((r, n) => {
                    ej(r, n, {
                      data: m,
                      headers: eT.from(s.headers),
                      status: s.status,
                      statusText: s.statusText,
                      config: e,
                      request: t,
                    });
                  })
                );
              } catch (r) {
                if (
                  (y && y(),
                  r && "TypeError" === r.name && /fetch/i.test(r.message))
                )
                  throw Object.assign(
                    new $("Network Error", $.ERR_NETWORK, e, t),
                    { cause: r.cause || r }
                  );
                throw $.from(r, r && r.code, e, t);
              }
            }),
        };
      X.forEach(e3, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (e) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      let e8 = (e) => `- ${e}`,
        e6 = (e) => X.isFunction(e) || null === e || !1 === e,
        e7 = {
          getAdapter: (e) => {
            let t, r;
            let { length: n } = (e = X.isArray(e) ? e : [e]),
              o = {};
            for (let i = 0; i < n; i++) {
              let n;
              if (
                ((r = t = e[i]),
                !e6(t) && void 0 === (r = e3[(n = String(t)).toLowerCase()]))
              )
                throw new $(`Unknown adapter '${n}'`);
              if (r) break;
              o[n || "#" + i] = r;
            }
            if (!r) {
              let e = Object.entries(o).map(
                ([e, t]) =>
                  `adapter ${e} ` +
                  (!1 === t
                    ? "is not supported by the environment"
                    : "is not available in the build")
              );
              throw new $(
                "There is no suitable adapter to dispatch the request " +
                  (n
                    ? e.length > 1
                      ? "since :\n" + e.map(e8).join("\n")
                      : " " + e8(e[0])
                    : "as no adapter specified"),
                "ERR_NOT_SUPPORT"
              );
            }
            return r;
          },
        };
      function e9(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new eR(null, e);
      }
      function te(e) {
        return (
          e9(e),
          (e.headers = eT.from(e.headers)),
          (e.data = eC.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1),
          e7
            .getAdapter(e.adapter || ew.adapter)(e)
            .then(
              function (t) {
                return (
                  e9(e),
                  (t.data = eC.call(e, e.transformResponse, t)),
                  (t.headers = eT.from(t.headers)),
                  t
                );
              },
              function (t) {
                return (
                  !eM(t) &&
                    (e9(e),
                    t &&
                      t.response &&
                      ((t.response.data = eC.call(
                        e,
                        e.transformResponse,
                        t.response
                      )),
                      (t.response.headers = eT.from(t.response.headers)))),
                  Promise.reject(t)
                );
              }
            )
        );
      }
      let tt = "1.7.7",
        tr = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (e, t) => {
          tr[e] = function (r) {
            return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        }
      );
      let tn = {};
      tr.transitional = function (e, t, r) {
        function n(e, t) {
          return (
            "[Axios v" +
            tt +
            "] Transitional option '" +
            e +
            "'" +
            t +
            (r ? ". " + r : "")
          );
        }
        return (r, o, i) => {
          if (!1 === e)
            throw new $(
              n(o, " has been removed" + (t ? " in " + t : "")),
              $.ERR_DEPRECATED
            );
          return (
            t &&
              !tn[o] &&
              ((tn[o] = !0),
              console.warn(
                n(
                  o,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future"
                )
              )),
            !e || e(r, o, i)
          );
        };
      };
      let to = {
          assertOptions: function (e, t, r) {
            if ("object" != typeof e)
              throw new $("options must be an object", $.ERR_BAD_OPTION_VALUE);
            let n = Object.keys(e),
              o = n.length;
            for (; o-- > 0; ) {
              let i = n[o],
                a = t[i];
              if (a) {
                let t = e[i],
                  r = void 0 === t || a(t, i, e);
                if (!0 !== r)
                  throw new $(
                    "option " + i + " must be " + r,
                    $.ERR_BAD_OPTION_VALUE
                  );
                continue;
              }
              if (!0 !== r)
                throw new $("Unknown option " + i, $.ERR_BAD_OPTION);
            }
          },
          validators: tr,
        },
        ti = to.validators;
      class ta {
        constructor(e) {
          (this.defaults = e),
            (this.interceptors = { request: new el(), response: new el() });
        }
        async request(e, t) {
          try {
            return await this._request(e, t);
          } catch (e) {
            if (e instanceof Error) {
              let t;
              Error.captureStackTrace
                ? Error.captureStackTrace((t = {}))
                : (t = Error());
              let r = t.stack ? t.stack.replace(/^.+\n/, "") : "";
              try {
                e.stack
                  ? r &&
                    !String(e.stack).endsWith(r.replace(/^.+\n.+\n/, "")) &&
                    (e.stack += "\n" + r)
                  : (e.stack = r);
              } catch (e) {}
            }
            throw e;
          }
        }
        _request(e, t) {
          let r, n;
          "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {});
          let {
            transitional: o,
            paramsSerializer: i,
            headers: a,
          } = (t = eW(this.defaults, t));
          void 0 !== o &&
            to.assertOptions(
              o,
              {
                silentJSONParsing: ti.transitional(ti.boolean),
                forcedJSONParsing: ti.transitional(ti.boolean),
                clarifyTimeoutError: ti.transitional(ti.boolean),
              },
              !1
            ),
            null != i &&
              (X.isFunction(i)
                ? (t.paramsSerializer = { serialize: i })
                : to.assertOptions(
                    i,
                    { encode: ti.function, serialize: ti.function },
                    !0
                  )),
            (t.method = (
              t.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let s = a && X.merge(a.common, a[t.method]);
          a &&
            X.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (e) => {
                delete a[e];
              }
            ),
            (t.headers = eT.concat(s, a));
          let l = [],
            c = !0;
          this.interceptors.request.forEach(function (e) {
            ("function" != typeof e.runWhen || !1 !== e.runWhen(t)) &&
              ((c = c && e.synchronous), l.unshift(e.fulfilled, e.rejected));
          });
          let u = [];
          this.interceptors.response.forEach(function (e) {
            u.push(e.fulfilled, e.rejected);
          });
          let d = 0;
          if (!c) {
            let e = [te.bind(this), void 0];
            for (
              e.unshift.apply(e, l),
                e.push.apply(e, u),
                n = e.length,
                r = Promise.resolve(t);
              d < n;

            )
              r = r.then(e[d++], e[d++]);
            return r;
          }
          n = l.length;
          let f = t;
          for (d = 0; d < n; ) {
            let e = l[d++],
              t = l[d++];
            try {
              f = e(f);
            } catch (e) {
              t.call(this, e);
              break;
            }
          }
          try {
            r = te.call(this, f);
          } catch (e) {
            return Promise.reject(e);
          }
          for (d = 0, n = u.length; d < n; ) r = r.then(u[d++], u[d++]);
          return r;
        }
        getUri(e) {
          return es(
            eF((e = eW(this.defaults, e)).baseURL, e.url),
            e.params,
            e.paramsSerializer
          );
        }
      }
      X.forEach(["delete", "get", "head", "options"], function (e) {
        ta.prototype[e] = function (t, r) {
          return this.request(
            eW(r || {}, { method: e, url: t, data: (r || {}).data })
          );
        };
      }),
        X.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (r, n, o) {
              return this.request(
                eW(o || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: r,
                  data: n,
                })
              );
            };
          }
          (ta.prototype[e] = t()), (ta.prototype[e + "Form"] = t(!0));
        });
      class ts {
        constructor(e) {
          let t;
          if ("function" != typeof e)
            throw TypeError("executor must be a function.");
          this.promise = new Promise(function (e) {
            t = e;
          });
          let r = this;
          this.promise.then((e) => {
            if (!r._listeners) return;
            let t = r._listeners.length;
            for (; t-- > 0; ) r._listeners[t](e);
            r._listeners = null;
          }),
            (this.promise.then = (e) => {
              let t;
              let n = new Promise((e) => {
                r.subscribe(e), (t = e);
              }).then(e);
              return (
                (n.cancel = function () {
                  r.unsubscribe(t);
                }),
                n
              );
            }),
            e(function (e, n, o) {
              r.reason || ((r.reason = new eR(e, n, o)), t(r.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          if (this.reason) {
            e(this.reason);
            return;
          }
          this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          let t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
        toAbortSignal() {
          let e = new AbortController(),
            t = (t) => {
              e.abort(t);
            };
          return (
            this.subscribe(t),
            (e.signal.unsubscribe = () => this.unsubscribe(t)),
            e.signal
          );
        }
        static source() {
          let e;
          return {
            token: new ts(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }
      }
      let tl = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(tl).forEach(([e, t]) => {
        tl[t] = e;
      });
      let tc = (function e(t) {
        let r = new ta(t),
          n = l(ta.prototype.request, r);
        return (
          X.extend(n, ta.prototype, r, { allOwnKeys: !0 }),
          X.extend(n, r, null, { allOwnKeys: !0 }),
          (n.create = function (r) {
            return e(eW(t, r));
          }),
          n
        );
      })(ew);
      (tc.Axios = ta),
        (tc.CanceledError = eR),
        (tc.CancelToken = ts),
        (tc.isCancel = eM),
        (tc.VERSION = tt),
        (tc.toFormData = er),
        (tc.AxiosError = $),
        (tc.Cancel = tc.CanceledError),
        (tc.all = function (e) {
          return Promise.all(e);
        }),
        (tc.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (tc.isAxiosError = function (e) {
          return X.isObject(e) && !0 === e.isAxiosError;
        }),
        (tc.mergeConfig = eW),
        (tc.AxiosHeaders = eT),
        (tc.formToJSON = (e) => ev(X.isHTMLForm(e) ? new FormData(e) : e)),
        (tc.getAdapter = e7.getAdapter),
        (tc.HttpStatusCode = tl),
        (tc.default = tc);
      let tu = tc;
    },
    41957: (e, t, r) => {
      "use strict";
      let n;
      function o(e) {
        return (e + 0.5) | 0;
      }
      r.d(t, {
        $: () => td,
        A: () => eI,
        B: () => eA,
        C: () => tc,
        D: () => ek,
        E: () => tO,
        F: () => q,
        G: () => tQ,
        H: () => eu,
        I: () => tq,
        J: () => t1,
        K: () => t0,
        L: () => eU,
        M: () => tH,
        N: () => em,
        O: () => B,
        P: () => ei,
        Q: () => H,
        R: () => tS,
        S: () => eC,
        T: () => ea,
        U: () => eO,
        V: () => tn,
        W: () => eM,
        X: () => ti,
        Y: () => tu,
        Z: () => tp,
        _: () => eB,
        a: () => tk,
        a0: () => t_,
        a1: () => eH,
        a2: () => eq,
        a3: () => e6,
        a4: () => K,
        a5: () => ee,
        a6: () => e7,
        a7: () => er,
        a8: () =>
          function e(t, r, n, o) {
            return new Proxy(
              {
                _cacheable: !1,
                _proxy: t,
                _context: r,
                _subProxy: n,
                _stack: new Set(),
                _descriptors: tT(t, o),
                setContext: (r) => e(t, r, n, o),
                override: (i) => e(t.override(i), r, n, o),
              },
              {
                deleteProperty: (e, r) => (delete e[r], delete t[r], !0),
                get: (t, r, n) =>
                  tR(t, r, () =>
                    (function (t, r, n) {
                      let {
                          _proxy: o,
                          _context: i,
                          _subProxy: a,
                          _descriptors: s,
                        } = t,
                        l = o[r];
                      return (
                        er(l) &&
                          s.isScriptable(r) &&
                          (l = (function (e, t, r, n) {
                            let {
                              _proxy: o,
                              _context: i,
                              _subProxy: a,
                              _stack: s,
                            } = r;
                            if (s.has(e))
                              throw Error(
                                "Recursion detected: " +
                                  Array.from(s).join("->") +
                                  "->" +
                                  e
                              );
                            s.add(e);
                            let l = t(i, a || n);
                            return (
                              s.delete(e),
                              tM(e, l) && (l = tA(o._scopes, o, e, l)),
                              l
                            );
                          })(r, l, t, n)),
                        L(l) &&
                          l.length &&
                          (l = (function (t, r, n, o) {
                            let {
                              _proxy: i,
                              _context: a,
                              _subProxy: s,
                              _descriptors: l,
                            } = n;
                            if (void 0 !== a.index && o(t))
                              return r[a.index % r.length];
                            if (N(r[0])) {
                              let n = r,
                                o = i._scopes.filter((e) => e !== n);
                              for (let c of ((r = []), n)) {
                                let n = tA(o, i, t, c);
                                r.push(e(n, a, s && s[t], l));
                              }
                            }
                            return r;
                          })(r, l, t, s.isIndexable)),
                        tM(r, l) && (l = e(l, i, a && a[r], s)),
                        l
                      );
                    })(t, r, n)
                  ),
                getOwnPropertyDescriptor: (e, r) =>
                  e._descriptors.allKeys
                    ? Reflect.has(t, r)
                      ? { enumerable: !0, configurable: !0 }
                      : void 0
                    : Reflect.getOwnPropertyDescriptor(t, r),
                getPrototypeOf: () => Reflect.getPrototypeOf(t),
                has: (e, r) => Reflect.has(t, r),
                ownKeys: () => Reflect.ownKeys(t),
                set: (e, r, n) => ((t[r] = n), delete e[r], !0),
              }
            );
          },
        a9: () => tE,
        aA: () => t8,
        aB: () => eY,
        aC: () => t6,
        aD: () => tl,
        aE: () => eS,
        aF: () => A,
        aG: () => ew,
        aH: () => ey,
        aI: () => ev,
        aJ: () => eg,
        aK: () => e_,
        aL: () => e8,
        aM: () => eh,
        aN: () => to,
        aO: () => eD,
        aP: () => ej,
        aa: () => tT,
        ab: () => J,
        ac: () => I,
        ad: () => eW,
        ae: () => tZ,
        af: () => ta,
        ag: () => en,
        ah: () => Y,
        ai: () => eo,
        aj: () => eR,
        ak: () => tv,
        al: () => tW,
        am: () => rr,
        an: () => rt,
        ao: () => t5,
        ap: () => t4,
        aq: () => t2,
        ar: () => tf,
        as: () => th,
        at: () => ts,
        au: () => tg,
        av: () => tw,
        aw: () => tx,
        ax: () => re,
        ay: () => eE,
        az: () => t3,
        b: () => L,
        b3: () => ec,
        b4: () => ed,
        b5: () => ef,
        c: () => eZ,
        d: () => tr,
        e: () => eG,
        f: () => Z,
        g: () => z,
        h: () => et,
        i: () => N,
        j: () => tP,
        k: () => D,
        l: () => eN,
        m: () => U,
        n: () => W,
        o: () => e4,
        p: () => eT,
        q: () => eV,
        r: () => eF,
        s: () => ep,
        t: () => ex,
        u: () => ez,
        v: () => F,
        w: () => eX,
        x: () => eb,
        y: () => tN,
        z: () => tJ,
      });
      let i = (e, t, r) => Math.max(Math.min(e, r), t);
      function a(e) {
        return i(o(2.55 * e), 0, 255);
      }
      function s(e) {
        return i(o(255 * e), 0, 255);
      }
      function l(e) {
        return i(o(e / 2.55) / 100, 0, 1);
      }
      function c(e) {
        return i(o(100 * e), 0, 100);
      }
      let u = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          a: 10,
          b: 11,
          c: 12,
          d: 13,
          e: 14,
          f: 15,
        },
        d = [..."0123456789ABCDEF"],
        f = (e) => d[15 & e],
        h = (e) => d[(240 & e) >> 4] + d[15 & e],
        p = (e) => (240 & e) >> 4 == (15 & e),
        g = (e) => p(e.r) && p(e.g) && p(e.b) && p(e.a),
        y = (e, t) => (e < 255 ? t(e) : ""),
        m =
          /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
      function b(e, t, r) {
        let n = t * Math.min(r, 1 - r),
          o = (t, o = (t + e / 30) % 12) =>
            r - n * Math.max(Math.min(o - 3, 9 - o, 1), -1);
        return [o(0), o(8), o(4)];
      }
      function v(e, t, r) {
        let n = (n, o = (n + e / 60) % 6) =>
          r - r * t * Math.max(Math.min(o, 4 - o, 1), 0);
        return [n(5), n(3), n(1)];
      }
      function w(e, t, r) {
        let n;
        let o = b(e, 1, 0.5);
        for (
          t + r > 1 && ((n = 1 / (t + r)), (t *= n), (r *= n)), n = 0;
          n < 3;
          n++
        )
          (o[n] *= 1 - t - r), (o[n] += t);
        return o;
      }
      function x(e) {
        let t, r, n;
        let o = e.r / 255,
          i = e.g / 255,
          a = e.b / 255,
          s = Math.max(o, i, a),
          l = Math.min(o, i, a),
          c = (s + l) / 2;
        return (
          s !== l &&
            ((n = s - l),
            (r = c > 0.5 ? n / (2 - s - l) : n / (s + l)),
            (t =
              60 *
                (t =
                  o === s
                    ? (i - a) / n + (i < a ? 6 : 0)
                    : i === s
                    ? (a - o) / n + 2
                    : (o - i) / n + 4) +
              0.5)),
          [0 | t, r || 0, c]
        );
      }
      function O(e, t, r, n) {
        return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, r, n)).map(s);
      }
      function _(e) {
        return ((e % 360) + 360) % 360;
      }
      let k = {
          x: "dark",
          Z: "light",
          Y: "re",
          X: "blu",
          W: "gr",
          V: "medium",
          U: "slate",
          A: "ee",
          T: "ol",
          S: "or",
          B: "ra",
          C: "lateg",
          D: "ights",
          R: "in",
          Q: "turquois",
          E: "hi",
          P: "ro",
          O: "al",
          N: "le",
          M: "de",
          L: "yello",
          F: "en",
          K: "ch",
          G: "arks",
          H: "ea",
          I: "ightg",
          J: "wh",
        },
        S = {
          OiceXe: "f0f8ff",
          antiquewEte: "faebd7",
          aqua: "ffff",
          aquamarRe: "7fffd4",
          azuY: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "0",
          blanKedOmond: "ffebcd",
          Xe: "ff",
          XeviTet: "8a2be2",
          bPwn: "a52a2a",
          burlywood: "deb887",
          caMtXe: "5f9ea0",
          KartYuse: "7fff00",
          KocTate: "d2691e",
          cSO: "ff7f50",
          cSnflowerXe: "6495ed",
          cSnsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "ffff",
          xXe: "8b",
          xcyan: "8b8b",
          xgTMnPd: "b8860b",
          xWay: "a9a9a9",
          xgYF: "6400",
          xgYy: "a9a9a9",
          xkhaki: "bdb76b",
          xmagFta: "8b008b",
          xTivegYF: "556b2f",
          xSange: "ff8c00",
          xScEd: "9932cc",
          xYd: "8b0000",
          xsOmon: "e9967a",
          xsHgYF: "8fbc8f",
          xUXe: "483d8b",
          xUWay: "2f4f4f",
          xUgYy: "2f4f4f",
          xQe: "ced1",
          xviTet: "9400d3",
          dAppRk: "ff1493",
          dApskyXe: "bfff",
          dimWay: "696969",
          dimgYy: "696969",
          dodgerXe: "1e90ff",
          fiYbrick: "b22222",
          flSOwEte: "fffaf0",
          foYstWAn: "228b22",
          fuKsia: "ff00ff",
          gaRsbSo: "dcdcdc",
          ghostwEte: "f8f8ff",
          gTd: "ffd700",
          gTMnPd: "daa520",
          Way: "808080",
          gYF: "8000",
          gYFLw: "adff2f",
          gYy: "808080",
          honeyMw: "f0fff0",
          hotpRk: "ff69b4",
          RdianYd: "cd5c5c",
          Rdigo: "4b0082",
          ivSy: "fffff0",
          khaki: "f0e68c",
          lavFMr: "e6e6fa",
          lavFMrXsh: "fff0f5",
          lawngYF: "7cfc00",
          NmoncEffon: "fffacd",
          ZXe: "add8e6",
          ZcSO: "f08080",
          Zcyan: "e0ffff",
          ZgTMnPdLw: "fafad2",
          ZWay: "d3d3d3",
          ZgYF: "90ee90",
          ZgYy: "d3d3d3",
          ZpRk: "ffb6c1",
          ZsOmon: "ffa07a",
          ZsHgYF: "20b2aa",
          ZskyXe: "87cefa",
          ZUWay: "778899",
          ZUgYy: "778899",
          ZstAlXe: "b0c4de",
          ZLw: "ffffe0",
          lime: "ff00",
          limegYF: "32cd32",
          lRF: "faf0e6",
          magFta: "ff00ff",
          maPon: "800000",
          VaquamarRe: "66cdaa",
          VXe: "cd",
          VScEd: "ba55d3",
          VpurpN: "9370db",
          VsHgYF: "3cb371",
          VUXe: "7b68ee",
          VsprRggYF: "fa9a",
          VQe: "48d1cc",
          VviTetYd: "c71585",
          midnightXe: "191970",
          mRtcYam: "f5fffa",
          mistyPse: "ffe4e1",
          moccasR: "ffe4b5",
          navajowEte: "ffdead",
          navy: "80",
          Tdlace: "fdf5e6",
          Tive: "808000",
          TivedBb: "6b8e23",
          Sange: "ffa500",
          SangeYd: "ff4500",
          ScEd: "da70d6",
          pOegTMnPd: "eee8aa",
          pOegYF: "98fb98",
          pOeQe: "afeeee",
          pOeviTetYd: "db7093",
          papayawEp: "ffefd5",
          pHKpuff: "ffdab9",
          peru: "cd853f",
          pRk: "ffc0cb",
          plum: "dda0dd",
          powMrXe: "b0e0e6",
          purpN: "800080",
          YbeccapurpN: "663399",
          Yd: "ff0000",
          Psybrown: "bc8f8f",
          PyOXe: "4169e1",
          saddNbPwn: "8b4513",
          sOmon: "fa8072",
          sandybPwn: "f4a460",
          sHgYF: "2e8b57",
          sHshell: "fff5ee",
          siFna: "a0522d",
          silver: "c0c0c0",
          skyXe: "87ceeb",
          UXe: "6a5acd",
          UWay: "708090",
          UgYy: "708090",
          snow: "fffafa",
          sprRggYF: "ff7f",
          stAlXe: "4682b4",
          tan: "d2b48c",
          teO: "8080",
          tEstN: "d8bfd8",
          tomato: "ff6347",
          Qe: "40e0d0",
          viTet: "ee82ee",
          JHt: "f5deb3",
          wEte: "ffffff",
          wEtesmoke: "f5f5f5",
          Lw: "ffff00",
          LwgYF: "9acd32",
        },
        P =
          /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
        E = (e) =>
          e <= 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - 0.055,
        T = (e) =>
          e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
      function C(e, t, r) {
        if (e) {
          let n = x(e);
          (n[t] = Math.max(0, Math.min(n[t] + n[t] * r, 0 === t ? 360 : 1))),
            (n = O(b, n, void 0, void 0)),
            (e.r = n[0]),
            (e.g = n[1]),
            (e.b = n[2]);
        }
      }
      function M(e, t) {
        return e ? Object.assign(t || {}, e) : e;
      }
      function R(e) {
        var t = { r: 0, g: 0, b: 0, a: 255 };
        return (
          Array.isArray(e)
            ? e.length >= 3 &&
              ((t = { r: e[0], g: e[1], b: e[2], a: 255 }),
              e.length > 3 && (t.a = s(e[3])))
            : ((t = M(e, { r: 0, g: 0, b: 0, a: 1 })).a = s(t.a)),
          t
        );
      }
      class j {
        constructor(e) {
          let t;
          if (e instanceof j) return e;
          let r = typeof e;
          "object" === r
            ? (t = R(e))
            : "string" === r &&
              (t =
                (function (e) {
                  var t,
                    r = e.length;
                  return (
                    "#" === e[0] &&
                      (4 === r || 5 === r
                        ? (t = {
                            r: 255 & (17 * u[e[1]]),
                            g: 255 & (17 * u[e[2]]),
                            b: 255 & (17 * u[e[3]]),
                            a: 5 === r ? 17 * u[e[4]] : 255,
                          })
                        : (7 === r || 9 === r) &&
                          (t = {
                            r: (u[e[1]] << 4) | u[e[2]],
                            g: (u[e[3]] << 4) | u[e[4]],
                            b: (u[e[5]] << 4) | u[e[6]],
                            a: 9 === r ? (u[e[7]] << 4) | u[e[8]] : 255,
                          })),
                    t
                  );
                })(e) ||
                (function (e) {
                  n ||
                    ((n = (function () {
                      let e, t, r, n, o;
                      let i = {},
                        a = Object.keys(S),
                        s = Object.keys(k);
                      for (e = 0; e < a.length; e++) {
                        for (t = 0, n = o = a[e]; t < s.length; t++)
                          (r = s[t]), (o = o.replace(r, k[r]));
                        (r = parseInt(S[n], 16)),
                          (i[o] = [(r >> 16) & 255, (r >> 8) & 255, 255 & r]);
                      }
                      return i;
                    })()).transparent = [0, 0, 0, 0]);
                  let t = n[e.toLowerCase()];
                  return (
                    t && {
                      r: t[0],
                      g: t[1],
                      b: t[2],
                      a: 4 === t.length ? t[3] : 255,
                    }
                  );
                })(e) ||
                (function (e) {
                  return "r" === e.charAt(0)
                    ? (function (e) {
                        let t, r, n;
                        let o = P.exec(e),
                          s = 255;
                        if (o) {
                          if (o[7] !== t) {
                            let e = +o[7];
                            s = o[8] ? a(e) : i(255 * e, 0, 255);
                          }
                          return (
                            (t = +o[1]),
                            (r = +o[3]),
                            (n = +o[5]),
                            {
                              r: (t = 255 & (o[2] ? a(t) : i(t, 0, 255))),
                              g: (r = 255 & (o[4] ? a(r) : i(r, 0, 255))),
                              b: (n = 255 & (o[6] ? a(n) : i(n, 0, 255))),
                              a: s,
                            }
                          );
                        }
                      })(e)
                    : (function (e) {
                        let t;
                        let r = m.exec(e),
                          n = 255;
                        if (!r) return;
                        r[5] !== t && (n = r[6] ? a(+r[5]) : s(+r[5]));
                        let o = _(+r[2]),
                          i = +r[3] / 100,
                          l = +r[4] / 100;
                        return {
                          r: (t =
                            "hwb" === r[1]
                              ? O(w, o, i, l)
                              : "hsv" === r[1]
                              ? O(v, o, i, l)
                              : O(b, o, i, l))[0],
                          g: t[1],
                          b: t[2],
                          a: n,
                        };
                      })(e);
                })(e)),
            (this._rgb = t),
            (this._valid = !!t);
        }
        get valid() {
          return this._valid;
        }
        get rgb() {
          var e = M(this._rgb);
          return e && (e.a = l(e.a)), e;
        }
        set rgb(e) {
          this._rgb = R(e);
        }
        rgbString() {
          var e;
          return this._valid
            ? (e = this._rgb) &&
                (e.a < 255
                  ? `rgba(${e.r}, ${e.g}, ${e.b}, ${l(e.a)})`
                  : `rgb(${e.r}, ${e.g}, ${e.b})`)
            : void 0;
        }
        hexString() {
          var e, t;
          return this._valid
            ? ((t = g((e = this._rgb)) ? f : h),
              e ? "#" + t(e.r) + t(e.g) + t(e.b) + y(e.a, t) : void 0)
            : void 0;
        }
        hslString() {
          return this._valid
            ? (function (e) {
                if (!e) return;
                let t = x(e),
                  r = t[0],
                  n = c(t[1]),
                  o = c(t[2]);
                return e.a < 255
                  ? `hsla(${r}, ${n}%, ${o}%, ${l(e.a)})`
                  : `hsl(${r}, ${n}%, ${o}%)`;
              })(this._rgb)
            : void 0;
        }
        mix(e, t) {
          if (e) {
            let r;
            let n = this.rgb,
              o = e.rgb,
              i = t === r ? 0.5 : t,
              a = 2 * i - 1,
              s = n.a - o.a,
              l = ((a * s == -1 ? a : (a + s) / (1 + a * s)) + 1) / 2;
            (r = 1 - l),
              (n.r = 255 & (l * n.r + r * o.r + 0.5)),
              (n.g = 255 & (l * n.g + r * o.g + 0.5)),
              (n.b = 255 & (l * n.b + r * o.b + 0.5)),
              (n.a = i * n.a + (1 - i) * o.a),
              (this.rgb = n);
          }
          return this;
        }
        interpolate(e, t) {
          return (
            e &&
              (this._rgb = (function (e, t, r) {
                let n = T(l(e.r)),
                  o = T(l(e.g)),
                  i = T(l(e.b));
                return {
                  r: s(E(n + r * (T(l(t.r)) - n))),
                  g: s(E(o + r * (T(l(t.g)) - o))),
                  b: s(E(i + r * (T(l(t.b)) - i))),
                  a: e.a + r * (t.a - e.a),
                };
              })(this._rgb, e._rgb, t)),
            this
          );
        }
        clone() {
          return new j(this.rgb);
        }
        alpha(e) {
          return (this._rgb.a = s(e)), this;
        }
        clearer(e) {
          let t = this._rgb;
          return (t.a *= 1 - e), this;
        }
        greyscale() {
          let e = this._rgb,
            t = o(0.3 * e.r + 0.59 * e.g + 0.11 * e.b);
          return (e.r = e.g = e.b = t), this;
        }
        opaquer(e) {
          let t = this._rgb;
          return (t.a *= 1 + e), this;
        }
        negate() {
          let e = this._rgb;
          return (e.r = 255 - e.r), (e.g = 255 - e.g), (e.b = 255 - e.b), this;
        }
        lighten(e) {
          return C(this._rgb, 2, e), this;
        }
        darken(e) {
          return C(this._rgb, 2, -e), this;
        }
        saturate(e) {
          return C(this._rgb, 1, e), this;
        }
        desaturate(e) {
          return C(this._rgb, 1, -e), this;
        }
        rotate(e) {
          var t, r;
          return (
            ((r = x((t = this._rgb)))[0] = _(r[0] + e)),
            (r = O(b, r, void 0, void 0)),
            (t.r = r[0]),
            (t.g = r[1]),
            (t.b = r[2]),
            this
          );
        }
      }
      function A() {}
      let I = (() => {
        let e = 0;
        return () => e++;
      })();
      function D(e) {
        return null == e;
      }
      function L(e) {
        if (Array.isArray && Array.isArray(e)) return !0;
        let t = Object.prototype.toString.call(e);
        return "[object" === t.slice(0, 7) && "Array]" === t.slice(-6);
      }
      function N(e) {
        return (
          null !== e && "[object Object]" === Object.prototype.toString.call(e)
        );
      }
      function z(e) {
        return ("number" == typeof e || e instanceof Number) && isFinite(+e);
      }
      function B(e, t) {
        return z(e) ? e : t;
      }
      function F(e, t) {
        return void 0 === e ? t : e;
      }
      let U = (e, t) =>
          "string" == typeof e && e.endsWith("%")
            ? parseFloat(e) / 100
            : +e / t,
        W = (e, t) =>
          "string" == typeof e && e.endsWith("%")
            ? (parseFloat(e) / 100) * t
            : +e;
      function H(e, t, r) {
        if (e && "function" == typeof e.call) return e.apply(r, t);
      }
      function q(e, t, r, n) {
        let o, i, a;
        if (L(e)) {
          if (((i = e.length), n))
            for (o = i - 1; o >= 0; o--) t.call(r, e[o], o);
          else for (o = 0; o < i; o++) t.call(r, e[o], o);
        } else if (N(e))
          for (o = 0, i = (a = Object.keys(e)).length; o < i; o++)
            t.call(r, e[a[o]], a[o]);
      }
      function Y(e, t) {
        let r, n, o, i;
        if (!e || !t || e.length !== t.length) return !1;
        for (r = 0, n = e.length; r < n; ++r)
          if (
            ((o = e[r]),
            (i = t[r]),
            o.datasetIndex !== i.datasetIndex || o.index !== i.index)
          )
            return !1;
        return !0;
      }
      function V(e) {
        if (L(e)) return e.map(V);
        if (N(e)) {
          let t = Object.create(null),
            r = Object.keys(e),
            n = r.length,
            o = 0;
          for (; o < n; ++o) t[r[o]] = V(e[r[o]]);
          return t;
        }
        return e;
      }
      function X(e) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(e);
      }
      function $(e, t, r, n) {
        if (!X(e)) return;
        let o = t[e],
          i = r[e];
        N(o) && N(i) ? K(o, i, n) : (t[e] = V(i));
      }
      function K(e, t, r) {
        let n;
        let o = L(t) ? t : [t],
          i = o.length;
        if (!N(e)) return e;
        let a = (r = r || {}).merger || $;
        for (let t = 0; t < i; ++t) {
          if (!N((n = o[t]))) continue;
          let i = Object.keys(n);
          for (let t = 0, o = i.length; t < o; ++t) a(i[t], e, n, r);
        }
        return e;
      }
      function J(e, t) {
        return K(e, t, { merger: G });
      }
      function G(e, t, r) {
        if (!X(e)) return;
        let n = t[e],
          o = r[e];
        N(n) && N(o)
          ? J(n, o)
          : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = V(o));
      }
      let Q = { "": (e) => e, x: (e) => e.x, y: (e) => e.y };
      function Z(e, t) {
        return (
          Q[t] ||
          (Q[t] = (function (e) {
            let t = (function (e) {
              let t = e.split("."),
                r = [],
                n = "";
              for (let e of t)
                (n += e).endsWith("\\")
                  ? (n = n.slice(0, -1) + ".")
                  : (r.push(n), (n = ""));
              return r;
            })(e);
            return (e) => {
              for (let r of t) {
                if ("" === r) break;
                e = e && e[r];
              }
              return e;
            };
          })(t))
        )(e);
      }
      function ee(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      let et = (e) => void 0 !== e,
        er = (e) => "function" == typeof e,
        en = (e, t) => {
          if (e.size !== t.size) return !1;
          for (let r of e) if (!t.has(r)) return !1;
          return !0;
        };
      function eo(e) {
        return (
          "mouseup" === e.type || "click" === e.type || "contextmenu" === e.type
        );
      }
      let ei = Math.PI,
        ea = 2 * ei,
        es = ea + ei,
        el = Number.POSITIVE_INFINITY,
        ec = ei / 180,
        eu = ei / 2,
        ed = ei / 4,
        ef = (2 * ei) / 3,
        eh = Math.log10,
        ep = Math.sign;
      function eg(e, t, r) {
        return Math.abs(e - t) < r;
      }
      function ey(e) {
        let t = Math.round(e),
          r = Math.pow(10, Math.floor(eh((e = eg(e, t, e / 1e3) ? t : e)))),
          n = e / r;
        return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * r;
      }
      function em(e) {
        let t;
        let r = [],
          n = Math.sqrt(e);
        for (t = 1; t < n; t++) e % t == 0 && (r.push(t), r.push(e / t));
        return n === (0 | n) && r.push(n), r.sort((e, t) => e - t).pop(), r;
      }
      function eb(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      }
      function ev(e, t) {
        let r = Math.round(e);
        return r - t <= e && r + t >= e;
      }
      function ew(e, t, r) {
        let n, o, i;
        for (n = 0, o = e.length; n < o; n++)
          isNaN((i = e[n][r])) ||
            ((t.min = Math.min(t.min, i)), (t.max = Math.max(t.max, i)));
      }
      function ex(e) {
        return (ei / 180) * e;
      }
      function eO(e) {
        return (180 / ei) * e;
      }
      function e_(e) {
        if (!z(e)) return;
        let t = 1,
          r = 0;
        for (; Math.round(e * t) / t !== e; ) (t *= 10), r++;
        return r;
      }
      function ek(e, t) {
        let r = t.x - e.x,
          n = t.y - e.y,
          o = Math.sqrt(r * r + n * n),
          i = Math.atan2(n, r);
        return i < -0.5 * ei && (i += ea), { angle: i, distance: o };
      }
      function eS(e, t) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
      }
      function eP(e, t) {
        return ((e - t + es) % ea) - ei;
      }
      function eE(e) {
        return ((e % ea) + ea) % ea;
      }
      function eT(e, t, r, n) {
        let o = eE(e),
          i = eE(t),
          a = eE(r),
          s = eE(i - o),
          l = eE(a - o),
          c = eE(o - i),
          u = eE(o - a);
        return o === i || o === a || (n && i === a) || (s > l && c < u);
      }
      function eC(e, t, r) {
        return Math.max(t, Math.min(r, e));
      }
      function eM(e) {
        return eC(e, -32768, 32767);
      }
      function eR(e, t, r, n = 1e-6) {
        return e >= Math.min(t, r) - n && e <= Math.max(t, r) + n;
      }
      function ej(e, t, r) {
        let n;
        r = r || ((r) => e[r] < t);
        let o = e.length - 1,
          i = 0;
        for (; o - i > 1; ) r((n = (i + o) >> 1)) ? (i = n) : (o = n);
        return { lo: i, hi: o };
      }
      let eA = (e, t, r, n) =>
          ej(
            e,
            r,
            n
              ? (n) => {
                  let o = e[n][t];
                  return o < r || (o === r && e[n + 1][t] === r);
                }
              : (n) => e[n][t] < r
          ),
        eI = (e, t, r) => ej(e, r, (n) => e[n][t] >= r);
      function eD(e, t, r) {
        let n = 0,
          o = e.length;
        for (; n < o && e[n] < t; ) n++;
        for (; o > n && e[o - 1] > r; ) o--;
        return n > 0 || o < e.length ? e.slice(n, o) : e;
      }
      let eL = ["push", "pop", "shift", "splice", "unshift"];
      function eN(e, t) {
        if (e._chartjs) {
          e._chartjs.listeners.push(t);
          return;
        }
        Object.defineProperty(e, "_chartjs", {
          configurable: !0,
          enumerable: !1,
          value: { listeners: [t] },
        }),
          eL.forEach((t) => {
            let r = "_onData" + ee(t),
              n = e[t];
            Object.defineProperty(e, t, {
              configurable: !0,
              enumerable: !1,
              value(...t) {
                let o = n.apply(this, t);
                return (
                  e._chartjs.listeners.forEach((e) => {
                    "function" == typeof e[r] && e[r](...t);
                  }),
                  o
                );
              },
            });
          });
      }
      function ez(e, t) {
        let r = e._chartjs;
        if (!r) return;
        let n = r.listeners,
          o = n.indexOf(t);
        -1 !== o && n.splice(o, 1),
          n.length > 0 ||
            (eL.forEach((t) => {
              delete e[t];
            }),
            delete e._chartjs);
      }
      function eB(e) {
        let t = new Set(e);
        return t.size === e.length ? e : Array.from(t);
      }
      let eF =
        "undefined" == typeof window
          ? function (e) {
              return e();
            }
          : window.requestAnimationFrame;
      function eU(e, t) {
        let r = [],
          n = !1;
        return function (...o) {
          (r = o),
            n ||
              ((n = !0),
              eF.call(window, () => {
                (n = !1), e.apply(t, r);
              }));
        };
      }
      function eW(e, t) {
        let r;
        return function (...n) {
          return (
            t ? (clearTimeout(r), (r = setTimeout(e, t, n))) : e.apply(this, n),
            t
          );
        };
      }
      let eH = (e) =>
          "start" === e ? "left" : "end" === e ? "right" : "center",
        eq = (e, t, r) => ("start" === e ? t : "end" === e ? r : (t + r) / 2),
        eY = (e, t, r, n) =>
          e === (n ? "left" : "right") ? r : "center" === e ? (t + r) / 2 : t;
      function eV(e, t, r) {
        let n = t.length,
          o = 0,
          i = n;
        if (e._sorted) {
          let { iScale: a, _parsed: s } = e,
            l = a.axis,
            {
              min: c,
              max: u,
              minDefined: d,
              maxDefined: f,
            } = a.getUserBounds();
          d &&
            (o = eC(
              Math.min(
                eA(s, l, c).lo,
                r ? n : eA(t, l, a.getPixelForValue(c)).lo
              ),
              0,
              n - 1
            )),
            (i = f
              ? eC(
                  Math.max(
                    eA(s, a.axis, u, !0).hi + 1,
                    r ? 0 : eA(t, l, a.getPixelForValue(u), !0).hi + 1
                  ),
                  o,
                  n
                ) - o
              : n - o);
        }
        return { start: o, count: i };
      }
      function eX(e) {
        let { xScale: t, yScale: r, _scaleRanges: n } = e,
          o = { xmin: t.min, xmax: t.max, ymin: r.min, ymax: r.max };
        if (!n) return (e._scaleRanges = o), !0;
        let i =
          n.xmin !== t.min ||
          n.xmax !== t.max ||
          n.ymin !== r.min ||
          n.ymax !== r.max;
        return Object.assign(n, o), i;
      }
      let e$ = (e) => 0 === e || 1 === e,
        eK = (e, t, r) =>
          -(Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * ea) / r)),
        eJ = (e, t, r) =>
          Math.pow(2, -10 * e) * Math.sin(((e - t) * ea) / r) + 1,
        eG = {
          linear: (e) => e,
          easeInQuad: (e) => e * e,
          easeOutQuad: (e) => -e * (e - 2),
          easeInOutQuad: (e) =>
            (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
          easeInCubic: (e) => e * e * e,
          easeOutCubic: (e) => (e -= 1) * e * e + 1,
          easeInOutCubic: (e) =>
            (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
          easeInQuart: (e) => e * e * e * e,
          easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
          easeInOutQuart: (e) =>
            (e /= 0.5) < 1
              ? 0.5 * e * e * e * e
              : -0.5 * ((e -= 2) * e * e * e - 2),
          easeInQuint: (e) => e * e * e * e * e,
          easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
          easeInOutQuint: (e) =>
            (e /= 0.5) < 1
              ? 0.5 * e * e * e * e * e
              : 0.5 * ((e -= 2) * e * e * e * e + 2),
          easeInSine: (e) => -Math.cos(e * eu) + 1,
          easeOutSine: (e) => Math.sin(e * eu),
          easeInOutSine: (e) => -0.5 * (Math.cos(ei * e) - 1),
          easeInExpo: (e) => (0 === e ? 0 : Math.pow(2, 10 * (e - 1))),
          easeOutExpo: (e) => (1 === e ? 1 : -Math.pow(2, -10 * e) + 1),
          easeInOutExpo: (e) =>
            e$(e)
              ? e
              : e < 0.5
              ? 0.5 * Math.pow(2, 10 * (2 * e - 1))
              : 0.5 * (-Math.pow(2, -10 * (2 * e - 1)) + 2),
          easeInCirc: (e) => (e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)),
          easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
          easeInOutCirc: (e) =>
            (e /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - e * e) - 1)
              : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
          easeInElastic: (e) => (e$(e) ? e : eK(e, 0.075, 0.3)),
          easeOutElastic: (e) => (e$(e) ? e : eJ(e, 0.075, 0.3)),
          easeInOutElastic: (e) =>
            e$(e)
              ? e
              : e < 0.5
              ? 0.5 * eK(2 * e, 0.1125, 0.45)
              : 0.5 + 0.5 * eJ(2 * e - 1, 0.1125, 0.45),
          easeInBack: (e) => e * e * (2.70158 * e - 1.70158),
          easeOutBack: (e) => (e -= 1) * e * (2.70158 * e + 1.70158) + 1,
          easeInOutBack(e) {
            let t = 1.70158;
            return (e /= 0.5) < 1
              ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
              : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
          },
          easeInBounce: (e) => 1 - eG.easeOutBounce(1 - e),
          easeOutBounce: (e) =>
            e < 0.36363636363636365
              ? 7.5625 * e * e
              : e < 0.7272727272727273
              ? 7.5625 * (e -= 0.5454545454545454) * e + 0.75
              : e < 0.9090909090909091
              ? 7.5625 * (e -= 0.8181818181818182) * e + 0.9375
              : 7.5625 * (e -= 0.9545454545454546) * e + 0.984375,
          easeInOutBounce: (e) =>
            e < 0.5
              ? 0.5 * eG.easeInBounce(2 * e)
              : 0.5 * eG.easeOutBounce(2 * e - 1) + 0.5,
        };
      function eQ(e) {
        if (e && "object" == typeof e) {
          let t = e.toString();
          return (
            "[object CanvasPattern]" === t || "[object CanvasGradient]" === t
          );
        }
        return !1;
      }
      function eZ(e) {
        return eQ(e) ? e : new j(e);
      }
      function e0(e) {
        return eQ(e) ? e : new j(e).saturate(0.5).darken(0.1).hexString();
      }
      let e1 = ["x", "y", "borderWidth", "radius", "tension"],
        e2 = ["color", "borderColor", "backgroundColor"],
        e5 = new Map();
      function e4(e, t, r) {
        return (function (e, t) {
          let r = e + JSON.stringify((t = t || {})),
            n = e5.get(r);
          return n || ((n = new Intl.NumberFormat(e, t)), e5.set(r, n)), n;
        })(t, r).format(e);
      }
      let e3 = {
        values: (e) => (L(e) ? e : "" + e),
        numeric(e, t, r) {
          let n;
          if (0 === e) return "0";
          let o = this.chart.options.locale,
            i = e;
          if (r.length > 1) {
            let t;
            let o = Math.max(
              Math.abs(r[0].value),
              Math.abs(r[r.length - 1].value)
            );
            (o < 1e-4 || o > 1e15) && (n = "scientific"),
              Math.abs(
                (t =
                  r.length > 3
                    ? r[2].value - r[1].value
                    : r[1].value - r[0].value)
              ) >= 1 &&
                e !== Math.floor(e) &&
                (t = e - Math.floor(e)),
              (i = t);
          }
          let a = eh(Math.abs(i)),
            s = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0),
            l = {
              notation: n,
              minimumFractionDigits: s,
              maximumFractionDigits: s,
            };
          return Object.assign(l, this.options.ticks.format), e4(e, o, l);
        },
        logarithmic(e, t, r) {
          return 0 === e
            ? "0"
            : [1, 2, 3, 5, 10, 15].includes(
                r[t].significand || e / Math.pow(10, Math.floor(eh(e)))
              ) || t > 0.8 * r.length
            ? e3.numeric.call(this, e, t, r)
            : "";
        },
      };
      var e8 = { formatters: e3 };
      let e6 = Object.create(null),
        e7 = Object.create(null);
      function e9(e, t) {
        if (!t) return e;
        let r = t.split(".");
        for (let t = 0, n = r.length; t < n; ++t) {
          let n = r[t];
          e = e[n] || (e[n] = Object.create(null));
        }
        return e;
      }
      function te(e, t, r) {
        return "string" == typeof t ? K(e9(e, t), r) : K(e9(e, ""), t);
      }
      class tt {
        constructor(e, t) {
          (this.animation = void 0),
            (this.backgroundColor = "rgba(0,0,0,0.1)"),
            (this.borderColor = "rgba(0,0,0,0.1)"),
            (this.color = "#666"),
            (this.datasets = {}),
            (this.devicePixelRatio = (e) =>
              e.chart.platform.getDevicePixelRatio()),
            (this.elements = {}),
            (this.events = [
              "mousemove",
              "mouseout",
              "click",
              "touchstart",
              "touchmove",
            ]),
            (this.font = {
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              size: 12,
              style: "normal",
              lineHeight: 1.2,
              weight: null,
            }),
            (this.hover = {}),
            (this.hoverBackgroundColor = (e, t) => e0(t.backgroundColor)),
            (this.hoverBorderColor = (e, t) => e0(t.borderColor)),
            (this.hoverColor = (e, t) => e0(t.color)),
            (this.indexAxis = "x"),
            (this.interaction = {
              mode: "nearest",
              intersect: !0,
              includeInvisible: !1,
            }),
            (this.maintainAspectRatio = !0),
            (this.onHover = null),
            (this.onClick = null),
            (this.parsing = !0),
            (this.plugins = {}),
            (this.responsive = !0),
            (this.scale = void 0),
            (this.scales = {}),
            (this.showLine = !0),
            (this.drawActiveElementsOnTop = !0),
            this.describe(e),
            this.apply(t);
        }
        set(e, t) {
          return te(this, e, t);
        }
        get(e) {
          return e9(this, e);
        }
        describe(e, t) {
          return te(e7, e, t);
        }
        override(e, t) {
          return te(e6, e, t);
        }
        route(e, t, r, n) {
          let o = e9(this, e),
            i = e9(this, r),
            a = "_" + t;
          Object.defineProperties(o, {
            [a]: { value: o[t], writable: !0 },
            [t]: {
              enumerable: !0,
              get() {
                let e = this[a],
                  t = i[n];
                return N(e) ? Object.assign({}, t, e) : F(e, t);
              },
              set(e) {
                this[a] = e;
              },
            },
          });
        }
        apply(e) {
          e.forEach((e) => e(this));
        }
      }
      var tr = new tt(
        {
          _scriptable: (e) => !e.startsWith("on"),
          _indexable: (e) => "events" !== e,
          hover: { _fallback: "interaction" },
          interaction: { _scriptable: !1, _indexable: !1 },
        },
        [
          function (e) {
            e.set("animation", {
              delay: void 0,
              duration: 1e3,
              easing: "easeOutQuart",
              fn: void 0,
              from: void 0,
              loop: void 0,
              to: void 0,
              type: void 0,
            }),
              e.describe("animation", {
                _fallback: !1,
                _indexable: !1,
                _scriptable: (e) =>
                  "onProgress" !== e && "onComplete" !== e && "fn" !== e,
              }),
              e.set("animations", {
                colors: { type: "color", properties: e2 },
                numbers: { type: "number", properties: e1 },
              }),
              e.describe("animations", { _fallback: "animation" }),
              e.set("transitions", {
                active: { animation: { duration: 400 } },
                resize: { animation: { duration: 0 } },
                show: {
                  animations: {
                    colors: { from: "transparent" },
                    visible: { type: "boolean", duration: 0 },
                  },
                },
                hide: {
                  animations: {
                    colors: { to: "transparent" },
                    visible: {
                      type: "boolean",
                      easing: "linear",
                      fn: (e) => 0 | e,
                    },
                  },
                },
              });
          },
          function (e) {
            e.set("layout", {
              autoPadding: !0,
              padding: { top: 0, right: 0, bottom: 0, left: 0 },
            });
          },
          function (e) {
            e.set("scale", {
              display: !0,
              offset: !1,
              reverse: !1,
              beginAtZero: !1,
              bounds: "ticks",
              clip: !0,
              grace: 0,
              grid: {
                display: !0,
                lineWidth: 1,
                drawOnChartArea: !0,
                drawTicks: !0,
                tickLength: 8,
                tickWidth: (e, t) => t.lineWidth,
                tickColor: (e, t) => t.color,
                offset: !1,
              },
              border: { display: !0, dash: [], dashOffset: 0, width: 1 },
              title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
              ticks: {
                minRotation: 0,
                maxRotation: 50,
                mirror: !1,
                textStrokeWidth: 0,
                textStrokeColor: "",
                padding: 3,
                display: !0,
                autoSkip: !0,
                autoSkipPadding: 3,
                labelOffset: 0,
                callback: e8.formatters.values,
                minor: {},
                major: {},
                align: "center",
                crossAlign: "near",
                showLabelBackdrop: !1,
                backdropColor: "rgba(255, 255, 255, 0.75)",
                backdropPadding: 2,
              },
            }),
              e.route("scale.ticks", "color", "", "color"),
              e.route("scale.grid", "color", "", "borderColor"),
              e.route("scale.border", "color", "", "borderColor"),
              e.route("scale.title", "color", "", "color"),
              e.describe("scale", {
                _fallback: !1,
                _scriptable: (e) =>
                  !e.startsWith("before") &&
                  !e.startsWith("after") &&
                  "callback" !== e &&
                  "parser" !== e,
                _indexable: (e) =>
                  "borderDash" !== e && "tickBorderDash" !== e && "dash" !== e,
              }),
              e.describe("scales", { _fallback: "scale" }),
              e.describe("scale.ticks", {
                _scriptable: (e) => "backdropPadding" !== e && "callback" !== e,
                _indexable: (e) => "backdropPadding" !== e,
              });
          },
        ]
      );
      function tn(e, t, r, n, o) {
        let i = t[o];
        return (
          i || ((i = t[o] = e.measureText(o).width), r.push(o)),
          i > n && (n = i),
          n
        );
      }
      function to(e, t, r, n) {
        let o, i, a, s, l;
        let c = ((n = n || {}).data = n.data || {}),
          u = (n.garbageCollect = n.garbageCollect || []);
        n.font !== t &&
          ((c = n.data = {}), (u = n.garbageCollect = []), (n.font = t)),
          e.save(),
          (e.font = t);
        let d = 0,
          f = r.length;
        for (o = 0; o < f; o++)
          if (null == (s = r[o]) || L(s)) {
            if (L(s))
              for (i = 0, a = s.length; i < a; i++)
                null == (l = s[i]) || L(l) || (d = tn(e, c, u, d, l));
          } else d = tn(e, c, u, d, s);
        e.restore();
        let h = u.length / 2;
        if (h > r.length) {
          for (o = 0; o < h; o++) delete c[u[o]];
          u.splice(0, h);
        }
        return d;
      }
      function ti(e, t, r) {
        let n = e.currentDevicePixelRatio,
          o = 0 !== r ? Math.max(r / 2, 0.5) : 0;
        return Math.round((t - o) * n) / n + o;
      }
      function ta(e, t) {
        (t || e) &&
          ((t = t || e.getContext("2d")).save(),
          t.resetTransform(),
          t.clearRect(0, 0, e.width, e.height),
          t.restore());
      }
      function ts(e, t, r, n) {
        tl(e, t, r, n, null);
      }
      function tl(e, t, r, n, o) {
        let i, a, s, l, c, u, d, f;
        let h = t.pointStyle,
          p = t.rotation,
          g = t.radius,
          y = (p || 0) * ec;
        if (
          h &&
          "object" == typeof h &&
          ("[object HTMLImageElement]" === (i = h.toString()) ||
            "[object HTMLCanvasElement]" === i)
        ) {
          e.save(),
            e.translate(r, n),
            e.rotate(y),
            e.drawImage(h, -h.width / 2, -h.height / 2, h.width, h.height),
            e.restore();
          return;
        }
        if (!isNaN(g) && !(g <= 0)) {
          switch ((e.beginPath(), h)) {
            default:
              o ? e.ellipse(r, n, o / 2, g, 0, 0, ea) : e.arc(r, n, g, 0, ea),
                e.closePath();
              break;
            case "triangle":
              (u = o ? o / 2 : g),
                e.moveTo(r + Math.sin(y) * u, n - Math.cos(y) * g),
                (y += ef),
                e.lineTo(r + Math.sin(y) * u, n - Math.cos(y) * g),
                (y += ef),
                e.lineTo(r + Math.sin(y) * u, n - Math.cos(y) * g),
                e.closePath();
              break;
            case "rectRounded":
              (c = 0.516 * g),
                (a = Math.cos(y + ed) * (l = g - c)),
                (d = Math.cos(y + ed) * (o ? o / 2 - c : l)),
                (s = Math.sin(y + ed) * l),
                (f = Math.sin(y + ed) * (o ? o / 2 - c : l)),
                e.arc(r - d, n - s, c, y - ei, y - eu),
                e.arc(r + f, n - a, c, y - eu, y),
                e.arc(r + d, n + s, c, y, y + eu),
                e.arc(r - f, n + a, c, y + eu, y + ei),
                e.closePath();
              break;
            case "rect":
              if (!p) {
                (l = Math.SQRT1_2 * g),
                  (u = o ? o / 2 : l),
                  e.rect(r - u, n - l, 2 * u, 2 * l);
                break;
              }
              y += ed;
            case "rectRot":
              (d = Math.cos(y) * (o ? o / 2 : g)),
                (a = Math.cos(y) * g),
                (s = Math.sin(y) * g),
                (f = Math.sin(y) * (o ? o / 2 : g)),
                e.moveTo(r - d, n - s),
                e.lineTo(r + f, n - a),
                e.lineTo(r + d, n + s),
                e.lineTo(r - f, n + a),
                e.closePath();
              break;
            case "crossRot":
              y += ed;
            case "cross":
              (d = Math.cos(y) * (o ? o / 2 : g)),
                (a = Math.cos(y) * g),
                (s = Math.sin(y) * g),
                (f = Math.sin(y) * (o ? o / 2 : g)),
                e.moveTo(r - d, n - s),
                e.lineTo(r + d, n + s),
                e.moveTo(r + f, n - a),
                e.lineTo(r - f, n + a);
              break;
            case "star":
              (d = Math.cos(y) * (o ? o / 2 : g)),
                (a = Math.cos(y) * g),
                (s = Math.sin(y) * g),
                (f = Math.sin(y) * (o ? o / 2 : g)),
                e.moveTo(r - d, n - s),
                e.lineTo(r + d, n + s),
                e.moveTo(r + f, n - a),
                e.lineTo(r - f, n + a),
                (y += ed),
                (d = Math.cos(y) * (o ? o / 2 : g)),
                (a = Math.cos(y) * g),
                (s = Math.sin(y) * g),
                (f = Math.sin(y) * (o ? o / 2 : g)),
                e.moveTo(r - d, n - s),
                e.lineTo(r + d, n + s),
                e.moveTo(r + f, n - a),
                e.lineTo(r - f, n + a);
              break;
            case "line":
              (a = o ? o / 2 : Math.cos(y) * g),
                (s = Math.sin(y) * g),
                e.moveTo(r - a, n - s),
                e.lineTo(r + a, n + s);
              break;
            case "dash":
              e.moveTo(r, n),
                e.lineTo(
                  r + Math.cos(y) * (o ? o / 2 : g),
                  n + Math.sin(y) * g
                );
              break;
            case !1:
              e.closePath();
          }
          e.fill(), t.borderWidth > 0 && e.stroke();
        }
      }
      function tc(e, t, r) {
        return (
          (r = r || 0.5),
          !t ||
            (e &&
              e.x > t.left - r &&
              e.x < t.right + r &&
              e.y > t.top - r &&
              e.y < t.bottom + r)
        );
      }
      function tu(e, t) {
        e.save(),
          e.beginPath(),
          e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
          e.clip();
      }
      function td(e) {
        e.restore();
      }
      function tf(e, t, r, n, o) {
        if (!t) return e.lineTo(r.x, r.y);
        if ("middle" === o) {
          let n = (t.x + r.x) / 2;
          e.lineTo(n, t.y), e.lineTo(n, r.y);
        } else ("after" === o) != !!n ? e.lineTo(t.x, r.y) : e.lineTo(r.x, t.y);
        e.lineTo(r.x, r.y);
      }
      function th(e, t, r, n) {
        if (!t) return e.lineTo(r.x, r.y);
        e.bezierCurveTo(
          n ? t.cp1x : t.cp2x,
          n ? t.cp1y : t.cp2y,
          n ? r.cp2x : r.cp1x,
          n ? r.cp2y : r.cp1y,
          r.x,
          r.y
        );
      }
      function tp(e, t, r, n, o, i = {}) {
        let a, s;
        let l = L(t) ? t : [t],
          c = i.strokeWidth > 0 && "" !== i.strokeColor;
        for (
          e.save(),
            e.font = o.string,
            i.translation && e.translate(i.translation[0], i.translation[1]),
            D(i.rotation) || e.rotate(i.rotation),
            i.color && (e.fillStyle = i.color),
            i.textAlign && (e.textAlign = i.textAlign),
            i.textBaseline && (e.textBaseline = i.textBaseline),
            a = 0;
          a < l.length;
          ++a
        )
          (s = l[a]),
            i.backdrop &&
              (function (e, t) {
                let r = e.fillStyle;
                (e.fillStyle = t.color),
                  e.fillRect(t.left, t.top, t.width, t.height),
                  (e.fillStyle = r);
              })(e, i.backdrop),
            c &&
              (i.strokeColor && (e.strokeStyle = i.strokeColor),
              D(i.strokeWidth) || (e.lineWidth = i.strokeWidth),
              e.strokeText(s, r, n, i.maxWidth)),
            e.fillText(s, r, n, i.maxWidth),
            (function (e, t, r, n, o) {
              if (o.strikethrough || o.underline) {
                let i = e.measureText(n),
                  a = t - i.actualBoundingBoxLeft,
                  s = t + i.actualBoundingBoxRight,
                  l = r - i.actualBoundingBoxAscent,
                  c = r + i.actualBoundingBoxDescent,
                  u = o.strikethrough ? (l + c) / 2 : c;
                (e.strokeStyle = e.fillStyle),
                  e.beginPath(),
                  (e.lineWidth = o.decorationWidth || 2),
                  e.moveTo(a, u),
                  e.lineTo(s, u),
                  e.stroke();
              }
            })(e, r, n, s, i),
            (n += Number(o.lineHeight));
        e.restore();
      }
      function tg(e, t) {
        let { x: r, y: n, w: o, h: i, radius: a } = t;
        e.arc(r + a.topLeft, n + a.topLeft, a.topLeft, 1.5 * ei, ei, !0),
          e.lineTo(r, n + i - a.bottomLeft),
          e.arc(
            r + a.bottomLeft,
            n + i - a.bottomLeft,
            a.bottomLeft,
            ei,
            eu,
            !0
          ),
          e.lineTo(r + o - a.bottomRight, n + i),
          e.arc(
            r + o - a.bottomRight,
            n + i - a.bottomRight,
            a.bottomRight,
            eu,
            0,
            !0
          ),
          e.lineTo(r + o, n + a.topRight),
          e.arc(r + o - a.topRight, n + a.topRight, a.topRight, 0, -eu, !0),
          e.lineTo(r + a.topLeft, n);
      }
      let ty = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
        tm =
          /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/,
        tb = (e) => +e || 0;
      function tv(e, t) {
        let r = {},
          n = N(t),
          o = n ? Object.keys(t) : t,
          i = N(e) ? (n ? (r) => F(e[r], e[t[r]]) : (t) => e[t]) : () => e;
        for (let e of o) r[e] = tb(i(e));
        return r;
      }
      function tw(e) {
        return tv(e, { top: "y", right: "x", bottom: "y", left: "x" });
      }
      function tx(e) {
        return tv(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
      }
      function tO(e) {
        let t = tw(e);
        return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
      }
      function t_(e, t) {
        (e = e || {}), (t = t || tr.font);
        let r = F(e.size, t.size);
        "string" == typeof r && (r = parseInt(r, 10));
        let n = F(e.style, t.style);
        n &&
          !("" + n).match(tm) &&
          (console.warn('Invalid font style specified: "' + n + '"'),
          (n = void 0));
        let o = {
          family: F(e.family, t.family),
          lineHeight: (function (e, t) {
            let r = ("" + e).match(ty);
            if (!r || "normal" === r[1]) return 1.2 * t;
            switch (((e = +r[2]), r[3])) {
              case "px":
                return e;
              case "%":
                e /= 100;
            }
            return t * e;
          })(F(e.lineHeight, t.lineHeight), r),
          size: r,
          style: n,
          weight: F(e.weight, t.weight),
          string: "",
        };
        return (
          (o.string =
            !o || D(o.size) || D(o.family)
              ? null
              : (o.style ? o.style + " " : "") +
                (o.weight ? o.weight + " " : "") +
                o.size +
                "px " +
                o.family),
          o
        );
      }
      function tk(e, t, r, n) {
        let o,
          i,
          a,
          s = !0;
        for (o = 0, i = e.length; o < i; ++o)
          if (
            void 0 !== (a = e[o]) &&
            (void 0 !== t && "function" == typeof a && ((a = a(t)), (s = !1)),
            void 0 !== r && L(a) && ((a = a[r % a.length]), (s = !1)),
            void 0 !== a)
          )
            return n && !s && (n.cacheable = !1), a;
      }
      function tS(e, t, r) {
        let { min: n, max: o } = e,
          i = W(t, (o - n) / 2),
          a = (e, t) => (r && 0 === e ? 0 : e + t);
        return { min: a(n, -Math.abs(i)), max: a(o, i) };
      }
      function tP(e, t) {
        return Object.assign(Object.create(e), t);
      }
      function tE(e, t = [""], r, n, o = () => e[0]) {
        let i = r || e;
        return (
          void 0 === n && (n = tD("_fallback", e)),
          new Proxy(
            {
              [Symbol.toStringTag]: "Object",
              _cacheable: !0,
              _scopes: e,
              _rootScopes: i,
              _fallback: n,
              _getTarget: o,
              override: (r) => tE([r, ...e], t, i, n),
            },
            {
              deleteProperty: (t, r) => (
                delete t[r], delete t._keys, delete e[0][r], !0
              ),
              get: (r, n) =>
                tR(r, n, () =>
                  (function (e, t, r, n) {
                    let o;
                    for (let i of t)
                      if (void 0 !== (o = tD(tC(i, e), r)))
                        return tM(e, o) ? tA(r, n, e, o) : o;
                  })(n, t, e, r)
                ),
              getOwnPropertyDescriptor: (e, t) =>
                Reflect.getOwnPropertyDescriptor(e._scopes[0], t),
              getPrototypeOf: () => Reflect.getPrototypeOf(e[0]),
              has: (e, t) => tL(e).includes(t),
              ownKeys: (e) => tL(e),
              set(e, t, r) {
                let n = e._storage || (e._storage = o());
                return (e[t] = n[t] = r), delete e._keys, !0;
              },
            }
          )
        );
      }
      function tT(e, t = { scriptable: !0, indexable: !0 }) {
        let {
          _scriptable: r = t.scriptable,
          _indexable: n = t.indexable,
          _allKeys: o = t.allKeys,
        } = e;
        return {
          allKeys: o,
          scriptable: r,
          indexable: n,
          isScriptable: er(r) ? r : () => r,
          isIndexable: er(n) ? n : () => n,
        };
      }
      let tC = (e, t) => (e ? e + ee(t) : t),
        tM = (e, t) =>
          N(t) &&
          "adapters" !== e &&
          (null === Object.getPrototypeOf(t) || t.constructor === Object);
      function tR(e, t, r) {
        if (Object.prototype.hasOwnProperty.call(e, t) || "constructor" === t)
          return e[t];
        let n = r();
        return (e[t] = n), n;
      }
      let tj = (e, t) =>
        !0 === e ? t : "string" == typeof e ? Z(t, e) : void 0;
      function tA(e, t, r, n) {
        var o;
        let i = t._rootScopes,
          a = er((o = t._fallback)) ? o(r, n) : o,
          s = [...e, ...i],
          l = new Set();
        l.add(n);
        let c = tI(l, s, r, a || r, n);
        return (
          null !== c &&
          (void 0 === a || a === r || null !== (c = tI(l, s, a, c, n))) &&
          tE(Array.from(l), [""], i, a, () =>
            (function (e, t, r) {
              let n = e._getTarget();
              t in n || (n[t] = {});
              let o = n[t];
              return L(o) && N(r) ? r : o || {};
            })(t, r, n)
          )
        );
      }
      function tI(e, t, r, n, o) {
        for (; r; )
          r = (function (e, t, r, n, o) {
            for (let a of t) {
              let t = tj(r, a);
              if (t) {
                var i;
                e.add(t);
                let a = er((i = t._fallback)) ? i(r, o) : i;
                if (void 0 !== a && a !== r && a !== n) return a;
              } else if (!1 === t && void 0 !== n && r !== n) return null;
            }
            return !1;
          })(e, t, r, n, o);
        return r;
      }
      function tD(e, t) {
        for (let r of t) {
          if (!r) continue;
          let t = r[e];
          if (void 0 !== t) return t;
        }
      }
      function tL(e) {
        let t = e._keys;
        return (
          t ||
            (t = e._keys =
              (function (e) {
                let t = new Set();
                for (let r of e)
                  for (let e of Object.keys(r).filter(
                    (e) => !e.startsWith("_")
                  ))
                    t.add(e);
                return Array.from(t);
              })(e._scopes)),
          t
        );
      }
      function tN(e, t, r, n) {
        let o, i, a;
        let { iScale: s } = e,
          { key: l = "r" } = this._parsing,
          c = Array(n);
        for (o = 0; o < n; ++o)
          (a = t[(i = o + r)]), (c[o] = { r: s.parse(Z(a, l), i) });
        return c;
      }
      let tz = Number.EPSILON || 1e-14,
        tB = (e, t) => t < e.length && !e[t].skip && e[t],
        tF = (e) => ("x" === e ? "y" : "x");
      function tU(e, t, r) {
        return Math.max(Math.min(e, r), t);
      }
      function tW(e, t, r, n, o) {
        let i, a, s, l;
        if (
          (t.spanGaps && (e = e.filter((e) => !e.skip)),
          "monotone" === t.cubicInterpolationMode)
        )
          !(function (e, t = "x") {
            let r, n, o;
            let i = tF(t),
              a = e.length,
              s = Array(a).fill(0),
              l = Array(a),
              c = tB(e, 0);
            for (r = 0; r < a; ++r)
              if (((n = o), (o = c), (c = tB(e, r + 1)), o)) {
                if (c) {
                  let e = c[t] - o[t];
                  s[r] = 0 !== e ? (c[i] - o[i]) / e : 0;
                }
                l[r] = n
                  ? c
                    ? ep(s[r - 1]) !== ep(s[r])
                      ? 0
                      : (s[r - 1] + s[r]) / 2
                    : s[r - 1]
                  : s[r];
              }
            !(function (e, t, r) {
              let n, o, i, a, s;
              let l = e.length,
                c = tB(e, 0);
              for (let u = 0; u < l - 1; ++u)
                if (((s = c), (c = tB(e, u + 1)), s && c)) {
                  if (eg(t[u], 0, tz)) {
                    r[u] = r[u + 1] = 0;
                    continue;
                  }
                  (a =
                    Math.pow((n = r[u] / t[u]), 2) +
                    Math.pow((o = r[u + 1] / t[u]), 2)) <= 9 ||
                    ((i = 3 / Math.sqrt(a)),
                    (r[u] = n * i * t[u]),
                    (r[u + 1] = o * i * t[u]));
                }
            })(e, s, l),
              (function (e, t, r = "x") {
                let n, o, i;
                let a = tF(r),
                  s = e.length,
                  l = tB(e, 0);
                for (let c = 0; c < s; ++c) {
                  if (((o = i), (i = l), (l = tB(e, c + 1)), !i)) continue;
                  let s = i[r],
                    u = i[a];
                  o &&
                    ((n = (s - o[r]) / 3),
                    (i[`cp1${r}`] = s - n),
                    (i[`cp1${a}`] = u - n * t[c])),
                    l &&
                      ((n = (l[r] - s) / 3),
                      (i[`cp2${r}`] = s + n),
                      (i[`cp2${a}`] = u + n * t[c]));
                }
              })(e, l, t);
          })(e, o);
        else {
          let r = n ? e[e.length - 1] : e[0];
          for (i = 0, a = e.length; i < a; ++i)
            (l = (function (e, t, r, n) {
              let o = e.skip ? t : e,
                i = r.skip ? t : r,
                a = eS(t, o),
                s = eS(i, t),
                l = a / (a + s),
                c = s / (a + s);
              (l = isNaN(l) ? 0 : l), (c = isNaN(c) ? 0 : c);
              let u = n * l,
                d = n * c;
              return {
                previous: {
                  x: t.x - u * (i.x - o.x),
                  y: t.y - u * (i.y - o.y),
                },
                next: { x: t.x + d * (i.x - o.x), y: t.y + d * (i.y - o.y) },
              };
            })(
              r,
              (s = e[i]),
              e[Math.min(i + 1, a - (n ? 0 : 1)) % a],
              t.tension
            )),
              (s.cp1x = l.previous.x),
              (s.cp1y = l.previous.y),
              (s.cp2x = l.next.x),
              (s.cp2y = l.next.y),
              (r = s);
        }
        t.capBezierPoints &&
          (function (e, t) {
            let r, n, o, i, a;
            let s = tc(e[0], t);
            for (r = 0, n = e.length; r < n; ++r)
              (a = i),
                (i = s),
                (s = r < n - 1 && tc(e[r + 1], t)),
                i &&
                  ((o = e[r]),
                  a &&
                    ((o.cp1x = tU(o.cp1x, t.left, t.right)),
                    (o.cp1y = tU(o.cp1y, t.top, t.bottom))),
                  s &&
                    ((o.cp2x = tU(o.cp2x, t.left, t.right)),
                    (o.cp2y = tU(o.cp2y, t.top, t.bottom))));
          })(e, r);
      }
      function tH() {
        return "undefined" != typeof window && "undefined" != typeof document;
      }
      function tq(e) {
        let t = e.parentNode;
        return t && "[object ShadowRoot]" === t.toString() && (t = t.host), t;
      }
      function tY(e, t, r) {
        let n;
        return (
          "string" == typeof e
            ? ((n = parseInt(e, 10)),
              -1 !== e.indexOf("%") && (n = (n / 100) * t.parentNode[r]))
            : (n = e),
          n
        );
      }
      let tV = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null),
        tX = ["top", "right", "bottom", "left"];
      function t$(e, t, r) {
        let n = {};
        r = r ? "-" + r : "";
        for (let o = 0; o < 4; o++) {
          let i = tX[o];
          n[i] = parseFloat(e[t + "-" + i + r]) || 0;
        }
        return (n.width = n.left + n.right), (n.height = n.top + n.bottom), n;
      }
      let tK = (e, t, r) => (e > 0 || t > 0) && (!r || !r.shadowRoot);
      function tJ(e, t) {
        if ("native" in e) return e;
        let { canvas: r, currentDevicePixelRatio: n } = t,
          o = tV(r),
          i = "border-box" === o.boxSizing,
          a = t$(o, "padding"),
          s = t$(o, "border", "width"),
          {
            x: l,
            y: c,
            box: u,
          } = (function (e, t) {
            let r, n;
            let o = e.touches,
              i = o && o.length ? o[0] : e,
              { offsetX: a, offsetY: s } = i,
              l = !1;
            if (tK(a, s, e.target)) (r = a), (n = s);
            else {
              let e = t.getBoundingClientRect();
              (r = i.clientX - e.left), (n = i.clientY - e.top), (l = !0);
            }
            return { x: r, y: n, box: l };
          })(e, r),
          d = a.left + (u && s.left),
          f = a.top + (u && s.top),
          { width: h, height: p } = t;
        return (
          i && ((h -= a.width + s.width), (p -= a.height + s.height)),
          {
            x: Math.round((((l - d) / h) * r.width) / n),
            y: Math.round((((c - f) / p) * r.height) / n),
          }
        );
      }
      let tG = (e) => Math.round(10 * e) / 10;
      function tQ(e, t, r, n) {
        let o = tV(e),
          i = t$(o, "margin"),
          a = tY(o.maxWidth, e, "clientWidth") || el,
          s = tY(o.maxHeight, e, "clientHeight") || el,
          l = (function (e, t, r) {
            let n, o;
            if (void 0 === t || void 0 === r) {
              let i = e && tq(e);
              if (i) {
                let e = i.getBoundingClientRect(),
                  a = tV(i),
                  s = t$(a, "border", "width"),
                  l = t$(a, "padding");
                (t = e.width - l.width - s.width),
                  (r = e.height - l.height - s.height),
                  (n = tY(a.maxWidth, i, "clientWidth")),
                  (o = tY(a.maxHeight, i, "clientHeight"));
              } else (t = e.clientWidth), (r = e.clientHeight);
            }
            return {
              width: t,
              height: r,
              maxWidth: n || el,
              maxHeight: o || el,
            };
          })(e, t, r),
          { width: c, height: u } = l;
        if ("content-box" === o.boxSizing) {
          let e = t$(o, "border", "width"),
            t = t$(o, "padding");
          (c -= t.width + e.width), (u -= t.height + e.height);
        }
        return (
          (c = Math.max(0, c - i.width)),
          (u = Math.max(0, n ? c / n : u - i.height)),
          (c = tG(Math.min(c, a, l.maxWidth))),
          (u = tG(Math.min(u, s, l.maxHeight))),
          c && !u && (u = tG(c / 2)),
          (void 0 !== t || void 0 !== r) &&
            n &&
            l.height &&
            u > l.height &&
            (c = tG(Math.floor((u = l.height) * n))),
          { width: c, height: u }
        );
      }
      function tZ(e, t, r) {
        let n = t || 1,
          o = Math.floor(e.height * n),
          i = Math.floor(e.width * n);
        (e.height = Math.floor(e.height)), (e.width = Math.floor(e.width));
        let a = e.canvas;
        return (
          a.style &&
            (r || (!a.style.height && !a.style.width)) &&
            ((a.style.height = `${e.height}px`),
            (a.style.width = `${e.width}px`)),
          (e.currentDevicePixelRatio !== n ||
            a.height !== o ||
            a.width !== i) &&
            ((e.currentDevicePixelRatio = n),
            (a.height = o),
            (a.width = i),
            e.ctx.setTransform(n, 0, 0, n, 0, 0),
            !0)
        );
      }
      let t0 = (function () {
        let e = !1;
        try {
          let t = {
            get passive() {
              return (e = !0), !1;
            },
          };
          tH() &&
            (window.addEventListener("test", null, t),
            window.removeEventListener("test", null, t));
        } catch (e) {}
        return e;
      })();
      function t1(e, t) {
        let r = tV(e).getPropertyValue(t),
          n = r && r.match(/^(\d+)(\.\d+)?px$/);
        return n ? +n[1] : void 0;
      }
      function t2(e, t, r, n) {
        return { x: e.x + r * (t.x - e.x), y: e.y + r * (t.y - e.y) };
      }
      function t5(e, t, r, n) {
        return {
          x: e.x + r * (t.x - e.x),
          y:
            "middle" === n
              ? r < 0.5
                ? e.y
                : t.y
              : "after" === n
              ? r < 1
                ? e.y
                : t.y
              : r > 0
              ? t.y
              : e.y,
        };
      }
      function t4(e, t, r, n) {
        let o = { x: e.cp2x, y: e.cp2y },
          i = { x: t.cp1x, y: t.cp1y },
          a = t2(e, o, r),
          s = t2(o, i, r),
          l = t2(i, t, r),
          c = t2(a, s, r),
          u = t2(s, l, r);
        return t2(c, u, r);
      }
      function t3(e, t, r) {
        var n;
        return e
          ? ((n = r),
            {
              x: (e) => t + t + n - e,
              setWidth(e) {
                n = e;
              },
              textAlign: (e) =>
                "center" === e ? e : "right" === e ? "left" : "right",
              xPlus: (e, t) => e - t,
              leftForLtr: (e, t) => e - t,
            })
          : {
              x: (e) => e,
              setWidth(e) {},
              textAlign: (e) => e,
              xPlus: (e, t) => e + t,
              leftForLtr: (e, t) => e,
            };
      }
      function t8(e, t) {
        let r, n;
        ("ltr" === t || "rtl" === t) &&
          ((n = [
            (r = e.canvas.style).getPropertyValue("direction"),
            r.getPropertyPriority("direction"),
          ]),
          r.setProperty("direction", t, "important"),
          (e.prevTextDirection = n));
      }
      function t6(e, t) {
        void 0 !== t &&
          (delete e.prevTextDirection,
          e.canvas.style.setProperty("direction", t[0], t[1]));
      }
      function t7(e) {
        return "angle" === e
          ? { between: eT, compare: eP, normalize: eE }
          : { between: eR, compare: (e, t) => e - t, normalize: (e) => e };
      }
      function t9({ start: e, end: t, count: r, loop: n, style: o }) {
        return {
          start: e % r,
          end: t % r,
          loop: n && (t - e + 1) % r == 0,
          style: o,
        };
      }
      function re(e, t, r) {
        let n, o, i;
        if (!r) return [e];
        let { property: a, start: s, end: l } = r,
          c = t.length,
          { compare: u, between: d, normalize: f } = t7(a),
          {
            start: h,
            end: p,
            loop: g,
            style: y,
          } = (function (e, t, r) {
            let n;
            let { property: o, start: i, end: a } = r,
              { between: s, normalize: l } = t7(o),
              c = t.length,
              { start: u, end: d, loop: f } = e;
            if (f) {
              for (u += c, d += c, n = 0; n < c && s(l(t[u % c][o]), i, a); ++n)
                u--, d--;
              (u %= c), (d %= c);
            }
            return (
              d < u && (d += c), { start: u, end: d, loop: f, style: e.style }
            );
          })(e, t, r),
          m = [],
          b = !1,
          v = null,
          w = () => d(s, i, n) && 0 !== u(s, i),
          x = () => 0 === u(l, n) || d(l, i, n),
          O = () => b || w(),
          _ = () => !b || x();
        for (let e = h, r = h; e <= p; ++e)
          (o = t[e % c]).skip ||
            (n = f(o[a])) === i ||
            ((b = d(n, s, l)),
            null === v && O() && (v = 0 === u(n, s) ? e : r),
            null !== v &&
              _() &&
              (m.push(t9({ start: v, end: e, loop: g, count: c, style: y })),
              (v = null)),
            (r = e),
            (i = n));
        return (
          null !== v &&
            m.push(t9({ start: v, end: p, loop: g, count: c, style: y })),
          m
        );
      }
      function rt(e, t) {
        let r = [],
          n = e.segments;
        for (let o = 0; o < n.length; o++) {
          let i = re(n[o], e.points, t);
          i.length && r.push(...i);
        }
        return r;
      }
      function rr(e, t) {
        let r = e.points,
          n = e.options.spanGaps,
          o = r.length;
        if (!o) return [];
        let i = !!e._loop,
          { start: a, end: s } = (function (e, t, r, n) {
            let o = 0,
              i = t - 1;
            if (r && !n) for (; o < t && !e[o].skip; ) o++;
            for (; o < t && e[o].skip; ) o++;
            for (o %= t, r && (i += o); i > o && e[i % t].skip; ) i--;
            return { start: o, end: (i %= t) };
          })(r, o, i, n);
        if (!0 === n) return rn(e, [{ start: a, end: s, loop: i }], r, t);
        let l = s < a ? s + o : s,
          c = !!e._fullLoop && 0 === a && s === o - 1;
        return rn(
          e,
          (function (e, t, r, n) {
            let o;
            let i = e.length,
              a = [],
              s = t,
              l = e[t];
            for (o = t + 1; o <= r; ++o) {
              let r = e[o % i];
              r.skip || r.stop
                ? l.skip ||
                  ((n = !1),
                  a.push({ start: t % i, end: (o - 1) % i, loop: n }),
                  (t = s = r.stop ? o : null))
                : ((s = o), l.skip && (t = o)),
                (l = r);
            }
            return (
              null !== s && a.push({ start: t % i, end: s % i, loop: n }), a
            );
          })(r, a, l, c),
          r,
          t
        );
      }
      function rn(e, t, r, n) {
        return n && n.setContext && r
          ? (function (e, t, r, n) {
              let o = e._chart.getContext(),
                i = ro(e.options),
                {
                  _datasetIndex: a,
                  options: { spanGaps: s },
                } = e,
                l = r.length,
                c = [],
                u = i,
                d = t[0].start,
                f = d;
              function h(e, t, n, o) {
                let i = s ? -1 : 1;
                if (e !== t) {
                  for (e += l; r[e % l].skip; ) e -= i;
                  for (; r[t % l].skip; ) t += i;
                  e % l != t % l &&
                    (c.push({ start: e % l, end: t % l, loop: n, style: o }),
                    (u = o),
                    (d = t % l));
                }
              }
              for (let e of t) {
                let t;
                let i = r[(d = s ? d : e.start) % l];
                for (f = d + 1; f <= e.end; f++) {
                  let s = r[f % l];
                  (function (e, t) {
                    if (!t) return !1;
                    let r = [],
                      n = function (e, t) {
                        return eQ(t)
                          ? (r.includes(t) || r.push(t), r.indexOf(t))
                          : t;
                      };
                    return JSON.stringify(e, n) !== JSON.stringify(t, n);
                  })(
                    (t = ro(
                      n.setContext(
                        tP(o, {
                          type: "segment",
                          p0: i,
                          p1: s,
                          p0DataIndex: (f - 1) % l,
                          p1DataIndex: f % l,
                          datasetIndex: a,
                        })
                      )
                    )),
                    u
                  ) && h(d, f - 1, e.loop, u),
                    (i = s),
                    (u = t);
                }
                d < f - 1 && h(d, f - 1, e.loop, u);
              }
              return c;
            })(e, t, r, n)
          : t;
      }
      function ro(e) {
        return {
          backgroundColor: e.backgroundColor,
          borderCapStyle: e.borderCapStyle,
          borderDash: e.borderDash,
          borderDashOffset: e.borderDashOffset,
          borderJoinStyle: e.borderJoinStyle,
          borderWidth: e.borderWidth,
          borderColor: e.borderColor,
        };
      }
    },
    55759: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => eH });
      var n = r(55211),
        o = r(41957);
      let i = {
        modes: {
          point: (e, t) => s(e, t, { intersect: !0 }),
          nearest: (e, t, r) =>
            (function (e, t, r) {
              let n = Number.POSITIVE_INFINITY;
              return s(e, t, r)
                .reduce((e, i) => {
                  var a;
                  let s = i.getCenterPoint(),
                    l =
                      "x" === (a = r.axis)
                        ? { x: t.x, y: s.y }
                        : "y" === a
                        ? { x: s.x, y: t.y }
                        : s,
                    c = (0, o.aE)(t, l);
                  return c < n ? ((e = [i]), (n = c)) : c === n && e.push(i), e;
                }, [])
                .sort((e, t) => e._index - t._index)
                .slice(0, 1);
            })(e, t, r),
          x: (e, t, r) => s(e, t, { intersect: r.intersect, axis: "x" }),
          y: (e, t, r) => s(e, t, { intersect: r.intersect, axis: "y" }),
        },
      };
      function a(e, t, r) {
        return (i.modes[r.mode] || i.modes.nearest)(e, t, r);
      }
      function s(e, t, r) {
        return e.filter((e) => {
          var n;
          return r.intersect
            ? e.inRange(t.x, t.y)
            : "x" !== (n = r.axis) && "y" !== n
            ? e.inRange(t.x, t.y, "x", !0) || e.inRange(t.x, t.y, "y", !0)
            : e.inRange(t.x, t.y, n, !0);
        });
      }
      function l(e, t, r) {
        let n = Math.cos(r),
          o = Math.sin(r),
          i = t.x,
          a = t.y;
        return {
          x: i + n * (e.x - i) - o * (e.y - a),
          y: a + o * (e.x - i) + n * (e.y - a),
        };
      }
      let c = (e, t) =>
          t > e || (e.length > t.length && e.slice(0, t.length) === t),
        u = (e, t, r) => Math.min(r, Math.max(t, e)),
        d = (e, t) => e.value >= e.start - t && e.value <= e.end + t;
      function f(
        e,
        { x: t, y: r, x2: n, y2: o },
        i,
        { borderWidth: a, hitTolerance: s }
      ) {
        let l = (a + s) / 2,
          c = e.x >= t - l - 0.001 && e.x <= n + l + 0.001,
          u = e.y >= r - l - 0.001 && e.y <= o + l + 0.001;
        return "x" === i ? c : "y" === i ? u : c && u;
      }
      function h(
        e,
        { rect: t, center: r },
        n,
        { rotation: i, borderWidth: a, hitTolerance: s }
      ) {
        return f(l(e, r, (0, o.t)(-i)), t, n, {
          borderWidth: a,
          hitTolerance: s,
        });
      }
      function p(e, t) {
        let { centerX: r, centerY: n } = e.getProps(["centerX", "centerY"], t);
        return { x: r, y: n };
      }
      let g = (e) => "string" == typeof e && e.endsWith("%"),
        y = (e) => parseFloat(e) / 100,
        m = (e) => u(y(e), 0, 1),
        b = (e, t) => ({ x: e, y: t, x2: e, y2: t, width: 0, height: 0 }),
        v = {
          box: (e) => b(e.centerX, e.centerY),
          doughnutLabel: (e) => b(e.centerX, e.centerY),
          ellipse: (e) => ({
            centerX: e.centerX,
            centerY: e.centerX,
            radius: 0,
            width: 0,
            height: 0,
          }),
          label: (e) => b(e.centerX, e.centerY),
          line: (e) => b(e.x, e.y),
          point: (e) => ({
            centerX: e.centerX,
            centerY: e.centerY,
            radius: 0,
            width: 0,
            height: 0,
          }),
          polygon: (e) => b(e.centerX, e.centerY),
        };
      function w(e, t) {
        return "start" === t ? 0 : "end" === t ? e : g(t) ? m(t) * e : e / 2;
      }
      function x(e, t, r = !0) {
        return "number" == typeof t ? t : g(t) ? (r ? m(t) : y(t)) * e : e;
      }
      function O(
        e,
        t,
        { borderWidth: r, position: n, xAdjust: i, yAdjust: a },
        s
      ) {
        let l = (0, o.i)(s),
          c = t.width + (l ? s.width : 0) + r,
          u = t.height + (l ? s.height : 0) + r,
          d = _(n),
          f = E(e.x, c, i, d.x),
          h = E(e.y, u, a, d.y);
        return {
          x: f,
          y: h,
          x2: f + c,
          y2: h + u,
          width: c,
          height: u,
          centerX: f + c / 2,
          centerY: h + u / 2,
        };
      }
      function _(e, t = "center") {
        return (0, o.i)(e)
          ? { x: (0, o.v)(e.x, t), y: (0, o.v)(e.y, t) }
          : { x: (e = (0, o.v)(e, t)), y: e };
      }
      let k = (e, t) => e && e.autoFit && t < 1;
      function S(e, t) {
        let r = e.font,
          n = (0, o.b)(r) ? r : [r];
        return k(e, t)
          ? n.map(function (e) {
              let r = (0, o.a0)(e);
              return (
                (r.size = Math.floor(e.size * t)),
                (r.lineHeight = e.lineHeight),
                (0, o.a0)(r)
              );
            })
          : n.map((e) => (0, o.a0)(e));
      }
      function P(e) {
        return e && ((0, o.h)(e.xValue) || (0, o.h)(e.yValue));
      }
      function E(e, t, r = 0, n) {
        return e - w(t, n) + r;
      }
      function T(e, t, r) {
        let n = r.init;
        return n
          ? !0 === n
            ? M(t, r)
            : (function (e, t, r) {
                let n = (0, o.Q)(r.init, [
                  { chart: e, properties: t, options: r },
                ]);
                return !0 === n ? M(t, r) : (0, o.i)(n) ? n : void 0;
              })(e, t, r)
          : void 0;
      }
      function C(e, t, r) {
        let n = !1;
        return (
          t.forEach((t) => {
            (0, o.a7)(e[t])
              ? ((n = !0), (r[t] = e[t]))
              : (0, o.h)(r[t]) && delete r[t];
          }),
          n
        );
      }
      function M(e, t) {
        return v[t.type || "line"](e);
      }
      let R = new Map(),
        j = (e) => isNaN(e) || e <= 0,
        A = (e) =>
          e.reduce(function (e, t) {
            return e + t.string;
          }, "");
      function I(e) {
        if (e && "object" == typeof e) {
          let t = e.toString();
          return (
            "[object HTMLImageElement]" === t ||
            "[object HTMLCanvasElement]" === t
          );
        }
      }
      function D(e, { x: t, y: r }, n) {
        n && (e.translate(t, r), e.rotate((0, o.t)(n)), e.translate(-t, -r));
      }
      function L(e, t) {
        if (t && t.borderWidth)
          return (
            (e.lineCap = t.borderCapStyle || "butt"),
            e.setLineDash(t.borderDash),
            (e.lineDashOffset = t.borderDashOffset),
            (e.lineJoin = t.borderJoinStyle || "miter"),
            (e.lineWidth = t.borderWidth),
            (e.strokeStyle = t.borderColor),
            !0
          );
      }
      function N(e, t) {
        (e.shadowColor = t.backgroundShadowColor),
          (e.shadowBlur = t.shadowBlur),
          (e.shadowOffsetX = t.shadowOffsetX),
          (e.shadowOffsetY = t.shadowOffsetY);
      }
      function z(e, t) {
        let r = t.content;
        if (I(r))
          return { width: x(r.width, t.width), height: x(r.height, t.height) };
        let n = S(t),
          i = t.textStrokeWidth,
          a = (0, o.b)(r) ? r : [r],
          s = a.join() + A(n) + i + (e._measureText ? "-spriting" : "");
        return (
          R.has(s) ||
            R.set(
              s,
              (function (e, t, r, n) {
                e.save();
                let o = t.length,
                  i = 0,
                  a = n;
                for (let s = 0; s < o; s++) {
                  let o = r[Math.min(s, r.length - 1)];
                  e.font = o.string;
                  let l = t[s];
                  (i = Math.max(i, e.measureText(l).width + n)),
                    (a += o.lineHeight);
                }
                return e.restore(), { width: i, height: a };
              })(e, a, n, i)
            ),
          R.get(s)
        );
      }
      function B(e, t, r) {
        let { x: n, y: i, width: a, height: s } = t;
        e.save(), N(e, r);
        let l = L(e, r);
        (e.fillStyle = r.backgroundColor),
          e.beginPath(),
          (0, o.au)(e, {
            x: n,
            y: i,
            w: a,
            h: s,
            radius: (function (e, t, r) {
              for (let t of Object.keys(e)) e[t] = u(e[t], 0, r);
              return e;
            })((0, o.aw)(r.borderRadius), 0, Math.min(a, s) / 2),
          }),
          e.closePath(),
          e.fill(),
          l && ((e.shadowColor = r.borderShadowColor), e.stroke()),
          e.restore();
      }
      function F(e, t, r, n) {
        let i = r.content;
        if (I(i)) {
          e.save(),
            (e.globalAlpha = (function (e, t) {
              let r = (0, o.x)(e) ? e : t;
              return (0, o.x)(r) ? u(r, 0, 1) : 1;
            })(r.opacity, i.style.opacity)),
            e.drawImage(i, t.x, t.y, t.width, t.height),
            e.restore();
          return;
        }
        let a = (0, o.b)(i) ? i : [i],
          s = S(r, n),
          l = r.color,
          c = (0, o.b)(l) ? l : [l],
          d = (function (e, t) {
            let { x: r, width: n } = e,
              o = t.textAlign;
            return "center" === o
              ? r + n / 2
              : "end" === o || "right" === o
              ? r + n
              : r;
          })(t, r),
          f = t.y + r.textStrokeWidth / 2;
        e.save(),
          (e.textBaseline = "middle"),
          (e.textAlign = r.textAlign),
          (function (e, t) {
            if (t.textStrokeWidth > 0)
              return (
                (e.lineJoin = "round"),
                (e.miterLimit = 2),
                (e.lineWidth = t.textStrokeWidth),
                (e.strokeStyle = t.textStrokeColor),
                !0
              );
          })(e, r) &&
            (function (e, { x: t, y: r }, n, o) {
              e.beginPath();
              let i = 0;
              n.forEach(function (n, a) {
                let s = o[Math.min(a, o.length - 1)],
                  l = s.lineHeight;
                (e.font = s.string),
                  e.strokeText(n, t, r + l / 2 + i),
                  (i += l);
              }),
                e.stroke();
            })(e, { x: d, y: f }, a, s),
          (function (e, { x: t, y: r }, n, { fonts: o, colors: i }) {
            let a = 0;
            n.forEach(function (n, s) {
              let l = i[Math.min(s, i.length - 1)],
                c = o[Math.min(s, o.length - 1)],
                u = c.lineHeight;
              e.beginPath(),
                (e.font = c.string),
                (e.fillStyle = l),
                e.fillText(n, t, r + u / 2 + a),
                (a += u),
                e.fill();
            });
          })(e, { x: d, y: f }, a, { fonts: s, colors: c }),
          e.restore();
      }
      let U = ["left", "bottom", "top", "right"],
        W = {
          xScaleID: {
            min: "xMin",
            max: "xMax",
            start: "left",
            end: "right",
            startProp: "x",
            endProp: "x2",
          },
          yScaleID: {
            min: "yMin",
            max: "yMax",
            start: "bottom",
            end: "top",
            startProp: "y",
            endProp: "y2",
          },
        };
      function H(e, t, r) {
        return (
          (t = "number" == typeof t ? t : e.parse(t)),
          (0, o.g)(t) ? e.getPixelForValue(t) : r
        );
      }
      function q(e, t, r) {
        let n = t[r];
        if (n || "scaleID" === r) return n;
        let o = r.charAt(0),
          i = Object.values(e).filter((e) => e.axis && e.axis === o);
        return i.length ? i[0].id : o;
      }
      function Y(e, t) {
        if (e) {
          let r = e.options.reverse;
          return {
            start: H(e, t.min, r ? t.end : t.start),
            end: H(e, t.max, r ? t.start : t.end),
          };
        }
      }
      function V(e, t) {
        let { chartArea: r, scales: n } = e,
          o = n[q(n, t, "xScaleID")],
          i = n[q(n, t, "yScaleID")],
          a = r.width / 2,
          s = r.height / 2;
        return (
          o && (a = H(o, t.xValue, o.left + o.width / 2)),
          i && (s = H(i, t.yValue, i.top + i.height / 2)),
          { x: a, y: s }
        );
      }
      function X(e, t) {
        let r = e.scales,
          n = r[q(r, t, "xScaleID")],
          o = r[q(r, t, "yScaleID")];
        if (!n && !o) return {};
        let { left: i, right: a } = n || e.chartArea,
          { top: s, bottom: l } = o || e.chartArea,
          c = J(n, { min: t.xMin, max: t.xMax, start: i, end: a });
        (i = c.start), (a = c.end);
        let u = J(o, { min: t.yMin, max: t.yMax, start: l, end: s });
        return {
          x: i,
          y: (s = u.start),
          x2: a,
          y2: (l = u.end),
          width: a - i,
          height: l - s,
          centerX: i + (a - i) / 2,
          centerY: s + (l - s) / 2,
        };
      }
      function $(e, t) {
        if (!P(t)) {
          let r = X(e, t),
            n = t.radius;
          (!n || isNaN(n)) &&
            ((n = Math.min(r.width, r.height) / 2), (t.radius = n));
          let o = 2 * n,
            i = r.centerX + t.xAdjust,
            a = r.centerY + t.yAdjust;
          return {
            x: i - n,
            y: a - n,
            x2: i + n,
            y2: a + n,
            centerX: i,
            centerY: a,
            width: o,
            height: o,
            radius: n,
          };
        }
        return (function (e, t) {
          let r = V(e, t),
            n = 2 * t.radius;
          return {
            x: r.x - t.radius + t.xAdjust,
            y: r.y - t.radius + t.yAdjust,
            x2: r.x + t.radius + t.xAdjust,
            y2: r.y + t.radius + t.yAdjust,
            centerX: r.x + t.xAdjust,
            centerY: r.y + t.yAdjust,
            radius: t.radius,
            width: n,
            height: n,
          };
        })(e, t);
      }
      function K(e, t) {
        let r = X(e, t);
        return (
          (r.initProperties = T(e, r, t)),
          (r.elements = [
            {
              type: "label",
              optionScope: "label",
              properties: (function (e, t, r) {
                let n = r.label;
                (n.backgroundColor = "transparent"), (n.callout.display = !1);
                let i = _(n.position),
                  a = (0, o.E)(n.padding),
                  s = z(e.ctx, n),
                  l = (function ({ properties: e, options: t }, r, n, o) {
                    let { x: i, x2: a, width: s } = e;
                    return G(
                      { start: i, end: a, size: s, borderWidth: t.borderWidth },
                      {
                        position: n.x,
                        padding: { start: o.left, end: o.right },
                        adjust: t.label.xAdjust,
                        size: r.width,
                      }
                    );
                  })({ properties: t, options: r }, s, i, a),
                  c = (function ({ properties: e, options: t }, r, n, o) {
                    let { y: i, y2: a, height: s } = e;
                    return G(
                      { start: i, end: a, size: s, borderWidth: t.borderWidth },
                      {
                        position: n.y,
                        padding: { start: o.top, end: o.bottom },
                        adjust: t.label.yAdjust,
                        size: r.height,
                      }
                    );
                  })({ properties: t, options: r }, s, i, a),
                  u = s.width + a.width,
                  d = s.height + a.height;
                return {
                  x: l,
                  y: c,
                  x2: l + u,
                  y2: c + d,
                  width: u,
                  height: d,
                  centerX: l + u / 2,
                  centerY: c + d / 2,
                  rotation: n.rotation,
                };
              })(e, r, t),
              initProperties: r.initProperties,
            },
          ]),
          r
        );
      }
      function J(e, t) {
        let r = Y(e, t) || t;
        return {
          start: Math.min(r.start, r.end),
          end: Math.max(r.start, r.end),
        };
      }
      function G(e, t) {
        let { start: r, end: n, borderWidth: o } = e,
          {
            position: i,
            padding: { start: a, end: s },
            adjust: l,
          } = t,
          c = n - o - r - a - s - t.size;
        return r + o / 2 + l + w(c, i);
      }
      let Q = ["enter", "leave"],
        Z = Q.concat("click");
      function ee({ state: e, event: t }, r, n, o) {
        let i;
        for (let a of n)
          0 > o.indexOf(a) &&
            (i = et(a.options[r] || e.listeners[r], a, t) || i);
        return i;
      }
      function et(e, t, r) {
        return !0 === (0, o.Q)(e, [t.$context, r]);
      }
      let er = ["afterDraw", "beforeDraw"];
      function en(e, t, r) {
        if (e.hooked) {
          let n = t.options[r] || e.hooks[r];
          return (0, o.Q)(n, [t.$context]);
        }
      }
      function eo(e, t, r, n) {
        var i;
        if (
          (0, o.g)(t[r]) &&
          ((i = e.options), !((0, o.h)(i[r]) || (0, o.h)(i[n])))
        ) {
          let n = e[r] !== t[r];
          return (e[r] = t[r]), n;
        }
      }
      function ei(e, t, r, n) {
        for (let i of r) {
          let r = e[i];
          if ((0, o.h)(r)) {
            let e = t.parse(r);
            (n.min = Math.min(n.min, e)), (n.max = Math.max(n.max, e));
          }
        }
      }
      class ea extends n.W_ {
        inRange(e, t, r, n) {
          let { x: i, y: a } = l(
            { x: e, y: t },
            this.getCenterPoint(n),
            (0, o.t)(-this.options.rotation)
          );
          return f(
            { x: i, y: a },
            this.getProps(["x", "y", "x2", "y2"], n),
            r,
            this.options
          );
        }
        getCenterPoint(e) {
          return p(this, e);
        }
        draw(e) {
          e.save(),
            D(e, this.getCenterPoint(), this.options.rotation),
            B(e, this, this.options),
            e.restore();
        }
        get label() {
          return this.elements && this.elements[0];
        }
        resolveElementProperties(e, t) {
          return K(e, t);
        }
      }
      (ea.id = "boxAnnotation"),
        (ea.defaults = {
          adjustScaleRange: !0,
          backgroundShadowColor: "transparent",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderRadius: 0,
          borderShadowColor: "transparent",
          borderWidth: 1,
          display: !0,
          init: void 0,
          hitTolerance: 0,
          label: {
            backgroundColor: "transparent",
            borderWidth: 0,
            callout: { display: !1 },
            color: "black",
            content: null,
            display: !1,
            drawTime: void 0,
            font: {
              family: void 0,
              lineHeight: void 0,
              size: void 0,
              style: void 0,
              weight: "bold",
            },
            height: void 0,
            hitTolerance: void 0,
            opacity: void 0,
            padding: 6,
            position: "center",
            rotation: void 0,
            textAlign: "start",
            textStrokeColor: void 0,
            textStrokeWidth: 0,
            width: void 0,
            xAdjust: 0,
            yAdjust: 0,
            z: void 0,
          },
          rotation: 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          xMax: void 0,
          xMin: void 0,
          xScaleID: void 0,
          yMax: void 0,
          yMin: void 0,
          yScaleID: void 0,
          z: 0,
        }),
        (ea.defaultRoutes = { borderColor: "color", backgroundColor: "color" }),
        (ea.descriptors = { label: { _fallback: !0 } });
      class es extends n.W_ {
        inRange(e, t, r, n) {
          return h(
            { x: e, y: t },
            {
              rect: this.getProps(["x", "y", "x2", "y2"], n),
              center: this.getCenterPoint(n),
            },
            r,
            {
              rotation: this.rotation,
              borderWidth: 0,
              hitTolerance: this.options.hitTolerance,
            }
          );
        }
        getCenterPoint(e) {
          return p(this, e);
        }
        draw(e) {
          let t = this.options;
          t.display &&
            t.content &&
            ((function (e, t) {
              let {
                _centerX: r,
                _centerY: n,
                _radius: o,
                _startAngle: i,
                _endAngle: a,
                _counterclockwise: s,
                options: l,
              } = t;
              e.save();
              let c = L(e, l);
              (e.fillStyle = l.backgroundColor),
                e.beginPath(),
                e.arc(r, n, o, i, a, s),
                e.closePath(),
                e.fill(),
                c && e.stroke(),
                e.restore();
            })(e, this),
            e.save(),
            D(e, this.getCenterPoint(), this.rotation),
            F(e, this, t, this._fitRatio),
            e.restore());
        }
        resolveElementProperties(e, t) {
          let r = e.getSortedVisibleDatasetMetas().reduce(function (r, o) {
            let i = o.controller;
            return i instanceof n.jI &&
              (function (e, t, r) {
                if (!t.autoHide) return !0;
                for (let t = 0; t < r.length; t++)
                  if (!r[t].hidden && e.getDataVisibility(t)) return !0;
              })(e, t, o.data) &&
              (!r || i.innerRadius < r.controller.innerRadius) &&
              i.options.circumference >= 90
              ? o
              : r;
          }, void 0);
          if (!r) return {};
          let {
              controllerMeta: i,
              point: a,
              radius: s,
            } = (function ({ chartArea: e }, t, r) {
              let { left: n, top: i, right: a, bottom: s } = e,
                { innerRadius: l, offsetX: c, offsetY: u } = r.controller,
                d = (n + a) / 2 + c,
                f = (i + s) / 2 + u,
                h = {
                  left: Math.max(d - l, n),
                  right: Math.min(d + l, a),
                  top: Math.max(f - l, i),
                  bottom: Math.min(f + l, s),
                },
                p = { x: (h.left + h.right) / 2, y: (h.top + h.bottom) / 2 },
                g = t.spacing + t.borderWidth / 2,
                y = l - g,
                m = p.y > f,
                b = (function (e, t, r, n) {
                  let i = -2 * t,
                    a =
                      Math.pow(i, 2) -
                      4 *
                        (Math.pow(t, 2) + Math.pow(r - e, 2) - Math.pow(n, 2));
                  if (a <= 0) return { _startAngle: 0, _endAngle: o.T };
                  let s = (-i - Math.sqrt(a)) / 2,
                    l = (-i + Math.sqrt(a)) / 2;
                  return {
                    _startAngle: (0, o.D)({ x: t, y: r }, { x: s, y: e }).angle,
                    _endAngle: (0, o.D)({ x: t, y: r }, { x: l, y: e }).angle,
                  };
                })(m ? i + g : s - g, d, f, y);
              return {
                controllerMeta: {
                  _centerX: d,
                  _centerY: f,
                  _radius: y,
                  _counterclockwise: m,
                  ...b,
                },
                point: p,
                radius: Math.min(
                  l,
                  Math.min(h.right - h.left, h.bottom - h.top) / 2
                ),
              };
            })(e, t, r),
            l = z(e.ctx, t),
            c = (function ({ width: e, height: t }, r) {
              return (2 * r) / Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2));
            })(l, s);
          k(t, c) && (l = { width: l.width * c, height: l.height * c });
          let { position: u, xAdjust: d, yAdjust: f } = t,
            h = O(a, l, {
              borderWidth: 0,
              position: u,
              xAdjust: d,
              yAdjust: f,
            });
          return {
            initProperties: T(e, h, t),
            ...h,
            ...i,
            rotation: t.rotation,
            _fitRatio: c,
          };
        }
      }
      (es.id = "doughnutLabelAnnotation"),
        (es.defaults = {
          autoFit: !0,
          autoHide: !0,
          backgroundColor: "transparent",
          backgroundShadowColor: "transparent",
          borderColor: "transparent",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderShadowColor: "transparent",
          borderWidth: 0,
          color: "black",
          content: null,
          display: !0,
          font: {
            family: void 0,
            lineHeight: void 0,
            size: void 0,
            style: void 0,
            weight: void 0,
          },
          height: void 0,
          hitTolerance: 0,
          init: void 0,
          opacity: void 0,
          position: "center",
          rotation: 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          spacing: 1,
          textAlign: "center",
          textStrokeColor: void 0,
          textStrokeWidth: 0,
          width: void 0,
          xAdjust: 0,
          yAdjust: 0,
        }),
        (es.defaultRoutes = {});
      class el extends n.W_ {
        inRange(e, t, r, n) {
          return h(
            { x: e, y: t },
            {
              rect: this.getProps(["x", "y", "x2", "y2"], n),
              center: this.getCenterPoint(n),
            },
            r,
            {
              rotation: this.rotation,
              borderWidth: this.options.borderWidth,
              hitTolerance: this.options.hitTolerance,
            }
          );
        }
        getCenterPoint(e) {
          return p(this, e);
        }
        draw(e) {
          let t = this.options,
            r = !(0, o.h)(this._visible) || this._visible;
          t.display &&
            t.content &&
            r &&
            (e.save(),
            D(e, this.getCenterPoint(), this.rotation),
            (function (e, t) {
              let { pointX: r, pointY: n, options: i } = t,
                a = i.callout,
                s =
                  a &&
                  a.display &&
                  (function (e, t) {
                    let r = t.position;
                    return U.includes(r)
                      ? r
                      : (function (e, t) {
                          let {
                              x: r,
                              y: n,
                              x2: i,
                              y2: a,
                              width: s,
                              height: c,
                              pointX: u,
                              pointY: d,
                              centerX: f,
                              centerY: h,
                              rotation: p,
                            } = e,
                            g = { x: f, y: h },
                            y = t.start,
                            m = x(s, y),
                            b = x(c, y),
                            v = [r, r + m, r + m, i],
                            w = [n + b, a, n, a],
                            O = [];
                          for (let e = 0; e < 4; e++) {
                            let t = l({ x: v[e], y: w[e] }, g, (0, o.t)(p));
                            O.push({
                              position: U[e],
                              distance: (0, o.aE)(t, { x: u, y: d }),
                            });
                          }
                          return O.sort((e, t) => e.distance - t.distance)[0]
                            .position;
                        })(e, t);
                  })(t, a);
              if (
                !s ||
                (function (e, t, r) {
                  let { pointX: n, pointY: o } = e,
                    i = t.margin,
                    a = n,
                    s = o;
                  return (
                    "left" === r
                      ? (a += i)
                      : "right" === r
                      ? (a -= i)
                      : "top" === r
                      ? (s += i)
                      : "bottom" === r && (s -= i),
                    e.inRange(a, s)
                  );
                })(t, a, s)
              )
                return;
              if ((e.save(), e.beginPath(), !L(e, a))) return e.restore();
              let { separatorStart: c, separatorEnd: u } = (function (e, t) {
                  let r, n;
                  let { x: o, y: i, x2: a, y2: s } = e,
                    l = (function (e, t) {
                      let { width: r, height: n, options: o } = e,
                        i = o.callout.margin + o.borderWidth / 2;
                      return "right" === t
                        ? r + i
                        : "bottom" === t
                        ? n + i
                        : -i;
                    })(e, t);
                  return (
                    (n =
                      "left" === t || "right" === t
                        ? { x: (r = { x: o + l, y: i }).x, y: s }
                        : { x: a, y: (r = { x: o, y: i + l }).y }),
                    { separatorStart: r, separatorEnd: n }
                  );
                })(t, s),
                { sideStart: d, sideEnd: f } = (function (e, t, r) {
                  let n, o;
                  let { y: i, width: a, height: s, options: l } = e,
                    c = l.callout.start,
                    u = (function (e, t) {
                      let r = t.side;
                      return "left" === e || "top" === e ? -r : r;
                    })(t, l.callout);
                  return (
                    (o =
                      "left" === t || "right" === t
                        ? { x: (n = { x: r.x, y: i + x(s, c) }).x + u, y: n.y }
                        : {
                            x: (n = { x: r.x + x(a, c), y: r.y }).x,
                            y: n.y + u,
                          }),
                    { sideStart: n, sideEnd: o }
                  );
                })(t, s, c);
              (a.margin > 0 || 0 === i.borderWidth) &&
                (e.moveTo(c.x, c.y), e.lineTo(u.x, u.y)),
                e.moveTo(d.x, d.y),
                e.lineTo(f.x, f.y);
              let h = l(
                { x: r, y: n },
                t.getCenterPoint(),
                (0, o.t)(-t.rotation)
              );
              e.lineTo(h.x, h.y), e.stroke(), e.restore();
            })(e, this),
            B(e, this, t),
            F(
              e,
              (function ({ x: e, y: t, width: r, height: n, options: i }) {
                let a = i.borderWidth / 2,
                  s = (0, o.E)(i.padding);
                return {
                  x: e + s.left + a,
                  y: t + s.top + a,
                  width: r - s.left - s.right - i.borderWidth,
                  height: n - s.top - s.bottom - i.borderWidth,
                };
              })(this),
              t
            ),
            e.restore());
        }
        resolveElementProperties(e, t) {
          let r;
          if (P(t)) r = V(e, t);
          else {
            let { centerX: n, centerY: o } = X(e, t);
            r = { x: n, y: o };
          }
          let n = (0, o.E)(t.padding),
            i = O(r, z(e.ctx, t), t, n);
          return {
            initProperties: T(e, i, t),
            pointX: r.x,
            pointY: r.y,
            ...i,
            rotation: t.rotation,
          };
        }
      }
      (el.id = "labelAnnotation"),
        (el.defaults = {
          adjustScaleRange: !0,
          backgroundColor: "transparent",
          backgroundShadowColor: "transparent",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderRadius: 0,
          borderShadowColor: "transparent",
          borderWidth: 0,
          callout: {
            borderCapStyle: "butt",
            borderColor: void 0,
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            borderWidth: 1,
            display: !1,
            margin: 5,
            position: "auto",
            side: 5,
            start: "50%",
          },
          color: "black",
          content: null,
          display: !0,
          font: {
            family: void 0,
            lineHeight: void 0,
            size: void 0,
            style: void 0,
            weight: void 0,
          },
          height: void 0,
          hitTolerance: 0,
          init: void 0,
          opacity: void 0,
          padding: 6,
          position: "center",
          rotation: 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          textAlign: "center",
          textStrokeColor: void 0,
          textStrokeWidth: 0,
          width: void 0,
          xAdjust: 0,
          xMax: void 0,
          xMin: void 0,
          xScaleID: void 0,
          xValue: void 0,
          yAdjust: 0,
          yMax: void 0,
          yMin: void 0,
          yScaleID: void 0,
          yValue: void 0,
          z: 0,
        }),
        (el.defaultRoutes = { borderColor: "color" });
      let ec = (e, t, r) => ({
          x: e.x + r * (t.x - e.x),
          y: e.y + r * (t.y - e.y),
        }),
        eu = (e, t, r) => ec(t, r, Math.abs((e - t.y) / (r.y - t.y))).x,
        ed = (e, t, r) => ec(t, r, Math.abs((e - t.x) / (r.x - t.x))).y,
        ef = (e) => e * e,
        eh = (e, t, { x: r, y: n, x2: o, y2: i }, a) =>
          "y" === a
            ? { start: Math.min(n, i), end: Math.max(n, i), value: t }
            : { start: Math.min(r, o), end: Math.max(r, o), value: e },
        ep = (e, t, r, n) =>
          (1 - n) * (1 - n) * e + 2 * (1 - n) * n * t + n * n * r,
        eg = (e, t, r, n) => ({
          x: ep(e.x, t.x, r.x, n),
          y: ep(e.y, t.y, r.y, n),
        }),
        ey = (e, t, r, n) => 2 * (1 - n) * (t - e) + 2 * n * (r - t),
        em = (e, t, r, n) =>
          -Math.atan2(ey(e.x, t.x, r.x, n), ey(e.y, t.y, r.y, n)) + 0.5 * o.P;
      class eb extends n.W_ {
        inRange(e, t, r, n) {
          let o = (this.options.borderWidth + this.options.hitTolerance) / 2;
          if ("x" !== r && "y" !== r) {
            let r = { mouseX: e, mouseY: t },
              { path: i, ctx: a } = this;
            if (i) {
              L(a, this.options), (a.lineWidth += this.options.hitTolerance);
              let { chart: o } = this.$context,
                s = e * o.currentDevicePixelRatio,
                l = t * o.currentDevicePixelRatio,
                c = a.isPointInStroke(i, s, l) || ex(this, r, n);
              return a.restore(), c;
            }
            return (
              (function (e, { mouseX: t, mouseY: r }, n = 0.001, o) {
                let i, a;
                let {
                    x: s,
                    y: l,
                    x2: c,
                    y2: u,
                  } = e.getProps(["x", "y", "x2", "y2"], o),
                  d = c - s,
                  f = u - l,
                  h = ef(d) + ef(f),
                  p = 0 === h ? -1 : ((t - s) * d + (r - l) * f) / h;
                return (
                  p < 0
                    ? ((i = s), (a = l))
                    : p > 1
                    ? ((i = c), (a = u))
                    : ((i = s + p * d), (a = l + p * f)),
                  ef(t - i) + ef(r - a) <= n
                );
              })(this, r, ef(o), n) || ex(this, r, n)
            );
          }
          return (function (
            e,
            { mouseX: t, mouseY: r },
            n,
            { hitSize: o, useFinalPosition: i }
          ) {
            return (
              d(eh(t, r, e.getProps(["x", "y", "x2", "y2"], i), n), o) ||
              ex(e, { mouseX: t, mouseY: r }, i, n)
            );
          })(this, { mouseX: e, mouseY: t }, r, {
            hitSize: o,
            useFinalPosition: n,
          });
        }
        getCenterPoint(e) {
          return p(this, e);
        }
        draw(e) {
          let { x: t, y: r, x2: n, y2: i, cp: a, options: s } = this;
          if ((e.save(), !L(e, s))) return e.restore();
          N(e, s);
          let l = Math.sqrt(Math.pow(n - t, 2) + Math.pow(i - r, 2));
          if (s.curve && a)
            return (
              (function (e, t, r, n) {
                let { x: i, y: a, x2: s, y2: l, options: c } = t,
                  {
                    startOpts: u,
                    endOpts: d,
                    startAdjust: f,
                    endAdjust: h,
                  } = ek(t),
                  p = { x: i, y: a },
                  g = { x: s, y: l },
                  y = em(p, r, g, 0),
                  m = em(p, r, g, 1) - o.P,
                  b = eg(p, r, g, f / n),
                  v = eg(p, r, g, 1 - h / n),
                  w = new Path2D();
                e.beginPath(),
                  w.moveTo(b.x, b.y),
                  w.quadraticCurveTo(r.x, r.y, v.x, v.y),
                  (e.shadowColor = c.borderShadowColor),
                  e.stroke(w),
                  (t.path = w),
                  (t.ctx = e),
                  eE(e, b, { angle: y, adjust: f }, u),
                  eE(e, v, { angle: m, adjust: h }, d);
              })(e, this, a, l),
              e.restore()
            );
          let {
              startOpts: c,
              endOpts: u,
              startAdjust: d,
              endAdjust: f,
            } = ek(this),
            h = Math.atan2(i - r, n - t);
          e.translate(t, r),
            e.rotate(h),
            e.beginPath(),
            e.moveTo(0 + d, 0),
            e.lineTo(l - f, 0),
            (e.shadowColor = s.borderShadowColor),
            e.stroke(),
            eP(e, 0, d, c),
            eP(e, l, -f, u),
            e.restore();
        }
        get label() {
          return this.elements && this.elements[0];
        }
        resolveElementProperties(e, t) {
          let r = (function (e, t) {
              let { scales: r, chartArea: n } = e,
                o = r[t.scaleID],
                i = { x: n.left, y: n.top, x2: n.right, y2: n.bottom };
              return (
                o
                  ? (function (e, t, r) {
                      let n = H(e, r.value, NaN),
                        o = H(e, r.endValue, n);
                      e.isHorizontal()
                        ? ((t.x = n), (t.x2 = o))
                        : ((t.y = n), (t.y2 = o));
                    })(o, i, t)
                  : (function (e, t, r) {
                      for (let n of Object.keys(W)) {
                        let o = e[q(e, r, n)];
                        if (o) {
                          let {
                              min: e,
                              max: i,
                              start: a,
                              end: s,
                              startProp: l,
                              endProp: c,
                            } = W[n],
                            u = Y(o, {
                              min: r[e],
                              max: r[i],
                              start: o[a],
                              end: o[s],
                            });
                          (t[l] = u.start), (t[c] = u.end);
                        }
                      }
                    })(r, i, t),
                i
              );
            })(e, t),
            { x: n, y: i, x2: a, y2: s } = r,
            c = (function (
              { x: e, y: t, x2: r, y2: n },
              { top: o, right: i, bottom: a, left: s }
            ) {
              return !(
                (e < s && r < s) ||
                (e > i && r > i) ||
                (t < o && n < o) ||
                (t > a && n > a)
              );
            })(r, e.chartArea),
            u = c
              ? (function (e, t, r) {
                  let { x: n, y: o } = ew(e, t, r),
                    { x: i, y: a } = ew(t, e, r);
                  return {
                    x: n,
                    y: o,
                    x2: i,
                    y2: a,
                    width: Math.abs(i - n),
                    height: Math.abs(a - o),
                  };
                })({ x: n, y: i }, { x: a, y: s }, e.chartArea)
              : {
                  x: n,
                  y: i,
                  x2: a,
                  y2: s,
                  width: Math.abs(a - n),
                  height: Math.abs(s - i),
                };
          if (
            ((u.centerX = (a + n) / 2),
            (u.centerY = (s + i) / 2),
            (u.initProperties = T(e, u, t)),
            t.curve)
          ) {
            let e = { x: u.x, y: u.y },
              r = { x: u.x2, y: u.y2 };
            u.cp = (function (e, t, r) {
              let { x: n, y: o, x2: i, y2: a, centerX: s, centerY: c } = e,
                u = Math.atan2(a - o, i - n),
                d = _(t.controlPoint, 0);
              return l(
                { x: s + x(r, d.x, !1), y: c + x(r, d.y, !1) },
                { x: s, y: c },
                u
              );
            })(u, t, (0, o.aE)(e, r));
          }
          let d = (function (e, t, r) {
            let n = r.borderWidth,
              i = (0, o.E)(r.padding),
              a = z(e.ctx, r);
            return (function (e, t, r, n) {
              let { width: i, height: a, padding: s } = r,
                { xAdjust: l, yAdjust: c } = t,
                u = { x: e.x, y: e.y },
                d = { x: e.x2, y: e.y2 },
                f =
                  "auto" === t.rotation
                    ? (function (e) {
                        let { x: t, y: r, x2: n, y2: i } = e,
                          a = Math.atan2(i - r, n - t);
                        return a > o.P / 2
                          ? a - o.P
                          : a < -(o.P / 2)
                          ? a + o.P
                          : a;
                      })(e)
                    : (0, o.t)(t.rotation),
                h = (function (e, t, r) {
                  let n = Math.cos(r),
                    o = Math.sin(r);
                  return {
                    w: Math.abs(e * n) + Math.abs(t * o),
                    h: Math.abs(e * o) + Math.abs(t * n),
                  };
                })(i, a, f),
                p = (function (e, t, r, n) {
                  let o = (function (e, t) {
                    let { x: r, x2: n, y: o, y2: i } = e,
                      a = Math.min(o, i) - t.top,
                      s = Math.min(r, n) - t.left,
                      l = t.bottom - Math.max(o, i),
                      c = t.right - Math.max(r, n);
                    return {
                      x: Math.min(s, c),
                      y: Math.min(a, l),
                      dx: s <= c ? 1 : -1,
                      dy: a <= l ? 1 : -1,
                    };
                  })(e, n);
                  return "start" === t.position
                    ? eO({ w: e.x2 - e.x, h: e.y2 - e.y }, r, t, o)
                    : "end" === t.position
                    ? 1 - eO({ w: e.x - e.x2, h: e.y - e.y2 }, r, t, o)
                    : w(1, t.position);
                })(e, t, { labelSize: h, padding: s }, n),
                g = e.cp ? eg(u, e.cp, d, p) : ec(u, d, p),
                y = { size: h.w, min: n.left, max: n.right, padding: s.left },
                m = { size: h.h, min: n.top, max: n.bottom, padding: s.top },
                b = e_(g.x, y) + l,
                v = e_(g.y, m) + c;
              return {
                x: b - i / 2,
                y: v - a / 2,
                x2: b + i / 2,
                y2: v + a / 2,
                centerX: b,
                centerY: v,
                pointX: g.x,
                pointY: g.y,
                width: i,
                height: a,
                rotation: (0, o.U)(f),
              };
            })(
              t,
              r,
              {
                width: a.width + i.width + n,
                height: a.height + i.height + n,
                padding: i,
              },
              e.chartArea
            );
          })(e, u, t.label);
          return (
            (d._visible = c),
            (u.elements = [
              {
                type: "label",
                optionScope: "label",
                properties: d,
                initProperties: u.initProperties,
              },
            ]),
            u
          );
        }
      }
      eb.id = "lineAnnotation";
      let ev = {
        backgroundColor: void 0,
        backgroundShadowColor: void 0,
        borderColor: void 0,
        borderDash: void 0,
        borderDashOffset: void 0,
        borderShadowColor: void 0,
        borderWidth: void 0,
        display: void 0,
        fill: void 0,
        length: void 0,
        shadowBlur: void 0,
        shadowOffsetX: void 0,
        shadowOffsetY: void 0,
        width: void 0,
      };
      function ew({ x: e, y: t }, r, { top: n, right: o, bottom: i, left: a }) {
        return (
          e < a && ((t = ed(a, { x: e, y: t }, r)), (e = a)),
          e > o && ((t = ed(o, { x: e, y: t }, r)), (e = o)),
          t < n && ((e = eu(n, { x: e, y: t }, r)), (t = n)),
          t > i && ((e = eu(i, { x: e, y: t }, r)), (t = i)),
          { x: e, y: t }
        );
      }
      function ex(e, { mouseX: t, mouseY: r }, n, o) {
        let i = e.label;
        return i.options.display && i.inRange(t, r, o, n);
      }
      function eO(e, t, r, n) {
        let { labelSize: o, padding: i } = t,
          a = e.w * n.dx,
          s = e.h * n.dy;
        return u(
          Math.max(
            a > 0 && (o.w / 2 + i.left - n.x) / a,
            s > 0 && (o.h / 2 + i.top - n.y) / s
          ),
          0,
          0.25
        );
      }
      function e_(e, t) {
        let { size: r, min: n, max: o, padding: i } = t,
          a = r / 2;
        return r > o - n
          ? (o + n) / 2
          : (n >= e - i - a && (e = n + i + a),
            o <= e + i + a && (e = o - i - a),
            e);
      }
      function ek(e) {
        let t = e.options,
          r = t.arrowHeads && t.arrowHeads.start,
          n = t.arrowHeads && t.arrowHeads.end;
        return {
          startOpts: r,
          endOpts: n,
          startAdjust: eS(e, r),
          endAdjust: eS(e, n),
        };
      }
      function eS(e, t) {
        if (!t || !t.display) return 0;
        let { length: r, width: n } = t,
          o = e.options.borderWidth / 2;
        return Math.abs(eu(0, { x: r, y: n + o }, { x: 0, y: o }));
      }
      function eP(e, t, r, n) {
        if (!n || !n.display) return;
        let {
            length: o,
            width: i,
            fill: a,
            backgroundColor: s,
            borderColor: l,
          } = n,
          c = Math.abs(t - o) + r;
        e.beginPath(),
          N(e, n),
          L(e, n),
          e.moveTo(c, -i),
          e.lineTo(t + r, 0),
          e.lineTo(c, i),
          !0 === a
            ? ((e.fillStyle = s || l),
              e.closePath(),
              e.fill(),
              (e.shadowColor = "transparent"))
            : (e.shadowColor = n.borderShadowColor),
          e.stroke();
      }
      function eE(e, { x: t, y: r }, { angle: n, adjust: o }, i) {
        i &&
          i.display &&
          (e.save(),
          e.translate(t, r),
          e.rotate(n),
          eP(e, 0, -o, i),
          e.restore());
      }
      (eb.defaults = {
        adjustScaleRange: !0,
        arrowHeads: {
          display: !1,
          end: Object.assign({}, ev),
          fill: !1,
          length: 12,
          start: Object.assign({}, ev),
          width: 6,
        },
        borderDash: [],
        borderDashOffset: 0,
        borderShadowColor: "transparent",
        borderWidth: 2,
        curve: !1,
        controlPoint: { y: "-50%" },
        display: !0,
        endValue: void 0,
        init: void 0,
        hitTolerance: 0,
        label: {
          backgroundColor: "rgba(0,0,0,0.8)",
          backgroundShadowColor: "transparent",
          borderCapStyle: "butt",
          borderColor: "black",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderRadius: 6,
          borderShadowColor: "transparent",
          borderWidth: 0,
          callout: Object.assign({}, el.defaults.callout),
          color: "#fff",
          content: null,
          display: !1,
          drawTime: void 0,
          font: {
            family: void 0,
            lineHeight: void 0,
            size: void 0,
            style: void 0,
            weight: "bold",
          },
          height: void 0,
          hitTolerance: void 0,
          opacity: void 0,
          padding: 6,
          position: "center",
          rotation: 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          textAlign: "center",
          textStrokeColor: void 0,
          textStrokeWidth: 0,
          width: void 0,
          xAdjust: 0,
          yAdjust: 0,
          z: void 0,
        },
        scaleID: void 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        value: void 0,
        xMax: void 0,
        xMin: void 0,
        xScaleID: void 0,
        yMax: void 0,
        yMin: void 0,
        yScaleID: void 0,
        z: 0,
      }),
        (eb.descriptors = {
          arrowHeads: {
            start: { _fallback: !0 },
            end: { _fallback: !0 },
            _fallback: !0,
          },
        }),
        (eb.defaultRoutes = { borderColor: "color" });
      class eT extends n.W_ {
        inRange(e, t, r, n) {
          let i = this.options.rotation,
            a = (this.options.borderWidth + this.options.hitTolerance) / 2;
          if ("x" !== r && "y" !== r)
            return (function (e, t, r, n) {
              let { width: i, height: a, centerX: s, centerY: l } = t,
                c = i / 2,
                u = a / 2;
              if (c <= 0 || u <= 0) return !1;
              let d = (0, o.t)(r || 0),
                f = Math.cos(d),
                h = Math.sin(d);
              return (
                Math.pow(f * (e.x - s) + h * (e.y - l), 2) /
                  Math.pow(c + n, 2) +
                  Math.pow(h * (e.x - s) - f * (e.y - l), 2) /
                    Math.pow(u + n, 2) <=
                1.0001
              );
            })(
              { x: e, y: t },
              this.getProps(["width", "height", "centerX", "centerY"], n),
              i,
              a
            );
          let {
              x: s,
              y: c,
              x2: u,
              y2: d,
            } = this.getProps(["x", "y", "x2", "y2"], n),
            f = "y" === r ? { start: c, end: d } : { start: s, end: u },
            h = l({ x: e, y: t }, this.getCenterPoint(n), (0, o.t)(-i));
          return h[r] >= f.start - a - 0.001 && h[r] <= f.end + a + 0.001;
        }
        getCenterPoint(e) {
          return p(this, e);
        }
        draw(e) {
          let {
            width: t,
            height: r,
            centerX: n,
            centerY: i,
            options: a,
          } = this;
          e.save(),
            D(e, this.getCenterPoint(), a.rotation),
            N(e, this.options),
            e.beginPath(),
            (e.fillStyle = a.backgroundColor);
          let s = L(e, a);
          e.ellipse(n, i, r / 2, t / 2, o.P / 2, 0, 2 * o.P),
            e.fill(),
            s && ((e.shadowColor = a.borderShadowColor), e.stroke()),
            e.restore();
        }
        get label() {
          return this.elements && this.elements[0];
        }
        resolveElementProperties(e, t) {
          return K(e, t);
        }
      }
      (eT.id = "ellipseAnnotation"),
        (eT.defaults = {
          adjustScaleRange: !0,
          backgroundShadowColor: "transparent",
          borderDash: [],
          borderDashOffset: 0,
          borderShadowColor: "transparent",
          borderWidth: 1,
          display: !0,
          hitTolerance: 0,
          init: void 0,
          label: Object.assign({}, ea.defaults.label),
          rotation: 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          xMax: void 0,
          xMin: void 0,
          xScaleID: void 0,
          yMax: void 0,
          yMin: void 0,
          yScaleID: void 0,
          z: 0,
        }),
        (eT.defaultRoutes = { borderColor: "color", backgroundColor: "color" }),
        (eT.descriptors = { label: { _fallback: !0 } });
      class eC extends n.W_ {
        inRange(e, t, r, n) {
          let {
              x: o,
              y: i,
              x2: a,
              y2: s,
              width: l,
            } = this.getProps(["x", "y", "x2", "y2", "width"], n),
            c = (this.options.borderWidth + this.options.hitTolerance) / 2;
          if ("x" !== r && "y" !== r) {
            var u, f, h;
            return (
              (u = { x: e, y: t }),
              (f = this.getCenterPoint(n)),
              (h = l / 2),
              !!u &&
                !!f &&
                !(h <= 0) &&
                Math.pow(u.x - f.x, 2) + Math.pow(u.y - f.y, 2) <=
                  Math.pow(h + c, 2)
            );
          }
          return d(
            "y" === r
              ? { start: i, end: s, value: t }
              : { start: o, end: a, value: e },
            c
          );
        }
        getCenterPoint(e) {
          return p(this, e);
        }
        draw(e) {
          let t = this.options,
            r = t.borderWidth;
          if (t.radius < 0.1) return;
          e.save(), (e.fillStyle = t.backgroundColor), N(e, t);
          let n = L(e, t);
          !(function (e, t, r, n) {
            let { radius: i, options: a } = t,
              s = a.pointStyle,
              l = a.rotation,
              c = (l || 0) * o.b3;
            if (I(s)) {
              e.save(),
                e.translate(r, n),
                e.rotate(c),
                e.drawImage(s, -s.width / 2, -s.height / 2, s.width, s.height),
                e.restore();
              return;
            }
            j(i) ||
              (function (
                e,
                { x: t, y: r, radius: n, rotation: i, style: a, rad: s }
              ) {
                let l, c, u, d;
                switch ((e.beginPath(), a)) {
                  default:
                    e.arc(t, r, n, 0, o.T), e.closePath();
                    break;
                  case "triangle":
                    e.moveTo(t + Math.sin(s) * n, r - Math.cos(s) * n),
                      (s += o.b5),
                      e.lineTo(t + Math.sin(s) * n, r - Math.cos(s) * n),
                      (s += o.b5),
                      e.lineTo(t + Math.sin(s) * n, r - Math.cos(s) * n),
                      e.closePath();
                    break;
                  case "rectRounded":
                    (d = 0.516 * n),
                      (u = n - d),
                      (l = Math.cos(s + o.b4) * u),
                      (c = Math.sin(s + o.b4) * u),
                      e.arc(t - l, r - c, d, s - o.P, s - o.H),
                      e.arc(t + c, r - l, d, s - o.H, s),
                      e.arc(t + l, r + c, d, s, s + o.H),
                      e.arc(t - c, r + l, d, s + o.H, s + o.P),
                      e.closePath();
                    break;
                  case "rect":
                    if (!i) {
                      (u = Math.SQRT1_2 * n),
                        e.rect(t - u, r - u, 2 * u, 2 * u);
                      break;
                    }
                    s += o.b4;
                  case "rectRot":
                    (l = Math.cos(s) * n),
                      (c = Math.sin(s) * n),
                      e.moveTo(t - l, r - c),
                      e.lineTo(t + c, r - l),
                      e.lineTo(t + l, r + c),
                      e.lineTo(t - c, r + l),
                      e.closePath();
                    break;
                  case "crossRot":
                    s += o.b4;
                  case "cross":
                    (l = Math.cos(s) * n),
                      (c = Math.sin(s) * n),
                      e.moveTo(t - l, r - c),
                      e.lineTo(t + l, r + c),
                      e.moveTo(t + c, r - l),
                      e.lineTo(t - c, r + l);
                    break;
                  case "star":
                    (l = Math.cos(s) * n),
                      (c = Math.sin(s) * n),
                      e.moveTo(t - l, r - c),
                      e.lineTo(t + l, r + c),
                      e.moveTo(t + c, r - l),
                      e.lineTo(t - c, r + l),
                      (s += o.b4),
                      (l = Math.cos(s) * n),
                      (c = Math.sin(s) * n),
                      e.moveTo(t - l, r - c),
                      e.lineTo(t + l, r + c),
                      e.moveTo(t + c, r - l),
                      e.lineTo(t - c, r + l);
                    break;
                  case "line":
                    (l = Math.cos(s) * n),
                      (c = Math.sin(s) * n),
                      e.moveTo(t - l, r - c),
                      e.lineTo(t + l, r + c);
                    break;
                  case "dash":
                    e.moveTo(t, r),
                      e.lineTo(t + Math.cos(s) * n, r + Math.sin(s) * n);
                }
                e.fill();
              })(e, { x: r, y: n, radius: i, rotation: l, style: s, rad: c });
          })(e, this, this.centerX, this.centerY),
            n &&
              !I(t.pointStyle) &&
              ((e.shadowColor = t.borderShadowColor), e.stroke()),
            e.restore(),
            (t.borderWidth = r);
        }
        resolveElementProperties(e, t) {
          let r = $(e, t);
          return (r.initProperties = T(e, r, t)), r;
        }
      }
      (eC.id = "pointAnnotation"),
        (eC.defaults = {
          adjustScaleRange: !0,
          backgroundShadowColor: "transparent",
          borderDash: [],
          borderDashOffset: 0,
          borderShadowColor: "transparent",
          borderWidth: 1,
          display: !0,
          hitTolerance: 0,
          init: void 0,
          pointStyle: "circle",
          radius: 10,
          rotation: 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          xAdjust: 0,
          xMax: void 0,
          xMin: void 0,
          xScaleID: void 0,
          xValue: void 0,
          yAdjust: 0,
          yMax: void 0,
          yMin: void 0,
          yScaleID: void 0,
          yValue: void 0,
          z: 0,
        }),
        (eC.defaultRoutes = { borderColor: "color", backgroundColor: "color" });
      class eM extends n.W_ {
        inRange(e, t, r, n) {
          if ("x" !== r && "y" !== r)
            return (
              this.options.radius >= 0.1 &&
              this.elements.length > 1 &&
              (function (e, t, r, n) {
                let o = !1,
                  i = e[e.length - 1].getProps(["bX", "bY"], n);
                for (let a of e) {
                  let e = a.getProps(["bX", "bY"], n);
                  e.bY > r != i.bY > r &&
                    t < ((i.bX - e.bX) * (r - e.bY)) / (i.bY - e.bY) + e.bX &&
                    (o = !o),
                    (i = e);
                }
                return o;
              })(this.elements, e, t, n)
            );
          let i = l(
              { x: e, y: t },
              this.getCenterPoint(n),
              (0, o.t)(-this.options.rotation)
            ),
            a = this.elements.map((e) => ("y" === r ? e.bY : e.bX)),
            s = Math.min(...a),
            c = Math.max(...a);
          return i[r] >= s && i[r] <= c;
        }
        getCenterPoint(e) {
          return p(this, e);
        }
        draw(e) {
          let { elements: t, options: r } = this;
          e.save(), e.beginPath(), (e.fillStyle = r.backgroundColor), N(e, r);
          let n = L(e, r),
            o = !0;
          for (let r of t)
            o ? (e.moveTo(r.x, r.y), (o = !1)) : e.lineTo(r.x, r.y);
          e.closePath(),
            e.fill(),
            n && ((e.shadowColor = r.borderShadowColor), e.stroke()),
            e.restore();
        }
        resolveElementProperties(e, t) {
          let r = $(e, t),
            { sides: n, rotation: i } = t,
            a = [],
            s = (2 * o.P) / n,
            l = i * o.b3;
          for (let o = 0; o < n; o++, l += s) {
            let n = (function (
              { centerX: e, centerY: t },
              { radius: r, borderWidth: n, hitTolerance: o },
              i
            ) {
              let a = (n + o) / 2,
                s = Math.sin(i),
                l = Math.cos(i),
                c = { x: e + s * r, y: t - l * r };
              return {
                type: "point",
                optionScope: "point",
                properties: {
                  x: c.x,
                  y: c.y,
                  centerX: c.x,
                  centerY: c.y,
                  bX: e + s * (r + a),
                  bY: t - l * (r + a),
                },
              };
            })(r, t, l);
            (n.initProperties = T(e, r, t)), a.push(n);
          }
          return (r.elements = a), r;
        }
      }
      (eM.id = "polygonAnnotation"),
        (eM.defaults = {
          adjustScaleRange: !0,
          backgroundShadowColor: "transparent",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderShadowColor: "transparent",
          borderWidth: 1,
          display: !0,
          hitTolerance: 0,
          init: void 0,
          point: { radius: 0 },
          radius: 10,
          rotation: 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          sides: 3,
          xAdjust: 0,
          xMax: void 0,
          xMin: void 0,
          xScaleID: void 0,
          xValue: void 0,
          yAdjust: 0,
          yMax: void 0,
          yMin: void 0,
          yScaleID: void 0,
          yValue: void 0,
          z: 0,
        }),
        (eM.defaultRoutes = { borderColor: "color", backgroundColor: "color" });
      let eR = {
        box: ea,
        doughnutLabel: es,
        ellipse: eT,
        label: el,
        line: eb,
        point: eC,
        polygon: eM,
      };
      Object.keys(eR).forEach((e) => {
        o.d.describe(`elements.${eR[e].id}`, {
          _fallback: "plugins.annotation.common",
        });
      });
      let ej = { update: Object.assign },
        eA = Z.concat(er),
        eI = (e, t) => ((0, o.i)(t) ? eB(e, t) : e),
        eD = (e) => "color" === e || "font" === e;
      function eL(e = "line") {
        return eR[e]
          ? e
          : (console.warn(
              `Unknown annotation type: '${e}', defaulting to 'line'`
            ),
            "line");
      }
      function eN(e, t, r, n) {
        let o = eR[eL(r)],
          i = e[t];
        return (
          (i && i instanceof o) || Object.assign((i = e[t] = new o()), n), i
        );
      }
      function ez(e) {
        let t = eR[eL(e.type)],
          r = {};
        for (let n of ((r.id = e.id),
        (r.type = e.type),
        (r.drawTime = e.drawTime),
        Object.assign(r, eB(e, t.defaults), eB(e, t.defaultRoutes)),
        eA))
          r[n] = e[n];
        return r;
      }
      function eB(e, t) {
        let r = {};
        for (let n of Object.keys(t)) {
          let i = t[n],
            a = e[n];
          eD(n) && (0, o.b)(a)
            ? (r[n] = a.map((e) => eI(e, i)))
            : (r[n] = eI(a, i));
        }
        return r;
      }
      let eF = new Map(),
        eU = (e) => "doughnutLabel" !== e.type,
        eW = Z.concat(er);
      var eH = {
        id: "annotation",
        version: "3.1.0",
        beforeRegister() {
          !(function (e, t, r, n = !0) {
            let o = r.split("."),
              i = 0;
            for (let t of "4.0".split(".")) {
              let a = o[i++];
              if (parseInt(t, 10) < parseInt(a, 10)) break;
              if (c(a, t)) {
                if (!n) return !1;
                throw Error(
                  `${e} v${r} is not supported. v4.0 or newer is required.`
                );
              }
            }
          })("chart.js", 0, n.kL.version);
        },
        afterRegister() {
          n.kL.register(eR);
        },
        afterUnregister() {
          n.kL.unregister(eR);
        },
        beforeInit(e) {
          eF.set(e, {
            annotations: [],
            elements: [],
            visibleElements: [],
            listeners: {},
            listened: !1,
            moveListened: !1,
            hooks: {},
            hooked: !1,
            hovered: [],
          });
        },
        beforeUpdate(e, t, r) {
          let n = (eF.get(e).annotations = []),
            i = r.annotations;
          (0, o.i)(i)
            ? Object.keys(i).forEach((e) => {
                let t = i[e];
                (0, o.i)(t) && ((t.id = e), n.push(t));
              })
            : (0, o.b)(i) && n.push(...i),
            (function (e, t) {
              for (let r of e)
                (function (e, t) {
                  for (let r of ["scaleID", "xScaleID", "yScaleID"]) {
                    let n = q(t, e, r);
                    n &&
                      !t[n] &&
                      (function (e, t) {
                        if ("scaleID" === t) return !0;
                        let r = t.charAt(0);
                        for (let t of ["Min", "Max", "Value"])
                          if ((0, o.h)(e[r + t])) return !0;
                        return !1;
                      })(e, r) &&
                      console.warn(
                        `No scale found with id '${n}' for annotation '${e.id}'`
                      );
                  }
                })(r, t);
            })(n.filter(eU), e.scales);
        },
        afterDataLimits(e, t) {
          let r = eF.get(e);
          !(function (e, t, r) {
            let n = (function (e, t, r) {
                let n = t.axis,
                  i = t.id,
                  a = n + "ScaleID",
                  s = {
                    min: (0, o.v)(t.min, Number.NEGATIVE_INFINITY),
                    max: (0, o.v)(t.max, Number.POSITIVE_INFINITY),
                  };
                for (let o of r)
                  o.scaleID === i
                    ? ei(o, t, ["value", "endValue"], s)
                    : q(e, o, a) === i &&
                      ei(o, t, [n + "Min", n + "Max", n + "Value"], s);
                return s;
              })(e.scales, t, r),
              i = eo(t, n, "min", "suggestedMin");
            (i = eo(t, n, "max", "suggestedMax") || i) &&
              (0, o.a7)(t.handleTickRangeOptions) &&
              t.handleTickRangeOptions();
          })(
            e,
            t.scale,
            r.annotations
              .filter(eU)
              .filter((e) => e.display && e.adjustScaleRange)
          );
        },
        afterUpdate(e, t, r) {
          let i = eF.get(e);
          (i.listened = C(r, Z, i.listeners)),
            (i.moveListened = !1),
            Q.forEach((e) => {
              (0, o.a7)(r[e]) && (i.moveListened = !0);
            }),
            (i.listened && i.moveListened) ||
              i.annotations.forEach((e) => {
                !i.listened && (0, o.a7)(e.click) && (i.listened = !0),
                  i.moveListened ||
                    Q.forEach((t) => {
                      (0, o.a7)(e[t]) &&
                        ((i.listened = !0), (i.moveListened = !0));
                    });
              }),
            (function (e, t, r, i) {
              var a;
              let s =
                  ((a = r.animations),
                  "reset" === i || "none" === i || "resize" === i
                    ? ej
                    : new n.FK(e, a)),
                l = t.annotations,
                c = (function (e, t) {
                  let r = t.length,
                    n = e.length;
                  return (
                    n < r
                      ? e.splice(n, 0, ...Array(r - n))
                      : n > r && e.splice(r, n - r),
                    e
                  );
                })(t.elements, l);
              for (let t = 0; t < l.length; t++) {
                let r = l[t],
                  n = eN(c, t, r.type),
                  i = r.setContext(
                    n.$context ||
                      (n.$context = Object.assign(
                        Object.create(e.getContext()),
                        {
                          element: n,
                          get elements() {
                            return c.filter((e) => e && e.options);
                          },
                          id: r.id,
                          type: "annotation",
                        }
                      ))
                  ),
                  a = n.resolveElementProperties(e, i);
                (a.skip = isNaN(a.x) || isNaN(a.y)),
                  "elements" in a &&
                    ((function (e, t, r, n) {
                      let o = e.elements || (e.elements = []);
                      o.length = t.length;
                      for (let e = 0; e < t.length; e++) {
                        let i = t[e],
                          a = i.properties,
                          s = eN(o, e, i.type, i.initProperties),
                          l = r[i.optionScope].override(i);
                        (a.options = ez(l)), n.update(s, a);
                      }
                    })(n, a.elements, i, s),
                    delete a.elements),
                  (0, o.h)(n.x) || Object.assign(n, a),
                  Object.assign(n, a.initProperties),
                  (a.options = ez(i)),
                  s.update(n, a);
              }
            })(e, i, r, t.mode),
            (i.visibleElements = i.elements.filter(
              (e) => !e.skip && e.options.display
            )),
            (function (e, t, r) {
              let n = t.visibleElements;
              (t.hooked = C(r, er, t.hooks)),
                t.hooked ||
                  n.forEach((e) => {
                    t.hooked ||
                      er.forEach((r) => {
                        (0, o.a7)(e.options[r]) && (t.hooked = !0);
                      });
                  });
            })(0, i, r);
        },
        beforeDatasetsDraw(e, t, r) {
          eq(e, "beforeDatasetsDraw", r.clip);
        },
        afterDatasetsDraw(e, t, r) {
          eq(e, "afterDatasetsDraw", r.clip);
        },
        beforeDatasetDraw(e, t, r) {
          eq(e, t.index, r.clip);
        },
        beforeDraw(e, t, r) {
          eq(e, "beforeDraw", r.clip);
        },
        afterDraw(e, t, r) {
          eq(e, "afterDraw", r.clip);
        },
        beforeEvent(e, t, r) {
          (function (e, t, r) {
            if (e.listened)
              switch (t.type) {
                case "mousemove":
                case "mouseout":
                  return (function (e, t, r) {
                    let n;
                    if (!e.moveListened) return;
                    n =
                      "mousemove" === t.type
                        ? a(e.visibleElements, t, r.interaction)
                        : [];
                    let o = e.hovered;
                    e.hovered = n;
                    let i = { state: e, event: t },
                      s = ee(i, "leave", o, n);
                    return ee(i, "enter", n, o) || s;
                  })(e, t, r);
                case "click":
                  return (function (e, t, r) {
                    let n;
                    let o = e.listeners;
                    for (let i of a(e.visibleElements, t, r.interaction))
                      n = et(i.options.click || o.click, i, t) || n;
                    return n;
                  })(e, t, r);
              }
          })(eF.get(e), t.event, r) && (t.changed = !0);
        },
        afterDestroy(e) {
          eF.delete(e);
        },
        getAnnotations(e) {
          let t = eF.get(e);
          return t ? t.elements : [];
        },
        _getAnnotationElementsAtEventForMode: (e, t, r) => a(e, t, r),
        defaults: {
          animations: {
            numbers: {
              properties: [
                "x",
                "y",
                "x2",
                "y2",
                "width",
                "height",
                "centerX",
                "centerY",
                "pointX",
                "pointY",
                "radius",
              ],
              type: "number",
            },
            colors: {
              properties: ["backgroundColor", "borderColor"],
              type: "color",
            },
          },
          clip: !0,
          interaction: { mode: void 0, axis: void 0, intersect: void 0 },
          common: { drawTime: "afterDatasetsDraw", init: !1, label: {} },
        },
        descriptors: {
          _indexable: !1,
          _scriptable: (e) => !eW.includes(e) && "init" !== e,
          annotations: {
            _allKeys: !1,
            _fallback: (e, t) => `elements.${eR[eL(t.type)].id}`,
          },
          interaction: { _fallback: !0 },
          common: { label: { _indexable: eD, _fallback: !0 }, _indexable: eD },
        },
        additionalOptionScopes: [""],
      };
      function eq(e, t, r) {
        let { ctx: n, chartArea: i } = e,
          a = eF.get(e);
        for (let e of (r && (0, o.Y)(n, i),
        (function (e, t) {
          let r = [];
          for (let n of e)
            if (
              (n.options.drawTime === t && r.push({ element: n, main: !0 }),
              n.elements && n.elements.length)
            )
              for (let e of n.elements)
                e.options.display &&
                  e.options.drawTime === t &&
                  r.push({ element: e });
          return r;
        })(a.visibleElements, t).sort(
          (e, t) => e.element.options.z - t.element.options.z
        )))
          !(function (e, t, r, n) {
            let o = n.element;
            n.main
              ? (en(r, o, "beforeDraw"), o.draw(e, t), en(r, o, "afterDraw"))
              : o.draw(e, t);
          })(n, i, a, e);
        r && (0, o.$)(n);
      }
    },
    37346: (e, t, r) => {
      "use strict";
      r.d(t, { x1: () => d });
      var n,
        o,
        i = r(2265),
        a = r(55211);
      let s = "label";
      function l(e, t) {
        "function" == typeof e ? e(t) : e && (e.current = t);
      }
      function c(e, t) {
        let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s,
          n = [];
        e.datasets = t.map((t) => {
          let o = e.datasets.find((e) => e[r] === t[r]);
          return !o || !t.data || n.includes(o)
            ? { ...t }
            : (n.push(o), Object.assign(o, t), o);
        });
      }
      let u = (0, i.forwardRef)(function (e, t) {
          let {
              height: r = 150,
              width: n = 300,
              redraw: o = !1,
              datasetIdKey: u,
              type: d,
              data: f,
              options: h,
              plugins: p = [],
              fallbackContent: g,
              updateMode: y,
              ...m
            } = e,
            b = (0, i.useRef)(null),
            v = (0, i.useRef)(),
            w = () => {
              b.current &&
                ((v.current = new a.kL(b.current, {
                  type: d,
                  data: (function (e) {
                    var t;
                    let r =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : s,
                      n = { labels: [], datasets: [] };
                    return (
                      (t = e.labels), (n.labels = t), c(n, e.datasets, r), n
                    );
                  })(f, u),
                  options: h && { ...h },
                  plugins: p,
                })),
                l(t, v.current));
            },
            x = () => {
              l(t, null),
                v.current && (v.current.destroy(), (v.current = null));
            };
          return (
            (0, i.useEffect)(() => {
              !o &&
                v.current &&
                h &&
                (function (e, t) {
                  let r = e.options;
                  r && t && Object.assign(r, t);
                })(v.current, h);
            }, [o, h]),
            (0, i.useEffect)(() => {
              if (!o && v.current) {
                var e, t;
                (e = v.current.config.data), (t = f.labels), (e.labels = t);
              }
            }, [o, f.labels]),
            (0, i.useEffect)(() => {
              !o &&
                v.current &&
                f.datasets &&
                c(v.current.config.data, f.datasets, u);
            }, [o, f.datasets]),
            (0, i.useEffect)(() => {
              v.current && (o ? (x(), setTimeout(w)) : v.current.update(y));
            }, [o, h, f.labels, f.datasets, y]),
            (0, i.useEffect)(() => {
              v.current && (x(), setTimeout(w));
            }, [d]),
            (0, i.useEffect)(() => (w(), () => x()), []),
            i.createElement(
              "canvas",
              Object.assign({ ref: b, role: "img", height: r, width: n }, m),
              g
            )
          );
        }),
        d =
          ((n = "line"),
          (o = a.ST),
          a.kL.register(o),
          (0, i.forwardRef)((e, t) =>
            i.createElement(u, Object.assign({}, e, { ref: t, type: n }))
          ));
    },
    91810: (e, t, r) => {
      "use strict";
      r.d(t, { w_: () => u });
      var n = r(2265),
        o = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        i = n.createContext && n.createContext(o),
        a = ["attr", "size", "title"];
      function s() {
        return (s = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                var n, o;
                (n = t),
                  (o = r[t]),
                  (n = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(n)) in e
                    ? Object.defineProperty(e, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[n] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function u(e) {
        return (t) =>
          n.createElement(
            d,
            s({ attr: c({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map((t, r) =>
                  n.createElement(t.tag, c({ key: r }, t.attr), e(t.child))
                )
              );
            })(e.child)
          );
      }
      function d(e) {
        var t = (t) => {
          var r,
            { attr: o, size: i, title: l } = e,
            u = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                o = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                      if (t.indexOf(n) >= 0) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                  (r = i[n]),
                    !(t.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (o[r] = e[r]);
              }
              return o;
            })(e, a),
            d = i || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            n.createElement(
              "svg",
              s(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                o,
                u,
                {
                  className: r,
                  style: c(c({ color: e.color || t.color }, t.style), e.style),
                  height: d,
                  width: d,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              l && n.createElement("title", null, l),
              e.children
            )
          );
        };
        return void 0 !== i
          ? n.createElement(i.Consumer, null, (e) => t(e))
          : t(o);
      }
    },
    23580: (e, t, r) => {
      "use strict";
      r.d(t, { ToastContainer: () => I, Am: () => P });
      var n = r(2265);
      let o = function () {
          for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
            (e = arguments[r]) &&
              (t = (function e(t) {
                var r,
                  n,
                  o = "";
                if ("string" == typeof t || "number" == typeof t) o += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t)) {
                    var i = t.length;
                    for (r = 0; r < i; r++)
                      t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                  } else for (n in t) t[n] && (o && (o += " "), (o += n));
                }
                return o;
              })(e)) &&
              (n && (n += " "), (n += t));
          return n;
        },
        i = (e) => "number" == typeof e && !isNaN(e),
        a = (e) => "string" == typeof e,
        s = (e) => "function" == typeof e,
        l = (e) => (a(e) || s(e) ? e : null),
        c = (e) => (0, n.isValidElement)(e) || a(e) || s(e) || i(e);
      function u(e) {
        let {
          enter: t,
          exit: r,
          appendPosition: o = !1,
          collapse: i = !0,
          collapseDuration: a = 300,
        } = e;
        return function (e) {
          let {
              children: s,
              position: l,
              preventExitTransition: c,
              done: u,
              nodeRef: d,
              isIn: f,
              playToast: h,
            } = e,
            p = o ? "".concat(t, "--").concat(l) : t,
            g = o ? "".concat(r, "--").concat(l) : r,
            y = (0, n.useRef)(0);
          return (
            (0, n.useLayoutEffect)(() => {
              let e = d.current,
                t = p.split(" "),
                r = (n) => {
                  n.target === d.current &&
                    (h(),
                    e.removeEventListener("animationend", r),
                    e.removeEventListener("animationcancel", r),
                    0 === y.current &&
                      "animationcancel" !== n.type &&
                      e.classList.remove(...t));
                };
              e.classList.add(...t),
                e.addEventListener("animationend", r),
                e.addEventListener("animationcancel", r);
            }, []),
            (0, n.useEffect)(() => {
              let e = d.current,
                t = () => {
                  e.removeEventListener("animationend", t),
                    i
                      ? (function (e, t, r) {
                          void 0 === r && (r = 300);
                          let { scrollHeight: n, style: o } = e;
                          requestAnimationFrame(() => {
                            (o.minHeight = "initial"),
                              (o.height = n + "px"),
                              (o.transition = "all ".concat(r, "ms")),
                              requestAnimationFrame(() => {
                                (o.height = "0"),
                                  (o.padding = "0"),
                                  (o.margin = "0"),
                                  setTimeout(t, r);
                              });
                          });
                        })(e, u, a)
                      : u();
                };
              f ||
                (c
                  ? t()
                  : ((y.current = 1),
                    (e.className += " ".concat(g)),
                    e.addEventListener("animationend", t)));
            }, [f]),
            n.createElement(n.Fragment, null, s)
          );
        };
      }
      function d(e, t) {
        return null != e
          ? {
              content: e.content,
              containerId: e.props.containerId,
              id: e.props.toastId,
              theme: e.props.theme,
              type: e.props.type,
              data: e.props.data || {},
              isLoading: e.props.isLoading,
              icon: e.props.icon,
              status: t,
            }
          : {};
      }
      let f = new Map(),
        h = [],
        p = new Set(),
        g = (e) => p.forEach((t) => t(e)),
        y = () => f.size > 0;
      function m(e, t) {
        var r;
        if (t) return !(null == (r = f.get(t)) || !r.isToastActive(e));
        let n = !1;
        return (
          f.forEach((t) => {
            t.isToastActive(e) && (n = !0);
          }),
          n
        );
      }
      function b(e, t) {
        c(e) &&
          (y() || h.push({ content: e, options: t }),
          f.forEach((r) => {
            r.buildToast(e, t);
          }));
      }
      function v(e, t) {
        f.forEach((r) => {
          null != t && null != t && t.containerId
            ? (null == t ? void 0 : t.containerId) === r.id &&
              r.toggle(e, null == t ? void 0 : t.id)
            : r.toggle(e, null == t ? void 0 : t.id);
        });
      }
      function w(e) {
        let {
            delay: t,
            isRunning: r,
            closeToast: i,
            type: a = "default",
            hide: l,
            className: c,
            style: u,
            controlledProgress: d,
            progress: f,
            rtl: h,
            isIn: p,
            theme: g,
          } = e,
          y = l || (d && 0 === f),
          m = {
            ...u,
            animationDuration: "".concat(t, "ms"),
            animationPlayState: r ? "running" : "paused",
          };
        d && (m.transform = "scaleX(".concat(f, ")"));
        let b = o(
            "Toastify__progress-bar",
            d
              ? "Toastify__progress-bar--controlled"
              : "Toastify__progress-bar--animated",
            "Toastify__progress-bar-theme--".concat(g),
            "Toastify__progress-bar--".concat(a),
            { "Toastify__progress-bar--rtl": h }
          ),
          v = s(c) ? c({ rtl: h, type: a, defaultClassName: b }) : o(b, c);
        return n.createElement(
          "div",
          { className: "Toastify__progress-bar--wrp", "data-hidden": y },
          n.createElement("div", {
            className:
              "Toastify__progress-bar--bg Toastify__progress-bar-theme--"
                .concat(g, " Toastify__progress-bar--")
                .concat(a),
          }),
          n.createElement("div", {
            role: "progressbar",
            "aria-hidden": y ? "true" : "false",
            "aria-label": "notification timer",
            className: v,
            style: m,
            [d && f >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
              d && f < 1
                ? null
                : () => {
                    p && i();
                  },
          })
        );
      }
      let x = 1,
        O = () => "" + x++;
      function _(e, t) {
        return b(e, t), t.toastId;
      }
      function k(e, t) {
        return {
          ...t,
          type: (t && t.type) || e,
          toastId: t && (a(t.toastId) || i(t.toastId)) ? t.toastId : O(),
        };
      }
      function S(e) {
        return (t, r) => _(t, k(e, r));
      }
      function P(e, t) {
        return _(e, k("default", t));
      }
      (P.loading = (e, t) =>
        _(
          e,
          k("default", {
            isLoading: !0,
            autoClose: !1,
            closeOnClick: !1,
            closeButton: !1,
            draggable: !1,
            ...t,
          })
        )),
        (P.promise = function (e, t, r) {
          let n,
            { pending: o, error: i, success: l } = t;
          o &&
            (n = a(o) ? P.loading(o, r) : P.loading(o.render, { ...r, ...o }));
          let c = {
              isLoading: null,
              autoClose: null,
              closeOnClick: null,
              closeButton: null,
              draggable: null,
            },
            u = (e, t, o) => {
              if (null == t) return void P.dismiss(n);
              let i = { type: e, ...c, ...r, data: o },
                s = a(t) ? { render: t } : t;
              return (
                n ? P.update(n, { ...i, ...s }) : P(s.render, { ...i, ...s }), o
              );
            },
            d = s(e) ? e() : e;
          return (
            d.then((e) => u("success", l, e)).catch((e) => u("error", i, e)), d
          );
        }),
        (P.success = S("success")),
        (P.info = S("info")),
        (P.error = S("error")),
        (P.warning = S("warning")),
        (P.warn = P.warning),
        (P.dark = (e, t) => _(e, k("default", { theme: "dark", ...t }))),
        (P.dismiss = function (e) {
          !(function (e) {
            var t;
            if (y()) {
              if (null == e || a((t = e)) || i(t))
                f.forEach((t) => {
                  t.removeToast(e);
                });
              else if (e && ("containerId" in e || "id" in e)) {
                let t = f.get(e.containerId);
                t
                  ? t.removeToast(e.id)
                  : f.forEach((t) => {
                      t.removeToast(e.id);
                    });
              }
            } else h = h.filter((t) => null != e && t.options.toastId !== e);
          })(e);
        }),
        (P.clearWaitingQueue = function (e) {
          void 0 === e && (e = {}),
            f.forEach((t) => {
              !t.props.limit ||
                (e.containerId && t.id !== e.containerId) ||
                t.clearQueue();
            });
        }),
        (P.isActive = m),
        (P.update = function (e, t) {
          void 0 === t && (t = {});
          let r = ((e, t) => {
            var r;
            let { containerId: n } = t;
            return null == (r = f.get(n || 1)) ? void 0 : r.toasts.get(e);
          })(e, t);
          if (r) {
            let { props: n, content: o } = r,
              i = {
                delay: 100,
                ...n,
                ...t,
                toastId: t.toastId || e,
                updateId: O(),
              };
            i.toastId !== e && (i.staleId = e);
            let a = i.render || o;
            delete i.render, _(a, i);
          }
        }),
        (P.done = (e) => {
          P.update(e, { progress: 1 });
        }),
        (P.onChange = function (e) {
          return (
            p.add(e),
            () => {
              p.delete(e);
            }
          );
        }),
        (P.play = (e) => v(!0, e)),
        (P.pause = (e) => v(!1, e));
      let E = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect,
        T = (e) => {
          let { theme: t, type: r, isLoading: o, ...i } = e;
          return n.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "100%",
            height: "100%",
            fill:
              "colored" === t
                ? "currentColor"
                : "var(--toastify-icon-color-".concat(r, ")"),
            ...i,
          });
        },
        C = {
          info: function (e) {
            return n.createElement(
              T,
              { ...e },
              n.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
              })
            );
          },
          warning: function (e) {
            return n.createElement(
              T,
              { ...e },
              n.createElement("path", {
                d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
              })
            );
          },
          success: function (e) {
            return n.createElement(
              T,
              { ...e },
              n.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
              })
            );
          },
          error: function (e) {
            return n.createElement(
              T,
              { ...e },
              n.createElement("path", {
                d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
              })
            );
          },
          spinner: function () {
            return n.createElement("div", { className: "Toastify__spinner" });
          },
        },
        M = (e) => {
          let {
              isRunning: t,
              preventExitTransition: r,
              toastRef: i,
              eventHandlers: a,
              playToast: l,
            } = (function (e) {
              var t, r;
              let [o, i] = (0, n.useState)(!1),
                [a, s] = (0, n.useState)(!1),
                l = (0, n.useRef)(null),
                c = (0, n.useRef)({
                  start: 0,
                  delta: 0,
                  removalDistance: 0,
                  canCloseOnClick: !0,
                  canDrag: !1,
                  didMove: !1,
                }).current,
                {
                  autoClose: u,
                  pauseOnHover: d,
                  closeToast: h,
                  onClick: p,
                  closeOnClick: g,
                } = e;
              function y() {
                i(!0);
              }
              function m() {
                i(!1);
              }
              function b(t) {
                let r = l.current;
                c.canDrag &&
                  r &&
                  ((c.didMove = !0),
                  o && m(),
                  (c.delta =
                    "x" === e.draggableDirection
                      ? t.clientX - c.start
                      : t.clientY - c.start),
                  c.start !== t.clientX && (c.canCloseOnClick = !1),
                  (r.style.transform = "translate3d(".concat(
                    "x" === e.draggableDirection
                      ? "".concat(c.delta, "px, var(--y)")
                      : "0, calc(".concat(c.delta, "px + var(--y))"),
                    ",0)"
                  )),
                  (r.style.opacity =
                    "" + (1 - Math.abs(c.delta / c.removalDistance))));
              }
              function v() {
                document.removeEventListener("pointermove", b),
                  document.removeEventListener("pointerup", v);
                let t = l.current;
                if (c.canDrag && c.didMove && t) {
                  if (((c.canDrag = !1), Math.abs(c.delta) > c.removalDistance))
                    return s(!0), e.closeToast(), void e.collapseAll();
                  (t.style.transition = "transform 0.2s, opacity 0.2s"),
                    t.style.removeProperty("transform"),
                    t.style.removeProperty("opacity");
                }
              }
              null ==
                (r = f.get(
                  (t = { id: e.toastId, containerId: e.containerId, fn: i })
                    .containerId || 1
                )) || r.setToggle(t.id, t.fn),
                (0, n.useEffect)(() => {
                  if (e.pauseOnFocusLoss)
                    return (
                      document.hasFocus() || m(),
                      window.addEventListener("focus", y),
                      window.addEventListener("blur", m),
                      () => {
                        window.removeEventListener("focus", y),
                          window.removeEventListener("blur", m);
                      }
                    );
                }, [e.pauseOnFocusLoss]);
              let w = {
                onPointerDown: function (t) {
                  if (!0 === e.draggable || e.draggable === t.pointerType) {
                    (c.didMove = !1),
                      document.addEventListener("pointermove", b),
                      document.addEventListener("pointerup", v);
                    let r = l.current;
                    (c.canCloseOnClick = !0),
                      (c.canDrag = !0),
                      (r.style.transition = "none"),
                      "x" === e.draggableDirection
                        ? ((c.start = t.clientX),
                          (c.removalDistance =
                            r.offsetWidth * (e.draggablePercent / 100)))
                        : ((c.start = t.clientY),
                          (c.removalDistance =
                            (r.offsetHeight *
                              (80 === e.draggablePercent
                                ? 1.5 * e.draggablePercent
                                : e.draggablePercent)) /
                            100));
                  }
                },
                onPointerUp: function (t) {
                  let {
                    top: r,
                    bottom: n,
                    left: o,
                    right: i,
                  } = l.current.getBoundingClientRect();
                  "touchend" !== t.nativeEvent.type &&
                  e.pauseOnHover &&
                  t.clientX >= o &&
                  t.clientX <= i &&
                  t.clientY >= r &&
                  t.clientY <= n
                    ? m()
                    : y();
                },
              };
              return (
                u &&
                  d &&
                  ((w.onMouseEnter = m), e.stacked || (w.onMouseLeave = y)),
                g &&
                  (w.onClick = (e) => {
                    p && p(e), c.canCloseOnClick && h();
                  }),
                {
                  playToast: y,
                  pauseToast: m,
                  isRunning: o,
                  preventExitTransition: a,
                  toastRef: l,
                  eventHandlers: w,
                }
              );
            })(e),
            {
              closeButton: c,
              children: u,
              autoClose: d,
              onClick: h,
              type: p,
              hideProgressBar: g,
              closeToast: y,
              transition: m,
              position: b,
              className: v,
              style: x,
              bodyClassName: O,
              bodyStyle: _,
              progressClassName: k,
              progressStyle: S,
              updateId: P,
              role: E,
              progress: T,
              rtl: M,
              toastId: R,
              deleteToast: j,
              isIn: A,
              isLoading: I,
              closeOnClick: D,
              theme: L,
            } = e,
            N = o(
              "Toastify__toast",
              "Toastify__toast-theme--".concat(L),
              "Toastify__toast--".concat(p),
              { "Toastify__toast--rtl": M },
              { "Toastify__toast--close-on-click": D }
            ),
            z = s(v)
              ? v({ rtl: M, position: b, type: p, defaultClassName: N })
              : o(N, v),
            B = (function (e) {
              let { theme: t, type: r, isLoading: o, icon: i } = e,
                a = null,
                l = { theme: t, type: r };
              return (
                !1 === i ||
                  (s(i)
                    ? (a = i({ ...l, isLoading: o }))
                    : (0, n.isValidElement)(i)
                    ? (a = (0, n.cloneElement)(i, l))
                    : o
                    ? (a = C.spinner())
                    : r in C && (a = C[r](l))),
                a
              );
            })(e),
            F = !!T || !d,
            U = { closeToast: y, type: p, theme: L },
            W = null;
          return (
            !1 === c ||
              (W = s(c)
                ? c(U)
                : (0, n.isValidElement)(c)
                ? (0, n.cloneElement)(c, U)
                : (function (e) {
                    let { closeToast: t, theme: r, ariaLabel: o = "close" } = e;
                    return n.createElement(
                      "button",
                      {
                        className:
                          "Toastify__close-button Toastify__close-button--".concat(
                            r
                          ),
                        type: "button",
                        onClick: (e) => {
                          e.stopPropagation(), t(e);
                        },
                        "aria-label": o,
                      },
                      n.createElement(
                        "svg",
                        { "aria-hidden": "true", viewBox: "0 0 14 16" },
                        n.createElement("path", {
                          fillRule: "evenodd",
                          d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
                        })
                      )
                    );
                  })(U)),
            n.createElement(
              m,
              {
                isIn: A,
                done: j,
                position: b,
                preventExitTransition: r,
                nodeRef: i,
                playToast: l,
              },
              n.createElement(
                "div",
                {
                  id: R,
                  onClick: h,
                  "data-in": A,
                  className: z,
                  ...a,
                  style: x,
                  ref: i,
                },
                n.createElement(
                  "div",
                  {
                    ...(A && { role: E }),
                    className: s(O)
                      ? O({ type: p })
                      : o("Toastify__toast-body", O),
                    style: _,
                  },
                  null != B &&
                    n.createElement(
                      "div",
                      {
                        className: o("Toastify__toast-icon", {
                          "Toastify--animate-icon Toastify__zoom-enter": !I,
                        }),
                      },
                      B
                    ),
                  n.createElement("div", null, u)
                ),
                W,
                n.createElement(w, {
                  ...(P && !F ? { key: "pb-".concat(P) } : {}),
                  rtl: M,
                  theme: L,
                  delay: d,
                  isRunning: t,
                  isIn: A,
                  closeToast: y,
                  hide: g,
                  type: p,
                  style: S,
                  className: k,
                  controlledProgress: F,
                  progress: T || 0,
                })
              )
            )
          );
        },
        R = function (e, t) {
          return (
            void 0 === t && (t = !1),
            {
              enter: "Toastify--animate Toastify__".concat(e, "-enter"),
              exit: "Toastify--animate Toastify__".concat(e, "-exit"),
              appendPosition: t,
            }
          );
        },
        j = u(R("bounce", !0)),
        A =
          (u(R("slide", !0)),
          u(R("zoom")),
          u(R("flip")),
          {
            position: "top-right",
            transition: j,
            autoClose: 5e3,
            closeButton: !0,
            pauseOnHover: !0,
            pauseOnFocusLoss: !0,
            draggable: "touch",
            draggablePercent: 80,
            draggableDirection: "x",
            role: "alert",
            theme: "light",
          });
      function I(e) {
        let t = { ...A, ...e },
          r = e.stacked,
          [u, p] = (0, n.useState)(!0),
          y = (0, n.useRef)(null),
          {
            getToastToRender: v,
            isToastActive: w,
            count: x,
          } = (function (e) {
            let {
              subscribe: t,
              getSnapshot: r,
              setProps: o,
            } = (0, n.useRef)(
              (function (e) {
                let t = e.containerId || 1;
                return {
                  subscribe(r) {
                    let o = (function (e, t, r) {
                      let o = 1,
                        u = 0,
                        f = [],
                        h = [],
                        p = [],
                        g = t,
                        y = new Map(),
                        m = new Set(),
                        b = () => {
                          (p = Array.from(y.values())), m.forEach((e) => e());
                        },
                        v = (e) => {
                          (h = null == e ? [] : h.filter((t) => t !== e)), b();
                        },
                        w = (e) => {
                          let {
                              toastId: t,
                              onOpen: o,
                              updateId: i,
                              children: a,
                            } = e.props,
                            l = null == i;
                          e.staleId && y.delete(e.staleId),
                            y.set(t, e),
                            (h = [...h, e.props.toastId].filter(
                              (t) => t !== e.staleId
                            )),
                            b(),
                            r(d(e, l ? "added" : "updated")),
                            l && s(o) && o((0, n.isValidElement)(a) && a.props);
                        };
                      return {
                        id: e,
                        props: g,
                        observe: (e) => (m.add(e), () => m.delete(e)),
                        toggle: (e, t) => {
                          y.forEach((r) => {
                            (null != t && t !== r.props.toastId) ||
                              (s(r.toggle) && r.toggle(e));
                          });
                        },
                        removeToast: v,
                        toasts: y,
                        clearQueue: () => {
                          (u -= f.length), (f = []);
                        },
                        buildToast: (t, h) => {
                          var p, m;
                          if (
                            ((t) => {
                              let {
                                  containerId: r,
                                  toastId: n,
                                  updateId: o,
                                } = t,
                                i = y.has(n) && null == o;
                              return (r ? r !== e : 1 !== e) || i;
                            })(h)
                          )
                            return;
                          let {
                              toastId: x,
                              updateId: O,
                              data: _,
                              staleId: k,
                              delay: S,
                            } = h,
                            P = () => {
                              v(x);
                            },
                            E = null == O;
                          E && u++;
                          let T = {
                            ...g,
                            style: g.toastStyle,
                            key: o++,
                            ...Object.fromEntries(
                              Object.entries(h).filter((e) => {
                                let [t, r] = e;
                                return null != r;
                              })
                            ),
                            toastId: x,
                            updateId: O,
                            data: _,
                            closeToast: P,
                            isIn: !1,
                            className: l(h.className || g.toastClassName),
                            bodyClassName: l(
                              h.bodyClassName || g.bodyClassName
                            ),
                            progressClassName: l(
                              h.progressClassName || g.progressClassName
                            ),
                            autoClose:
                              !h.isLoading &&
                              ((p = h.autoClose),
                              (m = g.autoClose),
                              !1 === p || (i(p) && p > 0) ? p : m),
                            deleteToast() {
                              let e = y.get(x),
                                { onClose: t, children: o } = e.props;
                              s(t) && t((0, n.isValidElement)(o) && o.props),
                                r(d(e, "removed")),
                                y.delete(x),
                                --u < 0 && (u = 0),
                                f.length > 0 ? w(f.shift()) : b();
                            },
                          };
                          (T.closeButton = g.closeButton),
                            !1 === h.closeButton || c(h.closeButton)
                              ? (T.closeButton = h.closeButton)
                              : !0 === h.closeButton &&
                                (T.closeButton =
                                  !c(g.closeButton) || g.closeButton);
                          let C = t;
                          (0, n.isValidElement)(t) && !a(t.type)
                            ? (C = (0, n.cloneElement)(t, {
                                closeToast: P,
                                toastProps: T,
                                data: _,
                              }))
                            : s(t) &&
                              (C = t({
                                closeToast: P,
                                toastProps: T,
                                data: _,
                              }));
                          let M = { content: C, props: T, staleId: k };
                          g.limit && g.limit > 0 && u > g.limit && E
                            ? f.push(M)
                            : i(S)
                            ? setTimeout(() => {
                                w(M);
                              }, S)
                            : w(M);
                        },
                        setProps(e) {
                          g = e;
                        },
                        setToggle: (e, t) => {
                          y.get(e).toggle = t;
                        },
                        isToastActive: (e) => h.some((t) => t === e),
                        getSnapshot: () => p,
                      };
                    })(t, e, g);
                    f.set(t, o);
                    let u = o.observe(r);
                    return (
                      h.forEach((e) => b(e.content, e.options)),
                      (h = []),
                      () => {
                        u(), f.delete(t);
                      }
                    );
                  },
                  setProps(e) {
                    var r;
                    null == (r = f.get(t)) || r.setProps(e);
                  },
                  getSnapshot() {
                    var e;
                    return null == (e = f.get(t)) ? void 0 : e.getSnapshot();
                  },
                };
              })(e)
            ).current;
            o(e);
            let u = (0, n.useSyncExternalStore)(t, r, r);
            return {
              getToastToRender: function (t) {
                if (!u) return [];
                let r = new Map();
                return (
                  e.newestOnTop && u.reverse(),
                  u.forEach((e) => {
                    let { position: t } = e.props;
                    r.has(t) || r.set(t, []), r.get(t).push(e);
                  }),
                  Array.from(r, (e) => t(e[0], e[1]))
                );
              },
              isToastActive: m,
              count: null == u ? void 0 : u.length,
            };
          })(t),
          { className: O, style: _, rtl: k, containerId: S } = t;
        function T() {
          r && (p(!0), P.play());
        }
        return (
          E(() => {
            if (r) {
              var e;
              let r = y.current.querySelectorAll('[data-in="true"]'),
                n = null == (e = t.position) ? void 0 : e.includes("top"),
                o = 0,
                i = 0;
              Array.from(r)
                .reverse()
                .forEach((e, t) => {
                  e.classList.add("Toastify__toast--stacked"),
                    t > 0 && (e.dataset.collapsed = "".concat(u)),
                    e.dataset.pos || (e.dataset.pos = n ? "top" : "bot");
                  let r = o * (u ? 0.2 : 1) + (u ? 0 : 12 * t);
                  e.style.setProperty("--y", "".concat(n ? r : -1 * r, "px")),
                    e.style.setProperty("--g", "".concat(12)),
                    e.style.setProperty("--s", "" + (1 - (u ? i : 0))),
                    (o += e.offsetHeight),
                    (i += 0.025);
                });
            }
          }, [u, x, r]),
          n.createElement(
            "div",
            {
              ref: y,
              className: "Toastify",
              id: S,
              onMouseEnter: () => {
                r && (p(!1), P.pause());
              },
              onMouseLeave: T,
            },
            v((e, t) => {
              let i = t.length ? { ..._ } : { ..._, pointerEvents: "none" };
              return n.createElement(
                "div",
                {
                  className: (function (e) {
                    let t = o(
                      "Toastify__toast-container",
                      "Toastify__toast-container--".concat(e),
                      { "Toastify__toast-container--rtl": k }
                    );
                    return s(O)
                      ? O({ position: e, rtl: k, defaultClassName: t })
                      : o(t, l(O));
                  })(e),
                  style: i,
                  key: "container-".concat(e),
                },
                t.map((e) => {
                  let { content: t, props: o } = e;
                  return n.createElement(
                    M,
                    {
                      ...o,
                      stacked: r,
                      collapseAll: T,
                      isIn: w(o.toastId, o.containerId),
                      style: o.style,
                      key: "toast-".concat(o.key),
                    },
                    t
                  );
                })
              );
            })
          )
        );
      }
    },
    96164: (e, t, r) => {
      "use strict";
      r.d(t, { m6: () => K });
      let n = (e) => {
          let t = s(e),
            { conflictingClassGroups: r, conflictingClassGroupModifiers: n } =
              e;
          return {
            getClassGroupId: (e) => {
              let r = e.split("-");
              return (
                "" === r[0] && 1 !== r.length && r.shift(), o(r, t) || a(e)
              );
            },
            getConflictingClassGroupIds: (e, t) => {
              let o = r[e] || [];
              return t && n[e] ? [...o, ...n[e]] : o;
            },
          };
        },
        o = (e, t) => {
          if (0 === e.length) return t.classGroupId;
          let r = e[0],
            n = t.nextPart.get(r),
            i = n ? o(e.slice(1), n) : void 0;
          if (i) return i;
          if (0 === t.validators.length) return;
          let a = e.join("-");
          return t.validators.find(({ validator: e }) => e(a))?.classGroupId;
        },
        i = /^\[(.+)\]$/,
        a = (e) => {
          if (i.test(e)) {
            let t = i.exec(e)[1],
              r = t?.substring(0, t.indexOf(":"));
            if (r) return "arbitrary.." + r;
          }
        },
        s = (e) => {
          let { theme: t, prefix: r } = e,
            n = { nextPart: new Map(), validators: [] };
          return (
            d(Object.entries(e.classGroups), r).forEach(([e, r]) => {
              l(r, n, e, t);
            }),
            n
          );
        },
        l = (e, t, r, n) => {
          e.forEach((e) => {
            if ("string" == typeof e) {
              ("" === e ? t : c(t, e)).classGroupId = r;
              return;
            }
            if ("function" == typeof e) {
              if (u(e)) {
                l(e(n), t, r, n);
                return;
              }
              t.validators.push({ validator: e, classGroupId: r });
              return;
            }
            Object.entries(e).forEach(([e, o]) => {
              l(o, c(t, e), r, n);
            });
          });
        },
        c = (e, t) => {
          let r = e;
          return (
            t.split("-").forEach((e) => {
              r.nextPart.has(e) ||
                r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (r = r.nextPart.get(e));
            }),
            r
          );
        },
        u = (e) => e.isThemeGetter,
        d = (e, t) =>
          t
            ? e.map(([e, r]) => [
                e,
                r.map((e) =>
                  "string" == typeof e
                    ? t + e
                    : "object" == typeof e
                    ? Object.fromEntries(
                        Object.entries(e).map(([e, r]) => [t + e, r])
                      )
                    : e
                ),
              ])
            : e,
        f = (e) => {
          if (e < 1) return { get: () => void 0, set: () => {} };
          let t = 0,
            r = new Map(),
            n = new Map(),
            o = (o, i) => {
              r.set(o, i), ++t > e && ((t = 0), (n = r), (r = new Map()));
            };
          return {
            get(e) {
              let t = r.get(e);
              return void 0 !== t
                ? t
                : void 0 !== (t = n.get(e))
                ? (o(e, t), t)
                : void 0;
            },
            set(e, t) {
              r.has(e) ? r.set(e, t) : o(e, t);
            },
          };
        },
        h = (e) => {
          let { separator: t, experimentalParseClassName: r } = e,
            n = 1 === t.length,
            o = t[0],
            i = t.length,
            a = (e) => {
              let r;
              let a = [],
                s = 0,
                l = 0;
              for (let c = 0; c < e.length; c++) {
                let u = e[c];
                if (0 === s) {
                  if (u === o && (n || e.slice(c, c + i) === t)) {
                    a.push(e.slice(l, c)), (l = c + i);
                    continue;
                  }
                  if ("/" === u) {
                    r = c;
                    continue;
                  }
                }
                "[" === u ? s++ : "]" === u && s--;
              }
              let c = 0 === a.length ? e : e.substring(l),
                u = c.startsWith("!"),
                d = u ? c.substring(1) : c;
              return {
                modifiers: a,
                hasImportantModifier: u,
                baseClassName: d,
                maybePostfixModifierPosition: r && r > l ? r - l : void 0,
              };
            };
          return r ? (e) => r({ className: e, parseClassName: a }) : a;
        },
        p = (e) => {
          if (e.length <= 1) return e;
          let t = [],
            r = [];
          return (
            e.forEach((e) => {
              "[" === e[0] ? (t.push(...r.sort(), e), (r = [])) : r.push(e);
            }),
            t.push(...r.sort()),
            t
          );
        },
        g = (e) => ({ cache: f(e.cacheSize), parseClassName: h(e), ...n(e) }),
        y = /\s+/,
        m = (e, t) => {
          let {
              parseClassName: r,
              getClassGroupId: n,
              getConflictingClassGroupIds: o,
            } = t,
            i = [],
            a = e.trim().split(y),
            s = "";
          for (let e = a.length - 1; e >= 0; e -= 1) {
            let t = a[e],
              {
                modifiers: l,
                hasImportantModifier: c,
                baseClassName: u,
                maybePostfixModifierPosition: d,
              } = r(t),
              f = !!d,
              h = n(f ? u.substring(0, d) : u);
            if (!h) {
              if (!f || !(h = n(u))) {
                s = t + (s.length > 0 ? " " + s : s);
                continue;
              }
              f = !1;
            }
            let g = p(l).join(":"),
              y = c ? g + "!" : g,
              m = y + h;
            if (i.includes(m)) continue;
            i.push(m);
            let b = o(h, f);
            for (let e = 0; e < b.length; ++e) {
              let t = b[e];
              i.push(y + t);
            }
            s = t + (s.length > 0 ? " " + s : s);
          }
          return s;
        };
      function b() {
        let e,
          t,
          r = 0,
          n = "";
        for (; r < arguments.length; )
          (e = arguments[r++]) && (t = v(e)) && (n && (n += " "), (n += t));
        return n;
      }
      let v = (e) => {
          let t;
          if ("string" == typeof e) return e;
          let r = "";
          for (let n = 0; n < e.length; n++)
            e[n] && (t = v(e[n])) && (r && (r += " "), (r += t));
          return r;
        },
        w = (e) => {
          let t = (t) => t[e] || [];
          return (t.isThemeGetter = !0), t;
        },
        x = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        O = /^\d+\/\d+$/,
        _ = new Set(["px", "full", "screen"]),
        k = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        S =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        P = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        E = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        T =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        C = (e) => R(e) || _.has(e) || O.test(e),
        M = (e) => q(e, "length", Y),
        R = (e) => !!e && !Number.isNaN(Number(e)),
        j = (e) => q(e, "number", R),
        A = (e) => !!e && Number.isInteger(Number(e)),
        I = (e) => e.endsWith("%") && R(e.slice(0, -1)),
        D = (e) => x.test(e),
        L = (e) => k.test(e),
        N = new Set(["length", "size", "percentage"]),
        z = (e) => q(e, N, V),
        B = (e) => q(e, "position", V),
        F = new Set(["image", "url"]),
        U = (e) => q(e, F, $),
        W = (e) => q(e, "", X),
        H = () => !0,
        q = (e, t, r) => {
          let n = x.exec(e);
          return (
            !!n &&
            (n[1] ? ("string" == typeof t ? n[1] === t : t.has(n[1])) : r(n[2]))
          );
        },
        Y = (e) => S.test(e) && !P.test(e),
        V = () => !1,
        X = (e) => E.test(e),
        $ = (e) => T.test(e);
      Symbol.toStringTag;
      let K = (function (e, ...t) {
        let r, n, o;
        let i = function (s) {
          return (
            (n = (r = g(t.reduce((e, t) => t(e), e()))).cache.get),
            (o = r.cache.set),
            (i = a),
            a(s)
          );
        };
        function a(e) {
          let t = n(e);
          if (t) return t;
          let i = m(e, r);
          return o(e, i), i;
        }
        return function () {
          return i(b.apply(null, arguments));
        };
      })(() => {
        let e = w("colors"),
          t = w("spacing"),
          r = w("blur"),
          n = w("brightness"),
          o = w("borderColor"),
          i = w("borderRadius"),
          a = w("borderSpacing"),
          s = w("borderWidth"),
          l = w("contrast"),
          c = w("grayscale"),
          u = w("hueRotate"),
          d = w("invert"),
          f = w("gap"),
          h = w("gradientColorStops"),
          p = w("gradientColorStopPositions"),
          g = w("inset"),
          y = w("margin"),
          m = w("opacity"),
          b = w("padding"),
          v = w("saturate"),
          x = w("scale"),
          O = w("sepia"),
          _ = w("skew"),
          k = w("space"),
          S = w("translate"),
          P = () => ["auto", "contain", "none"],
          E = () => ["auto", "hidden", "clip", "visible", "scroll"],
          T = () => ["auto", D, t],
          N = () => [D, t],
          F = () => ["", C, M],
          q = () => ["auto", R, D],
          Y = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          V = () => ["solid", "dashed", "dotted", "double", "none"],
          X = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          $ = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          K = () => ["", "0", D],
          J = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          G = () => [R, D];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [H],
            spacing: [C, M],
            blur: ["none", "", L, D],
            brightness: G(),
            borderColor: [e],
            borderRadius: ["none", "", "full", L, D],
            borderSpacing: N(),
            borderWidth: F(),
            contrast: G(),
            grayscale: K(),
            hueRotate: G(),
            invert: K(),
            gap: N(),
            gradientColorStops: [e],
            gradientColorStopPositions: [I, M],
            inset: T(),
            margin: T(),
            opacity: G(),
            padding: N(),
            saturate: G(),
            scale: G(),
            sepia: K(),
            skew: G(),
            space: N(),
            translate: N(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", D] }],
            container: ["container"],
            columns: [{ columns: [L] }],
            "break-after": [{ "break-after": J() }],
            "break-before": [{ "break-before": J() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...Y(), D] }],
            overflow: [{ overflow: E() }],
            "overflow-x": [{ "overflow-x": E() }],
            "overflow-y": [{ "overflow-y": E() }],
            overscroll: [{ overscroll: P() }],
            "overscroll-x": [{ "overscroll-x": P() }],
            "overscroll-y": [{ "overscroll-y": P() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [g] }],
            "inset-x": [{ "inset-x": [g] }],
            "inset-y": [{ "inset-y": [g] }],
            start: [{ start: [g] }],
            end: [{ end: [g] }],
            top: [{ top: [g] }],
            right: [{ right: [g] }],
            bottom: [{ bottom: [g] }],
            left: [{ left: [g] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", A, D] }],
            basis: [{ basis: T() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", D] }],
            grow: [{ grow: K() }],
            shrink: [{ shrink: K() }],
            order: [{ order: ["first", "last", "none", A, D] }],
            "grid-cols": [{ "grid-cols": [H] }],
            "col-start-end": [{ col: ["auto", { span: ["full", A, D] }, D] }],
            "col-start": [{ "col-start": q() }],
            "col-end": [{ "col-end": q() }],
            "grid-rows": [{ "grid-rows": [H] }],
            "row-start-end": [{ row: ["auto", { span: [A, D] }, D] }],
            "row-start": [{ "row-start": q() }],
            "row-end": [{ "row-end": q() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", D] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", D] }],
            gap: [{ gap: [f] }],
            "gap-x": [{ "gap-x": [f] }],
            "gap-y": [{ "gap-y": [f] }],
            "justify-content": [{ justify: ["normal", ...$()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...$(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...$(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [b] }],
            px: [{ px: [b] }],
            py: [{ py: [b] }],
            ps: [{ ps: [b] }],
            pe: [{ pe: [b] }],
            pt: [{ pt: [b] }],
            pr: [{ pr: [b] }],
            pb: [{ pb: [b] }],
            pl: [{ pl: [b] }],
            m: [{ m: [y] }],
            mx: [{ mx: [y] }],
            my: [{ my: [y] }],
            ms: [{ ms: [y] }],
            me: [{ me: [y] }],
            mt: [{ mt: [y] }],
            mr: [{ mr: [y] }],
            mb: [{ mb: [y] }],
            ml: [{ ml: [y] }],
            "space-x": [{ "space-x": [k] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [k] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", D, t] },
            ],
            "min-w": [{ "min-w": [D, t, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  D,
                  t,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [L] },
                  L,
                ],
              },
            ],
            h: [
              { h: [D, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [D, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [D, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [D, t, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", L, M] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  j,
                ],
              },
            ],
            "font-family": [{ font: [H] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  D,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", R, j] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  C,
                  D,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", D] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", D] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [m] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [m] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...V(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", C, M] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", C, D] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: N() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  D,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", D] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [m] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...Y(), B] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", z] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  U,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [p] }],
            "gradient-via-pos": [{ via: [p] }],
            "gradient-to-pos": [{ to: [p] }],
            "gradient-from": [{ from: [h] }],
            "gradient-via": [{ via: [h] }],
            "gradient-to": [{ to: [h] }],
            rounded: [{ rounded: [i] }],
            "rounded-s": [{ "rounded-s": [i] }],
            "rounded-e": [{ "rounded-e": [i] }],
            "rounded-t": [{ "rounded-t": [i] }],
            "rounded-r": [{ "rounded-r": [i] }],
            "rounded-b": [{ "rounded-b": [i] }],
            "rounded-l": [{ "rounded-l": [i] }],
            "rounded-ss": [{ "rounded-ss": [i] }],
            "rounded-se": [{ "rounded-se": [i] }],
            "rounded-ee": [{ "rounded-ee": [i] }],
            "rounded-es": [{ "rounded-es": [i] }],
            "rounded-tl": [{ "rounded-tl": [i] }],
            "rounded-tr": [{ "rounded-tr": [i] }],
            "rounded-br": [{ "rounded-br": [i] }],
            "rounded-bl": [{ "rounded-bl": [i] }],
            "border-w": [{ border: [s] }],
            "border-w-x": [{ "border-x": [s] }],
            "border-w-y": [{ "border-y": [s] }],
            "border-w-s": [{ "border-s": [s] }],
            "border-w-e": [{ "border-e": [s] }],
            "border-w-t": [{ "border-t": [s] }],
            "border-w-r": [{ "border-r": [s] }],
            "border-w-b": [{ "border-b": [s] }],
            "border-w-l": [{ "border-l": [s] }],
            "border-opacity": [{ "border-opacity": [m] }],
            "border-style": [{ border: [...V(), "hidden"] }],
            "divide-x": [{ "divide-x": [s] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [s] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [m] }],
            "divide-style": [{ divide: V() }],
            "border-color": [{ border: [o] }],
            "border-color-x": [{ "border-x": [o] }],
            "border-color-y": [{ "border-y": [o] }],
            "border-color-s": [{ "border-s": [o] }],
            "border-color-e": [{ "border-e": [o] }],
            "border-color-t": [{ "border-t": [o] }],
            "border-color-r": [{ "border-r": [o] }],
            "border-color-b": [{ "border-b": [o] }],
            "border-color-l": [{ "border-l": [o] }],
            "divide-color": [{ divide: [o] }],
            "outline-style": [{ outline: ["", ...V()] }],
            "outline-offset": [{ "outline-offset": [C, D] }],
            "outline-w": [{ outline: [C, M] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: F() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [m] }],
            "ring-offset-w": [{ "ring-offset": [C, M] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", L, W] }],
            "shadow-color": [{ shadow: [H] }],
            opacity: [{ opacity: [m] }],
            "mix-blend": [
              { "mix-blend": [...X(), "plus-lighter", "plus-darker"] },
            ],
            "bg-blend": [{ "bg-blend": X() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [r] }],
            brightness: [{ brightness: [n] }],
            contrast: [{ contrast: [l] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", L, D] }],
            grayscale: [{ grayscale: [c] }],
            "hue-rotate": [{ "hue-rotate": [u] }],
            invert: [{ invert: [d] }],
            saturate: [{ saturate: [v] }],
            sepia: [{ sepia: [O] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [r] }],
            "backdrop-brightness": [{ "backdrop-brightness": [n] }],
            "backdrop-contrast": [{ "backdrop-contrast": [l] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
            "backdrop-invert": [{ "backdrop-invert": [d] }],
            "backdrop-opacity": [{ "backdrop-opacity": [m] }],
            "backdrop-saturate": [{ "backdrop-saturate": [v] }],
            "backdrop-sepia": [{ "backdrop-sepia": [O] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [a] }],
            "border-spacing-x": [{ "border-spacing-x": [a] }],
            "border-spacing-y": [{ "border-spacing-y": [a] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  D,
                ],
              },
            ],
            duration: [{ duration: G() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", D] }],
            delay: [{ delay: G() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", D] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [x] }],
            "scale-x": [{ "scale-x": [x] }],
            "scale-y": [{ "scale-y": [x] }],
            rotate: [{ rotate: [A, D] }],
            "translate-x": [{ "translate-x": [S] }],
            "translate-y": [{ "translate-y": [S] }],
            "skew-x": [{ "skew-x": [_] }],
            "skew-y": [{ "skew-y": [_] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  D,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  D,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": N() }],
            "scroll-mx": [{ "scroll-mx": N() }],
            "scroll-my": [{ "scroll-my": N() }],
            "scroll-ms": [{ "scroll-ms": N() }],
            "scroll-me": [{ "scroll-me": N() }],
            "scroll-mt": [{ "scroll-mt": N() }],
            "scroll-mr": [{ "scroll-mr": N() }],
            "scroll-mb": [{ "scroll-mb": N() }],
            "scroll-ml": [{ "scroll-ml": N() }],
            "scroll-p": [{ "scroll-p": N() }],
            "scroll-px": [{ "scroll-px": N() }],
            "scroll-py": [{ "scroll-py": N() }],
            "scroll-ps": [{ "scroll-ps": N() }],
            "scroll-pe": [{ "scroll-pe": N() }],
            "scroll-pt": [{ "scroll-pt": N() }],
            "scroll-pr": [{ "scroll-pr": N() }],
            "scroll-pb": [{ "scroll-pb": N() }],
            "scroll-pl": [{ "scroll-pl": N() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", D] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [C, M, j] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-s",
              "border-color-e",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
  },
]);

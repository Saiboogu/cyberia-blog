function n(o) {
  return new Promise(function (n, e, t) {
    (t = new XMLHttpRequest()).open("GET", o, (t.withCredentials = !0)),
      (t.onload = function () {
        (200 === t.status ? n : e)();
      }),
      t.send();
  });
}
var e,
  t =
    (e = document.createElement("link")).relList &&
    e.relList.supports &&
    e.relList.supports("prefetch")
      ? function (o) {
          return new Promise(function (n, e, t) {
            ((t = document.createElement("link")).rel = "prefetch"),
              (t.href = o),
              (t.onload = n),
              (t.onerror = e),
              document.head.appendChild(t);
          });
        }
      : n,
  r =
    window.requestIdleCallback ||
    function (n) {
      var e = Date.now();
      return setTimeout(function () {
        n({
          didTimeout: !1,
          timeRemaining: function () {
            return Math.max(0, 50 - (Date.now() - e));
          },
        });
      }, 1);
    },
  o = new Set();
function i(e, r, i) {
  if (
    !(i = navigator.connection) ||
    (!i.saveData && !/2g/.test(i.effectiveType))
  )
    return Promise.all(
      [].concat(e).map(function (e) {
        if (!o.has(e))
          return (
            o.add(e),
            (r
              ? function (e) {
                  return window.fetch
                    ? fetch(e, { credentials: "include" })
                    : n(e);
                }
              : t)(new URL(e, location.href).toString())
          );
      })
    );
}
(export.listen = function (e) {
  if (((e = e || {}), window.IntersectionObserver)) {
    var n = (function (n) {
        n = n || 1;
        var e = [],
          t = 0;
        function o() {
          t < n && 0 < e.length && (e.shift()(), t++);
        }
        return [
          function (n) {
            1 < e.push(n) || o();
          },
          function () {
            t--, o();
          },
        ];
      })(e.throttle || 1 / 0),
      t = n[0],
      c = n[1],
      u = e.limit || 1 / 0,
      s = e.origins || [location.hostname],
      a = e.ignores || [],
      f = e.timeoutFn || r,
      l = new IntersectionObserver(function (n) {
        n.forEach(function (n) {
          n.isIntersecting &&
            (l.unobserve((n = n.target)),
            o.size < u &&
              t(function () {
                i(n.href, e.priority)
                  .then(c)
                  .catch(function (n) {
                    c(), e.onError && e.onError(n);
                  });
              }));
        });
      });
    return (
      f(
        function () {
          (e.el || document).querySelectorAll("a").forEach(function (n) {
            (s.length && !s.includes(n.hostname)) ||
              (function e(t, n) {
                return Array.isArray(n)
                  ? n.some(function (n) {
                      return e(t, n);
                    })
                  : (n.test || n).call(n, t.href, t);
              })(n, a) ||
              l.observe(n);
          });
        },
        { timeout: e.timeout || 2e3 }
      ),
      function () {
        o.clear(), l.disconnect();
      }
    );
  }
}),
  (export.prefetch = i);

__d("WAWebStatusProgressBar.react", [
	"fbt",
	"Promise",
	"WALogger",
	"WAWebNoop",
	"WAWebVelocityAnimate",
	"react",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = ["ref"], d, m, p = m || (m = o("react")), _ = m, f = _.useEffect, g = _.useImperativeHandle, h = _.useMemo, y = _.useRef;
	function C(e, t) {
		return s._(
			/*BTDS*/
			"",
			[s._param("current status", e), s._param("total statuses", t)]
		);
	}
	function b(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, c), l = i.current, m = i.onClick, _ = i.total, b = y(null), v = y(null);
		f(function() {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"Current index: ",
				", total count: ",
				""
			])), l, _), l >= 0 && l < _ || o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Assertion failed!"]))).sendLogs("bad current status v3 index");
		}, []);
		var S = r("useWAWebStableCallback")(function(e) {
			m == null || m(e);
		}), R = function(t, n) {
			if (b.current) {
				var e = "-" + t / n * 100 + "%";
				r("WAWebVelocityAnimate")(b.current, "stop"), v.current = r("WAWebVelocityAnimate")(b.current, { translateX: ["0%", e] }, {
					duration: t,
					easing: "linear"
				});
			}
		}, L = function() {
			b.current && r("WAWebVelocityAnimate")(b.current, "stop");
		}, E = function() {
			var e = v.current;
			return e || (d || (d = n("Promise"))).resolve();
		};
		g(a, function() {
			return {
				handleStart: R,
				handlePause: L,
				handleEnded: E
			};
		});
		var k = h(function() {
			var e = 100 / _ + "%";
			return new Array(_).fill(void 0).map(function(t, n) {
				var o = { width: e };
				return p.jsxs("div", {
					"aria-label": C(n + 1, _),
					className: "x1n2onr6 x13vifvy x1ey2m1c x1rg5ohu x152qxlz x5yr21d xwklpps xnnr8r",
					"data-testid": "status-progress-bar-segment",
					style: o,
					onClick: function() {
						return S(n);
					},
					children: [p.jsx("div", { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1q9q7m4 xt8t1vi x1xc408v x129tdwq x15urzxu" }), p.jsx("div", {
						className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x6ikm8r x10wlt62 xt8t1vi x1xc408v x129tdwq x15urzxu x17dzmu4",
						children: p.jsx("div", babelHelpers.extends({}, {
							0: { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1p8t8ri" },
							4: { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1p8t8ri x1ewzhrl" },
							2: { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1p8t8ri x5fxwdf" },
							6: { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1p8t8ri x5fxwdf" },
							1: { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1p8t8ri x5i6ehr" },
							5: { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1p8t8ri x5i6ehr" },
							3: { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1p8t8ri x5i6ehr" },
							7: { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1p8t8ri x5i6ehr" }
						}[(n < l) << 2 | (n > l) << 1 | (n === l) << 0], { ref: n === l ? b : r("WAWebNoop") }))
					})]
				}, n);
			});
		}, [
			l,
			_,
			S
		]);
		return p.jsx("div", {
			className: "x10l6tqk xtijo5x x1o0tod x12xzxwr x78zum5 xqu0tyb x1sy10c2 x11t971q xvc5jky xzt5al7 xvue9z",
			"aria-label": s._(
				/*BTDS*/
				"",
				[s._param("current status", l + 1), s._param("total statuses", _)]
			),
			role: "group",
			children: k
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 226);

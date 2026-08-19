__d("WAWebBaseShimmerComponents.react", [
	"WAWebThemeContext",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "x9hsi78-B";
	function d() {
		var e = o("react-compiler-runtime").c(4), t = o("WAWebThemeContext").useIsDarkTheme(), n;
		e[0] !== t ? (n = {
			0: { className: "x11mqxog xvjg3zp x1esw782 xa4qsjk x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x47corl xoukr5u" },
			1: { className: "x11mqxog xvjg3zp x1esw782 xa4qsjk x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x47corl x152wzaz" }
		}[!!t << 0], e[0] = t, e[1] = n) : n = e[1];
		var r;
		return e[2] !== n ? (r = u.jsx("div", babelHelpers.extends({}, n)), e[2] = n, e[3] = r) : r = e[3], r;
	}
	var m = {
		background: {
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		container: {
			position: "x1n2onr6",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		}
	}, p = { container: {
		position: "x1n2onr6",
		borderStartStartRadius: "xbrszos",
		borderStartEndRadius: "xea3l6g",
		borderEndEndRadius: "x18isctg",
		borderEndStartRadius: "x2q3nzr",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		backgroundColor: "x4wrhlh",
		$$css: !0
	} };
	function _(t) {
		var n = o("react-compiler-runtime").c(9), a = t.diameter, i = t.xstyle, l;
		n[0] !== i ? (l = (e || (e = r("stylex")))([
			m.container,
			m.background,
			i
		]), n[0] = i, n[1] = l) : l = n[1];
		var s = a + "px", c = a + "px", p;
		n[2] !== s || n[3] !== c ? (p = {
			height: s,
			width: c
		}, n[2] = s, n[3] = c, n[4] = p) : p = n[4];
		var _;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = u.jsx(d, {}), n[5] = _) : _ = n[5];
		var f;
		return n[6] !== l || n[7] !== p ? (f = u.jsx("div", {
			className: l,
			style: p,
			children: _
		}), n[6] = l, n[7] = p, n[8] = f) : f = n[8], f;
	}
	function f(t) {
		var n = o("react-compiler-runtime").c(9), a = t.height, i = t.width, l = t.xstyle, s = a + "px", c = i === "100%" ? i : i + "px", m;
		n[0] !== s || n[1] !== c ? (m = {
			height: s,
			width: c
		}, n[0] = s, n[1] = c, n[2] = m) : m = n[2];
		var _ = m, f;
		n[3] !== l ? (f = (e || (e = r("stylex")))([p.container, l]), n[3] = l, n[4] = f) : f = n[4];
		var g;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (g = u.jsx(d, {}), n[5] = g) : g = n[5];
		var h;
		return n[6] !== _ || n[7] !== f ? (h = u.jsx("div", {
			className: f,
			style: _,
			children: g
		}), n[6] = _, n[7] = f, n[8] = h) : h = n[8], h;
	}
	function g(e, t) {
		return Array(t).fill(null).map(function(t, n) {
			return u.jsx(e, {}, n);
		});
	}
	l.CircleShimmer = _, l.RectangleShimmer = f, l.times = g;
}), 98);

__d("WAWebBaseShimmerComponents.react", [
	"WAWebThemeContext",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "x9hsi78-B";
	function d() {
		var e = o("WAWebThemeContext").useIsDarkTheme();
		return u.jsx("div", babelHelpers.extends({}, {
			0: { className: "x11mqxog xvjg3zp x1esw782 xa4qsjk x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x47corl xoukr5u" },
			1: { className: "x11mqxog xvjg3zp x1esw782 xa4qsjk x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x47corl x152wzaz" }
		}[!!e << 0]));
	}
	d.displayName = d.name + " [from " + i.id + "]";
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
		var n = t.diameter, o = t.xstyle;
		return u.jsx("div", {
			className: (e || (e = r("stylex")))([
				m.container,
				m.background,
				o
			]),
			style: {
				height: n + "px",
				width: n + "px"
			},
			children: u.jsx(d, {})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(t) {
		var n = t.height, o = t.width, a = t.xstyle, i = {
			height: n + "px",
			width: o === "100%" ? o : o + "px"
		};
		return u.jsx("div", {
			className: (e || (e = r("stylex")))([p.container, a]),
			style: i,
			children: u.jsx(d, {})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e, t) {
		return Array(t).fill(null).map(function(t, n) {
			return u.jsx(e, {}, n);
		});
	}
	l.CircleShimmer = _, l.RectangleShimmer = f, l.times = g;
}), 98);

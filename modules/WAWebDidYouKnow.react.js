__d("WAWebDidYouKnow.react", [
	"WAWebDidYouKnowFacts.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState;
	function c() {
		var e = o("react-compiler-runtime").c(4), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s.jsx(r("WAWebDidYouKnowFacts.react"), {}), e[0] = t) : t = e[0];
		var n = u(t), a = n[0], i;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x1f6kntn xhslqc4" }, e[1] = i) : i = e[1];
		var l;
		return e[2] !== a ? (l = s.jsx("div", babelHelpers.extends({}, i, { children: a })), e[2] = a, e[3] = l) : l = e[3], l;
	}
	l.default = c;
}), 98);

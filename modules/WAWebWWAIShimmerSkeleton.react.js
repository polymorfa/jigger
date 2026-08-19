__d("WAWebWWAIShimmerSkeleton.react", [
	"fbt",
	"WAWebWWAIConstants",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = "x1tqtcw5-B";
	function d(e) {
		var t = o("react-compiler-runtime").c(4), n = e.count, r = n === void 0 ? o("WAWebWWAIConstants").SHIMMER_CARD_COUNT : n, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x78zum5 xdt5ytf x8a3fw1" }, t[0] = a) : a = t[0];
		var i;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		).toString(), t[1] = i) : i = t[1];
		var l;
		return t[2] !== r ? (l = u.jsx("div", babelHelpers.extends({}, a, {
			"data-testid": "wwai_shimmer_skeleton",
			role: "status",
			"aria-label": i,
			children: Array.from({ length: r }, m)
		})), t[2] = r, t[3] = l) : l = t[3], l;
	}
	function m(e, t) {
		return u.jsx("div", { className: "xyi3aci xwf5gio x1p453bz x1suzm8a x1h3rtpe xsdox4t xw5lnv xgi13y9 xiy17q3 x1bxkcjn xmg6eyc x4hg4is xa4qsjk" }, t);
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 226);

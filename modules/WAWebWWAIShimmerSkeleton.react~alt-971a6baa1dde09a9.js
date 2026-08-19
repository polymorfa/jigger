__d("WAWebWWAIShimmerSkeleton.react", [
	"fbt",
	"WAWebWWAIConstants",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = "x1tqtcw5-B";
	function d(e) {
		var t = e.count, n = t === void 0 ? o("WAWebWWAIConstants").SHIMMER_CARD_COUNT : t;
		return u.jsx("div", {
			className: "x78zum5 xdt5ytf x8a3fw1",
			"data-testid": "wwai_shimmer_skeleton",
			role: "status",
			"aria-label": s._(
				/*BTDS*/
				""
			).toString(),
			children: Array.from({ length: n }, function(e, t) {
				return u.jsx("div", { className: "xyi3aci xwf5gio x1p453bz x1suzm8a x1h3rtpe xsdox4t xw5lnv xgi13y9 xiy17q3 x1bxkcjn xmg6eyc x4hg4is xa4qsjk" }, t);
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

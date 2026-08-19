__d("WAWebProductCatalogFetchStateTopBar.react", [
	"fbt",
	"WAWebSpinner.react",
	"WAWebText.react",
	"WDSPaddings.stylex",
	"err",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { marginInline10: {
		marginInlineStart: "x1hm9lzh",
		marginInlineEnd: "x1sa5p1d",
		marginLeft: null,
		marginRight: null,
		$$css: !0
	} }, m = {
		loadingContainer: {
			position: "x10l6tqk",
			zIndex: "x12xzxwr",
			boxSizing: "x9f619",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "xh8yej3",
			backgroundColor: "x1280gxy",
			boxShadow: "x1499u3w",
			opacity: "x1hc1fzr",
			transitionDelay: "x1ojkfpl",
			transitionTimingFunction: "x9lcvmn",
			$$css: !0
		},
		text: {
			fontWeight: "xk50ysn",
			$$css: !0
		},
		loadingText: {
			color: "xxr6tci",
			$$css: !0
		}
	};
	function p(t) {
		var n = o("react-compiler-runtime").c(9), a = t.fetchState;
		switch (a) {
			case "NONE":
			case "SUCCESS": return null;
			case "PENDING": {
				var i, l;
				n[0] === Symbol.for("react.memo_cache_sentinel") ? (i = (e || (e = r("stylex"))).props(m.loadingContainer, o("WDSPaddings.stylex").wdsPaddings.padding8), l = c.jsx(o("WAWebSpinner.react").Spinner, {
					size: 14,
					color: "highlight"
				}), n[0] = i, n[1] = l) : (i = n[0], l = n[1]);
				var u;
				return n[2] === Symbol.for("react.memo_cache_sentinel") ? (u = c.jsxs("div", babelHelpers.extends({}, i, { children: [l, c.jsx(o("WAWebText.react").WAWebTextSmall, {
					as: "span",
					xstyle: [
						m.text,
						d.marginInline10,
						m.loadingText
					],
					children: s._(
						/*BTDS*/
						""
					)
				})] })), n[2] = u) : u = n[2], u;
			}
			case "TOKEN_RECOVERY_REQUIRED":
			case "NOT_FOUND":
			case "ERROR": {
				var p;
				n[3] === Symbol.for("react.memo_cache_sentinel") ? (p = (e || (e = r("stylex"))).props(m.loadingContainer, o("WDSPaddings.stylex").wdsPaddings.padding8), n[3] = p) : p = n[3];
				var _;
				n[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = [m.text, d.marginInline10], n[4] = _) : _ = n[4];
				var f;
				n[5] !== a ? (f = a === "NOT_FOUND" ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				), n[5] = a, n[6] = f) : f = n[6];
				var g;
				return n[7] !== f ? (g = c.jsx("div", babelHelpers.extends({}, p, { children: c.jsx(o("WAWebText.react").WAWebTextSmall, {
					as: "span",
					xstyle: _,
					color: "critical",
					children: f
				}) })), n[7] = f, n[8] = g) : g = n[8], g;
			}
			default: throw r("err")("invalid fetchState " + a);
		}
	}
	l.default = p;
}), 226);

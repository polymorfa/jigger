__d("WAWebReportedMsgSubtitle.react", [
	"fbt",
	"WAWebText.react",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { marginInlineStart36: {
		marginInlineStart: "x1e6ojxu",
		$$css: !0
	} }, m = { reportedBy: {
		fontSize: "x1f6kntn",
		color: "xhslqc4",
		$$css: !0
	} };
	function p(t) {
		var n = o("react-compiler-runtime").c(15), a = t.msg, i = t.onMsgFooterClick, l = a.reporterJidList;
		if (l == null || l.length === 0) return null;
		var u = l.length, p;
		n[0] !== u ? (p = s._(
			/*BTDS*/
			"",
			[s._plural(u, "number_of_reporter")]
		), n[0] = u, n[1] = p) : p = n[1];
		var _ = p, f;
		if (n[2] !== _ || n[3] !== a || n[4] !== i) {
			var g;
			n[6] !== a || n[7] !== i ? (g = function() {
				return i == null ? void 0 : i(a);
			}, n[6] = a, n[7] = i, n[8] = g) : g = n[8];
			var h;
			n[9] !== _ || n[10] !== g ? (h = c.jsx(o("WAWebText.react").WAWebClickableText, {
				color: "teal",
				onClick: g,
				children: _
			}), n[9] = _, n[10] = g, n[11] = h) : h = n[11], f = c.jsx(o("WAWebText.react").WAWebTextSmall, {
				as: "span",
				children: s._(
					/*BTDS*/
					"",
					[s._param("number_of_members_str", h)]
				)
			}), n[2] = _, n[3] = a, n[4] = i, n[5] = f;
		} else f = n[5];
		var y = f, C;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (C = (e || (e = r("stylex"))).props(m.reportedBy, d.marginInlineStart36, o("WDSMargins.stylex").wdsMargins.marginTop8), n[12] = C) : C = n[12];
		var b;
		if (n[13] !== y) {
			var v = c.jsx("div", babelHelpers.extends({}, C, { children: y }));
			b = c.jsx(c.Fragment, { children: v }), n[13] = y, n[14] = b;
		} else b = n[14];
		return b;
	}
	l.default = p;
}), 226);

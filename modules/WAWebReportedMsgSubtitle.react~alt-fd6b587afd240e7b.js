__d("WAWebReportedMsgSubtitle.react", [
	"fbt",
	"WAWebText.react",
	"WDSMargins.stylex",
	"react",
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
		var n = t.msg, a = t.onMsgFooterClick, i = n.reporterJidList;
		if (i == null || i.length === 0) return null;
		var l = i.length, u = s._(
			/*BTDS*/
			"",
			[s._plural(l, "number_of_reporter")]
		), p = c.jsx(o("WAWebText.react").WAWebTextSmall, {
			as: "span",
			children: s._(
				/*BTDS*/
				"",
				[s._param("number_of_members_str", c.jsx(o("WAWebText.react").WAWebClickableText, {
					color: "teal",
					onClick: function() {
						return a == null ? void 0 : a(n);
					},
					children: u
				}))]
			)
		}), _ = c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.reportedBy, d.marginInlineStart36, o("WDSMargins.stylex").wdsMargins.marginTop8), { children: p }));
		return c.jsx(c.Fragment, { children: _ });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);

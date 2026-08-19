__d("WAWebPipelineColumnHeader.react", [
	"fbt",
	"WAWebLeadStageNames",
	"WDSIconIcMoreVert.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { separator: {
		marginInlineStart: "x1e9n31h",
		$$css: !0
	} };
	function d(e) {
		var t = e.count, n = e.stage, a = o("WAWebLeadStageNames").getLeadStageName(n);
		return u.jsxs("div", {
			className: "x78zum5 x6s0dn4 x1qughib x1p57kb1 xvpt6g3 xdx6fka xvtqlqk",
			role: "heading",
			"aria-level": 3,
			"aria-label": s._(
				/*BTDS*/
				"",
				[s._plural(t, "number"), s._param("lead stage name", a)]
			),
			"data-testid": "pipeline-column-header-" + String(n),
			children: [u.jsxs("div", {
				className: "x78zum5 x6s0dn4 x1s70e7g",
				"aria-hidden": !0,
				children: [
					u.jsx(r("WDSText.react"), {
						type: "Body1Emphasized",
						colorName: "contentDefault",
						children: a
					}),
					u.jsx(r("WDSText.react"), {
						type: "Body1Emphasized",
						colorName: "contentDefault",
						xstyle: c.separator,
						children: " · "
					}),
					u.jsx(r("WDSText.react"), {
						type: "Body1Emphasized",
						colorName: "contentDefault",
						children: String(t)
					})
				]
			}), u.jsx("div", {
				className: "xuzhngd xt0e3qv",
				"aria-hidden": !0,
				children: u.jsx(r("WDSIconIcMoreVert.react"), {})
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

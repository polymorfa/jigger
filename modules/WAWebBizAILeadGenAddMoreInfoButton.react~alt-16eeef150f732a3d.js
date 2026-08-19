__d("WAWebBizAILeadGenAddMoreInfoButton.react", [
	"fbt",
	"WDSIconIcAdd.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = 40, d = { icon: {
		color: "xo1mcw5",
		flexShrink: "x2lah0s",
		height: "x1qx5ct2",
		width: "xw4jnvo",
		$$css: !0
	} };
	function m(e) {
		var t = e.label, n = e.onPress, o = e.testid, a = o === void 0 ? "lead-gen-add-more-info-btn" : o;
		return u.jsxs("div", {
			role: "button",
			tabIndex: 0,
			onClick: n,
			onKeyDown: function(t) {
				(t.key === "Enter" || t.key === " ") && (t.preventDefault(), n());
			},
			"data-testid": a,
			className: "x6s0dn4 xo1mcw5 x1ypdohk x3nfvp2 x1qvou4u x1s70e7g x1ba4aug x4m7ku4 x16ovd2e x12xbjc7 xvtqlqk x1phvje8 xbvygy2 xx87wu9 xt0b8zv x7v4iwh",
			children: [u.jsx(r("WDSIconIcAdd.react"), { iconXstyle: d.icon }), u.jsx(r("WDSText.react"), {
				colorName: "contentActionEmphasized",
				type: "Body2Emphasized",
				children: t != null ? t : s._(
					/*BTDS*/
					""
				)
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);

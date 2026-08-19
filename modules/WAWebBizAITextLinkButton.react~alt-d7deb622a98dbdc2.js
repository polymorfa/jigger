__d("WAWebBizAITextLinkButton.react", ["WDSText.react", "react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.label, n = e.onPress, o = e.testid, a = o === void 0 ? "biz-ai-text-link-btn" : o;
		return s.jsx("div", {
			role: "button",
			tabIndex: 0,
			onClick: n,
			onKeyDown: function(t) {
				(t.key === "Enter" || t.key === " ") && (t.preventDefault(), n());
			},
			"data-testid": a,
			className: "x6s0dn4 xo1mcw5 x1ypdohk x3nfvp2 x1qvou4u x1s70e7g x1ba4aug x4m7ku4 x16ovd2e x12xbjc7 xvtqlqk xf7dkkf xx87wu9 x1f2jko9 x7v4iwh x1sur9pj",
			children: s.jsx(r("WDSText.react"), {
				colorName: "contentActionEmphasized",
				type: "Body2Emphasized",
				children: t
			})
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);

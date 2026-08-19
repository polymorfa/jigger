__d("WAWebBizAIIntegrationPluginLogo.react", ["WDSIconIcGridView.react", "react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = { placeholder: {
		color: "xhslqc4",
		flexShrink: "x2lah0s",
		height: "xsdox4t",
		width: "x1useyqa",
		$$css: !0
	} };
	function d(e) {
		var t = e.logoUri, n = e.testid, o = u(null), a = o[0], i = o[1], l = t != null && t !== a;
		return l ? s.jsx("img", {
			alt: "",
			"data-testid": n,
			onError: function() {
				return i(t);
			},
			src: t,
			className: "xlr9sxt xvvg52n xwd4zgb xq8v1ta x2lah0s xsdox4t xl1xv1r x1useyqa"
		}) : s.jsx(r("WDSIconIcGridView.react"), {
			iconXstyle: c.placeholder,
			testid: n + "-placeholder"
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

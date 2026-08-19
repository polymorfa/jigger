__d("WAWebSettingsPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebRadio.react",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = { explanation: {
		marginBottom: "x1c436fg",
		$$css: !0
	} };
	function m(e) {
		var t = e.explanation, n = e.onSelect, r = e.options, a = c(e.initialValue), i = a[0], l = a[1], m = function() {
			i != null && n(i);
		}, p = function(t) {
			l(t);
		}, _ = r.map(function(e) {
			var t = e.label, n = e.secondaryLabel, r = e.testid, a = e.value;
			return u.jsx("li", {
				"data-testid": "option-" + a,
				children: u.jsx(o("WAWebRadio.react").RadioWithLabel, {
					tabIndex: 0,
					name: "settings",
					value: a,
					label: t,
					checked: a === i,
					onChange: function() {
						return p(a);
					},
					secondaryLabel: n,
					testid: r
				})
			}, "setting-" + a);
		});
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "settings"
			},
			title: e.title,
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: m,
			onCancel: o("WAWebModalManager").closeModalManager,
			testid: "settings-popup",
			children: [t != null ? u.jsx(o("WAWebText.react").WAWebTextMuted, {
				xstyle: d.explanation,
				children: t
			}) : null, u.jsx("form", { children: u.jsx("ol", { children: _ }) })]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);

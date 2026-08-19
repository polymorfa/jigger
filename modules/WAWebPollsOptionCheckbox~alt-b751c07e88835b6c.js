__d("WAWebPollsOptionCheckbox", [
	"fbt",
	"WAWebCheckBox.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		xoeyzqq: "xmw7cw xoeyzqq",
		$$css: !0
	}, d = {
		xoeyzqq: "x1emn1tm xoeyzqq",
		$$css: !0
	};
	function m(e) {
		var t = e.checked, n = e.count, r = e.disabled, a = e.id, i = e.onOptionToggle, l = e.option, c = e.testid, d = e.theme, m = l.localId, p = l.name, _ = s._(
			/*BTDS*/
			"",
			[s._plural(n, "votes"), s._param("option", p)]
		);
		return u.jsx("div", babelHelpers.extends({}, {
			0: { className: "x1emn1tm xoeyzqq" },
			1: { className: "xmw7cw xoeyzqq" }
		}[(d === o("WAWebCheckBox.react").CheckboxTheme.POLLS_SENDER) << 0], { children: u.jsx(o("WAWebCheckBox.react").CheckBox, {
			checked: t,
			id: a,
			disabled: r,
			ariaLabel: _,
			theme: d,
			onChange: function() {
				i(m);
			},
			testid: c
		}) }));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);

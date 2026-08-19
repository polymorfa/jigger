__d("WAWebBroadcastAudienceNameField.react", [
	"fbt",
	"WAWebBizBroadcastsAudienceSelectionStrings",
	"WDSTextField.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = e.defaultValue, n = e.floatingLabel, a = e.onFocus, i = e.onValueChange, l = e.testid, d = e.value, m = c(null), p = m[0], _ = m[1];
		function f(e) {
			i(e), p != null && _(null), e.trim() === "" && _(s._(
				/*BTDS*/
				""
			));
		}
		return u.jsx(r("WDSTextField.react"), {
			defaultValue: t,
			error: p != null,
			errorText: p,
			floatingLabel: n,
			label: o("WAWebBizBroadcastsAudienceSelectionStrings").getAudienceNameInputLabel(),
			onFocus: a,
			onValueChange: f,
			testid: l,
			value: d
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

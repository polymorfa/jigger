__d("WAWebBizAdCreationTargetingModalAudienceNameComponent.react", [
	"fbt",
	"WDSTextField.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = e.audienceName, n = e.onAudienceNameChange, o = c(!1), a = o[0], i = o[1], l = t.trim(), d = a && l.length === 0, m = function() {
			i(!0);
		};
		return u.jsx("div", {
			className: "xvpt6g3 xh8yej3",
			children: u.jsx(r("WDSTextField.react"), {
				error: d,
				errorText: d ? s._(
					/*BTDS*/
					""
				) : void 0,
				label: s._(
					/*BTDS*/
					""
				),
				onBlur: m,
				onValueChange: n,
				testid: "biz_native_ads_audience_name_textfield",
				value: t
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

__d("WAWebHatchApprovalIcon.react", [
	"fbt",
	"WAWebImg.react",
	"WDSIconIcGridView.react",
	"WDSProfilePhoto.react",
	"WDSVars.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = 1.5;
	function d(e) {
		var t = e.iconUrl, n = e.size, a = n === void 0 ? "small" : n, i = t != null && t !== "" ? t : null;
		return u.jsx(r("WDSProfilePhoto.react"), {
			customColor: i != null ? {
				surface: o("WDSVars.stylex").WDSVars["--WDS-persistent-always-white"],
				content: o("WDSVars.stylex").WDSVars["--WDS-content-default"]
			} : null,
			isDecorative: !0,
			name: s._(
				/*BTDS*/
				""
			),
			placeholderIcon: function(t) {
				var e = t.height, n = t.width;
				return i != null ? u.jsx(r("WAWebImg.react"), {
					alt: "",
					src: i,
					style: {
						height: Math.round(e * c),
						width: Math.round(n * c)
					}
				}) : u.jsx(r("WDSIconIcGridView.react"), {
					height: e,
					width: n
				});
			},
			size: a,
			testid: "hatch_approval_icon",
			type: "thirdParty"
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

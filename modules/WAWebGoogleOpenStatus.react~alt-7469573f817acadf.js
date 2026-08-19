__d("WAWebGoogleOpenStatus.react", [
	"fbt",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.openNow;
		return u.jsx(r("WDSText.react"), {
			colorName: t ? "persistentAlwaysBranded" : "secondaryNegative",
			dir: "auto",
			testid: "biz_google_profile_open_status",
			type: "Body1",
			children: t ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

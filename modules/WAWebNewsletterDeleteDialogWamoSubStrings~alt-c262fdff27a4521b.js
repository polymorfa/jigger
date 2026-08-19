__d("WAWebNewsletterDeleteDialogWamoSubStrings", [
	"fbt",
	"WAWebCurrencyDollarIcon.react",
	"WDSIconIcHistory.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		return u.jsx(r("WDSIconIcHistory.react"), babelHelpers.extends({}, e, { colorName: "contentDeemphasized" }));
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d() {
		return {
			title: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			Icon: o("WAWebCurrencyDollarIcon.react").CurrencyDollarIcon,
			key: "subscribers-will-be-refunded"
		};
	}
	function m() {
		return {
			title: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			Icon: c,
			key: "past-activity-will-be-visible"
		};
	}
	l.getNewsletterDeleteDialogWamoSubWarningMessageContent = d, l.getNewsletterDeleteDialogSuspendedWamoSubWarningMessageContent = m;
}), 226);

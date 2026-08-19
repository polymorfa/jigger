__d("WAWebNewsletterDeleteDialogWamoSubStrings", [
	"fbt",
	"WAWebCurrencyDollarIcon.react",
	"WDSIconIcHistory.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(2), n;
		return t[0] !== e ? (n = u.jsx(r("WDSIconIcHistory.react"), babelHelpers.extends({}, e, { colorName: "contentDeemphasized" })), t[0] = e, t[1] = n) : n = t[1], n;
	}
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

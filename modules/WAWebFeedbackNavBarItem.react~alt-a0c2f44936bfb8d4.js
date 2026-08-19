__d("WAWebFeedbackNavBarItem.react", [
	"fbt",
	"WAWebABProps",
	"WAWebFeedbackModalUtils",
	"WAWebWamEnumBugReportEntryPointName",
	"WDSIconIcBugReport.react",
	"WDSMenuBarItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		if (!o("WAWebABProps").getABPropConfigValue("public_bug_reporting_sidebar")) return null;
		var e = function() {
			o("WAWebFeedbackModalUtils").openFeedbackModal(o("WAWebWamEnumBugReportEntryPointName").BUG_REPORT_ENTRY_POINT_NAME.BUG_REPORT_ENTRY_POINT_SIDEBAR_BUGNUB);
		}, t = r("WDSIconIcBugReport.react"), n = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WDSMenuBarItem.react"), {
			icon: t,
			title: n,
			testid: "navbar-item-feedback",
			isActive: !1,
			onClick: e,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.FeedbackNavBarItem = c;
}), 226);

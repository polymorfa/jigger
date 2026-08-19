__d("WAWebReportPictograms.react", [
	"WAWebWdsPictoTextFeedbackNegativeIcon.react",
	"WAWebWdsPictoTextFeedbackWarningIcon.react",
	"WDSIllustrationWdsPictoDocumentFeedbackWarning.react",
	"WDSIllustrationWdsPictoTextFeedbackPositive.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = 88;
	function c(e) {
		var t = e.reportOutcome;
		switch (t) {
			case "PENDING": return s.jsx(r("WDSIllustrationWdsPictoDocumentFeedbackWarning.react"), {});
			case "SUCCESS": return s.jsx(r("WDSIllustrationWdsPictoTextFeedbackPositive.react"), {});
			case "FAIL": return s.jsx(o("WAWebWdsPictoTextFeedbackNegativeIcon.react").WdsPictoTextFeedbackNegativeIcon, {
				width: u,
				height: u
			});
			case "CONTENT_UNAVAILABLE": return s.jsx(o("WAWebWdsPictoTextFeedbackWarningIcon.react").WdsPictoTextFeedbackWarningIcon, {
				width: u,
				height: u
			});
			default: return null;
		}
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);

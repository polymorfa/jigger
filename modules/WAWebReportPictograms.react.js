__d("WAWebReportPictograms.react", [
	"WAWebWdsPictoTextFeedbackNegativeIcon.react",
	"WAWebWdsPictoTextFeedbackWarningIcon.react",
	"WDSIllustrationWdsPictoDocumentFeedbackWarning.react",
	"WDSIllustrationWdsPictoTextFeedbackPositive.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = 88;
	function c(e) {
		var t = o("react-compiler-runtime").c(4), n = e.reportOutcome;
		switch (n) {
			case "PENDING": {
				var a;
				return t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s.jsx(r("WDSIllustrationWdsPictoDocumentFeedbackWarning.react"), {}), t[0] = a) : a = t[0], a;
			}
			case "SUCCESS": {
				var i;
				return t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = s.jsx(r("WDSIllustrationWdsPictoTextFeedbackPositive.react"), {}), t[1] = i) : i = t[1], i;
			}
			case "FAIL": {
				var l;
				return t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = s.jsx(o("WAWebWdsPictoTextFeedbackNegativeIcon.react").WdsPictoTextFeedbackNegativeIcon, {
					width: u,
					height: u
				}), t[2] = l) : l = t[2], l;
			}
			case "CONTENT_UNAVAILABLE": {
				var c;
				return t[3] === Symbol.for("react.memo_cache_sentinel") ? (c = s.jsx(o("WAWebWdsPictoTextFeedbackWarningIcon.react").WdsPictoTextFeedbackWarningIcon, {
					width: u,
					height: u
				}), t[3] = c) : c = t[3], c;
			}
			default: return null;
		}
	}
	l.default = c;
}), 98);

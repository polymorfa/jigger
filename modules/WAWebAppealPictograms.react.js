__d("WAWebAppealPictograms.react", [
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
		var t = o("react-compiler-runtime").c(5), n = e.appealOutcome, a;
		e: switch (n) {
			case "PENDING": {
				var i;
				t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s.jsx(r("WDSIllustrationWdsPictoDocumentFeedbackWarning.react"), {}), t[0] = i) : i = t[0], a = i;
				break e;
			}
			case "CONTENT_UNAVAILABLE": {
				var l;
				t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = s.jsx(o("WAWebWdsPictoTextFeedbackWarningIcon.react").WdsPictoTextFeedbackWarningIcon, {
					width: u,
					height: u
				}), t[1] = l) : l = t[1], a = l;
				break e;
			}
			case "SUCCESS": {
				var c;
				t[2] === Symbol.for("react.memo_cache_sentinel") ? (c = s.jsx(r("WDSIllustrationWdsPictoTextFeedbackPositive.react"), {}), t[2] = c) : c = t[2], a = c;
				break e;
			}
			case "REJECT": {
				var d;
				t[3] === Symbol.for("react.memo_cache_sentinel") ? (d = s.jsx(o("WAWebWdsPictoTextFeedbackNegativeIcon.react").WdsPictoTextFeedbackNegativeIcon, {
					width: u,
					height: u
				}), t[3] = d) : d = t[3], a = d;
				break e;
			}
			case "NOT_APPEALED":
			case "NON_APPEALABLE": {
				var m;
				t[4] === Symbol.for("react.memo_cache_sentinel") ? (m = s.jsx(o("WAWebWdsPictoTextFeedbackWarningIcon.react").WdsPictoTextFeedbackWarningIcon, {
					width: u,
					height: u
				}), t[4] = m) : m = t[4], a = m;
			}
		}
		return a;
	}
	l.default = c;
}), 98);

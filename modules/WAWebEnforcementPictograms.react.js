__d("WAWebEnforcementPictograms.react", [
	"WAWebCommonNewsletterEnums",
	"WDSIllustrationWdsPictoChannelsFeedbackBlock.react",
	"WDSIllustrationWdsPictoChannelsFeedbackWarning.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(2), n = e.enforcementType, a;
		e: switch (n) {
			case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM:
			case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND: {
				var i;
				t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s.jsx(r("WDSIllustrationWdsPictoChannelsFeedbackBlock.react"), {}), t[0] = i) : i = t[0], a = i;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG:
			case o("WAWebCommonNewsletterEnums").EnforcementType.PROFILE_PICTURE_DELETION:
			case o("WAWebCommonNewsletterEnums").EnforcementType.ADMIN_PROFILE:
			case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND_INFORM:
			case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND: {
				var l;
				t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = s.jsx(r("WDSIllustrationWdsPictoChannelsFeedbackWarning.react"), {}), t[1] = l) : l = t[1], a = l;
			}
		}
		return a;
	}
	l.default = u;
}), 98);

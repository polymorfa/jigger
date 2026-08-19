__d("WAWebEnforcementPictograms.react", [
	"WAWebCommonNewsletterEnums",
	"WDSIllustrationWdsPictoChannelsFeedbackBlock.react",
	"WDSIllustrationWdsPictoChannelsFeedbackWarning.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.enforcementType, n;
		switch (t) {
			case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM:
			case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND: {
				n = s.jsx(r("WDSIllustrationWdsPictoChannelsFeedbackBlock.react"), {});
				break;
			}
			case o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG:
			case o("WAWebCommonNewsletterEnums").EnforcementType.PROFILE_PICTURE_DELETION:
			case o("WAWebCommonNewsletterEnums").EnforcementType.ADMIN_PROFILE:
			case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND_INFORM:
			case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND: {
				n = s.jsx(r("WDSIllustrationWdsPictoChannelsFeedbackWarning.react"), {});
				break;
			}
		}
		return n;
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);

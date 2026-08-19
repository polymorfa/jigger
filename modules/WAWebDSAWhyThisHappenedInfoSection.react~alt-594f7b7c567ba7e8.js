__d("WAWebDSAWhyThisHappenedInfoSection.react", [
	"fbt",
	"WAWebCommonNewsletterEnums",
	"WAWebCommonNewsletterIntegrityStrings",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebNewsletterDSAModals.react",
	"WAWebNewsletterIntegrityDrawerUiComponents.react",
	"WAWebNewsletterIntegrityUtils",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.enforcementOriginLegalBasis, n = e.enforcementSource, r = e.enforcementType, a = e.enforcementViolationCategory, i;
		switch (r) {
			case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND_INFORM: {
				i = n === "COPS" || n === "RM" ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
						onClick: o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick,
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				);
				break;
			}
			case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND: {
				switch (t) {
					case "ADVERTISING": {
						i = s._(
							/*BTDS*/
							""
						);
						break;
					}
					case "COURT_ORDER": {
						i = s._(
							/*BTDS*/
							""
						);
						break;
					}
					case "DEFAMATION": {
						i = s._(
							/*BTDS*/
							""
						);
						break;
					}
					case "HATE_SPEECH": {
						i = s._(
							/*BTDS*/
							""
						);
						break;
					}
					case "INSULT": {
						i = s._(
							/*BTDS*/
							""
						);
						break;
					}
					case "OTHER_LOCAL_LAW": {
						i = s._(
							/*BTDS*/
							""
						);
						break;
					}
					case "PRIVACY": {
						i = s._(
							/*BTDS*/
							""
						);
						break;
					}
					default: {
						i = s._(
							/*BTDS*/
							"",
							[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
								href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
								onClick: o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick,
								children: s._(
									/*BTDS*/
									""
								)
							}))]
						);
						break;
					}
				}
				break;
			}
			case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM: {
				i = n === "COPS" || n === "RM" ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
						onClick: o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick,
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				);
				break;
			}
			case o("WAWebCommonNewsletterEnums").EnforcementType.ADMIN_PROFILE: {
				i = o("WAWebNewsletterIntegrityUtils").getAdminProfilePolicyGuideline(a);
				break;
			}
			case o("WAWebCommonNewsletterEnums").EnforcementType.PROFILE_PICTURE_DELETION: {
				i = o("WAWebNewsletterIntegrityUtils").getProfilePictureDeletionPolicyGuideline(a);
				break;
			}
			case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND: {
				i = o("WAWebNewsletterIntegrityUtils").getSuspendedNewsletterPolicyGuideline(a);
				break;
			}
			case o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG: {
				i = s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
						onClick: o("WAWebNewsletterDSAModals.react").logChannelGuidelinesClick,
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				);
				break;
			}
		}
		return u.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").InfoSection, { section: {
			testId: "why-this-happened",
			key: "why-this-happened",
			title: o("WAWebCommonNewsletterIntegrityStrings").getWhyThisHappenedSectionTitleString,
			subtitle: function() {
				return i;
			}
		} }, "why-this-happened");
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

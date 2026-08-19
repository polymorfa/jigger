__d("WAWebDSAWhyThisHappenedInfoSection.react", [
	"fbt",
	"WAWebCommonNewsletterEnums",
	"WAWebCommonNewsletterIntegrityStrings",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebNewsletterDSAModals.react",
	"WAWebNewsletterIntegrityDrawerUiComponents.react",
	"WAWebNewsletterIntegrityUtils",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(7), n = e.enforcementOriginLegalBasis, r = e.enforcementSource, a = e.enforcementType, i = e.enforcementViolationCategory, l;
		if (t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i) {
			e: switch (a) {
				case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND_INFORM: {
					l = r === "COPS" || r === "RM" ? s._(
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
					break e;
				}
				case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND: {
					t: switch (n) {
						case "ADVERTISING": {
							l = s._(
								/*BTDS*/
								""
							);
							break t;
						}
						case "COURT_ORDER": {
							l = s._(
								/*BTDS*/
								""
							);
							break t;
						}
						case "DEFAMATION": {
							l = s._(
								/*BTDS*/
								""
							);
							break t;
						}
						case "HATE_SPEECH": {
							l = s._(
								/*BTDS*/
								""
							);
							break t;
						}
						case "INSULT": {
							l = s._(
								/*BTDS*/
								""
							);
							break t;
						}
						case "OTHER_LOCAL_LAW": {
							l = s._(
								/*BTDS*/
								""
							);
							break t;
						}
						case "PRIVACY": {
							l = s._(
								/*BTDS*/
								""
							);
							break t;
						}
						default: l = s._(
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
					}
					break e;
				}
				case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM: {
					l = r === "COPS" || r === "RM" ? s._(
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
					break e;
				}
				case o("WAWebCommonNewsletterEnums").EnforcementType.ADMIN_PROFILE: {
					l = o("WAWebNewsletterIntegrityUtils").getAdminProfilePolicyGuideline(i);
					break e;
				}
				case o("WAWebCommonNewsletterEnums").EnforcementType.PROFILE_PICTURE_DELETION: {
					l = o("WAWebNewsletterIntegrityUtils").getProfilePictureDeletionPolicyGuideline(i);
					break e;
				}
				case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND: {
					l = o("WAWebNewsletterIntegrityUtils").getSuspendedNewsletterPolicyGuideline(i);
					break e;
				}
				case o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG: l = s._(
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
			}
			t[0] = n, t[1] = r, t[2] = a, t[3] = i, t[4] = l;
		} else l = t[4];
		var c;
		return t[5] !== l ? (c = u.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").InfoSection, { section: {
			testId: "why-this-happened",
			key: "why-this-happened",
			title: o("WAWebCommonNewsletterIntegrityStrings").getWhyThisHappenedSectionTitleString,
			subtitle: function() {
				return l;
			}
		} }, "why-this-happened"), t[5] = l, t[6] = c) : c = t[6], c;
	}
	l.default = c;
}), 226);

__d("WAWebNewsletterDSAModals.react", [
	"fbt",
	"WAWebCommonNewsletterEnums",
	"WAWebEnforcementActionLogging",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebLocationSearchingIcon.react",
	"WAWebNewsletterLearnMoreModal.react",
	"WAWebNullFunc",
	"WAWebSettingsDocumentIcon.react",
	"WAWebStatusVcardIcon.react",
	"WDSIconIcPublic.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { secondaryColor: {
		color: "xhslqc4",
		$$css: !0
	} };
	function d() {
		var e = [{
			key: "dsa-guidelines-modal-first-paragraph",
			content: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		}, {
			key: "dsa-guidelines-modal-second-paragraph",
			content: function() {
				return s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
						onClick: m,
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				);
			}
		}];
		return u.jsx(r("WAWebNewsletterLearnMoreModal.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			paragraphs: e
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m() {
		r("WAWebEnforcementActionLogging").logChannelGuidelinesClick();
	}
	function p(e) {
		switch (e) {
			case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.RM_COPS:
			case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.IP_SRT_VIOLATION: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
					onClick: m,
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.RM_PRODUCT_RESTRICTION:
			case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.GENERIC_VIOLATION: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
					onClick: m,
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.LEGAL_TDR: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
					onClick: m,
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.RESPONSE_VIOLATES_GUIDELINES: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
					onClick: m,
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
		}
	}
	function _(e) {
		var t = e.DSADecisionModalCategory, n = [{
			key: "dsa-decision-modal-first-paragraph",
			content: function() {
				return p(t);
			}
		}], a = [{
			key: "dsa-decision-modal-first-section",
			bullets: [{
				Icon: r("WDSIconIcPublic.react"),
				iconXstyle: c.secondaryColor,
				text: o("WAWebNullFunc").returnNull,
				subtext: function() {
					return s._(
						/*BTDS*/
						""
					);
				}
			}, {
				Icon: o("WAWebLocationSearchingIcon.react").LocationSearchingIcon,
				iconXstyle: c.secondaryColor,
				text: o("WAWebNullFunc").returnNull,
				subtext: function() {
					return s._(
						/*BTDS*/
						""
					);
				}
			}]
		}];
		return u.jsx(r("WAWebNewsletterLearnMoreModal.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			paragraphs: n,
			sections: a
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f() {
		var e = [{
			key: "dsa-eu-notice-modal-first-paragraph",
			content: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		}], t = [{
			key: "dsa-eu-notice-modal-first-section",
			bullets: [{
				Icon: o("WAWebSettingsDocumentIcon.react").SettingsDocumentIcon,
				iconXstyle: c.secondaryColor,
				text: o("WAWebNullFunc").returnNull,
				subtext: function() {
					return s._(
						/*BTDS*/
						""
					);
				}
			}, {
				Icon: o("WAWebStatusVcardIcon.react").StatusVcardIcon,
				iconXstyle: c.secondaryColor,
				text: o("WAWebNullFunc").returnNull,
				subtext: function() {
					return s._(
						/*BTDS*/
						""
					);
				}
			}]
		}];
		return u.jsx(r("WAWebNewsletterLearnMoreModal.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			paragraphs: e,
			sections: t
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.NewsletterDSAGuidelinesModal = d, l.logChannelGuidelinesClick = m, l.NewsletterDSADecisionModal = _, l.NewsletterDSAEUNoticeModal = f;
}), 226);

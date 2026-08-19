__d("WAWebContactInfoEncryptionSection", [
	"fbt",
	"WAWebABPropsSaga",
	"WAWebABPropsSupportGroup",
	"WAWebContactGetters",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFormatNotificationTemplateModalText",
	"WAWebLidMigrationUtils",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebOpenCoexSystemMessageModal.react",
	"WAWebOpenSystemMessageModal",
	"WAWebPrivacyModeSystemMsg",
	"WAWebSecurityDrawerSection.react",
	"WAWebSupportAIInfoNuxLoadable",
	"WAWebTextWithLearnMoreLink",
	"WAWebUserPrefsMultiDevice",
	"WAWebWid",
	"react",
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.contactId, n = e.onVerificationClick, a = o("useWAWebContactValues").useContactValues(t, [o("WAWebContactGetters").getPrivacyMode, o("WAWebContactGetters").getIsHosted]), i = a[0], l = a[1], c = d(o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(i), t, l);
		return c ? u.jsx(r("WAWebSecurityDrawerSection.react"), {
			header: c.header,
			text: c.text,
			onClick: c.onClick
		}) : u.jsx(r("WAWebSecurityDrawerSection.react"), {
			onClick: n,
			text: s._(
				/*BTDS*/
				""
			),
			header: { type: "encryption" }
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e, t, n) {
		var a = o("WAWebLidMigrationUtils").toUserLid(t);
		if (o("WAWebMobilePlatforms").isSMB()) {
			var i = o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage();
			if (i === !0) return {
				text: s._(
					/*BTDS*/
					""
				),
				header: { type: "security" },
				onClick: function() {
					o("WAWebOpenCoexSystemMessageModal.react").openCoexSecurityVerifySystemMessageModal({
						faqUrl: o("WAWebFaqUrl").getCoexHostedFaqUrl(),
						lid: a,
						text: o("WAWebFormatNotificationTemplateModalText").formatCoexSecurityModalTextForYourBusiness(),
						textLast: null,
						wid: t
					});
				}
			};
		}
		if (n === !0) return {
			text: s._(
				/*BTDS*/
				""
			),
			header: { type: "security" },
			onClick: function() {
				o("WAWebOpenCoexSystemMessageModal.react").openCoexSecurityVerifySystemMessageModal({
					faqUrl: o("WAWebFaqUrl").getCoexHostedFaqUrl(),
					lid: a,
					text: o("WAWebFormatNotificationTemplateModalText").formatCoexSecurityModalText(),
					textLast: o("WAWebFormatNotificationTemplateModalText").formatCoexSecurityModalTextLastParagraph(),
					wid: t
				});
			}
		};
		if (r("WAWebABPropsSupportGroup")(t.user)) {
			var l = function() {
				_(t) ? p() : o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getSupportChatSafetyFaqUrl());
			};
			return {
				text: u.jsx(r("WAWebTextWithLearnMoreLink"), {
					text: s._(
						/*BTDS*/
						""
					),
					handleClick: l
				}),
				header: { type: "none" },
				onClick: l
			};
		}
		switch (e) {
			case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE:
			case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.HOSTED_GROUP: return null;
			case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP: {
				var c = function() {
					o("WAWebOpenSystemMessageModal").openSystemMessageModal(o("WAWebFormatNotificationTemplateModalText").formatBspAndFbModalText(), o("WAWebFaqUrl").getE2EEnterpriseFaqUrl());
				};
				return {
					text: u.jsx(r("WAWebTextWithLearnMoreLink"), {
						text: s._(
							/*BTDS*/
							""
						),
						handleClick: c
					}),
					header: { type: "none" },
					onClick: c
				};
			}
			case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB: {
				var d = t.isIAS() ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				), m = function() {
					o("WAWebOpenSystemMessageModal").openSystemMessageModal(o("WAWebFormatNotificationTemplateModalText").formatFbModalText(t.isIAS()), o("WAWebFaqUrl").getE2EEnterpriseFaqUrl());
				};
				return {
					text: u.jsx(r("WAWebTextWithLearnMoreLink"), {
						text: d,
						handleClick: m
					}),
					header: { type: "none" },
					onClick: m
				};
			}
		}
		function p() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSupportAIInfoNuxLoadable").SupportAIInfoNuxLoadable, {}), { transition: "modal-flow" });
		}
		function _(e) {
			return r("WAWebWid").isCAPISupportAccount(e) && o("WAWebABPropsSaga").getIsSagaV1NuxEnabled();
		}
	}
	l.default = c;
}), 226);

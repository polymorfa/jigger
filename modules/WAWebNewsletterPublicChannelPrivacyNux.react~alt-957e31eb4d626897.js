__d("WAWebNewsletterPublicChannelPrivacyNux.react", [
	"fbt",
	"WAWebCommonNewsletterEnums",
	"WAWebCopyPasteSelectable.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"WAWebNewsletterFaqUrl",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterPrivacyRow.react",
	"WAWebPhoneNumberPrivacyNux.react",
	"WAWebSecurityShieldIcon.react",
	"WAWebUserPrefsMeUser",
	"WAWebUsernameGatingUtils",
	"WDSIconIcPublic.react",
	"WDSIconIcVisibility.react",
	"WDSIconIcVisibilityOff.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { tealColor: {
		color: "x1v5yvga",
		$$css: !0
	} };
	function d(e) {
		var t, n = e.chat, a = e.userRole, i = a === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner, l = s._(
			/*BTDS*/
			""
		), d = u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
			className: "x1ypdohk",
			id: "data-sharing-learn-more-link",
			onClick: p,
			selectable: !0,
			children: s._(
				/*BTDS*/
				""
			)
		}), f = u.jsxs(u.Fragment, { children: [
			u.jsx(r("WAWebNewsletterPrivacyRow.react"), {
				icon: u.jsx(r("WDSIconIcPublic.react"), {
					iconXstyle: c.tealColor,
					height: 20
				}),
				text: s._(
					/*BTDS*/
					""
				),
				title: i ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			}),
			u.jsx(m, { isOwner: i }),
			u.jsx(r("WAWebNewsletterPrivacyRow.react"), {
				icon: u.jsx(o("WAWebSecurityShieldIcon.react").SecurityShieldIcon, {
					iconXstyle: c.tealColor,
					height: 20
				}),
				text: i ? s._(
					/*BTDS*/
					"",
					[s._param("guidelines_link", d)]
				) : s._(
					/*BTDS*/
					"",
					[s._param("guidelines_link", d)]
				),
				title: i ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			})
		] });
		return u.jsx(r("WAWebPhoneNumberPrivacyNux.react"), {
			cancelText: r("WAWebFbtCommon")("Learn more"),
			customContent: f,
			displayName: (t = n == null ? void 0 : n.name) != null ? t : o("WAWebUserPrefsMeUser").getMaybeMeDisplayName(),
			okText: r("WAWebFbtCommon")("OK"),
			onCancel: _,
			onOK: o("WAWebModalManager").closeModalManager,
			pictureWid: n == null ? void 0 : n.id,
			testid: "public_channel__newsletter",
			title: l
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.isOwner;
		if (!o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled()) return u.jsx(r("WAWebNewsletterPrivacyRow.react"), {
			icon: u.jsx(r("WDSIconIcVisibilityOff.react"), {
				iconXstyle: c.tealColor,
				height: 20
			}),
			text: o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			title: s._(
				/*BTDS*/
				""
			)
		});
		var n = r(t ? "WDSIconIcVisibilityOff.react" : "WDSIconIcVisibility.react"), a = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WAWebNewsletterPrivacyRow.react"), {
			icon: u.jsx(n, {
				iconXstyle: c.tealColor,
				height: 20
			}),
			text: t ? s._(
				/*BTDS*/
				""
			) : a,
			title: t ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl());
	}
	function _() {
		o("WAWebExternalLink.react").openExternalLink(o("WAWebNewsletterFaqUrl").getNewsletterPrivacyFaqUrl());
	}
	l.default = d;
}), 226);

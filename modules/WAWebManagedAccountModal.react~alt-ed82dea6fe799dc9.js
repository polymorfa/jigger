__d("WAWebManagedAccountModal.react", [
	"fbt",
	"WAWebFeatureControlCache",
	"WAWebModal.react",
	"WAWebModalManager",
	"WDSIconIcAlternateEmail.react",
	"WDSIconIcCall.react",
	"WDSIconIcCategory.react",
	"WDSIconIcClose.react",
	"WDSIconIcDelete.react",
	"WDSIconIcDescription.react",
	"WDSIconIcDuration.react",
	"WDSIconIcGridOn.react",
	"WDSIconIcHistory.react",
	"WDSIconIcInfo.react",
	"WDSIconIcMail.react",
	"WDSIconIcPerson.react",
	"WDSIconIcPhotoCamera.react",
	"WDSIconIcPublic.react",
	"WDSIconIcShieldVerified.react",
	"WDSIconIcShoppingBag.react",
	"WDSIconWdsBusinessDirectoryLocation.react",
	"WDSIconWdsIcAi.react",
	"WDSIconWdsIcTransferOwnership.react",
	"WDSIllustrationWdsIllTogglesPrivacyNotifications.react",
	"WDSText.react",
	"isStringNotNullAndNotWhitespaceOnly",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = 20, d = { rowIcon: {
		color: "xhslqc4",
		flexShrink: "x2lah0s",
		$$css: !0
	} }, m = [
		{
			key: "META_VERIFIED",
			Icon: r("WDSIconIcShieldVerified.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "MAIBA",
			Icon: r("WDSIconWdsIcAi.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "CATALOG_MANAGEMENT",
			Icon: r("WDSIconIcGridOn.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "BUSINESS_DIRECTORY",
			Icon: r("WDSIconWdsBusinessDirectoryLocation.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "ORDERS",
			Icon: r("WDSIconIcShoppingBag.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "FB_IG_LINKING",
			Icon: r("WDSIconIcAlternateEmail.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "DISAPPEARING_MESSAGES",
			Icon: r("WDSIconIcDuration.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		}
	];
	function p(e) {
		return e == null ? [] : m.filter(function(t) {
			return e.entries[t.key] === "DISABLED";
		});
	}
	var _ = [
		{
			key: "transfer_chats",
			Icon: r("WDSIconWdsIcTransferOwnership.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "chat_history",
			Icon: r("WDSIconIcHistory.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "change_phone_number",
			Icon: r("WDSIconIcCall.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "delete_account",
			Icon: r("WDSIconIcDelete.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		}
	], f = [
		{
			key: "name",
			Icon: r("WDSIconIcPerson.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "username",
			Icon: r("WDSIconIcAlternateEmail.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "cover_photo",
			Icon: r("WDSIconIcPhotoCamera.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "business_category",
			Icon: r("WDSIconIcCategory.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "business_description",
			Icon: r("WDSIconIcDescription.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "business_email",
			Icon: r("WDSIconIcMail.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "business_website",
			Icon: r("WDSIconIcPublic.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		}
	];
	function g(e) {
		var t = e.Icon, n = e.children;
		return u.jsxs("div", {
			className: "x6s0dn4 x78zum5 x8a3fw1 x1aj3ljl x1xrf6ya xscbp6u",
			children: [u.jsx(t, {
				width: c,
				height: c,
				iconXstyle: d.rowIcon
			}), u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body1",
				children: n
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = o("WAWebFeatureControlCache").getPolicy(), n = p(t), a = r("isStringNotNullAndNotWhitespaceOnly")(e.parentCompanyName) ? e.parentCompanyName : s._(
			/*BTDS*/
			""
		);
		return u.jsxs(o("WAWebModal.react").Modal, {
			onOverlayClick: o("WAWebModalManager").closeModalManager,
			children: [u.jsx("button", {
				type: "button",
				"aria-label": s._(
					/*BTDS*/
					""
				),
				onClick: o("WAWebModalManager").closeModalManager,
				"data-testid": "managed_account_modal_close_btn",
				className: "x6s0dn4 x11g6tue x1ejq31n x18oe1m7 x1sy0etr xstzfhl xhslqc4 x1ypdohk x78zum5 x10w6t97 x67dgr1 xugynej xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x10l6tqk x1td3qas x1vjfegm",
				children: u.jsx(r("WDSIconIcClose.react"), {
					width: 20,
					height: 20
				})
			}), u.jsxs("div", {
				"data-testid": "managed_account_modal",
				className: "x12f24lm x1odjw0f x181vq82 x1uc92m x1rohswg xfk6m8",
				children: [
					u.jsxs("div", {
						className: "x6s0dn4 x78zum5 xdt5ytf x1xrf6ya xscbp6u x2b8uid",
						children: [
							u.jsx(r("WDSIllustrationWdsIllTogglesPrivacyNotifications.react"), {}),
							u.jsx("div", {
								className: "x1de0gy",
								children: u.jsx(r("WDSText.react"), {
									colorName: "contentDefault",
									type: "Headline1",
									children: s._(
										/*BTDS*/
										""
									)
								})
							}),
							u.jsx("div", {
								className: "xav9cv8",
								children: u.jsx(r("WDSText.react"), {
									colorName: "contentDeemphasized",
									type: "Body1",
									children: s._(
										/*BTDS*/
										"",
										[s._param("company_name", a)]
									)
								})
							})
						]
					}),
					u.jsxs("div", {
						"data-testid": "managed_account_modal_capabilities_section",
						className: "x1nmyh1g",
						children: [u.jsx("div", {
							className: "xefnzgg",
							children: u.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Body1Emphasized",
								children: s._(
									/*BTDS*/
									""
								)
							})
						}), u.jsx(g, {
							Icon: r("WDSIconIcInfo.react"),
							children: s._(
								/*BTDS*/
								"",
								[s._param("company_name", a)]
							)
						})]
					}),
					n.length > 0 ? u.jsxs("div", {
						"data-testid": "managed_account_modal_tools_section",
						className: "x1nmyh1g",
						children: [u.jsx("div", {
							className: "xefnzgg",
							children: u.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Body1Emphasized",
								children: s._(
									/*BTDS*/
									""
								)
							})
						}), n.map(function(e) {
							return u.jsx(g, {
								Icon: e.Icon,
								children: e.label()
							}, e.key);
						})]
					}) : null,
					u.jsxs("div", {
						"data-testid": "managed_account_modal_settings_section",
						className: "x1nmyh1g",
						children: [u.jsx("div", {
							className: "xefnzgg",
							children: u.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Body1Emphasized",
								children: s._(
									/*BTDS*/
									""
								)
							})
						}), _.map(function(e) {
							return u.jsx(g, {
								Icon: e.Icon,
								children: e.label()
							}, e.key);
						})]
					}),
					u.jsxs("div", {
						"data-testid": "managed_account_modal_profile_fields_section",
						className: "x1nmyh1g",
						children: [u.jsx("div", {
							className: "xefnzgg",
							children: u.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Body1Emphasized",
								children: s._(
									/*BTDS*/
									""
								)
							})
						}), f.map(function(e) {
							return u.jsx(g, {
								Icon: e.Icon,
								children: e.label()
							}, e.key);
						})]
					})
				]
			})]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);

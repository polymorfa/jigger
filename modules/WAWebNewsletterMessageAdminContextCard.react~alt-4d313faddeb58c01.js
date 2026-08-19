__d("WAWebNewsletterMessageAdminContextCard.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebButton.react",
	"WAWebCmd",
	"WAWebCommonNewsletterStrings",
	"WAWebDetailImage.react",
	"WAWebDrawerManager",
	"WAWebFlex.react",
	"WAWebInfoFlowLoadable",
	"WAWebInfoFlowStep",
	"WAWebKeyboardTabUtils",
	"WAWebNewsletterAdminFunnelLogging",
	"WAWebNewsletterInfoPhoto.react",
	"WAWebProfilePicThumbCollection",
	"WAWebText.react",
	"WAWebWamEnumAdminFlowType",
	"WAWebWamEnumChannelLinkShareEntryPoint",
	"WDSIconIcPhotoCamera.react",
	"react",
	"useWAWebModelValues",
	"useWAWebWindowSize"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = {
		body: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		title: {
			maxWidth: "x17fpy1y",
			boxSizing: "x9f619",
			wordBreak: "x13faqbe",
			$$css: !0
		},
		marginHoriz20: {
			marginInlineStart: "x6pxu1d",
			marginInlineEnd: "xd6izgl",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		},
		marginVert24: {
			marginTop: "x9u28bd",
			marginBottom: "x14mdic9",
			$$css: !0
		},
		paddingHoriz20: {
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	}, m = 850;
	function p(e) {
		var t, n, a, i, l, p = e.chat, _ = o("useWAWebModelValues").useOptionalModelValues(p.newsletterMetadata, [
			"isSuspendedOrTerminated",
			"name",
			"description",
			"membershipType"
		]), f = new (o("WAWebNewsletterAdminFunnelLogging")).NewsletterAdminFunnelLogger(o("WAWebWamEnumAdminFlowType").ADMIN_FLOW_TYPE.EDIT), g = r("useWAWebWindowSize")(), h = g.width, y = c(function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "info_flow",
				chat: p,
				initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
				newsletterLinkShareScreenEntryPoint: o("WAWebWamEnumChannelLinkShareEntryPoint").CHANNEL_LINK_SHARE_ENTRY_POINT.PRODUCER_CONTEXT_CARD
			} : u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
				chat: p,
				initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
				newsletterLinkShareScreenEntryPoint: o("WAWebWamEnumChannelLinkShareEntryPoint").CHANNEL_LINK_SHARE_ENTRY_POINT.PRODUCER_CONTEXT_CARD
			}), {
				transition: "slide-left",
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				noFocus: !0
			});
		}, [p]), C = c(function() {
			o("WAWebCmd").Cmd.editNewsletterDescription(), o("WAWebCmd").Cmd.chatInfoDrawer(p, { focusNewsletterDescriptionOnMount: !0 });
		}, [p]), b = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(p.id), v = h <= m ? o("WAWebFlex.react").FlexColumn : o("WAWebFlex.react").FlexRow, S = h <= m ? {
			rowGap: 8,
			align: "center"
		} : {};
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 12,
			xstyle: [
				d.body,
				d.marginHoriz20,
				d.marginVert24
			],
			align: "center",
			testid: "newsletter-admin-context-card",
			children: [
				(b == null ? void 0 : b.img) != null ? u.jsx(o("WAWebDetailImage.react").DetailImage, {
					id: p.id,
					shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
					quality: o("WAWebDetailImage.react").DetailImageQuality.High,
					size: 88,
					showOutline: !0,
					testId: "newsletter-admin-context-card-readonly-photo"
				}) : u.jsx(r("WAWebNewsletterInfoPhoto.react"), {
					chat: p,
					readOnly: ((t = _ == null ? void 0 : _.isSuspendedOrTerminated) != null ? t : !1) || !((n = _ == null ? void 0 : _.iAmAdminOrOwner()) != null && n),
					HoverIcon: r("WDSIconIcPhotoCamera.react"),
					adminFunnelLogger: f,
					showAddIconOverlay: !1,
					size: 88,
					testId: "newsletter-admin-context-card-photo-picker"
				}),
				u.jsx(o("WAWebText.react").WAWebTextTitle, {
					color: "primary",
					xstyle: [d.title, d.paddingHoriz20],
					testid: "newsletter-admin-context-card-channel-title",
					children: o("WAWebCommonNewsletterStrings").startGrowingChannelNameText((a = _ == null ? void 0 : _.name) != null ? a : "")
				}),
				u.jsx(o("WAWebText.react").WAWebTextMuted, {
					color: "secondary",
					wrap: "wrap",
					testid: "newsletter-admin-context-card-subtitle-message",
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsxs(v, babelHelpers.extends({
					columnGap: 8,
					marginTop: 8
				}, S, { children: [((_ == null ? void 0 : _.description) == null || (_ == null ? void 0 : _.description) === "") && u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
					onClick: C,
					shadowOnHover: !1,
					testid: "newsletter-admin-context-card-add-description-button",
					children: s._(
						/*BTDS*/
						""
					)
				}), ((i = (l = p.newsletterMetadata) == null ? void 0 : l.iAmAdminOrOwner()) != null ? i : !1) && u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
					onClick: y,
					shadowOnHover: !1,
					testid: "newsletter-admin-context-card-share-channel-link-button",
					children: s._(
						/*BTDS*/
						""
					)
				})] }))
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);

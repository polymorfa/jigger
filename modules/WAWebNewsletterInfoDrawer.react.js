__d("WAWebNewsletterInfoDrawer.react", [
	"fbt",
	"WAWebChatInfoDrawerRow.react",
	"WAWebChatInfoDrawerSection.react",
	"WAWebChevronIcon.react",
	"WAWebCmd",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEnforcementActionLogging",
	"WAWebModalManager",
	"WAWebMuteRow.react",
	"WAWebNewsletterDescriptionSection.react",
	"WAWebNewsletterExtendedGatingUtils",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterInfoTopCard.react",
	"WAWebNewsletterInsightsSection.react",
	"WAWebNewsletterIntegritySection.react",
	"WAWebNewsletterPendingInvites.react",
	"WAWebNewsletterPhoneNumberPrivacyNux.react",
	"WAWebNewsletterPrivacyRow.react",
	"WAWebNewsletterPublicChannelPrivacyNux.react",
	"WAWebNewsletterSubscriberListSection.react",
	"WAWebSettingsFBT",
	"WAWebSettingsOutlineIcon.react",
	"WAWebSimilarNewslettersUnits.react",
	"WAWebStateUtils",
	"WAWebUiActionWamEvent",
	"WAWebUnmuteNotificationsRefreshedIcon.react",
	"WAWebWamEnumInteractionEntryPoint",
	"WAWebWamEnumInteractionSurface",
	"WAWebWamEnumThreadType",
	"WAWebWamEnumUiActionType",
	"WAWebWamPrivateStatsUtils",
	"WAWebWarningOutlineIcon.react",
	"WDSIconIcDialpad.react",
	"WDSIconIcPublic.react",
	"WDSPaddings.stylex",
	"cr:2695",
	"gkx",
	"react",
	"useLazyRef",
	"useWAWebEventTargetValue",
	"useWAWebListener",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useRef, f = { marginTop10: {
		marginTop: "x1anpbxc",
		$$css: !0
	} }, g = { icon: {
		color: "xhslqc4",
		$$css: !0
	} };
	function h(t) {
		var a, i, l = t.ref, u = babelHelpers.objectWithoutPropertiesLoose(t, e), d = u.adminFunnelLogger, h = u.chat, y = u.focusDescriptionOnMount, C = u.newsletterMetadata, b = u.onAdminCenter, v = u.onClose, S = u.onContactInfo, R = u.onDeleteNewsletter, L = u.onNotificationSettings, E = u.onSettings, k = u.onShareLink, I = u.onTransferNewsletterOwnership, T = u.onTransferOwnershipSelection, D = u.onVerification, x = r("useWAWebUIM")(), $ = _(null), P = r("useWAWebEventTargetValue")(C, ["change:suspended"], function() {
			return (C == null ? void 0 : C.suspended) === !0;
		}), N = r("useWAWebEventTargetValue")(C, ["change:canBeMuted"], function() {
			return !!(C != null && C.canBeMuted) && !P;
		});
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "edit_newsletter_description", function() {
			$.current && $.current.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		});
		var M = r("useLazyRef")(function() {
			return new (o("WAWebUiActionWamEvent")).UiActionWamEvent({
				uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE.CHANNEL_INFO_OPEN,
				uiActionPreloaded: !0
			});
		}), w = function() {
			v ? v() : x == null || x.requestDismiss();
		}, A = P ? null : c.jsx(r("WAWebNewsletterDescriptionSection.react"), {
			chat: h,
			adminFunnelLogger: d,
			focusOnMount: y
		}), F = r("useWAWebEventTargetValue")(C, ["change:membershipType"], function() {
			var e;
			return (e = C == null ? void 0 : C.iAmAdminOrOwner()) != null ? e : !1;
		}), O = C != null && !P && o("WAWebNewsletterExtendedGatingUtils").isNewsletterProducerInsightsEnabled(C) ? c.jsx(r("WAWebNewsletterInsightsSection.react"), {
			chat: h,
			newsletterMetadata: C,
			xstyle: f.marginTop10,
			onSeeAllClick: u.onViewInsights
		}) : null, B = o("WAWebNewsletterExtendedGatingUtils").isNewsletterAdminNotificationsEnabled(h.newsletterMetadata) ? c.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			testid: "newsletter-info-notifications-settings",
			title: o("WAWebSettingsFBT").notificationsTitle(),
			icon: c.jsx(o("WAWebUnmuteNotificationsRefreshedIcon.react").UnmuteNotificationsRefreshedIcon, { iconXstyle: g.icon }),
			onClick: L,
			side: c.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
				directional: !0,
				height: 21,
				iconXstyle: g.icon
			})
		}) : null, W = !B && N ? c.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			xstyle: [f.marginTop10, o("WDSPaddings.stylex").wdsPaddings.paddingHor0],
			children: c.jsx(r("WAWebMuteRow.react"), {
				chat: h,
				mute: h.mute
			})
		}) : null, q = m(function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebNewsletterPhoneNumberPrivacyNux.react"), {}));
		}, []), U = m(function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebNewsletterPublicChannelPrivacyNux.react"), {
				chat: h,
				userRole: C == null ? void 0 : C.membershipType
			}));
		}, [h, C == null ? void 0 : C.membershipType]), V = F && o("WAWebNewsletterGatingUtils").isNewsletterReactionSettingsEnabled() && !P ? c.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			testid: "newsletter-info-channel-settings",
			title: c.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: s._(
				/*BTDS*/
				""
			) }),
			icon: c.jsx(o("WAWebSettingsOutlineIcon.react").SettingsOutlineIcon, {
				iconXstyle: g.icon,
				height: 20
			}),
			onClick: E
		}) : null, H = m(function() {
			r("WAWebEnforcementActionLogging").startEnforcementSession(o("WAWebWamEnumInteractionEntryPoint").INTERACTION_ENTRY_POINT.INFO_DRAWER_ALERT_OPTION, h.id.toString(), o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.NEWSLETTER_INFO_DRAWER), r("WAWebEnforcementActionLogging").logChannelAlertsClick(), b();
		}, [h.id, b]), G = !((a = h.newsletterMetadata) != null && a.terminated) && F ? c.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			testid: "newsletter-info-admin-center-row",
			icon: c.jsx(o("WAWebWarningOutlineIcon.react").WarningOutlineIcon, {
				iconXstyle: g.icon,
				height: 16
			}),
			onClick: H,
			title: c.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: s._(
				/*BTDS*/
				""
			) })
		}) : null, z = P ? null : c.jsx(r("WAWebNewsletterPrivacyRow.react"), {
			onClick: F ? U : null,
			title: s._(
				/*BTDS*/
				""
			),
			text: F ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			icon: c.jsx(r("WDSIconIcPublic.react"), {
				iconXstyle: g.icon,
				height: 20
			})
		}), j = !P && !F ? c.jsx(r("WAWebNewsletterPrivacyRow.react"), {
			onClick: q,
			title: s._(
				/*BTDS*/
				""
			),
			text: s._(
				/*BTDS*/
				""
			),
			icon: c.jsx(r("WDSIconIcDialpad.react"), {
				iconXstyle: g.icon,
				height: 20,
				width: 20
			})
		}) : null, K = c.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			xstyle: [f.marginTop10, o("WDSPaddings.stylex").wdsPaddings.paddingHor0],
			children: [
				B,
				z,
				V,
				G,
				j
			]
		}), Q = c.jsx(r("WAWebNewsletterIntegritySection.react"), {
			xstyle: f.marginTop10,
			chat: u.chat,
			onDeleteNewsletter: R,
			onTransferNewsletterOwnership: I
		}), X = F && !P ? c.jsx(r("WAWebNewsletterSubscriberListSection.react"), {
			newsletter: h,
			adminFunnelLogger: d,
			onShareLink: k,
			onVerification: D,
			onContactInfo: S,
			onTransferOwnershipSelection: T
		}) : null, Y = o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled() && (i = C == null ? void 0 : C.iAmOwner()) != null && i && !P ? c.jsx(r("WAWebNewsletterPendingInvites.react"), {
			newsletter: h,
			onVerification: D
		}) : null, J = !P && !(C != null && C.iAmAdminOrOwner()) && o("WAWebNewsletterGatingUtils").isSimilarNewsletterInInfoDrawersEnabled() ? c.jsx(r("WAWebDrawerSection.react"), { children: c.jsx(o("WAWebSimilarNewslettersUnits.react").SimilarNewslettersInfoDrawerUnit, { chat: h }) }) : null;
		p(function() {
			var e = M.current;
			e && (e.markUiActionT(), e.commit(), M.current = void 0), o("WAWebWamPrivateStatsUtils").logUiActionShadowPrivateStatsTestEvents();
		}, []);
		var Z;
		return !r("gkx")("26258") && n("cr:2695") && (Z = c.jsx(n("cr:2695"), { chat: h })), c.jsxs(r("WAWebDrawer.react"), {
			ref: l,
			theme: "striped",
			testid: "chat-info-drawer",
			tsNavigationData: {
				surface: "channel-profile",
				extras: {
					threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
					channelWid: h.id
				}
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onCancel: w,
				testid: "newsletter-info-header"
			}), c.jsx(r("WAWebDrawerBody.react"), {
				ref: $,
				children: c.jsxs("section", {
					className: "x2lah0s x1c4vz4f xdl72j9 x1fcywrv",
					"data-testid": "group-info-drawer-body",
					children: [
						c.jsx(r("WAWebNewsletterInfoTopCard.react"), {
							chat: o("WAWebStateUtils").unproxy(h),
							adminFunnelLogger: d
						}),
						A,
						O,
						W,
						J,
						K,
						Y,
						X,
						Q,
						Z
					]
				})
			})]
		}, "newsletter-info-modal");
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);

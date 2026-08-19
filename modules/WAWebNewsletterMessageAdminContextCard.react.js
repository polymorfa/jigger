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
	"react-compiler-runtime",
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
		var t, n = o("react-compiler-runtime").c(36), a = e.chat, i;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [
			"isSuspendedOrTerminated",
			"name",
			"description",
			"membershipType"
		], n[0] = i) : i = n[0];
		var l = o("useWAWebModelValues").useOptionalModelValues(a.newsletterMetadata, i), c;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (c = new (o("WAWebNewsletterAdminFunnelLogging")).NewsletterAdminFunnelLogger(o("WAWebWamEnumAdminFlowType").ADMIN_FLOW_TYPE.EDIT), n[1] = c) : c = n[1];
		var p = c, _ = r("useWAWebWindowSize")(), f = _.width, g;
		n[2] !== a ? (g = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "info_flow",
				chat: a,
				initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
				newsletterLinkShareScreenEntryPoint: o("WAWebWamEnumChannelLinkShareEntryPoint").CHANNEL_LINK_SHARE_ENTRY_POINT.PRODUCER_CONTEXT_CARD
			} : u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
				chat: a,
				initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
				newsletterLinkShareScreenEntryPoint: o("WAWebWamEnumChannelLinkShareEntryPoint").CHANNEL_LINK_SHARE_ENTRY_POINT.PRODUCER_CONTEXT_CARD
			}), {
				transition: "slide-left",
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				noFocus: !0
			});
		}, n[2] = a, n[3] = g) : g = n[3];
		var h = g, y;
		n[4] !== a ? (y = function() {
			o("WAWebCmd").Cmd.editNewsletterDescription(), o("WAWebCmd").Cmd.chatInfoDrawer(a, { focusNewsletterDescriptionOnMount: !0 });
		}, n[4] = a, n[5] = y) : y = n[5];
		var C = y, b;
		n[6] !== a.id ? (b = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(a.id), n[6] = a.id, n[7] = b) : b = n[7];
		var v = b, S = f <= m ? o("WAWebFlex.react").FlexColumn : o("WAWebFlex.react").FlexRow, R;
		n[8] !== f ? (R = f <= m ? {
			rowGap: 8,
			align: "center"
		} : {}, n[8] = f, n[9] = R) : R = n[9];
		var L = R, E;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (E = [
			d.body,
			d.marginHoriz20,
			d.marginVert24
		], n[10] = E) : E = n[10];
		var k;
		if (n[11] !== a || n[12] !== (v == null ? void 0 : v.img) || n[13] !== l) {
			var I, T;
			k = (v == null ? void 0 : v.img) != null ? u.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: a.id,
				shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
				quality: o("WAWebDetailImage.react").DetailImageQuality.High,
				size: 88,
				showOutline: !0,
				testId: "newsletter-admin-context-card-readonly-photo"
			}) : u.jsx(r("WAWebNewsletterInfoPhoto.react"), {
				chat: a,
				readOnly: ((I = l == null ? void 0 : l.isSuspendedOrTerminated) != null ? I : !1) || !((T = l == null ? void 0 : l.iAmAdminOrOwner()) != null && T),
				HoverIcon: r("WDSIconIcPhotoCamera.react"),
				adminFunnelLogger: p,
				showAddIconOverlay: !1,
				size: 88,
				testId: "newsletter-admin-context-card-photo-picker"
			}), n[11] = a, n[12] = v == null ? void 0 : v.img, n[13] = l, n[14] = k;
		} else k = n[14];
		var D;
		n[15] === Symbol.for("react.memo_cache_sentinel") ? (D = [d.title, d.paddingHoriz20], n[15] = D) : D = n[15];
		var x = (t = l == null ? void 0 : l.name) != null ? t : "", $;
		n[16] !== x ? ($ = o("WAWebCommonNewsletterStrings").startGrowingChannelNameText(x), n[16] = x, n[17] = $) : $ = n[17];
		var P;
		n[18] !== $ ? (P = u.jsx(o("WAWebText.react").WAWebTextTitle, {
			color: "primary",
			xstyle: D,
			testid: "newsletter-admin-context-card-channel-title",
			children: $
		}), n[18] = $, n[19] = P) : P = n[19];
		var N;
		n[20] === Symbol.for("react.memo_cache_sentinel") ? (N = u.jsx(o("WAWebText.react").WAWebTextMuted, {
			color: "secondary",
			wrap: "wrap",
			testid: "newsletter-admin-context-card-subtitle-message",
			children: s._(
				/*BTDS*/
				""
			)
		}), n[20] = N) : N = n[20];
		var M;
		n[21] !== C || n[22] !== (l == null ? void 0 : l.description) ? (M = ((l == null ? void 0 : l.description) == null || (l == null ? void 0 : l.description) === "") && u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
			onClick: C,
			shadowOnHover: !1,
			testid: "newsletter-admin-context-card-add-description-button",
			children: s._(
				/*BTDS*/
				""
			)
		}), n[21] = C, n[22] = l == null ? void 0 : l.description, n[23] = M) : M = n[23];
		var w;
		if (n[24] !== a.newsletterMetadata || n[25] !== h) {
			var A, F;
			w = ((A = (F = a.newsletterMetadata) == null ? void 0 : F.iAmAdminOrOwner()) != null ? A : !1) && u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
				onClick: h,
				shadowOnHover: !1,
				testid: "newsletter-admin-context-card-share-channel-link-button",
				children: s._(
					/*BTDS*/
					""
				)
			}), n[24] = a.newsletterMetadata, n[25] = h, n[26] = w;
		} else w = n[26];
		var O;
		n[27] !== S || n[28] !== L || n[29] !== M || n[30] !== w ? (O = u.jsxs(S, babelHelpers.extends({
			columnGap: 8,
			marginTop: 8
		}, L, { children: [M, w] })), n[27] = S, n[28] = L, n[29] = M, n[30] = w, n[31] = O) : O = n[31];
		var B;
		return n[32] !== P || n[33] !== O || n[34] !== k ? (B = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 12,
			xstyle: E,
			align: "center",
			testid: "newsletter-admin-context-card",
			children: [
				k,
				P,
				N,
				O
			]
		}), n[32] = P, n[33] = O, n[34] = k, n[35] = B) : B = n[35], B;
	}
	l.default = p;
}), 226);

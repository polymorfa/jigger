__d("WAWebNewsletterConversationPanelHeader.react", [
	"fbt",
	"Promise",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebChatGetters",
	"WAWebCommonNewsletterEnums",
	"WAWebDrawerManager",
	"WAWebDrawerManagerContext",
	"WAWebFollowNewsletter",
	"WAWebInfoFlowLoadable",
	"WAWebInfoFlowStep",
	"WAWebKeyboardTabUtils",
	"WAWebModalManager",
	"WAWebNewsletterAddToStatusButtonLoadable",
	"WAWebNewsletterDirectorySearchAction",
	"WAWebNewsletterExtendedGatingUtils",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterModelUtils",
	"WAWebNewsletterSubscribeButton.react",
	"WAWebNewsletterUpdateUserSettingsAction",
	"WAWebStateUtils",
	"WAWebTabOrder",
	"WAWebUnfollowNewsletterConfirmationModal.react",
	"WAWebWamEnumChannelEventSurface",
	"WAWebWamEnumChannelLinkShareEntryPoint",
	"WAWebWamEnumTsSurface",
	"WAWebWidFactory",
	"WDSButton.react",
	"WDSIconIcLink.react",
	"WDSIconIcNotifications.react",
	"WDSIconIcNotificationsOff.react",
	"WDSMenuBarItem.react",
	"WDSSpinner.react",
	"WDSTooltip.react",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebChatValues",
	"useWAWebModelValues",
	"useWAWebOnUnmount",
	"useWAWebPrevious"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useState;
	function _(t) {
		var a = o("react-compiler-runtime").c(38), i = t.chat, l;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (l = [o("WAWebChatGetters").getIsNewsletter, o("WAWebChatGetters").getMuteExpiration], a[0] = l) : l = a[0];
		var u = o("useWAWebChatValues").useChatValues(i.id, l), d = u[0], m = u[1], _;
		a[1] === Symbol.for("react.memo_cache_sentinel") ? (_ = [
			"membershipType",
			"suspended",
			"terminated",
			"isSuspendedOrTerminated",
			"canBeMuted",
			"capabilities"
		], a[1] = _) : _ = a[1];
		var f = o("useWAWebModelValues").useOptionalModelValues(i.newsletterMetadata, _), g;
		a[2] !== f ? (g = function() {
			f == null || f.resetRecentlyFollowedFrom();
		}, a[2] = f, a[3] = g) : g = a[3], r("useWAWebOnUnmount")(g);
		var y = p(!1), C = y[0], b = y[1], v = p(!1), S = v[0], R = v[1], L = r("useWAWebPrevious")(m);
		L !== m && S && R(!1);
		var E;
		a[4] !== i ? (E = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				b(!0), yield (e || (e = n("Promise"))).allSettled([o("WAWebFollowNewsletter").followNewsletter(o("WAWebStateUtils").unproxy(i), {
					eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
					discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_THREAD
				}), o("WAWebNewsletterGatingUtils").isSimilarNewsletterInThreadEnabled() && o("WAWebNewsletterDirectorySearchAction").getSimilarNewslettersAction(o("WAWebStateUtils").unproxy(i))]), b(!1);
			});
			return function() {
				return t.apply(this, arguments);
			};
		})(), a[4] = i, a[5] = E) : E = a[5];
		var k = E, I;
		a[6] !== i ? (I = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebUnfollowNewsletterConfirmationModal.react").UnfollowNewsletterConfirmationModal, {
				chat: o("WAWebStateUtils").unproxy(i),
				loggingOptions: { eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD }
			}));
		}, a[6] = i, a[7] = I) : I = a[7];
		var T = I, D = o("WAWebDrawerManagerContext").useDrawerManagerContext("mid"), x;
		a[8] !== i || a[9] !== D ? (x = function() {
			var e, t = (e = D.existsDrawer()) != null ? e : !1;
			t || o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "info_flow",
				chat: i,
				initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
				newsletterLinkShareScreenEntryPoint: o("WAWebWamEnumChannelLinkShareEntryPoint").CHANNEL_LINK_SHARE_ENTRY_POINT.CHANNEL_THREAD
			} : c.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
				chat: i,
				initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
				newsletterLinkShareScreenEntryPoint: o("WAWebWamEnumChannelLinkShareEntryPoint").CHANNEL_LINK_SHARE_ENTRY_POINT.CHANNEL_THREAD
			}), {
				transition: "slide-left",
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				noFocus: !0
			});
		}, a[8] = i, a[9] = D, a[10] = x) : x = a[10];
		var $ = x, P;
		a[11] !== i.id || a[12] !== m ? (P = function() {
			R(!0), o("WAWebNewsletterUpdateUserSettingsAction").updateNewsletterUserSettingsAction(i.id, o("WAWebNewsletterModelUtils").isMuted(m) ? o("WAWebNewsletterModelUtils").UNMUTED_STATE : o("WAWebNewsletterModelUtils").MUTED_STATE, [o("WAWebNewsletterUpdateUserSettingsAction").NewsletterUserSetting.AdminActivity], { eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD }).catch(function() {
				return R(!1);
			});
		}, a[11] = i.id, a[12] = m, a[13] = P) : P = a[13];
		var N = P;
		if (!d || f == null) return null;
		if (f.isSuspendedOrTerminated) {
			var M;
			return a[14] !== T || a[15] !== f.membershipType ? (M = f.membershipType === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber ? c.jsx(r("WDSButton.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: T,
				testid: "conversation-panel-header-newsletter-unfollow-button"
			}) : null, a[14] = T, a[15] = f.membershipType, a[16] = M) : M = a[16], M;
		}
		var w = null;
		if (f.canBeMuted && !o("WAWebNewsletterExtendedGatingUtils").isNewsletterAdminNotificationsEnabled(i.newsletterMetadata)) {
			var A;
			a[17] !== m ? (A = o("WAWebNewsletterModelUtils").isMuted(m), a[17] = m, a[18] = A) : A = a[18];
			var F;
			a[19] !== N || a[20] !== S || a[21] !== A ? (F = c.jsx(h, {
				isMuted: A,
				isTogglingMute: S,
				onClick: N
			}), a[19] = N, a[20] = S, a[21] = A, a[22] = F) : F = a[22], w = F;
		}
		var O;
		if (a[23] !== $ || a[24] !== f) {
			var B;
			O = (B = f == null ? void 0 : f.iAmAdminOrOwner()) != null && B ? c.jsx(r("WDSMenuBarItem.react"), {
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				testid: "share-newsletter-button",
				icon: r("WDSIconIcLink.react"),
				onClick: $,
				title: s._(
					/*BTDS*/
					""
				)
			}) : null, a[23] = $, a[24] = f, a[25] = O;
		} else O = a[25];
		var W = O, q;
		if (a[26] !== k || a[27] !== C || a[28] !== f) {
			var U;
			q = (U = f == null ? void 0 : f.iAmGuest()) != null && U ? c.jsx(r("WAWebNewsletterSubscribeButton.react"), {
				onClick: k,
				isLoading: C
			}) : null, a[26] = k, a[27] = C, a[28] = f, a[29] = q;
		} else q = a[29];
		var V = q, H;
		a[30] !== i.id || a[31] !== f ? (H = o("WAWebNewsletterGatingUtils").isNewsletterStatusCreationEnabled(f) ? c.jsx(o("WAWebNewsletterAddToStatusButtonLoadable").WAWebNewsletterAddToStatusButtonLoadable, { newsletterWid: o("WAWebWidFactory").asNewsletterWidOrThrow(i.id) }) : null, a[30] = i.id, a[31] = f, a[32] = H) : H = a[32];
		var G = H, z;
		return a[33] !== G || a[34] !== w || a[35] !== W || a[36] !== V ? (z = c.jsxs(c.Fragment, { children: [
			G,
			W,
			w,
			V
		] }), a[33] = G, a[34] = w, a[35] = W, a[36] = V, a[37] = z) : z = a[37], z;
	}
	var f = { deemphasized: {
		color: "xhslqc4",
		$$css: !0
	} };
	function g(e) {
		var t = o("react-compiler-runtime").c(2), n = e.height, a = n === void 0 ? 20 : n, i;
		return t[0] !== a ? (i = c.jsx(r("WDSSpinner.react"), {
			size: a,
			xstyle: f.deemphasized
		}), t[0] = a, t[1] = i) : i = t[1], i;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(11), n = e.isMuted, a = e.isTogglingMute, i = e.onClick, l = !a, u;
		a ? u = g : n ? u = r("WDSIconIcNotificationsOff.react") : u = r("WDSIconIcNotifications.react");
		var d;
		t[0] !== n ? (d = n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[0] = n, t[1] = d) : d = t[1];
		var m = d, p = n ? "unmute-button" : "mute-button", _ = a ? void 0 : i, f;
		t[2] !== u || t[3] !== _ || t[4] !== p || t[5] !== m ? (f = c.jsx(r("WDSButton.react"), {
			variant: "borderless",
			size: "medium",
			type: "default",
			directional: !0,
			Icon: u,
			"aria-label": m,
			onPress: _,
			testid: p,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON
		}), t[2] = u, t[3] = _, t[4] = p, t[5] = m, t[6] = f) : f = t[6];
		var h = f, y;
		return t[7] !== h || t[8] !== l || t[9] !== m ? (y = l ? c.jsx(r("WDSTooltip.react"), {
			label: m,
			children: h
		}) : c.jsx("div", {
			title: m,
			children: h
		}), t[7] = h, t[8] = l, t[9] = m, t[10] = y) : y = t[10], y;
	}
	l.default = _;
}), 226);

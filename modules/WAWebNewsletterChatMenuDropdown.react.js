__d("WAWebNewsletterChatMenuDropdown.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebCmd",
	"WAWebDrawerManager",
	"WAWebInfoFlowLoadable",
	"WAWebInfoFlowStep",
	"WAWebModalManager",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterMsgLinkUtils",
	"WAWebReportNewsletterPopup.react",
	"WAWebSpamConstants",
	"WAWebStateUtils",
	"WAWebUnfollowNewsletterConfirmationModal.react",
	"WAWebWamEnumChannelEventSurface",
	"WAWebWamEnumTsSurface",
	"WDSIconIcCheckBox.react",
	"WDSIconIcClose.react",
	"WDSIconIcCode.react",
	"WDSIconIcInfo.react",
	"WDSIconIcLogout.react",
	"WDSIconIcSettings.react",
	"WDSIconIcThumbDown.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback;
	function d(e) {
		var t, n, a, i, l = o("react-compiler-runtime").c(43), c = e.chat, d = e.onSelectMessages, m = c.newsletterMetadata, p;
		l[0] !== c ? (p = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebReportNewsletterPopup.react"), {
				chat: c,
				spamFlow: o("WAWebSpamConstants").SpamFlow.OverflowMenuReport
			}));
		}, l[0] = c, l[1] = p) : p = l[1];
		var _ = p, f;
		l[2] !== c ? (f = function() {
			o("WAWebCmd").Cmd.chatInfoDrawer(c);
		}, l[2] = c, l[3] = f) : f = l[3];
		var g = f, h;
		l[4] !== c ? (h = function() {
			o("WAWebCmd").Cmd.closeChat(c);
		}, l[4] = c, l[5] = h) : h = l[5];
		var y = h, C;
		l[6] !== c ? (C = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebUnfollowNewsletterConfirmationModal.react").UnfollowNewsletterConfirmationModal, {
				chat: o("WAWebStateUtils").unproxy(c),
				loggingOptions: {
					eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
					discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_THREAD
				}
			}));
		}, l[6] = c, l[7] = C) : C = l[7];
		var b = C, v;
		l[8] !== c ? (v = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "info_flow",
				chat: c,
				initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings
			} : u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
				chat: c,
				initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings
			}));
		}, l[8] = c, l[9] = v) : v = l[9];
		var S = v, R;
		l[10] !== c ? (R = function() {
			o("WAWebNewsletterMsgLinkUtils").handleNewsletterChannelEmbedClick(c);
		}, l[10] = c, l[11] = R) : R = l[11];
		var L = R, E;
		l[12] === Symbol.for("react.memo_cache_sentinel") ? (E = s._(
			/*BTDS*/
			""
		), l[12] = E) : E = l[12];
		var k = E, I = null;
		if ((t = c.newsletterMetadata) != null && t.iAmAdminOrOwner() && !((n = c.newsletterMetadata) != null && n.isSuspendedOrTerminated)) {
			var T;
			l[13] !== S ? (T = u.jsx(r("WDSMenuItem.react"), {
				onPress: S,
				testid: "newsletter-overflow-menu-newsletter-settings",
				Icon: r("WDSIconIcSettings.react"),
				title: k
			}, "newsletter-overflow-menu-newsletter-settings"), l[13] = S, l[14] = T) : T = l[14], I = T;
		}
		var D;
		l[15] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
			/*BTDS*/
			""
		), l[15] = D) : D = l[15];
		var x = D, $ = null;
		if (o("WAWebNewsletterGatingUtils").canEmbedNewsletterChannel(m)) {
			var P;
			l[16] !== L ? (P = u.jsx(r("WDSMenuItem.react"), {
				onPress: L,
				testid: "newsletter-overflow-menu-embed",
				Icon: r("WDSIconIcCode.react"),
				title: x
			}, "newsletter-overflow-menu-embed"), l[16] = L, l[17] = P) : P = l[17], $ = P;
		}
		var N;
		l[18] === Symbol.for("react.memo_cache_sentinel") ? (N = s._(
			/*BTDS*/
			""
		), l[18] = N) : N = l[18];
		var M = N, w = null;
		if (!((a = c.newsletterMetadata) != null && a.isSuspendedOrTerminated)) {
			var A;
			l[19] !== d ? (A = u.jsx(r("WDSMenuItem.react"), {
				testid: "newsletter-overflow-menu-select-messages",
				onPress: d,
				Icon: r("WDSIconIcCheckBox.react"),
				title: M
			}, "newsletter-overflow-menu-select-messages"), l[19] = d, l[20] = A) : A = l[20], w = A;
		}
		var F;
		l[21] === Symbol.for("react.memo_cache_sentinel") ? (F = s._(
			/*BTDS*/
			""
		), l[21] = F) : F = l[21];
		var O = F, B = null;
		if (!((i = c.newsletterMetadata) != null && i.isSuspendedOrTerminated)) {
			var W;
			l[22] !== _ ? (W = u.jsx(r("WDSMenuItem.react"), {
				onPress: _,
				testid: "newsletter-overflow-menu-report",
				Icon: r("WDSIconIcThumbDown.react"),
				title: O,
				destructive: !0
			}, "newsletter-overflow-menu-report"), l[22] = _, l[23] = W) : W = l[23], B = W;
		}
		var q;
		l[24] === Symbol.for("react.memo_cache_sentinel") ? (q = s._(
			/*BTDS*/
			""
		), l[24] = q) : q = l[24];
		var U = q, V;
		l[25] === Symbol.for("react.memo_cache_sentinel") ? (V = s._(
			/*BTDS*/
			""
		), l[25] = V) : V = l[25];
		var H = V, G;
		l[26] !== g ? (G = u.jsx(r("WDSMenuItem.react"), {
			onPress: g,
			testid: "newsletter-overflow-menu-newsletter-info",
			Icon: r("WDSIconIcInfo.react"),
			title: U
		}, "newsletter-overflow-menu-newsletter-info"), l[26] = g, l[27] = G) : G = l[27];
		var z;
		l[28] !== y ? (z = u.jsx(r("WDSMenuItem.react"), {
			onPress: y,
			testid: "newsletter-overflow-menu-close-channel",
			Icon: r("WDSIconIcClose.react"),
			title: H
		}, "newsletter-overflow-menu-close-channel"), l[28] = y, l[29] = z) : z = l[29];
		var j;
		l[30] === Symbol.for("react.memo_cache_sentinel") ? (j = u.jsx(r("WDSMenuItem.react"), { type: "separator" }, "newsletter-overflow-menu-separator"), l[30] = j) : j = l[30];
		var K;
		if (l[31] !== b || l[32] !== $ || l[33] !== m || l[34] !== B || l[35] !== w || l[36] !== I || l[37] !== G || l[38] !== z) {
			var Q, X = [
				G,
				I,
				$,
				w,
				z,
				j,
				B
			], Y;
			l[40] === Symbol.for("react.memo_cache_sentinel") ? (Y = s._(
				/*BTDS*/
				""
			), l[40] = Y) : Y = l[40];
			var J = Y;
			if ((Q = m == null ? void 0 : m.iAmSubscriber()) != null && Q) {
				var Z;
				l[41] !== b ? (Z = u.jsx(r("WDSMenuItem.react"), {
					onPress: b,
					testid: "newsletter-overflow-menu-unfollow",
					Icon: r("WDSIconIcLogout.react"),
					title: J,
					destructive: !0
				}, "newsletter-overflow-menu-unfollow"), l[41] = b, l[42] = Z) : Z = l[42], X.push(Z);
			}
			K = u.jsx(r("WDSMenu.react"), {
				testid: "newsletter-menu-dropdown",
				children: X
			}), l[31] = b, l[32] = $, l[33] = m, l[34] = B, l[35] = w, l[36] = I, l[37] = G, l[38] = z, l[39] = K;
		} else K = l[39];
		return K;
	}
	l.default = d;
}), 226);

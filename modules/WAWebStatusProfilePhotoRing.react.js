__d("WAWebStatusProfilePhotoRing.react", [
	"fbt",
	"WAJids",
	"WAWebABProps",
	"WAWebDetailImage.react",
	"WAWebFrontendContactGetters",
	"WAWebFrontendStatusGetters",
	"WAWebInitialsFromNameUtils",
	"WAWebKeyboardHotKeys.react",
	"WAWebModalManager",
	"WAWebNewsletterGatingUtils",
	"WAWebOpenStatusQuotedFlow",
	"WAWebProfilePicThumbCollection",
	"WAWebStatusEphemeralBadgeUtils",
	"WAWebStatusGatingUtils",
	"WAWebStatusGetters",
	"WAWebStatusImageRing.react",
	"WAWebStatusLoadingRingOverlay.react",
	"WAWebStatusQuotedFlowLoadable",
	"WAWebWamEnumStatusRowSection",
	"WDSProfilePhoto.react",
	"WDSVars.stylex",
	"react",
	"react-compiler-runtime",
	"useWAWebDefaultProfileColors",
	"useWAWebModelValues",
	"useWAWebStatusValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useMemo, d = 4, m = 53, p = "medium", _ = 48, f = 2;
	function g(e) {
		var t = o("react-compiler-runtime").c(34), n = e.contactStatus, a = e.hideWhenNoUnreadStatuses, i = e.photoSize, l = e.rowIndex, c = e.rowSection, p = e.waitIdle, g;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (g = [
			o("WAWebStatusGetters").getId,
			o("WAWebFrontendStatusGetters").getContact,
			o("WAWebStatusGetters").getTotalCount,
			o("WAWebStatusGetters").getUnreadCount,
			o("WAWebFrontendStatusGetters").getLastStatus
		], t[0] = g) : g = t[0];
		var C = o("useWAWebStatusValues").useStatusValues(n.id, g), b = C[0], v = C[1], S = C[2], R = C[3], L = C[4], E;
		t[1] !== a || t[2] !== b ? (E = a && !(b.isNewsletter() && o("WAWebNewsletterGatingUtils").isNewsletterStatusAllEntrypointsEnabled()), t[1] = a, t[2] = b, t[3] = E) : E = t[3];
		var k = E, I = R === 0 && k || S === 0, T;
		e: {
			if (!o("WAWebStatusGatingUtils").isStatusCloseFriendsViewerSideEnabled() || L == null) {
				T = null;
				break e;
			}
			if (L.statusAudienceMetadata != null) {
				T = o("WDSVars.stylex").WDSBaseColor.plum400;
				break e;
			}
			T = null;
		}
		var D = T, x;
		t[4] !== n || t[5] !== b || t[6] !== I || t[7] !== l || t[8] !== c ? (x = function(t) {
			if (!I) {
				if (t.stopPropagation(), t.preventDefault(), b.isNewsletter() && o("WAWebNewsletterGatingUtils").isNewsletterStatusAllEntrypointsEnabled()) {
					o("WAWebOpenStatusQuotedFlow").fetchAndOpenNewsletterStatus({
						newsletterJid: o("WAJids").toNewsletterJid(b.toString()),
						statusModelId: b,
						rowSection: c,
						rowIndex: l
					});
					return;
				}
				var e = c === o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHAT_LIST || c === o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHAT_LIST_SEARCH, r = e && o("WAWebStatusGatingUtils").isChainFromChatListEnabled();
				o("WAWebModalManager").ModalManager.openMedia(u.jsx(o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable, {
					status: n,
					onClose: h,
					continuousPlay: r,
					prioritizeInitialStatus: r,
					rowSection: c,
					rowIndex: l
				}), { transition: "status-modal" });
			}
		}, t[4] = n, t[5] = b, t[6] = I, t[7] = l, t[8] = c, t[9] = x) : x = t[9];
		var $ = x, P = o("WAWebDetailImage.react").getSize(i), N = P != null ? P + d : m, M;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (M = s._(
			/*BTDS*/
			""
		), t[10] = M) : M = t[10];
		var w = M, A;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (A = o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo"), t[11] = A) : A = t[11];
		var F = A, O;
		t[12] !== D || t[13] !== k || t[14] !== b || t[15] !== N ? (O = !F && u.jsx(o("WAWebStatusImageRing.react").StatusImageRing, {
			id: b,
			size: N,
			stroke: d,
			hideWhenNoUnreadStatuses: k,
			theme: o("WAWebStatusImageRing.react").RingTheme.ChatList,
			respectAppTheme: !0,
			breakRing: !1,
			customUnreadRingColor: D
		}), t[12] = D, t[13] = k, t[14] = b, t[15] = N, t[16] = O) : O = t[16];
		var B;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (B = F ? {
			tabIndex: 0,
			role: "button",
			"aria-label": w
		} : null, t[17] = B) : B = t[17];
		var W;
		t[18] !== D || t[19] !== v || t[20] !== $ || t[21] !== b || t[22] !== I || t[23] !== i || t[24] !== S || t[25] !== R || t[26] !== p ? (W = F ? u.jsx(r("WAWebStatusLoadingRingOverlay.react"), {
			customUnreadRingColor: D,
			id: b,
			size: _,
			stroke: f,
			children: u.jsx(y, {
				id: b,
				contact: v,
				noStatusInteraction: I,
				totalCount: S,
				unreadCount: R,
				closeFriendsRingColor: D
			})
		}) : u.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: v.id,
			theme: I ? void 0 : "status_profile_photo_ring",
			size: i,
			waitIdle: p,
			ephemeralIcon: "chat-list",
			tabIndex: 0,
			ariaLabel: w,
			onClick: $
		}), t[18] = D, t[19] = v, t[20] = $, t[21] = b, t[22] = I, t[23] = i, t[24] = S, t[25] = R, t[26] = p, t[27] = W) : W = t[27];
		var q;
		t[28] !== $ || t[29] !== W ? (q = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, babelHelpers.extends({ onClick: $ }, B, { children: W })), t[28] = $, t[29] = W, t[30] = q) : q = t[30];
		var U;
		return t[31] !== O || t[32] !== q ? (U = u.jsxs(u.Fragment, { children: [O, q] }), t[31] = O, t[32] = q, t[33] = U) : U = t[33], U;
	}
	function h() {
		return o("WAWebModalManager").ModalManager.closeMedia();
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(35), n = e.closeFriendsRingColor, a = e.contact, i = e.id, l = e.noStatusInteraction, s = e.totalCount, c = e.unreadCount, d;
		t[0] !== i ? (d = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(i), t[0] = i, t[1] = d) : d = t[1];
		var m = d, _;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (_ = ["img"], t[2] = _) : _ = t[2];
		var f = o("useWAWebModelValues").useOptionalModelValues(m, _), g;
		t[3] !== a ? (g = o("WAWebInitialsFromNameUtils").getInitialsFromContact(a), t[3] = a, t[4] = g) : g = t[4];
		var h = g, y;
		t[5] !== h.firstInitial || t[6] !== h.secondInitial ? (y = [h.firstInitial, h.secondInitial].filter(Boolean), t[5] = h.firstInitial, t[6] = h.secondInitial, t[7] = y) : y = t[7];
		var C = y.join(""), b;
		t[8] !== i ? (b = o("useWAWebDefaultProfileColors").getWDSProfilePhotoType(i), t[8] = i, t[9] = b) : b = t[9];
		var v;
		t[10] !== a ? (v = o("WAWebFrontendContactGetters").getFormattedName(a), t[10] = a, t[11] = v) : v = t[11];
		var S = f == null ? void 0 : f.img, R;
		t[12] !== i ? (R = o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(i), t[12] = i, t[13] = R) : R = t[13];
		var L;
		t[14] !== i ? (L = o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(i), t[14] = i, t[15] = L) : L = t[15];
		var E;
		t[16] !== i ? (E = o("WAWebStatusEphemeralBadgeUtils").getStatusRingEphemeralBadge(i), t[16] = i, t[17] = E) : E = t[17];
		var k;
		t[18] !== i ? (k = o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(i), t[18] = i, t[19] = k) : k = t[19];
		var I;
		t[20] !== n || t[21] !== l || t[22] !== s || t[23] !== c ? (I = l ? void 0 : {
			totalCount: s,
			viewedCount: s - c,
			variant: n != null ? "closeFriends" : "default"
		}, t[20] = n, t[21] = l, t[22] = s, t[23] = c, t[24] = I) : I = t[24];
		var T;
		return t[25] !== C || t[26] !== E || t[27] !== k || t[28] !== I || t[29] !== b || t[30] !== v || t[31] !== S || t[32] !== R || t[33] !== L ? (T = u.jsx(r("WDSProfilePhoto.react"), {
			type: b,
			name: v,
			src: S,
			size: p,
			initials: C,
			color: R,
			customColor: L,
			badge: E,
			placeholderIcon: k,
			statusRing: I,
			isDecorative: !0
		}), t[25] = C, t[26] = E, t[27] = k, t[28] = I, t[29] = b, t[30] = v, t[31] = S, t[32] = R, t[33] = L, t[34] = T) : T = t[34], T;
	}
	l.default = g;
}), 226);

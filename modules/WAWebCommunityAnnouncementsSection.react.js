__d("WAWebCommunityAnnouncementsSection.react", [
	"fbt",
	"WAWebABProps",
	"WAWebChatEphemerality",
	"WAWebChatInfoDrawerRow.react",
	"WAWebChatInfoDrawerSection.react",
	"WAWebChatInfoMediaSection.react",
	"WAWebChatInfoPhoneNumberVisibilityIndicator.react",
	"WAWebDrawerSectionRefreshed.react",
	"WAWebEphemeralSettingRow.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebGroupInfoEventsSection.react",
	"WAWebGroupInfoIntegritySection.react",
	"WAWebGroupInfoSeparator.react",
	"WAWebKeepInChatIcon.react",
	"WAWebLimitSharingSettingRow.react",
	"WAWebLimitSharingUIUtils",
	"WAWebMuteRow.react",
	"WAWebMuteUtils",
	"WAWebPencilIcon.react",
	"WAWebPrinaUtils",
	"WAWebReactionsUtils",
	"WAWebSecurityDrawerSection.react",
	"WAWebStarRefreshedIcon.react",
	"WAWebStateUtils",
	"WAWebText.react",
	"WAWebWamEnumPrivacyHighlightSurfaceEnum",
	"WDSPaddings.stylex",
	"nullthrows",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { marginBottom10: {
		marginBottom: "xyorhqc",
		$$css: !0
	} }, d = {
		chatWallpaperIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(59), n = e.callbacks, a = e.chat, i;
		t[0] !== a ? (i = o("WAWebStateUtils").unproxy(a), t[0] = a, t[1] = i) : i = t[1];
		var l;
		t[2] !== n.onMediaGalleryClick || t[3] !== i ? (l = u.jsx(r("WAWebChatInfoMediaSection.react"), {
			chat: i,
			onMediaGallery: n.onMediaGalleryClick
		}), t[2] = n.onMediaGalleryClick, t[3] = i, t[4] = l) : l = t[4];
		var m = l, _;
		t[5] !== a ? (_ = o("WAWebStateUtils").unproxy(a), t[5] = a, t[6] = _) : _ = t[6];
		var f, g;
		t[7] !== n || t[8] !== a ? (f = function() {
			return n.onAllEventsClick(a);
		}, g = function(t) {
			n.onEventInfoClick(t, a);
		}, t[7] = n, t[8] = a, t[9] = f, t[10] = g) : (f = t[9], g = t[10]);
		var h;
		t[11] !== _ || t[12] !== f || t[13] !== g ? (h = u.jsx(r("WAWebGroupInfoEventsSection.react"), {
			chat: _,
			onAllEvents: f,
			onEventInfo: g
		}), t[11] = _, t[12] = f, t[13] = g, t[14] = h) : h = t[14];
		var y = h, C;
		t[15] !== n.onEphemeralClick || t[16] !== a ? (C = a && o("WAWebChatEphemerality").shouldShowEphemeralSetting(a) ? u.jsx(o("WAWebEphemeralSettingRow.react").EphemeralSettingRow, {
			chat: a,
			groupMetadata: r("nullthrows")(a.groupMetadata),
			onClick: n.onEphemeralClick,
			testid: "community-dm-row"
		}) : null, t[15] = n.onEphemeralClick, t[16] = a, t[17] = C) : C = t[17];
		var b = C, v;
		t[18] !== n || t[19] !== a ? (v = o("WAWebLimitSharingUIUtils").isLimitSharingSettingVisible(a) ? u.jsx(r("WAWebLimitSharingSettingRow.react"), {
			chat: a,
			onClick: function() {
				return n.onLimitSharingClick(a);
			}
		}) : null, t[18] = n, t[19] = a, t[20] = v) : v = t[20];
		var S = v, R;
		t[21] !== n.onStarredMessagesClick ? (R = u.jsx(p, { handleOnClick: n.onStarredMessagesClick }), t[21] = n.onStarredMessagesClick, t[22] = R) : R = t[22];
		var L = R, E;
		t[23] !== n.onKeptMessagesClick || t[24] !== a ? (E = a.hasKeptMsgs() || o("WAWebChatEphemerality").isEphemeralSettingOn(a) ? u.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			titleTestId: "section-kept-messages",
			xstyle: [c.marginBottom10, o("WDSPaddings.stylex").wdsPaddings.paddingHor0],
			children: u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow, {
				icon: u.jsx(o("WAWebKeepInChatIcon.react").KeepInChatIcon, {
					iconXstyle: d.secondaryColor,
					height: 20
				}),
				onClick: n.onKeptMessagesClick,
				secondaryTitle: r("nullthrows")(a.groupMetadata).restrict ? u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
					/*BTDS*/
					""
				) }) : null,
				side: "chevron",
				spaced: !0,
				testid: "block-kept-messages",
				title: u.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
					/*BTDS*/
					""
				) })
			})
		}) : null, t[23] = n.onKeptMessagesClick, t[24] = a, t[25] = E) : E = t[25];
		var k = E, I;
		t[26] === Symbol.for("react.memo_cache_sentinel") ? (I = { type: "encryption" }, t[26] = I) : I = t[26];
		var T;
		t[27] !== a ? (T = function() {
			return o("WAWebPrinaUtils").showEncryptionInfoPopup(a);
		}, t[27] = a, t[28] = T) : T = t[28];
		var D;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
			/*BTDS*/
			""
		), t[29] = D) : D = t[29];
		var x;
		t[30] !== T ? (x = u.jsx(r("WAWebSecurityDrawerSection.react"), {
			header: I,
			highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
			onClick: T,
			text: D
		}), t[30] = T, t[31] = x) : x = t[31];
		var $ = x, P;
		t[32] !== a ? (P = o("WAWebMuteUtils").canMute(a.mute) ? u.jsx(r("WAWebMuteRow.react"), {
			chat: a,
			mute: a.mute
		}) : null, t[32] = a, t[33] = P) : P = t[33];
		var N = P, M;
		t[34] !== n.onWallpaperClick ? (M = o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") ? u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow, {
			icon: u.jsx(o("WAWebPencilIcon.react").PencilIcon, { xstyle: d.chatWallpaperIcon }),
			onClick: n.onWallpaperClick,
			side: "chevron",
			spaced: !0,
			title: u.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
				/*BTDS*/
				""
			) })
		}) : null, t[34] = n.onWallpaperClick, t[35] = M) : M = t[35];
		var w = M, A;
		t[36] !== a ? (A = o("WAWebReactionsUtils").isReactionsEnabledInCAG(a) ? u.jsx(o("WAWebChatInfoPhoneNumberVisibilityIndicator.react").PhoneNumberVisibilityIndicatorCag, { chat: a }) : null, t[36] = a, t[37] = A) : A = t[37];
		var F = A, O;
		t[38] !== a ? (O = u.jsx(r("WAWebGroupInfoIntegritySection.react"), {
			chat: a,
			showDeleteOrExit: !1
		}), t[38] = a, t[39] = O) : O = t[39];
		var B = O, W;
		t[40] === Symbol.for("react.memo_cache_sentinel") ? (W = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebFaqUrl").getExitCommunityUrl(),
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		), t[40] = W) : W = t[40];
		var q = W, U;
		t[41] === Symbol.for("react.memo_cache_sentinel") ? (U = u.jsx(r("WAWebDrawerSectionRefreshed.react"), {
			theme: "transparent",
			xstyle: !1,
			children: u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, { children: q })
		}), t[41] = U) : U = t[41];
		var V = U, H;
		t[42] === Symbol.for("react.memo_cache_sentinel") ? (H = [o("WDSPaddings.stylex").wdsPaddings.paddingHor0, c.marginBottom10], t[42] = H) : H = t[42];
		var G;
		t[43] !== $ || t[44] !== b || t[45] !== S || t[46] !== N || t[47] !== F || t[48] !== w ? (G = u.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			xstyle: H,
			children: [
				N,
				w,
				b,
				S,
				$,
				F
			]
		}), t[43] = $, t[44] = b, t[45] = S, t[46] = N, t[47] = F, t[48] = w, t[49] = G) : G = t[49];
		var z;
		t[50] === Symbol.for("react.memo_cache_sentinel") ? (z = u.jsx(r("WAWebGroupInfoSeparator.react"), {}), t[50] = z) : z = t[50];
		var j;
		t[51] === Symbol.for("react.memo_cache_sentinel") ? (j = u.jsx(r("WAWebGroupInfoSeparator.react"), {}), t[51] = j) : j = t[51];
		var K;
		return t[52] !== B || t[53] !== k || t[54] !== m || t[55] !== L || t[56] !== G || t[57] !== y ? (K = u.jsxs(u.Fragment, { children: [
			m,
			y,
			L,
			k,
			G,
			z,
			B,
			j,
			V
		] }), t[52] = B, t[53] = k, t[54] = m, t[55] = L, t[56] = G, t[57] = y, t[58] = K) : K = t[58], K;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(6), n = e.handleOnClick, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = s._(
			/*BTDS*/
			""
		), t[0] = r) : r = t[0];
		var a = r, i;
		t[1] !== n ? (i = {
			testid: "block-starred-messages",
			onClick: n,
			title: a
		}, t[1] = n, t[2] = i) : i = t[2];
		var l = i, c;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (c = u.jsx(o("WAWebStarRefreshedIcon.react").StarRefreshedIcon, {}), t[3] = c) : c = t[3];
		var d;
		return t[4] !== l ? (d = u.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			titleTestId: "section-starred-messages",
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor0,
			children: u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, babelHelpers.extends({}, l, { icon: c }))
		}), t[4] = l, t[5] = d) : d = t[5], d;
	}
	l.default = m;
}), 226);

__d("WAWebNewsletterAdminNotificationsDrawer.react", [
	"fbt",
	"WAWebChatGetters",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlex.react",
	"WAWebFrontendChatGetters",
	"WAWebMenu.react",
	"WAWebMenuItems.react",
	"WAWebNewsletterMetadataModel",
	"WAWebNewsletterModelUtils",
	"WAWebNewsletterUpdateUserSettingsAction",
	"WAWebSettingsFBT",
	"WAWebWamEnumChannelEventSurface",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebChatValues",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState, d = {
		drawerSubtitle: {
			paddingInlineStart: "x12w63v0",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			$$css: !0
		},
		drawerBody: {
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		separator: {
			height: "x28ko6u",
			backgroundColor: "x3x0x6p",
			marginTop: "x98l61r",
			marginBottom: "x1ua1l7f",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(41), n = e.chat, a = e.onBack, i = e.onCancel, l = e.ref, m;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = [o("WAWebChatGetters").getMuteExpiration, o("WAWebFrontendChatGetters").getNewsletterMetadata], t[0] = m) : m = t[0];
		var _ = o("useWAWebChatValues").useChatValues(n.id, m), f = _[0], g = _[1], h;
		t[1] !== g ? (h = g != null ? g : new (o("WAWebNewsletterMetadataModel")).NewsletterMetadata(), t[1] = g, t[2] = h) : h = t[2];
		var y;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (y = ["followerActivityMuteExpiration"], t[3] = y) : y = t[3];
		var C = o("useWAWebModelValues").useModelValues(h, y), b;
		t[4] !== C.followerActivityMuteExpiration ? (b = o("WAWebNewsletterModelUtils").isMuted(C.followerActivityMuteExpiration), t[4] = C.followerActivityMuteExpiration, t[5] = b) : b = t[5];
		var v = b, S;
		t[6] !== f ? (S = o("WAWebNewsletterModelUtils").isMuted(f), t[6] = f, t[7] = S) : S = t[7];
		var R = S, L = c(null), E = L[0], k = L[1], I = E != null;
		I && E !== v && k(null);
		var T = c(null), D = T[0], x = T[1], $ = D != null;
		$ && D !== R && x(null);
		var P;
		t[8] !== n.id || t[9] !== v || t[10] !== I || t[11] !== C.followerActivityMuteExpiration ? (P = function() {
			I || (k(v), o("WAWebNewsletterUpdateUserSettingsAction").updateNewsletterUserSettingsAction(n.id, C.followerActivityMuteExpiration === o("WAWebNewsletterModelUtils").MUTED_STATE ? o("WAWebNewsletterModelUtils").UNMUTED_STATE : o("WAWebNewsletterModelUtils").MUTED_STATE, [o("WAWebNewsletterUpdateUserSettingsAction").NewsletterUserSetting.FollowerActivity], { eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE }).catch(function() {
				k(null);
			}));
		}, t[8] = n.id, t[9] = v, t[10] = I, t[11] = C.followerActivityMuteExpiration, t[12] = P) : P = t[12];
		var N = P, M;
		t[13] !== f || t[14] !== n.id || t[15] !== R || t[16] !== $ ? (M = function() {
			$ || (x(R), o("WAWebNewsletterUpdateUserSettingsAction").updateNewsletterUserSettingsAction(n.id, f === o("WAWebNewsletterModelUtils").MUTED_STATE ? o("WAWebNewsletterModelUtils").UNMUTED_STATE : o("WAWebNewsletterModelUtils").MUTED_STATE, [o("WAWebNewsletterUpdateUserSettingsAction").NewsletterUserSetting.AdminActivity], { eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE }).catch(function() {
				x(null);
			}));
		}, t[13] = f, t[14] = n.id, t[15] = R, t[16] = $, t[17] = M) : M = t[17];
		var w = M, A;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (A = { surface: "channel-notifications-settings" }, t[18] = A) : A = t[18];
		var F;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (F = o("WAWebSettingsFBT").notificationsTitle(), t[19] = F) : F = t[19];
		var O;
		t[20] !== a || t[21] !== i ? (O = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: F,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: a,
			onCancel: i
		}), t[20] = a, t[21] = i, t[22] = O) : O = t[22];
		var B;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (B = s._(
			/*BTDS*/
			""
		), t[23] = B) : B = t[23];
		var W;
		t[24] !== N || t[25] !== v || t[26] !== I ? (W = u.jsx(p, {
			title: B,
			optionId: "mute-follower-activity-switch",
			on: v,
			disabled: I,
			onSelect: N
		}), t[24] = N, t[25] = v, t[26] = I, t[27] = W) : W = t[27];
		var q;
		t[28] === Symbol.for("react.memo_cache_sentinel") ? (q = u.jsx(o("WAWebFlex.react").FlexItem, { xstyle: d.separator }), t[28] = q) : q = t[28];
		var U;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? (U = s._(
			/*BTDS*/
			""
		), t[29] = U) : U = t[29];
		var V;
		t[30] !== w || t[31] !== R || t[32] !== $ ? (V = u.jsx(p, {
			title: U,
			optionId: "mute-admin-activity-switch",
			on: R,
			disabled: $,
			onSelect: w
		}), t[30] = w, t[31] = R, t[32] = $, t[33] = V) : V = t[33];
		var H;
		t[34] !== W || t[35] !== V ? (H = u.jsx(r("WAWebDrawerBody.react"), {
			xstyle: d.drawerBody,
			children: u.jsxs(o("WAWebMenu.react").WAWebMenu, { children: [
				W,
				q,
				V
			] })
		}), t[34] = W, t[35] = V, t[36] = H) : H = t[36];
		var G;
		return t[37] !== l || t[38] !== O || t[39] !== H ? (G = u.jsxs(r("WAWebDrawer.react"), {
			ref: l,
			theme: "striped",
			testid: "newsletter-admin-notifications-settings-drawer",
			tsNavigationData: A,
			children: [O, H]
		}), t[37] = l, t[38] = O, t[39] = H, t[40] = G) : G = t[40], G;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(12), n = e.disabled, a = e.on, i = e.onSelect, l = e.optionId, c = e.title, m = n === void 0 ? !1 : n, p;
		t[0] !== c ? (p = u.jsx(r("WDSText.react"), {
			children: c,
			colorName: "contentDeemphasized",
			type: "Body2Emphasized",
			xstyle: d.drawerSubtitle
		}), t[0] = c, t[1] = p) : p = t[1];
		var _ = l + "-" + (a ? "on" : "off"), f;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[2] = f) : f = t[2];
		var g;
		t[3] !== m || t[4] !== a || t[5] !== i || t[6] !== l || t[7] !== _ ? (g = u.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			disabled: m,
			on: a,
			optionId: l,
			testid: _,
			primary: f,
			onSelect: i
		}), t[3] = m, t[4] = a, t[5] = i, t[6] = l, t[7] = _, t[8] = g) : g = t[8];
		var h;
		return t[9] !== p || t[10] !== g ? (h = u.jsxs(u.Fragment, { children: [p, g] }), t[9] = p, t[10] = g, t[11] = h) : h = t[11], h;
	}
	l.default = m;
}), 226);

__d("WAWebBizAdCreationPaymentProfile.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAdCreationIdentityProfileImage.react",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationPaymentProfile_facebookProfile.graphql",
	"WAWebBizAdCreationSpecContext",
	"WAWebBizAdLogger",
	"WAWebConnModel",
	"WAWebFlex.react",
	"WDSButton.react",
	"WDSIconIcMoreVert.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdCreationIdentityContext",
	"useWAWebBizAdCreationIdentitySelectionMenu.react",
	"useWAWebModelValues",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = d.useRef, f = {
		container: {
			height: "xnnlda6",
			width: "xh8yej3",
			$$css: !0
		},
		profileImageWrapper: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		}
	}, g = e !== void 0 ? e : e = n("WAWebBizAdCreationPaymentProfile_facebookProfile.graphql");
	function h(e) {
		var t, n = o("react-compiler-runtime").c(25), a = e.facebookProfileRef, i = r("useWAWebBizAdCreationIdentityContext")(), l = i == null ? void 0 : i.accountType, u;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (u = ["pushname"], n[0] = u) : u = n[0];
		var d = o("useWAWebModelValues").useModelValues(o("WAWebConnModel").Conn, u), m = d.pushname, _ = p(r("WAWebBizAdCreationLoggerContext")), f = p(r("WAWebBizAdCreationSpecContext")), h = f == null || (t = f.currentValue) == null || (t = t.adAccountData) == null ? void 0 : t.id, C;
		n[1] !== h || n[2] !== _ ? (C = function(t) {
			_ != null && r("WAWebBizAdLogger").log({
				adAccountID: h,
				event: t,
				loggerContext: _
			});
		}, n[1] = h, n[2] = _, n[3] = C) : C = n[3];
		var b = C, v;
		n[4] !== b ? (v = function() {
			return b("payment_profile_menu_click");
		}, n[4] = b, n[5] = v) : v = n[5];
		var S = v, R;
		n[6] !== b ? (R = function() {
			return b("payment_profile_login_to_facebook_click");
		}, n[6] = b, n[7] = R) : R = n[7];
		var L = R, E;
		n[8] !== b ? (E = function() {
			return b("payment_profile_switch_to_whatsapp_click");
		}, n[8] = b, n[9] = E) : E = n[9];
		var k = E, I;
		n[10] !== b ? (I = function() {
			return b("payment_profile_remove_account_click");
		}, n[10] = b, n[11] = I) : I = n[11];
		var T = I, D = o("CometRelay").useFragment(g, a), x = r("useWAWebBizAdCreationIdentitySelectionMenu.react")(!0, S, L, k, T), $ = x.menuContent, P = x.onMenuOpen;
		if (l === "WAA") {
			var N, M;
			n[12] === Symbol.for("react.memo_cache_sentinel") ? (N = c.jsx(r("WAWebBizAdCreationIdentityProfileImage.react"), { size: 24 }), M = s._(
				/*BTDS*/
				""
			), n[12] = N, n[13] = M) : (N = n[12], M = n[13]);
			var w = m != null ? m : "", A;
			return n[14] !== $ || n[15] !== P || n[16] !== w ? (A = c.jsx(y, {
				menu: $,
				onMenuOpen: P,
				profileImageComponent: N,
				subtitle: M,
				title: w
			}), n[14] = $, n[15] = P, n[16] = w, n[17] = A) : A = n[17], A;
		}
		if (l === "FB") {
			var F = D == null ? void 0 : D.name;
			if (F == null) return null;
			var O;
			n[18] !== D ? (O = c.jsx(r("WAWebBizAdCreationIdentityProfileImage.react"), {
				facebookProfileRef: D,
				size: 24
			}), n[18] = D, n[19] = O) : O = n[19];
			var B;
			return n[20] !== F || n[21] !== $ || n[22] !== P || n[23] !== O ? (B = c.jsx(y, {
				menu: $,
				onMenuOpen: P,
				profileImageComponent: O,
				title: F
			}), n[20] = F, n[21] = $, n[22] = P, n[23] = O, n[24] = B) : B = n[24], B;
		}
		return null;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(25), n = e.menu, a = e.onMenuOpen, i = e.profileImageComponent, l = e.subtitle, u = e.title, d = _(null), m;
		t[0] !== n ? (m = {
			dismissable: !0,
			menu: n,
			targetRef: d
		}, t[0] = n, t[1] = m) : m = t[1];
		var p = r("useWDSMenu")(m), g = p.menuPortal, h = p.openMenu, y;
		t[2] !== a || t[3] !== h ? (y = function() {
			a(), h();
		}, t[2] = a, t[3] = h, t[4] = y) : y = t[4];
		var C = y, b;
		t[5] !== i ? (b = c.jsx(o("WAWebFlex.react").FlexItem, {
			marginEnd: 16,
			children: c.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: f.profileImageWrapper,
				children: i
			})
		}), t[5] = i, t[6] = b) : b = t[6];
		var v;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (v = [12, 0], t[7] = v) : v = t[7];
		var S;
		t[8] !== u ? (S = c.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: u
		}), t[8] = u, t[9] = S) : S = t[9];
		var R;
		t[10] !== l ? (R = l != null ? c.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: l
		}) : null, t[10] = l, t[11] = R) : R = t[11];
		var L;
		t[12] !== S || t[13] !== R ? (L = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			grow: 1,
			marginEnd: 16,
			padding: v,
			children: [S, R]
		}), t[12] = S, t[13] = R, t[14] = L) : L = t[14];
		var E;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (E = s._(
			/*BTDS*/
			""
		), t[15] = E) : E = t[15];
		var k;
		t[16] !== C ? (k = c.jsx(r("WDSButton.react"), {
			ref: d,
			Icon: r("WDSIconIcMoreVert.react"),
			"aria-label": String(E),
			onPress: C,
			size: "small",
			variant: "borderless"
		}), t[16] = C, t[17] = k) : k = t[17];
		var I;
		t[18] !== g || t[19] !== k ? (I = c.jsxs(o("WAWebFlex.react").FlexItem, {
			justify: "end",
			children: [k, g]
		}), t[18] = g, t[19] = k, t[20] = I) : I = t[20];
		var T;
		return t[21] !== I || t[22] !== b || t[23] !== L ? (T = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "start",
			xstyle: f.container,
			children: [
				b,
				L,
				I
			]
		}), t[21] = I, t[22] = b, t[23] = L, t[24] = T) : T = t[24], T;
	}
	l.default = h;
}), 226);

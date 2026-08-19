__d("WAWebNotifyForDrawer.react", [
	"fbt",
	"WAWebABProps",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebNotifyForTypes",
	"WAWebNotifyForUtils",
	"WAWebPrivacyVisibilityOption.react",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = { title: {
		fontSize: "x1jchvi3",
		color: "x1v5yvga",
		lineHeight: "x1fc57z9",
		$$css: !0
	} };
	function p(t) {
		var n = o("react-compiler-runtime").c(31), a = t.chat, i = t.onClose, l;
		n[0] !== a.id ? (l = a.id.toString(), n[0] = a.id, n[1] = l) : l = n[1];
		var u = l, p;
		n[2] !== u ? (p = function() {
			return o("WAWebNotifyForUtils").getNotifyForSetting(u);
		}, n[2] = u, n[3] = p) : p = n[3];
		var _ = d(p), f = _[0], g = _[1], h;
		n[4] !== u ? (h = function() {
			g(o("WAWebNotifyForTypes").NotifyForType.ALL), o("WAWebNotifyForUtils").saveNotifyForSetting(u, o("WAWebNotifyForTypes").NotifyForType.ALL);
		}, n[4] = u, n[5] = h) : h = n[5];
		var y = h, C;
		n[6] !== u ? (C = function() {
			g(o("WAWebNotifyForTypes").NotifyForType.HIGHLIGHTS), o("WAWebNotifyForUtils").saveNotifyForSetting(u, o("WAWebNotifyForTypes").NotifyForType.HIGHLIGHTS);
		}, n[6] = u, n[7] = C) : C = n[7];
		var b = C, v;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
			/*BTDS*/
			""
		), n[8] = v) : v = n[8];
		var S = v, R;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), n[9] = R) : R = n[9];
		var L = R, E;
		if (o("WAWebABProps").getABPropConfigValue("enable_mention_everyone_receiver_web")) {
			var k;
			n[10] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
				/*BTDS*/
				""
			), n[10] = k) : k = n[10], E = k;
		} else {
			var I;
			n[11] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
				/*BTDS*/
				""
			), n[11] = I) : I = n[11], E = I;
		}
		var T;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (T = {
			surface: "unknown",
			viewName: "notify-for"
		}, n[12] = T) : T = n[12];
		var D;
		n[13] !== i ? (D = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			testid: "drawer-title",
			title: S,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			focusBackOrCancel: !0,
			onBack: i
		}), n[13] = i, n[14] = D) : D = n[14];
		var x;
		n[15] === Symbol.for("react.memo_cache_sentinel") ? (x = c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
			m.title,
			o("WDSMargins.stylex").wdsMargins.marginVer20,
			o("WDSMargins.stylex").wdsMargins.marginHor0
		]), { children: L })), n[15] = x) : x = n[15];
		var $, P;
		n[16] === Symbol.for("react.memo_cache_sentinel") ? ($ = s._(
			/*BTDS*/
			""
		), P = s._(
			/*BTDS*/
			""
		), n[16] = $, n[17] = P) : ($ = n[16], P = n[17]);
		var N = f === o("WAWebNotifyForTypes").NotifyForType.ALL, M;
		n[18] !== y || n[19] !== N ? (M = c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
			text: $,
			subText: P,
			selected: N,
			testid: "notify-for-all",
			onClick: y
		}), n[18] = y, n[19] = N, n[20] = M) : M = n[20];
		var w;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
			/*BTDS*/
			""
		), n[21] = w) : w = n[21];
		var A = f === o("WAWebNotifyForTypes").NotifyForType.HIGHLIGHTS, F;
		n[22] !== b || n[23] !== A ? (F = c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
			text: w,
			subText: E,
			selected: A,
			testid: "notify-for-highlights",
			onClick: b
		}), n[22] = b, n[23] = A, n[24] = F) : F = n[24];
		var O;
		n[25] !== M || n[26] !== F ? (O = c.jsx(r("WAWebDrawerBody.react"), { children: c.jsxs(r("WAWebDrawerSection.react"), {
			theme: "padding-no-vertical",
			animation: !1,
			children: [x, c.jsxs("div", {
				role: "radiogroup",
				"aria-label": L,
				children: [M, F]
			})]
		}) }), n[25] = M, n[26] = F, n[27] = O) : O = n[27];
		var B;
		return n[28] !== O || n[29] !== D ? (B = c.jsxs(r("WAWebDrawer.react"), {
			testid: "notify-for-drawer",
			tsNavigationData: T,
			children: [D, O]
		}), n[28] = O, n[29] = D, n[30] = B) : B = n[30], B;
	}
	l.default = p;
}), 226);

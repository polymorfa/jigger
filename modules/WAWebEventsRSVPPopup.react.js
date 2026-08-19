__d("WAWebEventsRSVPPopup.react", [
	"fbt",
	"WAWebProtobufsE2E.pb",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useImperativeHandle;
	function d(e) {
		var t = o("react-compiler-runtime").c(34), n = e.controlPopupRef, a = e.currentResponse, i = e.onClick, l = e.onClose, d = e.triggerRef, m = a === void 0 ? o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.UNKNOWN : a, p;
		t[0] !== m || t[1] !== i ? (p = function(t) {
			t !== m && i(t);
		}, t[0] = m, t[1] = i, t[2] = p) : p = t[2];
		var _ = p, f;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[3] = f) : f = t[3];
		var g = m === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING, h;
		t[4] !== _ ? (h = function() {
			return _(o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING);
		}, t[4] = _, t[5] = h) : h = t[5];
		var y;
		t[6] !== g || t[7] !== h ? (y = u.jsx(r("WDSMenuItem.react"), {
			testid: "event_rsvp_going",
			title: f,
			isToggleable: !0,
			toggled: g,
			onPress: h
		}), t[6] = g, t[7] = h, t[8] = y) : y = t[8];
		var C;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), t[9] = C) : C = t[9];
		var b = m === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE, v;
		t[10] !== _ ? (v = function() {
			return _(o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE);
		}, t[10] = _, t[11] = v) : v = t[11];
		var S;
		t[12] !== b || t[13] !== v ? (S = u.jsx(r("WDSMenuItem.react"), {
			testid: "event_rsvp_maybe",
			title: C,
			isToggleable: !0,
			toggled: b,
			onPress: v
		}), t[12] = b, t[13] = v, t[14] = S) : S = t[14];
		var R;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), t[15] = R) : R = t[15];
		var L = m === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.NOT_GOING, E;
		t[16] !== _ ? (E = function() {
			return _(o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.NOT_GOING);
		}, t[16] = _, t[17] = E) : E = t[17];
		var k;
		t[18] !== L || t[19] !== E ? (k = u.jsx(r("WDSMenuItem.react"), {
			testid: "event_rsvp_not_going",
			title: R,
			isToggleable: !0,
			toggled: L,
			onPress: E
		}), t[18] = L, t[19] = E, t[20] = k) : k = t[20];
		var I;
		t[21] !== S || t[22] !== k || t[23] !== y ? (I = u.jsxs(r("WDSMenu.react"), { children: [
			y,
			S,
			k
		] }), t[21] = S, t[22] = k, t[23] = y, t[24] = I) : I = t[24];
		var T = I, D;
		t[25] !== T || t[26] !== l || t[27] !== d ? (D = {
			targetRef: d,
			menu: T,
			position: "below",
			align: "middle",
			onClose: l
		}, t[25] = T, t[26] = l, t[27] = d, t[28] = D) : D = t[28];
		var x = r("useWDSMenu")(D), $ = x.closeMenu, P = x.menuPortal, N = x.openMenu, M;
		t[29] !== $ || t[30] !== N ? (M = function() {
			return {
				open: function(t) {
					return N();
				},
				close: $
			};
		}, t[29] = $, t[30] = N, t[31] = M) : M = t[31], c(n, M);
		var w;
		return t[32] !== P ? (w = u.jsx(u.Fragment, { children: P }), t[32] = P, t[33] = w) : w = t[33], w;
	}
	l.default = d;
}), 226);

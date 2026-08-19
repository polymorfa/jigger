__d("WAWebVoipEncryptionButton.react", [
	"fbt",
	"WAWebCallCollection",
	"WAWebContactCollection",
	"WAWebUserPrefsMultiDevice",
	"WAWebVoipE2EInfoModal.react",
	"WDSButton.react",
	"WDSIconIcInfo.react",
	"WDSIconIcLock.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime",
	"useWAWebABPropConfigValue",
	"useWAWebVoipModalManager",
	"useWAWebVoipWindowPopoutTooltipProps"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { iconButton: {
		color: "xhslqc4",
		$$css: !0
	} };
	function d(e) {
		var t, n = o("react-compiler-runtime").c(25), a = e.inline, i = e.tonal, l = a === void 0 ? !1 : a, d = i === void 0 ? !1 : i, m = r("useWAWebVoipWindowPopoutTooltipProps")(), p = m.tooltipAnchorRef, _ = m.tooltipOwnerDocument, f = r("useWAWebVoipModalManager")(), g = f.openModal, h = o("useWAWebABPropConfigValue").useABPropConfigValue("coex_calling_enabled"), y = h, C;
		n[0] !== y ? (C = y && o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage(), n[0] = y, n[1] = C) : C = n[1];
		var b = C, v = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.peerJid, S;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (S = v != null ? o("WAWebContactCollection").ContactCollection.get(v) : null, n[2] = S) : S = n[2];
		var R = S, L = y && (R == null ? void 0 : R.isHosted) === !0, E = b || L, k;
		n[3] !== b || n[4] !== L || n[5] !== g ? (k = function() {
			g(u.jsx(r("WAWebVoipE2EInfoModal.react"), {
				isCurrentUserCoex: b,
				isPeerCoex: L
			}));
		}, n[3] = b, n[4] = L, n[5] = g, n[6] = k) : k = n[6];
		var I = k, T = r(E ? "WDSIconIcInfo.react" : "WDSIconIcLock.react"), D;
		if (L) {
			var x;
			n[7] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
				/*BTDS*/
				""
			), n[7] = x) : x = n[7], D = x;
		} else if (b) {
			var $;
			n[8] === Symbol.for("react.memo_cache_sentinel") ? ($ = s._(
				/*BTDS*/
				""
			), n[8] = $) : $ = n[8], D = $;
		} else {
			var P;
			n[9] === Symbol.for("react.memo_cache_sentinel") ? (P = s._(
				/*BTDS*/
				""
			), n[9] = P) : P = n[9], D = P;
		}
		var N = d ? "media" : "default", M = d ? "tonal" : "borderless", w = d ? void 0 : c.iconButton, A;
		n[10] !== T || n[11] !== I || n[12] !== N || n[13] !== M || n[14] !== w || n[15] !== D ? (A = u.jsx(r("WDSButton.react"), {
			Icon: T,
			onPress: I,
			size: "small",
			type: N,
			variant: M,
			testid: "voip-encryption-button",
			xstyle: w,
			"aria-label": D
		}), n[10] = T, n[11] = I, n[12] = N, n[13] = M, n[14] = w, n[15] = D, n[16] = A) : A = n[16];
		var F;
		n[17] !== A || n[18] !== p || n[19] !== D || n[20] !== _ ? (F = u.jsx(r("WDSTooltip.react"), {
			label: D,
			ownerAnchorRef: p,
			ownerDocument: _,
			children: A
		}), n[17] = A, n[18] = p, n[19] = D, n[20] = _, n[21] = F) : F = n[21];
		var O = F;
		if (l) return O;
		var B;
		n[22] === Symbol.for("react.memo_cache_sentinel") ? (B = { className: "x10l6tqk xugynej x67dgr1 x68pp3s" }, n[22] = B) : B = n[22];
		var W;
		return n[23] !== O ? (W = u.jsx("div", babelHelpers.extends({}, B, { children: O })), n[23] = O, n[24] = W) : W = n[24], W;
	}
	l.default = d;
}), 226);

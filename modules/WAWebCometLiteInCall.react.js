__d("WAWebCometLiteInCall.react", [
	"fbt",
	"WAWebCallCollection",
	"WAWebCometLiteCallControls.react",
	"WAWebCometLiteSelfPreview.react",
	"WAWebFlex.react",
	"WAWebVoipCallStateUtils",
	"WAWebVoipEventConstants",
	"WAWebVoipUiVideoCallPeerVideo.react",
	"WAWebVoipVideoStateUtils",
	"WAWebWaLogoIcon.react",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue",
	"useWAWebVoipCameraAvailability"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useRef, d = {
		root: {
			boxSizing: "x9f619",
			position: "x1n2onr6",
			width: "xh8yej3",
			height: "x5yr21d",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		peerLayer: {
			position: "x10l6tqk",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			width: "xh8yej3",
			height: "x5yr21d",
			zIndex: "x1ja2u2z",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		logo: {
			color: "x1r8hjv8",
			$$css: !0
		},
		logoOverlay: {
			position: "x10l6tqk",
			top: "x17tcrdl",
			insetInlineStart: "x1kwadzz",
			left: null,
			right: null,
			$$css: !0
		},
		controlsOverlay: {
			position: "x10l6tqk",
			bottom: "xo76822",
			insetInlineStart: "x1o0tod",
			insetInlineEnd: "xtijo5x",
			left: null,
			right: null,
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(45), n = e.selfWid, a = e.wid, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL), t[0] = i) : i = t[0];
		var l = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), i, C), m;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (m = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.IS_VIDEO), t[1] = m) : m = t[1];
		var b;
		t[2] !== l ? (b = [l], t[2] = l, t[3] = b) : b = t[3];
		var v = r("useWAWebEventTargetValue")(l, m, y, b), S;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (S = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_MIC_MUTED), t[4] = S) : S = t[4];
		var R;
		t[5] !== l ? (R = [l], t[5] = l, t[6] = R) : R = t[6];
		var L = r("useWAWebEventTargetValue")(l, S, h, R), E;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (E = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_VIDEO_STATE), t[7] = E) : E = t[7];
		var k;
		t[8] !== l ? (k = [l], t[8] = l, t[9] = k) : k = t[9];
		var I = r("useWAWebEventTargetValue")(l, E, g, k), T;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (T = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_MIC_MUTED), t[10] = T) : T = t[10];
		var D;
		t[11] !== l ? (D = [l], t[11] = l, t[12] = D) : D = t[12];
		var x = r("useWAWebEventTargetValue")(l, T, f, D), $;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? ($ = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE), t[13] = $) : $ = t[13];
		var P;
		t[14] !== l ? (P = [l], t[14] = l, t[15] = P) : P = t[15];
		var N = r("useWAWebEventTargetValue")(l, $, _, P), M;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (M = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), t[16] = M) : M = t[16];
		var w;
		t[17] !== l ? (w = [l], t[17] = l, t[18] = w) : w = t[18];
		var A = r("useWAWebEventTargetValue")(l, M, p, w), F = r("useWAWebVoipCameraAvailability")(), O = c(null), B;
		t[19] !== a ? (B = a.toJid(), t[19] = a, t[20] = B) : B = t[20];
		var W = !N, q;
		t[21] !== A || t[22] !== x || t[23] !== B || t[24] !== W || t[25] !== a ? (q = u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: d.peerLayer,
			children: u.jsx(o("WAWebVoipUiVideoCallPeerVideo.react").WAWebVoipUiVideoCallPeerVideo, {
				ref: O,
				peerJid: B,
				peerMicMuted: x,
				peerVideoMuted: W,
				callState: A,
				userId: a
			})
		}), t[21] = A, t[22] = x, t[23] = B, t[24] = W, t[25] = a, t[26] = q) : q = t[26];
		var U;
		t[27] === Symbol.for("react.memo_cache_sentinel") ? (U = u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: d.logoOverlay,
			children: u.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
				height: 36,
				width: 36,
				iconXstyle: d.logo,
				"aria-label": s._(
					/*BTDS*/
					""
				)
			})
		}), t[27] = U) : U = t[27];
		var V;
		t[28] !== I || t[29] !== n ? (V = u.jsx(r("WAWebCometLiteSelfPreview.react"), {
			selfWid: n,
			isVideoMuted: I
		}), t[28] = I, t[29] = n, t[30] = V) : V = t[30];
		var H;
		t[31] !== A ? (H = o("WAWebVoipCallStateUtils").isCallConnected(A), t[31] = A, t[32] = H) : H = t[32];
		var G;
		t[33] !== F || t[34] !== L || t[35] !== v || t[36] !== I || t[37] !== H ? (G = u.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			xstyle: d.controlsOverlay,
			children: u.jsx(r("WAWebCometLiteCallControls.react"), {
				hasCameraAvailable: F,
				isConnected: H,
				isMuted: L,
				isVideoCall: v,
				isVideoMuted: I
			})
		}), t[33] = F, t[34] = L, t[35] = v, t[36] = I, t[37] = H, t[38] = G) : G = t[38];
		var z;
		t[39] === Symbol.for("react.memo_cache_sentinel") ? (z = { className: "x78zum5 x1q0g3np x6s0dn4 x1s70e7g x10l6tqk xo76822 x185fuhz" }, t[39] = z) : z = t[39];
		var j;
		t[40] === Symbol.for("react.memo_cache_sentinel") ? (j = u.jsxs("div", babelHelpers.extends({}, z, {
			"aria-hidden": !0,
			children: [
				u.jsx("div", { className: "x1xc55vz xdk7pt xt8t1vi x1xc408v x129tdwq x15urzxu x1p8t8ri" }),
				u.jsx("div", { className: "x1xc55vz xdk7pt xt8t1vi x1xc408v x129tdwq x15urzxu x1ers9ju" }),
				u.jsx("div", { className: "x1xc55vz xdk7pt xt8t1vi x1xc408v x129tdwq x15urzxu x1ers9ju" })
			]
		})), t[40] = j) : j = t[40];
		var K;
		return t[41] !== q || t[42] !== V || t[43] !== G ? (K = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: d.root,
			testid: "wa-web-lite-in-call",
			children: [
				q,
				U,
				V,
				G,
				j
			]
		}), t[41] = q, t[42] = V, t[43] = G, t[44] = K) : K = t[44], K;
	}
	function p() {
		var e;
		return (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.getState();
	}
	function _() {
		var e, t;
		return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.shouldShowPeerVideo()) != null ? e : !1;
	}
	function f() {
		var e, t;
		return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.peerMicMuted) != null ? e : !1;
	}
	function g() {
		var e = r("WAWebCallCollection").activeCall;
		return e != null ? !o("WAWebVoipVideoStateUtils").isVideoEnabled(e.selfVideoState) : !0;
	}
	function h() {
		var e, t;
		return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.selfMicMuted) != null ? e : !1;
	}
	function y() {
		var e, t;
		return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.isVideo) != null ? e : !1;
	}
	function C() {
		return r("WAWebCallCollection").activeCall;
	}
	l.default = m;
}), 226);

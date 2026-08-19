__d("MWV2ChatVideo.react", [
	"fbt",
	"FBLogger",
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"MAWAttachmentSizeUtils",
	"MWChatImageInsetShadow.react",
	"MWLSThreadDisplayContext",
	"MWMessageListMediaPressableContainer.react",
	"MWResponsiveVideo.react",
	"MWV2AttachmentProgressBar.react",
	"MWV2LogMessageClick",
	"MWVideoPlayerControllerContext.react",
	"MWXGlimmer.react",
	"MWXMessageBubbleCornerStyles.react",
	"getVideoPlayerUserFacingErrorMessageFromError",
	"react",
	"react-compiler-runtime",
	"useCometRouterDispatcher",
	"useMWMediaViewerOpenQPLLogger",
	"useMWV2FocusRowAfterClosingPushView",
	"useMWV2MediaViewerShowDialog",
	"useMWV2MediaViewerURL",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useContext, f = p.useEffect, g = p.useMemo, h = p.useRef, y = {
		glimmer: {
			height: "xpyat2d",
			marginTop: "x1gslohp",
			width: "x1oysuqx",
			$$css: !0
		},
		root: {
			backfaceVisibility: "xlp1x4z",
			backgroundColor: "x1eb86dx",
			display: "x1lliihq",
			maxWidth: "x193iq5w",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			position: "x1n2onr6",
			$$css: !0
		}
	};
	function C(t) {
		var n = o("react-compiler-runtime").c(76), a = t.attachment, i = t.autoPlaySetting, l = t.connectTop, d = t.getPlayableUrl, p = t.gifPlayback, g = t.isSecure, h = t.loops, C = t.mediaRenderQpl, S = t.message, R = t.navigateToRouteForMediaViewer, L = t.outgoing, E = t.renderUnsupportedAttachment, k = R === void 0 ? !0 : R, I = (e || (e = r("useReStore")))(), T = r("useCometRouterDispatcher")(), D = r("useMWV2MediaViewerURL")(a), x = L ? "right" : "left", $;
		n[0] !== l || n[1] !== x ? ($ = o("MWXMessageBubbleCornerStyles.react").getMWXBubbleCornerStyles({
			align: x,
			connectTop: l
		}), n[0] = l, n[1] = x, n[2] = $) : $ = n[2];
		var P = $, N = r("useMWV2FocusRowAfterClosingPushView")(), M = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), w = r("useMWV2MediaViewerShowDialog")(k), A = w[0], F = w[1], O = _(r("MWVideoPlayerControllerContext.react")), B;
		n[3] !== a || n[4] !== d || n[5] !== C ? (B = d(a, "MWV2ChatVideoInner", C), n[3] = a, n[4] = d, n[5] = C, n[6] = B) : B = n[6];
		var W = B, q = o("useMWMediaViewerOpenQPLLogger").useMWMediaViewerOpenQPLLogger(), U, V;
		if (n[7] !== C || n[8] !== W ? (U = function() {
			C == null || C.addPoint("render-chat-video", { bool: { has_url: !!W } });
		}, V = [C, W], n[7] = C, n[8] = W, n[9] = U, n[10] = V) : (U = n[9], V = n[10]), f(U, V), W == null || W === "") {
			C == null || C.endFailAfterDelay("empty_preview_url");
			var H;
			return n[11] !== a || n[12] !== E ? (H = E != null ? E(a) : null, n[11] = a, n[12] = E, n[13] = H) : H = n[13], H;
		}
		if ((a == null ? void 0 : a.playableUrlMimeType) === "video/x-ms-wmv" && !(u || (u = o("I64"))).equal(S.sendStatusV2, (c || (c = o("LSIntEnum"))).ofNumber(2))) {
			var G;
			return n[14] !== P ? (G = m.jsx(r("MWXGlimmer.react"), {
				index: 1,
				xstyle: [P, y.glimmer]
			}), n[14] = P, n[15] = G) : G = n[15], G;
		}
		var z = a.previewHeight, j = a.previewWidth, K;
		n[16] === Symbol.for("react.memo_cache_sentinel") ? (K = s._(
			/*BTDS*/
			""
		), n[16] = K) : K = n[16];
		var Q;
		n[17] !== S.authorityLevel ? (Q = (u || (u = o("I64"))).le(S.authorityLevel, (c || (c = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").CLIENT_PARTIAL)), n[17] = S.authorityLevel, n[18] = Q) : Q = n[18];
		var X;
		n[19] !== k || n[20] !== F ? (X = function() {
			if (!k) return F();
		}, n[19] = k, n[20] = F, n[21] = X) : X = n[21];
		var Y;
		n[22] !== a || n[23] !== O || n[24] !== I || n[25] !== T || n[26] !== D || n[27] !== g || n[28] !== q || n[29] !== S || n[30] !== k || n[31] !== N || n[32] !== A || n[33] !== W ? (Y = function() {
			if (o("MWV2LogMessageClick").log(I, S, 27), q.startFlow({
				attachmentType: "VIDEO",
				entryPoint: "thread_view",
				isSecure: g != null ? g : !1
			}), N(v), !k) return A({ attachment: a }, b);
			var e = O.ref.current;
			if (e) {
				var t = e.getCurrentState(), n = t.volume, i = e.getPlayheadPosition();
				D != null && (T == null || T.go(D, { passthroughProps: {
					origSrc: W,
					startTimestamp: i,
					volumeSetting: n
				} }), e.setMuted(!0, "product_initiated"));
			} else r("FBLogger")("messenger_web_media").debug("Missing controller");
		}, n[22] = a, n[23] = O, n[24] = I, n[25] = T, n[26] = D, n[27] = g, n[28] = q, n[29] = S, n[30] = k, n[31] = N, n[32] = A, n[33] = W, n[34] = Y) : Y = n[34];
		var J;
		n[35] !== P ? (J = [y.root, P], n[35] = P, n[36] = J) : J = n[36];
		var Z;
		n[37] !== a || n[38] !== E ? (Z = E != null ? function(e) {
			var t, n;
			return E(a, e != null && (t = r("getVideoPlayerUserFacingErrorMessageFromError")(e)) != null ? t : void 0, (n = e == null ? void 0 : e.message) != null ? n : null);
		} : void 0, n[37] = a, n[38] = E, n[39] = Z) : Z = n[39];
		var ee = a.attachmentFbid, te;
		n[40] !== z ? (te = z != null ? (u || (u = o("I64"))).to_float(z) : void 0, n[40] = z, n[41] = te) : te = n[41];
		var ne = p === !0, re = g != null ? g : !1, oe = M != null ? M : "ChatTab", ae;
		n[42] !== ne || n[43] !== re || n[44] !== oe ? (ae = o("MAWAttachmentSizeUtils").getMaxHeightForVideo(ne, re, oe), n[42] = ne, n[43] = re, n[44] = oe, n[45] = ae) : ae = n[45];
		var ie = M === "Inbox" ? 500 : 167, le;
		n[46] !== j ? (le = j != null ? (u || (u = o("I64"))).to_float(j) : void 0, n[46] = j, n[47] = le) : le = n[47];
		var se;
		n[48] !== a.attachmentFbid || n[49] !== i || n[50] !== P || n[51] !== p || n[52] !== h || n[53] !== C || n[54] !== Z || n[55] !== te || n[56] !== ae || n[57] !== ie || n[58] !== le || n[59] !== W ? (se = m.jsx(r("MWResponsiveVideo.react"), {
			autoPlaySetting: i,
			connectTopStyles: P,
			errorBoundaryFallback: Z,
			fbid: ee,
			gifPlayback: p,
			height: te,
			loops: h,
			maxHeight: ae,
			maxWidth: ie,
			mediaRenderQpl: C,
			shouldForcePauseOnClick: !0,
			src: W,
			width: le
		}), n[48] = a.attachmentFbid, n[49] = i, n[50] = P, n[51] = p, n[52] = h, n[53] = C, n[54] = Z, n[55] = te, n[56] = ae, n[57] = ie, n[58] = le, n[59] = W, n[60] = se) : se = n[60];
		var ue;
		n[61] !== a || n[62] !== S.authorityLevel ? (ue = (u || (u = o("I64"))).le(S.authorityLevel, (c || (c = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").CLIENT_PARTIAL)) ? m.jsx(r("MWV2AttachmentProgressBar.react"), { attachment: a }) : null, n[61] = a, n[62] = S.authorityLevel, n[63] = ue) : ue = n[63];
		var ce;
		n[64] !== P ? (ce = m.jsx(r("MWChatImageInsetShadow.react"), { xstyle: P }), n[64] = P, n[65] = ce) : ce = n[65];
		var de;
		return n[66] !== a || n[67] !== C || n[68] !== Y || n[69] !== J || n[70] !== se || n[71] !== ue || n[72] !== ce || n[73] !== Q || n[74] !== X ? (de = m.jsxs(r("MWMessageListMediaPressableContainer.react"), {
			ariaLabel: K,
			attachment: a,
			disabled: Q,
			mediaRenderQpl: C,
			onHoverIn: X,
			onPress: Y,
			overlayDisabled: !0,
			testid: void 0,
			xstyle: J,
			children: [
				se,
				ue,
				ce
			]
		}), n[66] = a, n[67] = C, n[68] = Y, n[69] = J, n[70] = se, n[71] = ue, n[72] = ce, n[73] = Q, n[74] = X, n[75] = de) : de = n[75], de;
	}
	function b() {}
	function v() {
		return !0;
	}
	function S(e) {
		var t = o("react-compiler-runtime").c(14), n = e.attachment, a = e.autoPlaySetting, i = e.connectTop, l = e.getPlayableUrl, s = e.gifPlayback, u = e.isSecure, c = e.loops, d = e.mediaRenderQpl, p = e.message, _ = e.navigateToRouteForMediaViewer, f = e.outgoing, g = e.renderUnsupportedAttachment, y = h(null), b;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (b = { ref: y }, t[0] = b) : b = t[0];
		var v = b, S;
		return t[1] !== n || t[2] !== a || t[3] !== i || t[4] !== l || t[5] !== s || t[6] !== u || t[7] !== c || t[8] !== d || t[9] !== p || t[10] !== _ || t[11] !== f || t[12] !== g ? (S = m.jsx(r("MWVideoPlayerControllerContext.react").Provider, {
			value: v,
			children: m.jsx(C, {
				attachment: n,
				autoPlaySetting: a,
				connectTop: i,
				getPlayableUrl: l,
				gifPlayback: s,
				isSecure: u,
				loops: c,
				mediaRenderQpl: d,
				message: p,
				navigateToRouteForMediaViewer: _,
				outgoing: f,
				renderUnsupportedAttachment: g
			})
		}), t[1] = n, t[2] = a, t[3] = i, t[4] = l, t[5] = s, t[6] = u, t[7] = c, t[8] = d, t[9] = p, t[10] = _, t[11] = f, t[12] = g, t[13] = S) : S = t[13], S;
	}
	l.default = S;
}), 226);

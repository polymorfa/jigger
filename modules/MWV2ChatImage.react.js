__d("MWV2ChatImage.react", [
	"fbt",
	"CometHeroInteractionWithDiv.react",
	"HeroInteractionIgnoreWithDiv.react",
	"I64",
	"InteractionTracing",
	"InteractionTracingMetrics",
	"LSAuthorityLevel",
	"LSIntEnum",
	"MWChatImageInsetShadow.react",
	"MWLSThreadDisplayContext",
	"MWMediaRenderInteractionIDContext",
	"MWMessageListMediaPressableContainer.react",
	"MWPBumpEntityKey",
	"MWPMessageListImage.react",
	"MWV2AttachmentProgressBar.react",
	"MWV2LogMessageClick",
	"MWXMessageBubbleCornerStyles.react",
	"MessagingAttachmentType",
	"gkx",
	"hero-tracing-placeholder",
	"react",
	"react-compiler-runtime",
	"useGetMediaGroupInformation",
	"useGetMediaGroupStyles",
	"useMWMediaViewerOpenQPLLogger",
	"useMWMessageListAttachmentDimensions",
	"useMWV2FocusRowAfterClosingPushView",
	"useMWV2MediaViewerShowDialog",
	"useMWV2MediaViewerURL",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useContext, g = p.useEffect, h = {
		container: {
			display: "x78zum5",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			position: "x1n2onr6",
			$$css: !0
		},
		containerMinHeight: {
			minHeight: "xe0p6wg",
			$$css: !0
		}
	};
	function y(t) {
		var n = o("react-compiler-runtime").c(89), a = t.attachment, i = t.connectBottom, l = t.connectTop, d = t.getPreviewUrl, p = t.isGroupedImage, _ = t.isSecure, y = t.maxHeight, v = t.maxWidth, S = t.mediaRenderQpl, R = t.message, L = t.navigateToRouteForMediaViewer, E = t.onPressOverride, k = t.outgoing, I = t.renderUnsupportedAttachment, T = t.shouldBlur, D = f(o("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext), x = o("MWMediaRenderInteractionIDContext").useMWMediaRenderInteractionId(), $;
		n[0] !== x || n[1] !== S ? ($ = function() {
			if (S == null || S.endFailAfterDelay("load-image-error"), x != null) {
				var e;
				(e = r("InteractionTracing").getPendingInteractionById(x)) == null || e.cancelTrace("load-image-error", !0);
			}
		}, n[0] = x, n[1] = S, n[2] = $) : $ = n[2];
		var P = $, N;
		n[3] !== D || n[4] !== S ? (N = function() {
			var e;
			S == null || S.endSuccessAfterDelay();
			var t = r("gkx")("12935") ? (e = D.current) == null ? void 0 : e.interactionUUID : null;
			t != null && r("InteractionTracingMetrics").addMarkerPoint(t, "image-on-load", "AppTiming");
		}, n[3] = D, n[4] = S, n[5] = N) : N = n[5];
		var M = N, w = (e || (e = r("useReStore")))(), A = L != null ? L : !0, F = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), O = r("useMWMessageListAttachmentDimensions")(F, a), B = O[0], W = O[1], q = r("useMWV2MediaViewerURL")(a), U = k === !0 ? "right" : "left", V;
		n[6] !== i || n[7] !== l || n[8] !== U ? (V = o("MWXMessageBubbleCornerStyles.react").getMWXBubbleCornerStyles({
			align: U,
			connectBottom: i,
			connectTop: l
		}), n[6] = i, n[7] = l, n[8] = U, n[9] = V) : V = n[9];
		var H = V, G;
		n[10] !== W ? (G = (u || (u = o("I64"))).to_float(W != null ? W : (u || (u = o("I64"))).zero), n[10] = W, n[11] = G) : G = n[11];
		var z;
		n[12] !== B ? (z = (u || (u = o("I64"))).to_float(B != null ? B : (u || (u = o("I64"))).zero), n[12] = B, n[13] = z) : z = n[13];
		var j = o("useGetMediaGroupStyles").useGetMediaGroupTileImageRatios(p, G, z), K = j.resizeRatio, Q = j.scaleRatio, X = B != null ? (u || (u = o("I64"))).to_float(B) * K : void 0, Y = W != null ? (u || (u = o("I64"))).to_float(W) * K : void 0, J = K > 1, Z = p === !1 ? y : (J === !0 ? Y != null ? Y : 0 : y) * Q, ee = p === !1 ? v : (J ? X != null ? X : 0 : v) * Q, te = r("gkx")("23009"), ne = r("useMWV2FocusRowAfterClosingPushView")(), re = r("useMWV2MediaViewerShowDialog")(A), oe = re[0], ae = re[1], ie = r("useGetMediaGroupInformation")(R, _ === !0, S), le = o("useMWMediaViewerOpenQPLLogger").useMWMediaViewerOpenQPLLogger(), se = le.startFlow, ue;
		n[14] !== a || n[15] !== d || n[16] !== S ? (ue = d(a, "MWV2ChatImage", S, void 0, null), n[14] = a, n[15] = d, n[16] = S, n[17] = ue) : ue = n[17];
		var ce = ue, de, me;
		if (n[18] !== D || n[19] !== S || n[20] !== T || n[21] !== ce ? (de = function() {
			if (ce != null && ce.length > 0) {
				var e, t = r("gkx")("12935") ? (e = D.current) == null ? void 0 : e.interactionUUID : null;
				S == null || S.addPoint("render-chat-image", { bool: { has_blur: T } }), t != null && (r("InteractionTracingMetrics").addMarkerPoint(t, "render-chat-image", "AppTiming"), T != null && r("InteractionTracingMetrics").addMetadata(t, "has_blur", T));
			}
		}, me = [
			D,
			S,
			T,
			ce
		], n[18] = D, n[19] = S, n[20] = T, n[21] = ce, n[22] = de, n[23] = me) : (de = n[22], me = n[23]), g(de, me), ce == null || ce.length === 0) {
			if (S == null || S.endFailAfterDelay("empty_preview_url"), x != null) {
				var pe;
				(pe = r("InteractionTracing").getPendingInteractionById(x)) == null || pe.cancelTrace("empty_preview_url", !0);
			}
			var _e;
			return n[24] !== a || n[25] !== I ? (_e = I != null ? I(a) : null, n[24] = a, n[25] = I, n[26] = _e) : _e = n[26], _e;
		}
		var fe;
		n[27] !== q || n[28] !== R.authorityLevel || n[29] !== A || n[30] !== ce ? (fe = A && (u || (u = o("I64"))).gt(R.authorityLevel, (c || (c = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").CLIENT_PARTIAL)) ? {
			passthroughProps: { origSrc: ce },
			url: q
		} : void 0, n[27] = q, n[28] = R.authorityLevel, n[29] = A, n[30] = ce, n[31] = fe) : fe = n[31];
		var ge = fe, he;
		n[32] !== a || n[33] !== w || n[34] !== _ || n[35] !== ie || n[36] !== R || n[37] !== E || n[38] !== ne || n[39] !== A || n[40] !== oe || n[41] !== se ? (he = function() {
			if (E) E();
			else if (o("MWV2LogMessageClick").log(w, R, 28), se({
				attachmentType: "IMAGE",
				entryPoint: "thread_view",
				isSecure: _ != null ? _ : !1
			}), ne(b), ie != null && o("MWPBumpEntityKey").bumpEntityKeyWithAppId("maw.thread", "image_group_click_" + ie.tileSize + "_tile"), !A) return oe({ attachment: a }, C);
		}, n[32] = a, n[33] = w, n[34] = _, n[35] = ie, n[36] = R, n[37] = E, n[38] = ne, n[39] = A, n[40] = oe, n[41] = se, n[42] = he) : he = n[42];
		var ye = he, Ce = void 0;
		p === !0 && ie != null && (ie.groupSize === 2 ? Ce = k ? ie.groupIndex % 2 === 0 ? "start" : "end" : ie.groupIndex % 2 === 0 ? "end" : "start" : ie.groupSize === 3 && (Ce = k ? ie.groupIndex % 2 === 1 ? "start" : "end" : ie.groupIndex % 2 === 1 ? "end" : "start"));
		var be;
		n[43] !== a.attachmentType || n[44] !== a.titleText ? (be = a.titleText == null && (u || (u = o("I64"))).equal(a.attachmentType, (c || (c = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").ANIMATED_IMAGE)) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), n[43] = a.attachmentType, n[44] = a.titleText, n[45] = be) : be = n[45];
		var ve = be, Se;
		n[46] !== R.authorityLevel ? (Se = (u || (u = o("I64"))).le(R.authorityLevel, (c || (c = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").CLIENT_PARTIAL)), n[46] = R.authorityLevel, n[47] = Se) : Se = n[47];
		var Re;
		n[48] !== ae || n[49] !== A ? (Re = function() {
			if (!A) return ae();
		}, n[48] = ae, n[49] = A, n[50] = Re) : Re = n[50];
		var Le;
		n[51] !== H ? (Le = [
			h.container,
			H,
			h.containerMinHeight
		], n[51] = H, n[52] = Le) : Le = n[52];
		var Ee = a.titleText != null && te ? a.titleText : ve, ke = p === !0 ? y : void 0, Ie = p === !0 ? v : void 0, Te;
		n[53] !== a || n[54] !== i || n[55] !== l || n[56] !== Y || n[57] !== Z || n[58] !== ee || n[59] !== P || n[60] !== M || n[61] !== k || n[62] !== Ce || n[63] !== T || n[64] !== Ee || n[65] !== ke || n[66] !== Ie || n[67] !== ce || n[68] !== X ? (Te = m.jsx(o("MWPMessageListImage.react").MWPMessageListImage, {
			alt: Ee,
			attachment: a,
			connectBottom: i,
			connectTop: l,
			height: Y,
			maxHeight: Z,
			maxWidth: ee,
			onError: P,
			onLoad: M,
			outgoing: k,
			overlayAlign: Ce,
			overlayHeight: ke,
			overlayWidth: Ie,
			shouldBlur: T,
			src: ce,
			width: X
		}), n[53] = a, n[54] = i, n[55] = l, n[56] = Y, n[57] = Z, n[58] = ee, n[59] = P, n[60] = M, n[61] = k, n[62] = Ce, n[63] = T, n[64] = Ee, n[65] = ke, n[66] = Ie, n[67] = ce, n[68] = X, n[69] = Te) : Te = n[69];
		var De;
		n[70] !== a || n[71] !== R.authorityLevel ? (De = (u || (u = o("I64"))).le(R.authorityLevel, (c || (c = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").CLIENT_PARTIAL)) ? m.jsx(r("MWV2AttachmentProgressBar.react"), { attachment: a }) : null, n[70] = a, n[71] = R.authorityLevel, n[72] = De) : De = n[72];
		var xe;
		n[73] !== H ? (xe = m.jsx(r("MWChatImageInsetShadow.react"), { xstyle: H }), n[73] = H, n[74] = xe) : xe = n[74];
		var $e;
		n[75] !== a || n[76] !== ge || n[77] !== S || n[78] !== ye || n[79] !== Se || n[80] !== Re || n[81] !== Le || n[82] !== Te || n[83] !== De || n[84] !== xe ? ($e = m.jsxs(r("MWMessageListMediaPressableContainer.react"), {
			attachment: a,
			disabled: Se,
			linkProps_: ge,
			mediaRenderQpl: S,
			onHoverIn: Re,
			onPress: ye,
			testid: void 0,
			xstyle: Le,
			children: [
				Te,
				De,
				xe
			]
		}, a.attachmentFbid), n[75] = a, n[76] = ge, n[77] = S, n[78] = ye, n[79] = Se, n[80] = Re, n[81] = Le, n[82] = Te, n[83] = De, n[84] = xe, n[85] = $e) : $e = n[85];
		var Pe = $e, Ne;
		return n[86] !== Pe || n[87] !== x ? (Ne = m.jsx(m.Fragment, { children: x != null ? m.jsx(r("HeroInteractionIgnoreWithDiv.react"), { children: m.jsx(r("CometHeroInteractionWithDiv.react"), {
			interactionDesc: "MWV2ChatImage",
			interactionUUID: x,
			pageletName: "Image",
			children: Pe
		}) }) : Pe }), n[86] = Pe, n[87] = x, n[88] = Ne) : Ne = n[88], Ne;
	}
	function C() {}
	function b() {
		return !0;
	}
	l.default = y;
}), 226);

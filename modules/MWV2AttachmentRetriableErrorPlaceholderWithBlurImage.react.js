__d("MWV2AttachmentRetriableErrorPlaceholderWithBlurImage.react", [
	"fbt",
	"MAWVideoAudioPlaybackErrorHandlerUtils",
	"MWV2AttachmentPlaceholderWithBlurImage.react",
	"MWXIconRefreshAlt",
	"MWXIconStrict.react",
	"MWXPressable.react",
	"MWXText.react",
	"MWXTooltip.react",
	"MediaDownloadStatusIconSize",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useEffect, d = {
		buttonLarge: {
			height: "xdd8jsf",
			marginTop: "xuqeo79",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1vvjuq3",
			width: "xvni27",
			$$css: !0
		},
		buttonSmall: {
			height: "xxk0z11",
			marginTop: "x7wgvq7",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x18xomjl",
			width: "xvy4d1p",
			$$css: !0
		},
		circleButton: {
			backgroundColor: "x18l40ae",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			opacity: "x1hc1fzr",
			$$css: !0
		},
		container: {
			alignItems: "x6s0dn4",
			cursor: "x1ypdohk",
			display: "x78zum5",
			insetInlineStart: "xbudbmw",
			left: null,
			right: null,
			justifyContent: "xl56j7k",
			position: "x10l6tqk",
			top: "xwa60dl",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(38), n = e.connectBottom, a = e.connectTop, i = e.dbAttachment, l = e.getPreviewUrl, m = e.hasAppAttribution, p = e.height, _ = e.iconSize, f = e.isGroupedImage, g = e.maxHeight, h = e.maxWidth, y = e.mediaRenderQpl, C = e.message, b = e.onRetry, v = e.outgoing, S = e.width, R = e.withTooltip, L = e.xstyle, E, k;
		t[0] !== y || t[1] !== C ? (E = function() {
			y == null || y.addPoint("render-error-placeholder-with-blur-image", { bool: {
				has_message: C != null,
				is_retryable_error: !0
			} });
		}, k = [y, C], t[0] = y, t[1] = C, t[2] = E, t[3] = k) : (E = t[2], k = t[3]), c(E, k);
		var I = o("MAWVideoAudioPlaybackErrorHandlerUtils").useGetMetadataForMediaNotRendered(i, !0, b), T = I.mediaStatusText, D = I.retryButton, x;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (x = { className: "xbudbmw x10l6tqk xwa60dl x11lhmoz x1vjfegm" }, t[4] = x) : x = t[4];
		var $;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? ($ = s._(
			/*BTDS*/
			""
		), t[5] = $) : $ = t[5];
		var P = _ === r("MediaDownloadStatusIconSize").Large && d.buttonLarge, N = _ === r("MediaDownloadStatusIconSize").Small && d.buttonSmall, M;
		t[6] !== P || t[7] !== N ? (M = [
			d.circleButton,
			d.container,
			P,
			N
		], t[6] = P, t[7] = N, t[8] = M) : M = t[8];
		var w = _ === r("MediaDownloadStatusIconSize").Large ? 24 : 12, A;
		t[9] !== w ? (A = u.jsx(r("MWXIconStrict.react"), {
			color: "white",
			icon: r("MWXIconRefreshAlt"),
			isDecorative: !0,
			size: w
		}), t[9] = w, t[10] = A) : A = t[10];
		var F;
		t[11] !== b || t[12] !== M || t[13] !== A ? (F = u.jsx("div", babelHelpers.extends({}, x, { children: u.jsx(r("MWXPressable.react"), {
			display: "inline",
			label: $,
			onPress: b,
			testid: void 0,
			xstyle: M,
			children: A
		}) })), t[11] = b, t[12] = M, t[13] = A, t[14] = F) : F = t[14];
		var O;
		t[15] !== n || t[16] !== a || t[17] !== i || t[18] !== l || t[19] !== m || t[20] !== p || t[21] !== f || t[22] !== g || t[23] !== h || t[24] !== y || t[25] !== C || t[26] !== v || t[27] !== S || t[28] !== L ? (O = u.jsx(r("MWV2AttachmentPlaceholderWithBlurImage.react"), {
			connectBottom: n,
			connectTop: a,
			dbAttachment: i,
			getPreviewUrl: l,
			hasAppAttribution: m,
			height: p,
			isGroupedImage: f,
			maxHeight: g,
			maxWidth: h,
			mediaRenderQpl: y,
			message: C,
			outgoing: v,
			width: S,
			xstyle: L
		}), t[15] = n, t[16] = a, t[17] = i, t[18] = l, t[19] = m, t[20] = p, t[21] = f, t[22] = g, t[23] = h, t[24] = y, t[25] = C, t[26] = v, t[27] = S, t[28] = L, t[29] = O) : O = t[29];
		var B;
		t[30] !== F || t[31] !== O ? (B = u.jsxs(u.Fragment, { children: [F, O] }), t[30] = F, t[31] = O, t[32] = B) : B = t[32];
		var W = B, q;
		return t[33] !== W || t[34] !== T || t[35] !== D || t[36] !== R ? (q = R === !0 ? u.jsx(r("MWXTooltip.react"), {
			label: T,
			tooltip: u.jsxs(r("MWXText.react"), {
				color: "tooltip",
				type: "meta4",
				children: [T, D]
			}),
			children: W
		}) : W, t[33] = W, t[34] = T, t[35] = D, t[36] = R, t[37] = q) : q = t[37], q;
	}
	l.default = m;
}), 226);

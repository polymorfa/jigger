__d("MWV2AttachmentDownloadablePlaceholderWithBlurImage.react", [
	"fbt",
	"MWV2AttachmentErrorPlaceholderWithBlurImage.react",
	"MWV2AttachmentPlaceholderWithBlurImage.react",
	"MWXIconDownload",
	"MWXIconStrict.react",
	"MWXPressable.react",
	"MWXText.react",
	"MWXTooltip.react",
	"MediaDownloadStatusIconSize",
	"MessengerWebUXLoggerImpl",
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
		var t = o("react-compiler-runtime").c(58), n = e.connectBottom, a = e.connectTop, i = e.dbAttachment, l = e.getPlayableUrl, m = e.getPreviewUrl, p = e.hasAppAttribution, _ = e.height, f = e.iconSize, g = e.isGroupedImage, h = e.maxHeight, y = e.maxWidth, C = e.mediaRenderQpl, b = e.message, v = e.outgoing, S = e.placeholderMessage, R = e.previewHeight, L = e.previewWidth, E = e.width, k = e.withTooltip, I = e.xstyle, T = o("MessengerWebUXLoggerImpl").useInteractionLogger(), D;
		t[0] !== i || t[1] !== l ? (D = l(i, "MWV2AttachmentDownloadablePlaceholderWithBlurImage"), t[0] = i, t[1] = l, t[2] = D) : D = t[2];
		var x = D, $, P;
		if (t[3] !== C || t[4] !== b || t[5] !== x ? ($ = function() {
			C == null || C.addPoint("render-error-placeholder-with-blur-image", { bool: {
				has_message: b != null,
				has_playable_url: !!x,
				is_downloadable: !0
			} });
		}, P = [
			C,
			b,
			x
		], t[3] = C, t[4] = b, t[5] = x, t[6] = $, t[7] = P) : ($ = t[6], P = t[7]), c($, P), !x) {
			var N;
			return t[8] !== n || t[9] !== a || t[10] !== i || t[11] !== m || t[12] !== h || t[13] !== y || t[14] !== C || t[15] !== b || t[16] !== v || t[17] !== R || t[18] !== L ? (N = u.jsx(r("MWV2AttachmentErrorPlaceholderWithBlurImage.react"), {
				connectBottom: n,
				connectTop: a,
				dbAttachment: i,
				getPreviewUrl: m,
				height: R,
				iconSize: r("MediaDownloadStatusIconSize").Large,
				maxHeight: h,
				maxWidth: y,
				mediaRenderQpl: C,
				message: b,
				outgoing: v,
				width: L
			}), t[8] = n, t[9] = a, t[10] = i, t[11] = m, t[12] = h, t[13] = y, t[14] = C, t[15] = b, t[16] = v, t[17] = R, t[18] = L, t[19] = N) : N = t[19], N;
		}
		var M;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (M = { className: "xbudbmw x10l6tqk xwa60dl x11lhmoz x1vjfegm" }, t[20] = M) : M = t[20];
		var w;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
			/*BTDS*/
			""
		), t[21] = w) : w = t[21];
		var A;
		t[22] !== x ? (A = {
			download: !0,
			url: x
		}, t[22] = x, t[23] = A) : A = t[23];
		var F;
		t[24] !== T ? (F = function() {
			T == null || T({ eventName: "click_unsupported_video_download_from_fallback" });
		}, t[24] = T, t[25] = F) : F = t[25];
		var O = f === r("MediaDownloadStatusIconSize").Large && d.buttonLarge, B = f === r("MediaDownloadStatusIconSize").Small && d.buttonSmall, W;
		t[26] !== O || t[27] !== B ? (W = [
			d.circleButton,
			d.container,
			O,
			B
		], t[26] = O, t[27] = B, t[28] = W) : W = t[28];
		var q = f === r("MediaDownloadStatusIconSize").Large ? 24 : 12, U;
		t[29] !== q ? (U = u.jsx(r("MWXIconStrict.react"), {
			color: "white",
			icon: r("MWXIconDownload"),
			isDecorative: !0,
			size: q
		}), t[29] = q, t[30] = U) : U = t[30];
		var V;
		t[31] !== W || t[32] !== U || t[33] !== A || t[34] !== F ? (V = u.jsx("div", babelHelpers.extends({}, M, { children: u.jsx(r("MWXPressable.react"), {
			display: "inline",
			label: w,
			linkProps: A,
			onPress: F,
			xstyle: W,
			children: U
		}) })), t[31] = W, t[32] = U, t[33] = A, t[34] = F, t[35] = V) : V = t[35];
		var H;
		t[36] !== n || t[37] !== a || t[38] !== i || t[39] !== m || t[40] !== p || t[41] !== _ || t[42] !== g || t[43] !== h || t[44] !== y || t[45] !== C || t[46] !== b || t[47] !== v || t[48] !== E || t[49] !== I ? (H = u.jsx(r("MWV2AttachmentPlaceholderWithBlurImage.react"), {
			connectBottom: n,
			connectTop: a,
			dbAttachment: i,
			getPreviewUrl: m,
			hasAppAttribution: p,
			height: _,
			isGroupedImage: g,
			maxHeight: h,
			maxWidth: y,
			mediaRenderQpl: C,
			message: b,
			outgoing: v,
			width: E,
			xstyle: I
		}), t[36] = n, t[37] = a, t[38] = i, t[39] = m, t[40] = p, t[41] = _, t[42] = g, t[43] = h, t[44] = y, t[45] = C, t[46] = b, t[47] = v, t[48] = E, t[49] = I, t[50] = H) : H = t[50];
		var G;
		t[51] !== V || t[52] !== H ? (G = u.jsxs(u.Fragment, { children: [V, H] }), t[51] = V, t[52] = H, t[53] = G) : G = t[53];
		var z = G, j;
		return t[54] !== z || t[55] !== S || t[56] !== k ? (j = k === !0 ? u.jsx(r("MWXTooltip.react"), {
			label: S,
			tooltip: u.jsx(r("MWXText.react"), {
				color: "tooltip",
				type: "meta4",
				children: S
			}),
			children: z
		}) : z, t[54] = z, t[55] = S, t[56] = k, t[57] = j) : j = t[57], j;
	}
	l.default = m;
}), 226);

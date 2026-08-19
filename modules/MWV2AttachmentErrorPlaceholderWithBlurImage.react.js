__d("MWV2AttachmentErrorPlaceholderWithBlurImage.react", [
	"MAWVideoAudioPlaybackErrorHandlerUtils",
	"MWV2AttachmentPlaceholderWithBlurImage.react",
	"MWXIconExclamationMarkCircle",
	"MWXIconStrict.react",
	"MWXText.react",
	"MWXTooltip.react",
	"MediaDownloadStatusIconSize",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useEffect;
	function c(e) {
		var t = o("react-compiler-runtime").c(35), n = e.connectBottom, a = e.connectTop, i = e.dbAttachment, l = e.getPreviewUrl, c = e.hasAppAttribution, d = e.height, m = e.iconSize, p = e.isGroupedImage, _ = e.maxHeight, f = e.maxWidth, g = e.mediaRenderQpl, h = e.message, y = e.outgoing, C = e.width, b = e.withTooltip, v = e.xstyle, S, R;
		t[0] !== g || t[1] !== h ? (S = function() {
			g == null || g.addPoint("render-error-placeholder-with-blur-image", { bool: { has_message: h != null } });
		}, R = [g, h], t[0] = g, t[1] = h, t[2] = S, t[3] = R) : (S = t[2], R = t[3]), u(S, R);
		var L = o("MAWVideoAudioPlaybackErrorHandlerUtils").useGetMetadataForMediaNotRendered(i, !1), E = L.mediaStatusText, k = L.retryButton, I;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (I = { className: "xbudbmw x10l6tqk xwa60dl x11lhmoz x1vjfegm" }, t[4] = I) : I = t[4];
		var T;
		t[5] !== m ? (T = {
			0: { className: "x6s0dn4 x18l40ae x1c9tyrk xeusxvb x1pahc9y x1ertn4p x14ctfv x78zum5 xl56j7k xxk0z11 xvy4d1p" },
			1: { className: "x6s0dn4 x18l40ae x1c9tyrk xeusxvb x1pahc9y x1ertn4p x14ctfv x78zum5 xl56j7k xdd8jsf xvni27" }
		}[(m === r("MediaDownloadStatusIconSize").Large) << 0], t[5] = m, t[6] = T) : T = t[6];
		var D = m === r("MediaDownloadStatusIconSize").Large ? 24 : 12, x;
		t[7] !== D ? (x = s.jsx(r("MWXIconStrict.react"), {
			color: "white",
			icon: r("MWXIconExclamationMarkCircle"),
			isDecorative: !0,
			size: D
		}), t[7] = D, t[8] = x) : x = t[8];
		var $;
		t[9] !== T || t[10] !== x ? ($ = s.jsx("div", babelHelpers.extends({}, I, { children: s.jsx("div", babelHelpers.extends({}, T, {
			"data-testid": void 0,
			children: x
		})) })), t[9] = T, t[10] = x, t[11] = $) : $ = t[11];
		var P;
		t[12] !== n || t[13] !== a || t[14] !== i || t[15] !== l || t[16] !== c || t[17] !== d || t[18] !== p || t[19] !== _ || t[20] !== f || t[21] !== g || t[22] !== h || t[23] !== y || t[24] !== C || t[25] !== v ? (P = s.jsx(r("MWV2AttachmentPlaceholderWithBlurImage.react"), {
			connectBottom: n,
			connectTop: a,
			dbAttachment: i,
			getPreviewUrl: l,
			hasAppAttribution: c,
			height: d,
			isGroupedImage: p,
			maxHeight: _,
			maxWidth: f,
			mediaRenderQpl: g,
			message: h,
			outgoing: y,
			width: C,
			xstyle: v
		}), t[12] = n, t[13] = a, t[14] = i, t[15] = l, t[16] = c, t[17] = d, t[18] = p, t[19] = _, t[20] = f, t[21] = g, t[22] = h, t[23] = y, t[24] = C, t[25] = v, t[26] = P) : P = t[26];
		var N;
		t[27] !== $ || t[28] !== P ? (N = s.jsxs(s.Fragment, { children: [$, P] }), t[27] = $, t[28] = P, t[29] = N) : N = t[29];
		var M = N, w;
		return t[30] !== M || t[31] !== E || t[32] !== k || t[33] !== b ? (w = b === !0 ? s.jsx(r("MWXTooltip.react"), {
			label: E,
			tooltip: s.jsxs(r("MWXText.react"), {
				color: "tooltip",
				type: "meta4",
				children: [E, k]
			}),
			children: M
		}) : M, t[30] = M, t[31] = E, t[32] = k, t[33] = b, t[34] = w) : w = t[34], w;
	}
	l.default = c;
}), 98);

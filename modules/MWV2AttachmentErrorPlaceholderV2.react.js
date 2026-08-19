__d("MWV2AttachmentErrorPlaceholderV2.react", [
	"fbt",
	"MAWVideoAudioPlaybackErrorHandlerUtils",
	"MWXAspectRatioContainer.react",
	"MWXIconExclamationMarkCircle",
	"MWXIconRefreshAlt",
	"MWXIconStrict.react",
	"MWXMessageBubbleCornerStyles.react",
	"MWXPressable.react",
	"MWXText.react",
	"MWXTooltip.react",
	"MediaDownloadStatusIconSize",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useCurrentDisplayMode"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useEffect, m = {
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
		},
		content: {
			alignItems: "x6s0dn4",
			borderStartStartRadius: "x1xn7y0n",
			borderStartEndRadius: "x1uxb8k9",
			borderEndEndRadius: "x1vmbcc8",
			borderEndStartRadius: "x16xm01d",
			display: "x78zum5",
			height: "x5yr21d",
			justifyContent: "xl56j7k",
			width: "xh8yej3",
			$$css: !0
		},
		dark: {
			backgroundColor: "xhzw6zf",
			$$css: !0
		},
		light: {
			backgroundColor: "x1vtvx1t",
			$$css: !0
		}
	};
	function p(t) {
		var n = o("react-compiler-runtime").c(27), a = t.attachment, i = t.connectBottom, l = t.connectTop, u = t.hasAppAttribution, p = t.height, _ = t.iconSize, f = t.isRetryableError, g = t.maxHeight, h = t.maxWidth, y = t.mediaRenderQpl, C = t.onRetry, b = t.outgoing, v = t.width, S = t.withTooltip, R = t.xstyle, L = o("MAWVideoAudioPlaybackErrorHandlerUtils").useGetMetadataForMediaNotRendered(a, f, C), E = L.mediaStatusText, k = L.retryButton, I, T;
		n[0] !== f || n[1] !== y ? (I = function() {
			y == null || y.addPoint("render-error-placeholder", { bool: { is_retryable_error: f } });
		}, T = [y, f], n[0] = f, n[1] = y, n[2] = I, n[3] = T) : (I = n[2], T = n[3]), d(I, T);
		var D = r("useCurrentDisplayMode")(), x = p != null ? p : 100, $ = v != null ? v : 200, P = b === !0 ? "right" : "left", N = u === !0 ? "bottom" : "none", M;
		n[4] !== i || n[5] !== l || n[6] !== P || n[7] !== N ? (M = o("MWXMessageBubbleCornerStyles.react").getMWXBubbleCornerStyles({
			align: P,
			connectBottom: i,
			connectTop: l,
			flatten: N
		}), n[4] = i, n[5] = l, n[6] = P, n[7] = N, n[8] = M) : M = n[8];
		var w = M, A = g != null ? g : 200, F = h != null ? h : 480, O;
		n[9] !== w || n[10] !== D || n[11] !== _ || n[12] !== f || n[13] !== C || n[14] !== R ? (O = function(n) {
			return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
				n,
				m.content,
				D === "dark" ? m.dark : m.light,
				w,
				R
			]), {
				"data-testid": void 0,
				children: f ? c.jsx(r("MWXPressable.react"), {
					display: "inline",
					label: s._(
						/*BTDS*/
						""
					),
					onPress: C,
					testid: void 0,
					xstyle: [
						m.circleButton,
						m.container,
						_ === r("MediaDownloadStatusIconSize").Large && m.buttonLarge,
						_ === r("MediaDownloadStatusIconSize").Small && m.buttonSmall
					],
					children: c.jsx(r("MWXIconStrict.react"), {
						color: "white",
						icon: r("MWXIconRefreshAlt"),
						isDecorative: !0,
						size: _ === r("MediaDownloadStatusIconSize").Large ? 24 : 12
					})
				}) : c.jsx("div", babelHelpers.extends({}, {
					0: { className: "x6s0dn4 x18l40ae x1c9tyrk xeusxvb x1pahc9y x1ertn4p x19rn6z x78zum5 xl56j7k xxk0z11 xvy4d1p" },
					1: { className: "x6s0dn4 x18l40ae x1c9tyrk xeusxvb x1pahc9y x1ertn4p x19rn6z x78zum5 xl56j7k xdd8jsf xvni27" }
				}[(_ === r("MediaDownloadStatusIconSize").Large) << 0], { children: c.jsx(r("MWXIconStrict.react"), {
					color: "white",
					icon: r("MWXIconExclamationMarkCircle"),
					isDecorative: !0,
					size: _ === r("MediaDownloadStatusIconSize").Large ? 24 : 12
				}) }))
			}));
		}, n[9] = w, n[10] = D, n[11] = _, n[12] = f, n[13] = C, n[14] = R, n[15] = O) : O = n[15];
		var B;
		n[16] !== x || n[17] !== A || n[18] !== F || n[19] !== O || n[20] !== $ ? (B = c.jsx(r("MWXAspectRatioContainer.react"), {
			height: x,
			maxHeight: A,
			maxWidth: F,
			width: $,
			children: O
		}), n[16] = x, n[17] = A, n[18] = F, n[19] = O, n[20] = $, n[21] = B) : B = n[21];
		var W = B, q;
		return n[22] !== W || n[23] !== E || n[24] !== k || n[25] !== S ? (q = S === !0 ? c.jsx(r("MWXTooltip.react"), {
			label: E,
			tooltip: c.jsxs(r("MWXText.react"), {
				color: "tooltip",
				type: "meta4",
				children: [E, k]
			}),
			children: W
		}) : W, n[22] = W, n[23] = E, n[24] = k, n[25] = S, n[26] = q) : q = n[26], q;
	}
	l.default = p;
}), 226);

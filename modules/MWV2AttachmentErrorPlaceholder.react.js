__d("MWV2AttachmentErrorPlaceholder.react", [
	"fbt",
	"MWXAspectRatioContainer.react",
	"MWXIconCautionTriangle",
	"MWXIconStrict.react",
	"MWXMessageBubbleCornerStyles.react",
	"MWXTooltip.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useCurrentDisplayMode"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = {
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
	function m(t) {
		var n = o("react-compiler-runtime").c(18), a = t.connectBottom, i = t.connectTop, l = t.detailedUserFacingErrorMessage, u = t.hasAppAttribution, m = t.height, p = t.outgoing, _ = t.width, f = t.xstyle, g = r("useCurrentDisplayMode")(), h = m != null ? m : 100, y = _ != null ? _ : 200, C = p === !0 ? "right" : "left", b = u === !0 ? "bottom" : "none", v;
		n[0] !== a || n[1] !== i || n[2] !== C || n[3] !== b ? (v = o("MWXMessageBubbleCornerStyles.react").getMWXBubbleCornerStyles({
			align: C,
			connectBottom: a,
			connectTop: i,
			flatten: b
		}), n[0] = a, n[1] = i, n[2] = C, n[3] = b, n[4] = v) : v = n[4];
		var S = v, R;
		n[5] !== l ? (R = l != null ? l : s._(
			/*BTDS*/
			""
		), n[5] = l, n[6] = R) : R = n[6];
		var L;
		n[7] !== S || n[8] !== g || n[9] !== f ? (L = function(n) {
			return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
				n,
				d.content,
				g === "dark" ? d.dark : d.light,
				S,
				f
			]), {
				"data-testid": void 0,
				children: c.jsx(r("MWXIconStrict.react"), {
					color: "primary",
					icon: r("MWXIconCautionTriangle"),
					isDecorative: !0,
					size: 20
				})
			}));
		}, n[7] = S, n[8] = g, n[9] = f, n[10] = L) : L = n[10];
		var E;
		n[11] !== h || n[12] !== L || n[13] !== y ? (E = c.jsx(r("MWXAspectRatioContainer.react"), {
			height: h,
			maxHeight: 200,
			maxWidth: 480,
			width: y,
			children: L
		}), n[11] = h, n[12] = L, n[13] = y, n[14] = E) : E = n[14];
		var k;
		return n[15] !== R || n[16] !== E ? (k = c.jsx(r("MWXTooltip.react"), {
			tooltip: R,
			children: E
		}), n[15] = R, n[16] = E, n[17] = k) : k = n[17], k;
	}
	l.default = m;
}), 226);

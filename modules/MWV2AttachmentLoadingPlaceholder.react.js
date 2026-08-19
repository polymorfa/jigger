__d("MWV2AttachmentLoadingPlaceholder.react", [
	"InteractionTracingMetrics",
	"MWXAspectRatioContainer.react",
	"MWXGlimmer.react",
	"MWXMessageBubbleCornerStyles.react",
	"gkx",
	"hero-tracing-placeholder",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useContext, d = u.useEffect, m = { glimmer: {
		display: "x1lliihq",
		height: "x5yr21d",
		width: "xh8yej3",
		$$css: !0
	} };
	function p(e) {
		var t = o("react-compiler-runtime").c(22), n = e.connectBottom, a = e.connectTop, i = e.descriptionForLogging, l = e.hasAppAttribution, u = e.hasCornerStyles, p = e.height, _ = e.maxHeight, f = e.maxWidth, g = e.mediaRenderQpl, h = e.outgoing, y = e.width, C = e.xstyle, b = u === void 0 ? !0 : u, v = _ === void 0 ? 200 : _, S = f === void 0 ? 480 : f, R = c(o("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext), L, E;
		if (t[0] !== i || t[1] !== p || t[2] !== R || t[3] !== g || t[4] !== y ? (L = function() {
			var e, t = r("gkx")("12935") ? (e = R.current) == null ? void 0 : e.interactionUUID : null, n = { string: { call_site: i } }, o = y != null && p != null ? "render-loading-placeholder" : "render-loading-placeholder-null-dimensions";
			return g == null || g.addPoint(o, n), t != null && r("InteractionTracingMetrics").addMarkerPoint(t, o, "AppTiming", void 0, { call_site: i }), (function() {
				g == null || g.addPoint("unmount-loading-placeholder", n), t != null && r("InteractionTracingMetrics").addMarkerPoint(t, "unmount-attachment-loading-placeholder", "AppTiming", void 0, { call_site: i });
			});
		}, E = [
			p,
			g,
			y,
			i,
			R
		], t[0] = i, t[1] = p, t[2] = R, t[3] = g, t[4] = y, t[5] = L, t[6] = E) : (L = t[5], E = t[6]), d(L, E), y == null || p == null) return null;
		var k = h === !0 ? "right" : "left", I = l === !0 ? "bottom" : "none", T;
		t[7] !== n || t[8] !== a || t[9] !== k || t[10] !== I ? (T = o("MWXMessageBubbleCornerStyles.react").getMWXBubbleCornerStyles({
			align: k,
			connectBottom: n,
			connectTop: a,
			flatten: I
		}), t[7] = n, t[8] = a, t[9] = k, t[10] = I, t[11] = T) : T = t[11];
		var D = T, x;
		t[12] !== D || t[13] !== b || t[14] !== C ? (x = function(t) {
			return s.jsx(r("MWXGlimmer.react"), {
				index: 1,
				xstyle: [
					t,
					m.glimmer,
					b === !0 && D,
					C
				]
			});
		}, t[12] = D, t[13] = b, t[14] = C, t[15] = x) : x = t[15];
		var $;
		return t[16] !== p || t[17] !== v || t[18] !== S || t[19] !== x || t[20] !== y ? ($ = s.jsx("div", {
			"data-testid": void 0,
			children: s.jsx(r("MWXAspectRatioContainer.react"), {
				height: p,
				maxHeight: v,
				maxWidth: S,
				width: y,
				children: x
			})
		}), t[16] = p, t[17] = v, t[18] = S, t[19] = x, t[20] = y, t[21] = $) : $ = t[21], $;
	}
	l.default = p;
}), 98);

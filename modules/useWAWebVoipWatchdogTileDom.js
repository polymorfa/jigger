__d("useWAWebVoipWatchdogTileDom", [
	"WAWebVoipVideoRendererRegistry",
	"WAWebVoipWatchdog",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useRef;
	function d(e) {
		var t = o("react-compiler-runtime").c(6), n = e.canvasRef, r = e.lid, a = e.popoutWindowEl, i = e.renderMode, l = c(0), s = c(0), d = c(0), m, p;
		t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i ? (m = function() {
			if (o("WAWebVoipWatchdog").isRendererInvariantWatchdogEnabled()) {
				var e = a != null ? a : window, t = n.current;
				if (t == null) {
					var u = {
						hasVideoElement: !1,
						renderMode: i,
						intersectionRatio: 0,
						boundingWidth: 0,
						boundingHeight: 0,
						lastVideoFramePaintMs: 0
					};
					return o("WAWebVoipWatchdog").rendererInvariantWatchdog.pushTileDom(r, u), (function() {
						o("WAWebVoipWatchdog").rendererInvariantWatchdog.pushTileDom(r, null);
					});
				}
				var c = function() {
					var e, t = {
						hasVideoElement: !0,
						renderMode: i,
						intersectionRatio: l.current,
						boundingWidth: s.current,
						boundingHeight: d.current,
						lastVideoFramePaintMs: (e = o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.getLastPaintTimestampMsForJid(r)) != null ? e : 0
					};
					o("WAWebVoipWatchdog").rendererInvariantWatchdog.pushTileDom(r, t);
				};
				c();
				var m = e.setInterval(c, 1e3), p = new e.IntersectionObserver(function(e) {
					for (var t of e) l.current = t.intersectionRatio;
				}, { threshold: [
					0,
					.25,
					.5,
					.75,
					1
				] });
				p.observe(t);
				var _ = new e.ResizeObserver(function(e) {
					for (var t of e) {
						var n = t.contentRect;
						s.current = n.width, d.current = n.height;
					}
				});
				return _.observe(t), (function() {
					e.clearInterval(m), p.disconnect(), _.disconnect(), o("WAWebVoipWatchdog").rendererInvariantWatchdog.pushTileDom(r, null);
				});
			}
		}, p = [
			r,
			n,
			a,
			i
		], t[0] = n, t[1] = r, t[2] = a, t[3] = i, t[4] = m, t[5] = p) : (m = t[4], p = t[5]), u(m, p);
	}
	l.default = d;
}), 98);

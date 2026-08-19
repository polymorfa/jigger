__d("useWAWebVoipCanvasLifecycle", [
	"WAWebVoipCanvasUtils",
	"WAWebVoipVideoRendererRegistry",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useEffect, d = s.useRef, m = s.useState;
	function p(e, t, n) {
		var r = t.isPortalMode, a = t.shouldSetCssDimensionsInPortalMode, i = a === void 0 ? !1 : a, l = t.useDoubleRAF, s = l === void 0 ? !1 : l, p = d(null), _ = m(!1), f = _[0], g = _[1], h = m(!1), y = h[0], C = h[1], b = d(n), v = u(function(t) {
			if (t) {
				e.current = t, g(!0);
				var n = function() {
					var e = 1280, n = 720, a = t.clientWidth || e, l = t.clientHeight || n, s = o("WAWebVoipCanvasUtils").computeCanvasBufferSize(a, l);
					t.width = s.width, t.height = s.height, r && i && (t.style.width = a + "px", t.style.height = l + "px"), o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.registerVideoCanvas(t, r);
					var u = b.current, c = u == null ? void 0 : u.jid;
					if (c != null && c !== "") {
						var d;
						o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.assignJidToCanvas({
							canvas: t,
							mirror: (d = u == null ? void 0 : u.mirror) != null ? d : !1,
							userJid: c
						});
					}
					C(!0);
				};
				r || !s ? n() : p.current = window.requestAnimationFrame(function() {
					p.current = window.requestAnimationFrame(function() {
						p.current = null, e.current === t && n();
					});
				});
			} else {
				var a = e.current;
				e.current = null, p.current != null && (window.cancelAnimationFrame(p.current), p.current = null), a && o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.unregisterVideoCanvas(a), g(!1), C(!1);
			}
		}, [
			e,
			r,
			s,
			i
		]);
		return c(function() {
			var t, r = e.current, a = n == null ? void 0 : n.jid, i = (t = n == null ? void 0 : n.mirror) != null ? t : !1;
			if (f && y && r && a != null && a !== "") return o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.assignJidToCanvas({
				canvas: r,
				mirror: i,
				userJid: a
			}), function() {
				o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.unassignCanvas(r);
			};
		}, [
			e,
			n == null ? void 0 : n.jid,
			n == null ? void 0 : n.mirror,
			f,
			y
		]), {
			canvasCallbackRef: v,
			isCanvasMounted: f,
			isCanvasRegistered: y
		};
	}
	l.default = p;
}), 98);

__d("WAWebDesktopSharerSlot.react", [
	"WAWebDesktopSharerContext.react",
	"react",
	"useWAWebWindowSize"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef;
	function p(e) {
		var t = e.inline, n = e.measureRef, a = e.onSessionReady, i = e.visible, l = i === void 0 ? !0 : i, u = m(null), p = m(null), _ = o("WAWebDesktopSharerContext.react").useDesktopSharerContext(), f = _.createSession, g = _.hideSession, h = _.updateSessionPosition, y = r("useWAWebWindowSize")(), C = y.height, b = y.width, v = c(function() {
			var e, t = (e = n == null ? void 0 : n.current) != null ? e : u.current;
			if (t == null) return null;
			var r = t.getBoundingClientRect(), o = r.height, a = r.left, i = r.top, l = r.width;
			return {
				top: i,
				left: a,
				width: l,
				height: o
			};
		}, [n]);
		return d(function() {
			if (p.current == null) {
				var e = v();
				if (e != null) {
					var n = f(e, {
						inline: t,
						onViewerReady: a
					});
					p.current = n;
				}
			}
		}, [
			t,
			a,
			f,
			v
		]), d(function() {
			var e = p.current;
			if (e != null) {
				if (l !== !0) {
					g(e);
					return;
				}
				var t = v();
				t != null && h(e, t);
			}
		}, [
			l,
			g,
			h,
			v
		]), d(function() {
			var e = p.current;
			if (!(e == null || l !== !0 || b <= 0 || C <= 0)) {
				var t = v();
				t != null && h(e, t);
			}
		}, [
			b,
			C,
			l,
			h,
			v
		]), s.jsx("div", {
			ref: u,
			"data-testid": "webtp-desktop-sharer-slot",
			className: "x5yr21d xh8yej3"
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);

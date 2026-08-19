__d("WAWebChatlistResizeHandle.react", [
	"fbt",
	"react",
	"stylex",
	"useHoverState"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useRef, p = d.useState, _ = 24, f = 8, g = {
		zIndex: "x1oy9qf3",
		pointerEvents: "x47corl",
		position: "x10l6tqk",
		width: "x1xc55vz",
		top: "x13vifvy",
		bottom: "x1ey2m1c",
		insetInlineEnd: "xqxgn94",
		left: "",
		right: "",
		background: "xudi1rl",
		$$css: !0
	}, h = { resizeIndicator: function(t) {
		return [g, { "--x-insetInlineEnd": (function(e) {
			return typeof e == "number" ? e + "px" : e != null ? e : void 0;
		})("calc(" + t + "px - " + f + "px)") }];
	} };
	function y(e) {
		var t = e.maxWidth, n = e.minWidth, o = e.onResize, a = e.onResizeEnd, i = e.onResizeReset, l = m(0), u = m(0), d = m(null), _ = m(!1), f = p(!1), g = f[0], h = f[1], y = p(0), b = y[0], v = y[1], S = r("useHoverState")(), R = S.isHovered, L = S.onMouseEnter, E = S.onMouseLeave, k = function(r) {
			var e = r - l.current;
			return Math.max(n, Math.min(t, u.current + e));
		}, I = function(t) {
			if (t.button === 0) {
				t.preventDefault(), _.current = !0, h(!0);
				var e = t.currentTarget;
				e.setPointerCapture(t.pointerId), l.current = t.clientX;
				var n = e.parentElement;
				n && (u.current = n.getBoundingClientRect().width);
			}
		}, T = function(t) {
			if (_.current) {
				var e = k(t.clientX);
				v(u.current - e), o == null || o(e);
			}
		}, D = function(t) {
			var e = t.currentTarget;
			e.hasPointerCapture(t.pointerId) && e.releasePointerCapture(t.pointerId);
			var n = k(t.clientX);
			a == null || a(n), _.current = !1, h(!1), v(0);
		}, x = function(t) {
			_.current && D(t);
		};
		return c.jsxs(c.Fragment, { children: [(g || R) && c.jsx(C, { offset: b }), c.jsx("button", {
			ref: d,
			onMouseEnter: L,
			onMouseLeave: E,
			onDoubleClick: i,
			className: "x10l6tqk xvy4d1p x13vifvy x1ey2m1c x15z6fc2 x7eptgl x1oy9qf3",
			onPointerDown: I,
			onPointerMove: T,
			onPointerUp: D,
			onPointerLeave: x,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			"data-testid": "chatlist-resize-handle"
		})] });
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(t) {
		var n = t.offset;
		return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.resizeIndicator(n)), { "data-testid": "chatlist-resize-indicator" }));
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = y;
}), 226);

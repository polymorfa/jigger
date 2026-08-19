__d("WAWebMediaEditorToolbarColorPickerPanel.react", [
	"WAWebMediaEditorToolbarColor.react",
	"WAWebMediaEditorToolbarColorPickerConsts",
	"WAWebMediaEditorUtilsColor",
	"WAWebMediaEditorUtilsGetCursorPositionFromColor",
	"react",
	"useWAWebThrottledCallback"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useRef, m = u.useState;
	function p(e) {
		var t, n = e.color, a = e.onChangeCanvasColor, i = e.onChangeSelectedColor, l = e.theme, u = d(null), p = m(!1), _ = p[0], f = p[1];
		c(function() {
			var e = u.current;
			if (e) {
				var t = e.getContext("2d"), n = t.createLinearGradient(0, 0, e.width, 0);
				n.addColorStop(0, "#ff0000"), n.addColorStop(1 / 6, "#ffff00"), n.addColorStop(1 / 6 * 2, "#00ff00"), n.addColorStop(1 / 6 * 3, "#00ffff"), n.addColorStop(1 / 6 * 4, "#0000ff"), n.addColorStop(1 / 6 * 5, "#ff00ff"), n.addColorStop(1, "#ff0000"), t.fillStyle = n, t.fillRect(0, 0, e.width, e.height), n = t.createLinearGradient(0, 0, 0, e.height), n.addColorStop(0, "rgba(255, 255, 255, 1)"), n.addColorStop(.5, "rgba(255, 255, 255, 0)"), n.addColorStop(1, "rgba(255, 255, 255, 0)"), t.fillStyle = n, t.fillRect(0, 0, e.width, e.height), n = t.createLinearGradient(0, 0, 0, e.height), n.addColorStop(0, "rgba(0, 0, 0, 0)"), n.addColorStop(.5, "rgba(0, 0, 0, 0)"), n.addColorStop(1, "rgba(0, 0, 0, 1)"), t.fillStyle = n, t.fillRect(0, 0, e.width, e.height);
			}
		}, []);
		var g = o("WAWebMediaEditorUtilsGetCursorPositionFromColor").getPositionFromColor(n), h = function(t) {
			var e = u.current;
			if (!e) return {
				x: 0,
				y: 0
			};
			var n = e.getBoundingClientRect(), r = t.clientX - n.left, a = t.clientY - n.top;
			return r > n.width && (r = n.width - .1), r < 0 && (r = 0), a > n.height && (a = n.height), a < 0 && (a = .1), r -= o("WAWebMediaEditorToolbarColorPickerConsts").CURSOR_SIZE / 2, a -= o("WAWebMediaEditorToolbarColorPickerConsts").CURSOR_SIZE / 2, {
				x: r,
				y: a
			};
		}, y = function(t) {
			var e = u.current;
			if (!e) return new (o("WAWebMediaEditorUtilsColor")).Color(0, 0, 0);
			var n = t.x + o("WAWebMediaEditorToolbarColorPickerConsts").CURSOR_SIZE / 2, r = t.y + o("WAWebMediaEditorToolbarColorPickerConsts").CURSOR_SIZE / 2, a = e.getContext("2d"), i = a.getImageData(n, r, 1, 1), l = i.data;
			return new (o("WAWebMediaEditorUtilsColor")).Color(l[0], l[1], l[2]);
		}, C = r("useWAWebThrottledCallback")(i, (t = o("WAWebMediaEditorToolbarColorPickerConsts")).THROTTLE_WAIT_TIME), b = function(t, n) {
			n != null && f(n);
			var e = h(t), r = e.x, o = e.y, i = y({
				x: r,
				y: o
			});
			C(i), a(i);
		}, v = function(t) {
			b(t, !0);
		}, S = function(t) {
			_ && (t.stopPropagation(), t.preventDefault(), b(t));
		}, R = function(t) {
			b(t, !1);
		};
		return s.jsxs(s.Fragment, { children: [s.jsx("canvas", babelHelpers.extends({
			width: t.CONTAINER_WIDTH,
			height: t.CANVAS_HEIGHT
		}, {
			0: { className: "x13t61ll x1kchd1x x9f619 xyri2b x18d9i69 x1c1uobl x1n2onr6 xm7lytj" },
			1: { className: "x9f619 xyri2b x18d9i69 x1c1uobl x1n2onr6 x1yinuae x1hmjwmn x41ahdt xr1pq3a x4k4xos xm7lytj" }
		}[(l === o("WAWebMediaEditorToolbarColor.react").Theme.Integrated) << 0], {
			ref: u,
			onMouseDown: v,
			onMouseMove: S,
			onMouseUp: R
		})), s.jsx("div", {
			className: "x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x192kdpm x2e1hkk x4o825q x1h4eksf x1xstdij x1hpb3w5 xyd612o x1pvccs7 x1l8gmyy x9f619 xt0e3qv x47corl x10l6tqk",
			style: {
				width: t.CURSOR_SIZE,
				height: t.CURSOR_SIZE,
				left: g.x,
				top: g.y,
				backgroundColor: n.toRgbaString()
			}
		})] });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);

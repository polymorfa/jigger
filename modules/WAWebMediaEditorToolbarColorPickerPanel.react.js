__d("WAWebMediaEditorToolbarColorPickerPanel.react", [
	"WAWebMediaEditorToolbarColor.react",
	"WAWebMediaEditorToolbarColorPickerConsts",
	"WAWebMediaEditorUtilsColor",
	"WAWebMediaEditorUtilsGetCursorPositionFromColor",
	"react",
	"react-compiler-runtime",
	"useWAWebThrottledCallback"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useRef, m = u.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(33), n = e.color, a = e.onChangeCanvasColor, i = e.onChangeSelectedColor, l = e.theme, u = d(null), p = m(!1), _ = p[0], f = p[1], g, h;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (g = function() {
			var e = u.current;
			if (e) {
				var t = e.getContext("2d"), n = t.createLinearGradient(0, 0, e.width, 0);
				n.addColorStop(0, "#ff0000"), n.addColorStop(.16666666666666666, "#ffff00"), n.addColorStop(.3333333333333333, "#00ff00"), n.addColorStop(.5, "#00ffff"), n.addColorStop(.6666666666666666, "#0000ff"), n.addColorStop(.8333333333333333, "#ff00ff"), n.addColorStop(1, "#ff0000"), t.fillStyle = n, t.fillRect(0, 0, e.width, e.height), n = t.createLinearGradient(0, 0, 0, e.height), n.addColorStop(0, "rgba(255, 255, 255, 1)"), n.addColorStop(.5, "rgba(255, 255, 255, 0)"), n.addColorStop(1, "rgba(255, 255, 255, 0)"), t.fillStyle = n, t.fillRect(0, 0, e.width, e.height), n = t.createLinearGradient(0, 0, 0, e.height), n.addColorStop(0, "rgba(0, 0, 0, 0)"), n.addColorStop(.5, "rgba(0, 0, 0, 0)"), n.addColorStop(1, "rgba(0, 0, 0, 1)"), t.fillStyle = n, t.fillRect(0, 0, e.width, e.height);
			}
		}, h = [], t[0] = g, t[1] = h) : (g = t[0], h = t[1]), c(g, h);
		var y;
		t[2] !== n ? (y = o("WAWebMediaEditorUtilsGetCursorPositionFromColor").getPositionFromColor(n), t[2] = n, t[3] = y) : y = t[3];
		var C = y, b;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (b = function(t) {
			var e = u.current;
			if (!e) return {
				x: 0,
				y: 0
			};
			var n = e.getBoundingClientRect(), r = t.clientX - n.left, a = t.clientY - n.top;
			return r > n.width && (r = n.width - .1), r < 0 && (r = 0), a > n.height && (a = n.height), a < 0 && (a = .1), r = r - o("WAWebMediaEditorToolbarColorPickerConsts").CURSOR_SIZE / 2, a = a - o("WAWebMediaEditorToolbarColorPickerConsts").CURSOR_SIZE / 2, {
				x: r,
				y: a
			};
		}, t[4] = b) : b = t[4];
		var v = b, S;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (S = function(t) {
			var e = u.current;
			if (!e) return new (o("WAWebMediaEditorUtilsColor")).Color(0, 0, 0);
			var n = t.x + o("WAWebMediaEditorToolbarColorPickerConsts").CURSOR_SIZE / 2, r = t.y + o("WAWebMediaEditorToolbarColorPickerConsts").CURSOR_SIZE / 2, a = e.getContext("2d"), i = a.getImageData(n, r, 1, 1), l = i.data;
			return new (o("WAWebMediaEditorUtilsColor")).Color(l[0], l[1], l[2]);
		}, t[5] = S) : S = t[5];
		var R = S, L = r("useWAWebThrottledCallback")(i, o("WAWebMediaEditorToolbarColorPickerConsts").THROTTLE_WAIT_TIME), E;
		t[6] !== a || t[7] !== L ? (E = function(t, n) {
			n != null && f(n);
			var e = v(t), r = e.x, o = e.y, i = R({
				x: r,
				y: o
			});
			L(i), a(i);
		}, t[6] = a, t[7] = L, t[8] = E) : E = t[8];
		var k = E, I;
		t[9] !== k ? (I = function(t) {
			k(t, !0);
		}, t[9] = k, t[10] = I) : I = t[10];
		var T = I, D;
		t[11] !== _ || t[12] !== k ? (D = function(t) {
			_ && (t.stopPropagation(), t.preventDefault(), k(t));
		}, t[11] = _, t[12] = k, t[13] = D) : D = t[13];
		var x = D, $;
		t[14] !== k ? ($ = function(t) {
			k(t, !1);
		}, t[14] = k, t[15] = $) : $ = t[15];
		var P = $, N;
		t[16] !== l ? (N = {
			0: { className: "x13t61ll x1kchd1x x9f619 xyri2b x18d9i69 x1c1uobl x1n2onr6 xm7lytj" },
			1: { className: "x9f619 xyri2b x18d9i69 x1c1uobl x1n2onr6 x1yinuae x1hmjwmn x41ahdt xr1pq3a x4k4xos xm7lytj" }
		}[(l === o("WAWebMediaEditorToolbarColor.react").Theme.Integrated) << 0], t[16] = l, t[17] = N) : N = t[17];
		var M;
		t[18] !== T || t[19] !== x || t[20] !== P || t[21] !== N ? (M = s.jsx("canvas", babelHelpers.extends({
			width: o("WAWebMediaEditorToolbarColorPickerConsts").CONTAINER_WIDTH,
			height: o("WAWebMediaEditorToolbarColorPickerConsts").CANVAS_HEIGHT
		}, N, {
			ref: u,
			onMouseDown: T,
			onMouseMove: x,
			onMouseUp: P
		})), t[18] = T, t[19] = x, t[20] = P, t[21] = N, t[22] = M) : M = t[22];
		var w;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (w = "x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x192kdpm x2e1hkk x4o825q x1h4eksf x1xstdij x1hpb3w5 xyd612o x1pvccs7 x1l8gmyy x9f619 xt0e3qv x47corl x10l6tqk", t[23] = w) : w = t[23];
		var A = C.x, F = C.y, O;
		t[24] !== n ? (O = n.toRgbaString(), t[24] = n, t[25] = O) : O = t[25];
		var B;
		t[26] !== C.x || t[27] !== C.y || t[28] !== O ? (B = s.jsx("div", {
			className: w,
			style: {
				width: o("WAWebMediaEditorToolbarColorPickerConsts").CURSOR_SIZE,
				height: o("WAWebMediaEditorToolbarColorPickerConsts").CURSOR_SIZE,
				left: A,
				top: F,
				backgroundColor: O
			}
		}), t[26] = C.x, t[27] = C.y, t[28] = O, t[29] = B) : B = t[29];
		var W;
		return t[30] !== M || t[31] !== B ? (W = s.jsxs(s.Fragment, { children: [M, B] }), t[30] = M, t[31] = B, t[32] = W) : W = t[32], W;
	}
	l.default = p;
}), 98);

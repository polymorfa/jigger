__d("WAWebPipFullscreenToggleButton.react", [
	"fbt",
	"WAWebSvgButton.react",
	"WAWebVideoExitFullscreenIcon.react",
	"WAWebVideoFullscreenIcon.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		button: {
			position: "x10l6tqk",
			top: "xfr5jun",
			insetInlineStart: "x1r4y97",
			left: null,
			right: null,
			zIndex: "x11uqc5h",
			cursor: "x1ypdohk",
			$$css: !0
		},
		static: {
			position: "x1uhb9sk",
			$$css: !0
		},
		fullscreen: {
			top: "xjqd8mg",
			insetInlineStart: "xfwv6vp",
			left: null,
			right: null,
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(12), n = e.iconSize, a = e.isFullscreenMode, i = e.isStatic, l = e.onClick, d = e.ref, m = a ? o("WAWebVideoExitFullscreenIcon.react").VideoExitFullscreenIcon : o("WAWebVideoFullscreenIcon.react").VideoFullscreenIcon, p;
		t[0] !== a ? (p = a ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[0] = a, t[1] = p) : p = t[1];
		var _ = p, f = a && c.fullscreen, g = i && c.static, h;
		t[2] !== f || t[3] !== g ? (h = [
			c.button,
			f,
			g
		], t[2] = f, t[3] = g, t[4] = h) : h = t[4];
		var y;
		return t[5] !== m || t[6] !== n || t[7] !== _ || t[8] !== l || t[9] !== d || t[10] !== h ? (y = u.jsx(r("WAWebSvgButton.react"), {
			tabIndex: 0,
			ref: d,
			xstyle: h,
			onClick: l,
			"aria-label": _,
			Icon: m,
			displayInline: !0,
			width: n,
			height: n
		}), t[5] = m, t[6] = n, t[7] = _, t[8] = l, t[9] = d, t[10] = h, t[11] = y) : y = t[11], y;
	}
	l.default = d;
}), 226);

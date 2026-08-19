__d("WAWebPipFullscreenToggleButton.react", [
	"fbt",
	"WAWebSvgButton.react",
	"WAWebVideoExitFullscreenIcon.react",
	"WAWebVideoFullscreenIcon.react",
	"react"
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
		var t = e.iconSize, n = e.isFullscreenMode, a = e.isStatic, i = e.onClick, l = e.ref, d = n ? o("WAWebVideoExitFullscreenIcon.react").VideoExitFullscreenIcon : o("WAWebVideoFullscreenIcon.react").VideoFullscreenIcon, m = n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WAWebSvgButton.react"), {
			tabIndex: 0,
			ref: l,
			xstyle: [
				c.button,
				n && c.fullscreen,
				a && c.static
			],
			onClick: i,
			"aria-label": m,
			Icon: d,
			displayInline: !0,
			width: t,
			height: t
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

__d("WAWebPipCtwaSourceButton.react", [
	"WAWebLogoFacebookIcon.react",
	"WAWebLogoInstagramIcon.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = 34;
	function c(e) {
		var t = e.iconSize, n = e.isFullscreenMode, r = e.isInstagram, a = e.onClick, i = t != null ? t : n ? u : void 0, l = r ? s.jsx(o("WAWebLogoInstagramIcon.react").LogoInstagramIcon, {
			width: i,
			height: i
		}) : s.jsx(o("WAWebLogoFacebookIcon.react").LogoFacebookIcon, {
			width: i,
			height: i
		});
		return s.jsx("div", babelHelpers.extends({}, {
			0: { className: "xconrdv x1ypdohk x10l6tqk x12em2mw x11uqc5h" },
			1: { className: "x1ypdohk x10l6tqk x11uqc5h xh07jou x1gkdisy" }
		}[!!n << 0], {
			onClick: a,
			children: l
		}));
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);

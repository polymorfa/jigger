__d("WAWebPipCtwaSourceButton.react", [
	"WAWebLogoFacebookIcon.react",
	"WAWebLogoInstagramIcon.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = 34;
	function c(e) {
		var t = o("react-compiler-runtime").c(9), n = e.iconSize, r = e.isFullscreenMode, a = e.isInstagram, i = e.onClick, l = n != null ? n : r ? u : void 0, c;
		t[0] !== a || t[1] !== l ? (c = a ? s.jsx(o("WAWebLogoInstagramIcon.react").LogoInstagramIcon, {
			width: l,
			height: l
		}) : s.jsx(o("WAWebLogoFacebookIcon.react").LogoFacebookIcon, {
			width: l,
			height: l
		}), t[0] = a, t[1] = l, t[2] = c) : c = t[2];
		var d = c, m;
		t[3] !== r ? (m = {
			0: { className: "xconrdv x1ypdohk x10l6tqk x12em2mw x11uqc5h" },
			1: { className: "x1ypdohk x10l6tqk x11uqc5h xh07jou x1gkdisy" }
		}[!!r << 0], t[3] = r, t[4] = m) : m = t[4];
		var p;
		return t[5] !== d || t[6] !== i || t[7] !== m ? (p = s.jsx("div", babelHelpers.extends({}, m, {
			onClick: i,
			children: d
		})), t[5] = d, t[6] = i, t[7] = m, t[8] = p) : p = t[8], p;
	}
	l.default = c;
}), 98);

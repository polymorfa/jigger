__d("WAWebConversationBackground.react", [
	"WAWebSolidColorPalette",
	"WAWebThemeContext",
	"WAWebWallpaper",
	"bx",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useContext, c = r("bx").getURL(r("bx")("89515")), d = "540px 960px", m = "412.5px 749.25px", p = "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 2dppx)", _ = window.matchMedia(p).matches;
	function f(e) {
		var t = o("react-compiler-runtime").c(7), n = e.showDoodle, r = e.wallpaper, a = u(o("WAWebThemeContext").ThemeContext), i = a.theme;
		if (n && o("WAWebWallpaper").colorExistsInTheme(r, i)) {
			var l;
			if (t[0] !== i || t[1] !== r) {
				var p = o("WAWebSolidColorPalette").isSolidColor(r) && !o("WAWebSolidColorPalette").isDefaultSolidColor(r), f = p ? o("WAWebSolidColorPalette").getSolidColorDoodleOpacity(r, i) : void 0, g = "url(\"" + c + "\")", h = _ ? m : d, y;
				t[3] !== f ? (y = f != null ? { opacity: f } : void 0, t[3] = f, t[4] = y) : y = t[4];
				var C;
				t[5] !== y ? (C = babelHelpers.extends({
					WebkitMaskImage: g,
					maskImage: g,
					WebkitMaskRepeat: "repeat",
					maskRepeat: "repeat",
					WebkitMaskMode: "alpha",
					maskMode: "alpha",
					WebkitMaskSize: h,
					maskSize: h
				}, y), t[5] = y, t[6] = C) : C = t[6];
				var b = C, v = "conversation-background-" + r;
				l = s.jsx("div", {
					className: {
						0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1fast2d x197sbye",
						1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x197sbye x12peec7"
					}[!!p << 0],
					style: b,
					"data-testid": v
				}), t[0] = i, t[1] = r, t[2] = l;
			} else l = t[2];
			return l;
		}
		return null;
	}
	l.default = f;
}), 98);

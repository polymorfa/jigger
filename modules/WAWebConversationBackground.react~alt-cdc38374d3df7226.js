__d("WAWebConversationBackground.react", [
	"WAWebSolidColorPalette",
	"WAWebThemeContext",
	"WAWebWallpaper",
	"bx",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useContext, c = r("bx").getURL(r("bx")("89515")), d = "540px 960px", m = "412.5px 749.25px", p = "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 2dppx)", _ = window.matchMedia(p).matches;
	function f(e) {
		var t = e.showDoodle, n = e.wallpaper, r = u(o("WAWebThemeContext").ThemeContext), a = r.theme;
		if (t && o("WAWebWallpaper").colorExistsInTheme(n, a)) {
			var i = o("WAWebSolidColorPalette").isSolidColor(n) && !o("WAWebSolidColorPalette").isDefaultSolidColor(n), l = i ? o("WAWebSolidColorPalette").getSolidColorDoodleOpacity(n, a) : void 0, p = "url(\"" + c + "\")", f = _ ? m : d, g = babelHelpers.extends({
				WebkitMaskImage: p,
				maskImage: p,
				WebkitMaskRepeat: "repeat",
				maskRepeat: "repeat",
				WebkitMaskMode: "alpha",
				maskMode: "alpha",
				WebkitMaskSize: f,
				maskSize: f
			}, l != null ? { opacity: l } : void 0), h = "conversation-background-" + n;
			return s.jsx("div", {
				className: {
					0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1fast2d x197sbye",
					1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x197sbye x12peec7"
				}[!!i << 0],
				style: g,
				"data-testid": h
			});
		}
		return null;
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);

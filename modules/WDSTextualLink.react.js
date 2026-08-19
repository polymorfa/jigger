__d("WDSTextualLink.react", [
	"BaseLinkV2.react",
	"WDSFontTokenStyles",
	"getPlatformByGK",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"children",
		"data-tab",
		"download",
		"href",
		"onBlur",
		"onClick",
		"onFocus",
		"onKeyDown",
		"platform",
		"robotoPropValue",
		"testid",
		"textConfig"
	], s, u, c = u || (u = o("react")), d = {
		link: {
			outline: "x1a2a7pz",
			cursor: "x1ypdohk",
			color: "x1ph7ams x17f7hit",
			fontWeight: "xuv8nkb",
			textDecoration: "x1hl2dhg xt0b8zv x1eo1aoc xbvygy2 x1wp9yj1 xv854yx",
			backgroundColor: "x1k74hu9 xp30eni",
			textUnderlineOffset: "xrys4gj xhmieyt",
			$$css: !0
		},
		buttonLink: {
			fontFamily: "xjb2p0i",
			fontSize: "x1qlqyl8",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			background: "x11g6tue",
			$$css: !0
		}
	};
	function m(t) {
		var n = t.children, a = t["data-tab"], i = t.download, l = t.href, u = t.onBlur, m = t.onClick, p = t.onFocus, _ = t.onKeyDown, f = t.platform, g = f === void 0 ? o("getPlatformByGK").WDS_PLATFORM : f, h = t.robotoPropValue, y = h === void 0 ? 0 : h, C = t.testid, b = t.textConfig, v = babelHelpers.objectWithoutPropertiesLoose(t, e), S = l != null && l !== "" && l !== "#", R = g === "windowsWeb" || g === "macWeb";
		(y === 1 && g === "windowsWeb" || y === 2 && g === "macWeb" || y === 3) && (R = !0);
		var L = g === "iOS" ? o("WDSFontTokenStyles").WDSFontTokenStylesiOS : g === "android" ? o("WDSFontTokenStyles").WDSFontTokenStylesAndroid : g === "macWeb" && R ? o("WDSFontTokenStyles").WDSFontTokenStylesMacRoboto : g === "macWeb" || g === "windowsWeb" ? o("WDSFontTokenStyles").WDSFontTokenStyles : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + g);
		})(), E = b === "Body1" || b === "Body1Emphasized" ? L.Body1Emphasized : b === "Body2" || b === "Body2Emphasized" ? L.Body2Emphasized : b === "Body3" || b === "Body3Emphasized" ? L.Body3Emphasized : b === "Headline1" ? L.Headline1 : b === "Headline2" ? L.Headline2 : b === "LargeTitle1" ? L.LargeTitle1 : b === "LargeTitle2" ? L.LargeTitle2 : void 0;
		if (S) {
			var k = m;
			return c.jsx(r("BaseLinkV2.react"), babelHelpers.extends({
				href: l,
				onClick: k,
				variant: { xstyleConfig: { link: [d.link, E] } },
				target: "_blank",
				rel: "noopener noreferrer",
				onFocusOut: u,
				onFocusIn: p,
				onFocus: p,
				dataTab: a,
				testid: void 0,
				download: i
			}, v, { children: n }));
		}
		return c.jsx("button", babelHelpers.extends({
			"data-tab": a,
			"data-testid": void 0,
			type: "button",
			onClick: m,
			onKeyDown: _,
			onBlur: u,
			onFocus: p
		}, (s || (s = r("stylex"))).props(d.buttonLink, d.link, E), v, { children: n }));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);

__d("WAWebMsgPreview.react", [
	"WAWebChatThemeValue",
	"WAWebConversationBackground.react",
	"WAWebThemeContext",
	"WAWebWallpaper",
	"react",
	"stylex",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useImperativeHandle, m = c.useRef, p = {
		container: {
			maxHeight: "x8xanyk",
			overflowX: "x6ikm8r",
			overflowY: "x1odjw0f",
			$$css: !0
		},
		body: {
			position: "x1n2onr6",
			paddingTop: "x1h678fw",
			paddingInlineEnd: "xyo0t3i",
			paddingBottom: "xv6tirj",
			paddingInlineStart: "xdylf7x",
			backgroundColor: "x1q80dvb",
			transitionProperty: "x15406qy",
			transitionDuration: "x1d8287x",
			transitionTimingFunction: "xwji4o3",
			$$css: !0
		},
		bodyBackgroundWallpaper: function(t) {
			return [{
				backgroundColor: t != null ? "xl8spv7" : t,
				$$css: !0
			}, { "--x-backgroundColor": t != null ? t : void 0 }];
		},
		bodyRefreshed: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		},
		marginBottom20: {
			marginBottom: "xdqhqc9",
			$$css: !0
		},
		paddingHoriz20: {
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	};
	function _(t) {
		var n = t.bodyXstyle, a = t.chatPreference, i = t.children, l = t.containerXstyle, s = t.ref, c = m(null), _ = o("useWAWebModelValues").useModelValues(a, ["wallpaperValue"]), f = _.wallpaperValue, g = o("WAWebThemeContext").useIsDarkTheme();
		d(s, function() {
			return { getContainer: function() {
				return c.current;
			} };
		});
		var h = o("WAWebChatThemeValue").wallpaperBackgroundFromValue(f, g ? "dark" : "light"), y = h.showDoodle, C = h.wallpaper, b;
		C !== o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER && (b = p.bodyBackgroundWallpaper(C));
		var v = [p.container, l], S = [p.body, n];
		return v.push(p.paddingHoriz20, p.marginBottom20), S.push(p.bodyRefreshed), u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(v), {
			ref: c,
			children: u.jsxs("div", babelHelpers.extends({}, e.props(S, b), { children: [u.jsx(r("WAWebConversationBackground.react"), {
				wallpaper: C,
				showDoodle: y
			}), i] }))
		}));
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);

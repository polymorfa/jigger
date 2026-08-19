__d("WAWebMsgPreview.react", [
	"WAWebChatThemeValue",
	"WAWebConversationBackground.react",
	"WAWebThemeContext",
	"WAWebWallpaper",
	"react",
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(22), a = t.bodyXstyle, i = t.chatPreference, l = t.children, s = t.containerXstyle, c = t.ref, _ = m(null), f;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (f = ["wallpaperValue"], n[0] = f) : f = n[0];
		var g = o("useWAWebModelValues").useModelValues(i, f), h = g.wallpaperValue, y = o("WAWebThemeContext").useIsDarkTheme(), C;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (C = function() {
			return { getContainer: function() {
				return _.current;
			} };
		}, n[1] = C) : C = n[1], d(c, C);
		var b, v, S, R, L;
		if (n[2] !== a || n[3] !== s || n[4] !== y || n[5] !== h) {
			var E = o("WAWebChatThemeValue").wallpaperBackgroundFromValue(h, y ? "dark" : "light");
			b = E.showDoodle, L = E.wallpaper;
			var k;
			L !== o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER && (k = p.bodyBackgroundWallpaper(L));
			var I = [p.container, s], T = [p.body, a];
			I.push(p.paddingHoriz20, p.marginBottom20), T.push(p.bodyRefreshed), S = (e || (e = r("stylex"))).props(I), R = _, v = e.props(T, k), n[2] = a, n[3] = s, n[4] = y, n[5] = h, n[6] = b, n[7] = v, n[8] = S, n[9] = R, n[10] = L;
		} else b = n[6], v = n[7], S = n[8], R = n[9], L = n[10];
		var D;
		n[11] !== b || n[12] !== L ? (D = u.jsx(r("WAWebConversationBackground.react"), {
			wallpaper: L,
			showDoodle: b
		}), n[11] = b, n[12] = L, n[13] = D) : D = n[13];
		var x;
		n[14] !== l || n[15] !== v || n[16] !== D ? (x = u.jsxs("div", babelHelpers.extends({}, v, { children: [D, l] })), n[14] = l, n[15] = v, n[16] = D, n[17] = x) : x = n[17];
		var $;
		return n[18] !== S || n[19] !== R || n[20] !== x ? ($ = u.jsx("div", babelHelpers.extends({}, S, {
			ref: R,
			children: x
		})), n[18] = S, n[19] = R, n[20] = x, n[21] = $) : $ = n[21], $;
	}
	l.default = _;
}), 98);

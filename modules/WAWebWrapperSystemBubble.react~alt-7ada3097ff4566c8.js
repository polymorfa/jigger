__d("WAWebWrapperSystemBubble.react", [
	"WAWebABProps",
	"WAWebClassnames",
	"WAWebKeyboardListHotKeys.react",
	"WAWebThemeContext",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u, c = u || (u = o("react")), d = {
		msg: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			paddingInlineEnd: "x141l45o",
			paddingInlineStart: "x1h3r9g6",
			userSelect: "x1hx0egp",
			$$css: !0
		},
		msgSystem: {
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		sticky: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		center: {
			height: "x5yr21d",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		msgBottomPadding: {
			paddingBottom: "xscbp6u",
			$$css: !0
		},
		groupHistoryBackground: {
			position: "x1n2onr6",
			"::before_content": "x1cpjm7i",
			"::before_position": "x1hmns74",
			"::before_top": "x1y3wzot",
			"::before_bottom": "xhq5o37",
			"::before_insetInlineStart": "xfbisj7",
			"::before_left": null,
			"::before_right": null,
			"::before_transform": "xnyzbwf",
			"::before_width": "xkeh78v",
			"::before_zIndex": "xy5mcqj",
			$$css: !0
		},
		groupHistoryBackgroundLight: {
			"::before_backgroundColor": "xd3jkiw",
			$$css: !0
		},
		groupHistoryBackgroundDark: {
			"::before_backgroundColor": "x5cow8b",
			$$css: !0
		}
	};
	function m(t) {
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = o("WAWebThemeContext").useIsDarkTheme(), u = null;
		return i.theme === "center" ? u = d.center : i.theme === "sticky" && (u = d.sticky), c.jsx("div", {
			"data-testid": i.testid,
			className: o("WAWebClassnames").classnamesConvertMeToStylexPlease((n = {}, n[o("WAWebKeyboardListHotKeys.react").LIST_FOCUSABLE_ITEM_CLASS_NAME] = i.isFocusable, n), (s || (s = r("stylex")))(d.msg, d.msgSystem, d.msgBottomPadding, u, i.groupHistoryBackground === !0 && d.groupHistoryBackground, i.groupHistoryBackground === !0 && (l ? d.groupHistoryBackgroundDark : d.groupHistoryBackgroundLight), i.xstyle)),
			tabIndex: -1,
			ref: a,
			children: c.jsx("div", babelHelpers.extends({}, {
				0: { className: "x1n2onr6 x9f619 x1rg5ohu x1okw0bk x193iq5w x1tiyuxx x1nbhmlj x1iw51ew xde1mab xhslqc4 x2b8uid x1iyt1tq xrxyp3c xv0oops x1isl5vh xn8zj9a x1d403nt x12lqup9 x17fgdl5" },
				4: { className: "x1n2onr6 x9f619 x1rg5ohu x1okw0bk x193iq5w x1tiyuxx x1nbhmlj x1iw51ew xde1mab xhslqc4 x2b8uid x1iyt1tq xrxyp3c xv0oops x1isl5vh xn8zj9a x1d403nt x12lqup9 x19v9tvf" },
				2: { className: "x1n2onr6 x9f619 x1rg5ohu x1okw0bk x193iq5w x1tiyuxx x1nbhmlj x1iw51ew xde1mab xhslqc4 x2b8uid x1iyt1tq xrxyp3c xv0oops x1isl5vh xn8zj9a x1d403nt x12lqup9 x17fgdl5 xlshs6z" },
				6: { className: "x1n2onr6 x9f619 x1rg5ohu x1okw0bk x193iq5w x1tiyuxx x1nbhmlj x1iw51ew xde1mab xhslqc4 x2b8uid x1iyt1tq xrxyp3c xv0oops x1isl5vh xn8zj9a x1d403nt x12lqup9 x19v9tvf xlshs6z" },
				1: { className: "x1n2onr6 x9f619 x1rg5ohu x1okw0bk x193iq5w xhslqc4 x2b8uid x1iyt1tq xrxyp3c xv0oops x1isl5vh xn8zj9a x1d403nt x12lqup9 x17fgdl5 x889kno x2vl965 x1a8lsjc xe2zdcy" },
				5: { className: "x1n2onr6 x9f619 x1rg5ohu x1okw0bk x193iq5w xhslqc4 x2b8uid x1iyt1tq xrxyp3c xv0oops x1isl5vh xn8zj9a x1d403nt x12lqup9 x19v9tvf x889kno x2vl965 x1a8lsjc xe2zdcy" },
				3: { className: "x1n2onr6 x9f619 x1rg5ohu x1okw0bk x193iq5w xhslqc4 x2b8uid x1iyt1tq xrxyp3c xv0oops x1isl5vh xn8zj9a x1d403nt x12lqup9 x17fgdl5 xlshs6z x889kno x2vl965 x1a8lsjc xe2zdcy" },
				7: { className: "x1n2onr6 x9f619 x1rg5ohu x1okw0bk x193iq5w xhslqc4 x2b8uid x1iyt1tq xrxyp3c xv0oops x1isl5vh xn8zj9a x1d403nt x12lqup9 x19v9tvf xlshs6z x889kno x2vl965 x1a8lsjc xe2zdcy" }
			}[!!o("WAWebABProps").getABPropConfigValue("wa_web_highlight_me_mention") << 2 | (i.hidden === !0) << 1 | (i.theme === "center") << 0], { children: i.children }))
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);

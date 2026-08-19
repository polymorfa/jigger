__d("WAWebDrawerBlock.react", [
	"WAWebStylesEnv",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useMergeRefs",
	"useWAWebFocusState",
	"useWAWebStaticButtonA11y"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = {
		container: {
			paddingInlineStart: "x162tt16",
			$$css: !0
		},
		containerSeparatorBorder: {
			borderTopWidth: "x178xt8z x1g31smg",
			borderTopStyle: "x13fuv20 x1d9v4yf",
			borderTopColor: "xx42vgk",
			$$css: !0
		},
		block: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			height: "xng8ra",
			paddingInlineEnd: "x5zjp28",
			$$css: !0
		},
		blockMultiline: {
			height: "xt7dq6l",
			$$css: !0
		},
		main: {
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			flexBasis: "xdl72j9",
			marginTop: "x1rdy4ex",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		mainMultiline: {
			paddingTop: "x134lwj9",
			paddingBottom: "x1i2zvha",
			whiteSpace: "xeaf4i8",
			$$css: !0
		},
		mainMultilineRefreshed: {
			whiteSpace: "xeaf4i8",
			$$css: !0
		},
		mainMac: {
			marginTop: "xdj266r",
			$$css: !0
		},
		mainRestrictSpacing: {
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		active: {
			backgroundColor: "x4wrhlh",
			$$css: !0
		}
	};
	function d(t) {
		var n = t.ariaLabel, a = t.blockXstyle, i = t.children, l = t.focusable, s = t.isRefresh, d = s === void 0 ? !1 : s, m = t.multiline, p = t.onClick, _ = t.restrictSpacing, f = t.separator, g = t.side, h = t.tabOrder, y = t.testid, C = t.xstyle, b = r("useWAWebStaticButtonA11y")(p), v = b[0], S = b[1], R = r("useWAWebFocusState")(), L = R[0], E = R[1], k = r("useMergeRefs")(v, L), I = g != null ? u.jsx("div", {
			className: "x1c4vz4f x2lah0s xdl72j9 x1bc76pt",
			children: g
		}) : null, T = f != null ? f : !0, D = babelHelpers.extends({}, S, {
			onClick: p,
			role: p ? "button" : null,
			tabIndex: p || l === !0 ? 0 : -1
		}), x = y != null ? y : T ? "container_with_separator" : "container";
		return u.jsx("div", babelHelpers.extends({ "data-tab": h }, D, {
			"aria-label": n,
			ref: k
		}, (e || (e = r("stylex"))).props(c.container, C, T && c.containerSeparatorBorder, E && c.active), {
			"data-testid": x,
			children: u.jsxs("div", babelHelpers.extends({}, e.props(c.block, a, m && c.blockMultiline), { children: [u.jsx("div", babelHelpers.extends({}, e.props(c.main, m && (d ? [c.mainMultilineRefreshed, o("WDSPaddings.stylex").wdsPaddings.padding0] : c.mainMultiline), _ && c.mainRestrictSpacing, o("WAWebStylesEnv").isOSMac && c.mainMac), { children: i })), I] }))
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

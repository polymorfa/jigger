__d("WAWebDrawerBlock.react", [
	"WAWebStylesEnv",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(33), a = t.ariaLabel, i = t.blockXstyle, l = t.children, s = t.focusable, d = t.isRefresh, m = t.multiline, p = t.onClick, _ = t.restrictSpacing, f = t.separator, g = t.side, h = t.tabOrder, y = t.testid, C = t.xstyle, b = d === void 0 ? !1 : d, v = r("useWAWebStaticButtonA11y")(p), S = v[0], R = v[1], L = r("useWAWebFocusState")(), E = L[0], k = L[1], I = r("useMergeRefs")(S, E), T;
		n[0] !== g ? (T = g != null ? u.jsx("div", {
			className: "x1c4vz4f x2lah0s xdl72j9 x1bc76pt",
			children: g
		}) : null, n[0] = g, n[1] = T) : T = n[1];
		var D = T, x = f != null ? f : !0, $ = p ? "button" : null, P = p || s === !0 ? 0 : -1, N;
		n[2] !== R || n[3] !== p || n[4] !== $ || n[5] !== P ? (N = babelHelpers.extends({}, R, {
			onClick: p,
			role: $,
			tabIndex: P
		}), n[2] = R, n[3] = p, n[4] = $, n[5] = P, n[6] = N) : N = n[6];
		var M = N, w = y != null ? y : x ? "container_with_separator" : "container", A;
		n[7] !== k || n[8] !== x || n[9] !== C ? (A = (e || (e = r("stylex"))).props(c.container, C, x && c.containerSeparatorBorder, k && c.active), n[7] = k, n[8] = x, n[9] = C, n[10] = A) : A = n[10];
		var F;
		n[11] !== i || n[12] !== m ? (F = (e || (e = r("stylex"))).props(c.block, i, m && c.blockMultiline), n[11] = i, n[12] = m, n[13] = F) : F = n[13];
		var O;
		n[14] !== b || n[15] !== m || n[16] !== _ ? (O = (e || (e = r("stylex"))).props(c.main, m && (b ? [c.mainMultilineRefreshed, o("WDSPaddings.stylex").wdsPaddings.padding0] : c.mainMultiline), _ && c.mainRestrictSpacing, o("WAWebStylesEnv").isOSMac && c.mainMac), n[14] = b, n[15] = m, n[16] = _, n[17] = O) : O = n[17];
		var B;
		n[18] !== l || n[19] !== O ? (B = u.jsx("div", babelHelpers.extends({}, O, { children: l })), n[18] = l, n[19] = O, n[20] = B) : B = n[20];
		var W;
		n[21] !== D || n[22] !== F || n[23] !== B ? (W = u.jsxs("div", babelHelpers.extends({}, F, { children: [B, D] })), n[21] = D, n[22] = F, n[23] = B, n[24] = W) : W = n[24];
		var q;
		return n[25] !== a || n[26] !== M || n[27] !== I || n[28] !== W || n[29] !== A || n[30] !== h || n[31] !== w ? (q = u.jsx("div", babelHelpers.extends({ "data-tab": h }, M, {
			"aria-label": a,
			ref: I
		}, A, {
			"data-testid": w,
			children: W
		})), n[25] = a, n[26] = M, n[27] = I, n[28] = W, n[29] = A, n[30] = h, n[31] = w, n[32] = q) : q = n[32], q;
	}
	l.default = d;
}), 98);

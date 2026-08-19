__d("WAWebDrawerBody.react", [
	"WAWebFlatListContainer.react",
	"WAWebThemeContext",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s = [
		"ariaLabel",
		"ariaRole",
		"backgroundColor",
		"children",
		"flatListControllers",
		"isRefresh",
		"overflow",
		"testid",
		"theme",
		"xstyle"
	], u, c, d = c || (c = o("react")), m = {
		container: {
			position: "x1n2onr6",
			zIndex: "xupqr0c",
			display: "x78zum5",
			flexBasis: "x1r8uery",
			flexGrow: "x1iyjqo2",
			flexDirection: "xdt5ytf",
			overflowX: "x6ikm8r",
			overflowY: "x1odjw0f",
			opacity: "x1hc1fzr",
			$$css: !0
		},
		noscroll: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		centerItem: {
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		padding: {
			marginTop: "x1anpbxc",
			marginBottom: "xyorhqc",
			$$css: !0
		},
		centerColumn: {
			width: "x1l2rt3b",
			paddingTop: "x13crsa5",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x1rxj1xn",
			paddingInlineStart: "x1c1uobl",
			marginTop: "xdj266r",
			marginInlineEnd: "x11t971q",
			marginBottom: "xat24cr",
			marginInlineStart: "xvc5jky",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		darkMode: {
			"::-webkit-scrollbar-track_backgroundColor": "x1anedsm",
			$$css: !0
		},
		lightScrollStyles: {
			scrollbarColor: "x15ebywn",
			$$css: !0
		},
		darkScrollStyles: {
			scrollbarColor: "x9w6j0p",
			$$css: !0
		}
	}, p = { default: {
		backgroundColor: "x1280gxy",
		$$css: !0
	} }, _ = { default: {
		backgroundColor: "x1280gxy",
		$$css: !0
	} };
	function f(t) {
		var n = o("react-compiler-runtime").c(36), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = o("WAWebThemeContext").useIsDarkTheme(), c, f, g, h, y, C, b, v, S, R, L;
		if (n[3] !== a) {
			var E = a;
			c = E.ariaLabel, f = E.ariaRole, g = E.backgroundColor, h = E.children, y = E.flatListControllers, C = E.isRefresh, v = E.overflow, S = E.testid, R = E.theme, L = E.xstyle, b = babelHelpers.objectWithoutPropertiesLoose(E, s), n[3] = a, n[4] = c, n[5] = f, n[6] = g, n[7] = h, n[8] = y, n[9] = C, n[10] = b, n[11] = v, n[12] = S, n[13] = R, n[14] = L;
		} else c = n[4], f = n[5], g = n[6], h = n[7], y = n[8], C = n[9], b = n[10], v = n[11], S = n[12], R = n[13], L = n[14];
		var k;
		n[15] !== g || n[16] !== l || n[17] !== C || n[18] !== v || n[19] !== R || n[20] !== L ? (k = (u || (u = r("stylex")))([
			m.container,
			v === "hidden" && m.noscroll,
			R === "center-content" && m.centerItem,
			R === "padding" && m.padding,
			R === "center-column" && m.centerColumn,
			R === "custom-scroll" && !l && m.lightScrollStyles,
			R === "custom-scroll" && l && m.darkScrollStyles,
			l && m.darkMode,
			g != null && (C === !0 ? _[g] : p[g]),
			L
		]), n[15] = g, n[16] = l, n[17] = C, n[18] = v, n[19] = R, n[20] = L, n[21] = k) : k = n[21];
		var I = k;
		if (y && y.length > 0) {
			var T;
			return n[22] !== h || n[23] !== I || n[24] !== y || n[25] !== b || n[26] !== i ? (T = d.jsx(r("WAWebFlatListContainer.react"), babelHelpers.extends({
				ref: i,
				flatListControllers: y,
				className: I
			}, b, { children: h })), n[22] = h, n[23] = I, n[24] = y, n[25] = b, n[26] = i, n[27] = T) : T = n[27], T;
		}
		var D;
		return n[28] !== c || n[29] !== f || n[30] !== h || n[31] !== I || n[32] !== b || n[33] !== i || n[34] !== S ? (D = d.jsx("div", babelHelpers.extends({
			className: I,
			ref: i,
			"aria-label": c,
			role: f,
			"data-testid": S
		}, b, { children: h })), n[28] = c, n[29] = f, n[30] = h, n[31] = I, n[32] = b, n[33] = i, n[34] = S, n[35] = D) : D = n[35], D;
	}
	l.default = f;
}), 98);

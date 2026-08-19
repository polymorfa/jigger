__d("WAWebBusinessProfileIconSection.react", [
	"fbt",
	"$InternalEnum",
	"WAWebFlex.react",
	"WAWebPencilRefreshedIcon.react",
	"WAWebStylesEnv",
	"WDSButton.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		marginInlineEnd7: {
			marginInlineEnd: "xcknrev",
			$$css: !0
		},
		marginTop6: {
			marginTop: "x1k70j0n",
			$$css: !0
		}
	}, d = {
		disabled: {
			color: "xhslqc4",
			$$css: !0
		},
		editPencil: {
			color: "xhslqc4",
			$$css: !0
		},
		fontSmoothing: {
			"-moz-osx-font-smoothing": "xlh3980",
			"-webkit-font-smoothing": "xvmahel",
			$$css: !0
		},
		sectionEmptyText: {
			color: "xhslqc4",
			fontSize: "x1lkfr7t",
			$$css: !0
		},
		sectionMain: {
			flexBasis: "x1t1x2f9",
			flexGrow: "x1iyjqo2",
			lineHeight: "x37zpob",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		sectionPrimaryIcon: {
			color: "xhslqc4",
			flexShrink: "x2lah0s",
			width: "xvy4d1p",
			$$css: !0
		},
		sectionPrimaryIconSvg: {
			height: "xxk0z11",
			width: "xvy4d1p",
			$$css: !0
		}
	}, m = n("$InternalEnum")({
		SmallMargin: "small-margin",
		NoMargin: "no-margin",
		NoMarginSmallGutter: "no-margin-small-gutter"
	});
	function p(e) {
		var t = o("react-compiler-runtime").c(33), n = e.Icon, a = e.content, i = e.disabled, l = e.editPencilXstyle, p = e.emptyText, _ = e.fieldName, f = e.onEdit, g = e.svgXstyle, h = e.testid, y = e.theme, C = e.type, b = e.xstyle, v = C === void 0 ? "field" : C, S;
		t[0] !== l || t[1] !== _ || t[2] !== f || t[3] !== h ? (S = f ? u.jsx("div", {
			"data-testid": h != null ? h + "-edit" : void 0,
			children: u.jsx(r("WDSButton.react"), {
				Icon: o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
				xstyle: [d.editPencil, l],
				onPress: f,
				variant: "borderless",
				directional: !0,
				"aria-label": s._(
					/*BTDS*/
					"",
					[s._param("fieldName", _)]
				)
			})
		}) : void 0, t[0] = l, t[1] = _, t[2] = f, t[3] = h, t[4] = S) : S = t[4];
		var R = S, L = p != null && !a, E = L ? p : a, k;
		t[5] !== n || t[6] !== g ? (k = n ? u.jsx(n, { iconXstyle: [d.sectionPrimaryIconSvg, g] }) : null, t[5] = n, t[6] = g, t[7] = k) : k = t[7];
		var I = k, T = y === m.SmallMargin && o("WDSMargins.stylex").wdsMargins.marginTop16, D = (y === m.NoMargin || y === m.NoMarginSmallGutter) && o("WDSMargins.stylex").wdsMargins.marginTop0, x;
		t[8] !== T || t[9] !== D ? (x = [
			o("WDSMargins.stylex").wdsMargins.marginTop32,
			T,
			D
		], t[8] = T, t[9] = D, t[10] = x) : x = t[10];
		var $ = h != null ? h + "-icon" : void 0, P = v === "field" && c.marginTop6, N = y === m.NoMarginSmallGutter && c.marginInlineEnd7, M;
		t[11] !== P || t[12] !== N || t[13] !== b ? (M = [
			d.sectionPrimaryIcon,
			o("WDSMargins.stylex").wdsMargins.marginEnd28,
			P,
			N,
			b
		], t[11] = P, t[12] = N, t[13] = b, t[14] = M) : M = t[14];
		var w;
		t[15] !== I || t[16] !== M || t[17] !== $ ? (w = u.jsx(o("WAWebFlex.react").FlexItem, {
			testid: $,
			xstyle: M,
			children: I
		}), t[15] = I, t[16] = M, t[17] = $, t[18] = w) : w = t[18];
		var A = h != null ? h + "-content" : void 0, F = v === "container" && o("WDSMargins.stylex").wdsMargins.marginTop4, O = L && d.sectionEmptyText, B = L && o("WAWebStylesEnv").isOSMac && d.fontSmoothing, W = i === !0 && d.disabled, q;
		t[19] !== F || t[20] !== O || t[21] !== B || t[22] !== W ? (q = [
			d.sectionMain,
			o("WDSPaddings.stylex").wdsPaddings.paddingEnd2,
			F,
			O,
			B,
			W
		], t[19] = F, t[20] = O, t[21] = B, t[22] = W, t[23] = q) : q = t[23];
		var U;
		t[24] !== E || t[25] !== A || t[26] !== q ? (U = u.jsx(o("WAWebFlex.react").FlexItem, {
			testid: A,
			xstyle: q,
			children: E
		}), t[24] = E, t[25] = A, t[26] = q, t[27] = U) : U = t[27];
		var V;
		return t[28] !== R || t[29] !== w || t[30] !== U || t[31] !== x ? (V = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: x,
			children: [
				w,
				U,
				R
			]
		}), t[28] = R, t[29] = w, t[30] = U, t[31] = x, t[32] = V) : V = t[32], V;
	}
	l.IconSectionTheme = m, l.IconSection = p;
}), 226);

__d("WAWebChipButton.react", [
	"WAWebUnstyledButton.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		paddingInlineStart36: {
			paddingInlineStart: "xf7qf19",
			$$css: !0
		},
		paddingInlineEnd36: {
			paddingInlineEnd: "xjfo4ez",
			$$css: !0
		},
		marginInlineStart5: {
			marginInlineStart: "xpcyujq",
			$$css: !0
		}
	}, c = {
		container: {
			position: "x1n2onr6",
			color: "xq49mwq",
			backgroundColor: "xlelruc",
			borderStartStartRadius: "x12ol6y4",
			borderStartEndRadius: "x180vkcf",
			borderEndEndRadius: "x1khw62d",
			borderEndStartRadius: "x709u02",
			$$css: !0
		},
		containerRefreshed: {
			color: "x1v5yvga",
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		icon: {
			display: "x1rg5ohu",
			position: "x10l6tqk",
			right: "x4a824z",
			insetInlineStart: null,
			insetInlineEnd: null,
			top: "x1jzctok",
			$$css: !0
		},
		iconSvg: {
			color: "xq49mwq",
			$$css: !0
		},
		iconSvgRefreshed: {
			color: "x1v5yvga",
			$$css: !0
		},
		prefixIcon: {
			left: "x1rvfpmx",
			insetInlineStart: null,
			insetInlineEnd: null,
			$$css: !0
		},
		paddedSvg: {
			paddingTop: "x4p5aij",
			paddingInlineEnd: "x1ccui7m",
			paddingBottom: "x1j85h84",
			paddingInlineStart: "x18pi947",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(27), n = e.PostfixIcon, a = e.PrefixIcon, i = e.label, l = e.onClick, d = e.xstyle, m = e.iconTheme === "padded-svg", p = m ? c.paddedSvg : o("WDSPaddings.stylex").wdsPaddings.padding4, _;
		t[0] !== p ? (_ = [
			c.iconSvg,
			c.iconSvgRefreshed,
			p
		], t[0] = p, t[1] = _) : _ = t[1];
		var f = _, g = m ? 20 : 16, h = m ? 20 : 16, y;
		t[2] !== g || t[3] !== h ? (y = {
			width: g,
			height: h
		}, t[2] = g, t[3] = h, t[4] = y) : y = t[4];
		var C = y, b = a != null && u.paddingInlineStart36, v = n != null && u.paddingInlineEnd36, S;
		t[5] !== b || t[6] !== v || t[7] !== d ? (S = [
			c.container,
			c.containerRefreshed,
			o("WDSPaddings.stylex").wdsPaddings.paddingVer8,
			o("WDSPaddings.stylex").wdsPaddings.paddingHor12,
			b,
			v,
			d
		], t[5] = b, t[6] = v, t[7] = d, t[8] = S) : S = t[8];
		var R = e["aria-label"], L;
		t[9] !== a || t[10] !== f || t[11] !== C ? (L = a && s.jsx(a, babelHelpers.extends({
			xstyle: [
				c.icon,
				c.prefixIcon,
				u.marginInlineStart5
			],
			iconXstyle: f
		}, C)), t[9] = a, t[10] = f, t[11] = C, t[12] = L) : L = t[12];
		var E;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (E = { className: "x1rg5ohu" }, t[13] = E) : E = t[13];
		var k;
		t[14] !== i ? (k = s.jsx("div", babelHelpers.extends({}, E, { children: i })), t[14] = i, t[15] = k) : k = t[15];
		var I;
		t[16] !== n || t[17] !== f || t[18] !== C ? (I = n && s.jsx(n, babelHelpers.extends({
			xstyle: [c.icon, u.marginInlineStart5],
			iconXstyle: f
		}, C)), t[16] = n, t[17] = f, t[18] = C, t[19] = I) : I = t[19];
		var T;
		return t[20] !== l || t[21] !== k || t[22] !== I || t[23] !== S || t[24] !== R || t[25] !== L ? (T = s.jsxs(r("WAWebUnstyledButton.react"), {
			xstyle: S,
			onClick: l,
			"aria-label": R,
			children: [
				L,
				k,
				I
			]
		}), t[20] = l, t[21] = k, t[22] = I, t[23] = S, t[24] = R, t[25] = L, t[26] = T) : T = t[26], T;
	}
	l.default = d;
}), 98);

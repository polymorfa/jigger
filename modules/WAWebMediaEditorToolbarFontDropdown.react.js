__d("WAWebMediaEditorToolbarFontDropdown.react", [
	"fbt",
	"WAWebDropdownItem.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFontLoader",
	"WAWebMediaEditorEnumsFonts",
	"WDSIconIcCheck.react",
	"WDSIconIcFormatAlignCenter.react",
	"WDSIconIcFormatAlignLeft.react",
	"WDSIconIcFormatAlignRight.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useEffect, m = { paddingTop13: {
		paddingTop: "x1d0ri9u",
		$$css: !0
	} }, p = [
		{
			alignment: o("WAWebMediaEditorEnumsFonts").TextAlignment.LEFT,
			icon: r("WDSIconIcFormatAlignLeft.react")
		},
		{
			alignment: o("WAWebMediaEditorEnumsFonts").TextAlignment.CENTER,
			icon: r("WDSIconIcFormatAlignCenter.react")
		},
		{
			alignment: o("WAWebMediaEditorEnumsFonts").TextAlignment.RIGHT,
			icon: r("WDSIconIcFormatAlignRight.react")
		}
	], _ = {
		noricanRegular: {
			marginInlineStart: "x4h0osi",
			$$css: !0
		},
		item: {
			boxSizing: "x9f619",
			display: "x1lliihq",
			height: "x1vqgdyp",
			paddingInlineEnd: "x1ikfw9c",
			fontSize: "x7yx35o",
			lineHeight: "xwgyvy0",
			color: "x14ug900",
			whiteSpace: "xuxw1ft",
			cursor: "x1ypdohk",
			$$css: !0
		},
		alignmentIconSelected: {
			opacity: "x1hc1fzr",
			$$css: !0
		},
		alignmentIcon: {
			opacity: "x197sbye",
			$$css: !0
		}
	};
	function f(t) {
		var n = o("react-compiler-runtime").c(24), a = t.font, i = t.isSelectedFont, l = t.onAction, s;
		if (i) {
			var u;
			n[0] === Symbol.for("react.memo_cache_sentinel") ? (u = c.jsx("span", {
				className: "x10l6tqk xyc4j8s xeer0ze",
				children: c.jsx(r("WDSIconIcCheck.react"), { displayInline: !0 })
			}), n[0] = u) : u = n[0], s = u;
		}
		var d;
		n[1] !== a ? (d = o("WAWebMediaEditorEnumsFonts").getFontTranslation(a), n[1] = a, n[2] = d) : d = n[2];
		var p = d, f;
		e: switch (a) {
			case o("WAWebMediaEditorEnumsFonts").FontType.SANS_SERIF: {
				var g;
				n[3] === Symbol.for("react.memo_cache_sentinel") ? (g = (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginTop0), n[3] = g) : g = n[3], f = g;
				break e;
			}
			case o("WAWebMediaEditorEnumsFonts").FontType.SERIF: {
				var h;
				n[4] === Symbol.for("react.memo_cache_sentinel") ? (h = (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginTop2), n[4] = h) : h = n[4], f = h;
				break e;
			}
			case o("WAWebMediaEditorEnumsFonts").FontType.NORICAN_REGULAR: {
				var y;
				n[5] === Symbol.for("react.memo_cache_sentinel") ? (y = (e || (e = r("stylex")))(_.noricanRegular, o("WDSMargins.stylex").wdsMargins.marginTop4), n[5] = y) : y = n[5], f = y;
				break e;
			}
			case o("WAWebMediaEditorEnumsFonts").FontType.BRYNDAN_WRITE: {
				var C;
				n[6] === Symbol.for("react.memo_cache_sentinel") ? (C = "xe9ewy2 xngnso2", n[6] = C) : C = n[6], f = C;
				break e;
			}
			case o("WAWebMediaEditorEnumsFonts").FontType.OSWALD_HEAVY: {
				var b;
				n[7] === Symbol.for("react.memo_cache_sentinel") ? (b = "x1kgmq87 x1603h9y", n[7] = b) : b = n[7], f = b;
			}
		}
		var v;
		n[8] !== a || n[9] !== l ? (v = function(t) {
			return l(t, a);
		}, n[8] = a, n[9] = l, n[10] = v) : v = n[10];
		var S;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (S = (e || (e = r("stylex")))(_.item, m.paddingTop13, o("WDSPaddings.stylex").wdsPaddings.paddingStart24), n[11] = S) : S = n[11];
		var R;
		n[12] !== a ? (R = o("WAWebMediaEditorEnumsFonts").getFontStyle(a), n[12] = a, n[13] = R) : R = n[13];
		var L;
		n[14] !== f || n[15] !== p ? (L = c.jsx("span", {
			className: f,
			children: p
		}), n[14] = f, n[15] = p, n[16] = L) : L = n[16];
		var E;
		n[17] !== s || n[18] !== R || n[19] !== L ? (E = c.jsxs("div", {
			role: "button",
			className: S,
			style: R,
			children: [L, s]
		}), n[17] = s, n[18] = R, n[19] = L, n[20] = E) : E = n[20];
		var k;
		return n[21] !== v || n[22] !== E ? (k = c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			action: v,
			children: E
		}), n[21] = v, n[22] = E, n[23] = k) : k = n[23], k;
	}
	function g(e) {
		return e === o("WAWebMediaEditorEnumsFonts").TextAlignment.LEFT ? s._(
			/*BTDS*/
			""
		) : e === o("WAWebMediaEditorEnumsFonts").TextAlignment.CENTER ? s._(
			/*BTDS*/
			""
		) : e === o("WAWebMediaEditorEnumsFonts").TextAlignment.RIGHT ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(6), n = e.onAction, a = e.selectedAlignment, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = "x1vqgdyp x178xt8z x13fuv20 xx42vgk x96k8nx", t[0] = i) : i = t[0];
		var l;
		t[1] !== n || t[2] !== a ? (l = p.map(function(e) {
			var t = e.alignment, i = e.icon;
			return c.jsx(r("WAWebFlexItem.react"), { children: c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				action: function(r) {
					return n(r, t);
				},
				children: c.jsx("div", {
					"aria-label": g(t).toString(),
					className: "x78zum5 x6s0dn4 xl56j7k x1td3qas x10w6t97 xt8t1vi x1xc408v x129tdwq x15urzxu x1ubxc9n",
					children: c.jsx(i, {
						height: 20,
						iconXstyle: t === a ? _.alignmentIconSelected : _.alignmentIcon,
						width: 20
					})
				})
			}) }, t);
		}), t[1] = n, t[2] = a, t[3] = l) : l = t[3];
		var s;
		return t[4] !== l ? (s = c.jsx(o("WAWebFlex.react").FlexRow, {
			className: i,
			justify: "around",
			align: "center",
			children: l
		}), t[4] = l, t[5] = s) : s = t[5], s;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(19), n = e.onAlignmentSelect, r = e.onFontSelect, a = e.selectedAlignment, i = e.selectedFont, l = e.showAlignmentOptions, s;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (s = [], t[0] = s) : s = t[0], d(C, s);
		var u;
		t[1] !== r ? (u = function(t, n) {
			t.stopPropagation(), r(n);
		}, t[1] = r, t[2] = u) : u = t[2];
		var m = u, p;
		t[3] !== n ? (p = function(t, r) {
			t.stopPropagation(), n(r);
		}, t[3] = n, t[4] = p) : p = t[4];
		var _ = p, g;
		if (t[5] !== m || t[6] !== e.fonts || t[7] !== i) {
			var y;
			t[9] !== m || t[10] !== i ? (y = function(t) {
				return c.jsx(f, {
					font: t,
					isSelectedFont: i === t,
					onAction: m
				}, t);
			}, t[9] = m, t[10] = i, t[11] = y) : y = t[11], g = e.fonts.map(y), t[5] = m, t[6] = e.fonts, t[7] = i, t[8] = g;
		} else g = t[8];
		var b;
		t[12] !== _ || t[13] !== a || t[14] !== l ? (b = l && c.jsx(h, {
			selectedAlignment: a,
			onAction: _
		}, "alignment"), t[12] = _, t[13] = a, t[14] = l, t[15] = b) : b = t[15];
		var v;
		return t[16] !== g || t[17] !== b ? (v = c.jsxs("div", { children: [g, b] }), t[16] = g, t[17] = b, t[18] = v) : v = t[18], v;
	}
	function C() {
		o("WAWebFontLoader").FontLoader.loadAllFonts();
	}
	l.default = y;
}), 226);

__d("WAWebTPEditPdfColorSelector.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebKeyboardRotateFocusModal.react",
	"WAWebKeyboardTabUtils",
	"WAWebMediaEditorEnumsColors",
	"WAWebNoop",
	"WAWebPdfViewerEventEmitter",
	"WAWebPdfViewerTestIds",
	"WAWebTPEditPdfInWhatsappContext.react",
	"WAWebTPLoggingUtils",
	"WAWebUnstyledButton.react",
	"WDSButton.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useMemo, _ = d.useRef, f = [
		o("WAWebMediaEditorEnumsColors").ColorType.BLACK,
		o("WAWebMediaEditorEnumsColors").ColorType.GRAY,
		o("WAWebMediaEditorEnumsColors").ColorType.WHITE,
		o("WAWebMediaEditorEnumsColors").ColorType.BLUE,
		o("WAWebMediaEditorEnumsColors").ColorType.GREEN,
		o("WAWebMediaEditorEnumsColors").ColorType.PURPLE,
		o("WAWebMediaEditorEnumsColors").ColorType.ORANGE,
		o("WAWebMediaEditorEnumsColors").ColorType.RED
	], g = {
		colorSelectorPanel: {
			columnGap: "x46w9ns",
			backgroundColor: "x16w0wmm",
			borderStartStartRadius: "x1xn7y0n",
			borderStartEndRadius: "x1uxb8k9",
			borderEndEndRadius: "x1vmbcc8",
			borderEndStartRadius: "x16xm01d",
			boxShadow: "xs2e80n",
			paddingTop: "x1xrf6ya",
			paddingInlineEnd: "xde1mab",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		},
		colorChipContainer: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			height: "x10w6t97",
			width: "x1td3qas",
			cursor: "x1ypdohk",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			position: "x1n2onr6",
			$$css: !0
		},
		colorChip: {
			height: "x1qx5ct2",
			width: "xw4jnvo",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			boxShadow: "x1hdfv4t",
			$$css: !0
		},
		colorSelectorOuter: {
			height: "xxk0z11",
			width: "xvy4d1p",
			$$css: !0
		},
		colorSelectorInner: {
			height: "x1qx5ct2",
			width: "xw4jnvo",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			boxShadow: "x1hdfv4t",
			$$css: !0
		},
		colorBackground: function(t) {
			return [{
				backgroundColor: t != null ? "xl8spv7" : t,
				$$css: !0
			}, { "--x-backgroundColor": t != null ? t : void 0 }];
		},
		rotateFocusContainer: {
			position: "x1uhb9sk",
			$$css: !0
		},
		colorSelectorActive: {
			"::after_content": "x1s928wv",
			"::after_position": "x1j6awrg",
			"::after_top": "x1m1drc7",
			"::after_insetInlineStart": "x1iygr5g",
			"::after_left": null,
			"::after_right": null,
			"::after_pointerEvents": "x2q1x1w",
			"::after_borderStartStartRadius": "xfijbtm",
			"::after_borderStartEndRadius": "xfenqrj",
			"::after_borderEndEndRadius": "xgy0gl7",
			"::after_borderEndStartRadius": "x19igvu",
			"::after_width": "x4eaejv",
			"::after_height": "x1wsn0xg",
			"::after_transform": "x10hb6ac",
			"::after_backgroundColor": "x1qxhgua",
			$$css: !0
		}
	};
	function h() {
		var e = o("react-compiler-runtime").c(18), t = _(null), n = _(r("WAWebNoop")), a;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = c.jsx(C, { closeMenuRef: n }), e[0] = a) : a = e[0];
		var i = a, l;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (l = {
			targetRef: t,
			menu: i,
			dismissable: !0,
			isContainer: !0,
			align: "middle",
			position: "below"
		}, e[1] = l) : l = e[1];
		var u = r("useWDSMenu")(l), d = u.closeMenu, p = u.isMenuOpen, f = u.menuPortal, h = u.openMenu, b, v;
		e[2] !== d ? (b = function() {
			n.current = d;
		}, v = [d], e[2] = d, e[3] = b, e[4] = v) : (b = e[3], v = e[4]), m(b, v);
		var S;
		e[5] !== d || e[6] !== p || e[7] !== h ? (S = function() {
			p ? d() : h();
		}, e[5] = d, e[6] = p, e[7] = h, e[8] = S) : S = e[8];
		var R = S, L;
		e[9] === Symbol.for("react.memo_cache_sentinel") ? (L = { className: "x3nfvp2 x1n2onr6" }, e[9] = L) : L = e[9];
		var E;
		e[10] === Symbol.for("react.memo_cache_sentinel") ? (E = s._(
			/*BTDS*/
			""
		), e[10] = E) : E = e[10];
		var k;
		e[11] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
			/*BTDS*/
			""
		), e[11] = k) : k = e[11];
		var I = p && g.colorSelectorActive, T;
		e[12] !== R || e[13] !== I ? (T = c.jsx(r("WDSTooltip.react"), {
			label: E,
			children: c.jsx(r("WDSButton.react"), {
				variant: "borderless",
				type: "default",
				Icon: y,
				"aria-label": k,
				testid: r("WAWebPdfViewerTestIds").EDIT_COLOR_SELECTOR,
				onPress: R,
				xstyle: I
			})
		}), e[12] = R, e[13] = I, e[14] = T) : T = e[14];
		var D;
		return e[15] !== f || e[16] !== T ? (D = c.jsxs("span", babelHelpers.extends({ ref: t }, L, { children: [T, f] })), e[15] = f, e[16] = T, e[17] = D) : D = e[17], D;
	}
	function y(t) {
		var n = o("react-compiler-runtime").c(4), a = o("WAWebTPEditPdfInWhatsappContext.react").useWAWebTPEditPdfInWhatsappContext(), i = a.selectedColor, l;
		n[0] !== i ? (l = (e || (e = r("stylex"))).props(g.colorSelectorInner, g.colorBackground(i.toRgbaString())), n[0] = i, n[1] = l) : l = n[1];
		var s;
		return n[2] !== l ? (s = c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: g.colorSelectorOuter,
			children: c.jsx("div", babelHelpers.extends({}, l))
		}), n[2] = l, n[3] = s) : s = n[3], s;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(12), n = e.closeMenuRef, a = o("WAWebTPEditPdfInWhatsappContext.react").useWAWebTPEditPdfInWhatsappContext(), i = a.activeAnnotationMode, l = a.filehash, s = a.selectedColor, u = a.setSelectedColor, d = _(null), p = _(null), h, y;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (h = function() {
			var e;
			(e = p.current) == null || e.focus();
		}, y = [], t[0] = h, t[1] = y) : (h = t[0], y = t[1]), m(h, y);
		var C;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (C = function(t) {
			t.relatedTarget instanceof HTMLElement && d.current != null && d.current.contains(t.relatedTarget) && t.stopPropagation();
		}, t[2] = C) : C = t[2];
		var v = C, S;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (S = { type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE }, t[3] = S) : S = t[3];
		var R;
		t[4] !== i || t[5] !== n || t[6] !== l || t[7] !== s || t[8] !== u ? (R = f.map(function(e) {
			var t = o("WAWebMediaEditorEnumsColors").getColorValue(e), r = s.toRgbaString() === t.toRgbaString();
			return c.jsx(b, {
				ref: r ? p : void 0,
				color: t,
				isSelected: r,
				onSelect: function() {
					o("WAWebTPLoggingUtils").logAnnotationStyleChangeEvent("color", l), u(t), o("WAWebPdfViewerEventEmitter").updateAnnotationToolConfig(i, { strokeColor: t.toHex() }), n.current();
				}
			}, e);
		}), t[4] = i, t[5] = n, t[6] = l, t[7] = s, t[8] = u, t[9] = R) : R = t[9];
		var L;
		return t[10] !== R ? (L = c.jsx(r("WAWebKeyboardRotateFocusModal.react"), {
			ref: d,
			focusType: S,
			onBlur: v,
			xstyle: g.rotateFocusContainer,
			children: c.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				xstyle: g.colorSelectorPanel,
				children: R
			})
		}), t[10] = R, t[11] = L) : L = t[11], L;
	}
	function b(t) {
		var n = o("react-compiler-runtime").c(11), a = t.color, i = t.isSelected, l = t.onSelect, s = t.ref, u;
		n[0] !== i ? (u = i && c.jsx("div", { className: "x10l6tqk xxk0z11 xvy4d1p x1c9tyrk xeusxvb x1pahc9y x1ertn4p x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs" }), n[0] = i, n[1] = u) : u = n[1];
		var d;
		n[2] !== a ? (d = (e || (e = r("stylex"))).props(g.colorChip, g.colorBackground(a.toRgbaString())), n[2] = a, n[3] = d) : d = n[3];
		var m;
		n[4] !== d ? (m = c.jsx("div", babelHelpers.extends({}, d)), n[4] = d, n[5] = m) : m = n[5];
		var p;
		return n[6] !== l || n[7] !== s || n[8] !== u || n[9] !== m ? (p = c.jsxs(r("WAWebUnstyledButton.react"), {
			ref: s,
			xstyle: g.colorChipContainer,
			onClick: l,
			children: [u, m]
		}), n[6] = l, n[7] = s, n[8] = u, n[9] = m, n[10] = p) : p = n[10], p;
	}
	l.default = h;
}), 226);

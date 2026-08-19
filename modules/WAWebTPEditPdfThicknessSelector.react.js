__d("WAWebTPEditPdfThicknessSelector.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebKeyboardRotateFocusModal.react",
	"WAWebKeyboardTabUtils",
	"WAWebLineWeightIcon.react",
	"WAWebNoop",
	"WAWebPdfViewerEventEmitter",
	"WAWebPdfViewerTestIds",
	"WAWebTPAnnotationThickness",
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
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useMemo, _ = d.useRef, f = {
		height: "x16ye13r",
		width: "x5lhr3w",
		$$css: !0
	}, g = {
		thicknessPanel: {
			height: "xnnlda6",
			boxSizing: "x9f619",
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
		thicknessChipContainer: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			paddingTop: "x1tiyuxx",
			paddingInlineEnd: "x1uc92m",
			paddingBottom: "x1nbhmlj",
			paddingInlineStart: "x181vq82",
			cursor: "x1ypdohk",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			position: "x1n2onr6",
			$$css: !0
		},
		thicknessChipDefault: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			backgroundColor: "x3qdkio",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		thicknessChipSelected: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			backgroundColor: "x3l9nec",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		thicknessSize: function(t) {
			return [f, {
				"--x-height": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(t * 2 + "px"),
				"--x-width": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(t * 2 + "px")
			}];
		},
		rotateFocusContainer: {
			position: "x1uhb9sk",
			$$css: !0
		},
		thicknessSelectorActive: {
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
		var e = o("react-compiler-runtime").c(14), t = _(null), n = _(r("WAWebNoop")), a;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = c.jsx(y, { closeMenuRef: n }), e[0] = a) : a = e[0];
		var i = a, l;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (l = {
			targetRef: t,
			menu: i,
			dismissable: !0,
			isContainer: !0,
			align: "middle",
			position: "below"
		}, e[1] = l) : l = e[1];
		var u = r("useWDSMenu")(l), d = u.closeMenu, p = u.isMenuOpen, f = u.menuPortal, h = u.openMenu, C, b;
		e[2] !== d ? (C = function() {
			n.current = d;
		}, b = [d], e[2] = d, e[3] = C, e[4] = b) : (C = e[3], b = e[4]), m(C, b);
		var v = p ? d : h, S;
		e[5] === Symbol.for("react.memo_cache_sentinel") ? (S = { className: "x3nfvp2 x1n2onr6" }, e[5] = S) : S = e[5];
		var R;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), e[6] = R) : R = e[6];
		var L;
		e[7] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), e[7] = L) : L = e[7];
		var E = p && g.thicknessSelectorActive, k;
		e[8] !== v || e[9] !== E ? (k = c.jsx(r("WDSTooltip.react"), {
			label: R,
			children: c.jsx(r("WDSButton.react"), {
				variant: "borderless",
				type: "default",
				Icon: o("WAWebLineWeightIcon.react").LineWeightIcon,
				"aria-label": L,
				testid: r("WAWebPdfViewerTestIds").EDIT_THICKNESS,
				onPress: v,
				xstyle: E
			})
		}), e[8] = v, e[9] = E, e[10] = k) : k = e[10];
		var I;
		return e[11] !== k || e[12] !== f ? (I = c.jsxs("span", babelHelpers.extends({ ref: t }, S, { children: [k, f] })), e[11] = k, e[12] = f, e[13] = I) : I = e[13], I;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(12), n = e.closeMenuRef, a = o("WAWebTPEditPdfInWhatsappContext.react").useWAWebTPEditPdfInWhatsappContext(), i = a.activeAnnotationMode, l = a.filehash, s = a.selectedThickness, u = a.setSelectedThickness, d = _(null), p = _(null), f, h;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (f = function() {
			var e;
			(e = p.current) == null || e.focus();
		}, h = [], t[0] = f, t[1] = h) : (f = t[0], h = t[1]), m(f, h);
		var y;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (y = function(t) {
			t.relatedTarget instanceof HTMLElement && d.current != null && d.current.contains(t.relatedTarget) && t.stopPropagation();
		}, t[2] = y) : y = t[2];
		var b = y, v;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (v = { type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE }, t[3] = v) : v = t[3];
		var S;
		t[4] !== i || t[5] !== n || t[6] !== l || t[7] !== s || t[8] !== u ? (S = o("WAWebTPAnnotationThickness").ANNOTATION_THICKNESS_OPTIONS.map(function(e) {
			return c.jsx(C, {
				ref: s === e ? p : void 0,
				thickness: e,
				isSelected: s === e,
				onSelect: function() {
					o("WAWebTPLoggingUtils").logAnnotationStyleChangeEvent("thickness", l), u(e), o("WAWebPdfViewerEventEmitter").updateAnnotationToolConfig(i, { strokeWidth: e }), n.current();
				}
			}, e);
		}), t[4] = i, t[5] = n, t[6] = l, t[7] = s, t[8] = u, t[9] = S) : S = t[9];
		var R;
		return t[10] !== S ? (R = c.jsx(r("WAWebKeyboardRotateFocusModal.react"), {
			ref: d,
			focusType: v,
			onBlur: b,
			xstyle: g.rotateFocusContainer,
			children: c.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				xstyle: g.thicknessPanel,
				children: S
			})
		}), t[10] = S, t[11] = R) : R = t[11], R;
	}
	function C(t) {
		var n = o("react-compiler-runtime").c(12), a = t.isSelected, i = t.onSelect, l = t.ref, u = t.thickness, d;
		n[0] !== u ? (d = s._(
			/*BTDS*/
			"",
			[s._param("thickness", u)]
		), n[0] = u, n[1] = d) : d = n[1];
		var m;
		n[2] !== a || n[3] !== u ? (m = (e || (e = r("stylex"))).props(a ? g.thicknessChipSelected : g.thicknessChipDefault, g.thicknessSize(u)), n[2] = a, n[3] = u, n[4] = m) : m = n[4];
		var p;
		n[5] !== m ? (p = c.jsx("div", babelHelpers.extends({}, m)), n[5] = m, n[6] = p) : p = n[6];
		var _;
		return n[7] !== i || n[8] !== l || n[9] !== d || n[10] !== p ? (_ = c.jsx(r("WAWebUnstyledButton.react"), {
			ref: l,
			xstyle: g.thicknessChipContainer,
			onClick: i,
			"aria-label": d,
			children: p
		}), n[7] = i, n[8] = l, n[9] = d, n[10] = p, n[11] = _) : _ = n[11], _;
	}
	l.default = h;
}), 226);

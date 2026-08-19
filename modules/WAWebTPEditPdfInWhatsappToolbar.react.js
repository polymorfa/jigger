__d("WAWebTPEditPdfInWhatsappToolbar.react", [
	"fbt",
	"WAWebAcrobatIcon.react",
	"WAWebFlex.react",
	"WAWebFormatInkHighlighterIcon.react",
	"WAWebFormatUnderlinedIcon.react",
	"WAWebGestureIcon.react",
	"WAWebMenuBar.react",
	"WAWebPdfViewerEventEmitter",
	"WAWebPdfViewerTestIds",
	"WAWebTPEditPdfColorSelector.react",
	"WAWebTPEditPdfInWhatsappContext.react",
	"WAWebTPEditPdfThicknessSelector.react",
	"WAWebTPEditPdfUndoRedoShortcuts",
	"WAWebTPLoggingUtils",
	"WAWebTPStickyAnnotationMode",
	"WAWebUnstyledButton.react",
	"WAWebWebTPParentPdfFocusManagement.react",
	"WDSIconIcEdit.react",
	"WDSIconIcFormatStrikethrough.react",
	"WDSIconIcNearMe.react",
	"WDSIconIcRedo.react",
	"WDSIconIcUndo.react",
	"WDSMenuBarItem.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = {
		toolbar: {
			height: "x5yr21d",
			width: "xh8yej3",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		titleGroup: {
			minWidth: "xeuugli",
			flexShrink: "xs83m0k",
			$$css: !0
		},
		titleText: {
			minWidth: "xeuugli",
			$$css: !0
		},
		editIcon: {
			color: "x14ug900",
			$$css: !0
		},
		doneButton: {
			height: "x1vqgdyp",
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			cursor: "x1ypdohk",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			whiteSpace: "xuxw1ft",
			":hover_backgroundColor": "x1k5h0tu",
			$$css: !0
		}
	}, f = [
		{
			annotationType: "shape",
			icon: o("WAWebGestureIcon.react").GestureIcon,
			title: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			testid: r("WAWebPdfViewerTestIds").EDIT_DRAW
		},
		{
			annotationType: "highlight",
			icon: o("WAWebFormatInkHighlighterIcon.react").FormatInkHighlighterIcon,
			title: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			testid: r("WAWebPdfViewerTestIds").EDIT_HIGHLIGHT
		},
		{
			annotationType: "underline",
			icon: o("WAWebFormatUnderlinedIcon.react").FormatUnderlinedIcon,
			title: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			testid: r("WAWebPdfViewerTestIds").EDIT_UNDERLINE
		},
		{
			annotationType: "strikeout",
			icon: r("WDSIconIcFormatStrikethrough.react"),
			title: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			testid: r("WAWebPdfViewerTestIds").EDIT_STRIKETHROUGH
		}
	];
	function g(e) {
		var t = e.activeAnnotationMode, n = e.selectedColor, r = e.selectedThickness, a = e.setActiveAnnotationMode, i = e.tool;
		if (t === i) {
			a(null), o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:command", { type: "endMode" });
			return;
		}
		a(i);
		var l = {
			strokeColor: n.toHex(),
			strokeWidth: r
		};
		o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:command", {
			type: "startMode",
			annotationType: i,
			config: l
		}), o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:command", {
			type: "updateToolConfig",
			annotationType: i,
			config: l
		});
	}
	function h(e) {
		return e === "shape" || e === "highlight";
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(81), n = e.containerRef, a = e.filename, i = e.mimetype, l = e.onEditInAcrobat, c = o("WAWebTPEditPdfInWhatsappContext.react").useWAWebTPEditPdfInWhatsappContext(), d = c.activeAnnotationMode, y = c.filehash, v = c.selectedColor, L = c.selectedThickness, E = c.setActiveAnnotationMode, k = c.setIsEditing, I = c.setIsSending, T = c.setUndoRedoState, D = c.undoRedoState, x = p(!1), $;
		t[0] !== d || t[1] !== y || t[2] !== v || t[3] !== L || t[4] !== E ? ($ = function(t) {
			o("WAWebTPLoggingUtils").logAnnotationToolSelectEvent(o("WAWebTPLoggingUtils").toolSelectForToolClick(d, t), y), g({
				activeAnnotationMode: d,
				selectedColor: v,
				selectedThickness: L,
				setActiveAnnotationMode: E,
				tool: t
			});
		}, t[0] = d, t[1] = y, t[2] = v, t[3] = L, t[4] = E, t[5] = $) : $ = t[5];
		var P = $, N;
		t[6] !== d || t[7] !== y || t[8] !== E ? (N = function() {
			d != null && o("WAWebTPLoggingUtils").logAnnotationToolSelectEvent("select", y), E(null), o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:command", { type: "endMode" });
		}, t[6] = d, t[7] = y, t[8] = E, t[9] = N) : N = t[9];
		var M = N, w;
		t[10] !== y ? (w = function() {
			o("WAWebTPLoggingUtils").logAnnotationEditActionEvent("undo", y), o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:command", { type: "undo" });
		}, t[10] = y, t[11] = w) : w = t[11];
		var A = w, F;
		t[12] !== y ? (F = function() {
			o("WAWebTPLoggingUtils").logAnnotationEditActionEvent("redo", y), o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:command", { type: "redo" });
		}, t[12] = y, t[13] = F) : F = t[13];
		var O = F, B;
		t[14] !== O || t[15] !== A || t[16] !== D.hasRedo || t[17] !== D.hasUndo ? (B = {
			canRedo: D.hasRedo,
			canUndo: D.hasUndo,
			onRedo: O,
			onUndo: A
		}, t[14] = O, t[15] = A, t[16] = D.hasRedo, t[17] = D.hasUndo, t[18] = B) : B = t[18], o("WAWebTPEditPdfUndoRedoShortcuts").useWAWebTPEditPdfUndoRedoShortcuts(B);
		var W;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (W = [], t[19] = W) : W = t[19], m(b, W);
		var q = p(!1), U, V;
		t[20] !== y ? (U = function() {
			q.current || y == null || (q.current = !0, o("WAWebTPLoggingUtils").logAnnotationEditModeEnterEvent(y));
		}, V = [y], t[20] = y, t[21] = U, t[22] = V) : (U = t[21], V = t[22]), m(U, V);
		var H, G;
		t[23] !== d ? (G = function() {
			var e = function(t) {
				o("WAWebTPStickyAnnotationMode").shouldRestartAnnotationMode(t, d, x.current) && (x.current = !0, o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:command", {
					type: "restartMode",
					annotationType: t
				}), window.requestAnimationFrame(function() {
					x.current = !1;
				}));
			};
			return o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on("annotation:modeEnded", e), (function() {
				o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.off("annotation:modeEnded", e);
			});
		}, H = [d], t[23] = d, t[24] = H, t[25] = G) : (H = t[24], G = t[25]), m(G, H);
		var z, j;
		t[26] !== T ? (z = function() {
			var e = function(t) {
				T(t);
			};
			return o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on("undoRedo:stateChange", e), (function() {
				o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.off("undoRedo:stateChange", e);
			});
		}, j = [T], t[26] = T, t[27] = z, t[28] = j) : (z = t[27], j = t[28]), m(z, j);
		var K;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? (K = u.jsx(r("WDSIconIcEdit.react"), { iconXstyle: _.editIcon }), t[29] = K) : K = t[29];
		var Q;
		t[30] !== a ? (Q = s._(
			/*BTDS*/
			"",
			[s._param("filename", a)]
		), t[30] = a, t[31] = Q) : Q = t[31];
		var X;
		t[32] !== Q ? (X = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			columnGap: 8,
			xstyle: _.titleGroup,
			children: [K, u.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentDefault",
				maxLines: 1,
				xstyle: _.titleText,
				children: Q
			})]
		}), t[32] = Q, t[33] = X) : X = t[33];
		var Y, J;
		t[34] === Symbol.for("react.memo_cache_sentinel") ? (Y = u.jsx(o("WAWebFlex.react").FlexItem, { grow: 1 }), J = { className: "x78zum5 x6s0dn4 x2lah0s" }, t[34] = Y, t[35] = J) : (Y = t[34], J = t[35]);
		var Z;
		t[36] === Symbol.for("react.memo_cache_sentinel") ? (Z = s._(
			/*BTDS*/
			""
		), t[36] = Z) : Z = t[36];
		var ee = !D.hasUndo, te;
		t[37] !== A || t[38] !== ee ? (te = u.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcUndo.react"),
			title: Z,
			testid: r("WAWebPdfViewerTestIds").EDIT_UNDO,
			onClick: A,
			disabled: ee
		}), t[37] = A, t[38] = ee, t[39] = te) : te = t[39];
		var ne;
		t[40] === Symbol.for("react.memo_cache_sentinel") ? (ne = s._(
			/*BTDS*/
			""
		), t[40] = ne) : ne = t[40];
		var re = !D.hasRedo, oe;
		t[41] !== O || t[42] !== re ? (oe = u.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcRedo.react"),
			title: ne,
			testid: r("WAWebPdfViewerTestIds").EDIT_REDO,
			onClick: O,
			disabled: re
		}), t[41] = O, t[42] = re, t[43] = oe) : oe = t[43];
		var ae;
		t[44] !== d ? (ae = d != null ? u.jsxs(u.Fragment, { children: [
			u.jsx(R, {}),
			u.jsx(r("WAWebTPEditPdfColorSelector.react"), {}),
			h(d) ? u.jsx(r("WAWebTPEditPdfThicknessSelector.react"), {}) : null
		] }) : null, t[44] = d, t[45] = ae) : ae = t[45];
		var ie;
		t[46] === Symbol.for("react.memo_cache_sentinel") ? (ie = u.jsx(R, {}), t[46] = ie) : ie = t[46];
		var le = d == null, se;
		t[47] !== M || t[48] !== le ? (se = u.jsx(S, {
			icon: r("WDSIconIcNearMe.react"),
			isActive: le,
			onClick: M,
			testid: r("WAWebPdfViewerTestIds").EDIT_SELECT,
			title: C
		}), t[47] = M, t[48] = le, t[49] = se) : se = t[49];
		var ue;
		t[50] !== d || t[51] !== P ? (ue = f.map(function(e) {
			return u.jsx(S, {
				icon: e.icon,
				isActive: d === e.annotationType,
				onClick: function() {
					return P(e.annotationType);
				},
				testid: e.testid,
				title: e.title
			}, e.testid);
		}), t[50] = d, t[51] = P, t[52] = ue) : ue = t[52];
		var ce;
		t[53] === Symbol.for("react.memo_cache_sentinel") ? (ce = s._(
			/*BTDS*/
			""
		), t[53] = ce) : ce = t[53];
		var de;
		t[54] !== l ? (de = u.jsx(r("WDSMenuBarItem.react"), {
			icon: o("WAWebAcrobatIcon.react").AcrobatIcon,
			title: ce,
			testid: r("WAWebPdfViewerTestIds").EDIT_IN_ACROBAT,
			onClick: l
		}), t[54] = l, t[55] = de) : de = t[55];
		var me;
		t[56] !== te || t[57] !== oe || t[58] !== ae || t[59] !== se || t[60] !== ue || t[61] !== de ? (me = u.jsx("div", babelHelpers.extends({}, J, { children: u.jsxs(o("WAWebMenuBar.react").MenuBar, {
			gap: "single",
			children: [
				te,
				oe,
				ae,
				ie,
				se,
				ue,
				de
			]
		}) })), t[56] = te, t[57] = oe, t[58] = ae, t[59] = se, t[60] = ue, t[61] = de, t[62] = me) : me = t[62];
		var pe;
		t[63] === Symbol.for("react.memo_cache_sentinel") ? (pe = { className: "x12w63v0 x2lah0s" }, t[63] = pe) : pe = t[63];
		var _e;
		t[64] !== k || t[65] !== I || t[66] !== D.hasUndo ? (_e = function() {
			o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:command", { type: "endMode" }), k(!1), I(D.hasUndo);
		}, t[64] = k, t[65] = I, t[66] = D.hasUndo, t[67] = _e) : _e = t[67];
		var fe;
		t[68] === Symbol.for("react.memo_cache_sentinel") ? (fe = s._(
			/*BTDS*/
			""
		), t[68] = fe) : fe = t[68];
		var ge;
		t[69] === Symbol.for("react.memo_cache_sentinel") ? (ge = u.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[69] = ge) : ge = t[69];
		var he;
		t[70] !== _e ? (he = u.jsx("div", babelHelpers.extends({}, pe, { children: u.jsx(r("WAWebUnstyledButton.react"), {
			xstyle: _.doneButton,
			testid: r("WAWebPdfViewerTestIds").EDIT_DONE,
			onClick: _e,
			"aria-label": fe,
			children: ge
		}) })), t[70] = _e, t[71] = he) : he = t[71];
		var ye;
		t[72] !== n || t[73] !== i ? (ye = u.jsx(r("WAWebWebTPParentPdfFocusManagement.react"), {
			containerRef: n,
			mimetype: i
		}), t[72] = n, t[73] = i, t[74] = ye) : ye = t[74];
		var Ce;
		return t[75] !== n || t[76] !== X || t[77] !== me || t[78] !== he || t[79] !== ye ? (Ce = u.jsxs(o("WAWebFlex.react").FlexRow, {
			ref: n,
			align: "center",
			xstyle: _.toolbar,
			children: [
				X,
				Y,
				me,
				he,
				ye
			]
		}), t[75] = n, t[76] = X, t[77] = me, t[78] = he, t[79] = ye, t[80] = Ce) : Ce = t[80], Ce;
	}
	function C() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function b() {
		return o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:command", {
			type: "setEditMode",
			isEditing: !0
		}), v;
	}
	function v() {
		o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:command", {
			type: "setEditMode",
			isEditing: !1
		});
	}
	function S(e) {
		var t = o("react-compiler-runtime").c(12), n = e.icon, a = e.isActive, i = e.onClick, l = e.testid, s = e.title, c;
		t[0] !== a ? (c = {
			0: { className: "x1n2onr6 x3nfvp2 xt8t1vi x1xc408v x129tdwq x15urzxu" },
			1: { className: "x1n2onr6 x3nfvp2 xt8t1vi x1xc408v x129tdwq x15urzxu x1s928wv x1j6awrg x1m1drc7 x1iygr5g x2q1x1w x77mdso x1fidlvn x1nys2zw x14gt54a x4eaejv x1wsn0xg x14k6s2n" }
		}[!!a << 0], t[0] = a, t[1] = c) : c = t[1];
		var d;
		t[2] !== s ? (d = s(), t[2] = s, t[3] = d) : d = t[3];
		var m;
		t[4] !== n || t[5] !== i || t[6] !== d || t[7] !== l ? (m = u.jsx(r("WDSMenuBarItem.react"), {
			icon: n,
			title: d,
			testid: l,
			onClick: i
		}), t[4] = n, t[5] = i, t[6] = d, t[7] = l, t[8] = m) : m = t[8];
		var p;
		return t[9] !== c || t[10] !== m ? (p = u.jsx("div", babelHelpers.extends({}, c, { children: m })), t[9] = c, t[10] = m, t[11] = p) : p = t[11], p;
	}
	function R() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx("div", { className: "xxk0z11 x1i1rx1s x3x0x6p" }), e[0] = t) : t = e[0], t;
	}
	l.default = y;
}), 226);

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
	"react"
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
		var t = e.containerRef, n = e.filename, a = e.mimetype, i = e.onEditInAcrobat, l = o("WAWebTPEditPdfInWhatsappContext.react").useWAWebTPEditPdfInWhatsappContext(), c = l.activeAnnotationMode, y = l.filehash, v = l.selectedColor, S = l.selectedThickness, R = l.setActiveAnnotationMode, L = l.setIsEditing, E = l.setIsSending, k = l.setUndoRedoState, I = l.undoRedoState, T = p(!1), D = d(function(e) {
			o("WAWebTPLoggingUtils").logAnnotationToolSelectEvent(o("WAWebTPLoggingUtils").toolSelectForToolClick(c, e), y), g({
				activeAnnotationMode: c,
				selectedColor: v,
				selectedThickness: S,
				setActiveAnnotationMode: R,
				tool: e
			});
		}, [
			c,
			y,
			v,
			S,
			R
		]), x = d(function() {
			c != null && o("WAWebTPLoggingUtils").logAnnotationToolSelectEvent("select", y), R(null), o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:command", { type: "endMode" });
		}, [
			c,
			y,
			R
		]);
		function $() {
			o("WAWebTPLoggingUtils").logAnnotationEditActionEvent("undo", y), o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:command", { type: "undo" });
		}
		function P() {
			o("WAWebTPLoggingUtils").logAnnotationEditActionEvent("redo", y), o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:command", { type: "redo" });
		}
		o("WAWebTPEditPdfUndoRedoShortcuts").useWAWebTPEditPdfUndoRedoShortcuts({
			canRedo: I.hasRedo,
			canUndo: I.hasUndo,
			onRedo: P,
			onUndo: $
		}), m(function() {
			return o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:command", {
				type: "setEditMode",
				isEditing: !0
			}), function() {
				o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:command", {
					type: "setEditMode",
					isEditing: !1
				});
			};
		}, []);
		var N = p(!1);
		return m(function() {
			N.current || y == null || (N.current = !0, o("WAWebTPLoggingUtils").logAnnotationEditModeEnterEvent(y));
		}, [y]), m(function() {
			var e = function(t) {
				o("WAWebTPStickyAnnotationMode").shouldRestartAnnotationMode(t, c, T.current) && (T.current = !0, o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:command", {
					type: "restartMode",
					annotationType: t
				}), window.requestAnimationFrame(function() {
					T.current = !1;
				}));
			};
			return o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on("annotation:modeEnded", e), function() {
				o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.off("annotation:modeEnded", e);
			};
		}, [c]), m(function() {
			var e = function(t) {
				k(t);
			};
			return o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on("undoRedo:stateChange", e), function() {
				o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.off("undoRedo:stateChange", e);
			};
		}, [k]), u.jsxs(o("WAWebFlex.react").FlexRow, {
			ref: t,
			align: "center",
			xstyle: _.toolbar,
			children: [
				u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					columnGap: 8,
					xstyle: _.titleGroup,
					children: [u.jsx(r("WDSIconIcEdit.react"), { iconXstyle: _.editIcon }), u.jsx(r("WDSText.react"), {
						type: "Body2Emphasized",
						colorName: "contentDefault",
						maxLines: 1,
						xstyle: _.titleText,
						children: s._(
							/*BTDS*/
							"",
							[s._param("filename", n)]
						)
					})]
				}),
				u.jsx(o("WAWebFlex.react").FlexItem, { grow: 1 }),
				u.jsx("div", {
					className: "x78zum5 x6s0dn4 x2lah0s",
					children: u.jsxs(o("WAWebMenuBar.react").MenuBar, {
						gap: "single",
						children: [
							u.jsx(r("WDSMenuBarItem.react"), {
								icon: r("WDSIconIcUndo.react"),
								title: s._(
									/*BTDS*/
									""
								),
								testid: r("WAWebPdfViewerTestIds").EDIT_UNDO,
								onClick: $,
								disabled: !I.hasUndo
							}),
							u.jsx(r("WDSMenuBarItem.react"), {
								icon: r("WDSIconIcRedo.react"),
								title: s._(
									/*BTDS*/
									""
								),
								testid: r("WAWebPdfViewerTestIds").EDIT_REDO,
								onClick: P,
								disabled: !I.hasRedo
							}),
							c != null ? u.jsxs(u.Fragment, { children: [
								u.jsx(b, {}),
								u.jsx(r("WAWebTPEditPdfColorSelector.react"), {}),
								h(c) ? u.jsx(r("WAWebTPEditPdfThicknessSelector.react"), {}) : null
							] }) : null,
							u.jsx(b, {}),
							u.jsx(C, {
								icon: r("WDSIconIcNearMe.react"),
								isActive: c == null,
								onClick: x,
								testid: r("WAWebPdfViewerTestIds").EDIT_SELECT,
								title: function() {
									return s._(
										/*BTDS*/
										""
									);
								}
							}),
							f.map(function(e) {
								return u.jsx(C, {
									icon: e.icon,
									isActive: c === e.annotationType,
									onClick: function() {
										return D(e.annotationType);
									},
									testid: e.testid,
									title: e.title
								}, e.testid);
							}),
							u.jsx(r("WDSMenuBarItem.react"), {
								icon: o("WAWebAcrobatIcon.react").AcrobatIcon,
								title: s._(
									/*BTDS*/
									""
								),
								testid: r("WAWebPdfViewerTestIds").EDIT_IN_ACROBAT,
								onClick: i
							})
						]
					})
				}),
				u.jsx("div", {
					className: "x12w63v0 x2lah0s",
					children: u.jsx(r("WAWebUnstyledButton.react"), {
						xstyle: _.doneButton,
						testid: r("WAWebPdfViewerTestIds").EDIT_DONE,
						onClick: function() {
							o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:command", { type: "endMode" }), L(!1), E(I.hasUndo);
						},
						"aria-label": s._(
							/*BTDS*/
							""
						),
						children: u.jsx(r("WDSText.react"), {
							type: "Body2Emphasized",
							colorName: "contentDefault",
							children: s._(
								/*BTDS*/
								""
							)
						})
					})
				}),
				u.jsx(r("WAWebWebTPParentPdfFocusManagement.react"), {
					containerRef: t,
					mimetype: a
				})
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.icon, n = e.isActive, o = e.onClick, a = e.testid, i = e.title;
		return u.jsx("div", babelHelpers.extends({}, {
			0: { className: "x1n2onr6 x3nfvp2 xt8t1vi x1xc408v x129tdwq x15urzxu" },
			1: { className: "x1n2onr6 x3nfvp2 xt8t1vi x1xc408v x129tdwq x15urzxu x1s928wv x1j6awrg x1m1drc7 x1iygr5g x2q1x1w x77mdso x1fidlvn x1nys2zw x14gt54a x4eaejv x1wsn0xg x14k6s2n" }
		}[!!n << 0], { children: u.jsx(r("WDSMenuBarItem.react"), {
			icon: t,
			title: i(),
			testid: a,
			onClick: o
		}) }));
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b() {
		return u.jsx("div", { className: "xxk0z11 x1i1rx1s x3x0x6p" });
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = y;
}), 226);

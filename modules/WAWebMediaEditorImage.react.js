__d("WAWebMediaEditorImage.react", [
	"fbt",
	"Promise",
	"ReactDOM",
	"WAWebAttachMediaModel",
	"WAWebCopyToClipboard",
	"WAWebDeleteIcon.react",
	"WAWebFileSaver",
	"WAWebFileSaverTypes",
	"WAWebFlex.react",
	"WAWebIcDownloadIcon.react",
	"WAWebMediaEditorCanvas.react",
	"WAWebMediaEditorEnumsColors",
	"WAWebMediaEditorEnumsThemes",
	"WAWebMediaEditorEnumsThickness",
	"WAWebMediaEditorGeometryPoint",
	"WAWebMediaEditorGeometrySize",
	"WAWebMediaEditorLayersImage",
	"WAWebMediaEditorLayersShape",
	"WAWebMediaEditorLayersText",
	"WAWebMediaEditorOpenTrigger",
	"WAWebMediaEditorPreviewCropRotate.react",
	"WAWebMediaEditorTextToolbar.react",
	"WAWebMediaEditorToolbarBlur.react",
	"WAWebMediaEditorToolbarButton.react",
	"WAWebMediaEditorToolbarColor.react",
	"WAWebMediaEditorToolbarCropRotate",
	"WAWebMediaEditorToolbarFilter",
	"WAWebMediaEditorToolbarMain",
	"WAWebMediaEditorToolbarOutline",
	"WAWebMediaEditorToolbarShape.react",
	"WAWebMediaEditorToolbarThickness.react",
	"WAWebMediaEditorUtilsColor",
	"WAWebMediaEditorUtilsFilters",
	"WAWebMediaEditorUtilsSize",
	"WAWebPonyfillsIdleCallback",
	"WAWebStateUtils",
	"WAWebURLUtils",
	"WAWebUserPrefsGeneral",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSIconIcContentCopy.react",
	"WDSIconIcRedo.react",
	"WDSIconIcUndo.react",
	"WDSMargins.stylex",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSPaddings.stylex",
	"WDSTooltip.react",
	"asyncToGeneratorRuntime",
	"err",
	"react",
	"stylex",
	"useWAWebDebouncedCallback",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebMediaEditorCopyImage",
	"useWAWebModelValues",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d, m = d || (d = o("react")), p = d, _ = p.useEffect, f = p.useImperativeHandle, g = p.useRef, h = p.useState, y = { margin6: {
		marginTop: "x1k70j0n",
		marginInlineEnd: "xbelrpt",
		marginBottom: "xzueoph",
		marginInlineStart: "xdzw4kq",
		$$css: !0
	} }, C = 20, b = new (r("WAWebMediaEditorGeometrySize"))({
		width: 200,
		height: 200
	});
	function v(e) {
		return e === o("WAWebMediaEditorOpenTrigger").MediaEditorOpenTrigger.DrawingMenu ? "paint" : "none";
	}
	function S() {
		var e = o("WAWebUserPrefsGeneral").getLastMediaEditorPaintColor();
		return e != null ? o("WAWebMediaEditorUtilsColor").Color.fromHex(e) : o("WAWebMediaEditorEnumsColors").getColorValue(o("WAWebMediaEditorEnumsColors").ColorType.BLUE);
	}
	var R = {
		header: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "x1qughib",
			height: "xnnlda6",
			$$css: !0
		},
		sideHeader: {
			display: "x78zum5",
			$$css: !0
		},
		sideHeaderSection: {
			minWidth: "xq45ap7",
			$$css: !0
		},
		sideHeaderSectionWithTwoOptions: {
			minWidth: "x5onlcp",
			$$css: !0
		},
		sideHeaderSectionWithThreeOptions: {
			minWidth: "xce4x8b",
			$$css: !0
		},
		doneButton: {
			alignSelf: "xamitd3",
			$$css: !0
		},
		canvasContainer: {
			display: "x78zum5",
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			flexBasis: "x1r8uery",
			flexDirection: "xdt5ytf",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		footer: {
			position: "x1n2onr6",
			minHeight: "xo8q3i6",
			$$css: !0
		}
	};
	function L(t) {
		"use no forget";
		var a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, e), d = l.canRedo, p = l.canUndo, L = l.draftTextLayer, E = l.inFilterMode, k = l.isSendHQPhotoEnabled, I = k === void 0 ? !0 : k, T = l.mediaTheme, D = l.onClose, x = l.onCropRotateCanvas, $ = l.onFilterChange, P = l.onFilterSelect, N = l.onLayerDelete, M = l.onLayerUnselect, w = l.onOutlineDone, A = l.onOutlineSelect, F = l.onPaintSelect, O = l.onTextEditingEnd, B = l.onTextEditingStart, W = l.outlineSmoothing, q = l.paintThickness, U = o("useWAWebModelValues").useModelValues(l.attachMedia, [
			"mediaEditorData",
			"id",
			"quality",
			"hdEligible",
			"metadataByQuality",
			"editedFile"
		]), V = g(null), H = g(null), G = g(null), z = g(null), j = g(null), K = g(null), Q = g(null), X = g(null), Y = g(null), J = g(null), Z = h(r("WAWebMediaEditorGeometrySize").empty()), ee = Z[0], te = Z[1], ne = h(null), re = ne[0], oe = ne[1], ae = v(l.openTrigger), ie = h(ae === "paint"), le = ie[0], se = ie[1], ue = h(!1), ce = ue[0], de = ue[1], me = h(!1), pe = me[0], _e = me[1], fe = h(!1), ge = fe[0], he = fe[1], ye = h(!1), Ce = ye[0], be = ye[1], ve = h(!1), Se = ve[0], Re = ve[1], Le = g(ae === "paint"), Ee = h(function() {
			return ae === "paint" ? S() : o("WAWebMediaEditorEnumsColors").getColorValue(o("WAWebMediaEditorEnumsColors").ColorType.BLUE);
		}), ke = Ee[0], Ie = Ee[1], Te = function(t) {
			J.current = t.target;
		}, De = function(t) {
			o("WAWebStateUtils").unproxy(l.attachMedia).updateQuality(t);
		}, xe = function() {
			se(function(e) {
				var t = !e;
				return t && !Le.current && (Le.current = !0, Ie(S())), t;
			});
		}, $e = function(t) {
			Ie(t), o("WAWebUserPrefsGeneral").setLastMediaEditorPaintColor(t.toHex());
		}, Pe = function() {
			return U.mediaEditorData;
		}, Ne = function() {
			if (H.current) {
				var e = H.current.getBoundingClientRect(), t = r("WAWebMediaEditorGeometrySize").nonNegative({
					width: e.width - C * 2,
					height: e.height - C * 2
				});
				te(t);
			}
		}, Me = function() {
			!ce && Pe().getSelectedLayer() && M(), de(function(e) {
				return !e;
			}), Ne();
		}, we = function() {
			return le;
		}, Ae = function() {
			return ce;
		}, Fe = function() {
			return E;
		}, Oe = function() {
			return pe;
		}, Be = function() {
			_e(function(e) {
				return !e;
			});
		}, We = U.mediaEditorData, qe = function() {
			if (we()) xe();
			else if (Ae()) Me();
			else if (Fe()) $(We.getActiveFilter()), P();
			else if (Oe()) w(), Be();
			else if (U.mediaEditorData.getSelectedLayer() && !L) M();
			else return !1;
			return !0;
		}, Ue = function() {
			var e = J.current;
			(e === H.current || e === j.current || e === G.current) && qe();
		};
		o("useWAWebListener").useListener(window, "mousedown", Te), o("useWAWebListener").useListener(window, "click", Ue);
		var Ve = function() {
			var e = U.mediaEditorData.getSelectedLayer() || L;
			e && N(e);
		}, He = function(t) {
			J.current = t.target, t.key === "Backspace" && !(t.target instanceof HTMLInputElement) && !(t.target instanceof HTMLDivElement && t.target.contentEditable === "true") && !ce && Ve(), (t.key === "z" && t.shiftKey && t.metaKey || t.key === "y" && t.ctrlKey) && !(t.target instanceof HTMLInputElement) ? (t.preventDefault(), t.stopPropagation(), l.onRedo()) : t.key === "z" && (t.metaKey || t.ctrlKey) && !(t.target instanceof HTMLInputElement) && (t.preventDefault(), t.stopPropagation(), l.onUndo());
		};
		o("useWAWebMediaEditorCopyImage").useWAWebMediaEditorCopyImage(K, V);
		var Ge = function() {
			if (!K.current) throw r("err")("MediaEditor:canvas is not initialized");
			return K.current.getDataUrl();
		}, ze = function() {
			var e = Ge();
			return r("WAWebURLUtils").dataURLtoFile(e);
		}, je = function() {
			if (K.current != null) {
				var e = K.current.getStage().attrs, t = e.height, n = e.width;
				if (n !== 0 && t !== 0) {
					var r = ze(), o = window.URL.createObjectURL(r);
					U.updateEditedFile(r), U.updatePreview(o), U.updateFullPreview(o);
				}
			}
		}, Ke = r("useWAWebDebouncedCallback")(function() {
			Y.current && (o("WAWebPonyfillsIdleCallback").cancelIdleCallback(Y.current), Y.current = null), Y.current = o("WAWebPonyfillsIdleCallback").requestIdleCallback(je);
		}, 1e3), Qe = function(t) {
			t != null && t.immediately ? je() : Ke();
		};
		_(function() {
			return window.addEventListener("resize", Ne), window.addEventListener("keydown", He), Ne(), function() {
				window.removeEventListener("resize", Ne), window.removeEventListener("keydown", He), Qe({ immediately: !0 });
			};
		}, []);
		var Xe = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), Ye = function(t) {
			Xe(), B(t);
		}, Je = function(t, n) {
			Xe(), O(t, n);
		}, Ze = function() {
			if (ce) Me();
			else if (E) $(We.getActiveFilter()), P();
			else if (le) xe();
			else if (pe) w(), Be();
			else if (L) {
				var e;
				(e = K.current) == null || e.endTextEditing();
			} else Pe().getSelectedLayer() && M();
		}, et = function() {
			xe(), F();
		}, tt = function() {
			Me();
		}, nt = function(t) {
			x(Pe().getRotation() + t, Pe().getCropOrigin(), Pe().getCropSize());
		}, rt = function() {
			x(0, new (r("WAWebMediaEditorGeometryPoint"))({
				x: 0,
				y: 0
			}), Pe().getSize());
		}, ot = function(t, n) {
			x(Pe().getRotation(), t, n);
		}, at = function() {
			Be(), A();
		}, it = function(t) {
			he(t);
		}, lt = function(t) {
			Re(t);
		}, st = function(t) {
			be(t);
		}, ut = function(t) {
			var e, n, r = t.target;
			return !(r instanceof HTMLElement && j.current && j.current.contains(r) || (e = X.current) != null && e.isColorPanelVisible() || (n = X.current) != null && n.isFontMenuVisible());
		}, ct = function(t) {
			oe(t);
		}, dt = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = l.attachMedia, t = e.file, r = e.mediaEditorData, a = e.originalAttachment, i = yield (c || (c = n("Promise"))).resolve(a), s = function(t) {
					var e, n;
					o("WAWebFileSaver").FileSaver.downloadData(t, T === o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE ? "captured_image" : (e = i == null || (n = i.filename) == null ? void 0 : n.split(".").slice(0, -1).join(".")) != null ? e : "whatsapp_web_media", o("WAWebFileSaverTypes").AllowedFileExtensions.PNG);
				};
				if (r.hasEdits() || l.sendAsSticker) {
					Qe({ immediately: !0 });
					var u = l.attachMedia.editedFile;
					u instanceof Blob && s(u);
				} else t instanceof Blob && s(t);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), mt = r("useWDSMenu")({
			contextMenuArea: !0,
			enableUIM: !1,
			menu: m.jsxs(r("WDSMenu.react"), { children: [o("WAWebCopyToClipboard").supportsCopyImageToClipboard() && m.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcContentCopy.react"),
				onPress: function() {
					return o("useWAWebMediaEditorCopyImage").copyEditorImage(K);
				},
				testid: "media-editor-copy-menu-item",
				title: s._(
					/*BTDS*/
					""
				)
			}, "copy"), m.jsx(r("WDSMenuItem.react"), {
				Icon: o("WAWebIcDownloadIcon.react").IcDownloadIcon,
				onPress: function() {
					return void dt();
				},
				testid: "media-editor-download-menu-item",
				title: s._(
					/*BTDS*/
					""
				)
			}, "download")] }),
			targetRef: Q
		}), pt = mt.menuPortal, _t = mt.openMenu, ft = function(t, n) {
			t === o("WAWebAttachMediaModel").MediaEditorAction.OutlineDone ? (qe(), Be()) : t === o("WAWebAttachMediaModel").MediaEditorAction.Outline ? (Oe() && Be(), n === o("WAWebAttachMediaModel").MediaEditorAction.Outline && Be()) : t === o("WAWebAttachMediaModel").MediaEditorAction.CropRotateCanvas && (qe(), n === o("WAWebAttachMediaModel").MediaEditorAction.CropRotateCanvas && Me());
		}, gt = function(t, n) {
			t === o("WAWebAttachMediaModel").MediaEditorAction.OutlineDone ? qe() : t === o("WAWebAttachMediaModel").MediaEditorAction.Outline ? Oe() || Be() : t === o("WAWebAttachMediaModel").MediaEditorAction.CropRotateCanvas ? (qe(), Me()) : n === o("WAWebAttachMediaModel").MediaEditorAction.CropRotateCanvas && t !== o("WAWebAttachMediaModel").MediaEditorAction.CropRotateCanvas && qe();
		}, ht = function() {
			var e = U.mediaEditorData;
			return o("WAWebMediaEditorUtilsSize").calculateContainScale({
				height: e.getScreenHeight(),
				maxSize: ee,
				minSize: b,
				width: e.getScreenWidth()
			});
		}, yt = function() {
			var e = U.mediaEditorData;
			return new (r("WAWebMediaEditorGeometrySize"))({
				width: e.getScreenWidth(),
				height: e.getScreenHeight()
			});
		}, Ct = function() {
			var e;
			return (e = K.current) == null ? void 0 : e.getBackground();
		};
		f(i, function() {
			return {
				updatePreview: Qe,
				undoAction: ft,
				redoAction: gt,
				getCanvasScale: ht,
				getCanvasSize: yt,
				resetUIState: qe,
				getBackground: Ct
			};
		});
		var bt = l.draftTextLayer || We.getSelectedLayer(), vt;
		if (ce) vt = m.jsx(r("WAWebMediaEditorToolbarCropRotate"), {
			canReset: We.isRotated() || We.isCropped(),
			onRotateCanvas: nt,
			onReset: rt
		});
		else if (pe) vt = m.jsx(r("WAWebMediaEditorToolbarOutline"), {
			smoothing: l.outlineSmoothing,
			onSmoothingToggle: l.onOutlineSmoothingToggle,
			canReset: We.isOutlined(),
			onReset: l.onOutlineReset
		});
		else if (bt) {
			var St = bt instanceof o("WAWebMediaEditorLayersImage").ImageLayer && bt.isBackground();
			bt instanceof o("WAWebMediaEditorLayersText").TextLayer ? vt = m.jsx(o("WAWebMediaEditorTextToolbar.react").TextToolbar, {
				ref: X,
				textLayer: bt,
				onAlignmentSelect: l.onAlignmentSelect,
				onFontSelect: l.onFontSelect,
				onTextBackgroundToggle: l.onTextBackgroundToggle,
				onTextColorSelect: l.onTextColorSelect,
				onDeleteLayer: Ve
			}) : St || (vt = m.jsxs(m.Fragment, { children: [
				bt instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && bt.isBlur() ? m.jsx(o("WAWebMediaEditorToolbarBlur.react").BlurToolbar, {
					blurMode: bt.getMode(),
					blurRadius: bt.getRadius(),
					onBlurModeChange: l.onBlurModeChange,
					onBlurRadiusChange: l.onBlurRadiusChange
				}) : null,
				bt instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && !bt.isBlur() ? m.jsx(o("WAWebMediaEditorToolbarShape.react").ShapeToolbar, {
					fillColor: bt.getFillColor(),
					shape: bt.getShape(),
					strokeColor: bt.getStrokeColor(),
					strokeWidth: bt.getStrokeWidth(),
					onFillColorSelect: l.onShapeFillColorSelect,
					onStrokeColorSelect: l.onShapeStrokeColorSelect,
					onStrokeWidthSelect: l.onShapeStrokeWidthSelect
				}) : null,
				m.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
					icon: m.jsx(o("WAWebDeleteIcon.react").DeleteIcon, { displayInline: !0 }),
					title: s._(
						/*BTDS*/
						""
					),
					onClick: Ve
				})
			] }));
		} else le && (vt = m.jsxs(m.Fragment, { children: [m.jsx(o("WAWebMediaEditorToolbarColor.react").ColorToolbar, {
			colors: o("WAWebMediaEditorEnumsColors").getAllColors().map(function(e) {
				return { primaryColor: o("WAWebMediaEditorEnumsColors").getColorValue(e) };
			}),
			onColorSelect: $e,
			selectedColor: ke
		}), m.jsx(r("WAWebMediaEditorToolbarThickness.react"), {
			thicknesses: o("WAWebMediaEditorEnumsThickness").getAllThicknesses(),
			onThicknessSelect: l.onPaintThicknessSelect,
			selectedThickness: q
		})] }));
		var Rt = null;
		if (E) {
			var Lt;
			Rt = m.jsx(r("WAWebMediaEditorToolbarFilter"), {
				filters: o("WAWebMediaEditorUtilsFilters").getAllFilters(),
				imageUrl: (Lt = Pe().getBackground()) == null ? void 0 : Lt.getImage(),
				onFilterChange: $,
				selectedFilter: We.getActiveFilter(),
				onHover: ct
			});
		}
		var Et = !vt && !Rt && !l.draftTextLayer && !l.sendAsSticker, kt = Et && m.jsx(o("WAWebFlex.react").FlexRow, {
			className: "xh8yej3",
			justify: "center",
			children: l.captionInput
		}), It = Rt && m.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			align: "center",
			className: (u || (u = r("stylex")))(R.footer, o("WDSPaddings.stylex").wdsPaddings.paddingVer8, o("WDSPaddings.stylex").wdsPaddings.paddingHor0),
			ref: z,
			children: [m.jsx(o("WAWebFlex.react").FlexRow, {
				justify: "center",
				align: "center",
				className: (u || (u = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginVer0, o("WDSMargins.stylex").wdsMargins.marginHor8),
				children: Rt
			}), kt]
		}), Tt = m.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			align: "center",
			className: (u || (u = r("stylex")))(R.footer, o("WDSPaddings.stylex").wdsPaddings.paddingVer8, o("WDSPaddings.stylex").wdsPaddings.paddingHor0),
			ref: j,
			children: [vt && m.jsx(o("WAWebFlex.react").FlexRow, {
				justify: "center",
				align: "center",
				className: (u || (u = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginVer0, o("WDSMargins.stylex").wdsMargins.marginHor8),
				children: vt
			}), kt]
		}), Dt = null;
		ce && (Dt = m.jsx(r("WAWebMediaEditorPreviewCropRotate.react"), {
			data: We,
			rotation: Pe().getRotation(),
			cropOrigin: Pe().getCropOrigin(),
			cropSize: Pe().getCropSize(),
			onCropChange: ot,
			containerSize: ee,
			keepRatio: l.sendAsSticker,
			sendAsSticker: l.sendAsSticker
		}));
		var xt = navigator.platform.toUpperCase().indexOf("MAC") >= 0, $t = {
			icon: m.jsx(r("WDSIconIcUndo.react"), {}),
			testid: "undo-button",
			key: "undo",
			disabled: !p,
			onClick: l.onUndo
		}, Pt = {
			testid: "redo-button",
			key: "redo",
			disabled: !d
		}, Nt = xt ? m.jsx(r("WDSTooltip.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			children: m.jsx(r("WDSButton.react"), {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				disabled: $t.disabled,
				Icon: r("WDSIconIcUndo.react"),
				onPress: l.onUndo,
				size: "small",
				testid: $t.testid,
				variant: "borderless"
			}, $t.key)
		}) : m.jsx(r("WDSTooltip.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			children: m.jsx(r("WDSButton.react"), {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				disabled: $t.disabled,
				Icon: r("WDSIconIcUndo.react"),
				onPress: l.onUndo,
				size: "small",
				testid: $t.testid,
				variant: "borderless"
			}, $t.key)
		}), Mt = xt ? m.jsx(r("WDSTooltip.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			children: m.jsx(r("WDSButton.react"), {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				disabled: Pt.disabled,
				Icon: r("WDSIconIcRedo.react"),
				onPress: l.onRedo,
				size: "small",
				testid: Pt.testid,
				variant: "borderless"
			}, Pt.key)
		}) : m.jsx(r("WDSTooltip.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			children: m.jsx(r("WDSButton.react"), {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				disabled: Pt.disabled,
				Icon: r("WDSIconIcRedo.react"),
				onPress: l.onRedo,
				size: "small",
				testid: Pt.testid,
				variant: "borderless"
			}, Pt.key)
		}), wt = ce || E || le || pe || ge || Ce || Se || !!l.draftTextLayer || !!Pe().getSelectedLayer(), At = p !== d ? R.sideHeaderSectionWithTwoOptions : R.sideHeaderSectionWithThreeOptions, Ft = [R.sideHeader, p ? At : R.sideHeaderSection], Ot = [R.sideHeader, wt ? R.sideHeaderSectionWithTwoOptions : R.sideHeaderSection], Bt = ce || E || le || pe, Wt = Bt || We.hasEdits() || p || d, qt = (a = We.getBackground()) == null ? void 0 : a.getImage(), Ut = ht(), Vt = function(t) {
			Wt && _t(t);
		};
		return m.jsxs("div", {
			ref: V,
			className: "x78zum5 x1iyjqo2 xs83m0k x1r8uery xdt5ytf x1qughib x6ikm8r x10wlt62",
			children: [
				m.jsxs(o("WAWebFlex.react").FlexRow, {
					className: u(R.header, o("WDSPaddings.stylex").wdsPaddings.paddingVer8, o("WDSPaddings.stylex").wdsPaddings.paddingHor16),
					ref: G,
					children: [
						m.jsxs(o("WAWebFlex.react").FlexRow, {
							className: u(Ft),
							justify: "start",
							children: [
								D ? m.jsx(r("WDSTooltip.react"), {
									label: s._(
										/*BTDS*/
										""
									),
									children: m.jsx(r("WDSButton.react"), {
										"aria-label": s._(
											/*BTDS*/
											""
										),
										Icon: r("WDSIconIcClose.react"),
										onPress: D,
										size: "small",
										testid: "close-button",
										variant: "borderless"
									}, "close")
								}) : null,
								p && Nt,
								d && Mt
							]
						}),
						(function() {
							var e = m.jsx(r("WAWebMediaEditorToolbarMain"), {
								selectedLayer: bt,
								inPaintMode: le,
								inCropRotateMode: ce,
								inFilterMode: E,
								inTextEditingMode: !!l.draftTextLayer,
								inOutlineMode: pe,
								onPaintSelect: et,
								onChangeQuality: De,
								selectedQuality: U.quality,
								hdEligible: l.hdEligible,
								isSendHQPhotoEnabledProp: I,
								metadataByQuality: U.metadataByQuality,
								onCropRotateSelect: tt,
								onFilterSelect: P,
								onOutlineSelect: at,
								onTextSelect: l.onTextSelect,
								onEmojiSelect: l.onEmojiSelect,
								onShapeSelect: l.onShapeSelect,
								onStickerSelect: l.onStickerSelect,
								onToggleEmojiPanel: it,
								onToggleShapePanel: lt,
								onToggleStickerPanel: st,
								onBlurSelect: l.onBlurSelect,
								showOutline: l.sendAsSticker
							});
							return l.toolbarContainer != null ? o("ReactDOM").createPortal(e, l.toolbarContainer) : e;
						})(),
						m.jsxs(o("WAWebFlex.react").FlexRow, {
							className: u(Ot),
							justify: "end",
							children: [
								wt && m.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
									xstyle: R.doneButton,
									onClick: Ze,
									testid: "media-editor-done-button",
									children: s._(
										/*BTDS*/
										""
									)
								}),
								o("WAWebCopyToClipboard").supportsCopyImageToClipboard() && m.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
									xstyle: R.doneButton,
									icon: m.jsx(r("WDSIconIcContentCopy.react"), {}),
									title: s._(
										/*BTDS*/
										""
									),
									onClick: function() {
										return o("useWAWebMediaEditorCopyImage").copyEditorImage(K);
									},
									testid: "media-editor-copy-button"
								}),
								m.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
									xstyle: R.doneButton,
									icon: m.jsx(o("WAWebIcDownloadIcon.react").IcDownloadIcon, {}),
									title: s._(
										/*BTDS*/
										""
									),
									onClick: function() {
										return void dt();
									}
								})
							]
						})
					]
				}),
				It,
				m.jsxs("div", babelHelpers.extends({ ref: H }, u.props(R.canvasContainer, ce && y.margin6, o("WDSMargins.stylex").wdsMargins.margin16), { children: [m.jsxs("div", {
					ref: Q,
					className: {
						0: "x1n2onr6 xsm26vf xminmjj",
						1: "x1n2onr6 xsm26vf x1gnnqk1"
					}[(l.hideCanvasShadow === !0) << 0],
					style: { display: ce ? "none" : "unset" },
					"data-testid": "media-editor-canvas",
					onContextMenu: Vt,
					children: [pt, !Wt && qt instanceof HTMLImageElement ? m.jsx("img", {
						src: qt.src,
						height: We.getScreenHeight() * Ut.y,
						width: We.getScreenWidth() * Ut.x,
						alt: ""
					}) : m.jsx(r("WAWebMediaEditorCanvas.react"), {
						ref: K,
						data: We,
						hoveredFilter: re,
						inFilterMode: E,
						inOutlineMode: pe,
						inPaintMode: le,
						paintColor: ke,
						paintThickness: q,
						outlineSmoothing: W,
						currentlyEditingTextLayer: l.currentlyEditingTextLayer,
						draftTextLayer: l.draftTextLayer,
						scale: Ut,
						onLayerSelect: l.onLayerSelect,
						onLayerUnselect: l.onLayerUnselect,
						onLayerTranslate: l.onLayerTranslate,
						onLayerTransform: l.onLayerTransform,
						onTextEditingStart: Ye,
						onTextEditingEnd: Je,
						onTextInputOutsideClick: ut,
						onPaintDrawEnd: l.onPaintDrawEnd,
						onPointsChange: l.onPointsChange,
						onOutlineDrawEnd: l.onOutlineDrawEnd,
						onOutlineDone: Ze,
						canEditBackground: l.sendAsSticker,
						outlineEnabled: l.sendAsSticker
					})]
				}), Dt] })),
				!E && l.hideFooter !== !0 && Tt
			]
		});
	}
	L.displayName = L.name + " [from " + i.id + "]", l.default = L;
}), 226);

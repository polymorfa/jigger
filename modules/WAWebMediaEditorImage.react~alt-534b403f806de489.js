__d("WAWebMediaEditorImage.react", [
	"fbt",
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
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useImperativeHandle, f = m.useRef, g = m.useState, h = { margin6: {
		marginTop: "x1k70j0n",
		marginInlineEnd: "xbelrpt",
		marginBottom: "xzueoph",
		marginInlineStart: "xdzw4kq",
		$$css: !0
	} }, y = 20, C = new (r("WAWebMediaEditorGeometrySize"))({
		width: 200,
		height: 200
	});
	function b(e) {
		return e === o("WAWebMediaEditorOpenTrigger").MediaEditorOpenTrigger.DrawingMenu ? "paint" : "none";
	}
	function v() {
		var e = o("WAWebUserPrefsGeneral").getLastMediaEditorPaintColor();
		return e != null ? o("WAWebMediaEditorUtilsColor").Color.fromHex(e) : o("WAWebMediaEditorEnumsColors").getColorValue(o("WAWebMediaEditorEnumsColors").ColorType.BLUE);
	}
	var S = {
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
	function R(t) {
		"use no forget";
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.canRedo, c = i.canUndo, m = i.draftTextLayer, R = i.inFilterMode, L = i.isSendHQPhotoEnabled, E = L === void 0 ? !0 : L, k = i.mediaTheme, I = i.onClose, T = i.onCropRotateCanvas, D = i.onFilterChange, x = i.onFilterSelect, $ = i.onLayerDelete, P = i.onLayerUnselect, N = i.onOutlineDone, M = i.onOutlineSelect, w = i.onPaintSelect, A = i.onTextEditingEnd, F = i.onTextEditingStart, O = i.outlineSmoothing, B = i.paintThickness, W = o("useWAWebModelValues").useModelValues(i.attachMedia, [
			"mediaEditorData",
			"id",
			"quality",
			"hdEligible",
			"metadataByQuality",
			"editedFile"
		]), q = f(null), U = f(null), V = f(null), H = f(null), G = f(null), z = f(null), j = f(null), K = f(null), Q = f(null), X = f(null), Y = g(r("WAWebMediaEditorGeometrySize").empty()), J = Y[0], Z = Y[1], ee = g(null), te = ee[0], ne = ee[1], re = b(i.openTrigger), oe = g(re === "paint"), ae = oe[0], ie = oe[1], le = g(!1), se = le[0], ue = le[1], ce = g(!1), de = ce[0], me = ce[1], pe = g(!1), _e = pe[0], fe = pe[1], ge = g(!1), he = ge[0], ye = ge[1], Ce = g(!1), be = Ce[0], ve = Ce[1], Se = f(re === "paint"), Re = g(function() {
			return re === "paint" ? v() : o("WAWebMediaEditorEnumsColors").getColorValue(o("WAWebMediaEditorEnumsColors").ColorType.BLUE);
		}), Le = Re[0], Ee = Re[1], ke = function(t) {
			X.current = t.target;
		}, Ie = function(t) {
			o("WAWebStateUtils").unproxy(i.attachMedia).updateQuality(t);
		}, Te = function() {
			ie(function(e) {
				var t = !e;
				return t && !Se.current && (Se.current = !0, Ee(v())), t;
			});
		}, De = function(t) {
			Ee(t), o("WAWebUserPrefsGeneral").setLastMediaEditorPaintColor(t.toHex());
		}, xe = function() {
			return W.mediaEditorData;
		}, $e = function() {
			if (U.current) {
				var e = U.current.getBoundingClientRect(), t = r("WAWebMediaEditorGeometrySize").nonNegative({
					width: e.width - y * 2,
					height: e.height - y * 2
				});
				Z(t);
			}
		}, Pe = function() {
			!se && xe().getSelectedLayer() && P(), ue(function(e) {
				return !e;
			}), $e();
		}, Ne = function() {
			return ae;
		}, Me = function() {
			return se;
		}, we = function() {
			return R;
		}, Ae = function() {
			return de;
		}, Fe = function() {
			me(function(e) {
				return !e;
			});
		}, Oe = W.mediaEditorData, Be = function() {
			if (Ne()) Te();
			else if (Me()) Pe();
			else if (we()) D(Oe.getActiveFilter()), x();
			else if (Ae()) N(), Fe();
			else if (W.mediaEditorData.getSelectedLayer() && !m) P();
			else return !1;
			return !0;
		}, We = function() {
			var e = X.current;
			(e === U.current || e === G.current || e === V.current) && Be();
		};
		o("useWAWebListener").useListener(window, "mousedown", ke), o("useWAWebListener").useListener(window, "click", We);
		var qe = function() {
			var e = W.mediaEditorData.getSelectedLayer() || m;
			e && $(e);
		}, Ue = function(t) {
			X.current = t.target, t.key === "Backspace" && !(t.target instanceof HTMLInputElement) && !(t.target instanceof HTMLDivElement && t.target.contentEditable === "true") && !se && qe(), (t.key === "z" && t.shiftKey && t.metaKey || t.key === "y" && t.ctrlKey) && !(t.target instanceof HTMLInputElement) ? (t.preventDefault(), t.stopPropagation(), i.onRedo()) : t.key === "z" && (t.metaKey || t.ctrlKey) && !(t.target instanceof HTMLInputElement) && (t.preventDefault(), t.stopPropagation(), i.onUndo());
		};
		o("useWAWebMediaEditorCopyImage").useWAWebMediaEditorCopyImage(z, q);
		var Ve = function() {
			if (!z.current) throw r("err")("MediaEditor:canvas is not initialized");
			return z.current.getDataUrl();
		}, He = function() {
			var e = Ve();
			return r("WAWebURLUtils").dataURLtoFile(e);
		}, Ge = function() {
			if (z.current != null) {
				var e = z.current.getStage().attrs, t = e.height, n = e.width;
				if (n !== 0 && t !== 0) {
					var r = He(), o = window.URL.createObjectURL(r);
					W.updateEditedFile(r), W.updatePreview(o), W.updateFullPreview(o);
				}
			}
		}, ze = r("useWAWebDebouncedCallback")(function() {
			Q.current && (o("WAWebPonyfillsIdleCallback").cancelIdleCallback(Q.current), Q.current = null), Q.current = o("WAWebPonyfillsIdleCallback").requestIdleCallback(Ge);
		}, 1e3), je = function(t) {
			t != null && t.immediately ? Ge() : ze();
		};
		p(function() {
			return window.addEventListener("resize", $e), window.addEventListener("keydown", Ue), $e(), function() {
				window.removeEventListener("resize", $e), window.removeEventListener("keydown", Ue), je({ immediately: !0 });
			};
		}, []);
		var Ke = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), Qe = function(t) {
			Ke(), F(t);
		}, Xe = function(t, n) {
			Ke(), A(t, n);
		}, Ye = function() {
			if (se) Pe();
			else if (R) D(Oe.getActiveFilter()), x();
			else if (ae) Te();
			else if (de) N(), Fe();
			else if (m) {
				var e;
				(e = z.current) == null || e.endTextEditing();
			} else xe().getSelectedLayer() && P();
		}, Je = function() {
			Te(), w();
		}, Ze = function() {
			Pe();
		}, et = function(t) {
			T(xe().getRotation() + t, xe().getCropOrigin(), xe().getCropSize());
		}, tt = function() {
			T(0, new (r("WAWebMediaEditorGeometryPoint"))({
				x: 0,
				y: 0
			}), xe().getSize());
		}, nt = function(t, n) {
			T(xe().getRotation(), t, n);
		}, rt = function() {
			Fe(), M();
		}, ot = function(t) {
			fe(t);
		}, at = function(t) {
			ve(t);
		}, it = function(t) {
			ye(t);
		}, lt = function(t) {
			var e, n, r = t.target;
			return !(r instanceof HTMLElement && G.current && G.current.contains(r) || (e = K.current) != null && e.isColorPanelVisible() || (n = K.current) != null && n.isFontMenuVisible());
		}, st = function(t) {
			ne(t);
		}, ut = async function() {
			var e = i.attachMedia, t = e.file, n = e.mediaEditorData, r = e.originalAttachment, a = await Promise.resolve(r), l = function(t) {
				var e, n;
				o("WAWebFileSaver").FileSaver.downloadData(t, k === o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE ? "captured_image" : (e = a == null || (n = a.filename) == null ? void 0 : n.split(".").slice(0, -1).join(".")) != null ? e : "whatsapp_web_media", o("WAWebFileSaverTypes").AllowedFileExtensions.PNG);
			};
			if (n.hasEdits() || i.sendAsSticker) {
				je({ immediately: !0 });
				var s = i.attachMedia.editedFile;
				s instanceof Blob && l(s);
			} else t instanceof Blob && l(t);
		}, ct = r("useWDSMenu")({
			contextMenuArea: !0,
			enableUIM: !1,
			menu: d.jsxs(r("WDSMenu.react"), { children: [o("WAWebCopyToClipboard").supportsCopyImageToClipboard() && d.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcContentCopy.react"),
				onPress: function() {
					return o("useWAWebMediaEditorCopyImage").copyEditorImage(z);
				},
				testid: "media-editor-copy-menu-item",
				title: s._(
					/*BTDS*/
					""
				)
			}, "copy"), d.jsx(r("WDSMenuItem.react"), {
				Icon: o("WAWebIcDownloadIcon.react").IcDownloadIcon,
				onPress: function() {
					return void ut();
				},
				testid: "media-editor-download-menu-item",
				title: s._(
					/*BTDS*/
					""
				)
			}, "download")] }),
			targetRef: j
		}), dt = ct.menuPortal, mt = ct.openMenu, pt = function(t, n) {
			t === o("WAWebAttachMediaModel").MediaEditorAction.OutlineDone ? (Be(), Fe()) : t === o("WAWebAttachMediaModel").MediaEditorAction.Outline ? (Ae() && Fe(), n === o("WAWebAttachMediaModel").MediaEditorAction.Outline && Fe()) : t === o("WAWebAttachMediaModel").MediaEditorAction.CropRotateCanvas && (Be(), n === o("WAWebAttachMediaModel").MediaEditorAction.CropRotateCanvas && Pe());
		}, _t = function(t, n) {
			t === o("WAWebAttachMediaModel").MediaEditorAction.OutlineDone ? Be() : t === o("WAWebAttachMediaModel").MediaEditorAction.Outline ? Ae() || Fe() : t === o("WAWebAttachMediaModel").MediaEditorAction.CropRotateCanvas ? (Be(), Pe()) : n === o("WAWebAttachMediaModel").MediaEditorAction.CropRotateCanvas && t !== o("WAWebAttachMediaModel").MediaEditorAction.CropRotateCanvas && Be();
		}, ft = function() {
			var e = W.mediaEditorData;
			return o("WAWebMediaEditorUtilsSize").calculateContainScale({
				height: e.getScreenHeight(),
				maxSize: J,
				minSize: C,
				width: e.getScreenWidth()
			});
		}, gt = function() {
			var e = W.mediaEditorData;
			return new (r("WAWebMediaEditorGeometrySize"))({
				width: e.getScreenWidth(),
				height: e.getScreenHeight()
			});
		}, ht = function() {
			var e;
			return (e = z.current) == null ? void 0 : e.getBackground();
		};
		_(a, function() {
			return {
				updatePreview: je,
				undoAction: pt,
				redoAction: _t,
				getCanvasScale: ft,
				getCanvasSize: gt,
				resetUIState: Be,
				getBackground: ht
			};
		});
		var yt = i.draftTextLayer || Oe.getSelectedLayer(), Ct;
		if (se) Ct = d.jsx(r("WAWebMediaEditorToolbarCropRotate"), {
			canReset: Oe.isRotated() || Oe.isCropped(),
			onRotateCanvas: et,
			onReset: tt
		});
		else if (de) Ct = d.jsx(r("WAWebMediaEditorToolbarOutline"), {
			smoothing: i.outlineSmoothing,
			onSmoothingToggle: i.onOutlineSmoothingToggle,
			canReset: Oe.isOutlined(),
			onReset: i.onOutlineReset
		});
		else if (yt) {
			var bt = yt instanceof o("WAWebMediaEditorLayersImage").ImageLayer && yt.isBackground();
			yt instanceof o("WAWebMediaEditorLayersText").TextLayer ? Ct = d.jsx(o("WAWebMediaEditorTextToolbar.react").TextToolbar, {
				ref: K,
				textLayer: yt,
				onAlignmentSelect: i.onAlignmentSelect,
				onFontSelect: i.onFontSelect,
				onTextBackgroundToggle: i.onTextBackgroundToggle,
				onTextColorSelect: i.onTextColorSelect,
				onDeleteLayer: qe
			}) : bt || (Ct = d.jsxs(d.Fragment, { children: [
				yt instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && yt.isBlur() ? d.jsx(o("WAWebMediaEditorToolbarBlur.react").BlurToolbar, {
					blurMode: yt.getMode(),
					blurRadius: yt.getRadius(),
					onBlurModeChange: i.onBlurModeChange,
					onBlurRadiusChange: i.onBlurRadiusChange
				}) : null,
				yt instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && !yt.isBlur() ? d.jsx(o("WAWebMediaEditorToolbarShape.react").ShapeToolbar, {
					fillColor: yt.getFillColor(),
					shape: yt.getShape(),
					strokeColor: yt.getStrokeColor(),
					strokeWidth: yt.getStrokeWidth(),
					onFillColorSelect: i.onShapeFillColorSelect,
					onStrokeColorSelect: i.onShapeStrokeColorSelect,
					onStrokeWidthSelect: i.onShapeStrokeWidthSelect
				}) : null,
				d.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
					icon: d.jsx(o("WAWebDeleteIcon.react").DeleteIcon, { displayInline: !0 }),
					title: s._(
						/*BTDS*/
						""
					),
					onClick: qe
				})
			] }));
		} else ae && (Ct = d.jsxs(d.Fragment, { children: [d.jsx(o("WAWebMediaEditorToolbarColor.react").ColorToolbar, {
			colors: o("WAWebMediaEditorEnumsColors").getAllColors().map(function(e) {
				return { primaryColor: o("WAWebMediaEditorEnumsColors").getColorValue(e) };
			}),
			onColorSelect: De,
			selectedColor: Le
		}), d.jsx(r("WAWebMediaEditorToolbarThickness.react"), {
			thicknesses: o("WAWebMediaEditorEnumsThickness").getAllThicknesses(),
			onThicknessSelect: i.onPaintThicknessSelect,
			selectedThickness: B
		})] }));
		var vt = null;
		if (R) {
			var St;
			vt = d.jsx(r("WAWebMediaEditorToolbarFilter"), {
				filters: o("WAWebMediaEditorUtilsFilters").getAllFilters(),
				imageUrl: (St = xe().getBackground()) == null ? void 0 : St.getImage(),
				onFilterChange: D,
				selectedFilter: Oe.getActiveFilter(),
				onHover: st
			});
		}
		var Rt = !Ct && !vt && !i.draftTextLayer && !i.sendAsSticker, Lt = Rt && d.jsx(o("WAWebFlex.react").FlexRow, {
			className: "xh8yej3",
			justify: "center",
			children: i.captionInput
		}), Et = vt && d.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			align: "center",
			className: (u || (u = r("stylex")))(S.footer, o("WDSPaddings.stylex").wdsPaddings.paddingVer8, o("WDSPaddings.stylex").wdsPaddings.paddingHor0),
			ref: H,
			children: [d.jsx(o("WAWebFlex.react").FlexRow, {
				justify: "center",
				align: "center",
				className: (u || (u = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginVer0, o("WDSMargins.stylex").wdsMargins.marginHor8),
				children: vt
			}), Lt]
		}), kt = d.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			align: "center",
			className: (u || (u = r("stylex")))(S.footer, o("WDSPaddings.stylex").wdsPaddings.paddingVer8, o("WDSPaddings.stylex").wdsPaddings.paddingHor0),
			ref: G,
			children: [Ct && d.jsx(o("WAWebFlex.react").FlexRow, {
				justify: "center",
				align: "center",
				className: (u || (u = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginVer0, o("WDSMargins.stylex").wdsMargins.marginHor8),
				children: Ct
			}), Lt]
		}), It = null;
		se && (It = d.jsx(r("WAWebMediaEditorPreviewCropRotate.react"), {
			data: Oe,
			rotation: xe().getRotation(),
			cropOrigin: xe().getCropOrigin(),
			cropSize: xe().getCropSize(),
			onCropChange: nt,
			containerSize: J,
			keepRatio: i.sendAsSticker,
			sendAsSticker: i.sendAsSticker
		}));
		var Tt = navigator.platform.toUpperCase().indexOf("MAC") >= 0, Dt = {
			icon: d.jsx(r("WDSIconIcUndo.react"), {}),
			testid: "undo-button",
			key: "undo",
			disabled: !c,
			onClick: i.onUndo
		}, xt = {
			testid: "redo-button",
			key: "redo",
			disabled: !l
		}, $t = Tt ? d.jsx(r("WDSTooltip.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			children: d.jsx(r("WDSButton.react"), {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				disabled: Dt.disabled,
				Icon: r("WDSIconIcUndo.react"),
				onPress: i.onUndo,
				size: "small",
				testid: Dt.testid,
				variant: "borderless"
			}, Dt.key)
		}) : d.jsx(r("WDSTooltip.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			children: d.jsx(r("WDSButton.react"), {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				disabled: Dt.disabled,
				Icon: r("WDSIconIcUndo.react"),
				onPress: i.onUndo,
				size: "small",
				testid: Dt.testid,
				variant: "borderless"
			}, Dt.key)
		}), Pt = Tt ? d.jsx(r("WDSTooltip.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			children: d.jsx(r("WDSButton.react"), {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				disabled: xt.disabled,
				Icon: r("WDSIconIcRedo.react"),
				onPress: i.onRedo,
				size: "small",
				testid: xt.testid,
				variant: "borderless"
			}, xt.key)
		}) : d.jsx(r("WDSTooltip.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			children: d.jsx(r("WDSButton.react"), {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				disabled: xt.disabled,
				Icon: r("WDSIconIcRedo.react"),
				onPress: i.onRedo,
				size: "small",
				testid: xt.testid,
				variant: "borderless"
			}, xt.key)
		}), Nt = se || R || ae || de || _e || he || be || !!i.draftTextLayer || !!xe().getSelectedLayer(), Mt = c !== l ? S.sideHeaderSectionWithTwoOptions : S.sideHeaderSectionWithThreeOptions, wt = [S.sideHeader, c ? Mt : S.sideHeaderSection], At = [S.sideHeader, Nt ? S.sideHeaderSectionWithTwoOptions : S.sideHeaderSection], Ft = se || R || ae || de, Ot = Ft || Oe.hasEdits() || c || l, Bt = (n = Oe.getBackground()) == null ? void 0 : n.getImage(), Wt = ft(), qt = function(t) {
			Ot && mt(t);
		};
		return d.jsxs("div", {
			ref: q,
			className: "x78zum5 x1iyjqo2 xs83m0k x1r8uery xdt5ytf x1qughib x6ikm8r x10wlt62",
			children: [
				d.jsxs(o("WAWebFlex.react").FlexRow, {
					className: u(S.header, o("WDSPaddings.stylex").wdsPaddings.paddingVer8, o("WDSPaddings.stylex").wdsPaddings.paddingHor16),
					ref: V,
					children: [
						d.jsxs(o("WAWebFlex.react").FlexRow, {
							className: u(wt),
							justify: "start",
							children: [
								I ? d.jsx(r("WDSTooltip.react"), {
									label: s._(
										/*BTDS*/
										""
									),
									children: d.jsx(r("WDSButton.react"), {
										"aria-label": s._(
											/*BTDS*/
											""
										),
										Icon: r("WDSIconIcClose.react"),
										onPress: I,
										size: "small",
										testid: "close-button",
										variant: "borderless"
									}, "close")
								}) : null,
								c && $t,
								l && Pt
							]
						}),
						(function() {
							var e = d.jsx(r("WAWebMediaEditorToolbarMain"), {
								selectedLayer: yt,
								inPaintMode: ae,
								inCropRotateMode: se,
								inFilterMode: R,
								inTextEditingMode: !!i.draftTextLayer,
								inOutlineMode: de,
								onPaintSelect: Je,
								onChangeQuality: Ie,
								selectedQuality: W.quality,
								hdEligible: i.hdEligible,
								isSendHQPhotoEnabledProp: E,
								metadataByQuality: W.metadataByQuality,
								onCropRotateSelect: Ze,
								onFilterSelect: x,
								onOutlineSelect: rt,
								onTextSelect: i.onTextSelect,
								onEmojiSelect: i.onEmojiSelect,
								onShapeSelect: i.onShapeSelect,
								onStickerSelect: i.onStickerSelect,
								onToggleEmojiPanel: ot,
								onToggleShapePanel: at,
								onToggleStickerPanel: it,
								onBlurSelect: i.onBlurSelect,
								showOutline: i.sendAsSticker
							});
							return i.toolbarContainer != null ? o("ReactDOM").createPortal(e, i.toolbarContainer) : e;
						})(),
						d.jsxs(o("WAWebFlex.react").FlexRow, {
							className: u(At),
							justify: "end",
							children: [
								Nt && d.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
									xstyle: S.doneButton,
									onClick: Ye,
									testid: "media-editor-done-button",
									children: s._(
										/*BTDS*/
										""
									)
								}),
								o("WAWebCopyToClipboard").supportsCopyImageToClipboard() && d.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
									xstyle: S.doneButton,
									icon: d.jsx(r("WDSIconIcContentCopy.react"), {}),
									title: s._(
										/*BTDS*/
										""
									),
									onClick: function() {
										return o("useWAWebMediaEditorCopyImage").copyEditorImage(z);
									},
									testid: "media-editor-copy-button"
								}),
								d.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
									xstyle: S.doneButton,
									icon: d.jsx(o("WAWebIcDownloadIcon.react").IcDownloadIcon, {}),
									title: s._(
										/*BTDS*/
										""
									),
									onClick: function() {
										return void ut();
									}
								})
							]
						})
					]
				}),
				Et,
				d.jsxs("div", babelHelpers.extends({ ref: U }, u.props(S.canvasContainer, se && h.margin6, o("WDSMargins.stylex").wdsMargins.margin16), { children: [d.jsxs("div", {
					ref: j,
					className: {
						0: "x1n2onr6 xsm26vf xminmjj",
						1: "x1n2onr6 xsm26vf x1gnnqk1"
					}[(i.hideCanvasShadow === !0) << 0],
					style: { display: se ? "none" : "unset" },
					"data-testid": "media-editor-canvas",
					onContextMenu: qt,
					children: [dt, !Ot && Bt instanceof HTMLImageElement ? d.jsx("img", {
						src: Bt.src,
						height: Oe.getScreenHeight() * Wt.y,
						width: Oe.getScreenWidth() * Wt.x,
						alt: ""
					}) : d.jsx(r("WAWebMediaEditorCanvas.react"), {
						ref: z,
						data: Oe,
						hoveredFilter: te,
						inFilterMode: R,
						inOutlineMode: de,
						inPaintMode: ae,
						paintColor: Le,
						paintThickness: B,
						outlineSmoothing: O,
						currentlyEditingTextLayer: i.currentlyEditingTextLayer,
						draftTextLayer: i.draftTextLayer,
						scale: Wt,
						onLayerSelect: i.onLayerSelect,
						onLayerUnselect: i.onLayerUnselect,
						onLayerTranslate: i.onLayerTranslate,
						onLayerTransform: i.onLayerTransform,
						onTextEditingStart: Qe,
						onTextEditingEnd: Xe,
						onTextInputOutsideClick: lt,
						onPaintDrawEnd: i.onPaintDrawEnd,
						onPointsChange: i.onPointsChange,
						onOutlineDrawEnd: i.onOutlineDrawEnd,
						onOutlineDone: Ye,
						canEditBackground: i.sendAsSticker,
						outlineEnabled: i.sendAsSticker
					})]
				}), It] })),
				!R && i.hideFooter !== !0 && kt
			]
		});
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 226);

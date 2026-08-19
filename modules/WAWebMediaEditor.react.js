__d("WAWebMediaEditor.react", [
	"fbt",
	"Promise",
	"WAFilteredCatch",
	"WALogger",
	"WAWebAttachMediaModel",
	"WAWebBizAdCreationMediaValidationUtils",
	"WAWebChatPreferenceCollection",
	"WAWebCmd",
	"WAWebDataTransfer",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebEventFiles",
	"WAWebFileUtils",
	"WAWebFlex.react",
	"WAWebFocusTracer",
	"WAWebKeyboardHotKeys.react",
	"WAWebMediaEditorData",
	"WAWebMediaEditorEnumsColors",
	"WAWebMediaEditorEnumsFonts",
	"WAWebMediaEditorEnumsThemes",
	"WAWebMediaEditorEnumsThickness",
	"WAWebMediaEditorFilmstripDragAndDrop.react",
	"WAWebMediaEditorGeometryPoint",
	"WAWebMediaEditorGeometrySize",
	"WAWebMediaEditorImage.react",
	"WAWebMediaEditorLayersImage",
	"WAWebMediaEditorLayersShape",
	"WAWebMediaEditorLayersText",
	"WAWebMediaEditorOpenTrigger",
	"WAWebMediaEditorPreviewAudio.react",
	"WAWebMediaEditorPreviewFile.react",
	"WAWebMediaEditorPreviewPdf.react",
	"WAWebMediaEditorPreviewVideo.react",
	"WAWebMediaEditorToolbarBlur.react",
	"WAWebMediaEditorUtilsCreateCanvasAndImage",
	"WAWebMediaEditorUtilsFilterType",
	"WAWebMediaEditorUtilsShapes",
	"WAWebMediaLoadErrors",
	"WAWebMimeTypes",
	"WAWebMsgType",
	"WAWebNoop",
	"WAWebPlusIcon.react",
	"WAWebScheduleMessageButton.react",
	"WAWebSendButtonWithCount.react",
	"WAWebSpinner.react",
	"WAWebStickerConstants",
	"WAWebStickerSendWamEvent",
	"WAWebStopEvent",
	"WAWebTPPdfViewerGatingUtils",
	"WAWebTimeSpentLoggingNavigation",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUim",
	"WAWebWamEnumMediaPickerOriginType",
	"WAWebWamEnumStickerMakerSourceType",
	"WAWebWamEnumStickerSendOriginType",
	"WAWebWamEnumWebcStickerMakerEventNameType",
	"WAWebWebcMediaEditorSendWamEvent",
	"WAWebWebcStickerMakerEventsWamEvent",
	"WDSButton.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"asyncToGeneratorRuntime",
	"cr:10202",
	"err",
	"getErrorSafe",
	"nullthrows",
	"react",
	"stylex",
	"useLazyRef",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebTimeout",
	"useWAWebToggle",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = ["ref"], m, p, _, f = _ || (_ = o("react")), g = _, h = g.useEffect, y = g.useImperativeHandle, C = g.useRef, b = g.useState, v = { marginInline5: {
		marginInlineStart: "xpcyujq",
		marginInlineEnd: "xf6vk7d",
		marginLeft: null,
		marginRight: null,
		$$css: !0
	} }, S = 200, R = 64, L = R * 2, E = 128, k = 1.2, I = o("WAWebMediaEditorLayersText").DEFAULT_FONT_SIZE * 3, T = 200, D = 100, x = 100, $ = 100, P = {
		footer: {
			display: "x78zum5",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			flexBasis: "x1helyrv",
			alignItems: "x6s0dn4",
			justifyContent: "x1qughib",
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "xx42vgk",
			$$css: !0
		},
		footerBroadcast: {
			display: "x78zum5",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			flexBasis: "x1helyrv",
			alignItems: "x6s0dn4",
			justifyContent: "x13a6bvl",
			$$css: !0
		},
		addMediaButton: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			minWidth: "x9hgts1",
			height: "xdd8jsf",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x1pyc6se",
			borderInlineEndColor: "x1mlb2bo",
			borderBottomColor: "x16pkwpw",
			borderInlineStartColor: "xqe4bef",
			borderStartStartRadius: "x13t61ll",
			borderStartEndRadius: "x1kchd1x",
			borderEndEndRadius: "x1u0fnx4",
			borderEndStartRadius: "xbxn0j6",
			$$css: !0
		},
		addMediaButtonDisabled: {
			cursor: "x1h6gzvc",
			$$css: !0
		},
		filmstripContainer: {
			boxSizing: "x9f619",
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			flexBasis: "xdl72j9",
			$$css: !0
		},
		scheduleButton: {
			alignSelf: "xamitd3",
			$$css: !0
		}
	};
	function N(e) {
		if (!e.hasSetFromPrefs) {
			var t = e.hdEligible && r("WAWebChatPreferenceCollection").getDefault().hdMediaEnabled ? o("WAWebAttachMediaModel").MediaQuality.HD : o("WAWebAttachMediaModel").MediaQuality.Standard;
			e.updateQuality(t), e.hasSetFromPrefs = !0;
		}
	}
	function M(t) {
		"use no forget";
		var a, i, l, _, g = t.ref, M = babelHelpers.objectWithoutPropertiesLoose(t, d);
		o("WAWebTimeSpentLoggingNavigation").useTsNavigation(M.tsNavigationData);
		var w = M.onClose, A = w === void 0 ? r("WAWebNoop") : w, F = M.onRender, O = F === void 0 ? r("WAWebNoop") : F, B = M.theme, W = B === void 0 ? o("WAWebMediaEditorEnumsThemes").MediaTheme.ATTACH : B, q = M.sendAsSticker, U = q === void 0 ? !1 : q, V = M.mediaCollection, H = M.initCaption, G = M.onDropText, z = M.onSendMedia, j = M.onScheduleMedia, K = M.allowMultipleMedia, Q = K === void 0 ? !0 : K, X = M.openTrigger, Y = M.isSendHQPhotoEnabled, J = Y === void 0 ? !0 : Y, Z = C(V);
		h(function() {
			Z.current = V;
		}, [V]), h(function() {
			if (o("WAWebTPPdfViewerGatingUtils").isAsyncPdfSendEnabled()) return function() {
				Z.current.getModelsArray().forEach(function(e) {
					e.state === o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.PROCESSING && o("WAWebMimeTypes").isPdfDocument(e.mimetype) && e.cancelEnrichment();
				});
			};
		}, []);
		var ee = (a = M.isSubmitDisabled) != null ? a : !1, te = V.canSend() && !ee, ne = b(U != null && U ? o("WAWebMediaEditorEnumsThickness").ThicknessType.XLARGE : o("WAWebMediaEditorEnumsThickness").ThicknessType.SMALL), re = ne[0], oe = ne[1], ae = b(!0), ie = ae[0], le = ae[1], se = b(function() {
			return o("WAWebMediaEditorEnumsColors").getColorValue(o("WAWebMediaEditorEnumsColors").ColorType.BLACK);
		}), ue = se[0], ce = se[1], de = b(o("WAWebMediaEditorEnumsFonts").FontType.SANS_SERIF), me = de[0], pe = de[1], _e = b(o("WAWebMediaEditorEnumsFonts").TextAlignment.CENTER), fe = _e[0], ge = _e[1], he = b(!1), ye = he[0], Ce = he[1], be = b(!0), ve = be[0], Se = be[1], Re = b(!1), Le = Re[0], Ee = Re[1], ke = b(!1), Ie = ke[0], Te = ke[1], De = b(!1), xe = De[0], $e = De[1], Pe = b(null), Ne = Pe[0], Me = Pe[1], we = b(null), Ae = we[0], Fe = we[1], Oe = b(!1), Be = Oe[0], We = Oe[1], qe = b(null), Ue = qe[0], Ve = qe[1], He = b(null), Ge = He[0], ze = He[1], je = r("useWAWebToggle")(!1), Ke = je[0], Qe = je[1], Xe = b(U != null ? U : !1), Ye = Xe[0], Je = Xe[1], Ze = o("useWAWebTimeout").useTimeout(function() {
			X === o("WAWebMediaEditorOpenTrigger").MediaEditorOpenTrigger.ConversationPanelDragAndDrop && (Le || A());
		}, 250), et = Ze[0], tt = Ze[1], nt = C(), rt = C(), ot = C(), at = C(), it = b(H == null ? void 0 : H.text), lt = it[0], st = it[1], ut = C(), ct = C(o("WAWebMediaEditorToolbarBlur.react").BLUR_DEFAULT_MODE), dt = C(o("WAWebMediaEditorToolbarBlur.react").BLUR_DEFAULT_RADIUS), mt = C(o("WAWebMediaEditorEnumsColors").getColorValue(o("WAWebMediaEditorEnumsColors").ColorType.WHITE)), pt = C(o("WAWebMediaEditorEnumsColors").getColorValue(o("WAWebMediaEditorEnumsColors").ColorType.BLACK)), _t = C(3), ft = r("useLazyRef")(function() {
			return new Map();
		}), gt = function(t, n) {
			ft.current.set(t, n);
		}, ht = r("useLazyRef")(function() {
			return new Map();
		}), yt = r("useLazyRef")(function() {
			return new Map();
		}), Ct = function(t, n) {
			yt.current.set(t, n);
		}, bt = r("useLazyRef")(function() {
			return new Map();
		}), vt = function(t, n) {
			bt.current.set(t, n);
		}, St = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), Rt = r("useWAWebUnmountSignal")();
		V.isStickerMaker = Ye, o("useWAWebListener").useListener(V, [
			"add",
			"remove",
			"reset"
		], St);
		var Lt = function() {
			if (V.canSend()) {
				var e = V.uiProcessMsgs(M.maxNumberOfMedia, W), t = e.errorMsgs;
				t && (o("WAWebToastManager").ToastManager.open(f.jsx(o("WAWebToast.react").Toast, { msg: t })), V.getPreviewableMedias().length === 0 && A()), St();
			}
		};
		o("useWAWebListener").useListener(V, [
			"active-change",
			"change:state",
			"change:previewable"
		], Lt);
		var Et = function() {
			var e;
			return V.length === 1 && ((e = V.at(0)) == null ? void 0 : e.type) === o("WAWebMsgType").MSG_TYPE.IMAGE;
		}, kt = function() {
			var e = !Ye && Et();
			Je(e), oe(e ? o("WAWebMediaEditorEnumsThickness").ThicknessType.XLARGE : o("WAWebMediaEditorEnumsThickness").ThicknessType.SMALL);
		};
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "toggle_sticker_maker", kt), h(function() {
			et();
		}, []), h(function() {
			var e;
			return (e = at.current) == null || e.focus(), function() {
				ut.current && self.clearTimeout(ut.current);
			};
		}, []), h(function() {
			V.isStickerMaker = Ye;
		}, void 0);
		var It = o("useWAWebModelValues").useModelValues(r("WAWebChatPreferenceCollection").getDefault(), ["hdMediaEnabled"]);
		h(function() {
			It.hdMediaEnabled && Ne != null && Ne.hdEligible && Ne.quality !== o("WAWebAttachMediaModel").MediaQuality.HD && J && N(Ne);
		}, [
			Ne,
			It.hdMediaEnabled,
			J
		]);
		var Tt = function() {
			return at.current;
		}, Dt = function(t) {
			var e;
			if ((e = nt.current) != null && e.resetUIState()) return !1;
			if (Ge) return Ve(null), ze(null), !1;
			var n = t === o("WAWebUim").DismissReason.UIM_INTERACTION;
			return A(n), !0;
		};
		y(g, function() {
			return {
				getElement: Tt,
				handleRequestDismiss: Dt,
				send: function() {
					return Nn();
				},
				isSendEnabled: function() {
					return te;
				},
				updateCaption: kn,
				toggleViewOnce: function() {
					return Qe(), !Ke;
				}
			};
		}), h(function() {
			O();
		}, [O]);
		var xt = V.getActive(), $t = lt, Pt = Be;
		!Pt && !Ne && $t != null && $t !== "" && xt && (xt.type === o("WAWebMsgType").MSG_TYPE.IMAGE || xt.type === o("WAWebMsgType").MSG_TYPE.VIDEO || xt.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT) && (xt.caption = $t, Pt = !0);
		var Nt = (i = xt == null ? void 0 : xt.canUndoMediaEditorData()) != null ? i : !1, Mt = (l = xt == null ? void 0 : xt.canRedoMediaEditorData()) != null ? l : !1;
		xt !== Ae && (Fe(xt), Me(xt), Te(Nt), $e(Mt), We(Pt));
		var wt = function() {
			return Ne == null ? r("WAWebMediaEditorData").create() : Ne.mediaEditorData;
		}, At = function() {
			var e, t;
			Te((e = Ne == null ? void 0 : Ne.canUndoMediaEditorData()) != null ? e : !1), $e((t = Ne == null ? void 0 : Ne.canRedoMediaEditorData()) != null ? t : !1);
		}, Ft = function(n, r) {
			if (n !== wt()) {
				if (Ne) {
					var t, a;
					Ne.updateMediaEditorData(n, {
						undoable: (t = r == null ? void 0 : r.undoable) != null ? t : !1,
						lastAction: (a = r == null ? void 0 : r.lastAction) != null ? a : null
					}), At();
				}
				if (r != null && r.updatePreview) {
					var i;
					(i = nt.current) == null || i.updatePreview();
				}
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["MediaEditor: Updated MediaEditorData"])));
			}
		}, Ot = function() {
			var e;
			return (e = nt.current) == null ? void 0 : e.getBackground();
		}, Bt = function(t) {
			if (t === void 0 && (t = !0), Ne && Ne.canUndoMediaEditorData()) {
				var e, n, r = Ne.lastMediaEditorAction;
				Ne.undoMediaEditorData(t);
				var o = Ne.lastMediaEditorAction;
				At(), (e = nt.current) == null || e.updatePreview(), (n = nt.current) == null || n.undoAction(r, o);
			}
		}, Wt = function() {
			if (Ne && Ne.canRedoMediaEditorData()) {
				var e, t, n = Ne.lastMediaEditorAction;
				Ne.redoMediaEditorData();
				var r = Ne.lastMediaEditorAction;
				At(), (e = nt.current) == null || e.updatePreview(), (t = nt.current) == null || t.redoAction(r, n);
			}
		}, qt = function(t) {
			var e = t.image, n = t.imageDefaultHeight, o = t.imageDefaultWidth, a = t.type, i = r("nullthrows")(nt.current).getCanvasScale(), l = e.width * i.x, s = e.height * i.y, u = o / l, c = n / s, d = Math.min(u, c), m = wt().addImageLayerToCenter({
				type: a,
				image: e,
				editable: !0,
				scale: {
					x: d,
					y: d
				}
			});
			Ft(m, {
				updatePreview: !0,
				undoable: !0
			});
		}, Ut = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				try {
					var t = yield o("WAWebMediaEditorUtilsCreateCanvasAndImage").createImageFromEmoji(e);
					if (!t) return;
					var n = Ye ? L : R;
					qt({
						image: t,
						imageDefaultHeight: n,
						imageDefaultWidth: n,
						type: o("WAWebMediaEditorLayersImage").ImageLayerType.Emoji
					}), Ye && new (o("WAWebWebcStickerMakerEventsWamEvent")).WebcStickerMakerEventsWamEvent({ stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType").WEBC_STICKER_MAKER_EVENT_NAME_TYPE.EMOJI_ADDED }).commit();
				} catch (e) {
					o("WAWebToastManager").ToastManager.open(f.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), Vt = function(t, n, a, i, l, s, u, c) {
			s === void 0 && (s = o("WAWebMediaEditorEnumsColors").getColorValue(o("WAWebMediaEditorEnumsColors").ColorType.WHITE)), u === void 0 && (u = o("WAWebMediaEditorEnumsColors").getColorValue(o("WAWebMediaEditorEnumsColors").ColorType.BLACK)), c === void 0 && (c = 50);
			var e = r("nullthrows")(nt.current).getCanvasScale(), d = r("nullthrows")(nt.current).getCanvasSize(), m = Math.min(d.getWidth(), l === o("WAWebMediaEditorLayersShape").BlurMode.None ? x / e.x : T / e.x), p = Math.min(d.getHeight(), l === o("WAWebMediaEditorLayersShape").BlurMode.None ? $ / e.y : D / e.y), _ = wt().addShapeLayerToCenter({
				image: t,
				size: new (r("WAWebMediaEditorGeometrySize"))({
					width: m,
					height: p
				}),
				radius: i,
				shape: a,
				backgroundFrame: n,
				mode: l,
				fillColor: s,
				strokeColor: u,
				strokeWidth: c
			});
			Ft(_, {
				updatePreview: !0,
				undoable: !0
			});
		}, Ht = function(t) {
			var e = wt().getSelectedLayer();
			if (e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && !e.getConfirmed()) Bt(!1);
			else {
				var n, a, i = wt().clearSelectedLayer();
				Ft(i), Vt(r("nullthrows")((n = wt().getBackground()) == null ? void 0 : n.getImage()), r("nullthrows")((a = wt().getBackground()) == null ? void 0 : a.getFrame()), t, dt.current, o("WAWebMediaEditorLayersShape").BlurMode.None, mt.current, pt.current, _t.current);
			}
		}, Gt = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				try {
					var t = yield o("WAWebMediaEditorUtilsCreateCanvasAndImage").createImageFromSticker(e);
					if (!t) throw r("err")("Create image from sticker failed");
					qt({
						image: t,
						imageDefaultHeight: E,
						imageDefaultWidth: E,
						type: o("WAWebMediaEditorLayersImage").ImageLayerType.Sticker
					}), Ye && new (o("WAWebWebcStickerMakerEventsWamEvent")).WebcStickerMakerEventsWamEvent({ stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType").WEBC_STICKER_MAKER_EVENT_NAME_TYPE.STICKER_ADDED }).commit();
				} catch (e) {
					o("WAWebToastManager").ToastManager.open(f.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), zt = function() {
			var e = wt().clearSelectedLayer();
			Ft(e);
		}, jt = function() {
			var e = wt().clearSelectedLayer();
			Ft(e);
		}, Kt = function() {
			var e = wt().clearSelectedLayer();
			Ft(e), Ce(function(e) {
				return !e;
			});
		}, Qt = function(t) {
			var e = wt(), n = e.setActiveFilter(t);
			Ft(n, {
				undoable: !0,
				updatePreview: !0
			});
		}, Xt = function() {
			var e = Ot(), t = wt();
			if (!(!e || t.getOutlineLayer().isEmpty())) {
				var n = t.getCropCenter(), a = e.height, i = e.width, l = new (r("WAWebMediaEditorGeometryPoint"))({
					x: n.getX() - i / 2,
					y: n.getY() - a / 2
				}), s = -t.getRotation(), u = Math.max(i, a), c = t.getCropSize().getDimension(), d = o("WAWebStickerConstants").STICKER_DIMENSION - o("WAWebStickerConstants").STICKER_PADDING * 2, m = c * (d / o("WAWebStickerConstants").STICKER_DIMENSION), p = m / u, _ = t.updateBackground(e, l, s, {
					x: p,
					y: p
				}).clearOutlinePaths();
				Ft(_, {
					undoable: !0,
					updatePreview: !0,
					lastAction: o("WAWebAttachMediaModel").MediaEditorAction.OutlineDone
				}), Ye && new (o("WAWebWebcStickerMakerEventsWamEvent")).WebcStickerMakerEventsWamEvent({ stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType").WEBC_STICKER_MAKER_EVENT_NAME_TYPE.IMAGE_OUTLINED }).commit();
			}
		}, Yt = function() {
			var e = wt().clearOutlinePaths();
			Ft(e, {
				undoable: !0,
				updatePreview: !0
			});
		}, Jt = function(t, n, r) {
			var e = wt().setRotation(t).setCrop(n, r);
			Ft(e, {
				undoable: !0,
				updatePreview: !0,
				lastAction: o("WAWebAttachMediaModel").MediaEditorAction.CropRotateCanvas
			}), Ye && new (o("WAWebWebcStickerMakerEventsWamEvent")).WebcStickerMakerEventsWamEvent({ stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType").WEBC_STICKER_MAKER_EVENT_NAME_TYPE.IMAGE_CROPPED }).commit();
		}, Zt = function(t) {
			var e = wt().getSelectedLayer();
			if (e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && e.isBlur()) {
				var n = wt().setBlurMode(e, t);
				Ft(n, {
					updatePreview: !0,
					undoable: !0
				}), ct.current = t;
			}
		}, en = function(t, n) {
			n === void 0 && (n = !1);
			var e = wt().getSelectedLayer();
			if (e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer) {
				var r = wt().setShapeRadius(e, t);
				Ft(r, {
					updatePreview: !0,
					undoable: n
				}), dt.current = t;
			}
		}, tn = function() {
			var e = wt().getSelectedLayer();
			if (e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && e.isBlur() && !e.getConfirmed()) Bt(!1);
			else {
				var t, n, a = wt().clearSelectedLayer();
				Ft(a), Vt(r("nullthrows")((t = wt().getBackground()) == null ? void 0 : t.getImage()), r("nullthrows")((n = wt().getBackground()) == null ? void 0 : n.getFrame()), o("WAWebMediaEditorUtilsShapes").ShapeType.RECTANGLE, dt.current, ct.current);
			}
		}, nn = function(t) {
			var e = wt(), n = e.getSelectedLayer();
			if (n instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && !n.isBlur()) {
				var r = e.setShapeFillColor(n, t);
				Ft(r, {
					updatePreview: !0,
					undoable: !0
				}), mt.current = t, pt.current = n.getStrokeColor(), _t.current = n.getStrokeWidth();
			}
		}, rn = function(t) {
			var e = wt(), n = e.getSelectedLayer();
			if (n instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && !n.isBlur()) {
				var r = e.setShapeStrokeColor(n, t);
				Ft(r, {
					updatePreview: !0,
					undoable: !0
				}), mt.current = n.getFillColor(), pt.current = t, _t.current = n.getStrokeWidth();
			}
		}, on = function(t) {
			var e = wt(), n = e.getSelectedLayer();
			if (n instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && !n.isBlur()) {
				var r = e.setShapeStrokeWidth(n, t);
				Ft(r, {
					updatePreview: !0,
					undoable: !0
				}), mt.current = n.getFillColor(), pt.current = n.getStrokeColor(), _t.current = t;
			}
		}, an = function(t, n) {
			var e = wt(), r = t.setPoints(n), o = e.updateLayer(t, r);
			Ft(o, {
				updatePreview: !0,
				undoable: !0
			});
		}, ln = function(t) {
			oe(t);
		}, sn = function(t) {
			le(t);
		}, un = function() {
			Ft(wt().clearSelectedLayer());
		}, cn = function() {
			if (!Ue) {
				un();
				var e = r("nullthrows")(nt.current).getCanvasScale(), t = {
					x: k / e.x,
					y: k / e.y
				};
				if (Ye) {
					var n = wt(), a = n.getCropSize().getDimension(), i = I * a / o("WAWebStickerConstants").STICKER_DIMENSION;
					t = {
						x: i / o("WAWebMediaEditorLayersText").DEFAULT_FONT_SIZE,
						y: i / o("WAWebMediaEditorLayersText").DEFAULT_FONT_SIZE
					};
				}
				var l = {
					origin: wt().getCropCenter(),
					text: "",
					textColor: ue,
					textBackground: ve,
					alignment: fe,
					font: me,
					scale: t
				}, s = wt().addTextLayer(l);
				Ft(s, {
					updatePreview: !0,
					undoable: !0
				});
				var u = r("nullthrows")(s.getLastTextLayer());
				ze(u), Ve(null);
			}
		}, dn = function(t) {
			pe(t);
			var e = wt().getSelectedLayer();
			if (Ge) ze(Ge.setFont(t));
			else if (e && e instanceof o("WAWebMediaEditorLayersText").TextLayer) {
				var n = wt().setFont(e, t);
				Ft(n, {
					updatePreview: !0,
					undoable: !0
				});
			}
		}, mn = function(t) {
			ge(t);
			var e = wt().getSelectedLayer();
			if (Ge) ze(Ge.setAlignment(t));
			else if (e && e instanceof o("WAWebMediaEditorLayersText").TextLayer) {
				var n = wt().setAlignment(e, t);
				Ft(n, {
					updatePreview: !0,
					undoable: !0
				});
			}
		}, pn = function(t) {
			ce(t);
			var e = wt().getSelectedLayer();
			if (Ge) ze(Ge.setTextColor(t));
			else if (e && e instanceof o("WAWebMediaEditorLayersText").TextLayer) {
				var n = wt().setTextColor(e, t);
				Ft(n, {
					updatePreview: !0,
					undoable: !0
				});
			}
		}, _n = function() {
			var e = !ve;
			Se(e);
			var t = wt().getSelectedLayer();
			if (Ge) ze(Ge.setTextBackground(e));
			else if (t && t instanceof o("WAWebMediaEditorLayersText").TextLayer) {
				var n = wt().setTextBackground(t, e);
				Ft(n, {
					updatePreview: !0,
					undoable: !0
				});
			}
		}, fn = function(t) {
			ze(t), Ve(t);
		}, gn = function(t, n) {
			var e;
			if (!n) Ue && Ft(wt().deleteLayer(Ue), {
				updatePreview: !0,
				undoable: !!t.getText()
			});
			else {
				var a = wt(), i = r("nullthrows")(Ge).setText(n);
				Ue ? a = a.updateLayer(r("nullthrows")(Ue), i) : (a = a.addTextLayer(i), Ye && new (o("WAWebWebcStickerMakerEventsWamEvent")).WebcStickerMakerEventsWamEvent({ stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType").WEBC_STICKER_MAKER_EVENT_NAME_TYPE.TEXT_ADDED }).commit()), Ft(a, {
					updatePreview: !0,
					undoable: !0
				});
			}
			self.setTimeout(function() {
				ze(null), Ve(null);
			}, 0), (e = at.current) == null || e.focus();
		}, hn = function(t) {
			Ft(wt().addPaintPath(t), {
				undoable: !0,
				updatePreview: !0
			});
		}, yn = function(t) {
			Ft(wt().addOutlinePath(t), {
				undoable: !0,
				updatePreview: !0,
				lastAction: o("WAWebAttachMediaModel").MediaEditorAction.Outline
			});
		}, Cn = function(t) {
			if (!(!t.getEditable() || ye)) {
				var e = wt().setSelectedLayer(t);
				t instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && (t.getConfirmed() || (e = e.updateLayer(t, t.setConfirmed())), t.isBlur() && (ct.current = t.getMode()), dt.current = t.getRadius()), Ft(e), t instanceof o("WAWebMediaEditorLayersText").TextLayer && (ce(t.getTextColor()), Se(t.getTextBackground()), pe(t.getFont()));
			}
		}, bn = function(t, n) {
			var e = t instanceof o("WAWebMediaEditorLayersImage").ImageLayer && t.isBackground();
			e ? Ft(wt().translateBackground(n), {
				updatePreview: !0,
				undoable: !0
			}) : Ft(wt().translateLayer(t, n), {
				updatePreview: !0,
				undoable: !0
			});
		}, vn = function(t, n, r, a) {
			var e = t instanceof o("WAWebMediaEditorLayersImage").ImageLayer && t.isBackground();
			e ? Ft(wt().transformBackground(n, r), {
				updatePreview: !0,
				undoable: !0
			}) : Ft(wt().transformLayer({
				frame: a,
				layer: t,
				rotation: n,
				scale: r
			}), {
				updatePreview: !0,
				undoable: !0
			});
		}, Sn = function(t) {
			var e = wt().deleteLayer(t);
			t === Ge && (ze(null), Ve(null)), Ft(e, {
				updatePreview: !0,
				undoable: !0
			});
		}, Rn = function(t) {
			o("WAWebEventFiles").getFiles(t).then(function(e) {
				if (!Rt.aborted) {
					var n;
					return t.shiftKey === !0 && t.altKey === !0 && e.length === 1 && (Je(!0), oe(o("WAWebMediaEditorEnumsThickness").ThicknessType.XLARGE), n = !0), M.onProcessAttachments(e.map(function(e) {
						return {
							file: e,
							stickerMaker: n,
							filename: e.name,
							mimetype: e.type
						};
					}), o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY);
				}
			}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebMediaLoadErrors").MediaDragDropError, function(e) {
				V.length || G(e.src);
			})), t.target instanceof HTMLInputElement && (t.target.value = "");
		}, Ln = function(t) {
			tt(), !(Ke || Ye) && Rn(t);
		}, En = function(t, n) {
			Ke || Ye || (Ee(t), !t && !n && !V.length && A());
		}, kn = function(t) {
			if (Ne) {
				var e = V.indexOf(Ne);
				Ne.updateCaption(t), e === 0 && t === "" && Be && (We(!1), st(null));
				var n = yt.current.get(Ne.id);
				n && ht.current.set(Ne.id, n.editorContent());
			}
		}, In = function(t) {
			var e = t.getFiles().filter(function(e) {
				var t = o("WAWebFileUtils").typeFromMimetype(e.type);
				return t === "image" || t === "video";
			}).map(function(e) {
				return {
					file: e,
					filename: e.name,
					mimetype: e.type
				};
			});
			M.onProcessAttachments(e, o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.PASTE);
		}, Tn = function(t) {
			t.preventDefault(), t.stopPropagation();
			var e = new (r("WAWebDataTransfer"))(t.clipboardData);
			e.hasFiles() && In(e);
		}, Dn = function() {
			if (rt.current) {
				var e = rt.current;
				e.click();
			}
		}, xn = function(t) {
			if (Ye) {
				var e = {
					stickerSendOrigin: o("WAWebWamEnumStickerSendOriginType").STICKER_SEND_ORIGIN_TYPE.STICKER_MAKER,
					stickerIsAnimated: !1,
					stickerIsFirstParty: !1,
					stickerIsFromStickerMaker: !0,
					stickerMakerSourceType: o("WAWebWamEnumStickerMakerSourceType").STICKER_MAKER_SOURCE_TYPE.WEB_STICKER_MAKER,
					stickerIsLottie: !1
				};
				new (o("WAWebStickerSendWamEvent")).StickerSendWamEvent(e).commit(), new (o("WAWebWebcStickerMakerEventsWamEvent")).WebcStickerMakerEventsWamEvent({ stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType").WEBC_STICKER_MAKER_EVENT_NAME_TYPE.SEND_STICKER }).commit();
				return;
			}
			var n = 0, r = 0, a = 0, i = 0, l = 0, s = 0, u = 0;
			t.forEach(function(e) {
				var t = e.mediaEditorData;
				e.type === o("WAWebMsgType").MSG_TYPE.IMAGE && (n++, t.hasEdits() && r++, t.getPaintLayer().getPaths().length > 0 && a++, t.getLayers().some(function(e) {
					return e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && e.isBlur();
				}) && u++), t.getLayers().forEach(function(e) {
					e instanceof o("WAWebMediaEditorLayersImage").ImageLayer ? (e.isEmoji() && i++, e.isSticker() && l++) : e instanceof o("WAWebMediaEditorLayersText").TextLayer && s++;
				});
			}), new (o("WAWebWebcMediaEditorSendWamEvent")).WebcMediaEditorSendWamEvent({
				imageCount: n,
				editedImageCount: r,
				paintedImageCount: a,
				blurImageCount: u,
				emojiLayerCount: i,
				stickerLayerCount: l,
				textLayerCount: s
			}).commit();
		}, $n = function() {
			var e;
			return V.length === 1 && ((e = V.at(0)) == null ? void 0 : e.isViewableOnce()) === !0 && M.canViewOnce && !U;
		}, Pn = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (o("WAWebTPPdfViewerGatingUtils").isAsyncPdfSendEnabled()) {
					var t = [];
					V.getModelsArray().forEach(function(e) {
						e.state === o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.PROCESSING && o("WAWebMimeTypes").isPdfDocument(e.mimetype) && (e.cancelEnrichment(), e.processPromise && t.push(e.processPromise));
					}), t.length > 0 && (yield (p || (p = n("Promise"))).allSettled(t));
				}
				var r = V.getPreviewableMedias();
				(p || (p = n("Promise"))).all(r.map(function(e) {
					var t = e.mediaEditorData;
					return e.updateMediaEditorData(t.setSending(!0), {
						undoable: !1,
						lastAction: null
					}), e;
				})).finally(function() {
					if (r.length === 0) {
						A();
						return;
					}
					if (Ne != null && Ne.mediaEditorData.hasEdits() || Ye) {
						var t;
						(t = nt.current) == null || t.updatePreview({ immediately: !0 });
					}
					var a = [];
					r.forEach(function(e) {
						var t = e.editedFile;
						if (t && (e.mediaEditorData.hasEdits() || Ye)) {
							var n = e.mediaEditorData.getActiveFilter(), r = n !== o("WAWebMediaEditorUtilsFilterType").FilterType.NONE, i = e.mediaEditorData.isCropped(), l = e.mediaEditorData.isRotated(), s = V.replace(e.id, {
								file: t,
								asSticker: Ye,
								hasFilter: r,
								isCropped: i,
								isRotated: l
							});
							a.push(s);
						}
					}), (p || (p = n("Promise"))).all(a).then(function() {
						var t = V.getPreviewableMedias();
						if (t.length !== 0) {
							var n = t.map(function(e) {
								var t, n = (t = e.caption) == null ? void 0 : t.trim(), r = [], o = [], a = ht.current.get(e.id);
								if (a) {
									var i = a.data, l = a.text;
									l.length && (n = l.trim(), r = i.mentionedJidList || [], o = i.groupMentions || []);
								}
								return e.caption = n != null ? n : void 0, {
									media: e,
									mentionedJidList: r,
									groupMentions: o
								};
							}), o = {
								isViewOnce: $n() && Ke,
								threadId: M.threadId
							};
							Be && (o.initCaptionUsed = !0), e != null && j != null ? j(n, e, o) : (z(n, o, ot.current), xn(r));
						}
					});
				});
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), Nn = function(t) {
			t == null || t.preventDefault(), t == null || t.stopPropagation(), te && Pn().catch(function(e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["WAWebMediaEditor: sendFromMediaEditor failed"]))).catching(r("getErrorSafe")(e)).sendLogs("media-editor-send-fail");
			});
		}, Mn = function(t) {
			te && Pn(t).catch(function(e) {
				o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["WAWebMediaEditor: scheduleFromMediaEditor failed"]))).catching(r("getErrorSafe")(e)).sendLogs("media-editor-schedule-fail");
			});
		}, wn = function(t) {
			var e;
			if (Ne && !t.repeat && !t.shiftKey && !Ge) {
				var n = yt.current.get(Ne.id);
				if (!(n != null && n.isFocused())) {
					var r = wt().getSelectedLayer();
					if (r instanceof o("WAWebMediaEditorLayersText").TextLayer) {
						t.preventDefault(), t.stopPropagation(), fn(r);
						return;
					}
					(e = nt.current) != null && e.resetUIState() || Nn();
				}
			}
		}, An = function() {
			if (Ne) {
				var e = ft.current.get(Ne.id);
				e && e.scrollIntoView();
			}
		}, Fn = function() {
			var e = V.setPrevAsActive();
			e && An();
		}, On = function() {
			var e = V.setNextAsActive();
			e && An();
		}, Bn = function(t, n) {
			if (!(!Ne || n.repeat || Ge)) {
				var e = Ne && !Ne.caption, r = yt.current.get(Ne.id), o = !1;
				r && (o = !e && r.isFocused() && (!r.isCursorAtStart() || t !== "left") && (!r.isCursorAtEnd() || t !== "right")), o || (n.preventDefault(), n.stopPropagation(), t === "left" ? Fn() : On());
			}
		}, Wn = function(t) {
			if (Ne != null && Ne.mediaEditorData.hasEdits()) {
				var e;
				(e = nt.current) == null || e.updatePreview({ immediately: !0 });
			}
			V.setActive(t);
		}, qn = function(t, n) {
			n.stopPropagation(), n.preventDefault(), V.remove(t), V.getValidMedias().length === 0 ? ut.current = self.setTimeout(function() {
				A();
			}, S) : ot.current && r("WAWebFocusTracer").focus(ot.current);
		}, Un = function(t) {
			var e = null, n = function(n) {
				var e = n.onSendButtonClick, r = n.sendButtonEnabled, a = r === void 0 ? !1 : r, i = n.setSendButtonRef, l = n.theme, s = n.viewOnce, u = s === void 0 ? null : s, c = n.viewOnceDisabled, d = c === void 0 ? !0 : c;
				return M.renderCaptionInput({
					theme: l,
					msgType: t.type,
					initialText: t.caption,
					viewOnce: u,
					viewOnceDisabled: d,
					onChange: kn,
					onToggleViewOnce: Qe,
					onEnter: Nn,
					onFiles: In,
					setCaptionInputRef: function(n) {
						Ct(t.id, n);
					},
					setSendButtonRef: i,
					internLinksEnabled: W !== o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
					phoneNumbersEnabled: W !== o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
					expandedTextFormatsEnabled: W !== o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
					multiline: W !== o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
					sendButtonEnabled: a || W === o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE,
					onSendButtonClick: e || Nn,
					maxCaptionLength: M.maxCaptionLength
				});
			};
			switch (t.type) {
				case o("WAWebMsgType").MSG_TYPE.STICKER:
				case o("WAWebMsgType").MSG_TYPE.IMAGE: {
					var a = n({
						theme: "image",
						viewOnce: Ke,
						viewOnceDisabled: !$n(),
						setSendButtonRef: function(n) {
							return vt(t.id, n);
						}
					});
					e = f.jsx(r("WAWebMediaEditorImage.react"), {
						ref: nt,
						attachMedia: t,
						captionInput: a,
						hdEligible: t.hdEligible && M.hdEligible,
						isSendHQPhotoEnabled: M.isSendHQPhotoEnabled,
						onClose: W === o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE ? null : A,
						openTrigger: X,
						paintThickness: re,
						outlineSmoothing: ie,
						canUndo: Ie,
						canRedo: xe,
						currentlyEditingTextLayer: Ue,
						draftTextLayer: Ge,
						sendAsSticker: Ye,
						inFilterMode: ye,
						mediaTheme: W,
						onFilterChange: Qt,
						onFilterSelect: Kt,
						onPaintSelect: zt,
						onOutlineSelect: jt,
						onOutlineDone: Xt,
						onOutlineReset: Yt,
						onTextSelect: cn,
						onTextBackgroundToggle: _n,
						onEmojiSelect: Ut,
						onShapeSelect: Ht,
						onStickerSelect: Gt,
						onLayerSelect: Cn,
						onLayerUnselect: un,
						onLayerDelete: Sn,
						onLayerTranslate: bn,
						onLayerTransform: vn,
						onTextEditingStart: fn,
						onTextEditingEnd: gn,
						onTextColorSelect: pn,
						onPointsChange: an,
						onFontSelect: dn,
						onAlignmentSelect: mn,
						onShapeFillColorSelect: nn,
						onShapeStrokeColorSelect: rn,
						onShapeStrokeWidthSelect: on,
						onPaintThicknessSelect: ln,
						onOutlineSmoothingToggle: sn,
						onCropRotateCanvas: Jt,
						onBlurModeChange: Zt,
						onBlurRadiusChange: en,
						onBlurSelect: tn,
						onUndo: Bt,
						onRedo: Wt,
						onPaintDrawEnd: hn,
						onOutlineDrawEnd: yn,
						hideFooter: M.hideFooter,
						hideCanvasShadow: M.hideCanvasShadow,
						toolbarContainer: M.toolbarContainer
					}, t.mediaEditorData.getId());
					break;
				}
				case o("WAWebMsgType").MSG_TYPE.VIDEO: {
					var i = n({
						theme: "video",
						viewOnce: Ke,
						viewOnceDisabled: !$n()
					});
					e = f.jsx(r("WAWebMediaEditorPreviewVideo.react"), {
						attachMedia: t,
						captionInput: i,
						onClose: A
					}, t.id);
					break;
				}
				case o("WAWebMsgType").MSG_TYPE.AUDIO:
					e = f.jsx(r("WAWebMediaEditorPreviewAudio.react"), {
						item: t,
						onClose: A
					}, t.id);
					break;
				default: {
					var l = n({
						theme: "document",
						viewOnce: !1,
						viewOnceDisabled: !0
					});
					o("WAWebMimeTypes").isPdfDocument(t.mimetype) ? e = f.jsx(r("WAWebMediaEditorPreviewPdf.react"), {
						captionInput: l,
						documentPageCount: t.documentPageCount,
						fileExt: t.fileExt,
						filename: t.filename,
						fileSize: t.filesize,
						fullPreview: t.fullPreview,
						fullPreviewSize: t.fullPreviewSize,
						isPasswordProtected: t.isPasswordProtected,
						isProcessing: t.state === o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.PROCESSING,
						mimetype: t.mimetype,
						onClose: A
					}, t.id) : e = f.jsx(r("WAWebMediaEditorPreviewFile.react"), {
						mimeType: t.mimetype,
						filesize: t.filesize,
						filename: t.filename,
						fileExt: t.fileExt,
						onClose: A,
						captionInput: l
					}, t.id);
					break;
				}
			}
			return e;
		}, Vn, Hn = V.getPreviewableMedias(), Gn = M.maxNumberOfMedia;
		Hn.length > Gn && (Hn = Hn.slice(0, Gn)), V.canSend() ? Ne && (Vn = Un(Ne)) : Vn = f.jsx("div", babelHelpers.extends({}, (m || (m = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginAuto), { children: f.jsx(o("WAWebSpinner.react").Spinner, { color: "highlight" }, "processing") }));
		var zn = Le ? f.jsx("div", {
			className: "x10l6tqk x1bkdxzg xh8yej3 x5yr21d x1280gxy",
			children: f.jsx("div", {
				className: "x9f619 x78zum5 x6s0dn4 xl56j7k x4t50tc xcg35fi xlya59e xwy3id5 xpvcztv x11nt7xy xk4n5i7 xamhcws x1alpsbp xlxy82 xyumdvf x120xd9q x1k4ovr2 xdfaw6k xefzod xlze6vy x47fsot x1rrvw3c x18djku1 x1abdmlv x11fxgd9 x4n8cb0 xymharo x2pibh5",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}, "container") : null, jn = {
			enter: wn,
			left: function(t) {
				return Bn("left", t);
			},
			right: function(t) {
				return Bn("right", t);
			}
		}, Kn = (_ = M.mimes) != null ? _ : o("WAWebMimeTypes").DOC_MIMES === "*" ? "*" : [o("WAWebMimeTypes").IMAGE_MIMES].join(), Qn, Xn = (Ne == null ? void 0 : Ne.type) === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
		if (Vn != null) {
			var Yn;
			if (Hn.length > 0 && (W === o("WAWebMediaEditorEnumsThemes").MediaTheme.AD_CREATION || W === o("WAWebMediaEditorEnumsThemes").MediaTheme.BROADCAST ? Yn = f.jsx("div", {
				tabIndex: -1,
				ref: ot,
				onKeyPress: o("WAWebStopEvent").preventDefault,
				children: f.jsx(r("WDSButton.react"), {
					"aria-label": s._(
						/*BTDS*/
						""
					),
					onPress: Nn,
					disabled: !V.canSend(),
					label: s._(
						/*BTDS*/
						""
					),
					size: W === o("WAWebMediaEditorEnumsThemes").MediaTheme.AD_CREATION ? "medium" : "large",
					testid: "media_editor_save_button"
				})
			}) : Yn = f.jsx("div", {
				className: "x1247r65 xng8ra",
				tabIndex: -1,
				ref: ot,
				onKeyPress: o("WAWebStopEvent").preventDefault,
				children: f.jsx(r("WAWebSendButtonWithCount.react"), {
					ariaLabel: s._(
						/*BTDS*/
						"",
						[s._plural(Hn.length, "number")]
					),
					large: !0,
					count: Hn.length === 1 ? null : Hn.length,
					onClick: Nn,
					disabled: !te,
					theme: W === o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL || W === o("WAWebMediaEditorEnumsThemes").MediaTheme.GALAXY_FLOW ? "TICK" : "SEND"
				})
			})), W === o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE) Qn = null;
			else {
				var Jn = s._(
					/*BTDS*/
					""
				), Zn;
				if (W === o("WAWebMediaEditorEnumsThemes").MediaTheme.AD_CREATION) Zn = o("WAWebBizAdCreationMediaValidationUtils").canAddMoreAttachments(V) ? f.jsx(r("WDSButton.react"), {
					xstyle: [o("WDSMargins.stylex").wdsMargins.marginVer8, v.marginInline5],
					Icon: o("WAWebPlusIcon.react").PlusIcon,
					variant: "tonal",
					size: "large",
					type: "default",
					onPress: Dn,
					"aria-label": Jn
				}, "media-more") : null;
				else {
					var er = !Ke && !Ye && Hn.length < Gn;
					Zn = !Ye && Q ? f.jsx(r("WDSButton.react"), {
						"aria-label": Jn,
						disabled: !er,
						Icon: o("WAWebPlusIcon.react").PlusIcon,
						onPress: Dn,
						variant: "borderless",
						xstyle: [
							P.addMediaButton,
							!er && P.addMediaButtonDisabled,
							o("WDSMargins.stylex").wdsMargins.marginVer8,
							v.marginInline5
						]
					}, "media-more") : null;
				}
				var tr;
				Hn.length > 0 && W !== o("WAWebMediaEditorEnumsThemes").MediaTheme.BROADCAST && (tr = f.jsxs(o("WAWebFlex.react").FlexRow, {
					grow: 1,
					className: (m || (m = r("stylex")))([
						P.filmstripContainer,
						o("WDSMargins.stylex").wdsMargins.marginTop4,
						o("WDSMargins.stylex").wdsMargins.marginHor16,
						o("WDSMargins.stylex").wdsMargins.marginBottom0
					]),
					justify: "center",
					align: "center",
					children: [f.jsx(r("WAWebMediaEditorFilmstripDragAndDrop.react"), {
						className: "x1c4vz4f xs83m0k xdl72j9 xeuugli xw2csxc xuxw1ft",
						mediaCollection: V,
						onClick: Wn,
						onClose: qn,
						onElementRef: gt,
						theme: W
					}), Zn]
				})), Qn = f.jsxs("div", babelHelpers.extends({}, (m || (m = r("stylex"))).props(W === o("WAWebMediaEditorEnumsThemes").MediaTheme.BROADCAST ? P.footerBroadcast : P.footer, o("WDSPaddings.stylex").wdsPaddings.paddingVer8, o("WDSPaddings.stylex").wdsPaddings.paddingHor16), { children: [
					M.submitAccessory,
					tr,
					j != null && Yn != null ? f.jsx(r("WAWebScheduleMessageButton.react"), {
						atLimit: M.scheduleAtLimit === !0,
						buttonSize: "large",
						disabled: !te,
						isGroup: M.scheduleIsGroup === !0,
						onScheduleSend: Mn,
						xstyle: P.scheduleButton
					}) : null,
					Yn
				] }));
			}
		}
		var nr = {
			0: "x1iyjqo2 xs83m0k x1r8uery x1htk8sl x5yr21d x1bifzbx xhslqc4 x1280gxy xpilrb4 x1t7ytsu x1vb5itz",
			4: "x1iyjqo2 xs83m0k x1r8uery x1htk8sl x5yr21d x1bifzbx xhslqc4 x1280gxy xpilrb4 x1t7ytsu x1vb5itz",
			2: "x1iyjqo2 xs83m0k x1r8uery x1htk8sl x5yr21d x1bifzbx xhslqc4 x1280gxy xpilrb4 x1t7ytsu x1vb5itz",
			6: "x1iyjqo2 xs83m0k x1r8uery x1htk8sl x5yr21d x1bifzbx xhslqc4 x1280gxy xpilrb4 x1t7ytsu x1vb5itz",
			1: "x1iyjqo2 xs83m0k x1r8uery x5yr21d xhslqc4 x1t7ytsu x1vb5itz xjbqb8w x14e42zd xeuugli x2lwn1j",
			5: "x1iyjqo2 xs83m0k x1r8uery x5yr21d xhslqc4 x1t7ytsu x1vb5itz xjbqb8w x14e42zd xeuugli x2lwn1j",
			3: "x1iyjqo2 xs83m0k x1r8uery x5yr21d xhslqc4 x1t7ytsu x1vb5itz xjbqb8w x14e42zd xeuugli x2lwn1j",
			7: "x1iyjqo2 xs83m0k x1r8uery x5yr21d xhslqc4 x1t7ytsu x1vb5itz xjbqb8w x14e42zd xeuugli x2lwn1j"
		}[((Ne == null ? void 0 : Ne.type) !== o("WAWebMsgType").MSG_TYPE.IMAGE) << 2 | !!Xn << 1 | (M.hideCanvasShadow === !0) << 0], rr = f.jsxs(o("WAWebFlex.react").FlexColumn, {
			grow: 1,
			className: nr,
			align: "stretch",
			children: [
				zn,
				Vn,
				Qn,
				f.jsx("input", {
					ref: rt,
					type: "file",
					accept: Kn,
					style: { display: "none" },
					onChange: Rn,
					multiple: !0
				})
			]
		});
		W === o("WAWebMediaEditorEnumsThemes").MediaTheme.ATTACH && (rr = f.jsx(r("WAWebDrawer.react"), {
			theme: "media",
			onDrop: Ln,
			onDragChange: En,
			children: f.jsx(r("WAWebDrawerBody.react"), {
				tabIndex: "-1",
				overflow: "hidden",
				onPaste: Tn,
				children: rr
			})
		}, "attach-image-modal"));
		var or = {
			0: "",
			1: "xh8yej3 x5yr21d"
		}[!!(W === o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE || o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS) << 0];
		return f.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			className: or,
			handlers: jn,
			ref: at,
			children: rr
		});
	}
	M.displayName = M.name + " [from " + i.id + "]";
	var w = M;
	l.MediaEditor = w;
}), 226);

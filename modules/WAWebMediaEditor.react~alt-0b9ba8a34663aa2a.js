__d("WAWebMediaEditor.react", [
	"fbt",
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
	var e, u, c, d = ["ref"], m, p, _ = p || (p = o("react")), f = p, g = f.useEffect, h = f.useImperativeHandle, y = f.useRef, C = f.useState, b = { marginInline5: {
		marginInlineStart: "xpcyujq",
		marginInlineEnd: "xf6vk7d",
		marginLeft: null,
		marginRight: null,
		$$css: !0
	} }, v = 200, S = 64, R = S * 2, L = 128, E = 1.2, k = o("WAWebMediaEditorLayersText").DEFAULT_FONT_SIZE * 3, I = 200, T = 100, D = 100, x = 100, $ = {
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
	function P(e) {
		if (!e.hasSetFromPrefs) {
			var t = e.hdEligible && r("WAWebChatPreferenceCollection").getDefault().hdMediaEnabled ? o("WAWebAttachMediaModel").MediaQuality.HD : o("WAWebAttachMediaModel").MediaQuality.Standard;
			e.updateQuality(t), e.hasSetFromPrefs = !0;
		}
	}
	function N(t) {
		"use no forget";
		var n, a, i, l, p = t.ref, f = babelHelpers.objectWithoutPropertiesLoose(t, d);
		o("WAWebTimeSpentLoggingNavigation").useTsNavigation(f.tsNavigationData);
		var N = f.onClose, M = N === void 0 ? r("WAWebNoop") : N, w = f.onRender, A = w === void 0 ? r("WAWebNoop") : w, F = f.theme, O = F === void 0 ? o("WAWebMediaEditorEnumsThemes").MediaTheme.ATTACH : F, B = f.sendAsSticker, W = B === void 0 ? !1 : B, q = f.mediaCollection, U = f.initCaption, V = f.onDropText, H = f.onSendMedia, G = f.onScheduleMedia, z = f.allowMultipleMedia, j = z === void 0 ? !0 : z, K = f.openTrigger, Q = f.isSendHQPhotoEnabled, X = Q === void 0 ? !0 : Q, Y = y(q);
		g(function() {
			Y.current = q;
		}, [q]), g(function() {
			if (o("WAWebTPPdfViewerGatingUtils").isAsyncPdfSendEnabled()) return function() {
				Y.current.getModelsArray().forEach(function(e) {
					e.state === o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.PROCESSING && o("WAWebMimeTypes").isPdfDocument(e.mimetype) && e.cancelEnrichment();
				});
			};
		}, []);
		var J = (n = f.isSubmitDisabled) != null ? n : !1, Z = q.canSend() && !J, ee = C(W != null && W ? o("WAWebMediaEditorEnumsThickness").ThicknessType.XLARGE : o("WAWebMediaEditorEnumsThickness").ThicknessType.SMALL), te = ee[0], ne = ee[1], re = C(!0), oe = re[0], ae = re[1], ie = C(function() {
			return o("WAWebMediaEditorEnumsColors").getColorValue(o("WAWebMediaEditorEnumsColors").ColorType.BLACK);
		}), le = ie[0], se = ie[1], ue = C(o("WAWebMediaEditorEnumsFonts").FontType.SANS_SERIF), ce = ue[0], de = ue[1], me = C(o("WAWebMediaEditorEnumsFonts").TextAlignment.CENTER), pe = me[0], _e = me[1], fe = C(!1), ge = fe[0], he = fe[1], ye = C(!0), Ce = ye[0], be = ye[1], ve = C(!1), Se = ve[0], Re = ve[1], Le = C(!1), Ee = Le[0], ke = Le[1], Ie = C(!1), Te = Ie[0], De = Ie[1], xe = C(null), $e = xe[0], Pe = xe[1], Ne = C(null), Me = Ne[0], we = Ne[1], Ae = C(!1), Fe = Ae[0], Oe = Ae[1], Be = C(null), We = Be[0], qe = Be[1], Ue = C(null), Ve = Ue[0], He = Ue[1], Ge = r("useWAWebToggle")(!1), ze = Ge[0], je = Ge[1], Ke = C(W != null ? W : !1), Qe = Ke[0], Xe = Ke[1], Ye = o("useWAWebTimeout").useTimeout(function() {
			K === o("WAWebMediaEditorOpenTrigger").MediaEditorOpenTrigger.ConversationPanelDragAndDrop && (Se || M());
		}, 250), Je = Ye[0], Ze = Ye[1], et = y(), tt = y(), nt = y(), rt = y(), ot = C(U == null ? void 0 : U.text), at = ot[0], it = ot[1], lt = y(), st = y(o("WAWebMediaEditorToolbarBlur.react").BLUR_DEFAULT_MODE), ut = y(o("WAWebMediaEditorToolbarBlur.react").BLUR_DEFAULT_RADIUS), ct = y(o("WAWebMediaEditorEnumsColors").getColorValue(o("WAWebMediaEditorEnumsColors").ColorType.WHITE)), dt = y(o("WAWebMediaEditorEnumsColors").getColorValue(o("WAWebMediaEditorEnumsColors").ColorType.BLACK)), mt = y(3), pt = r("useLazyRef")(function() {
			return new Map();
		}), _t = function(t, n) {
			pt.current.set(t, n);
		}, ft = r("useLazyRef")(function() {
			return new Map();
		}), gt = r("useLazyRef")(function() {
			return new Map();
		}), ht = function(t, n) {
			gt.current.set(t, n);
		}, yt = r("useLazyRef")(function() {
			return new Map();
		}), Ct = function(t, n) {
			yt.current.set(t, n);
		}, bt = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), vt = r("useWAWebUnmountSignal")();
		q.isStickerMaker = Qe, o("useWAWebListener").useListener(q, [
			"add",
			"remove",
			"reset"
		], bt);
		var St = function() {
			if (q.canSend()) {
				var e = q.uiProcessMsgs(f.maxNumberOfMedia, O), t = e.errorMsgs;
				t && (o("WAWebToastManager").ToastManager.open(_.jsx(o("WAWebToast.react").Toast, { msg: t })), q.getPreviewableMedias().length === 0 && M()), bt();
			}
		};
		o("useWAWebListener").useListener(q, [
			"active-change",
			"change:state",
			"change:previewable"
		], St);
		var Rt = function() {
			var e;
			return q.length === 1 && ((e = q.at(0)) == null ? void 0 : e.type) === o("WAWebMsgType").MSG_TYPE.IMAGE;
		}, Lt = function() {
			var e = !Qe && Rt();
			Xe(e), ne(e ? o("WAWebMediaEditorEnumsThickness").ThicknessType.XLARGE : o("WAWebMediaEditorEnumsThickness").ThicknessType.SMALL);
		};
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "toggle_sticker_maker", Lt), g(function() {
			Je();
		}, []), g(function() {
			var e;
			return (e = rt.current) == null || e.focus(), function() {
				lt.current && self.clearTimeout(lt.current);
			};
		}, []), g(function() {
			q.isStickerMaker = Qe;
		}, void 0);
		var Et = o("useWAWebModelValues").useModelValues(r("WAWebChatPreferenceCollection").getDefault(), ["hdMediaEnabled"]);
		g(function() {
			Et.hdMediaEnabled && $e != null && $e.hdEligible && $e.quality !== o("WAWebAttachMediaModel").MediaQuality.HD && X && P($e);
		}, [
			$e,
			Et.hdMediaEnabled,
			X
		]);
		var kt = function() {
			return rt.current;
		}, It = function(t) {
			var e;
			if ((e = et.current) != null && e.resetUIState()) return !1;
			if (Ve) return qe(null), He(null), !1;
			var n = t === o("WAWebUim").DismissReason.UIM_INTERACTION;
			return M(n), !0;
		};
		h(p, function() {
			return {
				getElement: kt,
				handleRequestDismiss: It,
				send: function() {
					return $n();
				},
				isSendEnabled: function() {
					return Z;
				},
				updateCaption: Ln,
				toggleViewOnce: function() {
					return je(), !ze;
				}
			};
		}), g(function() {
			A();
		}, [A]);
		var Tt = q.getActive(), Dt = at, xt = Fe;
		!xt && !$e && Dt != null && Dt !== "" && Tt && (Tt.type === o("WAWebMsgType").MSG_TYPE.IMAGE || Tt.type === o("WAWebMsgType").MSG_TYPE.VIDEO || Tt.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT) && (Tt.caption = Dt, xt = !0);
		var $t = (a = Tt == null ? void 0 : Tt.canUndoMediaEditorData()) != null ? a : !1, Pt = (i = Tt == null ? void 0 : Tt.canRedoMediaEditorData()) != null ? i : !1;
		Tt !== Me && (we(Tt), Pe(Tt), ke($t), De(Pt), Oe(xt));
		var Nt = function() {
			return $e == null ? r("WAWebMediaEditorData").create() : $e.mediaEditorData;
		}, Mt = function() {
			var e, t;
			ke((e = $e == null ? void 0 : $e.canUndoMediaEditorData()) != null ? e : !1), De((t = $e == null ? void 0 : $e.canRedoMediaEditorData()) != null ? t : !1);
		}, wt = function(n, r) {
			if (n !== Nt()) {
				if ($e) {
					var t, a;
					$e.updateMediaEditorData(n, {
						undoable: (t = r == null ? void 0 : r.undoable) != null ? t : !1,
						lastAction: (a = r == null ? void 0 : r.lastAction) != null ? a : null
					}), Mt();
				}
				if (r != null && r.updatePreview) {
					var i;
					(i = et.current) == null || i.updatePreview();
				}
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["MediaEditor: Updated MediaEditorData"])));
			}
		}, At = function() {
			var e;
			return (e = et.current) == null ? void 0 : e.getBackground();
		}, Ft = function(t) {
			if (t === void 0 && (t = !0), $e && $e.canUndoMediaEditorData()) {
				var e, n, r = $e.lastMediaEditorAction;
				$e.undoMediaEditorData(t);
				var o = $e.lastMediaEditorAction;
				Mt(), (e = et.current) == null || e.updatePreview(), (n = et.current) == null || n.undoAction(r, o);
			}
		}, Ot = function() {
			if ($e && $e.canRedoMediaEditorData()) {
				var e, t, n = $e.lastMediaEditorAction;
				$e.redoMediaEditorData();
				var r = $e.lastMediaEditorAction;
				Mt(), (e = et.current) == null || e.updatePreview(), (t = et.current) == null || t.redoAction(r, n);
			}
		}, Bt = function(t) {
			var e = t.image, n = t.imageDefaultHeight, o = t.imageDefaultWidth, a = t.type, i = r("nullthrows")(et.current).getCanvasScale(), l = e.width * i.x, s = e.height * i.y, u = o / l, c = n / s, d = Math.min(u, c), m = Nt().addImageLayerToCenter({
				type: a,
				image: e,
				editable: !0,
				scale: {
					x: d,
					y: d
				}
			});
			wt(m, {
				updatePreview: !0,
				undoable: !0
			});
		}, Wt = async function(t) {
			try {
				var e = await o("WAWebMediaEditorUtilsCreateCanvasAndImage").createImageFromEmoji(t);
				if (!e) return;
				var n = Qe ? R : S;
				Bt({
					image: e,
					imageDefaultHeight: n,
					imageDefaultWidth: n,
					type: o("WAWebMediaEditorLayersImage").ImageLayerType.Emoji
				}), Qe && new (o("WAWebWebcStickerMakerEventsWamEvent")).WebcStickerMakerEventsWamEvent({ stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType").WEBC_STICKER_MAKER_EVENT_NAME_TYPE.EMOJI_ADDED }).commit();
			} catch (e) {
				o("WAWebToastManager").ToastManager.open(_.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			}
		}, qt = function(t, n, a, i, l, s, u, c) {
			s === void 0 && (s = o("WAWebMediaEditorEnumsColors").getColorValue(o("WAWebMediaEditorEnumsColors").ColorType.WHITE)), u === void 0 && (u = o("WAWebMediaEditorEnumsColors").getColorValue(o("WAWebMediaEditorEnumsColors").ColorType.BLACK)), c === void 0 && (c = 50);
			var e = r("nullthrows")(et.current).getCanvasScale(), d = r("nullthrows")(et.current).getCanvasSize(), m = Math.min(d.getWidth(), l === o("WAWebMediaEditorLayersShape").BlurMode.None ? D / e.x : I / e.x), p = Math.min(d.getHeight(), l === o("WAWebMediaEditorLayersShape").BlurMode.None ? x / e.y : T / e.y), _ = Nt().addShapeLayerToCenter({
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
			wt(_, {
				updatePreview: !0,
				undoable: !0
			});
		}, Ut = function(t) {
			var e = Nt().getSelectedLayer();
			if (e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && !e.getConfirmed()) Ft(!1);
			else {
				var n, a, i = Nt().clearSelectedLayer();
				wt(i), qt(r("nullthrows")((n = Nt().getBackground()) == null ? void 0 : n.getImage()), r("nullthrows")((a = Nt().getBackground()) == null ? void 0 : a.getFrame()), t, ut.current, o("WAWebMediaEditorLayersShape").BlurMode.None, ct.current, dt.current, mt.current);
			}
		}, Vt = async function(t) {
			try {
				var e = await o("WAWebMediaEditorUtilsCreateCanvasAndImage").createImageFromSticker(t);
				if (!e) throw r("err")("Create image from sticker failed");
				Bt({
					image: e,
					imageDefaultHeight: L,
					imageDefaultWidth: L,
					type: o("WAWebMediaEditorLayersImage").ImageLayerType.Sticker
				}), Qe && new (o("WAWebWebcStickerMakerEventsWamEvent")).WebcStickerMakerEventsWamEvent({ stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType").WEBC_STICKER_MAKER_EVENT_NAME_TYPE.STICKER_ADDED }).commit();
			} catch (e) {
				o("WAWebToastManager").ToastManager.open(_.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			}
		}, Ht = function() {
			var e = Nt().clearSelectedLayer();
			wt(e);
		}, Gt = function() {
			var e = Nt().clearSelectedLayer();
			wt(e);
		}, zt = function() {
			var e = Nt().clearSelectedLayer();
			wt(e), he(function(e) {
				return !e;
			});
		}, jt = function(t) {
			var e = Nt(), n = e.setActiveFilter(t);
			wt(n, {
				undoable: !0,
				updatePreview: !0
			});
		}, Kt = function() {
			var e = At(), t = Nt();
			if (!(!e || t.getOutlineLayer().isEmpty())) {
				var n = t.getCropCenter(), a = e.height, i = e.width, l = new (r("WAWebMediaEditorGeometryPoint"))({
					x: n.getX() - i / 2,
					y: n.getY() - a / 2
				}), s = -t.getRotation(), u = Math.max(i, a), c = t.getCropSize().getDimension(), d = o("WAWebStickerConstants").STICKER_DIMENSION - o("WAWebStickerConstants").STICKER_PADDING * 2, m = c * (d / o("WAWebStickerConstants").STICKER_DIMENSION), p = m / u, _ = t.updateBackground(e, l, s, {
					x: p,
					y: p
				}).clearOutlinePaths();
				wt(_, {
					undoable: !0,
					updatePreview: !0,
					lastAction: o("WAWebAttachMediaModel").MediaEditorAction.OutlineDone
				}), Qe && new (o("WAWebWebcStickerMakerEventsWamEvent")).WebcStickerMakerEventsWamEvent({ stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType").WEBC_STICKER_MAKER_EVENT_NAME_TYPE.IMAGE_OUTLINED }).commit();
			}
		}, Qt = function() {
			var e = Nt().clearOutlinePaths();
			wt(e, {
				undoable: !0,
				updatePreview: !0
			});
		}, Xt = function(t, n, r) {
			var e = Nt().setRotation(t).setCrop(n, r);
			wt(e, {
				undoable: !0,
				updatePreview: !0,
				lastAction: o("WAWebAttachMediaModel").MediaEditorAction.CropRotateCanvas
			}), Qe && new (o("WAWebWebcStickerMakerEventsWamEvent")).WebcStickerMakerEventsWamEvent({ stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType").WEBC_STICKER_MAKER_EVENT_NAME_TYPE.IMAGE_CROPPED }).commit();
		}, Yt = function(t) {
			var e = Nt().getSelectedLayer();
			if (e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && e.isBlur()) {
				var n = Nt().setBlurMode(e, t);
				wt(n, {
					updatePreview: !0,
					undoable: !0
				}), st.current = t;
			}
		}, Jt = function(t, n) {
			n === void 0 && (n = !1);
			var e = Nt().getSelectedLayer();
			if (e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer) {
				var r = Nt().setShapeRadius(e, t);
				wt(r, {
					updatePreview: !0,
					undoable: n
				}), ut.current = t;
			}
		}, Zt = function() {
			var e = Nt().getSelectedLayer();
			if (e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && e.isBlur() && !e.getConfirmed()) Ft(!1);
			else {
				var t, n, a = Nt().clearSelectedLayer();
				wt(a), qt(r("nullthrows")((t = Nt().getBackground()) == null ? void 0 : t.getImage()), r("nullthrows")((n = Nt().getBackground()) == null ? void 0 : n.getFrame()), o("WAWebMediaEditorUtilsShapes").ShapeType.RECTANGLE, ut.current, st.current);
			}
		}, en = function(t) {
			var e = Nt(), n = e.getSelectedLayer();
			if (n instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && !n.isBlur()) {
				var r = e.setShapeFillColor(n, t);
				wt(r, {
					updatePreview: !0,
					undoable: !0
				}), ct.current = t, dt.current = n.getStrokeColor(), mt.current = n.getStrokeWidth();
			}
		}, tn = function(t) {
			var e = Nt(), n = e.getSelectedLayer();
			if (n instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && !n.isBlur()) {
				var r = e.setShapeStrokeColor(n, t);
				wt(r, {
					updatePreview: !0,
					undoable: !0
				}), ct.current = n.getFillColor(), dt.current = t, mt.current = n.getStrokeWidth();
			}
		}, nn = function(t) {
			var e = Nt(), n = e.getSelectedLayer();
			if (n instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && !n.isBlur()) {
				var r = e.setShapeStrokeWidth(n, t);
				wt(r, {
					updatePreview: !0,
					undoable: !0
				}), ct.current = n.getFillColor(), dt.current = n.getStrokeColor(), mt.current = t;
			}
		}, rn = function(t, n) {
			var e = Nt(), r = t.setPoints(n), o = e.updateLayer(t, r);
			wt(o, {
				updatePreview: !0,
				undoable: !0
			});
		}, on = function(t) {
			ne(t);
		}, an = function(t) {
			ae(t);
		}, ln = function() {
			wt(Nt().clearSelectedLayer());
		}, sn = function() {
			if (!We) {
				ln();
				var e = r("nullthrows")(et.current).getCanvasScale(), t = {
					x: E / e.x,
					y: E / e.y
				};
				if (Qe) {
					var n = Nt(), a = n.getCropSize().getDimension(), i = k * a / o("WAWebStickerConstants").STICKER_DIMENSION;
					t = {
						x: i / o("WAWebMediaEditorLayersText").DEFAULT_FONT_SIZE,
						y: i / o("WAWebMediaEditorLayersText").DEFAULT_FONT_SIZE
					};
				}
				var l = {
					origin: Nt().getCropCenter(),
					text: "",
					textColor: le,
					textBackground: Ce,
					alignment: pe,
					font: ce,
					scale: t
				}, s = Nt().addTextLayer(l);
				wt(s, {
					updatePreview: !0,
					undoable: !0
				});
				var u = r("nullthrows")(s.getLastTextLayer());
				He(u), qe(null);
			}
		}, un = function(t) {
			de(t);
			var e = Nt().getSelectedLayer();
			if (Ve) He(Ve.setFont(t));
			else if (e && e instanceof o("WAWebMediaEditorLayersText").TextLayer) {
				var n = Nt().setFont(e, t);
				wt(n, {
					updatePreview: !0,
					undoable: !0
				});
			}
		}, cn = function(t) {
			_e(t);
			var e = Nt().getSelectedLayer();
			if (Ve) He(Ve.setAlignment(t));
			else if (e && e instanceof o("WAWebMediaEditorLayersText").TextLayer) {
				var n = Nt().setAlignment(e, t);
				wt(n, {
					updatePreview: !0,
					undoable: !0
				});
			}
		}, dn = function(t) {
			se(t);
			var e = Nt().getSelectedLayer();
			if (Ve) He(Ve.setTextColor(t));
			else if (e && e instanceof o("WAWebMediaEditorLayersText").TextLayer) {
				var n = Nt().setTextColor(e, t);
				wt(n, {
					updatePreview: !0,
					undoable: !0
				});
			}
		}, mn = function() {
			var e = !Ce;
			be(e);
			var t = Nt().getSelectedLayer();
			if (Ve) He(Ve.setTextBackground(e));
			else if (t && t instanceof o("WAWebMediaEditorLayersText").TextLayer) {
				var n = Nt().setTextBackground(t, e);
				wt(n, {
					updatePreview: !0,
					undoable: !0
				});
			}
		}, pn = function(t) {
			He(t), qe(t);
		}, _n = function(t, n) {
			var e;
			if (!n) We && wt(Nt().deleteLayer(We), {
				updatePreview: !0,
				undoable: !!t.getText()
			});
			else {
				var a = Nt(), i = r("nullthrows")(Ve).setText(n);
				We ? a = a.updateLayer(r("nullthrows")(We), i) : (a = a.addTextLayer(i), Qe && new (o("WAWebWebcStickerMakerEventsWamEvent")).WebcStickerMakerEventsWamEvent({ stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType").WEBC_STICKER_MAKER_EVENT_NAME_TYPE.TEXT_ADDED }).commit()), wt(a, {
					updatePreview: !0,
					undoable: !0
				});
			}
			self.setTimeout(function() {
				He(null), qe(null);
			}, 0), (e = rt.current) == null || e.focus();
		}, fn = function(t) {
			wt(Nt().addPaintPath(t), {
				undoable: !0,
				updatePreview: !0
			});
		}, gn = function(t) {
			wt(Nt().addOutlinePath(t), {
				undoable: !0,
				updatePreview: !0,
				lastAction: o("WAWebAttachMediaModel").MediaEditorAction.Outline
			});
		}, hn = function(t) {
			if (!(!t.getEditable() || ge)) {
				var e = Nt().setSelectedLayer(t);
				t instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && (t.getConfirmed() || (e = e.updateLayer(t, t.setConfirmed())), t.isBlur() && (st.current = t.getMode()), ut.current = t.getRadius()), wt(e), t instanceof o("WAWebMediaEditorLayersText").TextLayer && (se(t.getTextColor()), be(t.getTextBackground()), de(t.getFont()));
			}
		}, yn = function(t, n) {
			var e = t instanceof o("WAWebMediaEditorLayersImage").ImageLayer && t.isBackground();
			e ? wt(Nt().translateBackground(n), {
				updatePreview: !0,
				undoable: !0
			}) : wt(Nt().translateLayer(t, n), {
				updatePreview: !0,
				undoable: !0
			});
		}, Cn = function(t, n, r, a) {
			var e = t instanceof o("WAWebMediaEditorLayersImage").ImageLayer && t.isBackground();
			e ? wt(Nt().transformBackground(n, r), {
				updatePreview: !0,
				undoable: !0
			}) : wt(Nt().transformLayer({
				frame: a,
				layer: t,
				rotation: n,
				scale: r
			}), {
				updatePreview: !0,
				undoable: !0
			});
		}, bn = function(t) {
			var e = Nt().deleteLayer(t);
			t === Ve && (He(null), qe(null)), wt(e, {
				updatePreview: !0,
				undoable: !0
			});
		}, vn = function(t) {
			o("WAWebEventFiles").getFiles(t).then(function(e) {
				if (!vt.aborted) {
					var n;
					return t.shiftKey === !0 && t.altKey === !0 && e.length === 1 && (Xe(!0), ne(o("WAWebMediaEditorEnumsThickness").ThicknessType.XLARGE), n = !0), f.onProcessAttachments(e.map(function(e) {
						return {
							file: e,
							stickerMaker: n,
							filename: e.name,
							mimetype: e.type
						};
					}), o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY);
				}
			}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebMediaLoadErrors").MediaDragDropError, function(e) {
				q.length || V(e.src);
			})), t.target instanceof HTMLInputElement && (t.target.value = "");
		}, Sn = function(t) {
			Ze(), !(ze || Qe) && vn(t);
		}, Rn = function(t, n) {
			ze || Qe || (Re(t), !t && !n && !q.length && M());
		}, Ln = function(t) {
			if ($e) {
				var e = q.indexOf($e);
				$e.updateCaption(t), e === 0 && t === "" && Fe && (Oe(!1), it(null));
				var n = gt.current.get($e.id);
				n && ft.current.set($e.id, n.editorContent());
			}
		}, En = function(t) {
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
			f.onProcessAttachments(e, o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.PASTE);
		}, kn = function(t) {
			t.preventDefault(), t.stopPropagation();
			var e = new (r("WAWebDataTransfer"))(t.clipboardData);
			e.hasFiles() && En(e);
		}, In = function() {
			if (tt.current) {
				var e = tt.current;
				e.click();
			}
		}, Tn = function(t) {
			if (Qe) {
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
		}, Dn = function() {
			var e;
			return q.length === 1 && ((e = q.at(0)) == null ? void 0 : e.isViewableOnce()) === !0 && f.canViewOnce && !W;
		}, xn = async function(t) {
			if (o("WAWebTPPdfViewerGatingUtils").isAsyncPdfSendEnabled()) {
				var e = [];
				q.getModelsArray().forEach(function(t) {
					t.state === o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.PROCESSING && o("WAWebMimeTypes").isPdfDocument(t.mimetype) && (t.cancelEnrichment(), t.processPromise && e.push(t.processPromise));
				}), e.length > 0 && await Promise.allSettled(e);
			}
			var n = q.getPreviewableMedias();
			Promise.all(n.map(function(e) {
				var t = e.mediaEditorData;
				return e.updateMediaEditorData(t.setSending(!0), {
					undoable: !1,
					lastAction: null
				}), e;
			})).finally(function() {
				if (n.length === 0) {
					M();
					return;
				}
				if ($e != null && $e.mediaEditorData.hasEdits() || Qe) {
					var e;
					(e = et.current) == null || e.updatePreview({ immediately: !0 });
				}
				var r = [];
				n.forEach(function(e) {
					var t = e.editedFile;
					if (t && (e.mediaEditorData.hasEdits() || Qe)) {
						var n = e.mediaEditorData.getActiveFilter(), a = n !== o("WAWebMediaEditorUtilsFilterType").FilterType.NONE, i = e.mediaEditorData.isCropped(), l = e.mediaEditorData.isRotated(), s = q.replace(e.id, {
							file: t,
							asSticker: Qe,
							hasFilter: a,
							isCropped: i,
							isRotated: l
						});
						r.push(s);
					}
				}), Promise.all(r).then(function() {
					var e = q.getPreviewableMedias();
					if (e.length !== 0) {
						var r = e.map(function(e) {
							var t, n = (t = e.caption) == null ? void 0 : t.trim(), r = [], o = [], a = ft.current.get(e.id);
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
							isViewOnce: Dn() && ze,
							threadId: f.threadId
						};
						Fe && (o.initCaptionUsed = !0), t != null && G != null ? G(r, t, o) : (H(r, o, nt.current), Tn(n));
					}
				});
			});
		}, $n = function(t) {
			t == null || t.preventDefault(), t == null || t.stopPropagation(), Z && xn().catch(function(e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["WAWebMediaEditor: sendFromMediaEditor failed"]))).catching(r("getErrorSafe")(e)).sendLogs("media-editor-send-fail");
			});
		}, Pn = function(t) {
			Z && xn(t).catch(function(e) {
				o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["WAWebMediaEditor: scheduleFromMediaEditor failed"]))).catching(r("getErrorSafe")(e)).sendLogs("media-editor-schedule-fail");
			});
		}, Nn = function(t) {
			var e;
			if ($e && !t.repeat && !t.shiftKey && !Ve) {
				var n = gt.current.get($e.id);
				if (!(n != null && n.isFocused())) {
					var r = Nt().getSelectedLayer();
					if (r instanceof o("WAWebMediaEditorLayersText").TextLayer) {
						t.preventDefault(), t.stopPropagation(), pn(r);
						return;
					}
					(e = et.current) != null && e.resetUIState() || $n();
				}
			}
		}, Mn = function() {
			if ($e) {
				var e = pt.current.get($e.id);
				e && e.scrollIntoView();
			}
		}, wn = function() {
			var e = q.setPrevAsActive();
			e && Mn();
		}, An = function() {
			var e = q.setNextAsActive();
			e && Mn();
		}, Fn = function(t, n) {
			if (!(!$e || n.repeat || Ve)) {
				var e = $e && !$e.caption, r = gt.current.get($e.id), o = !1;
				r && (o = !e && r.isFocused() && (!r.isCursorAtStart() || t !== "left") && (!r.isCursorAtEnd() || t !== "right")), o || (n.preventDefault(), n.stopPropagation(), t === "left" ? wn() : An());
			}
		}, On = function(t) {
			if ($e != null && $e.mediaEditorData.hasEdits()) {
				var e;
				(e = et.current) == null || e.updatePreview({ immediately: !0 });
			}
			q.setActive(t);
		}, Bn = function(t, n) {
			n.stopPropagation(), n.preventDefault(), q.remove(t), q.getValidMedias().length === 0 ? lt.current = self.setTimeout(function() {
				M();
			}, v) : nt.current && r("WAWebFocusTracer").focus(nt.current);
		}, Wn = function(t) {
			var e = null, n = function(n) {
				var e = n.onSendButtonClick, r = n.sendButtonEnabled, a = r === void 0 ? !1 : r, i = n.setSendButtonRef, l = n.theme, s = n.viewOnce, u = s === void 0 ? null : s, c = n.viewOnceDisabled, d = c === void 0 ? !0 : c;
				return f.renderCaptionInput({
					theme: l,
					msgType: t.type,
					initialText: t.caption,
					viewOnce: u,
					viewOnceDisabled: d,
					onChange: Ln,
					onToggleViewOnce: je,
					onEnter: $n,
					onFiles: En,
					setCaptionInputRef: function(n) {
						ht(t.id, n);
					},
					setSendButtonRef: i,
					internLinksEnabled: O !== o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
					phoneNumbersEnabled: O !== o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
					expandedTextFormatsEnabled: O !== o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
					multiline: O !== o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
					sendButtonEnabled: a || O === o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE,
					onSendButtonClick: e || $n,
					maxCaptionLength: f.maxCaptionLength
				});
			};
			switch (t.type) {
				case o("WAWebMsgType").MSG_TYPE.STICKER:
				case o("WAWebMsgType").MSG_TYPE.IMAGE: {
					var a = n({
						theme: "image",
						viewOnce: ze,
						viewOnceDisabled: !Dn(),
						setSendButtonRef: function(n) {
							return Ct(t.id, n);
						}
					});
					e = _.jsx(r("WAWebMediaEditorImage.react"), {
						ref: et,
						attachMedia: t,
						captionInput: a,
						hdEligible: t.hdEligible && f.hdEligible,
						isSendHQPhotoEnabled: f.isSendHQPhotoEnabled,
						onClose: O === o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE ? null : M,
						openTrigger: K,
						paintThickness: te,
						outlineSmoothing: oe,
						canUndo: Ee,
						canRedo: Te,
						currentlyEditingTextLayer: We,
						draftTextLayer: Ve,
						sendAsSticker: Qe,
						inFilterMode: ge,
						mediaTheme: O,
						onFilterChange: jt,
						onFilterSelect: zt,
						onPaintSelect: Ht,
						onOutlineSelect: Gt,
						onOutlineDone: Kt,
						onOutlineReset: Qt,
						onTextSelect: sn,
						onTextBackgroundToggle: mn,
						onEmojiSelect: Wt,
						onShapeSelect: Ut,
						onStickerSelect: Vt,
						onLayerSelect: hn,
						onLayerUnselect: ln,
						onLayerDelete: bn,
						onLayerTranslate: yn,
						onLayerTransform: Cn,
						onTextEditingStart: pn,
						onTextEditingEnd: _n,
						onTextColorSelect: dn,
						onPointsChange: rn,
						onFontSelect: un,
						onAlignmentSelect: cn,
						onShapeFillColorSelect: en,
						onShapeStrokeColorSelect: tn,
						onShapeStrokeWidthSelect: nn,
						onPaintThicknessSelect: on,
						onOutlineSmoothingToggle: an,
						onCropRotateCanvas: Xt,
						onBlurModeChange: Yt,
						onBlurRadiusChange: Jt,
						onBlurSelect: Zt,
						onUndo: Ft,
						onRedo: Ot,
						onPaintDrawEnd: fn,
						onOutlineDrawEnd: gn,
						hideFooter: f.hideFooter,
						hideCanvasShadow: f.hideCanvasShadow,
						toolbarContainer: f.toolbarContainer
					}, t.mediaEditorData.getId());
					break;
				}
				case o("WAWebMsgType").MSG_TYPE.VIDEO: {
					var i = n({
						theme: "video",
						viewOnce: ze,
						viewOnceDisabled: !Dn()
					});
					e = _.jsx(r("WAWebMediaEditorPreviewVideo.react"), {
						attachMedia: t,
						captionInput: i,
						onClose: M
					}, t.id);
					break;
				}
				case o("WAWebMsgType").MSG_TYPE.AUDIO:
					e = _.jsx(r("WAWebMediaEditorPreviewAudio.react"), {
						item: t,
						onClose: M
					}, t.id);
					break;
				default: {
					var l = n({
						theme: "document",
						viewOnce: !1,
						viewOnceDisabled: !0
					});
					o("WAWebMimeTypes").isPdfDocument(t.mimetype) ? e = _.jsx(r("WAWebMediaEditorPreviewPdf.react"), {
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
						onClose: M
					}, t.id) : e = _.jsx(r("WAWebMediaEditorPreviewFile.react"), {
						mimeType: t.mimetype,
						filesize: t.filesize,
						filename: t.filename,
						fileExt: t.fileExt,
						onClose: M,
						captionInput: l
					}, t.id);
					break;
				}
			}
			return e;
		}, qn, Un = q.getPreviewableMedias(), Vn = f.maxNumberOfMedia;
		Un.length > Vn && (Un = Un.slice(0, Vn)), q.canSend() ? $e && (qn = Wn($e)) : qn = _.jsx("div", babelHelpers.extends({}, (m || (m = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginAuto), { children: _.jsx(o("WAWebSpinner.react").Spinner, { color: "highlight" }, "processing") }));
		var Hn = Se ? _.jsx("div", {
			className: "x10l6tqk x1bkdxzg xh8yej3 x5yr21d x1280gxy",
			children: _.jsx("div", {
				className: "x9f619 x78zum5 x6s0dn4 xl56j7k x4t50tc xcg35fi xlya59e xwy3id5 xpvcztv x11nt7xy xk4n5i7 xamhcws x1alpsbp xlxy82 xyumdvf x120xd9q x1k4ovr2 xdfaw6k xefzod xlze6vy x47fsot x1rrvw3c x18djku1 x1abdmlv x11fxgd9 x4n8cb0 xymharo x2pibh5",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}, "container") : null, Gn = {
			enter: Nn,
			left: function(t) {
				return Fn("left", t);
			},
			right: function(t) {
				return Fn("right", t);
			}
		}, zn = (l = f.mimes) != null ? l : o("WAWebMimeTypes").DOC_MIMES === "*" ? "*" : [o("WAWebMimeTypes").IMAGE_MIMES].join(), jn, Kn = ($e == null ? void 0 : $e.type) === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
		if (qn != null) {
			var Qn;
			if (Un.length > 0 && (O === o("WAWebMediaEditorEnumsThemes").MediaTheme.AD_CREATION || O === o("WAWebMediaEditorEnumsThemes").MediaTheme.BROADCAST ? Qn = _.jsx("div", {
				tabIndex: -1,
				ref: nt,
				onKeyPress: o("WAWebStopEvent").preventDefault,
				children: _.jsx(r("WDSButton.react"), {
					"aria-label": s._(
						/*BTDS*/
						""
					),
					onPress: $n,
					disabled: !q.canSend(),
					label: s._(
						/*BTDS*/
						""
					),
					size: O === o("WAWebMediaEditorEnumsThemes").MediaTheme.AD_CREATION ? "medium" : "large",
					testid: "media_editor_save_button"
				})
			}) : Qn = _.jsx("div", {
				className: "x1247r65 xng8ra",
				tabIndex: -1,
				ref: nt,
				onKeyPress: o("WAWebStopEvent").preventDefault,
				children: _.jsx(r("WAWebSendButtonWithCount.react"), {
					ariaLabel: s._(
						/*BTDS*/
						"",
						[s._plural(Un.length, "number")]
					),
					large: !0,
					count: Un.length === 1 ? null : Un.length,
					onClick: $n,
					disabled: !Z,
					theme: O === o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL || O === o("WAWebMediaEditorEnumsThemes").MediaTheme.GALAXY_FLOW ? "TICK" : "SEND"
				})
			})), O === o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE) jn = null;
			else {
				var Xn = s._(
					/*BTDS*/
					""
				), Yn;
				if (O === o("WAWebMediaEditorEnumsThemes").MediaTheme.AD_CREATION) Yn = o("WAWebBizAdCreationMediaValidationUtils").canAddMoreAttachments(q) ? _.jsx(r("WDSButton.react"), {
					xstyle: [o("WDSMargins.stylex").wdsMargins.marginVer8, b.marginInline5],
					Icon: o("WAWebPlusIcon.react").PlusIcon,
					variant: "tonal",
					size: "large",
					type: "default",
					onPress: In,
					"aria-label": Xn
				}, "media-more") : null;
				else {
					var Jn = !ze && !Qe && Un.length < Vn;
					Yn = !Qe && j ? _.jsx(r("WDSButton.react"), {
						"aria-label": Xn,
						disabled: !Jn,
						Icon: o("WAWebPlusIcon.react").PlusIcon,
						onPress: In,
						variant: "borderless",
						xstyle: [
							$.addMediaButton,
							!Jn && $.addMediaButtonDisabled,
							o("WDSMargins.stylex").wdsMargins.marginVer8,
							b.marginInline5
						]
					}, "media-more") : null;
				}
				var Zn;
				Un.length > 0 && O !== o("WAWebMediaEditorEnumsThemes").MediaTheme.BROADCAST && (Zn = _.jsxs(o("WAWebFlex.react").FlexRow, {
					grow: 1,
					className: (m || (m = r("stylex")))([
						$.filmstripContainer,
						o("WDSMargins.stylex").wdsMargins.marginTop4,
						o("WDSMargins.stylex").wdsMargins.marginHor16,
						o("WDSMargins.stylex").wdsMargins.marginBottom0
					]),
					justify: "center",
					align: "center",
					children: [_.jsx(r("WAWebMediaEditorFilmstripDragAndDrop.react"), {
						className: "x1c4vz4f xs83m0k xdl72j9 xeuugli xw2csxc xuxw1ft",
						mediaCollection: q,
						onClick: On,
						onClose: Bn,
						onElementRef: _t,
						theme: O
					}), Yn]
				})), jn = _.jsxs("div", babelHelpers.extends({}, (m || (m = r("stylex"))).props(O === o("WAWebMediaEditorEnumsThemes").MediaTheme.BROADCAST ? $.footerBroadcast : $.footer, o("WDSPaddings.stylex").wdsPaddings.paddingVer8, o("WDSPaddings.stylex").wdsPaddings.paddingHor16), { children: [
					f.submitAccessory,
					Zn,
					G != null && Qn != null ? _.jsx(r("WAWebScheduleMessageButton.react"), {
						atLimit: f.scheduleAtLimit === !0,
						buttonSize: "large",
						disabled: !Z,
						isGroup: f.scheduleIsGroup === !0,
						onScheduleSend: Pn,
						xstyle: $.scheduleButton
					}) : null,
					Qn
				] }));
			}
		}
		var er = {
			0: "x1iyjqo2 xs83m0k x1r8uery x1htk8sl x5yr21d x1bifzbx xhslqc4 x1280gxy xpilrb4 x1t7ytsu x1vb5itz",
			4: "x1iyjqo2 xs83m0k x1r8uery x1htk8sl x5yr21d x1bifzbx xhslqc4 x1280gxy xpilrb4 x1t7ytsu x1vb5itz",
			2: "x1iyjqo2 xs83m0k x1r8uery x1htk8sl x5yr21d x1bifzbx xhslqc4 x1280gxy xpilrb4 x1t7ytsu x1vb5itz",
			6: "x1iyjqo2 xs83m0k x1r8uery x1htk8sl x5yr21d x1bifzbx xhslqc4 x1280gxy xpilrb4 x1t7ytsu x1vb5itz",
			1: "x1iyjqo2 xs83m0k x1r8uery x5yr21d xhslqc4 x1t7ytsu x1vb5itz xjbqb8w x14e42zd xeuugli x2lwn1j",
			5: "x1iyjqo2 xs83m0k x1r8uery x5yr21d xhslqc4 x1t7ytsu x1vb5itz xjbqb8w x14e42zd xeuugli x2lwn1j",
			3: "x1iyjqo2 xs83m0k x1r8uery x5yr21d xhslqc4 x1t7ytsu x1vb5itz xjbqb8w x14e42zd xeuugli x2lwn1j",
			7: "x1iyjqo2 xs83m0k x1r8uery x5yr21d xhslqc4 x1t7ytsu x1vb5itz xjbqb8w x14e42zd xeuugli x2lwn1j"
		}[(($e == null ? void 0 : $e.type) !== o("WAWebMsgType").MSG_TYPE.IMAGE) << 2 | !!Kn << 1 | (f.hideCanvasShadow === !0) << 0], tr = _.jsxs(o("WAWebFlex.react").FlexColumn, {
			grow: 1,
			className: er,
			align: "stretch",
			children: [
				Hn,
				qn,
				jn,
				_.jsx("input", {
					ref: tt,
					type: "file",
					accept: zn,
					style: { display: "none" },
					onChange: vn,
					multiple: !0
				})
			]
		});
		O === o("WAWebMediaEditorEnumsThemes").MediaTheme.ATTACH && (tr = _.jsx(r("WAWebDrawer.react"), {
			theme: "media",
			onDrop: Sn,
			onDragChange: Rn,
			children: _.jsx(r("WAWebDrawerBody.react"), {
				tabIndex: "-1",
				overflow: "hidden",
				onPaste: kn,
				children: tr
			})
		}, "attach-image-modal"));
		var nr = {
			0: "",
			1: "xh8yej3 x5yr21d"
		}[!!(O === o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE || o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS) << 0];
		return _.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			className: nr,
			handlers: Gn,
			ref: rt,
			children: tr
		});
	}
	N.displayName = N.name + " [from " + i.id + "]";
	var M = N;
	l.MediaEditor = M;
}), 226);

__d("WAWebMediaViewerModal.react", [
	"fbt",
	"Promise",
	"WALogger",
	"WAPromiseDelays",
	"WATypeUtils",
	"WAWebAppTracker",
	"WAWebDataLink",
	"WAWebEmojiText.react",
	"WAWebFocusTracer",
	"WAWebFrontendMsgGetters",
	"WAWebGroupMetadataContext",
	"WAWebHeroInteraction.react",
	"WAWebHtmlViewerGatingUtils",
	"WAWebIncrementalZoomUtils",
	"WAWebInteractionTracePolicy",
	"WAWebKeyboardHotKeys.react",
	"WAWebMarkPlayedMsgAction",
	"WAWebMediaAudio.react",
	"WAWebMediaData",
	"WAWebMediaImage.react",
	"WAWebMediaIncrementalZoom",
	"WAWebMediaPanelHeader.react",
	"WAWebMediaStage.react",
	"WAWebMediaSticker.react",
	"WAWebMediaTypes",
	"WAWebMediaViewerCaption.react",
	"WAWebMediaViewerConstants",
	"WAWebMediaViewerFlow.react",
	"WAWebMediaViewerMediaVideo.react",
	"WAWebMediaViewerModalStyle",
	"WAWebMediaViewerShortcuts.react",
	"WAWebModalManager",
	"WAWebMsgActionCapability",
	"WAWebMsgGetters",
	"WAWebNux",
	"WAWebPdfViewerEventEmitter",
	"WAWebResizeObserver.react",
	"WAWebTPDiscardEditPdfPopup.react",
	"WAWebTPEditPdfInWhatsappContext.react",
	"WAWebTPEditPdfSendBar.react",
	"WAWebTPLoggingUtils",
	"WAWebTPPdfViewerGatingUtils",
	"WAWebTimeSpentLoggingNavigation",
	"WAWebUimUie.react",
	"WAWebVelocityAnimate",
	"WAWebViewOnceNux.react",
	"WDSButton.react",
	"WDSIconIcChevronLeft.react",
	"WDSIconIcChevronRight.react",
	"WDSPaddings.stylex",
	"WDSTooltip.react",
	"cr:23046",
	"cr:27506",
	"cr:37214",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebModelValues",
	"useWAWebMsgValues",
	"useWAWebNux",
	"useWAWebThrottledCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _, f, g = f || (f = o("react")), h = f, y = h.useCallback, C = h.useContext, b = h.useEffect, v = h.useId, S = h.useMemo, R = h.useRef, L = h.useState, E = {
		paddingTop10: {
			paddingTop: "x889kno",
			$$css: !0
		},
		paddingBottom15: {
			paddingBottom: "xr1496l",
			$$css: !0
		}
	}, k = { overlay: {
		boxSizing: "x9f619",
		height: "x5yr21d",
		left: "xu96u03",
		position: "xixxii4",
		top: "x13vifvy",
		width: "xh8yej3",
		$$css: !0
	} };
	function I(e) {
		var t = o("react-compiler-runtime").c(7);
		if (o("WAWebTPPdfViewerGatingUtils").isWebTPPdfAnnotationsEnabled()) {
			var n, r = (n = e.mediaData) == null ? void 0 : n.filehash, a;
			t[0] !== e ? (a = g.jsx(T, babelHelpers.extends({}, e)), t[0] = e, t[1] = a) : a = t[1];
			var i;
			return t[2] !== r || t[3] !== a ? (i = g.jsx(o("WAWebTPEditPdfInWhatsappContext.react").WAWebTPEditPdfInWhatsappProvider, {
				filehash: r,
				children: a
			}), t[2] = r, t[3] = a, t[4] = i) : i = t[4], i;
		}
		var l;
		return t[5] !== e ? (l = g.jsx(T, babelHelpers.extends({}, e)), t[5] = e, t[6] = l) : l = t[6], l;
	}
	function T(t) {
		var a, i, l = t.isAnimatingThumbs, f = t.msg, h = t.onBack, v = t.onExitAnimation, I = t.onImageLoad, T = t.onImgZoomIn, P = t.shouldShowAllMedia, N = t.shouldShowNumberText, M = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
			(i = o("WAWebMsgGetters")).getId,
			i.getStar,
			o("WAWebFrontendMsgGetters").getIsUnsentMedia,
			i.getIsViewOnce,
			i.getIsStickerMsg,
			i.getHasThumbList,
			i.getCaption,
			i.getInteractiveAnnotations,
			i.getType,
			i.getMessageSecret
		]), w = M[0], A = M[1], F = M[2], O = M[3], B = M[4], W = M[5], q = M[6], U = M[7], V = M[8], H = M[9], G = o("WAWebFrontendMsgGetters").getChat(f), z = o("useWAWebModelValues").useModelValues(t.mediaData, [
			"mediaStage",
			"type",
			"isGif",
			"mimetype",
			"filename"
		]), j = C(o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtx), K = j.hasOverflownThumbnailSection, Q = C(o("WAWebMediaViewerFlow.react").MediaViewerFlowZoomContext) || K, X = o("WAWebTPEditPdfInWhatsappContext.react").useWAWebTPEditPdfInWhatsappContext(), Y = X.filehash, J = X.isEditing, Z = X.isSending, ee = X.setIsEditing, te = X.setIsSending, ne = X.undoRedoState, re = y(function() {
			var t = new (_ || (_ = (n("Promise"))))(function(e) {
				var t = function(r) {
					o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.off("pdf:updatedBuffer", t), e(r);
				};
				o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on("pdf:updatedBuffer", t);
			});
			o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("pdf:getUpdatedBuffer"), t.then(function(t) {
				var n;
				if (t == null) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to get edited PDF buffer for download"]))).sendLogs("edit-pdf-download-null-buffer");
					return;
				}
				var r = new Blob([t], { type: z.mimetype }), a = window.URL.createObjectURL(r), i = o("WAWebDataLink").createDataLink(a);
				i.style.display = "none", i.download = (n = z.filename) != null ? n : "document.pdf", document.body && document.body.appendChild(i), i.click(), o("WAWebTPLoggingUtils").logAnnotatedDownloadEvent(ne.hasUndo, Y), document.body && document.body.removeChild(i), o("WAPromiseDelays").delayMs(100).then(function() {
					window.URL.revokeObjectURL(a);
				});
			}).catch(function(e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to download edited PDF: ", ""])), e).sendLogs("edit-pdf-download-fail");
			});
		}, [
			z.mimetype,
			z.filename,
			ne.hasUndo,
			Y
		]), oe = function() {
			ne.hasUndo ? o("WAWebModalManager").ModalManager.openSupportModal(g.jsx(r("WAWebTPDiscardEditPdfPopup.react"), {
				onDiscard: function() {
					o("WAWebTPLoggingUtils").logAnnotatedDiscardEvent(ne.hasUndo, Y), ee(!1);
				},
				onDownload: re
			})) : ee(!1);
		}, ae = R(null), ie = R(null), le = R(null), se = R(null), ue = R(null), ce = R(!1), de = R(!1), me = R(!1), pe = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_VIEW_ONCE_RECEIVER), _e = pe[0], fe = pe[1], ge = O && _e, he = t.getZoomNode, ye = S(function() {
			return z.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED && he ? he(w) : null;
		}, [
			z.mediaStage,
			he,
			w
		]), Ce = L(!1), be = Ce[0], ve = Ce[1], Se = j.isEnabled, Re = L(!1), Le = Re[0], Ee = Re[1], ke = [r("WAWebMediaData").TYPE.IMAGE, r("WAWebMediaData").TYPE.STICKER].includes(z.type), Ie = L(ke), Te = Ie[0], De = Ie[1], xe = L(!t.isAnimatingThumbs && !Te), $e = xe[0], Pe = xe[1], Ne = L(!1), Me = Ne[0], we = Ne[1], Ae = L(!1), Fe = Ae[0], Oe = Ae[1], Be = O || !o("WAWebMsgActionCapability").canWamoSubMsgBeSharedByUser(f, G), We = R(null);
		o("WAWebIncrementalZoomUtils").usePreventDefaultZoom(We);
		var qe = function() {
			var e = g.jsx(r("WAWebViewOnceNux.react"), {
				isPhoto: z.type === r("WAWebMediaData").TYPE.IMAGE,
				onOkClick: function() {
					fe(), o("WAWebModalManager").ModalManager.close();
				}
			});
			o("WAWebModalManager").ModalManager.open(e);
		}, Ue = r("useWAWebThrottledCallback")(function(e, t) {
			if (!Le) {
				var n = ae.current;
				if (n) {
					var a = n.getInsideContainer();
					if (!(!a || !(a instanceof HTMLElement))) {
						var i = n.getOutsideContainer();
						if (!(!i || !(i instanceof HTMLElement))) {
							var l = n.getTranslatePosition(i, e, t), s = l.translateX, u = l.translateY;
							r("WAWebVelocityAnimate")(a, "stop"), r("WAWebVelocityAnimate")(a, {
								translateX: s,
								translateY: u,
								scale: o("WAWebMediaViewerConstants").ZOOM_IN_FACTOR
							}, { duration: 0 });
						}
					}
				}
			}
		});
		b(function() {
			return o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["MediaViewerModal: Opened"]))), ge && qe(), r("WAWebFocusTracer").focus(se.current), function() {
				o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["MediaViewerModal: Closed"]))), $(), Ue.cancel();
			};
		}, []), b(function() {
			x(z.type);
		}, [z.type]);
		var Ve = function() {
			qe();
		}, He = function(t, n) {
			var e, a = n.getBoundingClientRect(), i = t.getBoundingClientRect(), l = i.top - a.top, s = i.left - a.left, u = t.clientWidth / n.clientWidth, c = (n.clientHeight - t.clientHeight) / 2, d = (n.clientWidth - t.clientWidth) / 2;
			l -= c, s -= d, r("WAWebVelocityAnimate")(n, {
				opacity: [1, 0],
				translateX: [0, s],
				translateY: [0, l],
				scale: [1, u]
			}, {
				duration: o("WAWebMediaViewerConstants").ANIMATION_DURATION,
				easing: [
					.1,
					.82,
					.25,
					1
				]
			}).then(function() {
				return De(!1);
			});
			var m = (e = le.current) == null ? void 0 : e.getElement();
			m && r("WAWebVelocityAnimate")(m, { opacity: [1, 0] }, { duration: o("WAWebMediaViewerConstants").ANIMATION_DURATION });
		}, Ge = function() {
			O && o("WAWebMarkPlayedMsgAction").canMarkPlayed(f) && o("WAWebMarkPlayedMsgAction").markPlayed(f);
		}, ze = function(t) {
			Ge(), I && I();
			var e = ye, n = t == null ? void 0 : t.target;
			if (!t) {
				var r, o = (r = ie.current) == null ? void 0 : r.getContainerElement();
				o instanceof HTMLElement && (n = o);
			}
			if (!e || !n || !(n instanceof HTMLElement) || me.current || Se) {
				De(!1);
				return;
			}
			me.current = !0, He(e, n);
		}, je = (a = n("cr:23046") == null ? void 0 : n("cr:23046").isWindowsHybridEnabled()) != null ? a : !1, Ke = o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(z.mimetype) || o("WAWebHtmlViewerGatingUtils").isHtmlViewerEnabledForMimeType(z.mimetype, G.id), Qe = function() {
			var e;
			if (!ce.current) {
				if (ce.current = !0, je && Ke) {
					h();
					return;
				}
				o("WATypeUtils").isFunction(v) && v();
				var n = t.getZoomNode && t.getZoomNode(w);
				if (!n) return h();
				var a;
				if (ke && ae.current) {
					var i;
					a = ae.current.getInsideContainer(), (i = ae.current) == null || i.closingMediaZoomable();
				} else if (z.isGif && ie.current) {
					var l;
					a = ie.current.getContainerElement(), (l = ie.current) == null || l.closingMedia();
				} else ue.current && (a = ue.current);
				if (!a) return h();
				var s = a, u = a.getBoundingClientRect(), c = n.getBoundingClientRect(), d = c.top - u.top, m = c.left - u.left, p = n.clientWidth / s.clientWidth, _ = (s.clientHeight - n.clientHeight) / 2, f = (s.clientWidth - n.clientWidth) / 2;
				d -= _, m -= f, r("WAWebVelocityAnimate")(a, {
					translateX: [m, 0],
					translateY: [d, 0],
					scale: [p, 1]
				}, {
					duration: o("WAWebMediaViewerConstants").CLOSE_ANIMATION_DURATION,
					easing: [
						.1,
						.82,
						.25,
						1
					]
				}).then(function() {
					h();
				});
				var g = (e = le.current) == null ? void 0 : e.getElement();
				g && r("WAWebVelocityAnimate")(g, { opacity: [0, 1] }, {
					duration: o("WAWebMediaViewerConstants").CLOSE_ANIMATION_DURATION,
					easing: [
						.1,
						.82,
						.25,
						1
					]
				});
			}
		}, Xe = function(t) {
			ne.hasUndo ? o("WAWebModalManager").ModalManager.openSupportModal(g.jsx(r("WAWebTPDiscardEditPdfPopup.react"), {
				onDiscard: function() {
					o("WAWebTPLoggingUtils").logAnnotatedDiscardEvent(ne.hasUndo, Y), ee(!1), t();
				},
				onDownload: re
			})) : (ee(!1), t());
		}, Ye = function(t) {
			o("WAWebModalManager").ModalManager.openSupportModal(g.jsx(r("WAWebTPDiscardEditPdfPopup.react"), {
				onDiscard: function() {
					o("WAWebTPLoggingUtils").logAnnotatedDiscardEvent(ne.hasUndo, Y), te(!1), t();
				},
				onDownload: re
			}));
		}, Je = function() {
			Xe(Qe);
		}, Ze = function() {
			Ye(Qe);
		}, et = Qe;
		J ? et = Je : Z && (et = Ze);
		var tt = function(t) {
			var e = function() {
				Qe(), t();
			};
			return J ? (Xe(e), !0) : Z ? (Ye(e), !0) : !1;
		}, nt = function(t) {
			var e = ae.current;
			t && e && (de.current = e.getHeightOverflow() > 0 || e.getWidthOverflow() > 0), ve(t), T(t);
		}, rt = function(t) {
			Ue.cancel();
			var e = ae.current;
			e && be && e.onClick(t);
		}, ot = function(t) {
			Se || Ue(t.pageX, t.pageY);
		}, at = function(t) {
			var e, n = (e = ae.current) == null ? void 0 : e.getInsideContainer(), r = !!(n != null && n.contains(document.activeElement));
			if (!(l || Te || !r)) {
				Ue.cancel();
				var o = ae.current;
				o != null && o.onKeyboardZoom(t);
			}
		}, it = function() {
			we(!0);
		}, lt = function() {
			we(!1);
		}, st = function() {
			Ee(!0);
		}, ut = function() {
			Ee(!1);
		};
		b(function() {
			!$e && !l && !Te && Pe(!0);
		}, [
			l,
			$e,
			Te
		]), o("WAWebTimeSpentLoggingNavigation").useTsNavigation({ surface: "media-viewer" });
		var ct = null, dt = t.msgIndexInAlbum >= 0 && t.albumSize >= 0;
		function mt() {
			return [];
		}
		if (q || dt) {
			var pt = function() {
				var e = q == null && _t != null ? _t : q, t = [{
					testid: "media-caption",
					text: e
				}];
				return N && q != null && _t != null && t.push({
					testid: "media-number-caption",
					text: _t
				}), t;
			}, _t;
			dt && (_t = s._(
				/*BTDS*/
				"",
				[s._param("number", t.msgIndexInAlbum + 1), s._param("totalNumber", t.albumSize)]
			));
			var ft = o("WAWebMediaViewerCaption.react").getCaptionFormatters({
				msg: f,
				id: w
			}), gt = z.type === r("WAWebMediaData").TYPE.IMAGE && !O, ht = !$e && (z.isGif || gt) || j.isZoomedIn, yt = {
				className: (p || (p = r("stylex")))(r("WAWebMediaViewerModalStyle").mediaCaption, ht && r("WAWebMediaViewerModalStyle").mediaCaptionHidden),
				formatters: ft
			};
			ct = g.jsx(g.Fragment, { children: (o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(z.mimetype) || o("WAWebHtmlViewerGatingUtils").isHtmlViewerEnabledForMimeType(z.mimetype, G.id) ? mt() : pt()).map(function(e, t) {
				return g.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({}, e, yt, { ref: function(t) {
					le.current = t;
				} }), t);
			}) });
		}
		var Ct = babelHelpers.extends({}, (p || (p = r("stylex"))).props(r("WAWebMediaViewerModalStyle").captionWrapper, Q && r("WAWebMediaViewerModalStyle").captionWrapperZoomedIn));
		ct = j.isEnabled ? g.jsx(r("WAWebResizeObserver.react"), babelHelpers.extends({
			component: "p",
			onResize: function(t) {
				j.setCaptionHeight(t.height);
			}
		}, Ct, { children: ct })) : g.jsx("p", babelHelpers.extends({}, Ct, { children: ct }));
		var bt, vt = y(function() {
			Oe(!0);
		}, [Oe]);
		switch (z.type) {
			case r("WAWebMediaData").TYPE.IMAGE:
				bt = g.jsx(r("WAWebMediaImage.react"), {
					msg: f,
					mediaData: z,
					onLoad: ze,
					onImgZoomIn: nt,
					onAnnotationTooltipDisplay: st,
					onAnnotationTooltipDismiss: ut,
					preventDownload: Be,
					ref: ae
				}, w.toString());
				break;
			case r("WAWebMediaData").TYPE.STICKER:
				bt = g.jsx(r("WAWebMediaSticker.react"), {
					msg: f,
					mediaData: z,
					onLoad: ze,
					onImgZoomIn: nt,
					onStickerPackView: Qe,
					stickerPackViewDelay: o("WAWebMediaViewerConstants").CLOSE_ANIMATION_DURATION,
					ref: ae
				}, w.toString());
				break;
			case r("WAWebMediaData").TYPE.VIDEO:
				bt = g.jsx(r("WAWebMediaViewerMediaVideo.react"), {
					autoPlay: t.autoPlayOnOpen && !ge,
					msg: f,
					mediaData: z,
					onLoadedData: z.isGif ? ze : Ge,
					startTime: t.startTime,
					onClose: Qe,
					ref: ie
				}, w.toString());
				break;
			case r("WAWebMediaData").TYPE.AUDIO:
				bt = g.jsx(r("WAWebMediaAudio.react"), {
					mediaData: z,
					msg: f
				}, w.toString());
				break;
			case r("WAWebMediaData").TYPE.DOCUMENT:
				n("cr:27506") && o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(z.mimetype) ? bt = g.jsx(r("WAWebHeroInteraction.react"), {
					enableHoldTrigger: !1,
					description: "PdfViewer",
					policy: r("WAWebInteractionTracePolicy").PDF_VIEWER,
					children: function(t, r) {
						return g.jsx(n("cr:27506"), {
							onLoad: ze,
							msg: f,
							mediaData: z,
							containerRef: ue,
							interactonRef: t,
							onRender: vt,
							onClose: J ? oe : Qe,
							interaction: r
						}, w.toString());
					}
				}) : n("cr:37214") && o("WAWebHtmlViewerGatingUtils").isHtmlViewerEnabledForMimeType(z.mimetype, G.id) && (bt = g.jsx(n("cr:37214"), {
					onLoad: ze,
					msg: f,
					mediaData: z,
					containerRef: ue
				}, w.toString()));
				break;
			default: o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["type: ", ""])), z.type).sendLogs("MediaViewerModal: unexpected media type");
		}
		var St = p(r("WAWebMediaViewerModalStyle").media, !!ct && r("WAWebMediaViewerModalStyle").mediaWithCaption), Rt = mt().length === 0 && Ke, Lt = Ke, Et = p(k.overlay, (Te || l) && r("WAWebMediaViewerModalStyle").mediaViewerAnimate, be && r("WAWebMediaViewerModalStyle").cursorZoomOut, r("WAWebMediaViewerModalStyle").mediaViewer, !W && o("WDSPaddings.stylex").wdsPaddings.paddingBottom40, je && r("WAWebMediaViewerModalStyle").mediaViewerHybrid, Rt && o("WDSPaddings.stylex").wdsPaddings.paddingBottom0), kt = be && de.current ? ot : null, It = be ? rt : null, Tt = be ? null : Qe;
		return Tt != null && O && (Tt = it), o("WAWebMediaViewerShortcuts.react").useMediaViewerShortcuts(f, Z && o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(z.mimetype) ? re : void 0), g.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "MediaViewer",
			escapable: !0,
			requestDismiss: function(t, n) {
				var e, r = n instanceof KeyboardEvent && n.key === "Escape";
				if (r && J) {
					Je();
					return;
				}
				if (r && Z) {
					Ze();
					return;
				}
				if (!j.isEnabled) {
					Qe();
					return;
				}
				if (!r || j.currentZoomLevel === 1) {
					Qe();
					return;
				}
				(e = j.getHandler()) == null || e.performZoom(1);
			},
			children: g.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
				handlers: {
					space: at,
					enter: at
				},
				ref: se,
				children: [g.jsxs("div", {
					className: Et,
					"data-animate-media-viewer": !0,
					"data-testid": "media-viewer-modal",
					onClick: It,
					onMouseMove: kt,
					children: [g.jsx(r("WAWebMediaPanelHeader.react"), {
						isHighlightClose: Me,
						msg: f,
						mediaData: z,
						onClose: et,
						onRequestGoToMsg: tt,
						onHighlightCloseEnd: lt,
						onViewOnceInfoClick: Ve,
						msgIndexInAlbum: t.msgIndexInAlbum,
						theme: P === !0 ? "media_hub" : void 0,
						hasRendered: Fe,
						showBorderBottom: o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(z.mimetype),
						onDownloadEditedPdf: re
					}), g.jsx("div", babelHelpers.extends({ ref: We }, p.props([
						r("WAWebMediaViewerModalStyle").mediaContent,
						E.paddingTop10,
						E.paddingBottom15
					], B && r("WAWebMediaViewerModalStyle").mediaContentSticker, Rt && o("WDSPaddings.stylex").wdsPaddings.paddingBottom0, Lt && o("WDSPaddings.stylex").wdsPaddings.paddingTop0, Z && r("WAWebMediaViewerModalStyle").mediaContentSendingPdf), {
						onClick: Tt,
						children: g.jsx(D, {
							hasNavigationButtons: W,
							onNext: t.onNext,
							onPrev: t.onPrev,
							imgZoomed: be,
							children: g.jsxs("div", {
								className: St,
								children: [
									g.jsx(r("WAWebMediaStage.react"), {
										msg: f,
										mediaData: z
									}),
									bt,
									g.jsx(r("WAWebGroupMetadataContext").Provider, {
										value: G.groupMetadata,
										children: ct
									})
								]
							})
						})
					}))]
				}), Z && g.jsx(r("WAWebTPEditPdfSendBar.react"), {
					chat: G,
					mimetype: z.mimetype,
					filename: z.filename,
					onSent: function() {
						te(!1), Qe();
					}
				})]
			})
		});
	}
	T.displayName = T.name + " [from " + i.id + "]";
	function D(e) {
		var t = o("react-compiler-runtime").c(16), n = e.children, a = e.hasNavigationButtons, i = e.imgZoomed, l = e.onNext, u = e.onPrev, c = C(o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtx).isZoomedIn, d = v(), m = v(), _;
		t[0] !== a || t[1] !== i || t[2] !== c || t[3] !== u || t[4] !== d ? (_ = a && g.jsx("div", babelHelpers.extends({}, (p || (p = r("stylex"))).props(r("WAWebMediaViewerModalStyle").mediaNavBtn, r("WAWebMediaViewerModalStyle").mediaNavBtnPrev, c && r("WAWebMediaViewerModalStyle").mediaNavBtnHidden, r("WAWebMediaViewerModalStyle").mediaNavBtnPrevIncrementalZoom), { children: g.jsx("div", {
			onClick: u ? null : P,
			children: g.jsx(r("WDSTooltip.react"), {
				id: d,
				label: s._(
					/*BTDS*/
					""
				),
				children: g.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcChevronLeft.react"),
					variant: "tonal",
					type: "media",
					size: "medium",
					directional: !0,
					onPress: u != null ? u : void 0,
					disabled: !u || i,
					testid: "media-prev",
					"aria-describedby": d,
					"aria-label": s._(
						/*BTDS*/
						""
					)
				})
			})
		}) })), t[0] = a, t[1] = i, t[2] = c, t[3] = u, t[4] = d, t[5] = _) : _ = t[5];
		var f;
		t[6] !== a || t[7] !== i || t[8] !== c || t[9] !== m || t[10] !== l ? (f = a && g.jsx("div", babelHelpers.extends({}, (p || (p = r("stylex"))).props(r("WAWebMediaViewerModalStyle").mediaNavBtn, r("WAWebMediaViewerModalStyle").mediaNavBtnNext, c && r("WAWebMediaViewerModalStyle").mediaNavBtnHidden, r("WAWebMediaViewerModalStyle").mediaNavBtnNextIncrementalZoom), { children: g.jsx("div", {
			onClick: l ? null : P,
			children: g.jsx(r("WDSTooltip.react"), {
				id: m,
				label: s._(
					/*BTDS*/
					""
				),
				children: g.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcChevronRight.react"),
					variant: "tonal",
					type: "media",
					size: "medium",
					directional: !0,
					onPress: l != null ? l : void 0,
					disabled: !l || i,
					testid: "media-next",
					"aria-describedby": m,
					"aria-label": s._(
						/*BTDS*/
						""
					)
				})
			})
		}) })), t[6] = a, t[7] = i, t[8] = c, t[9] = m, t[10] = l, t[11] = f) : f = t[11];
		var h;
		return t[12] !== n || t[13] !== _ || t[14] !== f ? (h = g.jsxs(g.Fragment, { children: [
			_,
			n,
			f
		] }), t[12] = n, t[13] = _, t[14] = f, t[15] = h) : h = t[15], h;
	}
	function x(e) {
		var t;
		(t = o("WAWebAppTracker")).AppTracker.stop(t.AppTrackerType.MediaOpen), t.AppTracker.stop(t.AppTrackerType.MediaOpenImage), t.AppTracker.stop(t.AppTrackerType.MediaOpenVideo), e === r("WAWebMediaData").TYPE.IMAGE ? o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.MediaOpenImage) : e === r("WAWebMediaData").TYPE.VIDEO ? o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.MediaOpenVideo) : o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.MediaOpen);
	}
	function $() {
		var e;
		(e = o("WAWebAppTracker")).AppTracker.stop(e.AppTrackerType.MediaOpen), e.AppTracker.stop(e.AppTrackerType.MediaOpenImage), e.AppTracker.stop(e.AppTrackerType.MediaOpenVideo);
	}
	function P(e) {
		e == null || e.stopPropagation();
	}
	l.default = I;
}), 226);

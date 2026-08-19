__d("WAWebBizBroadcastMessageAttachmentSection.react", [
	"fbt",
	"WAFilteredCatch",
	"WALogger",
	"WAPromiseRaceAbort",
	"WAWebAttachMediaCollection",
	"WAWebAttachMenuStrings",
	"WAWebBBLoggerTypes",
	"WAWebBizBroadcastMediaProcessor",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizBroadcastsMessageCatalogSection.react",
	"WAWebBizBroadcastsMessageDocumentSection.react",
	"WAWebBizBroadcastsNewBroadcastAddButton.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebBusinessBroadcastsGatingUtils",
	"WAWebBusinessProfileCollection",
	"WAWebBusinessProfileUtils",
	"WAWebCaptureDrawer.react",
	"WAWebContactCollection",
	"WAWebFilePicker.react",
	"WAWebFileUtils",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebGetUserMediaErrors",
	"WAWebGuidePopup.react",
	"WAWebMediaCapture",
	"WAWebMediaCaptureStreamType",
	"WAWebMediaEditorEnumsThemes",
	"WAWebMediaEditorLoadable.react",
	"WAWebMimeTypes",
	"WAWebModalManager",
	"WAWebMsgType",
	"WAWebNoop",
	"WAWebProductCatalogSelectProductsModal.react",
	"WAWebStorefrontFilledIcon.react",
	"WAWebUserPrefsMeUser",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSIconIcDescriptionFilled.react",
	"WDSIconIcEdit.react",
	"WDSIconIcFilterFilled.react",
	"WDSIconIcPhotoCameraFilled.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSText.react",
	"getErrorSafe",
	"react",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useEffect, f = m.useRef, g = m.useState, h = 1, y = [
		"catalog",
		"document",
		"media"
	], C = {
		attachmentSection: {
			marginTop: "x98l61r",
			$$css: !0
		},
		attachmentTitleRow: {
			columnGap: "x1trrmfo",
			$$css: !0
		},
		cameraIconStyle: {
			color: "xvzgjlx",
			$$css: !0
		},
		catalogIconStyle: {
			color: "x1bzzifw",
			$$css: !0
		},
		documentIconColor: {
			color: "x1xy43o6",
			$$css: !0
		},
		mediaEditorContainer: {
			height: "x5yr21d",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			position: "x10l6tqk",
			top: "x13vifvy",
			width: "xh8yej3",
			zIndex: "xbpklzw",
			$$css: !0
		},
		mediaEditorModalContainer: {
			backgroundColor: "x1q7yeco",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			height: "x1097qzo",
			insetInlineStart: "xbudbmw",
			left: null,
			right: null,
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			position: "x10l6tqk",
			top: "xwa60dl",
			transform: "x11lhmoz",
			width: "x1lh4fz6",
			zIndex: "xbpklzw",
			$$css: !0
		},
		photosIconStyle: {
			color: "xsadat2",
			$$css: !0
		}
	};
	function b() {
		return d.jsx(d.Fragment, {});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.onCameraClick, n = e.onCatalogClick, a = e.onDocumentsClick, i = e.onPhotosVideosClick, l = e.supportedAttachmentTypes, s = l === void 0 ? y : l, u = o("WAWebUserPrefsMeUser").getMaybeMePnUser(), c = s.includes("document"), m = s.includes("media"), p = s.includes("catalog") && u != null && o("WAWebBusinessProfileUtils").hasCatalog(o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(u)) && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastCatalogAttachmentEnabled();
		return d.jsxs(r("WDSMenu.react"), { children: [
			c && d.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcDescriptionFilled.react"),
				iconXstyle: C.documentIconColor,
				title: o("WAWebAttachMenuStrings").DocumentText(),
				onPress: a,
				testid: "attachment-menu-documents"
			}, "documents"),
			m && d.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcFilterFilled.react"),
				iconXstyle: C.photosIconStyle,
				title: o("WAWebBizBroadcastsCreationStrings").getAttachmentMenuPhotosVideosLabel(),
				onPress: i,
				testid: "attachment-menu-photos-videos"
			}, "photos-videos"),
			m && d.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcPhotoCameraFilled.react"),
				iconXstyle: C.cameraIconStyle,
				title: o("WAWebBizBroadcastsCreationStrings").getAttachmentMenuCameraLabel(),
				onPress: t,
				testid: "attachment-menu-camera"
			}, "camera"),
			p && d.jsx(r("WDSMenuItem.react"), {
				Icon: o("WAWebStorefrontFilledIcon.react").StorefrontFilledIcon,
				iconXstyle: C.catalogIconStyle,
				title: o("WAWebAttachMenuStrings").CatalogText(),
				onPress: n,
				testid: "attachment-menu-catalog"
			}, "catalog")
		] });
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(t) {
		var n, a, i = t.attachmentData, l = t.entryPoint, c = t.setAttachmentData, m = t.supportedAttachmentTypes, S = m === void 0 ? y : m, R = f(null), L = f(null), E = f(null), k = r("useWAWebUnmountSignal")();
		_(function() {
			return function() {
				E.current == null || E.current();
			};
		}, []);
		var I = i == null ? void 0 : i.previewUrl;
		_(function() {
			return function() {
				I != null && I.startsWith("blob:") && URL.revokeObjectURL(I);
			};
		}, [I]);
		var T = p(function(e) {
			if (e.length) {
				var t = e[0], n = new (r("WAWebAttachMediaCollection"))({ chatParticipantCount: 1 }), a = function() {
					n.processAttachments(e.map(function(e) {
						return { file: e };
					}), void 0, o("WAWebBizBroadcastMediaProcessor").SUPPORTED_MEDIA_TYPES, h).catch(function(e) {
						var t, n;
						o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentUpload(l, String((t = (n = r("getErrorSafe")(e)) == null ? void 0 : n.message) != null ? t : e));
					});
				}, i = function(n) {
					var e, r, a, i, s = n.at(0), u = s == null ? void 0 : s.media;
					if (u == null) {
						o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentUpload(l, "media_processing_failed"), o("WAWebModalManager").ModalManager.closeMedia();
						return;
					}
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentPreviewSaveButtonClicked(l, u.fileExt, u.filesize);
					var d = u.type === o("WAWebMsgType").MSG_TYPE.IMAGE && (e = u.editedFile) != null ? e : t, m = d instanceof File && d.name !== "" ? d : new File([d], t.name, {
						lastModified: t.lastModified,
						type: d.type
					}), p = (r = u.filename) != null ? r : m.name;
					c({
						file: m,
						fileExt: (a = u.fileExt) != null ? a : o("WAWebFileUtils").getFileExtension(p),
						fileName: p,
						fileSize: u.filesize,
						mediaType: u.type,
						mimetype: u.mimetype,
						pageCount: (i = u.documentPageCount) != null ? i : 0,
						previewSize: u.fullPreviewSize,
						previewUrl: u.fullPreview
					}), o("WAWebModalManager").ModalManager.closeMedia();
				}, s = function(t) {
					return n.processAttachments(t, void 0, o("WAWebBizBroadcastMediaProcessor").SUPPORTED_MEDIA_TYPES, h).catch(function(e) {
						var t, n;
						throw o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentUpload(l, String((t = (n = r("getErrorSafe")(e)) == null ? void 0 : n.message) != null ? t : e)), e;
					});
				}, u = function() {
					o("WAWebModalManager").ModalManager.closeMedia();
				}, m = d.jsxs(d.Fragment, { children: [d.jsx("div", { className: "x1honnu5 x5yr21d x1o0tod xixxii4 x13vifvy xh8yej3 xbpklzw" }), d.jsx(o("WAWebFlex.react").FlexColumn, {
					xstyle: C.mediaEditorModalContainer,
					children: d.jsx(o("WAWebMediaEditorLoadable.react").MediaEditorLoadable, {
						theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.BROADCAST,
						onClose: u,
						onRender: a,
						initCaption: null,
						onSendMedia: i,
						mediaCollection: n,
						sendAsSticker: !1,
						onDropText: r("WAWebNoop"),
						canViewOnce: !1,
						hdEligible: !0,
						maxNumberOfMedia: h,
						renderCaptionInput: b,
						allowMultipleMedia: !1,
						onProcessAttachments: s,
						tsNavigationData: { surface: "status-composer-media" }
					})
				})] });
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentFileSelected(l), o("WAWebModalManager").ModalManager.openMedia(m, {
					blockClose: !0,
					transition: "status-modal"
				});
			}
		}, [c, l]), D = (n = i == null ? void 0 : i.file) != null ? n : null, x = p(function(e) {
			var t;
			if (e) {
				e.stopPropagation();
				var n = Array.from((t = e.target.files) != null ? t : []);
				n.length && T(n);
			}
		}, [T]), $ = p(function() {
			D != null && T([D]);
		}, [D, T]), P = p(function() {
			c(null), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastMediaEditor] Media removed"])));
		}, [c]), N = p(function() {
			var e = function(t) {
				var e = t.selectedItems, n = e, r = n[0];
				if (r == null) {
					o("WAWebModalManager").ModalManager.close();
					return;
				}
				c({
					catalogData: {
						catalogWid: r.catalogWid.toString(),
						currency: r.currency,
						priceAmount1000: r.priceAmount1000,
						productId: r.id.toString(),
						productImageUrl: r.imageCdnUrl,
						productName: r.name,
						salePriceAmount1000: r.salePriceAmount1000
					},
					file: void 0,
					fileExt: null,
					fileName: "",
					fileSize: null,
					mediaType: o("WAWebMsgType").MSG_TYPE.PRODUCT,
					mimetype: "",
					pageCount: 0,
					previewSize: {
						height: 0,
						width: 0
					},
					previewUrl: ""
				}), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.catalogAttachmentSelected(l, o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENT_CATALOG_PRODUCT_SELECTED), o("WAWebModalManager").ModalManager.close();
			}, t = function(t) {
				var e, n = o("WAWebContactCollection").ContactCollection.get(t.id), r = (n != null ? o("WAWebFrontendContactGetters").getDisplayName(n) : null) || (t.catalogName != null && t.catalogName !== "" ? t.catalogName : null) || String(s._(
					/*BTDS*/
					""
				)), a = (e = t.getMostRecentlyApprovedProduct()) == null ? void 0 : e.imageCdnUrl;
				c({
					catalogData: {
						catalogWid: t.id.toString(),
						productCount: t.productCollection.length,
						productImageUrl: a,
						productName: r
					},
					file: void 0,
					fileExt: null,
					fileName: "",
					fileSize: null,
					mediaType: o("WAWebMsgType").MSG_TYPE.PRODUCT,
					mimetype: "",
					pageCount: 0,
					previewSize: {
						height: 0,
						width: 0
					},
					previewUrl: ""
				}), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.catalogAttachmentSelected(l, o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENT_CATALOG_FULL_CATALOG_SELECTED), o("WAWebModalManager").ModalManager.close();
			};
			o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebProductCatalogSelectProductsModal.react"), {
				singleSelect: !0,
				onCancel: o("WAWebModalManager").closeModalManager,
				onConfirm: e,
				onShare: t
			}));
		}, [l, c]), M = p(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentsCatalogDropdownClicked(l), N();
		}, [l, N]), w = p(function() {
			var e;
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentsDocumentDropdownClicked(l), (e = R.current) == null || e.open();
		}, [l]), A = p(function() {
			var e;
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentsImageVideoDropdownClicked(l), (e = L.current) == null || e.open();
		}, [l]), F = p(function() {
			E.current != null && (E.current(), E.current = null);
		}, []), O = p(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentsCameraDropdownClicked(l), F();
			var e = o("WAWebMediaCapture").start({
				featureSurface: o("WAWebGuidePopup.react").FeatureSurface.PHOTO_CAPTURE,
				type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA
			}), t = e.asyncStream, n = e.disposeStream;
			E.current = n, r("WAPromiseRaceAbort")(t, k).then(function(e) {
				if (e) {
					var t = d.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: C.mediaEditorContainer,
						children: d.jsx(r("WAWebCaptureDrawer.react"), {
							onBack: function() {
								F(), o("WAWebModalManager").ModalManager.closeMedia();
							},
							chat: void 0,
							theme: "capture-cover",
							stream: e,
							disposeStream: E.current,
							onCaptured: function(t) {
								var e = o("WAWebFileUtils").createFile([t], "", { type: "image/jpeg" });
								F(), e && (o("WAWebModalManager").ModalManager.closeMedia(), T([e]));
							}
						})
					});
					o("WAWebModalManager").ModalManager.openMedia(t, {
						blockClose: !0,
						transition: "status-modal"
					});
				} else F();
			}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").NotAllowedError, function(e) {
				var t, n;
				F(), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentUpload(l, String((t = (n = r("getErrorSafe")(e)) == null ? void 0 : n.message) != null ? t : e)), o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebGuidePopup.react").GuidePopup, {
					messaging: o("WAWebGuidePopup.react").Messaging.CAMERA_FAIL,
					type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
					featureSurface: o("WAWebGuidePopup.react").FeatureSurface.PHOTO_CAPTURE
				}));
			})).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").GetUserMediaError, function(e) {
				var t, n;
				F(), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentUpload(l, String((t = (n = r("getErrorSafe")(e)) == null ? void 0 : n.message) != null ? t : e)), o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebGuidePopup.react").GuidePopup, {
					messaging: o("WAWebGuidePopup.react").Messaging.CAMERA_MISSING,
					type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE,
					featureSurface: o("WAWebGuidePopup.react").FeatureSurface.PHOTO_CAPTURE
				}));
			})).catch(function(e) {
				var t, n;
				F(), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentUpload(l, String((t = (n = r("getErrorSafe")(e)) == null ? void 0 : n.message) != null ? t : e)), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastMediaEditor] Unexpected camera error: ", ""])), String(e));
			});
		}, [
			k,
			T,
			F,
			l
		]), B = g(!1), W = B[0], q = B[1], U = g(!1), V = U[0], H = U[1], G = function() {
			q(!0);
		}, z = function() {
			q(!1);
		}, j = function() {
			H(!0);
		}, K = function(t) {
			var e = t.relatedTarget;
			(!(e instanceof Node) || !t.currentTarget.contains(e)) && H(!1);
		}, Q = W || V, X = (a = i == null ? void 0 : i.previewUrl) != null ? a : null, Y = (function(e) {
			return e === o("WAWebMsgType").MSG_TYPE.PRODUCT ? i && d.jsx(r("WAWebBizBroadcastsMessageCatalogSection.react"), {
				entryPoint: l,
				onPreviewCatalog: function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentPreviewButtonClicked(l, o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENT_CATALOG_PREVIEW_BUTTON), N();
				},
				onRemoveMedia: P,
				selectedCatalogData: i
			}) : e === o("WAWebMsgType").MSG_TYPE.DOCUMENT ? i && d.jsx(r("WAWebBizBroadcastsMessageDocumentSection.react"), {
				onRemoveMedia: P,
				selectedDocumentData: i,
				entryPoint: l
			}) : e === o("WAWebMsgType").MSG_TYPE.VIDEO ? d.jsxs("div", {
				role: "group",
				className: "x1n2onr6",
				onMouseEnter: G,
				onMouseLeave: z,
				onFocus: j,
				onBlur: K,
				children: [d.jsx("div", {
					className: "x6s0dn4 x1280gxy xx42vgk xbogo7e x120ee7l x1vb5itz x6nvzda x4i4b9w xhl9efl xj65ea0 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x78zum5 xjp8j0k xl56j7k x6ikm8r x10wlt62 x13oubkp",
					children: d.jsx("video", {
						className: "x5yr21d xl1xv1r xh8yej3",
						src: X,
						muted: !0,
						"data-testid": "biz-broadcast-creation-attachment-video-preview",
						children: d.jsx("track", { kind: "captions" })
					})
				}), Q && d.jsxs("div", {
					className: "x78zum5 x1b73lln x46w9ns x1rh878x x10l6tqk x16xtl6x",
					children: [d.jsx(r("WDSButton.react"), {
						variant: "tonal",
						type: "media",
						size: "small",
						Icon: r("WDSIconIcEdit.react"),
						onPress: function() {
							o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentPreviewButtonClicked(l, o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENT_VIDEO_PREVIEW_BUTTON, i == null ? void 0 : i.fileExt, i == null ? void 0 : i.fileSize), $();
						},
						"aria-label": o("WAWebBizBroadcastsCreationStrings").getEditMediaAriaLabel(),
						testid: "biz-broadcast-creation-attachment-video-edit-button"
					}), d.jsx(r("WDSButton.react"), {
						variant: "tonal",
						type: "media",
						size: "small",
						Icon: r("WDSIconIcClose.react"),
						onPress: function() {
							o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentRemoveButtonClicked(l, o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENT_VIDEO_REMOVE_BUTTON, i == null ? void 0 : i.fileExt, i == null ? void 0 : i.fileSize), P();
						},
						"aria-label": o("WAWebBizBroadcastsCreationStrings").getRemoveMediaAriaLabel(),
						testid: "biz-broadcast-creation-attachment-video-remove-button"
					})]
				})]
			}) : e === o("WAWebMsgType").MSG_TYPE.IMAGE ? d.jsxs("div", {
				role: "group",
				className: "x1n2onr6",
				onMouseEnter: G,
				onMouseLeave: z,
				onFocus: j,
				onBlur: K,
				children: [d.jsx("div", {
					className: "x6s0dn4 x1280gxy xx42vgk xbogo7e x120ee7l x1vb5itz x6nvzda x4i4b9w xhl9efl xj65ea0 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x78zum5 xjp8j0k xl56j7k x6ikm8r x10wlt62 x13oubkp",
					children: d.jsx("img", {
						className: "x5yr21d xl1xv1r xh8yej3",
						src: X,
						alt: s._(
							/*BTDS*/
							""
						),
						"data-testid": "biz-broadcast-creation-attachment-image-preview"
					})
				}), Q && d.jsxs("div", {
					className: "x78zum5 x1b73lln x46w9ns x1rh878x x10l6tqk x16xtl6x",
					children: [d.jsx(r("WDSButton.react"), {
						variant: "tonal",
						type: "media",
						size: "small",
						Icon: r("WDSIconIcEdit.react"),
						onPress: function() {
							o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentPreviewButtonClicked(l, o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENT_IMAGE_PREVIEW_BUTTON, i == null ? void 0 : i.fileExt, i == null ? void 0 : i.fileSize), $();
						},
						"aria-label": o("WAWebBizBroadcastsCreationStrings").getEditMediaAriaLabel(),
						testid: "biz-broadcast-creation-attachment-image-edit-button"
					}), d.jsx(r("WDSButton.react"), {
						variant: "tonal",
						type: "media",
						size: "small",
						Icon: r("WDSIconIcClose.react"),
						onPress: function() {
							o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentRemoveButtonClicked(l, o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENT_IMAGE_REMOVE_BUTTON, i == null ? void 0 : i.fileExt, i == null ? void 0 : i.fileSize), P();
						},
						"aria-label": o("WAWebBizBroadcastsCreationStrings").getRemoveMediaAriaLabel(),
						testid: "biz-broadcast-creation-attachment-image-remove-button"
					})]
				})]
			}) : d.jsx(r("WAWebBizBroadcastsNewBroadcastAddButton.react"), {
				buttonLabel: o("WAWebBizBroadcastsCreationStrings").getAddAttachmentButtonLabel(),
				contextMenu: d.jsx(v, {
					onCameraClick: O,
					onCatalogClick: M,
					onDocumentsClick: w,
					onPhotosVideosClick: A,
					supportedAttachmentTypes: S
				}),
				onButtonClick: function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.addAttachmentButtonClicked(l);
				},
				testid: "biz-broadcast-creation-add-attachment-button"
			});
		})(i == null ? void 0 : i.mediaType);
		return d.jsxs(d.Fragment, { children: [
			d.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: C.attachmentSection,
				children: [
					d.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						xstyle: C.attachmentTitleRow,
						children: [d.jsx(r("WDSText.react"), {
							type: "Body1Emphasized",
							colorName: "contentDefault",
							testid: "biz-broadcast-creation-attachment-section-title",
							children: o("WAWebBizBroadcastsCreationStrings").getAttachmentSectionTitle()
						}), d.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: o("WAWebBizBroadcastsCreationStrings").getOptionalLabel()
						})]
					}),
					d.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						testid: "biz-broadcast-creation-attachment-section-subtitle",
						children: o("WAWebBizBroadcastsCreationStrings").getAttachmentSectionSubtitle()
					}),
					d.jsx("div", {
						className: "x6s0dn4 x78zum5 x1q0g3np x1qvou4u x1s70e7g x1de0gy xh8yej3",
						children: Y
					})
				]
			}),
			d.jsx(r("WAWebFilePicker.react"), {
				ref: L,
				mimes: [o("WAWebMimeTypes").IMAGE_MIMES, o("WAWebMimeTypes").VIDEO_MIMES].join(","),
				onChange: x,
				multiple: !1
			}),
			d.jsx(r("WAWebFilePicker.react"), {
				ref: R,
				mimes: o("WAWebMimeTypes").DOC_MIMES,
				onChange: x,
				multiple: !1
			})
		] });
	}
	S.displayName = S.name + " [from " + i.id + "]", l.DEFAULT_SUPPORTED_ATTACHMENT_TYPES = y, l.renderEmptyCaptionInput = b, l.WAWebBizBroadcastMessageAttachmentSection = S;
}), 226);

__d("useWAWebPhotoPickerCore", [
	"fbt",
	"ReactKonva",
	"WALogger",
	"WAWebAvatarOverlay.react",
	"WAWebAvatarSpinner.react",
	"WAWebCommunityGeneralChatImage.react",
	"WAWebCommunitySquircleIcon.react",
	"WAWebConfirmPopup.react",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebDefaultGroupRefreshedIcon.react",
	"WAWebDefaultNewsletterIcon.react",
	"WAWebDefaultUserIcon.react",
	"WAWebEditGroupProfileDrawer.react",
	"WAWebEditImageModal.react",
	"WAWebFocusTracer",
	"WAWebImg.react",
	"WAWebMediaEditorUtilsCreateCanvasAndImage",
	"WAWebMediaLoad",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterMetadataCollection",
	"WAWebNonEmptyString",
	"WAWebObjectFit.react",
	"WAWebPhotoPickType",
	"WAWebPhotoPickerConstants",
	"WAWebPhotoPickerStyle",
	"WAWebPhotoViewerModal.react",
	"WAWebProfileCropConstants",
	"WAWebProfileCropTool.react",
	"WAWebRoundShape.react",
	"WAWebShape.react",
	"WAWebSpinner.react",
	"WAWebStatusCollection",
	"WAWebStatusImageRing.react",
	"WAWebUtilsGetColor",
	"WAWebUtilsSharpenFilter",
	"WAWebWamEnumGroupProfileActionType",
	"WAWebWamEnumProfilePictureType",
	"WDSButton.react",
	"WDSIconIcCampaignMegaphoneFilled.react",
	"WDSIconIcImageFilled.react",
	"WDSIconIcRefresh.react",
	"WDSIconIcVisibilityOff.react",
	"asyncToGeneratorRuntime",
	"cr:5981",
	"react",
	"stylex",
	"useWAWebContactValues",
	"useWAWebDefaultProfileColors",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useMemo, f = m.useRef, g = m.useState, h = n("cr:5981") == null ? void 0 : n("cr:5981").InternalStatusWarningImageOverlay, y = { iconBg: {
		backgroundColor: "x1od0jb8",
		$$css: !0
	} };
	function C(t) {
		var a, i = t.attachToChat, l = t.editImageButtonRef, c = t.forceClickable, m = t.id, C = t.onImageSet, v = t.pending, S = t.readOnly, R = t.sendGroupProfilePictureLoggingEvent, L = t.showAddIconOverlay, E = t.showHiddenSubgroupIcon, k = t.size, I = t.startImage, T = t.theme, D = t.type, x = g(I != null ? I : ""), $ = x[0], P = x[1], N = g(!1), M = N[0], w = N[1], A = g(null), F = A[0], O = A[1], B = g(), W = B[0], q = B[1], U = r("useWAWebUIM")(), V = f(null), H = f(null), G = f(), z = f([].concat(o("WAWebPhotoPickerConstants").getPhotoPickerQualifiedEmojis())), j = o("useWAWebContactValues").useOptionalContactValues(m, [o("WAWebContactGetters").getCalculatedStatusMute]), K = (j == null ? void 0 : j[0]) === !0;
		(I != null ? I : "") !== $ && (P(I != null ? I : ""), O(I === "" ? null : F));
		var Q = D === o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER && m != null && o("WAWebNewsletterGatingUtils").isNewsletterStatusProfileRingEnabled() && (r("WAWebNewsletterMetadataCollection") == null || (a = r("WAWebNewsletterMetadataCollection").get(m)) == null ? void 0 : a.suspended) !== !0 && !K, X = Q && m != null ? o("WAWebStatusCollection").StatusCollection.get(m) : null, Y = X != null, J = c || !v && (F != null || $ === "" && !S) || Y, Z = Y ? (k != null ? k : o("WAWebPhotoPickerStyle").PHOTO_PICKER_SIZE) + o("WAWebPhotoPickerStyle").STATUS_RING_PADDING : 0, ee = function(t) {
			D === o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP && (R == null || R({
				groupProfileAction: t,
				hasProfilePicture: !!I
			}));
		}, te = function(t) {
			D === o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP && R != null && R({
				groupProfileAction: o("WAWebWamEnumGroupProfileActionType").GROUP_PROFILE_ACTION_TYPE.PROFILE_PIC_UPDATED,
				hasProfilePicture: !!I,
				profilePictureType: t
			});
		}, ne = function(t) {
			if (D === o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP && R != null) {
				var e = b(t);
				R({
					groupProfileAction: e,
					hasProfilePicture: !!I
				});
			}
		}, re = function(t) {
			ee(o("WAWebWamEnumGroupProfileActionType").GROUP_PROFILE_ACTION_TYPE.TAP_ACTION_ITEM_UPLOAD_PHOTO);
			var e = H.current;
			e && e.click();
		}, oe = function(t) {
			var e = t.currentTarget.clientWidth, n = t.currentTarget.clientHeight;
			O({
				width: e,
				height: n
			});
		}, ae = function(t) {
			w(!1);
		}, ie = function(t) {
			w(!0);
		}, le = function(t) {
			w(!0);
		}, se = function(n, r, a) {
			var t = o("WAWebNonEmptyString").asMaybeNonEmptyString(n), i = o("WAWebNonEmptyString").asMaybeNonEmptyString(r);
			if (t == null || i == null) {
				P(""), O(null);
				return;
			}
			o("WAWebMediaLoad").loadImage(t).then(function(e) {
				P(t), C(t, i, a);
			}).catch(function(t) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["PhotoPicker:onImageReceived failed to load image: ", ""])), String(t));
				var n;
				switch (D) {
					case o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER:
						n = s._(
							/*BTDS*/
							""
						);
						break;
					case o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP:
					case o("WAWebPhotoPickerConstants").PhotoPickerType.GENERAL_GROUP:
						n = s._(
							/*BTDS*/
							""
						);
						break;
					case o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY:
						n = s._(
							/*BTDS*/
							""
						);
						break;
					case o("WAWebPhotoPickerConstants").PhotoPickerType.PROFILE:
						n = s._(
							/*BTDS*/
							""
						);
						break;
					case o("WAWebPhotoPickerConstants").PhotoPickerType.DEFAULT_ANNOUNCEMENT_GROUP: break;
					case o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO: break;
				}
				o("WAWebModalManager").ModalManager.openAlert(d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					onOK: o("WAWebModalManager").closeAlertModal,
					tsNavigationData: {
						surface: "unknown",
						viewName: "photo-picker-error"
					},
					children: n
				}));
			});
		}, ue = function(t) {
			var e = URL.createObjectURL(t);
			o("WAWebMediaLoad").loadImage(e).then(function(e) {
				if (e && (e.width < o("WAWebProfileCropConstants").PROF_PIC_MIN_SIDE || e.height < o("WAWebProfileCropConstants").PROF_PIC_MIN_SIDE)) o("WAWebModalManager").ModalManager.openAlert(d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					onOK: o("WAWebModalManager").closeAlertModal,
					tsNavigationData: {
						surface: "unknown",
						viewName: "photo-picker-error-too-small"
					},
					children: s._(
						/*BTDS*/
						"",
						[s._plural(o("WAWebProfileCropConstants").PROF_PIC_MIN_SIDE, "number_of_pixels")]
					)
				}));
				else {
					var n = D === o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO ? o("WAWebModal.react").ModalTheme.BoxLarge : o("WAWebModal.react").ModalTheme.Box, a;
					D === o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO ? a = o("WAWebProfileCropTool.react").CropShapeType.RECT : D === o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY ? a = o("WAWebProfileCropTool.react").CropShapeType.SQUIRCLE : a = o("WAWebProfileCropTool.react").CropShapeType.CIRCLE, o("WAWebModalManager").ModalManager.openAlert(d.jsx(r("WAWebEditImageModal.react"), {
						img: t,
						onFinished: function(t, n) {
							te(o("WAWebWamEnumProfilePictureType").PROFILE_PICTURE_TYPE.PHOTO_UPLOAD), se(t, n, o("WAWebPhotoPickType").PhotoPickType.Gallery);
						},
						onRetake: re,
						cropShape: a,
						theme: n
					}));
				}
			}).catch(function() {
				var e;
				switch (D) {
					case o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER:
						e = s._(
							/*BTDS*/
							""
						);
						break;
					case o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP:
					case o("WAWebPhotoPickerConstants").PhotoPickerType.GENERAL_GROUP:
						e = s._(
							/*BTDS*/
							""
						);
						break;
					case o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY:
						e = s._(
							/*BTDS*/
							""
						);
						break;
					case o("WAWebPhotoPickerConstants").PhotoPickerType.PROFILE:
						e = s._(
							/*BTDS*/
							""
						);
						break;
					case o("WAWebPhotoPickerConstants").PhotoPickerType.DEFAULT_ANNOUNCEMENT_GROUP: break;
					case o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO:
						e = s._(
							/*BTDS*/
							""
						);
						break;
				}
				o("WAWebModalManager").ModalManager.openAlert(d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					onOK: o("WAWebModalManager").closeAlertModal,
					tsNavigationData: {
						surface: "unknown",
						viewName: "photo-picker-error-upload"
					},
					children: e
				}));
			}).finally(function() {
				URL.revokeObjectURL(e);
			});
		}, ce = function() {
			return l || V;
		}, de = function() {
			var e = ce();
			e.current && r("WAWebFocusTracer").focus(e.current);
		}, me = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = Math.floor(Math.random() * z.current.length);
				q({
					color: r("WAWebUtilsGetColor")(o("WAWebEditGroupProfileDrawer.react").COLOR_OPTIONS[Math.floor(Math.random() * o("WAWebEditGroupProfileDrawer.react").COLOR_OPTIONS.length)], 200),
					emoji: yield o("WAWebMediaEditorUtilsCreateCanvasAndImage").createImageFromEmoji(z.current[e])
				}), z.current.splice(e, 1), z.current.length === 0 && (z.current = [].concat(o("WAWebPhotoPickerConstants").getPhotoPickerQualifiedEmojis()));
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), pe = function(t) {
			ee(o("WAWebWamEnumGroupProfileActionType").GROUP_PROFILE_ACTION_TYPE.TAP_ACTION_ITEM_VIEW_PHOTO);
			var e = t == null ? void 0 : t.current;
			if (!(!e || !m)) {
				var n = function(n) {
					n(e);
				}, a = o("WAWebContactCollection").ContactCollection.assertGet(m), l = { transition: "profile-viewer" };
				i && (l.uim = U), o("WAWebModalManager").ModalManager.openMedia(d.jsx(r("WAWebPhotoViewerModal.react"), {
					contact: a,
					profilePicThumb: a.getProfilePicThumb(),
					animateBorderRadius: D !== o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY,
					animateSquircle: D === o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY,
					getZoomNode: n
				}), l);
			}
		}, _e = function() {
			return k != null ? {
				width: k,
				height: k
			} : void 0;
		}, fe;
		$ !== "" && (fe = d.jsx(r("WAWebObjectFit.react"), {
			type: "cover",
			size: F,
			children: d.jsx(r("WAWebImg.react"), {
				src: $,
				crossOrigin: !1,
				style: {
					height: "100%",
					width: "100%"
				},
				onLoad: oe
			})
		}));
		var ge;
		(v || $ !== "" && !F) && (D === o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO ? ge = d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(o("WAWebPhotoPickerStyle").styles.loadingBg), { children: d.jsx("div", babelHelpers.extends({}, u.props(o("WAWebPhotoPickerStyle").styles.cornerSpinner), { children: d.jsx(o("WAWebSpinner.react").Spinner, {
			size: 24,
			stroke: 3,
			color: "solidwhite"
		}) })) })) : ge = d.jsx(r("WAWebAvatarSpinner.react"), {}));
		var he = s._(
			/*BTDS*/
			""
		), ye = function(t) {
			if (!t) return {
				overlay: null,
				photoPickerLabel: he
			};
			var e = "";
			switch (D) {
				case o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER:
					e = $ !== "" ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					);
					break;
				case o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP:
				case o("WAWebPhotoPickerConstants").PhotoPickerType.GENERAL_GROUP:
					e = $ !== "" ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					);
					break;
				case o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY:
					e = $ !== "" ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					);
					break;
				case o("WAWebPhotoPickerConstants").PhotoPickerType.PROFILE:
					e = $ !== "" ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					);
					break;
				case o("WAWebPhotoPickerConstants").PhotoPickerType.DEFAULT_ANNOUNCEMENT_GROUP: break;
				case o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO: break;
			}
			var n = null;
			return D !== o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO && L && (n = d.jsx(o("WAWebAvatarOverlay.react").AvatarOverlay, {
				icon: d.jsx(r("WDSIconIcImageFilled.react"), {
					height: 24,
					width: 24
				}),
				text: e,
				theme: D === o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY ? o("WAWebAvatarOverlay.react").AvatarOverlayTheme.COMMUNITY : o("WAWebAvatarOverlay.react").AvatarOverlayTheme.DEFAULT
			})), {
				overlay: n,
				photoPickerLabel: e
			};
		};
		p(function() {
			if (T === o("WAWebPhotoPickerConstants").PhotoPickerThemeType.EMOJI_SUGGESTIONS && W) {
				var e, t, n, r, a = {
					mimeType: "image/jpeg",
					width: o("WAWebEditGroupProfileDrawer.react").PHOTO_SIZE,
					height: o("WAWebEditGroupProfileDrawer.react").PHOTO_SIZE
				}, i = (e = (t = G.current) == null ? void 0 : t.toDataURL(babelHelpers.extends({}, a, {
					pixelRatio: o("WAWebProfileCropConstants").PROF_PIC_THUMB_SIDE / o("WAWebEditGroupProfileDrawer.react").PHOTO_SIZE,
					quality: 0
				}))) != null ? e : "", l = (n = (r = G.current) == null ? void 0 : r.toDataURL(babelHelpers.extends({}, a, {
					pixelRatio: o("WAWebProfileCropConstants").PROF_PIC_MIN_SIDE * 2 / o("WAWebEditGroupProfileDrawer.react").PHOTO_SIZE,
					quality: 1
				}))) != null ? n : "";
				se(i, l, o("WAWebPhotoPickType").PhotoPickType.Emoji);
			}
		}, [W]);
		var Ce, be;
		if (T === o("WAWebPhotoPickerConstants").PhotoPickerThemeType.EMOJI_SUGGESTIONS) {
			var ve = W || {}, Se = ve.color, Re = ve.emoji;
			if (Ce = d.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcRefresh.react"),
				variant: "filled",
				type: "default",
				size: "medium",
				onPress: function() {
					me();
				},
				"aria-label": s._(
					/*BTDS*/
					""
				),
				xstyle: [
					o("WAWebPhotoPickerStyle").styles.bottomEndFloater,
					o("WAWebPhotoPickerStyle").styles.newSuggestion,
					o("WAWebPhotoPickerStyle").styles.bottomEndFloaterRefreshed
				],
				testid: "set-random-picture-btn"
			}), Se != null && Re) {
				var Le, Ee;
				be = d.jsx((Le = o("ReactKonva")).Stage, {
					ref: G,
					width: (Ee = o("WAWebEditGroupProfileDrawer.react")).PHOTO_SIZE,
					height: Ee.PHOTO_SIZE,
					className: (u || (u = r("stylex")))(o("WAWebPhotoPickerStyle").styles.hidden),
					children: d.jsxs(o("ReactKonva").Layer, { children: [d.jsx(o("ReactKonva").Rect, {
						width: o("WAWebEditGroupProfileDrawer.react").PHOTO_SIZE,
						height: o("WAWebEditGroupProfileDrawer.react").PHOTO_SIZE,
						fill: Se
					}), d.jsx(o("ReactKonva").Image, {
						width: o("WAWebEditGroupProfileDrawer.react").IMAGE_SIZE,
						height: o("WAWebEditGroupProfileDrawer.react").IMAGE_SIZE,
						offset: {
							x: o("WAWebEditGroupProfileDrawer.react").IMAGE_SIZE / 2,
							y: o("WAWebEditGroupProfileDrawer.react").IMAGE_SIZE / 2
						},
						x: o("WAWebEditGroupProfileDrawer.react").PHOTO_SIZE / 2,
						y: o("WAWebEditGroupProfileDrawer.react").PHOTO_SIZE / 2,
						image: Re,
						filters: Re.naturalWidth <= o("WAWebEditGroupProfileDrawer.react").EMOJI_IMAGE_SHARPEN_SIZE_THRESHOLD && Re.naturalHeight <= o("WAWebEditGroupProfileDrawer.react").EMOJI_IMAGE_SHARPEN_SIZE_THRESHOLD ? [r("WAWebUtilsSharpenFilter")] : []
					})] })
				});
			}
		}
		var ke = E ? d.jsx(r("WAWebRoundShape.react"), {
			xstyle: [
				o("WAWebPhotoPickerStyle").styles.bottomEndFloater,
				o("WAWebPhotoPickerStyle").styles.hiddenSubgroupContainer,
				[o("WAWebPhotoPickerStyle").styles.roundRefreshedSize, o("WAWebPhotoPickerStyle").styles.bottomEndFloaterRefreshed]
			],
			children: d.jsx(r("WDSIconIcVisibilityOff.react"), {
				iconXstyle: o("WAWebPhotoPickerStyle").styles.hiddenSubgroupIcon,
				width: 30,
				height: 30
			})
		}) : null, Ie = o("useWAWebDefaultProfileColors").useDefaultProfileColors(m), Te = Ie.background, De = Ie.foreground, xe = _(function() {
			var e = [o("WAWebPhotoPickerStyle").styles.svgSize];
			return D === o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER ? e.push(o("WAWebPhotoPickerStyle").styles.newsletterAvatar) : D === o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY && e.push(o("WAWebPhotoPickerStyle").styles.communitySquircle), D === o("WAWebPhotoPickerConstants").PhotoPickerType.DEFAULT_ANNOUNCEMENT_GROUP && o("WAWebPhotoPickerStyle").styles.defaultAnnouncementGroupIcon && e.push(o("WAWebPhotoPickerStyle").styles.defaultAnnouncementGroupIconSvg), Te != null && e.push(Te), {
				innerStyles: {
					primary: De != null ? De : o("WAWebPhotoPickerStyle").styles.primaryFill,
					background: o("WAWebPhotoPickerStyle").styles.backgroundFill
				},
				"aria-hidden": !0,
				iconXstyle: e
			};
		}, [
			D,
			De,
			Te
		]), $e;
		if (v || $ === "" || !F) {
			var Pe;
			switch (D) {
				case o("WAWebPhotoPickerConstants").PhotoPickerType.PROFILE:
					Pe = d.jsx(o("WAWebDefaultUserIcon.react").DefaultUserIcon, babelHelpers.extends({}, xe));
					break;
				case o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY:
					Pe = d.jsx(o("WAWebCommunitySquircleIcon.react").CommunitySquircleIcon, babelHelpers.extends({}, xe));
					break;
				case o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER:
					Pe = d.jsx(o("WAWebDefaultNewsletterIcon.react").DefaultNewsletterIcon, babelHelpers.extends({}, xe));
					break;
				case o("WAWebPhotoPickerConstants").PhotoPickerType.DEFAULT_ANNOUNCEMENT_GROUP:
					Pe = d.jsx(r("WDSIconIcCampaignMegaphoneFilled.react"), {
						"aria-hidden": !0,
						directional: !0,
						iconXstyle: [xe.iconXstyle, De != null ? De : o("WAWebPhotoPickerStyle").styles.primaryFill]
					});
					break;
				case o("WAWebPhotoPickerConstants").PhotoPickerType.GENERAL_GROUP:
					$e = d.jsx(o("WAWebCommunityGeneralChatImage.react").CommunityGeneralChatImage, {});
					break;
				case o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO:
					Pe = null;
					break;
				case o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP:
					Pe = d.jsx(r("WAWebShape.react"), {
						shape: "circle",
						xstyle: y.iconBg,
						children: d.jsx(o("WAWebDefaultGroupRefreshedIcon.react").DefaultGroupRefreshedIcon, babelHelpers.extends({}, xe))
					});
					break;
			}
			Pe != null && ($e = d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(D === o("WAWebPhotoPickerConstants").PhotoPickerType.DEFAULT_ANNOUNCEMENT_GROUP && o("WAWebPhotoPickerStyle").styles.defaultAnnouncementGroupIcon), { children: Pe })));
		}
		var Ne = h && m ? d.jsx(h, { id: m }) : null, Me = Y && m != null ? d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(o("WAWebPhotoPickerStyle").styles.statusRingOverlay), { children: d.jsx(o("WAWebStatusImageRing.react").StatusImageRing, {
			id: m,
			size: Z,
			stroke: 4,
			theme: o("WAWebStatusImageRing.react").RingTheme.UpdatesTab,
			respectAppTheme: !0,
			breakRing: !1,
			hideWhenNoUnreadStatuses: !1
		}) })) : null;
		return {
			clickable: J,
			defaultIcon: $e,
			defaultPhotoPickerLabel: he,
			emojiSuggestion: be,
			focusImageInputButton: de,
			getContainerStyle: _e,
			getEditImageButtonRef: ce,
			getOverlayAndLabel: ye,
			handleImagePick: ue,
			handleImageReceived: se,
			handleMouseEnter: ie,
			handleMouseLeave: ae,
			handleMouseOver: le,
			handleUpload: re,
			handleView: pe,
			hasNewsletterStatus: Y,
			hiddenSubgroupIcon: ke,
			hover: M,
			img: $,
			imageElement: fe,
			imageInputRef: H,
			imageSize: F,
			internalStatusWarning: Ne,
			newSuggestionButton: Ce,
			sendEmojiStickerPanelOpenLoggingEvent: ne,
			sendProfilePicUpdatedLoggingEvent: te,
			sendTapActionItemLoggingEvent: ee,
			spinner: ge,
			statusRingOverlay: Me
		};
	}
	var b = function(t) {
		switch (t) {
			case o("WAWebEditGroupProfileDrawer.react").ImageType.EMOJI: return o("WAWebWamEnumGroupProfileActionType").GROUP_PROFILE_ACTION_TYPE.EMOJI_PANEL_OPEN;
			case o("WAWebEditGroupProfileDrawer.react").ImageType.STICKER: return o("WAWebWamEnumGroupProfileActionType").GROUP_PROFILE_ACTION_TYPE.STICKER_PANEL_OPEN;
		}
	};
	l.default = C;
}), 226);

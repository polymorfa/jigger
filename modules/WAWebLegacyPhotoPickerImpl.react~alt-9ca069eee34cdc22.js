__d("WAWebLegacyPhotoPickerImpl.react", [
	"fbt",
	"WAGetUserMedia",
	"WAJids",
	"WAWebConfirmPopup.react",
	"WAWebDataTransfer",
	"WAWebDropdownItem.react",
	"WAWebEditGroupProfileDrawer.react",
	"WAWebFileUtils",
	"WAWebKeyboardHotKeys.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebOpenStatusQuotedFlow",
	"WAWebPhotoPickType",
	"WAWebPhotoPickerConstants",
	"WAWebPhotoPickerStyle",
	"WAWebProfileCropTool.react",
	"WAWebTakePhotoMenuItem.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUnstyledButton.react",
	"WAWebVelocityTransitionGroup",
	"WAWebWamEnumGroupProfileActionType",
	"WAWebWamEnumProfilePictureType",
	"WAWebWamEnumStatusRowSection",
	"WDSFocusStateStyles",
	"WDSIconIcDelete.react",
	"WDSIconIcFolder.react",
	"WDSIconIcPhotoCamera.react",
	"WDSIconIcVisibility.react",
	"WDSIconWdsIcStatus.react",
	"WDSIconWdsIcStickerSmiley.react",
	"WDSMargins.stylex",
	"WDSTooltip.react",
	"react",
	"stylex",
	"useWAWebIsKeyboardUser",
	"useWAWebPhotoPickerCore"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = { marginInline1: {
		marginInlineStart: "xm2jcoa",
		marginInlineEnd: "x1mpyi22",
		marginLeft: null,
		marginRight: null,
		$$css: !0
	} };
	function p(t) {
		var n = t.HoverIcon, a = t.attachToChat, i = t.dataTab, l = t.dimmed, u = l === void 0 ? !1 : l, m = t.editImageButtonRef, p = t.forceClickable, f = p === void 0 ? !1 : p, g = t.id, h = t.onImageSet, y = t.pending, C = y === void 0 ? !1 : y, b = t.readOnly, v = b === void 0 ? !1 : b, S = t.sendGroupProfilePictureLoggingEvent, R = t.showAddIconOverlay, L = R === void 0 ? !0 : R, E = t.showHiddenSubgroupIcon, k = E === void 0 ? !1 : E, I = t.showOutline, T = I === void 0 ? !1 : I, D = t.size, x = t.startImage, $ = x === void 0 ? "" : x, P = t.statusModelId, N = t.statusRing, M = t.tabIndex, w = t.testid, A = t.theme, F = t.type, O = t.wdsEditablePersonPhoto, B = r("useWAWebIsKeyboardUser")(), W = B.isKeyboardUser, q = r("useWAWebPhotoPickerCore")({
			attachToChat: a,
			editImageButtonRef: m,
			forceClickable: f,
			id: g,
			onImageSet: h,
			pending: C,
			readOnly: v,
			sendGroupProfilePictureLoggingEvent: S,
			showAddIconOverlay: L,
			showHiddenSubgroupIcon: k,
			size: D,
			startImage: $,
			theme: A,
			type: F
		}), U = q.clickable, V = q.defaultIcon, H = q.emojiSuggestion, G = q.focusImageInputButton, z = q.getContainerStyle, j = q.getEditImageButtonRef, K = q.getOverlayAndLabel, Q = q.handleImagePick, X = q.handleImageReceived, Y = q.handleMouseEnter, J = q.handleMouseLeave, Z = q.handleMouseOver, ee = q.handleUpload, te = q.handleView, ne = q.hasNewsletterStatus, re = q.hiddenSubgroupIcon, oe = q.hover, ae = q.imageElement, ie = q.imageInputRef, le = q.imageSize, se = q.img, ue = q.internalStatusWarning, ce = q.newSuggestionButton, de = q.sendEmojiStickerPanelOpenLoggingEvent, me = q.sendProfilePicUpdatedLoggingEvent, pe = q.sendTapActionItemLoggingEvent, _e = q.spinner, fe = q.statusRingOverlay, ge = d(), he = ge[0], ye = ge[1], Ce = function() {
			ye(null);
		}, be = function() {
			te(j());
		}, ve = function() {
			h(void 0, void 0, o("WAWebPhotoPickType").PhotoPickType.None), o("WAWebModalManager").closeAlertModal(), me(o("WAWebWamEnumProfilePictureType").PROFILE_PICTURE_TYPE.REMOVE_PHOTO);
		}, Se = function(t) {
			pe(o("WAWebWamEnumGroupProfileActionType").GROUP_PROFILE_ACTION_TYPE.TAP_ACTION_ITEM_REMOVE_PHOTO);
			var e;
			switch (F) {
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
			o("WAWebModalManager").ModalManager.openAlert(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: ve,
				okText: s._(
					/*BTDS*/
					""
				),
				onCancel: o("WAWebModalManager").closeAlertModal,
				cancelText: s._(
					/*BTDS*/
					""
				),
				tsNavigationData: {
					surface: "unknown",
					viewName: "photo-picker-remove"
				},
				children: e
			}));
		}, Re = function(t) {
			pe(o("WAWebWamEnumGroupProfileActionType").GROUP_PROFILE_ACTION_TYPE.TAP_ACTION_ITEM_EMOJI_STICKER);
			var e = s._(
				/*BTDS*/
				""
			);
			o("WAWebModalManager").ModalManager.openAlert(c.jsx(o("WAWebModal.react").Modal, {
				type: o("WAWebModal.react").ModalTheme.Box,
				ariaLabel: e,
				onOverlayClick: o("WAWebModalManager").closeAlertModal,
				testid: "profile-picture-edit-modal",
				children: c.jsx(o("WAWebEditGroupProfileDrawer.react").EditGroupProfileDrawer, {
					title: e,
					onCancel: o("WAWebModalManager").closeAlertModal,
					onFinished: function(t, n, r) {
						me(o("WAWebWamEnumProfilePictureType").PROFILE_PICTURE_TYPE[String(r)]), X(t, n, r === o("WAWebEditGroupProfileDrawer.react").ImageType.EMOJI ? o("WAWebPhotoPickType").PhotoPickType.Emoji : o("WAWebPhotoPickType").PhotoPickType.Sticker), o("WAWebModalManager").closeAlertModal();
					},
					sendEmojiStickerPanelOpenLoggingEvent: de
				})
			}));
		}, Le = function(t) {
			ne && g != null && t.push(c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				icon: c.jsx(r("WDSIconWdsIcStatus.react"), {}),
				testid: "mi-view-status",
				action: function() {
					o("WAWebOpenStatusQuotedFlow").fetchAndOpenNewsletterStatus({
						newsletterJid: o("WAJids").toNewsletterJid(g.toString()),
						statusModelId: g,
						rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHANNEL_INFO_SCREEN,
						rowIndex: 0
					});
				},
				children: s._(
					/*BTDS*/
					""
				)
			}, "view-status"));
		}, Ee = function() {
			var e = [];
			Le(e);
			var t = function() {
				se !== "" ? be() : (Ce(), o("WAWebModalManager").ModalManager.openAlert(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					onOK: o("WAWebModalManager").closeAlertModal,
					children: s._(
						/*BTDS*/
						""
					)
				})));
			};
			return e.push(c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				icon: c.jsx(r("WDSIconIcVisibility.react"), {}),
				testid: "mi-view-photo",
				action: t,
				children: s._(
					/*BTDS*/
					""
				)
			}, "view-photo")), e;
		}, ke = function() {
			var e = [];
			if (Le(e), g != null && se !== "" && e.push(c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				icon: c.jsx(r("WDSIconIcVisibility.react"), {}),
				testid: "mi-view-photo",
				action: be,
				children: s._(
					/*BTDS*/
					""
				)
			}, "view")), o("WAGetUserMedia").getUserMedia) {
				var t = F === o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO ? o("WAWebProfileCropTool.react").CropShapeType.RECT : o("WAWebProfileCropTool.react").CropShapeType.CIRCLE, n = F === o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO ? o("WAWebModal.react").ModalTheme.BoxLarge : o("WAWebModal.react").ModalTheme.Box;
				e.push(c.jsx(r("WAWebTakePhotoMenuItem.react"), {
					icon: c.jsx(r("WDSIconIcPhotoCamera.react"), {}),
					onImageTake: function(t, n) {
						me(o("WAWebWamEnumProfilePictureType").PROFILE_PICTURE_TYPE.PHOTO_CAMERA), X(t, n, o("WAWebPhotoPickType").PhotoPickType.Camera);
					},
					editCropShape: t,
					modalTheme: n,
					action: function() {
						pe(o("WAWebWamEnumGroupProfileActionType").GROUP_PROFILE_ACTION_TYPE.TAP_ACTION_ITEM_TAKE_PHOTO);
					}
				}, "take"));
			}
			return e.push(c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				icon: c.jsx(r("WDSIconIcFolder.react"), {}),
				testid: "mi-upload-photo",
				action: ee,
				children: s._(
					/*BTDS*/
					""
				)
			}, "upload")), (F === o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP || F === o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY || F === o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER) && e.push(c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				icon: c.jsx(r("WDSIconWdsIcStickerSmiley.react"), {}),
				testid: "mi-edit-group-profile-picture",
				action: Re,
				children: s._(
					/*BTDS*/
					""
				)
			}, "edit")), se !== "" && (e.push(c.jsx(_, {}, "separator")), e.push(c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				icon: c.jsx(r("WDSIconIcDelete.react"), {}),
				testid: "mi-remove-photo",
				action: Se,
				theme: o("WAWebDropdownItem.react").DropdownItemThemeType.Negative,
				children: s._(
					/*BTDS*/
					""
				)
			}, "remove"))), e;
		}, Ie = function(t) {
			if (U) {
				if (v && !ne) {
					se !== "" && be();
					return;
				}
				t.stopPropagation(), t.preventDefault();
				var e = v ? Ee() : ke();
				ye({
					menu: e,
					event: t
				}), F === o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP && S != null && S({
					groupProfileAction: o("WAWebWamEnumGroupProfileActionType").GROUP_PROFILE_ACTION_TYPE.CHANGE_PROFILE_PHOTO,
					hasProfilePicture: !!$
				});
			}
		}, Te = function(t) {
			if (U) {
				if (v && !ne) {
					se !== "" && be();
					return;
				}
				t.stopPropagation(), t.preventDefault();
				var e = v ? Ee() : ke();
				ye({
					menu: e,
					anchor: j().current
				});
			}
		}, De = function(t) {
			if (he) {
				var e = new (r("WAWebDataTransfer"))(t.clipboardData), n = e.getFiles().filter(function(e) {
					return o("WAWebFileUtils").typeFromMimetype(e.type) === "image";
				});
				if (n.length) {
					t.preventDefault(), t.stopPropagation(), Ce();
					var a = n[0];
					Q(a);
				}
			}
		}, xe = function(t) {
			Ce();
			var e = t.target.files[0];
			if (!e) return !1;
			Q(e), t.target.value = "", G();
		}, $e = !C && !v && (se === "" || le != null) && (se === "" || he != null || oe), Pe = K($e), Ne = Pe.overlay, Me = Pe.photoPickerLabel, we;
		he && (we = c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "PhotoPickerContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: Ce,
			children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: he })
		}));
		var Ae = document.activeElement === j().current ? {
			space: Te,
			enter: Te
		} : {}, Fe = [
			o("WAWebPhotoPickerStyle").styles.body,
			U && o("WAWebPhotoPickerStyle").styles.clickable,
			o("WDSMargins.stylex").wdsMargins.marginHorAuto,
			W && U && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus
		];
		(F === o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY || F === o("WAWebPhotoPickerConstants").PhotoPickerType.DEFAULT_ANNOUNCEMENT_GROUP) && Fe.push(o("WAWebPhotoPickerStyle").styles.squircleBackground), F === o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO && Fe.push(o("WAWebPhotoPickerStyle").styles.rectBackground);
		var Oe = M != null ? M : 0, Be = c.jsxs(r("WAWebUnstyledButton.react"), {
			xstyle: Fe,
			onClick: Ie,
			onMouseOver: Z,
			onMouseEnter: Y,
			onMouseLeave: J,
			onPaste: De,
			onFocus: Y,
			onBlur: J,
			ref: j(),
			dir: "ltr",
			tabIndex: Oe,
			dataTab: i,
			role: "button",
			disabled: !U,
			testid: w,
			children: [c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebPhotoPickerStyle").styles.imageContainer, u && o("WAWebPhotoPickerStyle").styles.dimmed), {
				role: "img",
				"aria-label": Me.toString(),
				children: [
					ae,
					ue,
					V,
					H
				]
			})), c.jsxs(r("WAWebVelocityTransitionGroup"), {
				transitionName: "fade",
				children: [_e, Ne]
			})]
		}), We = v && U, qe = We ? c.jsx(r("WDSTooltip.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			children: Be
		}) : Be;
		return c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			className: e(o("WAWebPhotoPickerStyle").styles.containerRefreshed, A === o("WAWebPhotoPickerConstants").PhotoPickerThemeType.COVER_PHOTO && o("WAWebPhotoPickerStyle").styles.coverPhoto, oe && se !== "" && v && o("WAWebPhotoPickerStyle").styles.dimmed, T && ae != null && o("WAWebPhotoPickerStyle").styles.imageBorder, o("WDSMargins.stylex").wdsMargins.marginHorAuto),
			style: z(),
			handlers: Ae,
			"aria-label": Me.toString(),
			children: [
				fe,
				qe,
				n != null && !v && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebPhotoPickerStyle").styles.icon), { children: c.jsx(n, {
					width: 16,
					height: 16
				}) })),
				c.jsx("input", {
					ref: ie,
					type: "file",
					accept: "image/gif,image/jpeg,image/jpg,image/png",
					style: { display: "none" },
					onChange: xe
				}),
				we,
				ce,
				re
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		return c.jsx("hr", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebPhotoPickerStyle").styles.separator, o("WDSMargins.stylex").wdsMargins.marginVer4, m.marginInline1)));
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = p;
}), 226);

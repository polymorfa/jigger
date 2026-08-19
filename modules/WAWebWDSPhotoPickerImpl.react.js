__d("WAWebWDSPhotoPickerImpl.react", [
	"fbt",
	"WAGetUserMedia",
	"WAJids",
	"WAWebConfirmPopup.react",
	"WAWebDataTransfer",
	"WAWebEditCaptureFlowLoadable",
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
	"WAWebStatusCollection",
	"WAWebStatusQuotedFlowLoadable",
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
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSProfilePhoto.react",
	"WDSTooltip.react",
	"react",
	"stylex",
	"useWAWebDefaultProfileColors",
	"useWAWebIsKeyboardUser",
	"useWAWebPhotoPickerCore",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useRef, m = { wdsProfilePhotoWrapper: {
		alignItems: "x6s0dn4",
		display: "x78zum5",
		height: "x5yr21d",
		justifyContent: "xl56j7k",
		width: "xh8yej3",
		$$css: !0
	} };
	function p(t) {
		var n = t.HoverIcon, a = t.attachToChat, i = t.dataTab, l = t.dimmed, u = l === void 0 ? !1 : l, p = t.editImageButtonRef, f = t.forceClickable, g = f === void 0 ? !1 : f, h = t.id, y = t.onImageSet, C = t.pending, b = C === void 0 ? !1 : C, v = t.readOnly, S = v === void 0 ? !1 : v, R = t.sendGroupProfilePictureLoggingEvent, L = t.showAddIconOverlay, E = L === void 0 ? !0 : L, k = t.showHiddenSubgroupIcon, I = k === void 0 ? !1 : k, T = t.showOutline, D = T === void 0 ? !1 : T, x = t.size, $ = t.startImage, P = $ === void 0 ? "" : $, N = t.statusModelId, M = t.statusRing, w = t.tabIndex, A = t.testid, F = t.theme, O = t.type, B = t.wdsEditablePersonPhoto, W = B === void 0 ? !1 : B, q = r("useWAWebIsKeyboardUser")(), U = q.isKeyboardUser, V = d(null), H = r("useWAWebPhotoPickerCore")({
			attachToChat: a,
			editImageButtonRef: p,
			forceClickable: g,
			id: h,
			onImageSet: y,
			pending: b,
			readOnly: S,
			sendGroupProfilePictureLoggingEvent: R,
			showAddIconOverlay: E,
			showHiddenSubgroupIcon: I,
			size: x,
			startImage: P,
			theme: F,
			type: O
		}), G = H.clickable, z = H.defaultIcon, j = H.emojiSuggestion, K = H.focusImageInputButton, Q = H.getContainerStyle, X = H.getEditImageButtonRef, Y = H.getOverlayAndLabel, J = H.handleImagePick, Z = H.handleImageReceived, ee = H.handleMouseEnter, te = H.handleMouseLeave, ne = H.handleMouseOver, re = H.handleView, oe = H.hasNewsletterStatus, ae = H.hiddenSubgroupIcon, ie = H.hover, le = H.imageElement, se = H.imageInputRef, ue = H.imageSize, ce = H.img, de = H.internalStatusWarning, me = H.newSuggestionButton, pe = H.sendEmojiStickerPanelOpenLoggingEvent, _e = H.sendProfilePicUpdatedLoggingEvent, fe = H.sendTapActionItemLoggingEvent, ge = H.spinner, he = H.statusRingOverlay, ye = function() {
			y(void 0, void 0, o("WAWebPhotoPickType").PhotoPickType.None), o("WAWebModalManager").ModalManager.closeSupportOrModal(), _e(o("WAWebWamEnumProfilePictureType").PROFILE_PICTURE_TYPE.REMOVE_PHOTO);
		}, Ce = function() {
			return M != null && N != null ? o("WAWebStatusCollection").StatusCollection.get(N) : null;
		}, be = function(t) {
			o("WAWebModalManager").ModalManager.openMedia(c.jsx(o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable, {
				status: t,
				onClose: function() {
					return o("WAWebModalManager").ModalManager.closeMedia();
				},
				rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.GROUP_INFO_PROFILE_RING,
				rowIndex: 0
			}), { transition: "status-modal" });
		}, ve = function(t) {
			if (oe && h != null) {
				t.push(c.jsx(r("WDSMenuItem.react"), {
					Icon: r("WDSIconWdsIcStatus.react"),
					testid: "mi-view-status",
					onPress: function() {
						o("WAWebOpenStatusQuotedFlow").fetchAndOpenNewsletterStatus({
							newsletterJid: o("WAJids").toNewsletterJid(h.toString()),
							statusModelId: h,
							rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHANNEL_INFO_SCREEN,
							rowIndex: 0
						});
					},
					title: s._(
						/*BTDS*/
						""
					)
				}, "view-status"));
				return;
			}
			var e = Ce();
			e != null && t.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconWdsIcStatus.react"),
				testid: "mi-view-status",
				onPress: function() {
					return be(e);
				},
				title: s._(
					/*BTDS*/
					""
				)
			}, "view-status"), c.jsx(r("WDSMenuItem.react"), { type: "separator" }, "view-status-separator"));
		}, Se = function() {
			ce !== "" ? re(V) : (Fe(), o("WAWebModalManager").ModalManager.openAlert(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: o("WAWebModalManager").closeAlertModal,
				children: s._(
					/*BTDS*/
					""
				)
			})));
		}, Re = function() {
			re(V);
		}, Le = function() {
			if (oe) {
				Ae();
				return;
			}
			var e = Ce();
			if (e != null) {
				be(e);
				return;
			}
			ce !== "" && re(V);
		}, Ee = function() {
			fe(o("WAWebWamEnumGroupProfileActionType").GROUP_PROFILE_ACTION_TYPE.TAP_ACTION_ITEM_TAKE_PHOTO);
			var e = O === o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO ? o("WAWebProfileCropTool.react").CropShapeType.RECT : o("WAWebProfileCropTool.react").CropShapeType.CIRCLE, t = O === o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO ? o("WAWebModal.react").ModalTheme.BoxLarge : o("WAWebModal.react").ModalTheme.Box;
			o("WAWebModalManager").ModalManager.openSupportModal(c.jsx(o("WAWebEditCaptureFlowLoadable").EditCaptureFlowLoadable, {
				onFinished: function(t, n) {
					_e(o("WAWebWamEnumProfilePictureType").PROFILE_PICTURE_TYPE.PHOTO_CAMERA), Z(t, n, o("WAWebPhotoPickType").PhotoPickType.Camera);
				},
				editCropShape: e,
				modalTheme: t
			}));
		}, ke = function() {
			fe(o("WAWebWamEnumGroupProfileActionType").GROUP_PROFILE_ACTION_TYPE.TAP_ACTION_ITEM_UPLOAD_PHOTO);
			var e = se.current;
			e != null && e.click();
		}, Ie = function() {
			fe(o("WAWebWamEnumGroupProfileActionType").GROUP_PROFILE_ACTION_TYPE.TAP_ACTION_ITEM_EMOJI_STICKER);
			var e = s._(
				/*BTDS*/
				""
			);
			o("WAWebModalManager").ModalManager.openSupportModal(c.jsx(o("WAWebModal.react").Modal, {
				type: o("WAWebModal.react").ModalTheme.Box,
				ariaLabel: e,
				onOverlayClick: o("WAWebModalManager").closeSupportOrModal,
				testid: "profile-picture-edit-modal",
				children: c.jsx(o("WAWebEditGroupProfileDrawer.react").EditGroupProfileDrawer, {
					title: e,
					onCancel: o("WAWebModalManager").closeSupportOrModal,
					onFinished: function(t, n, r) {
						_e(o("WAWebWamEnumProfilePictureType").PROFILE_PICTURE_TYPE[String(r)]), Z(t, n, r === o("WAWebEditGroupProfileDrawer.react").ImageType.EMOJI ? o("WAWebPhotoPickType").PhotoPickType.Emoji : o("WAWebPhotoPickType").PhotoPickType.Sticker), o("WAWebModalManager").ModalManager.closeSupportOrModal();
					},
					sendEmojiStickerPanelOpenLoggingEvent: pe
				})
			}));
		}, Te = function() {
			fe(o("WAWebWamEnumGroupProfileActionType").GROUP_PROFILE_ACTION_TYPE.TAP_ACTION_ITEM_REMOVE_PHOTO);
			var e = O === o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER ? s._(
				/*BTDS*/
				""
			) : O === o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP || O === o("WAWebPhotoPickerConstants").PhotoPickerType.GENERAL_GROUP ? s._(
				/*BTDS*/
				""
			) : O === o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY ? s._(
				/*BTDS*/
				""
			) : O === o("WAWebPhotoPickerConstants").PhotoPickerType.PROFILE ? s._(
				/*BTDS*/
				""
			) : O === o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO ? s._(
				/*BTDS*/
				""
			) : O === o("WAWebPhotoPickerConstants").PhotoPickerType.DEFAULT_ANNOUNCEMENT_GROUP ? void 0 : (function() {
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + O);
			})();
			o("WAWebModalManager").ModalManager.openSupportModal(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: ye,
				okText: s._(
					/*BTDS*/
					""
				),
				onCancel: o("WAWebModalManager").closeSupportOrModal,
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
		}, De = function() {
			var e = [];
			return ve(e), e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcVisibility.react"),
				testid: "mi-view-photo",
				onPress: Se,
				title: s._(
					/*BTDS*/
					""
				)
			}, "view-photo")), e;
		}, xe = function() {
			var e = [];
			return ve(e), h != null && ce !== "" && e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcVisibility.react"),
				testid: "mi-view-photo",
				onPress: Re,
				title: s._(
					/*BTDS*/
					""
				)
			}, "view")), o("WAGetUserMedia").getUserMedia && e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcPhotoCamera.react"),
				testid: "mi-take-photo",
				onPress: Ee,
				title: s._(
					/*BTDS*/
					""
				)
			}, "take")), e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcFolder.react"),
				testid: "mi-upload-photo",
				onPress: ke,
				title: s._(
					/*BTDS*/
					""
				)
			}, "upload")), (O === o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP || O === o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY || O === o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER) && e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconWdsIcStickerSmiley.react"),
				testid: "mi-edit-group-profile-picture",
				onPress: Ie,
				title: s._(
					/*BTDS*/
					""
				)
			}, "edit")), ce !== "" && (e.push(c.jsx(r("WDSMenuItem.react"), { type: "separator" }, "separator")), e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcDelete.react"),
				testid: "mi-remove-photo",
				onPress: Te,
				destructive: !0,
				title: s._(
					/*BTDS*/
					""
				)
			}, "remove"))), e;
		}, $e = c.jsx(r("WDSMenu.react"), { children: S ? De() : xe() }), Pe = r("useWDSMenu")({
			targetRef: V,
			menu: $e,
			align: "middle",
			position: "below"
		}), Ne = Pe.closeMenu, Me = Pe.isMenuOpen, we = Pe.menuPortal, Ae = Pe.openMenu, Fe = function() {
			Ne();
		}, Oe = function(t) {
			Fe();
			var e = t.target.files[0];
			if (!e) return !1;
			J(e), t.target.value = "", K();
		}, Be = function(t) {
			if (Me) {
				var e = new (r("WAWebDataTransfer"))(t.clipboardData), n = e.getFiles().filter(function(e) {
					return o("WAWebFileUtils").typeFromMimetype(e.type) === "image";
				});
				if (n.length) {
					t.preventDefault(), t.stopPropagation(), Fe();
					var a = n[0];
					J(a);
				}
			}
		}, We = function() {
			O === o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP && R != null && R({
				groupProfileAction: o("WAWebWamEnumGroupProfileActionType").GROUP_PROFILE_ACTION_TYPE.CHANGE_PROFILE_PHOTO,
				hasProfilePicture: !!P
			});
		}, qe = function(t) {
			if (G) {
				if (S && !oe) {
					ce !== "" && re(V);
					return;
				}
				t.stopPropagation(), t.preventDefault(), Ae(t), We();
			}
		}, Ue = function(t) {
			if (G) {
				if (S && !oe) {
					ce !== "" && re(V);
					return;
				}
				t.stopPropagation(), t.preventDefault(), Ae(), We();
			}
		}, Ve = ce !== "", He = Ve || oe || Ce() != null, Ge = G && (!S || He), ze = O === o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP || O === o("WAWebPhotoPickerConstants").PhotoPickerType.GENERAL_GROUP ? "group" : O === o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY ? "community" : O === o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER ? "channel" : O === o("WAWebPhotoPickerConstants").PhotoPickerType.PROFILE && W ? "person" : null, je = h != null && ze != null, Ke = je && !S, Qe = !Ke && !b && !S && (ce === "" || ue != null) && (ce === "" || ie && !Me), Xe = Y(Qe), Ye = Xe.overlay, Je = Xe.photoPickerLabel, Ze = document.activeElement === X().current ? {
			space: Ue,
			enter: Ue
		} : {}, et = [
			o("WAWebPhotoPickerStyle").styles.body,
			Ge && o("WAWebPhotoPickerStyle").styles.clickable,
			o("WDSMargins.stylex").wdsMargins.marginHorAuto,
			U && Ge && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus
		];
		(O === o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY || O === o("WAWebPhotoPickerConstants").PhotoPickerType.DEFAULT_ANNOUNCEMENT_GROUP) && et.push(o("WAWebPhotoPickerStyle").styles.squircleBackground), O === o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO && et.push(o("WAWebPhotoPickerStyle").styles.rectBackground);
		var tt = w != null ? w : 0, nt = c.jsxs(r("WAWebUnstyledButton.react"), {
			xstyle: et,
			onClick: Ge ? qe : void 0,
			onMouseOver: Ge ? ne : void 0,
			onMouseEnter: Ge ? ee : void 0,
			onMouseLeave: Ge ? te : void 0,
			onPaste: Ge ? Be : void 0,
			onFocus: Ge ? ee : void 0,
			onBlur: Ge ? te : void 0,
			ref: function(t) {
				X().current = t, V.current = t;
			},
			dir: "ltr",
			tabIndex: Ge ? tt : void 0,
			dataTab: i,
			role: "button",
			disabled: !Ge,
			testid: A,
			children: [c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebPhotoPickerStyle").styles.imageContainer, u && o("WAWebPhotoPickerStyle").styles.dimmed), {
				role: "img",
				"aria-label": Je.toString(),
				children: [
					le,
					de,
					z,
					j
				]
			})), c.jsxs(r("WAWebVelocityTransitionGroup"), {
				transitionName: "fade",
				children: [ge, Ye]
			})]
		}), rt = S && Ge, ot = M != null ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), at = s._(
			/*BTDS*/
			""
		), it = {};
		M != null && (it.statusRing = M);
		var lt = function(n, a, i, l, s) {
			return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.wdsProfilePhotoWrapper, u && o("WAWebPhotoPickerStyle").styles.dimmed), {
				"data-testid": A,
				ref: function(t) {
					V.current = t, s == null || s(t);
				},
				children: c.jsx(r("WDSProfilePhoto.react"), babelHelpers.extends({
					type: n,
					name: Je,
					src: ce,
					size: _(x),
					color: o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(a),
					isDecorative: !0,
					loading: l,
					interaction: i
				}, it))
			}));
		}, st = Ke && h != null && ze != null ? lt(ze, h, {
			type: "edit",
			label: ot,
			onPress: Ae
		}, b, function(e) {
			var t;
			X().current = (t = e == null ? void 0 : e.querySelector("button")) != null ? t : null;
		}) : null, ut = je && S && h != null && ze != null ? lt(ze, h, He ? {
			type: "viewPhoto",
			label: at,
			onPress: Le
		} : void 0, !1) : null, ct = nt;
		return rt && (ct = c.jsx(r("WDSTooltip.react"), {
			label: at,
			children: nt
		})), st != null ? ct = st : ut != null && (ct = ut), c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			className: e(o("WAWebPhotoPickerStyle").styles.containerRefreshed, F === o("WAWebPhotoPickerConstants").PhotoPickerThemeType.COVER_PHOTO && o("WAWebPhotoPickerStyle").styles.coverPhoto, ie && Ge && S && o("WAWebPhotoPickerStyle").styles.dimmed, D && le != null && o("WAWebPhotoPickerStyle").styles.imageBorder, o("WDSMargins.stylex").wdsMargins.marginHorAuto),
			style: Q(),
			handlers: Ze,
			"aria-label": Je.toString(),
			children: [
				he,
				ct,
				n != null && !S && !Ke && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebPhotoPickerStyle").styles.icon), { children: c.jsx(n, {
					width: 16,
					height: 16
				}) })),
				c.jsx("input", {
					ref: se,
					type: "file",
					accept: "image/gif,image/jpeg,image/jpg,image/png",
					style: { display: "none" },
					onChange: Oe
				}),
				we,
				me,
				ae
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		return e === 88 ? "extraLarge" : "xxLarge";
	}
	l.default = p;
}), 226);

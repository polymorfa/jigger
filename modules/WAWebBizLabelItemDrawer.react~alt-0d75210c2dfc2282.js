__d("WAWebBizLabelItemDrawer.react", [
	"fbt",
	"WAWebAutomaticEventsUserJourneyWamEvent",
	"WAWebBizLabelChooseColorModal.react",
	"WAWebBizLabelEditModal.react",
	"WAWebBizLabelEditingAction",
	"WAWebCTWAConstants",
	"WAWebChatlistPanelFunctional.react",
	"WAWebChatlistPanelMode",
	"WAWebClickableLink.react",
	"WAWebConfirmPopup.react",
	"WAWebDOIntroPopup.react",
	"WAWebDeleteRefreshedIcon.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDropdown.react",
	"WAWebDropdownItem.react",
	"WAWebDropdownItemSeparator.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebLabelCollection",
	"WAWebLabelErrors",
	"WAWebLabels.react",
	"WAWebListsGatingUtils",
	"WAWebListsLabelGatingUtils",
	"WAWebMenuBar.react",
	"WAWebMixedMultiSelectBar.react",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebMultiSelectEntryPointConstants",
	"WAWebMultiSelection",
	"WAWebNux",
	"WAWebPaletteOutlineIcon.react",
	"WAWebPencilRefreshedIcon.react",
	"WAWebSettingsGetters",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsGeneral",
	"WAWebWamEnumAutomaticEventsTargetComponentEnum",
	"WAWebWamEnumLabelOperations",
	"WAWebWamEnumLabelTargets",
	"WAWebWamEnumSmbUserActionTypeEnum",
	"WAWebWamEnumSurfaceType",
	"WAWebWamLabelEventReporter",
	"WDSIconIcMoreVert.react",
	"react",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebNux",
	"useWAWebSettingsValues"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useMemo, _ = {
		paddingVert16: {
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			$$css: !0
		},
		paddingHoriz24: {
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	};
	function f(t) {
		"use no forget";
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.labelId, l = a.onRemoveLabel, u = o("useWAWebSettingsValues").useSettingsValues([o("WAWebSettingsGetters").getShowArchiveV2]), d = u[0], f = r("useWAWebNux")(o("WAWebNux").NUX.DO_AUTOMATIC_LABEL), g = f[1], h = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), y = p(function() {
			return new (r("WAWebMultiSelection"))([], function(e) {
				return e.id.toString();
			});
		}, []);
		o("useWAWebListener").useListener(y, "all", h), m(function() {
			o("WAWebWamLabelEventReporter").logLabelOperationEvent(o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.VIEW, void 0, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.LABEL_DETAILS_SCREEN);
		}, []);
		var C = o("WAWebLabelCollection").LabelCollection.get(i), b = C == null ? void 0 : C.predefinedId, v = C != null && (C == null ? void 0 : C.count) > 0, S = o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus();
		m(function() {
			S && (b === o("WAWebCTWAConstants").NEW_ORDER_PREDEFINED_ID || b === o("WAWebCTWAConstants").LEAD_PREDEFINED_ID) && v && new (o("WAWebAutomaticEventsUserJourneyWamEvent")).AutomaticEventsUserJourneyWamEvent({
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.LABEL_DETAILS,
				smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
				automaticEventsTargetComponent: o("WAWebWamEnumAutomaticEventsTargetComponentEnum").AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.LEARN_MORE
			}).commit();
		}, [
			b,
			v,
			S
		]);
		var R = o("WAWebListsGatingUtils").isListsEnabled(), L = function() {
			y.unsetAll();
		}, E = function(t, n) {
			o("WAWebModalManager").ModalManager.close(), L(), l(t, n), o("WAWebWamLabelEventReporter").logLabelOperationEvent(o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.CLICK_POSITIVE, n.length, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.BULK_UNLABEL_DIALOG);
		}, k = function() {
			var e = y.getSelected();
			o("WAWebWamLabelEventReporter").logLabelOperationEvent(o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.CLICK_NEGATIVE, e.length, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.BULK_UNLABEL_DIALOG), o("WAWebModalManager").ModalManager.close();
		}, I = function() {
			var e = y.getSelected(), t = o("WAWebLabelCollection").LabelCollection.assertGet(i);
			o("WAWebWamLabelEventReporter").logLabelOperationEvent(o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.VIEW, e.length, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.BULK_UNLABEL_DIALOG);
			var n = R ? s._(
				/*BTDS*/
				"",
				[s._plural(e.length, "count"), s._param("listName", t.name)]
			) : s._(
				/*BTDS*/
				"",
				[s._plural(e.length, "count"), s._param("labelName", t.name)]
			);
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: n,
				okText: r("WAWebFbtCommon")("OK"),
				cancelText: s._(
					/*BTDS*/
					""
				),
				onCancel: k,
				onOK: function() {
					return E(i, e);
				},
				tsNavigationData: {
					surface: "unknown",
					viewName: "biz-label-item"
				}
			}));
		}, T;
		if (y.getSelected().length > 0) T = c.jsx(r("WAWebMixedMultiSelectBar.react"), {
			labelEditEnabled: !0,
			onRemoveLabel: I,
			selectedModels: y,
			onCancel: L,
			theme: "chatlist-panel",
			multiSelectEntryPoint: o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint.Label
		});
		else {
			var D, x = o("WAWebLabelCollection").LabelCollection.get(i);
			if (x && o("WAWebListsLabelGatingUtils").labelsEditingEnabled()) {
				var $ = function() {
					o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebBizLabelEditModal.react"), { label: x }));
				}, P = function() {
					o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebBizLabelChooseColorModal.react"), { label: x }));
				}, N = async function() {
					try {
						try {
							await o("WAWebBizLabelEditingAction").labelDeleteAction({
								color: x.colorIndex,
								labelId: i,
								name: x.name
							});
						} catch (e) {
							throw new (o("WAWebLabelErrors")).LabelActionError();
						}
						o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: R ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							""
						) }));
					} catch (e) {
						e instanceof o("WAWebLabelErrors").LabelActionError && o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: R ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							""
						) }));
					} finally {
						o("WAWebModalManager").ModalManager.close(), a.onClose();
					}
				}, M = R ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				), w = R ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				), A = function() {
					o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
						title: M,
						onOK: N,
						onCancel: o("WAWebModalManager").closeModalManager,
						tsNavigationData: {
							surface: "unknown",
							viewName: "biz-label-item"
						},
						children: w
					}));
				};
				D = c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
					testid: "labels-menu-button",
					icon: c.jsx(r("WDSIconIcMoreVert.react"), { testid: "more-refreshed" }),
					title: s._(
						/*BTDS*/
						""
					),
					dropdownMenu: {
						menu: c.jsxs(c.Fragment, { children: [
							c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
								testid: "mi-edit-label",
								action: $,
								icon: c.jsx(o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon, {}),
								children: s._(
									/*BTDS*/
									""
								)
							}, "mi-edit-label"),
							o("WAWebMobilePlatforms").isSMB() && c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
								testid: "mi-choose-label-color",
								action: P,
								icon: c.jsx(o("WAWebPaletteOutlineIcon.react").PaletteOutlineIcon, {}),
								children: s._(
									/*BTDS*/
									""
								)
							}, "mi-choose-label-color"),
							c.jsx(r("WAWebDropdownItemSeparator.react"), {}),
							c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
								testid: "mi-delete-label",
								icon: c.jsx(o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon, {}),
								action: A,
								children: s._(
									/*BTDS*/
									""
								)
							}, "mi-delete-label")
						] }),
						type: o("WAWebDropdown.react").MenuType.DropdownMenu,
						flipOnRTL: !0,
						dirX: o("WAWebDropdown.react").DirX.LEFT
					}
				});
			}
			var F = o("WAWebListsLabelGatingUtils").canDisplayLabel();
			T = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: F || x == null ? void 0 : x.name,
				onBack: a.onClose,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				menu: D,
				children: F && c.jsx(o("WAWebLabels.react").Labels, {
					labels: [a.labelId],
					renderAsCircle: !0,
					showName: !0,
					theme: "drawer-title"
				})
			});
		}
		var O = (b === o("WAWebCTWAConstants").NEW_ORDER_PREDEFINED_ID || b === o("WAWebCTWAConstants").LEAD_PREDEFINED_ID) && v && c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: [_.paddingVert16, _.paddingHoriz24],
			children: c.jsxs(o("WAWebText.react").WAWebTextMuted, { children: [
				s._(
					/*BTDS*/
					""
				),
				" ",
				c.jsx(r("WAWebClickableLink.react"), {
					onClick: function() {
						o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebDOIntroPopup.react"), {
							onContinue: function() {
								g(), o("WAWebModalManager").ModalManager.close();
							},
							surfaceType: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.LABEL_DETAILS
						})), new (o("WAWebAutomaticEventsUserJourneyWamEvent")).AutomaticEventsUserJourneyWamEvent({
							surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.LABEL_DETAILS,
							smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
							automaticEventsTargetComponent: o("WAWebWamEnumAutomaticEventsTargetComponentEnum").AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.LEARN_MORE
						}).commit();
					},
					children: r("WAWebFbtCommon")("Learn more")
				})
			] })
		});
		return c.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "settings",
			testid: "label-item-drawer",
			tsNavigationData: { surface: "smb-labels-detail" },
			children: [T, c.jsxs(r("WAWebDrawerBody.react"), { children: [S && O, c.jsx(o("WAWebChatlistPanelFunctional.react").ChatlistPanelFunctional, {
				hideMultiSelectBar: !0,
				multiSelection: y,
				labelFilter: a.labelId,
				showArchiveV2: d,
				mode: r("WAWebChatlistPanelMode").Chatlist,
				selectable: !0
			})] })]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);

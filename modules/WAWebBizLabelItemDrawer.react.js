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
	"asyncToGeneratorRuntime",
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
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.labelId, u = i.onRemoveLabel, d = o("useWAWebSettingsValues").useSettingsValues([o("WAWebSettingsGetters").getShowArchiveV2]), f = d[0], g = r("useWAWebNux")(o("WAWebNux").NUX.DO_AUTOMATIC_LABEL), h = g[1], y = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), C = p(function() {
			return new (r("WAWebMultiSelection"))([], function(e) {
				return e.id.toString();
			});
		}, []);
		o("useWAWebListener").useListener(C, "all", y), m(function() {
			o("WAWebWamLabelEventReporter").logLabelOperationEvent(o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.VIEW, void 0, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.LABEL_DETAILS_SCREEN);
		}, []);
		var b = o("WAWebLabelCollection").LabelCollection.get(l), v = b == null ? void 0 : b.predefinedId, S = b != null && (b == null ? void 0 : b.count) > 0, R = o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus();
		m(function() {
			R && (v === o("WAWebCTWAConstants").NEW_ORDER_PREDEFINED_ID || v === o("WAWebCTWAConstants").LEAD_PREDEFINED_ID) && S && new (o("WAWebAutomaticEventsUserJourneyWamEvent")).AutomaticEventsUserJourneyWamEvent({
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.LABEL_DETAILS,
				smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
				automaticEventsTargetComponent: o("WAWebWamEnumAutomaticEventsTargetComponentEnum").AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.LEARN_MORE
			}).commit();
		}, [
			v,
			S,
			R
		]);
		var L = o("WAWebListsGatingUtils").isListsEnabled(), E = function() {
			C.unsetAll();
		}, k = function(t, n) {
			o("WAWebModalManager").ModalManager.close(), E(), u(t, n), o("WAWebWamLabelEventReporter").logLabelOperationEvent(o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.CLICK_POSITIVE, n.length, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.BULK_UNLABEL_DIALOG);
		}, I = function() {
			var e = C.getSelected();
			o("WAWebWamLabelEventReporter").logLabelOperationEvent(o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.CLICK_NEGATIVE, e.length, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.BULK_UNLABEL_DIALOG), o("WAWebModalManager").ModalManager.close();
		}, T = function() {
			var e = C.getSelected(), t = o("WAWebLabelCollection").LabelCollection.assertGet(l);
			o("WAWebWamLabelEventReporter").logLabelOperationEvent(o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.VIEW, e.length, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.BULK_UNLABEL_DIALOG);
			var n = L ? s._(
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
				onCancel: I,
				onOK: function() {
					return k(l, e);
				},
				tsNavigationData: {
					surface: "unknown",
					viewName: "biz-label-item"
				}
			}));
		}, D;
		if (C.getSelected().length > 0) D = c.jsx(r("WAWebMixedMultiSelectBar.react"), {
			labelEditEnabled: !0,
			onRemoveLabel: T,
			selectedModels: C,
			onCancel: E,
			theme: "chatlist-panel",
			multiSelectEntryPoint: o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint.Label
		});
		else {
			var x, $ = o("WAWebLabelCollection").LabelCollection.get(l);
			if ($ && o("WAWebListsLabelGatingUtils").labelsEditingEnabled()) {
				var P = function() {
					o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebBizLabelEditModal.react"), { label: $ }));
				}, N = function() {
					o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebBizLabelChooseColorModal.react"), { label: $ }));
				}, M = (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
						try {
							try {
								yield o("WAWebBizLabelEditingAction").labelDeleteAction({
									color: $.colorIndex,
									labelId: l,
									name: $.name
								});
							} catch (e) {
								throw new (o("WAWebLabelErrors")).LabelActionError();
							}
							o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: L ? s._(
								/*BTDS*/
								""
							) : s._(
								/*BTDS*/
								""
							) }));
						} catch (e) {
							e instanceof o("WAWebLabelErrors").LabelActionError && o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: L ? s._(
								/*BTDS*/
								""
							) : s._(
								/*BTDS*/
								""
							) }));
						} finally {
							o("WAWebModalManager").ModalManager.close(), i.onClose();
						}
					});
					return function() {
						return e.apply(this, arguments);
					};
				})(), w = L ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				), A = L ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				), F = function() {
					o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
						title: w,
						onOK: M,
						onCancel: o("WAWebModalManager").closeModalManager,
						tsNavigationData: {
							surface: "unknown",
							viewName: "biz-label-item"
						},
						children: A
					}));
				};
				x = c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
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
								action: P,
								icon: c.jsx(o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon, {}),
								children: s._(
									/*BTDS*/
									""
								)
							}, "mi-edit-label"),
							o("WAWebMobilePlatforms").isSMB() && c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
								testid: "mi-choose-label-color",
								action: N,
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
								action: F,
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
			var O = o("WAWebListsLabelGatingUtils").canDisplayLabel();
			D = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: O || $ == null ? void 0 : $.name,
				onBack: i.onClose,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				menu: x,
				children: O && c.jsx(o("WAWebLabels.react").Labels, {
					labels: [i.labelId],
					renderAsCircle: !0,
					showName: !0,
					theme: "drawer-title"
				})
			});
		}
		var B = (v === o("WAWebCTWAConstants").NEW_ORDER_PREDEFINED_ID || v === o("WAWebCTWAConstants").LEAD_PREDEFINED_ID) && S && c.jsx(o("WAWebFlex.react").FlexRow, {
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
								h(), o("WAWebModalManager").ModalManager.close();
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
			ref: a,
			theme: "settings",
			testid: "label-item-drawer",
			tsNavigationData: { surface: "smb-labels-detail" },
			children: [D, c.jsxs(r("WAWebDrawerBody.react"), { children: [R && B, c.jsx(o("WAWebChatlistPanelFunctional.react").ChatlistPanelFunctional, {
				hideMultiSelectBar: !0,
				multiSelection: C,
				labelFilter: i.labelId,
				showArchiveV2: f,
				mode: r("WAWebChatlistPanelMode").Chatlist,
				selectable: !0
			})] })]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);

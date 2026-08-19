__d("WAWebBizLabelDrawer.react", [
	"fbt",
	"WAWebAutomaticEventsUserJourneyWamEvent",
	"WAWebBizLabelDrawerHeaderDropdownMenu.react",
	"WAWebBizLabelEditModal.react",
	"WAWebClickableLink.react",
	"WAWebConfirmPopup.react",
	"WAWebDOIntroPopup.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebIcAddCircleIcon.react",
	"WAWebLabelCollection",
	"WAWebLabelsMultiSelectLabelList.react",
	"WAWebListUtils",
	"WAWebListsActions",
	"WAWebListsGatingUtils",
	"WAWebListsLabelGatingUtils",
	"WAWebModalManager",
	"WAWebMultiSelection",
	"WAWebNoop",
	"WAWebNux",
	"WAWebPlusIcon.react",
	"WAWebSmbDataSharingOptInModalDialog",
	"WAWebTabOrder",
	"WAWebText.react",
	"WAWebUserPrefsGeneral",
	"WAWebWamEnumAutomaticEventsTargetComponentEnum",
	"WAWebWamEnumLabelOperations",
	"WAWebWamEnumLabelTargets",
	"WAWebWamEnumSmbListFeatureNameType",
	"WAWebWamEnumSmbListSurfaceType",
	"WAWebWamEnumSmbUserActionTypeEnum",
	"WAWebWamEnumSurfaceType",
	"WAWebWamEnumUpdateEntryPoint",
	"WAWebWamLabelEventReporter",
	"WAWebWamSmbListEventReporter",
	"WDSIconIcCheck.react",
	"WDSMargins.stylex",
	"WDSMenuBarItem.react",
	"WDSPaddings.stylex",
	"react",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useMemo, _ = d.useRef, f = d.useState, g = { paddingBlock10: {
		paddingTop: "x889kno",
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, h = { noWrap: {
		whiteSpace: "xuxw1ft",
		$$css: !0
	} };
	function y() {
		var e = o("WAWebLabelCollection").LabelCollection.getActiveLists();
		return o("WAWebListUtils").sortLabels(e), e.map(function(e) {
			return Number(e.id);
		});
	}
	function C(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.entryPoint, l = a.isInitialStep, u = l === void 0 ? !1 : l, d = a.onClose, C = a.onCreateListClick, b = a.onLabelClick, v = a.startInReorderMode, S = v === void 0 ? !1 : v, R = _([]), L = _([]), E = f(S), k = E[0], I = E[1];
		m(function() {
			if (S) {
				var e = y();
				L.current = [].concat(e), R.current = [].concat(e);
			}
		}, [S]);
		var T = r("useWAWebNux")(o("WAWebNux").NUX.DO_AUTOMATIC_LABEL), D = T[1], x = p(function() {
			return new (r("WAWebMultiSelection"))([], function(e) {
				return e.id;
			});
		}, []), $ = o("WAWebListsGatingUtils").isListsEnabled();
		m(function() {
			o("WAWebWamLabelEventReporter").logLabelOperationEvent(o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.VIEW, void 0, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.LABELS_SCREEN);
		}, []), m(function() {
			r("WAWebSmbDataSharingOptInModalDialog").maybeShowListsManagementDataSharingDialog(r("WAWebNoop"));
		}, []), m(function() {
			o("WAWebWamSmbListEventReporter").logSmbListEvent({
				labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.VIEW,
				labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS.LABELS_SCREEN,
				updateEntryPoint: i,
				smbListSurface: o("WAWebWamEnumSmbListSurfaceType").SMB_LIST_SURFACE_TYPE.MANAGE_LISTS,
				smbListFeatureName: o("WAWebWamEnumSmbListFeatureNameType").SMB_LIST_FEATURE_NAME_TYPE.LISTS_CREATION
			});
		}, [i]);
		var P = o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus();
		m(function() {
			P && new (o("WAWebAutomaticEventsUserJourneyWamEvent")).AutomaticEventsUserJourneyWamEvent({
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.LABEL_LIST,
				smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
				automaticEventsTargetComponent: o("WAWebWamEnumAutomaticEventsTargetComponentEnum").AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.LEARN_MORE
			}).commit();
		}, [P]);
		var N = function(t) {
			return {
				shouldScrollIntoView: !0,
				shouldSelect: !1
			};
		}, M = function() {
			if (o("WAWebListUtils").isListFlowMaxListsCountReached()) {
				o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					onOK: o("WAWebModalManager").closeModalManager,
					okText: r("WAWebFbtCommon")("OK"),
					children: o("WAWebListUtils").getReachMaxLabelCountTextForBizLabelDrawer($)
				}));
				return;
			}
			$ ? (o("WAWebWamSmbListEventReporter").logSmbListEvent({
				labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.CLICK_POSITIVE,
				updateEntryPoint: i,
				smbListSurface: o("WAWebWamEnumSmbListSurfaceType").SMB_LIST_SURFACE_TYPE.MANAGE_LISTS,
				smbListFeatureName: o("WAWebWamEnumSmbListFeatureNameType").SMB_LIST_FEATURE_NAME_TYPE.LISTS_CREATION,
				userActionTarget: "new_list_row"
			}), C()) : o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebBizLabelEditModal.react"), { label: null }));
		}, w = o("WAWebListsLabelGatingUtils").labelsEditingEnabled() && c.jsx(r("WDSMenuBarItem.react"), {
			tabOrder: o("WAWebTabOrder").TAB_ORDER.LABELS_TAB_HEADER,
			testid: "labels-add-button",
			icon: $ ? o("WAWebIcAddCircleIcon.react").IcAddCircleIcon : o("WAWebPlusIcon.react").PlusIcon,
			title: $ ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			onClick: M
		}), A = (function() {
			return o("WAWebListsGatingUtils").isLabelReorderEnabled() ? k ? c.jsx(r("WDSMenuBarItem.react"), {
				testid: "done-reorder-button",
				icon: r("WDSIconIcCheck.react"),
				title: s._(
					/*BTDS*/
					""
				),
				onClick: function() {
					o("WAWebListsActions").persistLabelReorder(R.current), I(!1);
				}
			}) : c.jsx(o("WAWebBizLabelDrawerHeaderDropdownMenu.react").LabelDrawerHeaderDropdownMenu, { onReorder: function() {
				var e = y();
				L.current = [].concat(e), R.current = [].concat(e), I(!0);
			} }) : null;
		})(), F = function() {
			var e = L.current, t = R.current;
			return e.length !== t.length ? !0 : e.some(function(e, n) {
				return e !== t[n];
			});
		}, O = function() {
			if (k && F()) {
				o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					title: s._(
						/*BTDS*/
						""
					),
					okButtonType: "solid-warning",
					onOK: function() {
						I(!1), o("WAWebModalManager").ModalManager.close(), d();
					},
					onCancel: o("WAWebModalManager").closeModalManager,
					children: s._(
						/*BTDS*/
						""
					)
				}));
				return;
			}
			if (k) {
				I(!1);
				return;
			}
			d();
		}, B = {};
		u ? B.onCancel = O : B.onBack = O;
		var W = o("WAWebListsGatingUtils").isListsEnabled() ? { surface: "smb-lists-manage" } : { surface: "smb-labels-list" };
		return c.jsxs(r("WAWebDrawer.react"), babelHelpers.extends({
			ref: n,
			theme: "settings"
		}, W && { tsNavigationData: W }, { children: [c.jsxs(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({ title: $ ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) }, B, {
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			children: [!k && w, A]
		})), c.jsxs(r("WAWebDrawerBody.react"), { children: [c.jsx(r("WAWebLabelsMultiSelectLabelList.react"), {
			autoLabeledLabelIds: [],
			isReorderActive: k,
			onLabelOrderChange: function(t) {
				R.current = t;
			},
			shouldScrollIntoViewAndSelect: N,
			selectedLabels: x,
			renderContext: "label-list",
			onLabelClick: b,
			entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS
		}), P && c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: [
				o("WDSMargins.stylex").wdsMargins.marginBottom28,
				g.paddingBlock10,
				o("WDSPaddings.stylex").wdsPaddings.paddingHor20
			],
			children: c.jsxs(o("WAWebText.react").WAWebTextMuted, {
				xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingBottom16,
				children: [
					$ ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					),
					" ",
					c.jsx(r("WAWebClickableLink.react"), {
						xstyle: h.noWrap,
						onClick: function() {
							o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebDOIntroPopup.react"), {
								onContinue: function() {
									D(), o("WAWebModalManager").ModalManager.close();
								},
								surfaceType: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.LABEL_LIST
							})), new (o("WAWebAutomaticEventsUserJourneyWamEvent")).AutomaticEventsUserJourneyWamEvent({
								surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.LABEL_LIST,
								smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
								automaticEventsTargetComponent: o("WAWebWamEnumAutomaticEventsTargetComponentEnum").AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.LEARN_MORE
							}).commit();
						},
						children: r("WAWebFbtCommon")("Learn more")
					})
				]
			})
		})] })] }));
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);

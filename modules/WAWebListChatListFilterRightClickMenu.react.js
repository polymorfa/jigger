__d("WAWebListChatListFilterRightClickMenu.react", [
	"fbt",
	"WAWebCreateOrEditListDrawer.react",
	"WAWebDrawerManager",
	"WAWebLabelCollection",
	"WAWebLabelFlowLoadable",
	"WAWebListPeopleRefreshedIcon.react",
	"WAWebListUtils",
	"WAWebListsActions",
	"WAWebListsGatingUtils",
	"WAWebListsUtil",
	"WAWebNonEmptyString",
	"WAWebSchemaLabel",
	"WAWebWamEnumUpdateEntryPoint",
	"WDSIconIcDelete.react",
	"WDSIconIcDragHandle.react",
	"WDSIconIcEdit.react",
	"WDSIconIcVisibilityOff.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		if (!o("WAWebListsGatingUtils").isListsM2Enabled()) return !1;
		if (e == null) return !0;
		switch (e) {
			case o("WAWebSchemaLabel").ListType.CUSTOM:
			case o("WAWebSchemaLabel").ListType.PREDEFINED:
			case o("WAWebSchemaLabel").ListType.FAVORITES:
			case o("WAWebSchemaLabel").ListType.UNREAD:
			case o("WAWebSchemaLabel").ListType.GROUPS:
			case o("WAWebSchemaLabel").ListType.COMMUNITY: return !0;
			case o("WAWebSchemaLabel").ListType.NONE:
			case o("WAWebSchemaLabel").ListType.SERVER_ASSIGNED:
			case o("WAWebSchemaLabel").ListType.DRAFTED:
			case o("WAWebSchemaLabel").ListType.AI_HANDOFF:
			case o("WAWebSchemaLabel").ListType.CHANNELS:
			case o("WAWebSchemaLabel").ListType.AI_RESPONDING:
			case o("WAWebSchemaLabel").ListType.LEAD: return !1;
		}
	}
	function d(e, t) {
		if (!c(e)) return null;
		var n = o("WAWebNonEmptyString").asMaybeNonEmptyString(t);
		if (e == null) {
			var a = function() {
				o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
					isInitialStep: !0,
					entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.FILTER_CONTEXT_MENU
				}));
			}, i = function() {
				o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
					isInitialStep: !0,
					startInReorderMode: !0,
					entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS
				}));
			};
			return u.jsxs(r("WDSMenu.react"), { children: [
				u.jsx(r("WDSMenuItem.react"), {
					Icon: o("WAWebListPeopleRefreshedIcon.react").ListPeopleRefreshedIcon,
					title: s._(
						/*BTDS*/
						""
					),
					onPress: a,
					testid: "mi-manage-lists"
				}),
				u.jsx(r("WDSMenuItem.react"), { type: "separator" }),
				u.jsx(r("WDSMenuItem.react"), {
					Icon: r("WDSIconIcDragHandle.react"),
					title: s._(
						/*BTDS*/
						""
					),
					onPress: i,
					testid: "mi-reorder"
				})
			] });
		}
		if (n != null && e === o("WAWebSchemaLabel").ListType.FAVORITES) {
			var l = function() {
				o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebCreateOrEditListDrawer.react"), {
					listId: n,
					onBack: o("WAWebDrawerManager").closeDrawerLeft,
					onClose: o("WAWebDrawerManager").closeDrawerLeft,
					entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.FILTER_CONTEXT_MENU
				}));
			};
			return u.jsx(r("WDSMenu.react"), { children: u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcEdit.react"),
				title: s._(
					/*BTDS*/
					""
				),
				onPress: l,
				testid: "mi-change"
			}) });
		}
		if (n != null && o("WAWebListUtils").isDisableablePresetList(e)) {
			var d = function() {
				var e = o("WAWebLabelCollection").LabelCollection.get(n);
				e != null && o("WAWebListsActions").deactivatePresetList(e);
			};
			return u.jsx(r("WDSMenu.react"), { children: u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcVisibilityOff.react"),
				title: s._(
					/*BTDS*/
					""
				),
				destructive: !0,
				onPress: d,
				testid: "mi-disable"
			}) });
		}
		if (n != null && (e === o("WAWebSchemaLabel").ListType.CUSTOM || e === o("WAWebSchemaLabel").ListType.PREDEFINED)) {
			var m = o("WAWebLabelCollection").LabelCollection.get(n), p = (m == null ? void 0 : m.isImmutable) !== !0, _ = function() {
				o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebCreateOrEditListDrawer.react"), {
					listId: n,
					onBack: o("WAWebDrawerManager").closeDrawerLeft,
					onClose: o("WAWebDrawerManager").closeDrawerLeft,
					entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.FILTER_CONTEXT_MENU
				}));
			};
			return u.jsxs(r("WDSMenu.react"), { children: [u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcEdit.react"),
				title: s._(
					/*BTDS*/
					""
				),
				onPress: _,
				testid: "mi-edit"
			}), p && u.jsxs(u.Fragment, { children: [u.jsx(r("WDSMenuItem.react"), { type: "separator" }), u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcDelete.react"),
				title: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					return o("WAWebListsUtil").openListDeleteConfirmPopup(n, o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.FILTER_CONTEXT_MENU);
				},
				destructive: !0,
				testid: "mi-delete"
			})] })] });
		}
		return null;
	}
	l.allowToDisplayListFilterPillContextMenu = c, l.buildFilterPillContextMenu = d;
}), 226);

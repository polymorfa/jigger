__d("WAWebChatContextMenuItemEditList.react", [
	"fbt",
	"WAWebABProps",
	"WAWebChatGetters",
	"WAWebFrontendChatGetters",
	"WAWebLabelCollection",
	"WAWebListPeopleIcon.react",
	"WAWebListSubmenuContentLoadable",
	"WAWebListsIntroPopupLoadable",
	"WAWebManageLabelFlowLoadable",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebNux",
	"WAWebSMBListsIntroPopup.react",
	"WAWebSchemaLabel",
	"WAWebStateUtils",
	"WAWebWamEnumLabelOperations",
	"WAWebWamEnumSmbListFeatureNameType",
	"WAWebWamEnumSmbListSurfaceType",
	"WAWebWamEnumUpdateEntryPoint",
	"WAWebWamSmbListEventReporter",
	"WDSMenuItem.react",
	"react",
	"useWAWebChatValues",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect;
	function d(e) {
		var t = e.chat, n = e.displayContext, a = e.onSMBLabelMenuItemClick, i = o("WAWebMobilePlatforms").isSMB() ? o("WAWebNux").NUX.SMB_LISTS_INTRO : o("WAWebNux").NUX.ADD_TO_LISTS, l = r("useWAWebNux")(i), d = l[0], m = l[1], p = o("useWAWebChatValues").useChatValues(t.id, [o("WAWebChatGetters").getLabels, o("WAWebFrontendChatGetters").getIsFavorite]), _ = p[0], f = p[1], g = (_ == null || _.length === 0) && !(f && o("WAWebLabelCollection").LabelCollection.some(function(e) {
			return e.type === o("WAWebSchemaLabel").ListType.FAVORITES;
		})) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), h = function() {
			if (o("WAWebMobilePlatforms").isSMB()) {
				d ? o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSMBListsIntroPopup.react").SMBListsIntroPopup, { onContinue: function() {
					m(), o("WAWebWamSmbListEventReporter").logSmbListEvent({
						labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.CLICK_POSITIVE,
						updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_NUX,
						smbListSurface: o("WAWebWamEnumSmbListSurfaceType").SMB_LIST_SURFACE_TYPE.INBOX_CHAT_BOTTOM_SHEET_ADD_TO_LIST,
						smbListFeatureName: o("WAWebWamEnumSmbListFeatureNameType").SMB_LIST_FEATURE_NAME_TYPE.LIST_APPLICATION
					}), a == null || a();
				} })) : (o("WAWebWamSmbListEventReporter").logSmbListEvent({
					labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.CLICK_POSITIVE,
					updateEntryPoint: n === "chat-header" ? o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_MORE_OPTIONS : o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LONG_PRESS_OPTIONS,
					smbListSurface: o("WAWebWamEnumSmbListSurfaceType").SMB_LIST_SURFACE_TYPE.INBOX_CHAT_BOTTOM_SHEET_ADD_TO_LIST,
					smbListFeatureName: o("WAWebWamEnumSmbListFeatureNameType").SMB_LIST_FEATURE_NAME_TYPE.LIST_APPLICATION
				}), a == null || a());
				return;
			}
			var e = function(r) {
				r === void 0 && (r = !1);
				var e = [o("WAWebStateUtils").unproxy(t)], a;
				r ? a = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_NUX : n === "chat-header" ? a = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_MORE_OPTIONS : a = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LONG_PRESS_OPTIONS, o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable, {
					modelsToUpdate: e,
					onClose: o("WAWebModalManager").closeModalManager,
					entryPoint: a
				}));
			};
			d ? o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable, { onContinue: function() {
				m(), e(!0);
			} })) : e();
		}, y = o("WAWebABProps").getABPropConfigValue("wa_web_change_list_wds_submenu") === !0 && !o("WAWebMobilePlatforms").isSMB(), C = n === "chat-header" ? o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_MORE_OPTIONS : o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LONG_PRESS_OPTIONS;
		c(function() {
			y && o("WAWebListSubmenuContentLoadable").requireBundle();
		}, [y]);
		var b = y ? u.jsx(o("WAWebListSubmenuContentLoadable").ListSubmenuContentLoadable, {
			chat: t,
			chatLabels: _,
			entryPoint: C
		}) : void 0;
		return u.jsx(r("WDSMenuItem.react"), {
			Icon: o("WAWebListPeopleIcon.react").ListPeopleIcon,
			title: g,
			onPress: y ? r("WAWebNoop") : h,
			hasSubmenu: y,
			submenuContent: b,
			testid: "mi-edit-list"
		}, "EditList");
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

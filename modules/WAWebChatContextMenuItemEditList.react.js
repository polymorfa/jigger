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
	"react-compiler-runtime",
	"useWAWebChatValues",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect;
	function d(e) {
		var t = o("react-compiler-runtime").c(21), n = e.chat, a = e.displayContext, i = e.onSMBLabelMenuItemClick, l = o("WAWebMobilePlatforms").isSMB() ? o("WAWebNux").NUX.SMB_LISTS_INTRO : o("WAWebNux").NUX.ADD_TO_LISTS, d = r("useWAWebNux")(l), p = d[0], _ = d[1], f;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (f = [o("WAWebChatGetters").getLabels, o("WAWebFrontendChatGetters").getIsFavorite], t[0] = f) : f = t[0];
		var g = o("useWAWebChatValues").useChatValues(n.id, f), h = g[0], y = g[1], C;
		t[1] !== h || t[2] !== y ? (C = (h == null || h.length === 0) && !(y && o("WAWebLabelCollection").LabelCollection.some(m)) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[1] = h, t[2] = y, t[3] = C) : C = t[3];
		var b = C, v;
		t[4] !== n || t[5] !== a || t[6] !== i || t[7] !== p || t[8] !== _ ? (v = function() {
			if (o("WAWebMobilePlatforms").isSMB()) {
				p ? o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSMBListsIntroPopup.react").SMBListsIntroPopup, { onContinue: function() {
					_(), o("WAWebWamSmbListEventReporter").logSmbListEvent({
						labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.CLICK_POSITIVE,
						updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_NUX,
						smbListSurface: o("WAWebWamEnumSmbListSurfaceType").SMB_LIST_SURFACE_TYPE.INBOX_CHAT_BOTTOM_SHEET_ADD_TO_LIST,
						smbListFeatureName: o("WAWebWamEnumSmbListFeatureNameType").SMB_LIST_FEATURE_NAME_TYPE.LIST_APPLICATION
					}), i == null || i();
				} })) : (o("WAWebWamSmbListEventReporter").logSmbListEvent({
					labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.CLICK_POSITIVE,
					updateEntryPoint: a === "chat-header" ? o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_MORE_OPTIONS : o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LONG_PRESS_OPTIONS,
					smbListSurface: o("WAWebWamEnumSmbListSurfaceType").SMB_LIST_SURFACE_TYPE.INBOX_CHAT_BOTTOM_SHEET_ADD_TO_LIST,
					smbListFeatureName: o("WAWebWamEnumSmbListFeatureNameType").SMB_LIST_FEATURE_NAME_TYPE.LIST_APPLICATION
				}), i == null || i());
				return;
			}
			var e = function(t) {
				var e = t === void 0 ? !1 : t, r = [o("WAWebStateUtils").unproxy(n)], i;
				e ? i = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_NUX : a === "chat-header" ? i = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_MORE_OPTIONS : i = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LONG_PRESS_OPTIONS, o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable, {
					modelsToUpdate: r,
					onClose: o("WAWebModalManager").closeModalManager,
					entryPoint: i
				}));
			};
			p ? o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable, { onContinue: function() {
				_(), e(!0);
			} })) : e();
		}, t[4] = n, t[5] = a, t[6] = i, t[7] = p, t[8] = _, t[9] = v) : v = t[9];
		var S = v, R;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (R = o("WAWebABProps").getABPropConfigValue("wa_web_change_list_wds_submenu") === !0 && !o("WAWebMobilePlatforms").isSMB(), t[10] = R) : R = t[10];
		var L = R, E = a === "chat-header" ? o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_MORE_OPTIONS : o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LONG_PRESS_OPTIONS, k, I;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (k = function() {
			L && o("WAWebListSubmenuContentLoadable").requireBundle();
		}, I = [L], t[11] = k, t[12] = I) : (k = t[11], I = t[12]), c(k, I);
		var T;
		t[13] !== n || t[14] !== h || t[15] !== E ? (T = L ? u.jsx(o("WAWebListSubmenuContentLoadable").ListSubmenuContentLoadable, {
			chat: n,
			chatLabels: h,
			entryPoint: E
		}) : void 0, t[13] = n, t[14] = h, t[15] = E, t[16] = T) : T = t[16];
		var D = T, x = L ? r("WAWebNoop") : S, $;
		return t[17] !== b || t[18] !== D || t[19] !== x ? ($ = u.jsx(r("WDSMenuItem.react"), {
			Icon: o("WAWebListPeopleIcon.react").ListPeopleIcon,
			title: b,
			onPress: x,
			hasSubmenu: L,
			submenuContent: D,
			testid: "mi-edit-list"
		}, "EditList"), t[17] = b, t[18] = D, t[19] = x, t[20] = $) : $ = t[20], $;
	}
	function m(e) {
		return e.type === o("WAWebSchemaLabel").ListType.FAVORITES;
	}
	l.default = d;
}), 226);

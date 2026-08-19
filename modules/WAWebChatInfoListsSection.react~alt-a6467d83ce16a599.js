__d("WAWebChatInfoListsSection.react", [
	"fbt",
	"WAWebChatGetters",
	"WAWebChatInfoDrawerSection.react",
	"WAWebDrawerButtonRefreshed.react",
	"WAWebFrontendChatGetters",
	"WAWebLabelCollection",
	"WAWebListPeopleRefreshedIcon.react",
	"WAWebListsIntroPopupLoadable",
	"WAWebManageLabelFlowLoadable",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebNux",
	"WAWebSMBListsIntroPopup.react",
	"WAWebSchemaLabel",
	"WAWebStateUtils",
	"WAWebWamEnumLabelOperations",
	"WAWebWamEnumSmbListFeatureNameType",
	"WAWebWamEnumSmbListSurfaceType",
	"WAWebWamEnumUpdateEntryPoint",
	"WAWebWamSmbListEventReporter",
	"react",
	"useWAWebChatValues",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.chat, n = o("WAWebMobilePlatforms").isSMB() ? o("WAWebNux").NUX.SMB_LISTS_INTRO : o("WAWebNux").NUX.ADD_TO_LISTS, a = r("useWAWebNux")(n), i = a[0], l = a[1], c = o("useWAWebChatValues").useChatValues(t.id, [
			o("WAWebChatGetters").getLabels,
			o("WAWebFrontendChatGetters").getIsFavorite,
			o("WAWebChatGetters").getIsGroup
		]), d = c[0], m = c[1], p = c[2], _ = (d == null || d.length === 0) && !(m && o("WAWebLabelCollection").LabelCollection.some(function(e) {
			return e.type === o("WAWebSchemaLabel").ListType.FAVORITES;
		})) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), f = function() {
			var e = function(n) {
				n === void 0 && (n = !1);
				var e = [o("WAWebStateUtils").unproxy(t)], r;
				n ? r = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_NUX : p ? r = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.GROUP_INFO : r = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CONTACT_INFO, o("WAWebWamSmbListEventReporter").logSmbListEvent({
					labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.CLICK_POSITIVE,
					updateEntryPoint: r,
					smbListSurface: o("WAWebWamEnumSmbListSurfaceType").SMB_LIST_SURFACE_TYPE.INBOX_CHAT_BOTTOM_SHEET_ADD_TO_LIST,
					smbListFeatureName: o("WAWebWamEnumSmbListFeatureNameType").SMB_LIST_FEATURE_NAME_TYPE.LIST_APPLICATION
				}), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable, {
					modelsToUpdate: e,
					onClose: o("WAWebModalManager").closeModalManager,
					entryPoint: r
				}));
			};
			if (i) {
				var n = o("WAWebMobilePlatforms").isSMB() ? o("WAWebSMBListsIntroPopup.react").SMBListsIntroPopup : o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable;
				o("WAWebModalManager").ModalManager.open(u.jsx(n, { onContinue: function() {
					l(), e(!0);
				} }));
			} else e();
		}, g = {
			onClick: f,
			testid: "li-lists"
		};
		return u.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, { children: u.jsx(r("WAWebDrawerButtonRefreshed.react"), babelHelpers.extends({ icon: u.jsx(o("WAWebListPeopleRefreshedIcon.react").ListPeopleRefreshedIcon, {}) }, g, { children: _ })) });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

__d("WAWebMultiSelectAddToListMenuItem.react", [
	"fbt",
	"WAWebCommonCTWADataSharing",
	"WAWebListPeopleIcon.react",
	"WAWebManageLabelFlowLoadable",
	"WAWebModalManager",
	"WAWebSmbDataSharingOptInModalDialog",
	"WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
	"WAWebWamEnumUpdateEntryPoint",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.chats, n = e.onComplete, a = function() {
			r("WAWebSmbDataSharingOptInModalDialog").maybeShowLabelDataSharingDialog({
				cb: function() {
					o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable, {
						onLabelUpdateComplete: n,
						modelsToUpdate: t,
						onClose: o("WAWebModalManager").closeModalManager,
						entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_MORE_OPTIONS
					}));
				},
				chats: t,
				entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT,
				target: o("WAWebCommonCTWADataSharing").SmbDataSharingLabelTargetValues.CHAT
			});
		}, i = t.some(function(e) {
			return e.labels != null && e.labels.length > 0;
		});
		return u.jsx(r("WDSMenuItem.react"), {
			Icon: o("WAWebListPeopleIcon.react").ListPeopleIcon,
			onPress: a,
			testid: "multi-select-bar-overflow-menu-item-add-to-list",
			title: i ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

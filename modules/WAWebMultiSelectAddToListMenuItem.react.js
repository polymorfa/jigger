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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(10), n = e.chats, a = e.onComplete, i;
		t[0] !== n || t[1] !== a ? (i = function() {
			r("WAWebSmbDataSharingOptInModalDialog").maybeShowLabelDataSharingDialog({
				cb: function() {
					o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable, {
						onLabelUpdateComplete: a,
						modelsToUpdate: n,
						onClose: o("WAWebModalManager").closeModalManager,
						entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_MORE_OPTIONS
					}));
				},
				chats: n,
				entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT,
				target: o("WAWebCommonCTWADataSharing").SmbDataSharingLabelTargetValues.CHAT
			});
		}, t[0] = n, t[1] = a, t[2] = i) : i = t[2];
		var l = i, c;
		t[3] !== n ? (c = n.some(d), t[3] = n, t[4] = c) : c = t[4];
		var m = c, p;
		t[5] !== m ? (p = m ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[5] = m, t[6] = p) : p = t[6];
		var _;
		return t[7] !== l || t[8] !== p ? (_ = u.jsx(r("WDSMenuItem.react"), {
			Icon: o("WAWebListPeopleIcon.react").ListPeopleIcon,
			onPress: l,
			testid: "multi-select-bar-overflow-menu-item-add-to-list",
			title: p
		}), t[7] = l, t[8] = p, t[9] = _) : _ = t[9], _;
	}
	function d(e) {
		return e.labels != null && e.labels.length > 0;
	}
	l.default = c;
}), 226);

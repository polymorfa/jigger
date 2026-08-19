__d("WAWebBroadcastInfoOverflowMenu.react", [
	"fbt",
	"WAWebAudienceExpressionTypes",
	"WAWebBizBroadcastsHomeStrings",
	"WAWebBroadcastRenameModalLoadable",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebChatContextMenuItemEditList.react",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebCommonCTWADataSharing",
	"WAWebComposeBoxActions",
	"WAWebLabelOutlineIcon.react",
	"WAWebListsGatingUtils",
	"WAWebManageLabelFlowLoadable",
	"WAWebModalManager",
	"WAWebSmbDataSharingOptInModalDialog",
	"WAWebStateUtils",
	"WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
	"WAWebWamEnumSurfaceType",
	"WAWebWamEnumUpdateEntryPoint",
	"WAWebWidToJid",
	"WDSIconIcDelete.react",
	"WDSIconIcEdit.react",
	"WDSIconIcMoreVert.react",
	"WDSIconWdsIcChat.react",
	"WDSMenu.react",
	"WDSMenuBarItem.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.chat, n = e.entryPoint, a = e.onAudienceUpdate, i = e.onClose, l = e.onCloseFullScreen, c = e.showOpenThread, d = c === void 0 ? !1 : c, m = o("WAWebWidToJid").widToBroadcastJid(t.id), p = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.openBroadcastThreadClicked(n, m), o("WAWebCmd").Cmd.openChatFromUnread({
				chat: t,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InfoDrawer
			}).then(function(e) {
				e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
			}), l == null || l();
		}, _ = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.renameAudienceClicked(n, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER, m), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebBroadcastRenameModalLoadable").WAWebBroadcastRenameModalLoadable, {
				chat: t,
				entryPoint: n,
				onClose: o("WAWebModalManager").closeModalManager,
				onAudienceUpdate: a,
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER
			}));
		}, f = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.labelChatClicked(n, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER, m), r("WAWebSmbDataSharingOptInModalDialog").maybeShowLabelDataSharingDialog({
				cb: function() {
					o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable, {
						modelsToUpdate: [o("WAWebStateUtils").unproxy(t)],
						onClose: function() {
							return o("WAWebModalManager").ModalManager.close();
						},
						onLabelUpdateComplete: function() {
							o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.labelChatSaved(n, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER, m);
						},
						entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.BROADCAST_LIST_CHAT_INFO_OVERFLOW
					}));
				},
				chats: [t],
				entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT,
				target: o("WAWebCommonCTWADataSharing").SmbDataSharingLabelTargetValues.CHAT
			});
		}, g = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.deleteAudienceClicked(n, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER, m), o("WAWebCmd").Cmd.deleteOrExitChat(t), i();
		}, h = o("WAWebAudienceExpressionTypes").isPredicateAudience({ broadcastMetadata: t.broadcastMetadata != null ? { audienceExpression: t.broadcastMetadata.audienceExpression } : null }), y = [];
		return d && y.push(u.jsx(r("WDSMenuItem.react"), {
			testid: "dropdown-open-thread",
			onPress: p,
			Icon: r("WDSIconWdsIcChat.react"),
			title: s._(
				/*BTDS*/
				""
			)
		}, "open-thread")), o("WAWebListsGatingUtils").isListsEnabled() ? y.push(u.jsx(r("WAWebChatContextMenuItemEditList.react"), {
			chat: t,
			displayContext: "chat-header",
			onSMBLabelMenuItemClick: f
		}, "edit-list")) : y.push(u.jsx(r("WDSMenuItem.react"), {
			testid: "dropdown-label-chat",
			onPress: f,
			Icon: o("WAWebLabelOutlineIcon.react").LabelOutlineIcon,
			title: s._(
				/*BTDS*/
				""
			)
		}, "label-chat")), y.push(u.jsx(r("WDSMenuItem.react"), {
			testid: "dropdown-rename-broadcast",
			onPress: _,
			disabled: h,
			Icon: r("WDSIconIcEdit.react"),
			title: s._(
				/*BTDS*/
				""
			)
		}, "rename-broadcast"), u.jsx(r("WDSMenuItem.react"), {
			testid: "dropdown-delete-broadcast",
			onPress: g,
			Icon: r("WDSIconIcDelete.react"),
			destructive: !0,
			title: o("WAWebBizBroadcastsHomeStrings").getDeleteAudienceLabel()
		}, "delete-broadcast")), u.jsx(r("WDSMenuBarItem.react"), {
			testid: "btn-audience-info-menu",
			icon: r("WDSIconIcMoreVert.react"),
			title: s._(
				/*BTDS*/
				""
			),
			wdsMenuToRender: u.jsx(r("WDSMenu.react"), { children: y })
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(50), n = e.chat, a = e.entryPoint, i = e.onAudienceUpdate, l = e.onClose, c = e.onCloseFullScreen, m = e.showOpenThread, p = m === void 0 ? !1 : m, _;
		t[0] !== n.id ? (_ = o("WAWebWidToJid").widToBroadcastJid(n.id), t[0] = n.id, t[1] = _) : _ = t[1];
		var f = _, g;
		t[2] !== f || t[3] !== n || t[4] !== a || t[5] !== c ? (g = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.openBroadcastThreadClicked(a, f), o("WAWebCmd").Cmd.openChatFromUnread({
				chat: n,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InfoDrawer
			}).then(function(e) {
				e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(n);
			}), c == null || c();
		}, t[2] = f, t[3] = n, t[4] = a, t[5] = c, t[6] = g) : g = t[6];
		var h = g, y;
		t[7] !== f || t[8] !== n || t[9] !== a || t[10] !== i ? (y = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.renameAudienceClicked(a, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER, f), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebBroadcastRenameModalLoadable").WAWebBroadcastRenameModalLoadable, {
				chat: n,
				entryPoint: a,
				onClose: o("WAWebModalManager").closeModalManager,
				onAudienceUpdate: i,
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER
			}));
		}, t[7] = f, t[8] = n, t[9] = a, t[10] = i, t[11] = y) : y = t[11];
		var C = y, b;
		t[12] !== f || t[13] !== n || t[14] !== a ? (b = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.labelChatClicked(a, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER, f), r("WAWebSmbDataSharingOptInModalDialog").maybeShowLabelDataSharingDialog({
				cb: function() {
					o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable, {
						modelsToUpdate: [o("WAWebStateUtils").unproxy(n)],
						onClose: d,
						onLabelUpdateComplete: function() {
							o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.labelChatSaved(a, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER, f);
						},
						entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.BROADCAST_LIST_CHAT_INFO_OVERFLOW
					}));
				},
				chats: [n],
				entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT,
				target: o("WAWebCommonCTWADataSharing").SmbDataSharingLabelTargetValues.CHAT
			});
		}, t[12] = f, t[13] = n, t[14] = a, t[15] = b) : b = t[15];
		var v = b, S;
		t[16] !== f || t[17] !== n || t[18] !== a || t[19] !== l ? (S = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.deleteAudienceClicked(a, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER, f), o("WAWebCmd").Cmd.deleteOrExitChat(n), l();
		}, t[16] = f, t[17] = n, t[18] = a, t[19] = l, t[20] = S) : S = t[20];
		var R = S, L;
		t[21] !== n.broadcastMetadata ? (L = o("WAWebAudienceExpressionTypes").isPredicateAudience({ broadcastMetadata: n.broadcastMetadata != null ? { audienceExpression: n.broadcastMetadata.audienceExpression } : null }), t[21] = n.broadcastMetadata, t[22] = L) : L = t[22];
		var E = L, k;
		if (t[23] !== n || t[24] !== R || t[25] !== v || t[26] !== h || t[27] !== C || t[28] !== E || t[29] !== p) {
			if (k = [], p) {
				var I;
				t[31] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
					/*BTDS*/
					""
				), t[31] = I) : I = t[31];
				var T;
				t[32] !== h ? (T = u.jsx(r("WDSMenuItem.react"), {
					testid: "dropdown-open-thread",
					onPress: h,
					Icon: r("WDSIconWdsIcChat.react"),
					title: I
				}, "open-thread"), t[32] = h, t[33] = T) : T = t[33], k.push(T);
			}
			if (o("WAWebListsGatingUtils").isListsEnabled()) {
				var D;
				t[34] !== n || t[35] !== v ? (D = u.jsx(r("WAWebChatContextMenuItemEditList.react"), {
					chat: n,
					displayContext: "chat-header",
					onSMBLabelMenuItemClick: v
				}, "edit-list"), t[34] = n, t[35] = v, t[36] = D) : D = t[36], k.push(D);
			} else {
				var x;
				t[37] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
					/*BTDS*/
					""
				), t[37] = x) : x = t[37];
				var $;
				t[38] !== v ? ($ = u.jsx(r("WDSMenuItem.react"), {
					testid: "dropdown-label-chat",
					onPress: v,
					Icon: o("WAWebLabelOutlineIcon.react").LabelOutlineIcon,
					title: x
				}, "label-chat"), t[38] = v, t[39] = $) : $ = t[39], k.push($);
			}
			var P;
			t[40] === Symbol.for("react.memo_cache_sentinel") ? (P = s._(
				/*BTDS*/
				""
			), t[40] = P) : P = t[40];
			var N;
			t[41] !== C || t[42] !== E ? (N = u.jsx(r("WDSMenuItem.react"), {
				testid: "dropdown-rename-broadcast",
				onPress: C,
				disabled: E,
				Icon: r("WDSIconIcEdit.react"),
				title: P
			}, "rename-broadcast"), t[41] = C, t[42] = E, t[43] = N) : N = t[43];
			var M;
			t[44] === Symbol.for("react.memo_cache_sentinel") ? (M = o("WAWebBizBroadcastsHomeStrings").getDeleteAudienceLabel(), t[44] = M) : M = t[44];
			var w;
			t[45] !== R ? (w = u.jsx(r("WDSMenuItem.react"), {
				testid: "dropdown-delete-broadcast",
				onPress: R,
				Icon: r("WDSIconIcDelete.react"),
				destructive: !0,
				title: M
			}, "delete-broadcast"), t[45] = R, t[46] = w) : w = t[46], k.push(N, w), t[23] = n, t[24] = R, t[25] = v, t[26] = h, t[27] = C, t[28] = E, t[29] = p, t[30] = k;
		} else k = t[30];
		var A;
		t[47] === Symbol.for("react.memo_cache_sentinel") ? (A = s._(
			/*BTDS*/
			""
		), t[47] = A) : A = t[47];
		var F;
		return t[48] !== k ? (F = u.jsx(r("WDSMenuBarItem.react"), {
			testid: "btn-audience-info-menu",
			icon: r("WDSIconIcMoreVert.react"),
			title: A,
			wdsMenuToRender: u.jsx(r("WDSMenu.react"), { children: k })
		}), t[48] = k, t[49] = F) : F = t[49], F;
	}
	function d() {
		return o("WAWebModalManager").ModalManager.close();
	}
	l.default = c;
}), 226);

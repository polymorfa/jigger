__d("WAWebMessageDebugMenuItems.react", [
	"WAWebChatGetters",
	"WAWebCmd",
	"WAWebCopyToClipboard",
	"WAWebDBUpdateMessageTable",
	"WAWebDebugGatingUtils",
	"WAWebDevIcon.react",
	"WAWebEphemeralityDurations",
	"WAWebFrontendMsgGetters",
	"WAWebMessageAssociationUIUtils",
	"WAWebMessageContextMenuActionsWamEvent",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebPollsSendVoteMsgAction",
	"WAWebProtobufsE2E.pb",
	"WAWebReactionsUtils",
	"WAWebRequestMediaReuploadBridge",
	"WAWebSendNonMessageDataRequest",
	"WAWebSendReactionMsgAction",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumMessageContextMenuActionType",
	"WAWebWamEnumMessageContextMenuOptionType",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"cr:10197",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		new (o("WAWebMessageContextMenuActionsWamEvent")).MessageContextMenuActionsWamEvent({
			isAGroup: o("WAWebChatGetters").getIsGroup(o("WAWebFrontendMsgGetters").getChat(e)),
			isMultiAction: !1,
			isOriginalSender: o("WAWebMsgGetters").getIsSentByMe(e),
			messageContextMenuAction: o("WAWebWamEnumMessageContextMenuActionType").MESSAGE_CONTEXT_MENU_ACTION_TYPE.CLICK,
			messageContextMenuOption: o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN
		}).commit();
	}
	function c(e) {
		var t = e.applyDuration, n = e.currentValue, o = e.keyPrefix, a = e.options, i = n != null ? n : 0;
		return a.map(function(e) {
			var n = e.label, a = e.value;
			return s.jsx(r("WDSMenuItem.react"), {
				title: n,
				isToggleable: !0,
				toggled: a === i,
				onPress: function() {
					t(a);
				},
				testid: "mi-msg-ephemerality-" + o + "-" + a
			}, o + "-" + a);
		});
	}
	function d(e) {
		if (!o("WAWebDebugGatingUtils").msgDebugMenuItemsEnabled()) return [];
		var t = [], a = [];
		a.push(s.jsx(r("WDSMenuItem.react"), {
			title: "Copy Msg ID",
			onPress: function() {
				o("WAWebCopyToClipboard").copyTextToClipboard(e.id.toString());
			},
			testid: "mi-msg-copy-id"
		}, "copy-id")), o("WAWebFrontendMsgGetters").getAsAlbum(e) && a.push(s.jsx(r("WDSMenuItem.react"), {
			title: "Copy Associated Msg ID's",
			onPress: function() {
				o("WAWebCopyToClipboard").copyTextToClipboard(o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(e.id).map(function(e) {
					return e.id.toString();
				}).join("\n"));
			},
			testid: "mi-msg-copy-associated-children-message-ids"
		}, "copy-associated-children-message-ids")), a.push(s.jsx(r("WDSMenuItem.react"), {
			title: "Copy Msg Protobuf",
			onPress: function() {
				var t = n("cr:10197") == null ? void 0 : n("cr:10197").getMessageByMsgId(e.id.id.toString());
				t != null && o("WAWebCopyToClipboard").copyTextToClipboard(t);
			},
			testid: "mi-msg-copy-content"
		}, "copy-content")), a.push(s.jsx(r("WDSMenuItem.react"), {
			title: "Report Bug",
			onPress: function() {
				var t = "Message ID: " + e.id.toString() + "\n";
				o("WAWebCmd").Cmd.trigger("trigger_bugreport_v2", { prefilledDescription: t });
			},
			testid: "mi-msg-report-bug"
		}, "report-bug"));
		var i = o("WAWebEphemeralityDurations").getDefaultEphemeralityDurations().filter(function(e) {
			return e.type === "default";
		}), l = [{
			type: "default",
			value: 0,
			label: o("WAWebEphemeralityDurations").durationToLabel(0)
		}].concat(o("WAWebEphemeralityDurations").getAfterReadEphemeralityDurations("asc"));
		a.push(s.jsx(r("WDSMenuItem.react"), {
			title: "Ephemerality",
			hasSubmenu: !0,
			submenuContent: s.jsxs(r("WDSMenu.react"), { children: [
				s.jsx(r("WDSMenuItem.react"), {
					title: "DM timer",
					hasSubmenu: !0,
					submenuContent: s.jsx(r("WDSMenu.react"), { children: c({
						applyDuration: function(n) {
							e.ephemeralDuration = n, o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, { ephemeralDuration: n });
						},
						currentValue: e.ephemeralDuration,
						keyPrefix: "dm",
						options: i
					}) }),
					testid: "mi-msg-ephemerality-dm"
				}, "ephemerality-dm"),
				s.jsx(r("WDSMenuItem.react"), {
					title: "AR timer",
					hasSubmenu: !0,
					submenuContent: s.jsx(r("WDSMenu.react"), { children: c({
						applyDuration: function(n) {
							e.afterReadDuration = n, o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, { afterReadDuration: n });
						},
						currentValue: e.afterReadDuration,
						keyPrefix: "ar",
						options: l
					}) }),
					testid: "mi-msg-ephemerality-ar"
				}, "ephemerality-ar"),
				s.jsx(r("WDSMenuItem.react"), {
					title: "Out of sync",
					isToggleable: !0,
					toggled: e.ephemeralOutOfSync === !0,
					onPress: function() {
						var t = e.ephemeralOutOfSync !== !0;
						e.ephemeralOutOfSync = t, o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, { ephemeralOutOfSync: t });
					},
					testid: "mi-msg-ephemerality-out-of-sync"
				}, "ephemerality-out-of-sync")
			] }),
			testid: "mi-msg-ephemerality"
		}, "ephemerality-submenu")), o("WAWebFrontendMsgGetters").getAsMms(e) && (e.deprecatedMms3Url != null && (a.push(s.jsx(r("WDSMenuItem.react"), {
			title: "Copy Mms3 Url",
			onPress: function() {
				o("WAWebCopyToClipboard").copyTextToClipboard(e.deprecatedMms3Url || "");
			},
			testid: "mi-msg-mms3-url"
		}, "copy-mms3-url")), a.push(s.jsx(r("WDSMenuItem.react"), {
			title: "Trigger RMR",
			onPress: function() {
				r("WAWebRequestMediaReuploadBridge")(e).catch(function() {
					o("WAWebToastManager").ToastManager.open(s.jsx(o("WAWebToast.react").Toast, { msg: "Failed to trigger media reupload (RMR)." }));
				});
			},
			testid: "mi-msg-trigger-rmr"
		}, "trigger-rmr"))), a.push(s.jsx(r("WDSMenuItem.react"), {
			title: "Copy Media filehash",
			onPress: function() {
				o("WAWebCopyToClipboard").copyTextToClipboard(e.filehash || "");
			},
			testid: "mi-msg-copy-filehash"
		}, "copy-filehash")));
		var d = o("WAWebFrontendMsgGetters").getAsPollCreation(e);
		return d && a.push(s.jsx(r("WDSMenuItem.react"), {
			title: "Vote spam perf test",
			onPress: function() {
				var t = self.setInterval(function() {
					var e = new Set();
					for (var t of d.pollOptions) Math.random() > .5 && e.add(t.localId);
					o("WAWebPollsSendVoteMsgAction").sendVote(d, e);
				}, 250);
				self.setTimeout(function() {
					self.clearInterval(t);
				}, 60 * 1e3), u(e);
			}
		}, "add-random-vote-spam")), o("WAWebReactionsUtils").canReactToMessage(e) && a.push(s.jsx(r("WDSMenuItem.react"), {
			title: "Reaction spam perf test",
			onPress: function() {
				var t = self.setInterval(function() {
					o("WAWebSendReactionMsgAction").sendReactionToMsg(e, Math.random() > .5 ? "👍" : "👎");
				}, 250);
				self.setTimeout(function() {
					self.clearInterval(t);
				}, 60 * 1e3), u(e);
			}
		}, "add-random-reaction-spam")), e.type === o("WAWebMsgType").MSG_TYPE.VIDEO && a.push(s.jsx(r("WDSMenuItem.react"), {
			title: "Convert into PTV",
			onPress: function() {
				e.type = "ptv";
			}
		}, "convert-into-ptv")), e.type === o("WAWebMsgType").MSG_TYPE.PTV && a.push(s.jsx(r("WDSMenuItem.react"), {
			title: "Convert into Video",
			onPress: function() {
				e.type = "video";
			}
		}, "convert-into-video")), a.length > 0 && t.push(s.jsx(r("WDSMenuItem.react"), {
			title: "Developer",
			Icon: o("WAWebDevIcon.react").DevIcon,
			submenuContent: s.jsx(r("WDSMenu.react"), { children: a }),
			hasSubmenu: !0
		}, "developer-submenu")), t;
	}
	l.getWAWebMessageDebugMenuItems = d;
}), 98);

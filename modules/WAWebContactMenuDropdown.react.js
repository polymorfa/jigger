__d("WAWebContactMenuDropdown.react", [
	"fbt",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebAddContactLabel",
	"WAWebBizAiAgentGating",
	"WAWebBizAiAgentStatusUtils",
	"WAWebBizCatalogGatingUtils",
	"WAWebBlockContactUtils",
	"WAWebBlockContants",
	"WAWebChatAssignmentLogEvents.flow",
	"WAWebChatContextMenuItemEditLabel.react",
	"WAWebChatContextMenuItemEditList.react",
	"WAWebChatContextMenuItemLock.react",
	"WAWebChatEphemerality",
	"WAWebChatGetters",
	"WAWebChatThemeGatingUtils",
	"WAWebChatThreadLogging",
	"WAWebCmd",
	"WAWebCommonMsgUtils",
	"WAWebContactCollection",
	"WAWebContactEditUtils",
	"WAWebContactGetters",
	"WAWebContactLogging",
	"WAWebContactManagementGating",
	"WAWebContactUtils",
	"WAWebCopyUtils",
	"WAWebDebugConvertToLidChatModal.react",
	"WAWebDeleteMenuItem.react",
	"WAWebDevOnlyBadge.react",
	"WAWebExportChatMenuItem.react",
	"WAWebFeatureFlagName",
	"WAWebFrontendChatGetters",
	"WAWebFrontendContactGetters",
	"WAWebGenAiAgentLogEvents",
	"WAWebInboxFiltersGatingUtils",
	"WAWebL10NIsUsingSupportedBritishEnglishLocale",
	"WAWebListsGatingUtils",
	"WAWebMessageLogQplEvents",
	"WAWebModalManager",
	"WAWebMuteGetters",
	"WAWebMuteMenuItem.react",
	"WAWebMuteUtils",
	"WAWebPreCallUserJourneyLogger",
	"WAWebProtobufsE2E.pb",
	"WAWebReportContactDialogUtils",
	"WAWebSchedulingCallsNotSupportedModal.react",
	"WAWebSendNonMessageDataRequest",
	"WAWebSharableEventGatingUtils",
	"WAWebShowDeleteAiThreadConfirmation",
	"WAWebSpamConstants",
	"WAWebStateUtils",
	"WAWebStreamModel",
	"WAWebSyncGatingUtils",
	"WAWebUnfavoriteRefreshedIcon.react",
	"WAWebVoipCallsTabScheduleCallModal.react",
	"WAWebVoipCreateCallLinksPopupLoadable.react",
	"WAWebVoipGatingUtils",
	"WAWebVoipNewGroupCallContactPicker.react",
	"WAWebWamEnumEphemeralSettingEntryPointType",
	"WAWebWamEnumFavoritesUpdateEntryPoint",
	"WAWebWamEnumMuteEntryPoint",
	"WAWebWamEnumPsaMessageRemoveEntryPoint",
	"WAWebWamEnumSubSurface",
	"WDSIconIcBlock.react",
	"WDSIconIcCalendarMonth.react",
	"WDSIconIcCancel.react",
	"WDSIconIcCheckBox.react",
	"WDSIconIcContentCopy.react",
	"WDSIconIcDelete.react",
	"WDSIconIcDoNotDisturbOn.react",
	"WDSIconIcFavorite.react",
	"WDSIconIcInfo.react",
	"WDSIconIcLink.react",
	"WDSIconIcPalette.react",
	"WDSIconIcPersonAdd.react",
	"WDSIconIcSearch.react",
	"WDSIconIcThumbDown.react",
	"WDSIconWdsIcAiFilled.react",
	"WDSIconWdsIcDisappearingMessages.react",
	"WDSIconWdsIcTransferOwnership.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"cr:23046",
	"gkx",
	"react",
	"useWAWebABPropConfigValue",
	"useWAWebChatValues",
	"useWAWebContactValues",
	"useWAWebForceUpdate",
	"useWAWebGetFeatureFlag",
	"useWAWebListener",
	"useWAWebMuteValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useMemo, _ = (e = n("cr:23046")) != null ? e : {}, f = _.isWindowsHybridEnabled;
	function g(e, t, n) {
		var r = e.id;
		return t && n === 1 && !r.isBot() && !r.isAiHub() && !r.isSupportAccount() && !r.isCAPISupportAccount() && e.canSend && !e.isSuspendedOrTerminated();
	}
	function h(e) {
		"use no forget";
		var t, n, a, i = e.chat, l = e.enableChatThreadLogging, u = e.onSearchChat, d = e.onSelectMessages, _ = e.threadId, h = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), y = p(function() {
			return new (o("WAWebPreCallUserJourneyLogger")).PreCallUserJourneyLogger();
		}, []), C = o("useWAWebChatValues").useChatValues(e.chat.id, [
			(t = o("WAWebChatGetters")).getIsPSA,
			(n = o("WAWebFrontendChatGetters")).getMute,
			t.getId,
			n.getContact,
			n.getPromises,
			t.getIsNewsletter,
			n.getIsParentGroup,
			t.getIsUser,
			t.getTcToken,
			t.getTcTokenTimestamp,
			n.getMsgs,
			n.getIsFavorite,
			t.getChangeNumberNewJid
		]), b = C[0], v = C[1], S = C[2], R = C[3], L = C[4], E = C[5], k = C[6], I = C[7], T = C[8], D = C[9], x = C[10], $ = C[11], P = C[12], N = o("useWAWebContactValues").useContactValues(i.contact.id, [
			(a = o("WAWebContactGetters")).getId,
			a.getIsBusiness,
			a.getName,
			o("WAWebFrontendContactGetters").getIsContactBlocked,
			a.getIsMe,
			o("WAWebFrontendContactGetters").getIsMyContact
		]), M = N[0], w = N[1], A = N[2], F = N[3], O = N[4], B = N[5], W = o("useWAWebMuteValues").useMuteValues(i.id, [o("WAWebMuteGetters").getIsMuted]), q = W[0], U = o("useWAWebABPropConfigValue").useABPropConfigValue("ai_learning_clear_chat_disable_empty_chats"), V = o("useWAWebABPropConfigValue").useABPropConfigValue("enable_unified_call_buttons_in_chat"), H = o("useWAWebABPropConfigValue").useABPropConfigValue("unified_calling_entry_point_desktop_type");
		o("useWAWebListener").useListener(o("WAWebStreamModel").Stream, "change:displayInfo", h), m(function() {
			l === !0 && o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([{
				activityType: "chatOverflowClicks",
				ts: o("WATimeUtils").unixTime(),
				chatId: S
			}]);
		}, [l, S]);
		var G = r("useWAWebGetFeatureFlag")(o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT).enabled, z = function() {
			o("WAWebReportContactDialogUtils").openReportContactPopup(i, o("WAWebSpamConstants").SpamFlow.OverflowMenuReport);
		}, j = function() {
			o("WAWebCmd").Cmd.ephemeralDrawer(o("WAWebStateUtils").unproxy(e.chat), !1, o("WAWebWamEnumEphemeralSettingEntryPointType").EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_OVERFLOW);
		}, K = function() {
			var t = [];
			if (I && !B && o("WAWebContactUtils").canSaveAsMyContact(i.contact.id) && o("WAWebContactManagementGating").addContactChatHeaderEnabled()) {
				var n, a = P != null && (n = o("WAWebContactCollection").ContactCollection.get(P)) != null ? n : i.contact;
				t.push(c.jsx(r("WDSMenuItem.react"), {
					Icon: r("WDSIconIcPersonAdd.react"),
					title: o("WAWebAddContactLabel").getAddToContactsLabel(),
					onPress: function() {
						return o("WAWebContactEditUtils").openContactEditDrawer(o("WAWebContactUtils").getContactDataFromContactModel(a), o("WAWebContactLogging").ContactSourceType.ChatHeaderMenu);
					},
					testid: "mi-add-contact"
				}, "addContact")), t.push(c.jsx(r("WDSMenuItem.react"), { type: "separator" }, "addContactSeparator"));
			}
			var l = s._(
				/*BTDS*/
				""
			), m = o("WAWebBizAiAgentStatusUtils").isChatEligibleForAiAgent(i) && (!i.canSend || !o("WAWebBizAiAgentGating").isSmartComposerWebEnabled());
			m && t.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconWdsIcAiFilled.react"),
				title: l,
				onPress: function() {
					o("WAWebGenAiAgentLogEvents").logClickGenAiAgentAiReplies(), o("WAWebCmd").Cmd.changeAiReplyStatus(i, !0);
				},
				testid: "mi-ai-replies"
			}, "aiReplies"));
			var p = s._(
				/*BTDS*/
				""
			);
			G && t.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconWdsIcTransferOwnership.react"),
				title: p,
				onPress: function() {
					o("WAWebCmd").Cmd.assignChat(i, o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.CONVERSATION_MENU);
				},
				testid: "mi-assign-chat"
			}, "assignChat"));
			var h = m || G;
			h && t.push(c.jsx(r("WDSMenuItem.react"), { type: "separator" }));
			var C = s._(
				/*BTDS*/
				""
			);
			b || t.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcInfo.react"),
				title: C,
				onPress: function() {
					w && o("WAWebMessageLogQplEvents").qplStartProfileView("ToolsMenu"), o("WAWebCmd").Cmd.chatInfoDrawer(i);
				},
				testid: "menu-item-chat-info"
			}, "info"));
			var R = s._(
				/*BTDS*/
				""
			);
			if (w && o("WAWebBizCatalogGatingUtils").canSeeECommerceComplianceIndiaSoftEnforcement(M) && t.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcInfo.react"),
				title: R,
				onPress: function() {
					return o("WAWebCmd").Cmd.merchantDetailsDrawer(M);
				},
				testid: "merchant-details"
			}, "merchantDetails")), o("WAWebABProps").getABPropConfigValue("wa_web_chat_search_entrypoint")) {
				var L = s._(
					/*BTDS*/
					""
				);
				t.push(c.jsx(r("WDSMenuItem.react"), {
					Icon: r("WDSIconIcSearch.react"),
					title: L,
					onPress: u,
					testid: "mi-search-chat"
				}, "search"));
			}
			var E = s._(
				/*BTDS*/
				""
			);
			t.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcCheckBox.react"),
				title: E,
				onPress: d,
				testid: "mi-select-messages"
			}, "select")), o("WAWebMuteUtils").canMute(v) && t.push(c.jsx(r("WAWebMuteMenuItem.react"), {
				isMuted: q,
				onMute: function(t) {
					o("WAWebCmd").Cmd.muteChatFromEntryPoint(i, t, o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONVERSATION_SCREEN);
				},
				onMuteWithDuration: function(t) {
					o("WAWebCmd").Cmd.muteChatWithDuration(i, t);
				},
				chat: i
			}, "mute"));
			var k = s._(
				/*BTDS*/
				""
			);
			if (o("WAWebChatEphemerality").shouldShowEphemeralSetting(e.chat) && t.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconWdsIcDisappearingMessages.react"),
				title: k,
				onPress: j,
				testid: "mi-disappearing-messages"
			}, "disappearingMessages")), !S.isBot() && !S.isAiHub() && t.push(c.jsx(r("WAWebChatContextMenuItemLock.react"), { chat: i }, "Lock")), o("WAWebChatThemeGatingUtils").isChatThemesEnabled()) {
				var T = s._(
					/*BTDS*/
					""
				);
				t.push(c.jsx(r("WDSMenuItem.react"), {
					Icon: r("WDSIconIcPalette.react"),
					title: T,
					onPress: function() {
						return o("WAWebCmd").Cmd.chatThemeDrawer(i);
					},
					testid: "mi-chat-theme"
				}, "chatTheme"));
			}
			if (i.canToggleFavorite() && o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
				var D, x;
				$ ? (x = o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale() ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				), D = o("WAWebUnfavoriteRefreshedIcon.react").UnfavoriteRefreshedIcon) : (x = o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale() ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				), D = r("WDSIconIcFavorite.react")), t.push(c.jsx(r("WDSMenuItem.react"), {
					Icon: D,
					title: x,
					onPress: function() {
						return o("WAWebCmd").Cmd.favoriteChat(i, !$, o("WAWebWamEnumFavoritesUpdateEntryPoint").FAVORITES_UPDATE_ENTRY_POINT.CHAT_HEADER_CONTEXT_MENU);
					},
					testid: "mi-favorite"
				}, "favorite"));
			}
			if (o("WAWebListsGatingUtils").isListsEnabled() && !S.isBot() && !S.isAiHub()) {
				var N = function() {
					o("WAWebChatContextMenuItemEditLabel.react").checkDataSharingOrHandleLabelAction(i);
				};
				t.push(c.jsx(r("WAWebChatContextMenuItemEditList.react"), {
					chat: i,
					displayContext: "chat-header",
					onSMBLabelMenuItemClick: N
				}));
			}
			var A = s._(
				/*BTDS*/
				""
			), W = e.container;
			o("WAWebCopyUtils").canCopySelection() && W != null && t.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcContentCopy.react"),
				title: A,
				onPress: function() {
					o("WAWebCopyUtils").copySelection(W);
				},
				testid: "mi-copy-selection"
			})), t.push(c.jsx(r("WAWebExportChatMenuItem.react"), { chat: i }, "export"));
			var K = s._(
				/*BTDS*/
				""
			);
			if (t.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcCancel.react"),
				title: K,
				onPress: function() {
					return o("WAWebCmd").Cmd.closeChat(i);
				},
				testid: "mi-close-chat"
			}, "close")), g(i, V, H)) {
				t.push(c.jsx(r("WDSMenuItem.react"), { type: "separator" }));
				var Q = s._(
					/*BTDS*/
					""
				);
				if (t.push(c.jsx(r("WDSMenuItem.react"), {
					Icon: r("WDSIconIcLink.react"),
					title: Q,
					onPress: function() {
						y.clickCreateVideoCallLinkChatThread(o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU), o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebVoipCreateCallLinksPopupLoadable.react").WAWebVoipCreateCallLinksPopupLoadable, { targetChat: i }));
					},
					testid: "mi-send-call-link"
				}, "send-call-link")), (f == null ? void 0 : f()) === !0) {
					var X = s._(
						/*BTDS*/
						""
					);
					t.push(c.jsx(r("WDSMenuItem.react"), {
						Icon: r("WDSIconIcCalendarMonth.react"),
						title: X,
						onPress: function() {
							o("WAWebSharableEventGatingUtils").isSharableScheduledCallCreationEnabled(o("WAWebSharableEventGatingUtils").SharableScheduledCallCreationEntryPoint.IndividualChat) && !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled() ? o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebSchedulingCallsNotSupportedModal.react").SchedulingCallsNotSupportedModal, {})) : (y.clickCreateEventChatThread(o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU), o("WAWebVoipCallsTabScheduleCallModal.react").handleScheduleCallForChat(i));
						},
						testid: "mi-schedule-call"
					}, "schedule-call"));
				}
				if (o("WAWebVoipGatingUtils").isGroupCallingEnabled()) {
					var Y = s._(
						/*BTDS*/
						""
					);
					t.push(c.jsx(r("WDSMenuItem.react"), {
						Icon: r("WDSIconIcPersonAdd.react"),
						title: Y,
						onPress: function() {
							y.clickAddContact(o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU), o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
								chat: i,
								showCallTypeButtons: !0
							}));
						},
						testid: "mi-new-group-call"
					}, "new-group-call"));
				}
			}
			t.push(c.jsx(r("WDSMenuItem.react"), { type: "separator" }));
			var J = s._(
				/*BTDS*/
				""
			);
			if (!O) {
				!b && !S.isBot() && !S.isAiHub() && t.push(c.jsx(r("WDSMenuItem.react"), {
					Icon: r("WDSIconIcThumbDown.react"),
					title: J,
					onPress: z,
					testid: "mi-report",
					destructive: !0
				}, "report"));
				var Z = s._(
					/*BTDS*/
					""
				), ee = s._(
					/*BTDS*/
					""
				);
				!S.isBot() && !S.isAiHub() && t.push(c.jsx(r("WDSMenuItem.react"), {
					Icon: r("WDSIconIcBlock.react"),
					title: F ? Z : ee,
					onPress: F ? function() {
						return o("WAWebBlockContactUtils").handleUnblock(i.contact, o("WAWebBlockContants").BlockEntryPoint.OverflowMenuBlock);
					} : function() {
						return o("WAWebBlockContactUtils").handleBlock(i, o("WAWebBlockContants").BlockEntryPoint.OverflowMenuBlock);
					},
					testid: F ? "mi-unblock" : "mi-block",
					destructive: !0
				}, "block"));
			}
			var te = s._(
				/*BTDS*/
				""
			), ne = i.msgs.getModelsArray().some(function(e) {
				return !o("WAWebCommonMsgUtils").isNotificationType(e.type, e.subtype);
			});
			if (_ == null && t.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcDoNotDisturbOn.react"),
				title: te,
				onPress: function() {
					return o("WAWebCmd").Cmd.clearChat(i);
				},
				testid: "mi-clear",
				destructive: !0,
				disabled: U && !ne
			}, "clear")), _ != null && S.isBot() ? t.push(c.jsx(r("WDSMenuItem.react"), {
				testid: "mi-delete-thread",
				onPress: function() {
					return o("WAWebShowDeleteAiThreadConfirmation").showDeleteAiThreadConfirmation(S, _, !0);
				},
				Icon: r("WDSIconIcDelete.react"),
				title: s._(
					/*BTDS*/
					""
				),
				destructive: !0
			}, "delete")) : t.push(c.jsx(r("WAWebDeleteMenuItem.react"), {
				onDeleteOrExit: function() {
					return o("WAWebCmd").Cmd.deleteOrExitChatFromEntryPoint(i, o("WAWebWamEnumPsaMessageRemoveEntryPoint").PSA_MESSAGE_REMOVE_ENTRY_POINT.DELETE_ALL_FROM_CONVERSATION);
				},
				chat: i
			}, "delete")), !r("gkx")("26258")) {
				var re = o("WAWebFrontendChatGetters").getKind(i);
				t.push.apply(t, o("WAWebDevOnlyBadge.react").getDEVChatMenuOptions(S, re)), S.isRegularUserPn() && t.push(c.jsx(r("WAWebDebugConvertToLidChatModal.react"), { chat: i }, "convertToLid"));
			}
			return t;
		};
		return c.jsx(r("WDSMenu.react"), { children: K() });
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);

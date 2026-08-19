__d("WAWebActionListener", [
	"fbt",
	"JSResourceForInteraction",
	"WAAbortError",
	"WALogger",
	"WAPromiseDelays",
	"WAWebABProps",
	"WAWebAIAgentAIReplyUtils",
	"WAWebActionListenerHelpers",
	"WAWebActionToast.react",
	"WAWebAddToFavoritesAction",
	"WAWebBizAiAgentStatusUtils",
	"WAWebBizAiRepliesControlPopup.react",
	"WAWebBizChatAssignmentAiRepliesModal.react",
	"WAWebBizChatAssignmentModal.react",
	"WAWebBizMerchantDetailsEntityTypePopup.react",
	"WAWebBusinessMuteWamEvent",
	"WAWebBusinessUnmuteWamEvent",
	"WAWebChatAssignmentLogEvents.flow",
	"WAWebChatAssignmentUtils",
	"WAWebChatEphemerality",
	"WAWebChatGetters",
	"WAWebChatMuteLogger",
	"WAWebChatSendMessages",
	"WAWebClearChatDialogV2.react",
	"WAWebClearChatPopup.react",
	"WAWebClearSelectedChatsPopup.react",
	"WAWebCmd",
	"WAWebCommandPalette.react",
	"WAWebConfirmPopup.react",
	"WAWebCountrySelectorPopup.react",
	"WAWebDeleteChatDialogV2.react",
	"WAWebDeleteChatPopup.react",
	"WAWebDrawerManager",
	"WAWebEventInfoFlowLoadable",
	"WAWebGroupsV4InviteFlowLoadable",
	"WAWebHeader.react",
	"WAWebKeyboardTabUtils",
	"WAWebLazyLoadedRetriable",
	"WAWebMessageAssociationUIUtils",
	"WAWebMiscErrors",
	"WAWebMmSignalSharingLoggingEvents",
	"WAWebModalManager",
	"WAWebMsgActionCapability",
	"WAWebMsgGetters",
	"WAWebMsgModelUtils",
	"WAWebMsgType",
	"WAWebMuteCollection",
	"WAWebMuteExpirations",
	"WAWebMutePopup.react",
	"WAWebNewsletterRevokeMsgAction",
	"WAWebNoop",
	"WAWebProductCatalogProductImageViewFlow.react",
	"WAWebQplFlowWrapper",
	"WAWebRemoveFromFavoritesAction",
	"WAWebSendMsgResultAction",
	"WAWebSendProductModalLoadable",
	"WAWebSetArchiveChatAction",
	"WAWebSetPinChatAction",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUpdateUnreadChatAction",
	"WAWebUserPrefsGeneral",
	"WAWebWamChatPSALogger",
	"WAWebWamEnumMuteEntryPoint",
	"WAWebWamEnumProfileEntryPoint",
	"WDSDialogBridge",
	"countWhere",
	"err",
	"gkx",
	"isStringNullOrEmpty",
	"qpl",
	"react",
	"useWAWebBotActionListeners",
	"useWAWebCommunityActionListeners",
	"useWAWebListener",
	"useWAWebNewsletterActionListeners",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = r("qpl")._(701183376, "3423");
	function p(t) {
		var n, a, i = t.activeNavBarItem, l = t.updateActiveNavBarItem, c = r("useWAWebUIM")(), p = function(t) {
			var e = t.onSend, n = t.product;
			o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebSendProductModalLoadable").SendProductModalLoadable, {
				product: n,
				onSend: e
			}), {
				transition: "modal-flow",
				uim: c
			});
		}, _ = function(t, n) {
			o("WAWebModalManager").ModalManager.openMedia(d.jsx(r("WAWebProductCatalogProductImageViewFlow.react"), {
				activeProductImage: t.activeProductImage,
				productImageCollection: t.productImageCollection,
				getZoomNode: t.getZoomNode,
				product: t.product,
				sessionId: n
			}), {
				transition: "media-viewer",
				uim: c
			});
		}, f = function(t, n, r, a, i) {
			o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebGroupsV4InviteFlowLoadable").GroupsV4InviteFlowLoadable, {
				participantNeedInvite: t,
				groupGid: n,
				subject: r,
				groupDesc: a,
				onFinish: i
			}));
		}, g = function(t) {
			o("WAWebHeader.react").openInfoPanel({
				chat: t,
				profileEntryPoint: o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.NOTIFICATION_BLOCK_ACTION,
				uim: c
			});
		}, h = function(t, n, a, i, l) {
			if (i === void 0 && (i = !0), l === void 0 && (l = !0), n) {
				var e = function(n, r, i) {
					var e = i === 1 ? o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CHAT_LIST_SCREEN : i === 2 ? o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONTACT_INFO : o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONVERSATION_SCREEN, s = r === 1 / 0 ? -1 : r;
					o("WAWebChatGetters").getIsPSA(t) && a !== 0 ? o("WAWebWamChatPSALogger").logChatPSAMute(e, s) : !o("WAWebChatGetters").getIsPSA(t) && !o("WAWebChatGetters").getIsNewsletter(t) && o("WAWebChatMuteLogger").logChatMute(t, e, s), t.pendingAction++, t.mute.mute({
						expiration: n,
						sendDevice: !0,
						showToast: l
					}).finally(function() {
						t.pendingAction--;
					}), (t.isBusinessGroup() || t.contact.isBusiness) && new (o("WAWebBusinessMuteWamEvent")).BusinessMuteWamEvent().commit(), o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingUserMuteEvent({ chat: t });
				};
				if (i) {
					var u = s._(
						/*BTDS*/
						""
					);
					o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebMutePopup.react"), {
						title: u,
						mute: t.mute,
						onMute: e,
						entryPoint: a,
						children: s._(
							/*BTDS*/
							""
						)
					}), {
						transition: "modal",
						uim: c
					});
				} else {
					var m = Number.POSITIVE_INFINITY, p = o("WAWebMuteExpirations").calculateMuteExpiration(m);
					e(p, m, a != null ? a : 0);
				}
			} else {
				t.pendingAction++, t.mute.unmute({
					sendDevice: !0,
					showToast: l
				}).finally(function() {
					t.pendingAction--;
				});
				var _ = a === 1 ? o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CHAT_LIST_SCREEN : a === 2 ? o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONTACT_INFO : o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONVERSATION_SCREEN;
				o("WAWebChatGetters").getIsPSA(t) && a !== 0 ? o("WAWebWamChatPSALogger").logChatPSAUnmute(_) : !o("WAWebChatGetters").getIsPSA(t) && !o("WAWebChatGetters").getIsNewsletter(t) && o("WAWebChatMuteLogger").logChatUnmute(t, _), (t.isBusinessGroup() || t.contact.isBusiness) && new (o("WAWebBusinessUnmuteWamEvent")).BusinessUnmuteWamEvent().commit();
			}
		}, y = function(t, n, a) {
			if (t) {
				var e = s._(
					/*BTDS*/
					"",
					[s._plural(t.length)]
				);
				if (n) {
					var i = function(n, r, o) {
						t.forEach(function(e) {
							e.pendingAction++, e.mute.mute({
								expiration: n,
								sendDevice: !0,
								fromMultiselect: !0
							}).finally(function() {
								e.pendingAction--;
							});
						}), a();
					};
					o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebMutePopup.react"), {
						title: e,
						mute: t[0].mute,
						onMute: i
					}), {
						transition: "modal",
						uim: c
					});
				} else t.forEach(function(e) {
					e.pendingAction++, e.mute.unmute({
						sendDevice: !0,
						fromMultiselect: !0
					}).finally(function() {
						e.pendingAction--;
					});
				}), a();
			}
		}, C = function(t, n, r, o) {
			return h(t, n, 0, r, o);
		}, b = function(t, n) {
			var e = o("WAWebMuteExpirations").calculateMuteExpiration(n);
			o("WAWebUserPrefsGeneral").setLastChatMuteDuration(n), t.pendingAction++, t.mute.mute({
				expiration: e,
				sendDevice: !0
			}).finally(function() {
				t.pendingAction--;
			}), (t.isBusinessGroup() || t.contact.isBusiness) && new (o("WAWebBusinessMuteWamEvent")).BusinessMuteWamEvent().commit(), o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingUserMuteEvent({ chat: t });
		}, v = function(t) {
			var e = o("WAWebABProps").getABPropConfigValue("wa_web_enable_granular_notifications");
			e || (o("WAWebMuteCollection").MuteCollection.setGlobalNotificationReactionsEnabled(t), o("WAWebMuteCollection").MuteCollection.setGlobalGroupNotificationReactionsEnabled(t), o("WAWebMuteCollection").MuteCollection.setGlobalStatusNotificationReactionsEnabled(t));
		}, S = function(t, n, a) {
			a === void 0 && (a = !1);
			var e = s._(
				/*BTDS*/
				""
			), i = s._(
				/*BTDS*/
				""
			), l = s._(
				/*BTDS*/
				""
			);
			if (n) {
				var u = function(n, r) {
					t.mute({ expiration: n }), v(!1), o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
						msg: o("WAWebActionListenerHelpers").getMuteAllDurationLabel(r),
						id: o("WAWebToast.react").genId()
					}));
				};
				o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebMutePopup.react"), {
					mute: t,
					title: e,
					onMute: u
				}), {
					transition: "modal",
					uim: c
				});
			} else {
				if (a) {
					t.unmute(), v(!0);
					return;
				}
				var m = function() {
					t.unmute(), v(!0), o("WAWebModalManager").ModalManager.close(), o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
						msg: i,
						id: o("WAWebToast.react").genId()
					}));
				};
				o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					onOK: m,
					okText: s._(
						/*BTDS*/
						""
					),
					onCancel: o("WAWebModalManager").closeModalManager,
					cancelText: s._(
						/*BTDS*/
						""
					),
					children: l
				}));
			}
		}, R = function(t, n) {
			var e = function(r) {
				if (t.pendingAction++, o("WAWebChatGetters").getIsPSA(t) && n !== 0) {
					var e = t.msgs.last();
					o("WAWebWamChatPSALogger").logChatPSARemove(e, 6, n);
				}
				r.finally(function() {
					t.pendingAction--;
				});
			};
			o("WAWebABProps").getABPropConfigValue("wds_web_dialog") ? o("WDSDialogBridge").openWDSDialog(d.jsx(r("WAWebDeleteChatDialogV2.react"), {
				chat: t,
				onDeleteOrExit: e
			})) : o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebDeleteChatPopup.react"), {
				chat: t,
				onDeleteOrExit: e
			}), {
				transition: "modal",
				uim: c
			});
		}, L = function(t) {
			R(t, 0);
		}, E = function(t, n) {
			t.pendingAction++, o("WAWebSetPinChatAction").setPin(t, n).catch(r("WAWebNoop")).finally(function() {
				t.pendingAction--;
			});
		}, k = function(t, n, a) {
			t.pendingAction++, n ? o("WAWebAddToFavoritesAction").addToFavoritesAction([t.id], { entryPoint: a }).catch(r("WAWebNoop")).finally(function() {
				t.pendingAction--;
			}) : o("WAWebRemoveFromFavoritesAction").removeFromFavoritesAction(t.id, { entryPoint: a }).catch(r("WAWebNoop")).finally(function() {
				t.pendingAction--;
			});
		}, I = function(t) {
			o("WAWebABProps").getABPropConfigValue("wds_web_dialog") ? o("WDSDialogBridge").openWDSDialog(d.jsx(r("WAWebClearChatDialogV2.react"), { chat: t })) : o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebClearChatPopup.react"), { chat: t }), {
				transition: "modal",
				uim: c
			});
		}, T = function(t, n) {
			o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebClearSelectedChatsPopup.react"), {
				chats: t,
				onComplete: n
			}), {
				transition: "modal",
				uim: c
			});
		}, D = function(t) {
			var e = t.archive, n = t.chat, a = t.entryPoint, i = t.showToast;
			if (o("WAWebChatGetters").getIsPSA(n) && a !== 0 && n.msgs.length > 0) {
				var l = n.msgs.last();
				o("WAWebWamChatPSALogger").logChatPSARemove(l, e ? 3 : 4, a);
			}
			n.pendingAction++, o("WAWebSetArchiveChatAction").setArchive(n, e, i).catch(r("WAWebNoop")).finally(function() {
				n.pendingAction--;
			});
		}, x = function(t) {
			var e = t.archive, n = t.chat, r = t.showToast;
			D({
				archive: e,
				chat: n,
				entryPoint: 0,
				showToast: r
			});
		}, $ = function(t, n) {
			t.pendingAction++, o("WAWebUpdateUnreadChatAction").markUnread(t, n).finally(function() {
				t.pendingAction--;
			});
		}, P = function(t, n) {
			if (!t || t.some(function(e) {
				return !e.id;
			})) throw new (o("WAWebMiscErrors")).ActionError();
			var e = r("isStringNullOrEmpty")(n) ? o("WAWebActionToast.react").genId() : n;
			o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
				id: e,
				msg: s._(
					/*BTDS*/
					"",
					[s._plural(t.length)]
				)
			}));
		}, N = function(t, n) {
			if (o("WAWebChatAssignmentUtils").canAssignChat(t) === !1) {
				o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebBizChatAssignmentAiRepliesModal.react"), { chat: t }));
				return;
			}
			var e = o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.getName(n);
			o("WAWebQplFlowWrapper").QPL.markerStart(m, { annotations: { string: { CHAT_ASSIGNMENT_ENTRY_POINT: e } } }), o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebBizChatAssignmentModal.react"), {
				chats: [t],
				entryPoint: n
			}));
		}, M = function(t, n) {
			o("WAWebBizAiAgentStatusUtils").isChatEligibleForAiAgent(t) && (n ? o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebBizAiRepliesControlPopup.react"), { chat: t })) : o("WAWebAIAgentAIReplyUtils").mutateAiReplyStatus(t));
		}, w = function(n, a, i, l, u, c) {
			u === void 0 && (u = "LEFT");
			var t = a.list;
			if (!t || t.some(function(e) {
				return !e.id;
			})) return Promise.reject(new (o("WAWebMiscErrors")).ActionError());
			var m = r("isStringNullOrEmpty")(l) ? o("WAWebActionToast.react").genId() : l, p = t.length, _ = new AbortController(), f = _.signal, g;
			if (a.type !== "addon") {
				o("WAWebActionListenerHelpers").logSnackbarDeleteUndoMetric(n, a, "shown"), a.list.forEach(function(e) {
					e.pendingDeleteForMe = !0, o("WAWebMsgModelUtils").hideParentMessageInChat(e, { duringDetach: !1 });
					var t = o("WAWebMsgGetters").getBotPluginSearchProvider(e), n = !!(t == null && o("WAWebMsgGetters").getBotPluginMaybeParent(e)), r = o("WAWebMsgGetters").getBotResponseTargetId(e);
					(n || t != null && r != null) && o("WAWebCmd").Cmd.botTogglePluginSearchDetailsToggle(r, !1);
				}), n.pendingDeleteForMeCount += a.list.length;
				var h = s._(
					/*BTDS*/
					"",
					[s._plural(p, "number_of_messages")]
				), y = p === 1 ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					"",
					[s._plural(p, "number_of_messages")]
				), C = c === "mediaHub" ? h : y;
				g = new (o("WAWebActionToast.react")).ActionType(C, {
					actionText: s._(
						/*BTDS*/
						""
					),
					actionHandler: async function() {
						_.abort(), a.list.forEach(function(e) {
							e.pendingDeleteForMe = !1;
						}), o("WAWebMessageAssociationUIUtils").makeParentMessagesVisibleInChat(a.list), n.pendingDeleteForMeCount -= a.list.length, o("WAWebActionListenerHelpers").logSnackbarDeleteUndoMetric(n, a, "undo"), await P(a.list, m);
					}
				});
			} else g = new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				"",
				[s._plural(p)]
			));
			var b = Promise.resolve();
			return a.type !== "addon" && (b = b.then(function() {
				return o("WAPromiseDelays").delayMs(o("WAWebActionListenerHelpers").MESSAGE_DELETE_DELAY_DURATION);
			})), b = b.then(function() {
				if (f.aborted) throw new (o("WAAbortError")).AbortError();
				return o("WAWebChatSendMessages").sendDeleteMsgs({
					chat_: n,
					clearMedia: i,
					record: a
				});
			}).then(function(e) {
				if (n.pendingDeleteForMeCount -= e, e === p) return o("WAWebActionListenerHelpers").logMessageDeleteActionsMetric(n, a, !1), a.type !== "addon" ? null : new (o("WAWebActionToast.react")).ActionType(s._(
					/*BTDS*/
					"",
					[s._plural(p, "count")]
				));
				var t = p - e;
				return new (o("WAWebActionToast.react")).ActionType(s._(
					/*BTDS*/
					"",
					[s._plural(t)]
				));
			}).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(function(t) {
				return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["chatAction:sendDeleteMsgs dropped"]))), new (o("WAWebActionToast.react")).ActionType(s._(
					/*BTDS*/
					"",
					[s._plural(p)]
				), {
					actionText: s._(
						/*BTDS*/
						""
					),
					actionHandler: function() {
						return w(n, a, !1, m, u);
					}
				});
			}), o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebActionToast.react").ActionToast, {
				id: m,
				toastPosition: u,
				initialAction: g,
				pendingAction: b
			})), b;
		}, A = function(t, n) {
			throw r("err")("This call is not supported");
		}, F = function(t, n, a) {
			var e, i, l = a.clearMedia, c = (e = a.toastId) != null ? e : o("WAWebActionToast.react").genId(), m = (i = a.toastPosition) != null ? i : "LEFT", p = n.list;
			if (!p) return Promise.reject(new (o("WAWebMiscErrors")).ActionError());
			var _ = p.reduce(function(e, t) {
				var n = o("WAWebMsgActionCapability").canSenderRevokeMsg(t) || o("WAWebMsgActionCapability").canAdminRevokeMsg(t) || o("WAWebMsgActionCapability").canBotResponseBeRevokeByInvoker(t), r = t.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE && !o("WAWebMsgGetters").getIsGroupsV4InviteExpired(t) ? t : null;
				return [e[0] || !n, e[1] || r];
			}, [!1, null]), f = _[0], g = _[1];
			if (f) return Promise.reject(new (o("WAWebMiscErrors")).ActionError());
			g && A(t, g);
			var h = p.length, y = new (o("WAWebActionToast.react")).ActionType(o("WAWebChatGetters").getIsNewsletter(t) ? s._(
				/*BTDS*/
				"",
				[s._plural(h)]
			) : s._(
				/*BTDS*/
				"",
				[s._plural(h)]
			)), C;
			n.type === "addon" ? C = o("WAWebChatSendMessages").sendRevokeMsgs(t, n, l) : o("WAWebChatGetters").getIsNewsletter(t) ? C = o("WAWebNewsletterRevokeMsgAction").sendNewsletterRevokeMsgs(t, n.list, l) : C = o("WAWebChatSendMessages").sendRevokeMsgs(t, n, l);
			var b = C.then(function(e) {
				var a = r("countWhere")(e, function(e) {
					return e.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK;
				});
				if (a > 0) throw r("err")(a + " / " + e.length + " dropped");
				return o("WAWebActionListenerHelpers").logMessageDeleteActionsMetric(t, n, !0), new (o("WAWebActionToast.react")).ActionType(o("WAWebChatGetters").getIsNewsletter(t) ? s._(
					/*BTDS*/
					"",
					[s._plural(h, "number_of_updates")]
				) : s._(
					/*BTDS*/
					"",
					[s._plural(h, "count")]
				));
			}).catch(function(e) {
				return o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["chatAction:sendRevokeMsgs fail"]))), o("WAWebChatEphemerality").isEphemeralSettingOn(t) ? new (o("WAWebActionToast.react")).ActionType(s._(
					/*BTDS*/
					"",
					[s._plural(h, "count")]
				)) : new (o("WAWebActionToast.react")).ActionType(o("WAWebChatGetters").getIsNewsletter(t) ? s._(
					/*BTDS*/
					"",
					[s._plural(h, "number_of_updates")]
				) : s._(
					/*BTDS*/
					"",
					[s._plural(h)]
				));
			});
			return o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebActionToast.react").ActionToast, {
				id: c,
				toastPosition: m,
				initialAction: y,
				pendingAction: b
			})), b;
		}, O = function(t, n) {
			o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebBizMerchantDetailsEntityTypePopup.react"), {
				legalEntityDetails: t,
				onSave: n
			}), {
				transition: "modal",
				uim: c
			});
		}, B = function(t, n, a, i, l, s, u) {
			o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebCountrySelectorPopup.react"), {
				title: t,
				description: n,
				countryCode: a,
				lastUsedCountryCode: i,
				countries: l,
				onSave: s,
				surface: u
			}), {
				transition: "modal",
				uim: c
			});
		}, W = function() {
			o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebCommandPalette.react").CommandPaletteModal, {}), {
				transition: "modal",
				uim: c
			});
		}, q = function(t) {
			var e = t === void 0 ? {} : t, n = e.options, o = e.prefilledDescription, a = e.prefilledTitle;
			r("gkx")("9092") && r("WAWebLazyLoadedRetriable")(async function() {
				var e = await r("JSResourceForInteraction")("WAWebBugnubV2Popup.react").__setRef("WAWebActionListener").load();
				return e.openBugNubV2Popup;
			}, "bugnub_v2_popup")().then(function(e) {
				e({
					options: n,
					prefilledDescription: o,
					prefilledTitle: a
				});
			});
		}, U = function(t, n, r, a) {
			o("WAWebDrawerManager").DrawerManager.openDrawerRight(d.jsx(o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable, {
				chat: t,
				msg: n,
				onBack: r,
				onEnd: a
			}, "event-info-drawer-" + n.id.toString()), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
		};
		return (n = o("useWAWebListener")).useListener((a = o("WAWebCmd")).Cmd, ["mute_all_reactions"], S), n.useListener(a.Cmd, ["mute_chat"], C), n.useListener(a.Cmd, ["mute_chat_multiselect"], y), n.useListener(a.Cmd, ["mute_chat_with_duration"], b), n.useListener(a.Cmd, ["mute_chat_from_entrypoint"], h), n.useListener(a.Cmd, ["archive_chat"], x), n.useListener(a.Cmd, ["archive_chat_from_entrypoint"], D), n.useListener(a.Cmd, ["clear_chat"], I), n.useListener(a.Cmd, ["clear_selected_chats"], T), n.useListener(a.Cmd, ["mark_chat_unread"], $), n.useListener(a.Cmd, ["pin_chat"], E), n.useListener(a.Cmd, ["assign_chat"], N), n.useListener(a.Cmd, ["favorite_chat"], k), n.useListener(a.Cmd, ["send_star_msgs"], o("WAWebActionListenerHelpers").handleSendStarMsgs), n.useListener(a.Cmd, ["send_unstar_msgs"], o("WAWebActionListenerHelpers").handleSendUnstarMsgs), n.useListener(a.Cmd, ["send_delete_msgs"], w), n.useListener(a.Cmd, ["send_revoke_msgs"], F), n.useListener(a.Cmd, ["delete_or_exit_chat"], L), n.useListener(a.Cmd, ["delete_or_exit_chat_from_entrypoint"], R), n.useListener(a.Cmd, ["product_image_viewer_modal"], _), n.useListener(a.Cmd, ["mute_all_reactions"], S), n.useListener(a.Cmd, ["attach_product"], p), n.useListener(a.Cmd, ["show_country_selector_popup"], B), n.useListener(a.Cmd, "show_merchant_details_entity_type_popup", O), n.useListener(a.Cmd, ["open_groups_v4_invite_request_flow"], f), n.useListener(a.Cmd, ["open_profile"], g), n.useListener(a.Cmd, ["open_command_palette"], W), r("useWAWebBotActionListeners")(i, l), r("useWAWebCommunityActionListeners")(), r("useWAWebNewsletterActionListeners")(), n.useListener(a.Cmd, ["trigger_bugreport_v2"], q), n.useListener(a.Cmd, ["open_event_info_drawer"], U), n.useListener(a.Cmd, ["change_ai_reply_status"], M), null;
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);

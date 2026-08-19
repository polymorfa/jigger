__d("WAWebNewChatFlow.react", [
	"fbt",
	"WAWebChatEntryPoint",
	"WAWebChatGetters",
	"WAWebCmd",
	"WAWebCommunityCreationFlowMetricUtils",
	"WAWebComposeBoxActions",
	"WAWebContactCollection",
	"WAWebContactEditDrawer.react",
	"WAWebContactGetters",
	"WAWebContactLogging",
	"WAWebContactUtils",
	"WAWebDialerPadFlowLoadable",
	"WAWebDrawerViewType",
	"WAWebFindChatAction",
	"WAWebMessageYourselfMetricUtils",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebNativeContactsNuxPopup.react",
	"WAWebNewChatDrawer.react",
	"WAWebNewChatFlowBroadcastContainer.react",
	"WAWebNewChatFlowTypes",
	"WAWebNewChatMetricUtils",
	"WAWebNewCommunityInfoDrawer.react",
	"WAWebNewGroupFlowLoadable",
	"WAWebReachoutTimelockRestrictedModalLoadable",
	"WAWebReachoutTimelockUtils",
	"WAWebUsernameSearchLogger",
	"WAWebWamEnumCommunityCreationCurrentScreenType",
	"WAWebWamEnumCommunityCreationEntrypointType",
	"WAWebWamEnumContactSearchEntrypoint",
	"WAWebWamEnumSearchActionName",
	"WAWebWamEnumWebContactListStartNewChatType",
	"isStringNullOrEmpty",
	"react",
	"useWAWebFlow",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useRef;
	function d(e) {
		var t = e.onEnd, n = e.ref, a = e.viewType;
		o("WAWebContactCollection").ContactCollection.ensureSorted();
		var i = c(), l = o("useWAWebFlow").useFlow(o("WAWebNewChatFlowTypes").NewChatFlowStep.NewChatDrawer, {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: t
		}), d = l[0], m = l[1], p = function() {
			m.end();
		};
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "end_flow", p);
		var _ = function(t) {
			var e = t.chatOrigin, n = t.contact, r = t.isSearchResult, a = r === void 0 ? !1 : r, i = {};
			n.isEnterprise && n.privacyMode != null && (i.nextPrivacyMode = n.privacyMode), o("WAWebFindChatAction").findOrCreateLatestChat(n.id, e != null ? e : "newChatFlow", i).then(function(e) {
				var t = e.chat;
				if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked() && !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
					chat: t,
					contact: t.contact
				})) {
					o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
					return;
				}
				o("WAWebCmd").Cmd.openChatFromUnread({
					chat: t,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewChat
				}).then(function(e) {
					if (!e) {
						o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
							contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.NEW_CHAT,
							searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.INITIATION_FAILURE
						});
						return;
					}
					o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
						contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.NEW_CHAT,
						searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.INITIATION_SUCCESS
					});
					var r = o("WAWebChatGetters").getIsGroup(t) ? o("WAWebWamEnumWebContactListStartNewChatType").WEB_CONTACT_LIST_START_NEW_CHAT_TYPE.GROUP : o("WAWebWamEnumWebContactListStartNewChatType").WEB_CONTACT_LIST_START_NEW_CHAT_TYPE.CONTACT;
					o("WAWebNewChatMetricUtils").logContactListStartNewChatAction({
						chatType: r,
						isSearchResult: o("WAWebChatGetters").getIsGroup(t) || a
					}), o("WAWebContactGetters").getIsMe(n) && o("WAWebMessageYourselfMetricUtils").UiMessageYourselfNewChatAction.logMessageYourselfOpenedEvent(t, a), o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
				}), m.end();
			});
		}, f = function(t, n, r, o) {
			r === void 0 && (r = !1), _({
				chatOrigin: o,
				contact: n,
				isSearchResult: r
			});
		}, g = function(t) {
			var e = t.contactId, n = t.firstName, i = t.lastName, l = t.phoneNumber, s = t.username, u;
			!r("isStringNullOrEmpty")(n) && !r("isStringNullOrEmpty")(i) ? u = n + " " + i : r("isStringNullOrEmpty")(n) ? u = i : u = n;
			var c = o("WAWebContactCollection").ContactCollection.gadd({
				id: e,
				name: u,
				shortName: i,
				username: s,
				phoneNumber: l
			}, { merge: !0 });
			_({
				chatOrigin: "createContact",
				contact: c
			}), a === r("WAWebDrawerViewType").FLYOUT ? o("WAWebModalManager").ModalManager.close() : m.end();
		}, h = function(t) {
			if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
				return;
			}
			a === r("WAWebDrawerViewType").FLYOUT ? (m.end(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebModal.react").Modal, {
				type: o("WAWebModal.react").ModalTheme.Tower,
				children: u.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
					onCreateGroup: async function(t) {
						await t, o("WAWebModalManager").ModalManager.close();
					},
					onEnd: o("WAWebModalManager").closeModalManager,
					viewType: r("WAWebDrawerViewType").MODAL
				})
			}))) : m.push(o("WAWebNewChatFlowTypes").NewChatFlowStep.NewGroupFlow);
		}, y = function(t) {
			if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
				return;
			}
			a === r("WAWebDrawerViewType").FLYOUT ? (m.end(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebModal.react").Modal, {
				type: o("WAWebModal.react").ModalTheme.Tower,
				children: u.jsx(r("WAWebNewChatFlowBroadcastContainer.react"), {
					onCloseEntireFlow: o("WAWebModalManager").closeModalManager,
					onBack: o("WAWebModalManager").closeModalManager,
					viewType: r("WAWebDrawerViewType").MODAL
				})
			}))) : m.push(o("WAWebNewChatFlowTypes").NewChatFlowStep.NewBroadcastFlow);
		}, C = function(t) {
			a === r("WAWebDrawerViewType").FLYOUT ? (m.end(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebModal.react").Modal, {
				type: o("WAWebModal.react").ModalTheme.Tower,
				children: u.jsx(r("WAWebNewCommunityInfoDrawer.react"), {
					onCreateCommunity: o("WAWebModalManager").closeModalManager,
					viewType: r("WAWebDrawerViewType").MODAL,
					onCancel: o("WAWebModalManager").closeModalManager
				})
			}))) : m.push(o("WAWebNewChatFlowTypes").NewChatFlowStep.NewCommunityFlow), o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.startSession(o("WAWebWamEnumCommunityCreationEntrypointType").COMMUNITY_CREATION_ENTRYPOINT_TYPE.CHATS_TAB), o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.enter(o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.CHATS_TAB);
		}, b = function(t) {
			if (o("WAWebContactUtils").shouldShowNativeContactsNux()) {
				o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebNativeContactsNuxPopup.react"), { source: o("WAWebContactLogging").ContactSourceType.NewChat }));
				return;
			}
			a === r("WAWebDrawerViewType").FLYOUT ? (m.end(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebModal.react").Modal, {
				type: o("WAWebModal.react").ModalTheme.Tower,
				children: u.jsx(r("WAWebContactEditDrawer.react"), {
					ref: i,
					origin: o("WAWebContactLogging").ContactSourceType.NewChat,
					onSave: g,
					viewType: r("WAWebDrawerViewType").MODAL,
					onCancel: o("WAWebModalManager").closeModalManager
				})
			}))) : m.push(o("WAWebNewChatFlowTypes").NewChatFlowStep.NewContactFlow);
		}, v = function(t) {
			if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
				return;
			}
			a === r("WAWebDrawerViewType").FLYOUT ? (m.end(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebModal.react").Modal, {
				type: o("WAWebModal.react").ModalTheme.Tower,
				children: u.jsx(o("WAWebDialerPadFlowLoadable").WAWebDialerPadFlowLoadable, {
					onEnd: o("WAWebModalManager").closeModalManager,
					viewType: r("WAWebDrawerViewType").MODAL
				})
			}))) : m.push(o("WAWebNewChatFlowTypes").NewChatFlowStep.DialerPadFlow);
		}, S = function() {
			if (m.step === o("WAWebNewChatFlowTypes").NewChatFlowStep.NewContactFlow) {
				var e;
				(e = i.current) == null || e.handleDismiss();
			}
			m.pop();
		};
		if (m.step == null) return null;
		var R = null;
		switch (m.step) {
			case o("WAWebNewChatFlowTypes").NewChatFlowStep.NewChatDrawer:
				R = u.jsx(r("WAWebNewChatDrawer.react"), {
					title: s._(
						/*BTDS*/
						""
					),
					onBack: function() {
						return m.end();
					},
					onClick: f,
					onNewGroup: h,
					onNewBroadcast: y,
					onNewCommunity: C,
					onNewContact: b,
					onDialerPad: v,
					viewType: a != null ? a : r("WAWebDrawerViewType").DRAWER
				});
				break;
			case o("WAWebNewChatFlowTypes").NewChatFlowStep.NewGroupFlow:
				R = u.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
					onCreateGroup: async function(t) {
						await t, m.end();
					},
					onEnd: m.pop,
					viewType: a != null ? a : r("WAWebDrawerViewType").DRAWER
				});
				break;
			case o("WAWebNewChatFlowTypes").NewChatFlowStep.NewBroadcastFlow:
				R = u.jsx(r("WAWebNewChatFlowBroadcastContainer.react"), {
					onCloseEntireFlow: function() {
						return m.end();
					},
					onBack: m.pop,
					viewType: a != null ? a : r("WAWebDrawerViewType").DRAWER
				});
				break;
			case o("WAWebNewChatFlowTypes").NewChatFlowStep.NewCommunityFlow:
				R = u.jsx(r("WAWebNewCommunityInfoDrawer.react"), {
					onBack: m.pop,
					onCreateCommunity: a === r("WAWebDrawerViewType").MODAL ? m.end : void 0,
					viewType: a != null ? a : r("WAWebDrawerViewType").DRAWER
				});
				break;
			case o("WAWebNewChatFlowTypes").NewChatFlowStep.NewContactFlow:
				R = u.jsx(r("WAWebContactEditDrawer.react"), {
					ref: i,
					origin: o("WAWebContactLogging").ContactSourceType.NewChat,
					onSave: g,
					onBack: m.pop,
					viewType: a != null ? a : r("WAWebDrawerViewType").DRAWER
				});
				break;
			case o("WAWebNewChatFlowTypes").NewChatFlowStep.DialerPadFlow:
				R = u.jsx(o("WAWebDialerPadFlowLoadable").WAWebDialerPadFlowLoadable, {
					onEnd: m.pop,
					viewType: a != null ? a : r("WAWebDrawerViewType").DRAWER
				});
				break;
		}
		return u.jsx(d, {
			ref: n,
			flow: m,
			requestDismiss: S,
			children: R
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

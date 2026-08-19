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
	"react-compiler-runtime",
	"useWAWebFlow",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useRef;
	function d(e) {
		var t = o("react-compiler-runtime").c(71), n = e.onEnd, a = e.ref, i = e.viewType;
		o("WAWebContactCollection").ContactCollection.ensureSorted();
		var l = c(), d;
		t[0] !== n ? (d = {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: n
		}, t[0] = n, t[1] = d) : d = t[1];
		var p = o("useWAWebFlow").useFlow(o("WAWebNewChatFlowTypes").NewChatFlowStep.NewChatDrawer, d), _ = p[0], f = p[1], g;
		t[2] !== f ? (g = function() {
			f.end();
		}, t[2] = f, t[3] = g) : g = t[3];
		var h = g;
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "end_flow", h);
		var y;
		t[4] !== f ? (y = function(t) {
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
				}), f.end();
			});
		}, t[4] = f, t[5] = y) : y = t[5];
		var C = y, b;
		t[6] !== C ? (b = function(t, n, r, o) {
			var e = r === void 0 ? !1 : r;
			C({
				chatOrigin: o,
				contact: n,
				isSearchResult: e
			});
		}, t[6] = C, t[7] = b) : b = t[7];
		var v = b, S;
		t[8] !== f || t[9] !== C || t[10] !== i ? (S = function(t) {
			var e = t.contactId, n = t.firstName, a = t.lastName, l = t.phoneNumber, s = t.username, u;
			!r("isStringNullOrEmpty")(n) && !r("isStringNullOrEmpty")(a) ? u = n + " " + a : r("isStringNullOrEmpty")(n) ? u = a : u = n;
			var c = o("WAWebContactCollection").ContactCollection.gadd({
				id: e,
				name: u,
				shortName: a,
				username: s,
				phoneNumber: l
			}, { merge: !0 });
			C({
				chatOrigin: "createContact",
				contact: c
			}), i === r("WAWebDrawerViewType").FLYOUT ? o("WAWebModalManager").ModalManager.close() : f.end();
		}, t[8] = f, t[9] = C, t[10] = i, t[11] = S) : S = t[11];
		var R = S, L;
		t[12] !== f || t[13] !== i ? (L = function(t) {
			if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
				return;
			}
			i === r("WAWebDrawerViewType").FLYOUT ? (f.end(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebModal.react").Modal, {
				type: o("WAWebModal.react").ModalTheme.Tower,
				children: u.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
					onCreateGroup: m,
					onEnd: o("WAWebModalManager").closeModalManager,
					viewType: r("WAWebDrawerViewType").MODAL
				})
			}))) : f.push(o("WAWebNewChatFlowTypes").NewChatFlowStep.NewGroupFlow);
		}, t[12] = f, t[13] = i, t[14] = L) : L = t[14];
		var E = L, k;
		t[15] !== f || t[16] !== i ? (k = function(t) {
			if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
				return;
			}
			i === r("WAWebDrawerViewType").FLYOUT ? (f.end(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebModal.react").Modal, {
				type: o("WAWebModal.react").ModalTheme.Tower,
				children: u.jsx(r("WAWebNewChatFlowBroadcastContainer.react"), {
					onCloseEntireFlow: o("WAWebModalManager").closeModalManager,
					onBack: o("WAWebModalManager").closeModalManager,
					viewType: r("WAWebDrawerViewType").MODAL
				})
			}))) : f.push(o("WAWebNewChatFlowTypes").NewChatFlowStep.NewBroadcastFlow);
		}, t[15] = f, t[16] = i, t[17] = k) : k = t[17];
		var I = k, T;
		t[18] !== f || t[19] !== i ? (T = function(t) {
			i === r("WAWebDrawerViewType").FLYOUT ? (f.end(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebModal.react").Modal, {
				type: o("WAWebModal.react").ModalTheme.Tower,
				children: u.jsx(r("WAWebNewCommunityInfoDrawer.react"), {
					onCreateCommunity: o("WAWebModalManager").closeModalManager,
					viewType: r("WAWebDrawerViewType").MODAL,
					onCancel: o("WAWebModalManager").closeModalManager
				})
			}))) : f.push(o("WAWebNewChatFlowTypes").NewChatFlowStep.NewCommunityFlow), o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.startSession(o("WAWebWamEnumCommunityCreationEntrypointType").COMMUNITY_CREATION_ENTRYPOINT_TYPE.CHATS_TAB), o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.enter(o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.CHATS_TAB);
		}, t[18] = f, t[19] = i, t[20] = T) : T = t[20];
		var D = T, x;
		t[21] !== f || t[22] !== R || t[23] !== i ? (x = function(t) {
			if (o("WAWebContactUtils").shouldShowNativeContactsNux()) {
				o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebNativeContactsNuxPopup.react"), { source: o("WAWebContactLogging").ContactSourceType.NewChat }));
				return;
			}
			i === r("WAWebDrawerViewType").FLYOUT ? (f.end(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebModal.react").Modal, {
				type: o("WAWebModal.react").ModalTheme.Tower,
				children: u.jsx(r("WAWebContactEditDrawer.react"), {
					ref: l,
					origin: o("WAWebContactLogging").ContactSourceType.NewChat,
					onSave: R,
					viewType: r("WAWebDrawerViewType").MODAL,
					onCancel: o("WAWebModalManager").closeModalManager
				})
			}))) : f.push(o("WAWebNewChatFlowTypes").NewChatFlowStep.NewContactFlow);
		}, t[21] = f, t[22] = R, t[23] = i, t[24] = x) : x = t[24];
		var $ = x, P;
		t[25] !== f || t[26] !== i ? (P = function(t) {
			if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
				return;
			}
			i === r("WAWebDrawerViewType").FLYOUT ? (f.end(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebModal.react").Modal, {
				type: o("WAWebModal.react").ModalTheme.Tower,
				children: u.jsx(o("WAWebDialerPadFlowLoadable").WAWebDialerPadFlowLoadable, {
					onEnd: o("WAWebModalManager").closeModalManager,
					viewType: r("WAWebDrawerViewType").MODAL
				})
			}))) : f.push(o("WAWebNewChatFlowTypes").NewChatFlowStep.DialerPadFlow);
		}, t[25] = f, t[26] = i, t[27] = P) : P = t[27];
		var N = P, M;
		t[28] !== f ? (M = function() {
			if (f.step === o("WAWebNewChatFlowTypes").NewChatFlowStep.NewContactFlow) {
				var e;
				(e = l.current) == null || e.handleDismiss();
			}
			f.pop();
		}, t[28] = f, t[29] = M) : M = t[29];
		var w = M;
		if (f.step == null) return null;
		var A = null;
		e: switch (f.step) {
			case o("WAWebNewChatFlowTypes").NewChatFlowStep.NewChatDrawer: {
				var F;
				t[30] === Symbol.for("react.memo_cache_sentinel") ? (F = s._(
					/*BTDS*/
					""
				), t[30] = F) : F = t[30];
				var O;
				t[31] !== f ? (O = function() {
					return f.end();
				}, t[31] = f, t[32] = O) : O = t[32];
				var B = i != null ? i : r("WAWebDrawerViewType").DRAWER, W;
				t[33] !== v || t[34] !== N || t[35] !== I || t[36] !== D || t[37] !== $ || t[38] !== E || t[39] !== O || t[40] !== B ? (W = u.jsx(r("WAWebNewChatDrawer.react"), {
					title: F,
					onBack: O,
					onClick: v,
					onNewGroup: E,
					onNewBroadcast: I,
					onNewCommunity: D,
					onNewContact: $,
					onDialerPad: N,
					viewType: B
				}), t[33] = v, t[34] = N, t[35] = I, t[36] = D, t[37] = $, t[38] = E, t[39] = O, t[40] = B, t[41] = W) : W = t[41], A = W;
				break e;
			}
			case o("WAWebNewChatFlowTypes").NewChatFlowStep.NewGroupFlow: {
				var q;
				t[42] !== f ? (q = async function(t) {
					await t, f.end();
				}, t[42] = f, t[43] = q) : q = t[43];
				var U = i != null ? i : r("WAWebDrawerViewType").DRAWER, V;
				t[44] !== f.pop || t[45] !== q || t[46] !== U ? (V = u.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
					onCreateGroup: q,
					onEnd: f.pop,
					viewType: U
				}), t[44] = f.pop, t[45] = q, t[46] = U, t[47] = V) : V = t[47], A = V;
				break e;
			}
			case o("WAWebNewChatFlowTypes").NewChatFlowStep.NewBroadcastFlow: {
				var H;
				t[48] !== f ? (H = function() {
					return f.end();
				}, t[48] = f, t[49] = H) : H = t[49];
				var G = i != null ? i : r("WAWebDrawerViewType").DRAWER, z;
				t[50] !== f.pop || t[51] !== H || t[52] !== G ? (z = u.jsx(r("WAWebNewChatFlowBroadcastContainer.react"), {
					onCloseEntireFlow: H,
					onBack: f.pop,
					viewType: G
				}), t[50] = f.pop, t[51] = H, t[52] = G, t[53] = z) : z = t[53], A = z;
				break e;
			}
			case o("WAWebNewChatFlowTypes").NewChatFlowStep.NewCommunityFlow: {
				var j = i === r("WAWebDrawerViewType").MODAL ? f.end : void 0, K = i != null ? i : r("WAWebDrawerViewType").DRAWER, Q;
				t[54] !== f.pop || t[55] !== j || t[56] !== K ? (Q = u.jsx(r("WAWebNewCommunityInfoDrawer.react"), {
					onBack: f.pop,
					onCreateCommunity: j,
					viewType: K
				}), t[54] = f.pop, t[55] = j, t[56] = K, t[57] = Q) : Q = t[57], A = Q;
				break e;
			}
			case o("WAWebNewChatFlowTypes").NewChatFlowStep.NewContactFlow: {
				var X = i != null ? i : r("WAWebDrawerViewType").DRAWER, Y;
				t[58] !== f.pop || t[59] !== R || t[60] !== X ? (Y = u.jsx(r("WAWebContactEditDrawer.react"), {
					ref: l,
					origin: o("WAWebContactLogging").ContactSourceType.NewChat,
					onSave: R,
					onBack: f.pop,
					viewType: X
				}), t[58] = f.pop, t[59] = R, t[60] = X, t[61] = Y) : Y = t[61], A = Y;
				break e;
			}
			case o("WAWebNewChatFlowTypes").NewChatFlowStep.DialerPadFlow: {
				var J = i != null ? i : r("WAWebDrawerViewType").DRAWER, Z;
				t[62] !== f.pop || t[63] !== J ? (Z = u.jsx(o("WAWebDialerPadFlowLoadable").WAWebDialerPadFlowLoadable, {
					onEnd: f.pop,
					viewType: J
				}), t[62] = f.pop, t[63] = J, t[64] = Z) : Z = t[64], A = Z;
			}
		}
		var ee;
		return t[65] !== _ || t[66] !== A || t[67] !== f || t[68] !== w || t[69] !== a ? (ee = u.jsx(_, {
			ref: a,
			flow: f,
			requestDismiss: w,
			children: A
		}), t[65] = _, t[66] = A, t[67] = f, t[68] = w, t[69] = a, t[70] = ee) : ee = t[70], ee;
	}
	async function m(e) {
		await e, o("WAWebModalManager").ModalManager.close();
	}
	l.default = d;
}), 226);

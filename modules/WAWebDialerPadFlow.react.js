__d("WAWebDialerPadFlow.react", [
	"$InternalEnum",
	"WAWebChatEntryPoint",
	"WAWebChatGetters",
	"WAWebCmd",
	"WAWebComposeBoxActions",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebDialerPadDrawer.react",
	"WAWebDrawerViewType",
	"WAWebFindChatAction",
	"WAWebMessageYourselfMetricUtils",
	"WAWebModalManager",
	"WAWebNewChatMetricUtils",
	"WAWebReachoutTimelockRestrictedModalLoadable",
	"WAWebReachoutTimelockUtils",
	"WAWebWamEnumWebContactListStartNewChatType",
	"react",
	"react-compiler-runtime",
	"useWAWebFlow",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useEffect, c = n("$InternalEnum").Mirrored(["NEW_CHAT"]);
	function d(e) {
		var t = o("react-compiler-runtime").c(31), n = e.entryPoint, a = e.initialPhoneNumber, i = e.initialStep, l = e.isSubFlow, d = e.onEnd, p = e.ref, _ = e.viewType, f = i === void 0 ? c.NEW_CHAT : i, g = l === void 0 ? !0 : l, h;
		t[0] !== d ? (h = {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: d
		}, t[0] = d, t[1] = h) : h = t[1];
		var y = o("useWAWebFlow").useFlow(f, h), C = y[0], b = y[1], v;
		t[2] !== b ? (v = function() {
			b.end();
		}, t[2] = b, t[3] = v) : v = t[3];
		var S = v;
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "end_flow", S);
		var R;
		if (t[4] === Symbol.for("react.memo_cache_sentinel") ? (R = [], t[4] = R) : R = t[4], u(m, R), b.step == null) return null;
		var L;
		t[5] !== b ? (L = function() {
			return b.pop();
		}, t[5] = b, t[6] = L) : L = t[6];
		var E;
		if (t[7] !== b || t[8] !== g || t[9] !== d || t[10] !== L || t[11] !== _) {
			if (E = { onBack: L }, !g || _ === r("WAWebDrawerViewType").MODAL) {
				delete E.onBack;
				var k;
				t[13] !== b || t[14] !== d || t[15] !== _ ? (k = function() {
					return _ === r("WAWebDrawerViewType").MODAL ? d == null ? void 0 : d() : b.pop();
				}, t[13] = b, t[14] = d, t[15] = _, t[16] = k) : k = t[16], E.onCancel = k;
			}
			t[7] = b, t[8] = g, t[9] = d, t[10] = L, t[11] = _, t[12] = E;
		} else E = t[12];
		var I;
		if (t[17] !== n || t[18] !== b) {
			var T = function(t) {
				var e = t.chatOrigin, r = t.contact, a = t.isSearchResult, i = a === void 0 ? !1 : a, l = {};
				r.isEnterprise && r.privacyMode != null && (l.nextPrivacyMode = r.privacyMode), o("WAWebFindChatAction").findOrCreateLatestChat(r.id, e != null ? e : "newChatFlow", l).then(function(e) {
					var t = e.chat;
					if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked() && !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
						chat: t,
						contact: t.contact
					})) {
						o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
						return;
					}
					o("WAWebCmd").Cmd.openChatFromUnread({
						chat: t,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.DialerPad
					}).then(function(e) {
						if (e) {
							var n = o("WAWebChatGetters").getIsGroup(t) ? o("WAWebWamEnumWebContactListStartNewChatType").WEB_CONTACT_LIST_START_NEW_CHAT_TYPE.GROUP : o("WAWebWamEnumWebContactListStartNewChatType").WEB_CONTACT_LIST_START_NEW_CHAT_TYPE.CONTACT;
							o("WAWebNewChatMetricUtils").logContactListStartNewChatAction({
								chatType: n,
								isSearchResult: o("WAWebChatGetters").getIsGroup(t) || i
							}), o("WAWebContactGetters").getIsMe(r) && o("WAWebMessageYourselfMetricUtils").UiMessageYourselfNewChatAction.logMessageYourselfOpenedEvent(t, i), o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
						}
					}), n !== "calls_tab" && b.end();
				});
			};
			I = function(t) {
				var e = t.chatOrigin, n = t.contact, r = t.isSearchResult, o = r === void 0 ? !1 : r;
				T({
					chatOrigin: e,
					contact: n,
					isSearchResult: o
				});
			}, t[17] = n, t[18] = b, t[19] = I;
		} else I = t[19];
		var D = I, x;
		t[20] !== E || t[21] !== n || t[22] !== D || t[23] !== a || t[24] !== _ ? (x = s.jsx(r("WAWebDialerPadDrawer.react"), babelHelpers.extends({}, E, {
			viewType: _,
			onContactClick: D,
			entryPoint: n,
			initialPhoneNumber: a
		})), t[20] = E, t[21] = n, t[22] = D, t[23] = a, t[24] = _, t[25] = x) : x = t[25];
		var $;
		return t[26] !== C || t[27] !== b || t[28] !== p || t[29] !== x ? ($ = s.jsx(C, {
			ref: p,
			flow: b,
			children: x
		}), t[26] = C, t[27] = b, t[28] = p, t[29] = x, t[30] = $) : $ = t[30], $;
	}
	function m() {
		o("WAWebContactCollection").ContactCollection.ensureSorted();
	}
	var p = d;
	l.DialerPadFlow = p;
}), 98);

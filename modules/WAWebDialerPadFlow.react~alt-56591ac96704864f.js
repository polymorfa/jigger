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
	"useWAWebFlow",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useEffect, c = n("$InternalEnum").Mirrored(["NEW_CHAT"]);
	function d(e) {
		var t = e.entryPoint, n = e.initialPhoneNumber, a = e.initialStep, i = a === void 0 ? c.NEW_CHAT : a, l = e.isSubFlow, d = l === void 0 ? !0 : l, m = e.onEnd, p = e.ref, _ = e.viewType, f = o("useWAWebFlow").useFlow(i, {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: m
		}), g = f[0], h = f[1], y = function() {
			h.end();
		};
		if (o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "end_flow", y), u(function() {
			o("WAWebContactCollection").ContactCollection.ensureSorted();
		}, []), h.step == null) return null;
		var C = { onBack: function() {
			return h.pop();
		} };
		(!d || _ === r("WAWebDrawerViewType").MODAL) && (delete C.onBack, C.onCancel = function() {
			return _ === r("WAWebDrawerViewType").MODAL ? m == null ? void 0 : m() : h.pop();
		});
		var b = function(n) {
			var e = n.chatOrigin, r = n.contact, a = n.isSearchResult, i = a === void 0 ? !1 : a, l = {};
			r.isEnterprise && r.privacyMode != null && (l.nextPrivacyMode = r.privacyMode), o("WAWebFindChatAction").findOrCreateLatestChat(r.id, e != null ? e : "newChatFlow", l).then(function(e) {
				var n = e.chat;
				if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked() && !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
					chat: n,
					contact: n.contact
				})) {
					o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
					return;
				}
				o("WAWebCmd").Cmd.openChatFromUnread({
					chat: n,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.DialerPad
				}).then(function(e) {
					if (e) {
						var t = o("WAWebChatGetters").getIsGroup(n) ? o("WAWebWamEnumWebContactListStartNewChatType").WEB_CONTACT_LIST_START_NEW_CHAT_TYPE.GROUP : o("WAWebWamEnumWebContactListStartNewChatType").WEB_CONTACT_LIST_START_NEW_CHAT_TYPE.CONTACT;
						o("WAWebNewChatMetricUtils").logContactListStartNewChatAction({
							chatType: t,
							isSearchResult: o("WAWebChatGetters").getIsGroup(n) || i
						}), o("WAWebContactGetters").getIsMe(r) && o("WAWebMessageYourselfMetricUtils").UiMessageYourselfNewChatAction.logMessageYourselfOpenedEvent(n, i), o("WAWebComposeBoxActions").ComposeBoxActions.focus(n);
					}
				}), t !== "calls_tab" && h.end();
			});
		}, v = function(t) {
			var e = t.chatOrigin, n = t.contact, r = t.isSearchResult, o = r === void 0 ? !1 : r;
			b({
				chatOrigin: e,
				contact: n,
				isSearchResult: o
			});
		};
		return s.jsx(g, {
			ref: p,
			flow: h,
			children: s.jsx(r("WAWebDialerPadDrawer.react"), babelHelpers.extends({}, C, {
				viewType: _,
				onContactClick: v,
				entryPoint: t,
				initialPhoneNumber: n
			}))
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	var m = d;
	l.DialerPadFlow = m;
}), 98);

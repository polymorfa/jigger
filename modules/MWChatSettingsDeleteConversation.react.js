__d("MWChatSettingsDeleteConversation.react", [
	"fbt",
	"LSMessagingThreadTypeUtil",
	"MWXIconMenuItemTrash",
	"MWXMenuItem.react",
	"MessageRequestsLog",
	"MessengerWebUXLogger",
	"ODS",
	"WebUserFlowLoggingDataContextProvider.react",
	"react",
	"react-compiler-runtime",
	"useMWCMShowDeleteOrPauseDialog.react",
	"uuidv4"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = e || (e = o("react")), d = e, m = d.useContext, p = d.useRef;
	function _(e) {
		var t = o("react-compiler-runtime").c(22), n = e.disabled, a = e.entryPoint, i = e.onClick, l = e.onSelectItem, d = e.resetJewelCloseOnOutsideClickAfterDialog, _ = e.thread, f = n === void 0 ? !1 : n, g = p(null), h;
		t[0] !== _ ? (h = _ != null ? o("LSMessagingThreadTypeUtil").isCMSubthread(_ == null ? void 0 : _.threadType) : !1, t[0] = _, t[1] = h) : h = t[1];
		var y = h, C;
		t[2] !== _ ? (C = _ != null ? o("LSMessagingThreadTypeUtil").isJoinedSocialChannel(_.threadType) : !1, t[2] = _, t[3] = C) : C = t[3];
		var b = C, v;
		t[4] !== _ ? (v = _ != null ? o("LSMessagingThreadTypeUtil").isDiscoverablePublicBroadcastChannel(_.threadType) : !1, t[4] = _, t[5] = v) : v = t[5];
		var S = v, R;
		t[6] !== _ ? (R = _ != null ? o("LSMessagingThreadTypeUtil").isMessageRequest(_) : !1, t[6] = _, t[7] = R) : R = t[7];
		var L = R, E;
		t[8] !== S || t[9] !== y || t[10] !== b ? (E = b || S ? s._(
			/*BTDS*/
			""
		) : y ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[8] = S, t[9] = y, t[10] = b, t[11] = E) : E = t[11];
		var k = E, I = m(o("WebUserFlowLoggingDataContextProvider.react").WebUserFlowLoggingDataContext), T = I.setLoggingData, D = r("MessengerWebUXLogger").useInteractionLogger(), x = r("useMWCMShowDeleteOrPauseDialog.react")(a, i, _, d), $;
		return t[12] !== f || t[13] !== y || t[14] !== L || t[15] !== k || t[16] !== D || t[17] !== l || t[18] !== T || t[19] !== x || t[20] !== _ ? ($ = _ == null ? null : c.jsx(r("MWXMenuItem.react"), {
			disabled: f,
			icon: r("MWXIconMenuItemTrash"),
			iconColor: y ? "negative" : "primary",
			onClick: function(t) {
				(u || (u = o("ODS"))).bumpEntityKey(3185, "mwchat_settings", "delete_conv");
				var e = {
					entryPoint: "thread_list",
					flowInstanceId: r("uuidv4")(),
					threadKey: _.threadKey,
					threadType: _.threadType
				};
				D == null || D(babelHelpers.extends({}, e, { eventName: "thread_delete_attempt" })), T(e), _ != null && L && o("MessageRequestsLog").logActionTapped(_, 8), l == null || l(), x();
			},
			primaryText: k,
			ref: g,
			testid: void 0
		}), t[12] = f, t[13] = y, t[14] = L, t[15] = k, t[16] = D, t[17] = l, t[18] = T, t[19] = x, t[20] = _, t[21] = $) : $ = t[21], $;
	}
	l.default = _;
}), 226);

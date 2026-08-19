__d("WAWebMessageEditFlow.react", [
	"$InternalEnum",
	"WALogger",
	"WAWebChatEntryPoint",
	"WAWebChatMessageSearch",
	"WAWebCmd",
	"WAWebFrontendMsgGetters",
	"WAWebMessageEditModal.react",
	"WAWebMsgType",
	"WAWebPollsActionsMetricUtils",
	"WAWebPollsSendPollEditMsgAction",
	"WAWebSendMessageEditAction",
	"WAWebWamEnumPollActionType",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = u || (u = o("react")), d = u.useEffect, m = n("$InternalEnum").Mirrored(["Edit"]);
	function p(t) {
		var n = o("react-compiler-runtime").c(25), a = t.msg, i;
		n[0] !== a ? (i = o("WAWebFrontendMsgGetters").getChat(a.unsafe()), n[0] = a, n[1] = i) : i = n[1];
		var l = i, s;
		n[2] !== a ? (s = o("WAWebFrontendMsgGetters").getAsPollCreation(a), n[2] = a, n[3] = s) : s = n[3];
		var u = s, p = o("useWAWebFlow").useFlow(m.Edit), f = p[0], g = p[1], h, y;
		if (n[4] !== u ? (h = function() {
			u != null && o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric(babelHelpers.extends({
				action: o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.EDIT_POLL_INITIATED,
				chat: o("WAWebFrontendMsgGetters").getChat(u.unsafe())
			}, o("WAWebPollsActionsMetricUtils").getPollMetricFieldsFromCreationMsg(u)));
		}, y = [u], n[4] = u, n[5] = h, n[6] = y) : (h = n[5], y = n[6]), d(h, y), g.step == null) return null;
		var C;
		n[7] !== l || n[8] !== g || n[9] !== a ? (C = function() {
			o("WAWebCmd").Cmd.openChatAt({
				chat: l,
				msgContext: o("WAWebChatMessageSearch").getSearchContext({
					chat: l,
					msgKey: a.unsafe().id
				}),
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatMessageEditComplete
			}), g.end();
		}, n[7] = l, n[8] = g, n[9] = a, n[10] = C) : C = n[10];
		var b = C, v;
		switch (g.step) {
			case m.Edit: {
				var S;
				n[11] !== b || n[12] !== a || n[13] !== u ? (S = function(n, r) {
					a.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ? u != null ? o("WAWebPollsSendPollEditMsgAction").sendPollEdit({
						newTitle: n,
						parentMsg: u
					}).then(function() {
						o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric(babelHelpers.extends({
							action: o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.EDIT_POLL_COMPLETED,
							chat: o("WAWebFrontendMsgGetters").getChat(u.unsafe())
						}, o("WAWebPollsActionsMetricUtils").getPollMetricFieldsFromCreationMsg(u)));
					}).catch(_) : o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[Polls] Failed to send poll edit: pollMsg is null"]))).sendLogs("polls-edit-null-parent") : o("WAWebSendMessageEditAction").sendMessageEdit(a.unsafe(), n, r), b();
				}, n[11] = b, n[12] = a, n[13] = u, n[14] = S) : S = n[14];
				var R = S, L;
				n[15] !== g ? (L = function() {
					return g.end();
				}, n[15] = g, n[16] = L) : L = n[16];
				var E;
				n[17] !== R || n[18] !== a || n[19] !== L ? (E = c.jsx(r("WAWebMessageEditModal.react"), {
					msg: a,
					onConfirm: R,
					onCancel: L
				}), n[17] = R, n[18] = a, n[19] = L, n[20] = E) : E = n[20], v = E;
			}
		}
		var k;
		return n[21] !== f || n[22] !== v || n[23] !== g ? (k = c.jsx(f, {
			flow: g,
			children: v
		}), n[21] = f, n[22] = v, n[23] = g, n[24] = k) : k = n[24], k;
	}
	function _(e) {
		o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[Polls] Failed to send poll edit"]))).catching(r("getErrorSafe")(e)).sendLogs("polls-edit-send-fail");
	}
	l.default = p;
}), 98);

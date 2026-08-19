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
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = u || (u = o("react")), d = u.useEffect, m = n("$InternalEnum").Mirrored(["Edit"]);
	function p(t) {
		var n = t.msg, a = o("WAWebFrontendMsgGetters").getChat(n.unsafe()), i = o("WAWebFrontendMsgGetters").getAsPollCreation(n), l = o("useWAWebFlow").useFlow(m.Edit), u = l[0], p = l[1];
		if (d(function() {
			i != null && o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric(babelHelpers.extends({
				action: o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.EDIT_POLL_INITIATED,
				chat: o("WAWebFrontendMsgGetters").getChat(i.unsafe())
			}, o("WAWebPollsActionsMetricUtils").getPollMetricFieldsFromCreationMsg(i)));
		}, [i]), p.step == null) return null;
		var _ = function() {
			o("WAWebCmd").Cmd.openChatAt({
				chat: a,
				msgContext: o("WAWebChatMessageSearch").getSearchContext({
					chat: a,
					msgKey: n.unsafe().id
				}),
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatMessageEditComplete
			}), p.end();
		}, f;
		switch (p.step) {
			case m.Edit: {
				var g = function(a, l) {
					n.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ? i != null ? o("WAWebPollsSendPollEditMsgAction").sendPollEdit({
						newTitle: a,
						parentMsg: i
					}).then(function() {
						o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric(babelHelpers.extends({
							action: o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.EDIT_POLL_COMPLETED,
							chat: o("WAWebFrontendMsgGetters").getChat(i.unsafe())
						}, o("WAWebPollsActionsMetricUtils").getPollMetricFieldsFromCreationMsg(i)));
					}).catch(function(t) {
						o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[Polls] Failed to send poll edit"]))).catching(r("getErrorSafe")(t)).sendLogs("polls-edit-send-fail");
					}) : o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[Polls] Failed to send poll edit: pollMsg is null"]))).sendLogs("polls-edit-null-parent") : o("WAWebSendMessageEditAction").sendMessageEdit(n.unsafe(), a, l), _();
				};
				f = c.jsx(r("WAWebMessageEditModal.react"), {
					msg: n,
					onConfirm: g,
					onCancel: function() {
						return p.end();
					}
				});
				break;
			}
		}
		return c.jsx(u, {
			flow: p,
			children: f
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);

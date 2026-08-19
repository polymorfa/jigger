__d("WAWebBizAiBlockMsgBar.react", [
	"fbt",
	"WAWebCmd",
	"WAWebCopyPasteSelectable.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebGenAiAgentLogEvents",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.chat;
		return o("WAWebGenAiAgentLogEvents").useLogViewGenAiAgentAutoReplyBlockingBar(), u.jsx("div", {
			"data-testid": "biz_ai_block_msg_bar",
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				children: [u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					children: u.jsx(r("WAWebFlexItem.react"), { children: s._(
						/*BTDS*/
						""
					) })
				}) }), u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
					className: "x1v5yvga",
					id: "toggle-ai-reply-status",
					"data-testid": "toggle-ai-reply-status",
					selectable: !1,
					onClick: function() {
						o("WAWebGenAiAgentLogEvents").logClickGenAiAgentAutoReplyBlockingBar(), o("WAWebCmd").Cmd.changeAiReplyStatus(t, !1);
					},
					children: s._(
						/*BTDS*/
						""
					)
				}) })]
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

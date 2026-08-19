__d("WAWebBizAiBlockMsgBar.react", [
	"fbt",
	"WAWebCmd",
	"WAWebCopyPasteSelectable.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebGenAiAgentLogEvents",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(7), n = e.chat;
		o("WAWebGenAiAgentLogEvents").useLogViewGenAiAgentAutoReplyBlockingBar();
		var a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: u.jsx(r("WAWebFlexItem.react"), { children: s._(
				/*BTDS*/
				""
			) })
		}) }), t[0] = a) : a = t[0];
		var i;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = "x1v5yvga", t[1] = i) : i = t[1];
		var l;
		t[2] !== n ? (l = function() {
			o("WAWebGenAiAgentLogEvents").logClickGenAiAgentAutoReplyBlockingBar(), o("WAWebCmd").Cmd.changeAiReplyStatus(n, !1);
		}, t[2] = n, t[3] = l) : l = t[3];
		var c;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
			/*BTDS*/
			""
		), t[4] = c) : c = t[4];
		var d;
		return t[5] !== l ? (d = u.jsx("div", {
			"data-testid": "biz_ai_block_msg_bar",
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				children: [a, u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
					className: i,
					id: "toggle-ai-reply-status",
					"data-testid": "toggle-ai-reply-status",
					selectable: !1,
					onClick: l,
					children: c
				}) })]
			})
		}), t[5] = l, t[6] = d) : d = t[6], d;
	}
	l.default = c;
}), 226);

__d("WAWebBizAiMuteUnmuteErrorDrawer.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebGenAiAgentLogEvents",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.isTurnOn;
		return o("WAWebGenAiAgentLogEvents").useLogViewGenAiAgentAutoReplyErrorDialog(t), u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "biz-ai-mute-error"
			},
			title: s._(
				/*BTDS*/
				""
			),
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: o("WAWebModalManager").closeModalManager
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

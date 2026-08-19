__d("WAWebBizAiMuteUnmuteErrorDrawer.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebGenAiAgentLogEvents",
	"WAWebModalManager",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(1), n = e.isTurnOn;
		o("WAWebGenAiAgentLogEvents").useLogViewGenAiAgentAutoReplyErrorDialog(n);
		var r;
		return t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
		}), t[0] = r) : r = t[0], r;
	}
	l.default = c;
}), 226);

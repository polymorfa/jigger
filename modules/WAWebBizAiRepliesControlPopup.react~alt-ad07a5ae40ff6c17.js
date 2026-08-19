__d("WAWebBizAiRepliesControlPopup.react", [
	"fbt",
	"WAWebAIAgentAIReplyUtils",
	"WAWebBizAiAgentStatusUtils",
	"WAWebConfirmPopup.react",
	"WAWebGenAiAgentLogEvents",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = e.chat, n = !o("WAWebBizAiAgentStatusUtils").isChatAiEnabled(t);
		o("WAWebGenAiAgentLogEvents").useLogViewGenAiAgentAutoReplyConfirmationDialog(n);
		var r = c(!1), a = r[0], i = r[1], l = n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), d = n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), m = n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), p = function() {
			o("WAWebGenAiAgentLogEvents").logGenAiAgentAutoReplyConfirmationDialogEvent(n ? o("WAWebGenAiAgentLogEvents").WAWebGenAIAgentUserActionTargetEnum.TURN_ON : o("WAWebGenAiAgentLogEvents").WAWebGenAIAgentUserActionTargetEnum.TURN_OFF), i(!0), o("WAWebAIAgentAIReplyUtils").mutateAiReplyStatus(t).then(function(e) {
				e || t.setForceDismissAiAgentBlockingBar(!0), o("WAWebModalManager").ModalManager.close();
			});
		}, _ = function() {
			o("WAWebGenAiAgentLogEvents").logGenAiAgentAutoReplyConfirmationDialogEvent(o("WAWebGenAiAgentLogEvents").WAWebGenAIAgentUserActionTargetEnum.CANCEL), o("WAWebModalManager").ModalManager.close();
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "ai-replies-control-popup",
			title: l,
			okText: m,
			onOK: p,
			okSpinner: a === !0,
			okButtonType: "primary",
			cancelText: s._(
				/*BTDS*/
				""
			),
			onCancel: _,
			children: d
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

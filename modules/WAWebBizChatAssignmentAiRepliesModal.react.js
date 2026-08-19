__d("WAWebBizChatAssignmentAiRepliesModal.react", [
	"fbt",
	"WAWebAiAgentAutoReplyControlMutation",
	"WAWebBizChatAssignmentModal.react",
	"WAWebChatAssignmentGatingUtils",
	"WAWebChatAssignmentLogEvents.flow",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"WAWebToast.react",
	"WAWebToastManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.chat, n = s._(
			/*BTDS*/
			""
		);
		if (!o("WAWebChatAssignmentGatingUtils").isBizAiChatAssignmentInteropTosEnabled()) return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "chat-assignment-ai-replies"
			},
			onOK: o("WAWebModalManager").closeModalManager,
			okText: r("WAWebFbtCommon")("OK"),
			children: n
		});
		var a = s._(
			/*BTDS*/
			""
		), i = s._(
			/*BTDS*/
			""
		), l = s._(
			/*BTDS*/
			""
		), c = s._(
			/*BTDS*/
			""
		), d = function() {
			m(), t.setForceDismissAiAgentBlockingBar(!0);
		}, m = function() {
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
				action: {
					actionText: r("WAWebFbtCommon")("OK"),
					dismiss: !0
				},
				msg: s._(
					/*BTDS*/
					""
				)
			}));
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "chat-assignment-ai-replies"
			},
			title: i,
			onOK: function() {
				o("WAWebAiAgentAutoReplyControlMutation").changeAiReplyStatus(t.id, "MUTED").then(function(e) {
					e.isSuccess ? o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebBizChatAssignmentModal.react"), {
						chats: [t],
						entryPoint: o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.CONVERSATION_MENU
					})) : d();
				}).catch(function() {
					d();
				}), o("WAWebModalManager").ModalManager.close();
			},
			okText: l,
			onCancel: o("WAWebModalManager").closeModalManager,
			cancelText: c,
			children: a
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

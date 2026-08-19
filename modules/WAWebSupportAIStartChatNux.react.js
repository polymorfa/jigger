__d("WAWebSupportAIStartChatNux.react", [
	"fbt",
	"WAPromiseRaceAbort",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebLoggerDebugInfo",
	"WAWebModalManager",
	"WAWebNetworkStatus",
	"WAWebNux",
	"WAWebSendSupportRequestJob",
	"WAWebSpinner.react",
	"WAWebSupportAINux.react",
	"WAWebSupportAIStartChatErrorModalLoadable",
	"WAWebSupportAiSessionWamEvent",
	"WAWebSupportChatConfirmationModal.react",
	"WAWebSupportChatStrings",
	"WAWebSupportChatUtils",
	"WAWebSupportOfflinePopUp.react",
	"WAWebWamEnumSupportAiEventType",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react",
	"useWAWebDebouncedCallback",
	"useWAWebNux",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState;
	function p(e) {
		var t = e.entityId, a = e.onEmail, i = e.supportTag, l = r("useWAWebUnmountSignal")(), c = m(!1), p = c[0], _ = c[1], f = r("useWAWebNux")(o("WAWebNux").NUX.SUPPORT_AI), g = f[0], h = f[1], y = function(t, n) {
			new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({
				supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.CREATE_SUPPORT_TICKET_ERROR,
				supportAiErrorCode: n,
				supportAiErrorMessage: t
			}).commit(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSupportAIStartChatErrorModalLoadable").SupportAIStartChatErrorModalLoadable, { onEmail: a }));
		}, C = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({ supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.START_CHAT_CLICKED }).commit(), !r("WAWebNetworkStatus").online) {
					new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({ supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.NO_INTERNET_DIALOG_SHOWN }).commit(), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebSupportOfflinePopUp.react"), {}));
					return;
				}
				_(!0);
				var e = yield o("WAWebLoggerDebugInfo").getDebugInfo({
					supportTag: i,
					convertFields: !0,
					addUserAgentDetails: !0,
					entityId: t
				});
				e.sagaKey = "saga_v1_enabled", r("WAPromiseRaceAbort")(o("WAWebSendSupportRequestJob").sendSupportRequest("#chatbot", JSON.stringify(e)), l).then(function(e) {
					if (e.message != null) {
						new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({ supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.CREATE_SUPPORT_TICKET_SUCCESS }).commit(), o("WAWebModalManager").ModalManager.close();
						var t = e.groupId;
						t !== void 0 && t.includes("@s.whatsapp.net") ? o("WAWebSupportChatUtils").openSupportChat(t) : (new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({ supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.TICKET_CREATION_DIALOG_SHOWN }).commit(), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebSupportChatConfirmationModal.react"), {})));
					} else y(e.errorText, e.errorCode), _(!1);
				}).catch(function(e) {
					var t = r("getErrorSafe")(e);
					y(t.message || JSON.stringify(t), e.code), _(!1);
				});
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), b = r("useWAWebDebouncedCallback")(function() {
			return C();
		}, 100);
		return d(function() {
			g || b();
		}, []), g ? u.jsx(r("WAWebSupportAINux.react"), {
			isSending: p,
			onOK: b,
			canCancel: !0,
			okText: o("WAWebSupportChatStrings").SupportChatStartButtonText()
		}) : u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager,
			cancelText: s._(
				/*BTDS*/
				""
			),
			tsNavigationData: {
				surface: "unknown",
				viewName: "support-chat-nux"
			},
			children: u.jsx(o("WAWebFlex.react").FlexRow, {
				justify: "center",
				align: "center",
				children: u.jsx(o("WAWebSpinner.react").Spinner, {
					stroke: 6,
					size: 24
				})
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);

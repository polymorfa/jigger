__d("WAWebAttachMenuPopupItemQuestion.react", [
	"fbt",
	"WAWebModalManager",
	"WAWebPrepareMessageSendingAction",
	"WAWebQuestions.flow",
	"WAWebQuestionsInputModalLoadable",
	"WDSIconIcHelpFilled.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { icon: {
		color: "x11i6shi",
		$$css: !0
	} };
	function d(e) {
		var t = e.chat, n = e.getComposeBoxEditorRef, a = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebQuestionsInputModalLoadable").QuestionsInputModalLoadable, {
				chat: t,
				getComposeBoxEditorRef: n,
				questionType: o("WAWebQuestions.flow").QuestionType.Question
			})), o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(t);
		}, i = function() {
			a();
		};
		return u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-question",
			onPress: i,
			Icon: r("WDSIconIcHelpFilled.react"),
			iconXstyle: c.icon,
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

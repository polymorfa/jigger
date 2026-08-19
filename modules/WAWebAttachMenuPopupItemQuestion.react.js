__d("WAWebAttachMenuPopupItemQuestion.react", [
	"fbt",
	"WAWebModalManager",
	"WAWebPrepareMessageSendingAction",
	"WAWebQuestions.flow",
	"WAWebQuestionsInputModalLoadable",
	"WDSIconIcHelpFilled.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { icon: {
		color: "x11i6shi",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(6), n = e.chat, a = e.getComposeBoxEditorRef, i;
		if (t[0] !== n || t[1] !== a) {
			var l = function() {
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebQuestionsInputModalLoadable").QuestionsInputModalLoadable, {
					chat: n,
					getComposeBoxEditorRef: a,
					questionType: o("WAWebQuestions.flow").QuestionType.Question
				})), o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(n);
			};
			i = function() {
				l();
			}, t[0] = n, t[1] = a, t[2] = i;
		} else i = t[2];
		var d = i, m;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[3] = m) : m = t[3];
		var p;
		return t[4] !== d ? (p = u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-question",
			onPress: d,
			Icon: r("WDSIconIcHelpFilled.react"),
			iconXstyle: c.icon,
			title: m
		}), t[4] = d, t[5] = p) : p = t[5], p;
	}
	l.default = d;
}), 226);

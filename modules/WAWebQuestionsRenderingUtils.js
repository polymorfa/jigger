__d("WAWebQuestionsRenderingUtils", [
	"fbt",
	"WAWebChatUnreadCount.react",
	"WAWebDBUpdateMessageTable",
	"WAWebDrawerManager",
	"WAWebFrontendMsgGetters",
	"WAWebKeyboardTabUtils",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebQuestions.flow",
	"WAWebQuestionsAdminGatingUtils",
	"WAWebQuestionsCreateResponseModalLoadable",
	"WAWebQuestionsGatingUtils",
	"WAWebQuestionsSenderGatingUtils",
	"WAWebResponsesListDrawerLoadable",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e, t) {
		var n, r;
		if (!(e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN || !o("WAWebMsgGetters").getIsQuestion(e))) {
			var a = o("WAWebFrontendMsgGetters").getChat(e.unsafe()), i = (n = (r = a.newsletterMetadata) == null ? void 0 : r.iAmAdminOrOwner()) != null ? n : !1, l;
			i ? l = t > 0 ? u.jsxs(u.Fragment, { children: [s._(
				/*BTDS*/
				""
			), u.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
				count: t,
				theme: o("WAWebChatUnreadCount.react").UnreadCountTheme.QuestionResponses
			})] }) : s._(
				/*BTDS*/
				""
			) : l = s._(
				/*BTDS*/
				""
			);
			var c = i ? "view-question-responses-cta" : "respond-to-question-cta", d = i ? function() {
				return p(e, a);
			} : function() {
				return o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebQuestionsCreateResponseModalLoadable").CreateQuestionResponseModalLoadable, {
					question: e,
					chat: a
				}));
			}, m = i ? !o("WAWebQuestionsAdminGatingUtils").isQuestionsFeatureEnabledForAdmins(a) : !o("WAWebQuestionsGatingUtils").isQuestionsFeatureEnabledForFollowers(e);
			return {
				label: l,
				testid: c,
				onClick: d,
				disabled: m
			};
		}
	}
	function d(e) {
		switch (e) {
			case o("WAWebQuestions.flow").ResponsesFilterType.ALL: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebQuestions.flow").ResponsesFilterType.CONTACTS: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebQuestions.flow").ResponsesFilterType.REPLIED: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebQuestions.flow").ResponsesFilterType.STARRED: return s._(
				/*BTDS*/
				""
			);
		}
	}
	function m(e) {
		switch (e) {
			case o("WAWebQuestions.flow").QuestionType.Question: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebQuestions.flow").QuestionType.Reply: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebQuestions.flow").QuestionType.Response: return s._(
				/*BTDS*/
				""
			);
		}
	}
	function p(e, t) {
		_(e);
		var n = !o("WAWebQuestionsSenderGatingUtils").isQuestionReplySenderEnabled(t);
		o("WAWebDrawerManager").DrawerManager.openDrawerRight(u.jsx(o("WAWebResponsesListDrawerLoadable").ResponsesListDrawerLoadable, {
			question: e,
			isReplyDisabled: n
		}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
	}
	function _(e) {
		return e.readQuestionResponsesCount = e.questionResponsesCount, o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, { readQuestionResponsesCount: e.questionResponsesCount });
	}
	l.getQuestionAction = c, l.getResponsesFilterLabel = d, l.getModalTitleFromQuestionType = m;
}), 226);

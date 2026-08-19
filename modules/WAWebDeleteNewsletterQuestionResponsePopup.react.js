__d("WAWebDeleteNewsletterQuestionResponsePopup.react", [
	"fbt",
	"WAJids",
	"WAWebCheckBox.react",
	"WAWebConfirmPopup.react",
	"WAWebContactCollection",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebModalManager",
	"WAWebNewsletterBlockUserJob",
	"WAWebNewsletterQuestionResponseCollection",
	"WAWebNewsletterQuestionResponseStateUpdateJob",
	"WAWebQuestionResponseIntegrityUtils",
	"WAWebText.react",
	"WAWebText_DONOTUSE.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = {
		marginInline6: {
			marginInlineStart: "xdzw4kq",
			marginInlineEnd: "xbelrpt",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		},
		marginTop6: {
			marginTop: "x1k70j0n",
			$$css: !0
		}
	};
	function p(t) {
		var n, a = o("react-compiler-runtime").c(28), i = t.question, l = t.response, u = d(!1), p = u[0], h = u[1], y = l.senderId && ((n = o("WAWebContactCollection").ContactCollection.get(l.senderId)) == null ? void 0 : n.name), C = y != null ? y : "~" + l.senderNotifyName, b;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			""
		), a[0] = b) : b = a[0];
		var v = b, S;
		a[1] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		), a[1] = S) : S = a[1];
		var R = S, L;
		a[2] !== C ? (L = s._(
			/*BTDS*/
			"",
			[s._param("response sender pushname", C != null ? C : "this person")]
		), a[2] = C, a[3] = L) : L = a[3];
		var E = L, k;
		a[4] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
			/*BTDS*/
			""
		), a[4] = k) : k = a[4];
		var I = k, T;
		a[5] !== p || a[6] !== i || a[7] !== l || a[8] !== C ? (T = function() {
			o("WAWebModalManager").ModalManager.closeMedia();
			var e = o("WAWebFrontendMsgGetters").getChat(i);
			i.set("responseServerId", l.responseServerId);
			var t = function() {
				return o("WAWebNewsletterQuestionResponseStateUpdateJob").updateNewsletterQuestionResponseState({
					newsletterId: o("WAJids").toNewsletterJid(e.id.toString()),
					responseServerId: l.responseServerId.toString(),
					serverId: l.questionServerId.toString(),
					state: "UNHIDE"
				}).then(function(e) {
					(e == null ? void 0 : e.success) === !0 && o("WAWebNewsletterQuestionResponseCollection").QuestionResponseCollection.add(l);
				});
			};
			o("WAWebNewsletterQuestionResponseStateUpdateJob").updateNewsletterQuestionResponseState({
				newsletterId: o("WAJids").toNewsletterJid(e.id.toString()),
				responseServerId: l.responseServerId.toString(),
				serverId: l.questionServerId.toString(),
				state: "HIDE"
			}).then(function(t) {
				(t == null ? void 0 : t.success) === !0 ? (o("WAWebNewsletterQuestionResponseCollection").QuestionResponseCollection.remove(l.id), p && o("WAWebNewsletterBlockUserJob").blockNewsletterUser({
					newsletterId: o("WAJids").toNewsletterJid(e.id.toString()),
					responseServerId: l.responseServerId.toString(),
					serverId: l.questionServerId.toString()
				}).then(function(e) {
					(e == null ? void 0 : e.success) === !0 ? o("WAWebQuestionResponseIntegrityUtils").showBlockSuccessToast(C) : o("WAWebQuestionResponseIntegrityUtils").showBlockFailureToast();
				}).catch(g)) : o("WAWebQuestionResponseIntegrityUtils").showDeleteFailureToast();
			}).catch(f).finally(function() {
				o("WAWebModalManager").ModalManager.close(), !p && o("WAWebQuestionResponseIntegrityUtils").showDeleteSuccessToastWithUndo(t);
			});
		}, a[5] = p, a[6] = i, a[7] = l, a[8] = C, a[9] = T) : T = a[9];
		var D = T, x;
		a[10] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), a[10] = x) : x = a[10];
		var $;
		a[11] === Symbol.for("react.memo_cache_sentinel") ? ($ = c.jsx(o("WAWebText.react").WAWebTextMuted, { children: R }), a[11] = $) : $ = a[11];
		var P;
		a[12] === Symbol.for("react.memo_cache_sentinel") ? (P = [m.marginInline6, o("WDSPaddings.stylex").wdsPaddings.paddingTop2], a[12] = P) : P = a[12];
		var N;
		a[13] === Symbol.for("react.memo_cache_sentinel") ? (N = function() {
			return h(_);
		}, a[13] = N) : N = a[13];
		var M;
		a[14] !== p ? (M = c.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: P,
			testid: "response-delete-upsell-block",
			children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
				onChange: N,
				checked: p,
				id: "additional-action-checkbox",
				testid: "visual-checkbox"
			})
		}), a[14] = p, a[15] = M) : M = a[15];
		var w;
		a[16] !== E ? (w = c.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
			htmlFor: "additional-action-checkbox",
			weight: "medium",
			testid: "delete-popup-additional-action-label-text",
			children: E
		}), a[16] = E, a[17] = w) : w = a[17];
		var A;
		a[18] === Symbol.for("react.memo_cache_sentinel") ? (A = c.jsx(o("WAWebText.react").WAWebTextMuted, {
			xstyle: m.marginTop6,
			testid: "delete-popup-additional-action-subtext",
			children: I
		}), a[18] = A) : A = a[18];
		var F;
		a[19] !== w ? (F = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: o("WDSMargins.stylex").wdsMargins.marginStart12,
			children: [w, A]
		}), a[19] = w, a[20] = F) : F = a[20];
		var O;
		a[21] === Symbol.for("react.memo_cache_sentinel") ? (O = c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginVer12))), a[21] = O) : O = a[21];
		var B;
		a[22] !== M || a[23] !== F ? (B = c.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: o("WDSMargins.stylex").wdsMargins.marginTop20,
			children: [
				M,
				F,
				O
			]
		}), a[22] = M, a[23] = F, a[24] = B) : B = a[24];
		var W;
		return a[25] !== D || a[26] !== B ? (W = c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: D,
			okText: x,
			onCancel: o("WAWebModalManager").closeModalManager,
			okButtonType: "solid-warning",
			title: v,
			children: [$, B]
		}), a[25] = D, a[26] = B, a[27] = W) : W = a[27], W;
	}
	function _(e) {
		return !e;
	}
	function f() {
		o("WAWebQuestionResponseIntegrityUtils").showDeleteFailureToast();
	}
	function g() {
		return o("WAWebQuestionResponseIntegrityUtils").showBlockFailureToast();
	}
	l.default = p;
}), 226);

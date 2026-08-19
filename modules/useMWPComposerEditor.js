__d("useMWPComposerEditor", [
	"fbt",
	"CometTriggerAccessibilityAlertContext",
	"Int64Hooks",
	"Lexical",
	"LexicalText",
	"MWChatMessagesOnChatTabLoadTracker",
	"MWComposerKeyCommandFocusManagerContext",
	"MWDraftMessages.react",
	"MWFBLogger",
	"MWPComposerDraftMessages",
	"MWV2ChatComposerGetViewContent",
	"MWV2ComposerActionsContext.react",
	"MWV2ComposerHasContentContext.react",
	"emptyFunction",
	"mwpLexicalCreateEditor",
	"react",
	"useIsMessengerPWA",
	"useLexicalInitializeEditor__DEPRECATED",
	"useMWIsOffline",
	"useMWPComposerAutoFocus",
	"useMWPComposerEditorDraftText",
	"useMWPLexicalClearEditor",
	"useMWPLexicalCommitMessageOnEnter",
	"useMWXLexicalHasText",
	"useMWXLexicalOnTypingChanged"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = u.useContext, d = u.useEffect, m = u.useMemo, p = u.useRef, _ = [], f = function(t) {
		return t.read(function() {
			return o("LexicalText").$rootTextContent();
		});
	};
	function g(e) {
		var t = e.customizedRanges, n = e.getTextFromEditorState, a = n === void 0 ? f : n, i = e.isPreviewThread, l = i === void 0 ? !1 : i, u = e.isSendDisabled, g = u === void 0 ? !1 : u, h = e.mediaStaging, y = h === void 0 ? _ : h, C = e.onSendMessage, b = e.onTypingStateChanged, v = e.threadKey, S = e.clearFormatAfterSend, R = e.isQuickchat, L = R === void 0 ? !1 : R, E = e.focusEditorDelayed, k = e.editorNodes, I = e.editorTheme, T = e.threadType, D = e.composerEntrypointForLogging, x = e.subthreadParentMessageId, $ = p(null), P = m(function() {
			return r("mwpLexicalCreateEditor")({
				nodes: k,
				theme: I
			});
		}, [k, I]), N = y.length > 0;
		r("useLexicalInitializeEditor__DEPRECATED")(P), r("useMWPLexicalClearEditor")(P, S), r("useMWPComposerAutoFocus")({
			editor: P,
			focusEditorDelayed: E,
			hasUnsentAttachments: N,
			isPreviewThread: l,
			isQuickchat: L
		});
		var M = r("useMWPComposerEditorDraftText")({
			editor: P,
			isPreviewThread: l,
			isQuickchat: L,
			subthreadParentMessageId: x,
			threadKey: v,
			threadType: T
		}), w = o("MWDraftMessages.react").useMWUpdateDraft(), A = o("useMWXLexicalHasText").useMWXLexicalHasText({
			editor: P,
			initialValue: M != null && M !== ""
		}), F = A || N, O = o("MWV2ComposerHasContentContext.react").useComposerHasContext(), B = O.hasContentRef;
		d(function() {
			B != null && (B.current = A);
		}, [A, B]), r("useMWXLexicalOnTypingChanged")({
			editor: P,
			onTypingStateChanged: b
		});
		var W = c(o("MWV2ComposerActionsContext.react").MWV2ComposerActionsContext), q = W.onMessageSendAttempt, U = c(r("CometTriggerAccessibilityAlertContext")), V = r("useMWIsOffline")(), H = r("useIsMessengerPWA")(), G = V && H, z = o("Int64Hooks").useCallbackInt64(function() {
			var e;
			if (!G) {
				var n = (e = o("MWPComposerDraftMessages").getDraftMessage(v, x)) == null ? void 0 : e.id;
				if (o("MWPComposerDraftMessages").updateDraftMessage({
					message: null,
					subthreadParentMessageId: x,
					threadKey: v
				}), w == null || w(v, null, x), q == null || q(F), !!F) {
					o("MWChatMessagesOnChatTabLoadTracker").trackSendFor(v), o("MWFBLogger").MWLogger().tags(["MWPComposerEditor", "Composer"]).debug("Calling onSendMessage");
					var i = t != null ? t(P, o("MWPComposerDraftMessages").getNonEmptyDraftMessageKey(v, x)) : r("MWV2ChatComposerGetViewContent").getRanges(P), l = P.getEditorState(), u = a(l);
					P.dispatchCommand(o("Lexical").CLEAR_EDITOR_COMMAND), C(u, i, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, n, D), P.focus();
					var c = P.registerUpdateListener(function() {
						c(), P.focus(function() {});
					});
					U(s._(
						/*BTDS*/
						""
					));
				}
			}
		}, [
			w,
			G,
			q,
			F,
			P,
			v,
			t,
			a,
			C,
			D,
			x,
			U
		]), j = g ? r("emptyFunction") : z;
		return r("useMWPLexicalCommitMessageOnEnter")(P, j), d(function() {
			return P.registerCommand(o("Lexical").KEY_ESCAPE_COMMAND, function(e) {
				try {
					var t = document.querySelectorAll("[data-scope=\"messages_table\"][tabindex=\"0\"]");
					if (t.length > 0) {
						var n = t[t.length - 1];
						if (n instanceof HTMLElement) return e.preventDefault(), e.stopImmediatePropagation(), n.focus(), !0;
					}
				} catch (e) {}
				return !1;
			}, o("Lexical").COMMAND_PRIORITY_LOW);
		}, [P]), o("MWComposerKeyCommandFocusManagerContext").useMWComposerKeyCommandFocusRegister($.current), {
			editor: P,
			editorElementRef: $,
			hasStuffToSend: F,
			sendMessage: j
		};
	}
	l.default = g;
}), 226);

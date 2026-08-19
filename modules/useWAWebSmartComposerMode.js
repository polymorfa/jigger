__d("useWAWebSmartComposerMode", [
	"Promise",
	"WALogger",
	"WAWebAIAgentAIReplyUtils",
	"WAWebBizAiMuteUnmuteErrorDrawer.react",
	"WAWebBizAiSmartComposerAiRepliesStatusMutation",
	"WAWebBizAiSmartComposerMode",
	"WAWebChatCollection",
	"WAWebChatGetters",
	"WAWebModalManager",
	"WAWebProtobufsE2E.pb",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"useWAWebChatValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p = m || (m = o("react")), _ = m.useCallback, f = { skipSideEffects: !0 }, g = new WeakMap();
	function h(e) {
		var t = o("react-compiler-runtime").c(9), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = [o("WAWebChatGetters").getCapiThreadControl, o("WAWebChatGetters").getSuggestedRepliesEnabled], t[0] = n) : n = t[0];
		var r = o("useWAWebChatValues").useChatValues(e, n), a = r[0], i = r[1], l;
		t[1] !== a || t[2] !== i ? (l = o("WAWebBizAiSmartComposerMode").resolveSmartComposerMode(a, i), t[1] = a, t[2] = i, t[3] = l) : l = t[3];
		var s = l, u;
		t[4] !== e ? (u = function(n) {
			return y(e, n);
		}, t[4] = e, t[5] = u) : u = t[5];
		var c = u, d;
		return t[6] !== c || t[7] !== s ? (d = {
			changeMode: c,
			mode: s
		}, t[6] = c, t[7] = s, t[8] = d) : d = t[8], d;
	}
	function y(e, t) {
		var r = o("WAWebChatCollection").ChatCollection.get(e);
		if (r == null) return (d || (d = n("Promise"))).resolve();
		var a = E(r), i = o("WAWebBizAiSmartComposerMode").getSmartComposerMode(r);
		if (i === t) return (d || (d = n("Promise"))).resolve();
		var l = r.isAiHandoff;
		return L(r, t), a.desired = t, a.inFlight ? (d || (d = n("Promise"))).resolve() : (a.serverConfirmed = i, a.inFlight = !0, o("WAWebAIAgentAIReplyUtils").trackAiReplyMutation(r, function() {
			return C(r, e, a, l);
		}).finally(function() {
			a.inFlight = !1;
		}));
	}
	function C(e, t, n, r) {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, a) {
			if (n.desired !== n.serverConfirmed) {
				var i = n.desired, l = yield v(t, i);
				if (!l.success) {
					if (n.desired !== i) {
						yield C(e, t, n, a);
						return;
					}
					n.desired = n.serverConfirmed, e.isAiHandoff = a, L(e, n.serverConfirmed), o("WAWebModalManager").ModalManager.open(p.jsx(r("WAWebBizAiMuteUnmuteErrorDrawer.react"), { isTurnOn: i !== "manual" }));
					return;
				}
				var s = n.serverConfirmed;
				n.serverConfirmed = i, o("WAWebAIAgentAIReplyUtils").recordAiReplyServerConfirmation(e, R(i), l.updateTimestampMs), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
					"[SmartComposer] mode ",
					" -> ",
					" chat=",
					""
				])), s, i, t.toLogString()).sendLogs("biz-ai-smart-composer-mode-change"), yield C(e, t, n, a);
			}
		}), b.apply(this, arguments);
	}
	function v(e, t) {
		return S.apply(this, arguments);
	}
	function S() {
		return S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = o("WAWebBizAiSmartComposerMode").getStatusForMode(t), a = n.status, i = n.suggestedRepliesEnabled;
			try {
				return yield o("WAWebBizAiSmartComposerAiRepliesStatusMutation").changeAiRepliesStatus(e, a, i);
			} catch (e) {
				return o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[SmartComposer] changeMode mutation failed"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-smart-composer-change-mode-fail"), { success: !1 };
			}
		}), S.apply(this, arguments);
	}
	function R(e) {
		return e === "ai_agent" ? o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN : o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_PASSED;
	}
	function L(t, n) {
		t.setCapiThreadControl(R(n), f).catch(function(t) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[SmartComposer] optimistic thread-control write failed"]))).catching(r("getErrorSafe")(t)).sendLogs("biz-ai-smart-composer-optimistic-mode-fail");
		}), t.setSuggestedRepliesEnabled(n === "suggestions").catch(function(e) {
			o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[SmartComposer] optimistic suggested-replies write failed"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-smart-composer-optimistic-suggestions-fail");
		});
	}
	function E(e) {
		var t = g.get(e);
		if (t == null) {
			var n = o("WAWebBizAiSmartComposerMode").getSmartComposerMode(e);
			t = {
				desired: n,
				serverConfirmed: n,
				inFlight: !1
			}, g.set(e, t);
		}
		return t;
	}
	l.useWAWebSmartComposerMode = h;
}), 98);

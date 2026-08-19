__d("WAWebAIAgentAIReplyUtils", [
	"WALogger",
	"WAWebAiAgentAutoReplyControlMutation",
	"WAWebBizAiAgentStatusUtils",
	"WAWebBizAiMuteUnmuteErrorDrawer.react",
	"WAWebModalManager",
	"WAWebProtobufsE2E.pb",
	"getErrorSafe",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = { skipSideEffects: !0 }, d = new WeakMap();
	function m(e) {
		return e === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN ? o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_PASSED : o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN;
	}
	function p(e) {
		var t = d.get(e);
		return t == null && (t = {
			desired: e.capiThreadControl,
			serverConfirmed: e.capiThreadControl,
			watermarkMs: 0,
			inFlight: !1,
			pendingMutations: 0
		}, d.set(e, t)), t;
	}
	function _(e, t) {
		return e.pendingMutations += 1, t().finally(function() {
			e.pendingMutations = Math.max(0, e.pendingMutations - 1);
		});
	}
	function f(e) {
		var t = p(e), n = e.isAiHandoff;
		return t.inFlight ? t.desired = m(t.desired) : (t.serverConfirmed = e.capiThreadControl, t.desired = o("WAWebBizAiAgentStatusUtils").isChatAiEnabled(e) ? o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_PASSED : o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN), e.setCapiThreadControl(t.desired, c), t.inFlight ? Promise.resolve(!0) : (t.inFlight = !0, _(t, function() {
			return g(e, t, e.unreadCount, n);
		}).finally(function() {
			t.inFlight = !1;
		}));
	}
	async function g(t, n, a, i) {
		if (n.desired === n.serverConfirmed) return !0;
		var l = n.desired, s = !1, d = null;
		try {
			var m = await o("WAWebAiAgentAutoReplyControlMutation").changeAiReplyStatus(t.id, l === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN ? "ENABLED" : "MUTED");
			s = m.isSuccess === !0, m.isSuccess === !0 && (d = m.updateTimestampMs);
		} catch (t) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[Maiba] mutateAiReplyStatus failed"]))).catching(r("getErrorSafe")(t)).sendLogs("maiba-mutate-ai-reply-fail");
		}
		return s ? (n.serverConfirmed = l, d != null && (n.watermarkMs = Math.max(n.watermarkMs, d)), g(t, n, a, i)) : (n.desired = n.serverConfirmed, t.unreadCount = a, t.isAiHandoff = i, t.setCapiThreadControl(n.serverConfirmed, c), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebBizAiMuteUnmuteErrorDrawer.react"), { isTurnOn: l === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN })), !1);
	}
	function h(e, t) {
		return _(p(e), t);
	}
	function y(e, t, n) {
		var r = p(e);
		n != null && (r.watermarkMs = Math.max(r.watermarkMs, n)), r.serverConfirmed = t;
	}
	function C(e) {
		var t = e.chat, n = e.options, r = e.status, o = e.timestampMs, a = p(t);
		if (o != null) {
			if (o <= a.watermarkMs) return;
			a.watermarkMs = o;
		}
		a.pendingMutations > 0 || (a.serverConfirmed = r, a.desired = r, t.capiThreadControl !== r && ((n == null ? void 0 : n.suppressNotification) === !0 ? t.setCapiThreadControl(r, c) : t.setCapiThreadControl(r)));
	}
	l.mutateAiReplyStatus = f, l.trackAiReplyMutation = h, l.recordAiReplyServerConfirmation = y, l.applyServerEchoThreadControl = C;
}), 98);

__d("useWAWebSmartComposerSuggestion", [
	"WAWebBizAiSmartComposerCache",
	"WAWebBizAiSmartComposerErrorMapping",
	"WAWebBizAiSmartComposerMsgClassification",
	"WAWebBizAiSmartComposerSuggestionFetcher",
	"WAWebBizAiSmartComposerSuggestionStateMachine",
	"WAWebFrontendChatGetters",
	"WAWebLidMigrationUtils",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebChatValues",
	"useWAWebOnUnmount",
	"useWAWebSmartComposerMode",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useEffect, d = s.useReducer, m = s.useRef, p = 1e3, _ = 1e3;
	function f(e) {
		var t, a, i = o("react-compiler-runtime").c(29), l = d(o("WAWebBizAiSmartComposerSuggestionStateMachine").suggestionReducer, o("WAWebBizAiSmartComposerSuggestionStateMachine").INITIAL_STATE), s = l[0], u = l[1], f = o("useWAWebSmartComposerMode").useWAWebSmartComposerMode(e), g = f.mode, h;
		if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
			var y;
			h = [
				(y = o("WAWebFrontendChatGetters")).getPreviewMessage,
				y.getHasDraftMessage,
				y.getComposeQuotedMsg,
				y.getPttRecordingSession
			], i[0] = h;
		} else h = i[0];
		var C = o("useWAWebChatValues").useChatValues(e, h), b = C[0], v = C[1], S = C[2], R = C[3], L = r("useWAWebUnmountSignal")(), E = m(null), k = m(null), I = m(null), T = m(null), D;
		i[1] === Symbol.for("react.memo_cache_sentinel") ? (D = new Set(), i[1] = D) : D = i[1];
		var x = m(D), $ = m(!1), P = g === "suggestions", N;
		i[2] !== b ? (N = o("WAWebBizAiSmartComposerMsgClassification").isInboundConsumerMsg(b) ? b : null, i[2] = b, i[3] = N) : N = i[3];
		var M = N, w = (t = M == null ? void 0 : M.id.id) != null ? t : null, A = (a = M == null ? void 0 : M.t) != null ? a : null, F = v || S != null || R != null, O = s.status === "success" ? s.stanzaId : null, B;
		i[4] === Symbol.for("react.memo_cache_sentinel") ? (B = function() {
			var e;
			k.current != null && (window.clearTimeout(k.current), k.current = null), (e = E.current) == null || e.abort(), E.current = null;
		}, i[4] = B) : B = i[4];
		var W = B, q;
		i[5] !== e || i[6] !== L ? (q = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n, r, a, i, l = o("WAWebBizAiSmartComposerCache").getCachedSuggestion(e, t);
				if (l != null) {
					u({
						type: "fetch_success",
						stanzaId: t,
						suggestion: l
					});
					return;
				}
				var s = new AbortController();
				E.current = s;
				var c = yield o("WAWebBizAiSmartComposerSuggestionFetcher").fetchSuggestedReply({
					chatId: e,
					stanzaId: t,
					consumerLid: (n = (r = o("WAWebLidMigrationUtils").toLid(e)) == null ? void 0 : r.user) != null ? n : null,
					consumerPhoneNumber: (a = (i = o("WAWebLidMigrationUtils").toPn(e)) == null ? void 0 : i.user) != null ? a : null
				}, s.signal);
				s.signal.aborted || L.aborted || (c.ok ? (o("WAWebBizAiSmartComposerCache").cacheSuggestion(e, t, c.suggestion), u({
					type: "fetch_success",
					stanzaId: t,
					suggestion: c.suggestion
				})) : (o("WAWebBizAiSmartComposerErrorMapping").mapSuggestedReplyErrorToState(c.code) === "quota_handoff" && ($.current = !0), u({
					type: "fetch_error",
					stanzaId: t,
					code: c.code
				})));
			});
			return function(n) {
				return t.apply(this, arguments);
			};
		})(), i[5] = e, i[6] = L, i[7] = q) : q = i[7];
		var U = q, V;
		i[8] !== U ? (V = function(t, n) {
			var e = n != null ? Date.now() - n * _ : 1 / 0;
			k.current = window.setTimeout(function() {
				k.current = null, u({
					type: "fetch_start",
					stanzaId: t
				}), U(t);
			}, Math.min(p, Math.max(0, p - e)));
		}, i[8] = U, i[9] = V) : V = i[9];
		var H = V, G;
		i[10] !== e ? (G = function(n) {
			var t = I.current != null;
			W(), I.current = n;
			var r = o("WAWebBizAiSmartComposerCache").getCachedSuggestion(e, n);
			return r != null ? (T.current = n, u({
				type: "fetch_start",
				stanzaId: n
			}), u({
				type: "fetch_success",
				stanzaId: n,
				suggestion: r
			}), !0) : (T.current = null, u(t ? {
				type: "newer_message",
				stanzaId: n
			} : {
				type: "fetch_start",
				stanzaId: n
			}), !1);
		}, i[10] = e, i[11] = G) : G = i[11];
		var z = G, j;
		i[12] === Symbol.for("react.memo_cache_sentinel") ? (j = function() {
			W(), I.current = null, T.current = null, x.current.clear(), $.current = !1, u({ type: "reset" });
		}, i[12] = j) : j = i[12];
		var K = j, Q, X;
		i[13] !== z || i[14] !== P || i[15] !== F || i[16] !== O || i[17] !== H || i[18] !== w || i[19] !== A ? (Q = function() {
			if (!P || w == null) {
				K();
				return;
			}
			if (!x.current.has(w) && !(w !== I.current && z(w))) {
				if (F) {
					W(), T.current = null;
					return;
				}
				$.current || T.current !== w && (T.current = w, O !== w && H(w, A));
			}
		}, X = [
			z,
			W,
			P,
			F,
			O,
			K,
			H,
			w,
			A
		], i[13] = z, i[14] = P, i[15] = F, i[16] = O, i[17] = H, i[18] = w, i[19] = A, i[20] = Q, i[21] = X) : (Q = i[20], X = i[21]), c(Q, X), r("useWAWebOnUnmount")(W);
		var Y;
		i[22] === Symbol.for("react.memo_cache_sentinel") ? (Y = function() {
			W();
			var e = I.current;
			e != null && x.current.add(e), u({ type: "dismiss" });
		}, i[22] = Y) : Y = i[22];
		var J = Y, Z;
		i[23] !== s.stanzaId || i[24] !== s.status ? (Z = function() {
			s.status === "success" && (W(), x.current.add(s.stanzaId), u({ type: "dismiss" }));
		}, i[23] = s.stanzaId, i[24] = s.status, i[25] = Z) : Z = i[25];
		var ee = Z, te = F ? o("WAWebBizAiSmartComposerSuggestionStateMachine").INITIAL_STATE : s, ne;
		return i[26] !== te || i[27] !== ee ? (ne = {
			cardState: te,
			onDismiss: J,
			onTapSuggestion: ee
		}, i[26] = te, i[27] = ee, i[28] = ne) : ne = i[28], ne;
	}
	l.useWAWebSmartComposerSuggestion = f;
}), 98);

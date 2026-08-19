__d("useWAWebNewsletterPinnedMessages", [
	"WATimeUtils",
	"WAWebChatGetters",
	"WAWebNewsletterHydratePinnedMessagesAction",
	"WAWebNewsletterMsgByServerId",
	"WAWebNewsletterPinDisplay",
	"WAWebNewsletterPinGatingUtils",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue",
	"useWAWebModelValues",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useMemo, d = s.useRef, m = s.useState, p = 1;
	function _(e) {
		var t, n = o("react-compiler-runtime").c(45), a = e.newsletterMetadata, i = (t = o("useWAWebModelValues").useOptionalModelValues(a, ["pinnedMessages"])) == null ? void 0 : t.pinnedMessages, l;
		n[0] !== e ? (l = o("WAWebChatGetters").getIsNewsletter(e) && o("WAWebNewsletterPinGatingUtils").isChannelMessagePinReadEnabled(), n[0] = e, n[1] = l) : l = n[1];
		var s = l, c;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (c = [
			"add",
			"remove",
			"change",
			"reset"
		], n[2] = c) : c = n[2];
		var _;
		n[3] !== e || n[4] !== s ? (_ = function() {
			return s ? e.getAllMsgs() : [];
		}, n[3] = e, n[4] = s, n[5] = _) : _ = n[5];
		var g;
		n[6] !== s ? (g = [s], n[6] = s, n[7] = g) : g = n[7];
		var h = r("useWAWebEventTargetValue")(s ? e.msgs : null, c, _, g), y = m(f), C = y[0], b = y[1], v;
		n[8] !== C || n[9] !== i || n[10] !== s ? (v = s ? o("WAWebNewsletterPinDisplay").filterActiveNewsletterPins(i != null ? i : [], C) : [], n[8] = C, n[9] = i, n[10] = s, n[11] = v) : v = n[11];
		var S = v, R;
		n[12] !== h ? (R = o("WAWebNewsletterMsgByServerId").buildMsgByServerId(h), n[12] = h, n[13] = R) : R = n[13];
		var L = R, E;
		n[14] !== L ? (E = function(t) {
			return L.has(t);
		}, n[14] = L, n[15] = E) : E = n[15];
		var k;
		n[16] !== S || n[17] !== E ? (k = o("WAWebNewsletterPinDisplay").getNewsletterPinsToDisplay(S, E), n[16] = S, n[17] = E, n[18] = k) : k = n[18];
		var I = k, T = I.nextExpiryTs(), D;
		n[19] === Symbol.for("react.memo_cache_sentinel") ? (D = function() {
			return b(o("WATimeUtils").unixTime());
		}, n[19] = D) : D = n[19];
		var x;
		n[20] !== T ? (x = T != null ? o("WATimeUtils").castToUnixTime(T + p) : o("WATimeUtils").castToUnixTime(0), n[20] = T, n[21] = x) : x = n[21];
		var $;
		n[22] === Symbol.for("react.memo_cache_sentinel") ? ($ = { isGlobal: !0 }, n[22] = $) : $ = n[22];
		var P = o("useWAWebTimeout").useAlarm(D, x, $), N = P[0], M = P[1], w, A;
		n[23] !== M || n[24] !== T || n[25] !== N ? (w = function() {
			if (T == null) {
				M();
				return;
			}
			N();
		}, A = [
			T,
			N,
			M
		], n[23] = M, n[24] = T, n[25] = N, n[26] = w, n[27] = A) : (w = n[26], A = n[27]), u(w, A);
		var F;
		n[28] !== I ? (F = I.unavailableServerIds(), n[28] = I, n[29] = F) : F = n[29];
		var O = F, B;
		n[30] === Symbol.for("react.memo_cache_sentinel") ? (B = new Set(), n[30] = B) : B = n[30];
		var W = d(B), q = d(null), U;
		n[31] !== e || n[32] !== h.length || n[33] !== O ? (U = function() {
			if (!(h.length === 0 || O.length === 0)) {
				var t = e.id.toJid();
				q.current !== t && (q.current = t, W.current = new Set());
				var n = new AbortController();
				return o("WAWebNewsletterHydratePinnedMessagesAction").hydrateNewsletterPinnedMessages(e, O, W.current, n.signal).then(function(e) {
					q.current === t && (W.current = e);
				}), (function() {
					return n.abort();
				});
			}
		}, n[31] = e, n[32] = h.length, n[33] = O, n[34] = U) : U = n[34];
		var V;
		n[35] !== e || n[36] !== h || n[37] !== O ? (V = [
			e,
			O,
			h
		], n[35] = e, n[36] = h, n[37] = O, n[38] = V) : V = n[38], u(U, V);
		var H;
		e: {
			if (!s) {
				var G;
				n[39] === Symbol.for("react.memo_cache_sentinel") ? (G = [], n[39] = G) : G = n[39], H = G;
				break e;
			}
			var z;
			if (n[40] !== L || n[41] !== I) {
				var j;
				n[43] !== L ? (j = function(t, n) {
					var e = L.get(n);
					return e != null && t.push(e), t;
				}, n[43] = L, n[44] = j) : j = n[44], z = I.resolvedServerIdsDescending().reduce(j, []), n[40] = L, n[41] = I, n[42] = z;
			} else z = n[42];
			H = z;
		}
		return H;
	}
	function f() {
		return o("WATimeUtils").unixTime();
	}
	l.default = _;
}), 98);

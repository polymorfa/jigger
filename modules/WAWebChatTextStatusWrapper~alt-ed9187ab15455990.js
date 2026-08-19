__d("WAWebChatTextStatusWrapper", [
	"fbt",
	"WAWebContactCollection",
	"WAWebEmoji",
	"WAWebEmoji.react",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebIdleComponent.react",
	"WAWebStateUtils",
	"WAWebTextStatusAction",
	"WAWebTextStatusCollection",
	"WAWebTextStatusGatingUtils",
	"WAWebTextStatusUtils",
	"WAWebUserPrefsMeUser",
	"react",
	"react-compiler-runtime",
	"useWAWebContactValues",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect, d = u.jsx(u.Fragment, { children: s._(
		/*BTDS*/
		""
	) });
	function m(e) {
		var t, n = o("WAWebContactCollection").ContactCollection.gadd(e), r = n.getStatus(), a = (t = o("WAWebFrontendContactGetters")).getTextStatusString(n), i = t.getTextStatusEmoji(n), l = t.getTextStatusLastUpdateTime(n), s = t.getTextStatusExpiryTs(n), u = t.getTextStatusEphemeralDuration(n), c = o("WAWebTextStatusUtils").isTextStatusNotFetched(l);
		if (!o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) return !1;
		if (o("WAWebTextStatusUtils").shouldDisplayTextStatus(a, i, l, s, u)) return !0;
		if (o("WAWebUserPrefsMeUser").isMeAccount(e)) return !1;
		if (!o("WAWebTextStatusUtils").hasEverHadTextStatus(l) && !c && o("WAWebTextStatusUtils").hasCustomAboutSet(r)) {
			var d, m, p = (d = (m = r.status) == null ? void 0 : m.trim()) != null ? d : "";
			return p !== "";
		}
		return !1;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(58), n = e.contactId, a = e.ellipsify, i = e.waitIdle, l = a === void 0 ? !0 : a, s, m;
		t[0] !== n ? (s = o("WAWebContactCollection").ContactCollection.gadd(n), m = s.getStatus(), t[0] = n, t[1] = s, t[2] = m) : (s = t[1], m = t[2]);
		var p = m, _, f;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = [
			"id",
			"stale",
			"status"
		], f = { isStrong: !1 }, t[3] = _, t[4] = f) : (_ = t[3], f = t[4]);
		var g = o("useWAWebModelValues").useModelValues(p, _, f), h;
		if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
			var y;
			h = [
				(y = o("WAWebFrontendContactGetters")).getTextStatusString,
				y.getTextStatusEmoji,
				y.getTextStatusLastUpdateTime,
				y.getTextStatusExpiryTs,
				y.getTextStatusEphemeralDuration
			], t[5] = h;
		} else h = t[5];
		var C = o("useWAWebContactValues").useContactValues(s.id, h), b = C[0], v = C[1], S = C[2], R = C[3], L = C[4], E;
		t[6] !== v || t[7] !== L || t[8] !== R || t[9] !== S || t[10] !== b ? (E = o("WAWebTextStatusUtils").shouldDisplayTextStatus(b, v, S, R, L), t[6] = v, t[7] = L, t[8] = R, t[9] = S, t[10] = b, t[11] = E) : E = t[11];
		var k = E, I;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (I = u.jsx(u.Fragment, {}), t[12] = I) : I = t[12];
		var T = I, D;
		t[13] !== k || t[14] !== l || t[15] !== v || t[16] !== b ? (D = function() {
			if (!k) return T;
			var e;
			if (v != null) {
				var t = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(v);
				t != null && (e = u.jsx("div", {
					className: "x1gabggj",
					children: u.jsx(r("WAWebEmoji.react"), {
						emoji: t,
						size: "small"
					}, "low-res")
				}));
			}
			return u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				children: [e, u.jsx(o("WAWebEmojiText.react").EmojiText, {
					direction: "auto",
					selectable: !0,
					ellipsify: l === !1 ? void 0 : !0,
					titlify: !0,
					text: b != null ? b : "",
					breakWord: !0
				})]
			});
		}, t[13] = k, t[14] = l, t[15] = v, t[16] = b, t[17] = D) : D = t[17];
		var x = D, $;
		t[18] !== S ? ($ = o("WAWebTextStatusUtils").isTextStatusNotFetched(S), t[18] = S, t[19] = $) : $ = t[19];
		var P = $, N;
		t[20] !== g || t[21] !== v || t[22] !== b ? (N = !b && !v && o("WAWebTextStatusUtils").isLegacyAboutNotFetched(g), t[20] = g, t[21] = v, t[22] = b, t[23] = N) : N = t[23];
		var M = N, w;
		t[24] !== n ? (w = o("WAWebUserPrefsMeUser").isMeAccount(n), t[24] = n, t[25] = w) : w = t[25];
		var A = w, F;
		t[26] !== S ? (F = o("WAWebTextStatusUtils").hasEverHadTextStatus(S), t[26] = S, t[27] = F) : F = t[27];
		var O = F, B;
		t[28] !== g ? (B = o("WAWebStateUtils").unproxy(g), t[28] = g, t[29] = B) : B = t[29];
		var W = B.stale, q, U;
		t[30] !== O || t[31] !== n || t[32] !== A || t[33] !== W || t[34] !== P ? (q = function() {
			!A && !O && !P && W && o("WAWebTextStatusCollection").TextStatusCollection.find(n);
		}, U = [
			n,
			A,
			O,
			P,
			W
		], t[30] = O, t[31] = n, t[32] = A, t[33] = W, t[34] = P, t[35] = q, t[36] = U) : (q = t[35], U = t[36]), c(q, U);
		var V;
		if (t[37] !== O || t[38] !== k || t[39] !== x || t[40] !== A || t[41] !== g || t[42] !== W || t[43] !== P) {
			var H = function() {
				return o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() ? k ? x() : !A && !O && !P && o("WAWebTextStatusUtils").hasCustomAboutSet(g) ? W ? d : u.jsx(u.Fragment, { children: g.status }) : T : T;
			};
			V = H(), t[37] = O, t[38] = k, t[39] = x, t[40] = A, t[41] = g, t[42] = W, t[43] = P, t[44] = V;
		} else V = t[44];
		var G = V, z;
		t[45] !== O || t[46] !== n || t[47] !== G || t[48] !== A || t[49] !== M || t[50] !== P || t[51] !== S ? (z = function() {
			var e = async function() {
				var e;
				return P ? e = o("WAWebTextStatusAction").getTextStatus(n, S) : !A && !O && M && (e = o("WAWebTextStatusCollection").TextStatusCollection.find(n)), e;
			};
			return e(), G;
		}, t[45] = O, t[46] = n, t[47] = G, t[48] = A, t[49] = M, t[50] = P, t[51] = S, t[52] = z) : z = t[52];
		var j = z, K;
		return t[53] !== n || t[54] !== j || t[55] !== G || t[56] !== i ? (K = u.jsx(r("WAWebIdleComponent.react"), {
			id: n,
			onComplex: j,
			waitIdle: i,
			children: G
		}), t[53] = n, t[54] = j, t[55] = G, t[56] = i, t[57] = K) : K = t[57], K;
	}
	l.willTextStatusDisplayContent = m, l.TextStatus = p;
}), 226);

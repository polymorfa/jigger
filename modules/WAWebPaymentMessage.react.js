__d("WAWebPaymentMessage.react", [
	"fbt",
	"WAWebMsgGetters",
	"WAWebPaymentInfo.react",
	"WAWebPaymentMessageInvite.react",
	"WAWebPaymentMessagePlaceholder.react",
	"WAWebSendOrRequestPaymentMessage.react",
	"react",
	"react-compiler-runtime",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(49), n = e.displayAuthor, a = e.displayType, i = e.msg, l = e.quotedMsg, c;
		if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
			var d;
			c = [
				(d = o("WAWebMsgGetters")).getPaymentAmount1000,
				d.getPaymentCurrency,
				d.getId,
				d.getIsSentByMe,
				d.getPaymentNoteMsg,
				d.getPaymentStatus,
				d.getPaymentTxnStatus,
				d.getPaymentExpiryTimestamp,
				d.getPaymentInviteServiceType,
				d.getPaymentMessageReceiverJid,
				d.getSubtype
			], t[0] = c;
		} else c = t[0];
		var m = o("useWAWebMsgValues").useMsgValues(i.id, c), p = m[0], _ = m[1], f = m[3], g = m[4], h = m[5], y = m[6], C = m[7], b = m[8], v = m[9], S = m[10], R = !!(g != null && g.body);
		if (S === "invite" && b != null) {
			var L;
			return t[1] !== n || t[2] !== a || t[3] !== i || t[4] !== b ? (L = u.jsx(r("WAWebPaymentMessageInvite.react"), {
				msg: i,
				displayAuthor: n,
				displayType: a,
				serviceType: b
			}), t[1] = n, t[2] = a, t[3] = i, t[4] = b, t[5] = L) : L = t[5], L;
		}
		var E = p && _;
		if (!E) {
			var k;
			return t[6] !== n || t[7] !== i || t[8] !== l ? (k = u.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
				msg: i,
				displayAuthor: n,
				quotedMsg: l
			}), t[6] = n, t[7] = i, t[8] = l, t[9] = k) : k = t[9], k;
		}
		var I;
		t[10] !== R || t[11] !== f || t[12] !== i || t[13] !== p || t[14] !== _ || t[15] !== C || t[16] !== v || t[17] !== h || t[18] !== y || t[19] !== S ? (I = u.jsx(r("WAWebPaymentInfo.react"), {
			isSentByMe: f,
			currency: _,
			amount1000: p,
			receiverJid: v,
			paymentStatus: h,
			paymentTxnStatus: y,
			expiryTimestamp: C,
			subtype: S,
			hasCaption: R,
			msg: i
		}), t[10] = R, t[11] = f, t[12] = i, t[13] = p, t[14] = _, t[15] = C, t[16] = v, t[17] = h, t[18] = y, t[19] = S, t[20] = I) : I = t[20];
		var T = I;
		switch (S) {
			case "ciphertext": {
				var D;
				t[21] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
					/*BTDS*/
					""
				), t[21] = D) : D = t[21];
				var x;
				return t[22] !== n || t[23] !== i || t[24] !== T || t[25] !== l ? (x = u.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
					msg: i,
					displayAuthor: n,
					quotedMsg: l,
					paymentInfo: T,
					placeholderText: D
				}), t[22] = n, t[23] = i, t[24] = T, t[25] = l, t[26] = x) : x = t[26], x;
			}
			case "futureproof": {
				var $;
				t[27] === Symbol.for("react.memo_cache_sentinel") ? ($ = s._(
					/*BTDS*/
					""
				), t[27] = $) : $ = t[27];
				var P;
				return t[28] !== n || t[29] !== i || t[30] !== T || t[31] !== l ? (P = u.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
					msg: i,
					displayAuthor: n,
					quotedMsg: l,
					paymentInfo: T,
					placeholderText: $
				}), t[28] = n, t[29] = i, t[30] = T, t[31] = l, t[32] = P) : P = t[32], P;
			}
			case "send": {
				var N;
				return t[33] !== n || t[34] !== a || t[35] !== i || t[36] !== T || t[37] !== l ? (N = u.jsx(r("WAWebSendOrRequestPaymentMessage.react"), {
					msg: i,
					displayAuthor: n,
					displayType: a,
					quotedMsg: l,
					paymentInfo: T
				}), t[33] = n, t[34] = a, t[35] = i, t[36] = T, t[37] = l, t[38] = N) : N = t[38], N;
			}
			case "request": {
				var M;
				return t[39] !== n || t[40] !== a || t[41] !== i || t[42] !== T || t[43] !== l ? (M = u.jsx(r("WAWebSendOrRequestPaymentMessage.react"), {
					msg: i,
					displayAuthor: n,
					displayType: a,
					quotedMsg: l,
					paymentInfo: T
				}), t[39] = n, t[40] = a, t[41] = i, t[42] = T, t[43] = l, t[44] = M) : M = t[44], M;
			}
			default: {
				var w;
				return t[45] !== n || t[46] !== i || t[47] !== l ? (w = u.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
					msg: i,
					displayAuthor: n,
					quotedMsg: l
				}), t[45] = n, t[46] = i, t[47] = l, t[48] = w) : w = t[48], w;
			}
		}
	}
	l.default = c;
}), 226);

__d("WAWebPaymentInfo.react", [
	"WAWebPaymentAmount.react",
	"WAWebPaymentBackground.react",
	"WAWebPaymentIcon.react",
	"WAWebPaymentNoteMessage.react",
	"WAWebPaymentStatus.react",
	"WAWebPaymentType.react",
	"WAWebProtobufsWeb.pb",
	"WAWebSpacerText.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useState, d = { paddingInlineEnd6: {
		paddingInlineEnd: "x1icxu4v",
		$$css: !0
	} }, m = 20, p = {
		bubbleOutBody: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		bubbleInBody: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		body: {
			display: "x78zum5",
			textDecoration: "x1hl2dhg",
			borderEndEndRadius: "xd15eu0",
			borderEndStartRadius: "x11ecxm0",
			$$css: !0
		},
		bodyIconMultiline: {
			alignSelf: "xamitd3",
			$$css: !0
		},
		bodyIcon: {
			flex: "x1okw0bk",
			$$css: !0
		}
	};
	function _(t) {
		var n = o("react-compiler-runtime").c(62), a = t.expiryTimestamp, i = t.paymentStatus, l = t.paymentTxnStatus, s = c(!1), _ = s[0], f = s[1], g;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (g = function(t) {
			t && f(t.getBoundingClientRect().height > m);
		}, n[0] = g) : g = n[0];
		var h = g, y = l != null && l !== o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.UNKNOWN || i != null && i !== o("WAWebProtobufsWeb.pb").PaymentInfo$Status.UNKNOWN_STATUS, C;
		if (t.hasCaption === !0) {
			var b;
			n[1] !== t.receiverJid || n[2] !== t.subtype ? (b = u.jsx("div", { children: u.jsx(r("WAWebPaymentType.react"), {
				subtype: t.subtype,
				receiverJid: t.receiverJid
			}) }), n[1] = t.receiverJid, n[2] = t.subtype, n[3] = b) : b = n[3];
			var v;
			n[4] !== a || n[5] !== i || n[6] !== l ? (v = u.jsx(r("WAWebPaymentStatus.react"), {
				paymentStatus: i,
				paymentTxnStatus: l,
				expiryTimestamp: a
			}), n[4] = a, n[5] = i, n[6] = l, n[7] = v) : v = n[7];
			var S;
			n[8] !== b || n[9] !== v ? (S = u.jsxs("div", {
				ref: h,
				children: [b, v]
			}), n[8] = b, n[9] = v, n[10] = S) : S = n[10], C = S;
		} else if (y) {
			var R;
			n[11] !== t.receiverJid || n[12] !== t.subtype ? (R = u.jsx("div", { children: u.jsx(r("WAWebPaymentType.react"), {
				subtype: t.subtype,
				receiverJid: t.receiverJid
			}) }), n[11] = t.receiverJid, n[12] = t.subtype, n[13] = R) : R = n[13];
			var L;
			if (n[14] !== t.msg) {
				var E;
				L = (E = t.msg) == null ? void 0 : E.unsafe(), n[14] = t.msg, n[15] = L;
			} else L = n[15];
			var k;
			n[16] !== a || n[17] !== i || n[18] !== l ? (k = u.jsx(r("WAWebPaymentStatus.react"), {
				paymentStatus: i,
				paymentTxnStatus: l,
				expiryTimestamp: a
			}), n[16] = a, n[17] = i, n[18] = l, n[19] = k) : k = n[19];
			var I;
			n[20] !== L || n[21] !== k ? (I = u.jsx(r("WAWebSpacerText.react"), {
				msg: L,
				children: k
			}), n[20] = L, n[21] = k, n[22] = I) : I = n[22];
			var T;
			n[23] !== R || n[24] !== I ? (T = u.jsxs("div", {
				ref: h,
				children: [R, I]
			}), n[23] = R, n[24] = I, n[25] = T) : T = n[25], C = T;
		} else {
			var D;
			if (n[26] !== t.msg) {
				var x;
				D = (x = t.msg) == null ? void 0 : x.unsafe(), n[26] = t.msg, n[27] = D;
			} else D = n[27];
			var $;
			n[28] !== t.receiverJid || n[29] !== t.subtype ? ($ = u.jsx("span", {
				ref: h,
				children: u.jsx(r("WAWebPaymentType.react"), {
					subtype: t.subtype,
					receiverJid: t.receiverJid
				})
			}), n[28] = t.receiverJid, n[29] = t.subtype, n[30] = $) : $ = n[30];
			var P;
			n[31] !== D || n[32] !== $ ? (P = u.jsx(r("WAWebSpacerText.react"), {
				msg: D,
				children: $
			}), n[31] = D, n[32] = $, n[33] = P) : P = n[33], C = P;
		}
		var N;
		n[34] !== t.amount1000 || n[35] !== t.currency ? (N = u.jsx(r("WAWebPaymentBackground.react"), { children: u.jsx(r("WAWebPaymentAmount.react"), {
			currency: t.currency,
			amount1000: t.amount1000
		}) }), n[34] = t.amount1000, n[35] = t.currency, n[36] = N) : N = n[36];
		var M;
		n[37] !== t.isSentByMe ? (M = (e || (e = r("stylex"))).props(p.body, o("WDSPaddings.stylex").wdsPaddings.paddingVer8, d.paddingInlineEnd6, o("WDSPaddings.stylex").wdsPaddings.paddingStart8, t.isSentByMe === !0 ? p.bubbleOutBody : p.bubbleInBody), n[37] = t.isSentByMe, n[38] = M) : M = n[38];
		var w;
		n[39] !== _ ? (w = (e || (e = r("stylex"))).props(_ && p.bodyIconMultiline, p.bodyIcon, o("WDSMargins.stylex").wdsMargins.marginEnd8), n[39] = _, n[40] = w) : w = n[40];
		var A;
		n[41] !== i || n[42] !== l || n[43] !== t.currency || n[44] !== t.subtype ? (A = u.jsx(r("WAWebPaymentIcon.react"), {
			currency: t.currency,
			subtype: t.subtype,
			paymentStatus: i,
			paymentTxnStatus: l
		}), n[41] = i, n[42] = l, n[43] = t.currency, n[44] = t.subtype, n[45] = A) : A = n[45];
		var F;
		n[46] !== w || n[47] !== A ? (F = u.jsx("div", babelHelpers.extends({}, w, { children: A })), n[46] = w, n[47] = A, n[48] = F) : F = n[48];
		var O;
		n[49] === Symbol.for("react.memo_cache_sentinel") ? (O = { className: "x12lumcd x6ikm8r x10wlt62 x1f6kntn x1fc57z9 x1vvkbs" }, n[49] = O) : O = n[49];
		var B;
		n[50] !== C ? (B = u.jsx("div", babelHelpers.extends({}, O, { children: C })), n[50] = C, n[51] = B) : B = n[51];
		var W;
		n[52] !== M || n[53] !== F || n[54] !== B ? (W = u.jsxs("div", babelHelpers.extends({}, M, { children: [F, B] })), n[52] = M, n[53] = F, n[54] = B, n[55] = W) : W = n[55];
		var q;
		if (n[56] !== t.msg) {
			var U;
			q = (U = t.msg) != null && U.paymentNoteMsg ? u.jsx(r("WAWebPaymentNoteMessage.react"), { msg: t.msg }) : null, n[56] = t.msg, n[57] = q;
		} else q = n[57];
		var V;
		return n[58] !== N || n[59] !== W || n[60] !== q ? (V = u.jsxs("div", { children: [
			N,
			W,
			q
		] }), n[58] = N, n[59] = W, n[60] = q, n[61] = V) : V = n[61], V;
	}
	l.default = _;
}), 98);

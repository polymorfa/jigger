__d("WAWebPaymentMessageInvite.react", [
	"WAWebEmojiText.react",
	"WAWebFormatPaymentMsg",
	"WAWebFrontendMsgGetters",
	"WAWebL10N",
	"WAWebMediaBubble.react",
	"WAWebMessageSpacerText.react",
	"WAWebMsgGetters",
	"WAWebPaymentImageAssets.stylex",
	"WAWebProtobufsE2E.pb",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = {
		paddingTop7: {
			paddingTop: "xm7lytj",
			$$css: !0
		},
		paddingBottom6: {
			paddingBottom: "x10b6aqq",
			$$css: !0
		},
		paddingInlineStart6: {
			paddingInlineStart: "x25sj25",
			$$css: !0
		},
		paddingInlineEnd6: {
			paddingInlineEnd: "x1icxu4v",
			$$css: !0
		}
	}, d = {
		bubbleOut: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		bubbleIn: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		inviteBackground: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			justifyContent: "xl56j7k",
			height: "xwzfr38",
			backgroundPosition: "xztyhrg",
			backgroundSize: "x18d0r48",
			$$css: !0
		},
		inviteImage: {
			height: "x10wjd1d",
			backgroundRepeat: "xiy17q3",
			backgroundPosition: "x158usst",
			backgroundSize: "x1tbiz1a",
			$$css: !0
		},
		body: {
			display: "x78zum5",
			textDecoration: "x1hl2dhg",
			borderEndEndRadius: "xd15eu0",
			borderEndStartRadius: "x11ecxm0",
			$$css: !0
		}
	};
	function m(t) {
		var n = o("react-compiler-runtime").c(36), a = t.displayAuthor, i = t.displayType, l = t.msg, s;
		if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
			var m;
			s = [
				o("WAWebFrontendMsgGetters").getRtl,
				o("WAWebFrontendMsgGetters").getDir,
				(m = o("WAWebMsgGetters")).getIsSentByMe,
				m.getPaymentInviteServiceType,
				m.getIsGroupMsg,
				m.getIsPSA,
				o("WAWebFrontendMsgGetters").getSenderObj,
				m.getPaymentNoteMsg,
				m.getId,
				m.getTo,
				m.getFrom
			], n[0] = s;
		} else s = n[0];
		var p = o("useWAWebMsgValues").useMsgValues(l.id, s), _ = p[0], f = p[1], g = p[2], h = p[3], y = p[8], C = h === o("WAWebProtobufsE2E.pb").Message$PaymentInviteMessage$ServiceType.UPI ? o("WAWebPaymentImageAssets.stylex").paymentImageAssetStyles.inviteUpi : null, b;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (b = (e || (e = r("stylex"))).props(c.paddingTop7, o("WDSPaddings.stylex").wdsPaddings.paddingEnd4, c.paddingBottom6, c.paddingInlineStart6), n[1] = b) : b = n[1];
		var v;
		n[2] !== l ? (v = l.unsafe(), n[2] = l, n[3] = v) : v = n[3];
		var S;
		n[4] !== y ? (S = o("WAWebFormatPaymentMsg").formatPaymentInviteMessageText(y), n[4] = y, n[5] = S) : S = n[5];
		var R;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (R = r("WAWebL10N").isRTL(), n[6] = R) : R = n[6];
		var L = _ !== R, E;
		n[7] !== f || n[8] !== S || n[9] !== L ? (E = u.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: S,
			selectable: !0,
			dirMismatch: L,
			direction: f
		}), n[7] = f, n[8] = S, n[9] = L, n[10] = E) : E = n[10];
		var k;
		n[11] !== v || n[12] !== E ? (k = u.jsx("div", babelHelpers.extends({}, b, { children: u.jsx(r("WAWebMessageSpacerText.react"), {
			msg: v,
			children: E
		}) })), n[11] = v, n[12] = E, n[13] = k) : k = n[13];
		var I = k, T = !!I, D;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (D = (e || (e = r("stylex"))).props(d.inviteBackground, o("WAWebPaymentImageAssets.stylex").paymentImageAssetStyles.background), n[14] = D) : D = n[14];
		var x;
		n[15] !== C ? (x = (e || (e = r("stylex"))).props(d.inviteImage, C), n[15] = C, n[16] = x) : x = n[16];
		var $;
		n[17] !== x ? ($ = u.jsx("div", babelHelpers.extends({}, D, { children: u.jsx("div", babelHelpers.extends({}, x)) })), n[17] = x, n[18] = $) : $ = n[18];
		var P;
		n[19] !== g ? (P = (e || (e = r("stylex"))).props(d.body, g ? d.bubbleOut : d.bubbleIn, o("WDSPaddings.stylex").wdsPaddings.paddingTop8, c.paddingInlineEnd6, o("WDSPaddings.stylex").wdsPaddings.paddingBottom8, o("WDSPaddings.stylex").wdsPaddings.paddingStart8), n[19] = g, n[20] = P) : P = n[20];
		var N;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (N = { className: "x12lumcd x6ikm8r x10wlt62 x1f6kntn x1fc57z9 x1vvkbs" }, n[21] = N) : N = n[21];
		var M;
		n[22] !== I ? (M = u.jsx("div", babelHelpers.extends({}, N, { children: I })), n[22] = I, n[23] = M) : M = n[23];
		var w;
		n[24] !== P || n[25] !== M ? (w = u.jsx("div", babelHelpers.extends({}, P, { children: M })), n[24] = P, n[25] = M, n[26] = w) : w = n[26];
		var A;
		n[27] !== $ || n[28] !== w ? (A = u.jsxs("div", { children: [$, w] }), n[27] = $, n[28] = w, n[29] = A) : A = n[29];
		var F;
		return n[30] !== a || n[31] !== i || n[32] !== l || n[33] !== A || n[34] !== T ? (F = u.jsx(r("WAWebMediaBubble.react"), {
			displayAuthor: a,
			displayType: i,
			hasCaption: T,
			msg: l,
			children: A
		}), n[30] = a, n[31] = i, n[32] = l, n[33] = A, n[34] = T, n[35] = F) : F = n[35], F;
	}
	l.default = m;
}), 98);

__d("WAWebAGMSignupMessage.react", [
	"fbt",
	"WAWebBizAGMSignupHeader.react",
	"WAWebMessageBubbleActions.react",
	"WAWebMessageBubbleHiddenText.react",
	"WAWebMessageMeta.react",
	"WAWebMessageSpacerText.react",
	"WAWebMessageTextBody.react",
	"WAWebMessageTextBubble.react",
	"WAWebMsgGetters",
	"WAWebMsgModelPropUtils",
	"WAWebSendSignupResponseAction",
	"WAWebSignupCTAExperiment",
	"WAWebStateUtils",
	"WDSIconIcReply.react",
	"react",
	"react-compiler-runtime",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = o("react-compiler-runtime").c(47), a = e.chat, i = e.displayAuthor, l = e.displayType, c = e.msg, d = e.privacyPolicyUrl, m, p;
		n[0] !== c ? (m = o("WAWebStateUtils").unproxy(c), p = o("WAWebMsgModelPropUtils").isTrusted(m.unsafe()), n[0] = c, n[1] = m, n[2] = p) : (m = n[1], p = n[2]);
		var _ = p, f;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (f = [o("WAWebMsgGetters").getSignupCtaTapped], n[3] = f) : f = n[3];
		var g = o("useWAWebMsgValues").useMsgValues(c.id, f), h = g[0], y;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (y = o("WAWebSignupCTAExperiment").getSignupCTAExperiment(), n[4] = y) : y = n[4];
		var C = y, b;
		n[5] !== m || n[6] !== l || n[7] !== _ ? (b = u.jsx(r("WAWebMessageTextBody.react"), {
			msg: m,
			displayType: l,
			handleLinkClick: null,
			trusted: _
		}), n[5] = m, n[6] = l, n[7] = _, n[8] = b) : b = n[8];
		var v = b, S;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (S = { className: "x78zum5 x13a6bvl" }, n[9] = S) : S = n[9];
		var R;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (R = o("WAWebMessageMeta.react").getAGMTag(), n[10] = R) : R = n[10];
		var L;
		n[11] !== m ? (L = u.jsx("div", babelHelpers.extends({}, S, {
			"data-testid": "signup-agm-tag",
			children: u.jsx(o("WAWebMessageMeta.react").Meta, {
				msg: m,
				agmTag: R
			})
		})), n[11] = m, n[12] = L) : L = n[12];
		var E = L, k;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (k = C === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), n[13] = k) : k = n[13];
		var I;
		n[14] !== a || n[15] !== c ? (I = function() {
			return void o("WAWebSendSignupResponseAction").sendSignupResponse(a, c);
		}, n[14] = a, n[15] = c, n[16] = I) : I = n[16];
		var T = h === !0, D;
		n[17] !== T || n[18] !== I ? (D = u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, { items: [{
			label: k,
			onClick: I,
			Icon: r("WDSIconIcReply.react"),
			disabled: T
		}] }), n[17] = T, n[18] = I, n[19] = D) : D = n[19];
		var x = D, $ = m.isDynamicReplyButtonsMsg, P;
		n[20] === Symbol.for("react.memo_cache_sentinel") ? (P = "x1gxa6cn", n[20] = P) : P = n[20];
		var N = m.senderObj, M;
		n[21] !== m ? (M = m.unsafe(), n[21] = m, n[22] = M) : M = n[22];
		var w = (t = c.signupContext) == null ? void 0 : t.signupId, A;
		n[23] !== a.contact || n[24] !== a.id || n[25] !== a.t || n[26] !== d || n[27] !== w ? (A = u.jsx(r("WAWebBizAGMSignupHeader.react"), {
			businessWid: a.id,
			chatTimestamp: a.t,
			contact: a.contact,
			experiment: C,
			privacyPolicyUrl: d,
			signupId: w
		}), n[23] = a.contact, n[24] = a.id, n[25] = a.t, n[26] = d, n[27] = w, n[28] = A) : A = n[28];
		var F;
		n[29] !== m ? (F = m.unsafe(), n[29] = m, n[30] = F) : F = n[30];
		var O;
		n[31] !== m.id || n[32] !== E || n[33] !== F || n[34] !== v ? (O = u.jsxs(r("WAWebMessageSpacerText.react"), {
			msg: F,
			spacer: !1,
			"data-id": m.id,
			children: [v, E]
		}), n[31] = m.id, n[32] = E, n[33] = F, n[34] = v, n[35] = O) : O = n[35];
		var B;
		n[36] !== m.senderObj || n[37] !== x || n[38] !== M || n[39] !== A || n[40] !== O ? (B = u.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
			className: P,
			contact: N,
			msg: M,
			children: [
				A,
				O,
				x
			]
		}), n[36] = m.senderObj, n[37] = x, n[38] = M, n[39] = A, n[40] = O, n[41] = B) : B = n[41];
		var W;
		return n[42] !== m || n[43] !== i || n[44] !== l || n[45] !== B ? (W = u.jsx(r("WAWebMessageTextBubble.react"), {
			msg: m,
			displayType: l,
			displayAuthor: i,
			hideMeta: !0,
			useFixedWidth: $,
			children: B
		}), n[42] = m, n[43] = i, n[44] = l, n[45] = B, n[46] = W) : W = n[46], W;
	}
	l.default = c;
}), 226);

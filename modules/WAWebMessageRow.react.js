__d("WAWebMessageRow.react", [
	"WAWebGetDisplayType",
	"WAWebMBSInboxOrderNotice.react",
	"WAWebMessagePosition",
	"WAWebMessageWrapper.react",
	"WAWebMsgType",
	"WAWebNoop",
	"WAWebPREGatingUtils",
	"WAWebPrivacyBlurWrapper.react",
	"WAWebPrivacyModeBlurConfig",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useRef;
	function m(e) {
		var t = o("react-compiler-runtime").c(34), n = e.groupedWithNext, a = e.groupedWithPrev, i = e.handleMsgRendered, l = e.isFocusedMsg, u = e.isFollowUpReply, c = e.isMsgVisible, m = e.msg, p = e.onMessageSelect, _ = e.selectable, f = e.selectedMessages, g = e.setFocusedMessage, h = e.showProfilePicture, y;
		n && !a ? y = o("WAWebMessagePosition").MsgPosition.FRONT : n && a ? y = o("WAWebMessagePosition").MsgPosition.MID : !n && a ? y = o("WAWebMessagePosition").MsgPosition.END : y = o("WAWebMessagePosition").MsgPosition.SINGLE;
		var C;
		t[0] !== m || t[1] !== g ? (C = function() {
			g(m.unsafe());
		}, t[0] = m, t[1] = g, t[2] = C) : C = t[2];
		var b = C, v;
		t[3] !== g ? (v = function() {
			g(null);
		}, t[3] = g, t[4] = v) : v = t[4];
		var S = v, R;
		t[5] !== i || t[6] !== m.id ? (R = function(t) {
			i(t, m.id.toString());
		}, t[5] = i, t[6] = m.id, t[7] = R) : R = t[7];
		var L = R, E = m.type === o("WAWebMsgType").MSG_TYPE.IMAGE || m.type === o("WAWebMsgType").MSG_TYPE.VIDEO || m.type === o("WAWebMsgType").MSG_TYPE.AUDIO || m.carouselCards != null, k = d(null), I = E ? o("WAWebPrivacyModeBlurConfig").BlurCategory.Media : o("WAWebPrivacyModeBlurConfig").BlurCategory.General, T;
		t[8] !== m ? (T = m.unsafe(), t[8] = m, t[9] = T) : T = t[9];
		var D;
		t[10] !== m ? (D = o("WAWebGetDisplayType").getDisplayType(m.unsafe()), t[10] = m, t[11] = D) : D = t[11];
		var x = E || m.selectedCarouselCardIndex != null ? c : r("WAWebNoop"), $;
		t[12] !== l || t[13] !== u || t[14] !== S || t[15] !== b || t[16] !== p || t[17] !== y || t[18] !== L || t[19] !== _ || t[20] !== f || t[21] !== h || t[22] !== T || t[23] !== D || t[24] !== x ? ($ = s.jsx(r("WAWebMessageWrapper.react"), {
			onMsgFocus: b,
			onMsgBlur: S,
			showProfilePicture: h,
			ref: L,
			msg: T,
			displayType: D,
			isMsgVisible: x,
			selectable: _,
			selectedMessages: f,
			onMessageSelect: p,
			position: y,
			isFocusedMsg: l,
			isFocusable: !0,
			errorBoundaryName: "message-row",
			isFollowUpReply: u
		}), t[12] = l, t[13] = u, t[14] = S, t[15] = b, t[16] = p, t[17] = y, t[18] = L, t[19] = _, t[20] = f, t[21] = h, t[22] = T, t[23] = D, t[24] = x, t[25] = $) : $ = t[25];
		var P;
		t[26] !== m ? (P = m.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE ? s.jsx(r("WAWebMBSInboxOrderNotice.react"), { msg: m }) : null, t[26] = m, t[27] = P) : P = t[27];
		var N;
		t[28] !== $ || t[29] !== P ? (N = s.jsxs("div", {
			ref: k,
			children: [$, P]
		}), t[28] = $, t[29] = P, t[30] = N) : N = t[30];
		var M;
		return t[31] !== I || t[32] !== N ? (M = s.jsx(r("WAWebPrivacyBlurWrapper.react"), {
			containerRef: k,
			category: I,
			children: N
		}), t[31] = I, t[32] = N, t[33] = M) : M = t[33], M;
	}
	var p = o("WAWebPREGatingUtils").isPREMessageSendEnabled() ? s.memo(m) : m;
	l.WAWebMessageRow = p;
}), 98);

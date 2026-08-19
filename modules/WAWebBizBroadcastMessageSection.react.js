__d("WAWebBizBroadcastMessageSection.react", [
	"WAWebBizBroadcastCTAButtonSection.react",
	"WAWebBizBroadcastMessageAttachmentSection.react",
	"WAWebBizBroadcastMessageInputSection.react",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizCard.react",
	"WAWebMsgType",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(20), n = e.attachmentData, a = e.buttonData, i = e.entryPoint, l = e.message, u = e.onButtonDataChange, c = e.onGenAIPress, d = e.onMessageChange, m = e.richTextInputRef, p = e.setAttachmentData, _;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "x19aeb6u xh8yej3" }, t[0] = _) : _ = t[0];
		var f;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (f = o("WAWebBizBroadcastsCreationStrings").getMessageSectionTitle(), t[1] = f) : f = t[1];
		var g;
		t[2] !== l || t[3] !== c || t[4] !== d || t[5] !== m ? (g = s.jsx(r("WAWebBizBroadcastMessageInputSection.react"), {
			message: l,
			onGenAIPress: c,
			onMessageChange: d,
			richTextInputRef: m
		}), t[2] = l, t[3] = c, t[4] = d, t[5] = m, t[6] = g) : g = t[6];
		var h;
		t[7] !== n || t[8] !== i || t[9] !== p ? (h = s.jsx(o("WAWebBizBroadcastMessageAttachmentSection.react").WAWebBizBroadcastMessageAttachmentSection, {
			attachmentData: n,
			entryPoint: i,
			setAttachmentData: p
		}), t[7] = n, t[8] = i, t[9] = p, t[10] = h) : h = t[10];
		var y = (n == null ? void 0 : n.mediaType) === o("WAWebMsgType").MSG_TYPE.PRODUCT, C;
		t[11] !== a || t[12] !== i || t[13] !== u || t[14] !== y ? (C = s.jsx(r("WAWebBizBroadcastCTAButtonSection.react"), {
			buttonData: a,
			entryPoint: i,
			isReadOnly: y,
			onButtonDataChange: u
		}), t[11] = a, t[12] = i, t[13] = u, t[14] = y, t[15] = C) : C = t[15];
		var b;
		return t[16] !== g || t[17] !== h || t[18] !== C ? (b = s.jsx("div", babelHelpers.extends({}, _, { children: s.jsxs(r("WAWebBizCard.react"), {
			header: f,
			headerTestid: "biz-broadcasts-message-section",
			children: [
				g,
				h,
				C
			]
		}) })), t[16] = g, t[17] = h, t[18] = C, t[19] = b) : b = t[19], b;
	}
	l.default = u;
}), 98);

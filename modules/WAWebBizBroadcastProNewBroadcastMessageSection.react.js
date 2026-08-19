__d("WAWebBizBroadcastProNewBroadcastMessageSection.react", [
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
	var e, s = e || (e = o("react")), u = e.useRef;
	function c(e) {
		var t = o("react-compiler-runtime").c(19), n = e.attachmentData, a = e.buttonData, i = e.entryPoint, l = e.message, c = e.onAttachmentDataChange, d = e.onButtonDataChange, m = e.onMessageChange, p = u(null), _;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "x19aeb6u xh8yej3" }, t[0] = _) : _ = t[0];
		var f;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (f = o("WAWebBizBroadcastsCreationStrings").getMessageSectionTitle(), t[1] = f) : f = t[1];
		var g;
		t[2] !== l || t[3] !== m ? (g = s.jsx(r("WAWebBizBroadcastMessageInputSection.react"), {
			message: l,
			onMessageChange: m,
			richTextInputRef: p
		}), t[2] = l, t[3] = m, t[4] = g) : g = t[4];
		var h;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (h = ["media"], t[5] = h) : h = t[5];
		var y;
		t[6] !== n || t[7] !== i || t[8] !== c ? (y = s.jsx(o("WAWebBizBroadcastMessageAttachmentSection.react").WAWebBizBroadcastMessageAttachmentSection, {
			attachmentData: n,
			entryPoint: i,
			setAttachmentData: c,
			supportedAttachmentTypes: h
		}), t[6] = n, t[7] = i, t[8] = c, t[9] = y) : y = t[9];
		var C = (n == null ? void 0 : n.mediaType) === o("WAWebMsgType").MSG_TYPE.PRODUCT, b;
		t[10] !== a || t[11] !== i || t[12] !== d || t[13] !== C ? (b = s.jsx(r("WAWebBizBroadcastCTAButtonSection.react"), {
			buttonData: a,
			entryPoint: i,
			isReadOnly: C,
			onButtonDataChange: d
		}), t[10] = a, t[11] = i, t[12] = d, t[13] = C, t[14] = b) : b = t[14];
		var v;
		return t[15] !== g || t[16] !== y || t[17] !== b ? (v = s.jsx("div", babelHelpers.extends({}, _, { children: s.jsxs(r("WAWebBizCard.react"), {
			header: f,
			headerTestid: "biz-broadcasts-pro-message-section",
			children: [
				g,
				y,
				b
			]
		}) })), t[15] = g, t[16] = y, t[17] = b, t[18] = v) : v = t[18], v;
	}
	l.default = c;
}), 98);

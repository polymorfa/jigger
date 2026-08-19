__d("WAWebBizBroadcastProNewBroadcastMessageSection.react", [
	"WAWebBizBroadcastCTAButtonSection.react",
	"WAWebBizBroadcastMessageAttachmentSection.react",
	"WAWebBizBroadcastMessageInputSection.react",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizCard.react",
	"WAWebMsgType",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useRef;
	function c(e) {
		var t = e.attachmentData, n = e.buttonData, a = e.entryPoint, i = e.message, l = e.onAttachmentDataChange, c = e.onButtonDataChange, d = e.onMessageChange, m = u(null);
		return s.jsx("div", {
			className: "x19aeb6u xh8yej3",
			children: s.jsxs(r("WAWebBizCard.react"), {
				header: o("WAWebBizBroadcastsCreationStrings").getMessageSectionTitle(),
				headerTestid: "biz-broadcasts-pro-message-section",
				children: [
					s.jsx(r("WAWebBizBroadcastMessageInputSection.react"), {
						message: i,
						onMessageChange: d,
						richTextInputRef: m
					}),
					s.jsx(o("WAWebBizBroadcastMessageAttachmentSection.react").WAWebBizBroadcastMessageAttachmentSection, {
						attachmentData: t,
						entryPoint: a,
						setAttachmentData: l,
						supportedAttachmentTypes: ["media"]
					}),
					s.jsx(r("WAWebBizBroadcastCTAButtonSection.react"), {
						buttonData: n,
						entryPoint: a,
						isReadOnly: (t == null ? void 0 : t.mediaType) === o("WAWebMsgType").MSG_TYPE.PRODUCT,
						onButtonDataChange: c
					})
				]
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);

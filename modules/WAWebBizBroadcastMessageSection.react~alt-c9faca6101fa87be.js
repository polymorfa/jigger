__d("WAWebBizBroadcastMessageSection.react", [
	"WAWebBizBroadcastCTAButtonSection.react",
	"WAWebBizBroadcastMessageAttachmentSection.react",
	"WAWebBizBroadcastMessageInputSection.react",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizCard.react",
	"WAWebMsgType",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.attachmentData, n = e.buttonData, a = e.entryPoint, i = e.message, l = e.onButtonDataChange, u = e.onGenAIPress, c = e.onMessageChange, d = e.richTextInputRef, m = e.setAttachmentData;
		return s.jsx("div", {
			className: "x19aeb6u xh8yej3",
			children: s.jsxs(r("WAWebBizCard.react"), {
				header: o("WAWebBizBroadcastsCreationStrings").getMessageSectionTitle(),
				headerTestid: "biz-broadcasts-message-section",
				children: [
					s.jsx(r("WAWebBizBroadcastMessageInputSection.react"), {
						message: i,
						onGenAIPress: u,
						onMessageChange: c,
						richTextInputRef: d
					}),
					s.jsx(o("WAWebBizBroadcastMessageAttachmentSection.react").WAWebBizBroadcastMessageAttachmentSection, {
						attachmentData: t,
						entryPoint: a,
						setAttachmentData: m
					}),
					s.jsx(r("WAWebBizBroadcastCTAButtonSection.react"), {
						buttonData: n,
						entryPoint: a,
						isReadOnly: (t == null ? void 0 : t.mediaType) === o("WAWebMsgType").MSG_TYPE.PRODUCT,
						onButtonDataChange: l
					})
				]
			})
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);

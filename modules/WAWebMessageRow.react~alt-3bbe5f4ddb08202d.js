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
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useRef;
	function m(e) {
		var t = e.groupedWithNext, n = e.groupedWithPrev, a = e.handleMsgRendered, i = e.isFocusedMsg, l = e.isFollowUpReply, u = e.isMsgVisible, m = e.msg, p = e.onMessageSelect, _ = e.selectable, f = e.selectedMessages, g = e.setFocusedMessage, h = e.showProfilePicture, y;
		t && !n ? y = o("WAWebMessagePosition").MsgPosition.FRONT : t && n ? y = o("WAWebMessagePosition").MsgPosition.MID : !t && n ? y = o("WAWebMessagePosition").MsgPosition.END : y = o("WAWebMessagePosition").MsgPosition.SINGLE;
		var C = c(function() {
			g(m.unsafe());
		}, [m, g]), b = c(function() {
			g(null);
		}, [g]), v = c(function(e) {
			a(e, m.id.toString());
		}, [a, m.id]), S = m.type === o("WAWebMsgType").MSG_TYPE.IMAGE || m.type === o("WAWebMsgType").MSG_TYPE.VIDEO || m.type === o("WAWebMsgType").MSG_TYPE.AUDIO || m.carouselCards != null, R = d(null), L = S ? o("WAWebPrivacyModeBlurConfig").BlurCategory.Media : o("WAWebPrivacyModeBlurConfig").BlurCategory.General;
		return s.jsx(r("WAWebPrivacyBlurWrapper.react"), {
			containerRef: R,
			category: L,
			children: s.jsxs("div", {
				ref: R,
				children: [s.jsx(r("WAWebMessageWrapper.react"), {
					onMsgFocus: C,
					onMsgBlur: b,
					showProfilePicture: h,
					ref: v,
					msg: m.unsafe(),
					displayType: o("WAWebGetDisplayType").getDisplayType(m.unsafe()),
					isMsgVisible: S || m.selectedCarouselCardIndex != null ? u : r("WAWebNoop"),
					selectable: _,
					selectedMessages: f,
					onMessageSelect: p,
					position: y,
					isFocusedMsg: i,
					isFocusable: !0,
					errorBoundaryName: "message-row",
					isFollowUpReply: l
				}), m.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE ? s.jsx(r("WAWebMBSInboxOrderNotice.react"), { msg: m }) : null]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	var p = o("WAWebPREGatingUtils").isPREMessageSendEnabled() ? s.memo(m) : m;
	l.WAWebMessageRow = p;
}), 98);

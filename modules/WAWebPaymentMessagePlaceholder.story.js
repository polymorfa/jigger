__d("WAWebPaymentMessagePlaceholder.story", [
	"WAWebChatCollection",
	"WAWebMsgCollection",
	"WAWebMsgKey",
	"WAWebMsgModel",
	"WAWebPaymentMessagePlaceholder.react",
	"WAWebProtobufsE2E.pb",
	"WAWebShowroomUtils",
	"WAWebUserPrefsMeUser",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e, t) {
		var n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(), a = o("WAWebShowroomUtils").getRandomContact().id, i = new (o("WAWebMsgModel")).Msg({
			id: new (r("WAWebMsgKey"))({
				fromMe: t,
				remote: a,
				id: "0EBD2AD60CBA1A5574"
			}),
			type: "payment",
			subtype: e,
			t: 1721260414,
			from: t ? n : a,
			to: t ? a : n,
			ack: 1,
			paymentInviteServiceType: o("WAWebProtobufsE2E.pb").Message$PaymentInviteMessage$ServiceType.UPI,
			quotedMsg: c(t)
		});
		return o("WAWebChatCollection").ChatCollection.add({ id: i.id.remote }), o("WAWebMsgCollection").MsgCollection.add(i), i.safe();
	}
	function c(e) {
		var t = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(), n = o("WAWebShowroomUtils").getRandomContact().id;
		return new (o("WAWebMsgModel")).Msg({
			id: new (r("WAWebMsgKey"))({
				fromMe: e,
				remote: n,
				id: "0EBD2AD60CBA1A5574"
			}),
			type: "chat",
			title: "This is a quoted message",
			t: 1721260414,
			from: e ? t : n,
			to: e ? n : t,
			ack: 1,
			quotedStanzaID: "8BB5EC710075FD0AA3AF603EB302694A",
			quotedRemoteJid: null,
			quotedParticipant: n.toString(),
			quotedMsg: { title: "This is a quoted message" }
		});
	}
	var d = {
		storyName: "WAWebPaymentMessagePlaceholder",
		component: r("WAWebPaymentMessagePlaceholder.react"),
		description: "Displays various types of payment message placeholder bubble",
		examples: [
			{
				title: "Subtype - ciphertext.",
				example: function() {
					return s.jsxs(s.Fragment, { children: [s.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
						msg: u("ciphertext", !0),
						displayAuthor: !0,
						placeholderText: "Waiting for this payment message's note. This may take a while."
					}), s.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
						msg: u("ciphertext", !1),
						displayAuthor: !0,
						placeholderText: "Waiting for this payment message's note. This may take a while."
					})] });
				}
			},
			{
				title: "Subtype - futureproof.",
				example: function() {
					return s.jsxs(s.Fragment, { children: [s.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
						msg: u("futureproof", !0),
						displayAuthor: !0,
						placeholderText: "This payment message has a note, but your version of WhatsApp doesn't support viewing it."
					}), s.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
						msg: u("futureproof", !1),
						displayAuthor: !0,
						placeholderText: "This payment message has a note, but your version of WhatsApp doesn't support viewing it."
					})] });
				}
			},
			{
				title: "Subtype - unknown.",
				example: function() {
					return s.jsxs(s.Fragment, { children: [s.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
						msg: u("unknown", !0),
						displayAuthor: !0
					}), s.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
						msg: u("unknown", !1),
						displayAuthor: !0
					})] });
				}
			}
		]
	};
	l.default = d;
}), 98);

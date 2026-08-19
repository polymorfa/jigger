__d("WAWebPaymentMessageInvite.story", [
	"WAWebChatCollection",
	"WAWebMsgCollection",
	"WAWebMsgKey",
	"WAWebMsgModel",
	"WAWebPaymentMessageInvite.react",
	"WAWebProtobufsE2E.pb",
	"WAWebShowroomUtils",
	"WAWebUserPrefsMeUser",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(), n = o("WAWebShowroomUtils").getRandomContact().id, a = new (o("WAWebMsgModel")).Msg({
			id: new (r("WAWebMsgKey"))({
				fromMe: e,
				remote: n,
				id: "0EBD2AD60CBA1A5574"
			}),
			type: "payment",
			subtype: "invite",
			t: 1721260414,
			from: e ? t : n,
			to: e ? n : t,
			ack: 1,
			paymentInviteServiceType: o("WAWebProtobufsE2E.pb").Message$PaymentInviteMessage$ServiceType.UPI
		});
		return o("WAWebChatCollection").ChatCollection.add({ id: a.id.remote }), o("WAWebMsgCollection").MsgCollection.add(a), a.safe();
	}
	var c = {
		storyName: "WAWebPaymentMessageInvite",
		component: r("WAWebPaymentMessageInvite.react"),
		description: "Displays payment message invite bubble.",
		examples: [{
			title: "Incoming payment invite message",
			example: function() {
				return s.jsx(r("WAWebPaymentMessageInvite.react"), {
					msg: u(!1),
					displayAuthor: !1,
					serviceType: o("WAWebProtobufsE2E.pb").Message$PaymentInviteMessage$ServiceType.UPI
				});
			}
		}, {
			title: "Outgoing payment invite message",
			example: function() {
				return s.jsx(r("WAWebPaymentMessageInvite.react"), {
					msg: u(!0),
					displayAuthor: !1,
					serviceType: o("WAWebProtobufsE2E.pb").Message$PaymentInviteMessage$ServiceType.UPI
				});
			}
		}]
	};
	l.default = c;
}), 98);

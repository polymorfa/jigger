__d("WAWebPaymentInfo.story", [
	"WAWebChatCollection",
	"WAWebMsgCollection",
	"WAWebMsgKey",
	"WAWebMsgModel",
	"WAWebPaymentInfo.react",
	"WAWebProtobufsWeb.pb",
	"WAWebShowroomUtils",
	"WAWebUserPrefsMeUser",
	"WAWebWidFactory",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e, t) {
		var n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(), a = o("WAWebShowroomUtils").getRandomContact().id, i = new (o("WAWebMsgModel")).Msg({
			id: new (r("WAWebMsgKey"))({
				fromMe: e,
				remote: a,
				id: "0EBD2AD60CBA1A5574"
			}),
			type: "payment",
			subtype: t,
			t: 1721260414,
			from: e ? n : a,
			to: e ? a : n,
			ack: 1
		});
		return o("WAWebChatCollection").ChatCollection.add({
			id: i.id.remote,
			accountLid: o("WAWebWidFactory").createUserLidOrThrow("2222222222@lid")
		}), o("WAWebMsgCollection").MsgCollection.add(i), i.safe();
	}
	var c = {
		storyName: "WAWebPaymentInfo",
		component: r("WAWebPaymentInfo.react"),
		description: "Displays payment info in payment message bubble.",
		examples: [
			{
				title: "Successful incoming payment info for subtype: send",
				example: function() {
					return s.jsx(r("WAWebPaymentInfo.react"), {
						msg: u(!1, "send"),
						currency: "INR",
						amount1000: 100,
						receiverJid: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
						paymentStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$Status.COMPLETE,
						paymentTxnStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.SUCCESS,
						subtype: "send",
						isSentByMe: !1,
						hasCaption: !1,
						expiryTimestamp: null
					});
				}
			},
			{
				title: "Failed outgoing payment info for subtype: send",
				example: function() {
					return s.jsx(r("WAWebPaymentInfo.react"), {
						msg: u(!0, "send"),
						currency: "INR",
						amount1000: 100,
						receiverJid: o("WAWebShowroomUtils").getRandomContact().id,
						paymentStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$Status.CANCELLED,
						paymentTxnStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.FAILED,
						subtype: "send",
						isSentByMe: !0,
						hasCaption: !1,
						expiryTimestamp: null
					});
				}
			},
			{
				title: "Pending incoming payment info for subtype: request",
				example: function() {
					return s.jsx(r("WAWebPaymentInfo.react"), {
						msg: u(!1, "send"),
						currency: "INR",
						amount1000: 100,
						receiverJid: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
						paymentStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$Status.PROCESSING,
						paymentTxnStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.PENDING_SETUP,
						subtype: "request",
						isSentByMe: !1,
						hasCaption: !1,
						expiryTimestamp: null
					});
				}
			},
			{
				title: "Successful outgoing payment info for subtype: request",
				example: function() {
					return s.jsx(r("WAWebPaymentInfo.react"), {
						msg: u(!0, "send"),
						currency: "INR",
						amount1000: 100,
						receiverJid: o("WAWebShowroomUtils").getRandomContact().id,
						paymentStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$Status.COMPLETE,
						paymentTxnStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.SUCCESS,
						subtype: "request",
						isSentByMe: !0,
						hasCaption: !1,
						expiryTimestamp: null
					});
				}
			}
		]
	};
	l.default = c;
}), 98);

__d("WAWebPaymentType.story", [
	"WAWebCommonMsgSubtypeTypes",
	"WAWebMsgKey",
	"WAWebPaymentType.react",
	"WAWebWidFactory",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		storyName: "WAWebPaymentType",
		component: r("WAWebPaymentType.react"),
		description: "Displays payment type in payment message bubble.",
		examples: [
			{
				title: "Requested payment",
				example: s.jsx(r("WAWebPaymentType.react"), {
					subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Request,
					receiverJid: o("WAWebWidFactory").createWid("16315551023@c.us")
				})
			},
			{
				title: "Sent payment",
				example: s.jsx(r("WAWebPaymentType.react"), {
					subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Send,
					receiverJid: o("WAWebWidFactory").createWid("16315551023@c.us")
				})
			},
			{
				title: "Sent a payment invite",
				example: s.jsx(r("WAWebPaymentType.react"), {
					msgKey: r("WAWebMsgKey").from("true_16315551023@c.us_3AB62D82615C7C12C346"),
					subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Invite,
					receiverJid: o("WAWebWidFactory").createWid("16325551023@c.us")
				})
			},
			{
				title: "Receive a payment invite",
				example: s.jsx(r("WAWebPaymentType.react"), {
					msgKey: r("WAWebMsgKey").from("false_16315551023@c.us_3AB62D82615C7C12C346"),
					subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Invite,
					receiverJid: o("WAWebWidFactory").createWid("16325551023@c.us")
				})
			}
		]
	};
	l.default = u;
}), 98);

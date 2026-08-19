__d("WAWebPaymentIcon.story", [
	"WAWebPaymentIcon.react",
	"WAWebProtobufsWeb.pb",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		storyName: "WAWebPaymentIcon",
		component: r("WAWebPaymentIcon.react"),
		description: "Payment icon for payment status.",
		examples: [
			{
				title: "Sent payment - success",
				example: s.jsx(r("WAWebPaymentIcon.react"), {
					subtype: "send",
					paymentStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$Status.COMPLETE,
					paymentTxnStatus: null,
					currency: "USD"
				})
			},
			{
				title: "Sent payment - pending",
				example: s.jsx(r("WAWebPaymentIcon.react"), {
					subtype: "send",
					paymentStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$Status.PROCESSING,
					paymentTxnStatus: null,
					currency: "USD"
				})
			},
			{
				title: "Sent payment - failed",
				example: s.jsx(r("WAWebPaymentIcon.react"), {
					subtype: "send",
					paymentStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$Status.REJECTED,
					paymentTxnStatus: null,
					currency: "USD"
				})
			},
			{
				title: "Request payment - success",
				example: s.jsx(r("WAWebPaymentIcon.react"), {
					subtype: "request",
					paymentStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$Status.COMPLETE,
					paymentTxnStatus: null,
					currency: "USD"
				})
			},
			{
				title: "Request payment - pending",
				example: s.jsx(r("WAWebPaymentIcon.react"), {
					subtype: "request",
					paymentStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$Status.PROCESSING,
					paymentTxnStatus: null,
					currency: "USD"
				})
			},
			{
				title: "Request payment - failed",
				example: s.jsx(r("WAWebPaymentIcon.react"), {
					subtype: "request",
					paymentStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$Status.REJECTED,
					paymentTxnStatus: null,
					currency: "USD"
				})
			},
			{
				title: "Compact sent payment - success",
				example: s.jsx(r("WAWebPaymentIcon.react"), {
					isCompact: !0,
					subtype: "send",
					paymentStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$Status.COMPLETE,
					paymentTxnStatus: null,
					currency: "USD"
				})
			},
			{
				title: "Compact sent payment - pending",
				example: s.jsx(r("WAWebPaymentIcon.react"), {
					isCompact: !0,
					subtype: "send",
					paymentStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$Status.PROCESSING,
					paymentTxnStatus: null,
					currency: "USD"
				})
			},
			{
				title: "Compact sent payment - failed",
				example: s.jsx(r("WAWebPaymentIcon.react"), {
					isCompact: !0,
					subtype: "send",
					paymentStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$Status.REJECTED,
					paymentTxnStatus: null,
					currency: "USD"
				})
			},
			{
				title: "Compact request payment - success",
				example: s.jsx(r("WAWebPaymentIcon.react"), {
					isCompact: !0,
					subtype: "request",
					paymentStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$Status.COMPLETE,
					paymentTxnStatus: null,
					currency: "USD"
				})
			},
			{
				title: "Compact request payment - pending",
				example: s.jsx(r("WAWebPaymentIcon.react"), {
					isCompact: !0,
					subtype: "request",
					paymentStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$Status.PROCESSING,
					paymentTxnStatus: null,
					currency: "USD"
				})
			},
			{
				title: "Compact request payment - failed",
				example: s.jsx(r("WAWebPaymentIcon.react"), {
					isCompact: !0,
					subtype: "request",
					paymentStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$Status.REJECTED,
					paymentTxnStatus: null,
					currency: "USD"
				})
			}
		]
	};
	l.default = u;
}), 98);

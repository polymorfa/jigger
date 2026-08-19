__d("WAWebPaymentStatus.story", [
	"WAWebPaymentStatus.react",
	"WAWebProtobufsWeb.pb",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		storyName: "WAWebPaymentStatus",
		component: r("WAWebPaymentStatus.react"),
		description: "Displays current payment status in payment message info.",
		examples: [
			{
				title: "Status message when more than one minute left",
				description: "\n        Payment status message displayed when expiration time is 7 days and 20 seconds apart.\n        It should dynamically update to 6 days after 20 seconds.\n      ",
				example: s.jsx(r("WAWebPaymentStatus.react"), {
					paymentStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$Status.WAITING,
					paymentTxnStatus: null,
					expiryTimestamp: Math.floor(Date.now() / 1e3) + 604820
				})
			},
			{
				title: "Status message when 1 minute or less left",
				description: "\n        Payment status message displayed when expiration time is 30 seconds apart.\n        It should dynamically update to expiring message after 30 seconds.\n      ",
				example: s.jsx(r("WAWebPaymentStatus.react"), {
					paymentStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$Status.WAITING,
					paymentTxnStatus: null,
					expiryTimestamp: Math.floor(Date.now() / 1e3) + 30
				})
			},
			{
				title: "Status message when time has run out but we haven't received new status yet",
				example: s.jsx(r("WAWebPaymentStatus.react"), {
					paymentStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$Status.WAITING,
					paymentTxnStatus: null,
					expiryTimestamp: Math.floor(Date.now() / 1e3)
				})
			}
		]
	};
	l.default = u;
}), 98);

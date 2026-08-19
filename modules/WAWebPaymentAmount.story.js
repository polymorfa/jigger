__d("WAWebPaymentAmount.story", ["WAWebPaymentAmount.react", "react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		storyName: "WAWebPaymentAmount",
		component: r("WAWebPaymentAmount.react"),
		description: "Displays payment amount in payment message bubble.",
		examples: [
			{
				title: "Payment amount (USD)",
				description: "\n        Payment amount in USD\n      ",
				example: s.jsx(r("WAWebPaymentAmount.react"), {
					amount1000: 1e4,
					currency: "USD"
				})
			},
			{
				title: "Quoted payment amount (USD)",
				description: "\n        Payment amount in USD when a payment message is quoted\n      ",
				example: s.jsx(r("WAWebPaymentAmount.react"), {
					amount1000: 10340,
					currency: "USD",
					isQuoted: !0
				})
			},
			{
				title: "Payment amount (INR)",
				description: "\n        Payment amount in INR\n      ",
				example: s.jsx(r("WAWebPaymentAmount.react"), {
					amount1000: 1002,
					currency: "INR"
				})
			},
			{
				title: "Quoted INR payment amount",
				description: "\n        Payment amount in INR when a payment message is quoted\n      ",
				example: s.jsx(r("WAWebPaymentAmount.react"), {
					amount1000: 100234,
					currency: "INR",
					isQuoted: !0
				})
			},
			{
				title: "Payment amount (BRL)",
				description: "\n        Payment amount in BRL\n      ",
				example: s.jsx(r("WAWebPaymentAmount.react"), {
					amount1000: 102340,
					currency: "BRL"
				})
			},
			{
				title: "Quoted BRL payment amount",
				description: "\n        Payment amount in BRL when a payment message is quoted\n      ",
				example: s.jsx(r("WAWebPaymentAmount.react"), {
					amount1000: 100234,
					currency: "BRL",
					isQuoted: !0
				})
			}
		]
	};
	l.default = u;
}), 98);

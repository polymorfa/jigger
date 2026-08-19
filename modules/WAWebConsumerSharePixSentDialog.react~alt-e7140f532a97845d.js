__d("WAWebConsumerSharePixSentDialog.react", [
	"WAWebConfirmPopup.react",
	"WAWebConsumerPixStrings",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WDSIconIcCheckCircle.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = 24, c = {
		checkIcon: {
			color: "x14ug900",
			marginBottom: "xefnzgg",
			$$css: !0
		},
		titleColumn: {
			textAlign: "x2b8uid",
			$$css: !0
		}
	};
	function d(e) {
		var t, n = e.hasAmount, a = e.onDone, i = e.onViewInChat, l = e.recipientName;
		return s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "consumer-share-pix-sent"
			},
			testid: "consumer-share-pix-sent-dialog",
			type: o("WAWebModal.react").ModalTheme.PaymentsConfirmDialog,
			title: s.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: c.titleColumn,
				children: [s.jsx(r("WDSIconIcCheckCircle.react"), {
					height: u,
					width: u,
					iconXstyle: c.checkIcon
				}), s.jsx(r("WDSText.react"), {
					type: "Headline2",
					colorName: "contentDefault",
					children: (t = o("WAWebConsumerPixStrings")).getConsumerSharePixSentTitle(n)
				})]
			}),
			cancelText: t.getConsumerSharePixViewInChat(),
			onCancel: i,
			okText: t.getConsumerSharePixDone(),
			onOK: a,
			children: s.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: t.getConsumerSharePixSentBody(l, n)
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

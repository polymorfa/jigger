__d("WAWebBizBroadcastsConfirmDeleteDialog.react", [
	"fbt",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebModal.react",
	"WDSButton.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect, d = { controlsStyle: {
		paddingInlineEnd: "xyri2b",
		paddingInlineStart: "x1c1uobl",
		paddingTop: "xl7twdi",
		$$css: !0
	} };
	function m(e) {
		var t = e.entryPoint, n = e.onPrimaryPress, a = e.onSecondaryPress;
		return c(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.confirmDeleteAllErrorContactViewed(t);
		}, [t]), u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Small,
			actions: u.jsxs("div", {
				className: "x78zum5 x1f0uite xs2akgl x7v6yn8 xh8yej3",
				children: [u.jsx(r("WDSButton.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					variant: "borderless",
					onPress: a,
					testid: "biz-broadcasts-delete-all-modal-cancel"
				}), u.jsx(r("WDSButton.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					variant: "filled",
					type: "destructive",
					onPress: n,
					testid: "biz-broadcasts-delete-all-modal-confirm"
				})]
			}),
			onOverlayClick: a,
			testid: "biz-broadcasts-delete-all-modal",
			controlsStyle: d.controlsStyle,
			children: u.jsxs("div", {
				className: "x78zum5 xdt5ytf x1f0uite xs2akgl xh8yej3",
				children: [u.jsx(r("WDSText.react"), {
					type: "Headline2",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				}), u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);

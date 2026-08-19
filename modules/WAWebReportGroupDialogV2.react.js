__d("WAWebReportGroupDialogV2.react", [
	"fbt",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WDSButtonGroup.react",
	"WDSDialog.react",
	"WDSDialogBridge",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.onReport, n = e.onReportExit, a = e.showAdditionalAction, i = a === void 0 ? !0 : a, l = function() {
			o("WDSDialogBridge").closeWDSDialog();
		}, c = function() {
			t(), o("WDSDialogBridge").closeWDSDialog();
		}, d = function() {
			n(), o("WDSDialogBridge").closeWDSDialog();
		}, m = s._(
			/*BTDS*/
			""
		), p = s._(
			/*BTDS*/
			""
		), _ = s._(
			/*BTDS*/
			""
		), f = i ? u.jsx(r("WDSButtonGroup.react"), {
			orientation: "stacked",
			width: "fill",
			primaryButtonProps: {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: d,
				testid: "popup-controls-ok",
				type: "destructive",
				variant: "outline"
			},
			secondaryButtonProps: {
				label: r("WAWebFbtCommon")("Report"),
				onPress: c,
				testid: "popup-controls-extra",
				type: "default",
				variant: "outline"
			},
			tertiaryButtonProps: {
				label: r("WAWebFbtCommon")("Cancel"),
				onPress: l,
				testid: "popup-controls-cancel",
				variant: "borderless"
			}
		}) : u.jsx(r("WDSButtonGroup.react"), {
			orientation: "stacked",
			width: "fill",
			primaryButtonProps: {
				label: r("WAWebFbtCommon")("Report"),
				onPress: c,
				testid: "popup-controls-ok",
				type: "destructive",
				variant: "outline"
			},
			secondaryButtonProps: {
				label: r("WAWebFbtCommon")("Cancel"),
				onPress: l,
				testid: "popup-controls-cancel",
				variant: "borderless"
			}
		});
		return u.jsx(r("WDSDialog.react"), {
			closeButton: !1,
			footer: f,
			headerType: "expressive",
			layoutType: "expressive",
			onDismiss: l,
			open: !0,
			size: "sm",
			testid: "report-group-popup",
			title: m,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				gap: 8,
				children: [u.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDeemphasized",
					children: p
				}), u.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDeemphasized",
					children: _
				})]
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

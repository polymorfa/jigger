__d("WAWebCometLiteCallErrorDialog.react", [
	"fbt",
	"WDSButtonGroup.react",
	"WDSDialog.react",
	"WDSDialogBridge",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c() {
		return u.jsx(r("WDSDialog.react"), {
			closeButton: !0,
			description: s._(
				/*BTDS*/
				""
			),
			footer: u.jsx(r("WDSButtonGroup.react"), {
				orientation: "horizontal",
				width: "hug",
				primaryButtonProps: {
					label: s._(
						/*BTDS*/
						""
					),
					onPress: o("WDSDialogBridge").closeWDSDialog,
					testid: "wa-web-lite-call-error-ok",
					variant: "filled"
				}
			}),
			onDismiss: o("WDSDialogBridge").closeWDSDialog,
			open: !0,
			size: "sm",
			testid: "wa-web-lite-call-error-dialog",
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

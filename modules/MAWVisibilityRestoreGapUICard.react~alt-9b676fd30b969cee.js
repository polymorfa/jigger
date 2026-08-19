__d("MAWVisibilityRestoreGapUICard.react", [
	"fbt",
	"MWChatEncryptedBackupsSyncDeviceInterstitialIcon.react",
	"MWXButton.react",
	"MWXColumn.react",
	"MWXColumnItem.react",
	"MWXText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = e.onOpenRestoreDialog;
		return u.jsx("div", {
			className: "xlhe6ec x6nl9eh x1a5l9x9 x7vuprf x1mg3h75 xe4pinz xxc7z9f x1p5oq8j xwxc41k x13jy36j x64bnmy xh8yej3",
			children: u.jsxs(r("MWXColumn.react"), {
				align: "center",
				spacing: 12,
				children: [
					u.jsx(t = r("MWXColumnItem.react"), {
						align: "center",
						children: u.jsx(r("MWChatEncryptedBackupsSyncDeviceInterstitialIcon.react"), {})
					}),
					u.jsx(t, {
						align: "center",
						paddingTop: 4,
						children: u.jsx("div", {
							className: "x16em4ew",
							children: u.jsx(r("MWXText.react"), {
								align: "center",
								isSemanticHeading: !0,
								type: "headlineEmphasized2",
								children: s._(
									/*BTDS*/
									""
								)
							})
						})
					}),
					u.jsx(t, {
						align: "center",
						children: u.jsx("div", {
							className: "x1tkr9og",
							children: u.jsx(r("MWXText.react"), {
								align: "center",
								color: "secondary",
								type: "body3",
								children: s._(
									/*BTDS*/
									""
								)
							})
						})
					}),
					u.jsx(t, {
						align: "center",
						paddingTop: 8,
						children: u.jsx(r("MWXButton.react"), {
							label: s._(
								/*BTDS*/
								""
							),
							onPress: n,
							padding: "wide",
							testid: void 0,
							type: "primary"
						})
					})
				]
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

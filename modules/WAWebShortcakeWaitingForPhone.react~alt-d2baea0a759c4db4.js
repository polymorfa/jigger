__d("WAWebShortcakeWaitingForPhone.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebLinkDeviceScreenPrimaryButton.react",
	"WAWebSpinner.react",
	"WAWebWdsPictoPasskeyIcon.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		textSection: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x1cy8zhl",
			rowGap: "x1kb72lq",
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		buttonSpacing: {
			marginTop: "x1anpbxc",
			$$css: !0
		},
		spinnerStroke: {
			stroke: "xscos2w",
			$$css: !0
		}
	};
	function d() {
		return u.jsxs("div", {
			className: "x78zum5 x1q0g3np x6s0dn4 x1qgv0r9",
			"data-testid": "shortcake_waiting_for_phone_card",
			children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: c.textSection,
				children: [
					u.jsx("span", {
						className: "xngnso2 xo1l8bm x1mqxbix",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					u.jsx("span", {
						className: "x1f6kntn xo1l8bm x1mqxbix x1fc57z9",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					u.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
						animate: !1,
						disabled: !0,
						icon: u.jsx(o("WAWebSpinner.react").Spinner, {
							size: 16,
							stroke: 2,
							color: c.spinnerStroke
						}),
						onClick: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {}),
						testId: "shortcake_waiting_continue_button",
						text: s._(
							/*BTDS*/
							""
						),
						xstyle: c.buttonSpacing
					})
				]
			}), u.jsx("div", {
				className: "x78zum5 x6s0dn4 xl56j7k x2lah0s",
				children: u.jsx(o("WAWebWdsPictoPasskeyIcon.react").WdsPictoPasskeyIcon, {
					height: 88,
					width: 88
				})
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

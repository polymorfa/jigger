__d("WAWebSuspiciousConsumerCard.react", [
	"fbt",
	"WAWebBlockContactUtils",
	"WAWebBlockContants",
	"WAWebContactGetters",
	"WAWebDetailImage.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebInfoShieldIcon.react",
	"WAWebName.react",
	"WAWebNoop",
	"WAWebSendNotSpamAction",
	"WAWebSettingsBlockedIcon.react",
	"WDSButton.react",
	"WDSButtonGroup.react",
	"WDSIconIcCheckCircle.react",
	"WDSIconIcErrorFilled.react",
	"WDSText.react",
	"react",
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = 30, d = { container: {
		maxWidth: "xlnrm6",
		width: "xh8yej3",
		boxSizing: "x9f619",
		paddingTop: "xl7twdi",
		paddingBottom: "xvg22vi",
		paddingInlineStart: "x1iw51ew",
		paddingInlineEnd: "xde1mab",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} };
	function m(e) {
		var t = e.chat, n = e.trustSignals, a = t.contact, i = o("useWAWebContactValues").useContactValues(a.id, [o("WAWebContactGetters").getId]), l = i[0], m = function() {
			r("WAWebSendNotSpamAction")(t).catch(r("WAWebNoop"));
		}, p = function() {
			o("WAWebBlockContactUtils").handleBlock(t, o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlockSuspicious);
		};
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: d.container,
			children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				children: [
					u.jsxs("div", {
						className: "x1n2onr6",
						children: [u.jsx(o("WAWebDetailImage.react").DetailImage, {
							id: l,
							size: o("WAWebDetailImage.react").DetailImageSize.Medium,
							quality: o("WAWebDetailImage.react").DetailImageQuality.High,
							tabIndex: 0,
							ariaLabel: s._(
								/*BTDS*/
								""
							)
						}), u.jsx("div", {
							"aria-hidden": !0,
							className: "x10l6tqk xtijo5x x1ey2m1c x1849jeq x1gnnpzl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1280gxy x78zum5 x6s0dn4 xl56j7k xqnyt8g",
							children: u.jsx(r("WDSIconIcErrorFilled.react"), {
								height: c,
								width: c
							})
						})]
					}),
					u.jsx("div", {
						className: "x16ovd2e",
						children: u.jsx(r("WDSText.react"), {
							type: "Headline2",
							colorName: "contentDefault",
							children: u.jsx(o("WAWebName.react").Name, { contact: a })
						})
					}),
					u.jsx("div", {
						className: "x16ovd2e",
						"data-testid": "fmx-card-trust-signals",
						children: u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: n.map(function(e, t) {
								return u.jsxs("span", { children: [e, t < n.length - 1 && u.jsx(u.Fragment, { children: " • " })] }, t);
							})
						})
					})
				]
			}), u.jsxs("div", {
				className: "x1p57kb1 x5w4yej x78zum5 xdt5ytf x6s0dn4",
				children: [u.jsx(r("WDSButton.react"), {
					variant: "borderless",
					onPress: r("WAWebNoop"),
					Icon: o("WAWebInfoShieldIcon.react").InfoShieldIcon,
					testid: "fmx-suspicious-prompt",
					label: s._(
						/*BTDS*/
						""
					)
				}), u.jsx(r("WDSButtonGroup.react"), {
					width: "hug",
					orientation: "horizontal",
					secondaryButtonProps: {
						variant: "outline",
						type: "destructive",
						onPress: p,
						Icon: o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
						testid: "fmx-card-block-btn",
						label: r("WAWebFbtCommon")("Block")
					},
					primaryButtonProps: {
						variant: "outline",
						type: "default",
						onPress: m,
						Icon: r("WDSIconIcCheckCircle.react"),
						testid: "fmx-card-trust-btn",
						label: s._(
							/*BTDS*/
							""
						)
					}
				})]
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);

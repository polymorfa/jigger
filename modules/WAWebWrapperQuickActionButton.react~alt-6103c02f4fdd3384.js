__d("WAWebWrapperQuickActionButton.react", [
	"fbt",
	"WAWebABProps",
	"WAWebInfoAltIcon.react",
	"WAWebRound.react",
	"WDSButton.react",
	"WDSIconIcFastForward.react",
	"WDSTooltip.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = { svgColorRefreshed: {
		color: "xhslqc4",
		$$css: !0
	} };
	function m(e) {
		var t = e.onOpenBizEncStateMissmatchInfoPopup, n = e.onOpenBizPrivacyInfoPopup, a = e.onOpenEphemeralExemptionInfoPopup, i = e.onOpenForwardFlow, l = e.onOpenMarketingMessagesFeedback, m = e.showHostedBizEncStateMismatchInfoAction, p = e.showQuickBizPrivacyInfoAction, _ = e.showQuickEphemeralExemptionInfoAction, f = e.showQuickForwardAction, g = e.showQuickMarketingMessagesFeedbackAction, h = c(!1), y = h[0], C = h[1], b = o("WAWebABProps").getABPropConfigValue("wa_web_quick_reactions") === !0, v = null, S = d.svgColorRefreshed;
		return p ? v = u.jsx(o("WAWebRound.react").Round, {
			onClick: n,
			label: s._(
				/*BTDS*/
				""
			),
			theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
			children: u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, { xstyle: S })
		}) : g ? v = u.jsx(o("WAWebRound.react").Round, {
			label: s._(
				/*BTDS*/
				""
			),
			title: s._(
				/*BTDS*/
				""
			),
			theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
			onClick: l,
			children: u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, { xstyle: S })
		}) : f ? v = b ? u.jsxs("div", {
			className: "x6s0dn4 x3nfvp2 xc8icb0 xl56j7k x1n2onr6",
			onPointerDownCapture: function() {
				return C(!0);
			},
			onPointerUpCapture: function() {
				return C(!1);
			},
			onPointerCancelCapture: function() {
				return C(!1);
			},
			onPointerLeave: function() {
				return C(!1);
			},
			children: [u.jsx("div", babelHelpers.extends({}, {
				0: { className: "x1honnu5 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x13vifvy xtijo5x x1ey2m1c x1o0tod x47corl x10l6tqk x3oybdh x13t8fmb x11xpdln xum2xem x1ja2u2z" },
				1: { className: "x1honnu5 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x13vifvy xtijo5x x1ey2m1c x1o0tod x47corl x10l6tqk x13t8fmb x11xpdln xum2xem x1ja2u2z x9f2ct2" }
			}[!!y << 0])), u.jsx("span", {
				className: "x78zum5 x1n2onr6 x1vjfegm",
				children: u.jsx(r("WDSTooltip.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					children: u.jsx(r("WDSButton.react"), {
						type: "media",
						variant: "borderless",
						size: "small",
						directional: !0,
						Icon: r("WDSIconIcFastForward.react"),
						onPress: function() {
							return i(!1);
						},
						"aria-label": s._(
							/*BTDS*/
							""
						),
						testid: "forward-refreshed"
					})
				})
			})]
		}) : u.jsx(o("WAWebRound.react").Round, {
			label: s._(
				/*BTDS*/
				""
			),
			theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
			onClick: function() {
				return i(!1);
			},
			children: u.jsx(r("WDSIconIcFastForward.react"), {
				directional: !0,
				xstyle: S,
				height: 20,
				width: 20,
				testid: "forward-refreshed"
			})
		}) : _ ? v = u.jsx(o("WAWebRound.react").Round, {
			label: s._(
				/*BTDS*/
				""
			),
			theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
			onClick: a,
			children: u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, { xstyle: S })
		}) : m && (v = u.jsx(o("WAWebRound.react").Round, {
			theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
			onClick: t,
			children: u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, { xstyle: S })
		})), v;
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);

__d("WAWebShortcakeCodeMatching.react", [
	"fbt",
	"WALogger",
	"WAWebFlex.react",
	"WAWebLinkDeviceScreenPrimaryButton.react",
	"WAWebSpinner.react",
	"WDSIconIcArrowForward.react",
	"getErrorSafe",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useState, _ = 4, f = {
		textSection: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x1cy8zhl",
			rowGap: "x1kb72lq",
			$$css: !0
		},
		buttonSpacing: {
			marginTop: "x1anpbxc",
			$$css: !0
		},
		spinnerStroke: {
			stroke: "xscos2w",
			$$css: !0
		},
		codeRow: {
			display: "x78zum5",
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			columnGap: "xmixu3c",
			$$css: !0
		}
	};
	function g(t) {
		var n = t.autoConfirming, a = n === void 0 ? !1 : n, i = t.onConfirm, l = t.verificationCode, u = p(!1), d = u[0], g = u[1], h = d || a, y = m(async function() {
			g(!0), i().catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Shortcake UI: code confirmation failed"]))).catching(r("getErrorSafe")(t)).sendLogs("shortcake-code-confirm-fail"), g(!1);
			});
		}, [i]), C = l.split("");
		return c.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: f.textSection,
			testid: "shortcake_code_matching_card",
			children: [
				c.jsx("span", {
					className: "xngnso2 xo1l8bm x1mqxbix",
					children: s._(
						/*BTDS*/
						""
					)
				}),
				c.jsx("span", {
					className: "x1f6kntn xo1l8bm x1mqxbix x1fc57z9",
					children: s._(
						/*BTDS*/
						""
					)
				}),
				c.jsx("div", {
					className: "xh8yej3 xf39lq1 xlr9sxt xvvg52n xwd4zgb xq8v1ta xz9dl7a xsag5q8",
					"data-testid": "shortcake_verification_code_display",
					role: "status",
					"aria-label": s._(
						/*BTDS*/
						"",
						[s._param("code", l.split("").join(" "))]
					),
					children: c.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: f.codeRow,
						children: C.map(function(e, t) {
							return c.jsxs(c.Fragment, { children: [t === _ && c.jsx("span", {
								className: "x78zum5 x6s0dn4 xl56j7k x579bpy xk50ysn x1618xya x1djpfga x1im30kd",
								"aria-hidden": "true",
								children: "-"
							}), c.jsx("span", {
								className: "x78zum5 x6s0dn4 xl56j7k x10h3iyq xsdox4t x12peec7 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xkf4vw5 xwfngxx xoop1me x1lylb4u xyi3aci xwf5gio x1p453bz x1suzm8a x1aueamr xk50ysn x1jzgpr8 x1618xya",
								"aria-hidden": "true",
								children: e
							})] }, t);
						})
					})
				}),
				c.jsx("span", {
					className: "x1nxh6w3 x1v8dydz xd4r4e8",
					children: s._(
						/*BTDS*/
						""
					)
				}),
				c.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
					animate: !h,
					disabled: h,
					icon: h ? c.jsx(o("WAWebSpinner.react").Spinner, {
						size: 16,
						stroke: 2,
						color: f.spinnerStroke
					}) : c.jsx(r("WDSIconIcArrowForward.react"), {}),
					onClick: y,
					testId: "shortcake_code_confirm_button",
					text: h ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					),
					xstyle: f.buttonSpacing
				})
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);

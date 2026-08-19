__d("WAWebHatchApprovalDialog.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebHatchApprovalIcon.react",
	"WAWebHatchApprovalOption",
	"WDSBaseRadio.react",
	"WDSButtonGroup.react",
	"WDSDialog.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useId, m = c.useState, p = "hatch-approval-option";
	function _(e) {
		return e.spaceReaderGrantEligible ? [{
			option: r("WAWebHatchApprovalOption").AllowOnce,
			testid: "hatch-approval-option-allow-once",
			label: s._(
				/*BTDS*/
				""
			)
		}, {
			option: r("WAWebHatchApprovalOption").Deny,
			testid: "hatch-approval-option-deny",
			label: s._(
				/*BTDS*/
				""
			)
		}] : [
			{
				option: r("WAWebHatchApprovalOption").AllowOnce,
				testid: "hatch-approval-option-allow-once",
				label: e.turnGrantEligible ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			},
			{
				option: r("WAWebHatchApprovalOption").AllowAlways,
				testid: "hatch-approval-option-allow-always",
				label: s._(
					/*BTDS*/
					""
				)
			},
			{
				option: r("WAWebHatchApprovalOption").Deny,
				testid: "hatch-approval-option-deny",
				label: s._(
					/*BTDS*/
					""
				)
			}
		];
	}
	var f = {
		request: {
			textAlign: "x2b8uid",
			rowGap: "x129bwdz",
			$$css: !0
		},
		options: {
			marginTop: "x1de0gy",
			$$css: !0
		}
	};
	function g(e) {
		var t = e.defaultOption, n = t === void 0 ? r("WAWebHatchApprovalOption").AllowOnce : t, a = e.iconUrl, i = e.onConfirm, l = e.onDismiss, c = e.onSeeDetails, g = e.richDescription, h = e.spaceReaderGrantEligible, y = h === void 0 ? !1 : h, C = e.title, b = e.turnGrantEligible, v = b === void 0 ? !1 : b, S = m(n), R = S[0], L = S[1], E = d(), k = _({
			spaceReaderGrantEligible: y,
			turnGrantEligible: v
		}), I = function() {
			i(R);
		}, T = u.jsx(r("WDSButtonGroup.react"), {
			orientation: "stacked",
			width: "fill",
			primaryButtonProps: {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: I,
				testid: "hatch-approval-confirm",
				variant: "filled"
			},
			secondaryButtonProps: {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: l,
				testid: "hatch-approval-cancel",
				variant: "borderless"
			}
		});
		return u.jsxs(r("WDSDialog.react"), {
			footer: T,
			headerType: "expressive",
			layoutType: "expressive",
			onDismiss: l,
			open: !0,
			size: "md",
			testid: "hatch-approval-dialog",
			title: s._(
				/*BTDS*/
				""
			),
			children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: f.request,
				children: [
					u.jsx(r("WAWebHatchApprovalIcon.react"), {
						iconUrl: a,
						size: "medium"
					}),
					u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						testid: "hatch-approval-summary",
						children: C
					}),
					u.jsxs(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						testid: "hatch-approval-action",
						children: [g, c != null && u.jsxs(u.Fragment, { children: [g !== "" && (/[.!?]$/.test(g.trimEnd()) ? " " : ". "), u.jsx(r("WDSTextualLink.react"), {
							textConfig: "Body2",
							onClick: c,
							testid: "hatch-approval-see-details",
							children: s._(
								/*BTDS*/
								""
							)
						})] })]
					})
				]
			}), u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: f.options,
				role: "radiogroup",
				"aria-label": s._(
					/*BTDS*/
					""
				),
				children: k.map(function(e) {
					var t = e.label, n = e.option, o = e.testid, a = E + "-" + o;
					return u.jsxs("label", {
						"data-testid": o + "-row",
						htmlFor: a,
						className: "x78zum5 x6s0dn4 x1s70e7g x1ypdohk xscbp6u x1xrf6ya",
						children: [u.jsx(r("WDSBaseRadio.react"), {
							checked: R === n,
							id: a,
							name: p,
							onChange: function() {
								return L(n);
							},
							testid: o,
							value: o
						}), u.jsx("div", {
							className: "x1iyjqo2",
							children: u.jsx(r("WDSText.react"), {
								type: "Body1",
								colorName: "contentDefault",
								children: t
							})
						})]
					}, o);
				})
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);

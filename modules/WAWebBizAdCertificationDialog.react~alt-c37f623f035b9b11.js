__d("WAWebBizAdCertificationDialog.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAdCertificationContent.react",
	"WAWebBizAdLogger",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebXIcon.react",
	"WDSButton.react",
	"react",
	"useWAWebBizAdCertifyMutation"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = {
		footer: {
			borderTopColor: "xx42vgk",
			borderTopStyle: "x13fuv20",
			borderTopWidth: "x178xt8z",
			columnGap: "xs2akgl",
			paddingTop: "x1p57kb1",
			$$css: !0
		},
		header: {
			columnGap: "xs2akgl",
			$$css: !0
		},
		root: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			maxHeight: "x1izscxj",
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xb0esv5",
			rowGap: "x1f0uite",
			width: "xht4xr3",
			$$css: !0
		}
	};
	function f(e) {
		var t = e.adAccountID, n = e.loggerContext, a = e.onAccept, i = e.onClose, l = p(!1), c = l[0], f = l[1], g = m(!1), h = r("useWAWebBizAdCertifyMutation")();
		d(function() {
			n != null && !g.current && (g.current = !0, r("WAWebBizAdLogger").log({
				adAccountID: t,
				event: "non_discrimination_modal_impression",
				loggerContext: n
			}));
		}, [t, n]);
		var y = function() {
			o("WAWebModalManager").ModalManager.close(), i();
		}, C = function() {
			n != null && r("WAWebBizAdLogger").log({
				adAccountID: t,
				event: "consent_non_discrimination",
				loggerContext: n
			}), f(!0), h(function() {
				f(!1), o("WAWebModalManager").ModalManager.close(), a();
			}, function(e) {
				f(!1);
			});
		};
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: _.root,
			children: [
				u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					xstyle: _.header,
					children: u.jsx(r("WDSButton.react"), {
						Icon: o("WAWebXIcon.react").XIcon,
						onPress: y,
						size: "medium",
						variant: "borderless"
					})
				}),
				u.jsx("div", {
					className: "x1iyjqo2 xs83m0k x2lwn1j x1odjw0f",
					children: u.jsx(r("WAWebBizAdCertificationContent.react"), {})
				}),
				u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "end",
					xstyle: _.footer,
					children: u.jsx(r("WDSButton.react"), {
						label: s._(
							/*BTDS*/
							""
						),
						loading: c,
						onPress: C,
						size: "medium",
						variant: "filled"
					})
				})
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.adAccountID, n = e.environment, r = e.loggerContext, a = e.onAccept, i = e.onClose;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.Auto,
			children: u.jsx(o("CometRelay").RelayEnvironmentProvider, {
				environment: n,
				children: u.jsx(f, {
					adAccountID: t,
					loggerContext: r,
					onAccept: a,
					onClose: i
				})
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);

__d("WAWebNotificationsOptInModal.react", [
	"fbt",
	"WAWebFbtCommon",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebNotificationsModalVariant",
	"WAWebUA",
	"WDSBadge.react",
	"WDSButton.react",
	"WDSButtonGroup.react",
	"WDSIconIcClose.react",
	"WDSIllustrationWdsAnimBellNotificationsNoBadge.react",
	"WDSIllustrationWdsPictoMissedCallPhone.react",
	"WDSText.react",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useRef, m = (e = {}, e[o("WAWebUA").BROWSER_TYPE.CHROME] = "Chrome", e[o("WAWebUA").BROWSER_TYPE.EDGE] = "Edge", e[o("WAWebUA").BROWSER_TYPE.FIREFOX] = "Firefox", e[o("WAWebUA").BROWSER_TYPE.OPERA] = "Opera", e[o("WAWebUA").BROWSER_TYPE.SAFARI] = "Safari", e);
	function p(e) {
		var t = e.copy, n = e.missedCount, a = e.onAllow, i = e.onDismiss, l = d(!1);
		o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
			l.current || i();
		});
		var u = function() {
			l.current = !0, o("WAWebModalManager").ModalManager.close(), a();
		}, m = function() {
			l.current = !0, o("WAWebModalManager").ModalManager.close(), i();
		}, p = t === o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy.PostLoad ? s._(
			/*BTDS*/
			""
		) : t === o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy.MissedMessages ? s._(
			/*BTDS*/
			""
		) : t === o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy.MissedCall ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		})(), g = t === o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy.PostLoad ? _(null) : t === o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy.MissedMessages ? _(n) : t === o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy.MissedCall ? c.jsx(r("WDSIllustrationWdsPictoMissedCallPhone.react"), {}) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		})();
		return c.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Small,
			onOverlayClick: m,
			ariaLabel: p,
			testid: "notifications_opt_in_modal",
			children: c.jsxs("div", {
				className: "x78zum5 xdt5ytf x6s0dn4 x2b8uid x1qvou4u xh8yej3",
				children: [
					c.jsx("div", {
						className: "x78zum5 x13a6bvl xh8yej3",
						children: c.jsx(r("WDSButton.react"), {
							Icon: r("WDSIconIcClose.react"),
							onPress: m,
							variant: "borderless",
							type: "default",
							size: "medium",
							testid: "notifications_opt_in_close",
							"aria-label": r("WAWebFbtCommon")("Close")
						})
					}),
					c.jsx("div", {
						className: "x78zum5 xl56j7k x16ovd2e",
						children: g
					}),
					c.jsx("div", {
						"data-testid": "notifications_opt_in_title",
						children: c.jsx(r("WDSText.react"), {
							type: "Headline1",
							colorName: "contentDefault",
							children: p
						})
					}),
					c.jsx("div", {
						"data-testid": "notifications_opt_in_description",
						children: c.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDeemphasized",
							children: f(t)
						})
					}),
					c.jsx("div", {
						className: "xh8yej3 x1p57kb1",
						children: c.jsx(r("WDSButtonGroup.react"), {
							orientation: "stacked",
							width: "fill",
							primaryButtonProps: {
								variant: "filled",
								type: "default",
								size: "medium",
								onPress: u,
								testid: "notifications_opt_in_ok",
								label: r("WAWebFbtCommon")("Continue")
							},
							tertiaryButtonProps: {
								variant: "borderless",
								type: "default",
								size: "medium",
								onPress: m,
								testid: "notifications_opt_in_not_now",
								label: s._(
									/*BTDS*/
									""
								)
							}
						})
					})
				]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		return e == null || e <= 0 ? c.jsx(r("WDSIllustrationWdsAnimBellNotificationsNoBadge.react"), {}) : c.jsxs("div", {
			className: "x1n2onr6 x3nfvp2 x11askks",
			children: [c.jsx(r("WDSIllustrationWdsAnimBellNotificationsNoBadge.react"), {}), c.jsx("div", {
				className: "x10l6tqk xndqk7f x9q68il",
				children: c.jsx(r("WDSBadge.react"), {
					count: e,
					border: !0,
					testid: "notifications_opt_in_unread_badge",
					accessibilityText: s._(
						/*BTDS*/
						"",
						[s._plural(e, "number")]
					)
				})
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		return e === o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy.PostLoad ? s._(
			/*BTDS*/
			"",
			[s._param("browser", g())]
		) : e === o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy.MissedMessages ? s._(
			/*BTDS*/
			"",
			[s._param("browser", g())]
		) : e === o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy.MissedCall ? s._(
			/*BTDS*/
			"",
			[s._param("browser", g())]
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g() {
		var e;
		return (e = m[o("WAWebUA").UA.browser]) != null ? e : s._(
			/*BTDS*/
			""
		);
	}
	l.default = p;
}), 226);

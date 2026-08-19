__d("WAWebWhatsNewModal.react", [
	"fbt",
	"WATimeUtils",
	"WAWebConfirmPopup.react",
	"WAWebEnvironment",
	"WAWebModalManager",
	"WAWebWhatsNewContent",
	"WAWebWhatsNewLogging",
	"WAWebWhatsNewNux",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSIllustrationWdsPictoWhatsappOutline.react",
	"react",
	"useVisibility"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef;
	function _(e) {
		var t = e.bizAgentEligible, n = t === void 0 ? !0 : t, a = e.cooldownDays, i = a === void 0 ? 30 : a, l = p(o("WATimeUtils").monotonicTime()), c = p(!1), _ = r("useVisibility")({ onVisible: function() {
			c.current || (o("WAWebWhatsNewLogging").logModalImpression(i), c.current = !0);
		} }), f = _[0];
		m(function() {
			return function() {
				o("WAWebWhatsNewNux").createWhatsNewNux(i).dismiss();
			};
		}, [i]);
		var g = d(function() {
			var e = o("WATimeUtils").monotonicTimeSince(l.current);
			o("WAWebWhatsNewLogging").logModalDismissButton(i, e), o("WAWebModalManager").ModalManager.close();
		}, [i]), h = d(function() {
			var e = o("WATimeUtils").monotonicTimeSince(l.current);
			o("WAWebWhatsNewLogging").logModalDismissOverlay(i, e), o("WAWebModalManager").ModalManager.close();
		}, [i]);
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: u.jsxs("div", {
				className: "x1n2onr6 xb0esv5 xyo0t3i x1p57kb1 x2b8uid",
				children: [
					u.jsx("div", {
						className: "x78zum5 xl56j7k x12xbjc7",
						children: u.jsx(r("WDSIllustrationWdsPictoWhatsappOutline.react"), { "aria-hidden": !0 })
					}),
					u.jsx("span", { children: r("WAWebEnvironment").isWindows ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					) }),
					u.jsx("div", {
						className: "x10l6tqk x12c0h9u x18zu7yx",
						children: u.jsx(r("WDSButton.react"), {
							variant: "borderless",
							size: "medium",
							Icon: r("WDSIconIcClose.react"),
							onPress: g,
							"aria-label": s._(
								/*BTDS*/
								""
							)
						})
					})
				]
			}),
			onOverlayClick: h,
			children: [u.jsx("div", {
				ref: f,
				className: "x78zum5 xdt5ytf x1f0uite xs2akgl x13jy36j x64bnmy x16ovd2e xv6tirj",
				children: o("WAWebWhatsNewContent").getWhatsNewFeatures({ bizAgentEligible: n }).map(function(e, t) {
					return u.jsxs("div", {
						className: "x78zum5 x1q0g3np x6s0dn4 x1f0uite xs2akgl",
						children: [u.jsx("div", {
							className: "x2lah0s x14ug900",
							children: u.jsx(e.Icon, {
								width: 24,
								height: 24
							})
						}), u.jsx("div", {
							className: "x1f6kntn x1fc57z9 x14ug900",
							children: e.description()
						})]
					}, t);
				})
			}), u.jsx("div", {
				className: "x78zum5 xl56j7k xvpt6g3",
				children: u.jsx(r("WDSButton.react"), {
					variant: "filled",
					size: "medium",
					label: s._(
						/*BTDS*/
						""
					),
					onPress: g,
					testid: "whats_new_continue_button"
				})
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);

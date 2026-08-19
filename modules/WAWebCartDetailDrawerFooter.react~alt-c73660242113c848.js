__d("WAWebCartDetailDrawerFooter.react", [
	"fbt",
	"WAWebABProps",
	"WAWebButton.react",
	"WAWebCurrencyUtils",
	"WAWebDirectConnectionGatingUtils",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebOrderGatingUtils",
	"WAWebText.react",
	"WAWebVelocityTransitionGroup",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { marginBottom15: {
		marginBottom: "x1fqp7bg",
		$$css: !0
	} }, d = {
		footerBorder: {
			borderTopColor: "xx42vgk",
			borderTopStyle: "x13fuv20",
			borderTopWidth: "x178xt8z",
			$$css: !0
		},
		footerPrice: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function m() {
		return u.jsxs(u.Fragment, { children: [
			s._(
				/*BTDS*/
				""
			),
			" ",
			u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebFaqUrl").getJioMartPostcodeChangeLearnMoreLink(),
				children: s._(
					/*BTDS*/
					""
				)
			})
		] });
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		return s._(
			/*BTDS*/
			""
		);
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.isDirectConnection, n = t && o("WAWebDirectConnectionGatingUtils").supportsDirectConnection() && o("WAWebABProps").getABPropConfigValue("share_phone_number_on_cart_send_to_direct_connection_biz_enabled");
		return n ? u.jsx(m, {}) : u.jsx(p, {});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.currency, n = e.savings;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "baseline",
			justify: "all",
			xstyle: [o("WDSMargins.stylex").wdsMargins.marginBottom8, d.footerPrice],
			children: [u.jsx(o("WAWebText.react").WAWebTextTitle, {
				as: "span",
				color: "secondary",
				children: s._(
					/*BTDS*/
					""
				)
			}), u.jsx(o("WAWebText.react").WAWebTextTitle, {
				as: "span",
				color: "teal",
				children: s._(
					/*BTDS*/
					"",
					[s._param("cart-savings", o("WAWebCurrencyUtils").formatAmount1000(t, n))]
				)
			})]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.currency, n = e.savings, r = e.total;
		return u.jsxs(u.Fragment, { children: [n > 0 ? u.jsx(f, {
			currency: t,
			savings: n
		}) : null, u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "baseline",
			justify: "all",
			xstyle: [o("WDSMargins.stylex").wdsMargins.marginBottom8, d.footerPrice],
			children: [u.jsx(o("WAWebText.react").WAWebTextTitle, {
				as: "span",
				weight: "medium",
				children: s._(
					/*BTDS*/
					""
				)
			}), u.jsx(o("WAWebText.react").WAWebTextTitle, {
				as: "span",
				children: s._(
					/*BTDS*/
					"",
					[s._param("cart-total-price", o("WAWebCurrencyUtils").formatAmount1000(t, r))]
				)
			})]
		})] });
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h() {
		return u.jsx(o("WAWebText.react").WAWebTextTitle, {
			as: "span",
			weight: "medium",
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.currency, n = e.savings, r = e.total;
		return r != null && t != null ? u.jsx(g, {
			currency: t,
			savings: n,
			total: r
		}) : u.jsx(h, {});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.cart, n = e.isDirectConnection, a = e.onSend, i = e.savings;
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: [d.footerBorder, o("WDSPaddings.stylex").wdsPaddings.padding16],
			children: [
				u.jsx(y, {
					total: t.total,
					currency: t.currency,
					savings: i
				}),
				u.jsx(o("WAWebText.react").WAWebTextMuted, {
					color: "secondaryLighter",
					xstyle: c.marginBottom15,
					children: u.jsx(_, { isDirectConnection: n })
				}),
				u.jsx(r("WAWebVelocityTransitionGroup"), {
					appear: !0,
					transitionName: "btn",
					children: u.jsx(o("WAWebButton.react").Button, {
						testid: "cart-send-button",
						type: "primary",
						onClick: a,
						children: o("WAWebOrderGatingUtils").isBuyerOrderRequestVariantEnabled() ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							""
						)
					})
				})
			]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);

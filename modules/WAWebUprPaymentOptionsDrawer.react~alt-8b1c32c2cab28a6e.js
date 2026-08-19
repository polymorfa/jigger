__d("WAWebUprPaymentOptionsDrawer.react", [
	"fbt",
	"WAWebCopyTextWithToast",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebExternalLink.react",
	"WAWebUprPaymentMethodRenderData",
	"WDSButton.react",
	"WDSIconIcAccountBalance.react",
	"WDSIconIcAccountBalanceWallet.react",
	"WDSIconIcContentCopy.react",
	"WDSIconIcLink.react",
	"WDSIconIcPhoneAndroid.react",
	"WDSIconIcQrCode.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { rowAction: {
		flexShrink: "x2lah0s",
		$$css: !0
	} };
	function d() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function m(e) {
		return e === "bank_account" ? u.jsx(r("WDSIconIcAccountBalance.react"), {}) : e === "digital_wallet" ? u.jsx(r("WDSIconIcAccountBalanceWallet.react"), {}) : e === "mobile_money" ? u.jsx(r("WDSIconIcPhoneAndroid.react"), {}) : e === "qr_code" ? u.jsx(r("WDSIconIcQrCode.react"), {}) : u.jsx(r("WDSIconIcAccountBalance.react"), {});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.opt, n = o("WAWebUprPaymentMethodRenderData").getUprMethodRenderData(t.accountType, t.identifierType);
		if (n == null) return null;
		var a = n.formatForDisplay ? n.formatForDisplay(t.identifierValue) : t.identifierValue, i = function() {
			o("WAWebCopyTextWithToast").copyTextWithToast({
				failureMsg: d(),
				successMsg: n.copySuccessToast(),
				text: t.identifierValue
			});
		};
		return u.jsxs("div", {
			className: "x78zum5 x1q0g3np x6s0dn4 xz9dl7a xsag5q8 xf7dkkf xv54qhq xso031l x1q0q8m5 x120ee7l xtqikln",
			"data-testid": "upr_drawer_payment_account_row",
			children: [
				u.jsx("span", {
					className: "x2lah0s",
					children: m(t.accountType)
				}),
				u.jsxs("div", {
					className: "x78zum5 xdt5ytf x1iyjqo2 xeuugli",
					children: [
						u.jsx(r("WDSText.react"), {
							type: "Body2Emphasized",
							colorName: "contentDefault",
							children: a
						}),
						u.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDeemphasized",
							children: t.institutionName
						}),
						t.beneficiaryName !== "" ? u.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDeemphasized",
							children: t.beneficiaryName
						}) : null
					]
				}),
				u.jsx(r("WDSButton.react"), {
					"aria-label": n.copyLabel(),
					Icon: r("WDSIconIcContentCopy.react"),
					onPress: i,
					testid: "upr_drawer_copy_button",
					variant: "borderless",
					xstyle: c.rowAction
				})
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		try {
			return new URL(e).hostname;
		} catch (t) {
			return e;
		}
	}
	function f(e) {
		var t = e.opt, n = function() {
			o("WAWebExternalLink.react").openExternalLink(t.uri);
		};
		return u.jsxs("div", {
			className: "x78zum5 x1q0g3np x6s0dn4 xz9dl7a xsag5q8 xf7dkkf xv54qhq xso031l x1q0q8m5 x120ee7l xtqikln",
			"data-testid": "upr_drawer_payment_link_row",
			children: [
				u.jsx("span", {
					className: "x2lah0s",
					children: u.jsx(r("WDSIconIcLink.react"), {})
				}),
				u.jsx("div", {
					className: "x78zum5 xdt5ytf x1iyjqo2 xeuugli",
					children: u.jsx(r("WDSText.react"), {
						type: "Body2Emphasized",
						colorName: "contentDefault",
						children: _(t.uri)
					})
				}),
				u.jsx("button", {
					type: "button",
					onClick: n,
					className: "x2lah0s",
					"data-testid": "upr_drawer_open_link_button",
					children: s._(
						/*BTDS*/
						""
					)
				})
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.children, n = e.testid;
		return u.jsx("div", {
			className: "xz9dl7a xsag5q8 xf7dkkf xv54qhq xkh2ocl",
			"data-testid": n,
			children: u.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentDeemphasized",
				children: t
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.info, n = e.onClose, a = [], i = [], l = [], c = [], d = [];
		for (var m of t.paymentOptions) m.kind === "payment_link" ? d.push(m) : m.accountType === "bank_account" ? a.push(m) : m.accountType === "digital_wallet" ? i.push(m) : m.accountType === "mobile_money" ? l.push(m) : c.push(m);
		return u.jsxs(r("WAWebDrawer.react"), { children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			title: s._(
				/*BTDS*/
				""
			),
			onCancel: n,
			testid: "upr_payment_options_drawer_header"
		}), u.jsxs(r("WAWebDrawerBody.react"), { children: [
			a.length > 0 ? u.jsxs(r("WAWebDrawerSection.react"), {
				testid: "upr_drawer_bank_transfer_section",
				children: [u.jsx(g, {
					testid: "upr_drawer_bank_transfer_header",
					children: s._(
						/*BTDS*/
						""
					)
				}), a.map(function(e, t) {
					return u.jsx(p, { opt: e }, "bank-" + t);
				})]
			}) : null,
			i.length > 0 ? u.jsxs(r("WAWebDrawerSection.react"), {
				testid: "upr_drawer_digital_wallet_section",
				children: [u.jsx(g, {
					testid: "upr_drawer_digital_wallet_header",
					children: s._(
						/*BTDS*/
						""
					)
				}), i.map(function(e, t) {
					return u.jsx(p, { opt: e }, "wallet-" + t);
				})]
			}) : null,
			l.length > 0 ? u.jsxs(r("WAWebDrawerSection.react"), {
				testid: "upr_drawer_mobile_money_section",
				children: [u.jsx(g, {
					testid: "upr_drawer_mobile_money_header",
					children: s._(
						/*BTDS*/
						""
					)
				}), l.map(function(e, t) {
					return u.jsx(p, { opt: e }, "mobile-money-" + t);
				})]
			}) : null,
			c.length > 0 ? u.jsx(r("WAWebDrawerSection.react"), {
				testid: "upr_drawer_other_account_section",
				children: c.map(function(e, t) {
					return u.jsx(p, { opt: e }, "other-" + t);
				})
			}) : null,
			d.length > 0 ? u.jsxs(r("WAWebDrawerSection.react"), {
				testid: "upr_drawer_payment_link_section",
				children: [u.jsx(g, {
					testid: "upr_drawer_payment_link_header",
					children: s._(
						/*BTDS*/
						""
					)
				}), d.map(function(e, t) {
					return u.jsx(f, { opt: e }, "link-" + t);
				})]
			}) : null
		] })] });
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);

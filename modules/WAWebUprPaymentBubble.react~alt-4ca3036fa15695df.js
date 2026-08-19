__d("WAWebUprPaymentBubble.react", [
	"fbt",
	"WAWebFormatUprAmount",
	"WAWebMediaMsgPreview.react",
	"WAWebMediaUrlProvider",
	"WAWebOrderDetailProductLabel",
	"WAWebUprPaymentMethodRenderData",
	"WAWebUprPaymentRequest",
	"WDSIconIcAccountBalance.react",
	"WDSIconIcAccountBalanceWallet.react",
	"WDSIconIcAttachMoney.react",
	"WDSIconIcLink.react",
	"WDSIconIcPayments.react",
	"WDSIconIcPhoneAndroid.react",
	"WDSIconIcQrCode.react",
	"WDSIconWdsIcCurrencyEgyptianPoundCircle.react",
	"WDSIconWdsIcCurrencyHongKongDollarCircle.react",
	"WDSIconWdsIcCurrencyIndonesianrupiahCircle.react",
	"WDSIconWdsIcCurrencyLiraCircle.react",
	"WDSIconWdsIcCurrencyNewTaiwanDollarCircle.react",
	"WDSIconWdsIcCurrencyUaeDirhamCircle.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = 10;
	function d(e, t) {
		return u.jsx("span", {
			className: "x1280gxy xbrszos xea3l6g x18isctg x2q3nzr x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 x1849jeq xxk0z11 x1y1aw1k xf159sx xwib8y2 xmzvs34 x9f619 x78zum5 x6s0dn4 xl56j7k x2lah0s",
			"data-testid": "upr_bubble_pay_with_icon_card",
			children: m(e)
		}, t);
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		return e.kind === "payment_link" ? u.jsx(r("WDSIconIcLink.react"), {}) : e.accountType === "bank_account" ? u.jsx(r("WDSIconIcAccountBalance.react"), {}) : e.accountType === "digital_wallet" ? u.jsx(r("WDSIconIcAccountBalanceWallet.react"), {}) : e.accountType === "mobile_money" ? u.jsx(r("WDSIconIcPhoneAndroid.react"), {}) : e.accountType === "qr_code" ? u.jsx(r("WDSIconIcQrCode.react"), {}) : u.jsx(r("WDSIconIcLink.react"), {});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = [];
		for (var n of e) if (n.kind === "payment_account" && (t.push(n), t.length >= c)) break;
		return t;
	}
	function _() {
		return u.jsx("span", {
			className: "x1bvqhpb x190qgfh x1xlr1w8 x1d3mw78 xlxmecl xtvhhri xcahpfu",
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.downloadMedia, n = e.mediaData, a = e.thumbnailUrl, i = a != null && a !== "" ? a : null;
		return n != null && o("WAWebMediaMsgPreview.react").isMediaTypeWithImage(n.type) ? u.jsx("div", {
			className: "x1useyqa xsdox4t xyi3aci xwf5gio x1p453bz x1suzm8a x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1ekq09l xlmuga0 x54tcbp xlzwp1d x9f619 x18d0r48 xztyhrg xiy17q3 x2lah0s x6ikm8r x10wlt62",
			"data-testid": "upr_bubble_item_thumbnail",
			children: u.jsx(r("WAWebMediaUrlProvider"), {
				downloadMedia: t,
				mediaData: n,
				placeholderRenderer: function() {
					return i != null ? u.jsx("div", {
						className: "xh8yej3 x5yr21d x18d0r48 xztyhrg xiy17q3",
						style: { backgroundImage: "url(" + i + ")" }
					}) : null;
				},
				renderProgressively: !0,
				children: function(t) {
					return u.jsx("div", {
						className: "xh8yej3 x5yr21d x18d0r48 xztyhrg xiy17q3",
						style: { backgroundImage: "url(" + t + ")" }
					});
				}
			})
		}) : i != null ? u.jsx("div", {
			className: "x1useyqa xsdox4t xyi3aci xwf5gio x1p453bz x1suzm8a x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1ekq09l xlmuga0 x54tcbp xlzwp1d x9f619 x18d0r48 xztyhrg xiy17q3 x2lah0s x6ikm8r x10wlt62",
			style: { backgroundImage: "url(" + i + ")" },
			"data-testid": "upr_bubble_item_thumbnail"
		}) : null;
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.downloadMedia, n = e.mediaData, o = e.name, a = e.quantity, i = e.thumbnailUrl;
		return u.jsxs("div", {
			className: "x78zum5 x1q0g3np x6s0dn4 xtqikln",
			"data-testid": "upr_bubble_item_row",
			children: [u.jsx(f, {
				mediaData: n,
				downloadMedia: t,
				thumbnailUrl: i
			}), u.jsxs("div", {
				className: "x78zum5 xdt5ytf xeuugli x1iyjqo2",
				children: [u.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "contentDefault",
					children: o
				}), u.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						"",
						[s._param("count", a, [0])]
					)
				})]
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.items;
		return u.jsx("div", {
			className: "x78zum5 x1q0g3np x6s0dn4 xtqikln",
			"data-testid": "upr_bubble_multi_item_row",
			children: u.jsxs("div", {
				className: "x78zum5 xdt5ytf xeuugli x1iyjqo2",
				children: [u.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "contentDefault",
					maxLines: 1,
					children: o("WAWebOrderDetailProductLabel").getOrderDetailProductLabel(t)
				}), u.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						"",
						[s._plural(t.length, "count")]
					)
				})]
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.account, n = e.currency, a = o("WAWebUprPaymentMethodRenderData").getUprMethodRenderData(t.accountType, t.identifierType);
		if (a == null) return null;
		var i = a.formatForDisplay != null ? a.formatForDisplay(t.identifierValue) : t.identifierValue;
		return u.jsxs("div", {
			className: "x78zum5 x1q0g3np x6s0dn4 xtqikln",
			"data-testid": "upr_bubble_account_row",
			children: [u.jsx("span", {
				className: "x1useyqa xsdox4t x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x9f619 x78zum5 x6s0dn4 xl56j7k x2lah0s",
				children: C(n)
			}), u.jsxs("div", {
				className: "x78zum5 xdt5ytf xeuugli x1iyjqo2",
				children: [
					u.jsx(r("WDSText.react"), {
						type: "Body2Emphasized",
						colorName: "contentDefault",
						children: i
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
			})]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		return e === "AED" ? u.jsx(r("WDSIconWdsIcCurrencyUaeDirhamCircle.react"), {}) : e === "EGP" ? u.jsx(r("WDSIconWdsIcCurrencyEgyptianPoundCircle.react"), {}) : e === "HKD" ? u.jsx(r("WDSIconWdsIcCurrencyHongKongDollarCircle.react"), {}) : e === "IDR" ? u.jsx(r("WDSIconWdsIcCurrencyIndonesianrupiahCircle.react"), {}) : e === "MXN" ? u.jsx(r("WDSIconIcAttachMoney.react"), {}) : e === "TRY" ? u.jsx(r("WDSIconWdsIcCurrencyLiraCircle.react"), {}) : e === "TWD" ? u.jsx(r("WDSIconWdsIcCurrencyNewTaiwanDollarCircle.react"), {}) : u.jsx(r("WDSIconIcPayments.react"), {});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.accounts, n = e.currency, o = t.map(function(e) {
			return e.institutionName;
		}).join(", ");
		return u.jsxs("div", {
			className: "x78zum5 x1q0g3np x6s0dn4 xtqikln",
			"data-testid": "upr_bubble_accounts_summary_row",
			children: [u.jsx("span", {
				className: "x1useyqa xsdox4t x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x9f619 x78zum5 x6s0dn4 xl56j7k x2lah0s",
				children: C(n)
			}), u.jsxs("div", {
				className: "x78zum5 xdt5ytf xeuugli x1iyjqo2",
				children: [u.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						"",
						[s._param("count", t.length, [0])]
					)
				}), u.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDeemphasized",
					children: o
				})]
			})]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		for (var t = e.paymentOptions, n = new Set(), o = [], a = 0; a < t.length; a++) {
			var i = t[a], l = i.kind === "payment_account" ? "account/" + i.accountType : "link";
			n.has(l) || (n.add(l), o.push(d(i, l)));
		}
		return u.jsxs("div", {
			className: "x78zum5 x1q0g3np x6s0dn4 x1qughib xh8yej3",
			"data-testid": "upr_bubble_pay_with_row",
			children: [u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				children: s._(
					/*BTDS*/
					""
				)
			}), u.jsx("div", {
				className: "x78zum5 x1q0g3np xmixu3c",
				children: o
			})]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.amount, n = e.currency, a = o("WAWebFormatUprAmount").formatUprAmount(n, t);
		return u.jsxs("div", {
			className: "x78zum5 x1q0g3np x6s0dn4 x1qughib xh8yej3",
			"data-testid": "upr_bubble_total_row",
			children: [u.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentDefault",
				children: s._(
					/*BTDS*/
					""
				)
			}), u.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentDefault",
				children: a
			})]
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t, n, r, a = e.downloadHeaderMedia, i = e.headerMediaData, l = e.msg, s = e.thumbnailUrl, c = o("WAWebUprPaymentRequest").parseUprPaymentInfo(l);
		if (c == null) return null;
		var d = c.totalAmount != null && c.totalAmount.offset !== 0 ? c.totalAmount.value / c.totalAmount.offset : null, m = d != null && d > 0 ? d : null, f = (t = (n = c.items) == null ? void 0 : n.length) != null ? t : 0, C = f === 1 ? (r = c.items) == null ? void 0 : r[0] : null, R = f > 1 ? c.items : null, L = f > 0, E = L ? [] : p(c.paymentOptions);
		return u.jsx("div", {
			"data-testid": "upr_payment_bubble",
			className: "x78zum5 xdt5ytf x1u2d2a2 xxc7z9f x1198e8h x1lxpwgx xod5an3 xw01apr",
			children: u.jsxs("div", {
				className: "x1bu39yj x1i282gy xx9ypkp xd15eu0 x11ecxm0 x9f619 x78zum5 xdt5ytf x1yrsyyn x12xbjc7 x12w63v0 x1nzty39",
				children: [
					u.jsx(_, {}),
					u.jsx("div", { className: "xh8yej3 x178xt8z xlya59e xx42vgk xav9cv8 xefnzgg" }),
					C != null ? u.jsxs(u.Fragment, { children: [u.jsx(g, {
						downloadMedia: a,
						mediaData: i,
						name: C.name,
						quantity: C.quantity,
						thumbnailUrl: s
					}), u.jsx("div", { className: "xh8yej3 x178xt8z xlya59e xx42vgk x1380le5 xefnzgg" })] }) : null,
					R != null ? u.jsxs(u.Fragment, { children: [u.jsx(h, { items: R }), u.jsx("div", { className: "xh8yej3 x178xt8z xlya59e xx42vgk x1380le5 xefnzgg" })] }) : null,
					E.length === 1 ? u.jsxs(u.Fragment, { children: [u.jsx(y, {
						account: E[0],
						currency: c.currency
					}), u.jsx("div", { className: "xh8yej3 x178xt8z xlya59e xx42vgk x1380le5 xefnzgg" })] }) : null,
					E.length >= 2 ? u.jsxs(u.Fragment, { children: [u.jsx(b, {
						accounts: E,
						currency: c.currency
					}), u.jsx("div", { className: "xh8yej3 x178xt8z xlya59e xx42vgk x1380le5 xefnzgg" })] }) : null,
					u.jsx(v, { paymentOptions: c.paymentOptions }),
					m != null ? u.jsxs(u.Fragment, { children: [u.jsx("div", { className: "xh8yej3 x178xt8z xlya59e xx42vgk x1380le5 xefnzgg" }), u.jsx(S, {
						amount: m,
						currency: c.currency
					})] }) : null
				]
			})
		});
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 226);

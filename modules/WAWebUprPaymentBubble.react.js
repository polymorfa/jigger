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
	"react",
	"react-compiler-runtime"
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
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx("span", {
			className: "x1bvqhpb x190qgfh x1xlr1w8 x1d3mw78 xlxmecl xtvhhri xcahpfu",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[0] = t) : t = e[0], t;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(10), n = e.downloadMedia, a = e.mediaData, i = e.thumbnailUrl, l = i != null && i !== "" ? i : null;
		if (a != null && o("WAWebMediaMsgPreview.react").isMediaTypeWithImage(a.type)) {
			var s;
			t[0] === Symbol.for("react.memo_cache_sentinel") ? (s = { className: "x1useyqa xsdox4t xyi3aci xwf5gio x1p453bz x1suzm8a x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1ekq09l xlmuga0 x54tcbp xlzwp1d x9f619 x18d0r48 xztyhrg xiy17q3 x2lah0s x6ikm8r x10wlt62" }, t[0] = s) : s = t[0];
			var c;
			t[1] !== l ? (c = function() {
				return l != null ? u.jsx("div", {
					className: "xh8yej3 x5yr21d x18d0r48 xztyhrg xiy17q3",
					style: { backgroundImage: "url(" + l + ")" }
				}) : null;
			}, t[1] = l, t[2] = c) : c = t[2];
			var d;
			return t[3] !== n || t[4] !== a || t[5] !== c ? (d = u.jsx("div", babelHelpers.extends({}, s, {
				"data-testid": "upr_bubble_item_thumbnail",
				children: u.jsx(r("WAWebMediaUrlProvider"), {
					downloadMedia: n,
					mediaData: a,
					placeholderRenderer: c,
					renderProgressively: !0,
					children: g
				})
			})), t[3] = n, t[4] = a, t[5] = c, t[6] = d) : d = t[6], d;
		}
		if (l != null) {
			var m;
			t[7] === Symbol.for("react.memo_cache_sentinel") ? (m = "x1useyqa xsdox4t xyi3aci xwf5gio x1p453bz x1suzm8a x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1ekq09l xlmuga0 x54tcbp xlzwp1d x9f619 x18d0r48 xztyhrg xiy17q3 x2lah0s x6ikm8r x10wlt62", t[7] = m) : m = t[7];
			var p = "url(" + l + ")", _;
			return t[8] !== p ? (_ = u.jsx("div", {
				className: m,
				style: { backgroundImage: p },
				"data-testid": "upr_bubble_item_thumbnail"
			}), t[8] = p, t[9] = _) : _ = t[9], _;
		}
		return null;
	}
	function g(e) {
		return u.jsx("div", {
			className: "xh8yej3 x5yr21d x18d0r48 xztyhrg xiy17q3",
			style: { backgroundImage: "url(" + e + ")" }
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = o("react-compiler-runtime").c(16), n = e.downloadMedia, a = e.mediaData, i = e.name, l = e.quantity, c = e.thumbnailUrl, d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (d = { className: "x78zum5 x1q0g3np x6s0dn4 xtqikln" }, t[0] = d) : d = t[0];
		var m;
		t[1] !== n || t[2] !== a || t[3] !== c ? (m = u.jsx(f, {
			mediaData: a,
			downloadMedia: n,
			thumbnailUrl: c
		}), t[1] = n, t[2] = a, t[3] = c, t[4] = m) : m = t[4];
		var p;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (p = { className: "x78zum5 xdt5ytf xeuugli x1iyjqo2" }, t[5] = p) : p = t[5];
		var _;
		t[6] !== i ? (_ = u.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDefault",
			children: i
		}), t[6] = i, t[7] = _) : _ = t[7];
		var g;
		t[8] !== l ? (g = u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				"",
				[s._param("count", l, [0])]
			)
		}), t[8] = l, t[9] = g) : g = t[9];
		var h;
		t[10] !== _ || t[11] !== g ? (h = u.jsxs("div", babelHelpers.extends({}, p, { children: [_, g] })), t[10] = _, t[11] = g, t[12] = h) : h = t[12];
		var y;
		return t[13] !== m || t[14] !== h ? (y = u.jsxs("div", babelHelpers.extends({}, d, {
			"data-testid": "upr_bubble_item_row",
			children: [m, h]
		})), t[13] = m, t[14] = h, t[15] = y) : y = t[15], y;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(11), n = e.items, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x78zum5 x1q0g3np x6s0dn4 xtqikln" }, t[0] = a) : a = t[0];
		var i;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x78zum5 xdt5ytf xeuugli x1iyjqo2" }, t[1] = i) : i = t[1];
		var l;
		t[2] !== n ? (l = o("WAWebOrderDetailProductLabel").getOrderDetailProductLabel(n), t[2] = n, t[3] = l) : l = t[3];
		var c;
		t[4] !== l ? (c = u.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDefault",
			maxLines: 1,
			children: l
		}), t[4] = l, t[5] = c) : c = t[5];
		var d;
		t[6] !== n.length ? (d = u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				"",
				[s._plural(n.length, "count")]
			)
		}), t[6] = n.length, t[7] = d) : d = t[7];
		var m;
		return t[8] !== c || t[9] !== d ? (m = u.jsx("div", babelHelpers.extends({}, a, {
			"data-testid": "upr_bubble_multi_item_row",
			children: u.jsxs("div", babelHelpers.extends({}, i, { children: [c, d] }))
		})), t[8] = c, t[9] = d, t[10] = m) : m = t[10], m;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(25), n = e.account, a = e.currency, i, l;
		if (t[0] !== n.accountType || t[1] !== n.identifierType || t[2] !== n.identifierValue) {
			l = Symbol.for("react.early_return_sentinel");
			e: {
				var s = o("WAWebUprPaymentMethodRenderData").getUprMethodRenderData(n.accountType, n.identifierType);
				if (s == null) {
					l = null;
					break e;
				}
				i = s.formatForDisplay != null ? s.formatForDisplay(n.identifierValue) : n.identifierValue;
			}
			t[0] = n.accountType, t[1] = n.identifierType, t[2] = n.identifierValue, t[3] = i, t[4] = l;
		} else i = t[3], l = t[4];
		if (l !== Symbol.for("react.early_return_sentinel")) return l;
		var c = i, d;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (d = { className: "x78zum5 x1q0g3np x6s0dn4 xtqikln" }, t[5] = d) : d = t[5];
		var m;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x1useyqa xsdox4t x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x9f619 x78zum5 x6s0dn4 xl56j7k x2lah0s" }, t[6] = m) : m = t[6];
		var p;
		t[7] !== a ? (p = b(a), t[7] = a, t[8] = p) : p = t[8];
		var _;
		t[9] !== p ? (_ = u.jsx("span", babelHelpers.extends({}, m, { children: p })), t[9] = p, t[10] = _) : _ = t[10];
		var f;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (f = { className: "x78zum5 xdt5ytf xeuugli x1iyjqo2" }, t[11] = f) : f = t[11];
		var g;
		t[12] !== c ? (g = u.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDefault",
			children: c
		}), t[12] = c, t[13] = g) : g = t[13];
		var h;
		t[14] !== n.institutionName ? (h = u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: n.institutionName
		}), t[14] = n.institutionName, t[15] = h) : h = t[15];
		var y;
		t[16] !== n.beneficiaryName ? (y = n.beneficiaryName !== "" ? u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: n.beneficiaryName
		}) : null, t[16] = n.beneficiaryName, t[17] = y) : y = t[17];
		var C;
		t[18] !== y || t[19] !== g || t[20] !== h ? (C = u.jsxs("div", babelHelpers.extends({}, f, { children: [
			g,
			h,
			y
		] })), t[18] = y, t[19] = g, t[20] = h, t[21] = C) : C = t[21];
		var v;
		return t[22] !== C || t[23] !== _ ? (v = u.jsxs("div", babelHelpers.extends({}, d, {
			"data-testid": "upr_bubble_account_row",
			children: [_, C]
		})), t[22] = C, t[23] = _, t[24] = v) : v = t[24], v;
	}
	function b(e) {
		return e === "AED" ? u.jsx(r("WDSIconWdsIcCurrencyUaeDirhamCircle.react"), {}) : e === "EGP" ? u.jsx(r("WDSIconWdsIcCurrencyEgyptianPoundCircle.react"), {}) : e === "HKD" ? u.jsx(r("WDSIconWdsIcCurrencyHongKongDollarCircle.react"), {}) : e === "IDR" ? u.jsx(r("WDSIconWdsIcCurrencyIndonesianrupiahCircle.react"), {}) : e === "MXN" ? u.jsx(r("WDSIconIcAttachMoney.react"), {}) : e === "TRY" ? u.jsx(r("WDSIconWdsIcCurrencyLiraCircle.react"), {}) : e === "TWD" ? u.jsx(r("WDSIconWdsIcCurrencyNewTaiwanDollarCircle.react"), {}) : u.jsx(r("WDSIconIcPayments.react"), {});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = o("react-compiler-runtime").c(19), n = e.accounts, a = e.currency, i;
		t[0] !== n ? (i = n.map(S).join(", "), t[0] = n, t[1] = i) : i = t[1];
		var l = i, c;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (c = { className: "x78zum5 x1q0g3np x6s0dn4 xtqikln" }, t[2] = c) : c = t[2];
		var d;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (d = { className: "x1useyqa xsdox4t x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x9f619 x78zum5 x6s0dn4 xl56j7k x2lah0s" }, t[3] = d) : d = t[3];
		var m;
		t[4] !== a ? (m = b(a), t[4] = a, t[5] = m) : m = t[5];
		var p;
		t[6] !== m ? (p = u.jsx("span", babelHelpers.extends({}, d, { children: m })), t[6] = m, t[7] = p) : p = t[7];
		var _;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "x78zum5 xdt5ytf xeuugli x1iyjqo2" }, t[8] = _) : _ = t[8];
		var f;
		t[9] !== n.length ? (f = u.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				"",
				[s._param("count", n.length, [0])]
			)
		}), t[9] = n.length, t[10] = f) : f = t[10];
		var g;
		t[11] !== l ? (g = u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: l
		}), t[11] = l, t[12] = g) : g = t[12];
		var h;
		t[13] !== f || t[14] !== g ? (h = u.jsxs("div", babelHelpers.extends({}, _, { children: [f, g] })), t[13] = f, t[14] = g, t[15] = h) : h = t[15];
		var y;
		return t[16] !== p || t[17] !== h ? (y = u.jsxs("div", babelHelpers.extends({}, c, {
			"data-testid": "upr_bubble_accounts_summary_row",
			children: [p, h]
		})), t[16] = p, t[17] = h, t[18] = y) : y = t[18], y;
	}
	function S(e) {
		return e.institutionName;
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(7), n = e.paymentOptions, a;
		if (t[0] !== n) {
			var i = new Set();
			a = [];
			for (var l = 0; l < n.length; l++) {
				var c = n[l], m = c.kind === "payment_account" ? "account/" + c.accountType : "link";
				i.has(m) || (i.add(m), a.push(d(c, m)));
			}
			t[0] = n, t[1] = a;
		} else a = t[1];
		var p;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (p = { className: "x78zum5 x1q0g3np x6s0dn4 x1qughib xh8yej3" }, t[2] = p) : p = t[2];
		var _, f;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}), f = { className: "x78zum5 x1q0g3np xmixu3c" }, t[3] = _, t[4] = f) : (_ = t[3], f = t[4]);
		var g;
		return t[5] !== a ? (g = u.jsxs("div", babelHelpers.extends({}, p, {
			"data-testid": "upr_bubble_pay_with_row",
			children: [_, u.jsx("div", babelHelpers.extends({}, f, { children: a }))]
		})), t[5] = a, t[6] = g) : g = t[6], g;
	}
	function L(e) {
		var t = o("react-compiler-runtime").c(7), n = e.amount, a = e.currency, i;
		t[0] !== n || t[1] !== a ? (i = o("WAWebFormatUprAmount").formatUprAmount(a, n), t[0] = n, t[1] = a, t[2] = i) : i = t[2];
		var l = i, c;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (c = { className: "x78zum5 x1q0g3np x6s0dn4 x1qughib xh8yej3" }, t[3] = c) : c = t[3];
		var d;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (d = u.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[4] = d) : d = t[4];
		var m;
		return t[5] !== l ? (m = u.jsxs("div", babelHelpers.extends({}, c, {
			"data-testid": "upr_bubble_total_row",
			children: [d, u.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentDefault",
				children: l
			})]
		})), t[5] = l, t[6] = m) : m = t[6], m;
	}
	function E(e) {
		var t = o("react-compiler-runtime").c(37), n = e.downloadHeaderMedia, r = e.headerMediaData, a = e.msg, i = e.thumbnailUrl, l, s, c, d, m, f;
		if (t[0] !== a) {
			f = Symbol.for("react.early_return_sentinel");
			e: {
				var g, b, S;
				if (s = o("WAWebUprPaymentRequest").parseUprPaymentInfo(a), s == null) {
					f = null;
					break e;
				}
				var E = s.totalAmount != null && s.totalAmount.offset !== 0 ? s.totalAmount.value / s.totalAmount.offset : null;
				l = E != null && E > 0 ? E : null;
				var k = (g = (b = s.items) == null ? void 0 : b.length) != null ? g : 0;
				d = k === 1 ? (S = s.items) == null ? void 0 : S[0] : null, c = k > 1 ? s.items : null;
				var I = k > 0;
				m = I ? [] : p(s.paymentOptions);
			}
			t[0] = a, t[1] = l, t[2] = s, t[3] = c, t[4] = d, t[5] = m, t[6] = f;
		} else l = t[1], s = t[2], c = t[3], d = t[4], m = t[5], f = t[6];
		if (f !== Symbol.for("react.early_return_sentinel")) return f;
		var T = m, D, x, $, P;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (D = { className: "x78zum5 xdt5ytf x1u2d2a2 xxc7z9f x1198e8h x1lxpwgx xod5an3 xw01apr" }, x = { className: "x1bu39yj x1i282gy xx9ypkp xd15eu0 x11ecxm0 x9f619 x78zum5 xdt5ytf x1yrsyyn x12xbjc7 x12w63v0 x1nzty39" }, $ = u.jsx(_, {}), P = u.jsx("div", { className: "xh8yej3 x178xt8z xlya59e xx42vgk xav9cv8 xefnzgg" }), t[7] = D, t[8] = x, t[9] = $, t[10] = P) : (D = t[7], x = t[8], $ = t[9], P = t[10]);
		var N;
		t[11] !== n || t[12] !== r || t[13] !== d || t[14] !== i ? (N = d != null ? u.jsxs(u.Fragment, { children: [u.jsx(h, {
			downloadMedia: n,
			mediaData: r,
			name: d.name,
			quantity: d.quantity,
			thumbnailUrl: i
		}), u.jsx("div", { className: "xh8yej3 x178xt8z xlya59e xx42vgk x1380le5 xefnzgg" })] }) : null, t[11] = n, t[12] = r, t[13] = d, t[14] = i, t[15] = N) : N = t[15];
		var M;
		t[16] !== c ? (M = c != null ? u.jsxs(u.Fragment, { children: [u.jsx(y, { items: c }), u.jsx("div", { className: "xh8yej3 x178xt8z xlya59e xx42vgk x1380le5 xefnzgg" })] }) : null, t[16] = c, t[17] = M) : M = t[17];
		var w;
		t[18] !== T[0] || t[19] !== T.length || t[20] !== s.currency ? (w = T.length === 1 ? u.jsxs(u.Fragment, { children: [u.jsx(C, {
			account: T[0],
			currency: s.currency
		}), u.jsx("div", { className: "xh8yej3 x178xt8z xlya59e xx42vgk x1380le5 xefnzgg" })] }) : null, t[18] = T[0], t[19] = T.length, t[20] = s.currency, t[21] = w) : w = t[21];
		var A;
		t[22] !== T || t[23] !== s.currency ? (A = T.length >= 2 ? u.jsxs(u.Fragment, { children: [u.jsx(v, {
			accounts: T,
			currency: s.currency
		}), u.jsx("div", { className: "xh8yej3 x178xt8z xlya59e xx42vgk x1380le5 xefnzgg" })] }) : null, t[22] = T, t[23] = s.currency, t[24] = A) : A = t[24];
		var F;
		t[25] !== s.paymentOptions ? (F = u.jsx(R, { paymentOptions: s.paymentOptions }), t[25] = s.paymentOptions, t[26] = F) : F = t[26];
		var O;
		t[27] !== l || t[28] !== s.currency ? (O = l != null ? u.jsxs(u.Fragment, { children: [u.jsx("div", { className: "xh8yej3 x178xt8z xlya59e xx42vgk x1380le5 xefnzgg" }), u.jsx(L, {
			amount: l,
			currency: s.currency
		})] }) : null, t[27] = l, t[28] = s.currency, t[29] = O) : O = t[29];
		var B;
		return t[30] !== A || t[31] !== F || t[32] !== O || t[33] !== N || t[34] !== M || t[35] !== w ? (B = u.jsx("div", babelHelpers.extends({ "data-testid": "upr_payment_bubble" }, D, { children: u.jsxs("div", babelHelpers.extends({}, x, { children: [
			$,
			P,
			N,
			M,
			w,
			A,
			F,
			O
		] })) })), t[30] = A, t[31] = F, t[32] = O, t[33] = N, t[34] = M, t[35] = w, t[36] = B) : B = t[36], B;
	}
	l.default = E;
}), 226);

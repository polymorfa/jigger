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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(34), n = e.opt, a, i, l, s, p, _, f, g;
		if (t[0] !== n.accountType || t[1] !== n.beneficiaryName || t[2] !== n.identifierType || t[3] !== n.identifierValue || t[4] !== n.institutionName) {
			g = Symbol.for("react.early_return_sentinel");
			e: {
				var h = o("WAWebUprPaymentMethodRenderData").getUprMethodRenderData(n.accountType, n.identifierType);
				if (h == null) {
					g = null;
					break e;
				}
				var y = h.formatForDisplay ? h.formatForDisplay(n.identifierValue) : n.identifierValue;
				i = function() {
					o("WAWebCopyTextWithToast").copyTextWithToast({
						failureMsg: d(),
						successMsg: h.copySuccessToast(),
						text: n.identifierValue
					});
				}, t[13] === Symbol.for("react.memo_cache_sentinel") ? (s = { className: "x78zum5 x1q0g3np x6s0dn4 xz9dl7a xsag5q8 xf7dkkf xv54qhq xso031l x1q0q8m5 x120ee7l xtqikln" }, t[13] = s) : s = t[13], p = "upr_drawer_payment_account_row";
				var C;
				t[14] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "x2lah0s" }, t[14] = C) : C = t[14];
				var b;
				t[15] !== n.accountType ? (b = m(n.accountType), t[15] = n.accountType, t[16] = b) : b = t[16], t[17] !== b ? (_ = u.jsx("span", babelHelpers.extends({}, C, { children: b })), t[17] = b, t[18] = _) : _ = t[18];
				var v;
				t[19] === Symbol.for("react.memo_cache_sentinel") ? (v = { className: "x78zum5 xdt5ytf x1iyjqo2 xeuugli" }, t[19] = v) : v = t[19];
				var S;
				t[20] !== n.institutionName ? (S = u.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDeemphasized",
					children: n.institutionName
				}), t[20] = n.institutionName, t[21] = S) : S = t[21];
				var R;
				t[22] !== n.beneficiaryName ? (R = n.beneficiaryName !== "" ? u.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDeemphasized",
					children: n.beneficiaryName
				}) : null, t[22] = n.beneficiaryName, t[23] = R) : R = t[23], f = u.jsxs("div", babelHelpers.extends({}, v, { children: [
					u.jsx(r("WDSText.react"), {
						type: "Body2Emphasized",
						colorName: "contentDefault",
						children: y
					}),
					S,
					R
				] })), a = r("WDSButton.react"), l = h.copyLabel();
			}
			t[0] = n.accountType, t[1] = n.beneficiaryName, t[2] = n.identifierType, t[3] = n.identifierValue, t[4] = n.institutionName, t[5] = a, t[6] = i, t[7] = l, t[8] = s, t[9] = p, t[10] = _, t[11] = f, t[12] = g;
		} else a = t[5], i = t[6], l = t[7], s = t[8], p = t[9], _ = t[10], f = t[11], g = t[12];
		if (g !== Symbol.for("react.early_return_sentinel")) return g;
		var L;
		t[24] !== a || t[25] !== i || t[26] !== l ? (L = u.jsx(a, {
			"aria-label": l,
			Icon: r("WDSIconIcContentCopy.react"),
			onPress: i,
			testid: "upr_drawer_copy_button",
			variant: "borderless",
			xstyle: c.rowAction
		}), t[24] = a, t[25] = i, t[26] = l, t[27] = L) : L = t[27];
		var E;
		return t[28] !== s || t[29] !== p || t[30] !== _ || t[31] !== f || t[32] !== L ? (E = u.jsxs("div", babelHelpers.extends({}, s, {
			"data-testid": p,
			children: [
				_,
				f,
				L
			]
		})), t[28] = s, t[29] = p, t[30] = _, t[31] = f, t[32] = L, t[33] = E) : E = t[33], E;
	}
	function _(e) {
		try {
			return new URL(e).hostname;
		} catch (t) {
			return e;
		}
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(16), n = e.opt, a;
		t[0] !== n.uri ? (a = function() {
			o("WAWebExternalLink.react").openExternalLink(n.uri);
		}, t[0] = n.uri, t[1] = a) : a = t[1];
		var i = a, l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "x78zum5 x1q0g3np x6s0dn4 xz9dl7a xsag5q8 xf7dkkf xv54qhq xso031l x1q0q8m5 x120ee7l xtqikln" }, t[2] = l) : l = t[2];
		var c, d;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (c = u.jsx("span", {
			className: "x2lah0s",
			children: u.jsx(r("WDSIconIcLink.react"), {})
		}), d = { className: "x78zum5 xdt5ytf x1iyjqo2 xeuugli" }, t[3] = c, t[4] = d) : (c = t[3], d = t[4]);
		var m;
		t[5] !== n.uri ? (m = _(n.uri), t[5] = n.uri, t[6] = m) : m = t[6];
		var p;
		t[7] !== m ? (p = u.jsx("div", babelHelpers.extends({}, d, { children: u.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDefault",
			children: m
		}) })), t[7] = m, t[8] = p) : p = t[8];
		var f;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (f = { className: "x2lah0s" }, t[9] = f) : f = t[9];
		var g;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), t[10] = g) : g = t[10];
		var h;
		t[11] !== i ? (h = u.jsx("button", babelHelpers.extends({
			type: "button",
			onClick: i
		}, f, {
			"data-testid": "upr_drawer_open_link_button",
			children: g
		})), t[11] = i, t[12] = h) : h = t[12];
		var y;
		return t[13] !== p || t[14] !== h ? (y = u.jsxs("div", babelHelpers.extends({}, l, {
			"data-testid": "upr_drawer_payment_link_row",
			children: [
				c,
				p,
				h
			]
		})), t[13] = p, t[14] = h, t[15] = y) : y = t[15], y;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(6), n = e.children, a = e.testid, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "xz9dl7a xsag5q8 xf7dkkf xv54qhq xkh2ocl" }, t[0] = i) : i = t[0];
		var l;
		t[1] !== n ? (l = u.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDeemphasized",
			children: n
		}), t[1] = n, t[2] = l) : l = t[2];
		var s;
		return t[3] !== l || t[4] !== a ? (s = u.jsx("div", babelHelpers.extends({}, i, {
			"data-testid": a,
			children: l
		})), t[3] = l, t[4] = a, t[5] = s) : s = t[5], s;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(28), n = e.info, a = e.onClose, i, l, c, d, m;
		if (t[0] !== n.paymentOptions) {
			i = [], l = [], d = [], m = [], c = [];
			for (var p of n.paymentOptions) p.kind === "payment_link" ? c.push(p) : p.accountType === "bank_account" ? i.push(p) : p.accountType === "digital_wallet" ? l.push(p) : p.accountType === "mobile_money" ? d.push(p) : m.push(p);
			t[0] = n.paymentOptions, t[1] = i, t[2] = l, t[3] = c, t[4] = d, t[5] = m;
		} else i = t[1], l = t[2], c = t[3], d = t[4], m = t[5];
		var _;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[6] = _) : _ = t[6];
		var f;
		t[7] !== a ? (f = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			title: _,
			onCancel: a,
			testid: "upr_payment_options_drawer_header"
		}), t[7] = a, t[8] = f) : f = t[8];
		var h;
		t[9] !== i ? (h = i.length > 0 ? u.jsxs(r("WAWebDrawerSection.react"), {
			testid: "upr_drawer_bank_transfer_section",
			children: [u.jsx(g, {
				testid: "upr_drawer_bank_transfer_header",
				children: s._(
					/*BTDS*/
					""
				)
			}), i.map(S)]
		}) : null, t[9] = i, t[10] = h) : h = t[10];
		var R;
		t[11] !== l ? (R = l.length > 0 ? u.jsxs(r("WAWebDrawerSection.react"), {
			testid: "upr_drawer_digital_wallet_section",
			children: [u.jsx(g, {
				testid: "upr_drawer_digital_wallet_header",
				children: s._(
					/*BTDS*/
					""
				)
			}), l.map(v)]
		}) : null, t[11] = l, t[12] = R) : R = t[12];
		var L;
		t[13] !== d ? (L = d.length > 0 ? u.jsxs(r("WAWebDrawerSection.react"), {
			testid: "upr_drawer_mobile_money_section",
			children: [u.jsx(g, {
				testid: "upr_drawer_mobile_money_header",
				children: s._(
					/*BTDS*/
					""
				)
			}), d.map(b)]
		}) : null, t[13] = d, t[14] = L) : L = t[14];
		var E;
		t[15] !== m ? (E = m.length > 0 ? u.jsx(r("WAWebDrawerSection.react"), {
			testid: "upr_drawer_other_account_section",
			children: m.map(C)
		}) : null, t[15] = m, t[16] = E) : E = t[16];
		var k;
		t[17] !== c ? (k = c.length > 0 ? u.jsxs(r("WAWebDrawerSection.react"), {
			testid: "upr_drawer_payment_link_section",
			children: [u.jsx(g, {
				testid: "upr_drawer_payment_link_header",
				children: s._(
					/*BTDS*/
					""
				)
			}), c.map(y)]
		}) : null, t[17] = c, t[18] = k) : k = t[18];
		var I;
		t[19] !== h || t[20] !== R || t[21] !== L || t[22] !== E || t[23] !== k ? (I = u.jsxs(r("WAWebDrawerBody.react"), { children: [
			h,
			R,
			L,
			E,
			k
		] }), t[19] = h, t[20] = R, t[21] = L, t[22] = E, t[23] = k, t[24] = I) : I = t[24];
		var T;
		return t[25] !== f || t[26] !== I ? (T = u.jsxs(r("WAWebDrawer.react"), { children: [f, I] }), t[25] = f, t[26] = I, t[27] = T) : T = t[27], T;
	}
	function y(e, t) {
		return u.jsx(f, { opt: e }, "link-" + t);
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e, t) {
		return u.jsx(p, { opt: e }, "other-" + t);
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e, t) {
		return u.jsx(p, { opt: e }, "mobile-money-" + t);
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e, t) {
		return u.jsx(p, { opt: e }, "wallet-" + t);
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e, t) {
		return u.jsx(p, { opt: e }, "bank-" + t);
	}
	S.displayName = S.name + " [from " + i.id + "]", l.default = h;
}), 226);

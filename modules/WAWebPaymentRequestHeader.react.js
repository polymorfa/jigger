__d("WAWebPaymentRequestHeader.react", [
	"fbt",
	"WAWebBrPaymentRequest",
	"WAWebMastercardLogoIcon.react",
	"WAWebPaymentBoletoLogoIcon.react",
	"WAWebPaymentLogoPixIcon.react",
	"WAWebPaymentPayWithRow.react",
	"WAWebPaymentVisaLogoIcon.react",
	"WAWebThemeContext",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		payWithRow: {
			alignItems: "x6s0dn4",
			backgroundColor: "x1bu39yj",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			paddingBottom: "x12xbjc7",
			$$css: !0
		},
		paywithIcon: {
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderStartStartRadius: "xbrszos",
			borderStartEndRadius: "xea3l6g",
			borderEndEndRadius: "x18isctg",
			borderEndStartRadius: "x2q3nzr",
			verticalAlign: "xxymvpz",
			width: "x1xp8n7a",
			height: "xlup9mm",
			$$css: !0
		},
		iconDarkBackground: {
			backgroundColor: "xb1i3fl",
			$$css: !0
		},
		marginStart4: {
			marginInlineStart: "x1wbi8v6",
			$$css: !0
		},
		paddingAll4: {
			paddingTop: "x1tiyuxx",
			paddingInlineEnd: "x1uc92m",
			paddingBottom: "x1nbhmlj",
			paddingInlineStart: "x181vq82",
			$$css: !0
		},
		payWithLabel: {
			paddingInlineStart: "x12w63v0",
			$$css: !0
		},
		payWithIcons: {
			paddingInlineEnd: "x1nzty39",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(9), n = e.msg, a, i;
		if (t[0] !== n) {
			i = Symbol.for("react.early_return_sentinel");
			e: {
				var l = o("WAWebBrPaymentRequest").getPaymentRequestInfo(n);
				if (l == null) {
					i = null;
					break e;
				}
				var d = l.filter(m);
				if (d.length === 0) {
					i = null;
					break e;
				}
				var p;
				t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = o("WAWebThemeContext").isDarkTheme(), t[3] = p) : p = t[3];
				var _ = p, f;
				t[4] === Symbol.for("react.memo_cache_sentinel") ? (f = [
					c.paywithIcon,
					c.paddingAll4,
					c.marginStart4,
					_ && c.iconDarkBackground
				], t[4] = f) : f = t[4];
				var g = f, h;
				t[5] === Symbol.for("react.memo_cache_sentinel") ? (h = function(t) {
					return t.paymentType === o("WAWebBrPaymentRequest").PaymentRequestCtaType.BOLETO ? u.jsx(o("WAWebPaymentBoletoLogoIcon.react").PaymentBoletoLogoIcon, { iconXstyle: g }) : t.paymentType === o("WAWebBrPaymentRequest").PaymentRequestCtaType.PIX_DYNAMIC_CODE ? u.jsx(o("WAWebPaymentLogoPixIcon.react").PaymentLogoPixIcon, { iconXstyle: g }) : t.paymentType === o("WAWebBrPaymentRequest").PaymentRequestCtaType.PAYMENT_LINK ? u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebPaymentVisaLogoIcon.react").PaymentVisaLogoIcon, { iconXstyle: g }), u.jsx(o("WAWebMastercardLogoIcon.react").MastercardLogoIcon, { iconXstyle: g })] }) : t.paymentType === o("WAWebBrPaymentRequest").PaymentRequestCtaType.OFFSITE_CARD_PAY ? null : (function() {
						throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t.paymentType);
					})();
				}, t[5] = h) : h = t[5], a = d.map(h);
			}
			t[0] = n, t[1] = a, t[2] = i;
		} else a = t[1], i = t[2];
		if (i !== Symbol.for("react.early_return_sentinel")) return i;
		var y = a, C;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), t[6] = C) : C = t[6];
		var b;
		return t[7] !== y ? (b = u.jsx(r("WAWebPaymentPayWithRow.react"), {
			childrenXstyle: c.payWithIcons,
			label: C,
			labelXstyle: c.payWithLabel,
			testid: "payment-request-pay-with-row",
			xstyle: c.payWithRow,
			children: y
		}), t[7] = y, t[8] = b) : b = t[8], b;
	}
	function m(e) {
		return e.paymentType !== o("WAWebBrPaymentRequest").PaymentRequestCtaType.OFFSITE_CARD_PAY;
	}
	l.default = d;
}), 226);

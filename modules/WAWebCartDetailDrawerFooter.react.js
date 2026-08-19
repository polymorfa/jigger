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
	"react",
	"react-compiler-runtime"
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
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s._(
			/*BTDS*/
			""
		), e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsxs(u.Fragment, { children: [
			t,
			" ",
			u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebFaqUrl").getJioMartPostcodeChangeLearnMoreLink(),
				children: s._(
					/*BTDS*/
					""
				)
			})
		] }), e[1] = n) : n = e[1], n;
	}
	function p() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s._(
			/*BTDS*/
			""
		), e[0] = t) : t = e[0], t;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(4), n = e.isDirectConnection, r;
		t[0] !== n ? (r = n && o("WAWebDirectConnectionGatingUtils").supportsDirectConnection() && o("WAWebABProps").getABPropConfigValue("share_phone_number_on_cart_send_to_direct_connection_biz_enabled"), t[0] = n, t[1] = r) : r = t[1];
		var a = r, i;
		return t[2] !== a ? (i = a ? u.jsx(m, {}) : u.jsx(p, {}), t[2] = a, t[3] = i) : i = t[3], i;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(5), n = e.currency, r = e.savings, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [o("WDSMargins.stylex").wdsMargins.marginBottom8, d.footerPrice], t[0] = a) : a = t[0];
		var i;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(o("WAWebText.react").WAWebTextTitle, {
			as: "span",
			color: "secondary",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[1] = i) : i = t[1];
		var l;
		return t[2] !== n || t[3] !== r ? (l = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "baseline",
			justify: "all",
			xstyle: a,
			children: [i, u.jsx(o("WAWebText.react").WAWebTextTitle, {
				as: "span",
				color: "teal",
				children: s._(
					/*BTDS*/
					"",
					[s._param("cart-savings", o("WAWebCurrencyUtils").formatAmount1000(n, r))]
				)
			})]
		}), t[2] = n, t[3] = r, t[4] = l) : l = t[4], l;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(11), n = e.currency, r = e.savings, a = e.total, i;
		t[0] !== n || t[1] !== r ? (i = r > 0 ? u.jsx(f, {
			currency: n,
			savings: r
		}) : null, t[0] = n, t[1] = r, t[2] = i) : i = t[2];
		var l;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = [o("WDSMargins.stylex").wdsMargins.marginBottom8, d.footerPrice], t[3] = l) : l = t[3];
		var c;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (c = u.jsx(o("WAWebText.react").WAWebTextTitle, {
			as: "span",
			weight: "medium",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[4] = c) : c = t[4];
		var m;
		t[5] !== n || t[6] !== a ? (m = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "baseline",
			justify: "all",
			xstyle: l,
			children: [c, u.jsx(o("WAWebText.react").WAWebTextTitle, {
				as: "span",
				children: s._(
					/*BTDS*/
					"",
					[s._param("cart-total-price", o("WAWebCurrencyUtils").formatAmount1000(n, a))]
				)
			})]
		}), t[5] = n, t[6] = a, t[7] = m) : m = t[7];
		var p;
		return t[8] !== i || t[9] !== m ? (p = u.jsxs(u.Fragment, { children: [i, m] }), t[8] = i, t[9] = m, t[10] = p) : p = t[10], p;
	}
	function h() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx(o("WAWebText.react").WAWebTextTitle, {
			as: "span",
			weight: "medium",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[0] = t) : t = e[0], t;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(5), n = e.currency, r = e.savings, a = e.total;
		if (a != null && n != null) {
			var i;
			return t[0] !== n || t[1] !== r || t[2] !== a ? (i = u.jsx(g, {
				currency: n,
				savings: r,
				total: a
			}), t[0] = n, t[1] = r, t[2] = a, t[3] = i) : i = t[3], i;
		}
		var l;
		return t[4] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(h, {}), t[4] = l) : l = t[4], l;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(14), n = e.cart, a = e.isDirectConnection, i = e.onSend, l = e.savings, m;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = [d.footerBorder, o("WDSPaddings.stylex").wdsPaddings.padding16], t[0] = m) : m = t[0];
		var p;
		t[1] !== n.currency || t[2] !== n.total || t[3] !== l ? (p = u.jsx(y, {
			total: n.total,
			currency: n.currency,
			savings: l
		}), t[1] = n.currency, t[2] = n.total, t[3] = l, t[4] = p) : p = t[4];
		var f;
		t[5] !== a ? (f = u.jsx(o("WAWebText.react").WAWebTextMuted, {
			color: "secondaryLighter",
			xstyle: c.marginBottom15,
			children: u.jsx(_, { isDirectConnection: a })
		}), t[5] = a, t[6] = f) : f = t[6];
		var g;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (g = o("WAWebOrderGatingUtils").isBuyerOrderRequestVariantEnabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[7] = g) : g = t[7];
		var h;
		t[8] !== i ? (h = u.jsx(r("WAWebVelocityTransitionGroup"), {
			appear: !0,
			transitionName: "btn",
			children: u.jsx(o("WAWebButton.react").Button, {
				testid: "cart-send-button",
				type: "primary",
				onClick: i,
				children: g
			})
		}), t[8] = i, t[9] = h) : h = t[9];
		var C;
		return t[10] !== p || t[11] !== f || t[12] !== h ? (C = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: m,
			children: [
				p,
				f,
				h
			]
		}), t[10] = p, t[11] = f, t[12] = h, t[13] = C) : C = t[13], C;
	}
	l.default = C;
}), 226);

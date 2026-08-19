__d("WAFlowsPrice.react", [
	"WAFlowsEnvContext.react",
	"WAFlowsLabel.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.memo, m = c.useMemo, p = {
		itemPrice: {
			marginTop: "xdj266r",
			marginBottom: "xat24cr",
			$$css: !0
		},
		contentInline: {
			display: "x78zum5",
			justifyContent: "x1nhvcw1",
			alignItems: "x6s0dn4",
			columnGap: "x4prdry",
			$$css: !0
		},
		itemPriceDisabledColor: {
			color: "x18cpw0e",
			$$css: !0
		},
		itemPriceSecondaryColor: {
			color: "xhslqc4",
			$$css: !0
		},
		itemPriceSmall: {
			fontSize: "x1dbuin5",
			$$css: !0
		}
	};
	function _(e) {
		var t = e.currency, n = e.disabled, r = e.isStacked, a = r === void 0 ? !1 : r, i = e.itemPriceXstyle, l = e.price, s = e.showDiscountStrikethrough, c = e.textType, d = o("WAFlowsEnvContext.react").useWAFlowsEnv(), _ = d.env, f = m(function() {
			var e, n = new Intl.NumberFormat((e = _.locale) != null ? e : "en-US", {
				style: "currency",
				currency: t
			});
			return n.format(l);
		}, [
			l,
			t,
			_.locale
		]), g = [
			p.itemPrice,
			n ? p.itemPriceDisabledColor : i,
			!n && a ? p.itemPriceSecondaryColor : null
		].filter(Boolean), h = {
			text: f,
			strikethrough: s,
			fontWeight: "regular",
			textAlign: a ? _.isRTL ? "start" : "end" : void 0
		};
		return c === "body" && !a ? u.jsx(o("WAFlowsLabel.react").WAFlowsLabel, babelHelpers.extends({}, h, { xstyle: g })) : u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, babelHelpers.extends({}, h, { xstyle: [].concat(g, [p.itemPriceSmall]) }));
	}
	_.displayName = _.name + " [from " + i.id + "]";
	var f = d(function(n) {
		var t = n.currency, o = n.disabled, a = o === void 0 ? !1 : o, i = n.itemPriceXstyle, l = n.layout, s = l === void 0 ? "inline" : l, c = n.price, d = n.salePrice, m = d === void 0 ? 0 : d, f = n.showDiscountStrikethrough, g = f === void 0 ? !0 : f, h = n.textType, y = h === void 0 ? "body" : h, C = n.xstyle, b = m != null && m > 0, v = s === "stacked", S = b ? u.jsx(_, {
			price: m,
			currency: t,
			showDiscountStrikethrough: !1,
			textType: y,
			disabled: a,
			itemPriceXstyle: i
		}) : null, R = u.jsx(_, {
			price: c,
			currency: t,
			showDiscountStrikethrough: b,
			textType: y,
			disabled: a,
			itemPriceXstyle: i,
			isStacked: v && b
		});
		return u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(v ? C : [p.contentInline, C]), { children: [S, !(b && !g) && R] }));
	}), g = f;
	l.default = g;
}), 98);

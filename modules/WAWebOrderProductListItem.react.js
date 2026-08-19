__d("WAWebOrderProductListItem.react", [
	"fbt",
	"WAWebCellFrame.react",
	"WAWebCurrencyUtils",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebOrderItemGetters",
	"WAWebProductCatalogProductThumb.react",
	"WAWebText_DONOTUSE.react",
	"WDSMargins.stylex",
	"isNonZeroNumber",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { marginInlineEnd6: {
		marginInlineEnd: "xbelrpt",
		$$css: !0
	} };
	function m(t) {
		var n = o("react-compiler-runtime").c(37), a = t.onClick, i = t.product, l;
		n[0] !== i.name ? (l = c.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: i.name,
			ellipsify: !0,
			titlify: !0
		}), n[0] = i.name, n[1] = l) : l = n[1];
		var u = l, m;
		n[2] !== i ? (m = o("WAWebOrderItemGetters").getMediaData(i), n[2] = i, n[3] = m) : m = n[3];
		var _;
		n[4] !== m ? (_ = c.jsx(o("WAWebProductCatalogProductThumb.react").ProductThumb, {
			mediaData: m,
			theme: "list"
		}), n[4] = m, n[5] = _) : _ = n[5];
		var f = _, g;
		n[6] !== i.quantity ? (g = s._(
			/*BTDS*/
			"",
			[s._param("item-quantity", i.quantity)]
		), n[6] = i.quantity, n[7] = g) : g = n[7];
		var h = g, y = null;
		if (i.quantity) {
			var C;
			n[8] === Symbol.for("react.memo_cache_sentinel") ? (C = (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginVer0, o("WDSMargins.stylex").wdsMargins.marginStart0, d.marginInlineEnd6), n[8] = C) : C = n[8];
			var b;
			n[9] !== h ? (b = c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
				className: C,
				children: h
			}), n[9] = h, n[10] = b) : b = n[10], y = b;
		}
		var v = null;
		if (o("isNonZeroNumber").isNonZeroNumber(i.price)) {
			var S;
			n[11] === Symbol.for("react.memo_cache_sentinel") ? (S = (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginVer0, o("WDSMargins.stylex").wdsMargins.marginStart0, d.marginInlineEnd6), n[11] = S) : S = n[11];
			var R;
			n[12] !== i.currency || n[13] !== i.price ? (R = o("WAWebCurrencyUtils").formatAmount1000(i.currency, i.price), n[12] = i.currency, n[13] = i.price, n[14] = R) : R = n[14];
			var L;
			n[15] !== R ? (L = c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
				className: S,
				children: R
			}), n[15] = R, n[16] = L) : L = n[16], v = L;
		}
		var E = null;
		if (v != null) {
			var k;
			n[17] === Symbol.for("react.memo_cache_sentinel") ? (k = c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginVer0, o("WDSMargins.stylex").wdsMargins.marginStart0, d.marginInlineEnd6), { children: "•" })), n[17] = k) : k = n[17], E = k;
		}
		var I;
		if (n[18] !== i.properties) {
			var T, D;
			I = (T = (D = i.properties) == null ? void 0 : D.map(p)) != null ? T : [], n[18] = i.properties, n[19] = I;
		} else I = n[19];
		var x = I, $;
		n[20] !== v || n[21] !== y || n[22] !== E ? ($ = c.jsxs(o("WAWebFlex.react").FlexRow, { children: [
			v,
			E,
			y
		] }), n[20] = v, n[21] = y, n[22] = E, n[23] = $) : $ = n[23];
		var P;
		n[24] !== x ? (P = x.length > 0 && c.jsx(o("WAWebFlex.react").FlexColumn, { children: x }), n[24] = x, n[25] = P) : P = n[25];
		var N;
		n[26] !== $ || n[27] !== P ? (N = c.jsxs(o("WAWebFlex.react").FlexColumn, { children: [$, P] }), n[26] = $, n[27] = P, n[28] = N) : N = n[28];
		var M = N, w;
		n[29] !== i.id ? (w = i.id.toString(), n[29] = i.id, n[30] = w) : w = n[30];
		var A;
		return n[31] !== a || n[32] !== M || n[33] !== u || n[34] !== f || n[35] !== w ? (A = c.jsx(r("WAWebCellFrame.react"), {
			image: f,
			customImage: !0,
			primary: u,
			secondary: M,
			theme: "order-product",
			onClick: a
		}, w), n[31] = a, n[32] = M, n[33] = u, n[34] = f, n[35] = w, n[36] = A) : A = n[36], A;
	}
	function p(e) {
		var t = e[0], n = e[1];
		return c.jsx(o("WAWebFlex.react").FlexRow, { children: c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, { children: s._(
			/*BTDS*/
			"",
			[s._param("propertyName", t), s._param("propertyValue", n)]
		) }) }, t + "-" + n);
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = m;
}), 226);

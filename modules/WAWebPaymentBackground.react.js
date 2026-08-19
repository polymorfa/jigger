__d("WAWebPaymentBackground.react", [
	"WAWebPaymentBackground.stylex",
	"WAWebPaymentImageAssets.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var n, a = o("react-compiler-runtime").c(20), i;
		a[0] !== t.isQuoted || a[1] !== t.isQuotedInComposeBox || a[2] !== t.thumbXstyle ? (i = (e || (e = r("stylex"))).props(o("WAWebPaymentBackground.stylex").styles.thumb, o("WAWebPaymentBackground.stylex").styles.backgroundContainer, t.isQuoted !== !0 && o("WAWebPaymentImageAssets.stylex").paymentImageAssetStyles.background, t.isQuoted === !0 && o("WAWebPaymentBackground.stylex").styles.thumbQuoted, t.isQuotedInComposeBox === !0 && o("WAWebPaymentBackground.stylex").styles.thumbQuotedInComposeBox, t.thumbXstyle), a[0] = t.isQuoted, a[1] = t.isQuotedInComposeBox, a[2] = t.thumbXstyle, a[3] = i) : i = a[3];
		var l = i, s;
		a[4] !== t.isQuoted || a[5] !== t.isQuotedInComposeBox ? (s = (e || (e = r("stylex"))).props(o("WAWebPaymentBackground.stylex").styles.container, t.isQuoted === !0 && o("WAWebPaymentBackground.stylex").styles.isQuoted, t.isQuotedInComposeBox === !0 && o("WAWebPaymentBackground.stylex").styles.isQuotedInComposeBox), a[4] = t.isQuoted, a[5] = t.isQuotedInComposeBox, a[6] = s) : s = a[6];
		var c = l.style, d = t.isQuoted !== !0 ? "bg-payments" : "", m = (n = l.className) != null ? n : "", p;
		a[7] !== d || a[8] !== m ? (p = [d, m].filter(Boolean), a[7] = d, a[8] = m, a[9] = p) : p = a[9];
		var _ = p.join(" "), f;
		a[10] === Symbol.for("react.memo_cache_sentinel") ? (f = (e || (e = r("stylex"))).props(o("WAWebPaymentBackground.stylex").styles.foregroundData), a[10] = f) : f = a[10];
		var g;
		a[11] !== t.children ? (g = u.jsx("div", babelHelpers.extends({}, f, { children: t.children })), a[11] = t.children, a[12] = g) : g = a[12];
		var h;
		a[13] !== _ || a[14] !== g || a[15] !== l.style ? (h = u.jsx("div", {
			"data-testid": "payment-background-thumb",
			style: c,
			className: _,
			children: g
		}), a[13] = _, a[14] = g, a[15] = l.style, a[16] = h) : h = a[16];
		var y;
		return a[17] !== s || a[18] !== h ? (y = u.jsx("div", babelHelpers.extends({}, s, { children: h })), a[17] = s, a[18] = h, a[19] = y) : y = a[19], y;
	}
	l.default = c;
}), 98);

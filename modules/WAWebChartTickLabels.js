__d("WAWebChartTickLabels", [
	"ReactKonva",
	"WAWebChartThemeContext",
	"WAWebL10N",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useContext, d = u.useEffect, m = u.useRef, p = u.useState;
	function _(e) {
		var t = o("react-compiler-runtime").c(11), n = e.margin, r = e.position, a = e.text, i = e.x, l = e.y, u = n === void 0 ? 5 : n, _ = c(o("WAWebChartThemeContext").ChartThemeContext), f = m(null), g = p(null), h = g[0], y = g[1], C, b;
		t[0] !== r ? (C = function() {
			var e = f.current;
			if (!(e == null || r === "start")) {
				var t = e.width() / (r === "middle" ? 2 : 1);
				y(e.x() - t);
			}
		}, b = [r], t[0] = r, t[1] = C, t[2] = b) : (C = t[1], b = t[2]), d(C, b);
		var v = h != null ? h : i, S = l + u, R;
		return t[3] !== v || t[4] !== S || t[5] !== a || t[6] !== _.fontSize || t[7] !== _.textColor || t[8] !== _.tickLabelFontFamily || t[9] !== i ? (R = s.jsx(o("ReactKonva").Text, {
			ref: f,
			text: a,
			x: v,
			y: S,
			fill: _.textColor,
			fontSize: _.fontSize,
			fontFamily: _.tickLabelFontFamily
		}, i), t[3] = v, t[4] = S, t[5] = a, t[6] = _.fontSize, t[7] = _.textColor, t[8] = _.tickLabelFontFamily, t[9] = i, t[10] = R) : R = t[10], R;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(14), n = e.margin, a = e.text, i = e.x, l = e.y, u = c(o("WAWebChartThemeContext").ChartThemeContext), _ = m(null), f = p(l), g = f[0], h = f[1], y = p(i), C = y[0], b = y[1], v;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (v = r("WAWebL10N").isRTL(), t[0] = v) : v = t[0];
		var S = v, R, L;
		t[1] !== n || t[2] !== i || t[3] !== l ? (R = function() {
			var e = _.current;
			if (e != null) {
				h(l - e.height() / 2);
				var t = S ? i + n : -e.width() - n;
				b(t);
			}
		}, L = [
			n,
			i,
			l,
			S
		], t[1] = n, t[2] = i, t[3] = l, t[4] = R, t[5] = L) : (R = t[4], L = t[5]), d(R, L);
		var E;
		return t[6] !== C || t[7] !== g || t[8] !== a || t[9] !== u.fontSize || t[10] !== u.textColor || t[11] !== u.tickLabelFontFamily || t[12] !== i ? (E = s.jsx(o("ReactKonva").Text, {
			fill: u.textColor,
			ref: _,
			text: a,
			x: C,
			y: g,
			align: S ? "right" : "left",
			fontSize: u.fontSize,
			fontFamily: u.tickLabelFontFamily
		}, i), t[6] = C, t[7] = g, t[8] = a, t[9] = u.fontSize, t[10] = u.textColor, t[11] = u.tickLabelFontFamily, t[12] = i, t[13] = E) : E = t[13], E;
	}
	l.XTickLabel = _, l.YTickLabel = f;
}), 98);

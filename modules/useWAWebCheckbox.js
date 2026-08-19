__d("useWAWebCheckbox", [
	"WAWebCheckBox.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState;
	function c(e, t, n) {
		var r = o("react-compiler-runtime").c(19), a = t === void 0 ? !1 : t, i = n === void 0 ? !1 : n, l = u(a), c = l[0], d = l[1], m;
		r[0] !== e ? (m = e.replace(" ", "-").toLowerCase(), r[0] = e, r[1] = m) : m = r[1];
		var p = m + Math.random(), _;
		r[2] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "x14vqqas" }, r[2] = _) : _ = r[2];
		var f;
		r[3] !== c ? (f = function() {
			return d(!c);
		}, r[3] = c, r[4] = f) : f = r[4];
		var g;
		r[5] !== c || r[6] !== i || r[7] !== p || r[8] !== f ? (g = s.jsx(o("WAWebCheckBox.react").CheckBox, {
			checked: c,
			onChange: f,
			id: p,
			disabled: i
		}), r[5] = c, r[6] = i, r[7] = p, r[8] = f, r[9] = g) : g = r[9];
		var h;
		r[10] !== p || r[11] !== e ? (h = s.jsxs("label", {
			htmlFor: p,
			children: [" ", e]
		}), r[10] = p, r[11] = e, r[12] = h) : h = r[12];
		var y;
		r[13] !== g || r[14] !== h ? (y = s.jsxs("div", babelHelpers.extends({}, _, { children: [g, h] })), r[13] = g, r[14] = h, r[15] = y) : y = r[15];
		var C = y, b;
		return r[16] !== C || r[17] !== c ? (b = [
			c,
			C,
			d
		], r[16] = C, r[17] = c, r[18] = b) : b = r[18], b;
	}
	l.useCheckBox = c;
}), 98);

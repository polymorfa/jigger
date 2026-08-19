__d("useWAWebSelect", ["react", "react-compiler-runtime"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState;
	function c(e, t, n) {
		var r = o("react-compiler-runtime").c(26), a;
		r[0] !== n ? (a = n === void 0 ? {} : n, r[0] = n, r[1] = a) : a = r[1];
		var i = a, l = i.defaultSelectedIndex, c = i.onChange, m = u(l), p = m[0], _ = m[1], f;
		r[2] !== c || r[3] !== t ? (f = function(n) {
			var e = parseInt(n.currentTarget.value, 10);
			c == null || c(t[e]), _(e);
		}, r[2] = c, r[3] = t, r[4] = f) : f = r[4];
		var g = f, h;
		r[5] !== e ? (h = e.replace(" ", "-").toLowerCase(), r[5] = e, r[6] = h) : h = r[6];
		var y = h, C;
		r[7] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "x14vqqas x78zum5 x1q0g3np x6s0dn4" }, r[7] = C) : C = r[7];
		var b;
		r[8] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "x2lah0s x1xegmmw" }, r[8] = b) : b = r[8];
		var v;
		r[9] !== y || r[10] !== e ? (v = s.jsx("label", babelHelpers.extends({ htmlFor: y }, b, { children: e })), r[9] = y, r[10] = e, r[11] = v) : v = r[11];
		var S;
		r[12] === Symbol.for("react.memo_cache_sentinel") ? (S = { className: "x1c4vz4f x14atkfc xyqdw3p xpdmqnj xg8j3zb x1g0dm76 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1gbu3ll xddln23 xnzhmsc x723t9i xrxyp3c xv0oops x1isl5vh xn8zj9a" }, r[12] = S) : S = r[12];
		var R;
		r[13] !== t ? (R = t.map(d), r[13] = t, r[14] = R) : R = r[14];
		var L;
		r[15] !== g || r[16] !== y || r[17] !== p || r[18] !== R ? (L = s.jsx("select", babelHelpers.extends({}, S, {
			value: p,
			onChange: g,
			id: y,
			children: R
		})), r[15] = g, r[16] = y, r[17] = p, r[18] = R, r[19] = L) : L = r[19];
		var E;
		r[20] !== v || r[21] !== L ? (E = s.jsxs("div", babelHelpers.extends({}, C, { children: [v, L] })), r[20] = v, r[21] = L, r[22] = E) : E = r[22];
		var k = E, I = p != null ? t[p] : null, T;
		return r[23] !== k || r[24] !== I ? (T = [I, k], r[23] = k, r[24] = I, r[25] = T) : T = r[25], T;
	}
	function d(e, t) {
		return s.jsx("option", {
			value: t,
			children: String(e)
		}, t);
	}
	d.displayName = d.name + " [from " + i.id + "]", l.useSelect = c;
}), 98);

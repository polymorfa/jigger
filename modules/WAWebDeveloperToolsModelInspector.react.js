__d("WAWebDeveloperToolsModelInspector.react", [
	"WAWebDeveloperMenuUtils",
	"WAWebDeveloperToolsModelInspectorUtils",
	"WAWebFlex.react",
	"WAWebRichTextInput.react",
	"WAWebUnstyledButton.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = {
		tdVal: {
			textAlign: "xp4054r",
			":hover_textDecoration": "xt0b8zv",
			":hover_textDecorationColor": "xa5hfdq",
			$$css: !0
		},
		tableHeaderWidth: {
			width: "xh8yej3",
			$$css: !0
		},
		tableSearchBar: {
			width: "xygnafs",
			textAlign: "xp4054r",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(20), n = e.data, a = e.dataType, i = e.modelKey, l = u(""), d = l[0], p = l[1], _;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "x1c3i2sq xo1mcw5 xgif2c7" }, t[0] = _) : _ = t[0];
		var f;
		t[1] !== a ? (f = s.jsx("span", babelHelpers.extends({}, _, { children: a })), t[1] = a, t[2] = f) : f = t[2];
		var g;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (g = s.jsx(r("WAWebRichTextInput.react"), {
			placeholder: "Search for a key",
			onChange: function(t) {
				p(t.text);
			},
			xstyle: c.tableSearchBar
		}), t[3] = g) : g = t[3];
		var h;
		t[4] !== f ? (h = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			xstyle: c.tableHeaderWidth,
			children: [f, g]
		}), t[4] = f, t[5] = h) : h = t[5];
		var y, C, b;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (y = { className: "x6ikm8r x10wlt62 x1vd4hg5 xh8yej3 x16qb05n xi7iut8 x1dm3dyd x1pv694p x1whkhu0 x3emv5x x1ydeqjr xyg86qh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4" }, C = { className: "x1rife3k x5yr21d x6ikm8r xh8yej3" }, b = { className: "x140o2bo xh8yej3 x5kalc8 x889kno x1a8lsjc" }, t[6] = y, t[7] = C, t[8] = b) : (y = t[6], C = t[7], b = t[8]);
		var v;
		if (t[9] !== n || t[10] !== d || t[11] !== i) {
			var S;
			t[13] !== i ? (S = function(t, n) {
				var e = t[0], a = t[1];
				return s.createElement("tr", babelHelpers.extends({}, {
					0: { className: "x17gydlx x4wrhlh" },
					1: { className: "x17gydlx x1280gxy" }
				}[(n % 2 === 0) << 0], { key: e }), s.jsx("td", {
					className: "xjb2p0i x117nqv4 x14ug900 xxymvpz x123j3cw x1gabggj xs9asl8 xaso8d8",
					children: e
				}), s.jsx("td", {
					className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xp4054r xt0b8zv xa5hfdq",
					children: s.jsx(r("WAWebUnstyledButton.react"), {
						onClick: function() {
							return o("WAWebDeveloperMenuUtils").copyToClipboard({
								successText: "Value Successfully Copied",
								text: String(a)
							});
						},
						xstyle: c.tdVal,
						children: o("WAWebDeveloperToolsModelInspectorUtils").serialize(i, e, a)
					})
				}));
			}, t[13] = i, t[14] = S) : S = t[14], v = Object.entries(n).filter(function(e) {
				var t = e[0];
				return d === "" ? !0 : t.toLowerCase().includes(d);
			}).sort(m).map(S), t[9] = n, t[10] = d, t[11] = i, t[12] = v;
		} else v = t[12];
		var R;
		t[15] !== v ? (R = s.jsx("div", babelHelpers.extends({}, y, { children: s.jsx("div", babelHelpers.extends({}, C, { children: s.jsx("table", babelHelpers.extends({}, b, { children: s.jsx("tbody", { children: v }) })) })) })), t[15] = v, t[16] = R) : R = t[16];
		var L;
		return t[17] !== h || t[18] !== R ? (L = s.jsxs("div", { children: [h, R] }), t[17] = h, t[18] = R, t[19] = L) : L = t[19], L;
	}
	function m(e, t) {
		var n = e[0], r = t[0], o = n.toLowerCase();
		return n !== "id" && r !== "id" ? n < r ? -1 : 1 : o === "id" ? -1 : 1;
	}
	l.default = d;
}), 98);

__d("WAWebDialerPad.react", [
	"WAWebIcBackspaceIcon.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = [
		[
			{
				digit: "1",
				letters: "\xA0"
			},
			{
				digit: "2",
				letters: "ABC"
			},
			{
				digit: "3",
				letters: "DEF"
			}
		],
		[
			{
				digit: "4",
				letters: "GHI"
			},
			{
				digit: "5",
				letters: "JKL"
			},
			{
				digit: "6",
				letters: "MNO"
			}
		],
		[
			{
				digit: "7",
				letters: "PQRS"
			},
			{
				digit: "8",
				letters: "TUV"
			},
			{
				digit: "9",
				letters: "WXYZ"
			}
		],
		[
			{
				digit: "+",
				letters: null
			},
			{
				digit: "0",
				letters: null
			},
			{
				digit: "backspace",
				letters: null
			}
		]
	];
	function c(e) {
		var t = o("react-compiler-runtime").c(21), n = e.digit, r = e.letters, a = e.onClick, i = e.testid, l;
		t[0] !== n || t[1] !== a ? (l = function() {
			a(n);
		}, t[0] = n, t[1] = a, t[2] = l) : l = t[2];
		var u = l, c;
		t[3] !== n || t[4] !== a ? (c = function(t) {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), a(n));
		}, t[3] = n, t[4] = a, t[5] = c) : c = t[5];
		var d = c, m;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "xlr9sxt xvvg52n xwd4zgb xq8v1ta x78zum5 xdt5ytf x6s0dn4 xl56j7k xkh2ocl x5mp9sv x1qvou4u x1ypdohk x87ps6o x5gkzjs x17gydlx x889kno x2vl965 x1a8lsjc xe2zdcy" }, t[6] = m) : m = t[6];
		var p = i != null ? i + "-" + n : void 0, _;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "x1aueamr xo1l8bm x14ug900 x2b8uid" }, t[7] = _) : _ = t[7];
		var f;
		t[8] !== n ? (f = n === "backspace" ? s.jsx(o("WAWebIcBackspaceIcon.react").IcBackspaceIcon, {}) : n, t[8] = n, t[9] = f) : f = t[9];
		var g;
		t[10] !== f ? (g = s.jsx("div", babelHelpers.extends({}, _, { children: f })), t[10] = f, t[11] = g) : g = t[11];
		var h;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (h = { className: "x7yx35o xhslqc4 x19v9tvf" }, t[12] = h) : h = t[12];
		var y;
		t[13] !== r ? (y = s.jsx("div", babelHelpers.extends({}, h, { children: r })), t[13] = r, t[14] = y) : y = t[14];
		var C;
		return t[15] !== u || t[16] !== d || t[17] !== p || t[18] !== g || t[19] !== y ? (C = s.jsxs("div", babelHelpers.extends({}, m, {
			onClick: u,
			onKeyDown: d,
			role: "button",
			tabIndex: 0,
			"data-testid": p,
			children: [g, y]
		})), t[15] = u, t[16] = d, t[17] = p, t[18] = g, t[19] = y, t[20] = C) : C = t[20], C;
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(8), n = e.onClick, r = e.ref, a = e.testid, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x78zum5 xdt5ytf xexx8yu x2vl965 x18d9i69 xe2zdcy x1cy8zhl xkh2ocl x129bwdz" }, t[0] = i) : i = t[0];
		var l;
		t[1] !== n || t[2] !== a ? (l = u.map(function(e, t) {
			return s.jsx("div", {
				className: "x78zum5 x6s0dn4 xkh2ocl x1qughib xwzfr38 xh8yej3",
				children: e.map(function(e) {
					var t = e.digit, r = e.letters;
					return s.jsx(c, {
						digit: t,
						letters: r,
						onClick: n,
						testid: a
					}, t);
				})
			}, "row-" + t);
		}), t[1] = n, t[2] = a, t[3] = l) : l = t[3];
		var d;
		return t[4] !== r || t[5] !== l || t[6] !== a ? (d = s.jsx("div", babelHelpers.extends({ ref: r }, i, {
			"data-testid": a,
			children: l
		})), t[4] = r, t[5] = l, t[6] = a, t[7] = d) : d = t[7], d;
	}
	l.default = d;
}), 98);

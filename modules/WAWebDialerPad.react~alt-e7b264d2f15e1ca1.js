__d("WAWebDialerPad.react", ["WAWebIcBackspaceIcon.react", "react"], (function(t, n, r, o, a, i, l) {
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
		var t = e.digit, n = e.letters, r = e.onClick, a = e.testid, i = function() {
			r(t);
		}, l = function(n) {
			(n.key === "Enter" || n.key === " ") && (n.preventDefault(), r(t));
		};
		return s.jsxs("div", {
			className: "xlr9sxt xvvg52n xwd4zgb xq8v1ta x78zum5 xdt5ytf x6s0dn4 xl56j7k xkh2ocl x5mp9sv x1qvou4u x1ypdohk x87ps6o x5gkzjs x17gydlx x889kno x2vl965 x1a8lsjc xe2zdcy",
			onClick: i,
			onKeyDown: l,
			role: "button",
			tabIndex: 0,
			"data-testid": a != null ? a + "-" + t : void 0,
			children: [s.jsx("div", {
				className: "x1aueamr xo1l8bm x14ug900 x2b8uid",
				children: t === "backspace" ? s.jsx(o("WAWebIcBackspaceIcon.react").IcBackspaceIcon, {}) : t
			}), s.jsx("div", {
				className: "x7yx35o xhslqc4 x19v9tvf",
				children: n
			})]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.onClick, n = e.ref, r = e.testid;
		return s.jsx("div", {
			ref: n,
			className: "x78zum5 xdt5ytf xexx8yu x2vl965 x18d9i69 xe2zdcy x1cy8zhl xkh2ocl x129bwdz",
			"data-testid": r,
			children: u.map(function(e, n) {
				return s.jsx("div", {
					className: "x78zum5 x6s0dn4 xkh2ocl x1qughib xwzfr38 xh8yej3",
					children: e.map(function(e) {
						var n = e.digit, o = e.letters;
						return s.jsx(c, {
							digit: n,
							letters: o,
							onClick: t,
							testid: r
						}, n);
					})
				}, "row-" + n);
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

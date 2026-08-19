__d("WAWebMessageCheckbox.react", [
	"WAWebAppContext.react",
	"WAWebCheckBox.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(14), n = e.ariaLabel, r = e.checked, a = e.msgTheme, i = e.onClick, l = e.ref, u = e.theme, c = o("WAWebAppContext.react").useAppContext(), d = c.rightDrawerOpen, m = a === "gallery", p;
		t[0] !== r || t[1] !== m || t[2] !== d ? (p = {
			0: { className: "x10l6tqk x1pdr0v7 x65okc x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x23o9q9 x5yr21d x4p5aij x1j85h84 xz7312c x1ypdohk x5jttoc xtdr1uq" },
			4: { className: "x10l6tqk x1pdr0v7 x65okc x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x23o9q9 x5yr21d x4p5aij x1j85h84 x1ypdohk x5jttoc xtdr1uq xz7312c x12m67a8" },
			2: { className: "x10l6tqk x1pdr0v7 x65okc x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x23o9q9 x5yr21d x4p5aij x1j85h84 xz7312c x1ypdohk x5jttoc x6j5u84" },
			6: { className: "x10l6tqk x1pdr0v7 x65okc x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x23o9q9 x5yr21d x4p5aij x1j85h84 x1ypdohk x5jttoc xz7312c x12m67a8 x6j5u84" },
			1: { className: "x10l6tqk x1pdr0v7 x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x5yr21d x4p5aij x1j85h84 x1ypdohk x5jttoc x1o0tod x14atkfc x1c1uobl xjbqb8w x1n5bzlp" },
			5: { className: "x10l6tqk x1pdr0v7 x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x5yr21d x4p5aij x1j85h84 x1ypdohk x5jttoc x1o0tod x14atkfc x1c1uobl xjbqb8w x1n5bzlp" },
			3: { className: "x10l6tqk x1pdr0v7 x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x5yr21d x4p5aij x1j85h84 x1ypdohk x5jttoc x1o0tod x14atkfc x1c1uobl xjbqb8w x1n5bzlp" },
			7: { className: "x10l6tqk x1pdr0v7 x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x5yr21d x4p5aij x1j85h84 x1ypdohk x5jttoc x1o0tod x14atkfc x1c1uobl xjbqb8w x1n5bzlp" }
		}[!!d << 2 | !!r << 1 | !!m << 0], t[0] = r, t[1] = m, t[2] = d, t[3] = p) : p = t[3];
		var _;
		t[4] !== n || t[5] !== r || t[6] !== i || t[7] !== u ? (_ = s.jsx(o("WAWebCheckBox.react").CheckBox, {
			onChange: i,
			checked: r,
			theme: u,
			ariaLabel: n
		}), t[4] = n, t[5] = r, t[6] = i, t[7] = u, t[8] = _) : _ = t[8];
		var f;
		return t[9] !== i || t[10] !== l || t[11] !== p || t[12] !== _ ? (f = s.jsx("div", babelHelpers.extends({
			ref: l,
			onClick: i
		}, p, { children: _ })), t[9] = i, t[10] = l, t[11] = p, t[12] = _, t[13] = f) : f = t[13], f;
	}
	l.default = u;
}), 98);

__d("WAWebMessageCheckbox.react", [
	"WAWebAppContext.react",
	"WAWebCheckBox.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.ariaLabel, n = e.checked, r = e.msgTheme, a = e.onClick, i = e.ref, l = e.theme, u = o("WAWebAppContext.react").useAppContext(), c = u.rightDrawerOpen, d = r === "gallery";
		return s.jsx("div", babelHelpers.extends({
			ref: i,
			onClick: a
		}, {
			0: { className: "x10l6tqk x1pdr0v7 x65okc x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x23o9q9 x5yr21d x4p5aij x1j85h84 xz7312c x1ypdohk x5jttoc xtdr1uq" },
			4: { className: "x10l6tqk x1pdr0v7 x65okc x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x23o9q9 x5yr21d x4p5aij x1j85h84 x1ypdohk x5jttoc xtdr1uq xz7312c x12m67a8" },
			2: { className: "x10l6tqk x1pdr0v7 x65okc x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x23o9q9 x5yr21d x4p5aij x1j85h84 xz7312c x1ypdohk x5jttoc x6j5u84" },
			6: { className: "x10l6tqk x1pdr0v7 x65okc x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x23o9q9 x5yr21d x4p5aij x1j85h84 x1ypdohk x5jttoc xz7312c x12m67a8 x6j5u84" },
			1: { className: "x10l6tqk x1pdr0v7 x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x5yr21d x4p5aij x1j85h84 x1ypdohk x5jttoc x1o0tod x14atkfc x1c1uobl xjbqb8w x1n5bzlp" },
			5: { className: "x10l6tqk x1pdr0v7 x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x5yr21d x4p5aij x1j85h84 x1ypdohk x5jttoc x1o0tod x14atkfc x1c1uobl xjbqb8w x1n5bzlp" },
			3: { className: "x10l6tqk x1pdr0v7 x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x5yr21d x4p5aij x1j85h84 x1ypdohk x5jttoc x1o0tod x14atkfc x1c1uobl xjbqb8w x1n5bzlp" },
			7: { className: "x10l6tqk x1pdr0v7 x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x5yr21d x4p5aij x1j85h84 x1ypdohk x5jttoc x1o0tod x14atkfc x1c1uobl xjbqb8w x1n5bzlp" }
		}[!!c << 2 | !!n << 1 | !!d << 0], { children: s.jsx(o("WAWebCheckBox.react").CheckBox, {
			onChange: a,
			checked: n,
			theme: l,
			ariaLabel: t
		}) }));
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);

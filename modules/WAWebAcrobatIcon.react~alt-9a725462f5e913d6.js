__d("WAWebAcrobatIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "acrobat";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "none",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M22.84 14.8c-1.68-1.76-6.3-1.04-7.42-.91a19.84 19.84 0 0 1-3.12-4.1c.6-1.74.96-3.56 1.04-5.4 0-1.63-.65-3.39-2.48-3.39a1.9 1.9 0 0 0-1.56.9c-.78 1.37-.46 4.1.78 6.91a46.9 46.9 0 0 1-3.19 7.43c-1.89.78-5.86 2.6-6.18 4.55-.12.6.08 1.21.52 1.63.46.38 1.03.59 1.63.58 2.4 0 4.75-3.32 6.38-6.12a44.45 44.45 0 0 1 5.67-1.5c2.53 2.21 4.75 2.54 5.92 2.54 1.56 0 2.15-.66 2.34-1.24a1.7 1.7 0 0 0-.33-1.89Zm-1.62 1.1c-.07.46-.66.92-1.7.66a8.96 8.96 0 0 1-3.31-1.69c.85-.13 2.73-.32 4.1-.07.51.13 1.03.46.9 1.1ZM10.34 2.5c.12-.2.31-.32.53-.33.58 0 .72.72.72 1.3a14.46 14.46 0 0 1-.78 4.04c-.99-2.6-.8-4.43-.47-5.02Zm-.12 12.62c.56-1.18 1.06-2.4 1.5-3.64.6.96 1.3 1.85 2.08 2.66 0 .07-2.02.47-3.58.98Zm-3.84 2.6c-1.5 2.48-3.07 4.04-3.91 4.04a1.07 1.07 0 0 1-.4-.12.5.5 0 0 1-.2-.59c.21-.91 1.9-2.15 4.5-3.32Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.AcrobatIcon = d;
}), 98);

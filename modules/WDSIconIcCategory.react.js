__d("WDSIconIcCategory.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-category";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 0 24 24");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [u.jsx("title", { children: c }), u.jsx("path", {
				fill: "currentColor",
				d: "m7.42 9.48 3.73-6.08c.1-.17.22-.29.38-.36a1.05 1.05 0 0 1 .95 0c.14.07.27.2.37.36l3.72 6.08a1.01 1.01 0 0 1 .03 1.02.97.97 0 0 1-.88.5H8.27a.99.99 0 0 1-.87-.5 1.01 1.01 0 0 1 .02-1.02ZM17.5 22a4.34 4.34 0 0 1-3.19-1.31A4.34 4.34 0 0 1 13 17.5c0-1.25.44-2.31 1.31-3.19A4.34 4.34 0 0 1 17.5 13c1.25 0 2.31.44 3.19 1.31A4.34 4.34 0 0 1 22 17.5c0 1.25-.44 2.31-1.31 3.19A4.34 4.34 0 0 1 17.5 22ZM3 20.5v-6c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h6c.28 0 .52.1.71.29.2.19.29.43.29.71v6c0 .28-.1.52-.29.71a.94.94 0 0 1-.71.29H4a.97.97 0 0 1-.71-.29.97.97 0 0 1-.29-.71Zm14.5-.5c.7 0 1.3-.24 1.77-.73.49-.48.73-1.07.73-1.77s-.24-1.3-.73-1.78A2.41 2.41 0 0 0 17.5 15c-.7 0-1.3.24-1.78.72A2.41 2.41 0 0 0 15 17.5c0 .7.24 1.3.72 1.77.49.49 1.08.73 1.78.73ZM5 19.5h4v-4H5v4ZM10.05 9h3.9L12 5.85 10.05 9Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

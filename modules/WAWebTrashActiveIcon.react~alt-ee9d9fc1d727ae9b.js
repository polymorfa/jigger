__d("WAWebTrashActiveIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "trash-active";
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
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "currentColor",
						d: "M16 7.5h6.25a.75.75 0 0 1 0 1.5H16V7.5Zm0 4.5h5.25a.75.75 0 0 1 0 1.5H16V12Zm0 4.5h3.25a.75.75 0 0 1 0 1.5H16v-1.5Z"
					}),
					u.jsx("path", {
						fill: "currentColor",
						fillRule: "evenodd",
						d: "M11 4.89h2.14c.47 0 .86.4.86.89s-.39.89-.86.89H2.86a.88.88 0 0 1-.86-.9c0-.48.39-.88.86-.88H5l.6-.63A.85.85 0 0 1 6.2 4h3.6c.21 0 .44.1.6.26l.6.63ZM4.57 20c-.94 0-1.71-.8-1.71-1.78V9.33c0-.97.77-1.77 1.71-1.77h6.86c.94 0 1.71.8 1.71 1.77v8.9c0 .97-.77 1.77-1.71 1.77H4.57Z",
						clipRule: "evenodd"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.TrashActiveIcon = d;
}), 98);

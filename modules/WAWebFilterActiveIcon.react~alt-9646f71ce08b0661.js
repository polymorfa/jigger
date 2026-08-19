__d("WAWebFilterActiveIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "filter-active";
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
						d: "M22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
					}),
					u.jsx("path", {
						fill: "currentColor",
						fillRule: "evenodd",
						d: "M14.1 6H4c-.28 0-.52.1-.71.29A.94.94 0 0 0 3 7c0 .28.1.52.29.71.19.2.43.29.71.29h11a4.98 4.98 0 0 1-.9-2Zm6.87 1.26A2.99 2.99 0 0 1 16.17 6H20c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .1-.01.18-.03.26ZM10.29 17.71c.19.2.43.29.71.29h2c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 13 16h-2c-.28 0-.52.1-.71.29A.94.94 0 0 0 10 17c0 .28.1.52.29.71Zm-4-5c.19.2.43.29.71.29h10c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 17 11H7c-.28 0-.52.1-.71.29A.94.94 0 0 0 6 12c0 .28.1.52.29.71Z",
						clipRule: "evenodd"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.FilterActiveIcon = d;
}), 98);

__d("WAWebKeepWarningIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "keep-warning";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 60, 60, "0 0 60 60");
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
						fill: "white",
						d: "M42.5 7.5h-25a5 5 0 0 0-4.97 5l-.03 40L30 45l17.5 7.5v-40c0-2.75-2.25-5-5-5Z"
					}),
					u.jsx("path", {
						fill: "#00A884",
						fillRule: "evenodd",
						d: "M30.02 12.5a3.15 3.15 0 0 0-3.14 3.15v11.2a3.15 3.15 0 1 0 6.29 0v-11.2a3.15 3.15 0 0 0-3.15-3.15Zm3.1 22.5h-6.24v6.25h6.25V35Z",
						clipRule: "evenodd"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.KeepWarningIcon = d;
}), 98);

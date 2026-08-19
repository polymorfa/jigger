__d("WAWebListPeopleRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "list-people-refreshed";
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
					fillRule: "evenodd",
					d: "M8 18.38c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.4v-12c0-.56.2-1.03.59-1.42.39-.4.86-.59 1.41-.59h12c.55 0 1.02.2 1.41.59.4.4.59.86.59 1.41v12c0 .55-.2 1.02-.59 1.41-.39.4-.86.6-1.41.6H8Zm7.74-2.75c.56.17 1.08.42 1.56.75h-6.6a5.52 5.52 0 0 1 3.3-1c.6 0 1.18.08 1.74.25ZM4 22.38c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.4v-13c0-.3.1-.53.29-.72.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.2.29.43.29.71v13h13c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71-.19.2-.43.3-.71.3H4Zm4-6.3a7.77 7.77 0 0 1 6-2.7 7.77 7.77 0 0 1 6 2.7V4.38H8v11.7Zm8.13-5.07a2.9 2.9 0 0 1-2.13.87 2.9 2.9 0 0 1-2.13-.87A2.9 2.9 0 0 1 11 8.88c0-.83.3-1.54.88-2.12A2.9 2.9 0 0 1 14 5.88c.83 0 1.54.3 2.13.88.58.58.87 1.29.87 2.12 0 .83-.3 1.54-.88 2.13ZM15 8.88a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ListPeopleRefreshedIcon = d;
}), 98);

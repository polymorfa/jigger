__d("WAWebStorefrontFilledIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "storefront-filled";
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
					d: "M4 3h16c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 20 5H4a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 4c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29Zm0 18a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 20v-6h-.17a.96.96 0 0 1-.78-.36.94.94 0 0 1-.2-.84l1-6a.99.99 0 0 1 .35-.58c.18-.14.4-.22.63-.22h16.35a.99.99 0 0 1 .98.8l.99 6c.07.32 0 .6-.2.84a.96.96 0 0 1-.77.36H21v6c0 .28-.1.52-.29.71A.94.94 0 0 1 20 21a.97.97 0 0 1-.71-.29A.97.97 0 0 1 19 20v-6h-4v6c0 .28-.1.52-.29.71A.94.94 0 0 1 14 21H4Zm1-2h8v-5H5v5Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.StorefrontFilledIcon = d;
}), 98);

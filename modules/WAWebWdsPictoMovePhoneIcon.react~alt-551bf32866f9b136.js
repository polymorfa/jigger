__d("WAWebWdsPictoMovePhoneIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-picto-move-phone";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 88, 131, "0 0 131 88");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						d: "M55.4 46.8c1.5 0 2.8-1.2 2.8-2.8s-1.2-2.8-2.8-2.8-2.8 1.2-2.8 2.8 1.3 2.8 2.8 2.8zm10.2 0c1.5 0 2.8-1.2 2.8-2.8s-1.2-2.8-2.8-2.8a2.8 2.8 0 1 0 0 5.6zm10.2 0c1.5 0 2.8-1.2 2.8-2.8s-1.2-2.8-2.8-2.8S73 42.5 73 44s1.3 2.8 2.8 2.8zm36.1-34.1H87.5c-2.6 0-4.6 2.1-4.6 4.7v53.2c0 2.6 2.1 4.7 4.6 4.7h24.4c2.6 0 4.6-2.1 4.6-4.7V17.4c.1-2.6-2-4.7-4.6-4.7z",
						style: {
							fill: "#e6ffda",
							stroke: "#111b21",
							strokeWidth: 1.5,
							strokeMiterlimit: 10
						}
					}),
					u.jsx("path", {
						d: "M43 12.7H18.6c-2.6 0-4.6 2.1-4.6 4.7v53.2c0 2.6 2.1 4.7 4.6 4.7H43c2.6 0 4.6-2.1 4.6-4.7V17.4c.1-2.6-2-4.7-4.6-4.7z",
						style: {
							fill: "#25d366",
							stroke: "#111b21",
							strokeWidth: 1.5,
							strokeLinecap: "round",
							strokeMiterlimit: 10
						}
					}),
					u.jsx("path", {
						d: "M43 19.8H18.7c-.8 0-1.5.7-1.5 1.5V66c0 .8.7 1.5 1.5 1.5H43c.8 0 1.5-.7 1.5-1.5V21.3c0-.8-.7-1.5-1.5-1.5zm-16.9 51h9.5M95 17.1h9.4",
						style: {
							strokeLinecap: "round",
							fill: "none",
							stroke: "#111b21",
							strokeWidth: 1.5,
							strokeMiterlimit: 10
						}
					}),
					u.jsx("path", {
						d: "M83.3 21.3h32.9M83.3 63.9h32.9m-16.5 7.9c1.2 0 2.1-1 2.1-2.2s-1-2.2-2.1-2.2c-1.2 0-2.1 1-2.1 2.2s.9 2.2 2.1 2.2z",
						style: {
							fill: "none",
							stroke: "#111b21",
							strokeWidth: 1.5,
							strokeMiterlimit: 10
						}
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsPictoMovePhoneIcon = d;
}), 98);

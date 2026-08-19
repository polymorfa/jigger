__d("WAWebWaLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wa-logo";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 30, 31, "0 0 31 30");
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
						d: "M30.31 14.32A14.87 14.87 0 0 0 15.54 0h-.07A14.87 14.87 0 0 0 2.41 22L1.1 29.87a.11.11 0 0 0 .11.13h.02l7.79-1.73c2 .96 4.2 1.47 6.44 1.46h.42a14.86 14.86 0 0 0 14.43-15.4Zm-14.5 12.83h-.35a12.3 12.3 0 0 1-5.67-1.38l-.4-.2-5.27 1.24.97-5.34-.22-.38a12.3 12.3 0 0 1 10.25-18.5h.36a12.29 12.29 0 0 1 .34 24.56h-.01Z"
					}),
					u.jsx("path", {
						fill: "currentColor",
						d: "M10.29 7.69a1.37 1.37 0 0 0-.98.44c-.35.36-1.34 1.23-1.4 3.07-.06 1.84 1.23 3.65 1.4 3.9.18.26 2.46 4.23 6.2 5.84 2.2.95 3.17 1.11 3.8 1.11.25 0 .45-.03.65-.04.69-.04 2.24-.83 2.57-1.7.34-.86.36-1.61.28-1.76-.1-.15-.34-.26-.7-.46-.37-.19-2.18-1.15-2.52-1.29a.91.91 0 0 0-.4-.1.55.55 0 0 0-.44.26c-.3.38-1 1.2-1.23 1.43a.55.55 0 0 1-.4.19.97.97 0 0 1-.41-.11 9.52 9.52 0 0 1-2.94-1.96c-.8-.78-1.47-1.68-2-2.66-.2-.38 0-.57.19-.75.19-.18.39-.42.58-.64.16-.18.29-.38.4-.6a.69.69 0 0 0-.02-.66c-.09-.19-.75-2.05-1.07-2.8-.25-.64-.55-.66-.81-.68a8.15 8.15 0 0 0-.72-.03h-.03"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WaLogoIcon = d;
}), 98);

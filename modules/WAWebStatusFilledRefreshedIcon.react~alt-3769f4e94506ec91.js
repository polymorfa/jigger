__d("WAWebStatusFilledRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "status-filled-refreshed";
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
						d: "M13.56 3.14c.1-.55.62-.92 1.15-.77a10 10 0 0 1 6.98 12.1.91.91 0 0 1-1.23.6c-.52-.18-.78-.75-.66-1.3a8 8 0 0 0-5.44-9.41c-.53-.17-.9-.68-.8-1.22Zm5.34 14.65c.42.35.48.98.08 1.37a10 10 0 0 1-13.96 0c-.4-.39-.34-1.02.08-1.38a1.11 1.11 0 0 1 1.46.09 8 8 0 0 0 10.88 0c.4-.38 1.03-.44 1.45-.09ZM3.54 15.08c-.52.19-1.1-.08-1.23-.62A10 10 0 0 1 9.29 2.37c.53-.15 1.05.22 1.15.77.1.54-.27 1.05-.8 1.22a8 8 0 0 0-5.44 9.42c.12.54-.14 1.1-.66 1.3Z"
					}),
					u.jsx("path", {
						fill: "currentColor",
						fillRule: "evenodd",
						d: "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z",
						clipRule: "evenodd"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.StatusFilledRefreshedIcon = d;
}), 98);

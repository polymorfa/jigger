__d("WAWebViewOnceDownloadIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "view-once-download";
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
						d: "M13.8 12.5h1.3a.5.5 0 0 1 .35.85l-2.8 2.8a.5.5 0 0 1-.7 0l-2.8-2.8a.5.5 0 0 1 .35-.85h1.3V8.4c0-.28.22-.5.5-.5h2c.27 0 .5.22.5.5v4.1Z"
					}),
					u.jsx("path", {
						fill: "currentColor",
						fillRule: "evenodd",
						d: "M12 21h.26a1 1 0 0 0-.06-2H12v2Zm0-16h.2a1 1 0 0 0 .06-2H12v2Zm4.27-.92a1 1 0 0 0-.95 1.76l.35.2a1 1 0 1 0 1.06-1.7 9 9 0 0 0-.46-.26Zm3.4 3.2a1 1 0 0 0-1.71 1.05l.2.35a1 1 0 0 0 1.76-.95 9 9 0 0 0-.26-.46ZM21 11.73a1 1 0 0 0-2 .06 7.33 7.33 0 0 1 0 .4 1 1 0 1 0 2 .06 9.5 9.5 0 0 0 0-.52Zm-1.08 4.53a1 1 0 1 0-1.76-.95l-.2.35a1 1 0 1 0 1.7 1.06 9 9 0 0 0 .26-.46Zm-3.2 3.4a1 1 0 0 0-1.05-1.71l-.35.2a1 1 0 0 0 .95 1.76 9 9 0 0 0 .46-.26ZM12 3a9 9 0 0 0 0 18v-2a7 7 0 1 1 0-14V3Z",
						clipRule: "evenodd"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ViewOnceDownloadIcon = d;
}), 98);

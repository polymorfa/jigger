__d("WAWebReplyPrivatelyRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "reply-privately-refreshed";
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
					d: "M10 12a3.9 3.9 0 0 1-2.83-1.18A3.85 3.85 0 0 1 6 8c0-1.1.4-2.04 1.17-2.83A3.85 3.85 0 0 1 10 4c1.1 0 2.04.4 2.82 1.17A3.85 3.85 0 0 1 14 8c0 1.1-.4 2.04-1.18 2.82A3.85 3.85 0 0 1 10 12Zm-8 6v-.8c0-.57.15-1.09.44-1.56a2.9 2.9 0 0 1 1.16-1.09 13.76 13.76 0 0 1 8.07-1.45l-1.79 1.79-.11.11a12.72 12.72 0 0 0-5.27 1.35.97.97 0 0 0-.5.85v.8h5.17c.15.42.4.8.71 1.11l.89.89H4c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41Zm8-8c.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41-.39-.4-.86-.59-1.41-.59-.55 0-1.02.2-1.41.59C8.19 6.98 8 7.45 8 8c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59Zm5.6 6h-1.15l1.87-1.88a.97.97 0 0 0 0-1.43.97.97 0 0 0-.71-.29c-.28 0-.51.1-.71.3l-3.6 3.6a.96.96 0 0 0 0 1.4l3.6 3.6c.18.18.4.28.68.29.28 0 .52-.09.72-.29.2-.2.3-.44.3-.71a.93.93 0 0 0-.28-.72L14.45 18H18a3 3 0 0 1 3 3 1 1 0 1 0 2 0 5 5 0 0 0-5-5h-2.4Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ReplyPrivatelyRefreshedIcon = d;
}), 98);

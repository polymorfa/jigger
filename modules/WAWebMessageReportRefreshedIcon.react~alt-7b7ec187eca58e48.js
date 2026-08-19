__d("WAWebMessageReportRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "message-report-refreshed";
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
					d: "M3 8.85.94 5.53A1 1 0 0 1 1.8 4h17.54C20.81 4 22 5.2 22 6.67v10.66c0 1.48-1.2 2.67-2.67 2.67H5.67A2.67 2.67 0 0 1 3 17.33V8.85Zm2 8.48V8.28L3.59 6h15.74c.37 0 .67.3.67.67v10.66c0 .37-.3.67-.67.67H5.67a.67.67 0 0 1-.67-.67Zm8.21-2.04a.97.97 0 0 0-.71-.29c-.28 0-.52.1-.71.29a.94.94 0 0 0-.29.71c0 .28.1.52.29.71.19.2.43.29.71.29.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71Zm0-8A.97.97 0 0 0 12.5 7c-.28 0-.52.1-.71.29a.94.94 0 0 0-.29.71v4c0 .28.1.52.29.71.19.2.43.29.71.29.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71V8c0-.28-.1-.52-.29-.71Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MessageReportRefreshedIcon = d;
}), 98);

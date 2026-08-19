__d("WAWebAlertNoticeIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "alert-notice";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 27, 23, "0 0 23 27");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				version: "1.1",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M15.64 1c.64 0 1.26.24 1.74.67l3.77 3.42c.54.49.85 1.18.85 1.91v16.5c0 1.44-1.12 2.5-2.5 2.5h-16A2.46 2.46 0 0 1 1 23.5V3.62A2.57 2.57 0 0 1 3.5 1h12.14Zm.84 19.25H6.2a.6.6 0 0 0-.05 1.2h10.33a.6.6 0 0 0 0-1.2Zm0-3.6H6.2a.6.6 0 0 0-.05 1.2h10.33a.6.6 0 1 0 0-1.2Zm0-3.62h-3.97a.6.6 0 0 0-.04 1.2h4.01a.6.6 0 0 0 .05-1.2h-.05ZM7.9 8.23c1.15 0 1.72.9 1.68 2.57h.05c.31 0 .56.25.56.56v2.92c0 .31-.25.56-.56.56H6.15a.56.56 0 0 1-.56-.56v-2.92c0-.31.25-.56.56-.56h.06c-.03-1.67.54-2.58 1.7-2.58Zm0 .6c-.8 0-1.2.6-1.16 1.97h2.3c.05-1.36-.33-1.97-1.14-1.97Zm8.58.6a.6.6 0 0 1 0 1.2h-3.97a.6.6 0 1 1 0-1.2h3.97Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.AlertNoticeIcon = d;
}), 98);

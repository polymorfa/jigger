__d("WAWebPendingParticipantsIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "pending-participants";
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
					d: "M11.4 19.83s-1.07-1.59-1.07-3.64.71-3 .71-3h-.7C7.21 13.18 1 14.66 1 17.61v1.71c0 .28.22.5.5.5h9.9Zm-1.07-8.86A4.55 4.55 0 0 0 15 6.53a4.55 4.55 0 0 0-4.67-4.43 4.55 4.55 0 0 0-4.66 4.43 4.55 4.55 0 0 0 4.66 4.44Zm7.97-.07a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm1.81 8.08-2.36-2.36V13.1h1.1v3.07l2.03 2.03-.77.78Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PendingParticipantsIcon = d;
}), 98);

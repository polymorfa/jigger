__d("WAWebLockIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "lock";
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
				version: "1.1",
				x: "0px",
				y: "0px",
				enableBackground: "new 0 0 24 24",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M17.3 7.6h-.9V5.8c0-2.5-1.9-4.4-4.4-4.4S7.6 3.3 7.6 5.8v1.8h-.9c-1 0-1.8.8-1.8 1.8v8.9c0 1 .8 1.8 1.8 1.8h10.6c1 0 1.8-.8 1.8-1.8V9.4c0-1-.8-1.8-1.8-1.8zM12 15.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm2.7-8.2H9.2V5.8c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7v1.8h.1z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.LockIcon = d;
}), 98);

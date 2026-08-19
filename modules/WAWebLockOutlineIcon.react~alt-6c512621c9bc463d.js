__d("WAWebLockOutlineIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "lock-outline";
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
					d: "M6.8 22.4c-.5 0-.92-.18-1.27-.53A1.74 1.74 0 0 1 5 20.6V11c0-.5.18-.92.53-1.27.35-.35.77-.53 1.27-.53h.6V6.8c0-1.33.47-2.46 1.4-3.4A4.63 4.63 0 0 1 12.2 2c1.34 0 2.47.47 3.4 1.4.93.94 1.4 2.07 1.4 3.4v2.4h.6c.5 0 .92.18 1.27.53.35.35.53.78.53 1.27v9.6c0 .5-.18.92-.53 1.27-.35.35-.78.53-1.27.53H6.8Zm0-1.8h10.8V11H6.8v9.6Zm5.4-3a1.78 1.78 0 0 0 1.8-1.81c0-.5-.18-.91-.53-1.26a1.75 1.75 0 0 0-1.28-.53c-.5 0-.91.18-1.26.53-.36.35-.53.78-.53 1.28s.18.92.53 1.26c.35.36.78.53 1.28.53Zm-3-8.4h6V6.8c0-.83-.3-1.54-.88-2.13a2.9 2.9 0 0 0-2.12-.87c-.83 0-1.54.3-2.13.88A2.9 2.9 0 0 0 9.2 6.8v2.4Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.LockOutlineIcon = d;
}), 98);

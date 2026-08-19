__d("WAWebEmptyBlockedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "empty-blocked";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 90, 90, "0 0 90 90");
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
				enableBackground: "new 0 0 90 90",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M67.44 76.01a10.13 10.13 0 0 1-8.37-15.8l14.06 14.06a10.22 10.22 0 0 1-5.7 1.74zm-9.72-24.15a56.99 56.99 0 0 0-18.6-3.57c-10.27 0-30.48 4.97-30.48 15.24v7.64h42.58a16.95 16.95 0 0 1 6.5-19.32zm-18.6-11.21c8.4 0 15.24-6.88 15.24-15.24 0-8.4-6.88-15.24-15.24-15.24S23.88 17.05 23.88 25.4a15.23 15.23 0 0 0 15.24 15.24zm28.32 11.33a13.93 13.93 0 1 0 .01 27.87 13.93 13.93 0 0 0-.01-27.87zm8.36 19.57L61.75 57.5A10.13 10.13 0 0 1 75.8 71.55z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.EmptyBlockedIcon = d;
}), 98);

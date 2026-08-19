__d("WAWebLocationSearchingIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "location-searching";
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
					d: "M11 22v-1q-3.13-.35-5.36-2.59-2.24-2.23-2.59-5.36h-1a.97.97 0 0 1-.71-.29.97.97 0 0 1-.29-.71q0-.42.29-.71a.97.97 0 0 1 .71-.29h1q.35-3.12 2.59-5.36Q7.88 3.45 11 3.1v-1q0-.42.29-.71A.97.97 0 0 1 12 1.1q.42 0 .71.29t.29.71v1q3.12.35 5.36 2.59t2.59 5.36h1q.42 0 .71.29t.29.71q0 .42-.29.71a.97.97 0 0 1-.71.29h-1q-.35 3.12-2.59 5.36Q16.13 20.65 13 21v1q0 .42-.29.71A.97.97 0 0 1 12 23a.97.97 0 0 1-.71-.29A.97.97 0 0 1 11 22m1-2.95q2.9 0 4.95-2.05T19 12.05 16.95 7.1 12 5.05q-2.9 0-4.95 2.05T5 12.05 7.05 17 12 19.05"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.LocationSearchingIcon = d;
}), 98);

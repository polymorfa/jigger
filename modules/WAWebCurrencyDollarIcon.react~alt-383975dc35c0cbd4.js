__d("WAWebCurrencyDollarIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "currency-dollar";
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
					d: "M12.03 21a.97.97 0 0 1-.72-.29.97.97 0 0 1-.28-.71v-1.15a5.2 5.2 0 0 1-1.98-.88q-.85-.62-1.38-1.74a.85.85 0 0 1 0-.74q.16-.39.58-.56a.88.88 0 0 1 .72 0q.38.17.58.55.42.75 1.07 1.13t1.6.39q1.03 0 1.74-.46t.71-1.44q0-.87-.55-1.39-.55-.51-2.55-1.16-2.15-.67-2.95-1.61t-.8-2.29q0-1.62 1.05-2.52t2.15-1.03V4q0-.42.3-.71a.97.97 0 0 1 .7-.29q.43 0 .72.29.29.28.29.71v1.1q.95.15 1.65.61t1.15 1.14q.22.33.08.72a.94.94 0 0 1-.56.58.95.95 0 0 1-.72.01 1.8 1.8 0 0 1-.7-.49 2.2 2.2 0 0 0-.77-.53q-.43-.19-1.08-.19-1.1 0-1.68.49-.57.48-.57 1.21 0 .82.75 1.3t2.6 1q1.72.5 2.6 1.59.9 1.08.9 2.51 0 1.77-1.05 2.7-1.05.93-2.6 1.15V20q0 .42-.3.71a.97.97 0 0 1-.7.29",
					style: { fill: "color(display-p3 .3725 .3882 .4078)" }
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.CurrencyDollarIcon = d;
}), 98);

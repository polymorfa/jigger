__d("WAWebPersonShieldRemoveIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "person-shield-remove";
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
					d: "M6.17 10.82A3.85 3.85 0 0 0 9 12c1.1 0 2.04-.4 2.82-1.18A3.85 3.85 0 0 0 13 8c0-1.1-.4-2.04-1.18-2.83A3.85 3.85 0 0 0 9 4c-1.1 0-2.04.4-2.83 1.17A3.85 3.85 0 0 0 5 8c0 1.1.4 2.04 1.17 2.82ZM1 17.2v.8c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59h6.5c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 9.5 18H3v-.8c0-.18.04-.35.13-.5.08-.15.2-.27.37-.35.83-.42 1.69-.74 2.56-.98.88-.23 1.78-.34 2.72-.34a.9.9 0 0 0 .7-.3.9.9 0 0 0 .3-.7 1.01 1.01 0 0 0-1-1.03c-1.09 0-2.15.14-3.18.41-1.03.28-2.03.66-3 1.14-.5.25-.9.62-1.18 1.1-.28.48-.42 1-.42 1.55Zm9.41-7.79c-.39.4-.86.59-1.41.59-.55 0-1.02-.2-1.41-.59C7.19 9.02 7 8.55 7 8c0-.55.2-1.02.59-1.41C7.98 6.19 8.45 6 9 6c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41ZM17 22a1.28 1.28 0 0 1-.4-.06 6.3 6.3 0 0 1-3.35-2.52A6.92 6.92 0 0 1 12 15.45v-1.89c0-.25.08-.48.23-.68.15-.2.34-.35.58-.44l3.75-1.36a1.33 1.33 0 0 1 .88 0l3.75 1.36c.24.09.43.24.58.44.15.2.23.43.23.68v1.9c0 1.4-.42 2.73-1.25 3.96a6.3 6.3 0 0 1-3.55 2.56L17 22Zm-3-6c0-.41.34-.75.75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 14 16Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PersonShieldRemoveIcon = d;
}), 98);

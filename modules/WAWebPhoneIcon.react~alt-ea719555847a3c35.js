__d("WAWebPhoneIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "phone";
	function m(t) {
		var n = t.innerStyles, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = o("WAWebSvgIconHelpers").resolveSvgIcon(a, d, 24, 24, "0 0 24 24");
		return c.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, i.otherProps, {
			name: i.iconName,
			children: c.jsxs("svg", {
				viewBox: i.viewBox,
				height: i.height,
				width: i.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (s || (s = r("stylex")))(i.iconXstyle),
				fill: "currentColor",
				children: [c.jsx("title", { children: i.iconName }), c.jsx("path", {
					d: "m19.23 15.26-2.54-.29a2 2 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85a2 2 0 0 0 .57-1.64l-.29-2.52a2 2 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07a17 17 0 0 0 15.89 15.89 1.98 1.98 0 0 0 2.07-2v-1.73a1.98 1.98 0 0 0-1.76-1.98z",
					className: s(n == null ? void 0 : n.primary)
				})]
			})
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.PhoneIcon = m;
}), 98);

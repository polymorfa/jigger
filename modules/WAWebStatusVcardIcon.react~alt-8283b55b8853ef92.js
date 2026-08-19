__d("WAWebStatusVcardIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "status-vcard";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 14, "0 0 14 20");
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
				enableBackground: "new 0 0 14 20",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M6.84 9.97a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5.76 3.1c-.88-.85-3.13-1.6-5.72-1.6-2.58 0-4.74.75-5.62 1.6-.2.19-.26.46-.26.74v1.68h12V13.8c0-.28-.2-.55-.4-.75z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.StatusVcardIcon = d;
}), 98);

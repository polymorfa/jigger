__d("WAWebNewGroupIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "new-group";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 32, 32, "0 0 32 32");
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
				enableBackground: "new 0 0 32 32",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M15.31 15.67c2.4 0 4.24-1.83 4.24-4.23S17.71 7.2 15.31 7.2s-4.23 1.84-4.23 4.24 1.83 4.23 4.23 4.23zm9.35-.64c1.57 0 2.77-1.2 2.77-2.77s-1.2-2.77-2.77-2.77-2.77 1.2-2.77 2.77 1.2 2.77 2.77 2.77zm-1.72 5.84a7.88 7.88 0 0 0-3.4-2.86l-.01-.01c-1.1-.5-2.5-.85-4.23-.85-1.74 0-3.13.35-4.24.85l-.1.05a9.25 9.25 0 0 0-1.75 1.1 8.2 8.2 0 0 0-1.56 1.72l-.16.27-.01.02a4.5 4.5 0 0 0-.22.4v2.28h16.06v-2.28s-.07-.16-.22-.42l-.16-.27zm1.72-4.35c-1.33 0-2.37.3-3.18.7.71.4 1.29.83 1.74 1.23a8.08 8.08 0 0 1 2.01 2.64l.02.05h4.96v-1.57s-1.3-3.05-5.55-3.05zM9.41 13.78H6.26v-3.15H4.34v3.15H1.2v1.92h3.14v3.14h1.92V15.7h3.15v-1.92z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.NewGroupIcon = d;
}), 98);

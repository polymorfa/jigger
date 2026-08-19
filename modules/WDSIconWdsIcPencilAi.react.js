__d("WDSIconWdsIcPencilAi.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-pencil-ai";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 0 24 24");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [u.jsx("title", { children: c }), u.jsx("path", {
				fill: "currentColor",
				d: "M18.44 14.32a.58.58 0 0 1 1.06 0l.77 1.78c.06.14.16.25.3.3l1.79.77c.47.2.47.86 0 1.06l-1.79.77a.58.58 0 0 0-.3.3l-.78 1.82a.58.58 0 0 1-1.06.01l-.84-1.84a.58.58 0 0 0-.3-.3l-1.73-.75a.58.58 0 0 1 0-1.06l1.8-.77a.58.58 0 0 0 .31-.3l.77-1.8ZM5 18.53h1.42l9.78-9.77-1.42-1.43L5 17.11v1.42Zm-1 2a.97.97 0 0 1-.71-.29.97.97 0 0 1-.29-.7V17.1a1.97 1.97 0 0 1 .58-1.4L16.2 3.1c.2-.19.42-.33.66-.43a2.07 2.07 0 0 1 1.54 0c.25.1.47.25.65.45l1.38 1.4c.2.18.34.4.43.65a2.17 2.17 0 0 1 0 1.51c-.09.25-.23.47-.43.67l-12.6 12.6a1.95 1.95 0 0 1-1.4.57H4ZM15.47 8.06l-.7-.73 1.43 1.43-.72-.7Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

__d("WDSIconIcEmojiObjects.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-emoji-objects";
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
				d: "M12 22a2.25 2.25 0 0 1-2-1.15c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V15.3a7.24 7.24 0 0 1-3.25-6.05 7 7 0 0 1 2.11-5.14A7 7 0 0 1 12 2a7 7 0 0 1 5.14 2.11 7 7 0 0 1 2.11 5.14 7 7 0 0 1-.89 3.5A7.3 7.3 0 0 1 16 15.3v3.55c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59A2.27 2.27 0 0 1 12 22Zm-2-3.15h4v-.9h-4v.9Zm0-1.9h4V16h-4v.95ZM9.8 14h1.45v-2.7L9.57 9.62a.72.72 0 0 1 0-1.04.72.72 0 0 1 1.05 0L12 9.95l1.38-1.38a.72.72 0 0 1 1.04 0 .72.72 0 0 1 0 1.05l-1.67 1.68V14h1.45a5.47 5.47 0 0 0 2.2-1.91c.57-.84.85-1.79.85-2.84 0-1.47-.5-2.7-1.53-3.72A5.07 5.07 0 0 0 12 4c-1.47 0-2.7.5-3.72 1.53a5.07 5.07 0 0 0-1.53 3.72c0 1.05.28 2 .85 2.84.57.84 1.3 1.48 2.2 1.91Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

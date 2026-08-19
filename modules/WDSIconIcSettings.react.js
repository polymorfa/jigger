__d("WDSIconIcSettings.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-settings";
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
				d: "M10.13 22a1 1 0 0 1-.98-.88l-.3-2.32a3.79 3.79 0 0 1-.61-.3c-.2-.12-.38-.24-.57-.38l-2.17.9a.98.98 0 0 1-1.25-.4L2.4 15.4a.94.94 0 0 1-.13-.7.96.96 0 0 1 .38-.6l1.87-1.42a2.39 2.39 0 0 1-.02-.34v-.68c0-.1 0-.22.02-.34L2.65 9.9a.96.96 0 0 1-.38-.6.94.94 0 0 1 .13-.7l1.85-3.22a.98.98 0 0 1 1.25-.4l2.17.9a6.82 6.82 0 0 1 1.18-.68l.3-2.33a1 1 0 0 1 .97-.87h3.76a1 1 0 0 1 .97.88l.3 2.32a5.5 5.5 0 0 1 1.17.68l2.18-.9a.98.98 0 0 1 1.25.4L21.6 8.6c.13.22.17.45.13.7a.96.96 0 0 1-.38.6l-1.88 1.42.03.34v.68c0 .1-.02.22-.05.34l1.88 1.42c.2.15.32.35.37.6.05.25 0 .48-.13.7l-1.84 3.2a1.04 1.04 0 0 1-1.28.42l-2.13-.9a6.84 6.84 0 0 1-1.17.68l-.3 2.32a1 1 0 0 1-.97.88h-3.76Zm.87-2h1.97l.35-2.65a5.6 5.6 0 0 0 2.65-1.53l2.48 1.03.98-1.7-2.16-1.63c.09-.23.15-.47.18-.73a6.15 6.15 0 0 0 0-1.58c-.03-.26-.1-.5-.18-.74l2.16-1.62-.98-1.7-2.47 1.05a5.56 5.56 0 0 0-2.66-1.55L13 4h-1.97l-.35 2.65a5.6 5.6 0 0 0-2.66 1.53L5.55 7.15l-.98 1.7 2.15 1.6a6.06 6.06 0 0 0 0 3.08l-2.15 1.62.98 1.7 2.47-1.05a5.55 5.55 0 0 0 2.66 1.55L11 20Zm1.05-4.5c.97 0 1.8-.34 2.47-1.03A3.37 3.37 0 0 0 15.55 12c0-.97-.34-1.8-1.03-2.47a3.37 3.37 0 0 0-2.47-1.03c-.98 0-1.81.34-2.49 1.03A3.4 3.4 0 0 0 8.55 12c0 .97.34 1.8 1.01 2.47.68.69 1.5 1.03 2.49 1.03Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

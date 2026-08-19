__d("WDSIconIcVolumeOffFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-volume-off-filled";
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
				d: "M16.77 19.57a9.52 9.52 0 0 1-1.12.6.87.87 0 0 1-.76 0 .99.99 0 0 1-.54-.57.85.85 0 0 1 .04-.74c.12-.24.31-.42.56-.54a2.96 2.96 0 0 0 .63-.34L12 14.8v2.77c0 .45-.2.77-.61.94-.41.18-.77.1-1.09-.21L7 15H4a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 14v-4c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h2.2L2.1 4.9a.95.95 0 0 1-.27-.7c0-.28.09-.52.27-.7a.95.95 0 0 1 .7-.28c.28 0 .52.1.7.28l17 17c.18.18.27.42.27.7 0 .28-.09.52-.27.7a.95.95 0 0 1-.7.28.95.95 0 0 1-.7-.28l-2.33-2.32Zm2.83-2.77-1.45-1.45a6.8 6.8 0 0 0 .85-3.38c0-1.38-.37-2.64-1.1-3.78a6.82 6.82 0 0 0-2.95-2.57c-.25-.11-.43-.3-.55-.53a.95.95 0 0 1-.05-.74 1 1 0 0 1 .54-.58.93.93 0 0 1 .79 0 8.83 8.83 0 0 1 5.32 8.2 8.94 8.94 0 0 1-1.4 4.83Zm-3.35-3.35L14 11.2V8.85c0-.2.09-.35.26-.44a.5.5 0 0 1 .52.01c.54.35.97.88 1.27 1.58a5.08 5.08 0 0 1 .39 2.74c-.04.24-.1.48-.19.71ZM12 9.2 9.4 6.6l.9-.9a.91.91 0 0 1 1.09-.21c.4.17.61.48.61.93V9.2Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

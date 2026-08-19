__d("WDSIconIcReceipt.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-receipt";
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
				d: "M3 21.4V2.6c0-.12.05-.2.15-.24.1-.04.2-.02.27.06l.73.73a.48.48 0 0 0 .7 0l.8-.8a.48.48 0 0 1 .7 0l.8.8a.48.48 0 0 0 .7 0l.8-.8a.48.48 0 0 1 .7 0l.8.8a.48.48 0 0 0 .7 0l.8-.8a.48.48 0 0 1 .7 0l.8.8a.48.48 0 0 0 .7 0l.8-.8a.48.48 0 0 1 .7 0l.8.8a.48.48 0 0 0 .7 0l.8-.8a.48.48 0 0 1 .7 0l.8.8a.48.48 0 0 0 .7 0l.72-.73c.09-.08.18-.1.28-.06.1.04.15.12.15.24v18.8c0 .12-.05.2-.15.24-.1.04-.2.02-.28-.07l-.72-.72a.48.48 0 0 0-.7 0l-.8.8a.48.48 0 0 1-.7 0l-.8-.8a.48.48 0 0 0-.7 0l-.8.8a.48.48 0 0 1-.7 0l-.8-.8a.48.48 0 0 0-.7 0l-.8.8a.48.48 0 0 1-.7 0l-.8-.8a.48.48 0 0 0-.7 0l-.8.8a.48.48 0 0 1-.7 0l-.8-.8a.48.48 0 0 0-.7 0l-.8.8a.48.48 0 0 1-.7 0l-.8-.8a.48.48 0 0 0-.7 0l-.73.72c-.08.09-.17.1-.27.07-.1-.04-.15-.12-.15-.24ZM7 17h10c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 17 15H7c-.28 0-.52.1-.71.29A.94.94 0 0 0 6 16c0 .28.1.52.29.71.19.2.43.29.71.29Zm0-4h10c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 17 11H7c-.28 0-.52.1-.71.29A.94.94 0 0 0 6 12c0 .28.1.52.29.71.19.2.43.29.71.29Zm0-4h10c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 17 7H7c-.28 0-.52.1-.71.29A.94.94 0 0 0 6 8c0 .28.1.52.29.71.19.2.43.29.71.29ZM5 19.1h14V4.9H5v14.2Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

__d("WDSIconIcCropRotate.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-crop-rotate";
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
				d: "M12 24c-2.93 0-5.5-.92-7.71-2.76a11.66 11.66 0 0 1-4.11-6.96c-.05-.29 0-.55.16-.78a.9.9 0 0 1 .66-.4 1 1 0 0 1 .75.21c.22.18.35.4.4.69.43 2.18 1.47 4 3.11 5.48a9.7 9.7 0 0 0 5.84 2.47l-.85-.85a.95.95 0 0 1-.28-.7.95.95 0 0 1 .97-.97c.3 0 .53.09.71.27l3.3 3.3c.12.12.15.25.11.4a.36.36 0 0 1-.29.28A10.5 10.5 0 0 1 12 24Zm-3-7c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V9H6a.97.97 0 0 1-.71-.29A.97.97 0 0 1 5 8c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h1V6c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v9h9c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 18 17h-1v1c0 .28-.1.52-.29.71A.94.94 0 0 1 16 19a.97.97 0 0 1-.71-.29A.97.97 0 0 1 15 18v-1H9Zm6-4V9h-4V7h4c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v4h-2ZM12 0c2.93 0 5.5.92 7.71 2.75a11.62 11.62 0 0 1 4.11 6.97c.05.29 0 .55-.16.78a.9.9 0 0 1-.66.4.97.97 0 0 1-.75-.21 1.1 1.1 0 0 1-.4-.69 9.68 9.68 0 0 0-3.11-5.47 9.71 9.71 0 0 0-5.84-2.48l.85.85c.18.18.28.42.28.7a.95.95 0 0 1-.97.98.95.95 0 0 1-.71-.28L9.05 1a.39.39 0 0 1-.11-.4.36.36 0 0 1 .29-.27A10.52 10.52 0 0 1 12 0Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

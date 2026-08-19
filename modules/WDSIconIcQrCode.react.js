__d("WDSIconIcQrCode.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-qr-code";
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
				d: "M3 10V4c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h6c.28 0 .52.1.71.29.2.19.29.43.29.71v6c0 .28-.1.52-.29.71A.94.94 0 0 1 10 11H4a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 10Zm2-1h4V5H5v4ZM3 20v-6c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h6c.28 0 .52.1.71.29.2.19.29.43.29.71v6c0 .28-.1.52-.29.71A.94.94 0 0 1 10 21H4a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 20Zm2-1h4v-4H5v4Zm8-9V4c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h6c.28 0 .52.1.71.29.2.19.29.43.29.71v6c0 .28-.1.52-.29.71A.94.94 0 0 1 20 11h-6a.97.97 0 0 1-.71-.29A.97.97 0 0 1 13 10Zm2-1h4V5h-4v4Zm4 12v-2h2v2h-2Zm-6-6v-2h2v2h-2Zm2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm2 2v-2h2v2h-2Zm2-2v-2h2v2h-2Zm0-4v-2h2v2h-2Zm2 2v-2h2v2h-2Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

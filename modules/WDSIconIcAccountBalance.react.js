__d("WDSIconIcAccountBalance.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-account-balance";
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
				d: "M5 16v-5c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v5c0 .28-.1.52-.29.71A.94.94 0 0 1 6 17a.97.97 0 0 1-.71-.29A.97.97 0 0 1 5 16Zm6 0v-5c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v5c0 .28-.1.52-.29.71A.94.94 0 0 1 12 17a.97.97 0 0 1-.71-.29A.97.97 0 0 1 11 16Zm-8 5a.97.97 0 0 1-.71-.29A.97.97 0 0 1 2 20c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h18c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 21 21H3Zm14-5v-5c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v5c0 .28-.1.52-.29.71A.94.94 0 0 1 18 17a.97.97 0 0 1-.71-.29A.97.97 0 0 1 17 16Zm4-8H2.9a.87.87 0 0 1-.64-.26A.87.87 0 0 1 2 7.1v-.55c0-.18.05-.34.14-.47a.95.95 0 0 1 .36-.33l8.6-4.3a2.09 2.09 0 0 1 1.8 0l8.55 4.27a1 1 0 0 1 .55.91V7c0 .28-.1.52-.29.71A.94.94 0 0 1 21 8ZM6.45 6h11.1L12 3.25 6.45 6Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

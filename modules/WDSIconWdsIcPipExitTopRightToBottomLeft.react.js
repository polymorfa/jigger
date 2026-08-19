__d("WDSIconWdsIcPipExitTopRightToBottomLeft.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-pip-exit-top-right-to-bottom-left";
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
				d: "M4 4q-.82 0-1.41.59Q1.99 5.18 2 6v6q0 .42.29.71.29.3.71.29.42 0 .71-.29.3-.29.29-.71V6h16v12h-8q-.42 0-.71.29-.3.29-.29.71 0 .42.29.71.29.3.71.29h8q.83 0 1.41-.59.6-.59.59-1.41V6q0-.82-.59-1.41-.59-.6-1.41-.59zm10 6.57 2.38-2.37a.96.96 0 0 1 1.4 0q.3.3.3.71 0 .42-.3.71L15.4 12H17q.42 0 .71.29.3.29.29.71 0 .42-.29.71-.29.3-.71.29h-4a1 1 0 0 1-.71-.29A1 1 0 0 1 12 13V9q0-.42.29-.71.29-.3.71-.29.42 0 .71.29.3.29.29.71zM3 15q-.42 0-.71.29-.3.29-.29.71v3q0 .42.29.71.29.3.71.29h5q.42 0 .71-.29.3-.29.29-.71v-3q0-.42-.29-.71A1 1 0 0 0 8 15z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

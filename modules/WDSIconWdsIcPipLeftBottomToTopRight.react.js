__d("WDSIconWdsIcPipLeftBottomToTopRight.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-pip-left-bottom-to-top-right";
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
				d: "M3.15 13.07q-.42 0-.71.29-.3.29-.29.7 0 .44.29.72.29.3.71.29h2.6l-3.6 3.57q-.3.3-.3.72 0 .4.3.7t.71.3q.42 0 .71-.3l3.58-3.6v2.6q0 .44.29.72.29.3.71.29.42 0 .71-.29.3-.3.29-.71v-5q0-.42-.29-.71a1 1 0 0 0-.71-.3zm1-9q-.82 0-1.41.59-.6.59-.59 1.4v4q0 .44.29.72.29.3.71.29.42 0 .71-.29.3-.3.29-.71v-4h7q.42 0 .71-.29.3-.3.29-.71 0-.42-.29-.71a1 1 0 0 0-.71-.3zm16.29 7.29q-.3.29-.29.7v6h-8q-.42 0-.71.3-.3.29-.29.7 0 .44.29.72.29.3.71.29h8q.82 0 1.41-.59.6-.59.59-1.41v-6q0-.42-.29-.71a1 1 0 0 0-.71-.3q-.42 0-.71.3m-5.29-7.3q-.42 0-.71.3-.3.29-.29.7v3q0 .44.29.72.29.3.71.29h6q.42 0 .71-.29.3-.3.29-.71v-3q0-.42-.29-.71a1 1 0 0 0-.71-.3z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

__d("WDSIconIcFlag.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-flag";
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
				d: "M7 14v6c0 .28-.1.52-.29.71A.94.94 0 0 1 6 21a.97.97 0 0 1-.71-.29A.97.97 0 0 1 5 20V5c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h7.18a.99.99 0 0 1 .97.8L14.4 6H19c.28 0 .52.1.71.29.2.19.29.43.29.71v8c0 .28-.1.52-.29.71A.94.94 0 0 1 19 16h-5.18a.96.96 0 0 1-.62-.22.99.99 0 0 1-.35-.58L12.6 14H7Zm7.65 0H18V8h-4.43a.96.96 0 0 1-.62-.22.99.99 0 0 1-.35-.58L12.35 6H7v6h6.43a.99.99 0 0 1 .97.8l.25 1.2Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

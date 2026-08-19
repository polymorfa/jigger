__d("WDSIconIcPushPin.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-push-pin";
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
				d: "M16 5v7l1.7 1.7a1 1 0 0 1 .3.73V15c0 .28-.1.52-.29.71A.94.94 0 0 1 17 16h-4v5.85c0 .28-.1.52-.29.71a.94.94 0 0 1-.71.29.97.97 0 0 1-.71-.29.97.97 0 0 1-.29-.71V16H7a.97.97 0 0 1-.71-.29A.97.97 0 0 1 6 15v-.57a1.03 1.03 0 0 1 .3-.73L8 12V5a.97.97 0 0 1-.71-.29A.97.97 0 0 1 7 4c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h8c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 16 5Zm-7.15 9h6.3L14 12.85V5h-4v7.85L8.85 14Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

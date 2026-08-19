__d("WDSIconWdsIcNewChatFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-new-chat-filled";
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
				fillRule: "evenodd",
				d: "M19.33 4C20.81 4 22 5.2 22 6.67v10.66c0 1.48-1.2 2.67-2.67 2.67H5.67A2.67 2.67 0 0 1 3 17.33V8.85L.94 5.53A1 1 0 0 1 1.8 4h17.54Zm-9.8 9h1.98v1.97c0 .43.25.85.67.98a1 1 0 0 0 1.31-.94v-2.02h1.98c.43 0 .85-.25.98-.67a1 1 0 0 0-.94-1.31h-2.02V9.03c0-.43-.25-.85-.67-.98a1 1 0 0 0-1.31.94v2.02H9.49a1 1 0 0 0-.94 1.31c.13.42.55.67.98.67Z",
				clipRule: "evenodd"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

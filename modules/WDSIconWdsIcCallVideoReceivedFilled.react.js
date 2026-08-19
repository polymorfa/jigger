__d("WDSIconWdsIcCallVideoReceivedFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-call-video-received-filled";
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
				d: "M2.59 19.41c.39.4.86.59 1.41.59h12c.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41v-4.5l3.15 3.15c.17.17.35.2.55.13.2-.09.3-.25.3-.48V7.7c0-.23-.1-.4-.3-.48-.2-.08-.38-.04-.55.13L18 10.5V6c0-.55-.2-1.02-.59-1.41-.39-.4-.86-.59-1.41-.59H4c-.55 0-1.02.2-1.41.59C2.19 4.98 2 5.45 2 6v12c0 .55.2 1.02.59 1.41ZM7.25 16C6.56 16 6 15.44 6 14.75V11a1 1 0 1 1 2 0v1.59l4.3-4.3a1 1 0 1 1 1.4 1.42L9.42 14H11a1 1 0 1 1 0 2H7.25Z",
				clipRule: "evenodd"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

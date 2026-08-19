__d("WDSIconWdsIcSticker.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-sticker";
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
				d: "M12 22a6.97 6.97 0 0 0 4.82-2.02l3.03-3A7.27 7.27 0 0 0 22 11.8V9.27A7.27 7.27 0 0 0 14.73 2H9.27A7.27 7.27 0 0 0 2 9.27v5.46A7.27 7.27 0 0 0 9.27 22H12ZM9.27 4h5.46A5.27 5.27 0 0 1 20 9.08h-.01v2.04c0 .5-.4.91-.9.91h-2.27A4.81 4.81 0 0 0 12 16.85l.02 2.26a.9.9 0 0 1-.68.88H9.27A5.27 5.27 0 0 1 4 14.73V9.27A5.27 5.27 0 0 1 9.27 4Zm4.7 15.55c.03-.14.04-.29.04-.44l-.02-2.26a2.8 2.8 0 0 1 2.82-2.83l2.26.01c.16 0 .3-.01.46-.03-.26.57-.63 1.1-1.09 1.56l-3.03 3c-.42.42-.9.75-1.44 1Z",
				clipRule: "evenodd"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

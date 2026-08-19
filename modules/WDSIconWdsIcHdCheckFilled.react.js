__d("WDSIconWdsIcHdCheckFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-hd-check-filled";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 0 24 24");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [
				u.jsx("title", { children: c }),
				u.jsx("path", {
					fill: "currentColor",
					d: "M14.25 13.5v-3h1c.69 0 1.25.56 1.25 1.25v.5c0 .69-.56 1.25-1.25 1.25h-1Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M4 20c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V6c0-.55.2-1.02.59-1.41C2.98 4.19 3.45 4 4 4h16c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v8.08A6 6 0 0 0 15 20H4Zm3.5-7h2v1.25a.73.73 0 0 0 .75.75.73.73 0 0 0 .75-.75v-4.5a.73.73 0 0 0-.75-.75.73.73 0 0 0-.75.75v1.75h-2V9.75A.73.73 0 0 0 6.75 9a.73.73 0 0 0-.75.75v4.5a.73.73 0 0 0 .75.75.73.73 0 0 0 .75-.75V13Zm6.25-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.5A2.75 2.75 0 0 0 18 12.25v-.5A2.75 2.75 0 0 0 15.25 9h-1.5Z",
					clipRule: "evenodd"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "m22.23 16.3-2.83 2.82-.7-.7a.97.97 0 0 0-.71-.3c-.28 0-.51.1-.71.3a1 1 0 0 0-.28.72c0 .27.1.5.27.68l1.43 1.43a.96.96 0 0 0 1.4 0l3.55-3.52c.2-.2.3-.44.3-.72 0-.27-.1-.51-.3-.71a.97.97 0 0 0-.71-.3c-.28 0-.52.1-.71.3Z"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

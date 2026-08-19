__d("WDSIconWdsIcAccountsCenter.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-accounts-center";
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
				d: "M2.5 20.25v-6c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h6c.28 0 .52.1.71.29.2.19.29.43.29.71v6c0 .28-.1.52-.29.71a.94.94 0 0 1-.71.29h-6a.97.97 0 0 1-.71-.29.97.97 0 0 1-.29-.71Zm2-1h4v-4h-4v4Zm9 1v-6c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h6c.28 0 .52.1.71.29.2.19.29.43.29.71v6c0 .28-.1.52-.29.71a.94.94 0 0 1-.71.29h-6a.97.97 0 0 1-.71-.29.97.97 0 0 1-.29-.71Zm2-1h4v-4h-4v4ZM8 9.75v-6c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h6c.28 0 .52.1.71.29.2.19.29.43.29.71v6c0 .28-.1.52-.29.71a.94.94 0 0 1-.71.29H9a.97.97 0 0 1-.71-.29.97.97 0 0 1-.29-.71Zm2-1h4v-4h-4v4Z",
				clipRule: "evenodd"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

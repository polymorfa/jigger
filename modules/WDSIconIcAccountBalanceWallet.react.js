__d("WDSIconIcAccountBalanceWallet.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-account-balance-wallet";
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
				d: "M5 21c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V5c0-.55.2-1.02.59-1.41C3.98 3.19 4.45 3 5 3h14c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v2.5h-2V5H5v14h14v-2.5h2V19c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H5Zm8-4c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V9c0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59h7c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v6c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59h-7Zm7-2V9h-7v6h7Zm-4-1.5c.42 0 .77-.15 1.06-.44.3-.29.44-.64.44-1.06 0-.42-.15-.77-.44-1.06A1.4 1.4 0 0 0 16 10.5c-.42 0-.77.15-1.06.44-.3.29-.44.64-.44 1.06 0 .42.15.77.44 1.06.29.3.64.44 1.06.44Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

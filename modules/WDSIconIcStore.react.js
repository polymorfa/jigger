__d("WDSIconIcStore.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-store";
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
				d: "M5 4h14c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 19 6H5a.97.97 0 0 1-.71-.29A.97.97 0 0 1 4 5c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29Zm0 16a.97.97 0 0 1-.71-.29A.97.97 0 0 1 4 19v-5h-.17a.96.96 0 0 1-.78-.36c-.2-.24-.27-.52-.2-.84l1-5a.99.99 0 0 1 .35-.58c.18-.14.4-.22.63-.22h14.35a.99.99 0 0 1 .97.8l1 5c.07.32 0 .6-.2.84a.96.96 0 0 1-.77.36H20v5c0 .28-.1.52-.29.71A.94.94 0 0 1 19 20a.97.97 0 0 1-.71-.29A.97.97 0 0 1 18 19v-5h-4v5c0 .28-.1.52-.29.71A.94.94 0 0 1 13 20H5Zm1-2h6v-4H6v4Zm-.95-6h13.9l-.6-3H5.65l-.6 3Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

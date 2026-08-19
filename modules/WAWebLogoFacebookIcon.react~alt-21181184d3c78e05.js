__d("WAWebLogoFacebookIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "logo-facebook";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 28, 28, "0 0 28 28");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				version: "1.1",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "#263238",
						fillOpacity: .3,
						d: "M15.09 14.73 15.1 26H4.33A4.3 4.3 0 0 1 0 21.67V4.33A4.3 4.3 0 0 1 4.33 0h17.34A4.3 4.3 0 0 1 26 4.33v17.34A4.3 4.3 0 0 1 21.67 26h-5.3l-.02-11.27h3.46l.2-1.28h-3.65v-1l.02-2.11c0-1.64.78-2.6 2.58-2.6l1.22-.06v-1.3h-.02l-1.95.03c-2.07 0-3.1 1.03-3.1 3.27l-.03 3.77H11.8v1.28h3.29ZM14.1 25v-9.27h-3.3v-3.28h3.28l.02-2.78c0-2.86 1.57-4.26 4.1-4.26 1.2 0 2.98-.05 2.98-.05v3.28l-2.17.1c-1.4 0-1.63.67-1.63 1.6l-.02 2.11h3.83l-.53 3.28h-3.3V25h4.3A3.3 3.3 0 0 0 25 21.67V4.33A3.3 3.3 0 0 0 21.67 1H4.33A3.3 3.3 0 0 0 1 4.33v17.34A3.3 3.3 0 0 0 4.33 25h9.77Z"
					}),
					u.jsx("path", {
						fill: "#FFFFFF",
						fillOpacity: .6,
						d: "M14.1 25H4.33A3.3 3.3 0 0 1 1 21.67V4.33A3.3 3.3 0 0 1 4.33 1h17.34A3.3 3.3 0 0 1 25 4.33v17.34A3.3 3.3 0 0 1 21.67 25h-4.3l-.02-9.27h3.31l.53-3.28h-3.83l.02-2.11c0-.93.23-1.6 1.63-1.6l2.17-.1V5.36s-1.77.05-2.97.05c-2.54 0-4.1 1.4-4.1 4.26l-.03 2.78H10.8v3.28h3.3V25Z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.LogoFacebookIcon = d;
}), 98);

__d("WAWebWdsPictoMegaphoneAdsIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-picto-megaphone-ads";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 88, 88, "0 0 88 88");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "none",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("circle", {
						cx: 46.07,
						cy: 42.15,
						r: 13.63,
						fill: "#25D366",
						stroke: "#111B21",
						strokeWidth: 1.5
					}),
					u.jsx("path", {
						fill: "#25D366",
						stroke: "#111B21",
						strokeWidth: 1.5,
						d: "M63.93 55.56c.55-.07 1.08.04 1.6.34l.21.15 4.98 3.73.01.01c.57.4.86.9.94 1.51.08.63-.07 1.23-.49 1.81-.4.57-.9.86-1.51.94a2.47 2.47 0 0 1-1.81-.49l-4.97-3.73h-.01v-.01a2.1 2.1 0 0 1-.95-1.51c-.08-.63.07-1.23.5-1.81.4-.57.9-.86 1.5-.94Zm5.37-16.84h6.23a2.31 2.31 0 0 1 2.37 2.38c0 .69-.22 1.23-.67 1.68-.45.45-1 .68-1.7.68H69.3c-.7 0-1.25-.23-1.7-.68-.45-.45-.67-1-.67-1.69 0-.7.22-1.24.67-1.69.45-.45 1-.68 1.7-.68Zm.37-20.58c.6.07 1.1.37 1.51.93.42.59.57 1.18.49 1.82a2.1 2.1 0 0 1-.94 1.5l-.01.02-4.98 3.73c-.58.42-1.18.57-1.8.49a2.1 2.1 0 0 1-1.52-.94 2.47 2.47 0 0 1-.49-1.81c.08-.61.37-1.1.94-1.51l.02-.01 4.98-3.74a2.47 2.47 0 0 1 1.8-.48Zm-19.6 3.26c.53 0 1.1.15 1.7.5a3.16 3.16 0 0 1 1.72 2.93V59.3c0 1.29-.55 2.24-1.72 2.92-.6.36-1.17.51-1.7.51a3.1 3.1 0 0 1-1.45-.38l-.22-.12-14.18-8.57-.18-.1H29v12.98a3.2 3.2 0 0 1-.95 2.38 3.2 3.2 0 0 1-2.38.95 3.2 3.2 0 0 1-2.38-.95 3.2 3.2 0 0 1-.95-2.38V53.56h-4.83a7.11 7.11 0 0 1-5.23-2.18 7.11 7.11 0 0 1-2.18-5.23v-8.16c0-2.05.72-3.78 2.18-5.24a7.11 7.11 0 0 1 5.23-2.18h16.53l.18-.1L48.4 21.9a3.2 3.2 0 0 1 1.67-.5Z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsPictoMegaphoneAdsIcon = d;
}), 98);

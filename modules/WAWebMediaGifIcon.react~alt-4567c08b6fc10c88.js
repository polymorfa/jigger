__d("WAWebMediaGifIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "media-gif";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				version: "1.1",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M17.9 9v2h3.5c.2 0 .5.1.6.2.3.2.4.6.3 1-.1.4-.4.6-.8.6h-3.6v2.7c0 .8-.8 1.2-1.4.9-.3-.2-.5-.5-.5-.9V8.4c0-.7.4-1.1 1.1-1.1H22c.5 0 .9.3 1 .7.1.6-.3 1-.9 1h-4.2ZM7.7 12.8H6.3c-.2 0-.4-.1-.5-.1-.3-.2-.4-.5-.3-.9.1-.3.4-.6.7-.6h2.6c.4 0 .8.4.8.9v2.5c0 .5-.3.8-.7 1.1-1.1.6-2.2 1-3.5.9-1.8-.1-3.3-.9-4-2.7-1.2-2.6.1-5.9 3.3-6.6 1.4-.3 2.8-.1 4.1.7.4.2.5.6.4 1-.1.4-.3.6-.7.7-.3.1-.6 0-.8-.2-.5-.3-1-.5-1.5-.6-1.5-.2-2.9.9-3.1 2.4-.1.6 0 1.2.2 1.8.5 1.2 1.7 1.9 3 1.7.5-.1 1-.2 1.4-.5.1-.1.2-.2.2-.3-.2-.4-.2-.8-.2-1.2Zm5.9-1v3.6c0 .7-.5 1.1-1.2 1-.4-.1-.7-.4-.7-.8V8.3c0-.2 0-.4.1-.6.2-.4.6-.6 1.1-.5.4.1.7.5.7.9v3.7Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MediaGifIcon = d;
}), 98);

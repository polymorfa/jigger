__d("WAWebFollowUpReplyIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "follow-up-reply";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 -960 960 960");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "currentColor",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", { d: "m600-200-56-57 143-143H300q-75 0-127.5-52.5T120-580q0-75 52.5-127.5T300-760h20v80h-20q-42 0-71 29t-29 71q0 42 29 71t71 29h387L544-624l56-56 240 240-240 240Z" })]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.FollowUpReplyIcon = d;
}), 98);

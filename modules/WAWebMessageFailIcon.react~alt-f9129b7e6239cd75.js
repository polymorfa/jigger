__d("WAWebMessageFailIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "message-fail";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 18, "0 0 18 20");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "none",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M3.5 14.74v-7.9L2.11 4.5h12.63c.42 0 .76.34.76.76v9.48c0 .42-.34.76-.76.76H4.26a.76.76 0 0 1-.76-.76ZM2 7.24.25 4.3A.86.86 0 0 1 .97 3h13.77A2.26 2.26 0 0 1 17 5.26v9.48A2.26 2.26 0 0 1 14.74 17H4.26A2.26 2.26 0 0 1 2 14.74v-7.5Zm9.27 5.58L9.5 11.06l-1.77 1.77a.73.73 0 0 1-.53.22.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53c0-.2.07-.38.22-.53L8.44 10 6.67 8.23a.73.73 0 0 1-.23-.53c0-.2.08-.38.23-.53a.72.72 0 0 1 .53-.22c.2 0 .38.07.53.22L9.5 8.94l1.77-1.76a.72.72 0 0 1 .53-.23c.2 0 .38.08.53.22.15.15.22.33.22.54 0 .2-.08.38-.23.53L10.56 10l1.77 1.77c.15.15.22.32.22.53 0 .2-.07.38-.22.52a.73.73 0 0 1-.53.23.72.72 0 0 1-.53-.23Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MessageFailIcon = d;
}), 98);

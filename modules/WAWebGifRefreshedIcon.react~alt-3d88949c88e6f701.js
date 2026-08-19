__d("WAWebGifRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "gif-refreshed";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 20, "0 0 20 20");
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
					d: "M4.25 4.5h11.5c.97 0 1.75.78 1.75 1.75v7.5c0 .97-.78 1.75-1.75 1.75H4.25c-.97 0-1.75-.78-1.75-1.75v-7.5c0-.97.78-1.75 1.75-1.75ZM1 6.25C1 4.45 2.46 3 4.25 3h11.5C17.55 3 19 4.46 19 6.25v7.5c0 1.8-1.46 3.25-3.25 3.25H4.25A3.25 3.25 0 0 1 1 13.75v-7.5Zm9.29 6.54a.73.73 0 0 1-.54.21.73.73 0 0 1-.75-.75v-4.5A.73.73 0 0 1 9.75 7a.73.73 0 0 1 .75.75v4.5c0 .22-.07.4-.21.54ZM7 13H5a.97.97 0 0 1-.71-.29A.97.97 0 0 1 4 12V8c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h2.25a.73.73 0 0 1 .75.75.73.73 0 0 1-.75.75H5.5v3h1v-.75a.73.73 0 0 1 .75-.75.73.73 0 0 1 .75.75V12c0 .28-.1.52-.29.71A.94.94 0 0 1 7 13Zm5.75 0a.73.73 0 0 0 .75-.75V11h1.25a.73.73 0 0 0 .75-.75.73.73 0 0 0-.75-.75H13.5v-1h2.25a.73.73 0 0 0 .75-.75.73.73 0 0 0-.75-.75h-3a.73.73 0 0 0-.75.75v4.5a.73.73 0 0 0 .75.75Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.GifRefreshedIcon = d;
}), 98);

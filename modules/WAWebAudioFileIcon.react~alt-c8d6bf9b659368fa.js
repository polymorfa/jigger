__d("WAWebAudioFileIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "audio-file";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 55, 55, "0 0 55 55");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				version: "1.1",
				x: "0px",
				y: "0px",
				enableBackground: "new 0 0 55 55",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "#FFAD1F",
						d: "M0 0h55v55H0V0z"
					}),
					u.jsx("path", {
						fill: "#FFFFFF",
						d: "M27.5 16c-5.6 0-10 4.4-10 10v7.8c0 1.9 1.4 3.3 3.3 3.3h3.3v-8.9h-4.4V26c0-4.3 3.4-7.8 7.8-7.8s7.8 3.4 7.8 7.8v2.2h-4.4v8.9h3.3c1.9 0 3.3-1.4 3.3-3.3V26c0-5.6-4.4-10-10-10z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.AudioFileIcon = d;
}), 98);

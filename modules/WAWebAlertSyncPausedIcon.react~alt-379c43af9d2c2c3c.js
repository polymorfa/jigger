__d("WAWebAlertSyncPausedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "alert-sync-paused";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 21, 20, "0 0 20 21");
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
					u.jsx("path", {
						fill: "#FFD279",
						fillRule: "evenodd",
						d: "M10 .5a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 11a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1 1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm-1 2v2h2v-2H9Z",
						clipRule: "evenodd"
					}),
					u.jsx("path", {
						fill: "#667781",
						d: "M9 13.5v2h2v-2H9Z"
					}),
					u.jsx("path", {
						fill: "#54656F",
						d: "M10 11.5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1 1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.AlertSyncPausedIcon = d;
}), 98);

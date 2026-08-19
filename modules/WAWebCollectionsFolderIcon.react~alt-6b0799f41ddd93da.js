__d("WAWebCollectionsFolderIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "collections-folder";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 40, 40, "0 0 56 56");
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
					u.jsx("g", {
						fill: "currentColor",
						clipPath: "url(#WAWebCollectionsFolderIcon__a)",
						children: u.jsx("path", { d: "M4.48 16.8c0-2.47 2-4.48 4.48-4.48h35.85a4.49 4.49 0 0 1 4.49 4.49v28a4.49 4.49 0 0 1-4.49 4.49H8.96a4.49 4.49 0 0 1-4.48-4.49v-28Zm4.48-7.84c0-2.47 2-4.48 4.48-4.48h26.9c2.47 0 4.47 2 4.47 4.48H8.96Z" })
					}),
					u.jsx("defs", { children: u.jsx("clipPath", {
						id: "WAWebCollectionsFolderIcon__a",
						children: u.jsx("path", {
							fill: "white",
							d: "M0 0h44.81v44.81H0z",
							transform: "translate(4.48 4.48)"
						})
					}) })
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.CollectionsFolderIcon = d;
}), 98);

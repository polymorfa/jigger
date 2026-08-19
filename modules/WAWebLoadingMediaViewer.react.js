__d("WAWebLoadingMediaViewer.react", [
	"WAWebFbtCommon",
	"WAWebLazyLoadLoading.react",
	"WAWebMediaPanelHeader.styles",
	"WAWebMediaViewerModalStyle",
	"WAWebMenuBar.react",
	"WAWebModalManager",
	"WAWebXViewerIcon.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = { overlay: {
		boxSizing: "x9f619",
		height: "x5yr21d",
		left: "xu96u03",
		position: "xixxii4",
		top: "x13vifvy",
		width: "xh8yej3",
		$$css: !0
	} };
	function d(t) {
		var n = t.error, a = u.jsx(o("WAWebXViewerIcon.react").XViewerIcon, {}), i = function() {
			return o("WAWebModalManager").ModalManager.closeMedia();
		};
		return u.jsx("div", { children: u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.overlay, r("WAWebMediaViewerModalStyle").mediaViewer), {
			"data-animate-media-viewer": !0,
			children: [u.jsxs("div", {
				className: r("WAWebMediaPanelHeader.styles").mediaPanelHeader,
				children: [u.jsx("div", { className: r("WAWebMediaPanelHeader.styles").info }), u.jsx("div", {
					className: r("WAWebMediaPanelHeader.styles").mediaPanelTools,
					children: u.jsx(o("WAWebMenuBar.react").MenuBar, {
						theme: "strong",
						children: u.jsx(o("WAWebMenuBar.react").MenuBarItem, {
							testid: "btn-close",
							icon: a,
							title: r("WAWebFbtCommon")("Close"),
							onClick: i
						})
					}, "media-panel-header")
				})]
			}), u.jsx("div", {
				className: r("WAWebMediaViewerModalStyle").mediaContent,
				dir: "ltr",
				onClick: i,
				children: u.jsx("div", {
					className: r("WAWebMediaViewerModalStyle").media,
					children: u.jsx(r("WAWebLazyLoadLoading.react"), { error: n })
				})
			})]
		})) });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

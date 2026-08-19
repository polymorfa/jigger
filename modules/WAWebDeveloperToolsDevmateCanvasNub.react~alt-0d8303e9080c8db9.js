__d("WAWebDeveloperToolsDevmateCanvasNub.react", [
	"DevmateDark.svg.react",
	"DevmateLight.svg.react",
	"ReactDOM",
	"WAWebDeveloperResizableDraggableModal.react",
	"WAWebDeveloperToolNub.react",
	"WAWebDevmateCanvas.react",
	"WAWebErrorBoundary.react",
	"WAWebFlex.react",
	"WAWebThemeContext",
	"WDSButton.react",
	"WDSText.react",
	"react",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = { canvas: {
		height: "x5yr21d",
		width: "xh8yej3",
		backgroundColor: "x1280gxy",
		$$css: !0
	} };
	function d() {
		var e = r("useWAWebToggle")(!1), t = e[0], n = e[1], a = u(0), i = a[0], l = a[1], d = function() {
			l(function(e) {
				return e + 1;
			});
		}, _ = function() {
			return s.jsx(p, { onReload: d });
		};
		return s.jsxs(s.Fragment, { children: [s.jsx(r("WAWebDeveloperToolNub.react"), {
			testID: "devmate-canvas-nub",
			icon: s.jsx(m, {}),
			title: "Devmate Canvas",
			onClick: n
		}), t && o("ReactDOM").createPortal(s.jsx(r("WAWebDeveloperResizableDraggableModal.react"), {
			title: "Devmate Canvas",
			onClose: n,
			modalId: "devmate-canvas-body-key",
			children: s.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: c.canvas,
				children: s.jsx(o("WAWebFlex.react").FlexColumn, {
					xstyle: c.canvas,
					children: s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
						name: "devmate-canvas",
						fallback: _,
						children: s.jsx(r("WAWebDevmateCanvas.react"), {})
					}, i)
				}, "canvas")
			})
		}), document.body)] });
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m() {
		var e = o("WAWebThemeContext").useIsDarkTheme();
		return e ? s.jsx(r("DevmateDark.svg.react"), {
			width: 20,
			height: 20
		}) : s.jsx(r("DevmateLight.svg.react"), {
			width: 20,
			height: 20
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.onReload;
		return s.jsxs("div", { children: [s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			children: "An error occurred."
		}), s.jsx(r("WDSButton.react"), {
			label: "Reload",
			variant: "filled",
			size: "medium",
			type: "default",
			onPress: t,
			widthMode: "flexible"
		})] });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = d;
}), 98);

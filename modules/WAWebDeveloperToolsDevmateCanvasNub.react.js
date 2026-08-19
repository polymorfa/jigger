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
	"react-compiler-runtime",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = { canvas: {
		height: "x5yr21d",
		width: "xh8yej3",
		backgroundColor: "x1280gxy",
		$$css: !0
	} };
	function d() {
		var e = o("react-compiler-runtime").c(11), t = r("useWAWebToggle")(!1), n = t[0], a = t[1], i = u(0), l = i[0], d = i[1], f;
		if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
			var g = function() {
				d(m);
			};
			f = function() {
				return s.jsx(_, { onReload: g });
			}, e[0] = f;
		} else f = e[0];
		var h = f, y;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (y = s.jsx(p, {}), e[1] = y) : y = e[1];
		var C;
		e[2] !== a ? (C = s.jsx(r("WAWebDeveloperToolNub.react"), {
			testID: "devmate-canvas-nub",
			icon: y,
			title: "Devmate Canvas",
			onClick: a
		}), e[2] = a, e[3] = C) : C = e[3];
		var b;
		e[4] !== n || e[5] !== l || e[6] !== a ? (b = n && o("ReactDOM").createPortal(s.jsx(r("WAWebDeveloperResizableDraggableModal.react"), {
			title: "Devmate Canvas",
			onClose: a,
			modalId: "devmate-canvas-body-key",
			children: s.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: c.canvas,
				children: s.jsx(o("WAWebFlex.react").FlexColumn, {
					xstyle: c.canvas,
					children: s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
						name: "devmate-canvas",
						fallback: h,
						children: s.jsx(r("WAWebDevmateCanvas.react"), {})
					}, l)
				}, "canvas")
			})
		}), document.body), e[4] = n, e[5] = l, e[6] = a, e[7] = b) : b = e[7];
		var v;
		return e[8] !== C || e[9] !== b ? (v = s.jsxs(s.Fragment, { children: [C, b] }), e[8] = C, e[9] = b, e[10] = v) : v = e[10], v;
	}
	function m(e) {
		return e + 1;
	}
	function p() {
		var e = o("react-compiler-runtime").c(2), t = o("WAWebThemeContext").useIsDarkTheme(), n;
		return e[0] !== t ? (n = t ? s.jsx(r("DevmateDark.svg.react"), {
			width: 20,
			height: 20
		}) : s.jsx(r("DevmateLight.svg.react"), {
			width: 20,
			height: 20
		}), e[0] = t, e[1] = n) : n = e[1], n;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(3), n = e.onReload, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			children: "An error occurred."
		}), t[0] = a) : a = t[0];
		var i;
		return t[1] !== n ? (i = s.jsxs("div", { children: [a, s.jsx(r("WDSButton.react"), {
			label: "Reload",
			variant: "filled",
			size: "medium",
			type: "default",
			onPress: n,
			widthMode: "flexible"
		})] }), t[1] = n, t[2] = i) : i = t[2], i;
	}
	l.default = d;
}), 98);

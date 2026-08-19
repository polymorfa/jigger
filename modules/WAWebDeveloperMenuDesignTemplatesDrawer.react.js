__d("WAWebDeveloperMenuDesignTemplatesDrawer.react", [
	"WAWebModalManager",
	"WDSButton.react",
	"WDSIconIcArrowBack.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = { className: "xixxii4 x13vifvy x1ey2m1c x1o0tod xtijo5x xfo81ep x78zum5 xdt5ytf x1280gxy" }, e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = s.jsxs("div", babelHelpers.extends({}, t, {
			"data-testid": "design-templates-drawer",
			children: [s.jsxs("div", {
				className: "x78zum5 x6s0dn4 x1s70e7g x1p57kb1 xvpt6g3 x1phvje8 xcldk2z xso031l x1q0q8m5 x120ee7l x2lah0s",
				children: [s.jsx(r("WDSButton.react"), {
					variant: "borderless",
					Icon: r("WDSIconIcArrowBack.react"),
					"aria-label": "Back",
					onPress: o("WAWebModalManager").closeModalManager,
					testid: "btn-back-design-templates"
				}), s.jsx(r("WDSText.react"), {
					type: "Headline2",
					colorName: "contentDefault",
					children: "Business Broadcast Production Template"
				})]
			}), s.jsx("div", { className: "x1iyjqo2 xw2csxc x1odjw0f" })]
		})), e[1] = n) : n = e[1], n;
	}
	l.default = u;
}), 98);

__d("WAWebLoadingDrawer.react", [
	"CometHeroHoldTrigger.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebLazyLoadLoading.react",
	"react",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"title",
		"headerType",
		"description",
		"cancellable",
		"testid"
	], s, u = s || (s = o("react"));
	function c(t) {
		var n = t.title, a = t.headerType, i = a === void 0 ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL : a, l = t.description, s = t.cancellable, c = s === void 0 ? !0 : s, d = t.testid, m = babelHelpers.objectWithoutPropertiesLoose(t, e), p = r("useWAWebUIM")(), _ = function() {
			p == null || p.requestDismiss();
		};
		return u.jsxs(r("WAWebDrawer.react"), {
			disableNavigationLogging: !0,
			testid: d,
			children: [
				u.jsx(r("CometHeroHoldTrigger.react"), {
					description: l != null ? l : "WAWebLoadingDrawer",
					hold: !0
				}),
				u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: n,
					type: i,
					onCancel: c ? _ : void 0
				}),
				u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx(r("WAWebLazyLoadLoading.react"), babelHelpers.extends({}, m)) })
			]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);

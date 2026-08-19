__d("WAWebTeeDebugDrawer.react", [
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebTeeDebugPanel.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react"));
	function c(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.onBack;
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "settings",
			testid: "tee_debug_drawer",
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: "TEE Playground",
				onBack: i,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx(r("WAWebTeeDebugPanel.react"), {}) })]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);

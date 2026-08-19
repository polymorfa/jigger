__d("WAWebTeeDebugDrawer.react", [
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebTeeDebugPanel.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(9), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.onBack, c;
		n[3] !== s ? (c = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: "TEE Playground",
			onBack: s,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), n[3] = s, n[4] = c) : c = n[4];
		var d;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (d = u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx(r("WAWebTeeDebugPanel.react"), {}) }), n[5] = d) : d = n[5];
		var m;
		return n[6] !== i || n[7] !== c ? (m = u.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			theme: "settings",
			testid: "tee_debug_drawer",
			children: [c, d]
		}), n[6] = i, n[7] = c, n[8] = m) : m = n[8], m;
	}
	l.default = c;
}), 98);

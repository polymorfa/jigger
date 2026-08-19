__d("WAWebDeveloperMenuVoipWasmSamplesDrawer.react", [
	"fbt",
	"WAWebCellV2.react",
	"WAWebDrawer.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebFlex.react",
	"WAWebText.react",
	"WAWebUnstyledButton.react",
	"WAWebVoipWebWasmSamples",
	"nullthrows",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u.useState, m = { container: {
		textAlign: "x1yc453h",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		display: "x78zum5",
		flexGrow: "x1iyjqo2",
		flexShrink: "x2lah0s",
		flexBasis: "xdl72j9",
		alignSelf: "xkh2ocl",
		width: "xh8yej3",
		$$css: !0
	} };
	function p(t) {
		var n = o("react-compiler-runtime").c(12), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.onBack, p = d(null), _ = p[0], f = p[1], g;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), n[3] = g) : g = n[3];
		var h;
		n[4] !== u ? (h = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: g,
			onBack: u,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), n[4] = u, n[5] = h) : h = n[5];
		var y;
		n[6] !== _ ? (y = Object.keys(o("WAWebVoipWebWasmSamples").WAWebVoipWebWasmSamples).map(function(e) {
			var t = o("WAWebVoipWebWasmSamples").WAWebVoipWebWasmSamples[r("nullthrows")(o("WAWebVoipWebWasmSamples").WasmSamplesList.cast(e))];
			return c.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				children: c.jsx(o("WAWebFlex.react").FlexItem, {
					isFlexContainer: !0,
					grow: 1,
					children: c.jsx(r("WAWebUnstyledButton.react"), {
						role: "listitem",
						xstyle: m.container,
						onClick: function() {
							f(e), o("WAWebDrawerManager").DrawerManager.openDrawerMid(c.jsx(t, {}));
						},
						children: c.jsx(r("WAWebCellV2.react"), {
							colorScheme: "lighter",
							size: "medium",
							material: !0,
							primary: c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: e }),
							active: e === _,
							tabIndex: -1,
							isRefresh: !0
						})
					})
				})
			}, e);
		}), n[6] = _, n[7] = y) : y = n[7];
		var C;
		return n[8] !== i || n[9] !== h || n[10] !== y ? (C = c.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			theme: "settings",
			testid: "voip-wasm-samples-drawer",
			children: [h, y]
		}), n[8] = i, n[9] = h, n[10] = y, n[11] = C) : C = n[11], C;
	}
	l.default = p;
}), 226);

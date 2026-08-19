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
	"react"
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
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.onBack, l = d(null), u = l[0], p = l[1];
		return c.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "settings",
			testid: "voip-wasm-samples-drawer",
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				onBack: i,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), Object.keys(o("WAWebVoipWebWasmSamples").WAWebVoipWebWasmSamples).map(function(e) {
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
								p(e), o("WAWebDrawerManager").DrawerManager.openDrawerMid(c.jsx(t, {}));
							},
							children: c.jsx(r("WAWebCellV2.react"), {
								colorScheme: "lighter",
								size: "medium",
								material: !0,
								primary: c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: e }),
								active: e === u,
								tabIndex: -1,
								isRefresh: !0
							})
						})
					})
				}, e);
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);

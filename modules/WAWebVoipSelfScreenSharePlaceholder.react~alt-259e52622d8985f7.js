__d("WAWebVoipSelfScreenSharePlaceholder.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebVoipStackInterface",
	"WDSButton.react",
	"WDSIconIcStopScreenShare.react",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useCallback, d = {
		container: {
			backgroundColor: "x16w0wmm",
			height: "x5yr21d",
			width: "xh8yej3",
			$$css: !0
		},
		textContainer: {
			marginBottom: "x1ua1l7f",
			$$css: !0
		}
	};
	function m() {
		var e = c(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
			(e == null ? void 0 : e.type) === "web" && (yield e.stopScreenShare());
		}), []);
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: d.container,
			testid: "voip-self-screen-share-placeholder",
			children: [u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: d.textContainer,
				children: u.jsx(r("WDSText.react"), {
					type: "Headline2",
					colorName: "contentDefault",
					preserveNewLines: !1,
					children: s._(
						/*BTDS*/
						""
					)
				})
			}), u.jsx(r("WDSButton.react"), {
				type: "destructive",
				variant: "filled",
				onPress: function() {
					e();
				},
				Icon: r("WDSIconIcStopScreenShare.react"),
				size: "medium",
				label: s._(
					/*BTDS*/
					""
				)
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);

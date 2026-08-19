__d("WAWebBusinessGoogleProfileConnectionHeader.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebSearchPluginGoogleIconIcon.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		container: {
			boxSizing: "x9f619",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "x12w63v0",
			width: "xh8yej3",
			$$css: !0
		},
		logoContainer: {
			height: "xzpcc6d",
			width: "x1xvr5cs",
			$$css: !0
		},
		textContainer: {
			minWidth: "xeuugli",
			$$css: !0
		}
	};
	function d() {
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 12,
			testid: "biz-profile-google-connection-header",
			xstyle: c.container,
			children: [u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				testid: "biz-profile-google-connection-logo",
				xstyle: c.logoContainer,
				children: u.jsx(o("WAWebSearchPluginGoogleIconIcon.react").SearchPluginGoogleIconIcon, {
					height: 24,
					width: 24
				})
			}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: c.textContainer,
				children: [u.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					testid: "biz-profile-google-connection-status",
					type: "Body3",
					children: s._(
						/*BTDS*/
						""
					)
				}), u.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					testid: "biz-profile-google-connection-title",
					type: "Body1",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

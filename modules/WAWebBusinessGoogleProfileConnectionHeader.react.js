__d("WAWebBusinessGoogleProfileConnectionHeader.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebSearchPluginGoogleIconIcon.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
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
		var e = o("react-compiler-runtime").c(3), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			testid: "biz-profile-google-connection-logo",
			xstyle: c.logoContainer,
			children: u.jsx(o("WAWebSearchPluginGoogleIconIcon.react").SearchPluginGoogleIconIcon, {
				height: 24,
				width: 24
			})
		}), e[0] = t) : t = e[0];
		var n;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			testid: "biz-profile-google-connection-status",
			type: "Body3",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[1] = n) : n = e[1];
		var a;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 12,
			testid: "biz-profile-google-connection-header",
			xstyle: c.container,
			children: [t, u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: c.textContainer,
				children: [n, u.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					testid: "biz-profile-google-connection-title",
					type: "Body1",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			})]
		}), e[2] = a) : a = e[2], a;
	}
	l.default = d;
}), 226);

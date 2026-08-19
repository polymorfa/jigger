__d("WAWebWDSIconBenchmark.react", [
	"fbt",
	"WAWebModalManager",
	"WDSAllGeneratedIcons",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"WDSThemes",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = { overlay: {
		position: "xixxii4",
		top: "x13vifvy",
		bottom: "x1ey2m1c",
		insetInlineStart: "x1o0tod",
		insetInlineEnd: "xtijo5x",
		left: null,
		right: null,
		zIndex: "xfo81ep",
		display: "x78zum5",
		flexDirection: "xdt5ytf",
		backgroundColor: "x1280gxy",
		$$css: !0
	} };
	function p() {
		var t = d(!0), n = t[0], a = t[1], i = function() {
			a(function(e) {
				return !e;
			});
		};
		return c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSThemes").WDSLightTheme, m.overlay), {
			"data-testid": "wds_icon_benchmark_overlay",
			children: [
				c.jsxs("div", {
					className: "x78zum5 x6s0dn4 x1qughib xyamay9 x1l90r2v x106a9eq x1xnnf8n xso031l x1q0q8m5 x120ee7l x2lah0s",
					children: [c.jsx(r("WDSText.react"), {
						type: "Headline2",
						colorName: "contentDefault",
						children: s._(
							/*BTDS*/
							""
						)
					}), c.jsx(r("WDSButton.react"), {
						variant: "borderless",
						Icon: r("WDSIconIcClose.react"),
						"aria-label": s._(
							/*BTDS*/
							""
						),
						onPress: _,
						testid: "wds_icon_benchmark_close_button"
					})]
				}),
				c.jsxs("div", {
					className: "x78zum5 x6s0dn4 x40hh3e xz9dl7a xsag5q8 x106a9eq x1xnnf8n xso031l x1q0q8m5 x120ee7l x2lah0s",
					children: [c.jsx(r("WDSText.react"), {
						type: "Body2Emphasized",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							"",
							[s._param("count", r("WDSAllGeneratedIcons").length)]
						)
					}), c.jsx("div", {
						className: "xvc5jky",
						children: n ? c.jsx(r("WDSButton.react"), {
							variant: "filled",
							type: "destructive",
							label: s._(
								/*BTDS*/
								""
							),
							onPress: i,
							testid: "wds_icon_benchmark_unmount_button"
						}) : c.jsx(r("WDSButton.react"), {
							variant: "filled",
							label: s._(
								/*BTDS*/
								""
							),
							onPress: i,
							testid: "wds_icon_benchmark_mount_button"
						})
					})]
				}),
				c.jsx("div", {
					className: "x1iyjqo2 xw2csxc x1odjw0f xyamay9 xv54qhq x1l90r2v xf7dkkf",
					children: n ? c.jsx("div", {
						className: "x78zum5 x1a02dak x1o0lzc5 xq5c7ks x14ug900",
						children: r("WDSAllGeneratedIcons").map(function(e) {
							var t = e.Component, n = e.name;
							return c.jsx(t, {}, n);
						})
					}) : null
				})
			]
		}));
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		o("WAWebModalManager").ModalManager.close();
	}
	l.default = p;
}), 226);

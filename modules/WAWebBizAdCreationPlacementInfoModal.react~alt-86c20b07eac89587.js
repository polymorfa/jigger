__d("WAWebBizAdCreationPlacementInfoModal.react", [
	"fbt",
	"WAWebBizInfoModalShell.react",
	"WAWebFlex.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { platformSection: {
		rowGap: "x129bwdz",
		$$css: !0
	} };
	function d() {
		var e;
		return u.jsxs(r("WAWebBizInfoModalShell.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			children: [
				u.jsx(e = r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx(e, {
					colorName: "contentDeemphasized",
					type: "Body2",
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: c.platformSection,
					children: [u.jsx(e, {
						colorName: "contentDefault",
						type: "Body1",
						children: s._(
							/*BTDS*/
							""
						)
					}), u.jsx(e, {
						colorName: "contentDeemphasized",
						type: "Body3",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				}),
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: c.platformSection,
					children: [u.jsx(e, {
						colorName: "contentDefault",
						type: "Body1",
						children: s._(
							/*BTDS*/
							""
						)
					}), u.jsx(e, {
						colorName: "contentDeemphasized",
						type: "Body3",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				})
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

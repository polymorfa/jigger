__d("WAWebBizAdCreationBudgetInfoModal.react", [
	"fbt",
	"WAWebBizInfoModalShell.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { section: {
		rowGap: "x129bwdz",
		$$css: !0
	} }, d = "https://www.facebook.com/business/help/287134230502229", m = "https://www.facebook.com/business/help/675615482516035";
	function p() {
		return u.jsxs(r("WAWebBizInfoModalShell.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			children: [u.jsxs(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: [
					s._(
						/*BTDS*/
						""
					),
					" ",
					u.jsx(r("WDSTextualLink.react"), {
						href: d,
						children: r("WAWebFbtCommon")("Learn more")
					})
				]
			}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: c.section,
				children: [u.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body1",
					children: s._(
						/*BTDS*/
						""
					)
				}), u.jsxs(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body3",
					children: [
						s._(
							/*BTDS*/
							""
						),
						" ",
						u.jsx(r("WDSTextualLink.react"), {
							href: m,
							children: r("WAWebFbtCommon")("Learn more")
						})
					]
				})]
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);

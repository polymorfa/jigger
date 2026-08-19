__d("WAWebBizAdCreationAudienceInfoModal.react", [
	"fbt",
	"WAWebBizInfoModalShell.react",
	"WAWebExternalLink.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = "https://www.facebook.com/business/help/273363992030035", d = "https://www.facebook.com/business/help/717368264947302", m = "https://www.facebook.com/business/help/1665333080167380", p = { section: {
		rowGap: "x129bwdz",
		$$css: !0
	} };
	function _() {
		var e, t = function() {
			o("WAWebExternalLink.react").openExternalLink(c);
		}, n = function() {
			o("WAWebExternalLink.react").openExternalLink(d);
		}, a = function() {
			o("WAWebExternalLink.react").openExternalLink(m);
		};
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
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: p.section,
					children: [u.jsx(e, {
						colorName: "contentDefault",
						type: "Body1",
						children: s._(
							/*BTDS*/
							""
						)
					}), u.jsxs(e, {
						colorName: "contentDeemphasized",
						type: "Body3",
						children: [
							s._(
								/*BTDS*/
								""
							),
							" ",
							u.jsx(r("WDSTextualLink.react"), {
								onClick: t,
								children: r("WAWebFbtCommon")("Learn more")
							})
						]
					})]
				}),
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: p.section,
					children: [u.jsx(e, {
						colorName: "contentDefault",
						type: "Body1",
						children: s._(
							/*BTDS*/
							""
						)
					}), u.jsxs(e, {
						colorName: "contentDeemphasized",
						type: "Body3",
						children: [
							s._(
								/*BTDS*/
								""
							),
							" ",
							u.jsx(r("WDSTextualLink.react"), {
								onClick: n,
								children: r("WAWebFbtCommon")("Learn more")
							})
						]
					})]
				}),
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: p.section,
					children: [u.jsx(e, {
						colorName: "contentDefault",
						type: "Body1",
						children: s._(
							/*BTDS*/
							""
						)
					}), u.jsxs(e, {
						colorName: "contentDeemphasized",
						type: "Body3",
						children: [
							s._(
								/*BTDS*/
								""
							),
							" ",
							u.jsx(r("WDSTextualLink.react"), {
								onClick: a,
								children: r("WAWebFbtCommon")("Learn more")
							})
						]
					})]
				})
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);

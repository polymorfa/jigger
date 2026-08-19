__d("WAWebUnifiedResponseCitationRenderers.react", [
	"WAWebImg.react",
	"WDSIconIcLanguage.react",
	"WDSIconWdsIcLogoFacebookFill.react",
	"WDSIconWdsIcLogoInstagram.react",
	"WDSIconWdsIcLogoThreads.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		wordBreakNormal: {
			overflowWrap: "x1mzt3pk",
			wordBreak: "x1lldw8n",
			$$css: !0
		},
		link: {
			textDecoration: "x1hl2dhg",
			":hover_textDecoration": "xt0b8zv",
			$$css: !0
		},
		citationIcon: {
			color: "xhslqc4",
			$$css: !0
		}
	}, c = {
		height: 12,
		iconXstyle: u.citationIcon,
		viewBox: {
			x: 0,
			y: 0,
			width: 24,
			height: 24
		},
		width: 12
	}, d = {
		facebookIcon: s.jsx(r("WDSIconWdsIcLogoFacebookFill.react"), babelHelpers.extends({}, c)),
		instagramIcon: s.jsx(r("WDSIconWdsIcLogoInstagram.react"), babelHelpers.extends({}, c)),
		threadsIcon: s.jsx(r("WDSIconWdsIcLogoThreads.react"), babelHelpers.extends({}, c))
	}, m = /^https:\/\/[^/]*\.whatsapp\.(net|com)\//;
	function p() {
		return {
			citationIconRenderers: d,
			imageNodeRenderer: function(t) {
				var e = t.alt, n = t.isThirdParty, r = t.sourceType, o = t.url;
				return s.jsx(f, {
					alt: e,
					isThirdParty: n,
					sourceType: r,
					url: o
				});
			},
			textNodeRenderer: function(t) {
				var e = t.content, n = t.contentType;
				return s.jsx(_, {
					content: e,
					contentType: n
				});
			}
		};
	}
	function _(e) {
		var t = e.content, n = e.contentType, o = n === "link" ? "contentExternalLink" : n === "citation_inline" || n === "citation_subtitle" ? "contentDeemphasized" : n === "modalTrigger" ? "contentActionEmphasized" : "contentDefault", a = n === "citation_inline" ? "Body3Emphasized" : n === "citation_subtitle" ? "Body3" : n === "modalTrigger" ? "Body2Emphasized" : "Body2", i = n === "citation_title" || n === "citation_subtitle" ? 1 : void 0;
		return s.jsx(r("WDSText.react"), {
			type: a,
			colorName: o,
			maxLines: i,
			xstyle: [u.wordBreakNormal, (n === "modalTrigger" || n === "citation_inline") && u.link],
			children: t
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.alt, n = e.isThirdParty, o = e.sourceType, a = e.url;
		return m.test(a) || o != null && n === !1 ? s.jsx(r("WAWebImg.react"), {
			src: a,
			alt: t,
			className: "xt8t1vi x1xc408v x129tdwq x15urzxu xc9qbxq xl1xv1r x14qfxbe",
			renderError: function() {
				return s.jsx(r("WDSIconIcLanguage.react"), { height: 36 });
			}
		}) : s.jsx(r("WDSIconIcLanguage.react"), { height: 36 });
	}
	f.displayName = f.name + " [from " + i.id + "]", l.getUnifiedResponseCitationRenderers = p, l.WAWebUnifiedResponseTextNodeRenderer = _, l.WAWebUnifiedResponseFaviconRenderer = f;
}), 98);

__d("WAWebUnifiedResponseCitationRenderers.react", [
	"WAWebImg.react",
	"WDSIconIcLanguage.react",
	"WDSIconWdsIcLogoFacebookFill.react",
	"WDSIconWdsIcLogoInstagram.react",
	"WDSIconWdsIcLogoThreads.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(8), n = e.content, a = e.contentType, i = a === "link" ? "contentExternalLink" : a === "citation_inline" || a === "citation_subtitle" ? "contentDeemphasized" : a === "modalTrigger" ? "contentActionEmphasized" : "contentDefault", l = a === "citation_inline" ? "Body3Emphasized" : a === "citation_subtitle" ? "Body3" : a === "modalTrigger" ? "Body2Emphasized" : "Body2", c = a === "citation_title" || a === "citation_subtitle" ? 1 : void 0, d = (a === "modalTrigger" || a === "citation_inline") && u.link, m;
		t[0] !== d ? (m = [u.wordBreakNormal, d], t[0] = d, t[1] = m) : m = t[1];
		var p;
		return t[2] !== i || t[3] !== n || t[4] !== c || t[5] !== m || t[6] !== l ? (p = s.jsx(r("WDSText.react"), {
			type: l,
			colorName: i,
			maxLines: c,
			xstyle: m,
			children: n
		}), t[2] = i, t[3] = n, t[4] = c, t[5] = m, t[6] = l, t[7] = p) : p = t[7], p;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(5), n = e.alt, a = e.isThirdParty, i = e.sourceType, l = e.url;
		if (m.test(l) || i != null && a === !1) {
			var u;
			t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = "xt8t1vi x1xc408v x129tdwq x15urzxu xc9qbxq xl1xv1r x14qfxbe", t[0] = u) : u = t[0];
			var c;
			return t[1] !== n || t[2] !== l ? (c = s.jsx(r("WAWebImg.react"), {
				src: l,
				alt: n,
				className: u,
				renderError: g
			}), t[1] = n, t[2] = l, t[3] = c) : c = t[3], c;
		}
		var d;
		return t[4] === Symbol.for("react.memo_cache_sentinel") ? (d = s.jsx(r("WDSIconIcLanguage.react"), { height: 36 }), t[4] = d) : d = t[4], d;
	}
	function g() {
		return s.jsx(r("WDSIconIcLanguage.react"), { height: 36 });
	}
	g.displayName = g.name + " [from " + i.id + "]", l.getUnifiedResponseCitationRenderers = p, l.WAWebUnifiedResponseTextNodeRenderer = _, l.WAWebUnifiedResponseFaviconRenderer = f;
}), 98);

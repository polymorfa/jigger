__d("WAWebBotSourcesDrawer.react", [
	"WAWebExternalLink.react",
	"WAWebUnifiedResponseCitationRenderers.react",
	"WAWebUnifiedResponseContentDrawer.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.sources, n = s.jsx("div", {
			className: "x78zum5 xdt5ytf x1f0uite",
			"data-testid": "bot-sources-drawer-list",
			children: t.map(function(e, t) {
				var n;
				return s.jsx(d, { source: e }, ((n = e.source_url) != null ? n : "") + "-" + t);
			})
		});
		return s.jsx(o("WAWebUnifiedResponseContentDrawer.react").WAWebUnifiedResponseContentDrawer, { contentView: {
			content: n,
			contentType: "citations"
		} });
	}
	u.displayName = u.name + " [from " + i.id + "]";
	function c(e) {
		return String(e.source_type) === "THIRD_PARTY";
	}
	function d(e) {
		var t, n, r, a, i = e.source;
		return s.jsxs(o("WAWebExternalLink.react").ExternalLinkEl, {
			href: (t = i.source_url) != null ? t : "",
			className: "x6s0dn4 xhslqc4 x1aj3ljl x78zum5 x1q0g3np x1hl2dhg",
			"data-testid": "bot-sources-drawer-row",
			children: [s.jsx(o("WAWebUnifiedResponseCitationRenderers.react").WAWebUnifiedResponseFaviconRenderer, {
				alt: "",
				url: (n = (r = i.favicon) == null ? void 0 : r.url) != null ? n : "",
				sourceType: i.source_type,
				isThirdParty: c(i)
			}), s.jsxs("div", {
				className: "x78zum5 xdt5ytf xeuugli",
				children: [s.jsx(o("WAWebUnifiedResponseCitationRenderers.react").WAWebUnifiedResponseTextNodeRenderer, {
					content: (a = i.source_display_name) != null ? a : "",
					contentType: "citation_title"
				}), i.source_subtitle != null && i.source_subtitle !== "" && s.jsx(o("WAWebUnifiedResponseCitationRenderers.react").WAWebUnifiedResponseTextNodeRenderer, {
					content: i.source_subtitle,
					contentType: "citation_subtitle"
				})]
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = u;
}), 98);

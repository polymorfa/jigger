__d("WAWebBotSourcesDrawer.react", [
	"WAWebExternalLink.react",
	"WAWebUnifiedResponseCitationRenderers.react",
	"WAWebUnifiedResponseContentDrawer.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(7), n = e.sources, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = { className: "x78zum5 xdt5ytf x1f0uite" }, t[0] = r) : r = t[0];
		var a;
		t[1] !== n ? (a = n.map(c), t[1] = n, t[2] = a) : a = t[2];
		var i;
		t[3] !== a ? (i = s.jsx("div", babelHelpers.extends({}, r, {
			"data-testid": "bot-sources-drawer-list",
			children: a
		})), t[3] = a, t[4] = i) : i = t[4];
		var l = i, u;
		return t[5] !== l ? (u = s.jsx(o("WAWebUnifiedResponseContentDrawer.react").WAWebUnifiedResponseContentDrawer, { contentView: {
			content: l,
			contentType: "citations"
		} }), t[5] = l, t[6] = u) : u = t[6], u;
	}
	function c(e, t) {
		var n;
		return s.jsx(m, { source: e }, ((n = e.source_url) != null ? n : "") + "-" + t);
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		return String(e.source_type) === "THIRD_PARTY";
	}
	function m(e) {
		var t, n, r, a, i = o("react-compiler-runtime").c(19), l = e.source, u = (t = l.source_url) != null ? t : "", c;
		i[0] === Symbol.for("react.memo_cache_sentinel") ? (c = "x6s0dn4 xhslqc4 x1aj3ljl x78zum5 x1q0g3np x1hl2dhg", i[0] = c) : c = i[0];
		var m = (n = (r = l.favicon) == null ? void 0 : r.url) != null ? n : "", p = l.source_type, _;
		i[1] !== l ? (_ = d(l), i[1] = l, i[2] = _) : _ = i[2];
		var f;
		i[3] !== l.source_type || i[4] !== m || i[5] !== _ ? (f = s.jsx(o("WAWebUnifiedResponseCitationRenderers.react").WAWebUnifiedResponseFaviconRenderer, {
			alt: "",
			url: m,
			sourceType: p,
			isThirdParty: _
		}), i[3] = l.source_type, i[4] = m, i[5] = _, i[6] = f) : f = i[6];
		var g;
		i[7] === Symbol.for("react.memo_cache_sentinel") ? (g = { className: "x78zum5 xdt5ytf xeuugli" }, i[7] = g) : g = i[7];
		var h = (a = l.source_display_name) != null ? a : "", y;
		i[8] !== h ? (y = s.jsx(o("WAWebUnifiedResponseCitationRenderers.react").WAWebUnifiedResponseTextNodeRenderer, {
			content: h,
			contentType: "citation_title"
		}), i[8] = h, i[9] = y) : y = i[9];
		var C;
		i[10] !== l.source_subtitle ? (C = l.source_subtitle != null && l.source_subtitle !== "" && s.jsx(o("WAWebUnifiedResponseCitationRenderers.react").WAWebUnifiedResponseTextNodeRenderer, {
			content: l.source_subtitle,
			contentType: "citation_subtitle"
		}), i[10] = l.source_subtitle, i[11] = C) : C = i[11];
		var b;
		i[12] !== C || i[13] !== y ? (b = s.jsxs("div", babelHelpers.extends({}, g, { children: [y, C] })), i[12] = C, i[13] = y, i[14] = b) : b = i[14];
		var v;
		return i[15] !== u || i[16] !== b || i[17] !== f ? (v = s.jsxs(o("WAWebExternalLink.react").ExternalLinkEl, {
			href: u,
			className: c,
			"data-testid": "bot-sources-drawer-row",
			children: [f, b]
		}), i[15] = u, i[16] = b, i[17] = f, i[18] = v) : v = i[18], v;
	}
	l.default = u;
}), 98);

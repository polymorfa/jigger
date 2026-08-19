__d("WAFlowsTypeaheadSearch.react", [
	"fbt",
	"WAFlowsEnvContext.react",
	"WAFlowsIcon.react",
	"WAFlowsTypeaheadSearchUtils",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useState, _ = {
		container: {
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			paddingTop: "x18khy8n",
			paddingInlineEnd: "x167vaf5",
			paddingBottom: "xmnamis",
			paddingInlineStart: "x8945me",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		searchContainer: {
			backgroundColor: "x1f8e7qn",
			width: "xh8yej3",
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			flexBasis: "xdl72j9",
			$$css: !0
		},
		input: {
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			":focus_outline": "x1uvtmcs",
			backgroundColor: "xjbqb8w",
			display: "x78zum5",
			width: "x1t0p1hu",
			lineHeight: "x17mssa0",
			color: "x9n2qya",
			$$css: !0
		},
		searchIcon: {
			width: "xp8d6y2",
			height: "xam5rvr",
			backgroundColor: "xou6ff6",
			$$css: !0
		}
	}, f = {
		container: {
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			width: "xh8yej3",
			$$css: !0
		},
		searchContainer: {
			borderStartStartRadius: "x1cwemrn",
			borderStartEndRadius: "xilio5v",
			borderEndEndRadius: "xyl2pp4",
			borderEndStartRadius: "x1lm4evp",
			rowGap: "x1w6r25c",
			columnGap: "x1izhsip",
			display: "x78zum5",
			$$css: !0
		},
		input: {
			"::placeholder_color": "xzo7811",
			"::placeholder_font": "xwqs2kq",
			"::placeholder_fontSize": "xdggqi8",
			"::placeholder_letterSpacing": "x14r5sr4",
			$$css: !0
		}
	}, g = {
		container: {
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			width: "xh8yej3",
			marginBottom: "x1ljz57u",
			rowGap: "x1fc8kun",
			columnGap: "x4prdry",
			$$css: !0
		},
		searchContainer: {
			borderStartStartRadius: "xsoc3t9",
			borderStartEndRadius: "x1cw44ol",
			borderEndEndRadius: "xm4qxx4",
			borderEndStartRadius: "x1ru1ck7",
			$$css: !0
		},
		input: {
			"::placeholder_color": "xzo7811",
			"::placeholder_font": "xwqs2kq",
			"::placeholder_fontSize": "xdggqi8",
			"::placeholder_letterSpacing": "x1lg2efq",
			$$css: !0
		}
	};
	function h(t) {
		var n = t.dataSource, a = t.setSearchOptions, i = o("WAFlowsEnvContext.react").useWAFlowsEnv(), l = i.env, u = y(l.platform), d = p(!1), f = d[0], g = d[1], h = m(function(e) {
			var t = o("WAFlowsTypeaheadSearchUtils").getSearchMatches(e.target.value, n);
			a(t);
		}, [n, a]), C = l.platform === "ios" || !f ? c.jsx(r("WAFlowsIcon.react"), {
			id: "waf_search",
			xstyle: _.searchIcon
		}) : c.jsx(r("WAFlowsIcon.react"), {
			id: "waf_directional_arrow_android",
			altText: s._(
				/*BTDS*/
				""
			),
			xstyle: _.searchIcon
		});
		return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([u.container]), { children: c.jsxs("div", babelHelpers.extends({}, e.props([
			_.container,
			_.searchContainer,
			u.searchContainer
		]), { children: [C, c.jsx("input", babelHelpers.extends({}, e.props([_.input, u.input]), {
			placeholder: s._(
				/*BTDS*/
				""
			).toString(),
			onChange: function(t) {
				h(t);
			},
			onFocus: function() {
				return g(!0);
			},
			onBlur: function() {
				return g(!1);
			}
		}))] })) }));
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		return e === "android" ? f : g;
	}
	l.default = h;
}), 226);

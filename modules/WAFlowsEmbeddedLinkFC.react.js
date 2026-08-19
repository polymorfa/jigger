__d("WAFlowsEmbeddedLinkFC.react", [
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
	"WAFlowsOpenExternalURI",
	"WAFlowsText.react",
	"WDSNativeEmbeddedLink.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useMemo, p = {
		anchorInline: {
			display: "xt0psk2",
			textDecoration: "x1hl2dhg",
			color: "xp0uvv5",
			":link_textDecoration": "x12yia81",
			":visited_textDecoration": "x1dmdw0h",
			":hover_textDecoration": "x1lku1pv",
			":active_textDecoration": "x11iimpl",
			$$css: !0
		},
		anchorInlineText: {
			color: "xyciedh",
			$$css: !0
		}
	}, _ = {
		anchorInline: {
			display: "xt0psk2",
			textDecoration: "x1hl2dhg",
			color: "x2qyyd0",
			":link_textDecoration": "x12yia81",
			":visited_textDecoration": "x1dmdw0h",
			":hover_textDecoration": "xt0b8zv",
			":active_textDecoration": "x11iimpl",
			":focus-visible_outline": "xk2swo9",
			":focus-visible_backgroundColor": "xn69kzl",
			":focus-visible_textDecoration": "xbvygy2",
			":focus-visible_color": "x17n1omk",
			$$css: !0
		},
		anchorInlineText: {
			color: "x3lt289",
			textDecoration: "x1hl2dhg",
			$$css: !0
		}
	}, f = {
		wa_web: _,
		android: {},
		ios: {}
	};
	function g(e) {
		var t, n = e.platform, r = e.dataTestId, a = r === void 0 ? "embbeded-link" : r, i = e.href, l = e.inline, s = l === void 0 ? !1 : l, c = e.onClick, p = e.responsiveFont, _ = e.text, f = e.xstyle, g = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), h = g.invoke, y = (t = c == null ? void 0 : c.isOpenUrlAction) != null ? t : !1, C = m(function() {
			try {
				var e;
				return new URL((e = c == null ? void 0 : c.url) != null ? e : "");
			} catch (e) {
				return null;
			}
		}, [c]), b = d(function() {
			C != null && o("WAFlowsOpenExternalURI").openExternalURI(C, h);
		}, [h, C]), v = d(function(e) {
			e.preventDefault(), y ? b() : c == null || c();
		}, [
			y,
			b,
			c
		]);
		return u.jsx(o("WDSNativeEmbeddedLink.react").WDSNativeEmbeddedLink, {
			onClick: v,
			platform: n,
			isExternalLink: y,
			text: _,
			href: i,
			responsiveFont: p,
			xstyle: f,
			inline: s,
			dataTestId: a
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(t) {
		var n = t.href, a = t.text, i = t.type, l = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), s = l.invoke, c = o("WAFlowsEnvContext.react").useWAFlowsEnv(), _ = c.env, g = f[_.platform], h = m(function() {
			try {
				return new URL(n);
			} catch (e) {
				return null;
			}
		}, [n]), y = d(function(e) {
			e.preventDefault(), h != null && o("WAFlowsOpenExternalURI").openExternalURI(h, s);
		}, [s, h]);
		return h != null ? u.jsx("a", babelHelpers.extends({
			href: n,
			onClick: y
		}, (e || (e = r("stylex"))).props(p.anchorInline, g.anchorInline), { children: u.jsx(o("WAFlowsText.react").WAFlowsText, {
			tag: "span",
			fontWeight: _.platform === "wa_web" ? "semibold" : void 0,
			xstyle: [p.anchorInlineText, g.anchorInlineText],
			type: i,
			text: a
		}) })) : h != null ? u.jsx(o("WAFlowsText.react").WAFlowsText, {
			tag: "span",
			type: i,
			text: n
		}) : u.jsx(o("WAFlowsText.react").WAFlowsText, {
			tag: "span",
			type: i,
			text: "(" + a + ")[" + n + "]"
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.WAFlowsEmbeddedLinkFC = g, l.WAFlowsInlineTextLink = h;
}), 98);

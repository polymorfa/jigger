__d("WAWebNewsletterInsightsDrawer.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebNewsletterAdminInsightsPossiblyMissingButterBar.react",
	"WAWebNewsletterInsightsAudienceSection.react",
	"WAWebNewsletterInsightsAudienceSectionShimmer.react",
	"WAWebNewsletterInsightsGrowthSection.react",
	"WAWebNewsletterInsightsGrowthSectionShimmer.react",
	"WAWebNewsletterInsightsReachSection.react",
	"WAWebNewsletterInsightsReachSectionShimmer.react",
	"WAWebNewsletterProducerInsightsLogger",
	"WAWebPopulateNewsletterInsightsAction",
	"WAWebTabs.react",
	"WAWebWamEnumThreadType",
	"react",
	"react-compiler-runtime",
	"useWAWebAsyncRetry",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useContext, m = c.useEffect, p = c.useState, _ = {
		tabs: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		tab: {
			fontWeight: "xk50ysn",
			textTransform: "x1gdvv3m",
			$$css: !0
		}
	}, f = {
		reach: "reach",
		growth: "growth",
		followers: "followers"
	};
	function g(e) {
		switch (e) {
			case "reach": return "channel-insights-reach";
			case "growth": return "channel-insights-growth";
			case "followers": return "channel-insights-followers";
		}
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(51), n = e.chat, a = e.entryPoint, i = e.onBack, l = e.onCancel, c = e.ref, h = e.selectedTab, C;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (C = new Set(), t[0] = C) : C = t[0];
		var b = p(C), v = b[0], S = b[1], R = p(h), L = R[0], E = R[1], k;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (k = ["newsletterMetadata"], t[1] = k) : k = t[1];
		var I = o("useWAWebModelValues").useModelValues(n, k), T = I.newsletterMetadata, D, x;
		t[2] !== n ? (D = function() {
			return o("WAWebPopulateNewsletterInsightsAction").populateNewsletterTabInsights(n);
		}, x = [n], t[2] = n, t[3] = D, t[4] = x) : (D = t[3], x = t[4]);
		var $ = r("useWAWebAsyncRetry")(D, x), P = $.error, N = $.loading, M = $.retry, w = d(o("WAWebNewsletterProducerInsightsLogger").NewsletterProducerInsightsLoggerContext), A, F;
		t[5] !== a || t[6] !== w || t[7] !== h ? (A = function() {
			w.logOpen({
				entryPoint: a,
				tab: h
			});
		}, F = [
			w,
			a,
			h
		], t[5] = a, t[6] = w, t[7] = h, t[8] = A, t[9] = F) : (A = t[8], F = t[9]), m(A, F);
		var O;
		t[10] !== w || t[11] !== i ? (O = function() {
			w.logClose(), i == null || i();
		}, t[10] = w, t[11] = i, t[12] = O) : O = t[12];
		var B = O;
		if (T == null) return null;
		var W;
		t[13] !== w || t[14] !== v || t[15] !== L ? (W = function(t) {
			S(new Set(v).add(L)), w.logNavigationTap(t), E(t);
		}, t[13] = w, t[14] = v, t[15] = L, t[16] = W) : W = t[16];
		var q;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (q = {
			id: f.reach,
			title: s._(
				/*BTDS*/
				""
			)
		}, t[17] = q) : q = t[17];
		var U;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (U = {
			id: f.growth,
			title: s._(
				/*BTDS*/
				""
			)
		}, t[18] = U) : U = t[18];
		var V;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (V = [
			q,
			U,
			{
				id: f.followers,
				title: s._(
					/*BTDS*/
					""
				)
			}
		], t[19] = V) : V = t[19];
		var H;
		t[20] !== W || t[21] !== L ? (H = u.jsx(r("WAWebTabs.react"), {
			xstyle: _.tabs,
			tabXstyle: _.tab,
			selectedId: L,
			onSelect: W,
			testIdPrefix: "newsletter-insights-tab",
			tabConfigs: V
		}), t[20] = W, t[21] = L, t[22] = H) : H = t[22];
		var G = H, z;
		t[23] !== L ? (z = y(L), t[23] = L, t[24] = z) : z = t[24];
		var j = z, K = j[0], Q = j[1], X;
		t[25] !== L ? (X = g(L), t[25] = L, t[26] = X) : X = t[26];
		var Y;
		t[27] !== n.id ? (Y = {
			threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
			channelWid: n.id
		}, t[27] = n.id, t[28] = Y) : Y = t[28];
		var J;
		t[29] !== X || t[30] !== Y ? (J = {
			surface: X,
			extras: Y
		}, t[29] = X, t[30] = Y, t[31] = J) : J = t[31];
		var Z = J, ee;
		t[32] === Symbol.for("react.memo_cache_sentinel") ? (ee = s._(
			/*BTDS*/
			""
		), t[32] = ee) : ee = t[32];
		var te;
		t[33] !== B || t[34] !== l ? (te = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: ee,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: B,
			onCancel: l
		}), t[33] = B, t[34] = l, t[35] = te) : te = t[35];
		var ne;
		t[36] !== Q || t[37] !== K || t[38] !== P || t[39] !== N || t[40] !== T || t[41] !== M || t[42] !== v || t[43] !== L || t[44] !== Z ? (ne = u.jsx(r("WAWebDrawerBody.react"), {
			theme: "custom-scroll",
			children: N ? u.jsx(K, {}) : u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebNewsletterAdminInsightsPossiblyMissingButterBar.react"), { newsletterMetadata: T }), u.jsx(Q, {
				animate: !v.has(L),
				newsletterMetadata: T,
				error: P,
				retry: M,
				tsNavigationData: Z
			})] })
		}), t[36] = Q, t[37] = K, t[38] = P, t[39] = N, t[40] = T, t[41] = M, t[42] = v, t[43] = L, t[44] = Z, t[45] = ne) : ne = t[45];
		var re;
		return t[46] !== G || t[47] !== c || t[48] !== te || t[49] !== ne ? (re = u.jsxs(r("WAWebDrawer.react"), {
			ref: c,
			testid: "newsletter-insights-drawer",
			theme: "striped",
			children: [
				te,
				G,
				ne
			]
		}), t[46] = G, t[47] = c, t[48] = te, t[49] = ne, t[50] = re) : re = t[50], re;
	}
	function y(e) {
		switch (e) {
			case "reach": return [r("WAWebNewsletterInsightsReachSectionShimmer.react"), r("WAWebNewsletterInsightsReachSection.react")];
			case "growth": return [r("WAWebNewsletterInsightsGrowthSectionShimmer.react"), r("WAWebNewsletterInsightsGrowthSection.react")];
			default: return [r("WAWebNewsletterInsightsAudienceSectionShimmer.react"), r("WAWebNewsletterInsightsAudienceSection.react")];
		}
	}
	l.NewsletterInsightsDrawer = h;
}), 226);

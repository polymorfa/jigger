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
		var t = e.chat, n = e.entryPoint, a = e.onBack, i = e.onCancel, l = e.ref, c = e.selectedTab, h = p(new Set()), C = h[0], b = h[1], v = p(c), S = v[0], R = v[1], L = o("useWAWebModelValues").useModelValues(t, ["newsletterMetadata"]), E = L.newsletterMetadata, k = r("useWAWebAsyncRetry")(function() {
			return o("WAWebPopulateNewsletterInsightsAction").populateNewsletterTabInsights(t);
		}, [t]), I = k.error, T = k.loading, D = k.retry, x = d(o("WAWebNewsletterProducerInsightsLogger").NewsletterProducerInsightsLoggerContext);
		m(function() {
			x.logOpen({
				entryPoint: n,
				tab: c
			});
		}, [
			x,
			n,
			c
		]);
		var $ = function() {
			x.logClose(), a == null || a();
		};
		if (E == null) return null;
		var P = u.jsx(r("WAWebTabs.react"), {
			xstyle: _.tabs,
			tabXstyle: _.tab,
			selectedId: S,
			onSelect: function(t) {
				b(new Set(C).add(S)), x.logNavigationTap(t), R(t);
			},
			testIdPrefix: "newsletter-insights-tab",
			tabConfigs: [
				{
					id: f.reach,
					title: s._(
						/*BTDS*/
						""
					)
				},
				{
					id: f.growth,
					title: s._(
						/*BTDS*/
						""
					)
				},
				{
					id: f.followers,
					title: s._(
						/*BTDS*/
						""
					)
				}
			]
		}), N = y(S), M = N[0], w = N[1], A = {
			surface: g(S),
			extras: {
				threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
				channelWid: t.id
			}
		};
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: l,
			testid: "newsletter-insights-drawer",
			theme: "striped",
			children: [
				u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: s._(
						/*BTDS*/
						""
					),
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onBack: $,
					onCancel: i
				}),
				P,
				u.jsx(r("WAWebDrawerBody.react"), {
					theme: "custom-scroll",
					children: T ? u.jsx(M, {}) : u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebNewsletterAdminInsightsPossiblyMissingButterBar.react"), { newsletterMetadata: E }), u.jsx(w, {
						animate: !C.has(S),
						newsletterMetadata: E,
						error: I,
						retry: D,
						tsNavigationData: A
					})] })
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		switch (e) {
			case "reach": return [r("WAWebNewsletterInsightsReachSectionShimmer.react"), r("WAWebNewsletterInsightsReachSection.react")];
			case "growth": return [r("WAWebNewsletterInsightsGrowthSectionShimmer.react"), r("WAWebNewsletterInsightsGrowthSection.react")];
			default: return [r("WAWebNewsletterInsightsAudienceSectionShimmer.react"), r("WAWebNewsletterInsightsAudienceSection.react")];
		}
	}
	l.NewsletterInsightsDrawer = h;
}), 226);

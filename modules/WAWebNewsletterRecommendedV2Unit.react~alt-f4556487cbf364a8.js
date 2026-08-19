__d("WAWebNewsletterRecommendedV2Unit.react", [
	"WAWebCarouselScrollButton.react",
	"WAWebCommonNewsletterEnums",
	"WAWebFlex.react",
	"WAWebNewsletterRecommendedV2Item.react",
	"react",
	"useWAWebWindowSize"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useCallback, c = {
		marginInlineStart13: {
			marginInlineStart: "x2kejxg",
			$$css: !0
		},
		marginInlineEnd13: {
			marginInlineEnd: "xaw7rza",
			$$css: !0
		}
	}, d = { scrollContainer: {
		overflowX: "x14aock7",
		maxWidth: "x193iq5w",
		"-ms-overflow-style": "x1pq812k",
		scrollbarWidth: "x1rohswg",
		"::-webkit-scrollbar_display": "xfk6m8",
		$$css: !0
	} }, m = 120, p = 450, _ = 600, f = 970, g = 750;
	function h(e) {
		var t = e.chatEntryPoint, n = e.containerRef, r = e.discoverySurface, a = e.eventSurface, i = e.isFullUnit, l = e.newsletterDirectorySessionId, u = e.newsletterEventUnit, c = e.newsletters, m = e.onFollow, p = e.similarNewslettersSessionId, _ = e.size;
		return i ? s.jsx(v, {
			eventSurface: a,
			chatEntryPoint: t,
			newsletters: c,
			onFollow: null,
			size: _,
			discoverySurface: r,
			newsletterDirectorySessionId: l,
			similarNewslettersSessionId: p,
			newsletterEventUnit: u
		}) : s.jsx(o("WAWebFlex.react").FlexColumn, {
			rowGap: 8,
			xstyle: d.scrollContainer,
			ref: n,
			children: s.jsx(b, {
				eventSurface: a,
				chatEntryPoint: t,
				newsletters: c,
				onFollow: m,
				discoverySurface: r,
				newsletterDirectorySessionId: l,
				similarNewslettersSessionId: p,
				newsletterEventUnit: u
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.isFullUnit, n = e.size;
		return t ? s.jsx(o("WAWebFlex.react").FlexColumn, {
			rowGap: 8,
			align: "center",
			children: Array.from({ length: n.width > f ? 3 : 2 }, function() {
				return s.jsxs(o("WAWebFlex.react").FlexRow, {
					columnGap: 8,
					children: [
						n.height > p && s.jsx(o("WAWebNewsletterRecommendedV2Item.react").NewsletterRecommendedItemShimmer, {}),
						n.height > _ && s.jsx(o("WAWebNewsletterRecommendedV2Item.react").NewsletterRecommendedItemShimmer, {}),
						n.height > g && s.jsx(o("WAWebNewsletterRecommendedV2Item.react").NewsletterRecommendedItemShimmer, {})
					]
				});
			})
		}) : s.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 8,
			children: [
				s.jsx(o("WAWebNewsletterRecommendedV2Item.react").NewsletterRecommendedItemShimmer, {}),
				s.jsx(o("WAWebNewsletterRecommendedV2Item.react").NewsletterRecommendedItemShimmer, {}),
				s.jsx(o("WAWebNewsletterRecommendedV2Item.react").NewsletterRecommendedItemShimmer, {}),
				s.jsx(o("WAWebNewsletterRecommendedV2Item.react").NewsletterRecommendedItemShimmer, {})
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = o("WAWebCarouselScrollButton.react").useScrollableContainer({
			itemWidth: m,
			isLoading: e.isLoading,
			itemsLoaded: e.newsletters.length,
			isFullUnit: e.isFullUnit
		}), n = t.containerRef, a = t.handleScroll, i = t.position, l = t.scrollEndBy, d = t.scrollStartBy, p = r("useWAWebWindowSize")(), _ = e.afterFollow, f = u(function(t) {
			_ == null || _();
			var n = e.newsletters.findIndex(function(e, n) {
				var r;
				return ((r = e.newsletterMetadata) == null ? void 0 : r.membershipType) === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest && n > t;
			});
			n !== -1 && (l == null || l(m * (n - t)));
		}, [
			e.newsletters,
			l,
			_
		]), g = s.jsx(h, {
			eventSurface: e.eventSurface,
			chatEntryPoint: e.chatEntryPoint,
			containerRef: n,
			isFullUnit: e.isFullUnit,
			newsletters: e.newsletters,
			onFollow: f,
			size: p,
			discoverySurface: e.discoverySurface,
			newsletterDirectorySessionId: e.newsletterDirectorySessionId,
			similarNewslettersSessionId: e.similarNewslettersSessionId,
			newsletterEventUnit: e.newsletterEventUnit
		}), C = e.isLoading ? s.jsx(y, {
			isFullUnit: e.isFullUnit,
			size: p
		}) : g;
		return s.jsx(o("WAWebFlex.react").FlexColumn, {
			testid: "newsletter-recommended-unit",
			children: s.jsxs("div", {
				className: "x1n2onr6 x193iq5w",
				onWheel: a,
				children: [
					C,
					i !== "start" && d != null && s.jsx(o("WAWebCarouselScrollButton.react").CarouselScrollButton, {
						direction: "start",
						onClick: function() {
							return d(m);
						},
						xstyle: c.marginInlineStart13
					}),
					i !== "end" && l != null && s.jsx(o("WAWebCarouselScrollButton.react").CarouselScrollButton, {
						direction: "end",
						onClick: function() {
							return l(m);
						},
						xstyle: c.marginInlineEnd13
					})
				]
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.chatEntryPoint, n = e.discoverySurface, r = e.eventSurface, a = e.newsletterDirectorySessionId, i = e.newsletterEventUnit, l = e.newsletters, u = e.onFollow, c = e.similarNewslettersSessionId;
		return s.jsx(o("WAWebFlex.react").FlexRow, {
			columnGap: 8,
			children: l.map(function(e, l) {
				return s.jsx(o("WAWebNewsletterRecommendedV2Item.react").NewsletterRecommendedItem, {
					eventSurface: r,
					chatEntryPoint: t,
					newsletter: e,
					onFollow: function() {
						return u == null ? void 0 : u(l);
					},
					discoverySurface: n,
					newsletterDirectorySessionId: a,
					similarNewslettersSessionId: c,
					newsletterEventUnit: i
				}, e.id.toJid());
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.chatEntryPoint, n = e.discoverySurface, r = e.eventSurface, a = e.newsletterDirectorySessionId, i = e.newsletterEventUnit, l = e.newsletters, u = e.onFollow, c = e.similarNewslettersSessionId, d = e.size, m = d.width > f ? 3 : 2, h = {
			eventSurface: r,
			chatEntryPoint: t,
			onFollow: u,
			discoverySurface: n,
			newsletterDirectorySessionId: a,
			similarNewslettersSessionId: c,
			newsletterEventUnit: i
		};
		return s.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 8,
			align: "center",
			children: [
				d.height > p && s.jsx(b, babelHelpers.extends({}, h, { newsletters: l.slice(0, m) })),
				d.height > _ && s.jsx(b, babelHelpers.extends({}, h, { newsletters: l.slice(m, m * 2) })),
				d.height > g && s.jsx(b, babelHelpers.extends({}, h, { newsletters: l.slice(m * 2, m * 3) }))
			]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = C;
}), 98);

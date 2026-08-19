__d("WAWebSimilarNewslettersUnits.react", [
	"WAWebChatEntryPoint",
	"WAWebCommonNewsletterStrings",
	"WAWebNewsletterAttributionLogging",
	"WAWebNewsletterDirectorySearchAction",
	"WAWebNewsletterLoggingContext",
	"WAWebNewsletterRecommendedV2Unit.react",
	"WAWebSimilarNewsletterLogging",
	"WAWebSimilarNewsletterSessionId",
	"WAWebStateUtils",
	"WAWebText.react",
	"WAWebWamEnumBannerStatus",
	"WAWebWamEnumBannerStatusReason",
	"WAWebWamEnumChannelEntryPoint",
	"WAWebWamEnumChannelEventSurface",
	"WAWebWamEnumChannelEventUnit",
	"WAWebWamEnumTsSurface",
	"WAWebXIcon.react",
	"WDSButton.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebOnUnmount",
	"useWAWebSimilarNewsletters",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useMemo, p = c.useRef, _ = c.useState, f = {
		marginTop10: {
			marginTop: "x1anpbxc",
			$$css: !0
		},
		paddingInlineStart30: {
			paddingInlineStart: "x162tt16",
			$$css: !0
		}
	}, g = {
		root: {
			backgroundColor: "x1280gxy",
			position: "x1n2onr6",
			$$css: !0
		},
		dismissButton: {
			position: "x10l6tqk",
			top: "x1eu8d0j",
			insetInlineEnd: "xeer0ze",
			left: null,
			right: null,
			$$css: !0
		},
		iconFill: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function h(t) {
		var n = t.chat, a = t.ref, i = o("useWAWebSimilarNewsletters").useSimilarNewsletters(n), l = i.similarNewsletters, s = i.similarNewslettersToDisplay, c = p(!1), _ = o("WAWebSimilarNewsletterSessionId").useSimilarNewslettersSessionId(), f = m(function() {
			return {
				similarNewsletterSessionId: _,
				eventUnit: o("WAWebWamEnumChannelEventUnit").CHANNEL_EVENT_UNIT.SIMILAR_CHANNELS,
				entryPoint: o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.SIMILAR_CHANNEL
			};
		}, [_]);
		r("useWAWebOnUnmount")(function() {
			o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.setIsSimilarUnitMountedForChat(null);
		}), d(function() {
			c.current || (o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.setSimilarChannelsSessionId(_), o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.setIsSimilarUnitMountedForChat(n.id), o("WAWebSimilarNewsletterLogging").logSimilarNewsletterImpression({
				originNewsletter: n,
				similarNewsletters: l,
				similarNewslettersToDisplay: s,
				eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
				sessionId: _,
				bannerStatus: o("WAWebWamEnumBannerStatus").BANNER_STATUS.DISPLAYED
			}), c.current = !0);
		}, [n]);
		var h = function() {
			var e;
			o("WAWebSimilarNewsletterLogging").logSimilarNewsletterDismiss({
				chat: n,
				reason: o("WAWebWamEnumBannerStatusReason").BANNER_STATUS_REASON.CLOSE_TAP,
				sessionId: _
			}), (e = o("WAWebStateUtils").unproxy(n).newsletterMetadata) == null || e.resetRecentlyFollowedFrom();
		};
		return u.jsx(r("WAWebNewsletterLoggingContext").Provider, {
			value: f,
			children: u.jsxs("div", babelHelpers.extends({
				"aria-label": o("WAWebCommonNewsletterStrings").getNewsletterSimilarNewslettersTitle(),
				ref: a
			}, (e || (e = r("stylex"))).props(g.root, o("WDSPaddings.stylex").wdsPaddings.paddingTop12, o("WDSPaddings.stylex").wdsPaddings.paddingBottom16, o("WDSPaddings.stylex").wdsPaddings.paddingHor16), { children: [u.jsx(r("WDSButton.react"), {
				Icon: o("WAWebXIcon.react").XIcon,
				onPress: h,
				xstyle: [g.dismissButton, g.iconFill],
				variant: "borderless"
			}), u.jsx(C, {
				discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_THREAD,
				eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
				newsletters: s,
				similarNewslettersSessionId: Number(_)
			})] }))
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(t) {
		var n = t.chat, a = o("useWAWebSimilarNewsletters").useSimilarNewsletters(n), i = a.hasEnoughNewsletters, l = a.similarNewsletters, s = a.similarNewslettersToDisplay, c = o("WAWebSimilarNewsletterSessionId").useSimilarNewslettersSessionId(), h = m(function() {
			return {
				similarNewsletterSessionId: c,
				eventUnit: o("WAWebWamEnumChannelEventUnit").CHANNEL_EVENT_UNIT.SIMILAR_CHANNELS,
				entryPoint: o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.SIMILAR_CHANNEL
			};
		}, [c]), y = r("useWAWebUnmountSignal")(), b = _(s.length === 0), v = b[0], S = b[1];
		d(function() {
			y.aborted || s.length === 0 && o("WAWebNewsletterDirectorySearchAction").getSimilarNewslettersAction(n).finally(function() {
				return S(!1);
			});
		}, [
			n,
			s.length,
			y
		]);
		var R = p(!1);
		return d(function() {
			!v && !R.current && (o("WAWebSimilarNewsletterLogging").logSimilarNewsletterImpression({
				originNewsletter: n,
				similarNewsletters: l,
				similarNewslettersToDisplay: s,
				eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
				sessionId: c,
				bannerStatus: i ? o("WAWebWamEnumBannerStatus").BANNER_STATUS.DISPLAYED : o("WAWebWamEnumBannerStatus").BANNER_STATUS.HIDDEN
			}), R.current = !0);
		}, [v]), !i && !v ? null : u.jsx(r("WAWebNewsletterLoggingContext").Provider, {
			value: h,
			children: u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(g.root, f.marginTop10, f.paddingInlineStart30, o("WDSPaddings.stylex").wdsPaddings.paddingVer16), { children: u.jsx(C, {
				discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_PROFILE,
				eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
				isLoading: v,
				newsletters: s,
				similarNewslettersSessionId: Number(c)
			}) }))
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(t) {
		var n = t.discoverySurface, a = t.eventSurface, i = t.isLoading, l = i === void 0 ? !1 : i, s = t.newsletters, c = t.ref, d = t.similarNewslettersSessionId;
		return u.jsxs("div", {
			ref: c,
			children: [u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginBottom12), { children: u.jsx(o("WAWebText.react").WAWebTextSmall, { children: o("WAWebCommonNewsletterStrings").getNewsletterSimilarNewslettersTitle() }) })), u.jsx(r("WAWebNewsletterRecommendedV2Unit.react"), {
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.SimilarNewsletters,
				discoverySurface: n,
				eventSurface: a,
				isFullUnit: !1,
				isLoading: l,
				newsletterEventUnit: o("WAWebWamEnumChannelEventUnit").CHANNEL_EVENT_UNIT.SIMILAR_CHANNELS,
				newsletters: s,
				similarNewslettersSessionId: d
			})]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.SimilarNewslettersConversationBanner = h, l.SimilarNewslettersInfoDrawerUnit = y;
}), 98);

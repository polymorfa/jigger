__d("WAWebNewsletterDirectoryCell.react", [
	"WAJids",
	"WATimeUtils",
	"WAWebAppRootInteractionContext.react",
	"WAWebCellV2.react",
	"WAWebCommonNewsletterStrings",
	"WAWebContactGetters",
	"WAWebDetailImage.react",
	"WAWebFocusTracer",
	"WAWebInteractionTracePolicy",
	"WAWebKeyboardHotKeys.react",
	"WAWebName.react",
	"WAWebNewsletterAttributionLogging",
	"WAWebNewsletterDirectoryActionButton.react",
	"WAWebNewsletterDirectoryFilterUtils",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterLoggingUtils",
	"WAWebOpenNewsletterPreviewChat",
	"WAWebOpenStatusQuotedFlow",
	"WAWebStatusCollection",
	"WAWebStatusImageRing.react",
	"WAWebText.react",
	"WAWebWamEnumStatusRowSection",
	"WAWebWamEnumTsSurface",
	"WDSPaddings.stylex",
	"react",
	"useWAWebActiveSelection",
	"useWAWebContactValues",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebNewsletterDiscoveryVisibilityLogger"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useRef, d = u.useState, m = { marginInline10: {
		marginInlineStart: "x1hm9lzh",
		marginInlineEnd: "x1sa5p1d",
		marginLeft: null,
		marginRight: null,
		$$css: !0
	} }, p = 4, _ = { title: {
		display: "x78zum5",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		$$css: !0
	} };
	function f(e) {
		return o("WAWebNewsletterGatingUtils").isNewsletterDiscoveryVisibilityLoggingEnabled() ? s.jsx(h, babelHelpers.extends({}, e)) : s.jsx(g, babelHelpers.extends({}, e));
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t, n, a, i, l = e.chatEntryPoint, u = e.directoryFunnelLogger, f = e.index, g = e.newsletter, h = e.newsletterDirectorySectionIndex, y = e.newsletterDirectorySectionName, C = e.onSelect, b = r("useWAWebActiveSelection")(e.active, "newsletter-" + e.newsletter.id.toString()), v = b[0], S = b[1], R = c(), L = o("useWAWebModelValues").useOptionalModelValues(g.newsletterMetadata, [
			"name",
			"size",
			"inviteCode",
			"isPreview",
			"statusMetadata"
		]), E = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_NEWSLETTERS_OPEN_CHAT
		}), k = E.failInteraction, I = E.startInteraction, T = E.stopInteraction, D = o("useWAWebContactValues").useOptionalContactValues(g.id, [o("WAWebContactGetters").getCalculatedStatusMute]), x = (D == null ? void 0 : D[0]) === !0, $ = L != null && o("WATimeUtils").unixTime() - ((t = (n = L.statusMetadata) == null ? void 0 : n.lastStatusSentTime) != null ? t : 0) < o("WATimeUtils").DAY_SECONDS, P = !x && $ && o("WAWebNewsletterGatingUtils").isNewsletterStatusAllEntrypointsEnabled(), N = d(function() {
			var e;
			return (e = P ? o("WAWebStatusCollection").StatusCollection.get(g.id) : null) != null ? e : null;
		}), M = N[0], w = N[1], A = P ? g.id.toString() : "", F = d(A), O = F[0], B = F[1];
		if (A !== O) {
			var W;
			B(A), w((W = P ? o("WAWebStatusCollection").StatusCollection.get(g.id) : null) != null ? W : null);
		}
		if (o("useWAWebListener").useListener(P ? o("WAWebStatusCollection").StatusCollection : null, [
			"add",
			"remove",
			"change:msgsChanged"
		], function(e) {
			if (e.id === g.id) {
				var t;
				w((t = o("WAWebStatusCollection").StatusCollection.get(g.id)) != null ? t : null);
			}
		}), L == null) return null;
		var q = function(t) {
			t.stopPropagation(), o("WAWebOpenStatusQuotedFlow").fetchAndOpenNewsletterStatus({
				event: t,
				newsletterJid: o("WAJids").toNewsletterJid(g.id.toString()),
				statusModelId: g.id,
				rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHANNEL_DIRECTORY_LIST,
				rowIndex: f
			});
		}, U = function() {
			I(), u == null || u.logNavigateToNewsletterFromRow(g.id, f), C == null || C(), o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.setNewsletterDirectoryLoggingData({
				directoryCategoryName: y,
				directoryChannelIndex: f,
				directoryCategoryIndex: h
			}), o("WAWebOpenNewsletterPreviewChat").openNewsletterPreviewChat({
				identifier: L.inviteCode,
				chatEntryPoint: l,
				discoverySurface: e.discoverySurface,
				failInteraction: k,
				stopInteraction: T
			});
		}, V = function() {
			r("WAWebFocusTracer").focus(R.current);
		}, H = function() {
			r("WAWebFocusTracer").focus(v.current);
		}, G = {
			enter: U,
			space: U,
			right: V,
			left: H
		}, z = {
			eventSurface: o("WAWebNewsletterLoggingUtils").getEventSurfaceFromDiscoverySurface(e.discoverySurface),
			directoryCategoryIndex: h,
			directoryChannelIndex: f,
			directoryCategoryName: y,
			entryPoint: o("WAWebNewsletterLoggingUtils").getChannelEntryPoint(l),
			discoverySurface: e.discoverySurface,
			eventUnit: e.newsletterEventUnit
		};
		return s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			role: "button",
			"data-testid": (a = e.testid) != null ? a : "newsletter-directory-cell-" + f,
			handlers: G,
			children: s.jsx(r("WAWebCellV2.react"), {
				ref: v,
				active: S,
				tabIndex: -1,
				onClick: U,
				colorScheme: "default",
				size: "large",
				border: e.bottomItem === !0 ? null : "bottom-partial",
				containerXStyle: m.marginInline10,
				detailLeftXStyle: o("WDSPaddings.stylex").wdsPaddings.paddingStart12,
				detailRightXStyle: o("WDSPaddings.stylex").wdsPaddings.paddingEnd12,
				primary: s.jsx(o("WAWebText.react").WAWebTextTitle, {
					xstyle: _.title,
					children: s.jsx(o("WAWebName.react").Name, {
						chat: g,
						ellipsify: !0,
						highlightText: e.highlightText
					})
				}),
				secondary: s.jsx(o("WAWebText.react").WAWebTextMuted, { children: o("WAWebCommonNewsletterStrings").getNewsletterFollowersText(L.size) }),
				detailLeft: s.jsxs("div", {
					className: "x1n2onr6",
					children: [M != null && s.jsx(o("WAWebStatusImageRing.react").StatusImageRing, {
						id: g.id,
						size: ((i = o("WAWebDetailImage.react").getSize(o("WAWebDetailImage.react").DetailImageSize.Small)) != null ? i : 49) + p,
						stroke: p,
						theme: o("WAWebStatusImageRing.react").RingTheme.ChatList,
						breakRing: !1,
						hideWhenNoUnreadStatuses: !1,
						respectAppTheme: !0
					}), M != null ? s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
						handlers: {
							enter: q,
							space: q
						},
						role: "button",
						onClick: q,
						children: s.jsx(o("WAWebDetailImage.react").DetailImage, {
							id: g.id,
							size: o("WAWebDetailImage.react").DetailImageSize.Small,
							quality: o("WAWebDetailImage.react").DetailImageQuality.Low,
							showOutline: !1,
							theme: "status_profile_photo_ring",
							tabIndex: 0,
							onClick: q
						})
					}) : s.jsx(o("WAWebDetailImage.react").DetailImage, {
						id: g.id,
						size: o("WAWebDetailImage.react").DetailImageSize.Small,
						quality: o("WAWebDetailImage.react").DetailImageQuality.Low,
						showOutline: !1
					})]
				}),
				detailRight: s.jsx(r("WAWebNewsletterDirectoryActionButton.react"), {
					ref: R,
					newsletter: g,
					directoryFunnelLogger: u,
					loggingOptions: z
				})
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.country, n = e.directoryFunnelLogger, a = e.discoverySurface, i = e.index, l = e.listView, u = e.newsletter, c = e.newsletterDirectorySectionIndex, d = e.newsletterDirectorySectionName, m = e.newsletterEventUnit, p = r("useWAWebNewsletterDiscoveryVisibilityLogger")({
			cid: u.id.user,
			newsletterEventUnit: m,
			discoverySurface: a,
			newsletterDirectorySectionName: d,
			newsletterIndex: i,
			newsletterDirectorySectionIndex: c,
			newsletterDirectorySessionId: n == null ? void 0 : n.sessionId,
			country: t,
			pillSelected: a === o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_DIRECTORY ? o("WAWebNewsletterDirectoryFilterUtils").getNewsletterSelectedPill(l) : void 0
		}), _ = p[0], f = p[1];
		return s.jsx("div", {
			ref: _,
			children: s.jsx(g, babelHelpers.extends({}, e))
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = f;
}), 98);

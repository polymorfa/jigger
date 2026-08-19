__d("WAWebBizAdCreationPreviewSection.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAdCreationFBPreview.react",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationPreviewSection_page.graphql",
	"WAWebBizAdLogger",
	"WAWebBizAdPreviewLoggingUtils",
	"WAWebBizCard.react",
	"WAWebConnModel",
	"WAWebFlex.react",
	"WAWebUserPrefsMeUser",
	"WDSButton.react",
	"react",
	"useWAWebBizAdCreationOpenSeeAllPreviewModal",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebModelValues",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = d.useEffect, f = d.useRef, g = { content: {
		flex: "x98rzlu",
		justifyContent: "xl56j7k",
		overflowY: "x1odjw0f",
		paddingBottom: "xvg22vi",
		paddingInlineStart: "xb0esv5",
		paddingInlineEnd: "xyo0t3i",
		paddingLeft: null,
		paddingRight: null,
		paddingTop: "x1p57kb1",
		$$css: !0
	} }, h = e !== void 0 ? e : e = n("WAWebBizAdCreationPreviewSection_page.graphql");
	function y(e) {
		"use no forget";
		var t, n, a, i = e.adAccountID, l = e.currentLocallyUploadedMediaCollection, u = e.description, d = e.pageRef, y = o("CometRelay").useFragment(h, d), C = p(r("WAWebBizAdCreationLoggerContext")), b = f(null), v = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		o("useWAWebListener").useListener(l, [
			"add",
			"remove",
			"reset"
		], v);
		var S = o("useWAWebModelValues").useModelValues(o("WAWebConnModel").Conn, ["pushname"]), R = S.pushname, L = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), E = R != null ? R : "", k = l.getPreviewableMedias(), I = (t = y == null ? void 0 : y.name) != null ? t : E, T = y == null || (n = y.profile_picture) == null ? void 0 : n.uri, D = (a = y == null ? void 0 : y.is_verified) != null ? a : !1, x = {
			businessName: I,
			description: u,
			isVerified: D,
			medias: k,
			meUser: L,
			profilePictureUrl: T
		};
		_(function() {
			if (C != null) {
				var e, t, n = (e = (t = x.medias) == null ? void 0 : t.length) != null ? e : 0, a = o("WAWebBizAdPreviewLoggingUtils").determineMediaType(x.medias), l = b.current, s = l == null, u = s || (l == null ? void 0 : l.count) !== n || (l == null ? void 0 : l.type) !== a;
				u && (b.current = {
					count: n,
					type: a
				}, r("WAWebBizAdLogger").logCritical({
					adAccountID: i,
					event: "ad_preview_section_impression",
					extra: {
						initial_load: s,
						media_count: n,
						media_type: a
					},
					loggerContext: C
				}));
			}
		}, [
			i,
			C,
			x.medias
		]);
		var $ = r("useWAWebBizAdCreationOpenSeeAllPreviewModal")(i, C, x), P = m(function() {
			if (C != null) {
				var e, t, n = (e = (t = x.medias) == null ? void 0 : t.length) != null ? e : 0, a = o("WAWebBizAdPreviewLoggingUtils").determineMediaType(x.medias);
				r("WAWebBizAdLogger").log({
					adAccountID: i,
					event: "see_all_previews_click",
					extra: {
						media_count: n,
						media_type: a
					},
					loggerContext: C
				});
			}
			$();
		}, [
			i,
			C,
			$,
			x.medias
		]), N = c.jsx(r("WDSButton.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			onPress: P,
			size: "small",
			testid: "biz_native_ads_preview_see_all_button",
			type: "default",
			variant: "tonal"
		});
		return c.jsx(r("WAWebBizCard.react"), {
			ctaButton: N,
			header: s._(
				/*BTDS*/
				""
			),
			testid: "biz_native_ads_preview_section",
			children: c.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: g.content,
				children: c.jsx(r("WAWebBizAdCreationFBPreview.react"), {
					businessName: I,
					description: u,
					isVerified: D,
					meUser: L,
					medias: k,
					profilePictureUrl: T
				})
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	var C = r("withWAWebBizAdCreationSpecContext")(y, function(e) {
		var t, n, r = e.adgroupSpecs[e.selectedAdgroupID], o = r == null ? void 0 : r.assetFeedSpecPlus, a = (t = o == null || (n = o.bodies) == null || (n = n[0]) == null ? void 0 : n.text) != null ? t : null;
		return {
			adAccountID: e.adAccountData.legacyAccountID,
			currentLocallyUploadedMediaCollection: e.currentLocallyUploadedMediaCollection,
			description: a
		};
	});
	l.default = C;
}), 226);

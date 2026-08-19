__d("WAWebBizAdCreationCreativeSection.react", [
	"fbt",
	"WAWebBizAdCreationCreativeDescriptionTextField.react",
	"WAWebBizAdCreationCreativeInfoModal.react",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationSectionNotices.react",
	"WAWebBizAdCreationSelectedMediaFilmstrip.react",
	"WAWebBizAdCreationValidateSpecContext",
	"WAWebBizAdLogger",
	"WAWebBizCard.react",
	"WAWebFlex.react",
	"WDSButton.react",
	"WDSText.react",
	"getWAWebBizAdCreationCreativeCarouselReducer",
	"react",
	"useWAWebBizAdCreationSpecDispatcherContext",
	"useWAWebForceUpdate",
	"useWAWebInfoButtonUtil",
	"useWAWebListener",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useContext, p = c.useEffect, _ = c.useRef, f = c.useState;
	function g(e) {
		"use no forget";
		var t = e.adAccountID, n = e.currentLocallyUploadedMediaCollection, a = e.lastSuccessfullyUploadedMediaCollection, i = f(!1), l = i[0], c = i[1], g = f(new Set()), h = g[0], y = g[1], C = h.size > 0, b = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), v = m(r("WAWebBizAdCreationValidateSpecContext")), S = m(r("WAWebBizAdCreationLoggerContext")), R = _(null);
		p(function() {
			if (S != null) {
				var e = n.getPreviewableMedias().length, o = R.current, a = o == null, i = a || o !== e;
				i && (R.current = e, r("WAWebBizAdLogger").logCritical({
					adAccountID: t,
					event: "creative_section_impression",
					extra: {
						initial_load: a,
						total_number_media_selected: e
					},
					loggerContext: S
				}));
			}
		}, [
			t,
			n,
			S
		]);
		var L = v == null ? void 0 : v.setSpecElementClientSideNotices;
		o("useWAWebListener").useListener(n, ["remove", "reset"], b);
		var E = r("useWAWebBizAdCreationSpecDispatcherContext")([r("getWAWebBizAdCreationCreativeCarouselReducer")]), k = d(function() {
			S != null && r("WAWebBizAdLogger").log({
				adAccountID: t,
				event: "creative_clear_all_click",
				loggerContext: S
			}), n.delete(), a.delete(), E({ type: "creative_carousel_reducer.clear_carousel_cards" }), E({
				bodyText: "",
				type: "creative_carousel_reducer.update_body_text"
			});
		}, [
			t,
			n,
			E,
			a,
			S
		]), I = n.getPreviewableMedias();
		p(function() {
			L != null && (I.length === 0 ? L("CREATIVE_IMAGE", [{
				severity: "BLOCKING_TIP",
				title: s._(
					/*BTDS*/
					""
				)
			}]) : C ? L("CREATIVE_IMAGE", [{
				severity: "BLOCKING_TIP",
				title: s._(
					/*BTDS*/
					""
				)
			}]) : L("CREATIVE_IMAGE", []));
		}, [
			I.length,
			C,
			L
		]);
		var T = r("useWAWebInfoButtonUtil")(r("WAWebBizAdCreationCreativeInfoModal.react")), D = I.length > 0 ? u.jsx(r("WDSButton.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			onPress: k,
			size: "medium",
			testid: "biz_native_ads_clear_all_media_button",
			variant: "borderless"
		}) : null;
		return u.jsx(r("WAWebBizCard.react"), {
			ctaButton: D,
			header: s._(
				/*BTDS*/
				""
			),
			subtitle: s._(
				/*BTDS*/
				""
			),
			testid: "biz_native_ads_creative_section",
			titleAccessory: T,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				gap: 16,
				children: [
					u.jsx(r("WAWebBizAdCreationSectionNotices.react"), { specElement: "CREATIVE" }),
					u.jsx(r("WAWebBizAdCreationSelectedMediaFilmstrip.react"), {
						adAccountID: t,
						mediaCollection: n,
						setMediaUploadFailed: c,
						setUploadingMediaIds: y,
						uploadingMediaIds: h
					}),
					l === !0 ? u.jsx(r("WDSText.react"), {
						colorName: "secondaryNegativeEmphasized",
						type: "Body3",
						children: s._(
							/*BTDS*/
							""
						)
					}) : null,
					u.jsx(r("WAWebBizAdCreationCreativeDescriptionTextField.react"), {})
				]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	var h = r("withWAWebBizAdCreationSpecContext")(g, function(e) {
		return {
			adAccountID: e.adAccountData.legacyAccountID,
			currentLocallyUploadedMediaCollection: e.currentLocallyUploadedMediaCollection,
			lastSuccessfullyUploadedMediaCollection: e.lastSuccessfullyUploadedMediaCollection
		};
	});
	l.default = h;
}), 226);

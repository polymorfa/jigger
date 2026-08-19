__d("WAWebBizAdCreationTargetingModalMainPage.react", [
	"fbt",
	"CometRelay",
	"WAWebBaseShimmerComponents.react",
	"WAWebBizAdCreationConfigContext",
	"WAWebBizAdCreationConsts",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationTargetingModalAdvantagePlusToggle.react",
	"WAWebBizAdCreationTargetingModalAgeComponent.react",
	"WAWebBizAdCreationTargetingModalAudienceNameComponent.react",
	"WAWebBizAdCreationTargetingModalContext",
	"WAWebBizAdCreationTargetingModalDeleteAudienceButton.react",
	"WAWebBizAdCreationTargetingModalGenderComponent.react",
	"WAWebBizAdCreationTargetingModalInterestsUtils",
	"WAWebBizAdCreationTargetingModalLocationDisplayUtils",
	"WAWebBizAdCreationTargetingModalPage.react",
	"WAWebBizAdCreationTargetingModalSelectableRow.react",
	"WAWebBizAdCreationTargetingSpecContext",
	"WAWebBizAdCreationTargetingSpecHawkWidget.react",
	"WAWebBizAdLogger",
	"WAWebBizAdTargetingSpecLogData",
	"WAWebBizNativeAdsGatingUtils",
	"WAWebDivider.react",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebXIcon.react",
	"WDSButton.react",
	"WDSText.react",
	"react",
	"useWAWebEstimatedDailyReach"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.Suspense, m = c.useContext, p = c.useEffect, _ = c.useRef, f = c.useState, g = {
		actionButtons: {
			columnGap: "x1amjocr",
			$$css: !0
		},
		content: {
			rowGap: "x1j3ira4",
			$$css: !0
		},
		contentContainer: {
			height: "x5yr21d",
			justifyContent: "x1qughib",
			$$css: !0
		},
		name: {
			marginBottom: "xefnzgg",
			$$css: !0
		},
		root: {
			rowGap: "x121sasi",
			$$css: !0
		}
	};
	function h(e) {
		var t, n = e.audienceOption, o = e.optimizationGoalInput, a = m(r("WAWebBizAdCreationTargetingModalContext")), i = a.currency, l = a.dailyBudget, s = a.legacyAdAccountID, c = a.selectedPublisherPlatforms, d = m(r("WAWebBizAdCreationTargetingSpecContext")), p = (t = m(r("WAWebBizAdCreationConfigContext"))) != null ? t : {}, _ = p.flow, f = p.flowID, g = r("useWAWebEstimatedDailyReach")({
			audienceOptionAudience: n,
			currency: i,
			dailyBudget: l,
			flow: _,
			flowID: f,
			legacyAdAccountID: s,
			optimizationGoalInput: o,
			postID: null,
			selectedPublisherPlatforms: c,
			targetingSpecAudience: JSON.stringify(d)
		});
		return u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: g
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.adAccountID, n = e.audienceID, a = e.audienceOption, i = e.mode, l = e.onCancel, c = e.onNavigateToDeleteConfirmation, y = e.onNavigateToInterests, C = e.onNavigateToLocation, b = e.onSaveAudience, v = m(r("WAWebBizAdCreationTargetingSpecContext")), S = m(r("WAWebBizAdCreationConfigContext")), R = m(r("WAWebBizAdCreationTargetingModalContext")), L = R.audienceName, E = R.environment, k = R.setAudienceName, I = m(r("WAWebBizAdCreationLoggerContext")), T = _(!1);
		p(function() {
			if (I != null && !T.current) {
				T.current = !0;
				var e = r("WAWebBizAdTargetingSpecLogData")(v);
				r("WAWebBizAdLogger").log({
					adAccountID: t,
					event: "create_audience_impression",
					extra: babelHelpers.extends({
						audience_id: n,
						audience_name: L,
						audience_option: a,
						mode: i
					}, e),
					loggerContext: I
				});
			}
		}, [
			t,
			n,
			L,
			a,
			I,
			i,
			v
		]);
		var D = f(!1), x = D[0], $ = D[1], P = a === "SAVED_AUDIENCE", N = L.trim(), M = P && N.length === 0, w = function() {
			o("WAWebModalManager").ModalManager.close(), l == null || l();
		}, A = function() {
			I != null && r("WAWebBizAdLogger").log({
				adAccountID: t,
				event: "save_audience_click",
				extra: { audience_id: n },
				loggerContext: I
			}), $(!0), b({
				audienceName: L,
				callback: function() {
					$(!1), o("WAWebModalManager").ModalManager.close();
				},
				onError: function() {
					$(!1);
				},
				targetingSpec: v
			});
		}, F = S != null ? S : {}, O = F.pageID, B = F.product, W = {
			objective: o("WAWebBizAdCreationConsts").WA_WEB_AD_OBJECTIVE,
			page_id: O,
			product: B != null ? B : "BOOSTED_MESSAGE"
		}, q = o("WAWebBizNativeAdsGatingUtils").nativeAdsDetailedTargetingEnabled(), U = q ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), V = q ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return u.jsxs(r("WAWebBizAdCreationTargetingModalPage.react"), {
			headerContent: u.jsxs(u.Fragment, { children: [u.jsx(r("WDSButton.react"), {
				Icon: o("WAWebXIcon.react").XIcon,
				onPress: w,
				size: "medium",
				variant: "borderless"
			}), u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body1",
				children: i === "create" ? s._(
					/*BTDS*/
					""
				) : i === "edit" ? s._(
					/*BTDS*/
					""
				) : (function() {
					throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + i);
				})()
			})] }),
			xstyle: g.root,
			children: [
				o("WAWebBizNativeAdsGatingUtils").nativeAdsCreationTargetingModalHawkToolEnabled() ? u.jsx(r("WAWebBizAdCreationTargetingSpecHawkWidget.react"), {}) : null,
				u.jsxs(o("WAWebFlex.react").FlexRow, {
					justify: "all",
					children: [u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1Emphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}), u.jsx(d, {
						fallback: u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
							height: 20,
							width: 100
						}),
						children: u.jsx(o("CometRelay").RelayEnvironmentProvider, {
							environment: E,
							children: u.jsx(h, {
								audienceOption: a,
								optimizationGoalInput: W
							})
						})
					})]
				}),
				P ? u.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: g.name,
					children: u.jsx(r("WAWebBizAdCreationTargetingModalAudienceNameComponent.react"), {
						audienceName: L,
						onAudienceNameChange: k
					})
				}) : null,
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: g.contentContainer,
					children: [u.jsx("div", {
						"data-testid": "biz_native_ads_targeting_modal_scroll_area",
						className: "x1iyjqo2 x2lwn1j x6ikm8r x1odjw0f xvpt6g3 x16ovd2e",
						children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
							align: "stretch",
							xstyle: g.content,
							children: [
								u.jsx(r("WAWebBizAdCreationTargetingModalAdvantagePlusToggle.react"), { audienceOption: a }),
								u.jsx(r("WAWebBizAdCreationTargetingModalSelectableRow.react"), {
									ariaLabel: s._(
										/*BTDS*/
										""
									),
									onEditClick: C,
									subtitle: o("WAWebBizAdCreationTargetingModalLocationDisplayUtils").formatLocationDisplay(v.geo_locations),
									testid: "biz_native_ads_location_row",
									title: s._(
										/*BTDS*/
										""
									)
								}),
								u.jsx(r("WAWebBizAdCreationTargetingModalSelectableRow.react"), {
									ariaLabel: V,
									onEditClick: y,
									subtitle: o("WAWebBizAdCreationTargetingModalInterestsUtils").formatInterestsDisplayWithPlaceholder(v.flexible_spec),
									testid: "biz_native_ads_interest_row",
									title: U
								}),
								u.jsx(r("WAWebBizAdCreationTargetingModalAgeComponent.react"), {}),
								u.jsx(r("WAWebBizAdCreationTargetingModalGenderComponent.react"), {})
							]
						})
					}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "stretch",
						gap: 16,
						children: [u.jsx("div", {
							className: "xoyeui7 x1iolzdw x1mii8t8",
							children: u.jsx(r("WAWebDivider.react"), { direction: "horizontal" })
						}), u.jsxs(o("WAWebFlex.react").FlexRow, {
							align: "center",
							justify: "end",
							xstyle: g.actionButtons,
							children: [n != null && a === "SAVED_AUDIENCE" ? u.jsx(r("WAWebBizAdCreationTargetingModalDeleteAudienceButton.react"), {
								adAccountID: t,
								audienceID: n,
								onNavigateToDeleteConfirmation: c != null ? c : r("WAWebNoop")
							}) : null, u.jsx(r("WDSButton.react"), {
								disabled: M,
								label: s._(
									/*BTDS*/
									""
								),
								loading: x,
								onPress: A,
								size: "medium",
								testid: "biz_native_ads_save_audience_button",
								variant: "filled"
							})]
						})]
					})]
				})
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);

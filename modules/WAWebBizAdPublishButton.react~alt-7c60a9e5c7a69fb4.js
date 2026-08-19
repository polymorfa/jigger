__d("WAWebBizAdPublishButton.react", [
	"fbt",
	"CometPlaceholder.react",
	"FBLogger",
	"WAWebBizAdCreationDraftIDContext",
	"WAWebBizAdCreationErrorModal.react",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationNoticesUtils",
	"WAWebBizAdCreationSpecContext",
	"WAWebBizAdCreationSuccessModal.react",
	"WAWebBizAdCreationValidateSpecContext",
	"WAWebBizAdLogger",
	"WAWebNoop",
	"WDSButton.react",
	"getErrorSafe",
	"react",
	"useWAWebBizAdCreationMaybeOpenBillingWizard",
	"useWAWebBizAdCreationMaybeOpenCertificationDialog",
	"useWAWebBizAdCreationMaybeOpenEmailVerification",
	"useWAWebBizAdDeleteDraftMutation",
	"useWAWebBizAdSubmit",
	"useWAWebBizAdsCreationOpenModal"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useContext, m = c.useState;
	function p(e) {
		var t, n = e.emailOnboardingDataRef, a = e.flowID, i = e.onboardingDataRef, l = e.onNavigateToManageAds, c = e.pageID, p = e.product, _ = m(!1), f = _[0], g = _[1], h = d(r("WAWebBizAdCreationValidateSpecContext")), y = (t = h == null ? void 0 : h.isValidating) != null ? t : !1, C = d(r("WAWebBizAdCreationLoggerContext")), b = d(r("WAWebBizAdCreationSpecContext")), v = b.currentValue, S = d(r("WAWebBizAdCreationDraftIDContext")), R = r("useWAWebBizAdDeleteDraftMutation")(), L = R[0], E = r("useWAWebBizAdsCreationOpenModal")(), k = r("useWAWebBizAdSubmit")({
			flowID: a,
			onError: function(t) {
				if (g(!1), r("FBLogger")("wa_ctwa_web").mustfix("Ad creation mutation failed: " + String(t.errorMessage)), C != null) {
					var e;
					r("WAWebBizAdLogger").logCritical({
						action: "create",
						adAccountID: v == null || (e = v.adAccountData) == null ? void 0 : e.id,
						context: "ad",
						event: "submit_flow_error",
						eventCategory: "error",
						extra: { error_message: t.errorMessage },
						loggerContext: C
					});
				}
				E(u.jsx(r("WAWebBizAdCreationErrorModal.react"), { errorMessage: t.errorMessage }));
			},
			onSuccess: function(t) {
				var e = function() {
					g(!1), l(), E(u.jsx(r("WAWebBizAdCreationSuccessModal.react"), { boostingStatus: t.boostingStatus }), { blockClose: !0 });
				}, n = S.draftID;
				n != null ? (S.setDraftID(null), L(n).catch(function(e) {
					r("FBLogger")("wa_ctwa_web").catching(r("getErrorSafe")(e)).warn("Draft delete on publish failed");
				}).finally(e)) : e();
			},
			pageID: c,
			product: p
		}), I = r("useWAWebBizAdCreationMaybeOpenEmailVerification")(i, {
			onCancel: r("WAWebNoop"),
			onComplete: function(t) {
				g(!0), k(v, void 0, t);
			}
		}), T = I.isVerifyingEmail, D = I.maybeOpenEmailVerification, x = r("useWAWebBizAdCreationMaybeOpenBillingWizard")({
			onComplete: function() {
				D();
			},
			onWizardClose: r("WAWebNoop")
		}, n), $ = x.isLoading, P = x.maybeLaunchBillingWizard, N = r("useWAWebBizAdCreationMaybeOpenCertificationDialog")({
			onComplete: function() {
				P();
			},
			onDialogClose: r("WAWebNoop")
		}), M = N.isLoading, w = N.maybeLaunchCertificationDialog, A = function() {
			if (C != null && v != null) {
				var e, t, n, o, a, i, l, s, u, c, d, m, p, _, f, g, h;
				r("WAWebBizAdLogger").logCritical({
					adAccountID: (e = v.adAccountData) == null ? void 0 : e.id,
					audienceID: (t = v.audienceData) == null ? void 0 : t.audienceID,
					budget: (n = v.budgetData) == null ? void 0 : n.budget,
					budgetType: "DAILY_BUDGET",
					creativeSpec: JSON.stringify(v.adgroupSpecs),
					currency: (o = v.adAccountData) == null ? void 0 : o.currency,
					defaultBudget: (a = v.budgetData) == null ? void 0 : a.defaultBudget,
					defaultDuration: (i = v.durationData) == null ? void 0 : i.initialDurationInDays,
					duration: (l = v.durationData) == null ? void 0 : l.durationInDays,
					event: "submit_flow_click",
					extra: {
						audience_age_max: (s = v.audienceData) == null || (s = s.targetSpec) == null ? void 0 : s.age_max,
						audience_age_min: (u = v.audienceData) == null || (u = u.targetSpec) == null ? void 0 : u.age_min,
						audience_client_editable: (c = v.audienceData) == null ? void 0 : c.clientEditable,
						audience_genders: (d = v.audienceData) == null || (d = d.targetSpec) == null || (d = d.genders) == null ? void 0 : d.join(","),
						audience_option: (m = v.audienceData) == null ? void 0 : m.audienceOption,
						audience_type: (p = v.audienceData) == null ? void 0 : p.name,
						media_count: (_ = v.currentLocallyUploadedMediaCollection) == null ? void 0 : _.length,
						media_types: (f = v.currentLocallyUploadedMediaCollection) == null ? void 0 : f.getModelsArray().map(function(e) {
							return e.isGif ? "gif" : e.type;
						}).join(","),
						selected_platforms: (g = v.placementData) == null || (g = g.selectedPublisherPlatforms) == null ? void 0 : g.join(",")
					},
					loggerContext: C,
					targetingSpec: JSON.stringify((h = v.audienceData) == null ? void 0 : h.targetSpec)
				});
			}
			w();
		}, F = h != null ? o("WAWebBizAdCreationNoticesUtils").hasBlockingErrors(h.notices, h.inlineNotices) : !1, O = F, B = y || f || $ || M || T;
		return u.jsx(r("WDSButton.react"), {
			disabled: O,
			label: s._(
				/*BTDS*/
				""
			),
			loading: B,
			onPress: A,
			testid: "biz_native_ads_publish_button"
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		return u.jsx(r("WDSButton.react"), {
			disabled: !0,
			label: s._(
				/*BTDS*/
				""
			),
			loading: !0,
			onPress: r("WAWebNoop"),
			testid: "biz_native_ads_publish_button"
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.emailOnboardingDataRef, n = e.flowID, o = e.onboardingDataRef, a = e.onNavigateToManageAds, l = e.pageID, s = e.product;
		return u.jsx(r("CometPlaceholder.react"), {
			fallback: u.jsx(_, {}),
			name: i.id,
			children: u.jsx(p, {
				emailOnboardingDataRef: t,
				flowID: n,
				onNavigateToManageAds: a,
				onboardingDataRef: o,
				pageID: l,
				product: s
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.WAWebBizAdPublishButton = f;
}), 226);

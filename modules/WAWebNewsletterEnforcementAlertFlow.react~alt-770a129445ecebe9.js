__d("WAWebNewsletterEnforcementAlertFlow.react", [
	"JSResourceForInteraction",
	"WATimeUtils",
	"WAWebCommonNewsletterEnums",
	"WAWebEnforcementActionLogging",
	"WAWebLazyLoadedRetriable",
	"WAWebNewsletterAdminProfileEnforcementDetailScreenDrawerLoadable",
	"WAWebNewsletterContactIPReporterStepOneDrawer.react",
	"WAWebNewsletterContactIPReporterStepTwoDrawer.react",
	"WAWebNewsletterDSBFlowStepOneDrawerLoadable",
	"WAWebNewsletterDSBFlowStepThreeDrawerLoadable",
	"WAWebNewsletterDSBFlowStepTwoDrawerLoadable",
	"WAWebNewsletterDeleteDrawer.react",
	"WAWebNewsletterEnforcementAlertDrawerLoadable",
	"WAWebNewsletterGeoSuspendedDetailCountryDrawerLoadable",
	"WAWebNewsletterGeosuspendInformDetailedScreenDrawerLoadable",
	"WAWebNewsletterIntegrityUtils",
	"WAWebNewsletterProfilePictureDeletionDetailScreenDrawerLoadable",
	"WAWebNewsletterRemediationOptionsDrawerLoadable",
	"WAWebNewsletterSuspendInformDetailedScreenDrawerLoadable",
	"WAWebNewsletterSuspendedDetailedScreenDrawerLoadable",
	"WAWebRequestReviewDescriptionScreenDrawerLoadable",
	"WAWebRequestReviewReasonScreenDrawerLoadable",
	"WAWebRightsManagerRequestReviewDescriptionDrawerLoadable",
	"WAWebRightsManagerRequestReviewReasonDrawerLoadable",
	"WAWebRightsManagerRequestReviewTextReasonDrawerLoadable",
	"WAWebSeeReviewDetailScreenDrawerLoadable",
	"WAWebViolatingMessagesScreenDrawerLoadable",
	"react",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useState, d = r("WAWebLazyLoadedRetriable")(async function() {
		var e = await r("JSResourceForInteraction")("WAWebNewsletterCreateAppeal").__setRef("WAWebNewsletterEnforcementAlertFlow.react").load();
		return e.createAppeal;
	}, "createAppeal");
	function m(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.chat, l = a.onClose, s = o("useWAWebFlow").useFlow(o("WAWebCommonNewsletterEnums").AlertScreen.MULTIPLE_ALERTS_LIST_SCREEN, { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }), m = s[0], _ = s[1], f = c(null), g = f[0], h = f[1], y = c(null), C = y[0], b = y[1], v = c(null), S = v[0], R = v[1], L = C == null ? void 0 : C.appealReasonOptions, E = function(t, n) {
			h(t), b(n), n != null ? r("WAWebEnforcementActionLogging").updateEnforcementContext(n) : r("WAWebEnforcementActionLogging").updateEnforcementContext(t), r("WAWebEnforcementActionLogging").logSeeOptionsClick(), _.push(o("WAWebCommonNewsletterEnums").AlertScreen.REMEDIATION_OPTIONS_SCREEN);
		}, k = function(t) {
			if (r("WAWebEnforcementActionLogging").logGetReferenceNumberClick(), t == null) {
				o("WAWebNewsletterIntegrityUtils").showDsbReferenceNumberFailureToast();
				return;
			}
			R(t), _.push(o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP3_SCREEN);
		};
		async function I() {
			var e = await d();
			if ((C == null ? void 0 : C.appealReason) != null) return e({
				additionalAppealReason: C == null ? void 0 : C.additionalAppealReason,
				appealReason: C == null ? void 0 : C.appealReason,
				chat: i,
				enforcementId: C == null ? void 0 : C.enforcementId
			}).then(function(e) {
				e != null && (C == null || C.setAppealState(e.state), C == null || C.setAppealCreationTime(o("WATimeUtils").castToUnixTime(parseInt(e.creationTimestamp, 10))));
			});
			o("WAWebNewsletterIntegrityUtils").showReviewSubmissionFailureToast();
		}
		var T;
		if (_.step == null) return null;
		var D = function() {
			r("WAWebEnforcementActionLogging").logBackClick(), _.pop();
		};
		switch (_.step) {
			case o("WAWebCommonNewsletterEnums").AlertScreen.MULTIPLE_ALERTS_LIST_SCREEN:
				T = u.jsx(o("WAWebNewsletterEnforcementAlertDrawerLoadable").WaWebNewsletterEnforcementAlertDrawerLoadable, {
					onClick: function(t, n) {
						h(t), r("WAWebEnforcementActionLogging").updateEnforcementContext(t), r("WAWebEnforcementActionLogging").logEnforcementDetailClick(), _.push(n);
					},
					chat: i,
					onBack: D,
					onClose: l,
					onAppealClick: function(t) {
						b(t), r("WAWebEnforcementActionLogging").updateEnforcementContext(t), r("WAWebEnforcementActionLogging").logSeeReviewDetailsClick(), _.push(o("WAWebCommonNewsletterEnums").AlertScreen.APPEAL_OUTCOME_SCREEN);
					}
				});
				break;
			case o("WAWebCommonNewsletterEnums").AlertScreen.PROFILE_PICTURE_DELETION_SCREEN:
				T = g != null ? u.jsx(o("WAWebNewsletterProfilePictureDeletionDetailScreenDrawerLoadable").WAWebNewsletterProfilePictureDeletionDetailScreenDrawerLoadable, {
					chat: i,
					onBack: D,
					onClickSeeOptions: E,
					currentEnforcementAlert: g
				}) : null;
				break;
			case o("WAWebCommonNewsletterEnums").AlertScreen.ADMIN_PROFILE_DETAILED_SCREEN:
				T = g != null ? u.jsx(o("WAWebNewsletterAdminProfileEnforcementDetailScreenDrawerLoadable").WAWebNewsletterAdminProfileEnforcementDetailScreenDrawerLoadable, {
					chat: i,
					onBack: D,
					onClickSeeOptions: E,
					currentEnforcementAlert: g
				}) : null;
				break;
			case o("WAWebCommonNewsletterEnums").AlertScreen.SUSPENDED_DETAILED_SCREEN: {
				T = g != null ? u.jsx(o("WAWebNewsletterSuspendedDetailedScreenDrawerLoadable").NewsletterSuspendedDetailedScreenLoadable, {
					chat: i,
					onBack: D,
					onClickSeeOptions: E,
					currentEnforcementAlert: g
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.GEOSUSPENDED_COUNTRY_DETAILED_SCREEN: {
				T = g != null && g.countryCodes != null ? u.jsx(o("WAWebNewsletterGeoSuspendedDetailCountryDrawerLoadable").NewsletterGeoSuspendedDetailCountryScreenLoadable, {
					onBack: D,
					chat: i,
					onClickSeeOptions: E,
					currentEnforcementAlert: g
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.REQUEST_REVIEW_DESCRIPTION_SCREEN: {
				var x, $, P = (C == null || (x = C.violatingContentData) == null ? void 0 : x.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS || (C == null || ($ = C.enforcementExtraData) == null || ($ = $.enforcementTargetData) == null ? void 0 : $.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS;
				T = u.jsx(o("WAWebRequestReviewDescriptionScreenDrawerLoadable").RequestReviewDescriptionScreenLoadable, {
					onBack: D,
					onNext: function() {
						_.pop(), r("WAWebEnforcementActionLogging").logNextClick(), _.push(o("WAWebCommonNewsletterEnums").AlertScreen.REQUEST_REVIEW_REASON_SCREEN);
					},
					reviewType: o("WAWebCommonNewsletterEnums").ReviewType.ENFORCEMENT,
					isStatusContent: P
				});
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.REQUEST_REVIEW_REASON_SCREEN: {
				var N, M, w = (C == null || (N = C.violatingContentData) == null ? void 0 : N.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS || (C == null || (M = C.enforcementExtraData) == null || (M = M.enforcementTargetData) == null ? void 0 : M.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS;
				T = u.jsx(o("WAWebRequestReviewReasonScreenDrawerLoadable").RequestReviewReasonScreenLoadable, {
					onBack: function() {
						r("WAWebEnforcementActionLogging").logBackClick(), _.pop(), _.push(o("WAWebCommonNewsletterEnums").AlertScreen.REQUEST_REVIEW_DESCRIPTION_SCREEN);
					},
					reviewType: o("WAWebCommonNewsletterEnums").ReviewType.ENFORCEMENT,
					isStatusContent: w,
					serverAppealReasons: L,
					onSuccess: D,
					onSubmit: function(t) {
						return C == null || C.setAppealReason(t), r("WAWebEnforcementActionLogging").logSubmitRequestReviewClick(), I();
					}
				});
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP1_SCREEN: {
				T = u.jsx(o("WAWebRightsManagerRequestReviewDescriptionDrawerLoadable").RightsManagerRequestReviewDescriptionDrawerLoadable, {
					onBack: D,
					onNext: function() {
						_.pop(), r("WAWebEnforcementActionLogging").logNextClick(), _.push(o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP2_SCREEN);
					}
				});
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP2_SCREEN: {
				T = u.jsx(o("WAWebRightsManagerRequestReviewReasonDrawerLoadable").RightsManagerRequestReviewReasonDrawerLoadable, {
					onBack: function() {
						_.pop(), _.push(o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP1_SCREEN);
					},
					serverAppealReasons: L,
					onNext: function(t) {
						_.pop(), C == null || C.setAppealReason(t), r("WAWebEnforcementActionLogging").logNextClick(), _.push(o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP3_SCREEN);
					}
				});
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP3_SCREEN: {
				T = C != null ? u.jsx(o("WAWebRightsManagerRequestReviewTextReasonDrawerLoadable").RightsManagerRequestReviewTextReasonDrawerLoadable, {
					onBack: function() {
						C == null || C.setAppealReason(null), r("WAWebEnforcementActionLogging").logBackClick(), _.pop(), _.push(o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP2_SCREEN);
					},
					onSuccess: D,
					onSubmit: function(t) {
						return r("WAWebEnforcementActionLogging").logSubmitRequestReviewClick(), C == null || C.setAdditionalAppealReason(t), I();
					}
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.APPEAL_OUTCOME_SCREEN: {
				T = C != null ? u.jsx(o("WAWebSeeReviewDetailScreenDrawerLoadable").NewsletterAppealOutcomeScreenLoadable, {
					onBack: D,
					chat: i,
					currentEnforcementAppeal: C
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.REMEDIATION_OPTIONS_SCREEN: {
				T = g != null && C != null ? u.jsx(o("WAWebNewsletterRemediationOptionsDrawerLoadable").NewsletterRemediationOptionsDrawerLoadable, {
					chat: i,
					onBack: D,
					currentEnforcementAlert: g,
					currentEnforcementAppeal: C,
					onDeleteNewsletter: function() {
						r("WAWebEnforcementActionLogging").logDeleteChannelClick(), _.push(o("WAWebCommonNewsletterEnums").AlertScreen.DELETE_NEWSLETTER);
					},
					onClickDSBFlow: function() {
						r("WAWebEnforcementActionLogging").logReferDsbClick(), _.push(o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP1_SCREEN);
					},
					onClickEmailReporter: function() {
						r("WAWebEnforcementActionLogging").logEmailReporterClick(), _.push(o("WAWebCommonNewsletterEnums").AlertScreen.CONTACT_IP_REPORTER_STEP1_SCREEN);
					},
					onClickRequestReview: function() {
						r("WAWebEnforcementActionLogging").logRequestReviewClick(), (C == null ? void 0 : C.enforcementSource) === "RM" && ((C == null ? void 0 : C.enforcementType) === o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM || (C == null ? void 0 : C.enforcementType) === o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND_INFORM) ? _.push(o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP1_SCREEN) : _.push(o("WAWebCommonNewsletterEnums").AlertScreen.REQUEST_REVIEW_DESCRIPTION_SCREEN);
					},
					onClickSeeReviewDetails: function() {
						r("WAWebEnforcementActionLogging").logSeeReviewDetailsClick(), _.push(o("WAWebCommonNewsletterEnums").AlertScreen.APPEAL_OUTCOME_SCREEN);
					}
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.SUSPEND_INFORM_SCREEN: {
				T = g != null ? u.jsx(o("WAWebNewsletterSuspendInformDetailedScreenDrawerLoadable").NewsletterSuspendInformDetailedScreenLoadable, {
					chat: i,
					currentEnforcementAlert: g,
					onBack: D,
					onClickSeeOptions: E
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.GEOSUSPEND_INFORM_SCREEN: {
				T = g != null ? u.jsx(o("WAWebNewsletterGeosuspendInformDetailedScreenDrawerLoadable").NewsletterGeosuspendInformDetailedScreenDrawerLoadable, {
					chat: i,
					currentEnforcementAlert: g,
					onBack: D,
					onClickSeeOptions: E
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.VIOLATING_MESSAGES_SCREEN: {
				T = g != null ? u.jsx(o("WAWebViolatingMessagesScreenDrawerLoadable").WAWebViolatingMessagesScreenDrawerLoadable, {
					chat: i,
					currentEnforcementAlert: g,
					onBack: D,
					onClickSeeOptions: E
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.DELETE_NEWSLETTER: {
				T = u.jsx(r("WAWebNewsletterDeleteDrawer.react"), {
					chat: i,
					onBack: D,
					onCancel: D
				});
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP1_SCREEN: {
				T = u.jsx(o("WAWebNewsletterDSBFlowStepOneDrawerLoadable").WAWebNewsletterDSBFlowStepOneDrawerLoadable, {
					onBack: D,
					onClickContinue: function() {
						r("WAWebEnforcementActionLogging").logNextClick(), _.push(o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP2_SCREEN);
					}
				});
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP2_SCREEN: {
				T = C != null ? u.jsx(o("WAWebNewsletterDSBFlowStepTwoDrawerLoadable").WAWebNewsletterDSBFlowStepTwoDrawerLoadable, {
					onBack: D,
					entityId: C.enforcementId,
					onClickGetReferenceNumber: k
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP3_SCREEN: {
				T = S != null ? u.jsx(o("WAWebNewsletterDSBFlowStepThreeDrawerLoadable").WAWebNewsletterDSBFlowStepThreeDrawerLoadable, {
					onBack: D,
					entityId: S
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.CONTACT_IP_REPORTER_STEP2_SCREEN: {
				var A, F;
				T = (C == null || (A = C.enforcementExtraData) == null ? void 0 : A.ipViolationReportData) != null ? u.jsx(r("WAWebNewsletterContactIPReporterStepTwoDrawer.react"), {
					onBack: D,
					enforcementIpData: C == null || (F = C.enforcementExtraData) == null ? void 0 : F.ipViolationReportData
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.CONTACT_IP_REPORTER_STEP1_SCREEN: {
				T = u.jsx(r("WAWebNewsletterContactIPReporterStepOneDrawer.react"), {
					onBack: D,
					onClickGetReporterDetails: function() {
						r("WAWebEnforcementActionLogging").logGetReportDetailsClick(), _.push(o("WAWebCommonNewsletterEnums").AlertScreen.CONTACT_IP_REPORTER_STEP2_SCREEN);
					}
				});
				break;
			}
		}
		return u.jsx(m, {
			flow: _,
			ref: n,
			displayName: "NewsletterAlertFlow",
			requestDismiss: p,
			children: T
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		r("WAWebEnforcementActionLogging").logDismissDrawerClick();
	}
	l.default = m;
}), 98);

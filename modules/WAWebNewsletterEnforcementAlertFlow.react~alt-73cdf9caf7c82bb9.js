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
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useState, d = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
		var e = yield r("JSResourceForInteraction")("WAWebNewsletterCreateAppeal").__setRef("WAWebNewsletterEnforcementAlertFlow.react").load();
		return e.createAppeal;
	}), "createAppeal");
	function m(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.chat, s = i.onClose, m = o("useWAWebFlow").useFlow(o("WAWebCommonNewsletterEnums").AlertScreen.MULTIPLE_ALERTS_LIST_SCREEN, { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }), _ = m[0], f = m[1], g = c(null), h = g[0], y = g[1], C = c(null), b = C[0], v = C[1], S = c(null), R = S[0], L = S[1], E = b == null ? void 0 : b.appealReasonOptions, k = function(t, n) {
			y(t), v(n), n != null ? r("WAWebEnforcementActionLogging").updateEnforcementContext(n) : r("WAWebEnforcementActionLogging").updateEnforcementContext(t), r("WAWebEnforcementActionLogging").logSeeOptionsClick(), f.push(o("WAWebCommonNewsletterEnums").AlertScreen.REMEDIATION_OPTIONS_SCREEN);
		}, I = function(t) {
			if (r("WAWebEnforcementActionLogging").logGetReferenceNumberClick(), t == null) {
				o("WAWebNewsletterIntegrityUtils").showDsbReferenceNumberFailureToast();
				return;
			}
			L(t), f.push(o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP3_SCREEN);
		};
		function T() {
			return D.apply(this, arguments);
		}
		function D() {
			return D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield d();
				if ((b == null ? void 0 : b.appealReason) != null) return e({
					additionalAppealReason: b == null ? void 0 : b.additionalAppealReason,
					appealReason: b == null ? void 0 : b.appealReason,
					chat: l,
					enforcementId: b == null ? void 0 : b.enforcementId
				}).then(function(e) {
					e != null && (b == null || b.setAppealState(e.state), b == null || b.setAppealCreationTime(o("WATimeUtils").castToUnixTime(parseInt(e.creationTimestamp, 10))));
				});
				o("WAWebNewsletterIntegrityUtils").showReviewSubmissionFailureToast();
			}), D.apply(this, arguments);
		}
		var x;
		if (f.step == null) return null;
		var $ = function() {
			r("WAWebEnforcementActionLogging").logBackClick(), f.pop();
		};
		switch (f.step) {
			case o("WAWebCommonNewsletterEnums").AlertScreen.MULTIPLE_ALERTS_LIST_SCREEN:
				x = u.jsx(o("WAWebNewsletterEnforcementAlertDrawerLoadable").WaWebNewsletterEnforcementAlertDrawerLoadable, {
					onClick: function(t, n) {
						y(t), r("WAWebEnforcementActionLogging").updateEnforcementContext(t), r("WAWebEnforcementActionLogging").logEnforcementDetailClick(), f.push(n);
					},
					chat: l,
					onBack: $,
					onClose: s,
					onAppealClick: function(t) {
						v(t), r("WAWebEnforcementActionLogging").updateEnforcementContext(t), r("WAWebEnforcementActionLogging").logSeeReviewDetailsClick(), f.push(o("WAWebCommonNewsletterEnums").AlertScreen.APPEAL_OUTCOME_SCREEN);
					}
				});
				break;
			case o("WAWebCommonNewsletterEnums").AlertScreen.PROFILE_PICTURE_DELETION_SCREEN:
				x = h != null ? u.jsx(o("WAWebNewsletterProfilePictureDeletionDetailScreenDrawerLoadable").WAWebNewsletterProfilePictureDeletionDetailScreenDrawerLoadable, {
					chat: l,
					onBack: $,
					onClickSeeOptions: k,
					currentEnforcementAlert: h
				}) : null;
				break;
			case o("WAWebCommonNewsletterEnums").AlertScreen.ADMIN_PROFILE_DETAILED_SCREEN:
				x = h != null ? u.jsx(o("WAWebNewsletterAdminProfileEnforcementDetailScreenDrawerLoadable").WAWebNewsletterAdminProfileEnforcementDetailScreenDrawerLoadable, {
					chat: l,
					onBack: $,
					onClickSeeOptions: k,
					currentEnforcementAlert: h
				}) : null;
				break;
			case o("WAWebCommonNewsletterEnums").AlertScreen.SUSPENDED_DETAILED_SCREEN: {
				x = h != null ? u.jsx(o("WAWebNewsletterSuspendedDetailedScreenDrawerLoadable").NewsletterSuspendedDetailedScreenLoadable, {
					chat: l,
					onBack: $,
					onClickSeeOptions: k,
					currentEnforcementAlert: h
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.GEOSUSPENDED_COUNTRY_DETAILED_SCREEN: {
				x = h != null && h.countryCodes != null ? u.jsx(o("WAWebNewsletterGeoSuspendedDetailCountryDrawerLoadable").NewsletterGeoSuspendedDetailCountryScreenLoadable, {
					onBack: $,
					chat: l,
					onClickSeeOptions: k,
					currentEnforcementAlert: h
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.REQUEST_REVIEW_DESCRIPTION_SCREEN: {
				var P, N, M = (b == null || (P = b.violatingContentData) == null ? void 0 : P.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS || (b == null || (N = b.enforcementExtraData) == null || (N = N.enforcementTargetData) == null ? void 0 : N.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS;
				x = u.jsx(o("WAWebRequestReviewDescriptionScreenDrawerLoadable").RequestReviewDescriptionScreenLoadable, {
					onBack: $,
					onNext: function() {
						f.pop(), r("WAWebEnforcementActionLogging").logNextClick(), f.push(o("WAWebCommonNewsletterEnums").AlertScreen.REQUEST_REVIEW_REASON_SCREEN);
					},
					reviewType: o("WAWebCommonNewsletterEnums").ReviewType.ENFORCEMENT,
					isStatusContent: M
				});
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.REQUEST_REVIEW_REASON_SCREEN: {
				var w, A, F = (b == null || (w = b.violatingContentData) == null ? void 0 : w.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS || (b == null || (A = b.enforcementExtraData) == null || (A = A.enforcementTargetData) == null ? void 0 : A.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS;
				x = u.jsx(o("WAWebRequestReviewReasonScreenDrawerLoadable").RequestReviewReasonScreenLoadable, {
					onBack: function() {
						r("WAWebEnforcementActionLogging").logBackClick(), f.pop(), f.push(o("WAWebCommonNewsletterEnums").AlertScreen.REQUEST_REVIEW_DESCRIPTION_SCREEN);
					},
					reviewType: o("WAWebCommonNewsletterEnums").ReviewType.ENFORCEMENT,
					isStatusContent: F,
					serverAppealReasons: E,
					onSuccess: $,
					onSubmit: function(t) {
						return b == null || b.setAppealReason(t), r("WAWebEnforcementActionLogging").logSubmitRequestReviewClick(), T();
					}
				});
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP1_SCREEN: {
				x = u.jsx(o("WAWebRightsManagerRequestReviewDescriptionDrawerLoadable").RightsManagerRequestReviewDescriptionDrawerLoadable, {
					onBack: $,
					onNext: function() {
						f.pop(), r("WAWebEnforcementActionLogging").logNextClick(), f.push(o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP2_SCREEN);
					}
				});
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP2_SCREEN: {
				x = u.jsx(o("WAWebRightsManagerRequestReviewReasonDrawerLoadable").RightsManagerRequestReviewReasonDrawerLoadable, {
					onBack: function() {
						f.pop(), f.push(o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP1_SCREEN);
					},
					serverAppealReasons: E,
					onNext: function(t) {
						f.pop(), b == null || b.setAppealReason(t), r("WAWebEnforcementActionLogging").logNextClick(), f.push(o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP3_SCREEN);
					}
				});
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP3_SCREEN: {
				x = b != null ? u.jsx(o("WAWebRightsManagerRequestReviewTextReasonDrawerLoadable").RightsManagerRequestReviewTextReasonDrawerLoadable, {
					onBack: function() {
						b == null || b.setAppealReason(null), r("WAWebEnforcementActionLogging").logBackClick(), f.pop(), f.push(o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP2_SCREEN);
					},
					onSuccess: $,
					onSubmit: function(t) {
						return r("WAWebEnforcementActionLogging").logSubmitRequestReviewClick(), b == null || b.setAdditionalAppealReason(t), T();
					}
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.APPEAL_OUTCOME_SCREEN: {
				x = b != null ? u.jsx(o("WAWebSeeReviewDetailScreenDrawerLoadable").NewsletterAppealOutcomeScreenLoadable, {
					onBack: $,
					chat: l,
					currentEnforcementAppeal: b
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.REMEDIATION_OPTIONS_SCREEN: {
				x = h != null && b != null ? u.jsx(o("WAWebNewsletterRemediationOptionsDrawerLoadable").NewsletterRemediationOptionsDrawerLoadable, {
					chat: l,
					onBack: $,
					currentEnforcementAlert: h,
					currentEnforcementAppeal: b,
					onDeleteNewsletter: function() {
						r("WAWebEnforcementActionLogging").logDeleteChannelClick(), f.push(o("WAWebCommonNewsletterEnums").AlertScreen.DELETE_NEWSLETTER);
					},
					onClickDSBFlow: function() {
						r("WAWebEnforcementActionLogging").logReferDsbClick(), f.push(o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP1_SCREEN);
					},
					onClickEmailReporter: function() {
						r("WAWebEnforcementActionLogging").logEmailReporterClick(), f.push(o("WAWebCommonNewsletterEnums").AlertScreen.CONTACT_IP_REPORTER_STEP1_SCREEN);
					},
					onClickRequestReview: function() {
						r("WAWebEnforcementActionLogging").logRequestReviewClick(), (b == null ? void 0 : b.enforcementSource) === "RM" && ((b == null ? void 0 : b.enforcementType) === o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM || (b == null ? void 0 : b.enforcementType) === o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND_INFORM) ? f.push(o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP1_SCREEN) : f.push(o("WAWebCommonNewsletterEnums").AlertScreen.REQUEST_REVIEW_DESCRIPTION_SCREEN);
					},
					onClickSeeReviewDetails: function() {
						r("WAWebEnforcementActionLogging").logSeeReviewDetailsClick(), f.push(o("WAWebCommonNewsletterEnums").AlertScreen.APPEAL_OUTCOME_SCREEN);
					}
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.SUSPEND_INFORM_SCREEN: {
				x = h != null ? u.jsx(o("WAWebNewsletterSuspendInformDetailedScreenDrawerLoadable").NewsletterSuspendInformDetailedScreenLoadable, {
					chat: l,
					currentEnforcementAlert: h,
					onBack: $,
					onClickSeeOptions: k
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.GEOSUSPEND_INFORM_SCREEN: {
				x = h != null ? u.jsx(o("WAWebNewsletterGeosuspendInformDetailedScreenDrawerLoadable").NewsletterGeosuspendInformDetailedScreenDrawerLoadable, {
					chat: l,
					currentEnforcementAlert: h,
					onBack: $,
					onClickSeeOptions: k
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.VIOLATING_MESSAGES_SCREEN: {
				x = h != null ? u.jsx(o("WAWebViolatingMessagesScreenDrawerLoadable").WAWebViolatingMessagesScreenDrawerLoadable, {
					chat: l,
					currentEnforcementAlert: h,
					onBack: $,
					onClickSeeOptions: k
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.DELETE_NEWSLETTER: {
				x = u.jsx(r("WAWebNewsletterDeleteDrawer.react"), {
					chat: l,
					onBack: $,
					onCancel: $
				});
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP1_SCREEN: {
				x = u.jsx(o("WAWebNewsletterDSBFlowStepOneDrawerLoadable").WAWebNewsletterDSBFlowStepOneDrawerLoadable, {
					onBack: $,
					onClickContinue: function() {
						r("WAWebEnforcementActionLogging").logNextClick(), f.push(o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP2_SCREEN);
					}
				});
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP2_SCREEN: {
				x = b != null ? u.jsx(o("WAWebNewsletterDSBFlowStepTwoDrawerLoadable").WAWebNewsletterDSBFlowStepTwoDrawerLoadable, {
					onBack: $,
					entityId: b.enforcementId,
					onClickGetReferenceNumber: I
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP3_SCREEN: {
				x = R != null ? u.jsx(o("WAWebNewsletterDSBFlowStepThreeDrawerLoadable").WAWebNewsletterDSBFlowStepThreeDrawerLoadable, {
					onBack: $,
					entityId: R
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.CONTACT_IP_REPORTER_STEP2_SCREEN: {
				var O, B;
				x = (b == null || (O = b.enforcementExtraData) == null ? void 0 : O.ipViolationReportData) != null ? u.jsx(r("WAWebNewsletterContactIPReporterStepTwoDrawer.react"), {
					onBack: $,
					enforcementIpData: b == null || (B = b.enforcementExtraData) == null ? void 0 : B.ipViolationReportData
				}) : null;
				break;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.CONTACT_IP_REPORTER_STEP1_SCREEN: {
				x = u.jsx(r("WAWebNewsletterContactIPReporterStepOneDrawer.react"), {
					onBack: $,
					onClickGetReporterDetails: function() {
						r("WAWebEnforcementActionLogging").logGetReportDetailsClick(), f.push(o("WAWebCommonNewsletterEnums").AlertScreen.CONTACT_IP_REPORTER_STEP2_SCREEN);
					}
				});
				break;
			}
		}
		return u.jsx(_, {
			flow: f,
			ref: a,
			displayName: "NewsletterAlertFlow",
			requestDismiss: p,
			children: x
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		r("WAWebEnforcementActionLogging").logDismissDrawerClick();
	}
	l.default = m;
}), 98);

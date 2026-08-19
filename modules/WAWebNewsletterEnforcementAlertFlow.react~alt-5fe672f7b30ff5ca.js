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
	"react-compiler-runtime",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useState, d = r("WAWebLazyLoadedRetriable")(async function() {
		var e = await r("JSResourceForInteraction")("WAWebNewsletterCreateAppeal").__setRef("WAWebNewsletterEnforcementAlertFlow.react").load();
		return e.createAppeal;
	}, "createAppeal");
	function m(t) {
		var n = o("react-compiler-runtime").c(132), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.chat, m = l.onClose, _;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }, n[3] = _) : _ = n[3];
		var f = o("useWAWebFlow").useFlow(o("WAWebCommonNewsletterEnums").AlertScreen.MULTIPLE_ALERTS_LIST_SCREEN, _), g = f[0], h = f[1], y = c(null), C = y[0], b = y[1], v = c(null), S = v[0], R = v[1], L = c(null), E = L[0], k = L[1], I = S == null ? void 0 : S.appealReasonOptions, T;
		n[4] !== h ? (T = function(t, n) {
			b(t), R(n), n != null ? r("WAWebEnforcementActionLogging").updateEnforcementContext(n) : r("WAWebEnforcementActionLogging").updateEnforcementContext(t), r("WAWebEnforcementActionLogging").logSeeOptionsClick(), h.push(o("WAWebCommonNewsletterEnums").AlertScreen.REMEDIATION_OPTIONS_SCREEN);
		}, n[4] = h, n[5] = T) : T = n[5];
		var D = T, x;
		n[6] !== h ? (x = function(t) {
			if (r("WAWebEnforcementActionLogging").logGetReferenceNumberClick(), t == null) {
				o("WAWebNewsletterIntegrityUtils").showDsbReferenceNumberFailureToast();
				return;
			}
			k(t), h.push(o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP3_SCREEN);
		}, n[6] = h, n[7] = x) : x = n[7];
		var $ = x, P;
		n[8] !== s || n[9] !== S ? (P = async function() {
			var e = await d();
			if ((S == null ? void 0 : S.appealReason) != null) return e({
				additionalAppealReason: S == null ? void 0 : S.additionalAppealReason,
				appealReason: S == null ? void 0 : S.appealReason,
				chat: s,
				enforcementId: S == null ? void 0 : S.enforcementId
			}).then(function(e) {
				e != null && (S == null || S.setAppealState(e.state), S == null || S.setAppealCreationTime(o("WATimeUtils").castToUnixTime(parseInt(e.creationTimestamp, 10))));
			});
			o("WAWebNewsletterIntegrityUtils").showReviewSubmissionFailureToast();
		}, n[8] = s, n[9] = S, n[10] = P) : P = n[10];
		var N = P, M;
		if (h.step == null) return null;
		var w;
		n[11] !== h ? (w = function() {
			r("WAWebEnforcementActionLogging").logBackClick(), h.pop();
		}, n[11] = h, n[12] = w) : w = n[12];
		var A = w;
		e: switch (h.step) {
			case o("WAWebCommonNewsletterEnums").AlertScreen.MULTIPLE_ALERTS_LIST_SCREEN: {
				var F;
				n[13] !== h ? (F = function(t, n) {
					b(t), r("WAWebEnforcementActionLogging").updateEnforcementContext(t), r("WAWebEnforcementActionLogging").logEnforcementDetailClick(), h.push(n);
				}, n[13] = h, n[14] = F) : F = n[14];
				var O;
				n[15] !== h ? (O = function(t) {
					R(t), r("WAWebEnforcementActionLogging").updateEnforcementContext(t), r("WAWebEnforcementActionLogging").logSeeReviewDetailsClick(), h.push(o("WAWebCommonNewsletterEnums").AlertScreen.APPEAL_OUTCOME_SCREEN);
				}, n[15] = h, n[16] = O) : O = n[16];
				var B;
				n[17] !== s || n[18] !== A || n[19] !== m || n[20] !== F || n[21] !== O ? (B = u.jsx(o("WAWebNewsletterEnforcementAlertDrawerLoadable").WaWebNewsletterEnforcementAlertDrawerLoadable, {
					onClick: F,
					chat: s,
					onBack: A,
					onClose: m,
					onAppealClick: O
				}), n[17] = s, n[18] = A, n[19] = m, n[20] = F, n[21] = O, n[22] = B) : B = n[22], M = B;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.PROFILE_PICTURE_DELETION_SCREEN: {
				var W;
				n[23] !== s || n[24] !== C || n[25] !== D || n[26] !== A ? (W = C != null ? u.jsx(o("WAWebNewsletterProfilePictureDeletionDetailScreenDrawerLoadable").WAWebNewsletterProfilePictureDeletionDetailScreenDrawerLoadable, {
					chat: s,
					onBack: A,
					onClickSeeOptions: D,
					currentEnforcementAlert: C
				}) : null, n[23] = s, n[24] = C, n[25] = D, n[26] = A, n[27] = W) : W = n[27], M = W;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.ADMIN_PROFILE_DETAILED_SCREEN: {
				var q;
				n[28] !== s || n[29] !== C || n[30] !== D || n[31] !== A ? (q = C != null ? u.jsx(o("WAWebNewsletterAdminProfileEnforcementDetailScreenDrawerLoadable").WAWebNewsletterAdminProfileEnforcementDetailScreenDrawerLoadable, {
					chat: s,
					onBack: A,
					onClickSeeOptions: D,
					currentEnforcementAlert: C
				}) : null, n[28] = s, n[29] = C, n[30] = D, n[31] = A, n[32] = q) : q = n[32], M = q;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.SUSPENDED_DETAILED_SCREEN: {
				var U;
				n[33] !== s || n[34] !== C || n[35] !== D || n[36] !== A ? (U = C != null ? u.jsx(o("WAWebNewsletterSuspendedDetailedScreenDrawerLoadable").NewsletterSuspendedDetailedScreenLoadable, {
					chat: s,
					onBack: A,
					onClickSeeOptions: D,
					currentEnforcementAlert: C
				}) : null, n[33] = s, n[34] = C, n[35] = D, n[36] = A, n[37] = U) : U = n[37], M = U;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.GEOSUSPENDED_COUNTRY_DETAILED_SCREEN: {
				var V;
				n[38] !== s || n[39] !== C || n[40] !== D || n[41] !== A ? (V = C != null && C.countryCodes != null ? u.jsx(o("WAWebNewsletterGeoSuspendedDetailCountryDrawerLoadable").NewsletterGeoSuspendedDetailCountryScreenLoadable, {
					onBack: A,
					chat: s,
					onClickSeeOptions: D,
					currentEnforcementAlert: C
				}) : null, n[38] = s, n[39] = C, n[40] = D, n[41] = A, n[42] = V) : V = n[42], M = V;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.REQUEST_REVIEW_DESCRIPTION_SCREEN: {
				var H, G, z = (S == null || (H = S.violatingContentData) == null ? void 0 : H.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS || (S == null || (G = S.enforcementExtraData) == null || (G = G.enforcementTargetData) == null ? void 0 : G.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS, j;
				n[43] !== h ? (j = function() {
					h.pop(), r("WAWebEnforcementActionLogging").logNextClick(), h.push(o("WAWebCommonNewsletterEnums").AlertScreen.REQUEST_REVIEW_REASON_SCREEN);
				}, n[43] = h, n[44] = j) : j = n[44];
				var K;
				n[45] !== A || n[46] !== z || n[47] !== j ? (K = u.jsx(o("WAWebRequestReviewDescriptionScreenDrawerLoadable").RequestReviewDescriptionScreenLoadable, {
					onBack: A,
					onNext: j,
					reviewType: o("WAWebCommonNewsletterEnums").ReviewType.ENFORCEMENT,
					isStatusContent: z
				}), n[45] = A, n[46] = z, n[47] = j, n[48] = K) : K = n[48], M = K;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.REQUEST_REVIEW_REASON_SCREEN: {
				var Q, X, Y = (S == null || (Q = S.violatingContentData) == null ? void 0 : Q.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS || (S == null || (X = S.enforcementExtraData) == null || (X = X.enforcementTargetData) == null ? void 0 : X.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS, J;
				n[49] !== h ? (J = function() {
					r("WAWebEnforcementActionLogging").logBackClick(), h.pop(), h.push(o("WAWebCommonNewsletterEnums").AlertScreen.REQUEST_REVIEW_DESCRIPTION_SCREEN);
				}, n[49] = h, n[50] = J) : J = n[50];
				var Z;
				n[51] !== S || n[52] !== N ? (Z = function(t) {
					return S == null || S.setAppealReason(t), r("WAWebEnforcementActionLogging").logSubmitRequestReviewClick(), N();
				}, n[51] = S, n[52] = N, n[53] = Z) : Z = n[53];
				var ee;
				n[54] !== A || n[55] !== Y || n[56] !== I || n[57] !== J || n[58] !== Z ? (ee = u.jsx(o("WAWebRequestReviewReasonScreenDrawerLoadable").RequestReviewReasonScreenLoadable, {
					onBack: J,
					reviewType: o("WAWebCommonNewsletterEnums").ReviewType.ENFORCEMENT,
					isStatusContent: Y,
					serverAppealReasons: I,
					onSuccess: A,
					onSubmit: Z
				}), n[54] = A, n[55] = Y, n[56] = I, n[57] = J, n[58] = Z, n[59] = ee) : ee = n[59], M = ee;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP1_SCREEN: {
				var te;
				n[60] !== h ? (te = function() {
					h.pop(), r("WAWebEnforcementActionLogging").logNextClick(), h.push(o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP2_SCREEN);
				}, n[60] = h, n[61] = te) : te = n[61];
				var ne;
				n[62] !== A || n[63] !== te ? (ne = u.jsx(o("WAWebRightsManagerRequestReviewDescriptionDrawerLoadable").RightsManagerRequestReviewDescriptionDrawerLoadable, {
					onBack: A,
					onNext: te
				}), n[62] = A, n[63] = te, n[64] = ne) : ne = n[64], M = ne;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP2_SCREEN: {
				var re;
				n[65] !== h ? (re = function() {
					h.pop(), h.push(o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP1_SCREEN);
				}, n[65] = h, n[66] = re) : re = n[66];
				var oe;
				n[67] !== S || n[68] !== h ? (oe = function(t) {
					h.pop(), S == null || S.setAppealReason(t), r("WAWebEnforcementActionLogging").logNextClick(), h.push(o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP3_SCREEN);
				}, n[67] = S, n[68] = h, n[69] = oe) : oe = n[69];
				var ae;
				n[70] !== I || n[71] !== re || n[72] !== oe ? (ae = u.jsx(o("WAWebRightsManagerRequestReviewReasonDrawerLoadable").RightsManagerRequestReviewReasonDrawerLoadable, {
					onBack: re,
					serverAppealReasons: I,
					onNext: oe
				}), n[70] = I, n[71] = re, n[72] = oe, n[73] = ae) : ae = n[73], M = ae;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP3_SCREEN: {
				var ie;
				n[74] !== S || n[75] !== h || n[76] !== A || n[77] !== N ? (ie = S != null ? u.jsx(o("WAWebRightsManagerRequestReviewTextReasonDrawerLoadable").RightsManagerRequestReviewTextReasonDrawerLoadable, {
					onBack: function() {
						S == null || S.setAppealReason(null), r("WAWebEnforcementActionLogging").logBackClick(), h.pop(), h.push(o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP2_SCREEN);
					},
					onSuccess: A,
					onSubmit: function(t) {
						return r("WAWebEnforcementActionLogging").logSubmitRequestReviewClick(), S == null || S.setAdditionalAppealReason(t), N();
					}
				}) : null, n[74] = S, n[75] = h, n[76] = A, n[77] = N, n[78] = ie) : ie = n[78], M = ie;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.APPEAL_OUTCOME_SCREEN: {
				var le;
				n[79] !== s || n[80] !== S || n[81] !== A ? (le = S != null ? u.jsx(o("WAWebSeeReviewDetailScreenDrawerLoadable").NewsletterAppealOutcomeScreenLoadable, {
					onBack: A,
					chat: s,
					currentEnforcementAppeal: S
				}) : null, n[79] = s, n[80] = S, n[81] = A, n[82] = le) : le = n[82], M = le;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.REMEDIATION_OPTIONS_SCREEN: {
				var se;
				n[83] !== s || n[84] !== C || n[85] !== S || n[86] !== h || n[87] !== A ? (se = C != null && S != null ? u.jsx(o("WAWebNewsletterRemediationOptionsDrawerLoadable").NewsletterRemediationOptionsDrawerLoadable, {
					chat: s,
					onBack: A,
					currentEnforcementAlert: C,
					currentEnforcementAppeal: S,
					onDeleteNewsletter: function() {
						r("WAWebEnforcementActionLogging").logDeleteChannelClick(), h.push(o("WAWebCommonNewsletterEnums").AlertScreen.DELETE_NEWSLETTER);
					},
					onClickDSBFlow: function() {
						r("WAWebEnforcementActionLogging").logReferDsbClick(), h.push(o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP1_SCREEN);
					},
					onClickEmailReporter: function() {
						r("WAWebEnforcementActionLogging").logEmailReporterClick(), h.push(o("WAWebCommonNewsletterEnums").AlertScreen.CONTACT_IP_REPORTER_STEP1_SCREEN);
					},
					onClickRequestReview: function() {
						r("WAWebEnforcementActionLogging").logRequestReviewClick(), (S == null ? void 0 : S.enforcementSource) === "RM" && ((S == null ? void 0 : S.enforcementType) === o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM || (S == null ? void 0 : S.enforcementType) === o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND_INFORM) ? h.push(o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP1_SCREEN) : h.push(o("WAWebCommonNewsletterEnums").AlertScreen.REQUEST_REVIEW_DESCRIPTION_SCREEN);
					},
					onClickSeeReviewDetails: function() {
						r("WAWebEnforcementActionLogging").logSeeReviewDetailsClick(), h.push(o("WAWebCommonNewsletterEnums").AlertScreen.APPEAL_OUTCOME_SCREEN);
					}
				}) : null, n[83] = s, n[84] = C, n[85] = S, n[86] = h, n[87] = A, n[88] = se) : se = n[88], M = se;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.SUSPEND_INFORM_SCREEN: {
				var ue;
				n[89] !== s || n[90] !== C || n[91] !== D || n[92] !== A ? (ue = C != null ? u.jsx(o("WAWebNewsletterSuspendInformDetailedScreenDrawerLoadable").NewsletterSuspendInformDetailedScreenLoadable, {
					chat: s,
					currentEnforcementAlert: C,
					onBack: A,
					onClickSeeOptions: D
				}) : null, n[89] = s, n[90] = C, n[91] = D, n[92] = A, n[93] = ue) : ue = n[93], M = ue;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.GEOSUSPEND_INFORM_SCREEN: {
				var ce;
				n[94] !== s || n[95] !== C || n[96] !== D || n[97] !== A ? (ce = C != null ? u.jsx(o("WAWebNewsletterGeosuspendInformDetailedScreenDrawerLoadable").NewsletterGeosuspendInformDetailedScreenDrawerLoadable, {
					chat: s,
					currentEnforcementAlert: C,
					onBack: A,
					onClickSeeOptions: D
				}) : null, n[94] = s, n[95] = C, n[96] = D, n[97] = A, n[98] = ce) : ce = n[98], M = ce;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.VIOLATING_MESSAGES_SCREEN: {
				var de;
				n[99] !== s || n[100] !== C || n[101] !== D || n[102] !== A ? (de = C != null ? u.jsx(o("WAWebViolatingMessagesScreenDrawerLoadable").WAWebViolatingMessagesScreenDrawerLoadable, {
					chat: s,
					currentEnforcementAlert: C,
					onBack: A,
					onClickSeeOptions: D
				}) : null, n[99] = s, n[100] = C, n[101] = D, n[102] = A, n[103] = de) : de = n[103], M = de;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.DELETE_NEWSLETTER: {
				var me;
				n[104] !== s || n[105] !== A ? (me = u.jsx(r("WAWebNewsletterDeleteDrawer.react"), {
					chat: s,
					onBack: A,
					onCancel: A
				}), n[104] = s, n[105] = A, n[106] = me) : me = n[106], M = me;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP1_SCREEN: {
				var pe;
				n[107] !== h ? (pe = function() {
					r("WAWebEnforcementActionLogging").logNextClick(), h.push(o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP2_SCREEN);
				}, n[107] = h, n[108] = pe) : pe = n[108];
				var _e;
				n[109] !== A || n[110] !== pe ? (_e = u.jsx(o("WAWebNewsletterDSBFlowStepOneDrawerLoadable").WAWebNewsletterDSBFlowStepOneDrawerLoadable, {
					onBack: A,
					onClickContinue: pe
				}), n[109] = A, n[110] = pe, n[111] = _e) : _e = n[111], M = _e;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP2_SCREEN: {
				var fe;
				n[112] !== S || n[113] !== $ || n[114] !== A ? (fe = S != null ? u.jsx(o("WAWebNewsletterDSBFlowStepTwoDrawerLoadable").WAWebNewsletterDSBFlowStepTwoDrawerLoadable, {
					onBack: A,
					entityId: S.enforcementId,
					onClickGetReferenceNumber: $
				}) : null, n[112] = S, n[113] = $, n[114] = A, n[115] = fe) : fe = n[115], M = fe;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP3_SCREEN: {
				var ge;
				n[116] !== E || n[117] !== A ? (ge = E != null ? u.jsx(o("WAWebNewsletterDSBFlowStepThreeDrawerLoadable").WAWebNewsletterDSBFlowStepThreeDrawerLoadable, {
					onBack: A,
					entityId: E
				}) : null, n[116] = E, n[117] = A, n[118] = ge) : ge = n[118], M = ge;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.CONTACT_IP_REPORTER_STEP2_SCREEN: {
				var he, ye;
				if (n[119] !== (S == null || (he = S.enforcementExtraData) == null ? void 0 : he.ipViolationReportData) || n[120] !== A) {
					var Ce, be, ve;
					ye = (S == null || (Ce = S.enforcementExtraData) == null ? void 0 : Ce.ipViolationReportData) != null ? u.jsx(r("WAWebNewsletterContactIPReporterStepTwoDrawer.react"), {
						onBack: A,
						enforcementIpData: S == null || (be = S.enforcementExtraData) == null ? void 0 : be.ipViolationReportData
					}) : null, n[119] = S == null || (ve = S.enforcementExtraData) == null ? void 0 : ve.ipViolationReportData, n[120] = A, n[121] = ye;
				} else ye = n[121];
				M = ye;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.CONTACT_IP_REPORTER_STEP1_SCREEN: {
				var Se;
				n[122] !== h ? (Se = function() {
					r("WAWebEnforcementActionLogging").logGetReportDetailsClick(), h.push(o("WAWebCommonNewsletterEnums").AlertScreen.CONTACT_IP_REPORTER_STEP2_SCREEN);
				}, n[122] = h, n[123] = Se) : Se = n[123];
				var Re;
				n[124] !== A || n[125] !== Se ? (Re = u.jsx(r("WAWebNewsletterContactIPReporterStepOneDrawer.react"), {
					onBack: A,
					onClickGetReporterDetails: Se
				}), n[124] = A, n[125] = Se, n[126] = Re) : Re = n[126], M = Re;
			}
		}
		var Le;
		return n[127] !== g || n[128] !== M || n[129] !== h || n[130] !== i ? (Le = u.jsx(g, {
			flow: h,
			ref: i,
			displayName: "NewsletterAlertFlow",
			requestDismiss: p,
			children: M
		}), n[127] = g, n[128] = M, n[129] = h, n[130] = i, n[131] = Le) : Le = n[131], Le;
	}
	function p() {
		r("WAWebEnforcementActionLogging").logDismissDrawerClick();
	}
	l.default = m;
}), 98);

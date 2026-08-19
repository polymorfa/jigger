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
	"react-compiler-runtime",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useState, d = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
		var e = yield r("JSResourceForInteraction")("WAWebNewsletterCreateAppeal").__setRef("WAWebNewsletterEnforcementAlertFlow.react").load();
		return e.createAppeal;
	}), "createAppeal");
	function m(t) {
		var a = o("react-compiler-runtime").c(132), i, l;
		a[0] !== t ? (l = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), a[0] = t, a[1] = i, a[2] = l) : (i = a[1], l = a[2]);
		var s = i, m = s.chat, _ = s.onClose, f;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (f = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }, a[3] = f) : f = a[3];
		var g = o("useWAWebFlow").useFlow(o("WAWebCommonNewsletterEnums").AlertScreen.MULTIPLE_ALERTS_LIST_SCREEN, f), h = g[0], y = g[1], C = c(null), b = C[0], v = C[1], S = c(null), R = S[0], L = S[1], E = c(null), k = E[0], I = E[1], T = R == null ? void 0 : R.appealReasonOptions, D;
		a[4] !== y ? (D = function(t, n) {
			v(t), L(n), n != null ? r("WAWebEnforcementActionLogging").updateEnforcementContext(n) : r("WAWebEnforcementActionLogging").updateEnforcementContext(t), r("WAWebEnforcementActionLogging").logSeeOptionsClick(), y.push(o("WAWebCommonNewsletterEnums").AlertScreen.REMEDIATION_OPTIONS_SCREEN);
		}, a[4] = y, a[5] = D) : D = a[5];
		var x = D, $;
		a[6] !== y ? ($ = function(t) {
			if (r("WAWebEnforcementActionLogging").logGetReferenceNumberClick(), t == null) {
				o("WAWebNewsletterIntegrityUtils").showDsbReferenceNumberFailureToast();
				return;
			}
			I(t), y.push(o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP3_SCREEN);
		}, a[6] = y, a[7] = $) : $ = a[7];
		var P = $, N;
		a[8] !== m || a[9] !== R ? (N = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield d();
				if ((R == null ? void 0 : R.appealReason) != null) return e({
					additionalAppealReason: R == null ? void 0 : R.additionalAppealReason,
					appealReason: R == null ? void 0 : R.appealReason,
					chat: m,
					enforcementId: R == null ? void 0 : R.enforcementId
				}).then(function(e) {
					e != null && (R == null || R.setAppealState(e.state), R == null || R.setAppealCreationTime(o("WATimeUtils").castToUnixTime(parseInt(e.creationTimestamp, 10))));
				});
				o("WAWebNewsletterIntegrityUtils").showReviewSubmissionFailureToast();
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(), a[8] = m, a[9] = R, a[10] = N) : N = a[10];
		var M = N, w;
		if (y.step == null) return null;
		var A;
		a[11] !== y ? (A = function() {
			r("WAWebEnforcementActionLogging").logBackClick(), y.pop();
		}, a[11] = y, a[12] = A) : A = a[12];
		var F = A;
		e: switch (y.step) {
			case o("WAWebCommonNewsletterEnums").AlertScreen.MULTIPLE_ALERTS_LIST_SCREEN: {
				var O;
				a[13] !== y ? (O = function(t, n) {
					v(t), r("WAWebEnforcementActionLogging").updateEnforcementContext(t), r("WAWebEnforcementActionLogging").logEnforcementDetailClick(), y.push(n);
				}, a[13] = y, a[14] = O) : O = a[14];
				var B;
				a[15] !== y ? (B = function(t) {
					L(t), r("WAWebEnforcementActionLogging").updateEnforcementContext(t), r("WAWebEnforcementActionLogging").logSeeReviewDetailsClick(), y.push(o("WAWebCommonNewsletterEnums").AlertScreen.APPEAL_OUTCOME_SCREEN);
				}, a[15] = y, a[16] = B) : B = a[16];
				var W;
				a[17] !== m || a[18] !== F || a[19] !== _ || a[20] !== O || a[21] !== B ? (W = u.jsx(o("WAWebNewsletterEnforcementAlertDrawerLoadable").WaWebNewsletterEnforcementAlertDrawerLoadable, {
					onClick: O,
					chat: m,
					onBack: F,
					onClose: _,
					onAppealClick: B
				}), a[17] = m, a[18] = F, a[19] = _, a[20] = O, a[21] = B, a[22] = W) : W = a[22], w = W;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.PROFILE_PICTURE_DELETION_SCREEN: {
				var q;
				a[23] !== m || a[24] !== b || a[25] !== x || a[26] !== F ? (q = b != null ? u.jsx(o("WAWebNewsletterProfilePictureDeletionDetailScreenDrawerLoadable").WAWebNewsletterProfilePictureDeletionDetailScreenDrawerLoadable, {
					chat: m,
					onBack: F,
					onClickSeeOptions: x,
					currentEnforcementAlert: b
				}) : null, a[23] = m, a[24] = b, a[25] = x, a[26] = F, a[27] = q) : q = a[27], w = q;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.ADMIN_PROFILE_DETAILED_SCREEN: {
				var U;
				a[28] !== m || a[29] !== b || a[30] !== x || a[31] !== F ? (U = b != null ? u.jsx(o("WAWebNewsletterAdminProfileEnforcementDetailScreenDrawerLoadable").WAWebNewsletterAdminProfileEnforcementDetailScreenDrawerLoadable, {
					chat: m,
					onBack: F,
					onClickSeeOptions: x,
					currentEnforcementAlert: b
				}) : null, a[28] = m, a[29] = b, a[30] = x, a[31] = F, a[32] = U) : U = a[32], w = U;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.SUSPENDED_DETAILED_SCREEN: {
				var V;
				a[33] !== m || a[34] !== b || a[35] !== x || a[36] !== F ? (V = b != null ? u.jsx(o("WAWebNewsletterSuspendedDetailedScreenDrawerLoadable").NewsletterSuspendedDetailedScreenLoadable, {
					chat: m,
					onBack: F,
					onClickSeeOptions: x,
					currentEnforcementAlert: b
				}) : null, a[33] = m, a[34] = b, a[35] = x, a[36] = F, a[37] = V) : V = a[37], w = V;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.GEOSUSPENDED_COUNTRY_DETAILED_SCREEN: {
				var H;
				a[38] !== m || a[39] !== b || a[40] !== x || a[41] !== F ? (H = b != null && b.countryCodes != null ? u.jsx(o("WAWebNewsletterGeoSuspendedDetailCountryDrawerLoadable").NewsletterGeoSuspendedDetailCountryScreenLoadable, {
					onBack: F,
					chat: m,
					onClickSeeOptions: x,
					currentEnforcementAlert: b
				}) : null, a[38] = m, a[39] = b, a[40] = x, a[41] = F, a[42] = H) : H = a[42], w = H;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.REQUEST_REVIEW_DESCRIPTION_SCREEN: {
				var G, z, j = (R == null || (G = R.violatingContentData) == null ? void 0 : G.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS || (R == null || (z = R.enforcementExtraData) == null || (z = z.enforcementTargetData) == null ? void 0 : z.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS, K;
				a[43] !== y ? (K = function() {
					y.pop(), r("WAWebEnforcementActionLogging").logNextClick(), y.push(o("WAWebCommonNewsletterEnums").AlertScreen.REQUEST_REVIEW_REASON_SCREEN);
				}, a[43] = y, a[44] = K) : K = a[44];
				var Q;
				a[45] !== F || a[46] !== j || a[47] !== K ? (Q = u.jsx(o("WAWebRequestReviewDescriptionScreenDrawerLoadable").RequestReviewDescriptionScreenLoadable, {
					onBack: F,
					onNext: K,
					reviewType: o("WAWebCommonNewsletterEnums").ReviewType.ENFORCEMENT,
					isStatusContent: j
				}), a[45] = F, a[46] = j, a[47] = K, a[48] = Q) : Q = a[48], w = Q;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.REQUEST_REVIEW_REASON_SCREEN: {
				var X, Y, J = (R == null || (X = R.violatingContentData) == null ? void 0 : X.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS || (R == null || (Y = R.enforcementExtraData) == null || (Y = Y.enforcementTargetData) == null ? void 0 : Y.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS, Z;
				a[49] !== y ? (Z = function() {
					r("WAWebEnforcementActionLogging").logBackClick(), y.pop(), y.push(o("WAWebCommonNewsletterEnums").AlertScreen.REQUEST_REVIEW_DESCRIPTION_SCREEN);
				}, a[49] = y, a[50] = Z) : Z = a[50];
				var ee;
				a[51] !== R || a[52] !== M ? (ee = function(t) {
					return R == null || R.setAppealReason(t), r("WAWebEnforcementActionLogging").logSubmitRequestReviewClick(), M();
				}, a[51] = R, a[52] = M, a[53] = ee) : ee = a[53];
				var te;
				a[54] !== F || a[55] !== J || a[56] !== T || a[57] !== Z || a[58] !== ee ? (te = u.jsx(o("WAWebRequestReviewReasonScreenDrawerLoadable").RequestReviewReasonScreenLoadable, {
					onBack: Z,
					reviewType: o("WAWebCommonNewsletterEnums").ReviewType.ENFORCEMENT,
					isStatusContent: J,
					serverAppealReasons: T,
					onSuccess: F,
					onSubmit: ee
				}), a[54] = F, a[55] = J, a[56] = T, a[57] = Z, a[58] = ee, a[59] = te) : te = a[59], w = te;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP1_SCREEN: {
				var ne;
				a[60] !== y ? (ne = function() {
					y.pop(), r("WAWebEnforcementActionLogging").logNextClick(), y.push(o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP2_SCREEN);
				}, a[60] = y, a[61] = ne) : ne = a[61];
				var re;
				a[62] !== F || a[63] !== ne ? (re = u.jsx(o("WAWebRightsManagerRequestReviewDescriptionDrawerLoadable").RightsManagerRequestReviewDescriptionDrawerLoadable, {
					onBack: F,
					onNext: ne
				}), a[62] = F, a[63] = ne, a[64] = re) : re = a[64], w = re;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP2_SCREEN: {
				var oe;
				a[65] !== y ? (oe = function() {
					y.pop(), y.push(o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP1_SCREEN);
				}, a[65] = y, a[66] = oe) : oe = a[66];
				var ae;
				a[67] !== R || a[68] !== y ? (ae = function(t) {
					y.pop(), R == null || R.setAppealReason(t), r("WAWebEnforcementActionLogging").logNextClick(), y.push(o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP3_SCREEN);
				}, a[67] = R, a[68] = y, a[69] = ae) : ae = a[69];
				var ie;
				a[70] !== T || a[71] !== oe || a[72] !== ae ? (ie = u.jsx(o("WAWebRightsManagerRequestReviewReasonDrawerLoadable").RightsManagerRequestReviewReasonDrawerLoadable, {
					onBack: oe,
					serverAppealReasons: T,
					onNext: ae
				}), a[70] = T, a[71] = oe, a[72] = ae, a[73] = ie) : ie = a[73], w = ie;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP3_SCREEN: {
				var le;
				a[74] !== R || a[75] !== y || a[76] !== F || a[77] !== M ? (le = R != null ? u.jsx(o("WAWebRightsManagerRequestReviewTextReasonDrawerLoadable").RightsManagerRequestReviewTextReasonDrawerLoadable, {
					onBack: function() {
						R == null || R.setAppealReason(null), r("WAWebEnforcementActionLogging").logBackClick(), y.pop(), y.push(o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP2_SCREEN);
					},
					onSuccess: F,
					onSubmit: function(t) {
						return r("WAWebEnforcementActionLogging").logSubmitRequestReviewClick(), R == null || R.setAdditionalAppealReason(t), M();
					}
				}) : null, a[74] = R, a[75] = y, a[76] = F, a[77] = M, a[78] = le) : le = a[78], w = le;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.APPEAL_OUTCOME_SCREEN: {
				var se;
				a[79] !== m || a[80] !== R || a[81] !== F ? (se = R != null ? u.jsx(o("WAWebSeeReviewDetailScreenDrawerLoadable").NewsletterAppealOutcomeScreenLoadable, {
					onBack: F,
					chat: m,
					currentEnforcementAppeal: R
				}) : null, a[79] = m, a[80] = R, a[81] = F, a[82] = se) : se = a[82], w = se;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.REMEDIATION_OPTIONS_SCREEN: {
				var ue;
				a[83] !== m || a[84] !== b || a[85] !== R || a[86] !== y || a[87] !== F ? (ue = b != null && R != null ? u.jsx(o("WAWebNewsletterRemediationOptionsDrawerLoadable").NewsletterRemediationOptionsDrawerLoadable, {
					chat: m,
					onBack: F,
					currentEnforcementAlert: b,
					currentEnforcementAppeal: R,
					onDeleteNewsletter: function() {
						r("WAWebEnforcementActionLogging").logDeleteChannelClick(), y.push(o("WAWebCommonNewsletterEnums").AlertScreen.DELETE_NEWSLETTER);
					},
					onClickDSBFlow: function() {
						r("WAWebEnforcementActionLogging").logReferDsbClick(), y.push(o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP1_SCREEN);
					},
					onClickEmailReporter: function() {
						r("WAWebEnforcementActionLogging").logEmailReporterClick(), y.push(o("WAWebCommonNewsletterEnums").AlertScreen.CONTACT_IP_REPORTER_STEP1_SCREEN);
					},
					onClickRequestReview: function() {
						r("WAWebEnforcementActionLogging").logRequestReviewClick(), (R == null ? void 0 : R.enforcementSource) === "RM" && ((R == null ? void 0 : R.enforcementType) === o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM || (R == null ? void 0 : R.enforcementType) === o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND_INFORM) ? y.push(o("WAWebCommonNewsletterEnums").AlertScreen.RM_REQUEST_REVIEW_SCREEN_STEP1_SCREEN) : y.push(o("WAWebCommonNewsletterEnums").AlertScreen.REQUEST_REVIEW_DESCRIPTION_SCREEN);
					},
					onClickSeeReviewDetails: function() {
						r("WAWebEnforcementActionLogging").logSeeReviewDetailsClick(), y.push(o("WAWebCommonNewsletterEnums").AlertScreen.APPEAL_OUTCOME_SCREEN);
					}
				}) : null, a[83] = m, a[84] = b, a[85] = R, a[86] = y, a[87] = F, a[88] = ue) : ue = a[88], w = ue;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.SUSPEND_INFORM_SCREEN: {
				var ce;
				a[89] !== m || a[90] !== b || a[91] !== x || a[92] !== F ? (ce = b != null ? u.jsx(o("WAWebNewsletterSuspendInformDetailedScreenDrawerLoadable").NewsletterSuspendInformDetailedScreenLoadable, {
					chat: m,
					currentEnforcementAlert: b,
					onBack: F,
					onClickSeeOptions: x
				}) : null, a[89] = m, a[90] = b, a[91] = x, a[92] = F, a[93] = ce) : ce = a[93], w = ce;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.GEOSUSPEND_INFORM_SCREEN: {
				var de;
				a[94] !== m || a[95] !== b || a[96] !== x || a[97] !== F ? (de = b != null ? u.jsx(o("WAWebNewsletterGeosuspendInformDetailedScreenDrawerLoadable").NewsletterGeosuspendInformDetailedScreenDrawerLoadable, {
					chat: m,
					currentEnforcementAlert: b,
					onBack: F,
					onClickSeeOptions: x
				}) : null, a[94] = m, a[95] = b, a[96] = x, a[97] = F, a[98] = de) : de = a[98], w = de;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.VIOLATING_MESSAGES_SCREEN: {
				var me;
				a[99] !== m || a[100] !== b || a[101] !== x || a[102] !== F ? (me = b != null ? u.jsx(o("WAWebViolatingMessagesScreenDrawerLoadable").WAWebViolatingMessagesScreenDrawerLoadable, {
					chat: m,
					currentEnforcementAlert: b,
					onBack: F,
					onClickSeeOptions: x
				}) : null, a[99] = m, a[100] = b, a[101] = x, a[102] = F, a[103] = me) : me = a[103], w = me;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.DELETE_NEWSLETTER: {
				var pe;
				a[104] !== m || a[105] !== F ? (pe = u.jsx(r("WAWebNewsletterDeleteDrawer.react"), {
					chat: m,
					onBack: F,
					onCancel: F
				}), a[104] = m, a[105] = F, a[106] = pe) : pe = a[106], w = pe;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP1_SCREEN: {
				var _e;
				a[107] !== y ? (_e = function() {
					r("WAWebEnforcementActionLogging").logNextClick(), y.push(o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP2_SCREEN);
				}, a[107] = y, a[108] = _e) : _e = a[108];
				var fe;
				a[109] !== F || a[110] !== _e ? (fe = u.jsx(o("WAWebNewsletterDSBFlowStepOneDrawerLoadable").WAWebNewsletterDSBFlowStepOneDrawerLoadable, {
					onBack: F,
					onClickContinue: _e
				}), a[109] = F, a[110] = _e, a[111] = fe) : fe = a[111], w = fe;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP2_SCREEN: {
				var ge;
				a[112] !== R || a[113] !== P || a[114] !== F ? (ge = R != null ? u.jsx(o("WAWebNewsletterDSBFlowStepTwoDrawerLoadable").WAWebNewsletterDSBFlowStepTwoDrawerLoadable, {
					onBack: F,
					entityId: R.enforcementId,
					onClickGetReferenceNumber: P
				}) : null, a[112] = R, a[113] = P, a[114] = F, a[115] = ge) : ge = a[115], w = ge;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP3_SCREEN: {
				var he;
				a[116] !== k || a[117] !== F ? (he = k != null ? u.jsx(o("WAWebNewsletterDSBFlowStepThreeDrawerLoadable").WAWebNewsletterDSBFlowStepThreeDrawerLoadable, {
					onBack: F,
					entityId: k
				}) : null, a[116] = k, a[117] = F, a[118] = he) : he = a[118], w = he;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.CONTACT_IP_REPORTER_STEP2_SCREEN: {
				var ye, Ce;
				if (a[119] !== (R == null || (ye = R.enforcementExtraData) == null ? void 0 : ye.ipViolationReportData) || a[120] !== F) {
					var be, ve, Se;
					Ce = (R == null || (be = R.enforcementExtraData) == null ? void 0 : be.ipViolationReportData) != null ? u.jsx(r("WAWebNewsletterContactIPReporterStepTwoDrawer.react"), {
						onBack: F,
						enforcementIpData: R == null || (ve = R.enforcementExtraData) == null ? void 0 : ve.ipViolationReportData
					}) : null, a[119] = R == null || (Se = R.enforcementExtraData) == null ? void 0 : Se.ipViolationReportData, a[120] = F, a[121] = Ce;
				} else Ce = a[121];
				w = Ce;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").AlertScreen.CONTACT_IP_REPORTER_STEP1_SCREEN: {
				var Re;
				a[122] !== y ? (Re = function() {
					r("WAWebEnforcementActionLogging").logGetReportDetailsClick(), y.push(o("WAWebCommonNewsletterEnums").AlertScreen.CONTACT_IP_REPORTER_STEP2_SCREEN);
				}, a[122] = y, a[123] = Re) : Re = a[123];
				var Le;
				a[124] !== F || a[125] !== Re ? (Le = u.jsx(r("WAWebNewsletterContactIPReporterStepOneDrawer.react"), {
					onBack: F,
					onClickGetReporterDetails: Re
				}), a[124] = F, a[125] = Re, a[126] = Le) : Le = a[126], w = Le;
			}
		}
		var Ee;
		return a[127] !== h || a[128] !== w || a[129] !== y || a[130] !== l ? (Ee = u.jsx(h, {
			flow: y,
			ref: l,
			displayName: "NewsletterAlertFlow",
			requestDismiss: p,
			children: w
		}), a[127] = h, a[128] = w, a[129] = y, a[130] = l, a[131] = Ee) : Ee = a[131], Ee;
	}
	function p() {
		r("WAWebEnforcementActionLogging").logDismissDrawerClick();
	}
	l.default = m;
}), 98);

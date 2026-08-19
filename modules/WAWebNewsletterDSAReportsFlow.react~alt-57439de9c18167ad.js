__d("WAWebNewsletterDSAReportsFlow.react", [
	"$InternalEnum",
	"WAWebCommonNewsletterEnums",
	"WAWebNewsletterCreateReportAppealAction",
	"WAWebNewsletterDSAReportDetailsDrawerLoadable",
	"WAWebNewsletterDSAReportsDrawer.react",
	"WAWebNewsletterDSBFlowStepOneDrawerLoadable",
	"WAWebNewsletterDSBFlowStepThreeDrawerLoadable",
	"WAWebNewsletterDSBFlowStepTwoDrawerLoadable",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterIntegrityUtils",
	"WAWebNewsletterReportsRemediationOptionsDrawerLoadable",
	"WAWebRequestReviewDescriptionScreenDrawerLoadable",
	"WAWebRequestReviewReasonScreenDrawer.react",
	"react",
	"react-compiler-runtime",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useState, d = n("$InternalEnum").Mirrored([
		"REPORT_LIST",
		"REPORT_DETAILS",
		"REQUEST_REVIEW_DESCRIPTION_SCREEN",
		"REQUEST_REVIEW_REASON_SCREEN",
		"DSA_REPORT_REMEDIATION_OPTIONS",
		"DSB_STEP1_SCREEN",
		"DSB_STEP2_SCREEN",
		"DSB_STEP3_SCREEN"
	]);
	function m(t) {
		var n = o("react-compiler-runtime").c(69), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.onClose, m = c(null), p = m[0], _ = m[1], f = c(o("WAWebCommonNewsletterEnums").ReviewType.REPORT), g = f[0], h = f[1], y = c(null), C = y[0], b = y[1], v = p == null ? void 0 : p.appeal.appealReasonOptions, S;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (S = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }, n[3] = S) : S = n[3];
		var R = o("useWAWebFlow").useFlow(d.REPORT_LIST, S), L = R[0], E = R[1], k;
		n[4] !== E ? (k = function(t) {
			_(t), E.push(d.REPORT_DETAILS);
		}, n[4] = E, n[5] = k) : k = n[5];
		var I = k, T;
		n[6] !== p ? (T = async function(t) {
			if (p == null) {
				o("WAWebNewsletterIntegrityUtils").showReviewSubmissionFailureToast();
				return;
			}
			await o("WAWebNewsletterCreateReportAppealAction").createNewsletterReportAppealAction({
				reportId: p.id.toString(),
				reason: t
			});
		}, n[6] = p, n[7] = T) : T = n[7];
		var D = T, x;
		n[8] !== E ? (x = function(t) {
			if (t == null) {
				o("WAWebNewsletterIntegrityUtils").showDsbReferenceNumberFailureToast();
				return;
			}
			b(t), E.push(d.DSB_STEP3_SCREEN);
		}, n[8] = E, n[9] = x) : x = n[9];
		var $ = x;
		if (E.step == null) return null;
		var P;
		n[10] !== E || n[11] !== p ? (P = function() {
			p != null && (h(o("WAWebCommonNewsletterEnums").ReviewType.REPORT), p.reportContentData.reportContentType === "status" ? h(o("WAWebCommonNewsletterEnums").ReviewType.STATUS_REPORT) : p.reportContentData.reportContentType === "response" && o("WAWebNewsletterGatingUtils").isNewsletterIntegrityQuestionsM1Enabled() === !0 && h(o("WAWebCommonNewsletterEnums").ReviewType.RESPONSE_REPORT), E.push(d.REQUEST_REVIEW_DESCRIPTION_SCREEN));
		}, n[10] = E, n[11] = p, n[12] = P) : P = n[12];
		var N = P, M;
		e: switch (E.step) {
			case d.REPORT_LIST: {
				var w;
				n[13] !== I || n[14] !== s ? (w = u.jsx(r("WAWebNewsletterDSAReportsDrawer.react"), {
					onClose: s,
					onReportClick: I
				}), n[13] = I, n[14] = s, n[15] = w) : w = n[15], M = w;
				break e;
			}
			case d.REPORT_DETAILS: {
				if (p == null) return null;
				var A;
				n[16] !== E ? (A = function() {
					return E.pop();
				}, n[16] = E, n[17] = A) : A = n[17];
				var F;
				n[18] !== E ? (F = function() {
					E.push(d.DSA_REPORT_REMEDIATION_OPTIONS);
				}, n[18] = E, n[19] = F) : F = n[19];
				var O;
				n[20] !== N || n[21] !== p || n[22] !== A || n[23] !== F ? (O = u.jsx(o("WAWebNewsletterDSAReportDetailsDrawerLoadable").NewsletterDSAReportDetailsDrawerLoadable, {
					onBack: A,
					onRequestReviewClick: N,
					onClickSeeOptions: F,
					report: p
				}), n[20] = N, n[21] = p, n[22] = A, n[23] = F, n[24] = O) : O = n[24], M = O;
				break e;
			}
			case d.REQUEST_REVIEW_DESCRIPTION_SCREEN: {
				var B, W;
				n[25] !== E ? (B = function() {
					return E.pop();
				}, W = function() {
					E.pop(), E.push(d.REQUEST_REVIEW_REASON_SCREEN);
				}, n[25] = E, n[26] = B, n[27] = W) : (B = n[26], W = n[27]);
				var q;
				n[28] !== g || n[29] !== B || n[30] !== W ? (q = u.jsx(o("WAWebRequestReviewDescriptionScreenDrawerLoadable").RequestReviewDescriptionScreenLoadable, {
					reviewType: g,
					onBack: B,
					onNext: W
				}), n[28] = g, n[29] = B, n[30] = W, n[31] = q) : q = n[31], M = q;
				break e;
			}
			case d.REQUEST_REVIEW_REASON_SCREEN: {
				var U;
				n[32] !== E ? (U = function() {
					E.pop(void 0, o("WAWebNewsletterGatingUtils").isDSA21ChannelReportingEnabled() ? 2 : 1);
				}, n[32] = E, n[33] = U) : U = n[33];
				var V = U, H;
				n[34] !== E ? (H = function() {
					E.pop(), E.push(d.REQUEST_REVIEW_DESCRIPTION_SCREEN);
				}, n[34] = E, n[35] = H) : H = n[35];
				var G;
				n[36] !== V || n[37] !== D || n[38] !== g || n[39] !== v || n[40] !== H ? (G = u.jsx(o("WAWebRequestReviewReasonScreenDrawer.react").RequestReviewReasonScreen, {
					reviewType: g,
					onBack: H,
					onSuccess: V,
					onSubmit: D,
					serverAppealReasons: v
				}), n[36] = V, n[37] = D, n[38] = g, n[39] = v, n[40] = H, n[41] = G) : G = n[41], M = G;
				break e;
			}
			case d.DSA_REPORT_REMEDIATION_OPTIONS: {
				if (p == null) return null;
				var z;
				n[42] !== E ? (z = function() {
					return E.pop();
				}, n[42] = E, n[43] = z) : z = n[43];
				var j;
				n[44] !== E ? (j = function() {
					E.push(d.DSB_STEP1_SCREEN);
				}, n[44] = E, n[45] = j) : j = n[45];
				var K;
				n[46] !== N || n[47] !== p || n[48] !== z || n[49] !== j ? (K = u.jsx(o("WAWebNewsletterReportsRemediationOptionsDrawerLoadable").NewsletterReportsRemediationOptionsDrawerLoadable, {
					onBack: z,
					selectedReport: p,
					onClickRequestReview: N,
					onClickDSBFlow: j
				}), n[46] = N, n[47] = p, n[48] = z, n[49] = j, n[50] = K) : K = n[50], M = K;
				break e;
			}
			case d.DSB_STEP1_SCREEN: {
				var Q;
				n[51] !== E ? (Q = u.jsx(o("WAWebNewsletterDSBFlowStepOneDrawerLoadable").WAWebNewsletterDSBFlowStepOneDrawerLoadable, {
					onBack: function() {
						return E.pop();
					},
					onClickContinue: function() {
						E.push(d.DSB_STEP2_SCREEN);
					}
				}), n[51] = E, n[52] = Q) : Q = n[52], M = Q;
				break e;
			}
			case d.DSB_STEP2_SCREEN: {
				if (p == null) return null;
				var X;
				n[53] !== E ? (X = function() {
					return E.pop();
				}, n[53] = E, n[54] = X) : X = n[54];
				var Y;
				n[55] !== p.id ? (Y = p.id.toString(), n[55] = p.id, n[56] = Y) : Y = n[56];
				var J;
				n[57] !== $ || n[58] !== X || n[59] !== Y ? (J = u.jsx(o("WAWebNewsletterDSBFlowStepTwoDrawerLoadable").WAWebNewsletterDSBFlowStepTwoDrawerLoadable, {
					onBack: X,
					onClickGetReferenceNumber: $,
					entityId: Y
				}), n[57] = $, n[58] = X, n[59] = Y, n[60] = J) : J = n[60], M = J;
				break e;
			}
			case d.DSB_STEP3_SCREEN: {
				var Z;
				n[61] !== C || n[62] !== E ? (Z = C != null ? u.jsx(o("WAWebNewsletterDSBFlowStepThreeDrawerLoadable").WAWebNewsletterDSBFlowStepThreeDrawerLoadable, {
					onBack: function() {
						return E.pop();
					},
					entityId: C
				}) : null, n[61] = C, n[62] = E, n[63] = Z) : Z = n[63], M = Z;
			}
		}
		var ee;
		return n[64] !== L || n[65] !== M || n[66] !== E || n[67] !== i ? (ee = u.jsx(L, {
			flow: E,
			ref: i,
			displayName: "newsletter-reports-flow",
			children: M
		}), n[64] = L, n[65] = M, n[66] = E, n[67] = i, n[68] = ee) : ee = n[68], ee;
	}
	l.default = m;
}), 98);

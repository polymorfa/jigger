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
	"asyncToGeneratorRuntime",
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
		var a = o("react-compiler-runtime").c(69), i, l;
		a[0] !== t ? (l = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), a[0] = t, a[1] = i, a[2] = l) : (i = a[1], l = a[2]);
		var s = i, m = s.onClose, p = c(null), _ = p[0], f = p[1], g = c(o("WAWebCommonNewsletterEnums").ReviewType.REPORT), h = g[0], y = g[1], C = c(null), b = C[0], v = C[1], S = _ == null ? void 0 : _.appeal.appealReasonOptions, R;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (R = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }, a[3] = R) : R = a[3];
		var L = o("useWAWebFlow").useFlow(d.REPORT_LIST, R), E = L[0], k = L[1], I;
		a[4] !== k ? (I = function(t) {
			f(t), k.push(d.REPORT_DETAILS);
		}, a[4] = k, a[5] = I) : I = a[5];
		var T = I, D;
		a[6] !== _ ? (D = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (_ == null) {
					o("WAWebNewsletterIntegrityUtils").showReviewSubmissionFailureToast();
					return;
				}
				yield o("WAWebNewsletterCreateReportAppealAction").createNewsletterReportAppealAction({
					reportId: _.id.toString(),
					reason: e
				});
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), a[6] = _, a[7] = D) : D = a[7];
		var x = D, $;
		a[8] !== k ? ($ = function(t) {
			if (t == null) {
				o("WAWebNewsletterIntegrityUtils").showDsbReferenceNumberFailureToast();
				return;
			}
			v(t), k.push(d.DSB_STEP3_SCREEN);
		}, a[8] = k, a[9] = $) : $ = a[9];
		var P = $;
		if (k.step == null) return null;
		var N;
		a[10] !== k || a[11] !== _ ? (N = function() {
			_ != null && (y(o("WAWebCommonNewsletterEnums").ReviewType.REPORT), _.reportContentData.reportContentType === "status" ? y(o("WAWebCommonNewsletterEnums").ReviewType.STATUS_REPORT) : _.reportContentData.reportContentType === "response" && o("WAWebNewsletterGatingUtils").isNewsletterIntegrityQuestionsM1Enabled() === !0 && y(o("WAWebCommonNewsletterEnums").ReviewType.RESPONSE_REPORT), k.push(d.REQUEST_REVIEW_DESCRIPTION_SCREEN));
		}, a[10] = k, a[11] = _, a[12] = N) : N = a[12];
		var M = N, w;
		e: switch (k.step) {
			case d.REPORT_LIST: {
				var A;
				a[13] !== T || a[14] !== m ? (A = u.jsx(r("WAWebNewsletterDSAReportsDrawer.react"), {
					onClose: m,
					onReportClick: T
				}), a[13] = T, a[14] = m, a[15] = A) : A = a[15], w = A;
				break e;
			}
			case d.REPORT_DETAILS: {
				if (_ == null) return null;
				var F;
				a[16] !== k ? (F = function() {
					return k.pop();
				}, a[16] = k, a[17] = F) : F = a[17];
				var O;
				a[18] !== k ? (O = function() {
					k.push(d.DSA_REPORT_REMEDIATION_OPTIONS);
				}, a[18] = k, a[19] = O) : O = a[19];
				var B;
				a[20] !== M || a[21] !== _ || a[22] !== F || a[23] !== O ? (B = u.jsx(o("WAWebNewsletterDSAReportDetailsDrawerLoadable").NewsletterDSAReportDetailsDrawerLoadable, {
					onBack: F,
					onRequestReviewClick: M,
					onClickSeeOptions: O,
					report: _
				}), a[20] = M, a[21] = _, a[22] = F, a[23] = O, a[24] = B) : B = a[24], w = B;
				break e;
			}
			case d.REQUEST_REVIEW_DESCRIPTION_SCREEN: {
				var W, q;
				a[25] !== k ? (W = function() {
					return k.pop();
				}, q = function() {
					k.pop(), k.push(d.REQUEST_REVIEW_REASON_SCREEN);
				}, a[25] = k, a[26] = W, a[27] = q) : (W = a[26], q = a[27]);
				var U;
				a[28] !== h || a[29] !== W || a[30] !== q ? (U = u.jsx(o("WAWebRequestReviewDescriptionScreenDrawerLoadable").RequestReviewDescriptionScreenLoadable, {
					reviewType: h,
					onBack: W,
					onNext: q
				}), a[28] = h, a[29] = W, a[30] = q, a[31] = U) : U = a[31], w = U;
				break e;
			}
			case d.REQUEST_REVIEW_REASON_SCREEN: {
				var V;
				a[32] !== k ? (V = function() {
					k.pop(void 0, o("WAWebNewsletterGatingUtils").isDSA21ChannelReportingEnabled() ? 2 : 1);
				}, a[32] = k, a[33] = V) : V = a[33];
				var H = V, G;
				a[34] !== k ? (G = function() {
					k.pop(), k.push(d.REQUEST_REVIEW_DESCRIPTION_SCREEN);
				}, a[34] = k, a[35] = G) : G = a[35];
				var z;
				a[36] !== H || a[37] !== x || a[38] !== h || a[39] !== S || a[40] !== G ? (z = u.jsx(o("WAWebRequestReviewReasonScreenDrawer.react").RequestReviewReasonScreen, {
					reviewType: h,
					onBack: G,
					onSuccess: H,
					onSubmit: x,
					serverAppealReasons: S
				}), a[36] = H, a[37] = x, a[38] = h, a[39] = S, a[40] = G, a[41] = z) : z = a[41], w = z;
				break e;
			}
			case d.DSA_REPORT_REMEDIATION_OPTIONS: {
				if (_ == null) return null;
				var j;
				a[42] !== k ? (j = function() {
					return k.pop();
				}, a[42] = k, a[43] = j) : j = a[43];
				var K;
				a[44] !== k ? (K = function() {
					k.push(d.DSB_STEP1_SCREEN);
				}, a[44] = k, a[45] = K) : K = a[45];
				var Q;
				a[46] !== M || a[47] !== _ || a[48] !== j || a[49] !== K ? (Q = u.jsx(o("WAWebNewsletterReportsRemediationOptionsDrawerLoadable").NewsletterReportsRemediationOptionsDrawerLoadable, {
					onBack: j,
					selectedReport: _,
					onClickRequestReview: M,
					onClickDSBFlow: K
				}), a[46] = M, a[47] = _, a[48] = j, a[49] = K, a[50] = Q) : Q = a[50], w = Q;
				break e;
			}
			case d.DSB_STEP1_SCREEN: {
				var X;
				a[51] !== k ? (X = u.jsx(o("WAWebNewsletterDSBFlowStepOneDrawerLoadable").WAWebNewsletterDSBFlowStepOneDrawerLoadable, {
					onBack: function() {
						return k.pop();
					},
					onClickContinue: function() {
						k.push(d.DSB_STEP2_SCREEN);
					}
				}), a[51] = k, a[52] = X) : X = a[52], w = X;
				break e;
			}
			case d.DSB_STEP2_SCREEN: {
				if (_ == null) return null;
				var Y;
				a[53] !== k ? (Y = function() {
					return k.pop();
				}, a[53] = k, a[54] = Y) : Y = a[54];
				var J;
				a[55] !== _.id ? (J = _.id.toString(), a[55] = _.id, a[56] = J) : J = a[56];
				var Z;
				a[57] !== P || a[58] !== Y || a[59] !== J ? (Z = u.jsx(o("WAWebNewsletterDSBFlowStepTwoDrawerLoadable").WAWebNewsletterDSBFlowStepTwoDrawerLoadable, {
					onBack: Y,
					onClickGetReferenceNumber: P,
					entityId: J
				}), a[57] = P, a[58] = Y, a[59] = J, a[60] = Z) : Z = a[60], w = Z;
				break e;
			}
			case d.DSB_STEP3_SCREEN: {
				var ee;
				a[61] !== b || a[62] !== k ? (ee = b != null ? u.jsx(o("WAWebNewsletterDSBFlowStepThreeDrawerLoadable").WAWebNewsletterDSBFlowStepThreeDrawerLoadable, {
					onBack: function() {
						return k.pop();
					},
					entityId: b
				}) : null, a[61] = b, a[62] = k, a[63] = ee) : ee = a[63], w = ee;
			}
		}
		var te;
		return a[64] !== E || a[65] !== w || a[66] !== k || a[67] !== l ? (te = u.jsx(E, {
			flow: k,
			ref: l,
			displayName: "newsletter-reports-flow",
			children: w
		}), a[64] = E, a[65] = w, a[66] = k, a[67] = l, a[68] = te) : te = a[68], te;
	}
	l.default = m;
}), 98);

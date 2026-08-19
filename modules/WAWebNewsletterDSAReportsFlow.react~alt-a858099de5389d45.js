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
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.onClose, s = c(null), m = s[0], p = s[1], _ = c(o("WAWebCommonNewsletterEnums").ReviewType.REPORT), f = _[0], g = _[1], h = c(null), y = h[0], C = h[1], b = m == null ? void 0 : m.appeal.appealReasonOptions, v = o("useWAWebFlow").useFlow(d.REPORT_LIST, { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }), S = v[0], R = v[1], L = function(t) {
			p(t), R.push(d.REPORT_DETAILS);
		}, E = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (m == null) {
					o("WAWebNewsletterIntegrityUtils").showReviewSubmissionFailureToast();
					return;
				}
				yield o("WAWebNewsletterCreateReportAppealAction").createNewsletterReportAppealAction({
					reportId: m.id.toString(),
					reason: e
				});
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), k = function(t) {
			if (t == null) {
				o("WAWebNewsletterIntegrityUtils").showDsbReferenceNumberFailureToast();
				return;
			}
			C(t), R.push(d.DSB_STEP3_SCREEN);
		};
		if (R.step == null) return null;
		var I = function() {
			m != null && (g(o("WAWebCommonNewsletterEnums").ReviewType.REPORT), m.reportContentData.reportContentType === "status" ? g(o("WAWebCommonNewsletterEnums").ReviewType.STATUS_REPORT) : m.reportContentData.reportContentType === "response" && o("WAWebNewsletterGatingUtils").isNewsletterIntegrityQuestionsM1Enabled() === !0 && g(o("WAWebCommonNewsletterEnums").ReviewType.RESPONSE_REPORT), R.push(d.REQUEST_REVIEW_DESCRIPTION_SCREEN));
		}, T;
		switch (R.step) {
			case d.REPORT_LIST:
				T = u.jsx(r("WAWebNewsletterDSAReportsDrawer.react"), {
					onClose: l,
					onReportClick: L
				});
				break;
			case d.REPORT_DETAILS:
				if (m == null) return null;
				T = u.jsx(o("WAWebNewsletterDSAReportDetailsDrawerLoadable").NewsletterDSAReportDetailsDrawerLoadable, {
					onBack: function() {
						return R.pop();
					},
					onRequestReviewClick: I,
					onClickSeeOptions: function() {
						R.push(d.DSA_REPORT_REMEDIATION_OPTIONS);
					},
					report: m
				});
				break;
			case d.REQUEST_REVIEW_DESCRIPTION_SCREEN:
				T = u.jsx(o("WAWebRequestReviewDescriptionScreenDrawerLoadable").RequestReviewDescriptionScreenLoadable, {
					reviewType: f,
					onBack: function() {
						return R.pop();
					},
					onNext: function() {
						R.pop(), R.push(d.REQUEST_REVIEW_REASON_SCREEN);
					}
				});
				break;
			case d.REQUEST_REVIEW_REASON_SCREEN: {
				var D = function() {
					R.pop(void 0, o("WAWebNewsletterGatingUtils").isDSA21ChannelReportingEnabled() ? 2 : 1);
				};
				T = u.jsx(o("WAWebRequestReviewReasonScreenDrawer.react").RequestReviewReasonScreen, {
					reviewType: f,
					onBack: function() {
						R.pop(), R.push(d.REQUEST_REVIEW_DESCRIPTION_SCREEN);
					},
					onSuccess: D,
					onSubmit: E,
					serverAppealReasons: b
				});
				break;
			}
			case d.DSA_REPORT_REMEDIATION_OPTIONS: {
				if (m == null) return null;
				T = u.jsx(o("WAWebNewsletterReportsRemediationOptionsDrawerLoadable").NewsletterReportsRemediationOptionsDrawerLoadable, {
					onBack: function() {
						return R.pop();
					},
					selectedReport: m,
					onClickRequestReview: I,
					onClickDSBFlow: function() {
						R.push(d.DSB_STEP1_SCREEN);
					}
				});
				break;
			}
			case d.DSB_STEP1_SCREEN: {
				T = u.jsx(o("WAWebNewsletterDSBFlowStepOneDrawerLoadable").WAWebNewsletterDSBFlowStepOneDrawerLoadable, {
					onBack: function() {
						return R.pop();
					},
					onClickContinue: function() {
						R.push(d.DSB_STEP2_SCREEN);
					}
				});
				break;
			}
			case d.DSB_STEP2_SCREEN: {
				if (m == null) return null;
				T = u.jsx(o("WAWebNewsletterDSBFlowStepTwoDrawerLoadable").WAWebNewsletterDSBFlowStepTwoDrawerLoadable, {
					onBack: function() {
						return R.pop();
					},
					onClickGetReferenceNumber: k,
					entityId: m.id.toString()
				});
				break;
			}
			case d.DSB_STEP3_SCREEN: {
				T = y != null ? u.jsx(o("WAWebNewsletterDSBFlowStepThreeDrawerLoadable").WAWebNewsletterDSBFlowStepThreeDrawerLoadable, {
					onBack: function() {
						return R.pop();
					},
					entityId: y
				}) : null;
				break;
			}
		}
		return u.jsx(S, {
			flow: R,
			ref: a,
			displayName: "newsletter-reports-flow",
			children: T
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);

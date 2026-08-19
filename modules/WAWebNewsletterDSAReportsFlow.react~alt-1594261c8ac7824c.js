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
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.onClose, l = c(null), s = l[0], m = l[1], p = c(o("WAWebCommonNewsletterEnums").ReviewType.REPORT), _ = p[0], f = p[1], g = c(null), h = g[0], y = g[1], C = s == null ? void 0 : s.appeal.appealReasonOptions, b = o("useWAWebFlow").useFlow(d.REPORT_LIST, { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }), v = b[0], S = b[1], R = function(t) {
			m(t), S.push(d.REPORT_DETAILS);
		}, L = async function(t) {
			if (s == null) {
				o("WAWebNewsletterIntegrityUtils").showReviewSubmissionFailureToast();
				return;
			}
			await o("WAWebNewsletterCreateReportAppealAction").createNewsletterReportAppealAction({
				reportId: s.id.toString(),
				reason: t
			});
		}, E = function(t) {
			if (t == null) {
				o("WAWebNewsletterIntegrityUtils").showDsbReferenceNumberFailureToast();
				return;
			}
			y(t), S.push(d.DSB_STEP3_SCREEN);
		};
		if (S.step == null) return null;
		var k = function() {
			s != null && (f(o("WAWebCommonNewsletterEnums").ReviewType.REPORT), s.reportContentData.reportContentType === "status" ? f(o("WAWebCommonNewsletterEnums").ReviewType.STATUS_REPORT) : s.reportContentData.reportContentType === "response" && o("WAWebNewsletterGatingUtils").isNewsletterIntegrityQuestionsM1Enabled() === !0 && f(o("WAWebCommonNewsletterEnums").ReviewType.RESPONSE_REPORT), S.push(d.REQUEST_REVIEW_DESCRIPTION_SCREEN));
		}, I;
		switch (S.step) {
			case d.REPORT_LIST:
				I = u.jsx(r("WAWebNewsletterDSAReportsDrawer.react"), {
					onClose: i,
					onReportClick: R
				});
				break;
			case d.REPORT_DETAILS:
				if (s == null) return null;
				I = u.jsx(o("WAWebNewsletterDSAReportDetailsDrawerLoadable").NewsletterDSAReportDetailsDrawerLoadable, {
					onBack: function() {
						return S.pop();
					},
					onRequestReviewClick: k,
					onClickSeeOptions: function() {
						S.push(d.DSA_REPORT_REMEDIATION_OPTIONS);
					},
					report: s
				});
				break;
			case d.REQUEST_REVIEW_DESCRIPTION_SCREEN:
				I = u.jsx(o("WAWebRequestReviewDescriptionScreenDrawerLoadable").RequestReviewDescriptionScreenLoadable, {
					reviewType: _,
					onBack: function() {
						return S.pop();
					},
					onNext: function() {
						S.pop(), S.push(d.REQUEST_REVIEW_REASON_SCREEN);
					}
				});
				break;
			case d.REQUEST_REVIEW_REASON_SCREEN: {
				var T = function() {
					S.pop(void 0, o("WAWebNewsletterGatingUtils").isDSA21ChannelReportingEnabled() ? 2 : 1);
				};
				I = u.jsx(o("WAWebRequestReviewReasonScreenDrawer.react").RequestReviewReasonScreen, {
					reviewType: _,
					onBack: function() {
						S.pop(), S.push(d.REQUEST_REVIEW_DESCRIPTION_SCREEN);
					},
					onSuccess: T,
					onSubmit: L,
					serverAppealReasons: C
				});
				break;
			}
			case d.DSA_REPORT_REMEDIATION_OPTIONS: {
				if (s == null) return null;
				I = u.jsx(o("WAWebNewsletterReportsRemediationOptionsDrawerLoadable").NewsletterReportsRemediationOptionsDrawerLoadable, {
					onBack: function() {
						return S.pop();
					},
					selectedReport: s,
					onClickRequestReview: k,
					onClickDSBFlow: function() {
						S.push(d.DSB_STEP1_SCREEN);
					}
				});
				break;
			}
			case d.DSB_STEP1_SCREEN: {
				I = u.jsx(o("WAWebNewsletterDSBFlowStepOneDrawerLoadable").WAWebNewsletterDSBFlowStepOneDrawerLoadable, {
					onBack: function() {
						return S.pop();
					},
					onClickContinue: function() {
						S.push(d.DSB_STEP2_SCREEN);
					}
				});
				break;
			}
			case d.DSB_STEP2_SCREEN: {
				if (s == null) return null;
				I = u.jsx(o("WAWebNewsletterDSBFlowStepTwoDrawerLoadable").WAWebNewsletterDSBFlowStepTwoDrawerLoadable, {
					onBack: function() {
						return S.pop();
					},
					onClickGetReferenceNumber: E,
					entityId: s.id.toString()
				});
				break;
			}
			case d.DSB_STEP3_SCREEN: {
				I = h != null ? u.jsx(o("WAWebNewsletterDSBFlowStepThreeDrawerLoadable").WAWebNewsletterDSBFlowStepThreeDrawerLoadable, {
					onBack: function() {
						return S.pop();
					},
					entityId: h
				}) : null;
				break;
			}
		}
		return u.jsx(v, {
			flow: S,
			ref: n,
			displayName: "newsletter-reports-flow",
			children: I
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);

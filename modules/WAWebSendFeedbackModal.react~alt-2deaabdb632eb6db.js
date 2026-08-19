__d("WAWebSendFeedbackModal.react", [
	"fbt",
	"$InternalEnum",
	"WALogger",
	"WAWebABPropsSaga",
	"WAWebBugReportSessionWamEvent",
	"WAWebClickableLink.react",
	"WAWebClientServerJoinKeyGenerator",
	"WAWebConfirmPopup.react",
	"WAWebContactFormWrapper.react",
	"WAWebCrashlog",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebLoggerDebugInfo",
	"WAWebMmsMediaTypes",
	"WAWebModalManager",
	"WAWebRichTextField.react",
	"WAWebScreenshotUpload.react",
	"WAWebSupportAiSessionWamEvent",
	"WAWebSupportBugReportSubmitMutation",
	"WAWebText.react",
	"WAWebTextLineClamp.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumBugReportFlowAction",
	"WAWebWamEnumSupportAiEventType",
	"WAWebWdsPictoSucessCelebrationTickIcon.react",
	"WDSText.react",
	"getErrorSafe",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = d.useState, f = 5e3, g = 10, h = {
		feedbackField: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderBottomWidth: "xv7zg05",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "xhl97hz x1vtqnfi",
			$$css: !0
		},
		buttonGroup: {
			marginTop: "x1sy10c2",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		}
	}, y = n("$InternalEnum").Mirrored(["FORM", "SUCCESS"]), C = { titleContainer: {
		textAlign: "x2b8uid",
		$$css: !0
	} };
	function b(e, t) {
		m(function() {
			new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
				bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.BUG_REPORT_FORM_IMPRESSION,
				bugReportingEntryPoint: e,
				clientServerJoinKey: t
			}).commit();
		}, [e, t]);
	}
	function v(t) {
		var n = t.bugReportingEntryPoint, a = t.clientServerJoinKey, i = t.onCancel, l = t.onComplete, u = t.onSubmit;
		b(n, a);
		var d = _(""), y = d[0], C = d[1], v = _({
			state: "none",
			mediaFiles: []
		}), S = v[0], R = v[1], L = _(!1), T = L[0], D = L[1], x = _(!1), $ = x[0], P = x[1], N = _(!1), M = N[0], w = N[1], A = _(!1), F = A[0], O = A[1], B = p(null);
		m(function() {
			M && (new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
				bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.ERROR_VIEW_IMPRESSION,
				bugReportingEntryPoint: n,
				clientServerJoinKey: a
			}).commit(), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) })));
		}, [
			n,
			a,
			M
		]);
		var W = s._(
			/*BTDS*/
			""
		), q = function(t) {
			var e = t.text;
			C(e), O(z(e));
		}, U = function(t) {
			var e = new Uint8Array(t);
			return btoa(String.fromCharCode.apply(String, Array.from(e)));
		}, V = async function() {
			new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
				bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.SUBMIT_CLICK,
				bugReportMediaCount: S.mediaFiles.length,
				bugReportingEntryPoint: n,
				clientServerJoinKey: a
			}).commit();
			try {
				P(!0), w(!1);
				var t = JSON.stringify(await o("WAWebLoggerDebugInfo").getDebugInfo({
					supportTag: "FeedbackSubmission",
					convertFields: !0,
					addUserAgentDetails: !0
				}), null, 2), i = await o("WAWebCrashlog").upload({
					reason: o("WAWebCrashlog").USER_REPORT,
					immediate: !1,
					isHighPri: !0,
					logType: o("WAWebCrashlog").LogType.SUPPORT
				});
				new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
					bugReportFlowAction: i != null ? o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.DEVICE_LOG_UPLOAD_SUCCESSFUL : o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.DEVICE_LOG_UPLOAD_FAILED,
					bugReportingEntryPoint: n,
					clientServerJoinKey: a
				}).commit();
				var s = await o("WAWebSupportBugReportSubmitMutation").submitBugReportGraphQL({
					description: y,
					debug_info_json: t,
					device_log_handle: i,
					title: "User Feedback",
					category: null,
					client_server_join_key: a,
					media: S.mediaFiles.map(function(e) {
						return {
							cipher_key: U(e.encKey),
							element_value: e.url,
							iv: U(e.iv),
							type: e.mediaType === o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO ? "VIDEO" : "IMAGE",
							file_name: e.filename
						};
					})
				});
				if (s.success === !0) new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
					bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.SUBMISSION_SUCCESSFUL,
					bugReportMediaCount: S.mediaFiles.length,
					bugReportingEntryPoint: n,
					clientServerJoinKey: a
				}).commit(), u == null || u(y), l();
				else {
					var c;
					new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
						bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.SUBMISSION_FAILED,
						bugReportMediaCount: S.mediaFiles.length,
						bugReportErrorMessage: (c = s.error_message) != null ? c : "unknown",
						bugReportingEntryPoint: n,
						clientServerJoinKey: a
					}).commit(), w(!0), P(!1);
				}
			} catch (t) {
				var d = r("getErrorSafe")(t);
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["feedback submission failed: ", ""])), t).catching(d).sendLogs("feedback-fail"), new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
					bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.SUBMISSION_FAILED,
					bugReportMediaCount: S.mediaFiles.length,
					bugReportErrorMessage: d.message || JSON.stringify(d),
					bugReportingEntryPoint: n,
					clientServerJoinKey: a
				}).commit(), w(!0), P(!1);
			}
		}, H = function() {
			new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
				bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.CANCEL_CLICK,
				bugReportingEntryPoint: n,
				clientServerJoinKey: a
			}).commit(), i == null || i(), o("WAWebModalManager").ModalManager.close();
		}, G = s._(
			/*BTDS*/
			""
		), z = function(t) {
			return t == null ? !1 : t.trim().length >= g;
		};
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: W,
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: V,
			onCancel: H,
			okDisabled: !F || $ || T,
			okSpinner: $,
			buttonGroupStyle: h.buttonGroup,
			testid: "send-feedback-modal",
			tsNavigationData: {
				surface: "unknown",
				viewName: "send-feedback"
			},
			children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				children: [
					c.jsx(o("WAWebText.react").WAWebTextSmall, {
						marginBottom: 20,
						children: s._(
							/*BTDS*/
							"",
							[s._param("help_center_link", c.jsx(r("WAWebClickableLink.react"), {
								onClick: E,
								children: s._(
									/*BTDS*/
									""
								)
							})), s._param("contact_us_link", c.jsx(r("WAWebClickableLink.react"), {
								onClick: k,
								children: s._(
									/*BTDS*/
									""
								)
							}))]
						)
					}),
					c.jsx(o("WAWebRichTextField.react").RichTextField, {
						testid: "send-feedback-modal-input",
						maxLength: f,
						onChange: q,
						inputPlaceholder: G,
						ariaLabel: G,
						ref: B,
						value: y,
						minVisibleLines: 3,
						maxVisibleLines: 7,
						multiline: !0,
						enterIsNewLine: !0,
						hideSpacer: !0,
						hideFloatingLabel: !0,
						theme: "gray-background",
						containerXstyle: h.feedbackField,
						contextMsg: F ? null : s._(
							/*BTDS*/
							"",
							[s._param("FEEDBACK_MIN_DESC_LENGTH", g)]
						)
					}),
					c.jsx(o("WAWebFlex.react").FlexItem, {
						marginBottom: 16,
						children: c.jsx(o("WAWebScreenshotUpload.react").WAWebScreenshotUpload, {
							mediaState: S,
							onChangeState: R,
							onUploadStateChange: D
						})
					}),
					c.jsxs(o("WAWebText.react").WAWebTextSmall, { children: [
						s._(
							/*BTDS*/
							""
						),
						" ",
						c.jsx(r("WAWebClickableLink.react"), {
							onClick: I,
							children: s._(
								/*BTDS*/
								""
							)
						})
					] })
				]
			})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e, t) {
		m(function() {
			new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
				bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.SUCCESS_VIEW_IMPRESSION,
				bugReportingEntryPoint: e,
				clientServerJoinKey: t
			}).commit();
		}, [e, t]);
	}
	function R(e) {
		var t, n = e.bugReportingEntryPoint, a = e.clientServerJoinKey, i = e.onCancel;
		S(n, a);
		var l = function() {
			i();
		};
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "send-feedback-success-modal",
			tsNavigationData: {
				surface: "unknown",
				viewName: "send-feedback"
			},
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: l,
			children: c.jsxs((t = o("WAWebFlex.react")).FlexColumn, {
				align: "center",
				children: [
					c.jsx(t.FlexItem, {
						marginBottom: 16,
						align: "center",
						justify: "center",
						children: c.jsx(o("WAWebWdsPictoSucessCelebrationTickIcon.react").WdsPictoSucessCelebrationTickIcon, {
							height: 88,
							width: 89
						})
					}),
					c.jsx(t.FlexItem, {
						marginBottom: 24,
						xstyle: C.titleContainer,
						children: c.jsx(r("WAWebTextLineClamp.react"), {
							maxLines: 3,
							children: c.jsx(r("WDSText.react"), {
								type: "Headline1",
								colorName: "contentDefault",
								textAlign: "center",
								children: s._(
									/*BTDS*/
									""
								)
							})
						})
					}),
					c.jsx(t.FlexItem, {
						testid: "feedback-success-text",
						marginBottom: 16,
						children: c.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							textAlign: "center",
							children: s._(
								/*BTDS*/
								""
							)
						})
					}),
					c.jsx(t.FlexItem, {
						testid: "feedback-success-help-text",
						children: c.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							textAlign: "center",
							children: s._(
								/*BTDS*/
								"",
								[s._param("help_center_link", c.jsx(r("WAWebClickableLink.react"), {
									onClick: function() {
										o("WAWebExternalLink.react").openExternalLink("https://faq.whatsapp.com/");
									},
									children: "Help Center"
								})), s._param("contact_us_link", c.jsx(r("WAWebClickableLink.react"), {
									onClick: function() {
										o("WAWebABPropsSaga").getIsSagaV1Enabled() && new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({ supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.CONTACT_US_CLICKED }).commit(), o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebContactFormWrapper.react"), {}));
									},
									children: "contact us"
								}))]
							)
						})
					})
				]
			})
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.bugReportingEntryPoint, n = e.onCancel, r = e.onSubmit, a = _(y.FORM), i = a[0], l = a[1], s = _(function() {
			return o("WAWebClientServerJoinKeyGenerator").generateClientServerJoinKey();
		}), u = s[0], d = function() {
			l(y.SUCCESS);
		}, m = function() {
			n == null || n(), o("WAWebModalManager").ModalManager.close();
		};
		e: {
			if (i === y.FORM) return c.jsx(v, {
				bugReportingEntryPoint: t,
				clientServerJoinKey: u,
				onCancel: m,
				onComplete: d,
				onSubmit: r
			});
			if (i === y.SUCCESS) return c.jsx(R, {
				bugReportingEntryPoint: t,
				clientServerJoinKey: u,
				onCancel: m
			});
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + i);
		}
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E() {
		o("WAWebExternalLink.react").openExternalLink("https://faq.whatsapp.com/");
	}
	function k() {
		o("WAWebABPropsSaga").getIsSagaV1Enabled() && new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({ supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.CONTACT_US_CLICKED }).commit(), o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebContactFormWrapper.react"), {}));
	}
	function I() {
		o("WAWebExternalLink.react").openExternalLink("https://faq.whatsapp.com/1040401477781770");
	}
	l.default = L;
}), 226);

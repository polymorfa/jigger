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
	"asyncToGeneratorRuntime",
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
		var a = t.bugReportingEntryPoint, i = t.clientServerJoinKey, l = t.onCancel, u = t.onComplete, d = t.onSubmit;
		b(a, i);
		var y = _(""), C = y[0], v = y[1], S = _({
			state: "none",
			mediaFiles: []
		}), R = S[0], L = S[1], T = _(!1), D = T[0], x = T[1], $ = _(!1), P = $[0], N = $[1], M = _(!1), w = M[0], A = M[1], F = _(!1), O = F[0], B = F[1], W = p(null);
		m(function() {
			w && (new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
				bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.ERROR_VIEW_IMPRESSION,
				bugReportingEntryPoint: a,
				clientServerJoinKey: i
			}).commit(), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) })));
		}, [
			a,
			i,
			w
		]);
		var q = s._(
			/*BTDS*/
			""
		), U = function(t) {
			var e = t.text;
			v(e), B(j(e));
		}, V = function(t) {
			var e = new Uint8Array(t);
			return btoa(String.fromCharCode.apply(String, Array.from(e)));
		}, H = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
					bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.SUBMIT_CLICK,
					bugReportMediaCount: R.mediaFiles.length,
					bugReportingEntryPoint: a,
					clientServerJoinKey: i
				}).commit();
				try {
					N(!0), A(!1);
					var t = JSON.stringify(yield o("WAWebLoggerDebugInfo").getDebugInfo({
						supportTag: "FeedbackSubmission",
						convertFields: !0,
						addUserAgentDetails: !0
					}), null, 2), n = yield o("WAWebCrashlog").upload({
						reason: o("WAWebCrashlog").USER_REPORT,
						immediate: !1,
						isHighPri: !0,
						logType: o("WAWebCrashlog").LogType.SUPPORT
					});
					new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
						bugReportFlowAction: n != null ? o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.DEVICE_LOG_UPLOAD_SUCCESSFUL : o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.DEVICE_LOG_UPLOAD_FAILED,
						bugReportingEntryPoint: a,
						clientServerJoinKey: i
					}).commit();
					var l = yield o("WAWebSupportBugReportSubmitMutation").submitBugReportGraphQL({
						description: C,
						debug_info_json: t,
						device_log_handle: n,
						title: "User Feedback",
						category: null,
						client_server_join_key: i,
						media: R.mediaFiles.map(function(e) {
							return {
								cipher_key: V(e.encKey),
								element_value: e.url,
								iv: V(e.iv),
								type: e.mediaType === o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO ? "VIDEO" : "IMAGE",
								file_name: e.filename
							};
						})
					});
					if (l.success === !0) new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
						bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.SUBMISSION_SUCCESSFUL,
						bugReportMediaCount: R.mediaFiles.length,
						bugReportingEntryPoint: a,
						clientServerJoinKey: i
					}).commit(), d == null || d(C), u();
					else {
						var s;
						new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
							bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.SUBMISSION_FAILED,
							bugReportMediaCount: R.mediaFiles.length,
							bugReportErrorMessage: (s = l.error_message) != null ? s : "unknown",
							bugReportingEntryPoint: a,
							clientServerJoinKey: i
						}).commit(), A(!0), N(!1);
					}
				} catch (t) {
					var c = r("getErrorSafe")(t);
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["feedback submission failed: ", ""])), t).catching(c).sendLogs("feedback-fail"), new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
						bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.SUBMISSION_FAILED,
						bugReportMediaCount: R.mediaFiles.length,
						bugReportErrorMessage: c.message || JSON.stringify(c),
						bugReportingEntryPoint: a,
						clientServerJoinKey: i
					}).commit(), A(!0), N(!1);
				}
			});
			return function() {
				return t.apply(this, arguments);
			};
		})(), G = function() {
			new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
				bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.CANCEL_CLICK,
				bugReportingEntryPoint: a,
				clientServerJoinKey: i
			}).commit(), l == null || l(), o("WAWebModalManager").ModalManager.close();
		}, z = s._(
			/*BTDS*/
			""
		), j = function(t) {
			return t == null ? !1 : t.trim().length >= g;
		};
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: q,
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: H,
			onCancel: G,
			okDisabled: !O || P || D,
			okSpinner: P,
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
						onChange: U,
						inputPlaceholder: z,
						ariaLabel: z,
						ref: W,
						value: C,
						minVisibleLines: 3,
						maxVisibleLines: 7,
						multiline: !0,
						enterIsNewLine: !0,
						hideSpacer: !0,
						hideFloatingLabel: !0,
						theme: "gray-background",
						containerXstyle: h.feedbackField,
						contextMsg: O ? null : s._(
							/*BTDS*/
							"",
							[s._param("FEEDBACK_MIN_DESC_LENGTH", g)]
						)
					}),
					c.jsx(o("WAWebFlex.react").FlexItem, {
						marginBottom: 16,
						children: c.jsx(o("WAWebScreenshotUpload.react").WAWebScreenshotUpload, {
							mediaState: R,
							onChangeState: L,
							onUploadStateChange: x
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

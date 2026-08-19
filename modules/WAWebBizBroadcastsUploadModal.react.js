__d("WAWebBizBroadcastsUploadModal.react", [
	"fbt",
	"Promise",
	"WALogger",
	"WAWebABProps",
	"WAWebBizBroadcastsErrorDialog.react",
	"WAWebBizBroadcastsFeatureEligibilityModal.react",
	"WAWebBizBroadcastsFilePicker.react",
	"WAWebBizBroadcastsImportLoggingUtils",
	"WAWebBizBroadcastsLoadingModal.react",
	"WAWebBizBroadcastsRecipientUtils",
	"WAWebBizBroadcastsSmartCSVImportNoPhoneNumbersDetectedScreenLoadable",
	"WAWebBizBroadcastsSmartCSVImportSelectColumnsScreenLoadable",
	"WAWebBizBroadcastsSmartCSVImportTypes",
	"WAWebBizBroadcastsTemplateParsingUtils",
	"WAWebBroadcastODS",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebContactImportFileProcessor",
	"WAWebContactImportFileTypeValidator",
	"WAWebContactImportTypedError",
	"WAWebContactSyncErrorCodes",
	"WAWebContactSyncLogger",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWdsIllMarketingMessagesIcon.react",
	"WDSButton.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react",
	"useWAWebBizBroadcastEligibility"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p = m || (m = o("react")), _ = m.useEffect, f = {
		controlsStyle: {
			paddingInlineEnd: "xyri2b",
			paddingInlineStart: "x1c1uobl",
			paddingTop: "xl7twdi",
			$$css: !0
		},
		fullWidth: {
			width: "xh8yej3",
			$$css: !0
		}
	}, g = 20, h = 20;
	function y(e) {
		return e.length > g;
	}
	function C(e) {
		window.setTimeout(e, 200);
	}
	function b(t, a, i, l, s) {
		return new (d || (d = (n("Promise"))))(function(n) {
			function u(e) {
				o("WAWebModalManager").ModalManager.close(), n(e);
			}
			o("WAWebBizBroadcastsSmartCSVImportSelectColumnsScreenLoadable").openSmartCSVImportSelectColumnsScreenLoadable({
				allHeaders: a,
				detection: t,
				onCancel: function() {
					s == null || s(), u(null);
				},
				onConfirm: function(t) {
					if (t.phoneColumnIndex == null) {
						u(null);
						return;
					}
					u({
						nameHeader: t.nameColumnIndex != null ? a[t.nameColumnIndex] : null,
						phoneHeader: a[t.phoneColumnIndex]
					});
				},
				previewRows: i
			}).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to load smart CSV import select columns screen"]))).catching(r("getErrorSafe")(t)).sendLogs("biz-broadcasts-select-columns-load"), l == null || l(), n(null);
			});
		});
	}
	function v(e, t, a, i, l, s) {
		return e.phoneColumn != null ? b(e, t, a, i, s) : new (d || (d = (n("Promise"))))(function(n) {
			function c() {
				o("WAWebModalManager").ModalManager.close(), l(), n(null);
			}
			function d() {
				o("WAWebModalManager").ModalManager.close(), b(e, t, a, i, s).then(n);
			}
			o("WAWebBizBroadcastsSmartCSVImportNoPhoneNumbersDetectedScreenLoadable").openSmartCSVImportNoPhoneNumbersDetectedScreenLoadable({
				onSelectColumns: d,
				onTryAnotherFile: c
			}).catch(function(e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to load smart CSV import no phone numbers detected screen"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-broadcasts-no-phone-numbers-load"), i(), n(null);
			});
		});
	}
	function S(e) {
		var t = e.entryPoint, a = e.onCancel, i = e.onUploadSuccess, l = e.showModalImage, u = l === void 0 ? !1 : l, d = o("useWAWebBizBroadcastEligibility").useMarketingMessagesEligibility(), m = o("WAWebABProps").getABPropConfigValue("smbw_business_broadcast_smart_column_detection_enabled");
		if (_(function() {
			d != null && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactImportPromptViewed({
				eligibility: d == null ? void 0 : d.status,
				smart_column_detection_enabled: m
			}, t);
		}, [
			t,
			m,
			d
		]), d == null) return p.jsx(r("WAWebBizBroadcastsLoadingModal.react"), { onCancel: a });
		if (d.status !== "SUCCESS") return p.jsx(o("WAWebBizBroadcastsFeatureEligibilityModal.react").WAWebBizBroadcastsFeatureEligibilityModal, {
			eligibility: d,
			onCancel: a
		});
		var g = function() {
			if (m) {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(t, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceCancelLoggingExtraAttributes(o("WAWebBizBroadcastsImportLoggingUtils").ImportAudienceCancelPhase.BEFORE_FILE_IMPORT, null, !0)), a(null, !0);
				return;
			}
			a(null);
		}, b = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				o("WAWebBroadcastODS").logAudienceImport();
				var n = Date.now(), r = o("WAWebBizBroadcastsImportLoggingUtils").createImportAudienceLoggingContext(e, m);
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceProcessingStarted(o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceLoggingExtraAttributes(r), t);
				var l = null, d = !1, _ = function() {
					d = !0;
				}, f = function() {
					return o("WAWebBizBroadcastsImportLoggingUtils").createImportAudienceLoggingContext(e, m, l);
				};
				try {
					var g = o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit();
					yield o("WAWebContactImportFileProcessor").processFile(e, {
						onComplete: function(r, s) {
							var e, u;
							o("WAWebBroadcastODS").logAudienceImportSuccess();
							var c = o("WAWebBizBroadcastsImportLoggingUtils").createImportAudienceSuccessLoggingContext(f(), {
								importedRowCount: r.length,
								rawRowCount: (e = (u = l) == null || (u = u.rawRows) == null ? void 0 : u.length) != null ? e : r.length + s.length
							});
							o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceProcessingResult(babelHelpers.extends({}, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceSuccessLoggingExtraAttributes(c), {
								contact_count: r.length,
								latency_ms: Date.now() - n,
								num_error_contacts: s.length,
								num_total_contacts: r.length + s.length,
								result: "success"
							}), t), a(null, !0), C(function() {
								var e = l == null ? null : o("WAWebBizBroadcastsSmartCSVImportTypes").buildSmartCSVImportContext(l, r);
								if (y(s) && (e == null ? void 0 : e.segmentDetection.best) == null) {
									var n = {
										errorType: o("WAWebContactImportTypedError").FileError.TOO_MANY_ERRORS,
										num_error_contacts: s.length,
										num_total_contacts: r.length
									};
									o("WAWebModalManager").ModalManager.open(p.jsx(o("WAWebBizBroadcastsErrorDialog.react").WAWebBizBroadcastsErrorDialog, {
										entryPoint: t,
										errorType: o("WAWebContactImportTypedError").FileError.TOO_MANY_ERRORS,
										extraAttributes: n,
										onClose: function() {
											o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.reviewFileErrorsPromptCancelClicked(n, t), o("WAWebModalManager").ModalManager.close();
										},
										onContinue: function() {
											o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.reviewFileErrorsPromptContinueClicked(n, t), o("WAWebModalManager").ModalManager.close(), i(r, s, e, c, g);
										}
									}));
								} else o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceSuccess(r.length, s.length, t, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceSuccessLoggingExtraAttributes(c)), i(r, s, e, c, g);
							});
						},
						onConfirmDetection: m ? function(e, n, r) {
							return v(e, n, r, function() {
								_(), o("WAWebBroadcastODS").logAudienceImportError(), a(null, !0), o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, { msg: s._(
									/*BTDS*/
									""
								) }));
							}, function() {
								_(), a(null, !0), C(function() {
									o("WAWebModalManager").ModalManager.open(p.jsx(S, {
										entryPoint: t,
										onCancel: a,
										onUploadSuccess: i,
										showModalImage: u
									}));
								});
							}, function() {
								o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactWizardCancelClicked(t, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceCancelLoggingExtraAttributes(o("WAWebBizBroadcastsImportLoggingUtils").ImportAudienceCancelPhase.COLUMN_SELECTION, f()));
							});
						} : void 0,
						onError: function(r) {
							var e = d;
							if (d = !1, !(e && r instanceof o("WAWebContactImportTypedError").WAWebContactImportTypedError && r.type === o("WAWebContactImportTypedError").FileError.FORMAT)) {
								o("WAWebBroadcastODS").logAudienceImportError();
								var i = r instanceof o("WAWebContactImportTypedError").WAWebContactImportTypedError ? r.type : "unexpected";
								if (o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceProcessingResult(babelHelpers.extends({}, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceLoggingExtraAttributes(f()), {
									error_type: i,
									latency_ms: Date.now() - n,
									result: "failure"
								}), t), r instanceof o("WAWebContactImportTypedError").WAWebContactImportTypedError) {
									var l = o("WAWebContactImportTypedError").FileError.cast(r.type);
									if (l != null) return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceError(r.type, t), a(null, !0), void C(function() {
										o("WAWebModalManager").ModalManager.open(p.jsx(o("WAWebBizBroadcastsErrorDialog.react").WAWebBizBroadcastsErrorDialog, {
											entryPoint: t,
											errorType: l,
											onClose: function() {
												o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.reviewFileErrorsPromptCancelClicked({ errorType: l }, t), o("WAWebModalManager").ModalManager.close();
											}
										}));
									});
								}
								throw o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceError(r instanceof Error ? r.message : "unknown", t), r;
							}
						},
						onSmartDetectionComplete: function(t) {
							l = t;
						}
					}, {
						fileRowLimit: m ? g * h : void 0,
						recipientLimit: g,
						smartColumnDetectionEnabled: m,
						verifyOptions: {
							errorCode: o("WAWebContactSyncErrorCodes").BIZ_BROADCAST_VERIFY,
							requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.BUSINESS_BROADCAST
						}
					});
				} catch (e) {
					o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Error in processFile: ", ""])), e).sendLogs("audience-import");
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), R = p.jsxs("div", {
			className: "x78zum5 x1f0uite xs2akgl x7v6yn8 xh8yej3",
			children: [p.jsx(r("WDSButton.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				variant: "borderless",
				onPress: g,
				testid: "biz-broadcasts-modal-cancel"
			}), p.jsx(r("WAWebBizBroadcastsFilePicker.react"), {
				entryPoint: t,
				onFileSelected: b,
				acceptTypes: o("WAWebContactImportFileTypeValidator").getAcceptTypesString([o("WAWebContactImportFileTypeValidator").FileType.EXCEL, o("WAWebContactImportFileTypeValidator").FileType.CSV]),
				buttonText: s._(
					/*BTDS*/
					""
				),
				testid: "biz-broadcasts-file-upload-picker"
			})]
		}), L = m ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), E = m ? s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", p.jsx(r("WDSTextualLink.react"), babelHelpers.extends({}, o("WAWebBizBroadcastsTemplateParsingUtils").getTemplateLinkProps(), {
				onClick: function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.templateSaveClicked(t);
				},
				children: s._(
					/*BTDS*/
					""
				)
			})))]
		) : s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", p.jsx(r("WDSTextualLink.react"), babelHelpers.extends({}, o("WAWebBizBroadcastsTemplateParsingUtils").getTemplateLinkProps(), {
				onClick: function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.templateSaveClicked(t);
				},
				children: s._(
					/*BTDS*/
					""
				)
			})))]
		);
		return p.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.BusinessBroadcastUploadModal,
			actions: R,
			onOverlayClick: g,
			testid: "biz-broadcasts-upload-modal",
			controlsStyle: f.controlsStyle,
			children: p.jsxs("div", {
				className: "x6s0dn4 x78zum5 xdt5ytf x1f0uite xh8yej3",
				children: [
					u && p.jsx("div", {
						className: "x78zum5 xl56j7k",
						children: p.jsx(o("WAWebWdsIllMarketingMessagesIcon.react").WdsIllMarketingMessagesIcon, {})
					}),
					p.jsx(r("WDSText.react"), {
						type: "Headline2",
						colorName: "contentDefault",
						xstyle: f.fullWidth,
						children: L
					}),
					p.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						xstyle: f.fullWidth,
						children: E
					})
				]
			})
		});
	}
	S.displayName = S.name + " [from " + i.id + "]", l.WAWebBizBroadcastsUploadModal = S;
}), 226);

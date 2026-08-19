__d("WAWebBizBroadcastsUploadModal.react", [
	"fbt",
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
	"getErrorSafe",
	"react",
	"useWAWebBizBroadcastEligibility"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = d || (d = o("react")), p = d.useEffect, _ = {
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
	}, f = 20, g = 20;
	function h(e) {
		return e.length > f;
	}
	function y(e) {
		window.setTimeout(e, 200);
	}
	function C(t, n, a, i, l) {
		return new Promise(function(s) {
			function u(e) {
				o("WAWebModalManager").ModalManager.close(), s(e);
			}
			o("WAWebBizBroadcastsSmartCSVImportSelectColumnsScreenLoadable").openSmartCSVImportSelectColumnsScreenLoadable({
				allHeaders: n,
				detection: t,
				onCancel: function() {
					l == null || l(), u(null);
				},
				onConfirm: function(t) {
					if (t.phoneColumnIndex == null) {
						u(null);
						return;
					}
					u({
						nameHeader: t.nameColumnIndex != null ? n[t.nameColumnIndex] : null,
						phoneHeader: n[t.phoneColumnIndex]
					});
				},
				previewRows: a
			}).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to load smart CSV import select columns screen"]))).catching(r("getErrorSafe")(t)).sendLogs("biz-broadcasts-select-columns-load"), i == null || i(), s(null);
			});
		});
	}
	function b(e, t, n, a, i, l) {
		return e.phoneColumn != null ? C(e, t, n, a, l) : new Promise(function(s) {
			function c() {
				o("WAWebModalManager").ModalManager.close(), i(), s(null);
			}
			function d() {
				o("WAWebModalManager").ModalManager.close(), C(e, t, n, a, l).then(s);
			}
			o("WAWebBizBroadcastsSmartCSVImportNoPhoneNumbersDetectedScreenLoadable").openSmartCSVImportNoPhoneNumbersDetectedScreenLoadable({
				onSelectColumns: d,
				onTryAnotherFile: c
			}).catch(function(e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to load smart CSV import no phone numbers detected screen"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-broadcasts-no-phone-numbers-load"), a(), s(null);
			});
		});
	}
	function v(e) {
		var t = e.entryPoint, n = e.onCancel, a = e.onUploadSuccess, i = e.showModalImage, l = i === void 0 ? !1 : i, u = o("useWAWebBizBroadcastEligibility").useMarketingMessagesEligibility(), d = o("WAWebABProps").getABPropConfigValue("smbw_business_broadcast_smart_column_detection_enabled");
		if (p(function() {
			u != null && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactImportPromptViewed({
				eligibility: u == null ? void 0 : u.status,
				smart_column_detection_enabled: d
			}, t);
		}, [
			t,
			d,
			u
		]), u == null) return m.jsx(r("WAWebBizBroadcastsLoadingModal.react"), { onCancel: n });
		if (u.status !== "SUCCESS") return m.jsx(o("WAWebBizBroadcastsFeatureEligibilityModal.react").WAWebBizBroadcastsFeatureEligibilityModal, {
			eligibility: u,
			onCancel: n
		});
		var f = function() {
			if (d) {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(t, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceCancelLoggingExtraAttributes(o("WAWebBizBroadcastsImportLoggingUtils").ImportAudienceCancelPhase.BEFORE_FILE_IMPORT, null, !0)), n(null, !0);
				return;
			}
			n(null);
		}, C = async function(r) {
			o("WAWebBroadcastODS").logAudienceImport();
			var e = Date.now(), i = o("WAWebBizBroadcastsImportLoggingUtils").createImportAudienceLoggingContext(r, d);
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceProcessingStarted(o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceLoggingExtraAttributes(i), t);
			var u = null, p = !1, _ = function() {
				p = !0;
			}, f = function() {
				return o("WAWebBizBroadcastsImportLoggingUtils").createImportAudienceLoggingContext(r, d, u);
			};
			try {
				var C = o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit();
				await o("WAWebContactImportFileProcessor").processFile(r, {
					onComplete: function(i, l) {
						var r, s;
						o("WAWebBroadcastODS").logAudienceImportSuccess();
						var c = o("WAWebBizBroadcastsImportLoggingUtils").createImportAudienceSuccessLoggingContext(f(), {
							importedRowCount: i.length,
							rawRowCount: (r = (s = u) == null || (s = s.rawRows) == null ? void 0 : s.length) != null ? r : i.length + l.length
						});
						o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceProcessingResult(babelHelpers.extends({}, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceSuccessLoggingExtraAttributes(c), {
							contact_count: i.length,
							latency_ms: Date.now() - e,
							num_error_contacts: l.length,
							num_total_contacts: i.length + l.length,
							result: "success"
						}), t), n(null, !0), y(function() {
							var e = u == null ? null : o("WAWebBizBroadcastsSmartCSVImportTypes").buildSmartCSVImportContext(u, i);
							if (h(l) && (e == null ? void 0 : e.segmentDetection.best) == null) {
								var n = {
									errorType: o("WAWebContactImportTypedError").FileError.TOO_MANY_ERRORS,
									num_error_contacts: l.length,
									num_total_contacts: i.length
								};
								o("WAWebModalManager").ModalManager.open(m.jsx(o("WAWebBizBroadcastsErrorDialog.react").WAWebBizBroadcastsErrorDialog, {
									entryPoint: t,
									errorType: o("WAWebContactImportTypedError").FileError.TOO_MANY_ERRORS,
									extraAttributes: n,
									onClose: function() {
										o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.reviewFileErrorsPromptCancelClicked(n, t), o("WAWebModalManager").ModalManager.close();
									},
									onContinue: function() {
										o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.reviewFileErrorsPromptContinueClicked(n, t), o("WAWebModalManager").ModalManager.close(), a(i, l, e, c, C);
									}
								}));
							} else o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceSuccess(i.length, l.length, t, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceSuccessLoggingExtraAttributes(c)), a(i, l, e, c, C);
						});
					},
					onConfirmDetection: d ? function(e, r, i) {
						return b(e, r, i, function() {
							_(), o("WAWebBroadcastODS").logAudienceImportError(), n(null, !0), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
								/*BTDS*/
								""
							) }));
						}, function() {
							_(), n(null, !0), y(function() {
								o("WAWebModalManager").ModalManager.open(m.jsx(v, {
									entryPoint: t,
									onCancel: n,
									onUploadSuccess: a,
									showModalImage: l
								}));
							});
						}, function() {
							o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactWizardCancelClicked(t, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceCancelLoggingExtraAttributes(o("WAWebBizBroadcastsImportLoggingUtils").ImportAudienceCancelPhase.COLUMN_SELECTION, f()));
						});
					} : void 0,
					onError: function(a) {
						var r = p;
						if (p = !1, !(r && a instanceof o("WAWebContactImportTypedError").WAWebContactImportTypedError && a.type === o("WAWebContactImportTypedError").FileError.FORMAT)) {
							o("WAWebBroadcastODS").logAudienceImportError();
							var i = a instanceof o("WAWebContactImportTypedError").WAWebContactImportTypedError ? a.type : "unexpected";
							if (o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceProcessingResult(babelHelpers.extends({}, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceLoggingExtraAttributes(f()), {
								error_type: i,
								latency_ms: Date.now() - e,
								result: "failure"
							}), t), a instanceof o("WAWebContactImportTypedError").WAWebContactImportTypedError) {
								var l = o("WAWebContactImportTypedError").FileError.cast(a.type);
								if (l != null) return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceError(a.type, t), n(null, !0), void y(function() {
									o("WAWebModalManager").ModalManager.open(m.jsx(o("WAWebBizBroadcastsErrorDialog.react").WAWebBizBroadcastsErrorDialog, {
										entryPoint: t,
										errorType: l,
										onClose: function() {
											o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.reviewFileErrorsPromptCancelClicked({ errorType: l }, t), o("WAWebModalManager").ModalManager.close();
										}
									}));
								});
							}
							throw o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceError(a instanceof Error ? a.message : "unknown", t), a;
						}
					},
					onSmartDetectionComplete: function(t) {
						u = t;
					}
				}, {
					fileRowLimit: d ? C * g : void 0,
					recipientLimit: C,
					smartColumnDetectionEnabled: d,
					verifyOptions: {
						errorCode: o("WAWebContactSyncErrorCodes").BIZ_BROADCAST_VERIFY,
						requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.BUSINESS_BROADCAST
					}
				});
			} catch (e) {
				o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Error in processFile: ", ""])), e).sendLogs("audience-import");
			}
		}, S = m.jsxs("div", {
			className: "x78zum5 x1f0uite xs2akgl x7v6yn8 xh8yej3",
			children: [m.jsx(r("WDSButton.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				variant: "borderless",
				onPress: f,
				testid: "biz-broadcasts-modal-cancel"
			}), m.jsx(r("WAWebBizBroadcastsFilePicker.react"), {
				entryPoint: t,
				onFileSelected: C,
				acceptTypes: o("WAWebContactImportFileTypeValidator").getAcceptTypesString([o("WAWebContactImportFileTypeValidator").FileType.EXCEL, o("WAWebContactImportFileTypeValidator").FileType.CSV]),
				buttonText: s._(
					/*BTDS*/
					""
				),
				testid: "biz-broadcasts-file-upload-picker"
			})]
		}), R = d ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), L = d ? s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", m.jsx(r("WDSTextualLink.react"), babelHelpers.extends({}, o("WAWebBizBroadcastsTemplateParsingUtils").getTemplateLinkProps(), {
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
			[s._implicitParam("=m1", m.jsx(r("WDSTextualLink.react"), babelHelpers.extends({}, o("WAWebBizBroadcastsTemplateParsingUtils").getTemplateLinkProps(), {
				onClick: function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.templateSaveClicked(t);
				},
				children: s._(
					/*BTDS*/
					""
				)
			})))]
		);
		return m.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.BusinessBroadcastUploadModal,
			actions: S,
			onOverlayClick: f,
			testid: "biz-broadcasts-upload-modal",
			controlsStyle: _.controlsStyle,
			children: m.jsxs("div", {
				className: "x6s0dn4 x78zum5 xdt5ytf x1f0uite xh8yej3",
				children: [
					l && m.jsx("div", {
						className: "x78zum5 xl56j7k",
						children: m.jsx(o("WAWebWdsIllMarketingMessagesIcon.react").WdsIllMarketingMessagesIcon, {})
					}),
					m.jsx(r("WDSText.react"), {
						type: "Headline2",
						colorName: "contentDefault",
						xstyle: _.fullWidth,
						children: R
					}),
					m.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						xstyle: _.fullWidth,
						children: L
					})
				]
			})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.WAWebBizBroadcastsUploadModal = v;
}), 226);

__d("WAWebContactManagerImportUploadModal.react", [
	"fbt",
	"WALogger",
	"WAWebContactImportFileProcessor",
	"WAWebContactImportFileTypeValidator",
	"WAWebContactImportUsernameValidator",
	"WAWebContactManagerImportExistingCustomerDetector",
	"WAWebContactManagerImportFilePicker.react",
	"WAWebContactManagerImportTemplateUtils",
	"WAWebContactManagerSMBUserJourneyLogger",
	"WAWebContactSyncErrorCodes",
	"WAWebContactSyncLogger",
	"WAWebModal.react",
	"WAWebNoop",
	"WAWebSpinner.react",
	"WDSButton.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = d || (d = o("react")), p = d.useState, _ = 1e3, f = {
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
	};
	function g(t) {
		var a = t.onCancel, i = t.onUploadSuccess, l = i === void 0 ? r("WAWebNoop") : i, d = p(!1), g = d[0], h = d[1], y = function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.dismissImportUpload(), a();
		}, C = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				h(!0);
				try {
					yield o("WAWebContactImportFileProcessor").processFile(t, {
						onComplete: function(n, r) {
							var t = o("WAWebContactImportUsernameValidator").detectDuplicateUsernames(n, { extraHeaderKeys: [o("WAWebContactManagerImportTemplateUtils").FBT_USERNAME] }), a = t.errorList, i = t.validContacts, s = o("WAWebContactManagerImportExistingCustomerDetector").detectExistingCustomers(i), u = s.errorList, c = s.validContacts, d = [].concat(r, a, u).sort(function(e, t) {
								return e.rowIndex - t.rowIndex;
							});
							o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
								"[cm:import] done valid=",
								" err=",
								" dup=",
								" existing=",
								""
							])), c.length, d.length, a.length, u.length), l(c, d);
						},
						onError: function(t) {
							o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[cm:import] processFile failed: ", ""])), t), a();
						}
					}, {
						recipientLimit: _,
						verifyOptions: {
							errorCode: o("WAWebContactSyncErrorCodes").CUSTOMER_MANAGER_IMPORT_VERIFY,
							requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.CUSTOMER_MANAGER_IMPORT
						}
					});
				} catch (e) {
					o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[cm:import] uncaught processFile error: ", ""])), e), a();
				} finally {
					h(!1);
				}
			});
			return function(n) {
				return t.apply(this, arguments);
			};
		})();
		return m.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.BusinessBroadcastUploadModal,
			actions: g ? null : m.jsxs("div", {
				className: "x78zum5 xs2akgl x7v6yn8 xh8yej3",
				children: [m.jsx(r("WDSButton.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					variant: "borderless",
					onPress: y,
					testid: "cm-import-upload-modal-cancel"
				}), m.jsx(r("WAWebContactManagerImportFilePicker.react"), {
					onFileSelected: C,
					acceptTypes: o("WAWebContactImportFileTypeValidator").getAcceptTypesString([o("WAWebContactImportFileTypeValidator").FileType.EXCEL, o("WAWebContactImportFileTypeValidator").FileType.CSV]),
					buttonText: s._(
						/*BTDS*/
						""
					),
					testid: "cm-import-upload-modal-upload-btn"
				})]
			}),
			onOverlayClick: g ? r("WAWebNoop") : y,
			testid: "cm-import-upload-modal",
			controlsStyle: f.controlsStyle,
			children: g ? m.jsx("div", {
				className: "x6s0dn4 x78zum5 xl56j7k xz65tgg xh8yej3",
				role: "status",
				"aria-live": "polite",
				"aria-label": s._(
					/*BTDS*/
					""
				),
				"data-testid": "cm-import-upload-modal-processing",
				children: m.jsx(o("WAWebSpinner.react").Spinner, { size: 48 })
			}) : m.jsxs("div", {
				className: "x6s0dn4 x78zum5 xdt5ytf x1f0uite xh8yej3",
				children: [m.jsx("div", {
					role: "heading",
					"aria-level": 2,
					className: "xh8yej3",
					children: m.jsx(r("WDSText.react"), {
						type: "Headline2",
						colorName: "contentDefault",
						xstyle: f.fullWidth,
						children: s._(
							/*BTDS*/
							""
						)
					})
				}), m.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					xstyle: f.fullWidth,
					children: s._(
						/*BTDS*/
						"",
						[s._implicitParam("=m1", m.jsx(r("WDSTextualLink.react"), babelHelpers.extends({}, o("WAWebContactManagerImportTemplateUtils").getTemplateLinkProps(), {
							onClick: function() {
								o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickImportSaveTemplate();
							},
							children: s._(
								/*BTDS*/
								""
							)
						})))]
					)
				})]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);

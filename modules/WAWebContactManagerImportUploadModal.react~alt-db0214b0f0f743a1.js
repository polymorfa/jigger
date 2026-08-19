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
		var n = t.onCancel, a = t.onUploadSuccess, i = a === void 0 ? r("WAWebNoop") : a, l = p(!1), d = l[0], g = l[1], h = function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.dismissImportUpload(), n();
		}, y = async function(r) {
			g(!0);
			try {
				await o("WAWebContactImportFileProcessor").processFile(r, {
					onComplete: function(n, r) {
						var t = o("WAWebContactImportUsernameValidator").detectDuplicateUsernames(n, { extraHeaderKeys: [o("WAWebContactManagerImportTemplateUtils").FBT_USERNAME] }), a = t.errorList, l = t.validContacts, s = o("WAWebContactManagerImportExistingCustomerDetector").detectExistingCustomers(l), u = s.errorList, c = s.validContacts, d = [].concat(r, a, u).sort(function(e, t) {
							return e.rowIndex - t.rowIndex;
						});
						o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
							"[cm:import] done valid=",
							" err=",
							" dup=",
							" existing=",
							""
						])), c.length, d.length, a.length, u.length), i(c, d);
					},
					onError: function(t) {
						o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[cm:import] processFile failed: ", ""])), t), n();
					}
				}, {
					recipientLimit: _,
					verifyOptions: {
						errorCode: o("WAWebContactSyncErrorCodes").CUSTOMER_MANAGER_IMPORT_VERIFY,
						requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.CUSTOMER_MANAGER_IMPORT
					}
				});
			} catch (e) {
				o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[cm:import] uncaught processFile error: ", ""])), e), n();
			} finally {
				g(!1);
			}
		};
		return m.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.BusinessBroadcastUploadModal,
			actions: d ? null : m.jsxs("div", {
				className: "x78zum5 xs2akgl x7v6yn8 xh8yej3",
				children: [m.jsx(r("WDSButton.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					variant: "borderless",
					onPress: h,
					testid: "cm-import-upload-modal-cancel"
				}), m.jsx(r("WAWebContactManagerImportFilePicker.react"), {
					onFileSelected: y,
					acceptTypes: o("WAWebContactImportFileTypeValidator").getAcceptTypesString([o("WAWebContactImportFileTypeValidator").FileType.EXCEL, o("WAWebContactImportFileTypeValidator").FileType.CSV]),
					buttonText: s._(
						/*BTDS*/
						""
					),
					testid: "cm-import-upload-modal-upload-btn"
				})]
			}),
			onOverlayClick: d ? r("WAWebNoop") : h,
			testid: "cm-import-upload-modal",
			controlsStyle: f.controlsStyle,
			children: d ? m.jsx("div", {
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

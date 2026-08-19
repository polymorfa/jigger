__d("WAWebBizBroadcastsManageAudiencePanel.react", [
	"fbt",
	"WAWebAudienceExpressionTypes",
	"WAWebBizBroadcastsAudienceUtils",
	"WAWebBizBroadcastsDialog.react",
	"WAWebBizBroadcastsDrawerReducer",
	"WAWebBizBroadcastsErrorDetailsSection.react",
	"WAWebBizBroadcastsImportLoggingUtils",
	"WAWebBizBroadcastsManageAudienceListCreationSuccessPanel.react",
	"WAWebBizBroadcastsSuccessfulContacts.react",
	"WAWebBroadcastAudienceNameField.react",
	"WAWebBroadcastListAction",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebContactImportTypedError",
	"WAWebDrawerManager",
	"WDSButton.react",
	"WDSIconIcDelete.react",
	"WDSTooltip.react",
	"asyncToGeneratorRuntime",
	"countWhere",
	"formatDate",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useReducer, p = c.useState;
	function _(e) {
		var t = e.entryPoint, a = e.errorList, i = e.importLoggingContext, l = e.validContactsData, c = m(o("WAWebBizBroadcastsDrawerReducer").reducer, {
			errorList: a,
			validContactsData: l
		}), _ = c[0], f = c[1];
		d(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactWizardViewed({
				num_duplicate_contacts: r("countWhere")(a, function(e) {
					return e.errorType === o("WAWebContactImportTypedError").PhoneError.DUPLICATE;
				}),
				num_error_contacts: a.length,
				num_invalid_contacts: r("countWhere")(a, function(e) {
					return e.errorType === o("WAWebContactImportTypedError").PhoneError.INVALID;
				}),
				num_non_wa_contacts: r("countWhere")(a, function(e) {
					return e.errorType === o("WAWebContactImportTypedError").PhoneError.NOT_WHATSAPP_USER;
				}),
				num_total_contacts: l.length + a.length
			}, t);
		}, [
			t,
			l,
			a
		]);
		var g = p(function() {
			var e = r("formatDate")(Date.now() / 1e3, r("formatDate").DEFAULT_FORMAT);
			return s._(
				/*BTDS*/
				"",
				[s._param("creation-date", e)]
			).toString();
		}), h = g[0], y = g[1], C = p(null), b = C[0], v = C[1], S = _.errorList, R = _.validContactsData;
		function L() {
			b == null ? o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactWizardCancelClicked(t) : o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactImportSuccessCancelClicked(t), o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
		}
		var E;
		b != null ? E = u.jsx(r("WAWebBizBroadcastsManageAudienceListCreationSuccessPanel.react"), {
			broadcastListName: b.name,
			broadcastListRecipientCount: b.recipientCount
		}) : E = u.jsxs(u.Fragment, { children: [u.jsx("div", {
			className: "x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
			children: u.jsx(r("WAWebBroadcastAudienceNameField.react"), {
				defaultValue: h,
				onFocus: function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactListNameEntered(t);
				},
				onValueChange: y,
				testid: "business_broadcasts_manage_audience_name_textfield"
			})
		}), u.jsxs("table", {
			className: "xh8yej3",
			children: [u.jsx(r("WAWebBizBroadcastsErrorDetailsSection.react"), {
				errorList: S,
				contacts: R,
				entryPoint: t,
				onDeleteErrorItem: function(n) {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.errorContactDeleteClicked(t), f({
						payload: { errorItem: n },
						type: "DELETE_ERROR_ITEM"
					});
				},
				onDeleteAllErrorItems: function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.allErrorContactsDeleteClicked(t), f({ type: "DELETE_ALL_ERROR_ITEMS" });
				},
				onUpdateContact: function(n, r) {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.errorContactEditClicked(t), f({
						payload: {
							editedContact: n,
							originalIndex: r
						},
						type: "SAVE_EDITED_CONTACT"
					});
				}
			}), u.jsx(r("WAWebBizBroadcastsSuccessfulContacts.react"), {
				contacts: R,
				actions: function(n) {
					return u.jsx(r("WDSButton.react"), {
						size: "medium",
						variant: "borderless",
						Icon: r("WDSIconIcDelete.react"),
						onPress: function() {
							o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactDeleteClicked(t), f({
								payload: { contact: n },
								type: "DELETE_CONTACT"
							});
						}
					});
				}
			})]
		})] });
		var k = S.length > 0 || h.length === 0 || h.length > o("WAWebBizBroadcastsAudienceUtils").MAX_AUDIENCE_NAME_LENGTH;
		return u.jsx(r("WAWebBizBroadcastsDialog.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			onClose: L,
			testid: "biz-broadcasts-upload-modal",
			primaryAction: b == null && u.jsx(r("WDSTooltip.react"), {
				disabled: !k,
				label: s._(
					/*BTDS*/
					""
				),
				children: u.jsx(r("WDSButton.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					variant: "filled",
					onPress: function() {
						var e = function(n) {
							v(n), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactImportSuccessViewed({
								num_error_contacts: S.length,
								num_total_contacts: R.length + S.length
							}, t);
						};
						o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactsSaveClicked({
							num_error_contacts: S.length,
							num_total_contacts: R.length + S.length
						}, t);
						var r = R.map(function(e) {
							return {
								lid: e.lid,
								phone: e.phone
							};
						});
						n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
							try {
								var n = yield o("WAWebBroadcastListAction").createBroadcastListAction({
									broadcastListName: h,
									contacts: r
								});
								o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(R.length, "success", void 0, t, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceSuccessLoggingExtraAttributes(i, {
									audienceCount: 1,
									importedRowCount: R.length
								})), e({
									audienceExpression: o("WAWebAudienceExpressionTypes").DEFAULT_AUDIENCE_EXPRESSION,
									broadcastJid: n,
									lastBroadcastTimestamp: null,
									name: h,
									recipientCount: R.length
								});
							} catch (e) {
								var a = e instanceof Error ? e.message : "unknown";
								o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(R.length, "failure", a, t, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceLoggingExtraAttributes(i));
							}
						})();
					},
					testid: "biz-broadcasts-modal-save-audience",
					disabled: k
				})
			}),
			children: u.jsx("div", {
				className: "x1p57kb1 xvpt6g3 x1tvm86q x1hqvyuz x25e6zw xpsqkbl",
				children: E
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);

__d("WAWebBizBroadcastsImportAudienceScreen.react", [
	"WAWebBizBroadcastsAudienceUtils",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizBroadcastsDrawerReducer",
	"WAWebBizBroadcastsImportAudienceErrorsList.react",
	"WAWebBizBroadcastsImportAudienceTable.react",
	"WAWebBizBroadcastsImportLoggingUtils",
	"WAWebBizBroadcastsUpsertAudienceSaveButton.react",
	"WAWebBizTwoColumnLayout.react",
	"WAWebBroadcastAudienceNameFieldCard.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebContactImportTemplateParsingUtils",
	"WAWebContactImportTypedError",
	"WAWebDivider.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"countWhere",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useMemo, m = u.useReducer, p = u.useRef, _ = u.useState, f = { drawerBody: {
		alignItems: "x6s0dn4",
		backgroundColor: "x1h3rtpe",
		paddingTop: "x1p57kb1",
		paddingBottom: "xvpt6g3",
		width: "xh8yej3",
		$$css: !0
	} };
	function g(e) {
		var t = e.entryPoint, n = e.errorList, a = e.importLoggingContext, i = e.isBBCreationFlow, l = i === void 0 ? !1 : i, u = e.onClose, g = e.onCreateAudienceSuccess, h = e.onSendBroadcast, y = e.ref, C = e.validContactsData, b = m(o("WAWebBizBroadcastsDrawerReducer").reducer, {
			errorList: n,
			validContactsData: C
		}), v = b[0], S = b[1], R = v.errorList, L = v.validContactsData, E = _(""), k = E[0], I = E[1], T = p(!1);
		c(function() {
			T.current || (T.current = !0, o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactWizardViewed(babelHelpers.extends({}, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceMetadataLoggingExtraAttributes(a, {
				audienceCount: 1,
				importedRowCount: C.length
			}), {
				num_duplicate_contacts: r("countWhere")(n, function(e) {
					return e.errorType === o("WAWebContactImportTypedError").PhoneError.DUPLICATE;
				}),
				num_error_contacts: n.length,
				num_invalid_contacts: r("countWhere")(n, function(e) {
					return e.errorType === o("WAWebContactImportTypedError").PhoneError.INVALID;
				}),
				num_non_wa_contacts: r("countWhere")(n, function(e) {
					return e.errorType === o("WAWebContactImportTypedError").PhoneError.NOT_WHATSAPP_USER;
				}),
				num_total_contacts: C.length + n.length
			}), t));
		}, [
			t,
			a,
			C,
			n
		]);
		var D = L.map(function(e) {
			var t;
			return {
				lid: (t = e.lid) == null ? void 0 : t.toString(),
				phone: e.phone
			};
		}), x = R.length > 0 || L.length === 0, $ = d(function() {
			return {
				entryPoint: t,
				importLoggingContext: a,
				isImport: !0
			};
		}, [t, a]);
		return s.jsxs(r("WAWebDrawer.react"), {
			ref: y,
			children: [
				s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					testid: "biz-broadcasts-import-audience-drawer-header",
					title: o("WAWebBizBroadcastsCreationStrings").getImportAudienceLabel(),
					onBack: function() {
						var e = a == null ? null : o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceCancelLoggingExtraAttributes(o("WAWebBizBroadcastsImportLoggingUtils").ImportAudienceCancelPhase.IMPORT_REVIEW, a, null, {
							audienceCount: 1,
							importedRowCount: L.length
						});
						o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactWizardCancelClicked(t, e), u();
					},
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					focusBackOrCancel: !0
				}),
				s.jsx(r("WAWebDrawerBody.react"), {
					isRefresh: !0,
					xstyle: f.drawerBody,
					children: s.jsx(r("WAWebBizTwoColumnLayout.react"), {
						primaryContent: s.jsxs(s.Fragment, { children: [s.jsx(r("WAWebBizBroadcastsImportAudienceErrorsList.react"), {
							contacts: L,
							entryPoint: t,
							errorList: R,
							onDeleteAllErrorItems: function() {
								if (o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.allErrorContactsDeleteClicked(t), L.length === 0) {
									u();
									return;
								}
								S({ type: "DELETE_ALL_ERROR_ITEMS" }), o("WAWebBizBroadcastsAudienceUtils").showImportAudienceDeleteAllContactsSuccessToast(R.length, function() {
									return S({
										payload: { originalErrorList: R },
										type: "UNDO_DELETE_ALL_ERROR_ITEMS"
									});
								});
							},
							onDeleteErrorItem: function(n) {
								o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.errorContactDeleteClicked(t);
								var e = o("WAWebContactImportTemplateParsingUtils").extractName(n.rowData);
								S({
									payload: { errorItem: n },
									type: "DELETE_ERROR_ITEM"
								}), o("WAWebBizBroadcastsAudienceUtils").showImportAudienceDeleteErrorSuccessToast(e, function() {
									return S({
										payload: {
											originalErrorItem: n,
											originalIndex: n.rowIndex
										},
										type: "UNDO_DELETE_ERROR_ITEM"
									});
								});
							},
							onUpdateContact: function(n, r, a) {
								var e, i;
								o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.errorContactEditClicked(t), S({
									payload: {
										editedContact: r,
										originalIndex: a
									},
									type: "SAVE_EDITED_CONTACT"
								}), o("WAWebBizBroadcastsAudienceUtils").showImportAudienceEditContactSuccessToast(((e = r.firstName) != null ? e : "") + ((i = r.lastName) != null ? i : ""), function() {
									return S({
										payload: {
											newIndex: r.rowIndex,
											originalErrorContact: n,
											originalIndex: a
										},
										type: "UNDO_SAVE_EDITED_CONTACT"
									});
								});
							}
						}), s.jsx(r("WAWebBizBroadcastsImportAudienceTable.react"), {
							contacts: L,
							onDeleteContact: function(n) {
								var e, r;
								o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactDeleteClicked(t), S({
									payload: { contact: n },
									type: "DELETE_CONTACT"
								}), o("WAWebBizBroadcastsAudienceUtils").showImportAudienceDeleteErrorSuccessToast(((e = n.firstName) != null ? e : "") + ((r = n.lastName) != null ? r : ""), function() {
									return S({
										payload: {
											originalContact: n,
											originalIndex: n.rowIndex
										},
										type: "UNDO_DELETE_CONTACT"
									});
								});
							}
						})] }),
						secondaryContent: s.jsx(r("WAWebBroadcastAudienceNameFieldCard.react"), {
							value: k,
							onValueChange: I,
							onFocus: function() {
								o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactListNameEntered(t);
							},
							testid: "business_broadcasts_import_audience_name_textfield"
						})
					})
				}),
				s.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
				s.jsx(r("WAWebBizBroadcastsUpsertAudienceSaveButton.react"), {
					broadcastJid: null,
					broadcastListName: k,
					contacts: D,
					isDisabled: x,
					loggingContext: $,
					onCreateAudienceSuccess: g,
					onSendBroadcast: h,
					isBBCreationFlow: l
				})
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);

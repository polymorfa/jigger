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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(65), n = e.entryPoint, a = e.errorList, i = e.importLoggingContext, l = e.isBBCreationFlow, u = e.onClose, d = e.onCreateAudienceSuccess, g = e.onSendBroadcast, v = e.ref, S = e.validContactsData, R = l === void 0 ? !1 : l, L;
		t[0] !== S || t[1] !== a ? (L = {
			errorList: a,
			validContactsData: S
		}, t[0] = S, t[1] = a, t[2] = L) : L = t[2];
		var E = m(o("WAWebBizBroadcastsDrawerReducer").reducer, L), k = E[0], I = E[1], T = k.errorList, D = k.validContactsData, x = _(""), $ = x[0], P = x[1], N = p(!1), M, w;
		t[3] !== n || t[4] !== i || t[5] !== S || t[6] !== a ? (M = function() {
			N.current || (N.current = !0, o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactWizardViewed(babelHelpers.extends({}, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceMetadataLoggingExtraAttributes(i, {
				audienceCount: 1,
				importedRowCount: S.length
			}), {
				num_duplicate_contacts: r("countWhere")(a, b),
				num_error_contacts: a.length,
				num_invalid_contacts: r("countWhere")(a, C),
				num_non_wa_contacts: r("countWhere")(a, y),
				num_total_contacts: S.length + a.length
			}), n));
		}, w = [
			n,
			i,
			S,
			a
		], t[3] = n, t[4] = i, t[5] = S, t[6] = a, t[7] = M, t[8] = w) : (M = t[7], w = t[8]), c(M, w);
		var A;
		t[9] !== D ? (A = D.map(h), t[9] = D, t[10] = A) : A = t[10];
		var F = A, O = T.length > 0 || D.length === 0, B;
		t[11] !== n || t[12] !== i ? (B = {
			entryPoint: n,
			importLoggingContext: i,
			isImport: !0
		}, t[11] = n, t[12] = i, t[13] = B) : B = t[13];
		var W = B, q;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (q = o("WAWebBizBroadcastsCreationStrings").getImportAudienceLabel(), t[14] = q) : q = t[14];
		var U;
		t[15] !== D.length || t[16] !== n || t[17] !== i || t[18] !== u ? (U = s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			testid: "biz-broadcasts-import-audience-drawer-header",
			title: q,
			onBack: function() {
				var e = i == null ? null : o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceCancelLoggingExtraAttributes(o("WAWebBizBroadcastsImportLoggingUtils").ImportAudienceCancelPhase.IMPORT_REVIEW, i, null, {
					audienceCount: 1,
					importedRowCount: D.length
				});
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactWizardCancelClicked(n, e), u();
			},
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			focusBackOrCancel: !0
		}), t[15] = D.length, t[16] = n, t[17] = i, t[18] = u, t[19] = U) : U = t[19];
		var V;
		t[20] !== D.length || t[21] !== n || t[22] !== T || t[23] !== u ? (V = function() {
			if (o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.allErrorContactsDeleteClicked(n), D.length === 0) {
				u();
				return;
			}
			I({ type: "DELETE_ALL_ERROR_ITEMS" }), o("WAWebBizBroadcastsAudienceUtils").showImportAudienceDeleteAllContactsSuccessToast(T.length, function() {
				return I({
					payload: { originalErrorList: T },
					type: "UNDO_DELETE_ALL_ERROR_ITEMS"
				});
			});
		}, t[20] = D.length, t[21] = n, t[22] = T, t[23] = u, t[24] = V) : V = t[24];
		var H, G;
		t[25] !== n ? (H = function(t) {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.errorContactDeleteClicked(n);
			var e = o("WAWebContactImportTemplateParsingUtils").extractName(t.rowData);
			I({
				payload: { errorItem: t },
				type: "DELETE_ERROR_ITEM"
			}), o("WAWebBizBroadcastsAudienceUtils").showImportAudienceDeleteErrorSuccessToast(e, function() {
				return I({
					payload: {
						originalErrorItem: t,
						originalIndex: t.rowIndex
					},
					type: "UNDO_DELETE_ERROR_ITEM"
				});
			});
		}, G = function(t, r, a) {
			var e, i;
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.errorContactEditClicked(n), I({
				payload: {
					editedContact: r,
					originalIndex: a
				},
				type: "SAVE_EDITED_CONTACT"
			}), o("WAWebBizBroadcastsAudienceUtils").showImportAudienceEditContactSuccessToast(((e = r.firstName) != null ? e : "") + ((i = r.lastName) != null ? i : ""), function() {
				return I({
					payload: {
						newIndex: r.rowIndex,
						originalErrorContact: t,
						originalIndex: a
					},
					type: "UNDO_SAVE_EDITED_CONTACT"
				});
			});
		}, t[25] = n, t[26] = H, t[27] = G) : (H = t[26], G = t[27]);
		var z;
		t[28] !== D || t[29] !== n || t[30] !== T || t[31] !== H || t[32] !== G || t[33] !== V ? (z = s.jsx(r("WAWebBizBroadcastsImportAudienceErrorsList.react"), {
			contacts: D,
			entryPoint: n,
			errorList: T,
			onDeleteAllErrorItems: V,
			onDeleteErrorItem: H,
			onUpdateContact: G
		}), t[28] = D, t[29] = n, t[30] = T, t[31] = H, t[32] = G, t[33] = V, t[34] = z) : z = t[34];
		var j;
		t[35] !== n ? (j = function(t) {
			var e, r;
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactDeleteClicked(n), I({
				payload: { contact: t },
				type: "DELETE_CONTACT"
			}), o("WAWebBizBroadcastsAudienceUtils").showImportAudienceDeleteErrorSuccessToast(((e = t.firstName) != null ? e : "") + ((r = t.lastName) != null ? r : ""), function() {
				return I({
					payload: {
						originalContact: t,
						originalIndex: t.rowIndex
					},
					type: "UNDO_DELETE_CONTACT"
				});
			});
		}, t[35] = n, t[36] = j) : j = t[36];
		var K;
		t[37] !== D || t[38] !== j ? (K = s.jsx(r("WAWebBizBroadcastsImportAudienceTable.react"), {
			contacts: D,
			onDeleteContact: j
		}), t[37] = D, t[38] = j, t[39] = K) : K = t[39];
		var Q;
		t[40] !== z || t[41] !== K ? (Q = s.jsxs(s.Fragment, { children: [z, K] }), t[40] = z, t[41] = K, t[42] = Q) : Q = t[42];
		var X;
		t[43] !== n ? (X = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactListNameEntered(n);
		}, t[43] = n, t[44] = X) : X = t[44];
		var Y;
		t[45] !== $ || t[46] !== X ? (Y = s.jsx(r("WAWebBroadcastAudienceNameFieldCard.react"), {
			value: $,
			onValueChange: P,
			onFocus: X,
			testid: "business_broadcasts_import_audience_name_textfield"
		}), t[45] = $, t[46] = X, t[47] = Y) : Y = t[47];
		var J;
		t[48] !== Q || t[49] !== Y ? (J = s.jsx(r("WAWebDrawerBody.react"), {
			isRefresh: !0,
			xstyle: f.drawerBody,
			children: s.jsx(r("WAWebBizTwoColumnLayout.react"), {
				primaryContent: Q,
				secondaryContent: Y
			})
		}), t[48] = Q, t[49] = Y, t[50] = J) : J = t[50];
		var Z;
		t[51] === Symbol.for("react.memo_cache_sentinel") ? (Z = s.jsx(r("WAWebDivider.react"), { direction: "horizontal" }), t[51] = Z) : Z = t[51];
		var ee;
		t[52] !== $ || t[53] !== F || t[54] !== R || t[55] !== O || t[56] !== d || t[57] !== g || t[58] !== W ? (ee = s.jsx(r("WAWebBizBroadcastsUpsertAudienceSaveButton.react"), {
			broadcastJid: null,
			broadcastListName: $,
			contacts: F,
			isDisabled: O,
			loggingContext: W,
			onCreateAudienceSuccess: d,
			onSendBroadcast: g,
			isBBCreationFlow: R
		}), t[52] = $, t[53] = F, t[54] = R, t[55] = O, t[56] = d, t[57] = g, t[58] = W, t[59] = ee) : ee = t[59];
		var te;
		return t[60] !== v || t[61] !== J || t[62] !== ee || t[63] !== U ? (te = s.jsxs(r("WAWebDrawer.react"), {
			ref: v,
			children: [
				U,
				J,
				Z,
				ee
			]
		}), t[60] = v, t[61] = J, t[62] = ee, t[63] = U, t[64] = te) : te = t[64], te;
	}
	function h(e) {
		var t;
		return {
			lid: (t = e.lid) == null ? void 0 : t.toString(),
			phone: e.phone
		};
	}
	function y(e) {
		return e.errorType === o("WAWebContactImportTypedError").PhoneError.NOT_WHATSAPP_USER;
	}
	function C(e) {
		return e.errorType === o("WAWebContactImportTypedError").PhoneError.INVALID;
	}
	function b(e) {
		return e.errorType === o("WAWebContactImportTypedError").PhoneError.DUPLICATE;
	}
	l.default = g;
}), 98);

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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useReducer, p = c.useState;
	function _(e) {
		var t = o("react-compiler-runtime").c(62), a = e.entryPoint, i = e.errorList, l = e.importLoggingContext, c = e.validContactsData, _;
		t[0] !== c || t[1] !== i ? (_ = {
			errorList: i,
			validContactsData: c
		}, t[0] = c, t[1] = i, t[2] = _) : _ = t[2];
		var b = m(o("WAWebBizBroadcastsDrawerReducer").reducer, _), v = b[0], S = b[1], R;
		t[3] !== a || t[4] !== c.length || t[5] !== i ? (R = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactWizardViewed({
				num_duplicate_contacts: r("countWhere")(i, C),
				num_error_contacts: i.length,
				num_invalid_contacts: r("countWhere")(i, y),
				num_non_wa_contacts: r("countWhere")(i, h),
				num_total_contacts: c.length + i.length
			}, a);
		}, t[3] = a, t[4] = c.length, t[5] = i, t[6] = R) : R = t[6];
		var L;
		t[7] !== a || t[8] !== c || t[9] !== i ? (L = [
			a,
			c,
			i
		], t[7] = a, t[8] = c, t[9] = i, t[10] = L) : L = t[10], d(R, L);
		var E = p(g), k = E[0], I = E[1], T = p(null), D = T[0], x = T[1], $ = v.errorList, P = v.validContactsData, N;
		t[11] !== D || t[12] !== a ? (N = function() {
			D == null ? o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactWizardCancelClicked(a) : o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactImportSuccessCancelClicked(a), o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
		}, t[11] = D, t[12] = a, t[13] = N) : N = t[13];
		var M = N, w;
		if (D != null) {
			var A;
			t[14] !== D.name || t[15] !== D.recipientCount ? (A = u.jsx(r("WAWebBizBroadcastsManageAudienceListCreationSuccessPanel.react"), {
				broadcastListName: D.name,
				broadcastListRecipientCount: D.recipientCount
			}), t[14] = D.name, t[15] = D.recipientCount, t[16] = A) : A = t[16], w = A;
		} else {
			var F;
			t[17] === Symbol.for("react.memo_cache_sentinel") ? (F = { className: "x1p57kb1 xvtqlqk xvpt6g3 xdx6fka" }, t[17] = F) : F = t[17];
			var O;
			t[18] !== a ? (O = function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactListNameEntered(a);
			}, t[18] = a, t[19] = O) : O = t[19];
			var B;
			t[20] !== k || t[21] !== O ? (B = u.jsx("div", babelHelpers.extends({}, F, { children: u.jsx(r("WAWebBroadcastAudienceNameField.react"), {
				defaultValue: k,
				onFocus: O,
				onValueChange: I,
				testid: "business_broadcasts_manage_audience_name_textfield"
			}) })), t[20] = k, t[21] = O, t[22] = B) : B = t[22];
			var W;
			t[23] === Symbol.for("react.memo_cache_sentinel") ? (W = { className: "xh8yej3" }, t[23] = W) : W = t[23];
			var q, U, V;
			t[24] !== a ? (V = function(t) {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.errorContactDeleteClicked(a), S({
					payload: { errorItem: t },
					type: "DELETE_ERROR_ITEM"
				});
			}, q = function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.allErrorContactsDeleteClicked(a), S({ type: "DELETE_ALL_ERROR_ITEMS" });
			}, U = function(t, n) {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.errorContactEditClicked(a), S({
					payload: {
						editedContact: t,
						originalIndex: n
					},
					type: "SAVE_EDITED_CONTACT"
				});
			}, t[24] = a, t[25] = q, t[26] = U, t[27] = V) : (q = t[25], U = t[26], V = t[27]);
			var H;
			t[28] !== P || t[29] !== a || t[30] !== $ || t[31] !== q || t[32] !== U || t[33] !== V ? (H = u.jsx(r("WAWebBizBroadcastsErrorDetailsSection.react"), {
				errorList: $,
				contacts: P,
				entryPoint: a,
				onDeleteErrorItem: V,
				onDeleteAllErrorItems: q,
				onUpdateContact: U
			}), t[28] = P, t[29] = a, t[30] = $, t[31] = q, t[32] = U, t[33] = V, t[34] = H) : H = t[34];
			var G;
			t[35] !== a ? (G = function(t) {
				return u.jsx(r("WDSButton.react"), {
					size: "medium",
					variant: "borderless",
					Icon: r("WDSIconIcDelete.react"),
					onPress: function() {
						o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactDeleteClicked(a), S({
							payload: { contact: t },
							type: "DELETE_CONTACT"
						});
					}
				});
			}, t[35] = a, t[36] = G) : G = t[36];
			var z;
			t[37] !== P || t[38] !== G ? (z = u.jsx(r("WAWebBizBroadcastsSuccessfulContacts.react"), {
				contacts: P,
				actions: G
			}), t[37] = P, t[38] = G, t[39] = z) : z = t[39];
			var j;
			t[40] !== H || t[41] !== z ? (j = u.jsxs("table", babelHelpers.extends({}, W, { children: [H, z] })), t[40] = H, t[41] = z, t[42] = j) : j = t[42];
			var K;
			t[43] !== j || t[44] !== B ? (K = u.jsxs(u.Fragment, { children: [B, j] }), t[43] = j, t[44] = B, t[45] = K) : K = t[45], w = K;
		}
		var Q = $.length > 0 || k.length === 0 || k.length > o("WAWebBizBroadcastsAudienceUtils").MAX_AUDIENCE_NAME_LENGTH, X;
		t[46] === Symbol.for("react.memo_cache_sentinel") ? (X = s._(
			/*BTDS*/
			""
		), t[46] = X) : X = t[46];
		var Y;
		t[47] !== k || t[48] !== P || t[49] !== D || t[50] !== a || t[51] !== $.length || t[52] !== l || t[53] !== Q ? (Y = D == null && u.jsx(r("WDSTooltip.react"), {
			disabled: !Q,
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
					var e = function(t) {
						x(t), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactImportSuccessViewed({
							num_error_contacts: $.length,
							num_total_contacts: P.length + $.length
						}, a);
					};
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactsSaveClicked({
						num_error_contacts: $.length,
						num_total_contacts: P.length + $.length
					}, a);
					var t = P.map(f);
					n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
						try {
							var n = yield o("WAWebBroadcastListAction").createBroadcastListAction({
								broadcastListName: k,
								contacts: t
							});
							o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(P.length, "success", void 0, a, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceSuccessLoggingExtraAttributes(l, {
								audienceCount: 1,
								importedRowCount: P.length
							})), e({
								audienceExpression: o("WAWebAudienceExpressionTypes").DEFAULT_AUDIENCE_EXPRESSION,
								broadcastJid: n,
								lastBroadcastTimestamp: null,
								name: k,
								recipientCount: P.length
							});
						} catch (e) {
							var r = e, i = r instanceof Error ? r.message : "unknown";
							o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(P.length, "failure", i, a, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceLoggingExtraAttributes(l));
						}
					})();
				},
				testid: "biz-broadcasts-modal-save-audience",
				disabled: Q
			})
		}), t[47] = k, t[48] = P, t[49] = D, t[50] = a, t[51] = $.length, t[52] = l, t[53] = Q, t[54] = Y) : Y = t[54];
		var J;
		t[55] === Symbol.for("react.memo_cache_sentinel") ? (J = { className: "x1p57kb1 xvpt6g3 x1tvm86q x1hqvyuz x25e6zw xpsqkbl" }, t[55] = J) : J = t[55];
		var Z;
		t[56] !== w ? (Z = u.jsx("div", babelHelpers.extends({}, J, { children: w })), t[56] = w, t[57] = Z) : Z = t[57];
		var ee;
		return t[58] !== M || t[59] !== Y || t[60] !== Z ? (ee = u.jsx(r("WAWebBizBroadcastsDialog.react"), {
			title: X,
			onClose: M,
			testid: "biz-broadcasts-upload-modal",
			primaryAction: Y,
			children: Z
		}), t[58] = M, t[59] = Y, t[60] = Z, t[61] = ee) : ee = t[61], ee;
	}
	function f(e) {
		return {
			lid: e.lid,
			phone: e.phone
		};
	}
	function g() {
		var e = r("formatDate")(Date.now() / 1e3, r("formatDate").DEFAULT_FORMAT);
		return s._(
			/*BTDS*/
			"",
			[s._param("creation-date", e)]
		).toString();
	}
	function h(e) {
		return e.errorType === o("WAWebContactImportTypedError").PhoneError.NOT_WHATSAPP_USER;
	}
	function y(e) {
		return e.errorType === o("WAWebContactImportTypedError").PhoneError.INVALID;
	}
	function C(e) {
		return e.errorType === o("WAWebContactImportTypedError").PhoneError.DUPLICATE;
	}
	l.default = _;
}), 226);

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
	"countWhere",
	"formatDate",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useReducer, p = c.useState;
	function _(e) {
		var t = o("react-compiler-runtime").c(62), n = e.entryPoint, a = e.errorList, i = e.importLoggingContext, l = e.validContactsData, c;
		t[0] !== l || t[1] !== a ? (c = {
			errorList: a,
			validContactsData: l
		}, t[0] = l, t[1] = a, t[2] = c) : c = t[2];
		var _ = m(o("WAWebBizBroadcastsDrawerReducer").reducer, c), b = _[0], v = _[1], S;
		t[3] !== n || t[4] !== l.length || t[5] !== a ? (S = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactWizardViewed({
				num_duplicate_contacts: r("countWhere")(a, C),
				num_error_contacts: a.length,
				num_invalid_contacts: r("countWhere")(a, y),
				num_non_wa_contacts: r("countWhere")(a, h),
				num_total_contacts: l.length + a.length
			}, n);
		}, t[3] = n, t[4] = l.length, t[5] = a, t[6] = S) : S = t[6];
		var R;
		t[7] !== n || t[8] !== l || t[9] !== a ? (R = [
			n,
			l,
			a
		], t[7] = n, t[8] = l, t[9] = a, t[10] = R) : R = t[10], d(S, R);
		var L = p(g), E = L[0], k = L[1], I = p(null), T = I[0], D = I[1], x = b.errorList, $ = b.validContactsData, P;
		t[11] !== T || t[12] !== n ? (P = function() {
			T == null ? o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactWizardCancelClicked(n) : o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactImportSuccessCancelClicked(n), o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
		}, t[11] = T, t[12] = n, t[13] = P) : P = t[13];
		var N = P, M;
		if (T != null) {
			var w;
			t[14] !== T.name || t[15] !== T.recipientCount ? (w = u.jsx(r("WAWebBizBroadcastsManageAudienceListCreationSuccessPanel.react"), {
				broadcastListName: T.name,
				broadcastListRecipientCount: T.recipientCount
			}), t[14] = T.name, t[15] = T.recipientCount, t[16] = w) : w = t[16], M = w;
		} else {
			var A;
			t[17] === Symbol.for("react.memo_cache_sentinel") ? (A = { className: "x1p57kb1 xvtqlqk xvpt6g3 xdx6fka" }, t[17] = A) : A = t[17];
			var F;
			t[18] !== n ? (F = function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactListNameEntered(n);
			}, t[18] = n, t[19] = F) : F = t[19];
			var O;
			t[20] !== E || t[21] !== F ? (O = u.jsx("div", babelHelpers.extends({}, A, { children: u.jsx(r("WAWebBroadcastAudienceNameField.react"), {
				defaultValue: E,
				onFocus: F,
				onValueChange: k,
				testid: "business_broadcasts_manage_audience_name_textfield"
			}) })), t[20] = E, t[21] = F, t[22] = O) : O = t[22];
			var B;
			t[23] === Symbol.for("react.memo_cache_sentinel") ? (B = { className: "xh8yej3" }, t[23] = B) : B = t[23];
			var W, q, U;
			t[24] !== n ? (U = function(t) {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.errorContactDeleteClicked(n), v({
					payload: { errorItem: t },
					type: "DELETE_ERROR_ITEM"
				});
			}, W = function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.allErrorContactsDeleteClicked(n), v({ type: "DELETE_ALL_ERROR_ITEMS" });
			}, q = function(t, r) {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.errorContactEditClicked(n), v({
					payload: {
						editedContact: t,
						originalIndex: r
					},
					type: "SAVE_EDITED_CONTACT"
				});
			}, t[24] = n, t[25] = W, t[26] = q, t[27] = U) : (W = t[25], q = t[26], U = t[27]);
			var V;
			t[28] !== $ || t[29] !== n || t[30] !== x || t[31] !== W || t[32] !== q || t[33] !== U ? (V = u.jsx(r("WAWebBizBroadcastsErrorDetailsSection.react"), {
				errorList: x,
				contacts: $,
				entryPoint: n,
				onDeleteErrorItem: U,
				onDeleteAllErrorItems: W,
				onUpdateContact: q
			}), t[28] = $, t[29] = n, t[30] = x, t[31] = W, t[32] = q, t[33] = U, t[34] = V) : V = t[34];
			var H;
			t[35] !== n ? (H = function(t) {
				return u.jsx(r("WDSButton.react"), {
					size: "medium",
					variant: "borderless",
					Icon: r("WDSIconIcDelete.react"),
					onPress: function() {
						o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactDeleteClicked(n), v({
							payload: { contact: t },
							type: "DELETE_CONTACT"
						});
					}
				});
			}, t[35] = n, t[36] = H) : H = t[36];
			var G;
			t[37] !== $ || t[38] !== H ? (G = u.jsx(r("WAWebBizBroadcastsSuccessfulContacts.react"), {
				contacts: $,
				actions: H
			}), t[37] = $, t[38] = H, t[39] = G) : G = t[39];
			var z;
			t[40] !== V || t[41] !== G ? (z = u.jsxs("table", babelHelpers.extends({}, B, { children: [V, G] })), t[40] = V, t[41] = G, t[42] = z) : z = t[42];
			var j;
			t[43] !== z || t[44] !== O ? (j = u.jsxs(u.Fragment, { children: [O, z] }), t[43] = z, t[44] = O, t[45] = j) : j = t[45], M = j;
		}
		var K = x.length > 0 || E.length === 0 || E.length > o("WAWebBizBroadcastsAudienceUtils").MAX_AUDIENCE_NAME_LENGTH, Q;
		t[46] === Symbol.for("react.memo_cache_sentinel") ? (Q = s._(
			/*BTDS*/
			""
		), t[46] = Q) : Q = t[46];
		var X;
		t[47] !== E || t[48] !== $ || t[49] !== T || t[50] !== n || t[51] !== x.length || t[52] !== i || t[53] !== K ? (X = T == null && u.jsx(r("WDSTooltip.react"), {
			disabled: !K,
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
						D(t), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactImportSuccessViewed({
							num_error_contacts: x.length,
							num_total_contacts: $.length + x.length
						}, n);
					};
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactsSaveClicked({
						num_error_contacts: x.length,
						num_total_contacts: $.length + x.length
					}, n);
					var t = $.map(f);
					(async function() {
						try {
							var r = await o("WAWebBroadcastListAction").createBroadcastListAction({
								broadcastListName: E,
								contacts: t
							});
							o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceSaveResult($.length, "success", void 0, n, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceSuccessLoggingExtraAttributes(i, {
								audienceCount: 1,
								importedRowCount: $.length
							})), e({
								audienceExpression: o("WAWebAudienceExpressionTypes").DEFAULT_AUDIENCE_EXPRESSION,
								broadcastJid: r,
								lastBroadcastTimestamp: null,
								name: E,
								recipientCount: $.length
							});
						} catch (e) {
							var a = e, l = a instanceof Error ? a.message : "unknown";
							o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceSaveResult($.length, "failure", l, n, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceLoggingExtraAttributes(i));
						}
					})();
				},
				testid: "biz-broadcasts-modal-save-audience",
				disabled: K
			})
		}), t[47] = E, t[48] = $, t[49] = T, t[50] = n, t[51] = x.length, t[52] = i, t[53] = K, t[54] = X) : X = t[54];
		var Y;
		t[55] === Symbol.for("react.memo_cache_sentinel") ? (Y = { className: "x1p57kb1 xvpt6g3 x1tvm86q x1hqvyuz x25e6zw xpsqkbl" }, t[55] = Y) : Y = t[55];
		var J;
		t[56] !== M ? (J = u.jsx("div", babelHelpers.extends({}, Y, { children: M })), t[56] = M, t[57] = J) : J = t[57];
		var Z;
		return t[58] !== N || t[59] !== X || t[60] !== J ? (Z = u.jsx(r("WAWebBizBroadcastsDialog.react"), {
			title: Q,
			onClose: N,
			testid: "biz-broadcasts-upload-modal",
			primaryAction: X,
			children: J
		}), t[58] = N, t[59] = X, t[60] = J, t[61] = Z) : Z = t[61], Z;
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

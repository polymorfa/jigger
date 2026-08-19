__d("WAWebBizBroadcastsEditContactDialog.react", [
	"fbt",
	"WAWebBizBroadcastsContactErrorMessage",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebContactImportContactVerifier",
	"WAWebContactImportFileProcessor",
	"WAWebContactImportTemplateParsingUtils",
	"WAWebContactImportTypedError",
	"WAWebContactImportValidationUtils",
	"WAWebContactSyncErrorCodes",
	"WAWebContactSyncLogger",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WDSButton.react",
	"WDSText.react",
	"WDSTextField.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useRef, f = c.useState, g = { surface: "bb-edit-contact" }, h = {
		controlsStyle: {
			paddingInlineEnd: "xyri2b",
			paddingInlineStart: "x1c1uobl",
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		inputFields: {
			rowGap: "x1f0uite",
			$$css: !0
		}
	};
	function y(e, t) {
		if (e.trim().length === 0) return !1;
		var n = o("WAWebContactImportFileProcessor").normalizePhoneNumber(e);
		return t.has(n);
	}
	function C(e, t) {
		if (e != null && !e.isVerifying) {
			if (e.isValidPhoneNumber === !1) return r("WAWebBizBroadcastsContactErrorMessage")(o("WAWebContactImportTypedError").PhoneError.INVALID);
			if (e.isWhatsAppUser === !1) return r("WAWebBizBroadcastsContactErrorMessage")(o("WAWebContactImportTypedError").PhoneError.NOT_WHATSAPP_USER);
		}
		return t ? r("WAWebBizBroadcastsContactErrorMessage")(o("WAWebContactImportTypedError").PhoneError.DUPLICATE) : null;
	}
	function b(e, t) {
		if (e.trim().length <= 0) return null;
		var n = t(e);
		return {
			status: n.status,
			type: n.type
		};
	}
	function v(e) {
		var t = e.defaultValue, n = e.entryPoint, a = e.errorMessage, i = e.onValueChange;
		return u.jsx(r("WDSTextField.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			defaultValue: t,
			onValueChange: i,
			onFocus: function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactNameEntered(n);
			},
			error: a != null,
			errorText: a,
			testid: "business_broadcasts_edit_contact_name_textfield"
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.contactVerificationStatus, n = e.defaultValue, a = e.entryPoint, i = e.isDuplicate, l = e.onValueChange, c = C(t, i);
		return u.jsx(r("WDSTextField.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			defaultValue: n,
			onValueChange: l,
			onFocus: function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.phoneNumberEntered(a);
			},
			error: c != null,
			errorText: c,
			testid: "business_broadcasts_edit_contact_phone_textfield"
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.entryPoint, n = e.item, a = e.onCancel, i = e.onSave, l = e.validContactsData, c = p(function() {
			return new Set(l.map(function(e) {
				return o("WAWebContactImportFileProcessor").normalizePhoneNumber(e.phone);
			}));
		}, [l]), C = o("WAWebContactImportTemplateParsingUtils").extractPhone(n.rowData), R = o("WAWebContactImportTemplateParsingUtils").extractName(n.rowData), L = f(C), E = L[0], k = L[1], I = f(R), T = I[0], D = I[1], x = f(null), $ = x[0], P = x[1], N = _(null), M = f(function() {
			return b(R, o("WAWebContactImportValidationUtils").sanitizeName);
		}), w = M[0], A = M[1], F = d(async function(e) {
			if (P(null), e !== "") {
				var t = o("WAWebContactImportValidationUtils").validateAndFormatPhoneNumber(e);
				if (t.status !== o("WAWebContactImportValidationUtils").ValidationStatus.VALID || t.value == null) {
					P({
						isValidPhoneNumber: !1,
						isVerifying: !1
					});
					return;
				}
				try {
					var n = await o("WAWebContactImportContactVerifier").verifyWhatsAppUsers([e], {
						errorCode: o("WAWebContactSyncErrorCodes").BIZ_BROADCAST_VERIFY,
						requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.BUSINESS_BROADCAST
					}), r = n[Object.keys(n)[0]], a = r.isWhatsAppUser, i = r.lid;
					P({
						isValidPhoneNumber: !0,
						isVerifying: !1,
						isWhatsAppUser: a,
						lid: i
					});
				} catch (e) {
					P({
						isValidPhoneNumber: t.status === o("WAWebContactImportValidationUtils").ValidationStatus.VALID,
						isVerifying: !1,
						isWhatsAppUser: !1
					});
				}
			}
		}, []), O = d(function(e) {
			D(e);
			var t = o("WAWebContactImportValidationUtils").sanitizeName(e);
			A({
				status: t.status,
				type: t.type
			});
		}, []), B = d(function(e) {
			k(e), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.phoneNumberEntered(t), N.current != null && (window.clearTimeout(N.current), N.current = null), P(null), e.trim().length > 0 && (N.current = window.setTimeout(function() {
				F(e.trim());
			}, 250));
		}, [F, t]);
		m(function() {
			C.trim().length > 0 && F(C.trim());
		}, [C, F]), m(function() {
			return function() {
				N.current != null && window.clearTimeout(N.current);
			};
		}, []), m(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.editContactViewed(t);
		}, [t]);
		function W() {
			return !(w == null || w.status !== o("WAWebContactImportValidationUtils").ValidationStatus.VALID || $ == null || $.isVerifying || $.isValidPhoneNumber !== !0 || $.isWhatsAppUser !== !0 || y(E, c) && n.type === "error");
		}
		function q() {
			if (W()) {
				var e = o("WAWebContactImportValidationUtils").validateAndFormatPhoneNumber(E), n = { phone: e.value || "" }, r = T.trim().length > 0 ? o("WAWebContactImportValidationUtils").sanitizeName(T) : null;
				(r == null ? void 0 : r.value) != null && (n.firstName = r.value);
				var a = $ == null ? void 0 : $.lid;
				a != null && (n.lid = a), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.editContactConfirmClicked(t), i(n);
			}
		}
		return u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.BusinessBroadcastUploadModal,
			tsNavigationData: g,
			actions: u.jsxs("div", {
				className: "x78zum5 x7v6yn8 xh8yej3",
				children: [u.jsx(r("WDSButton.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					variant: "borderless",
					onPress: a,
					testid: "biz-broadcasts-edit-contact-modal-cancel"
				}), u.jsx(r("WDSButton.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					disabled: !W(),
					variant: "filled",
					onPress: q,
					testid: "biz-broadcasts-edit-contact-modal-update"
				})]
			}),
			onOverlayClick: a,
			testid: "biz-broadcasts-edit-contact-modal",
			controlsStyle: h.controlsStyle,
			children: u.jsxs("div", {
				className: "x78zum5 xdt5ytf x1f0uite xs2akgl xh8yej3",
				children: [u.jsx(r("WDSText.react"), {
					type: "Headline2",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: h.inputFields,
					align: "stretch",
					children: [u.jsx(v, {
						defaultValue: T,
						entryPoint: t,
						onValueChange: O,
						errorMessage: w != null && w.type ? r("WAWebBizBroadcastsContactErrorMessage")(w == null ? void 0 : w.type) : null
					}), u.jsx(S, {
						defaultValue: E,
						contactVerificationStatus: $,
						entryPoint: t,
						isDuplicate: y(E, c),
						onValueChange: B
					})]
				})]
			})
		});
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 226);

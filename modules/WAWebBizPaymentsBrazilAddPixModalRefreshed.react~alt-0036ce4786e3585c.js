__d("WAWebBizPaymentsBrazilAddPixModalRefreshed.react", [
	"fbt",
	"WALogger",
	"WAWebAddEditPixDisplayNameInput.react",
	"WAWebAddEditPixKeyInput.react",
	"WAWebAddEditPixKeyModalFooter.react",
	"WAWebAddEditPixKeyModalSubtitle.react",
	"WAWebAddEditPixKeyModalTitle.react",
	"WAWebAddEditPixKeyModalTitleStreamlineVariant.react",
	"WAWebApiPrivacyDisallowedList",
	"WAWebBackendErrors",
	"WAWebBizPaymentsBrazilAddPixModal.react",
	"WAWebBrazilPixKeyValidationUtils",
	"WAWebConfirmPopup.react",
	"WAWebConsumerAddPixKeyModalHeader.react",
	"WAWebConsumerPaymentsHomeLogger",
	"WAWebConsumerPixStrings",
	"WAWebConsumerPixVisibilitySelect.react",
	"WAWebConsumerPixVisibilityUtils",
	"WAWebEditPixKeyModalHeader.react",
	"WAWebFbtCommon",
	"WAWebMobilePlatforms",
	"WAWebModal.react",
	"WAWebPaymentsGatingUtils",
	"WAWebPaymentsPixJob",
	"WAWebPaymentsTosJob",
	"WAWebPixKeyTypeSelect.react",
	"WAWebPixPaymentRequestFeature",
	"WAWebPixWamLogger",
	"WAWebSelectContactsExceptModal.react",
	"WAWebSetPrivacyForOneCategoryAction",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsGeneral",
	"WAWebUserPrefsPaymentTos",
	"WAWebUserPrefsTypes",
	"WAWebWamEnumPaymentActionTargets",
	"WAWebWamEnumPaymentActionTypes",
	"WDSButton.react",
	"WDSText.react",
	"getErrorSafe",
	"react",
	"useWAWebAsync",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useEffect, f = p.useRef, g = p.useState, h = "br_pay_privacy_policy";
	function y(t) {
		var n, a, i = t.chat, l = i === void 0 ? null : i, d = t.onClose, p = t.onSuccess, y = t.pixData, v = t.previousScreen, S = t.referral, R = y != null, L = !o("WAWebMobilePlatforms").isSMB() && R && o("WAWebPaymentsGatingUtils").consumerPixActionsEnabled(), E = o("WAWebPixPaymentRequestFeature").isPixOnboardingNewContentEnabled(), k = R ? "edit_non_native_p2m_payment_method" : "add_non_native_p2m_payment_method";
		_(function() {
			o("WAWebPixWamLogger").logPixSenderEvent(void 0, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW, v, S, k, l, y != null ? y : null);
		}, [
			l,
			y,
			v,
			S,
			k
		]);
		var I = g((n = y == null ? void 0 : y.key_type) != null ? n : o("WAWebUserPrefsTypes").PixKeyType.PHONE), T = I[0], D = I[1], x = g(null), $ = x[0], P = x[1], N = g(function() {
			return (y == null ? void 0 : y.key) == null ? "" : y.key_type === o("WAWebUserPrefsTypes").PixKeyType.PHONE && y.key.startsWith(o("WAWebBizPaymentsBrazilAddPixModal.react").BRAZIL_PHONE_PREFIX) ? y.key.slice(o("WAWebBizPaymentsBrazilAddPixModal.react").BRAZIL_PHONE_PREFIX.length) : y.key;
		}), M = N[0], w = N[1], A = g((a = y == null ? void 0 : y.display_name) != null ? a : ""), F = A[0], O = A[1], B = g(!1), W = B[0], q = B[1], U = g(!1), V = U[0], H = U[1], G = g(!1), z = G[0], j = G[1], K = f(!1);
		_(function() {
			if (!V) {
				K.current = !1;
				return;
			}
			K.current || (K.current = !0, o("WAWebConsumerPaymentsHomeLogger").logDeletePixPromptView());
		}, [V]);
		var Q = g(!1), X = Q[0], Y = Q[1], J = g(o("WAWebConsumerPixVisibilityUtils").getInitialPixVisibility), Z = J[0], ee = J[1], te = g(o("WAWebConsumerPixVisibilityUtils").getInitialPixVisibility), ne = te[0], re = te[1], oe = f(!1);
		o("useWAWebListener").useListener(o("WAWebUserPrefsGeneral").privacySettingsEventEmitter, "all", function() {
			if (!oe.current) {
				var e = o("WAWebConsumerPixVisibilityUtils").getInitialPixVisibility();
				ee(e), re(e);
			}
		});
		var ae = g(0), ie = ae[0], le = ae[1], se = r("useWAWebAsync")(async function() {
			try {
				var t, n;
				return (t = (n = (await o("WAWebApiPrivacyDisallowedList").queryDisallowedLists()).pix) == null || (n = n.disallowedList) == null ? void 0 : n.length) != null ? t : 0;
			} catch (t) {
				throw o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to read pix excluded count"]))).catching(r("getErrorSafe")(t)).sendLogs("pix-excluded-count-read-fail"), t;
			}
		}, [Z, ie], !o("WAWebMobilePlatforms").isSMB() && Z === "contact_blacklist"), ue = function(t) {
			t !== Z && (oe.current = !0), ee(t), t === "contact_blacklist" && re("contact_blacklist");
		}, ce = function(t) {
			w(t), P(o("WAWebAddEditPixKeyInput.react").getPixKeyInputError(t, T));
		}, de = function(t) {
			T !== t && (D(t), w(""), P(null));
		}, me = function() {
			o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}, pe = function() {
			o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}, _e = async function() {
			if (o("WAWebMobilePlatforms").isSMB() || Z === ne) return !0;
			try {
				e: {
					if (Z === "all") {
						await o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
							name: "pix",
							value: "all"
						});
						break e;
					}
					if (Z === "contacts") {
						await o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
							name: "pix",
							value: "contacts"
						});
						break e;
					}
					if (Z === "none") {
						await o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
							name: "pix",
							value: "none"
						});
						break e;
					}
					if (Z === "contact_blacklist") break e;
					throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + Z);
				}
				return re(Z), !0;
			} catch (n) {
				var e = n instanceof o("WAWebBackendErrors").ServerStatusCodeError && n.statusCode === 409;
				if (!e) {
					var t = r("getErrorSafe")(n);
					o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["consumer_pix_visibility: set visibility failed ", ""])), t.stack).sendLogs("consumer-pix-visibility-set-failed");
				}
				return o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebConsumerPixStrings").getConsumerPixVisibilityUpdateError() })), !1;
			}
		}, fe = async function() {
			o("WAWebMobilePlatforms").isSMB() || o("WAWebConsumerPaymentsHomeLogger").logSavePixClick(R, String(T));
			var e = C({
				pixData: y,
				pixDisplayName: F,
				pixKey: M,
				pixKeyType: T
			});
			try {
				var t, n;
				if (q(!0), !await _e()) return;
				if (!e) {
					pe(), p();
					return;
				}
				var r = (t = (n = o("WAWebUserPrefsPaymentTos").getPaymentTos()) == null ? void 0 : n.accepted) != null ? t : !1;
				if (!r && o("WAWebMobilePlatforms").isSMB()) {
					var a, i;
					await o("WAWebPaymentsTosJob").acceptBRPayTos(h), r = (a = (i = o("WAWebUserPrefsPaymentTos").getPaymentTos()) == null ? void 0 : i.accepted) != null ? a : !1;
				}
				if (r || !o("WAWebMobilePlatforms").isSMB()) {
					var s = await o("WAWebPaymentsPixJob").addOrUpdatePix({
						customPaymentMethodUpdate: R ? "true" : "false",
						pixDisplayName: F,
						pixKey: T === o("WAWebUserPrefsTypes").PixKeyType.PHONE ? o("WAWebBizPaymentsBrazilAddPixModal.react").BRAZIL_PHONE_PREFIX + M : M,
						pixKeyType: T
					});
					if (s.name === "CreateCustomPaymentMethodResponseSuccess") {
						pe(), p();
						return;
					}
				}
				me();
			} catch (e) {
				me();
			} finally {
				o("WAWebPixWamLogger").logPixSenderEvent(R ? o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.EDIT_BUTTON : o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.CONFIRM_BUTTON, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK, v, S, k, l, {
					country: "",
					credentialId: "",
					display_name: "",
					key: "",
					key_type: T,
					time_added: 0,
					time_last_used: null
				}), q(!1);
			}
		}, ge = function() {
			o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebConsumerPixStrings").getConsumerPixDeleteKeyDeletedToast() }));
		}, he = function() {
			o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebConsumerPixStrings").getConsumerPixDeleteKeyErrorToast() }));
		}, ye = async function() {
			o("WAWebConsumerPaymentsHomeLogger").logDeletePixConfirmClick();
			var e = y == null ? void 0 : y.credentialId;
			if (e == null) {
				o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["consumer_pix_delete: confirmed delete with no credential id"]))).sendLogs("consumer-pix-delete-missing-credential-id"), H(!1), he();
				return;
			}
			j(!0);
			var t;
			try {
				t = await o("WAWebPaymentsPixJob").removePix(e);
			} catch (e) {
				j(!1), he();
				return;
			}
			if (j(!1), t.name === "RemoveCustomPaymentMethodResponseSuccess") {
				ge(), d();
				return;
			}
			he();
		};
		return V ? m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "pix-delete-confirm"
			},
			type: o("WAWebModal.react").ModalTheme.PaymentsConfirmDialog,
			title: o("WAWebConsumerPixStrings").getConsumerPixDeleteKeyConfirmTitle(),
			okText: o("WAWebConsumerPixStrings").getConsumerPixDeleteKeyConfirmCta(),
			okButtonType: "warning",
			okSpinner: z,
			cancelText: r("WAWebFbtCommon")("Cancel"),
			cancelDisabled: z,
			onOK: ye,
			onCancel: function() {
				return H(!1);
			},
			testid: "consumer-payments-home-delete-pix-key-confirm",
			children: m.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: o("WAWebConsumerPixStrings").getConsumerPixDeleteKeyConfirmBody()
			})
		}) : X ? m.jsx(r("WAWebSelectContactsExceptModal.react"), {
			category: "pix",
			onBack: function() {
				return Y(!1);
			},
			onConfirm: function() {
				ue("contact_blacklist"), Y(!1), le(function(e) {
					return e + 1;
				});
			}
		}) : m.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "pix-add-refreshed"
			},
			title: m.jsx(r("WAWebEditPixKeyModalHeader.react"), {
				onClose: d,
				isUpdate: R
			}),
			okText: s._(
				/*BTDS*/
				""
			),
			cancelText: r("WAWebFbtCommon")("Cancel"),
			type: o("WAWebModal.react").ModalTheme.PaymentsFlow,
			okSpinner: W,
			onCancel: d,
			onOK: fe,
			okButtonType: "primary",
			okDisabled: W || b({
				hasVisibilityChanged: Z !== ne,
				pixData: y,
				pixDisplayName: F,
				pixKey: M,
				pixKeyType: T
			}),
			cancelDisabled: W,
			splitLayout: L,
			extraButtonNode: L ? m.jsx(r("WDSButton.react"), {
				testid: "consumer-payments-home-delete-pix-key-button",
				label: o("WAWebConsumerPixStrings").getConsumerPixDeleteKeyButton(),
				onPress: function() {
					o("WAWebConsumerPaymentsHomeLogger").logDeletePixClick(), H(!0);
				},
				variant: "borderless",
				type: "destructive",
				size: "medium",
				widthMode: "fit"
			}) : void 0,
			children: [
				o("WAWebMobilePlatforms").isSMB() ? m.jsxs(m.Fragment, { children: [
					!R && !E && m.jsx(r("WAWebAddEditPixKeyModalTitle.react"), {}),
					!R && E && m.jsx(r("WAWebAddEditPixKeyModalTitleStreamlineVariant.react"), {}),
					m.jsx(r("WAWebAddEditPixKeyModalSubtitle.react"), {})
				] }) : m.jsx(r("WAWebConsumerAddPixKeyModalHeader.react"), { isUpdate: R }),
				m.jsx(r("WAWebPixKeyTypeSelect.react"), {
					pixKeyType: T,
					onSelectChange: de
				}),
				m.jsx(o("WAWebAddEditPixKeyInput.react").WAWebAddEditPixKeyInput, {
					onValueChange: ce,
					pixKey: M,
					pixKeyType: T,
					error: $,
					previousScreenName: v,
					referral: S,
					screen: k
				}),
				m.jsx(r("WAWebAddEditPixDisplayNameInput.react"), {
					onValueChange: O,
					pixDisplayName: F
				}),
				!o("WAWebMobilePlatforms").isSMB() && m.jsx(r("WAWebConsumerPixVisibilitySelect.react"), {
					onOpenExcludePicker: function() {
						return Y(!0);
					},
					onVisibilityChange: ue,
					visibility: Z
				}),
				!o("WAWebMobilePlatforms").isSMB() && Z === "contact_blacklist" && se.value != null && m.jsx("div", {
					className: "x7wgvq7 xsag5q8 xf7dkkf",
					"data-testid": "pix-excluded-count",
					children: m.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDeemphasized",
						children: o("WAWebConsumerPixStrings").getConsumerPixContactsExcludedCount(se.value)
					})
				}),
				o("WAWebMobilePlatforms").isSMB() && m.jsx(r("WAWebAddEditPixKeyModalFooter.react"), {})
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t, n, r, a, i = e.pixData, l = e.pixDisplayName, s = e.pixKey, u = e.pixKeyType;
		if (i == null) return !0;
		var c = (t = i.key) != null ? t : "";
		return i.key_type === o("WAWebUserPrefsTypes").PixKeyType.PHONE && (n = i.key) != null && n.startsWith(o("WAWebBizPaymentsBrazilAddPixModal.react").BRAZIL_PHONE_PREFIX) && (c = i.key.slice(o("WAWebBizPaymentsBrazilAddPixModal.react").BRAZIL_PHONE_PREFIX.length)), s !== c || l !== ((r = i.display_name) != null ? r : "") || u !== ((a = i.key_type) != null ? a : o("WAWebUserPrefsTypes").PixKeyType.PHONE);
	}
	function b(e) {
		var t = e.hasVisibilityChanged, n = e.pixData, r = e.pixDisplayName, a = e.pixKey, i = e.pixKeyType;
		if (!o("WAWebAddEditPixKeyInput.react").validatePixKey(a, i) || !o("WAWebBrazilPixKeyValidationUtils").isPixDisplayNameValid(r)) return !0;
		if (n != null) {
			var l = t || C({
				pixData: n,
				pixDisplayName: r,
				pixKey: a,
				pixKeyType: i
			});
			if (!l) return !0;
		}
		return !1;
	}
	l.default = y;
}), 226);

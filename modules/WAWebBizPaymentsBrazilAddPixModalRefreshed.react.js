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
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react",
	"useWAWebAsync",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useEffect, f = p.useRef, g = p.useState, h = "br_pay_privacy_policy";
	function y(t) {
		var a, i, l = t.chat, d = l === void 0 ? null : l, p = t.onClose, y = t.onSuccess, v = t.pixData, S = t.previousScreen, R = t.referral, L = v != null, E = !o("WAWebMobilePlatforms").isSMB() && L && o("WAWebPaymentsGatingUtils").consumerPixActionsEnabled(), k = o("WAWebPixPaymentRequestFeature").isPixOnboardingNewContentEnabled(), I = L ? "edit_non_native_p2m_payment_method" : "add_non_native_p2m_payment_method";
		_(function() {
			o("WAWebPixWamLogger").logPixSenderEvent(void 0, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW, S, R, I, d, v != null ? v : null);
		}, [
			d,
			v,
			S,
			R,
			I
		]);
		var T = g((a = v == null ? void 0 : v.key_type) != null ? a : o("WAWebUserPrefsTypes").PixKeyType.PHONE), D = T[0], x = T[1], $ = g(null), P = $[0], N = $[1], M = g(function() {
			return (v == null ? void 0 : v.key) == null ? "" : v.key_type === o("WAWebUserPrefsTypes").PixKeyType.PHONE && v.key.startsWith(o("WAWebBizPaymentsBrazilAddPixModal.react").BRAZIL_PHONE_PREFIX) ? v.key.slice(o("WAWebBizPaymentsBrazilAddPixModal.react").BRAZIL_PHONE_PREFIX.length) : v.key;
		}), w = M[0], A = M[1], F = g((i = v == null ? void 0 : v.display_name) != null ? i : ""), O = F[0], B = F[1], W = g(!1), q = W[0], U = W[1], V = g(!1), H = V[0], G = V[1], z = g(!1), j = z[0], K = z[1], Q = f(!1);
		_(function() {
			if (!H) {
				Q.current = !1;
				return;
			}
			Q.current || (Q.current = !0, o("WAWebConsumerPaymentsHomeLogger").logDeletePixPromptView());
		}, [H]);
		var X = g(!1), Y = X[0], J = X[1], Z = g(o("WAWebConsumerPixVisibilityUtils").getInitialPixVisibility), ee = Z[0], te = Z[1], ne = g(o("WAWebConsumerPixVisibilityUtils").getInitialPixVisibility), re = ne[0], oe = ne[1], ae = f(!1);
		o("useWAWebListener").useListener(o("WAWebUserPrefsGeneral").privacySettingsEventEmitter, "all", function() {
			if (!ae.current) {
				var e = o("WAWebConsumerPixVisibilityUtils").getInitialPixVisibility();
				te(e), oe(e);
			}
		});
		var ie = g(0), le = ie[0], se = ie[1], ue = r("useWAWebAsync")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			try {
				var t, n;
				return (t = (n = (yield o("WAWebApiPrivacyDisallowedList").queryDisallowedLists()).pix) == null || (n = n.disallowedList) == null ? void 0 : n.length) != null ? t : 0;
			} catch (t) {
				throw o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to read pix excluded count"]))).catching(r("getErrorSafe")(t)).sendLogs("pix-excluded-count-read-fail"), t;
			}
		}), [ee, le], !o("WAWebMobilePlatforms").isSMB() && ee === "contact_blacklist"), ce = function(t) {
			t !== ee && (ae.current = !0), te(t), t === "contact_blacklist" && oe("contact_blacklist");
		}, de = function(t) {
			A(t), N(o("WAWebAddEditPixKeyInput.react").getPixKeyInputError(t, D));
		}, me = function(t) {
			D !== t && (x(t), A(""), N(null));
		}, pe = function() {
			o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}, _e = function() {
			o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}, fe = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (o("WAWebMobilePlatforms").isSMB() || ee === re) return !0;
				try {
					e: {
						if (ee === "all") {
							yield o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
								name: "pix",
								value: "all"
							});
							break e;
						}
						if (ee === "contacts") {
							yield o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
								name: "pix",
								value: "contacts"
							});
							break e;
						}
						if (ee === "none") {
							yield o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
								name: "pix",
								value: "none"
							});
							break e;
						}
						if (ee === "contact_blacklist") break e;
						throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + ee);
					}
					return oe(ee), !0;
				} catch (n) {
					var e = n instanceof o("WAWebBackendErrors").ServerStatusCodeError && n.statusCode === 409;
					if (!e) {
						var t = r("getErrorSafe")(n);
						o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["consumer_pix_visibility: set visibility failed ", ""])), t.stack).sendLogs("consumer-pix-visibility-set-failed");
					}
					return o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebConsumerPixStrings").getConsumerPixVisibilityUpdateError() })), !1;
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), ge = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				o("WAWebMobilePlatforms").isSMB() || o("WAWebConsumerPaymentsHomeLogger").logSavePixClick(L, String(D));
				var e = C({
					pixData: v,
					pixDisplayName: O,
					pixKey: w,
					pixKeyType: D
				});
				try {
					var t, n;
					if (U(!0), !(yield fe())) return;
					if (!e) {
						_e(), y();
						return;
					}
					var r = (t = (n = o("WAWebUserPrefsPaymentTos").getPaymentTos()) == null ? void 0 : n.accepted) != null ? t : !1;
					if (!r && o("WAWebMobilePlatforms").isSMB()) {
						var a, i;
						yield o("WAWebPaymentsTosJob").acceptBRPayTos(h), r = (a = (i = o("WAWebUserPrefsPaymentTos").getPaymentTos()) == null ? void 0 : i.accepted) != null ? a : !1;
					}
					if (r || !o("WAWebMobilePlatforms").isSMB()) {
						var l = yield o("WAWebPaymentsPixJob").addOrUpdatePix({
							customPaymentMethodUpdate: L ? "true" : "false",
							pixDisplayName: O,
							pixKey: D === o("WAWebUserPrefsTypes").PixKeyType.PHONE ? o("WAWebBizPaymentsBrazilAddPixModal.react").BRAZIL_PHONE_PREFIX + w : w,
							pixKeyType: D
						});
						if (l.name === "CreateCustomPaymentMethodResponseSuccess") {
							_e(), y();
							return;
						}
					}
					pe();
				} catch (e) {
					pe();
				} finally {
					o("WAWebPixWamLogger").logPixSenderEvent(L ? o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.EDIT_BUTTON : o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.CONFIRM_BUTTON, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK, S, R, I, d, {
						country: "",
						credentialId: "",
						display_name: "",
						key: "",
						key_type: D,
						time_added: 0,
						time_last_used: null
					}), U(!1);
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), he = function() {
			o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebConsumerPixStrings").getConsumerPixDeleteKeyDeletedToast() }));
		}, ye = function() {
			o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebConsumerPixStrings").getConsumerPixDeleteKeyErrorToast() }));
		}, Ce = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				o("WAWebConsumerPaymentsHomeLogger").logDeletePixConfirmClick();
				var e = v == null ? void 0 : v.credentialId;
				if (e == null) {
					o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["consumer_pix_delete: confirmed delete with no credential id"]))).sendLogs("consumer-pix-delete-missing-credential-id"), G(!1), ye();
					return;
				}
				K(!0);
				var t;
				try {
					t = yield o("WAWebPaymentsPixJob").removePix(e);
				} catch (e) {
					K(!1), ye();
					return;
				}
				if (K(!1), t.name === "RemoveCustomPaymentMethodResponseSuccess") {
					he(), p();
					return;
				}
				ye();
			});
			return function() {
				return e.apply(this, arguments);
			};
		})();
		return H ? m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "pix-delete-confirm"
			},
			type: o("WAWebModal.react").ModalTheme.PaymentsConfirmDialog,
			title: o("WAWebConsumerPixStrings").getConsumerPixDeleteKeyConfirmTitle(),
			okText: o("WAWebConsumerPixStrings").getConsumerPixDeleteKeyConfirmCta(),
			okButtonType: "warning",
			okSpinner: j,
			cancelText: r("WAWebFbtCommon")("Cancel"),
			cancelDisabled: j,
			onOK: Ce,
			onCancel: function() {
				return G(!1);
			},
			testid: "consumer-payments-home-delete-pix-key-confirm",
			children: m.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: o("WAWebConsumerPixStrings").getConsumerPixDeleteKeyConfirmBody()
			})
		}) : Y ? m.jsx(r("WAWebSelectContactsExceptModal.react"), {
			category: "pix",
			onBack: function() {
				return J(!1);
			},
			onConfirm: function() {
				ce("contact_blacklist"), J(!1), se(function(e) {
					return e + 1;
				});
			}
		}) : m.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "pix-add-refreshed"
			},
			title: m.jsx(r("WAWebEditPixKeyModalHeader.react"), {
				onClose: p,
				isUpdate: L
			}),
			okText: s._(
				/*BTDS*/
				""
			),
			cancelText: r("WAWebFbtCommon")("Cancel"),
			type: o("WAWebModal.react").ModalTheme.PaymentsFlow,
			okSpinner: q,
			onCancel: p,
			onOK: ge,
			okButtonType: "primary",
			okDisabled: q || b({
				hasVisibilityChanged: ee !== re,
				pixData: v,
				pixDisplayName: O,
				pixKey: w,
				pixKeyType: D
			}),
			cancelDisabled: q,
			splitLayout: E,
			extraButtonNode: E ? m.jsx(r("WDSButton.react"), {
				testid: "consumer-payments-home-delete-pix-key-button",
				label: o("WAWebConsumerPixStrings").getConsumerPixDeleteKeyButton(),
				onPress: function() {
					o("WAWebConsumerPaymentsHomeLogger").logDeletePixClick(), G(!0);
				},
				variant: "borderless",
				type: "destructive",
				size: "medium",
				widthMode: "fit"
			}) : void 0,
			children: [
				o("WAWebMobilePlatforms").isSMB() ? m.jsxs(m.Fragment, { children: [
					!L && !k && m.jsx(r("WAWebAddEditPixKeyModalTitle.react"), {}),
					!L && k && m.jsx(r("WAWebAddEditPixKeyModalTitleStreamlineVariant.react"), {}),
					m.jsx(r("WAWebAddEditPixKeyModalSubtitle.react"), {})
				] }) : m.jsx(r("WAWebConsumerAddPixKeyModalHeader.react"), { isUpdate: L }),
				m.jsx(r("WAWebPixKeyTypeSelect.react"), {
					pixKeyType: D,
					onSelectChange: me
				}),
				m.jsx(o("WAWebAddEditPixKeyInput.react").WAWebAddEditPixKeyInput, {
					onValueChange: de,
					pixKey: w,
					pixKeyType: D,
					error: P,
					previousScreenName: S,
					referral: R,
					screen: I
				}),
				m.jsx(r("WAWebAddEditPixDisplayNameInput.react"), {
					onValueChange: B,
					pixDisplayName: O
				}),
				!o("WAWebMobilePlatforms").isSMB() && m.jsx(r("WAWebConsumerPixVisibilitySelect.react"), {
					onOpenExcludePicker: function() {
						return J(!0);
					},
					onVisibilityChange: ce,
					visibility: ee
				}),
				!o("WAWebMobilePlatforms").isSMB() && ee === "contact_blacklist" && ue.value != null && m.jsx("div", {
					className: "x7wgvq7 xsag5q8 xf7dkkf",
					"data-testid": "pix-excluded-count",
					children: m.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDeemphasized",
						children: o("WAWebConsumerPixStrings").getConsumerPixContactsExcludedCount(ue.value)
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

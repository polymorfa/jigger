__d("WAWebBizPaymentsBrazilAddPixModal.react", [
	"fbt",
	"WALogger",
	"WAWebBrazilPixKeyValidationUtils",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebMenuItems.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebPaymentsPixJob",
	"WAWebPaymentsTosJob",
	"WAWebPixWamLogger",
	"WAWebRichTextField.react",
	"WAWebSelect.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsCustomPaymentMethods",
	"WAWebUserPrefsPaymentTos",
	"WAWebUserPrefsTypes",
	"WAWebWamEnumPaymentActionTargets",
	"WAWebWamEnumPaymentActionTypes",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useMemo, _ = d.useState, f = "+55";
	function g(e) {
		var t, n;
		return e == null ? "" : e.key_type === o("WAWebUserPrefsTypes").PixKeyType.PHONE && (t = e.key) != null && t.startsWith(f) ? e.key.substring(3) : (n = e.key) != null ? n : "";
	}
	function h(e) {
		switch (e) {
			case o("WAWebUserPrefsTypes").PixKeyType.PHONE: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebUserPrefsTypes").PixKeyType.EMAIL: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebUserPrefsTypes").PixKeyType.CPF: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebUserPrefsTypes").PixKeyType.EVP: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebUserPrefsTypes").PixKeyType.CNPJ: return s._(
				/*BTDS*/
				""
			);
		}
	}
	function y(t) {
		var n, a, i, l, u, d, y = t.chat, C = y === void 0 ? null : y, b = t.onCancel, v = t.onOK, S = t.previousScreen, R = t.referral, L = o("WAWebUserPrefsCustomPaymentMethods").getPIX() != null, E = L ? "edit_non_native_p2m_payment_method" : "add_non_native_p2m_payment_method", k = o("WAWebUserPrefsCustomPaymentMethods").isPIXValid() ? o("WAWebUserPrefsCustomPaymentMethods").getPIX() : null;
		m(function() {
			o("WAWebPixWamLogger").logPixSenderEvent(void 0, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW, S, R, E, C, k);
		}, [
			C,
			k,
			S,
			R,
			E
		]);
		var I = 25, T = "br_pay_privacy_policy", D = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: "https://faq.whatsapp.com/1201270817206354",
			testid: "learn-more-link",
			children: s._(
				/*BTDS*/
				""
			)
		}), x = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: "https://fburl.com/5ugqajuy",
			testid: "meta-tos-link",
			children: s._(
				/*BTDS*/
				""
			)
		}), $ = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: "https://fburl.com/mo0hnzrw",
			testid: "wa-tos-link",
			children: s._(
				/*BTDS*/
				""
			)
		}), P = s._(
			/*BTDS*/
			"",
			[
				s._param("meta-tos-link", x),
				s._param("wa-tos-link", $),
				s._param("learn-more-link", D)
			]
		), N = s._(
			/*BTDS*/
			"",
			[s._param("learn-more-link", D)]
		), M = (n = (a = o("WAWebUserPrefsPaymentTos").getPaymentTos()) == null ? void 0 : a.accepted) != null ? n : !1, w = k == null ? void 0 : k.key_type, A = _(w != null ? w : o("WAWebUserPrefsTypes").PixKeyType.PHONE), F = A[0], O = A[1], B = _((i = k == null ? void 0 : k.display_name) != null ? i : ""), W = B[0], q = B[1], U = _(function() {
			return g(k);
		}), V = U[0], H = U[1], G = _(!1), z = G[0], j = G[1], K = _(null), Q = K[0], X = K[1], Y = _(null), J = Y[0], Z = Y[1], ee = p(function() {
			return g(k);
		}, [k]), te = !L || V !== ee || W !== ((l = k == null ? void 0 : k.display_name) != null ? l : "") || F !== ((u = k == null ? void 0 : k.key_type) != null ? u : o("WAWebUserPrefsTypes").PixKeyType.PHONE), ne = function() {
			var e = W.trim() !== "", t = Q == null && J == null;
			return e && t;
		};
		function re(e) {
			var t = ae(e);
			q(e), X(t);
		}
		function oe(e) {
			var t = "";
			F === o("WAWebUserPrefsTypes").PixKeyType.PHONE && !e.text.startsWith(f) ? t = f + e.text : t = e.text;
			var n = o("WAWebBrazilPixKeyValidationUtils").validatePixKey(F, t) && t !== "";
			H(e.text);
			var r = null;
			n || (r = s._(
				/*BTDS*/
				""
			)), Z(r);
		}
		var ae = function(t) {
			return t.trim() === "" ? " " : null;
		}, ie = function(t) {
			var e, n = (e = o("WAWebUserPrefsTypes").PixKeyType.cast(t)) != null ? e : o("WAWebUserPrefsTypes").PixKeyType.PHONE;
			H(""), O(n), o("WAWebBrazilPixKeyValidationUtils").validatePixKey(n, V);
		}, le = async function() {
			j(!0);
			var t = !!k;
			try {
				M || await o("WAWebPaymentsTosJob").acceptBRPayTos(T);
				var n = F === o("WAWebUserPrefsTypes").PixKeyType.PHONE;
				await o("WAWebPaymentsPixJob").addOrUpdatePix({
					customPaymentMethodUpdate: t ? "true" : "false",
					pixDisplayName: W,
					pixKey: n ? "" + f + V : V,
					pixKeyType: F
				});
				var r = s._(
					/*BTDS*/
					""
				), a = s._(
					/*BTDS*/
					""
				);
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					"",
					[s._param("action", t ? r : a)]
				) }));
			} catch (t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Error updating Pix Key"])));
			} finally {
				j(!1), o("WAWebPixWamLogger").logPixSenderEvent(t ? o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.EDIT_BUTTON : o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.ADD_BUTTON, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK, S, R, E, C, {
					country: "",
					credentialId: "",
					display_name: "",
					key: "",
					key_type: F,
					time_added: 0,
					time_last_used: null
				}), v ? v() : o("WAWebModalManager").ModalManager.close();
			}
		};
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "pix-add"
			},
			title: c.jsx("div", { children: s._(
				/*BTDS*/
				"",
				[s._param("add or edit", k ? "Edit" : r("WAWebFbtCommon")("Add"))]
			) }),
			okText: L ? s._(
				/*BTDS*/
				""
			) : r("WAWebFbtCommon")("Add"),
			cancelText: s._(
				/*BTDS*/
				""
			),
			okSpinner: z,
			onCancel: b != null ? b : o("WAWebModalManager").closeModalManager,
			onOK: le,
			okButtonType: "primary",
			type: o("WAWebModal.react").ModalTheme.AddOrUpdatePix,
			okDisabled: z || !te || !ne(),
			children: c.jsxs("div", {
				className: "x1ty9z65 x193iq5w xh8yej3",
				children: [
					s._(
						/*BTDS*/
						""
					),
					c.jsx("br", {}),
					c.jsx("br", {}),
					c.jsxs("div", { children: [c.jsx("label", {
						className: "xhslqc4 x1ibc7va x135pmgq",
						htmlFor: "pixKeyTypeSelect",
						children: s._(
							/*BTDS*/
							""
						)
					}), c.jsx("div", {
						className: "x1anpbxc",
						children: c.jsx(o("WAWebSelect.react").Select, {
							testid: "pix-key-type-input",
							ariaRoleDescription: "Pix Key Type Selection",
							initialSelection: o("WAWebUserPrefsCustomPaymentMethods").isPIXValid() && w != null ? String((d = o("WAWebUserPrefsCustomPaymentMethods").getPIX()) == null ? void 0 : d.key_type) : String(o("WAWebUserPrefsTypes").PixKeyType.PHONE),
							onChange: ie,
							width: 150,
							children: Array.from(o("WAWebUserPrefsTypes").PixKeyType.members(), function(e) {
								return c.jsx(o("WAWebMenuItems.react").SelectMenuItem, {
									optionId: String(e),
									primary: h(e)
								}, String(e));
							})
						})
					})] }),
					c.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "stretch",
						className: "xdqhqc9",
						children: [F === o("WAWebUserPrefsTypes").PixKeyType.PHONE && c.jsx("div", {
							className: "x6s0dn4 xhslqc4 x78zum5 x1c3i2sq xqf2s3x x1k70j0n",
							children: f
						}), c.jsx("div", {
							className: "x98rzlu xeuugli",
							children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
								testid: "pix-key-input",
								value: V,
								placeholder: s._(
									/*BTDS*/
									""
								),
								managed: !0,
								error: J,
								onChange: oe
							})
						})]
					}),
					c.jsx(o("WAWebFlex.react").FlexColumn, {
						align: "stretch",
						className: "xdqhqc9",
						children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
							testid: "display-name-input",
							value: W,
							placeholder: s._(
								/*BTDS*/
								""
							),
							error: Q,
							maxLength: I,
							showRemaining: !0,
							focusOnMount: !1,
							onChange: function(t) {
								var e = t.text;
								re(e);
							}
						})
					}),
					c.jsx("div", {
						className: "xhslqc4 x1ibc7va x135pmgq",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					c.jsx("br", {}),
					c.jsx("div", {
						className: "xhslqc4 x1ibc7va x135pmgq",
						children: c.jsx("h2", { children: M ? N : P })
					})
				]
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.BRAZIL_PHONE_PREFIX = f, l.getPixKeyType = h, l.WAWebBizPaymentsBrazilAddPixModal = y;
}), 226);

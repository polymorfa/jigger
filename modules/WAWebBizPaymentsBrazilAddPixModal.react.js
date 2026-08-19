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
	"asyncToGeneratorRuntime",
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
		var a, i, l, u, d, y, C = t.chat, b = C === void 0 ? null : C, v = t.onCancel, S = t.onOK, R = t.previousScreen, L = t.referral, E = o("WAWebUserPrefsCustomPaymentMethods").getPIX() != null, k = E ? "edit_non_native_p2m_payment_method" : "add_non_native_p2m_payment_method", I = o("WAWebUserPrefsCustomPaymentMethods").isPIXValid() ? o("WAWebUserPrefsCustomPaymentMethods").getPIX() : null;
		m(function() {
			o("WAWebPixWamLogger").logPixSenderEvent(void 0, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW, R, L, k, b, I);
		}, [
			b,
			I,
			R,
			L,
			k
		]);
		var T = 25, D = "br_pay_privacy_policy", x = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: "https://faq.whatsapp.com/1201270817206354",
			testid: "learn-more-link",
			children: s._(
				/*BTDS*/
				""
			)
		}), $ = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: "https://fburl.com/5ugqajuy",
			testid: "meta-tos-link",
			children: s._(
				/*BTDS*/
				""
			)
		}), P = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: "https://fburl.com/mo0hnzrw",
			testid: "wa-tos-link",
			children: s._(
				/*BTDS*/
				""
			)
		}), N = s._(
			/*BTDS*/
			"",
			[
				s._param("meta-tos-link", $),
				s._param("wa-tos-link", P),
				s._param("learn-more-link", x)
			]
		), M = s._(
			/*BTDS*/
			"",
			[s._param("learn-more-link", x)]
		), w = (a = (i = o("WAWebUserPrefsPaymentTos").getPaymentTos()) == null ? void 0 : i.accepted) != null ? a : !1, A = I == null ? void 0 : I.key_type, F = _(A != null ? A : o("WAWebUserPrefsTypes").PixKeyType.PHONE), O = F[0], B = F[1], W = _((l = I == null ? void 0 : I.display_name) != null ? l : ""), q = W[0], U = W[1], V = _(function() {
			return g(I);
		}), H = V[0], G = V[1], z = _(!1), j = z[0], K = z[1], Q = _(null), X = Q[0], Y = Q[1], J = _(null), Z = J[0], ee = J[1], te = p(function() {
			return g(I);
		}, [I]), ne = !E || H !== te || q !== ((u = I == null ? void 0 : I.display_name) != null ? u : "") || O !== ((d = I == null ? void 0 : I.key_type) != null ? d : o("WAWebUserPrefsTypes").PixKeyType.PHONE), re = function() {
			var e = q.trim() !== "", t = X == null && Z == null;
			return e && t;
		};
		function oe(e) {
			var t = ie(e);
			U(e), Y(t);
		}
		function ae(e) {
			var t = "";
			O === o("WAWebUserPrefsTypes").PixKeyType.PHONE && !e.text.startsWith(f) ? t = f + e.text : t = e.text;
			var n = o("WAWebBrazilPixKeyValidationUtils").validatePixKey(O, t) && t !== "";
			G(e.text);
			var r = null;
			n || (r = s._(
				/*BTDS*/
				""
			)), ee(r);
		}
		var ie = function(t) {
			return t.trim() === "" ? " " : null;
		}, le = function(t) {
			var e, n = (e = o("WAWebUserPrefsTypes").PixKeyType.cast(t)) != null ? e : o("WAWebUserPrefsTypes").PixKeyType.PHONE;
			G(""), B(n), o("WAWebBrazilPixKeyValidationUtils").validatePixKey(n, H);
		}, se = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				K(!0);
				var t = !!I;
				try {
					w || (yield o("WAWebPaymentsTosJob").acceptBRPayTos(D));
					var n = O === o("WAWebUserPrefsTypes").PixKeyType.PHONE;
					yield o("WAWebPaymentsPixJob").addOrUpdatePix({
						customPaymentMethodUpdate: t ? "true" : "false",
						pixDisplayName: q,
						pixKey: n ? "" + f + H : H,
						pixKeyType: O
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
					K(!1), o("WAWebPixWamLogger").logPixSenderEvent(t ? o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.EDIT_BUTTON : o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.ADD_BUTTON, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK, R, L, k, b, {
						country: "",
						credentialId: "",
						display_name: "",
						key: "",
						key_type: O,
						time_added: 0,
						time_last_used: null
					}), S ? S() : o("WAWebModalManager").ModalManager.close();
				}
			});
			return function() {
				return t.apply(this, arguments);
			};
		})();
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "pix-add"
			},
			title: c.jsx("div", { children: s._(
				/*BTDS*/
				"",
				[s._param("add or edit", I ? "Edit" : r("WAWebFbtCommon")("Add"))]
			) }),
			okText: E ? s._(
				/*BTDS*/
				""
			) : r("WAWebFbtCommon")("Add"),
			cancelText: s._(
				/*BTDS*/
				""
			),
			okSpinner: j,
			onCancel: v != null ? v : o("WAWebModalManager").closeModalManager,
			onOK: se,
			okButtonType: "primary",
			type: o("WAWebModal.react").ModalTheme.AddOrUpdatePix,
			okDisabled: j || !ne || !re(),
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
							initialSelection: o("WAWebUserPrefsCustomPaymentMethods").isPIXValid() && A != null ? String((y = o("WAWebUserPrefsCustomPaymentMethods").getPIX()) == null ? void 0 : y.key_type) : String(o("WAWebUserPrefsTypes").PixKeyType.PHONE),
							onChange: le,
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
						children: [O === o("WAWebUserPrefsTypes").PixKeyType.PHONE && c.jsx("div", {
							className: "x6s0dn4 xhslqc4 x78zum5 x1c3i2sq xqf2s3x x1k70j0n",
							children: f
						}), c.jsx("div", {
							className: "x98rzlu xeuugli",
							children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
								testid: "pix-key-input",
								value: H,
								placeholder: s._(
									/*BTDS*/
									""
								),
								managed: !0,
								error: Z,
								onChange: ae
							})
						})]
					}),
					c.jsx(o("WAWebFlex.react").FlexColumn, {
						align: "stretch",
						className: "xdqhqc9",
						children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
							testid: "display-name-input",
							value: q,
							placeholder: s._(
								/*BTDS*/
								""
							),
							error: X,
							maxLength: T,
							showRemaining: !0,
							focusOnMount: !1,
							onChange: function(t) {
								var e = t.text;
								oe(e);
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
						children: c.jsx("h2", { children: w ? M : N })
					})
				]
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.BRAZIL_PHONE_PREFIX = f, l.getPixKeyType = h, l.WAWebBizPaymentsBrazilAddPixModal = y;
}), 226);

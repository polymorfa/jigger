__d("WAWebBizAdCreationEmailCollectionDialog.react", [
	"fbt",
	"FBLogger",
	"Promise",
	"WAWebBizAdLogger",
	"WAWebCTWABizAccessTokenNonceManager",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WDSButton.react",
	"WDSText.react",
	"WDSTextField.react",
	"getErrorSafe",
	"react",
	"useWAWebBizAdCreationSendEmailVerificationCode"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = d.useState, f = {
		bodyText: {
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		buttonContainer: {
			columnGap: "x1aj3ljl",
			justifyContent: "x7v6yn8",
			marginTop: "xr1yuqi",
			paddingTop: "x1h678fw",
			paddingBottom: "xv6tirj",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		container: {
			alignItems: "x1qjc9v5",
			rowGap: "x1f0uite",
			$$css: !0
		},
		input: {
			alignItems: "x1qjc9v5",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		title: {
			paddingTop: "x1h678fw",
			paddingBottom: "xv6tirj",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	}, g = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	function h(e) {
		return g.test(e);
	}
	function y(e) {
		return e === "EMAIL_ALREADY_EXISTS" ? s._(
			/*BTDS*/
			""
		) : e === "INVALID_EMAIL" ? s._(
			/*BTDS*/
			""
		) : e === "TOO_MANY_ATTEMPTS" ? s._(
			/*BTDS*/
			""
		) : e === "EMAIL_NONCE_MISMATCH" || e === "INVALID_OR_EXPIRED_NONCE" || e === "INVALID_USER" || e === "GENERIC_ERROR" ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function C(t) {
		var a, i = t.adAccountID, l = t.loggerContext, u = t.onCancelClick, d = t.onSuccess, g = _(""), C = g[0], b = g[1], v = _(!1), S = v[0], R = v[1], L = _(null), E = L[0], k = L[1], I = p(!1), T = r("useWAWebBizAdCreationSendEmailVerificationCode")(), D = T[0], x = T[1];
		m(function() {
			l != null && !I.current && (I.current = !0, r("WAWebBizAdLogger").log({
				adAccountID: i,
				event: "email_verification_modal_impression",
				loggerContext: l
			}));
		}, [i, l]);
		var $ = function() {
			l != null && r("WAWebBizAdLogger").log({
				adAccountID: i,
				event: "email_verification_cancel_click",
				loggerContext: l
			}), u();
		}, P = function(t) {
			b(t), k(null);
		}, N = function() {
			var t = C.trim();
			if (!h(t)) {
				k(s._(
					/*BTDS*/
					""
				));
				return;
			}
			l != null && r("WAWebBizAdLogger").log({
				adAccountID: i,
				event: "email_verification_continue_click",
				loggerContext: l
			}), R(!0), k(null);
			var a = o("WAWebCTWABizAccessTokenNonceManager").awaitPushNonce();
			(e || (e = n("Promise"))).all([D(t), a]).then(function(e) {
				var n = e[0], r = e[1];
				if (!n.success) {
					R(!1), k(y(n.error));
					return;
				}
				if (r.type !== "success") {
					R(!1), k(s._(
						/*BTDS*/
						""
					));
					return;
				}
				d(t, r.nonce);
			}).catch(function(e) {
				r("FBLogger")("wa_ctwa_web").catching(r("getErrorSafe")(e)).mustfix("Email collection send verification code failed"), R(!1), k(s._(
					/*BTDS*/
					""
				));
			});
		}, M = C.trim().length === 0;
		return c.jsx(o("WAWebModal.react").Modal, {
			onOverlayClick: u,
			type: o("WAWebModal.react").ModalTheme.BizToolsAdCreationEmailOnboarding,
			children: c.jsxs((a = o("WAWebFlex.react")).FlexColumn, {
				xstyle: f.container,
				children: [
					c.jsx(a.FlexItem, {
						xstyle: f.title,
						children: c.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							type: "Body1",
							children: s._(
								/*BTDS*/
								""
							)
						})
					}),
					c.jsx(a.FlexItem, {
						xstyle: f.bodyText,
						children: c.jsx(r("WDSText.react"), {
							colorName: "contentDeemphasized",
							type: "Body2",
							children: s._(
								/*BTDS*/
								""
							)
						})
					}),
					c.jsx(a.FlexColumn, {
						xstyle: f.input,
						children: c.jsx(r("WDSTextField.react"), {
							error: E != null,
							errorText: E,
							label: s._(
								/*BTDS*/
								""
							),
							onValueChange: P,
							testid: "biz_native_ads_email_collection_email_textfield",
							value: C
						})
					}),
					c.jsxs(a.FlexRow, {
						xstyle: f.buttonContainer,
						children: [c.jsx(r("WDSButton.react"), {
							label: r("WAWebFbtCommon")("Cancel"),
							onPress: $,
							testid: "email-collection-cancel-button",
							variant: "borderless"
						}), c.jsx(r("WDSButton.react"), {
							disabled: M,
							label: s._(
								/*BTDS*/
								""
							),
							loading: S || x,
							onPress: N,
							testid: "email-collection-send-code-button",
							variant: "filled"
						})]
					})
				]
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);

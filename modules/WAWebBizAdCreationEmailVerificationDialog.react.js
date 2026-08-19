__d("WAWebBizAdCreationEmailVerificationDialog.react", [
	"fbt",
	"FBLogger",
	"WAWebBizAdLogger",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebRichTextField.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSButton.react",
	"WDSText.react",
	"getErrorSafe",
	"react",
	"useWAWebThrottledCallback"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = {
		bodyText: {
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		buttonContainer: {
			justifyContent: "x1qughib",
			marginTop: "xr1yuqi",
			paddingTop: "x1h678fw",
			paddingBottom: "xv6tirj",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		buttonContainerRight: {
			columnGap: "x1aj3ljl",
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
	}, f = /^[0-9]{0,6}$/;
	function g(e) {
		return f.test(e);
	}
	function h(e) {
		var t = e.adAccountID, n = e.bodyText, a = e.loggerContext, i = e.onCancel, l = e.onRequestResend, c = e.onSuccess, f = e.titleText, h = e.verifyCode, y = p(""), C = y[0], b = y[1], v = p(!1), S = v[0], R = v[1], L = p(!1), E = L[0], k = L[1], I = p(null), T = I[0], D = I[1], x = m(!1);
		d(function() {
			a != null && !x.current && (x.current = !0, r("WAWebBizAdLogger").log({
				adAccountID: t,
				event: "email_otp_modal_impression",
				loggerContext: a
			}));
		}, [t, a]);
		var $ = function() {
			a != null && r("WAWebBizAdLogger").log({
				adAccountID: t,
				event: "email_otp_cancel_click",
				loggerContext: a
			}), i();
		}, P = function(t) {
			var e = t.text;
			b(e), T != null && e && D(null);
		}, N = function() {
			a != null && r("WAWebBizAdLogger").log({
				adAccountID: t,
				event: "email_otp_continue_click",
				loggerContext: a
			}), R(!0), D(null), h(C).then(function(e) {
				R(!1), e.success ? c() : (D(e.error), b(""));
			}).catch(function(e) {
				r("FBLogger")("wa_ctwa_web").catching(r("getErrorSafe")(e)).mustfix("Email verification code submission failed"), R(!1), D(s._(
					/*BTDS*/
					""
				)), b("");
			});
		}, M = r("useWAWebThrottledCallback")(function() {
			l == null || E || (a != null && r("WAWebBizAdLogger").log({
				adAccountID: t,
				event: "email_otp_resend_code_click",
				loggerContext: a
			}), k(!0), l().then(function(e) {
				e.success ? o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })) : o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: e.error }));
			}).catch(function(e) {
				r("FBLogger")("wa_ctwa_web").catching(r("getErrorSafe")(e)).mustfix("Email verification code resend failed"), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			}).finally(function() {
				k(!1);
			}));
		}, 2e3), w = T == null && !g(C) ? s._(
			/*BTDS*/
			""
		) : null, A = C.length !== 6 || w != null;
		return u.jsx(o("WAWebModal.react").Modal, {
			onOverlayClick: i,
			type: o("WAWebModal.react").ModalTheme.BizToolsAdCreationEmailOnboarding,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: _.container,
				children: [
					u.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: _.title,
						children: u.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							type: "Body1",
							children: f
						})
					}),
					u.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: _.bodyText,
						children: u.jsx(r("WDSText.react"), {
							colorName: "contentDeemphasized",
							type: "Body2",
							children: n
						})
					}),
					u.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: _.input,
						children: u.jsx(o("WAWebRichTextField.react").RichTextField, {
							customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.DigitalCode],
							error: w != null ? w : T,
							inputPlaceholder: s._(
								/*BTDS*/
								""
							),
							managed: !0,
							maxLength: 6,
							onChange: P,
							testid: "email-verification-code-input",
							title: s._(
								/*BTDS*/
								""
							),
							value: C
						})
					}),
					u.jsxs(o("WAWebFlex.react").FlexRow, {
						xstyle: _.buttonContainer,
						children: [l != null ? u.jsx(r("WDSButton.react"), {
							label: s._(
								/*BTDS*/
								""
							),
							loading: E,
							onPress: M,
							testid: "email-verification-resend-button",
							variant: "outline"
						}) : null, u.jsxs(o("WAWebFlex.react").FlexRow, {
							xstyle: _.buttonContainerRight,
							children: [u.jsx(r("WDSButton.react"), {
								label: r("WAWebFbtCommon")("Cancel"),
								onPress: $,
								testid: "email-verification-cancel-button",
								variant: "borderless"
							}), u.jsx(r("WDSButton.react"), {
								disabled: A,
								label: s._(
									/*BTDS*/
									""
								),
								loading: S,
								onPress: N,
								testid: "email-verification-continue-button",
								variant: "filled"
							})]
						})]
					})
				]
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);

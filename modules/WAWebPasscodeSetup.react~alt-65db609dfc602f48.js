__d("WAWebPasscodeSetup.react", [
	"fbt",
	"$InternalEnum",
	"WAPromiseDelays",
	"WAWebAppLockConfirmationDialog.react",
	"WAWebButton.react",
	"WAWebDialogEventLogger",
	"WAWebEligibilityLogging",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFocusTracer",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebPasscodeModalStyles",
	"WAWebPasswordInput.react",
	"WAWebText_DONOTUSE.react",
	"WAWebUserPrefsInfoStore",
	"WAWebWamEnumDialogNameType",
	"WDSButton.react",
	"WDSText.react",
	"react",
	"stylex",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useRef, p = d.useState, _ = {
		marginBottom16: {
			marginBottom: "x1ua1l7f",
			$$css: !0
		},
		marginBottom12: {
			marginBottom: "xcytdqz",
			$$css: !0
		},
		marginBottom8: {
			marginBottom: "xefnzgg",
			$$css: !0
		},
		marginEnd8: {
			marginInlineEnd: "xqf2s3x",
			$$css: !0
		},
		marginEnd4: {
			marginInlineEnd: "x7g7pl8",
			$$css: !0
		}
	}, f = 6, g = 128, h = "^[ -~]{" + f + "," + g + "}$", y = n("$InternalEnum")({
		CANCEL: "cancel",
		ENABLE: "enable"
	});
	function C(e, t) {
		var n = "";
		return e.length < f || e.length > g ? (n = s._(
			/*BTDS*/
			"",
			[s._param("minimum_length", String(f)), s._param("maximum_length", String(g))]
		).toString(), {
			valid: !1,
			errorMessage: n
		}) : e.match(h) == null ? (n = s._(
			/*BTDS*/
			""
		).toString(), {
			valid: !1,
			errorMessage: n
		}) : t !== "" ? b(e, t) : {
			valid: !0,
			errorMessage: n
		};
	}
	function b(e, t) {
		var n = "";
		return e !== t ? (n = s._(
			/*BTDS*/
			""
		).toString(), {
			valid: !1,
			errorMessage: n
		}) : {
			valid: !0,
			errorMessage: n
		};
	}
	function v(t) {
		var n = t.onSubmit, a = p(""), i = a[0], l = a[1], u = p(""), d = u[0], h = u[1], v = p(""), S = v[0], R = v[1], L = p(!1), E = L[0], k = L[1], I = m(!1), T = m(null), D = o("WAWebEligibilityLogging").eligibilityLogger.getValue("wa_web_app_lock_upsell"), x = function(t, n) {
			t === "" && n === "" && R("");
		}, $ = function(t) {
			l(t.currentTarget.value), x(t.currentTarget.value, d);
		}, P = function(t) {
			h(t.currentTarget.value), x(t.currentTarget.value, i);
		}, N = function(t) {
			if (t.currentTarget.value !== "") {
				var e = C(i, d);
				R(e.errorMessage);
			}
		}, M = function(t) {
			if (t.currentTarget.value !== "") {
				var e = b(i, d);
				S === "" && R(e.errorMessage);
			}
		}, w = async function() {
			var e = C(i, d), t = b(i, d);
			if (R(e.errorMessage || t.errorMessage), !(!e.valid || !t.valid)) {
				k(!0);
				var a = await o("WAWebUserPrefsInfoStore").waNoiseInfo.lockNoiseInfo(d);
				await o("WAPromiseDelays").delayMs(400), a && (I.current = !0, r("WAWebDialogEventLogger")({
					dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.APP_LOCK_ENABLE,
					source: y.ENABLE
				}), o("WAWebModalManager").ModalManager.close(), n(), D && o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebAppLockConfirmationDialog.react"), {}))), k(!1);
			}
		};
		o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
			I.current || r("WAWebDialogEventLogger")({
				dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.APP_LOCK_ENABLE,
				source: y.CANCEL
			});
		});
		var A = function(t) {
			t.key === "Enter" && r("WAWebFocusTracer").focus(T.current);
		}, F = function(t) {
			t.key === "Enter" && w();
		}, O = D ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), B = s._(
			/*BTDS*/
			"",
			[s._param("mininum_passcode_length", f), s._param("maximum_passcode_length", g)]
		), W = E !== !0 && i !== "" && d !== "" && S === "";
		return c.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Flex,
			testid: "passcode-setup-modal",
			children: c.jsxs("form", babelHelpers.extends({ method: "dialog" }, (e || (e = r("stylex"))).props([o("WAWebPasscodeModalStyles").container, D && o("WAWebPasscodeModalStyles").containerUpdated]), {
				onSubmit: w,
				children: [
					D ? c.jsx(r("WDSText.react"), {
						type: "Headline1",
						colorName: "contentDefault",
						xstyle: _.marginBottom16,
						children: O
					}) : c.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
						size: "20",
						weight: "medium",
						xstyle: [o("WAWebPasscodeModalStyles").titleText, _.marginBottom12],
						children: O
					}),
					c.jsx(r("WAWebFlexItem.react"), {
						xstyle: D ? _.marginBottom16 : _.marginBottom8,
						children: c.jsx(r("WAWebPasswordInput.react"), {
							value: i,
							onChange: $,
							onBlur: N,
							required: !0,
							placeholder: s._(
								/*BTDS*/
								""
							).toString(),
							focusOnMount: !0,
							testid: "password-input",
							onKeyDown: A,
							appLockUpsellEnabled: D
						})
					}),
					c.jsx(r("WAWebFlexItem.react"), {
						xstyle: D ? _.marginBottom16 : _.marginBottom8,
						children: c.jsx(r("WAWebPasswordInput.react"), {
							ref: T,
							value: d,
							onChange: P,
							onBlur: M,
							title: S,
							required: !0,
							placeholder: s._(
								/*BTDS*/
								""
							).toString(),
							testid: "password-input-confirm",
							onKeyDown: F,
							appLockUpsellEnabled: D
						})
					}),
					c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
						color: S ? "danger" : "secondary",
						xstyle: [
							o("WAWebPasscodeModalStyles").bottomSpacing,
							o("WAWebPasscodeModalStyles").passcodeMessage,
							D && o("WAWebPasscodeModalStyles").passcodeMessageUpdated
						],
						testid: "passcode-message",
						extras: S ? { role: "alert" } : {},
						children: S || B
					}),
					c.jsxs(o("WAWebFlex.react").FlexRow, {
						justify: "end",
						children: [c.jsx(r("WAWebFlexItem.react"), {
							xstyle: D ? _.marginEnd8 : _.marginEnd4,
							children: D ? c.jsx(r("WDSButton.react"), {
								variant: "borderless",
								onPress: o("WAWebModalManager").closeModalManager,
								testid: "popup-controls-cancel",
								size: "medium",
								type: "default",
								label: s._(
									/*BTDS*/
									""
								)
							}) : c.jsx(o("WAWebButton.react").Button, {
								type: "secondary",
								onClick: o("WAWebModalManager").closeModalManager,
								testid: "popup-controls-cancel",
								buttonType: "button",
								children: s._(
									/*BTDS*/
									""
								)
							})
						}), c.jsx(r("WAWebFlexItem.react"), { children: c.jsx(o("WAWebButton.react").Button, {
							type: "primary",
							onClick: w,
							disabled: !W,
							spinner: E,
							testid: "popup-controls-ok",
							buttonType: "submit",
							children: r("WAWebFbtCommon")("OK")
						}) })]
					})
				]
			}))
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);

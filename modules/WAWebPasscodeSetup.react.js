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
	"asyncToGeneratorRuntime",
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
		var a = t.onSubmit, i = p(""), l = i[0], u = i[1], d = p(""), h = d[0], v = d[1], S = p(""), R = S[0], L = S[1], E = p(!1), k = E[0], I = E[1], T = m(!1), D = m(null), x = o("WAWebEligibilityLogging").eligibilityLogger.getValue("wa_web_app_lock_upsell"), $ = function(t, n) {
			t === "" && n === "" && L("");
		}, P = function(t) {
			u(t.currentTarget.value), $(t.currentTarget.value, h);
		}, N = function(t) {
			v(t.currentTarget.value), $(t.currentTarget.value, l);
		}, M = function(t) {
			if (t.currentTarget.value !== "") {
				var e = C(l, h);
				L(e.errorMessage);
			}
		}, w = function(t) {
			if (t.currentTarget.value !== "") {
				var e = b(l, h);
				R === "" && L(e.errorMessage);
			}
		}, A = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = C(l, h), t = b(l, h);
				if (L(e.errorMessage || t.errorMessage), !(!e.valid || !t.valid)) {
					I(!0);
					var n = yield o("WAWebUserPrefsInfoStore").waNoiseInfo.lockNoiseInfo(h);
					yield o("WAPromiseDelays").delayMs(400), n && (T.current = !0, r("WAWebDialogEventLogger")({
						dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.APP_LOCK_ENABLE,
						source: y.ENABLE
					}), o("WAWebModalManager").ModalManager.close(), a(), x && o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebAppLockConfirmationDialog.react"), {}))), I(!1);
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})();
		o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
			T.current || r("WAWebDialogEventLogger")({
				dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.APP_LOCK_ENABLE,
				source: y.CANCEL
			});
		});
		var F = function(t) {
			t.key === "Enter" && r("WAWebFocusTracer").focus(D.current);
		}, O = function(t) {
			t.key === "Enter" && A();
		}, B = x ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), W = s._(
			/*BTDS*/
			"",
			[s._param("mininum_passcode_length", f), s._param("maximum_passcode_length", g)]
		), q = k !== !0 && l !== "" && h !== "" && R === "";
		return c.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Flex,
			testid: "passcode-setup-modal",
			children: c.jsxs("form", babelHelpers.extends({ method: "dialog" }, (e || (e = r("stylex"))).props([o("WAWebPasscodeModalStyles").container, x && o("WAWebPasscodeModalStyles").containerUpdated]), {
				onSubmit: A,
				children: [
					x ? c.jsx(r("WDSText.react"), {
						type: "Headline1",
						colorName: "contentDefault",
						xstyle: _.marginBottom16,
						children: B
					}) : c.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
						size: "20",
						weight: "medium",
						xstyle: [o("WAWebPasscodeModalStyles").titleText, _.marginBottom12],
						children: B
					}),
					c.jsx(r("WAWebFlexItem.react"), {
						xstyle: x ? _.marginBottom16 : _.marginBottom8,
						children: c.jsx(r("WAWebPasswordInput.react"), {
							value: l,
							onChange: P,
							onBlur: M,
							required: !0,
							placeholder: s._(
								/*BTDS*/
								""
							).toString(),
							focusOnMount: !0,
							testid: "password-input",
							onKeyDown: F,
							appLockUpsellEnabled: x
						})
					}),
					c.jsx(r("WAWebFlexItem.react"), {
						xstyle: x ? _.marginBottom16 : _.marginBottom8,
						children: c.jsx(r("WAWebPasswordInput.react"), {
							ref: D,
							value: h,
							onChange: N,
							onBlur: w,
							title: R,
							required: !0,
							placeholder: s._(
								/*BTDS*/
								""
							).toString(),
							testid: "password-input-confirm",
							onKeyDown: O,
							appLockUpsellEnabled: x
						})
					}),
					c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
						color: R ? "danger" : "secondary",
						xstyle: [
							o("WAWebPasscodeModalStyles").bottomSpacing,
							o("WAWebPasscodeModalStyles").passcodeMessage,
							x && o("WAWebPasscodeModalStyles").passcodeMessageUpdated
						],
						testid: "passcode-message",
						extras: R ? { role: "alert" } : {},
						children: R || W
					}),
					c.jsxs(o("WAWebFlex.react").FlexRow, {
						justify: "end",
						children: [c.jsx(r("WAWebFlexItem.react"), {
							xstyle: x ? _.marginEnd8 : _.marginEnd4,
							children: x ? c.jsx(r("WDSButton.react"), {
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
							onClick: A,
							disabled: !q,
							spinner: k,
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

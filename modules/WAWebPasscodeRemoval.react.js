__d("WAWebPasscodeRemoval.react", [
	"fbt",
	"$InternalEnum",
	"WAPromiseDelays",
	"WAWebABProps",
	"WAWebButton.react",
	"WAWebDialogEventLogger",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebPasscodeModalStyles",
	"WAWebPasswordInput.react",
	"WAWebScreenLockErrorMessages",
	"WAWebSocketModel",
	"WAWebText_DONOTUSE.react",
	"WAWebUserPrefsInfoStore",
	"WAWebUserPrefsScreenLock",
	"WAWebWamEnumDialogNameType",
	"asyncToGeneratorRuntime",
	"react",
	"stylex",
	"useWAWebListener",
	"useWAWebPersistentCounterAsync"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useRef, p = d.useState, _ = n("$InternalEnum")({
		CANCEL: "cancel",
		DISABLE: "disable"
	}), f = {
		description: {
			lineHeight: "x1xet1wb",
			$$css: !0
		},
		marginBottom12: {
			marginBottom: "xcytdqz",
			$$css: !0
		},
		marginBottom20: {
			marginBottom: "xdqhqc9",
			$$css: !0
		},
		marginTop4: {
			marginTop: "xav9cv8",
			$$css: !0
		},
		marginEnd4: {
			marginInlineEnd: "x7g7pl8",
			$$css: !0
		}
	};
	function g(t) {
		var a = t.onSubmit, i = p(""), l = i[0], u = i[1], d = p(null), g = d[0], h = d[1], y = p(!1), C = y[0], b = y[1], v = p(!1), S = v[0], R = v[1], L = m(!1), E = r("useWAWebPersistentCounterAsync")(o("WAWebUserPrefsScreenLock").getScreenUnlockTryCount, o("WAWebUserPrefsScreenLock").setScreenUnlockTryCount), k = E[0], I = k.count, T = k.error, D = k.loading, x = E[1], $ = E[2], P = I != null ? I : 0, N = P >= o("WAWebABProps").getABPropConfigValue("web_screen_lock_max_retries");
		N && o("WAWebSocketModel").Socket.logout();
		var M = P + 1 === o("WAWebABProps").getABPropConfigValue("web_screen_lock_max_retries"), w = function(t) {
			u(t.currentTarget.value);
		}, A = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (R(!0), l === "") {
					h(!0), R(!1);
					return;
				}
				h(!1);
				var e = yield o("WAWebUserPrefsInfoStore").waNoiseInfo.removeLockOnNoiseInfo(l);
				yield o("WAPromiseDelays").delayMs(400), e ? (L.current = !0, r("WAWebDialogEventLogger")({
					dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.APP_LOCK_DISABLE,
					source: _.DISABLE
				}), $(), o("WAWebModalManager").ModalManager.close(), a()) : (x(), b(!0)), R(!1);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), F = function(t) {
			t.key === "Enter" && A();
		};
		return o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
			L.current || r("WAWebDialogEventLogger")({
				dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.APP_LOCK_DISABLE,
				source: _.CANCEL
			});
		}), c.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Flex,
			testid: "passcode-removal-modal",
			children: c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebPasscodeModalStyles").container), { children: [
				c.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
					size: "20",
					weight: "medium",
					xstyle: [o("WAWebPasscodeModalStyles").titleText, f.marginBottom12],
					children: s._(
						/*BTDS*/
						""
					)
				}),
				c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
					size: "16",
					xstyle: [f.description, f.marginBottom20],
					children: s._(
						/*BTDS*/
						""
					)
				}),
				c.jsxs(r("WAWebFlexItem.react"), {
					xstyle: o("WAWebPasscodeModalStyles").bottomSpacing,
					children: [c.jsx(r("WAWebPasswordInput.react"), {
						value: l,
						onChange: w,
						onKeyDown: F,
						placeholder: s._(
							/*BTDS*/
							""
						).toString(),
						focusOnMount: !0,
						enableShowPassword: !0,
						testid: "password-input"
					}), c.jsx(o("WAWebText_DONOTUSE.react").Text, {
						as: "div",
						size: "13",
						color: "danger",
						xstyle: [o("WAWebPasscodeModalStyles").errorText, f.marginTop4],
						extras: { role: "alert" },
						children: o("WAWebScreenLockErrorMessages").getErrorMessage({
							emptyInputEntered: g,
							incorrectPasscode: C,
							onlyOneTryRemaining: M,
							triesExceeded: N
						})
					})]
				}),
				c.jsxs(o("WAWebFlex.react").FlexRow, {
					justify: "end",
					children: [c.jsx(r("WAWebFlexItem.react"), {
						xstyle: f.marginEnd4,
						children: c.jsx(o("WAWebButton.react").Button, {
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
						onClick: function() {
							A();
						},
						disabled: S || N || D || T != null,
						spinner: S,
						testid: "popup-controls-ok",
						buttonType: "submit",
						children: r("WAWebFbtCommon")("OK")
					}) })]
				})
			] }))
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);

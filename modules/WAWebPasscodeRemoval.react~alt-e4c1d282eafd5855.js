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
		var n = t.onSubmit, a = p(""), i = a[0], l = a[1], u = p(null), d = u[0], g = u[1], h = p(!1), y = h[0], C = h[1], b = p(!1), v = b[0], S = b[1], R = m(!1), L = r("useWAWebPersistentCounterAsync")(o("WAWebUserPrefsScreenLock").getScreenUnlockTryCount, o("WAWebUserPrefsScreenLock").setScreenUnlockTryCount), E = L[0], k = E.count, I = E.error, T = E.loading, D = L[1], x = L[2], $ = k != null ? k : 0, P = $ >= o("WAWebABProps").getABPropConfigValue("web_screen_lock_max_retries");
		P && o("WAWebSocketModel").Socket.logout();
		var N = $ + 1 === o("WAWebABProps").getABPropConfigValue("web_screen_lock_max_retries"), M = function(t) {
			l(t.currentTarget.value);
		}, w = async function() {
			if (S(!0), i === "") {
				g(!0), S(!1);
				return;
			}
			g(!1);
			var e = await o("WAWebUserPrefsInfoStore").waNoiseInfo.removeLockOnNoiseInfo(i);
			await o("WAPromiseDelays").delayMs(400), e ? (R.current = !0, r("WAWebDialogEventLogger")({
				dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.APP_LOCK_DISABLE,
				source: _.DISABLE
			}), x(), o("WAWebModalManager").ModalManager.close(), n()) : (D(), C(!0)), S(!1);
		}, A = function(t) {
			t.key === "Enter" && w();
		};
		return o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
			R.current || r("WAWebDialogEventLogger")({
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
						value: i,
						onChange: M,
						onKeyDown: A,
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
							emptyInputEntered: d,
							incorrectPasscode: y,
							onlyOneTryRemaining: N,
							triesExceeded: P
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
							w();
						},
						disabled: v || P || T || I != null,
						spinner: v,
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

__d("WAWebLockScreen.react", [
	"fbt",
	"WAPromiseDelays",
	"WAWebABProps",
	"WAWebButton.react",
	"WAWebCmd",
	"WAWebConnModel",
	"WAWebDetailImage.react",
	"WAWebEmojiText.react",
	"WAWebEnvironment",
	"WAWebErrorBoundary.react",
	"WAWebFbtAppName",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebLandingHeader.react",
	"WAWebLockScreenResolver",
	"WAWebMsgCollection",
	"WAWebPasswordInput.react",
	"WAWebProfileImage.react",
	"WAWebScreenLockErrorMessages",
	"WAWebSocketModel",
	"WAWebText.react",
	"WAWebUserPrefsMultiDevice",
	"WAWebUserPrefsScreenLock",
	"WDSMargins.stylex",
	"react",
	"useWAWebListener",
	"useWAWebPersistentCounterAsync"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = {
		marginBottom18: {
			marginBottom: "x1c436fg",
			$$css: !0
		},
		marginBottom6: {
			marginBottom: "xzueoph",
			$$css: !0
		},
		marginBottom48: {
			marginBottom: "x13ihpsm",
			$$css: !0
		}
	}, m = {
		wrapper: {
			background: "x1lsgnfv",
			height: "x1dr59a3",
			minHeight: "xp22266",
			overflowX: "xw2csxc",
			overflowY: "x1odjw0f",
			paddingTop: "xyinxu5",
			paddingInlineEnd: "xp48ta0",
			paddingBottom: "x1g2khh7",
			paddingInlineStart: "xtssl2i",
			minWidth: "xp9ttsr",
			alignItems: "x6s0dn4",
			boxSizing: "x9f619",
			"@media screen and (max-width: 1000px)_minHeight": "x1vku25w",
			"-webkit-font-smoothing": "xvmahel",
			$$css: !0
		},
		headerContainer: {
			width: "xh8yej3",
			height: "xdd8jsf",
			$$css: !0
		},
		pushnameContainerSpace: {
			height: "x10c73hc",
			$$css: !0
		},
		passcodeContainer: {
			width: "xdzyupr",
			$$css: !0
		},
		incorrectPasscode: {
			height: "x1qx5ct2",
			$$css: !0
		},
		landingMain: {
			position: "x1n2onr6",
			width: "xh8yej3",
			boxSizing: "x9f619",
			paddingTop: "x1uysmmv x12aquyz x1hrpdpy",
			paddingInlineStart: "x17smslp x1jebko4 x1cp98ds",
			paddingLeft: null,
			paddingRight: null,
			paddingInlineEnd: "xh7rcd0 xmazkez x88be8q",
			paddingBottom: "xefzj8c x1gq32gs xwu5ebm xr0nxjv",
			$$css: !0
		}
	}, p = 82;
	function _() {
		var e = c(""), t = e[0], n = e[1], a = c(null), i = a[0], l = a[1], _ = c(!1), g = _[0], h = _[1], y = c(!1), C = y[0], b = y[1], v = r("useWAWebPersistentCounterAsync")(o("WAWebUserPrefsScreenLock").getScreenUnlockTryCount, o("WAWebUserPrefsScreenLock").setScreenUnlockTryCount), S = v[0], R = S.count, L = S.error, E = S.loading, k = v[1], I = v[2], T = R != null ? R : 0, D = T >= o("WAWebABProps").getABPropConfigValue("web_screen_lock_max_retries"), x = T + 1 === o("WAWebABProps").getABPropConfigValue("web_screen_lock_max_retries");
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "correct_passcode_lock_screen", async function(e) {
			await o("WAWebMsgCollection").MsgCollection.decryptAndSetModels(e), I();
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "incorrect_passcode_lock_screen", async function() {
			k(), h(!0), b(!1);
		});
		var $ = function(t) {
			n(t.currentTarget.value);
		}, P = async function() {
			if (b(!0), await o("WAPromiseDelays").delayMs(400), t === "") {
				l(!0), b(!1);
				return;
			}
			l(!1), o("WAWebLockScreenResolver").LockScreenResolvable.enterPasscode(t);
		}, N = function(t) {
			!D && t.key === "Enter" && P();
		};
		D && o("WAWebSocketModel").Socket.logout();
		var M = o("WAWebScreenLockErrorMessages").getErrorMessage({
			emptyInputEntered: i,
			incorrectPasscode: g,
			onlyOneTryRemaining: x,
			triesExceeded: D
		});
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: m.wrapper,
			testid: "lock-screen-landing-window",
			children: [u.jsx(r("WAWebFlexItem.react"), {
				xstyle: m.headerContainer,
				align: "center",
				isFlexContainer: !0,
				children: u.jsx(r("WAWebLandingHeader.react"), {
					surface: "lock-screen",
					showAppDownloadButton: !0
				})
			}), u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				justify: "center",
				grow: r("WAWebEnvironment").isWindows ? 0 : 1,
				children: u.jsx("main", {
					className: "x1lxuw3u x1ow4hk9 x1wmf1g4 xefzj8c x42lpuj x1rsuxf0 xcgujcq x1igtfuo x13up0n2 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1pyc6se x1mlb2bo x16pkwpw xqe4bef xw6alqk x10a9n66",
					children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "center",
						xstyle: m.landingMain,
						children: [
							u.jsx(r("WAWebFlexItem.react"), {
								xstyle: [o("WDSMargins.stylex").wdsMargins.marginTop16, d.marginBottom18],
								children: u.jsx(r("WAWebProfileImage.react"), {
									thumb: o("WAWebUserPrefsMultiDevice").getCachedProfilePicEURL(),
									size: p,
									quality: o("WAWebDetailImage.react").DetailImageQuality.High
								})
							}),
							u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
								name: "lock-screen-emoji-text",
								children: u.jsx(o("WAWebText.react").WAWebTextLargeRefreshed, {
									xstyle: [m.pushnameContainerSpace, o("WDSMargins.stylex").wdsMargins.marginBottom32],
									children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
										text: o("WAWebConnModel").Conn.pushname,
										ellipsify: !0,
										titlify: !0
									})
								})
							}),
							u.jsx(r("WAWebFlexItem.react"), {
								xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom16,
								children: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
									textAlign: "center",
									xstyle: d.marginBottom6,
									children: s._(
										/*BTDS*/
										"",
										[s._implicitParam("=m2", u.jsx(o("WAWebFbtAppName").WAWebAppShortNameWithoutWindows, { children: s._(
											/*BTDS*/
											""
										) }))]
									)
								})
							}),
							u.jsxs(r("WAWebFlexItem.react"), {
								xstyle: [m.passcodeContainer, o("WDSMargins.stylex").wdsMargins.marginBottom12],
								children: [u.jsx(r("WAWebPasswordInput.react"), {
									onChange: $,
									onKeyDown: N,
									required: !0,
									placeholder: s._(
										/*BTDS*/
										""
									).toString(),
									focusOnMount: !0,
									enableShowPassword: !0,
									testid: "password-input"
								}), M == null ? u.jsx("div", { className: "x1gnnpzl" }) : u.jsx(o("WAWebText.react").WAWebTextSmall, {
									color: "critical",
									xstyle: [
										m.incorrectPasscode,
										o("WDSMargins.stylex").wdsMargins.marginTop4,
										d.marginBottom6
									],
									role: "alert",
									children: M
								})]
							}),
							u.jsx(r("WAWebFlexItem.react"), {
								xstyle: d.marginBottom48,
								children: u.jsx(o("WAWebButton.react").Button, {
									type: "primary",
									onClick: function() {
										return void P();
									},
									disabled: C || D || E || L != null,
									spinner: C,
									testid: "unlock-button",
									children: s._(
										/*BTDS*/
										""
									)
								})
							}),
							u.jsx(o("WAWebText.react").WAWebTextMuted, {
								xstyle: d.marginBottom6,
								children: s._(
									/*BTDS*/
									""
								)
							}),
							u.jsx(o("WAWebText.react").WAWebTextMuted, {
								xstyle: d.marginBottom6,
								children: s._(
									/*BTDS*/
									""
								)
							}),
							u.jsx(r("WAWebFlexItem.react"), {
								xstyle: o("WDSMargins.stylex").wdsMargins.marginTop12,
								children: u.jsx(o("WAWebButton.react").Button, {
									type: "plain-white",
									onClick: f,
									children: s._(
										/*BTDS*/
										""
									)
								})
							})
						]
					})
				})
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f() {
		o("WAWebSocketModel").Socket.logout();
	}
	l.default = _;
}), 226);

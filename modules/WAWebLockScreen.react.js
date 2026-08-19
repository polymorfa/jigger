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
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
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
		var e = o("react-compiler-runtime").c(44), t = c(""), a = t[0], i = t[1], l = c(null), _ = l[0], g = l[1], h = c(!1), y = h[0], C = h[1], b = c(!1), v = b[0], S = b[1], R = r("useWAWebPersistentCounterAsync")(o("WAWebUserPrefsScreenLock").getScreenUnlockTryCount, o("WAWebUserPrefsScreenLock").setScreenUnlockTryCount), L = R[0], E = R[1], k = R[2], I = L.count, T = L.error, D = L.loading, x = I != null ? I : 0, $ = x >= o("WAWebABProps").getABPropConfigValue("web_screen_lock_max_retries"), P;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (P = o("WAWebABProps").getABPropConfigValue("web_screen_lock_max_retries"), e[0] = P) : P = e[0];
		var N = x + 1 === P, M;
		e[1] !== k ? (M = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				yield o("WAWebMsgCollection").MsgCollection.decryptAndSetModels(e), k();
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), e[1] = k, e[2] = M) : M = e[2], o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "correct_passcode_lock_screen", M);
		var w;
		e[3] !== E ? (w = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				E(), C(!0), S(!1);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), e[3] = E, e[4] = w) : w = e[4], o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "incorrect_passcode_lock_screen", w);
		var A;
		e[5] === Symbol.for("react.memo_cache_sentinel") ? (A = function(t) {
			i(t.currentTarget.value);
		}, e[5] = A) : A = e[5];
		var F = A, O;
		e[6] !== a ? (O = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (S(!0), yield o("WAPromiseDelays").delayMs(400), a === "") {
					g(!0), S(!1);
					return;
				}
				g(!1), o("WAWebLockScreenResolver").LockScreenResolvable.enterPasscode(a);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), e[6] = a, e[7] = O) : O = e[7];
		var B = O, W;
		e[8] !== B || e[9] !== $ ? (W = function(t) {
			!$ && t.key === "Enter" && B();
		}, e[8] = B, e[9] = $, e[10] = W) : W = e[10];
		var q = W;
		$ && o("WAWebSocketModel").Socket.logout();
		var U;
		e[11] !== _ || e[12] !== y || e[13] !== N || e[14] !== $ ? (U = o("WAWebScreenLockErrorMessages").getErrorMessage({
			emptyInputEntered: _,
			incorrectPasscode: y,
			onlyOneTryRemaining: N,
			triesExceeded: $
		}), e[11] = _, e[12] = y, e[13] = N, e[14] = $, e[15] = U) : U = e[15];
		var V = U, H;
		e[16] === Symbol.for("react.memo_cache_sentinel") ? (H = u.jsx(r("WAWebFlexItem.react"), {
			xstyle: m.headerContainer,
			align: "center",
			isFlexContainer: !0,
			children: u.jsx(r("WAWebLandingHeader.react"), {
				surface: "lock-screen",
				showAppDownloadButton: !0
			})
		}), e[16] = H) : H = e[16];
		var G;
		e[17] === Symbol.for("react.memo_cache_sentinel") ? (G = { className: "x1lxuw3u x1ow4hk9 x1wmf1g4 xefzj8c x42lpuj x1rsuxf0 xcgujcq x1igtfuo x13up0n2 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1pyc6se x1mlb2bo x16pkwpw xqe4bef xw6alqk x10a9n66" }, e[17] = G) : G = e[17];
		var z;
		e[18] === Symbol.for("react.memo_cache_sentinel") ? (z = [o("WDSMargins.stylex").wdsMargins.marginTop16, d.marginBottom18], e[18] = z) : z = e[18];
		var j;
		e[19] === Symbol.for("react.memo_cache_sentinel") ? (j = u.jsx(r("WAWebFlexItem.react"), {
			xstyle: z,
			children: u.jsx(r("WAWebProfileImage.react"), {
				thumb: o("WAWebUserPrefsMultiDevice").getCachedProfilePicEURL(),
				size: p,
				quality: o("WAWebDetailImage.react").DetailImageQuality.High
			})
		}), e[19] = j) : j = e[19];
		var K;
		e[20] === Symbol.for("react.memo_cache_sentinel") ? (K = u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "lock-screen-emoji-text",
			children: u.jsx(o("WAWebText.react").WAWebTextLargeRefreshed, {
				xstyle: [m.pushnameContainerSpace, o("WDSMargins.stylex").wdsMargins.marginBottom32],
				children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: o("WAWebConnModel").Conn.pushname,
					ellipsify: !0,
					titlify: !0
				})
			})
		}), e[20] = K) : K = e[20];
		var Q;
		e[21] === Symbol.for("react.memo_cache_sentinel") ? (Q = u.jsx(r("WAWebFlexItem.react"), {
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
		}), e[21] = Q) : Q = e[21];
		var X;
		e[22] === Symbol.for("react.memo_cache_sentinel") ? (X = [m.passcodeContainer, o("WDSMargins.stylex").wdsMargins.marginBottom12], e[22] = X) : X = e[22];
		var Y;
		e[23] === Symbol.for("react.memo_cache_sentinel") ? (Y = s._(
			/*BTDS*/
			""
		).toString(), e[23] = Y) : Y = e[23];
		var J;
		e[24] !== q ? (J = u.jsx(r("WAWebPasswordInput.react"), {
			onChange: F,
			onKeyDown: q,
			required: !0,
			placeholder: Y,
			focusOnMount: !0,
			enableShowPassword: !0,
			testid: "password-input"
		}), e[24] = q, e[25] = J) : J = e[25];
		var Z;
		e[26] !== V ? (Z = V == null ? u.jsx("div", { className: "x1gnnpzl" }) : u.jsx(o("WAWebText.react").WAWebTextSmall, {
			color: "critical",
			xstyle: [
				m.incorrectPasscode,
				o("WDSMargins.stylex").wdsMargins.marginTop4,
				d.marginBottom6
			],
			role: "alert",
			children: V
		}), e[26] = V, e[27] = Z) : Z = e[27];
		var ee;
		e[28] !== J || e[29] !== Z ? (ee = u.jsxs(r("WAWebFlexItem.react"), {
			xstyle: X,
			children: [J, Z]
		}), e[28] = J, e[29] = Z, e[30] = ee) : ee = e[30];
		var te;
		e[31] !== B ? (te = function() {
			return void B();
		}, e[31] = B, e[32] = te) : te = e[32];
		var ne = v || $ || D || T != null, re;
		e[33] === Symbol.for("react.memo_cache_sentinel") ? (re = s._(
			/*BTDS*/
			""
		), e[33] = re) : re = e[33];
		var oe;
		e[34] !== v || e[35] !== te || e[36] !== ne ? (oe = u.jsx(r("WAWebFlexItem.react"), {
			xstyle: d.marginBottom48,
			children: u.jsx(o("WAWebButton.react").Button, {
				type: "primary",
				onClick: te,
				disabled: ne,
				spinner: v,
				testid: "unlock-button",
				children: re
			})
		}), e[34] = v, e[35] = te, e[36] = ne, e[37] = oe) : oe = e[37];
		var ae;
		e[38] === Symbol.for("react.memo_cache_sentinel") ? (ae = u.jsx(o("WAWebText.react").WAWebTextMuted, {
			xstyle: d.marginBottom6,
			children: s._(
				/*BTDS*/
				""
			)
		}), e[38] = ae) : ae = e[38];
		var ie;
		e[39] === Symbol.for("react.memo_cache_sentinel") ? (ie = u.jsx(o("WAWebText.react").WAWebTextMuted, {
			xstyle: d.marginBottom6,
			children: s._(
				/*BTDS*/
				""
			)
		}), e[39] = ie) : ie = e[39];
		var le;
		e[40] === Symbol.for("react.memo_cache_sentinel") ? (le = u.jsx(r("WAWebFlexItem.react"), {
			xstyle: o("WDSMargins.stylex").wdsMargins.marginTop12,
			children: u.jsx(o("WAWebButton.react").Button, {
				type: "plain-white",
				onClick: f,
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), e[40] = le) : le = e[40];
		var se;
		return e[41] !== ee || e[42] !== oe ? (se = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: m.wrapper,
			testid: "lock-screen-landing-window",
			children: [H, u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				justify: "center",
				grow: r("WAWebEnvironment").isWindows ? 0 : 1,
				children: u.jsx("main", babelHelpers.extends({}, G, { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					xstyle: m.landingMain,
					children: [
						j,
						K,
						Q,
						ee,
						oe,
						ae,
						ie,
						le
					]
				}) }))
			})]
		}), e[41] = ee, e[42] = oe, e[43] = se) : se = e[43], se;
	}
	function f() {
		o("WAWebSocketModel").Socket.logout();
	}
	l.default = _;
}), 226);

__d("WAWebShortcakePasskeyScreen.react", [
	"fbt",
	"WALogger",
	"WAWebEnvironment",
	"WAWebFlex.react",
	"WAWebLandingHeader.react",
	"WAWebLinkDeviceEvents",
	"WAWebShortcakeCodeMatching.react",
	"WAWebShortcakePasskeyPrompt.react",
	"WAWebShortcakeWaitingForPhone.react",
	"getErrorSafe",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _ = p || (p = o("react")), f = p, g = f.useCallback, h = f.useState, y = {
		wrapper: {
			position: "xixxii4",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			width: "xn9wirt",
			height: "x1dr59a3",
			overflowX: "xw2csxc",
			overflowY: "x1odjw0f",
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "xu7uy1i",
			paddingInlineEnd: "x1t7qo4d",
			boxSizing: "x9f619",
			zIndex: "xfo81ep",
			$$css: !0
		},
		wrapperWeb: {
			backgroundColor: "xq1354q",
			$$css: !0
		},
		wrapperWindows: {
			backgroundColor: "x1od0jb8",
			$$css: !0
		},
		headerContainer: {
			width: "xh8yej3",
			height: "xwzfr38",
			$$css: !0
		}
	};
	function C(t) {
		var n = t.onCancel, a = t.onConfirmVerificationCode, i = t.onStartPasskeyPairing, l = h("passkey_prompt"), p = l[0], f = l[1], C = h(""), b = C[0], v = C[1], S = h(null), R = S[0], L = S[1], E = h(!1), k = E[0], I = E[1];
		o("useWAWebListener").useListener(o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents, "link_device_events:shortcake_prologue_sent", g(function() {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Shortcake UI: prologue sent, showing waiting screen"]))), f("waiting_for_phone");
		}, [])), o("useWAWebListener").useListener(o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents, "link_device_events:shortcake_verification_code_ready", g(function(e, t) {
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Shortcake UI: verification code ready, skipHandoffUx=", ""])), String(t)), v(e), I(t), f("code_matching"), t && a().catch(function(e) {
				o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Shortcake UI: auto-confirm failed: ", ""])), r("getErrorSafe")(e).message).catching(r("getErrorSafe")(e)).sendLogs("shortcake-autoconfirm-fail"), I(!1), L("unknown"), f("error");
			});
		}, [a])), o("useWAWebListener").useListener(o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents, "link_device_events:shortcake_error", g(function(e) {
			o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Shortcake UI: error - ", ""])), e).sendLogs("shortcake-passkey-error"), I(!1), L(e), f("error");
		}, []));
		var T = g(async function() {
			f("passkey_pending"), L(null), I(!1), i().catch(function(e) {
				o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Shortcake UI: passkey pairing failed: ", ""])), r("getErrorSafe")(e).message).catching(r("getErrorSafe")(e)).sendLogs("shortcake-passkey-start-fail"), L("unknown"), f("error");
			});
		}, [i]), D = g(async function() {
			await a();
		}, [a]), x = g(async function() {
			I(!1), L(null), await T();
		}, [T]), $ = p === "passkey_prompt" ? _.jsx(r("WAWebShortcakePasskeyPrompt.react"), {
			errorMessage: R != null ? s._(
				/*BTDS*/
				""
			) : null,
			isDisabled: !1,
			onContinue: T
		}) : p === "passkey_pending" ? _.jsx(r("WAWebShortcakePasskeyPrompt.react"), {
			isDisabled: !0,
			onContinue: async function() {}
		}) : p === "waiting_for_phone" ? _.jsx(r("WAWebShortcakeWaitingForPhone.react"), {}) : p === "code_matching" ? _.jsx(r("WAWebShortcakeCodeMatching.react"), {
			autoConfirming: k,
			verificationCode: b,
			onConfirm: D
		}) : p === "error" ? _.jsx(r("WAWebShortcakePasskeyPrompt.react"), {
			errorMessage: s._(
				/*BTDS*/
				""
			),
			isDisabled: !1,
			onContinue: x
		}) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + p);
		})();
		return _.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: [y.wrapper, r("WAWebEnvironment").isWeb ? y.wrapperWeb : y.wrapperWindows],
			testid: "shortcake_passkey_screen",
			children: [
				_.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: y.headerContainer,
					shrink: 0,
					children: _.jsx(r("WAWebLandingHeader.react"), {
						showAppDownloadButton: !1,
						surface: "lock-screen"
					})
				}),
				_.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					justify: "center",
					grow: 1,
					shrink: 0,
					children: [_.jsx("div", {
						className: "xewp6mh x4i7bpe x1sgudl8 x1oiqv2n x15zmtp0 x1g83kfv x3qq2k7 x2x8art x1qor8vf x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn xb1i3fl x15yb4d7",
						children: $
					}), _.jsx("button", {
						className: "x78zum5 x6s0dn4 xl56j7k xfex06f x11g6tue x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1ypdohk xexx8yu x18d9i69 x1c1uobl xyri2b xqui205",
						"data-testid": "shortcake_cancel_button",
						onClick: n,
						type: "button",
						children: _.jsx("span", {
							className: "x1f6kntn xk50ysn xq5w6dx xujl8zx x1o9h5kx xewurvo x3pynha x15yb4d7",
							children: s._(
								/*BTDS*/
								""
							)
						})
					})]
				}),
				_.jsx(o("WAWebFlex.react").FlexItem, { xstyle: y.headerContainer })
			]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);

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
	"asyncToGeneratorRuntime",
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
		var a = t.onCancel, i = t.onConfirmVerificationCode, l = t.onStartPasskeyPairing, p = h("passkey_prompt"), f = p[0], C = p[1], b = h(""), v = b[0], S = b[1], R = h(null), L = R[0], E = R[1], k = h(!1), I = k[0], T = k[1];
		o("useWAWebListener").useListener(o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents, "link_device_events:shortcake_prologue_sent", g(function() {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Shortcake UI: prologue sent, showing waiting screen"]))), C("waiting_for_phone");
		}, [])), o("useWAWebListener").useListener(o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents, "link_device_events:shortcake_verification_code_ready", g(function(e, t) {
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Shortcake UI: verification code ready, skipHandoffUx=", ""])), String(t)), S(e), T(t), C("code_matching"), t && i().catch(function(e) {
				o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Shortcake UI: auto-confirm failed: ", ""])), r("getErrorSafe")(e).message).catching(r("getErrorSafe")(e)).sendLogs("shortcake-autoconfirm-fail"), T(!1), E("unknown"), C("error");
			});
		}, [i])), o("useWAWebListener").useListener(o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents, "link_device_events:shortcake_error", g(function(e) {
			o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Shortcake UI: error - ", ""])), e).sendLogs("shortcake-passkey-error"), T(!1), E(e), C("error");
		}, []));
		var D = g(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			C("passkey_pending"), E(null), T(!1), l().catch(function(e) {
				o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Shortcake UI: passkey pairing failed: ", ""])), r("getErrorSafe")(e).message).catching(r("getErrorSafe")(e)).sendLogs("shortcake-passkey-start-fail"), E("unknown"), C("error");
			});
		}), [l]), x = g(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			yield i();
		}), [i]), $ = g(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			T(!1), E(null), yield D();
		}), [D]), P = f === "passkey_prompt" ? _.jsx(r("WAWebShortcakePasskeyPrompt.react"), {
			errorMessage: L != null ? s._(
				/*BTDS*/
				""
			) : null,
			isDisabled: !1,
			onContinue: D
		}) : f === "passkey_pending" ? _.jsx(r("WAWebShortcakePasskeyPrompt.react"), {
			isDisabled: !0,
			onContinue: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {})
		}) : f === "waiting_for_phone" ? _.jsx(r("WAWebShortcakeWaitingForPhone.react"), {}) : f === "code_matching" ? _.jsx(r("WAWebShortcakeCodeMatching.react"), {
			autoConfirming: I,
			verificationCode: v,
			onConfirm: x
		}) : f === "error" ? _.jsx(r("WAWebShortcakePasskeyPrompt.react"), {
			errorMessage: s._(
				/*BTDS*/
				""
			),
			isDisabled: !1,
			onContinue: $
		}) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + f);
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
						children: P
					}), _.jsx("button", {
						className: "x78zum5 x6s0dn4 xl56j7k xfex06f x11g6tue x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1ypdohk xexx8yu x18d9i69 x1c1uobl xyri2b xqui205",
						"data-testid": "shortcake_cancel_button",
						onClick: a,
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

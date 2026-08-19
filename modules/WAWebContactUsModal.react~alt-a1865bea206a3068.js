__d("WAWebContactUsModal.react", [
	"fbt",
	"WAAbortError",
	"WALogger",
	"WAPromiseRaceAbort",
	"WAWebABPropsSaga",
	"WAWebClickableLink.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebLoggerDebugInfo",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebRichTextField.react",
	"WAWebSendSupportRequestJob",
	"WAWebStopEvent",
	"WAWebSupportChatConfirmationModal.react",
	"WAWebSupportChatStrings",
	"WAWebSupportChatUtils",
	"react",
	"useWAWebDebouncedCallback",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = d.useState, f = 10, g = 5e3, h = {
		deviceInfo: {
			marginBottom: "xcytdqz",
			marginTop: "x1anpbxc",
			$$css: !0
		},
		emailLink: {
			marginTop: "x1anpbxc",
			$$css: !0
		}
	};
	function y(t) {
		var n = t.entityId, a = t.onCancel, i = t.onEmail, l = t.onFailure, u = t.onSend, d = t.supportTag, y = r("useWAWebUnmountSignal")(), b = _(""), v = b[0], S = b[1], R = _(null), L = R[0], E = R[1], k = _(!1), I = k[0], T = k[1], D = _(!1), x = D[0], $ = D[1], P = p(null);
		m(function() {
			var e;
			(e = P.current) == null || e.restoreFocus(), $(o("WAWebABPropsSaga").getIsSagaV1Enabled());
		}, []);
		var N = function(t) {
			return t.length >= f;
		}, M = async function() {
			T(!0);
			var t = N(v);
			if (t) {
				u == null || u({ description: v });
				var n = o("WAWebABPropsSaga").getIsSagaV1Enabled(), a = await O(n), i = JSON.stringify(a);
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"InAppSupport: Sending support request with deviceInfo=",
					":",
					""
				])), !0, i != null ? i : "n/a"), r("WAPromiseRaceAbort")(o("WAWebSendSupportRequestJob").sendSupportRequest(v, i), y).then(function(e) {
					if (e.message != null) {
						o("WAWebModalManager").ModalManager.close();
						var t = e.groupId;
						t !== void 0 && t.includes("@s.whatsapp.net") ? o("WAWebSupportChatUtils").openSupportChat(t) : o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebSupportChatConfirmationModal.react"), {}));
					} else l && (l({ description: v }), T(!1));
				}).catch(o("WAAbortError").catchAbort(function() {
					T(!1);
				}));
			} else E(s._(
				/*BTDS*/
				""
			));
		}, w = r("useWAWebDebouncedCallback")(function() {
			return M();
		}, 100), A = function() {
			a == null || a(), o("WAWebModalManager").ModalManager.close();
		}, F = function() {
			i && (o("WAWebModalManager").ModalManager.close(), i({ description: v }));
		}, O = async function(t) {
			var e = await o("WAWebLoggerDebugInfo").getDebugInfo({
				supportTag: d,
				convertFields: !0,
				addUserAgentDetails: !0,
				entityId: n
			}), r = "";
			return t && (r = "saga"), r && (e.sagaKey = r), e.saga_copy = x, e;
		}, B = function(t) {
			var e = t.text;
			S(e);
		}, W = { enter: o("WAWebStopEvent").stopPropagation };
		I && (W.esc = o("WAWebStopEvent").stopPropagation);
		var q = s._(
			/*BTDS*/
			""
		);
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "contact-us"
			},
			title: s._(
				/*BTDS*/
				""
			),
			okDisabled: !N(v) || I,
			okSpinner: I,
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: w,
			onCancel: I ? void 0 : A,
			children: c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				handlers: W,
				children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					children: [
						c.jsx(o("WAWebRichTextField.react").RichTextField, {
							error: L,
							maxLength: g,
							onChange: B,
							placeholder: q,
							ariaLabel: q,
							ref: P,
							value: v,
							minVisibleLines: 2,
							multiline: !0,
							enterIsNewLine: !0,
							maxVisibleLines: 7,
							theme: "contact-us"
						}),
						c.jsxs(r("WAWebFlexItem.react"), {
							xstyle: h.deviceInfo,
							grow: 1,
							children: [
								x ? C() : o("WAWebSupportChatStrings").SupportChatDeviceInfoDisclaimer(),
								" ",
								c.jsx(o("WAWebExternalLink.react").ExternalLink, {
									href: o("WAWebFaqUrl").getSupportChatFaqUrl(),
									children: s._(
										/*BTDS*/
										""
									)
								})
							]
						}),
						c.jsx(o("WAWebFlex.react").FlexRow, { children: c.jsx(r("WAWebFlexItem.react"), {
							xstyle: h.emailLink,
							grow: 1,
							children: c.jsx(r("WAWebClickableLink.react"), {
								onClick: F,
								tabIndex: 0,
								children: s._(
									/*BTDS*/
									""
								)
							})
						}) })
					]
				})
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C() {
		return o("WAWebMobilePlatforms").isSMB() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	l.default = y;
}), 226);

__d("WAWebOpenChatFlow.react", [
	"fbt",
	"$InternalEnum",
	"WAAbortError",
	"WALogger",
	"WAPromiseDelays",
	"WATimeUtils",
	"WAWebBizGetWidFromPathCustomUrlAction",
	"WAWebBotProfileCollection",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebComposeBoxActions",
	"WAWebConfirmPopup.react",
	"WAWebContactSyncLogger",
	"WAWebDeepLinkClickWamEvent",
	"WAWebExternalLink.react",
	"WAWebFbtCommon",
	"WAWebFindChatAction",
	"WAWebFlex.react",
	"WAWebLinkify",
	"WAWebNoop",
	"WAWebQueryExistsJob",
	"WAWebSpinner.react",
	"WAWebUserPrefsMeUser",
	"WAWebUsernameGatingUtils",
	"WAWebUsernameKeyVerificationFlow",
	"WAWebWidFormat",
	"err",
	"getErrorSafe",
	"react",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useRef, f = 250, g = 500, h = new Map();
	async function y(e) {
		if (!e.isUser()) return e;
		var t = h.get(e.user);
		if (t) return t;
		var n = await o("WAWebQueryExistsJob").queryWidExists(e, o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.DEEPLINK), r = n == null ? e : n.wid;
		return h.set(e.user, r), r;
	}
	var C = n("$InternalEnum").Mirrored([
		"Confirm",
		"Error",
		"UsernameNotFoundError"
	]);
	function b(t) {
		var n = o("useWAWebFlow").useFlow(), a = n[0], i = n[1], l = _(), c = async function() {
			var n = t.target, r = n.customUrl, a = n.invalidUsernameKey, i = n.username, l = n.usernameKey, s = n.wid;
			if (s != null) return {
				wid: s,
				widLookupMethod: "directWid"
			};
			if (r != null) {
				var u = await o("WAWebBizGetWidFromPathCustomUrlAction").getWidfromPath(r);
				if (u) return {
					wid: u,
					widLookupMethod: "customUrl"
				};
			}
			if (i != null && o("WAWebUsernameGatingUtils").usernameSearchEnabled()) {
				if (a === !0) {
					t.deepLinkLoggingData != null && new (o("WAWebDeepLinkClickWamEvent")).DeepLinkClickWamEvent(babelHelpers.extends({}, t.deepLinkLoggingData, { deepLinkRequirePinEntry: !0 })).commit();
					var c = await o("WAWebUsernameKeyVerificationFlow").usernameKeyVerificationFlow({
						username: i,
						initWithError: !0
					});
					return c != null ? {
						wid: c,
						widLookupMethod: "username"
					} : void 0;
				}
				var d = await o("WAWebQueryExistsJob").queryUsernameExists(i, l, o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.CHAT_OPEN), m = (d == null ? void 0 : d.keyRequired) === !0;
				t.deepLinkLoggingData != null && new (o("WAWebDeepLinkClickWamEvent")).DeepLinkClickWamEvent(babelHelpers.extends({}, t.deepLinkLoggingData, { deepLinkRequirePinEntry: m })).commit();
				var p;
				if (m ? (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["OpenChatFlow: username query returned keyRequired"]))), p = await o("WAWebUsernameKeyVerificationFlow").usernameKeyVerificationFlow({
					username: i,
					initWithError: l != null
				})) : p = d == null ? void 0 : d.wid, p != null) return {
					wid: p,
					widLookupMethod: "username"
				};
			}
		}, m = async function(n) {
			var e = t.ctwaContextLinkData, r = t.msgText, a = t.clearPreviousText, i = a === void 0 ? !1 : a;
			if (e) {
				var l = o("WAWebLinkify").findLink({
					httpOnly: !1,
					sender: o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
					text: e.sourceUrl || ""
				}), s = (l == null ? void 0 : l.suspiciousCharacters) != null && l.suspiciousCharacters.size > 0;
				s && (e = void 0);
			}
			e && (r = e.icebreaker), n.active && r != null && r !== "" ? (i && o("WAWebComposeBoxActions").ComposeBoxActions.setTextContent(n, ""), o("WAWebComposeBoxActions").ComposeBoxActions.paste(n, r), e && o("WAWebComposeBoxActions").ComposeBoxActions.setCtwaContextLinkData(n, e)) : (i && n.setComposeContents({ text: "" }), r != null && r !== "" && n.setComposeContents({
				text: r,
				timestamp: o("WATimeUtils").unixTime()
			}), await o("WAWebCmd").Cmd.openChatFromUnread({
				chat: n,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink
			}).then(function(t) {
				t && (o("WAWebComposeBoxActions").ComposeBoxActions.focus(n), e && o("WAWebComposeBoxActions").ComposeBoxActions.setCtwaContextLinkData(n, e));
			})), t.sendLogAttributes != null && o("WAWebComposeBoxActions").ComposeBoxActions.addMsgSendingLogAttributes(n, t.sendLogAttributes);
		}, h = function() {
			i.push(C.Error);
		}, b = function() {
			var e;
			(e = l.current) == null || e.controller.abort(), l.current = void 0, i.end();
		};
		if (p(function() {
			var e = async function() {
				var e = !1, n = new AbortController();
				o("WAPromiseDelays").delayMs(f).then(function() {
					if (n.signal.aborted) throw new (o("WAAbortError")).AbortError();
					e = !0, i.push(C.Confirm);
				}).catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
				var a = Date.now(), s = new AbortController(), d = s.signal, p = await c();
				if (p == null) {
					var _ = t.target, b = _.fallbackUrl, v = _.username;
					if (v != null && o("WAWebUsernameGatingUtils").usernameSearchEnabled()) {
						n.abort(), i.push(C.UsernameNotFoundError);
						return;
					}
					if (b != null) {
						o("WAWebExternalLink.react").openExternalLink(b), i.end();
						return;
					}
					o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["OpenChatFlow chat open was no-op from provided props."]))), i.end();
					return;
				}
				var S = y(p.wid).then(function(e) {
					var t, n = (t = o("WAWebBotProfileCollection").BotProfileCollection.getDefaultBot()) == null ? void 0 : t.id;
					if (e.isBot() && (n == null || !n.equals(e))) throw r("err")("invalid bot chat");
					return o("WAWebFindChatAction").findOrCreateLatestChat(e, "debugOpenChatFlow", { forceUsync: !0 });
				}).then(async function(r) {
					if (d.aborted) throw new (o("WAAbortError")).AbortError();
					e || n.abort();
					var l = Date.now() - a, s = e ? Math.max(g + f - l, 0) : 0;
					await m(r.chat), await o("WAPromiseDelays").delayMs(s), i.end(), t.onSuccess(babelHelpers.extends({}, r, { widLookupMethod: p.widLookupMethod }));
				}).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(function(e) {
					n.abort(), t.onError == null || t.onError(r("getErrorSafe")(e)), h();
				});
				l.current = {
					controller: s,
					promise: S
				};
			};
			e().catch(r("WAWebNoop"));
		}, []), i.step == null) return null;
		var v = null;
		switch (i.step) {
			case C.Confirm:
				v = d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					title: s._(
						/*BTDS*/
						""
					),
					onCancel: b,
					cancelText: s._(
						/*BTDS*/
						""
					),
					tsNavigationData: {
						surface: "unknown",
						viewName: "open-chat-starting"
					},
					children: d.jsx(o("WAWebFlex.react").FlexRow, {
						justify: "center",
						align: "center",
						children: d.jsx(o("WAWebSpinner.react").Spinner, {
							stroke: 6,
							size: 24
						})
					})
				});
				break;
			case C.Error:
				if (t.customError != null) v = t.customError;
				else {
					var S = t.target.wid, R = o("WAWebWidFormat").widToFormattedUser(S);
					v = d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
						onOK: function() {
							return i.end();
						},
						okText: r("WAWebFbtCommon")("OK"),
						tsNavigationData: {
							surface: "unknown",
							viewName: "open-chat-not-found"
						},
						children: s._(
							/*BTDS*/
							"",
							[s._param("formattedNumber", R)]
						)
					});
				}
				break;
			case C.UsernameNotFoundError: {
				var L = t.target.username;
				v = d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					onOK: function() {
						return i.end();
					},
					okText: r("WAWebFbtCommon")("OK"),
					tsNavigationData: {
						surface: "unknown",
						viewName: "open-chat-username-not-found"
					},
					children: s._(
						/*BTDS*/
						"",
						[s._param("username", L)]
					)
				});
				break;
			}
		}
		return d.jsx(a, {
			flow: i,
			children: v
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.OpenChatFlow = b;
}), 226);

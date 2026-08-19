__d("WAWebE2EInfoModal.react", [
	"fbt",
	"invariant",
	"WALogger",
	"WAWebABPropsSupportGroup",
	"WAWebChatGroupUtils",
	"WAWebClickableLink.react",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebDailyAggregatedStats",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFormatE2ENotificationForDeviceChange",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebLimitSharingGatingUtils",
	"WAWebManageE2ESessionsJob",
	"WAWebMiscGatingUtils",
	"WAWebModalManager",
	"WAWebPrinaUtils",
	"WAWebPrivacyHighlightDailyUtils",
	"WAWebSendMsgDatabaseJob",
	"WAWebSessionScope",
	"WAWebStateUtils",
	"WAWebSupportChatStrings",
	"WAWebUserPrefsMeUser",
	"WAWebWid",
	"WAWebWidFactory",
	"WAWebWidFormat",
	"react"
], (function(t, n, r, o, a, i, l, s, u) {
	var e, c, d, m = d || (d = o("react")), p = d.useEffect, _ = ["encrypt", "info_encrypted"];
	function f(t) {
		var n, a, i = t.accountLid, l = t.chat, d = t.chatId, f = t.e2eSubtype, y = t.highlightSurface, C = t.jid, b = t.msg;
		p(function() {
			var e = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(), t = C ? [o("WAWebWidFactory").createWid(C.toString()), e] : [e];
			o("WAWebSendMsgDatabaseJob").getFanOutListJob(t).then(function(e) {
				o("WAWebManageE2ESessionsJob").ensureE2ESessions({
					identityChanged: !1,
					sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
					wids: e
				});
			}), _.includes(f) && o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() && y != null && o("WAWebPrivacyHighlightDailyUtils").incrementPrinaDailyCount(y, o("WAWebDailyAggregatedStats").PrinaDailyActionType.DIALOG_APPEAR);
		}, []);
		var v = function() {
			if (C) {
				var e = o("WAWebUserPrefsMeUser").isMeAccount(C), t = e ? d : C;
				o("WAWebModalManager").ModalManager.close(), o("WAWebCmd").Cmd.verificationDrawer({
					wid: t,
					lid: i
				});
			}
		}, S, R = null, L = null, E = null, k = null, I = null, T = null;
		switch (E = o("WAWebModalManager").closeModalManager, k = r("WAWebFbtCommon")("OK"), f) {
			case "info_encrypted":
				I = g(f, o("WAWebFaqUrl").getE2EFaqUrl(), y), r("WAWebWid").isGroup(d) ? o("WAWebChatGroupUtils").isSupportGroup(l) ? (S = o("WAWebSupportChatStrings").SupportChatSecurityModalText(), I = h({
					e2eSubtype: f,
					highlightSurface: y,
					linkText: o("WAWebSupportChatStrings").SupportChatLearnMoreLinkText(),
					url: o("WAWebFaqUrl").getSupportChatSafetyFaqUrl()
				})) : S = s._(
					/*BTDS*/
					""
				) : r("WAWebWid").isBroadcast(d) && (S = s._(
					/*BTDS*/
					""
				));
				break;
			case "identity": {
				var D = C && o("WAWebContactCollection").ContactCollection.get(C);
				if (D != null && o("WAWebContactGetters").getIsMe(D)) if (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[formatE2ENotification] self identity notif received"]))).sendLogs("SelfIdentityNotificationError"), r("WAWebWid").isGroup(d)) S = s._(
					/*BTDS*/
					""
				);
				else if (r("WAWebWid").isBroadcast(d)) S = s._(
					/*BTDS*/
					""
				);
				else {
					var x = o("WAWebContactCollection").ContactCollection.get(d), $ = x ? o("WAWebFrontendContactGetters").getFormattedName(x) : o("WAWebWidFormat").widToFormattedUser(d);
					S = s._(
						/*BTDS*/
						"",
						[s._param("name", $)]
					);
				}
				else {
					var P = D ? o("WAWebFrontendContactGetters").getFormattedName(D) : o("WAWebWidFormat").widToFormattedUser(C);
					S = s._(
						/*BTDS*/
						"",
						[s._param("name", P)]
					);
				}
				R = E, L = k, E = v, k = s._(
					/*BTDS*/
					""
				), I = h({
					e2eSubtype: f,
					highlightSurface: y,
					url: o("WAWebFaqUrl").getMDCodeChangeFaqUrl()
				});
				break;
			}
			case "chat_psa": {
				I = g(f, o("WAWebFaqUrl").getWAChatFaqUrl(), y), T = s._(
					/*BTDS*/
					""
				), S = s._(
					/*BTDS*/
					""
				);
				break;
			}
			case "device": {
				b != null || u(0, 56550);
				var N = o("WAWebStateUtils").unproxy(b);
				S = o("WAWebFormatE2ENotificationForDeviceChange").formatE2ENotificationForDeviceChange(N, !0), R = E, L = k;
				var M = N.body ? o("WAWebContactCollection").ContactCollection.get(N.body) : null;
				M != null && o("WAWebContactGetters").getIsMe(M) && (d.isGroup() || d.isBroadcast()) ? (E = void 0, k = void 0) : (E = v, k = s._(
					/*BTDS*/
					""
				)), I = h({
					e2eSubtype: f,
					highlightSurface: y,
					url: o("WAWebFaqUrl").getMDCodeChangeFaqUrl()
				});
				break;
			}
			case "encrypt":
			case "encrypt_now":
			default: {
				var w = o("WAWebContactCollection").ContactCollection.get(d);
				if (I = g(f, o("WAWebPrinaUtils").securityUrl(), y), r("WAWebWid").isGroup(d)) o("WAWebChatGroupUtils").isSupportGroup(o("WAWebFrontendMsgGetters").getChat(b)) ? (S = o("WAWebSupportChatStrings").SupportChatSecurityModalText(), I = h({
					e2eSubtype: f,
					highlightSurface: y,
					linkText: o("WAWebSupportChatStrings").SupportChatLearnMoreLinkText(),
					url: o("WAWebFaqUrl").getSupportChatSafetyFaqUrl()
				})) : S = s._(
					/*BTDS*/
					""
				);
				else if (r("WAWebABPropsSupportGroup")(d.user)) S = o("WAWebSupportChatStrings").SupportChatSecurityModalText(), I = h({
					e2eSubtype: f,
					highlightSurface: y,
					linkText: o("WAWebSupportChatStrings").SupportChatLearnMoreLinkText(),
					url: o("WAWebFaqUrl").getSupportChatSafetyFaqUrl()
				});
				else if (r("WAWebWid").isBroadcast(d)) S = s._(
					/*BTDS*/
					""
				);
				else if (w != null && o("WAWebContactGetters").getIsMe(w)) S = s._(
					/*BTDS*/
					""
				);
				else {
					T = s._(
						/*BTDS*/
						""
					), o("WAWebLimitSharingGatingUtils").isRenderUpdatedDisclosureGatingEnabled() ? S = s._(
						/*BTDS*/
						""
					) : S = s._(
						/*BTDS*/
						""
					);
					break;
				}
			}
		}
		var A = m.jsxs(m.Fragment, { children: [
			S,
			"\xA0",
			I != null && I.type === "inline" && I.link,
			"\xA0"
		] }), F = R != null || L != null, O = I != null && I.type === "button";
		return F && O && o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[WAWebE2EInfoModal] cancel + learn more btn conflict"]))), R = (n = (a = I) == null ? void 0 : a.onClick) != null ? n : R, L = O ? s._(
			/*BTDS*/
			""
		) : L, m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "e2e-info"
			},
			testid: "e2e_info_modal",
			title: T,
			onOK: E,
			okText: k,
			onCancel: R,
			cancelText: L,
			children: A
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e, t, n) {
		var r = y(e, t, n);
		return {
			type: "button",
			onClick: r
		};
	}
	function h(e) {
		var t = e.e2eSubtype, n = e.highlightSurface, o = e.linkText, a = e.url, i = y(t, a, n), l = m.jsx(r("WAWebClickableLink.react"), {
			onClick: i,
			children: o != null ? o : s._(
				/*BTDS*/
				""
			)
		});
		return {
			type: "inline",
			link: l
		};
	}
	function y(e, t, n) {
		return function() {
			_.includes(e) && o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() && n != null && o("WAWebPrivacyHighlightDailyUtils").incrementPrinaDailyCount(n, o("WAWebDailyAggregatedStats").PrinaDailyActionType.DIALOG_SELECT), o("WAWebExternalLink.react").openExternalLink(t);
		};
	}
	l.default = f;
}), 226);

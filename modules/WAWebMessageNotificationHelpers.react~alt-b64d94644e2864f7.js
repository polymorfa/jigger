__d("WAWebMessageNotificationHelpers.react", [
	"WAWebBotGroupGatingUtils",
	"WAWebChangeNumberNotificationBanner.react",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebE2EInfoModal.react",
	"WAWebE2EInfoModalV2.react",
	"WAWebFrontendMsgGetters",
	"WAWebModalManager",
	"WAWebMsgType",
	"WAWebOpenChatWithContactAction",
	"WAWebPrinaUtils",
	"WAWebWamEnumEphemeralSettingEntryPointType",
	"WDSIconIcLockFilled.react",
	"WDSIconWdsIcDisappearingMessages.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.accountLid, n = e.chatId, a = e.e2eSubtype, i = e.msg, l = e.participantJid;
		if (a !== "e2e_identity_unavailable") {
			if (a === "encrypt" && o("WAWebPrinaUtils").shouldShowNewE2eInfoModal(o("WAWebFrontendMsgGetters").getChat(i.unsafe()))) {
				var u = o("WAWebPrinaUtils").securityUrl();
				o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebE2EInfoModalV2.react").E2eInfoModalV2, {
					highlightSurface: o("WAWebPrinaUtils").getHighlightSurfaceForGoldenBox(n),
					url: u,
					chat: o("WAWebFrontendMsgGetters").getChat(i.unsafe())
				}));
				return;
			}
			if (a === "group_transition_to_tee_bot_group" && o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()) {
				var c = o("WAWebPrinaUtils").securityUrl();
				o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebE2EInfoModalV2.react").E2eInfoModalV2, {
					highlightSurface: o("WAWebPrinaUtils").getHighlightSurfaceForGoldenBox(n),
					url: c,
					chat: o("WAWebFrontendMsgGetters").getChat(i.unsafe())
				}));
				return;
			}
			var d = a === "encrypt" ? o("WAWebPrinaUtils").getHighlightSurfaceForGoldenBox(n) : void 0;
			o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebE2EInfoModal.react"), {
				highlightSurface: d,
				e2eSubtype: a,
				jid: l,
				chatId: n,
				msg: i,
				accountLid: t
			}));
		}
	}
	function c(e, t) {
		o("WAWebChangeNumberNotificationBanner.react").onChangeNumberNotificationClick(e, t);
	}
	function d(e) {
		o("WAWebCmd").Cmd.ephemeralDrawer(e, !1, o("WAWebWamEnumEphemeralSettingEntryPointType").EPHEMERAL_SETTING_ENTRY_POINT_TYPE.SYSTEM_MESSAGE);
	}
	function m() {
		return s.jsx("div", {
			className: "x1rg5ohu x2fvf9 xg49k01",
			children: s.jsx(r("WDSIconWdsIcDisappearingMessages.react"), {
				height: 16,
				width: 16
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.msg;
		if (t.subtype === "encrypt" || t.subtype === "encrypt_now") return s.jsx("div", {
			className: "x1rg5ohu x1gslohp x2fvf9 x16dsc37 xhslqc4",
			children: s.jsx(r("WDSIconIcLockFilled.react"), {
				width: 12,
				height: 12
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.msg;
		if (t.subtype === "group_transition_to_tee_bot_group") return s.jsx("div", {
			className: "x1rg5ohu x1gslohp x2fvf9 x16dsc37 xhslqc4",
			children: s.jsx(r("WDSIconIcLockFilled.react"), {
				width: 12,
				height: 12
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	var f = new Set([
		"blue_msg_bsp_fb_unverified",
		"blue_msg_bsp_fb_verified",
		"blue_msg_bsp_premise_unverified",
		"blue_msg_bsp_premise_verified",
		"blue_msg_self_fb_unverified",
		"blue_msg_self_fb_verified"
	]);
	function g(e, t) {
		return e === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE && f.has(t);
	}
	function h(e) {
		o("WAWebOpenChatWithContactAction").openChatWithContact(e, "changeLidNotification", o("WAWebChatEntryPoint").ChatEntryPoint.Notification);
	}
	l.handleSecurityClick = u, l.handleChangeNumberClick = c, l.handleEphemeralClick = d, l.renderDisappearingIcon = m, l.E2ENotificationIcon = p, l.TeeBotE2ENotificationIcon = _, l.showInfoIcon = g, l.handleChangeLidClick = h;
}), 98);

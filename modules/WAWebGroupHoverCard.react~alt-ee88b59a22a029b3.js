__d("WAWebGroupHoverCard.react", [
	"fbt",
	"WALogger",
	"WAWebBotUtils",
	"WAWebChatCollection",
	"WAWebChatGroupUtils",
	"WAWebChatlistUtils",
	"WAWebCmd",
	"WAWebContactGetters",
	"WAWebDetailImage.react",
	"WAWebEnvironment",
	"WAWebFindChatAction",
	"WAWebFrontendContactGetters",
	"WAWebName.react",
	"WAWebNoop",
	"WAWebStreamModel",
	"WAWebTeeLockBadge.react",
	"WAWebVoipStartCall",
	"WAWebWamEnumCallFromUi",
	"WAWebWamEnumLobbyEntryPointType",
	"WDSActionTile.react",
	"WDSActionTileGroup.react",
	"WDSIconIcCall.react",
	"WDSIconIcVideocam.react",
	"WDSIconWdsIcChat.react",
	"WDSText.react",
	"react",
	"useWAWebContactValues",
	"useWAWebVoipIsCallingEnabledAndInited"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useCallback, m = 80;
	function p(e) {
		var t = e.chatWid, n = e.contact, a = e.onMouseEnter, i = e.onMouseLeave, l = e.source, u = l === void 0 ? "groupChatProfilePicture" : l, p = d(function() {
			return o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(n.id, "participant_click");
		}, [n.id]), f = d(function() {
			var e = p();
			e != null && o("WAWebFindChatAction").findOrCreateLatestChat(e, u).then(function(e) {
				var n = e.chat;
				if (n != null) {
					var r, a = t != null && (r = o("WAWebChatCollection").ChatCollection.get(t)) != null ? r : void 0;
					o("WAWebCmd").Cmd.chatInfoDrawer(n, a != null ? { sourceGroupChatOrNewsletter: a } : void 0);
				}
			}).catch(r("WAWebNoop"));
		}, [
			p,
			t,
			u
		]), g = o("useWAWebContactValues").useContactValues(n.id, [o("WAWebContactGetters").getNotifyName]), h = g[0], y = h != null ? "~" + h : null, C = s._(
			/*BTDS*/
			""
		), b = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(n.id), v = c.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: n.id,
			size: m,
			loadAnimation: !1,
			onClick: f,
			ariaLabel: C,
			tabIndex: 0
		});
		return c.jsxs("div", {
			className: "x1280gxy xlr9sxt xvvg52n xwd4zgb xq8v1ta x1o3a1rn x1p57kb1 xvpt6g3 xdx6fka xvtqlqk x1dz1jew",
			"data-testid": "group-hover-card",
			role: "group",
			onMouseEnter: a,
			onMouseLeave: i,
			children: [
				c.jsx("div", {
					className: "x1ypdohk x78zum5 xl56j7k xcytdqz",
					children: b ? c.jsx(r("WAWebTeeLockBadge.react"), {
						size: "medium",
						children: v
					}) : v
				}),
				c.jsxs("div", {
					className: "x6s0dn4 x78zum5 xdt5ytf x1dbijih x1ned7t2 x2b8uid",
					children: [c.jsx(r("WDSText.react"), {
						type: "Body1Emphasized",
						colorName: "contentDefault",
						children: c.jsx(o("WAWebName.react").Name, {
							contact: n,
							useLiftMeUp: !1,
							breakWord: !0,
							checkmarkLarge: !0
						})
					}), y != null && c.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: y
					})]
				}),
				c.jsx("div", {
					className: "x78zum5 xl56j7k x1de0gy",
					children: c.jsx(_, {
						contact: n,
						getContactId: p
					})
				})
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(t) {
		var n = t.contact, a = t.getContactId, i = o("useWAWebVoipIsCallingEnabledAndInited").useWAWebVoipIsCallingEnabledAndInited(), l = i.inited, u = d(function() {
			var e = a();
			e != null && o("WAWebChatlistUtils").openOrCreateLatestChat(e).catch(r("WAWebNoop"));
		}, [a]), m = d(function(t) {
			var n = a();
			n != null && (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: hover card: start 1:1 call, isVideo: ", ""])), t).sendLogs("hover-card-start-call"), o("WAWebVoipStartCall").startWAWebVoipCall(n, t, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CONTACT_INFO, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED).catch(r("WAWebNoop")));
		}, [a]), p = o("WAWebFrontendContactGetters").getIsContactBlocked(n), _ = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(n.id), f = (r("WAWebEnvironment").isWindows || l) && !p && !n.id.isBot() && o("WAWebStreamModel").Stream.displayInfo === o("WAWebStreamModel").StreamInfo.NORMAL, g = c.jsx(r("WDSActionTile.react"), {
			Icon: r("WDSIconWdsIcChat.react"),
			onPress: u,
			disabled: _,
			tooltip: s._(
				/*BTDS*/
				""
			),
			label: s._(
				/*BTDS*/
				""
			),
			testid: "hover-card-message-button"
		}, "message");
		return f ? c.jsxs(r("WDSActionTileGroup.react"), { children: [
			g,
			c.jsx(r("WDSActionTile.react"), {
				Icon: r("WDSIconIcVideocam.react"),
				onPress: function() {
					return m(!0);
				},
				label: s._(
					/*BTDS*/
					""
				),
				testid: "hover-card-video-button"
			}, "video"),
			c.jsx(r("WDSActionTile.react"), {
				Icon: r("WDSIconIcCall.react"),
				onPress: function() {
					return m(!1);
				},
				label: s._(
					/*BTDS*/
					""
				),
				testid: "hover-card-voice-button"
			}, "voice")
		] }) : g;
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = p;
}), 226);

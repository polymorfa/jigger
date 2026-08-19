__d("WAWebViewOnceSunset.react", [
	"fbt",
	"WAWebChatGetters",
	"WAWebChatThreadLogging",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFrontendMsgGetters",
	"WAWebMessageSpacerText.react",
	"WAWebMessageTextBubble.react",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebStateUtils",
	"WAWebViewOnceScreenshotActionsWamEvent",
	"WAWebViewOnceSunsetIcon.react",
	"WAWebWamEnumVoMessageType",
	"WAWebWamEnumVoSsAction",
	"WDSTextualLink.react",
	"react",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = e.displayType, a = e.msg, i = o("useWAWebMsgValues").useMsgValues(a.id, [
			(t = o("WAWebMsgGetters")).getIsSentByMe,
			t.getIsGroupMsg,
			o("WAWebFrontendMsgGetters").getSenderObj,
			t.getSubtype,
			t.getType
		]), l = i[0], c = i[1], d = i[2], m = i[3], p = i[4], _ = o("WAWebFrontendMsgGetters").getChat(a.unsafe()), f = function() {
			var e = async function() {
				var e = o("WAWebFaqUrl").getViewOnceScreenshotProtectionUrl(), t;
				switch (p) {
					case o("WAWebMsgType").MSG_TYPE.IMAGE:
						t = o("WAWebWamEnumVoMessageType").VO_MESSAGE_TYPE.PHOTO;
						break;
					case o("WAWebMsgType").MSG_TYPE.VIDEO:
						t = o("WAWebWamEnumVoMessageType").VO_MESSAGE_TYPE.VIDEO;
						break;
					case o("WAWebMsgType").MSG_TYPE.PTT:
						t = o("WAWebWamEnumVoMessageType").VO_MESSAGE_TYPE.PTT;
						break;
				}
				var n = o("WAWebChatGetters").getIsGroup(_), r = await o("WAWebChatThreadLogging").getChatThreadID(_.id.toJid()), a = new (o("WAWebViewOnceScreenshotActionsWamEvent")).ViewOnceScreenshotActionsWamEvent({
					isAGroup: n,
					threadId: r,
					voMessageType: t,
					voSsAction: o("WAWebWamEnumVoSsAction").VO_SS_ACTION.PLACEHOLDER_MESSAGE_LEARN_MORE_TAP
				});
				a.commit(), o("WAWebExternalLink.react").openExternalLink(e);
			};
			e();
		}, g = u.jsx(r("WDSTextualLink.react"), {
			testid: "view-once-sunset-learn-more",
			onClick: f,
			children: r("WAWebFbtCommon")("Learn more")
		}), h;
		switch (p) {
			case o("WAWebMsgType").MSG_TYPE.IMAGE:
				h = s._(
					/*BTDS*/
					"",
					[s._param("learn-more-link", g)]
				);
				break;
			case o("WAWebMsgType").MSG_TYPE.VIDEO:
				h = s._(
					/*BTDS*/
					"",
					[s._param("learn-more-link", g)]
				);
				break;
			case o("WAWebMsgType").MSG_TYPE.PTT:
				h = s._(
					/*BTDS*/
					"",
					[s._param("learn-more-link", g)]
				);
				break;
		}
		return u.jsx(r("WAWebMessageTextBubble.react"), {
			msg: o("WAWebStateUtils").unproxy(a),
			displayAuthor: !0,
			displayType: n,
			children: u.jsxs("div", {
				className: "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1k4tb9n xd4r4e8 x1vvkbs x1n2onr6",
				children: [u.jsx("div", {
					className: "x1okw0bk x7r5mf7 x1xegmmw xjpr12u x1lziwak",
					children: u.jsx(o("WAWebViewOnceSunsetIcon.react").ViewOnceSunsetIcon, {})
				}), u.jsx("div", {
					className: "x7r5mf7 x13m54ha",
					children: u.jsx(r("WAWebMessageSpacerText.react"), {
						msg: a.unsafe(),
						theme: "placeholder",
						children: h
					})
				})]
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

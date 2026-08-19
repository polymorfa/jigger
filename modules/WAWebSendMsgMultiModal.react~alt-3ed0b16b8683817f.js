__d("WAWebSendMsgMultiModal.react", [
	"fbt",
	"WALogger",
	"WATimeUtils",
	"WAWebAttachMediaCollection",
	"WAWebBizBroadcastDeviceCapabilityCommon",
	"WAWebBlockContactAction",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebBusinessBroadcastsGatingUtils",
	"WAWebChatEntryPoint",
	"WAWebChatGetters",
	"WAWebCmd",
	"WAWebComposeBoxActions",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebSelectModal.react",
	"WAWebSendMsgCreateBroadcastButton.react",
	"WAWebSendTextMsgChatAction",
	"WAWebServerPropConstants",
	"isStringNullOrEmpty",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useEffect;
	async function m(e) {
		if (o("WAWebChatGetters").getIsUser(e) && e.contact.isContactBlocked) return o("WAWebBlockContactAction").unblockContact(e.contact);
	}
	function p(t) {
		var n, a, i, l = t.attachments, u = t.msgText, p = t.urlText, _ = (n = l == null ? void 0 : l.length) != null ? n : 0;
		d(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.sendMsgMultiModalViewed(_);
		}, [_]);
		var f = async function(n) {
			var t = n.selectedItems, a = t;
			o("WAWebMobilePlatforms").isSMB() && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.sendMsgMultiModalConfirmed(_);
			var i = u;
			if (a.length === 1) {
				var s = a[0];
				await m(s).then(async function(e) {
					var t = function() {
						r("isStringNullOrEmpty")(i) || o("WAWebComposeBoxActions").ComposeBoxActions.paste(s, i), l != null && l.length > 0 && o("WAWebComposeBoxActions").ComposeBoxActions.pasteFiles(s, l);
					}, n = function() {
						if (l != null && l.length > 0) {
							var e = new (r("WAWebAttachMediaCollection"))({ chatParticipantCount: s.getParticipantCount() }), t = l.map(function(e) {
								return {
									file: e,
									filename: e.name,
									mimetype: e.type
								};
							});
							e.processAttachmentsForChat(t, void 0, s).catch(r("WAWebNoop")), s.setAttachMediaContents(e);
						}
					}, a = async function() {
						var e = await o("WAWebCmd").Cmd.openChatFromUnread({
							chat: s,
							chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.SendMessage
						});
						e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(s);
					};
					if (r("isStringNullOrEmpty")(i) || (s.urlText = p), s.active) {
						t();
						return;
					}
					r("isStringNullOrEmpty")(i) || s.setComposeContents({
						text: i,
						timestamp: o("WATimeUtils").unixTime()
					}), n(), await a();
				});
			} else Promise.all(a.map(function(e) {
				return m(e).then(function(t) {
					return e.urlText = p, o("WAWebSendTextMsgChatAction").sendTextMsgToChat(e, i);
				});
			})), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handleConfirmed inside WAWebSendMsgMultiModal for ", " chats"])), a.length), await o("WAWebCmd").Cmd.openChatFromUnread({
				chat: a[0],
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.SendMessage
			});
			o("WAWebModalManager").ModalManager.close();
		};
		return c.jsx(o("WAWebSelectModal.react").SelectModal, {
			onConfirm: f,
			maxItems: o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL,
			headerRightActionElement: ((a = l == null ? void 0 : l.length) != null ? a : 0) <= 1 && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastContextualEntrypointsEnabled() && o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported() ? c.jsx(r("WAWebSendMsgCreateBroadcastButton.react"), {
				attachment: (i = l == null ? void 0 : l[0]) != null ? i : null,
				msgText: u,
				urlText: p
			}) : void 0,
			title: s._(
				/*BTDS*/
				""
			),
			listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
			tsNavigationData: {
				surface: "unknown",
				viewName: "send-message-multi"
			}
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);

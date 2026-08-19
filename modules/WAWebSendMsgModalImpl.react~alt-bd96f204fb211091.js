__d("WAWebSendMsgModalImpl.react", [
	"fbt",
	"WALogger",
	"WAWebAttachMediaCollection",
	"WAWebBlockContactAction",
	"WAWebChatEntryPoint",
	"WAWebChatGetters",
	"WAWebCmd",
	"WAWebFindChatAction",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebSelectModal.react",
	"WAWebSendMsgAttachmentPreview.react",
	"WAWebSendTextMsgChatAction",
	"WAWebServerPropConstants",
	"WAWebWidFactory",
	"isStringNullOrEmpty",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = d.useState;
	async function f(e) {
		if (o("WAWebChatGetters").getIsUser(e) && e.contact.isContactBlocked) return o("WAWebBlockContactAction").unblockContact(e.contact);
	}
	function g(t) {
		var n, a, i = t.attachments, l = t.msgText, u = t.preSelectedContactLid, d = t.urlText, g = _(null), h = g[0], y = g[1], C = _(null), b = C[0], v = C[1], S = p(!1), R = function(t) {
			y(t);
		};
		m(function() {
			if (u != null && u !== "") try {
				var e = o("WAWebWidFactory").createWid(u);
				o("WAWebFindChatAction").findOrCreateLatestChat(e, "newChatFlow").then(function(e) {
					var t = e.chat;
					v(t);
				}).catch(r("WAWebNoop"));
			} catch (e) {}
		}, [u]);
		var L = async function(n) {
			var t = n.selectedItems, a = t;
			if (!S.current) {
				S.current = !0;
				var s = l;
				if (h != null && h !== "" && (s != null && s !== "" ? s = s + `
` + h : s = h), a.length === 1) {
					var u = a[0];
					await f(u).then(async function(e) {
						if (r("isStringNullOrEmpty")(s) || (u.urlText = d, await o("WAWebSendTextMsgChatAction").sendTextMsgToChat(u, s)), i != null && i.length > 0) {
							var t = new (r("WAWebAttachMediaCollection"))({ chatParticipantCount: u.getParticipantCount() });
							await t.processAttachmentsForChat(i.map(function(e) {
								return {
									file: e,
									filename: e.name,
									mimetype: e.type
								};
							}), void 0, u);
							var n = [];
							t.forEach(function(e) {
								e.previewable && n.push(e.sendToChat({
									chat: u,
									options: {
										caption: e.caption || "",
										mentionedJidList: [],
										groupMentions: []
									}
								}));
							}), await Promise.all(n);
						}
						await o("WAWebCmd").Cmd.openChatFromUnread({
							chat: u,
							chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.SendMessage
						});
					});
				} else await Promise.all(a.map(async function(e) {
					if (await f(e), r("isStringNullOrEmpty")(s) || (e.urlText = d, await o("WAWebSendTextMsgChatAction").sendTextMsgToChat(e, s)), i != null && i.length > 0) {
						var t = new (r("WAWebAttachMediaCollection"))({ chatParticipantCount: e.getParticipantCount() });
						await t.processAttachmentsForChat(i.map(function(e) {
							return {
								file: e,
								filename: e.name,
								mimetype: e.type
							};
						}), void 0, e);
						var n = [];
						t.forEach(function(t) {
							t.previewable && n.push(t.sendToChat({
								chat: e,
								options: {
									caption: t.caption || "",
									mentionedJidList: [],
									groupMentions: []
								}
							}));
						}), await Promise.all(n);
					}
				})), r("isStringNullOrEmpty")(s) || o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handleConfirmed inside WAWebSendMsgModalImpl for ", " chats"])), a.length), await o("WAWebCmd").Cmd.openChatFromUnread({
					chat: a[0],
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.SendMessage
				});
				o("WAWebModalManager").ModalManager.close();
			}
		}, E = i != null && i.length > 0 ? c.jsx("div", {
			className: "x11uqc5h xv32h1t xh8yej3 x1od0jb8 x9f619 xpx74rz",
			children: c.jsx(r("WAWebSendMsgAttachmentPreview.react"), {
				attachments: i,
				onAppendMessage: R
			})
		}) : null;
		return c.jsx(o("WAWebSelectModal.react").SelectModal, {
			onConfirm: L,
			maxItems: o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL,
			title: s._(
				/*BTDS*/
				""
			),
			listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
			hasDirtyAppendMsgComposeBox: h != null && h !== "",
			shouldShowSelectedChatList: !0,
			previewComponent: E,
			tsNavigationData: {
				surface: "unknown",
				viewName: "send-message"
			},
			getInitialItems: function() {
				return b ? [b] : [];
			}
		}, (n = b == null || (a = b.id) == null ? void 0 : a.toString()) != null ? n : "no-preselection");
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);

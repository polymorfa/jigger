__d("WAWebSendTextFlow.react", [
	"fbt",
	"$InternalEnum",
	"WALogger",
	"WATimeUtils",
	"WAWebBlockContactAction",
	"WAWebChatEntryPoint",
	"WAWebChatGetters",
	"WAWebCmd",
	"WAWebComposeBoxActions",
	"WAWebDrawerManager",
	"WAWebFrontendConstants",
	"WAWebSelectModal.react",
	"WAWebSelectModalFooter.react",
	"WAWebSendTextMsgChatAction",
	"WAWebServerPropConstants",
	"WAWebTextMessageModal.react",
	"WAWebUiIdleEventBus",
	"WAWebUserPrefsMeUser",
	"WAWebWid",
	"react",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useMemo, _ = d.useRef, f = n("$InternalEnum").Mirrored(["Select", "TextMessage"]);
	function g(t) {
		var n = t.alwaysShowComposeModal, a = t.ariaLabel, i = t.excludeMe, l = t.linkPreview, u = t.onSend, d = t.origin, g = t.text, h = t.title, y = o("useWAWebFlow").useFlow(f.Select), C = y[0], b = y[1], v = _([]), S = _([]), R = m(function(e) {
			return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
		}, []), L = m(function(e) {
			return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
		}, []), E = async function(t) {
			o("WAWebChatGetters").getIsUser(t) && t.contact.isContactBlocked && await o("WAWebBlockContactAction").unblockContact(t.contact);
		}, k = p(function() {
			if (d != null && r("WAWebWid").isNewsletter(d)) return {
				surface: "channel-forward",
				extras: { channelWid: d }
			};
		}, [d]);
		if (b.step == null) return null;
		var I;
		switch (b.step) {
			case f.Select: {
				var T = async function(t, n) {
					await E(t), t.active ? o("WAWebComposeBoxActions").ComposeBoxActions.paste(t, n) : (t.setComposeContents({
						text: n,
						timestamp: o("WATimeUtils").unixTime()
					}), o("WAWebCmd").Cmd.openChatFromUnread({
						chat: t,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.SendMessage
					}).then(function(e) {
						e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
					}));
				}, D = d != null && r("WAWebWid").isNewsletter(d), x = async function(t) {
					var e = t.selectedItems, r = e;
					if (S.current = r, r.length === 1 && !D && n !== !0) {
						var a = r[0];
						await T(a, g), b.end(), window.innerWidth <= o("WAWebFrontendConstants").LAYOUT_2COLUMNS_MAX_WIDTH && o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
					} else b.push(f.TextMessage);
					u && u();
				}, $ = function() {
					return v.current;
				}, P = function(t) {
					var e = t.selectedItems;
					v.current = e;
				};
				I = c.jsx(o("WAWebSelectModal.react").SelectModal, {
					title: h != null ? h : s._(
						/*BTDS*/
						""
					),
					tsNavigationData: k,
					listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
					getInitialItems: $,
					maxItems: o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL,
					onConfirm: x,
					onCancel: function() {
						return b.end();
					},
					onSelectionChanged: P,
					singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.NEXT,
					multipleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.NEXT,
					chatFilter: i === !0 ? R : void 0,
					contactFilter: i === !0 ? L : void 0
				});
				break;
			}
			case f.TextMessage: {
				var N = function(n) {
					var t = n.chats, r = n.linkPreview, a = n.text;
					t.forEach(async function(t) {
						await E(t), o("WAWebUiIdleEventBus").UiIdleEventBus.once("ui_idle", function() {
							o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handleSend inside WAWebSendTextFlow"]))), o("WAWebSendTextMsgChatAction").sendTextMsgToChat(t, a, { linkPreview: r != null ? r : l });
						});
					}), b.end();
				};
				I = c.jsx(r("WAWebTextMessageModal.react"), {
					ariaLabel: a,
					defaultText: g,
					title: h != null ? h : s._(
						/*BTDS*/
						""
					),
					onSend: function(t, n) {
						return N({
							chats: S.current,
							linkPreview: n,
							text: t
						});
					},
					onBack: function() {
						return b.pop();
					}
				});
				break;
			}
		}
		return c.jsx(C, {
			flow: b,
			children: I
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);

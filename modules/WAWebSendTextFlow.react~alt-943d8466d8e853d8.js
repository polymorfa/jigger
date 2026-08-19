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
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useMemo, _ = d.useRef, f = n("$InternalEnum").Mirrored(["Select", "TextMessage"]);
	function g(t) {
		var a = t.alwaysShowComposeModal, i = t.ariaLabel, l = t.excludeMe, u = t.linkPreview, d = t.onSend, g = t.origin, h = t.text, y = t.title, C = o("useWAWebFlow").useFlow(f.Select), b = C[0], v = C[1], S = _([]), R = _([]), L = m(function(e) {
			return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
		}, []), E = m(function(e) {
			return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
		}, []), k = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				o("WAWebChatGetters").getIsUser(e) && e.contact.isContactBlocked && (yield o("WAWebBlockContactAction").unblockContact(e.contact));
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), I = p(function() {
			if (g != null && r("WAWebWid").isNewsletter(g)) return {
				surface: "channel-forward",
				extras: { channelWid: g }
			};
		}, [g]);
		if (v.step == null) return null;
		var T;
		switch (v.step) {
			case f.Select: {
				var D = (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
						yield k(e), e.active ? o("WAWebComposeBoxActions").ComposeBoxActions.paste(e, t) : (e.setComposeContents({
							text: t,
							timestamp: o("WATimeUtils").unixTime()
						}), o("WAWebCmd").Cmd.openChatFromUnread({
							chat: e,
							chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.SendMessage
						}).then(function(t) {
							t && o("WAWebComposeBoxActions").ComposeBoxActions.focus(e);
						}));
					});
					return function(n, r) {
						return e.apply(this, arguments);
					};
				})(), x = g != null && r("WAWebWid").isNewsletter(g), $ = (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						var t = e.selectedItems, n = t;
						if (R.current = n, n.length === 1 && !x && a !== !0) {
							var r = n[0];
							yield D(r, h), v.end(), window.innerWidth <= o("WAWebFrontendConstants").LAYOUT_2COLUMNS_MAX_WIDTH && o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
						} else v.push(f.TextMessage);
						d && d();
					});
					return function(n) {
						return e.apply(this, arguments);
					};
				})(), P = function() {
					return S.current;
				}, N = function(t) {
					var e = t.selectedItems;
					S.current = e;
				};
				T = c.jsx(o("WAWebSelectModal.react").SelectModal, {
					title: y != null ? y : s._(
						/*BTDS*/
						""
					),
					tsNavigationData: I,
					listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
					getInitialItems: P,
					maxItems: o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL,
					onConfirm: $,
					onCancel: function() {
						return v.end();
					},
					onSelectionChanged: N,
					singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.NEXT,
					multipleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.NEXT,
					chatFilter: l === !0 ? L : void 0,
					contactFilter: l === !0 ? E : void 0
				});
				break;
			}
			case f.TextMessage: {
				var M = function(r) {
					var t = r.chats, a = r.linkPreview, i = r.text;
					t.forEach((function() {
						var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
							yield k(t), o("WAWebUiIdleEventBus").UiIdleEventBus.once("ui_idle", function() {
								o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handleSend inside WAWebSendTextFlow"]))), o("WAWebSendTextMsgChatAction").sendTextMsgToChat(t, i, { linkPreview: a != null ? a : u });
							});
						});
						return function(e) {
							return t.apply(this, arguments);
						};
					})()), v.end();
				};
				T = c.jsx(r("WAWebTextMessageModal.react"), {
					ariaLabel: i,
					defaultText: h,
					title: y != null ? y : s._(
						/*BTDS*/
						""
					),
					onSend: function(t, n) {
						return M({
							chats: R.current,
							linkPreview: n,
							text: t
						});
					},
					onBack: function() {
						return v.pop();
					}
				});
				break;
			}
		}
		return c.jsx(b, {
			flow: v,
			children: T
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);

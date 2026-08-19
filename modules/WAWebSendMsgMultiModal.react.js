__d("WAWebSendMsgMultiModal.react", [
	"fbt",
	"Promise",
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
	"asyncToGeneratorRuntime",
	"isStringNullOrEmpty",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c.useEffect;
	function p(e) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			if (o("WAWebChatGetters").getIsUser(e) && e.contact.isContactBlocked) return o("WAWebBlockContactAction").unblockContact(e.contact);
		}), _.apply(this, arguments);
	}
	function f(t) {
		var a, i, l, c = t.attachments, _ = t.msgText, f = t.urlText, g = (a = c == null ? void 0 : c.length) != null ? a : 0;
		m(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.sendMsgMultiModalViewed(g);
		}, [g]);
		var h = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var a = t.selectedItems, i = a;
				o("WAWebMobilePlatforms").isSMB() && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.sendMsgMultiModalConfirmed(g);
				var l = _;
				if (i.length === 1) {
					var s = i[0];
					yield p(s).then((function() {
						var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
							var t = function() {
								r("isStringNullOrEmpty")(l) || o("WAWebComposeBoxActions").ComposeBoxActions.paste(s, l), c != null && c.length > 0 && o("WAWebComposeBoxActions").ComposeBoxActions.pasteFiles(s, c);
							}, a = function() {
								if (c != null && c.length > 0) {
									var e = new (r("WAWebAttachMediaCollection"))({ chatParticipantCount: s.getParticipantCount() }), t = c.map(function(e) {
										return {
											file: e,
											filename: e.name,
											mimetype: e.type
										};
									});
									e.processAttachmentsForChat(t, void 0, s).catch(r("WAWebNoop")), s.setAttachMediaContents(e);
								}
							}, i = (function() {
								var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
									var e = yield o("WAWebCmd").Cmd.openChatFromUnread({
										chat: s,
										chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.SendMessage
									});
									e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(s);
								});
								return function() {
									return e.apply(this, arguments);
								};
							})();
							if (r("isStringNullOrEmpty")(l) || (s.urlText = f), s.active) {
								t();
								return;
							}
							r("isStringNullOrEmpty")(l) || s.setComposeContents({
								text: l,
								timestamp: o("WATimeUtils").unixTime()
							}), a(), yield i();
						});
						return function(t) {
							return e.apply(this, arguments);
						};
					})());
				} else (u || (u = n("Promise"))).all(i.map(function(e) {
					return p(e).then(function(t) {
						return e.urlText = f, o("WAWebSendTextMsgChatAction").sendTextMsgToChat(e, l);
					});
				})), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handleConfirmed inside WAWebSendMsgMultiModal for ", " chats"])), i.length), yield o("WAWebCmd").Cmd.openChatFromUnread({
					chat: i[0],
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.SendMessage
				});
				o("WAWebModalManager").ModalManager.close();
			});
			return function(n) {
				return t.apply(this, arguments);
			};
		})();
		return d.jsx(o("WAWebSelectModal.react").SelectModal, {
			onConfirm: h,
			maxItems: o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL,
			headerRightActionElement: ((i = c == null ? void 0 : c.length) != null ? i : 0) <= 1 && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastContextualEntrypointsEnabled() && o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported() ? d.jsx(r("WAWebSendMsgCreateBroadcastButton.react"), {
				attachment: (l = c == null ? void 0 : c[0]) != null ? l : null,
				msgText: _,
				urlText: f
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
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);

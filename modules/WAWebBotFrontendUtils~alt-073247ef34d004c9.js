__d("WAWebBotFrontendUtils", [
	"fbt",
	"WALogger",
	"WATimeUtils",
	"WAWebAiThreadCollection",
	"WAWebAiThreadCreationUtils",
	"WAWebAiThreadModel",
	"WAWebAiThreadTypeUtils",
	"WAWebBotGating",
	"WAWebBotLogging",
	"WAWebBotUtils",
	"WAWebCmd",
	"WAWebComposeBoxActions",
	"WAWebContactCollection",
	"WAWebFindChatAction",
	"WAWebFrontendMsgGetters",
	"WAWebMaybeGetAiThreadInfo",
	"WAWebMultiSelectChatListTypes",
	"WAWebPttComposerRecordingStopReason",
	"WAWebResolveThreadForEntryPoint",
	"WAWebRichResponseMsgUtils",
	"WAWebSendTextMsgChatAction"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d;
	async function m(e) {
		var t = await D(), n = await o("WAWebCmd").Cmd.openChatFromUnread({
			chat: t,
			chatEntryPoint: e
		});
		return n ? (o("WAWebComposeBoxActions").ComposeBoxActions.focus(t), o("WAWebCmd").Cmd.scrollToActiveChat(), t) : null;
	}
	async function p(e, t) {
		if (o("WAWebBotGating").isAiChatThreadsEnabled()) {
			var n = await D();
			T(n, {
				type: "MetaAiSearchSuggestion",
				query: e
			});
		} else {
			var r = await m(t);
			if (r == null) return;
			o("WAWebSendTextMsgChatAction").sendTextMsgToChat(r, e);
		}
	}
	function _() {
		return "";
	}
	function f(e) {
		var t, n = o("WAWebFrontendMsgGetters").getAsRichResponse(e);
		return n != null ? o("WAWebRichResponseMsgUtils").getRichResponseBodyLength(n.richResponse) : (t = e.body) == null ? void 0 : t.length;
	}
	function g(e) {
		var t, n = e.msgs;
		return n.length === 0 || n.length === 1 && ((t = n.last()) == null ? void 0 : t.subtype) === "bot_init";
	}
	function h(e, t) {
		return e.length ? e.find(function(e) {
			return t(e).equals(o("WAWebBotUtils").META_BOT_PN_WID);
		}) || e[0] : null;
	}
	function y(e, t) {
		var n = e.filter(function(e) {
			return o("WAWebBotUtils").isMetaAiBot(e.id);
		}), r = h(n, function(e) {
			return e.id;
		});
		if (r != null) return {
			itemKey: r.id.toString(),
			type: o("WAWebMultiSelectChatListTypes").Row.ROW_CHATS,
			data: r
		};
		var a = t.filter(function(e) {
			return o("WAWebBotUtils").isMetaAiBot(e.id);
		}), i = h(a, function(e) {
			return e.id;
		});
		return i != null ? {
			itemKey: i.id.toString(),
			type: o("WAWebMultiSelectChatListTypes").Row.ROW_CONTACTS,
			data: i
		} : null;
	}
	function C() {
		var e;
		return (e = o("WAWebContactCollection").ContactCollection.get(o("WAWebBotUtils").META_BOT_FBID_WID)) != null ? e : o("WAWebContactCollection").ContactCollection.get(o("WAWebBotUtils").META_BOT_PN_WID);
	}
	function b() {
		return o("WAWebContactCollection").ContactCollection.get(o("WAWebBotUtils").HATCH_BOT_FBID_WID);
	}
	function v(e, t) {
		var n = e.find(function(e) {
			return o("WAWebBotUtils").isHatchBot(e.id);
		});
		if (n != null) return {
			itemKey: n.id.toString(),
			type: o("WAWebMultiSelectChatListTypes").Row.ROW_CHATS,
			data: n
		};
		var r = t.find(function(e) {
			return o("WAWebBotUtils").isHatchBot(e.id);
		});
		return r != null ? {
			itemKey: r.id.toString(),
			type: o("WAWebMultiSelectChatListTypes").Row.ROW_CONTACTS,
			data: r
		} : null;
	}
	function S(e) {
		switch (e) {
			case o("WAWebBotLogging").BotEntryPointType.Search:
			case o("WAWebBotLogging").BotEntryPointType.Shortcut: return "shortcut";
			case o("WAWebBotLogging").BotEntryPointType.Invoke: return "invoke";
		}
	}
	async function R(e, t) {
		var n, r;
		if (o("WAWebBotGating").isImplicitThreadRoutingEnabled()) n = o("WAWebResolveThreadForEntryPoint").resolveThreadIdForEntryPoint(e), I(e, n), r = null;
		else {
			var a, i, l = (a = e.aiThreads) == null ? void 0 : a.head();
			n = (i = l == null ? void 0 : l.id) != null ? i : E(e), r = l == null ? void 0 : l.creationTimestamp;
		}
		var s = await o("WAWebCmd").Cmd.openChatBottom({
			chat: e,
			chatEntryPoint: t,
			threadId: n
		});
		return s ? {
			threadId: n,
			threadCreationTs: r,
			success: !0
		} : { success: !1 };
	}
	function L(e, t, n) {
		var r;
		o("WAWebBotGating").isImplicitThreadRoutingEnabled() ? (r = o("WAWebResolveThreadForEntryPoint").resolveThreadIdForEntryPoint(e), I(e, r), o("WAWebCmd").Cmd.openChatBottom({
			chat: e,
			chatEntryPoint: n,
			threadId: r
		})) : r = k(e, n);
		var a = o("WAWebMaybeGetAiThreadInfo").maybeGetAiThreadInfo(e, r);
		return o("WAWebSendTextMsgChatAction").sendTextMsgToChat(e, t, {
			threadIds: [r],
			aiThreadInfo: a
		}), r;
	}
	function E(e) {
		o("WAWebPttComposerRecordingStopReason").cancelChatRecordingForThreadSwitch(e);
		var t = o("WAWebAiThreadCreationUtils").createAiThreadId(e.id), n = new (r("WAWebAiThreadModel"))({
			id: t,
			title: void 0,
			aiThreadType: o("WAWebAiThreadTypeUtils").AiThreadType.Default,
			lastMessageTimestamp: o("WATimeUtils").unixTime(),
			unreadCount: 0,
			isPending: !0
		});
		return e.aiThreads == null && (e.aiThreads = new (o("WAWebAiThreadCollection")).AiThreadCollection()), e.aiThreads.add([n]), t;
	}
	function k(e, t) {
		var n = E(e);
		return o("WAWebCmd").Cmd.openChatBottom({
			chat: e,
			chatEntryPoint: t,
			threadId: n
		}), n;
	}
	function I(e, t) {
		if (!(e.aiThreads != null && e.aiThreads.get(t) != null)) {
			var n = new (r("WAWebAiThreadModel"))({
				id: t,
				title: void 0,
				aiThreadType: o("WAWebAiThreadTypeUtils").AiThreadType.Default,
				lastMessageTimestamp: o("WATimeUtils").unixTime(),
				unreadCount: 0,
				isPending: !0
			});
			e.aiThreads == null && (e.aiThreads = new (o("WAWebAiThreadCollection")).AiThreadCollection()), e.aiThreads.add([n]);
		}
	}
	function T(t, n) {
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"[runMetaAiThreadsFlow] called with entryPoint type=",
			", chatId=",
			""
		])), n.type, t.id.toString()), o("WAWebCmd").Cmd.openMetaAiThreadDrawer(t, n);
	}
	async function D() {
		o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[getMetaAiChat] finding chat wid=", ""])), o("WAWebBotUtils").META_BOT_PN_WID.toString());
		try {
			var e = await o("WAWebFindChatAction").findOrCreateLatestChat(o("WAWebBotUtils").META_BOT_PN_WID, "metaBotChatListShortcut"), t = e.chat;
			return o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[getMetaAiChat] success, chatId=", ""])), t.id.toString()), t;
		} catch (e) {
			throw o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[getMetaAiChat] failed with error"]))), e;
		}
	}
	function x() {
		return s._(
			/*BTDS*/
			""
		).toString();
	}
	l.openMetaBotChat = m, l.sendMetaBotQuery = p, l.metaAiLlamaVersionTitleFbs = _, l.getBotMsgBodyLength = f, l.isMetaAiChatEmpty = g, l.maybeGetTopMetaAiRow = y, l.getMetaAiContact = C, l.getHatchContact = b, l.maybeGetTopHatchRow = v, l.getBotNuxOriginType = S, l.openLatestOrNewMetaAiThread = R, l.openMetaAiThreadAndSendQuery = L, l.createNewMetaAiThread = E, l.createAndOpenNewMetaAiThread = k, l.ensureThreadModelExists = I, l.runMetaAiThreadsFlow = T, l.getMetaAiChat = D, l.getMetaAiTEEBotDisplayName = x;
}), 226);

__d("WAWebCheckChatExistsOrCreate", [
	"WALogger",
	"WAWebApiChat",
	"WAWebApiChatCommon",
	"WAWebApiHydrateWidsUtil",
	"WAWebBackendApi",
	"WAWebCreateChat",
	"WAWebCurrentUser",
	"WAWebGhostEphemeralChatSkip",
	"WAWebLid1X1MigrationGating",
	"WAWebMessageLidOriginType",
	"WAWebRuntimeEnvironmentUtils",
	"WAWebUsernameTypes",
	"WAWebWidFactory"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f;
	async function g(e) {
		return o("WAWebRuntimeEnvironmentUtils").isWorker() ? await o("WAWebApiChatCommon").getChatRecord(e) != null : o("WAWebBackendApi").frontendSendAndReceive("hasChat", { chatId: e });
	}
	var h = new Map();
	function y(e) {
		var t = e.chatOriginType, n = e.destinationChat, r = e.initialProps, a = e.msgMeta, i = e.options, l = n.chatId, s = l.isRegularUser() ? o("WAWebMessageLidOriginType").determineLidOriginTypeForIncomingMessage(o("WAWebWidFactory").asUserWidOrThrow(l), a) : null;
		return o("WAWebCreateChat").createChat(n, t, babelHelpers.extends({
			createdLocally: !1,
			lidOriginType: s
		}, r), i);
	}
	function C(e) {
		var t = e.firstIncomingMsg;
		return t != null && o("WAWebGhostEphemeralChatSkip").isSkippableIncomingEphemeralSettingMsg(t);
	}
	async function b(t) {
		var n, r = t.destinationChat, a = r.chatId, i = a.toString();
		if (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"checkChatExistsOrCreate called with chatWid=",
			", accountLid=",
			""
		])), a.toLogString(), (n = r.accountLid) == null ? void 0 : n.toLogString()), o("WAWebCurrentUser").isEmployee()) {
			var l, b;
			o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["checkChatExistsOrCreate: first message id: ", ""])), (l = (b = t.options.firstIncomingMsg) == null ? void 0 : b.id.toString()) != null ? l : "not-passed");
		}
		var v = h.get(i);
		v != null && await v;
		var S = (async function(e, n) {
			var r = await g(a);
			if (r === !0) return h.delete(i), r;
			if (C(t.options)) return o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["checkChatExistsOrCreate: skipping ghost chat creation for ephemeral_setting-only first message ", ""])), a.toLogString()), h.delete(i), r;
			if (a.isLid() && !o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && (t == null || (e = t.initialProps) == null ? void 0 : e.lidOriginType) !== o("WAWebUsernameTypes").LidOriginType.PNH_CTWA && ((n = t.msgMeta) == null ? void 0 : n.origin) !== "ctwa") {
				var l, s;
				o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
					"checkChatExistsOrCreate: chat origin: ",
					". lid origin ",
					", ",
					""
				])), t.chatOriginType, (l = t.msgMeta) == null ? void 0 : l.origin, t == null || (s = t.initialProps) == null ? void 0 : s.lidOriginType), o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
					"checkChatExistsOrCreate: Lid chat not migrated ",
					", ",
					""
				])), a.toLogString(), t.chatOriginType).sendLogs("checkChatExistsOrCreate: asked to create Lid chat but is not migrated");
			}
			try {
				var b;
				o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
					"checkChatExistsOrCreate: creating chat ",
					", ",
					""
				])), a.toLogString(), t == null || (b = t.initialProps) == null ? void 0 : b.lidOriginType), await y(t);
			} catch (e) {
				if (!o("WAWebRuntimeEnvironmentUtils").isWorker() && e instanceof o("WAWebApiChat").CreateChatDuplicateError) {
					var v = await o("WAWebApiChatCommon").getChatRecord(a);
					if (v != null) {
						await o("WAWebBackendApi").frontendFireAndForget("chatCollectionGadd", { chat: babelHelpers.extends({}, o("WAWebApiHydrateWidsUtil").hydrateWids(v), { id: a }) });
						var S = await g(a);
						return S || o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["checkChatExistsOrCreate for ", ", unable to restore chat from DB"])), a.toLogString()).tags("messaging").sendLogs("checkChatExistsOrCreate failed to restore chat", { sampling: .01 }), S;
					}
				}
				e instanceof Error ? o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["checkChatExistsOrCreate for ", ", failed"])), a.toLogString()).catching(e).tags("messaging").sendLogs("checkChatExistsOrCreate failed", { sampling: .01 }) : o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["checkChatExistsOrCreate for ", ", failed"])), a.toLogString()).tags("messaging").sendLogs("checkChatExistsOrCreate failed", { sampling: .01 });
			}
			return h.delete(i), r;
		})();
		return h.set(i, S), S;
	}
	l.doesChatExist = g, l.checkChatExistsOrCreate = b;
}), 98);

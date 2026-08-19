__d("WAWebUpdateMessageUIAction", [
	"WALogger",
	"WATimeUtils",
	"WAWebAck",
	"WAWebAfterReadUtils",
	"WAWebBackendErrors",
	"WAWebCommonMsgUtils",
	"WAWebDBProcessMessage",
	"WAWebHandleForMessageRange",
	"WAWebHandleForMessageRangeEnums",
	"WAWebHandleMsgTypes.flow",
	"WAWebMsgCollection",
	"WAWebMsgGetters",
	"WAWebStatusCollection",
	"getErrorSafe",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	var e, s, u;
	async function c(t) {
		var n = t.chatId, a = t.isOffline, i = a === void 0 ? !1 : a, l = t.messageOverwriteOption, c = l === void 0 ? o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.NO_OVERWRITE : l, d = t.msg, p = t.preserveOrder, _ = p === void 0 ? !0 : p, f = {
			add: "after",
			update: c !== o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.NO_OVERWRITE,
			isHistory: !1
		}, g = !i, h = await o("WAWebHandleForMessageRange").handleForActiveMessageRange(n, d, g);
		if (!h.has(o("WAWebHandleForMessageRangeEnums").ActiveRangeHandlerAction.DropMessage)) {
			var y = h.has(o("WAWebHandleForMessageRangeEnums").ActiveRangeHandlerAction.SkipUI), C = o("WAWebMsgCollection").MsgCollection.get(d.id);
			C && ((o("WAWebCommonMsgUtils").isPlaceholderMsg(C.type) || o("WAWebCommonMsgUtils").isFutureproofMsg(C.type)) && !(o("WAWebCommonMsgUtils").isPlaceholderMsg(d.type) || o("WAWebCommonMsgUtils").isFutureproofMsg(d.type)) || o("WAWebCommonMsgUtils").isQuarantinedMsg(C.type) && !o("WAWebCommonMsgUtils").isQuarantinedMsg(d.type) || o("WAWebCommonMsgUtils").isRichResponseMsg(C.type) && o("WAWebCommonMsgUtils").isSomewhatParsedRichResponseMsg(d) ? f.update = !0 : C.fromQuotedMsg ? o("WAWebMsgCollection").MsgCollection.remove(C) : y = !0);
			try {
				o("WAWebMsgGetters").getIsStatus(d) && o("WAWebStatusCollection").StatusCollection.handleUpdate(d, !1), y || await o("WAWebMsgCollection").MsgCollection.processMultipleMessages(n, [babelHelpers.extends({}, d, {
					recvFresh: !0,
					isNewMsg: !0,
					expiredTimestamp: m(d)
				})], f, "updateMessageUIAction", null, _);
			} catch (t) {
				if (t instanceof o("WAWebBackendErrors").LogoutDrop) return;
				if (t instanceof o("WAWebDBProcessMessage").PreviousMsgNotUpdatableError) {
					o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
						"Msg: ",
						" chat: ",
						" Error: PreviousMsgNotUpdatableError"
					])), String(d.id), String(n));
					return;
				}
				var b = r("getErrorSafe")(t);
				r("gkx")("26258") ? o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
					"Msg: ",
					" chat: ",
					" Error: ",
					", message: ",
					", stack: ",
					""
				])), String(d.id), String(n), b.name, b.message, b.stack).tags("messaging") : o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
					"Msg: ",
					" chat: ",
					" Error: ",
					", message: ",
					", stack: ",
					""
				])), String(d.id), String(n), b.name, b.message, b.stack).tags("messaging").sendLogs("msg_handler for MD: error storing/processing single message");
			}
		}
	}
	async function d(e) {
		var t = o("WAWebMsgCollection").MsgCollection.get(e.id);
		t != null && t.delete();
	}
	function m(e) {
		var t, n = e.afterReadDuration;
		if (n == null || n <= 0 || e.expiredTimestamp != null || !o("WAWebAfterReadUtils").isAfterReadEnabled()) {
			var r;
			return (r = e.expiredTimestamp) != null ? r : null;
		}
		var a = (t = e.t) != null ? t : o("WATimeUtils").unixTime();
		return e.id.fromMe || e.ack != null && e.ack >= o("WAWebAck").ACK.READ ? a + n : o("WAWebMsgGetters").getEphemeralExpirationTimestamp(e);
	}
	l.updateUI = c, l.removePlaceholder = d;
}), 98);

__d("MAWEBUnstoredDbMsgUtils", [
	"EBLogger",
	"MAWHandleEchoProtobufsRestoreApi",
	"MAWMessageSortOrderUtils",
	"WAJids",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("EBLogger").EBLogger().tags(["restore", "MAWEBUnstoredDbMsgUtils"]);
	function u(t, n, a, i) {
		var l = a != null ? a : n != null ? o("WAJids").unsafeCoerceToChatJid(n) : void 0;
		return l == null ? (s.mustfix("threadId and chatJid are both null - cannot convert protobuf to unstoredDbMsg"), []) : o("MAWHandleEchoProtobufsRestoreApi").decodeProtobufArray(t, i, void 0, new Set(), new Set(), new Map(), new Map(), new Map(), !0).map(function(t) {
			var n;
			if ((t == null || (n = t.metadata) == null ? void 0 : n.messageId) != null) try {
				var a = o("MAWHandleEchoProtobufsRestoreApi").createUnstoredDbContentFromProtobufObject(t, l, i, new Map(), void 0);
				if (a != null && a.unstoredDbContent.unstoredDbMsg != null) {
					var u = a.unstoredDbContent.unstoredDbMsg, c = o("MAWMessageSortOrderUtils").generateAuthoritativeMessageSortOrder(u);
					return u.sortOrderMs = c, u;
				}
			} catch (n) {
				var d = r("getErrorSafe")(n);
				s.MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"Failed to convert protobuf to unstored db message: type: ",
					" error: ",
					""
				])), t.msgType, d.message);
			}
			return null;
		}).filter(Boolean);
	}
	l.getUnstoredDbMsgFromProtobuf = u;
}), 98);

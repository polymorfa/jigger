__d("WAWebReactionsParseReactionMessageProto", [
	"WALongInt",
	"WAWebE2EProtoUtils",
	"WAWebMsgType",
	"WAWebReactionsBEUtils",
	"WAWebReactionsValidationError",
	"WAWebWamEnumE2eFailureReason"
], (function(t, n, r, o, a, i, l) {
	var e = 30;
	function s(e) {
		var t = e.baseMessage, n = e.messageProtobuf, r = n.reactionMessage;
		if (r != null) {
			var a = u(r), i = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(r.key, t), l = o("WALongInt").maybeNumberOrThrowIfTooLarge(r.senderTimestampMs);
			if (i == null) throw new (o("WAWebReactionsValidationError")).ReactionValidationError(o("WAWebReactionsValidationError").ReactionValidationErrorCode.MISSING_PARENT_MSG_KEY, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
			if (l == null) throw new (o("WAWebReactionsValidationError")).ReactionValidationError(o("WAWebReactionsValidationError").ReactionValidationErrorCode.MISSING_TIMESTAMP, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
			return {
				msgData: babelHelpers.extends({}, t, {
					type: o("WAWebMsgType").MSG_TYPE.REACTION,
					kind: o("WAWebMsgType").MsgKind.ReactionDecrypted,
					reactionParentKey: i,
					reactionText: a,
					reactionTimestamp: l,
					read: !1
				}),
				contextInfo: null
			};
		}
	}
	function u(t) {
		var n, r = t.text;
		if (r != null && r.length > e) throw new (o("WAWebReactionsValidationError")).ReactionValidationError(o("WAWebReactionsValidationError").ReactionValidationErrorCode.INVALID_REACTION_TEXT_LENGTH, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_REACTION_TEXT);
		return (n = o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(r)) != null ? n : o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT;
	}
	l.default = s;
}), 98);

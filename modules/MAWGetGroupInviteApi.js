__d("MAWGetGroupInviteApi", [
	"MAWDbGroupInviteTxns",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWLowLevelApiTypes",
	"MAWTransactionMode",
	"WAJids",
	"WALogger",
	"WAResultOrError",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = o("MAWIndexedDb").makeMsgrTransactor({
		groupInvites: o("MAWTransactionMode").READONLY,
		threads: o("MAWTransactionMode").READONLY
	}, "getGroupInvite", function(t) {
		return (function(n, r, a) {
			var i = o("WAJids").interpretAsGroupJid(n);
			return i == null ? (o("WALogger").DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose(["getGroupInvite failed to interpret ", " as a group jid"])), n), o("MAWDexieTable").dexieResolve(o("WAResultOrError").makeError(o("MAWLowLevelApiTypes").GET_GROUP_INVITE_ERROR.MISSING_GROUP))) : o("MAWDbGroupInviteTxns").maybeGetGroupInvite(t, i, a).then(function(e) {
				return e == null ? (o("WALogger").DEV(s || (s = babelHelpers.taggedTemplateLiteralLoose(["getGroupInvite did not find the group invite from ", ""])), r), o("WAResultOrError").makeError(o("MAWLowLevelApiTypes").GET_GROUP_INVITE_ERROR.MISSING_GROUP_INVITE)) : o("WATimeUtils").isInFuture(e.inviteExpirationTs) ? o("WAResultOrError").makeResult({
					groupInvite: e,
					groupJid: i
				}) : (o("WALogger").DEV(u || (u = babelHelpers.taggedTemplateLiteralLoose(["getGroupInvite returned an expired group invite from ", ""])), r), o("WAResultOrError").makeError(o("MAWLowLevelApiTypes").GET_GROUP_INVITE_ERROR.EXPIRED_GROUP_INVITE));
			});
		});
	});
	l.getGroupInvite = c;
}), 98);

__d("WAWebDBContactRemoveSoftDeletedUsernames", [
	"WALogger",
	"WAWebBackendApi",
	"WAWebInsertUsernameChangeSystemMsg",
	"WAWebLidAwareContactsDB",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u;
	async function c(t) {
		var n = await r("WAWebLidAwareContactsDB").bulkGet(t.map(function(e) {
			return e.toJid();
		})), a = 0, i = n.reduce(function(e, n, r) {
			return n == null ? (a++, e) : (n.username != null && n.usernameSoftDeleted === !0 && e.push({
				lid: t[r],
				oldUsername: n.username
			}), e);
		}, []);
		if (a > 0 && o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["removeSoftDeletedUsernames: ", " missing contacts"])), a), i.length !== 0) {
			o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["removeSoftDeletedUsernames: removing usernames for ", " LIDs"])), i.length), await r("WAWebLidAwareContactsDB").bulkCreateOrMerge(i.map(function(e) {
				var t = e.lid;
				return {
					id: t.toJid(),
					username: void 0,
					usernameSoftDeleted: void 0
				};
			}), "DBContactRemoveSoftDeletedUsernames.removeSoftDeletedUsernames"), await o("WAWebBackendApi").frontendSendAndReceive("bulkUpdateUsernames", { usernameUpdates: i.map(function(e) {
				var t = e.lid;
				return {
					id: t.toJid(),
					username: void 0,
					usernameSoftDeleted: void 0
				};
			}) });
			var l = await Promise.allSettled(i.map(function(e) {
				var t = e.lid, n = e.oldUsername;
				return o("WAWebInsertUsernameChangeSystemMsg").generateUsernameChangeNotificationSystemMsg({
					wid: t,
					oldUsername: n,
					newUsername: void 0
				});
			}));
			for (var c of l) c.status === "rejected" && o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["removeSoftDeletedUsernames: failed to insert username delete system msg"]))).catching(r("getErrorSafe")(c.reason)).sendLogs("username-soft-delete-system-msg-insert-failed");
		}
	}
	l.removeSoftDeletedUsernames = c;
}), 98);

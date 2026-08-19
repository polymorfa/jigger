__d("MAWDeleteThread", [
	"MAWGetThreadInfoForDeletionApi",
	"MAWHandleMetaSyncAction",
	"MAWJobManager",
	"MWFBLogger",
	"MawMessageSendService",
	"QPLFlow",
	"WATimeUtils",
	"asyncToGeneratorRuntime",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = o("MWFBLogger").MWLogger().tags(["backend", "deleteThread"]), d = o("MAWJobManager").getPersistedJobsApi().definePersistedJob().finalStep("saveAndPassOff", function(e) {
		var t = e.chatJid;
		return m(t);
	}).end();
	function m(e) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			c.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Starting Delete Secure thread Job: ", ""])), t);
			var n = o("QPLFlow").startQPLFlow(r("qpl")._(1056845732, "691")), a = yield o("MAWGetThreadInfoForDeletionApi").getThreadInfoForDeletion(t), i = a.newestMsgTs != null ? o("WATimeUtils").futureUnixTime(1, a.newestMsgTs) : void 0, l = {
				chatJid: a.chatJid,
				messageRange: {
					lastMessageTimestamp: i,
					messages: []
				},
				type: "chat_delete"
			}, d = {
				actions: [{ chatAction: l }],
				type: "meta_sync"
			};
			try {
				yield o("MAWHandleMetaSyncAction").handleMetaSyncActions(d), yield o("MawMessageSendService").sendDeleteThread({
					chatJid: a.chatJid,
					lastMessageTimestamp: i
				}), c.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Delete Secure thread Job Successful"]))), n.endSuccess();
			} catch (e) {
				c.MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Delete Secure thread Job failed ", ""])), JSON.stringify(e)), n.endFail("delete_thread_failed");
			}
		}), p.apply(this, arguments);
	}
	l.deleteThread = d, l.deleteThreadImpl = m;
}), 98);

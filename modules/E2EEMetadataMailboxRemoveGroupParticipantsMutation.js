__d("E2EEMetadataMailboxRemoveGroupParticipantsMutation", [
	"E2EEMetadataMailboxRemoveGroupParticipantsMutation.graphql",
	"asyncToGeneratorRuntime",
	"createWorkerMutation",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e !== void 0 ? e : e = n("E2EEMetadataMailboxRemoveGroupParticipantsMutation.graphql");
	function u(e) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = r("createWorkerMutation")(s), n = t[0], o = yield n({ input: e });
			if (o == null) throw r("err")("Failed to remove participants from E2EE metadata mailbox group thread");
			return o;
		}), c.apply(this, arguments);
	}
	l.removeMISOTGroupParticipantsOverGraphQL = u;
}), 98);

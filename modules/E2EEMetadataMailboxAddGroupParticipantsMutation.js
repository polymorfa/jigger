__d("E2EEMetadataMailboxAddGroupParticipantsMutation", [
	"E2EEMetadataMailboxAddGroupParticipantsMutation.graphql",
	"asyncToGeneratorRuntime",
	"createWorkerMutation",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e !== void 0 ? e : e = n("E2EEMetadataMailboxAddGroupParticipantsMutation.graphql");
	function u(e) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = r("createWorkerMutation")(s), n = t[0], o = yield n({ input: e });
			if (o == null) throw r("err")("Failed to add participants to E2EE metadata mailbox group thread. Received null response");
			return o;
		}), c.apply(this, arguments);
	}
	l.addMISOTGroupParticipantsOverGraphQL = u;
}), 98);

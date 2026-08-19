__d("E2EEMetadataMailboxDemoteGroupParticipantsMutation", [
	"E2EEMetadataMailboxDemoteGroupParticipantsMutation.graphql",
	"asyncToGeneratorRuntime",
	"createWorkerMutation",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e !== void 0 ? e : e = n("E2EEMetadataMailboxDemoteGroupParticipantsMutation.graphql");
	function u(e) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = r("createWorkerMutation")(s), n = t[0], o = yield n({ input: e });
			if (o == null) throw r("err")("Failed to demote participants in E2EE metadata mailbox group thread");
			return o;
		}), c.apply(this, arguments);
	}
	l.demoteMISOTGroupParticipantsOverGraphQL = u;
}), 98);

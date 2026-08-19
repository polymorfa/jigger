__d("MAWDeleteDanglingParticipantsStartupJob", [
	"MAWDbVersion",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWODSProxy",
	"MAWQplProxy",
	"MAWTransactionMode",
	"WALogger",
	"WAOdsEnums",
	"asyncToGeneratorRuntime",
	"gkx",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[Delete Dangling Participants] ", ""])), t);
	}
	var u = o("MAWIndexedDb").makeMsgrTransactor({
		participants: o("MAWTransactionMode").READWRITE,
		threads: o("MAWTransactionMode").READONLY
	}, "deleteDanglingParticipantsStartupJob", function(e) {
		return function() {
			var t = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().getAll()) : e.threads.toArray();
			return t.then(function(t) {
				return e.participants.where("threadJid").noneOf(t.map(function(e) {
					return e.jid;
				})).delete();
			});
		};
	}), c = { run: (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (r("gkx")("24027")) {
				s("Starting job..."), o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.MAW_DELETE_DANGLING_PARTICIPANTS,
					key: "start"
				});
				var e = yield o("MAWDbVersion").getDBVersion();
				if (e != null && e >= 85) {
					s("" + (e != null ? e : "null"));
					var t = yield o("MAWQplProxy").measurePerfInQPL_USE_WITH_CARE(r("qpl")._(25310776, "6155"), "startup_job:delete_dangling_participants", function() {
						return u();
					});
					o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.MAW_DELETE_DANGLING_PARTICIPANTS,
						key: t > 0 ? "deleted" : "good"
					}), s("Found and deleted " + t + " dangling participants");
				} else s("Expected DBVersion >= 85, but got " + (e != null ? e : "null") + " instead"), o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.MAW_DELETE_DANGLING_PARTICIPANTS,
					key: "db_version_not_ready"
				});
			}
		});
		function t() {
			return e.apply(this, arguments);
		}
		return t;
	})() }, d = c;
	l.default = d;
}), 98);

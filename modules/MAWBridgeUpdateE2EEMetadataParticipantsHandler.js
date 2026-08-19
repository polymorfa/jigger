__d("MAWBridgeUpdateE2EEMetadataParticipantsHandler", [
	"LSFactory",
	"LSUpdateE2EEMetadataParticipantsStoredProcedure",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(e, t.threadJid, "MAWBridgeThreadsLoadedHandler", function(e, t) {
			return r("LSUpdateE2EEMetadataParticipantsStoredProcedure")(r("LSFactory")(e), { threadKey: t });
		});
	}
	l.call = e;
}), 98);

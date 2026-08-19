__d("MAWMpsReadSideEffects", [
	"MessageReferencesFromMediaEntry",
	"MpsMediaEntryCache",
	"WmiMediaService"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		var n = t.persistToReverb !== "no-persist" && t.strategy !== "local-only";
		e.forEach(function(e) {
			if ((e == null ? void 0 : e.toplevelProtobuf) != null) {
				var t = o("MpsMediaEntryCache").hydrateCache(e.toplevelProtobuf);
				if (n) {
					var r = o("MessageReferencesFromMediaEntry").getMessageReferencesFromMediaEntries(t);
					o("WmiMediaService").mediaService().storeMessageReferences(r), o("WmiMediaService").mediaService().enqueueMediaDownload(t.map(function(e) {
						return {
							e2eePlatform: e.e2eePlatform,
							plaintextHash: e.plaintextHash
						};
					}));
				}
			}
		});
	}
	l.readSideEffects = e;
}), 98);

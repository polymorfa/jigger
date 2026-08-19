__d("isWAFTSContentSearchEnabled", ["isE2EEConversationSearchEnabled", "isMAWUniversalSearchEnabled"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		return r("isE2EEConversationSearchEnabled")() || r("isMAWUniversalSearchEnabled")();
	}
	l.default = e;
}), 98);

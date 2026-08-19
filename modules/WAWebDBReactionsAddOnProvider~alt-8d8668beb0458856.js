__d("WAWebDBReactionsAddOnProvider", [
	"WAWebDBMarkAsReadForTable",
	"WAWebDBUpdateAddOnAcksForTable",
	"WAWebMessageAddOnType",
	"WAWebMsgType",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e = {
		type: o("WAWebMessageAddOnType").MessageAddOnType.Reaction,
		matches: function(t) {
			return t.type === o("WAWebMsgType").MSG_TYPE.REACTION;
		},
		matchesFutureproof: function(t) {
			return t.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && t.futureproofType === o("WAWebMsgType").MSG_TYPE.REACTION;
		},
		canRenderInUi: function() {
			return !0;
		},
		processOrphansForNewMsg: async function() {
			throw r("err")("Reactions not yet integrated into orphan framework");
		},
		updateAcks: function(t, n) {
			return o("WAWebDBUpdateAddOnAcksForTable").updateAddOnAcksForTable("reactions", t, n);
		},
		markAsRead: function(t) {
			return o("WAWebDBMarkAsReadForTable").markAsReadForTable("reactions", t.map(String));
		}
	};
	l.reactionsAddOnProvider = e;
}), 98);

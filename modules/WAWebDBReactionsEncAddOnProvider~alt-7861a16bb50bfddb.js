__d("WAWebDBReactionsEncAddOnProvider", [
	"WAWebMessageAddOnType",
	"WAWebMsgType",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e = {
		type: o("WAWebMessageAddOnType").MessageAddOnType.ReactionEnc,
		matches: function(t) {
			return t.type === o("WAWebMsgType").MSG_TYPE.REACTION_ENC;
		},
		matchesFutureproof: function(t) {
			return t.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && t.futureproofType === o("WAWebMsgType").MSG_TYPE.REACTION_ENC;
		},
		canRenderInUi: function() {
			return !0;
		},
		processOrphansForNewMsg: async function() {
			throw r("err")("Reactions provider is deprecated");
		}
	};
	l.reactionsEncAddOnProvider = e;
}), 98);

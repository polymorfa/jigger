__d("WAAsMessageApplication", [
	"WAAsConsumerApplication",
	"WAConsumerApplication.pb",
	"WAFranking",
	"WAMsgApplication.pb",
	"encodeProtobuf"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t;
		switch (e.type) {
			default: t = o("WAAsConsumerApplication").asConsumerApplication(e);
		}
		var n = e.forwardingScore != null ? e.forwardingScore : 0, r = e.isForwarded != null ? e.isForwarded : !1, a = { metadata: {
			chatEphemeralSetting: null,
			forwardingScore: n,
			frankingKey: o("WAFranking").createFrankingKey(),
			frankingVersion: o("WAFranking").getFrankingVersion(),
			isForwarded: r,
			quotedMessage: null
		} };
		if (t != null) {
			var i = o("encodeProtobuf").encodeProtobuf(o("WAConsumerApplication.pb").ConsumerApplicationSpec, t);
			a.payload = { subProtocol: { consumerMessage: {
				payload: i.readBuffer(),
				version: 1
			} } };
		}
		return o("encodeProtobuf").encodeProtobuf(o("WAMsgApplication.pb").MessageApplicationSpec, a).readByteArrayView();
	}
	function s(e) {
		return e;
	}
	l.asMessageApplication = e, l.castToMessageApplicationBytes = s;
}), 98);

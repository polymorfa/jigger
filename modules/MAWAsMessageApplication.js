__d("MAWAsMessageApplication", [
	"I64",
	"LSIntEnum",
	"LSMessageReplySourceTypeV2",
	"MAWAsArmadilloApplication",
	"MAWAsConsumerApplication",
	"MAWJids",
	"MAWMsgType",
	"WAArmadilloApplication.pb",
	"WAConsumerApplication.pb",
	"WAFranking",
	"WAGlobals",
	"WAJids",
	"encodeProtobuf"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e, t, n, r, a, i) {
		var l, s;
		switch (e.type) {
			case o("MAWMsgType").MSG_TYPE.RAVEN:
			case o("MAWMsgType").MSG_TYPE.RAVEN_ACTION:
				l = o("MAWAsArmadilloApplication").asArmadilloApplication(e, void 0, void 0, t);
				break;
			case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE:
				l = o("MAWAsArmadilloApplication").asArmadilloApplication(e, void 0, a);
				break;
			case o("MAWMsgType").MSG_TYPE.XMA:
				l = o("MAWAsArmadilloApplication").asArmadilloApplication(e, r);
				break;
			default: s = o("MAWAsConsumerApplication").asConsumerApplication(e, t, n, i);
		}
		var u, c, d = e.forwardingScore != null ? e.forwardingScore : 0, m = e.isForwarded != null ? e.isForwarded : !1;
		if (e.quote != null) {
			var _ = e.quote;
			u = {
				participant: _.content.author === o("WAJids").AUTHOR_ME ? o("WAGlobals").getMyDeviceJid() : _.content.author,
				stanzaId: _.content.externalId
			};
		}
		if (e.ephemeralSetting) {
			var f = e.ephemeralSetting;
			e.type === o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_CHANGE_FROM_CURRENT_DEVICE ? c = {
				ephemeralExpiration: f.ephemeralExpirationInSec,
				isEphemeralSettingReset: e.isEphemeralSettingReset
			} : c = {
				ephemeralExpiration: f.ephemeralExpirationInSec,
				ephemeralSettingTimestamp: f.ephemeralLastUpdatedOrSetTimestamp * 1e3
			};
		}
		var g = { metadata: {
			chatEphemeralSetting: c,
			forwardingScore: d,
			frankingKey: p(e.reportingMeta),
			frankingVersion: o("WAFranking").getFrankingVersion(),
			groupId: e.groupId,
			groupIndex: e.groupIndex,
			groupSize: e.groupSize,
			isForwarded: m,
			quotedMessage: u
		} };
		if (s != null) {
			var h = o("encodeProtobuf").encodeProtobuf(o("WAConsumerApplication.pb").ConsumerApplicationSpec, s);
			g.payload = { subProtocol: { consumerMessage: {
				payload: h.readBuffer(),
				version: 1
			} } };
		} else if (l != null) {
			var y = o("encodeProtobuf").encodeProtobuf(o("WAArmadilloApplication.pb").ArmadilloSpec, l);
			g.payload = { subProtocol: { armadillo: {
				payload: y.readBuffer(),
				version: 1
			} } };
		}
		return g;
	}
	function c(t) {
		var n, a = o("MAWAsConsumerApplication").asConsumerApplicationLSDb(t), i, l, u = t.isForwarded != null ? t.isForwarded : !1, c = u ? 1 : 0;
		t.replySourceTypeV2 && !(e || (e = o("I64"))).equal(t.replySourceTypeV2, (s || (s = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").NONE)) && t.replyToUserId != null && (i = {
			participant: t.replyToUserId === o("WAJids").AUTHOR_ME ? o("WAGlobals").getMyDeviceJid() : o("MAWJids").toUserJid((e || (e = o("I64"))).to_string(t.replyToUserId)),
			stanzaId: t.messageId
		});
		var d = { metadata: {
			chatEphemeralSetting: l,
			forwardingScore: c,
			frankingKey: o("WAFranking").createFrankingKey(),
			frankingVersion: o("WAFranking").getFrankingVersion(),
			groupId: (n = t == null ? void 0 : t.groupId) != null ? n : void 0,
			groupIndex: t.groupIndex != null ? (e || (e = o("I64"))).to_float(t.groupIndex) : void 0,
			groupSize: t.groupSize != null ? (e || (e = o("I64"))).to_float(t.groupSize) : void 0,
			isForwarded: u,
			quotedMessage: i
		} };
		if (a != null) {
			var m = o("encodeProtobuf").encodeProtobuf(o("WAConsumerApplication.pb").ConsumerApplicationSpec, a);
			d.payload = { subProtocol: { consumerMessage: {
				payload: m.readBuffer(),
				version: 1
			} } };
		}
		return d;
	}
	function d(e) {
		var t = o("MAWAsConsumerApplication").encodeReactionMessage(e), n = o("encodeProtobuf").encodeProtobuf(o("WAConsumerApplication.pb").ConsumerApplicationSpec, t);
		return {
			metadata: {
				frankingKey: o("WAFranking").createFrankingKey(),
				frankingVersion: o("WAFranking").getFrankingVersion()
			},
			payload: { subProtocol: { consumerMessage: {
				payload: n.readBuffer(),
				version: 1
			} } }
		};
	}
	function m(e) {
		var t = o("MAWAsConsumerApplication").encodeEditMessage(e), n = o("encodeProtobuf").encodeProtobuf(o("WAConsumerApplication.pb").ConsumerApplicationSpec, t);
		return {
			metadata: {
				frankingKey: o("WAFranking").createFrankingKey(),
				frankingVersion: o("WAFranking").getFrankingVersion()
			},
			payload: { subProtocol: { consumerMessage: {
				payload: n.readBuffer(),
				version: 1
			} } }
		};
	}
	function p(e) {
		return (e == null ? void 0 : e.frankingKey) != null ? e.frankingKey : o("WAFranking").createFrankingKey();
	}
	l.asMessageApplication = u, l.asMessageApplicationLSDb = c, l.asReactionMessageApplication = d, l.asEditMessageApplication = m;
}), 98);

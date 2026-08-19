__d("WAWebSendDirectMsgToDeviceList", [
	"WAWebCommsAckParser",
	"WAWebDeprecatedSendIqWorkerCompatible",
	"WAWebSendMsgCommonApi",
	"WAWebSendMsgCreateFanoutStanza",
	"WAWebSignalProtocolStore",
	"WAWebWamEnumMessageDistributionEnumType",
	"err"
], (function(t, n, r, o, a, i, l) {
	async function e(e) {
		var t, n, a, i, l, s = e.deviceList, u = e.groupData, c = e.metricReporter, d = e.msgProtobuf, m = e.msgRecord, p = e.option, _ = e.scheduledMsgMetadata, f = m.data, g = f.id, h = f.to, y = m.data.to, C = await o("WAWebSendMsgCreateFanoutStanza").createFanoutMsgStanza({
			chatId: y,
			deviceList: s,
			groupData: u,
			metricReporter: c,
			msgProtobuf: d,
			msgRecord: m,
			option: p,
			scheduledMsgMetadata: _
		}), b = C.stanza;
		await o("WAWebSignalProtocolStore").getSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode(), (t = c.sendPerfReporter) == null || t.postReadyToSendStage(), (n = c.sendPerfReporter) == null || n.startWrittenWireStage();
		var v = await o("WAWebDeprecatedSendIqWorkerCompatible").deprecatedSendStanzaAndReturnAck(b, o("WAWebCommsAckParser").toCoreAckTemplate({
			id: g.id,
			class: "message",
			from: h,
			participant: null
		})), S = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(v);
		return S.error ? Promise.reject(r("err")("[messaging] encryptAndSendGroupDirectMsg: Invalid ack from server")) : ((a = c.sendReporter) == null || a.setMessageDistributionType(o("WAWebWamEnumMessageDistributionEnumType").MESSAGE_DISTRIBUTION_ENUM_TYPE.DIRECT_MESSAGE), (i = c.sendPerfReporter) == null || i.postWrittenWireStage(), c.sendPerfReporter = null, (l = c.sendReporter) == null || l.postSuccess(), c.sendReporter = null, S.success);
	}
	l.sendDirectMsgToDeviceList = e;
}), 98);

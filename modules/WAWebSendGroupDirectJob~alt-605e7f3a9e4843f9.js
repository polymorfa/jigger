__d("WAWebSendGroupDirectJob", [
	"WALogger",
	"WATimeUtils",
	"WAWebBotUtils",
	"WAWebMsgFanoutTypes",
	"WAWebResendGroupMsg",
	"WAWebSendDirectMsgToDeviceList",
	"cr:10198"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c;
	async function d(t) {
		var n = t.deviceList, r = t.groupData, a = t.metricReporter, i = t.msgProtobuf, l = t.msgRecord, d = t.scheduledMsgMetadata, m = l.data.to;
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"encryptAndSendGroupDirectMsg: sending ",
			" with group ",
			""
		])), l.data.id, m.toLogString()).tags("messaging");
		var p = n.filter(function(e) {
			return !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e);
		}), _ = await o("WAWebSendDirectMsgToDeviceList").sendDirectMsgToDeviceList({
			deviceList: p,
			groupData: r,
			metricReporter: a,
			msgProtobuf: i,
			msgRecord: l,
			option: { fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT },
			scheduledMsgMetadata: d
		}), f = _.addressingMode, g = _.phash;
		return g && (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[encryptAndSendGroupDirectMsg] phash mismatch, server: ", ""])), g).tags("messaging"), o("WAWebResendGroupMsg").resendPersistedGroupMsgWrapper({
			isDirect: !0,
			msgRecord: l,
			msgProtobuf: i,
			oldList: p,
			ackTime: o("WATimeUtils").unixTime(),
			groupData: r,
			phash: g,
			metricReporter: a,
			serverAddressingMode: f
		}).catch(function(e) {
			o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"resendGroupDirectMsg: failed to resend group msg: ",
				", type: ",
				""
			])), l.data.id.toString(), l.data.type).tags("messaging"), o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["resendGroupDirectMsg: failed to resend group msg: ", ""])), e).tags("messaging").sendLogs("message-resend-failed", { sampling: .01 });
		})), _;
	}
	l.encryptAndSendGroupDirectMsg = d;
}), 98);

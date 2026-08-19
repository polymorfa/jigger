__d("WAWebSendUserMsgJob", [
	"WALogger",
	"WATimeUtils",
	"WAWebBizCoexUtils",
	"WAWebBotBaseGating",
	"WAWebDBDeviceListFanout",
	"WAWebDBUpdateMessageTable",
	"WAWebFetchResendMissingKeyJob",
	"WAWebLidMigrationUtils",
	"WAWebMsgFanoutTypes",
	"WAWebMsgGetters",
	"WAWebPersistedJobDefinitions",
	"WAWebPersistedJobManagerWorkerCompatible",
	"WAWebPostMdDeviceSyncAckMetric",
	"WAWebResendUserMsg",
	"WAWebSendMsgToDeviceList",
	"WAWebSimpleSignalPNToFBIDMigration",
	"WAWebSyncDeviceAdvDeviceListJob",
	"WAWebUserPrefsMeUser",
	"WAWebWorkerSafeBackendApi",
	"cr:10198"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d;
	async function m(t) {
		var n = t.chatId, r = t.metricReporter, a = t.msgProtobuf, i = t.msgRecord, l = t.scheduledMsgMetadata, m = i.data, f = m.botRespOrInvocationRevokeBotWid, g = m.id, h = m.invokedBotWid, y = m.protocolMessageKey, C = m.subtype, b = m.to;
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["encryptAndSendUserMsg: sending ", ""])), g).tags("messaging");
		var v = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(), S = { wids: [b, v] };
		b != null && b.isUser() && (S.chatWidSetToIncludeHostedInFanoutOneToOneChatOnly = b);
		var R = await o("WAWebDBDeviceListFanout").getFanOutList(S);
		if (o("WAWebBotBaseGating").isBotEnabled()) if (o("WAWebMsgGetters").getIsBotFeedbackMessage(i.data) && y != null) {
			var L;
			!b.isBot() && y.participant != null ? L = y.participant : i.data.bizBotType != null ? L = b : L = y.remote, R = [o("WAWebSimpleSignalPNToFBIDMigration").maybeReplaceDeprecatedBotPnWithFbid(L)];
		} else if (h && h != null && h.isBot()) {
			var E = h;
			R = [].concat(R, [E]);
		} else f && f != null && f.isBot() && (C === "sender_revoke" || C === "admin_revoke") && (R = [].concat(R, [f]));
		o("WAWebBizCoexUtils").fanoutListContainsHostedDevice(R) && o("WAWebDBUpdateMessageTable").updateMessageTable(i.data.id, { senderOrRecipientAccountTypeHosted: !0 });
		var k = await o("WAWebSendMsgToDeviceList").sendMsgToDeviceList({
			chatId: n,
			deviceWids: R,
			metricReporter: r,
			msgProtobuf: a,
			msgRecord: i,
			option: { fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT },
			scheduledMsgMetadata: l
		});
		p(b, k);
		var I = k.phash;
		if (I != null) {
			o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["encryptAndSendUserMsg: phash mismatch, got server phash ", ""])), I).tags("messaging");
			var T = o("WATimeUtils").unixTime();
			o("WAWebPostMdDeviceSyncAckMetric").postMdDeviceSyncAckMetric({
				chatWid: b,
				msgProtobuf: a,
				msgRecord: i
			}), r.sendReporter = r.createSendReporter({
				isResend: !0,
				originalMessage: i.type === "message" ? i.data : void 0
			}), Promise.resolve().then(function() {
				if (!b.isLid()) return o("WAWebFetchResendMissingKeyJob").fetchResendMissingKeys([b, v]).catch(function() {
					o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["fetchResendMissingKeys: failed"]))).sendLogs("fetchResendMissingKeys-sync-error");
				});
			}).then(function() {
				return o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob([b, v], "message", I);
			}).then(function() {
				return _({
					ackTime: T,
					chatId: n,
					excludeList: R,
					metricReporter: r,
					msgProtobuf: a,
					msgRecord: i,
					scheduledMsgMetadata: l
				});
			}).catch(function(e) {
				o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
					"resendUserMsg: failed to resend message: ",
					", type: ",
					""
				])), i.data.id.toString(), i.data.type).tags("messaging"), o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["resendUserMsg: failed to resend message: ", ""])), e).tags("messaging").sendLogs("message-resend-failed", { sampling: .01 });
			});
		}
		return k;
	}
	function p(e, t) {
		var n = t.refreshLid;
		if (n) {
			var r = o("WAWebLidMigrationUtils").toPn(e);
			r && o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("syncContactListJob", {
				contactIds: [r],
				shouldSyncDevice: !1,
				mode: "query"
			});
		}
	}
	async function _(e) {
		var t = e.ackTime, n = e.chatId, r = e.excludeList, a = e.metricReporter, i = e.msgProtobuf, l = e.msgRecord, s = e.scheduledMsgMetadata, u = await o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().accessors.maybeCreateJob(o("WAWebPersistedJobDefinitions").jobSerializers.resendUserMsg(l, r, t));
		await o("WAWebResendUserMsg").resendUserMsg({
			ackTime: t,
			chatId: n,
			excludeList: r,
			metricReporter: a,
			msgProtobuf: i,
			msgRecord: l,
			scheduledMsgMetadata: s
		}), await o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().accessors.deletePersistedJob(u.id);
	}
	l.encryptAndSendUserMsg = m, l.maybeRefreshLid = p;
}), 98);

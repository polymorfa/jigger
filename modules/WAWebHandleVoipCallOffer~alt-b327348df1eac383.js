__d("WAWebHandleVoipCallOffer", [
	"WALogger",
	"WAWebBackendApi",
	"WAWebCallLogMsgData.flow",
	"WAWebCoreActionsODS",
	"WAWebHandleMsgTypes.flow",
	"WAWebLidMigrationUtils",
	"WAWebSchemaChat",
	"WAWebSignalStoreApi",
	"WAWebVoipContactUtils",
	"WAWebVoipGatingUtils",
	"WAWebVoipIncomingCallQpl",
	"WAWebVoipPeerTcToken",
	"WAWebVoipSignalingEnums",
	"WAWebVoipStackInterface",
	"WAWebVoipValidateAndDecryptEnc",
	"WAWebWidFactory",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	async function c(e, t) {
		var n, r;
		o("WAWebVoipGatingUtils").markCurrentCallAsGroup(o("WAWebVoipGatingUtils").isGroupCallMessage(e));
		var a = o("WAWebVoipIncomingCallQpl").startVoipIncomingCallQpl({ bool: {
			is_video: (n = e.isVideoCall) != null ? n : !1,
			is_group: o("WAWebVoipGatingUtils").isGroupCallMessage(e),
			has_group_jid: e.group_jid != null,
			is_offline: (r = e.is_offline) != null ? r : !1
		} });
		try {
			var i = await Promise.all([
				(async function() {
					var n;
					(n = o("WAWebVoipIncomingCallQpl")).voipIncomingCallQplAddPoint(a, n.VoipIncomingCallQplPoint.E2E_DECRYPT_START);
					var r = await o("WAWebVoipValidateAndDecryptEnc").validateAndDecryptEnc(t, e);
					return n.voipIncomingCallQplAddPoint(a, n.VoipIncomingCallQplPoint.E2E_DECRYPT_END), r;
				})(),
				(async function() {
					var t;
					(t = o("WAWebVoipIncomingCallQpl")).voipIncomingCallQplAddPoint(a, t.VoipIncomingCallQplPoint.TC_TOKEN_START);
					var n = await o("WAWebVoipPeerTcToken").fetchPeerTcToken(e.peer_jid);
					return t.voipIncomingCallQplAddPoint(a, t.VoipIncomingCallQplPoint.TC_TOKEN_END), n;
				})(),
				(async function() {
					var e;
					(e = o("WAWebVoipIncomingCallQpl")).voipIncomingCallQplAddPoint(a, e.VoipIncomingCallQplPoint.STACK_RESOLVE_START);
					var t = await o("WAWebVoipStackInterface").getVoipStackInterface();
					return e.voipIncomingCallQplAddPoint(a, e.VoipIncomingCallQplPoint.STACK_RESOLVE_END), t;
				})()
			]), l = i[0], s = l.result, u = l.retryCount, c = i[1], m = i[2];
			if (e.group_jid != null) {
				var p;
				o("WAWebSchemaChat").getChatTable().get((p = e.group_jid) == null ? void 0 : p.toString()).then(async function(t) {
					if (t != null && t.name != null) {
						var n = o("WAWebWidFactory").asUserWidOrThrow(e.peer_jid), r = o("WAWebLidMigrationUtils").toPn(n), a = o("WAWebLidMigrationUtils").toLid(n), i = [
							r,
							a,
							t.id
						].filter(Boolean).map(function(e) {
							return e.toString();
						}).join(",");
						(m == null ? void 0 : m.type) === "windows" && await m.setChatNameAndIcon(i, t.name, "");
					}
				});
			}
			if (e.silence_reason === "vc_wave_all") {
				var _, f = e.group_jid != null ? {
					isGroup: !0,
					groupJid: e.group_jid
				} : { isGroup: !1 };
				await o("WAWebBackendApi").frontendSendAndReceive("generateCallLogOfferNotice", babelHelpers.extends({
					callCreatorWid: e.peer_jid,
					offerTime: e.t,
					isVideo: (_ = e.isVideoCall) != null ? _ : !1,
					silenceReason: e.silence_reason,
					callId: e.call_id,
					isOffline: e.is_offline,
					callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Missed
				}, f)), o("WAWebVoipIncomingCallQpl").endVoipIncomingCallQplCancel(a, "vc_wave_all");
			}
			await d({
				msg: e,
				qplFlow: a,
				result: s,
				retryCount: u,
				tcToken: c,
				voipNode: t,
				voipStackInterface: m
			});
		} catch (e) {
			throw a.isActive() && o("WAWebVoipIncomingCallQpl").endVoipIncomingCallQplFail(a, "unexpected_error"), e;
		}
	}
	async function d(t) {
		var n = t.msg, a = t.qplFlow, i = t.result, l = t.retryCount, u = t.tcToken, c = t.voipNode, d = t.voipStackInterface;
		switch (i) {
			case o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS: {
				var p, _ = await o("WAWebVoipContactUtils").isCallerNotContact(n.peer_jid);
				o("WAWebVoipGatingUtils").markCurrentCallAsFna(o("WAWebVoipGatingUtils").hasFnaRelay(c)), o("WAWebVoipIncomingCallQpl").voipIncomingCallQplAddPoint(a, o("WAWebVoipIncomingCallQpl").VoipIncomingCallQplPoint.NATIVE_PROCESS_START), await (d == null ? void 0 : d.handleIncomingSignalingOffer(c, n.peer_platform, n.peer_app_version, n.e, n.t, (p = n.is_offline) != null ? p : !1, _, n.peer_jid.toString(), u)), o("WAWebVoipIncomingCallQpl").voipIncomingCallQplAddPoint(a, o("WAWebVoipIncomingCallQpl").VoipIncomingCallQplPoint.NATIVE_PROCESS_END), a.isActive() && o("WAWebVoipIncomingCallQpl").endVoipIncomingCallQplSuccess(a);
				break;
			}
			case o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY:
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[voip] handleIncomingCallOffer reject: enc retry"])));
				try {
					await m(n, l);
				} finally {
					a.isActive() && o("WAWebVoipIncomingCallQpl").endVoipIncomingCallQplFail(a, "enc_retry");
				}
				break;
			case o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR:
				o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[voip] handleIncomingCallOffer end: enc parse error"])));
				try {
					await (d == null ? void 0 : d.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Unknown, !0));
				} finally {
					a.isActive() && o("WAWebVoipIncomingCallQpl").endVoipIncomingCallQplFail(a, "parse_error");
				}
				break;
			default: throw r("err")("invalid e2e result type");
		}
	}
	async function m(e, t) {
		var n;
		t === void 0 && (t = 0);
		var a = await Promise.all([o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(), o("WAWebVoipStackInterface").getVoipStackInterface()]), i = a[0], l = a[1];
		if (!i) throw r("err")("No registration info found");
		var s = i.registrationId, c = t + 1, d = (n = e.isGroupCall_DEPRECATED) != null ? n : !1;
		await (l == null ? void 0 : l.rejectCallWithoutCallContext(e.call_id, d, e.peer_jid.toString({
			legacy: !0,
			formatIncludeDevice: !0
		}), e.call_creator.toString({
			legacy: !0,
			formatIncludeDevice: !0
		}), d ? o("WAWebVoipSignalingEnums").ENC_RETRY_RECEIPT_ATTRS.GROUP_CALL : o("WAWebVoipSignalingEnums").ENC_RETRY_RECEIPT_ATTRS.SINGLE_PARTICIPANT, c, s));
		var m = 5;
		c === m && (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[voip] rejectCallWithReasonEnc max retry, uploading"]))), o("WAWebCoreActionsODS").logCallErrorTerminal(), await p(e));
	}
	async function p(e) {
		o("WAWebBackendApi").frontendFireAndForget("generateCallLog", { props: {
			callCreatorWid: e.call_creator,
			offerTime: e.t,
			isVideo: !!e.isVideoCall,
			isGroup: !1,
			callId: e.call_id,
			isOffline: e.is_offline,
			silenceReason: e.silence_reason,
			callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Missed
		} });
	}
	l.handleVoipCallOffer = c;
}), 98);

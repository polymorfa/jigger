__d("WAWebAddonSendProcess", [
	"WALogger",
	"WAWebAck",
	"WAWebAddonConstants",
	"WAWebAddonCrossWindowUtils",
	"WAWebAddonEncryptAddonMsgData",
	"WAWebAddonInfraError",
	"WAWebAddonPluginProcessor",
	"WAWebAddonProcessMsgs",
	"WAWebAddonProcessMsgsUtils",
	"WAWebAddonRetryRequestUtils",
	"WAWebAddonSelectUtils",
	"WAWebAddonSendMsgData",
	"WAWebAddonUpdateDataUtils",
	"WAWebHandleMsgError",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebReferentialMsgKey",
	"WAWebSendMsgJob",
	"WAWebSendMsgTypes",
	"WAWebUserPrefsMeUser",
	"WAWebWid",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m;
	async function p(e, t) {
		var n = o("WAWebAddonEncryptAddonMsgData").createDualEncryptionHelper(e, t), r = n ? await n.decrypt() : e, a = o("WAWebAddonSelectUtils").getAddonTableMode(e);
		await o("WAWebAddonUpdateDataUtils").updateAddonsInTableMode({
			processMode: o("WAWebAddonConstants").AddonProcessMode.SetAck,
			tableMode: a
		}, { add: [r] });
	}
	function _(e) {
		var t = e.id, n = t.remote;
		return t.fromMe && o("WAWebUserPrefsMeUser").isMePrimary(n) ? o("WAWebAck").ACK.READ : o("WAWebAck").ACK.SENT;
	}
	function f(e, t) {
		if (e.decryptedMsgData.type === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE) {
			var n = o("WAWebMsgGetters").getPollEndTime(e.parent), r = parseInt(t, 10) * 1e3;
			if (n != null && r > n) return !0;
		}
		return !1;
	}
	var g = new Set([
		o("WAWebAddonConstants").AddonProcessMode.Send,
		o("WAWebAddonConstants").AddonProcessMode.SendRetry,
		o("WAWebAddonConstants").AddonProcessMode.SendRevoke
	]);
	async function h(t, n) {
		var a = o("WAWebAddonConstants").AddonProcessMode.Send;
		t.kind === o("WAWebMsgType").MsgKind.ProtocolAddonRevoke && (a = o("WAWebAddonConstants").AddonProcessMode.SendRevoke), t.ack === o("WAWebAck").ACK.FAILED && (a = o("WAWebAddonConstants").AddonProcessMode.SendRetry);
		var i;
		try {
			var l;
			if (!g.has(a)) throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError);
			var h = o("WAWebAddonProcessMsgsUtils").getParentMsgKey(t);
			if (o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(t)) i = await o("WAWebAddonProcessMsgs").processOutgoingMsgOptimisticUpdate(a, t);
			else {
				var y;
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"[addon-infra] send ",
					" (",
					") id=",
					" parent=",
					" isLid=",
					""
				])), o("WAWebAddonCrossWindowUtils").getAddonProcessorType(t), t.type, t.id.id, h.id, (y = h.participant) == null ? void 0 : y.isLid());
				var C = await o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs([t], a), b = C[0], v = C[1];
				if (i = {
					encryptedMsgData: v[0],
					decryptedMsgData: v[0],
					parent: o("WAWebAddonSelectUtils").createAddonParentSelector(b).getForAddon(v[0])
				}, a === o("WAWebAddonConstants").AddonProcessMode.SendRetry && t.type === o("WAWebMsgType").MSG_TYPE.COMMENT) {
					var S = o("WAWebAddonPluginProcessor").getAddonProcessor(i.decryptedMsgData);
					S.convert.toDualEncryptedMsgData != null && (i.encryptedMsgData = await S.convert.toDualEncryptedMsgData(i.decryptedMsgData, i.parent));
				}
				(a === o("WAWebAddonConstants").AddonProcessMode.Send || a === o("WAWebAddonConstants").AddonProcessMode.SendRetry) && await o("WAWebAddonProcessMsgs").processOutgoingMsg(a, i.encryptedMsgData, b, n);
			}
			await o("WAWebAddonRetryRequestUtils").storeSelfMessageTypeRow(i.decryptedMsgData);
			var R = i.parent.broadcastId != null && r("WAWebWid").isWid(i.parent.broadcastId) && !!((l = i.parent.broadcastId) != null && l.isBroadcastList());
			if (R) {
				var L = o("WAWebReferentialMsgKey").getReferentialMsgKey(i.parent);
				i.encryptedMsgData = o("WAWebAddonProcessMsgsUtils").updateMsgParentKeyValue(i.encryptedMsgData, L);
			}
			var E = await o("WAWebSendMsgJob").encryptAndSendMsg({
				type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
				data: i.encryptedMsgData
			}, n), k = E.count, I = E.error, T = E.t;
			if (R && (i.encryptedMsgData = o("WAWebAddonProcessMsgsUtils").updateMsgParentKeyValue(i.encryptedMsgData, i.parent.id)), I != null) throw new (o("WAWebHandleMsgError")).MessageSentAckError(I);
			if (f(i, T)) throw o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["sendAddonMsgData: post-send validation failed, marking as failed"]))), r("err")("Post-send validation failed");
			return await p(babelHelpers.extends({}, i.decryptedMsgData, { ack: _(i.encryptedMsgData) }), i.parent), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"[addon-infra]: sent ",
				" addon, id: ",
				""
			])), i.decryptedMsgData.type, i.decryptedMsgData.id.id), {
				t: parseInt(T, 10),
				count: k
			};
		} catch (e) {
			if (i == null) {
				if (o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(t)) try {
					var D = await o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs([t], a), x = D[0], $ = o("WAWebAddonSelectUtils").createAddonParentSelector(x).getForAddon(t);
					await p(babelHelpers.extends({}, t, { ack: o("WAWebAck").ACK.FAILED }), $);
				} catch (e) {
					o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["sendAddonMsgData: failed to set ACK.FAILED for optimistic addon ", ""])), t.id.toString()).tags("messaging", "addons").sendLogs("sendAddonMsgData: optimistic-set-ack-failed");
				}
				throw o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
					"sendAddonMsgData: parent ",
					" not found for ",
					""
				])), o("WAWebAddonProcessMsgsUtils").getParentMsgKey(t), t.id.toString()).tags("messaging", "addons").sendLogs("sendAddonMsgData: undefined parent"), e;
			}
			throw await p(babelHelpers.extends({}, i.decryptedMsgData, { ack: o("WAWebAck").ACK.FAILED }), i.parent), o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["sendAddonMsgData: failure, msg: ", ""])), t.id.toString()), e;
		}
	}
	l.sendAddonProcess = h;
}), 98);

__d("WAWebSendCoexV2RetryMsgJob", [
	"WALogger",
	"WAWap",
	"WAWebApiCoexV2RelayReceiptStore",
	"WAWebBotTypes",
	"WAWebCoexV2HostedContactUtils",
	"WAWebCommsWapMd",
	"WAWebE2EProtoUtils",
	"WAWebMsgGetters",
	"WAWebOutgoingMessage",
	"WAWebSendMsgCommonApi",
	"WAWebSendMsgCreateFanoutStanza",
	"WAWebUserPrefsMeUser",
	"WAWebWidFactory",
	"err",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d;
	async function m(t, n, a) {
		if (a == null) return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[coexv2] retry: missing recipient; skipping"]))).sendLogs("coexv2-retry-missing-recipient"), null;
		var i = t.data, l = i.id.id, c = await o("WAWebApiCoexV2RelayReceiptStore").getUndeliveredCoexV2Lids(l);
		if (c.length === 0) return o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[coexv2] retry: no undelivered LIDs for ", ""])), l), null;
		var d = await p(t, c);
		if (d.length === 0) return o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[coexv2] retry: no surviving targets for ", ""])), l), null;
		var m = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(o("WAWebOutgoingMessage").OutgoingMessageOriginType.Retry, t), _ = o("WAWebSendMsgCreateFanoutStanza").getIsBizBotFeedback(i, i.id.remote), f = await o("WAWebSendMsgCreateFanoutStanza").genCoexV2RelayBotNodeForTargets(i, m, o("WAWebMsgGetters").getWamEditType(i), d, n, {
			clientThreadId: null,
			localAutomatedType: _ ? null : o("WAWebBotTypes").getBotLocalAutomatedType(i.bizBotType),
			modeSelected: null,
			modeSelection: null,
			type: o("WAWebSendMsgCreateFanoutStanza").getBotStanzaType(i)
		});
		if (f == null) throw r("err")("[coexv2] retry: failed to build relay bot node for " + d.length + " undelivered target(s)");
		return o("WAWap").wap("message", {
			id: o("WAWap").CUSTOM_STRING(l),
			to: o("WAWebCommsWapMd").CHAT_JID(a),
			type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(m),
			edit: o("WAWebSendMsgCommonApi").editAttribute(m, i.subtype)
		}, f.node);
	}
	async function p(e, t) {
		var n = e.data.id.remote, a = await Promise.all([
			o("WAWebSendMsgCreateFanoutStanza").isSelfCoexV2Hosted(),
			o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(n),
			o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(n)
		]), i = a[0], l = a[1], s = a[2], u = [], m = [];
		for (var p of t) {
			var _ = void 0;
			try {
				_ = o("WAWebWidFactory").createUserWidOrThrow(p);
			} catch (e) {
				o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[coexv2] retry: skipping malformed undelivered LID"]))).catching(r("getErrorSafe")(e)).sendLogs("coexv2-retry-malformed-lid");
				continue;
			}
			if (!_.isLid()) {
				o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[coexv2] retry: skipping non-LID undelivered target ", ""])), _.toLogString()).sendLogs("coexv2-retry-non-lid-target");
				continue;
			}
			o("WAWebUserPrefsMeUser").isMeAccount(_) ? i && u.push(_) : l && !s && m.push(_);
		}
		var f = await Promise.all(m.map(function(e) {
			return o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(e);
		})), g = m.filter(function(e, t) {
			return !f[t];
		}), h = g.length > 0 ? await o("WAWebSendMsgCommonApi").filterDeviceWithChangedIdentity(e, g) : g;
		return [].concat(u, h);
	}
	l.buildCoexV2RetryStanza = m;
}), 98);

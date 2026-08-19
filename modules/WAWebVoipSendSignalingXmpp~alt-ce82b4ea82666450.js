__d("WAWebVoipSendSignalingXmpp", [
	"invariant",
	"WAJids",
	"WALogger",
	"WAWap",
	"WAWebAdvSignatureApi",
	"WAWebBackendJobs.flow",
	"WAWebBackendJobsCommon",
	"WAWebCommsAckParser",
	"WAWebCommsWapMd",
	"WAWebDeprecatedSendIqWorkerCompatible",
	"WAWebManageE2ESessionsJob",
	"WAWebReleaseToEventLoop",
	"WAWebSendMsgCommonApi",
	"WAWebSessionScope",
	"WAWebSignal",
	"WAWebSignalProtocolStore",
	"WAWebVoipGatingUtils",
	"WAWebVoipPeerTcToken",
	"WAWebVoipStackInterface",
	"WAWebVoipWapNodeUtils",
	"WAWebWidFactory"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _, f, g, h, y, C = ["offer", "enc_rekey"];
	async function b(t) {
		var n, r;
		await o("WAWebReleaseToEventLoop").releaseToEventLoop();
		var a = Date.now(), i = t.peerJid, l = t.xmlPayload, s = await o("WAWap").decodeStanza(l, function(e) {
			return Promise.resolve(e);
		}), d = Date.now(), m = o("WAWebWidFactory").createWid(i), p = C.includes(s.tag), _, f = s;
		if (m.isGroupCall()) _ = o("WAWebCommsWapMd").GROUP_CALL_JID(m);
		else if (!p) _ = o("WAWap").DEVICE_JID(o("WAJids").unsafeCoerceToDeviceJid(i)), await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
			identityChanged: !1,
			options: { skipOfflineDeliveryWait: o("WAWebVoipGatingUtils").isGuestViewer() },
			sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
			wids: [m]
		});
		else {
			var g = await v(s, i);
			_ = g[0], f = g[1];
		}
		var h = Date.now(), y = f.tag, b = function(t) {
			return t.replace(/^([^@]*)([^@][^@][^@][^@])@(.*)$/, "...$2@$3");
		};
		if (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"voip:sendWAWebVoipSignalingXmpp: sending stanza ",
			" to ",
			" callStanzaRecipient = ",
			""
		])), y, b(m.toJid()), b(_.toString())), y === "reject" && !m.isGroupCall()) {
			var S = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(s), R = S.maybeAttrString("call-creator");
			if (R != null) try {
				var L = o("WAWebWidFactory").createWid(_.toString()), E = o("WAWebWidFactory").createWid(R);
				L.server !== E.server && o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
					"voip: reject stanza domain mismatch: peer=",
					" recipient=",
					" creatorDomain=",
					""
				])), b(i), b(_.toString()), E.server);
			} catch (e) {}
		}
		var k = o("WAWap").generateId(), I = o("WAWap").wap("call", {
			to: _,
			id: k
		}, f), T = await o("WAWebDeprecatedSendIqWorkerCompatible").deprecatedSendStanzaAndReturnAck(I, o("WAWebCommsAckParser").toCoreAckTemplate({
			id: String(k),
			class: "call",
			from: m,
			participant: null
		})), D = Date.now(), x = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(T), $ = await Promise.all([o("WAWebVoipPeerTcToken").fetchPeerTcToken(m), o("WAWebVoipStackInterface").getVoipStackInterface()]), P = $[0], N = $[1];
		s.tag === "offer" && o("WAWebVoipGatingUtils").markCurrentCallAsFna(o("WAWebVoipGatingUtils").hasFnaRelay(x)), await (N == null ? void 0 : N.handleIncomingSignalingAck({
			ackInfoError: (n = x.maybeAttrString("error")) != null ? n : "0",
			ackInfoType: (r = x.maybeAttrString("type")) != null ? r : "",
			peerJid: i,
			tcToken: P,
			xmlNode: x
		}));
		var M = Date.now() - a;
		M > 100 && o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
			"voip: [SignalingPerf] ",
			": total=",
			"ms, decode=",
			"ms, e2e+encrypt=",
			"ms, send+ack=",
			"ms, postAck=",
			"ms"
		])), y, M, d - a, h - d, D - h, Date.now() - D);
	}
	async function v(e, t) {
		var n, r = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(e), a = o("WAWebWidFactory").createWid(t);
		if (r.hasChild("destination")) return S(e, r, a);
		if (!r.hasChild("enc")) return [o("WAWap").DEVICE_JID(o("WAJids").unsafeCoerceToDeviceJid(t)), e];
		try {
			var i = [a];
			if (a.isCompanion()) {
				var l = o("WAWebWidFactory").createDeviceWidFromUserAndDevice(a.user, a.server, o("WAJids").DEFAULT_DEVICE_ID);
				i.unshift(l);
			}
			var s = Date.now();
			await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
				identityChanged: !1,
				options: { skipOfflineDeliveryWait: o("WAWebVoipGatingUtils").isGuestViewer() },
				sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
				wids: i
			}), o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [SignalingPerf] ensureE2ESessions: ",
				"ms (",
				" wids)"
			])), Date.now() - s, i.length);
		} catch (e) {
			o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip:encryptAndSendSignalingMsg: Could not establish E2E session with deviceWid"])));
		}
		var u = R(r), c, f;
		try {
			var g, h, y = Date.now(), C = await L({
				callKeyProtobuf: u,
				count: (g = (h = r.maybeChild("enc")) == null ? void 0 : h.maybeAttrInt("count")) != null ? g : 0,
				deviceWid: a
			});
			o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: [SignalingPerf] buildEncNode (encrypt+flush): ", "ms"])), Date.now() - y), c = C.encNode, f = C.shouldHaveIdentity;
		} catch (t) {
			if (e.tag === "offer") c = null, f = !1, o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip:encryptAndSendSignalingMsg: Sending offer without enc"])));
			else throw t;
		}
		return o("WAWebVoipWapNodeUtils").replaceVoipWapChild(e, c), f && await E(e), [o("WAWap").DEVICE_JID(o("WAJids").unsafeCoerceToDeviceJid(o("WAWebWidFactory").createDeviceWidFromUserAndDevice(a.user, t.endsWith("lid") ? "lid" : "c.us", (n = a.device) != null ? n : o("WAJids").DEFAULT_DEVICE_ID).toJid())), e];
	}
	async function S(e, t, n) {
		e.tag === "offer" || s(0, 89768);
		var r = o("WAWebVoipWapNodeUtils").getVoipWapChild(e, "destination"), a = t.child("destination"), i = a.mapChildren(function(e) {
			return o("WAWebWidFactory").createWid(e.attrString("jid"));
		});
		try {
			await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
				identityChanged: !1,
				options: { skipOfflineDeliveryWait: o("WAWebVoipGatingUtils").isGuestViewer() },
				sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
				wids: i
			});
		} catch (e) {
			o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip:fanOutOffer: Could not establish E2E session with all deviceWids"])));
		}
		var l = !1, u = !1;
		return await o("WAWebVoipWapNodeUtils").mapVoipWapChildrenAsync(r, async function(e, n) {
			var r = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(e);
			if (r.hasChild("enc")) {
				var a = R(r), s = i[n];
				try {
					var c, d, m = await L({
						callKeyProtobuf: a,
						count: (c = (d = t.maybeChild("enc")) == null ? void 0 : d.maybeAttrInt("count")) != null ? c : 0,
						deviceWid: s,
						shouldFlush: !1
					}), p = m.encNode, _ = m.shouldHaveIdentity;
					return u || (u = _), o("WAWebVoipWapNodeUtils").replaceVoipWapChild(e, p), e;
				} catch (e) {
					o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
						"voip:encryptMsgCallKey: Signal encryption failed for ",
						", ",
						""
					])), s.toString(), e), l = !0;
				}
			} else return e;
		}), l ? (o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip:encryptMsgCallKey: Removing all enc nodes due to encryption failure"]))), o("WAWebVoipWapNodeUtils").mapVoipWapChildren(r, function(e) {
			return o("WAWebVoipWapNodeUtils").filterVoipWapNodeChildren(e, function(e) {
				return e.tag !== "enc";
			});
		})) : (await o("WAWebSignalProtocolStore").getSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode(), u && await E(e)), [o("WAWebCommsWapMd").USER_JID(n), e];
	}
	function R(e) {
		var t, n = (t = e.maybeChild("enc")) == null || t.contentBytes == null ? void 0 : t.contentBytes();
		return { call: { callKey: n != null ? n : null } };
	}
	async function L(e) {
		var t = e.callKeyProtobuf, n = e.count, r = e.deviceWid, a = e.shouldFlush, i = a === void 0 ? !0 : a, l = Date.now(), s = await o("WAWebSignal").Cipher.encryptSignalProto(r, o("WAWebSendMsgCommonApi").encodeAndPad(t)), u = s.ciphertext, c = s.type, d = Date.now();
		i && await o("WAWebSignalProtocolStore").getSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode(), o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
			"voip: [SignalingPerf] encryptSignalProto: ",
			"ms, flush: ",
			""
		])), d - l, i ? Date.now() - d + "ms" : "skipped");
		var m = o("WAWap").wap("enc", {
			v: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
			type: o("WAWap").CUSTOM_STRING(c),
			count: o("WAWap").INT(n)
		}, u);
		return {
			encNode: m,
			shouldHaveIdentity: c === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg && k()
		};
	}
	async function E(e) {
		var t = await o("WAWebAdvSignatureApi").getADVEncodedIdentity();
		o("WAWebVoipWapNodeUtils").appendVoipWapChildInPlace(e, o("WAWap").wap("device-identity", null, t));
	}
	function k() {
		return !o("WAWebVoipGatingUtils").isGuestViewer();
	}
	l.sendWAWebVoipSignalingXmpp = b;
}), 98);

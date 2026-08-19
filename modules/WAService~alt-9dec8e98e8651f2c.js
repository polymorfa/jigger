__d("WAService", [
	"PersistedQueueApi",
	"WAAbPropsInit",
	"WABaseGlobals",
	"WAComms",
	"WACommsInit",
	"WACryptoLibraryConfig",
	"WACryptoManager",
	"WACryptoManagerUtils",
	"WADanglingQueue",
	"WADeviceNotificationFlushable",
	"WAGetClockSkewApi",
	"WAGlobals",
	"WAJids",
	"WAMPSFlushable",
	"WAMediaKeysFlushable",
	"WAOfflineUtils",
	"WAOneQueue",
	"WAProtocolQueue",
	"WATagsLogger",
	"WATimeUtils",
	"WAWaitForComms"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = o("WATagsLogger").TAGS(["backend"]);
	async function d(t) {
		var n = t.config, r = t.dependencies, a = t.getCommsConfig, i = t.hmacKey, l = t.newClockSkewCalculation, d = t.qpl, m = t.regData, p = t.serverRPC;
		c.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["initWAInfra for deviceJid: ", ""])), m.deviceJid);
		var _ = o("WACryptoManagerUtils").createCryptoManager(m.regInfo), f = o("WAProtocolQueue").protocolQueue(), g = new (o("WAOneQueue")).WAOneQueue({
			cryptoManager: _.manager,
			flushables: [
				o("WADeviceNotificationFlushable").deviceNotificationFlushable,
				o("WAMediaKeysFlushable").mediaKeysFlushable,
				o("WAMPSFlushable").mpsFlushable,
				o("WAProtocolQueue").pqFlushable,
				o("WACryptoManager").cryptoManagerFlushable(_.manager)
			],
			mode: o("WAOfflineUtils").ServerRPCMode.INIT
		});
		o("WADanglingQueue").initDanglingQueue(o("PersistedQueueApi").persistedQueueApi()), o("WABaseGlobals").setGlobals({
			myJids: {
				deviceJid: m.deviceJid,
				userJid: m.userJid
			},
			jidUtils: o("WAJids").createJidUtils({ platform: "msgr" }),
			newClockSkewCalculation: l
		}), o("WAGlobals").setGlobals({
			config: n,
			dependencies: r,
			myJids: {
				deviceJid: m.deviceJid,
				userJid: m.userJid
			},
			waOneQueue: g,
			hmacKey: i,
			qpl: d
		}), o("WACryptoLibraryConfig").setCryptoLibraryConfig({
			signalFutureMessagesMax: n.getSignalFutureMessagesMax(),
			S508658AutoAcknowledgeStaleSessions: !1,
			isPqKeysUploadEnabled: n.isPqKeysUploadEnabled(),
			isPq1on1MessageEnabled: n.isPq1on1MessageEnabled()
		});
		var h = await o("WAGetClockSkewApi").getClockSkew(), y = h.clockSkew;
		o("WATimeUtils").setClockSkew(y), await o("WAAbPropsInit").initAbProps();
		function C() {
			return c.LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["New comms connection"]))), o("WACommsInit").initComms({
				stanzaHandler: p.handleStanza,
				getCommsConfig: a,
				regInfo: m.regInfo,
				oneQueue: g,
				fullCommsSync: !0
			}).catch(function(e) {
				o("WAWaitForComms").failComms(e);
			}), o("WAWaitForComms").waitForComms();
		}
		return c.LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Worker inited"]))), {
			oneQueue: g,
			protocolQueue: f,
			startComms: C,
			stopComms: function() {
				return o("WAComms").stopComms();
			}
		};
	}
	l.makeWAService = d;
}), 98);

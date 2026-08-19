__d("MAWDbRavenActionTxns", [
	"FBLogger",
	"MAWBridgeTypesCreators",
	"MAWIndexedDb",
	"MAWMsg",
	"MAWRavenUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["originalTs", "unsendMsgContentDeleteTs"];
	function s(t, n, a) {
		return t.messages.where("externalId").equals(n.ravenActionToMsgExternalId).filter(function(e) {
			return e.threadJid === a.jid;
		}).first().then(function(i) {
			var l = i == null ? void 0 : i.msgId;
			if (l == null) {
				r("FBLogger")("maw_incoming_handlers").warn("[MAWDbRavenActionTxns] Cannot Write Raven Action without ID of Raven Message.");
				return;
			}
			return u(t, i).then(function() {
				var r = n.originalTs, o = n.unsendMsgContentDeleteTs, i = babelHelpers.objectWithoutPropertiesLoose(n, e), s = babelHelpers.extends({
					msgId: l,
					threadJid: a.jid
				}, i);
				return t.unrenderedMessages.add(s).then(function(e) {
					return babelHelpers.extends({ rowId: e }, s);
				});
			}).then(function(e) {
				o("MAWIndexedDb").afterTransaction({
					tag: "RavenActionUpdate",
					value: o("MAWBridgeTypesCreators").createBridgeRavenAction(e)
				});
			});
		});
	}
	function u(e, t) {
		if ((t == null ? void 0 : t.type) !== "Raven") throw r("FBLogger")("messenger_web").mustfixThrow("Cannot Modify Message because Message is not Raven Message");
		var n = [o("MAWMsg").MAWRavenMsgEphemeralMediaState.cast(Number(t.ravenEphemeralMediaState)), o("MAWMsg").MAWRavenMsgEphemeralType.cast(Number(t.ravenEphemeralType))], a = n[0], i = n[1];
		if (a == null || i == null) throw r("FBLogger")("messenger_web").mustfixThrow("ravenEphemeralMediaStateEnum or ravenEphemeralTypeEnum is null");
		var l = o("MAWRavenUtils").getNextRavenMessageEphemeralState(a, i);
		return e.messages.put(babelHelpers.extends({}, t, { ravenEphemeralMediaState: l }));
	}
	l.writeRavenActionMsg = s;
}), 98);

__d("MAWBridgeRavenActionMsgForUIHandler", [
	"I64",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"MAWMsg",
	"MAWRavenUtils",
	"ReQL"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ephemeralMediaState"], s;
	function u(t, n) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(t, n.threadJid, "MAWBridgeRavenActionMsgForUIHandler", async function(t, r) {
			var a = t.attachments, i = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(a).getKeyRange(r, n.ravenMsgId));
			if (i == null || i.ephemeralMediaState == null) return Promise.resolve();
			var l = (s || (s = o("I64"))).to_int32(i.ephemeralMediaState);
			if (i.ephemeralMediaViewMode == null) return Promise.resolve();
			var u = s.to_int32(i.ephemeralMediaViewMode), c = o("MAWMsg").MAWRavenMsgEphemeralMediaState.cast(l), d = o("MAWMsg").MAWRavenMsgEphemeralType.cast(u);
			if (c == null || d == null) return Promise.resolve();
			var m = o("MAWRavenUtils").getNextRavenMessageEphemeralState(c, d);
			if (m == null) return Promise.resolve();
			var p = i.ephemeralMediaState, _ = babelHelpers.objectWithoutPropertiesLoose(i, e), f = babelHelpers.extends({ ephemeralMediaState: s.of_int32(m) }, _, { transportKey: "WhatsApp" }), g = [
				_.threadKey,
				_.messageId,
				_.attachmentFbid
			];
			return a.upsert(g, f);
		});
	}
	l.call = u;
}), 98);

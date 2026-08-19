__d("MAWBridgeRavenActionMsgForUIHandler", [
	"I64",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"MAWMsg",
	"MAWRavenUtils",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ephemeralMediaState"], s, u;
	function c(t, r) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(t, r.threadJid, "MAWBridgeRavenActionMsgForUIHandler", (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
				var i = t.attachments, l = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(i).getKeyRange(a, r.ravenMsgId));
				if (l == null || l.ephemeralMediaState == null) return (u || (u = n("Promise"))).resolve();
				var c = (s || (s = o("I64"))).to_int32(l.ephemeralMediaState);
				if (l.ephemeralMediaViewMode == null) return (u || (u = n("Promise"))).resolve();
				var d = s.to_int32(l.ephemeralMediaViewMode), m = o("MAWMsg").MAWRavenMsgEphemeralMediaState.cast(c), p = o("MAWMsg").MAWRavenMsgEphemeralType.cast(d);
				if (m == null || p == null) return (u || (u = n("Promise"))).resolve();
				var _ = o("MAWRavenUtils").getNextRavenMessageEphemeralState(m, p);
				if (_ == null) return (u || (u = n("Promise"))).resolve();
				var f = l.ephemeralMediaState, g = babelHelpers.objectWithoutPropertiesLoose(l, e), h = babelHelpers.extends({ ephemeralMediaState: s.of_int32(_) }, g, { transportKey: "WhatsApp" }), y = [
					g.threadKey,
					g.messageId,
					g.attachmentFbid
				];
				return i.upsert(y, h);
			});
			return function(e, n) {
				return t.apply(this, arguments);
			};
		})());
	}
	l.call = c;
}), 98);

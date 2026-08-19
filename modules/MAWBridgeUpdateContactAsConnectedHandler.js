__d("MAWBridgeUpdateContactAsConnectedHandler", [
	"FBLogger",
	"I64",
	"LSAddMessengerContactStoredProcedure",
	"LSContactViewerRelationship",
	"LSFactory",
	"LSIntEnum",
	"LSOptimisticAcceptMessageRequestStoredProcedure",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"MAWUpdateLSThreadCapabilities",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(e, t) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
			var i = a.contactUserId, l = a.threadJid, c = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.contacts).getKeyRange((s || (s = o("I64"))).of_string(i)));
			if (c == null) {
				r("FBLogger")("messenger_web").warn("Missing contact in MAWBridgeUpdateContactAsConnectedHandler");
				return;
			}
			var d = babelHelpers.extends({}, c, { contactViewerRelationship: (u || (u = o("LSIntEnum"))).ofNumber(r("LSContactViewerRelationship").CONTACT_OF_VIEWER) });
			return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(t, l, "MAWBridgeUpdateContactAsConnectedHandler", (function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
					yield (e || (e = n("Promise"))).allSettled([
						t.contacts.upsert([c.id], d),
						r("LSAddMessengerContactStoredProcedure")(r("LSFactory")(t), { contactId: c.id }),
						o("MAWUpdateLSThreadCapabilities").updateNonMessageRequestThreadTxn(t, a),
						r("LSOptimisticAcceptMessageRequestStoredProcedure")(r("LSFactory")(t), { threadKey: a })
					]);
				});
				return function(e, n) {
					return t.apply(this, arguments);
				};
			})());
		}), d.apply(this, arguments);
	}
	l.call = c;
}), 98);

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
	"ReQL"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	async function u(t, n) {
		var a = n.contactUserId, i = n.threadJid, l = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.contacts).getKeyRange((e || (e = o("I64"))).of_string(a)));
		if (l == null) {
			r("FBLogger")("messenger_web").warn("Missing contact in MAWBridgeUpdateContactAsConnectedHandler");
			return;
		}
		var u = babelHelpers.extends({}, l, { contactViewerRelationship: (s || (s = o("LSIntEnum"))).ofNumber(r("LSContactViewerRelationship").CONTACT_OF_VIEWER) });
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(t, i, "MAWBridgeUpdateContactAsConnectedHandler", async function(e, t) {
			await Promise.allSettled([
				e.contacts.upsert([l.id], u),
				r("LSAddMessengerContactStoredProcedure")(r("LSFactory")(e), { contactId: l.id }),
				o("MAWUpdateLSThreadCapabilities").updateNonMessageRequestThreadTxn(e, t),
				r("LSOptimisticAcceptMessageRequestStoredProcedure")(r("LSFactory")(e), { threadKey: t })
			]);
		});
	}
	l.call = u;
}), 98);

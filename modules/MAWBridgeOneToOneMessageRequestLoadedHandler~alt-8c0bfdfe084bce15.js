__d("MAWBridgeOneToOneMessageRequestLoadedHandler", [
	"fbt",
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"LSMessagingThreadTypeUtil",
	"LSThreadBitOffset",
	"MAWContactRelationshipType",
	"MAWJids",
	"MAWMessageRequestUtil",
	"MAWMiActMappingTableAPI",
	"MAWUserJidWrapper",
	"ODS",
	"ReQL",
	"WADbContact"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c;
	function d(e, t) {
		var n = t.threadJid;
		return _(e, n);
	}
	function m(e, t) {
		return _(e, t);
	}
	function p(t) {
		(e || (e = o("ODS"))).bumpEntityKey(3185, "e2ee.message_request_loaded_failure", t, 1);
	}
	async function _(e, t) {
		if (o("MAWUserJidWrapper").getMyUserJid() === t) {
			p("self_thread");
			return;
		}
		var n = o("MAWJids").convertChatJidToIntJid(t), r = await o("MAWMiActMappingTableAPI").getThreadKeyForChatJid(e, t);
		if (r == null) {
			p("missing_thread_key");
			return;
		}
		var a = await Promise.all([o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.threads).getKeyRange(r)), o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.contacts).getKeyRange(n))]), i = a[0], l = a[1];
		if (i == null) {
			p("missing_thread");
			return;
		}
		if (l == null) {
			p("missing_contact");
			return;
		}
		if (!o("LSMessagingThreadTypeUtil").isOneToOne(i.threadType)) {
			p("not_one_to_one");
			return;
		}
		var u = f(i, l), c = i.folderName === "pending" || i.folderName === "other" || i.folderName === "spam" || u;
		if (c) {
			var d = i.folderName === "inbox" ? s._(
				/*BTDS*/
				""
			).toString() : void 0, m = babelHelpers.extends({}, i, { additionalThreadContext: d }, g(i));
			await e.threads.put(m);
		}
	}
	function f(e, t) {
		var n = o("MAWContactRelationshipType").getContactRelationshipType(t), a = e.folderName === "inbox" && n === o("WADbContact").REVERSED_ONE_WAY_CONTACT && !(u || (u = o("I64"))).equal(e.lastActivityTimestampMs, (u || (u = o("I64"))).zero), i = (u || (u = o("I64"))).equal(t.authorityLevel, (c || (c = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE));
		return a && !i && p("contacts_not_yet_loaded"), a && i;
	}
	function g(e) {
		var t = o("LSThreadBitOffset").clear(o("MAWMessageRequestUtil").disabledThreadCapabilitiesForIncomingRequest, e.capabilities, e.capabilities2, e.capabilities3, e.capabilities4, e.capabilities5), n = o("LSThreadBitOffset").set(o("MAWMessageRequestUtil").enabledThreadCapabilitiesForIncomingRequest, t[0], t[1], t[2], t[3], t[4]);
		return {
			capabilities: n[0],
			capabilities2: n[1],
			capabilities3: n[2],
			capabilities4: n[3],
			capabilities5: n[4]
		};
	}
	l.call = d, l.callFromMainThread = m;
}), 226);

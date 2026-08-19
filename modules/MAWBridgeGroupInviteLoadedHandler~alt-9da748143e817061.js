__d("MAWBridgeGroupInviteLoadedHandler", [
	"fbt",
	"I64",
	"LSMessagingThreadTypeUtil",
	"MAWMiActMappingTableAPI",
	"ReQL"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e;
	function u(e, t, n) {
		return d(e, n, t.actorId);
	}
	function c(e, t, n) {
		return o("MAWMiActMappingTableAPI").getThreadKeyForChatJid(e, t).then(function(t) {
			return t == null ? Promise.resolve() : d(e, t, n);
		});
	}
	async function d(t, n, r) {
		var a = t.threads, i = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(a).getKeyRange(n));
		if (i != null) {
			var l = o("LSMessagingThreadTypeUtil").isGroup(i.threadType);
			if (l) {
				var u = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.group_invites).getKeyRange(n));
				if (u == null) {
					await a.put(babelHelpers.extends({}, i, { additionalThreadContext: void 0 }));
					return;
				}
				var c = (e || (e = o("I64"))).equal((e || (e = o("I64"))).of_string(r), u.inviterId) ? null : await o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.contacts, ["name"]).getKeyRange(u.inviterId));
				if (c != null) {
					var d = s._(
						/*BTDS*/
						"",
						[s._param("Inviter Name", c.name)]
					).toString(), m = i.folderName === "inbox" ? s._(
						/*BTDS*/
						""
					).toString() : i.additionalThreadContext;
					await a.put(babelHelpers.extends({}, i, {
						additionalThreadContext: m,
						snippet: d
					}));
				}
			}
		}
	}
	function m(e, t) {
		return c(e, t.threadJid, t.actorId);
	}
	function p(e, t, n) {
		return c(e, t, n);
	}
	l.callForOneDb = u, l.call = m, l.callFromMainThread = p;
}), 226);

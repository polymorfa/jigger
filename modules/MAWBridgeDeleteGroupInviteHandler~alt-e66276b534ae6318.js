__d("MAWBridgeDeleteGroupInviteHandler", [
	"LSThreadBitOffset",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"ReQL",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(e, t.threadJid, "MAWBridgeDeleteGroupInviteHandler", async function(t, n) {
			var a = await o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(t.group_invites).getKeyRange(n));
			return Promise.all(a.map(function(e) {
				return t.group_invites.delete(e.threadKey, e.inviterId, e.inviteeId);
			})).then(function() {
				r("promiseDone")(o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.threads).getKeyRange(n)), function(t) {
					if (t != null) {
						var n = o("LSThreadBitOffset").clear([105], t.capabilities, t.capabilities2, t.capabilities3, t.capabilities4, t.capabilities5), r = n[0], a = n[1], i = n[2], l = n[3], s = n[4];
						return e.threads.put(babelHelpers.extends({}, t, {
							capabilities: r,
							capabilities2: a,
							capabilities3: i,
							capabilities4: l,
							capabilities5: s,
							snippet: void 0
						}));
					}
				});
			});
		});
	}
	l.call = e;
}), 98);

__d("MAWBridgeDeleteGroupInviteHandler", [
	"LSThreadBitOffset",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, a) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(t, a.threadJid, "MAWBridgeDeleteGroupInviteHandler", (function() {
			var a = n("asyncToGeneratorRuntime").asyncToGenerator(function* (a, i) {
				var l = yield o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(a.group_invites).getKeyRange(i));
				return (e || (e = n("Promise"))).all(l.map(function(e) {
					return a.group_invites.delete(e.threadKey, e.inviterId, e.inviteeId);
				})).then(function() {
					r("promiseDone")(o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.threads).getKeyRange(i)), function(e) {
						if (e != null) {
							var n = o("LSThreadBitOffset").clear([105], e.capabilities, e.capabilities2, e.capabilities3, e.capabilities4, e.capabilities5), r = n[0], a = n[1], i = n[2], l = n[3], s = n[4];
							return t.threads.put(babelHelpers.extends({}, e, {
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
			return function(e, t) {
				return a.apply(this, arguments);
			};
		})());
	}
	l.call = s;
}), 98);

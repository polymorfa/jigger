__d("MAWUpdateLSThreadCapabilities", [
	"fbt",
	"I64",
	"LSBitOffset",
	"LSContactBitOffset",
	"LSContactBlockedByViewerStatus",
	"LSIntEnum",
	"LSMessagingThreadTypeUtil",
	"LSThreadBitOffset",
	"MAWBlockUtils",
	"MAWCurrentUser",
	"MAWMessageRequestUtil",
	"ReQL",
	"clearedMAWMnRestrictCapabilities",
	"emptyFunction"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = o("MAWCurrentUser").getID(), d = (e || (e = o("I64"))).of_string(c);
	function m(e, t) {
		return o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.threads).getKeyRange(t)).then(function(t) {
			if (t == null) return Promise.resolve();
			var n = o("LSBitOffset").set((u || (u = o("LSIntEnum"))).ofNumber(27), t.capabilities), r = babelHelpers.extends({}, t, { capabilities: n });
			return e.threads.put(r);
		}).then(r("emptyFunction"));
	}
	function p(e, t) {
		return o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.threads).getKeyRange(t)).then(function(t) {
			if (t == null) return Promise.resolve();
			var n = o("LSBitOffset").clear((u || (u = o("LSIntEnum"))).ofNumber(27), t.capabilities), r = babelHelpers.extends({}, t, { capabilities: n });
			return e.threads.put(r);
		}).then(r("emptyFunction"));
	}
	function _(t, n) {
		return o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.threads).getKeyRange(n)).then(function(r) {
			if (r == null) return Promise.resolve([void 0, void 0]);
			var a = o("ReQL").firstAsync(o("LSMessagingThreadTypeUtil").isOneToOne(r.threadType) ? o("ReQL").mergeJoin(o("ReQL").fromTableAscending(t.participants).getKeyRange(n), o("ReQL").fromTableAscending(t.contacts)).filter(function(t) {
				var n = t[1];
				return !(e || (e = o("I64"))).equal(n.id, d);
			}).map(function(e) {
				var t = e[1];
				return t;
			}) : o("ReQL").empty());
			return Promise.all([Promise.resolve(r), a]);
		}).then(function(n) {
			var a = n[0];
			if (a == null) return Promise.resolve();
			var i = n[1];
			if (i == null) return Promise.resolve();
			var l = (e || (e = o("I64"))).equal(i.blockedByViewerStatus, (u || (u = o("LSIntEnum"))).ofNumber(r("LSContactBlockedByViewerStatus").MESSAGE_BLOCKED)), s = e.equal(i.blockedByViewerStatus, u.ofNumber(r("LSContactBlockedByViewerStatus").FULLY_BLOCKED)), c = o("LSContactBitOffset").has(66, i), d = s ? o("LSThreadBitOffset").clear(o("MAWBlockUtils").clearedFbBlockCapabilities, a.capabilities, a.capabilities2, a.capabilities3, a.capabilities4, a.capabilities5) : l ? o("LSThreadBitOffset").clear(o("MAWBlockUtils").clearedMnBlockCapabilities, a.capabilities, a.capabilities2, a.capabilities3, a.capabilities4, a.capabilities5) : c ? o("LSThreadBitOffset").clear(r("clearedMAWMnRestrictCapabilities"), a.capabilities, a.capabilities2, a.capabilities3, a.capabilities4, a.capabilities5) : [
				a.capabilities,
				a.capabilities2,
				a.capabilities3,
				a.capabilities4,
				a.capabilities5
			], m = d[0], p = d[1], _ = d[2], f = d[3], g = d[4];
			return t.threads.put(babelHelpers.extends({}, a, {
				capabilities: m,
				capabilities2: p,
				capabilities3: _,
				capabilities4: f,
				capabilities5: g
			})).then(r("emptyFunction"));
		});
	}
	async function f(e, t) {
		var n = e.threads, r = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(n).getKeyRange(t));
		if (r == null) return Promise.resolve();
		var a = o("LSThreadBitOffset").set.apply(o("LSThreadBitOffset"), [o("MAWMessageRequestUtil").disabledThreadCapabilitiesForIncomingRequest].concat(o("LSThreadBitOffset").clear(o("MAWMessageRequestUtil").enabledThreadCapabilitiesForIncomingRequest, r.capabilities, r.capabilities2, r.capabilities3, r.capabilities4, r.capabilities5))), i = a[0], l = a[1], s = a[2], u = a[3], c = a[4];
		await n.put(babelHelpers.extends({}, r, {
			additionalThreadContext: void 0,
			capabilities: i,
			capabilities2: l,
			capabilities3: s,
			capabilities4: u,
			capabilities5: c
		}));
	}
	async function g(e, t, n) {
		var r = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.threads).getKeyRange(t));
		if (r != null) {
			var a = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.contacts, ["name"]).getKeyRange(n));
			if (a != null) {
				var i = s._(
					/*BTDS*/
					"",
					[s._param("Inviter Name", a.name)]
				).toString(), l = o("LSThreadBitOffset").set([105], r.capabilities, r.capabilities2, r.capabilities3, r.capabilities4, r.capabilities5), u = l[0], c = l[1], d = l[2], m = l[3], p = l[4];
				await e.threads.put(babelHelpers.extends({}, r, {
					capabilities: u,
					capabilities2: c,
					capabilities3: d,
					capabilities4: m,
					capabilities5: p,
					snippet: i
				}));
			}
		}
	}
	async function h(e, t) {
		var n = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.threads).getKeyRange(t));
		if (n != null) {
			var r = await o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(e.group_invites).getKeyRange(t)), a = o("LSThreadBitOffset").clear([105], n.capabilities, n.capabilities2, n.capabilities3, n.capabilities4, n.capabilities5), i = a[0], l = a[1], s = a[2], u = a[3], c = a[4];
			await e.threads.put(babelHelpers.extends({}, n, {
				capabilities: i,
				capabilities2: l,
				capabilities3: s,
				capabilities4: u,
				capabilities5: c,
				snippet: void 0
			})), await r.map(async function(t) {
				await e.group_invites.delete(t.threadKey, t.inviterId, t.inviteeId);
			});
		}
	}
	l.enableAddMembersTxn = m, l.disableAddMembersTxn = p, l.disableBlockerCapabilitiesTxn = _, l.updateNonMessageRequestThreadTxn = f, l.setGroupInviteTxn = g, l.clearGroupInviteTxn = h;
}), 226);

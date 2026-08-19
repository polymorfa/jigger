__d("WABulkSaveSignalDataApi", [
	"Promise",
	"WACryptoManager",
	"WADbSignal",
	"WAJids",
	"WASignalDB",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var r = t.dhashUpdate, a = t.identityRemove, i = t.identityUpdate, l = t.lastSyncTsUpdate, s = t.preKeyRemove, c = t.senderKeySessionUpdate, m = t.sessionRemove, p = t.sessionUpdate, _ = p.map(function(e) {
				var t = e.id, n = e.updated;
				return {
					id: t,
					session: o("WACryptoManager").encodeSession(n)
				};
			}), f = [];
			c.forEach(function(e) {
				var t = e.author, n = e.groupId, r = e.updated, a = o("WAJids").extractUserJid(t), i = o("WAJids").extractDeviceId(t), l = o("WADbSignal").buildSenderKeySessionId(n, a, i);
				f.push({
					deviceId: i,
					groupJid: n,
					id: l,
					record: o("WACryptoManager").encodeSenderKeySession(r),
					userJid: a
				});
			}), yield o("WASignalDB").getDb().runInTransaction([
				"contacts",
				"identity",
				"prekey",
				"senderKeySessions",
				"session"
			], "readwrite", function(t) {
				var o = t.stores, c = o.identity, p = o.prekey, g = o.senderKeySessions, h = o.session;
				return (e || (e = n("Promise"))).all([
					h.bulkDelete(m),
					c.bulkDelete(a),
					h.bulkPut(_),
					g.bulkPut(f),
					d(t.stores, i),
					u(t.stores, i, r, l),
					p.bulkDelete(s.map(function(e) {
						var t = e.id;
						return t;
					}))
				]);
			}, o("WASignalDB").signalOp("bulkSaveSignalData"));
		});
		return function(n) {
			return t.apply(this, arguments);
		};
	})();
	function u(e, t, n, r) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r) {
			var a = new Set();
			for (var i of t) a.add(o("WAJids").extractUserJid(i.id));
			var l = Array.from(a), s = yield e.contacts.bulkGet(Array.from(a)), u = new Map();
			for (var c of s) c != null && u.set(c.contactJid, c);
			for (var d of l) {
				var m = u.get(d);
				m == null ? (m = {
					contactJid: d,
					dhash: null
				}, u.set(d, m)) : m.dhash = null;
			}
			for (var p of n) {
				var _ = u.get(p.id);
				_ == null ? (_ = {
					contactJid: p.id,
					dhash: p.dhash
				}, u.set(p.id, _)) : _.dhash = p.dhash;
			}
			for (var f of r) {
				var g = u.get(f.id);
				g == null ? (g = {
					contactJid: f.id,
					dhash: null,
					lastSyncTs: f.lastSyncTs
				}, u.set(f.id, g)) : g.lastSyncTs = f.lastSyncTs;
			}
			yield e.contacts.bulkPut(Array.from(u.values()));
		}), c.apply(this, arguments);
	}
	function d(e, t) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			if (t.length !== 0) {
				var n = t.map(function(e) {
					var t = e.id, n = e.identity;
					return {
						deviceJid: t,
						identity: n,
						userJid: o("WAJids").extractUserJid(t)
					};
				});
				yield e.identity.bulkPut(n);
			}
		}), m.apply(this, arguments);
	}
	l.bulkSaveSignalData = s;
}), 98);

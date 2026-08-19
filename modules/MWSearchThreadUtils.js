__d("MWSearchThreadUtils", [
	"I64",
	"LSIntEnum",
	"LSMessageSearchType",
	"MAWChatJid",
	"MWLSParticipant",
	"MWLSThreadTitle",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime",
	"getLSMediaContactProfilePictureUrl",
	"getLSMediaThreadPictureUrl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(t, a, i) {
		var l = r("getLSMediaThreadPictureUrl")(t);
		if (l != null) return (u || (u = n("Promise"))).resolve([l, void 0]);
		var s, c = (s = o("ReQL")).toArrayAsync(s.leftJoin(s.fromTableAscending(i.tables.participants, []).getKeyRange(t.threadKey), s.fromTableAscending(i.tables.contacts)).map(function(e) {
			var t = e[0], n = e[1];
			return n;
		}).filter(Boolean)), d = c.then(function(t) {
			var n = t.length === 1 && (e || (e = o("I64"))).equal(t[0].id, a);
			return t.sort(function(e, t) {
				return e.rank - t.rank;
			}).filter(function(t) {
				return (e || (e = o("I64"))).equal(t.id, a) ? n : !0;
			}).map(function(e) {
				return r("getLSMediaContactProfilePictureUrl")(e);
			});
		}).then(function(e) {
			var t = e[0];
			return t != null ? [t, e[1]] : ["", void 0];
		});
		return d;
	}
	function d(e, t) {
		return o("ReQL").toArrayAsync(o("MWLSParticipant").getAllInOpenThread(t, o("ReQL").fromTableAscending(t.tables.contacts), e.threadKey));
	}
	function m(t, n, a, i, l) {
		if ((e || (e = o("I64"))).equal(l, (s || (s = o("LSIntEnum"))).ofNumber(r("LSMessageSearchType").MESSAGE)) && i != null) {
			var u, c = (u = a.find(function(e) {
				return e.contact_id === i.id;
			})) == null ? void 0 : u.nickname;
			return c != null ? c : i.name;
		}
		return o("MWLSThreadTitle").getThreadTitleWithFullName(n.threadName, t, a, n.threadType);
	}
	function p(e, t, n, r) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r) {
			var a = yield o("MAWChatJid").toThreadKeyMaybe(e.tables, t);
			return a == null ? null : f(e, a, n, r);
		}), _.apply(this, arguments);
	}
	function f(e, t, n, r) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r) {
			var a = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.tables.threads).getKeyRange(t));
			return a == null ? null : h(e, a, n, r);
		}), g.apply(this, arguments);
	}
	function h(e, t, n, r) {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r, o) {
			var a = yield (u || (u = n("Promise"))).all([c(t, r, e), d(t, e)]), i = a[0], l = i[0], s = i[1], p = a[1], _ = yield m(r, t, p, void 0, o);
			return {
				profilePicUrl: l,
				secondaryProfilePicUrl: s,
				threadDisplayName: _,
				threadKey: t.threadKey,
				threadType: t.threadType
			};
		}), y.apply(this, arguments);
	}
	l.getThreadPics = c, l.getThreadParticipants = d, l.getThreadDisplayName = m, l.getThreadDataForSearchResult = p, l.getThreadDataByThreadKey = f;
}), 98);

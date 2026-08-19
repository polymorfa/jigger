__d("MAWInMemoryParticipantStore", [
	"FBLogger",
	"MAWBridge",
	"MAWDbParticipant",
	"MAWDexieTable",
	"MAWInMemoryStore",
	"MAWUserJidWrapper",
	"Promise",
	"WAJids",
	"WATimeUtils",
	"asyncToGeneratorRuntime",
	"clearTimeout",
	"getErrorSafe",
	"gkx",
	"setTimeout"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = new (o("MAWInMemoryStore")).MAWInMemoryStore("participants", function(e) {
		return e.id;
	}, null), u = 1e4, c = new Map(), d = function() {
		return o("MAWDexieTable").getDexiePSDItem("participantsAccessMode");
	};
	function m(e) {
		var t = c.get(e);
		t != null && r("clearTimeout")(t), c.delete(e);
	}
	function p(e) {
		m(e), c.set(e, r("setTimeout")(function() {
			c.delete(e);
		}, u));
	}
	function _() {
		c.forEach(function(e) {
			r("clearTimeout")(e);
		}), c.clear();
	}
	function f() {
		s.clear(), _();
	}
	function g() {
		return o("MAWInMemoryStore").getReadwriteInMemoryStore(s, d);
	}
	function h() {
		return o("MAWInMemoryStore").getReadonlyCommittedViewOfInMemoryStore(s);
	}
	function y() {
		return r("gkx")("26037");
	}
	function C(e, t) {
		y() && s.hydrate(babelHelpers.extends({}, t, { id: e }));
	}
	function b(e, t) {
		return s.getCommitted(o("MAWDbParticipant").craftParticipantId(e, t));
	}
	function v(e, t) {
		if (!y() || t.length === 0) return [];
		var n = o("WATimeUtils").castMilliSecondsToUnixTime(0);
		return t.map(function(t) {
			var r = {
				addressable: t.addressable,
				deliveredWatermarkTs: n,
				id: o("MAWDbParticipant").craftParticipantId(e, t.userJid),
				lastReadWatermarkTs: n,
				threadJid: e,
				type: t.type,
				userJid: t.userJid
			};
			return m(r.id), s.hydrate(r), r;
		});
	}
	function S(e, t) {
		if (!y() || t.length === 0) return [];
		var n = [];
		return t.forEach(function(t) {
			var r = b(e, t);
			r != null && n.push(r);
			var a = o("MAWDbParticipant").craftParticipantId(e, t);
			p(a), s.deleteCommitted(a);
		}), n;
	}
	function R(e, t, n) {
		if (!y() || t.length === 0) return [];
		var r = [];
		return t.forEach(function(t) {
			var o = b(e, t);
			if (o != null) {
				var a = babelHelpers.extends({}, o, { type: n });
				s.hydrate(a), r.push(a);
			}
		}), r;
	}
	function L(e) {
		if (!(!y() || e.length === 0)) {
			var t = o("MAWUserJidWrapper").getMyUserJid(), n = s.committedView(), r = o("WATimeUtils").castMilliSecondsToUnixTime(0);
			for (var a of e) {
				var i = o("WAJids").interpretAsUserJid(a);
				if (i != null) {
					var l = i === t ? [t] : [t, i];
					for (var u of l) {
						var c = o("MAWDbParticipant").craftParticipantId(a, u);
						n.get(c) == null && s.hydrate({
							deliveredWatermarkTs: r,
							id: c,
							lastReadActionTs: r,
							lastReadWatermarkTs: r,
							threadJid: a,
							type: "participant",
							userJid: u
						});
					}
				}
			}
		}
	}
	function E(e) {
		var t = e.isAdmin, n = e.isInvited, r = e.isSuperAdmin;
		return r ? "superadmin" : t ? "admin" : n ? "invitedParticipant" : "participant";
	}
	function k(e) {
		return I.apply(this, arguments);
	}
	function I() {
		return I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			if (e.length !== 0) try {
				var t = yield o("MAWBridge").getBridge().sendAndReceive("event", "getLSDBParticipants", { chatJids: [].concat(e) }, void 0, void 0, { toLastActiveClient: !0 }), n = s.committedView();
				for (var a of t) {
					var i = a[0], l = a[1];
					for (var u of l) {
						var d = o("MAWDbParticipant").craftParticipantId(i, u.userJid), m = o("WATimeUtils").castMilliSecondsToUnixTime(u.deliveredWatermarkTimestampMs), p = o("WATimeUtils").castMilliSecondsToUnixTime(u.readWatermarkTimestampMs), _ = o("WATimeUtils").castMilliSecondsToUnixTime(u.readActionTimestampMs), f = n.get(d);
						if (!(f == null && c.has(d))) {
							if (f == null) {
								s.hydrate({
									deliveredWatermarkTs: m,
									id: d,
									lastReadActionTs: _,
									lastReadWatermarkTs: p,
									threadJid: i,
									type: E(u),
									userJid: u.userJid
								});
								continue;
							}
							s.hydrate(babelHelpers.extends({}, f, {
								deliveredWatermarkTs: m > f.deliveredWatermarkTs ? m : f.deliveredWatermarkTs,
								lastReadActionTs: f.lastReadActionTs == null || _ > f.lastReadActionTs ? _ : f.lastReadActionTs,
								lastReadWatermarkTs: p > f.lastReadWatermarkTs ? p : f.lastReadWatermarkTs
							}));
						}
					}
				}
			} catch (e) {
				r("FBLogger")("wmi").catching(r("getErrorSafe")(e)).warn("Failed to hydrate in-memory participants store from LSDB");
			}
		}), I.apply(this, arguments);
	}
	var T = 8e3;
	function D(t) {
		if (t.length === 0) return (e || (e = n("Promise"))).resolve();
		var o = k(t), a = !1, i = new (e || (e = (n("Promise"))))(function(e) {
			r("setTimeout")(function() {
				a || r("FBLogger")("wmi").warn("Group participants hydration timed out; proceeding optimistically and reconciling async"), e();
			}, T);
		});
		return e.race([o.then(function() {
			a = !0;
		}), i]);
	}
	l.clearInMemoryParticipantStore = f, l.getReadwriteInMemoryParticipantsStore = g, l.getReadonlyInMemoryParticipantsStore = h, l.isInMemoryParticipantsStoreExperiment = y, l.hydrateParticipantsStore = C, l.getCommittedInMemoryParticipant = b, l.insertInMemoryParticipants = v, l.deleteInMemoryParticipants = S, l.updateInMemoryParticipantTypes = R, l.seedOneToOneParticipantsStore = L, l.hydrateParticipantsStoreFromLSDB = k, l.hydrateGroupParticipantsFromLSDBWithTimeout = D;
}), 98);

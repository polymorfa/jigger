__d("MAWInMemoryParticipantStore", [
	"FBLogger",
	"MAWBridge",
	"MAWDbParticipant",
	"MAWDexieTable",
	"MAWInMemoryStore",
	"MAWUserJidWrapper",
	"WAJids",
	"WATimeUtils",
	"clearTimeout",
	"getErrorSafe",
	"gkx",
	"setTimeout"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = new (o("MAWInMemoryStore")).MAWInMemoryStore("participants", function(e) {
		return e.id;
	}, null), s = 1e4, u = new Map(), c = function() {
		return o("MAWDexieTable").getDexiePSDItem("participantsAccessMode");
	};
	function d(e) {
		var t = u.get(e);
		t != null && r("clearTimeout")(t), u.delete(e);
	}
	function m(e) {
		d(e), u.set(e, r("setTimeout")(function() {
			u.delete(e);
		}, s));
	}
	function p() {
		u.forEach(function(e) {
			r("clearTimeout")(e);
		}), u.clear();
	}
	function _() {
		e.clear(), p();
	}
	function f() {
		return o("MAWInMemoryStore").getReadwriteInMemoryStore(e, c);
	}
	function g() {
		return o("MAWInMemoryStore").getReadonlyCommittedViewOfInMemoryStore(e);
	}
	function h() {
		return r("gkx")("26037");
	}
	function y(t, n) {
		h() && e.hydrate(babelHelpers.extends({}, n, { id: t }));
	}
	function C(t, n) {
		return e.getCommitted(o("MAWDbParticipant").craftParticipantId(t, n));
	}
	function b(t, n) {
		if (!h() || n.length === 0) return [];
		var r = o("WATimeUtils").castMilliSecondsToUnixTime(0);
		return n.map(function(n) {
			var a = {
				addressable: n.addressable,
				deliveredWatermarkTs: r,
				id: o("MAWDbParticipant").craftParticipantId(t, n.userJid),
				lastReadWatermarkTs: r,
				threadJid: t,
				type: n.type,
				userJid: n.userJid
			};
			return d(a.id), e.hydrate(a), a;
		});
	}
	function v(t, n) {
		if (!h() || n.length === 0) return [];
		var r = [];
		return n.forEach(function(n) {
			var a = C(t, n);
			a != null && r.push(a);
			var i = o("MAWDbParticipant").craftParticipantId(t, n);
			m(i), e.deleteCommitted(i);
		}), r;
	}
	function S(t, n, r) {
		if (!h() || n.length === 0) return [];
		var o = [];
		return n.forEach(function(n) {
			var a = C(t, n);
			if (a != null) {
				var i = babelHelpers.extends({}, a, { type: r });
				e.hydrate(i), o.push(i);
			}
		}), o;
	}
	function R(t) {
		if (!(!h() || t.length === 0)) {
			var n = o("MAWUserJidWrapper").getMyUserJid(), r = e.committedView(), a = o("WATimeUtils").castMilliSecondsToUnixTime(0);
			for (var i of t) {
				var l = o("WAJids").interpretAsUserJid(i);
				if (l != null) {
					var s = l === n ? [n] : [n, l];
					for (var u of s) {
						var c = o("MAWDbParticipant").craftParticipantId(i, u);
						r.get(c) == null && e.hydrate({
							deliveredWatermarkTs: a,
							id: c,
							lastReadActionTs: a,
							lastReadWatermarkTs: a,
							threadJid: i,
							type: "participant",
							userJid: u
						});
					}
				}
			}
		}
	}
	function L(e) {
		var t = e.isAdmin, n = e.isInvited, r = e.isSuperAdmin;
		return r ? "superadmin" : t ? "admin" : n ? "invitedParticipant" : "participant";
	}
	async function E(t) {
		if (t.length !== 0) try {
			var n = await o("MAWBridge").getBridge().sendAndReceive("event", "getLSDBParticipants", { chatJids: [].concat(t) }, void 0, void 0, { toLastActiveClient: !0 }), a = e.committedView();
			for (var i of n) {
				var l = i[0], s = i[1];
				for (var c of s) {
					var d = o("MAWDbParticipant").craftParticipantId(l, c.userJid), m = o("WATimeUtils").castMilliSecondsToUnixTime(c.deliveredWatermarkTimestampMs), p = o("WATimeUtils").castMilliSecondsToUnixTime(c.readWatermarkTimestampMs), _ = o("WATimeUtils").castMilliSecondsToUnixTime(c.readActionTimestampMs), f = a.get(d);
					if (!(f == null && u.has(d))) {
						if (f == null) {
							e.hydrate({
								deliveredWatermarkTs: m,
								id: d,
								lastReadActionTs: _,
								lastReadWatermarkTs: p,
								threadJid: l,
								type: L(c),
								userJid: c.userJid
							});
							continue;
						}
						e.hydrate(babelHelpers.extends({}, f, {
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
	}
	var k = 8e3;
	function I(e) {
		if (e.length === 0) return Promise.resolve();
		var t = E(e), n = !1, o = new Promise(function(e) {
			r("setTimeout")(function() {
				n || r("FBLogger")("wmi").warn("Group participants hydration timed out; proceeding optimistically and reconciling async"), e();
			}, k);
		});
		return Promise.race([t.then(function() {
			n = !0;
		}), o]);
	}
	l.clearInMemoryParticipantStore = _, l.getReadwriteInMemoryParticipantsStore = f, l.getReadonlyInMemoryParticipantsStore = g, l.isInMemoryParticipantsStoreExperiment = h, l.hydrateParticipantsStore = y, l.getCommittedInMemoryParticipant = C, l.insertInMemoryParticipants = b, l.deleteInMemoryParticipants = v, l.updateInMemoryParticipantTypes = S, l.seedOneToOneParticipantsStore = R, l.hydrateParticipantsStoreFromLSDB = E, l.hydrateGroupParticipantsFromLSDBWithTimeout = I;
}), 98);

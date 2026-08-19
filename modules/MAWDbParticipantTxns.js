__d("MAWDbParticipantTxns", [
	"MAWBridgeParticipants",
	"MAWBridgeTypesCreators",
	"MAWCurrentUser",
	"MAWDbParticipant",
	"MAWDexieTable",
	"MAWInMemoryParticipantStore",
	"MAWIndexedDb",
	"MAWODSProxy",
	"MAWUserJidWrapper",
	"MWFBLogger",
	"WAJids",
	"WAOdsEnums",
	"WAResultOrError",
	"WATimeUtils",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(e, t, n, r) {
		return r === void 0 && (r = !0), p(e, n.map(function(e) {
			return babelHelpers.extends({}, e, { chatJid: t });
		}), r);
	}
	function d(e, t) {
		o("WAJids").switchOnMsgrChatJidType(e.threadJid, {
			group: r("emptyFunction"),
			user: function(r) {
				e.userJid !== r && e.userJid !== o("MAWUserJidWrapper").getMyUserJid() && o("MWFBLogger").MWLogger().tags(["db", "txn"]).mustfix("Attempting to insert participant to a mismatched one-on-one thread at %s", t);
			}
		});
	}
	function m(e) {
		var t = e.addressable, n = e.chatJid, r = e.type, a = e.userJid;
		return {
			addressable: t,
			deliveredWatermarkTs: o("WATimeUtils").castToUnixTime(0),
			id: o("MAWDbParticipant").craftParticipantId(n, a),
			lastReadWatermarkTs: o("WATimeUtils").castToUnixTime(0),
			threadJid: n,
			type: r != null ? r : "participant",
			userJid: a
		};
	}
	function p(e, t, n) {
		if (n === void 0 && (n = !0), t.length === 0) return o("MAWDexieTable").dexieResolve([]);
		var r = t.map(function(e) {
			return m(e);
		});
		r.forEach(function(e) {
			return d(e, "bulkAddParticipantsInThreads");
		});
		var a = function() {
			return n && o("MAWIndexedDb").afterTransaction({
				tag: "ParticipantsUpdated",
				value: o("MAWBridgeParticipants").createBridgeParticipants(r)
			}), r;
		};
		return o("MAWInMemoryParticipantStore").isInMemoryParticipantsStoreExperiment() ? (o("MAWInMemoryParticipantStore").getReadwriteInMemoryParticipantsStore().bulkPut(r), o("MAWDexieTable").dexieResolve(a())) : e.participants.bulkPut(r).then(a);
	}
	function _(e, t, n, r) {
		r === void 0 && (r = !0);
		var a = new Set([t, o("MAWUserJidWrapper").getMyUserJid()]), i = n.filter(function(e) {
			var t = e.userJid;
			return !a.has(t);
		}).map(function(e) {
			var t = e.threadJid, n = e.userJid;
			return [t, n];
		});
		return i.length > 0 && o("MAWODSProxy").odsBumpEntityKey({
			amount: 1,
			entity: o("WAOdsEnums").Entity.MAW_ONE_TO_ONE_THREAD_PARTICIPANT_CLEANUP,
			key: o("MAWCurrentUser").isEmployee() ? "employee" : "public"
		}), b(e, i, r);
	}
	function f(e, t, n, r) {
		r === void 0 && (r = !0);
		var a = Array.from(new Set([t, o("MAWUserJidWrapper").getMyUserJid()])), i = new Set(n.map(function(e) {
			return e.userJid;
		})), l = a.filter(function(e) {
			return !i.has(e);
		}), s = l.map(function(e) {
			return {
				type: "participant",
				userJid: e
			};
		});
		return c(e, t, s, r).then(function(e) {
			var t = a.reduce(function(t, r) {
				var o = e.find(function(e) {
					return e.userJid === r;
				}), a = n.find(function(e) {
					return e.userJid === r;
				});
				return o != null && a == null ? t.push(o) : a != null && t.push(a), t;
			}, []);
			return t;
		});
	}
	function g(e, t, n) {
		return n === void 0 && (n = !0), L(e, t).then(function(r) {
			return _(e, t, r, n).then(function(o) {
				return f(e, t, r, n);
			});
		});
	}
	function h(e, t) {
		t.forEach(function(e) {
			return d(e, "bulkUpdateParticipants");
		});
		var n = function() {
			return t.length > 0 && o("MAWIndexedDb").afterTransaction({
				tag: "ParticipantsUpdated",
				value: o("MAWBridgeParticipants").createBridgeParticipants(t)
			}), t;
		};
		return o("MAWInMemoryParticipantStore").isInMemoryParticipantsStoreExperiment() ? (o("MAWInMemoryParticipantStore").getReadwriteInMemoryParticipantsStore().bulkPut(t), o("MAWDexieTable").dexieResolve(n())) : e.participants.bulkPut(t).then(n);
	}
	function y(e, t, n) {
		if (n.length === 0) return o("MAWDexieTable").dexieResolve();
		var r = n.map(function(e) {
			return [t, e];
		});
		return b(e, r);
	}
	function C(e, t, n) {
		if (t.length === 0) return o("MAWDexieTable").dexieResolve();
		var r = t.map(function(e) {
			return [e, n];
		});
		return b(e, r);
	}
	function b(e, t, n) {
		n === void 0 && (n = !0);
		var r = function(t) {
			n && t.forEach(function(e) {
				var t = e.threadJid, n = e.userJid;
				return o("MAWIndexedDb").afterTransaction({
					tag: "ParticipantRemoved",
					value: {
						threadJid: t,
						userId: o("WAJids").extractUserId(n)
					}
				});
			});
		};
		if (o("MAWInMemoryParticipantStore").isInMemoryParticipantsStoreExperiment()) {
			var a = o("MAWInMemoryParticipantStore").getReadwriteInMemoryParticipantsStore(), i = t.map(function(e) {
				var t = e[0], n = e[1];
				return o("MAWDbParticipant").craftParticipantId(t, n);
			}), l = i.map(function(e) {
				return a.get(e);
			}).filter(Boolean);
			return i.forEach(function(e) {
				return a.delete(e);
			}), r(l), o("MAWDexieTable").dexieResolve();
		}
		return e.participants.where(["threadJid", "userJid"]).anyOf(t).toArray().then(function(t) {
			return e.participants.bulkDelete(t.map(function(e) {
				return e.id;
			})).then(function() {
				r(t);
			});
		});
	}
	function v(e, t) {
		if (o("MAWInMemoryParticipantStore").isInMemoryParticipantsStoreExperiment()) {
			var n = o("MAWInMemoryParticipantStore").getReadwriteInMemoryParticipantsStore(), r = n.getAll().filter(function(e) {
				return e.threadJid === t;
			});
			return r.forEach(function(e) {
				return n.delete(e.id);
			}), o("MAWDexieTable").dexieResolve(r.length);
		}
		return e.participants.where("threadJid").equals(t).delete();
	}
	function S(e, t, n, r, o) {
		return R(e, [{
			deliveredWatermarkTs: n,
			lastReadActionTs: o,
			lastReadWatermarkTs: r,
			participantKey: t
		}]).then(function(e) {
			return e[0];
		});
	}
	function R(t, n, r) {
		if (n.length === 0) return o("MAWDexieTable").dexieResolve([]);
		var a = new Map(), i = [];
		n.forEach(function(e) {
			i.push(e.participantKey), a.set(JSON.stringify(e.participantKey), e);
		});
		var l = function(l) {
			l.length !== i.length && r != null && r.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"bulkUpdateParticipantTimestamps: missing participants ",
				" vs ",
				""
			])), l.length, i.length);
			var n = [], c = [];
			l.forEach(function(e) {
				var t = a.get(JSON.stringify([e.threadJid, e.userJid]));
				if (t == null) {
					r != null && r.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
						"bulkUpdateParticipantTimestamps: missing tsData for participant ",
						", ",
						""
					])), e.threadJid, e.userJid);
					return;
				}
				var o = t.deliveredWatermarkTs, i = t.lastReadActionTs, l = t.lastReadWatermarkTs, d = e.deliveredWatermarkTs, m = e.lastReadWatermarkTs, p = e.lastReadActionTs, _ = o > d, f = l > m, g = p == null || i > p;
				if (r != null && r.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
					"bulkUpdateParticipantTimestamps: participant ",
					", ",
					" deliveredWatermarkTs: ",
					", lastReadWatermarkTs: ",
					", lastReadActionTs: ",
					""
				])), e.threadJid, e.userJid, o, l, i), !_ && !f && !g) {
					c.push(e);
					return;
				}
				n.push(babelHelpers.extends({}, e, {
					deliveredWatermarkTs: _ ? o : d,
					lastReadActionTs: g ? i : p,
					lastReadWatermarkTs: f ? l : m
				}));
			}), n.forEach(function(e) {
				return d(e, "bulkUpdateParticipantTimestamps");
			});
			var m = function() {
				return n.forEach(function(e) {
					o("MAWIndexedDb").afterTransaction({
						tag: "ReceivedReceipt",
						value: o("MAWBridgeTypesCreators").createBridgeReceivedReceipt(e.threadJid, o("WAJids").extractUserId(e.userJid), e.deliveredWatermarkTs)
					});
				}), [].concat(n, c);
			};
			return o("MAWInMemoryParticipantStore").isInMemoryParticipantsStoreExperiment() ? (o("MAWInMemoryParticipantStore").getReadwriteInMemoryParticipantsStore().bulkPut(n), o("MAWDexieTable").dexieResolve(m())) : t.participants.bulkPut(n).then(m);
		};
		if (o("MAWInMemoryParticipantStore").isInMemoryParticipantsStoreExperiment()) {
			var c = o("MAWInMemoryParticipantStore").getReadwriteInMemoryParticipantsStore(), m = i.map(function(e) {
				var t = e[0], n = e[1];
				return c.get(o("MAWDbParticipant").craftParticipantId(t, n));
			}).filter(Boolean);
			return l(m);
		}
		return t.participants.where(["threadJid", "userJid"]).anyOf(i).toArray().then(l);
	}
	function L(e, t) {
		return o("MAWInMemoryParticipantStore").isInMemoryParticipantsStoreExperiment() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryParticipantStore").getReadonlyInMemoryParticipantsStore().getAll().filter(function(e) {
			return e.threadJid === t;
		})) : e.participants.where("threadJid").equals(t).toArray();
	}
	function E(e, t) {
		if (o("MAWInMemoryParticipantStore").isInMemoryParticipantsStoreExperiment()) {
			var n = new Set(t);
			return o("MAWDexieTable").dexieResolve(o("MAWInMemoryParticipantStore").getReadonlyInMemoryParticipantsStore().getAll().filter(function(e) {
				return n.has(e.threadJid);
			}));
		}
		return e.participants.where("threadJid").anyOf(t).toArray();
	}
	function k(e, t) {
		return L(e, t).then(function(e) {
			return e.filter(function(e) {
				return e.type === "invitedParticipant";
			});
		});
	}
	function I(e, t, n) {
		if (o("MAWInMemoryParticipantStore").isInMemoryParticipantsStoreExperiment()) {
			var r = o("MAWInMemoryParticipantStore").getReadonlyInMemoryParticipantsStore().get(o("MAWDbParticipant").craftParticipantId(t, n));
			return o("MAWDexieTable").dexieResolve(r == null ? o("WAResultOrError").makeError("missing") : o("WAResultOrError").makeResult(r));
		}
		return e.participants.where(["threadJid", "userJid"]).equals([t, n]).first().then(function(e) {
			return e == null ? o("WAResultOrError").makeError("missing") : o("WAResultOrError").makeResult(e);
		});
	}
	function T(e, t) {
		if (o("MAWInMemoryParticipantStore").isInMemoryParticipantsStoreExperiment()) {
			var n = o("MAWInMemoryParticipantStore").getReadonlyInMemoryParticipantsStore();
			return o("MAWDexieTable").dexieResolve(t.map(function(e) {
				var t = e[0], r = e[1];
				return n.get(o("MAWDbParticipant").craftParticipantId(t, r));
			}));
		}
		return e.participants.where(["threadJid", "userJid"]).anyOf(t).toArray().then(function(e) {
			var n = new Map(e.map(function(e) {
				return [JSON.stringify([e.threadJid, e.userJid]), e];
			}));
			return t.map(function(e) {
				return n.get(JSON.stringify(e));
			});
		});
	}
	function D(e, t) {
		return o("MAWInMemoryParticipantStore").isInMemoryParticipantsStoreExperiment() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryParticipantStore").getReadonlyInMemoryParticipantsStore().some(function(e) {
			return e.threadJid === t;
		})) : e.participants.where("threadJid").equals(t).first().then(function(e) {
			return e != null;
		});
	}
	l.bulkAddParticipants = c, l.logIfIllegalParticipant = d, l.bulkAddParticipantsInThreads = p, l.addMissingParticipantsInOneToOneThread = f, l.bulkRemoveIncorrectAndInsertMissingParticipantsInOneToOneThread = g, l.bulkUpdateParticipants = h, l.bulkDeleteParticipantsInThread = y, l.bulkDeleteParticipantAcrossThreads = C, l.bulkDeleteParticipants = b, l.deleteAllParticipantsForThread = v, l.updateParticipantTimestamps = S, l.bulkUpdateParticipantTimestamps = R, l.getParticipantsInThread = L, l.getParticipantsInThreads = E, l.getInvitedParticipantsInThread = k, l.getParticipant = I, l.bulkGetParticipants = T, l.hasAnyParticipantInThread = D;
}), 98);

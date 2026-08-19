__d("MAWParticipantsStore", [
	"MAWBridgeParticipants",
	"MAWBridgeTypesCreators",
	"MAWDbParticipant",
	"MAWDbParticipantTxns",
	"MAWDbThreadTxns",
	"MAWDexieCastToPromise",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WAArrayGroupBy",
	"WAArrayZip",
	"WAGlobals",
	"WAJids",
	"WAResultOrError",
	"WAResultOrErrorUtils",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function(t) {
		var e = this;
		this.bulkGetInGroup = function(t) {
			var n = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(t)) : e.db.threads.get({ jid: t });
			return o("MAWDexieCastToPromise").dexieCastToPromise_I_KNOW_WHAT_I_AM_DOING(n.then(function(t) {
				var n = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(t, "MAWParticipantsStore.bulkGetInGroup");
				return n != null ? o("MAWDbParticipantTxns").getParticipantsInThread(e.db, n.jid).then(function(e) {
					return o("WAResultOrError").makeResult(e.map(function(e) {
						return s(e, n.jid);
					}));
				}) : o("WAResultOrError").makeError("missing_group");
			}));
		}, this.bulkPut = function(t) {
			return o("MAWDexieCastToPromise").dexieCastToPromise_I_KNOW_WHAT_I_AM_DOING(d(e.db, t.map(function(e) {
				var t = e.chatJid;
				return t;
			})).then(function(e) {
				return o("WAResultOrErrorUtils").unpackValues(t.map(function(t) {
					return e.has(t.chatJid) ? o("WAResultOrError").makeResult({
						participantId: o("MAWDbParticipant").craftParticipantId(t.chatJid, t.user),
						waParticipant: t
					}) : o("WAResultOrError").makeError();
				}));
			}).then(function(t) {
				return e.db.participants.bulkGet(t.map(function(e) {
					var t = e.participantId;
					return t;
				})).then(function(e) {
					return o("WAArrayZip").zip(t, e).map(function(e) {
						var t = e[0].waParticipant, n = e[1];
						return {
							chatJid: t.chatJid,
							dbParticipantToPut: babelHelpers.extends({
								deliveredWatermarkTs: o("WATimeUtils").castToUnixTime(0),
								lastReadWatermarkTs: o("WATimeUtils").castToUnixTime(0)
							}, n, u(t)),
							existed: n != null,
							participant: t
						};
					});
				});
			}).then(function(t) {
				var n = t.map(function(e) {
					var t = e.dbParticipantToPut;
					return babelHelpers.extends({}, t);
				});
				return n.forEach(function(e) {
					return o("MAWDbParticipantTxns").logIfIllegalParticipant(e, "MAWParticipantsStore::bulkPut");
				}), e.db.participants.bulkPut(n).then(function() {
					return m(e.db, t);
				});
			}));
		}, this.bulkDelete = function(t, n) {
			var r = n || {}, a = r.remover, i = o("WAArrayGroupBy").groupBy(t.map(function(e, t) {
				return {
					index: t,
					key: e
				};
			}), function(e) {
				var t = e.key;
				return t.groupJid;
			}), l = i.map(function(e) {
				var t = e[0];
				return t;
			});
			return o("MAWDexieCastToPromise").dexieCastToPromise_I_KNOW_WHAT_I_AM_DOING(d(e.db, l).then(function(e) {
				return i.flatMap(function(t) {
					var n = t[0], r = t[1];
					return r.map(function(t) {
						var r = t.index, a = t.key;
						return e.has(n) ? o("WAResultOrError").makeResult({
							groupJid: n,
							index: r,
							participantId: o("MAWDbParticipant").craftParticipantId(n, a.userJid),
							participantKey: [n, a.userJid],
							userJid: a.userJid
						}) : o("WAResultOrError").makeError({
							index: r,
							message: "missing_group"
						});
					});
				});
			}).then(function(t) {
				var n = o("WAResultOrErrorUtils").unpackValues(t), r = o("WAResultOrErrorUtils").unpackErrors(t).map(function(e) {
					return o("WAResultOrError").makeError(e);
				}), a = n.map(function(e) {
					var t = e.participantId;
					return t;
				});
				return e.db.participants.bulkGet(a).then(function(e) {
					return o("WAArrayZip").zip(n, e).map(function(e) {
						var t = e[0], n = e[1];
						return n == null ? o("WAResultOrError").makeError({
							index: t.index,
							message: "missing_participant"
						}) : o("WAResultOrError").makeResult(t);
					}).concat(r);
				});
			}).then(function(t) {
				var n = o("WAResultOrErrorUtils").unpackValues(t), r = n.map(function(e) {
					var t = e.participantKey;
					return t;
				}), i = n.map(function(e) {
					var t = e.groupJid, n = e.userJid;
					return {
						groupJid: t,
						userJid: n
					};
				});
				return o("MAWDbParticipantTxns").bulkDeleteParticipants(e.db, r).then(function() {
					return p(e.db, i, a);
				}).then(function() {
					return t;
				});
			}).then(function(e) {
				return e.map(function(e) {
					return e.success ? {
						index: e.value.index,
						result: o("WAResultOrError").makeResult()
					} : {
						index: e.error.index,
						result: o("WAResultOrError").makeError(e.error.message)
					};
				}).sort(function(e, t) {
					var n = e.index, r = t.index;
					return n - r;
				}).map(function(e) {
					var t = e.result;
					return t;
				});
			}));
		}, this.clear = function() {
			return o("MAWDexieCastToPromise").dexieCastToPromise_I_KNOW_WHAT_I_AM_DOING(e.db.participants.clear());
		}, this.db = t;
	};
	e.tableLocks = {
		participants: o("MAWTransactionMode").READWRITE,
		threads: o("MAWTransactionMode").READWRITE
	};
	function s(e, t) {
		var n = e.addressable != null ? { addressable: e.addressable } : null;
		return babelHelpers.extends({
			chatJid: t,
			type: e.type,
			user: e.userJid
		}, n);
	}
	function u(e) {
		return {
			addressable: e.addressable,
			id: o("MAWDbParticipant").craftParticipantId(e.chatJid, e.user),
			threadJid: e.chatJid,
			type: e.type,
			userJid: e.user
		};
	}
	function c(e) {
		return e.map(function(e) {
			return e.user;
		}).filter(function(e) {
			return e === o("WAGlobals").getMyUserJid() || o("WAJids").isAuthorMe(e);
		}).length > 0;
	}
	function d(e, t) {
		var n = e.threads;
		return n.where("jid").anyOf(t).toArray().then(function(e) {
			return new Set(e.map(function(e) {
				var t = e.jid;
				return t;
			}));
		});
	}
	function m(e, t) {
		var n = t.filter(function(e) {
			var t = e.existed;
			return !t;
		}).map(function(e) {
			var t = e.chatJid, n = e.participant;
			return {
				chatJid: t,
				participant: n
			};
		}), r = o("WAArrayGroupBy").groupBy(n, function(e) {
			var t = e.chatJid;
			return t;
		}).map(function(e) {
			var t = e[0], n = e[1];
			return [t, n.map(function(e) {
				var t = e.participant;
				return t;
			})];
		});
		t.forEach(function(e) {
			var t = e.dbParticipantToPut;
			o("MAWIndexedDb").afterTransaction({
				tag: "ParticipantsUpdated",
				value: { participants: [o("MAWBridgeParticipants").createBridgeParticipant(t)] }
			});
		});
		var a = r.filter(function(e) {
			var t = e[0], n = e[1];
			return c(n);
		}).map(function(e) {
			var t = e[0];
			return t;
		});
		return o("MAWDbThreadTxns").subscribeToThreads(e, a);
	}
	function p(e, t, n) {
		var r = Array.from(t);
		r.forEach(function(e) {
			var t = e.groupJid;
			return o("MAWIndexedDb").afterTransaction({
				tag: "UpdateE2EEMetadataParticipants",
				value: o("MAWBridgeTypesCreators").createBridgeUpdateE2EEMetadataParticipants(t)
			});
		});
		var a = new Set(r.filter(function(e) {
			return e.userJid === o("WAGlobals").getMyUserJid() && (n === o("WAGlobals").getMyUserJid() || n === "@me");
		}).map(function(e) {
			return e.groupJid;
		})), i = new Set(r.filter(function(e) {
			var t = e.userJid;
			return t !== n && (t === o("WAGlobals").getMyUserJid() || o("WAJids").isAuthorMe(t));
		}).filter(function(e) {
			var t = e.groupJid;
			return !a.has(t);
		}).map(function(e) {
			var t = e.groupJid;
			return t;
		}));
		return o("MAWDexieTable").dexieAll([o("MAWDbThreadTxns").archiveThreads(e, Array.from(a), !0), o("MAWDbThreadTxns").unsubscribeFromThreads(e, Array.from(i))]);
	}
	l.MAWParticipantsStore = e;
}), 98);

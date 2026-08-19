__d("WAInMemorySignalStore", [
	"MAWMpsGating",
	"Promise",
	"WAArmadilloTransportEvent.pb",
	"WABuildMpsPayload",
	"WACryptoManager",
	"WACryptoUtils",
	"WAGlobals",
	"WAIdentityUtils",
	"WAJids",
	"WAMPSFlushable",
	"WAProtocolQueue",
	"WAResultOrError",
	"WASignalEntityStoreV2",
	"WASignalIdentityStore",
	"WATagsLogger",
	"WATimeUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b = o("WATagsLogger").TAGS(["CryptoManager", "InMemorySignalStore"]), v = (function() {
		function t(e, t) {
			var r = this, a;
			this.loadSession = function(e, t) {
				return r.$1.load(e, function(e) {
					return r.$8.loadSession(e, t);
				});
			}, this.loadSessions = function(e) {
				return r.$1.bulkLoad(e, function(e) {
					return r.$8.loadSessions(e).then(function(e) {
						return new Map(Array.from(e.entries()).map(function(e) {
							return [e[0], e[1]];
						}));
					});
				}).then(function(e) {
					return new Map(Array.from(e.entries()).map(function(e) {
						return [e[0], e[1]];
					}));
				});
			}, this.loadSignedPreKey = function(e) {
				return r.$6.load(e, function() {
					return r.$8.loadSignedPreKey(e);
				});
			}, this.bulkLoadIdentities = function(e) {
				var t = new Map();
				return (C || (C = n("Promise"))).all(e.map(function(e) {
					return r.loadIdentities(e).then(function(n) {
						t.set(e, n);
					});
				})).then(function() {
					return t;
				});
			}, this.loadIdentities = function(e) {
				return r.$4.loadIdentitiesByUser(e, function() {
					return r.$8.loadIdentities(e);
				});
			}, this.saveIdentity = function(e, t) {
				return (C || (C = n("Promise"))).resolve(r.storeIdentity(e, t));
			}, this.loadOneTimePreKey = function(e) {
				return r.$5.load(e, function() {
					return r.$8.loadOneTimePreKey(e);
				});
			}, this.saveSenderKeySession = function(e, t, o) {
				return r.storeSenderKeySession(e, t, o), (C || (C = n("Promise"))).resolve();
			}, this.saveSignedPreKeyIfNew = function(e, t) {
				return r.$8.saveSignedPreKeyIfNew(e, t);
			}, this.loadSenderKeySession = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
					var a = yield r.$7.load(o("WACryptoManager").encodeSenderKey(e, t), n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
						var n = yield r.$8.loadSenderKeySession(e, t);
						return n.success ? n.value : null;
					}));
					return a == null ? o("WAResultOrError").makeError("errLoadSenderKeySession") : o("WAResultOrError").makeResult(a);
				});
				return function(t, n) {
					return e.apply(this, arguments);
				};
			})(), this.handleNewSession = function(e, t, a, i, l) {
				return r.storeSession(e, t), a != null && r.storeIdentity(e, a), i != null && r.removeOneTimePreKey(i), (C || (C = n("Promise"))).resolve(o("WAResultOrError").makeResult());
			}, this.saveLastSyncTs = function(e, t) {
				return r.$3.store(e, t), (C || (C = n("Promise"))).resolve();
			}, this.loadLastSyncTs = function(e) {
				return r.$3.load(e, function() {
					return r.$8.loadLastSyncTs(e);
				});
			}, this.saveDhash = function(e, t) {
				return r.$2.store(e, t), (C || (C = n("Promise"))).resolve();
			}, this.getLastPreKeyGenerationId = function() {
				return r.$8.getLastPreKeyGenerationId();
			}, this.savePreKeysGeneration = function(e) {
				return r.$8.savePreKeysGeneration(e);
			}, this.getPreKeyGenerationsTimestamps = function() {
				return r.$8.getPreKeyGenerationsTimestamps();
			}, this.deletePreKeyGenerations = function(e) {
				return r.$8.deletePreKeyGenerations(e);
			}, this.saveOneTimePreKey = function(e) {
				return r.$8.saveOneTimePreKey(e);
			}, this.loadPreKeys = function(e) {
				return r.$8.loadPreKeys(e);
			}, this.loadLatestSignedPreKey = function() {
				return r.$8.loadLatestSignedPreKey();
			}, this.$8 = e, this.$9 = t, this.$4 = new (o("WASignalIdentityStore")).SignalIdentityStore(), this.$1 = new (a = (o("WASignalEntityStoreV2"))).SignalEntityStore(), this.$2 = new a.SignalEntityStore(), this.$3 = new a.SignalEntityStore(), this.$5 = new a.SignalEntityStore(), this.$6 = new a.SignalEntityStore(), this.$7 = new a.SignalEntityStore();
		}
		var r = t.prototype;
		return r.storeSession = function(t, n) {
			this.$1.store(t, n);
		}, r.storeIdentity = function(t, n) {
			n && this.$4.store(t, n);
		}, r.removeOneTimePreKey = function(t) {
			this.$5.remove(t);
		}, r.storeSenderKeySession = function(t, n, r) {
			this.$7.store(o("WACryptoManager").encodeSenderKey(t, n), r);
		}, r.updateUserDevicesInfo = function(r) {
			var t = this;
			return (C || (C = n("Promise"))).all(r.map((function() {
				var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (r) {
					var a = yield t.loadIdentities(r.jid), i = r.devices, l = r.dhash, _ = r.jid, f = r.lastSyncTs, g = r.notificationTs;
					b.DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose([
						"Update user devices: userJid: ",
						"; new identities: ",
						"; previous identities: ",
						"}"
					])), _, i.map(function(e) {
						var t = e.id;
						return o("WAJids").toDeviceJid(r.jid, t);
					}).join(","), Array.from(a.keys()).join(","));
					var h = new Set(a.keys()), y = [], v = [];
					for (var S of i) {
						var R = S.id, L = S.identity, E = S.model, k = S.platform, I = o("WAJids").toDeviceJid(r.jid, R), T = a.get(I);
						if (o("WAGlobals").getMyDeviceJid() === I) {
							var D = o("WACryptoUtils").uint8ArraysEqual(o("WAIdentityUtils").removeKeyTypeIfNeeded(t.$9.staticKeyPair.publicKey), o("WAIdentityUtils").removeKeyTypeIfNeeded(L));
							D || b.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Receiving an identity for my device but it is different from original one"])));
						}
						if (h.delete(I), T == null) v.push({
							instruction: "identityAdded",
							jid: o("WAJids").extractUserJid(I),
							type: "instruction",
							device: I,
							identity: L,
							model: E,
							platform: k,
							notificationTs: g,
							priority: o("WAProtocolQueue").WAProtocolQueuePriorityLow
						});
						else if (!o("WACryptoUtils").uint8ArraysEqual(T, L)) {
							if (o("WAJids").extractUserJid(I) !== _) {
								b.ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Device notification of one user cannot remove session the other one"])));
								continue;
							}
							y.push(I), b.DEV(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Removing session dur to identity mismatch: ", ""])), I), v.push({
								instruction: "identityChanged",
								jid: o("WAJids").extractUserJid(I),
								type: "instruction",
								device: I,
								identity: L,
								model: E,
								platform: k,
								notificationTs: g,
								priority: o("WAProtocolQueue").WAProtocolQueuePriorityLow
							});
						}
					}
					var x = [];
					for (var $ of h) {
						if (o("WAJids").extractUserJid($) !== _) {
							b.ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Device notification of one user cannot remove identity the other one "])));
							continue;
						}
						x.push($), o("WAGlobals").getMyDeviceJid() === $ && b.ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Removing my device identity. This should not happen"]))), b.DEV(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Removing old identity: ", ""])), $), v.push({
							instruction: "identityRemoved",
							jid: o("WAJids").extractUserJid($),
							type: "instruction",
							device: $,
							notificationTs: g,
							priority: o("WAProtocolQueue").WAProtocolQueuePriorityLow
						});
					}
					return (C || (C = n("Promise"))).all([l != null ? t.saveDhash(_, l) : (C || (C = n("Promise"))).resolve(), f != null ? t.saveLastSyncTs(_, f) : (C || (C = n("Promise"))).resolve()].concat(Array.from(x).map(function(e) {
						return t.deleteIdentity(e);
					}), [x.concat(y).map(function(e) {
						return t.$10(e);
					})], i.map(function(e) {
						var n = e.id, r = e.identity;
						return t.saveIdentity(o("WAJids").toDeviceJid(_, n), r);
					}))).then(function() {
						return v;
					});
				});
				return function(e) {
					return r.apply(this, arguments);
				};
			})())).then(function(e) {
				var t = e.flat();
				t.forEach(function(e) {
					var t, n;
					switch (e.instruction) {
						case "identityAdded":
							n = o("WAArmadilloTransportEvent.pb").TransportEvent$Event$DeviceChange$Type.ADDED;
							break;
						case "identityChanged":
							n = o("WAArmadilloTransportEvent.pb").TransportEvent$Event$DeviceChange$Type.REPLACED;
							break;
						case "identityRemoved":
							n = o("WAArmadilloTransportEvent.pb").TransportEvent$Event$DeviceChange$Type.REMOVED;
							break;
						default: return;
					}
					var r = o("WAGlobals").getDependencies().generateExternalId();
					o("WAMPSFlushable").mpsFlushable.enqueue(o("WABuildMpsPayload").buildMpsDeviceChangeAdminMessage(e.jid, (t = e.notificationTs) != null ? t : o("WATimeUtils").unixTime(), r, n, e.platform, e.model), function(e) {
						if (e != null) {
							b.ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Failed to save device change admin message: ", ""])), e);
							return;
						}
					}, "handle_device_change"), o("MAWMpsGating").isFullMpsEnabled() || o("WAProtocolQueue").pqFlushable.enqueue(e);
				}), o("MAWMpsGating").isFullMpsEnabled() && o("WAGlobals").getDependencies().recordDeviceChangeHistory(t.map(function(e) {
					var t, n, r;
					if (e.device == null) return null;
					var a = e.device;
					switch (e.instruction) {
						case "identityAdded": return {
							jid: e.jid,
							deviceChangeType: o("WAArmadilloTransportEvent.pb").TransportEvent$Event$DeviceChange$Type.ADDED,
							platform: e.platform,
							model: e.model,
							device: a,
							identity: e.identity,
							ts: (t = e.notificationTs) != null ? t : o("WATimeUtils").unixTime()
						};
						case "identityChanged": return {
							jid: e.jid,
							deviceChangeType: o("WAArmadilloTransportEvent.pb").TransportEvent$Event$DeviceChange$Type.REPLACED,
							platform: e.platform,
							model: e.model,
							device: a,
							identity: e.identity,
							ts: (n = e.notificationTs) != null ? n : o("WATimeUtils").unixTime()
						};
						case "identityRemoved": return {
							jid: e.jid,
							deviceChangeType: o("WAArmadilloTransportEvent.pb").TransportEvent$Event$DeviceChange$Type.REMOVED,
							device: a,
							ts: (r = e.notificationTs) != null ? r : o("WATimeUtils").unixTime()
						};
						default: return null;
					}
				}).filter(Boolean)).catch(function(e) {
					b.ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Failed to record device change history: ", ""])), e);
				});
			}).then(function() {});
		}, r.savePendingToDatabase = function() {
			var e = this, t = this.$11();
			return t == null ? (C || (C = n("Promise"))).resolve() : (b.DEV(g || (g = babelHelpers.taggedTemplateLiteralLoose(["Snapshot: ", ""])), t), b.LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["Snapshot save: start"]))), this.$8.bulkSaveSignalData(t).then(function() {
				b.LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["Snapshot save: end"]))), e.$12();
			}, function(t) {
				return e.$13(), (C || (C = n("Promise"))).reject(t);
			}));
		}, r.clear = function() {
			this.$1.clear(), this.$4.clear(), this.$5.clear(), this.$6.clear(), this.$7.clear(), this.$2.clear();
		}, r.deleteIdentity = function(t) {
			return this.$4.remove(t), (C || (C = n("Promise"))).resolve();
		}, r.$10 = function(t) {
			return this.$1.remove(t), (C || (C = n("Promise"))).resolve();
		}, r.$12 = function() {
			this.$1.markSnapshotAsCommitted(), this.$2.markSnapshotAsCommitted(), this.$3.markSnapshotAsCommitted(), this.$4.markSnapshotAsCommitted(), this.$5.markSnapshotAsCommitted(), this.$6.markSnapshotAsCommitted(), this.$7.markSnapshotAsCommitted();
		}, r.$13 = function() {
			this.$1.markSnapshotAsFailed(), this.$2.markSnapshotAsFailed(), this.$3.markSnapshotAsFailed(), this.$4.markSnapshotAsFailed(), this.$5.markSnapshotAsFailed(), this.$6.markSnapshotAsFailed(), this.$7.markSnapshotAsFailed();
		}, r.$11 = function() {
			var e = this.$1.snapshot(), t = [], n = e.remove.map(function(e) {
				return e.id;
			});
			e.update.forEach(function(e) {
				var n = e.cachedEntity, r = e.id;
				n != null && t.push({
					id: r,
					updated: n
				});
			});
			var r = [];
			this.$7.snapshot().update.forEach(function(e) {
				var t = o("WACryptoManager").decodeSenderKey(e.id), n = t.deviceId, a = t.groupId;
				e.cachedEntity != null && a && n && r.push({
					groupId: a,
					author: n,
					updated: e.cachedEntity
				});
			});
			var a = this.$4.snapshot(), i = a.remove.map(function(e) {
				return e.id;
			}), l = [];
			a.update.forEach(function(e) {
				var t = e.cachedEntity, n = e.id;
				t != null && l.push({
					id: n,
					identity: t
				});
			});
			var s = this.$5.snapshot().remove, u = this.$2.snapshot(), c = [];
			for (var d of u.update) {
				var m = d.cachedEntity, p = d.id;
				m != null && c.push({
					id: p,
					dhash: m
				});
			}
			var _ = this.$3.snapshot(), f = [];
			for (var g of _.update) {
				var h = g.cachedEntity, y = g.id;
				h != null && f.push({
					id: y,
					lastSyncTs: h
				});
			}
			return t.length === 0 && n.length === 0 && l.length === 0 && r.length === 0 && s.length === 0 && c.length === 0 && f.length === 0 && i.length === 0 ? null : {
				dhashUpdate: c,
				identityRemove: i,
				identityUpdate: l,
				preKeyRemove: s,
				senderKeySessionUpdate: r,
				sessionRemove: n,
				sessionUpdate: t,
				lastSyncTsUpdate: f
			};
		}, r.warmCache = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = this, n = e.map(o("WAJids").interpretAsUserJid).filter(Boolean), r = yield this.$8.bulkLoadIdentities(n).then(function(e) {
					return t.$4.bulkLoadIdentities(e);
				}), a = Array.from(r.values()).reduce(function(e, t) {
					return e.concat(Array.from(t.keys()));
				}, []);
				yield this.loadSessions(a);
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(), t;
	})();
	l.InMemorySignalStoreImpl = v;
}), 98);

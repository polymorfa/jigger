__d("MWEARKeychainV3", [
	"$InternalEnum",
	"Deferred",
	"ExecutionEnvironment",
	"FBLogger",
	"LSPlatformLsInitLog",
	"MAWCryptoConsts",
	"MAWCurrentUser",
	"MAWEARGenNewKeychainCryptoKey",
	"MAWGenKeychainCryptoKeyWithVersion",
	"MAWQplProxy",
	"MAWReliabilityMonitor",
	"MWEARKeychainV3Errors",
	"MWTabCommunication",
	"Promise",
	"QPLUserFlow",
	"Random",
	"ReStoreTabNotifier",
	"WAArrayBufferUtils",
	"WAResultOrError",
	"WATimeUtils",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"gkx",
	"memoizeOneWithArgs",
	"promiseDone",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = function() {
		return {
			accountKey: null,
			databaseEncryptionKeys: new Map(),
			dbReady: new (r("Deferred"))(),
			latestVersion: o("MAWCryptoConsts").VERSION
		};
	}, c = {
		global_ear: u(),
		maw_ear: u()
	}, d = null, m = (function() {
		var e = Object.keys(c).reduce(function(e, t) {
			return e[t] = "none", e;
		}, {});
		return {
			get: function(n) {
				return e[n];
			},
			is: function(n, r) {
				return e[n] === r;
			},
			set: function(n, r) {
				var t;
				e[n] = r, (t = d) == null || t.updateState();
			}
		};
	})();
	function p(e) {
		c[e] = u(), m.set(e, "none");
	}
	function _(e, t) {
		m.set(e, t);
	}
	function f(e) {
		for (var t = o("Random").uint32(); e.some(function(e) {
			return e.randomisedVersion === t;
		});) t = o("Random").uint32();
		return t;
	}
	var g = {
		global_ear: function() {
			return null;
		},
		maw_ear: function() {
			return null;
		}
	}, h = function(t) {
		return g[t]();
	}, y = function(t, n) {
		g[t] = function() {
			return n;
		};
	}, C = function(t, n) {
		y(t, n), k(t).dbReady.resolve();
	}, b = {
		global_ear: "browserEncryptionMetaV2",
		maw_ear: "encryptionMetaV3"
	}, v = r("memoizeOneWithArgs")(function(e, t) {
		return new (o("MWTabCommunication")).MWTabCommunication("ear_keys_" + t + "_" + e);
	});
	function S(e, t, n) {
		return R.apply(this, arguments);
	}
	function R() {
		return R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var a;
			if (n === void 0 && (n = U), r("gkx")("9396") && r("FBLogger")("messenger_web").info("Initialise EAR keychain: %s", e), d = B(e), m.is(e, "success") && k(e).databaseEncryptionKeys.size !== 0) return o("WAResultOrError").makeResult(E(e));
			var i = o("MAWCurrentUser").getID(), l = r("ReStoreTabNotifier")("channel-ear-keychain-v3-" + i);
			l.onEventReceive("notifyEarKeychainV2", w);
			var u = (s || (s = r("ExecutionEnvironment"))).isInWorker ? "Worker" : "UI";
			n(e + "_ear_init_start", { string: (a = {}, a["initFlow_" + e + "_" + u] = t, a) });
			try {
				var c, p = yield W(l, e, void 0, n);
				n(e + "_ear_import_end");
				for (var _ of p) k(e).databaseEncryptionKeys.set(_.result.version, {
					dbEntry: _.entry,
					keys: _.result.keys
				});
				return M(e), v(e, i).listenToRequest(function() {
					return JSON.stringify(Array.from(k(e).databaseEncryptionKeys.entries()).map(function(e) {
						var t = e[0], n = e[1], r = n.dbEntry, a = n.keys;
						return [t, {
							dbEntry: r,
							keys: a.map(function(e) {
								return o("WAArrayBufferUtils").arrayBufferToString(e);
							})
						}];
					}));
				}), n(e + "_ear_init_end", { string_array: (c = {}, c[e + "_randomisedVersionKeys" + u] = L(e).map(function(e) {
					var t = e[0], n = e[1].dbEntry;
					return String(n.randomisedVersion);
				}), c) }), m.set(e, "success"), o("WAResultOrError").makeResult(E(e));
			} catch (t) {
				return m.set(e, "failure"), n(e + "_ear_init_error"), r("gkx")("9396") && r("FBLogger")("messenger_web").catching(r("getErrorSafe")(t)).mustfix("Failed to setup EAR Keychain V3. Namespace: %s", e), o("WAResultOrError").DEPRECATED_makeError("keychain-setup-failure", r("getErrorSafe")(t));
			}
		}), R.apply(this, arguments);
	}
	function L(e) {
		return Array.from(k(e).databaseEncryptionKeys.entries());
	}
	function E(e) {
		return k(e).latestVersion;
	}
	function k(e) {
		return c[e];
	}
	function I(e, t) {
		var n = t != null ? t : E(e), a = k(e).databaseEncryptionKeys.get(n);
		if (a == null) {
			r("promiseDone")($(e).then(function(e) {
				var t = e.map(function(e) {
					return e.version;
				}).includes(n);
				r("FBLogger")("messenger_web").info("EAR Keychain DB match found: %s. Version = %s. NumberVersions = %s", t, n, e.length);
			}));
			var i = E(e), l = Array.from(k(e).databaseEncryptionKeys.keys());
			throw r("FBLogger")("messenger_web").mustfix("EAR Key v%s was null. Latest version: %s has key: %s, keychain length: %s, currentLatestVersion: %s, init status %s, in worker %s", n, i, k(e).databaseEncryptionKeys.get(i) == null, k(e).databaseEncryptionKeys.size, Math.max.apply(Math, l), m.get(e), (s || (s = r("ExecutionEnvironment"))).isInWorker), new (o("MWEARKeychainV3Errors")).EARKeychainNotFoundError("EAR Key " + n + " was null.");
		}
		return {
			dbEntry: a.dbEntry,
			keys: a.keys,
			randomisedVersion: a.dbEntry.randomisedVersion,
			version: n
		};
	}
	function T(e) {
		return r("MAWGenKeychainCryptoKeyWithVersion")(e.key, e.seed, e.version, e.formatVersion, e.accountKeyString, e.userKeyBaseString, e.appIdOrigin);
	}
	var D = n("$InternalEnum")({
		UNKNOWN: -1,
		NO_KEY: 0,
		EBSM_EARV2_UPGRADE: 1,
		RANDOMISED_VERSION_UPGRADE: 2,
		EXPIRED_KEY: 3,
		FORCE_KEY_ROTATION: 4
	});
	function x(e) {
		if (e.length === 0) return {
			reason: D.NO_KEY,
			result: !0
		};
		var t = e[e.length - 1];
		return o("WATimeUtils").isInFuture(t.expiration) ? { result: !1 } : {
			reason: D.EXPIRED_KEY,
			result: !0
		};
	}
	function $(t) {
		var r = N(t, "readonly");
		return new (e || (e = (n("Promise"))))(function(e, n) {
			r.onabort = function() {
				return n(r.error);
			}, r.onerror = function() {
				return n(r.error);
			};
			var o = r.objectStore(b[t]).getAll();
			o.onsuccess = function() {
				return e(o.result);
			}, o.onerror = function() {
				return n(o.error);
			};
		}).then(P);
	}
	function P(e) {
		var t = e.find(function(e) {
			return e.version == null;
		});
		t != null && r("FBLogger")("messenger_web").mustfix("EAR Keychain Rotation null version: fields nonnull: %s %s %s %s %s %s", t.id == null, t.key == null, t.seed == null, t.formatVersion == null, t.accountKeyString == null, t.userKeyBaseString == null);
		var n = e.filter(function(e) {
			return e.version != null;
		});
		return n.sort(function(e, t) {
			return e.version - t.version;
		});
	}
	function N(e, t) {
		var n = h(e);
		if (n == null) throw r("FBLogger")("messenger_web").mustfixThrow("Encryption IndexDB should've been initialized. Namespace: %s", e);
		return n.transaction(b[e], t, { durability: "strict" });
	}
	var M = function(t) {
		var e = Array.from(k(t).databaseEncryptionKeys.keys());
		e.length > 0 ? k(t).latestVersion = Math.max.apply(Math, e) : r("FBLogger")("messenger_web").mustfix("EAR latest version does not exist");
	}, w = function(t) {
		var e = t.namespace, o = t.version;
		r("promiseDone")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			try {
				r("FBLogger")("messenger_web").info("Received key rotation notification. Namespace: %s", e), yield k(e).dbReady.getPromise();
				var t = (yield $(e)).find(function(e) {
					return e.version === o;
				});
				if (t == null) throw r("FBLogger")("messenger_web").mustfixThrow("Notified new Ear Key but missing in DB");
				var n = yield T(t);
				k(e).databaseEncryptionKeys.set(n.version, {
					dbEntry: t,
					keys: n.keys
				}), M(e), r("FBLogger")("messenger_web").info("Rotated key successfully. Namespace: %s", e);
			} catch (t) {
				return r("FBLogger")("messenger_web").catching(r("getErrorSafe")(t)).mustfix("Failed to handleNewVersion. In worker %s. Namespace: %s.", (s || (s = r("ExecutionEnvironment"))).isInWorker, e);
			}
		})());
	};
	function A(e) {
		return m.get(e) !== "none";
	}
	function F(e) {
		return m.get(e);
	}
	function O(e) {
		return m.is(e, "success") ? (k(e).databaseEncryptionKeys.size === 0 && r("FBLogger")("messenger_web").mustfix("Keychain initialised but no keys present"), !0) : !1;
	}
	function B(e) {
		return o("MAWReliabilityMonitor").MAWReliabilityMonitorSingleton.startMonitoring("EARv3", function() {
			return {
				extra: {
					isKeychainInitialised: O(e).toString(),
					latestVersion: E(e).toString()
				},
				reason: m.get(e),
				state: (function() {
					switch (m.get(e)) {
						case "none": return o("MAWReliabilityMonitor").HealthReportState.PENDING;
						case "success": return o("MAWReliabilityMonitor").HealthReportState.OK;
						case "failure": return o("MAWReliabilityMonitor").HealthReportState.ERROR;
						default: return o("MAWReliabilityMonitor").HealthReportState.UNKNOWN;
					}
				})()
			};
		});
	}
	function W(e, t, n, r) {
		return q.apply(this, arguments);
	}
	function q() {
		return q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, o, a, i) {
			var l = yield r("MAWEARGenNewKeychainCryptoKey")();
			i(o + "_ear_raw_key_generated");
			var u = yield new (e || (e = (n("Promise"))))(function(e, n) {
				var u = N(o, "readwrite");
				u.onerror = function() {
					return n(u.error);
				}, u.onabort = function() {
					return n(u.error);
				};
				var c = u.objectStore(b[o]).getAll();
				c.onerror = function() {
					return n(c.error);
				}, c.onsuccess = function() {
					var d;
					i(o + "_ear_keys_fetched");
					var m = P(c.result), p = x(m), _ = p.reason, g = p.result;
					if ((a == null ? void 0 : a.forceKeyRotation) !== !0 && !g) return e(m);
					var h = (a == null ? void 0 : a.forceKeyRotation) === !0 ? D.FORCE_KEY_ROTATION : _ != null ? _ : D.UNKNOWN, y = m.map(function(e) {
						return e.version;
					}), C = (d = y[y.length - 1]) != null ? d : 0;
					r("FBLogger")("messenger_web").info("Key rotation. EAR versions: %s. Latest version: %s. Namespace: %s, Worker: %s", y.toString(), C, o, (s || (s = r("ExecutionEnvironment"))).isInWorker);
					var v = babelHelpers.extends({}, l, {
						randomisedVersion: f(m),
						source: h,
						version: C + 1
					});
					i(o + "_ear_adding_new_key"), u.oncomplete = function() {
						m.push(babelHelpers.extends({}, v, { id: v.version })), t.postMessage("notifyEarKeychainV2", {
							namespace: o,
							version: v.version
						}), i(o + "_ear_gen_key_end"), e(m);
					};
					var S = u.objectStore(b[o]).add(v);
					S.onerror = function() {
						return n(r("FBLogger")("messenger_web").catching(S.error).mustfixThrow("Failed to rotate EAR key"));
					};
				};
			});
			i(o + "_ear_import_start");
			var c = yield e.allSettled(u.map(function(e) {
				return T(e).then(function(t) {
					return {
						entry: e,
						result: t
					};
				});
			})), d = c[c.length - 1];
			if (d.status === "rejected") {
				var m, p = (m = a == null ? void 0 : a.corruptedEARRetryCount) != null ? m : 0;
				if (p >= 1) throw d.reason;
				return W(t, o, {
					corruptedEARRetryCount: p + 1,
					forceKeyRotation: !0
				}, i);
			}
			return c.map(function(e) {
				if (e.status === "fulfilled") return e.value;
			}).filter(Boolean);
		}), q.apply(this, arguments);
	}
	var U = function(t, n) {
		o("LSPlatformLsInitLog").addPoint(t, n), V(t, n);
	}, V = function(t, n) {
		var e = r("qpl")._(25310776, "6155");
		(s || (s = r("ExecutionEnvironment"))).isInWorker ? o("MAWQplProxy").sendQplPointThroughBridge(e, "backend_" + t, { annotations: n }) : (r("QPLUserFlow").addPoint(e, "ui_" + t), n != null && r("QPLUserFlow").addAnnotations(e, n));
	};
	l.InitStatus = m, l.resetKeychain__TEST_ONLY_DO_NOT_USE = p, l.setInitStatus__TEST_ONLY_DO_NOT_USE = _, l.generateNewRandomisedVersionNumber = f, l.setNamespaceSourceDbWithoutMarkingDbReady = y, l.setNamespaceSourceDbAndMarkAsReady = C, l.init = S, l.getLatestVersion = E, l.getKeychain = k, l.getDbEncryptionKey = I, l.isKeychainSettled = A, l.getKeychainInitStatus = F, l.isKeychainInitialised = O, l.logMawInitPoint = V;
}), 98);

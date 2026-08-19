__d("EBLS", [
	"EBDB",
	"EBDBEbsmApi",
	"EBEpochChangeListener",
	"EBIsEbEnabled",
	"EBIsEbEnabledSubscriber",
	"EBLogger",
	"EBMinosCheckWasmFeatureSupport",
	"EBOnboardDeviceWithAutomaticEB",
	"EBReadyNotifier",
	"EBReenrollmentTriggerListener",
	"EBResumeAutomaticEBInitialisation",
	"EBWorkerAddDeviceUtils",
	"I64",
	"LSAuthorityLevel",
	"LSDataTraceFlushDeferred",
	"LSDatascriptEvaluatorMaybeDeferred",
	"LSDedicatedMqttChannel",
	"LSDefaultSyncGroups",
	"LSDeleteAllAndInsertConnectivityStatusStoredProcedure",
	"LSEncryptedBackupsBackupTenancy",
	"LSFactory",
	"LSIntEnum",
	"LSInternetConnectionState",
	"LSJSEBInMemoryStorage",
	"LSMetadata",
	"LSPlatformDGWTransport",
	"LSPlatformDeviceId",
	"LSPlatformMessengerSyncParams",
	"LSPlatformMqttRealtimeTransport",
	"LSPlatformRealtimeTransport",
	"LSPlatformTaskSystemTransport",
	"LSReStoreWrapper",
	"LSVersion",
	"MAWEBLSInWorkerSwitch",
	"MAWLSVaultingHooks",
	"MAWODSProxy",
	"MAWVaultMaterialsStorage",
	"MWEncryptedBackupsListenForChangesToBackupStateInitPath",
	"MWPlatformTaskSystem",
	"MqttEnv",
	"Promise",
	"QPLUserFlow",
	"ReQL",
	"ServerAppID",
	"WAAssertUnreachable",
	"WAOdsEnums",
	"WAPromiseDelays",
	"WAResolvable",
	"asyncToGeneratorRuntime",
	"emptyFunction",
	"err",
	"getMWLSRegion",
	"nullthrows",
	"promiseDone",
	"qex",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P = o("EBLogger").EBLogger().tags(["EBLS"]), N = r("qpl")._(521478817, "2806");
	function M() {
		return O();
	}
	var w, A, F;
	function O() {
		return w ? w.promise : B({
			copyKeys: !0,
			getNewDB: !1
		}).promise;
	}
	function B(e) {
		w != null && !w.isSettled && w.reject(r("err")("LSClient is not settled")), A != null && !A.isSettled && A.reject(r("err")("LSDBStorage is not settled"));
		var t = new (o("WAResolvable")).Resolvable();
		return w = t, A = null, q(e).then(function(e) {
			t.resolve(e);
		}, function(e) {
			t.reject(e);
		}), t;
	}
	function W(e, t) {
		var n;
		return r("qex")._("2990") === !0 ? o("LSPlatformDGWTransport").LSPlatformDGWTransport(r("LSVersion"), t) : r("LSPlatformMqttRealtimeTransport")(r("LSVersion"), t, {
			getInstance: o("LSDedicatedMqttChannel").getInstance(function() {
				return !0;
			}, (n = {}, n[o("MqttEnv").MqttGkNames.mqttweb_global_connection_counter] = !1, n), function(e, t) {
				return t;
			}, r("emptyFunction")),
			shutdownAndClear: o("LSDedicatedMqttChannel").shutdownAndClear
		});
	}
	function q(e) {
		return U.apply(this, arguments);
	}
	function U() {
		return U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t, a = e.getNewDB;
			o("EBReadyNotifier").resetEBReady(), (t = r("QPLUserFlow")).start(N, { timeoutInMs: 6e4 }), t.addPoint(N, "ls_storage_creation_start");
			var i = yield G(a);
			t.addPoint(N, "ls_storage_creation_end"), t.addPoint(N, "eb_worker_add_device_skipped"), t.endSuccess(N), o("EBReadyNotifier").markEBReady(), P.DEBUG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["Initialised db"])));
			var l = {
				appId: r("nullthrows")(r("ServerAppID").app_id),
				executeGraphQLLightSpeedRequest: (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
						throw r("err")("dead_fn_baseline_EBLS_executeGraphQLLightSpeedRequest");
					});
					function t() {
						return e.apply(this, arguments);
					}
					return t;
				})(),
				getDb: G,
				getEval: function() {
					return r("LSDatascriptEvaluatorMaybeDeferred")();
				},
				platformName: "Messenger",
				realtimeUnderylingTransport: function() {
					return ($ || ($ = n("Promise"))).resolve(W);
				},
				region: r("getMWLSRegion")(),
				schemaVersion: r("LSVersion"),
				sendHardcodedInitSync: !1,
				syncParams: r("LSPlatformMessengerSyncParams")
			};
			P.DEBUG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["created config"]))), r("QPLUserFlow").addAnnotations(N, { string: { appId: l.appId } });
			var s = o("LSPlatformDeviceId").getDeviceIdForProviderType("ephemeral");
			r("QPLUserFlow").addPoint(N, "platform_client_init_start");
			var u = yield Y(i, l, s);
			return r("QPLUserFlow").addPoint(N, "platform_client_init_end"), F = yield V(i), P.DEBUG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["finished init successfully"]))), u;
		}), U.apply(this, arguments);
	}
	function V(e) {
		return H.apply(this, arguments);
	}
	function H() {
		return H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = yield o("EBMinosCheckWasmFeatureSupport").checkWasmFeatureSupportAndEBInitJK();
			if (!t) return o("EBLogger").EBLogger().warn("runStartupJobs: WASM feature support is unavailable; skipping EB startup initialization"), [];
			var n = Z(e);
			return yield o("EBIsEbEnabledSubscriber").initIsEbEnabledPubSub(e), yield o("EBEpochChangeListener").initEBEpochChangeListener(e), yield o("EBReenrollmentTriggerListener").initEBReenrollmentTriggerListener(e), o("EBResumeAutomaticEBInitialisation").resumeAutomaticEBInitialisation(), o("EBOnboardDeviceWithAutomaticEB").onboardDeviceWithAutomaticEB(), n;
		}), H.apply(this, arguments);
	}
	function G(e) {
		return z.apply(this, arguments);
	}
	function z() {
		return z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			if (e === void 0 && (e = !1), !e && A != null) return A.promise;
			var t = new (o("WAResolvable")).Resolvable();
			A = t, yield o("MAWVaultMaterialsStorage").setupVaultMaterials();
			var a = {
				clearEbStores: o("EBDB").clearEbStores,
				flushEBSMtoEBDB: o("EBDBEbsmApi").flushEBSMtoEBDB,
				rehydrateEBSMFromEBDB: o("EBDBEbsmApi").rehydrateEBSMFromEBDB
			}, l = yield o("LSJSEBInMemoryStorage").makeReStorePersistence(a), s = o("LSReStoreWrapper").createLSReStore(l, o("LSMetadata").schema, [r("MAWLSVaultingHooks")], void 0);
			return a.updateEBSM = o("EBDBEbsmApi").updateEBSM(s), yield s.runInTransaction((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					yield o("LSDefaultSyncGroups").seedDb(e, void 0);
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})(), "readwrite", "ui", void 0, i.id + ":262"), t.resolve(s), s;
		}), z.apply(this, arguments);
	}
	function j() {
		return K.apply(this, arguments);
	}
	function K() {
		return K = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			w != null && (yield o("EBWorkerAddDeviceUtils").clearLSEBSMTables(yield G()));
		}), K.apply(this, arguments);
	}
	function Q(e) {
		var t = r("MWEncryptedBackupsListenForChangesToBackupStateInitPath").listenForChangesToBackupState(e);
		return function() {
			t();
		};
	}
	function X(t, n) {
		var a = n === "Connected" ? (D || (D = o("LSIntEnum"))).ofNumber(r("LSInternetConnectionState").CONNECTED) : (D || (D = o("LSIntEnum"))).ofNumber(r("LSInternetConnectionState").NOT_CONNECTED);
		P.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Platform client sync connection status: ", ""])), n), r("promiseDone")(t.runInTransaction(function(e) {
			return r("LSDeleteAllAndInsertConnectivityStatusStoredProcedure")(r("LSFactory")(e), { internetConnectionState: a });
		}, "readwrite", void 0, void 0, i.id + ":300"), function() {
			P.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Platform client sync connection status set successfully"])));
		}, function(e) {
			throw P.MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Platform client sync connection status set failed: ", ""])), e == null ? void 0 : e.message), e;
		});
	}
	function Y(e, t, n) {
		return J.apply(this, arguments);
	}
	function J() {
		return J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			P.DEBUG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["Platform client sync starting..."])));
			var a = yield t.getEval();
			P.DEBUG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["Getting datascript evaluator success"])));
			var i = a()(e);
			P.DEBUG(v || (v = babelHelpers.taggedTemplateLiteralLoose(["Clearing epoch before resume sync..."]))), P.DEBUG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["Starting realtime transport"])));
			var l = yield t.realtimeUnderylingTransport(), s = o("LSPlatformRealtimeTransport").LSPlatformRealtimeTransport(l, t.appId, n);
			P.DEBUG(R || (R = babelHelpers.taggedTemplateLiteralLoose(["Starting task system"])));
			var u = new (r("MWPlatformTaskSystem"))(e, new (r("LSPlatformTaskSystemTransport"))(e, s, i, t.schemaVersion));
			P.DEBUG(L || (L = babelHelpers.taggedTemplateLiteralLoose(["Starting backup state listeners"])));
			var c = null;
			r("QPLUserFlow").addPoint(N, "sync_system_creation_skipped");
			var d = Q(e);
			P.DEBUG(E || (E = babelHelpers.taggedTemplateLiteralLoose(["Watching for expired traces"])));
			var m;
			return r("promiseDone")(o("LSDataTraceFlushDeferred").watchForExpiredTraces(e).then(function(e) {
				m = e;
			})), P.DEBUG(k || (k = babelHelpers.taggedTemplateLiteralLoose(["Subscribing to mqtt sync status change events"]))), s.onConnectionStatusChange(function(t) {
				X(e, t);
			}), P.DEBUG(I || (I = babelHelpers.taggedTemplateLiteralLoose(["Platform client sync starting success"]))), {
				cleanup: function() {
					P.DEBUG(T || (T = babelHelpers.taggedTemplateLiteralLoose(["Platform client sync cleaning up"]))), u == null || u.cleanup(), s.cleanup(), c == null || c.cleanup(), d(), m == null || m(), F.forEach(function(e) {
						return e();
					});
				},
				db: e
			};
		}), J.apply(this, arguments);
	}
	function Z(e) {
		var t = [], n = ee(e);
		return t.push(n), t;
	}
	function ee(e) {
		var t = null;
		function a(e) {
			var a = t === null ? "null" : String(t), i = String(e);
			o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.EB_SWITCH_STATE,
				key: "ebls_switch.state_transition." + a + "_to_" + i
			}), P.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
				"EBLS Switch state transition: ",
				" -> ",
				""
			])), a, i), t === !0 && e === !1 && (P.DEBUG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["EBLS Switch detected true->false transition, setting timeout to check self-correction"]))), o("WAPromiseDelays").delayMs(1e3).then(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield o("EBIsEbEnabled").isEBEnabled(), t = e === !0;
				P.DEBUG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
					"EBLS Switch true->false correction check: corrected=",
					", current_state=",
					""
				])), String(t), String(e)), o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.EB_SWITCH_STATE,
					key: "ebls_switch.true_to_false_correction." + (t ? "corrected" : "not_corrected")
				});
				var n = r("MAWEBLSInWorkerSwitch").isEnabled(), a = e === n ? "match" : "mismatch";
				o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.EB_SWITCH_STATE,
					key: "ebls_switch.true_to_false_check." + a
				});
			})).catch(function(e) {
				P.catching(e).MUSTFIX(p || (p = babelHelpers.taggedTemplateLiteralLoose(["EBLS Switch failed to check true->false correction"])));
			})), r("MAWEBLSInWorkerSwitch").set(e), t = e;
		}
		return o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.tables.secure_encrypted_backups_client_state)).then(function(e) {
			e != null ? a(te(e)) : a(!1);
		}).catch(function(e) {
			P.catching(e).MUSTFIX(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Failed to get initial state for EBLS Switch"])));
		}), e.tables.secure_encrypted_backups_client_state.subscribe(function(e, t) {
			switch (P.DEBUG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["EBLS Switch state changed. operation: ", ""])), t.operation), t.operation) {
				case "delete":
					a(!1);
					break;
				case "add":
				case "put":
					a(te(t.value));
					break;
				default: throw t.operation, r("WAAssertUnreachable")(t.operation);
			}
		});
	}
	function te(e) {
		var t = e.authorityLevel, n = e.backupTenancy;
		if (t == null) return !1;
		var a = n != null ? n : (D || (D = o("LSIntEnum"))).ofNumber(r("LSEncryptedBackupsBackupTenancy").PRODUCTION);
		return (x || (x = o("I64"))).equal(a, (D || (D = o("LSIntEnum"))).ofNumber(r("LSEncryptedBackupsBackupTenancy").PRODUCTION)) && (x || (x = o("I64"))).equal(t, (D || (D = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE));
	}
	l.init = M, l.genLSClient = O, l.getLSStorage = G, l.clearEBSMStorage = j, l.platformClientInit = Y;
}), 98);

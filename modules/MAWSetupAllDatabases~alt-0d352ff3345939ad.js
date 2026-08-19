__d("MAWSetupAllDatabases", [
	"BackendInitLoggingUtils",
	"EBDB",
	"EBMinosCheckWasmFeatureSupport",
	"EBMinosDb",
	"FBLogger",
	"MAWAttachmentCdnUrlDb",
	"MAWBridge",
	"MAWCacheServiceDB",
	"MAWCurrentUser",
	"MAWDBKeychain",
	"MAWDbInitIndexedDb",
	"MAWEARGenNewKeychainCryptoKey",
	"MAWFTSIndexedDb",
	"MAWIndexedDb",
	"MAWIndexedDbMetadata",
	"MAWJobsIndexedDb",
	"MAWMpsSetup",
	"MAWODSProxy",
	"MAWPersistedQueuesSetup",
	"MAWQplProxy",
	"MAWStartupJob",
	"MAWUnrecoverableDbErrors",
	"MAWWormMaintenanceDbSetup",
	"MAWWormOdsLogger",
	"MWEARKeychainV3",
	"MessengerWebInitData",
	"WAHex",
	"WAOdsEnums",
	"WASignalDB",
	"WmiMediaService",
	"WmiMetadataDb",
	"WormCallbacks",
	"WormDbMigrationScheduler",
	"WormGlobalConfig",
	"justknobx",
	"promiseDone",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e() {
		var e, t, n = await o("EBMinosCheckWasmFeatureSupport").checkWasmAndMinosRolloutKeyCreateGK(), a = r("qpl")._(25310776, "6155");
		o("WormGlobalConfig").setWormGlobalConfig({}), o("WormCallbacks").setWormCallbacks({ onEARInitError: function() {
			r("justknobx")._("5578") && o("MAWBridge").getBridge().fireAndForget("event", "unrecoverableDbError", { error: new (o("MAWUnrecoverableDbErrors")).EarInitError() });
		} }), await o("MAWMpsSetup").mawMpsSetup(), await (t = o("BackendInitLoggingUtils")).measureMawInit("make_jobs_db", o("MAWJobsIndexedDb").makeJobsDb), await t.measureMawInit("make_fts_db", o("MAWFTSIndexedDb").makeFTSDB);
		var i = await t.measureMawInit("make_maw_ear", o("MAWDBKeychain").initEAR), l = i.isNewUser, s = i.reinitEAR, u = i.useMawEAR;
		await t.measureMawInit("make_db", async function() {
			if (!u) return o("MAWDbInitIndexedDb").dbInit({});
			var e;
			return l === !0 && (e = babelHelpers.extends({}, await r("MAWEARGenNewKeychainCryptoKey")(), {
				randomisedVersion: o("MWEARKeychainV3").generateNewRandomisedVersionNumber([]),
				version: 1
			})), o("MAWDbInitIndexedDb").dbInit({ onDbPopulate: function(n) {
				o("MAWDBKeychain").onDbPopulateMAWKeychain(n, e);
			} }).then(async function() {
				s === !0 && await o("MAWDBKeychain").initEAR(), o("MWEARKeychainV3").setNamespaceSourceDbAndMarkAsReady("maw_ear", (await o("MAWIndexedDb").getDB()).stores.backendDB());
			});
		}), await t.measureMawInit("make_signal_db", function() {
			return o("WASignalDB").makeSignalDb(o("MAWIndexedDbMetadata").signalWorm(o("MAWCurrentUser").getID()), r("MessengerWebInitData").accountKeyV2, r("justknobx")._("3218"), function(e) {
				o("MAWQplProxy").sendQplPointThroughBridge(a, "database_signal_db_setup_failed"), o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.WORM,
					key: "unrecoverable." + e
				});
			}, o("MAWWormOdsLogger").wormOdsWorkerLogger, r("qpl")._(1056840657, "2716"));
		}), await o("MAWPersistedQueuesSetup").mawPersistedQueuesSetup(), await o("MAWWormMaintenanceDbSetup").mawWormDbMaintenanceDbSetup(), await o("WmiMediaService").wmiMediaServiceSetup({
			blockingErrorThreshold: r("justknobx")._("3218"),
			dbName: o("MAWIndexedDbMetadata").wmiMediaServiceName(o("MAWCurrentUser").getID()),
			onBlockingError: function(t) {
				o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(25310776, "6155"), "database_wmi_media_service_setup_failed"), o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.WORM,
					key: "reverb.unrecoverable." + t
				});
			},
			qplEvent: r("qpl")._(1056840657, "2716"),
			strEncKey: r("MessengerWebInitData").accountKeyV2
		}), await t.measureMawInit("make_attachment_cdn_url_db", async function() {
			await o("MAWAttachmentCdnUrlDb").makeAttachmentCdnUrlDb({
				blockingErrorThreshold: r("justknobx")._("3218"),
				dbName: o("MAWIndexedDbMetadata").mawAttachmentCdnUrlDbName(o("MAWCurrentUser").getID()),
				onBlockingError: function(t) {
					o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(25310776, "6155"), "database_maw_attachment_cdn_urls_setup_failed"), o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.WORM,
						key: "maw_attachment_cdn_urls.unrecoverable." + t
					});
				},
				qplEvent: r("qpl")._(1056840657, "2716"),
				strEncKey: r("MessengerWebInitData").accountKeyV2
			});
		}), await t.measureMawInit("make_metadata_db", async function() {
			await o("WmiMetadataDb").makeMetadataDb({
				blockingErrorThreshold: r("justknobx")._("3218"),
				dbName: o("MAWIndexedDbMetadata").wmiMetadataDbName(o("MAWCurrentUser").getID()),
				onBlockingError: function(t) {
					o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(25310776, "6155"), "database_messenger_web_metadata_setup_failed"), o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.WORM,
						key: "messenger_web_metadata.unrecoverable." + t
					});
				},
				qplEvent: r("qpl")._(1056840657, "2716"),
				strEncKey: r("MessengerWebInitData").accountKeyV2
			});
		});
		var c = r("MessengerWebInitData").accountKeyV2, d = (e = c == null ? void 0 : c.length) != null ? e : 0;
		d === 0 && r("FBLogger")("messenger_web").mustfix("accountKeyV2 is empty or null when setting up EBDB. This will cause AES key validation to fail."), await o("BackendInitLoggingUtils").measureMawInit("make_ebdb", function() {
			return o("EBDB").makeEBDB(o("MAWIndexedDbMetadata").ebdbName(o("MAWCurrentUser").getID()), r("qpl")._(1056840657, "2716"), o("WAHex").parseHex(c), o("EBDB").EBDBEnvironment.Worker, o("MAWWormOdsLogger").wormOdsWorkerLogger);
		}), await o("BackendInitLoggingUtils").measureMawInit("make_cache_service_db", function() {
			return o("MAWCacheServiceDB").getOrSetupMAWCacheDB();
		}), n && await o("EBMinosDb").makeEBMinosDb(), r("promiseDone")(o("WormDbMigrationScheduler").runAllDbMigrations()), r("promiseDone")(o("MAWStartupJob").runMAWStartupJobs());
	}
	l.setupAllDatabases = e;
}), 98);

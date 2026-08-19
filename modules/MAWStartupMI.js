__d("MAWStartupMI", [
	"EBInitializeMinosCryptoLibrary",
	"EBMinosCheckWasmFeatureSupport",
	"EBPrewarmMinosWasm",
	"EBPrewarmSenderUploadQueue",
	"EBSenderUploadQueueOperations",
	"EBWorkerEBDBApiDeferred",
	"EncryptedBackupsUploadQueueV3Scheduler",
	"MAWForwardEBLSEbEnabledStateChangesToMainThread",
	"MAWPreloadEBMetadataCache",
	"MAWStartupScheduler",
	"MWFBLogger",
	"TaskSchedulerPriority",
	"getErrorSafe",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MWFBLogger").MWLogger().tags(["backend"]);
	function u() {
		return o("EBMinosCheckWasmFeatureSupport").getWasmFeatureSupport();
	}
	function c() {
		u() && (o("EncryptedBackupsUploadQueueV3Scheduler").subscribeToUploadQueueUpdates(), r("gkx")("11214") && o("EBSenderUploadQueueOperations").listenForEbUploadQueueFlush());
	}
	function d(t) {
		o("MAWStartupScheduler").scheduleTask("eb_listeners", o("TaskSchedulerPriority").NORMAL_PRIORITY, function() {
			u() && (o("EBWorkerEBDBApiDeferred").startListeningEBDeviceRegistrations(), o("MAWForwardEBLSEbEnabledStateChangesToMainThread").listenForEBLSEbEnabledStateChangesAndSendToMainThread(), o("MAWPreloadEBMetadataCache").preloadEBMetadataCacheAfterEbEnabled());
		}), o("MAWStartupScheduler").scheduleTask("minos_prewarm", o("TaskSchedulerPriority").NORMAL_PRIORITY, function() {
			o("EBPrewarmMinosWasm").prewarmMinosWasm(), o("EBInitializeMinosCryptoLibrary").initializeMinosCryptoLibrary({ transportSigningKeypair: t.regInfo.staticKeyPair }).catch(function(t) {
				s.catching(r("getErrorSafe")(t)).MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["unexpected error initializing minos crypto library"])));
			});
		}), o("MAWStartupScheduler").scheduleTask("sender_prewarm", o("TaskSchedulerPriority").NORMAL_PRIORITY, function() {
			return o("EBPrewarmSenderUploadQueue").prewarmSenderUploadQueue();
		});
	}
	l.isEBEnabled = u, l.startEBUploadListeners = c, l.scheduleEBDeferredWork = d;
}), 98);

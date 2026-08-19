__d("WAWebWorkerResumeManager", [
	"WAComms",
	"WALogger",
	"WAShiftTimer",
	"WAWebBackendEventBus",
	"WAWebHandleMsgTypes.flow",
	"WAWebJSHaltDetector",
	"WAWebMessageQueue",
	"WAWebNotificationWorkerBackend",
	"WAWebOfflineResumeConst",
	"WAWebOfflineResumeTypes",
	"WAWebOfflineResumeUtils",
	"WAWebRuntimeEnvironmentUtils",
	"WAWebSignalProtocolStore",
	"WAWebWamWorkerOfflineProcessReporter",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h, y, C = (function() {
		function t() {
			this.$6 = null, this.$8 = 100, this.resumeType = o("WAWebOfflineResumeTypes").ResumeType.Worker, this.$9();
		}
		var n = t.prototype;
		return n.$9 = function() {
			this.offlineMessagePreviewCounter = -1, this.$2 = 0, this.$3 = 0, this.$4 = !1, this.$5 = null, this.$1 = o("WAWebOfflineResumeConst").ResumeStatus.INIT;
		}, n.$10 = function(n) {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"[offline-resume][worker] offline resume stage: ",
				" -> ",
				""
			])), this.$1, n), this.$1 = n;
		}, n.processOfflinePreview = function(t) {
			if (o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.logOfflinePreview(), this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.INIT) o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.updateOfflineCount(t), this.offlineMessagePreviewCounter = t.message, this.$5 = !1, this.$4 = !0, this.$2 = 0, this.$7 = Date.now(), o("WAWebSignalProtocolStore").enableMemSignalStore(), o("WAWebJSHaltDetector").jsHaltDetector.restartDetection(), this.$10(o("WAWebOfflineResumeConst").ResumeStatus.RESUME_ON_RESTART), o("WAWebBackendEventBus").BackendEventBus.triggerOfflineProcessReady(), this.$11(t.message, t.receipt);
			else {
				var e = this.$7;
				if (e != null) {
					var n = Date.now() - e;
					n < o("WAWebOfflineResumeConst").OFFLINE_PREVIEW_PERIOD_MS ? (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] accept extra preview ibs, delay ", ""])), n), this.offlineMessagePreviewCounter += t.message, this.$5 = !1, this.$4 = !0, o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.updateOfflineCount(t)) : r("gkx")("26258") ? o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] reject extra preview ibs, delay ", ""])), n) : o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] reject extra preview ibs, delay ", ""])), n).sendLogs("offline-multiple-preview");
				}
				this.$12();
			}
		}, n.processOfflineThreadMeta = function(t) {
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] processOfflineThreadMeta n/a"])));
		}, n.getOfflineDeliveryProgress = function() {
			return this.offlineMessagePreviewCounter === 0 ? this.$8 : Math.min(Math.ceil(100 * this.$2 / this.offlineMessagePreviewCounter), this.$8);
		}, n.processOfflineSessionComplete = function(t) {
			var e;
			return (e = this.$6) == null || e.cancel(), this.$6 = null, this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE ? (o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] processOfflineSessionComplete done"]))), Promise.resolve()) : this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.RESUME_WITH_OPEN_TAB ? (o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] RESUME_WITH_OPEN_TAB n/a"]))), Promise.resolve()) : (this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.INIT && (this.$5 = !1, this.$4 = !0), this.$10(o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE), this.$13());
		}, n.isResumeFromRestartComplete = function() {
			return this.$1 !== o("WAWebOfflineResumeConst").ResumeStatus.RESUME_ON_RESTART && this.$1 !== o("WAWebOfflineResumeConst").ResumeStatus.INIT;
		}, n.isResumeFromRestartInProgress = function() {
			return this.$1 !== o("WAWebOfflineResumeConst").ResumeStatus.INIT && !o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd;
		}, n.isResumeOnSocketDisconnectInProgress = function() {
			return this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.RESUME_WITH_OPEN_TAB;
		}, n.isResumeComplete = function() {
			return this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE;
		}, n.getHasMessagesToDownload = function() {
			return this.$5;
		}, n.getFinishedDownloading = function() {
			return this.getOfflineDeliveryProgress() === 100;
		}, n.shouldUseOfflineResumeScreen = function() {
			return this.offlineMessagePreviewCounter > this.$2;
		}, n.processDecryptResult = function(t) {
			this.$2 += 1, t === o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY && (this.$3 += 1);
		}, n.offlineStanzaReceivedAfterComplete = function() {
			if (this.isResumeFromRestartComplete()) {
				o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] offlineStanzaReceivedAfterComplete n/a"])));
				return;
			}
		}, n.newOfflineStanza = function(t, n) {
			o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.updateOldestStanzaTime(t), this.$12();
		}, n.getResumeUIProgressBarType = function() {
			return o("WAWebOfflineResumeTypes").ResumeUIProgressBarType.None;
		}, n.$12 = function() {
			this.$6 && this.$6.onOrAfter(o("WAWebOfflineResumeConst").OFFLINE_STANZA_TIMEOUT_MS);
		}, n.$11 = function(t, n) {
			var e, a = this;
			(e = this.$6) == null || e.cancel(), this.$6 = new (o("WAShiftTimer")).ShiftTimer(function() {
				a.$1 !== o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE && (o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] session completed by timeout"]))), r("gkx")("26258") || o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] offline resume finished by timeout"]))).sendLogs("offline-resume-timeout"), a.processOfflineSessionComplete(t + n), a.$6 = null);
			}), this.$6.onOrAfter(o("WAWebOfflineResumeConst").OFFLINE_STANZA_TIMEOUT_MS);
		}, n.$13 = async function() {
			await o("WAWebMessageQueue").waitForOfflineMessageQueue(), o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.updateOfflineDecryptionErrorCount(this.$3), o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] msgQueue drained, decryptErrs ", ""])), this.$3), await o("WAWebOfflineResumeUtils").clearOfflineSnapShot(), o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.logProcessComplete(), this.$3 = 0, o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] clearOfflineSnapShot done"]))), o("WAWebRuntimeEnvironmentUtils").isServiceWorker() ? (o("WAWebNotificationWorkerBackend").showPushNotificationSyncCompleteMessage(), await o("WAWebOfflineResumeUtils").runReceiptCleanUpLoop(), o("WAComms").stopComms()) : (o("WAWebBackendEventBus").BackendEventBus.triggerOfflineDeliveryEnd(), o("WAWebOfflineResumeUtils").runReceiptCleanUpLoop());
		}, t;
	})();
	l.OfflineWorkerResumeStageManager = C;
}), 98);

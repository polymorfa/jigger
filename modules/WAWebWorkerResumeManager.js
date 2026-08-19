__d("WAWebWorkerResumeManager", [
	"Promise",
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
	"asyncToGeneratorRuntime",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b = (function() {
		function t() {
			this.$6 = null, this.$8 = 100, this.resumeType = o("WAWebOfflineResumeTypes").ResumeType.Worker, this.$9();
		}
		var a = t.prototype;
		return a.$9 = function() {
			this.offlineMessagePreviewCounter = -1, this.$2 = 0, this.$3 = 0, this.$4 = !1, this.$5 = null, this.$1 = o("WAWebOfflineResumeConst").ResumeStatus.INIT;
		}, a.$10 = function(n) {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"[offline-resume][worker] offline resume stage: ",
				" -> ",
				""
			])), this.$1, n), this.$1 = n;
		}, a.processOfflinePreview = function(t) {
			if (o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.logOfflinePreview(), this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.INIT) o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.updateOfflineCount(t), this.offlineMessagePreviewCounter = t.message, this.$5 = !1, this.$4 = !0, this.$2 = 0, this.$7 = Date.now(), o("WAWebSignalProtocolStore").enableMemSignalStore(), o("WAWebJSHaltDetector").jsHaltDetector.restartDetection(), this.$10(o("WAWebOfflineResumeConst").ResumeStatus.RESUME_ON_RESTART), o("WAWebBackendEventBus").BackendEventBus.triggerOfflineProcessReady(), this.$11(t.message, t.receipt);
			else {
				var e = this.$7;
				if (e != null) {
					var n = Date.now() - e;
					n < o("WAWebOfflineResumeConst").OFFLINE_PREVIEW_PERIOD_MS ? (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] accept extra preview ibs, delay ", ""])), n), this.offlineMessagePreviewCounter += t.message, this.$5 = !1, this.$4 = !0, o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.updateOfflineCount(t)) : r("gkx")("26258") ? o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] reject extra preview ibs, delay ", ""])), n) : o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] reject extra preview ibs, delay ", ""])), n).sendLogs("offline-multiple-preview");
				}
				this.$12();
			}
		}, a.processOfflineThreadMeta = function(t) {
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] processOfflineThreadMeta n/a"])));
		}, a.getOfflineDeliveryProgress = function() {
			return this.offlineMessagePreviewCounter === 0 ? this.$8 : Math.min(Math.ceil(100 * this.$2 / this.offlineMessagePreviewCounter), this.$8);
		}, a.processOfflineSessionComplete = function(t) {
			var e;
			return (e = this.$6) == null || e.cancel(), this.$6 = null, this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE ? (o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] processOfflineSessionComplete done"]))), (C || (C = n("Promise"))).resolve()) : this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.RESUME_WITH_OPEN_TAB ? (o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] RESUME_WITH_OPEN_TAB n/a"]))), (C || (C = n("Promise"))).resolve()) : (this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.INIT && (this.$5 = !1, this.$4 = !0), this.$10(o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE), this.$13());
		}, a.isResumeFromRestartComplete = function() {
			return this.$1 !== o("WAWebOfflineResumeConst").ResumeStatus.RESUME_ON_RESTART && this.$1 !== o("WAWebOfflineResumeConst").ResumeStatus.INIT;
		}, a.isResumeFromRestartInProgress = function() {
			return this.$1 !== o("WAWebOfflineResumeConst").ResumeStatus.INIT && !o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd;
		}, a.isResumeOnSocketDisconnectInProgress = function() {
			return this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.RESUME_WITH_OPEN_TAB;
		}, a.isResumeComplete = function() {
			return this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE;
		}, a.getHasMessagesToDownload = function() {
			return this.$5;
		}, a.getFinishedDownloading = function() {
			return this.getOfflineDeliveryProgress() === 100;
		}, a.shouldUseOfflineResumeScreen = function() {
			return this.offlineMessagePreviewCounter > this.$2;
		}, a.processDecryptResult = function(t) {
			this.$2 += 1, t === o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY && (this.$3 += 1);
		}, a.offlineStanzaReceivedAfterComplete = function() {
			if (this.isResumeFromRestartComplete()) {
				o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] offlineStanzaReceivedAfterComplete n/a"])));
				return;
			}
		}, a.newOfflineStanza = function(t, n) {
			o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.updateOldestStanzaTime(t), this.$12();
		}, a.getResumeUIProgressBarType = function() {
			return o("WAWebOfflineResumeTypes").ResumeUIProgressBarType.None;
		}, a.$12 = function() {
			this.$6 && this.$6.onOrAfter(o("WAWebOfflineResumeConst").OFFLINE_STANZA_TIMEOUT_MS);
		}, a.$11 = function(t, n) {
			var e, a = this;
			(e = this.$6) == null || e.cancel(), this.$6 = new (o("WAShiftTimer")).ShiftTimer(function() {
				a.$1 !== o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE && (o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] session completed by timeout"]))), r("gkx")("26258") || o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] offline resume finished by timeout"]))).sendLogs("offline-resume-timeout"), a.processOfflineSessionComplete(t + n), a.$6 = null);
			}), this.$6.onOrAfter(o("WAWebOfflineResumeConst").OFFLINE_STANZA_TIMEOUT_MS);
		}, a.$13 = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				yield o("WAWebMessageQueue").waitForOfflineMessageQueue(), o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.updateOfflineDecryptionErrorCount(this.$3), o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] msgQueue drained, decryptErrs ", ""])), this.$3), yield o("WAWebOfflineResumeUtils").clearOfflineSnapShot(), o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.logProcessComplete(), this.$3 = 0, o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume][worker] clearOfflineSnapShot done"]))), o("WAWebRuntimeEnvironmentUtils").isServiceWorker() ? (o("WAWebNotificationWorkerBackend").showPushNotificationSyncCompleteMessage(), yield o("WAWebOfflineResumeUtils").runReceiptCleanUpLoop(), o("WAComms").stopComms()) : (o("WAWebBackendEventBus").BackendEventBus.triggerOfflineDeliveryEnd(), o("WAWebOfflineResumeUtils").runReceiptCleanUpLoop());
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(), t;
	})();
	l.OfflineWorkerResumeStageManager = b;
}), 98);

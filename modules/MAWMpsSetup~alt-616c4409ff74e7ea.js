__d("MAWMpsSetup", [
	"BackendInitLoggingUtils",
	"EBMessageMetadataCache",
	"EBMessageProbeSamplingPreprocessor",
	"MAWAttachmentCdnUrlWriter",
	"MAWCurrentUser",
	"MAWEBLSInWorkerSwitch",
	"MAWIndexedDbMetadata",
	"MAWMpsAppdataEncryptedBackupsSecretsPreprocessor",
	"MAWMpsDecryptedProtobufToFullMessage",
	"MAWMpsDirectiveGenerator",
	"MAWMpsGenerateDeletionMessage",
	"MAWMpsMessagePointQuery",
	"MAWMpsMessageRangeQuery",
	"MAWMpsMutateMessagePreprocessor",
	"MAWMpsRTCCallLifecyclePreprocessor",
	"MAWMpsReadSideEffects",
	"MAWMpsSetExpiryPreprocessor",
	"MAWMpsXMAValidationPreprocessor",
	"MAWODSProxy",
	"MAWQplProxy",
	"MawMpsCopPostprocessor",
	"MawMpsDeleteTopLevelPreprocessor",
	"MawMpsDeleteTopLevelWithPlaceholderPreprocessor",
	"MawMpsDropDeviceNotificationsForTurnedOffSecurityAlertsPreprocessor",
	"MawMpsEphemeralSettingSyncPostprocessor",
	"MawMpsPayloadValidatorPreprocessor",
	"MawMpsThreadConsistency",
	"MawMpsUploadMessagesToEBPostprocessor",
	"MessengerWebInitData",
	"MpsCacheServicesPostProcessors",
	"MpsExtensionConfiguration",
	"MpsFtsPostProcessor",
	"MpsMediaDeletionPostProcessor",
	"MpsThreadContentsPostProcessor",
	"WAOdsEnums",
	"WATimeUtils",
	"WebMps",
	"justknobx",
	"pipeline-chain",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		var e = o("pipeline-chain").pipeline(o("MawMpsDropDeviceNotificationsForTurnedOffSecurityAlertsPreprocessor").MawMpsDropDeviceNotificationsForTurnedOffSecurityAlertsPreprocessor).pipe(o("MAWMpsDirectiveGenerator").MawMpsDirectiveGeneratorPreprocessor).pipe(o("MAWMpsRTCCallLifecyclePreprocessor").MAWMpsRTCCallLifecyclePreprocessor).pipe(o("MawMpsDeleteTopLevelWithPlaceholderPreprocessor").MawMpsDeleteTopLevelWithPlaceholderPreprocessor).pipe(o("MAWMpsAppdataEncryptedBackupsSecretsPreprocessor").MAWMpsAppdataEncryptedBackupsSecretsPreprocessor).pipe(o("MAWMpsMutateMessagePreprocessor").MAWMpsMutateMessagePreprocessor).pipe(o("MawMpsDeleteTopLevelPreprocessor").MawMpsDeleteTopLevelPreprocessor).pipe(o("MAWMpsSetExpiryPreprocessor").MAWMpsSetExpiryPreprocessor).pipe(o("MAWMpsXMAValidationPreprocessor").MAWMpsXMAValidationPreprocessor).pipe(o("MawMpsPayloadValidatorPreprocessor").MawMpsPayloadValidatorPreprocessor).pipe(o("EBMessageProbeSamplingPreprocessor").EBMessageProbeSamplingPreprocessor);
		return new (o("MpsExtensionConfiguration")).MpsExtensionConfiguration({
			postProcessors: {
				critical: [
					o("MawMpsThreadConsistency").MawThreadsConsistencyPostprocessor,
					o("MawMpsCopPostprocessor").MpsCopPostProcessor,
					o("MawMpsUploadMessagesToEBPostprocessor").MawMpsUploadMessagesToEBPostprocessor
				],
				nonCritical: [
					o("MpsMediaDeletionPostProcessor").MpsMediaDeletionPostProcessor,
					o("MpsFtsPostProcessor").MpsFtsPostProcessor,
					o("MpsCacheServicesPostProcessors").MpsCacheServicesPostProcessor,
					o("MpsThreadContentsPostProcessor").MpsThreadContentsPostProcessor,
					o("MawMpsEphemeralSettingSyncPostprocessor").MawMpsEphemeralSettingSyncPostprocessor
				]
			},
			preprocessors: e,
			readSideEffects: o("MAWMpsReadSideEffects").readSideEffects
		});
	}
	async function s() {
		await o("BackendInitLoggingUtils").measureMawInit("make_mps", function() {
			return o("WebMps").makeMps({
				db: {
					blockingErrorThreshold: r("justknobx")._("3218"),
					name: o("MAWIndexedDbMetadata").webReverDbbName(o("MAWCurrentUser").getID()),
					onBlockingError: function(t) {
						o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(25310776, "6155"), "database_mps_setup_failed"), o("MAWODSProxy").odsBumpEntityKey({
							entity: o("WAOdsEnums").Entity.WORM,
							key: "reverb.unrecoverable." + t
						});
					},
					qplEvent: r("qpl")._(1056840657, "2716"),
					strEncKey: r("MessengerWebInitData").accountKeyV2
				},
				dependencies: {
					decryptedProtobufToFullMessage: o("MAWMpsDecryptedProtobufToFullMessage").decryptedProtobufToFullMessage,
					eb: {
						fetchMetadata: o("EBMessageMetadataCache").fetchEBMetadata,
						getMetadataFromCache: o("EBMessageMetadataCache").getEBMetadataFromCache,
						isEbEnabled: function() {
							return r("MAWEBLSInWorkerSwitch").get();
						},
						messagePointQuery: o("MAWMpsMessagePointQuery").MAWMpsMessagePointQuery,
						messageRangeQuery: o("MAWMpsMessageRangeQuery").MAWMpsMessageRangeQuery
					},
					generateDeletionMessage: o("MAWMpsGenerateDeletionMessage").generateDeletionMessage,
					persistAttachmentCdnUrls: function(t) {
						var e = o("WATimeUtils").millisTime();
						return o("MAWAttachmentCdnUrlWriter").writeAttachmentCdnUrls(t.map(function(t) {
							return {
								cdnUrl: t.cdnUrl,
								objectId: t.objectId,
								timestampMs: e
							};
						}));
					}
				},
				getMpsExtensionConfiguration: e
			});
		});
	}
	l.getMpsExtensionConfiguration = e, l.mawMpsSetup = s;
}), 98);

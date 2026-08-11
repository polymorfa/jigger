const WamCanonicalEntRecoveryCompanion = 7434 // channel: regular

type CanonicalEntRecoveryCompanionEvent struct {
	CanonicalEntEventCompanionMarker CANONICALENTEVENTMARKER `wam:"canonical_ent_event_companion_marker"` // field 1
	CanonicalEntRecoveryCompanionEvent CANONICALENTRECOVERYCOMPANIONEVENT `wam:"canonical_ent_recovery_companion_event"` // field 2
	CanonicalEntRegistrationTraceId string `wam:"canonical_ent_registration_trace_id"` // field 3
	CanonicalEntRequestId string `wam:"canonical_ent_request_id"` // field 4
	DeviceId string `wam:"device_id"` // field 5
	FamilyDeviceId string `wam:"family_device_id"` // field 6
	CanonicalEntSequenceNumberSinceLastRegistration int64 `wam:"canonical_ent_sequence_number_since_last_registration"` // field 7
	CanonicalEntFeatureName string `wam:"canonical_ent_feature_name"` // field 8
	CanonicalEntRecoveryTimeoutSeconds int64 `wam:"canonical_ent_recovery_timeout_seconds"` // field 9
	CanonicalEntStorageSource string `wam:"canonical_ent_storage_source"` // field 10
	TraceIdInt int64 `wam:"trace_id_int"` // field 11
	CanonicalEntRecoveryEventMetadata string `wam:"canonical_ent_recovery_event_metadata"` // field 12
}
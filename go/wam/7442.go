const WamCanonicalEntRecoveryCriticalEvent = 7442 // channel: regular

type CanonicalEntRecoveryCriticalEventEvent struct {
	CanonicalEntRecoveryCriticalEventMetadata string `wam:"canonical_ent_recovery_critical_event_metadata"` // field 1
	CanonicalEntRecoveryCriticalEventName string `wam:"canonical_ent_recovery_critical_event_name"` // field 2
	CanonicalEntRegistrationTraceId string `wam:"canonical_ent_registration_trace_id"` // field 3
	CanonicalEntRequestId string `wam:"canonical_ent_request_id"` // field 4
	DeviceId string `wam:"device_id"` // field 5
	FamilyDeviceId string `wam:"family_device_id"` // field 6
	CanonicalEntSequenceNumberSinceLastRegistration int64 `wam:"canonical_ent_sequence_number_since_last_registration"` // field 7
	TraceIdInt int64 `wam:"trace_id_int"` // field 8
}
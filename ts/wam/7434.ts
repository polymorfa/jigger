export const WamCanonicalEntRecoveryCompanion = 7434 as const

export interface CanonicalEntRecoveryCompanionEvent {
  /** field 1, wire `canonical_ent_event_companion_marker` */
  canonicalEntEventCompanionMarker?: CANONICALENTEVENTMARKER
  /** field 2, wire `canonical_ent_recovery_companion_event` */
  canonicalEntRecoveryCompanionEvent?: CANONICALENTRECOVERYCOMPANIONEVENT
  /** field 3, wire `canonical_ent_registration_trace_id` */
  canonicalEntRegistrationTraceId?: string
  /** field 4, wire `canonical_ent_request_id` */
  canonicalEntRequestId?: string
  /** field 5, wire `device_id` */
  deviceId?: string
  /** field 6, wire `family_device_id` */
  familyDeviceId?: string
  /** field 7, wire `canonical_ent_sequence_number_since_last_registration` */
  canonicalEntSequenceNumberSinceLastRegistration?: number
  /** field 8, wire `canonical_ent_feature_name` */
  canonicalEntFeatureName?: string
  /** field 9, wire `canonical_ent_recovery_timeout_seconds` */
  canonicalEntRecoveryTimeoutSeconds?: number
  /** field 10, wire `canonical_ent_storage_source` */
  canonicalEntStorageSource?: string
  /** field 11, wire `trace_id_int` */
  traceIdInt?: number
  /** field 12, wire `canonical_ent_recovery_event_metadata` */
  canonicalEntRecoveryEventMetadata?: string
}
export const WamCanonicalEntRecoveryCriticalEvent = 7442 as const

export interface CanonicalEntRecoveryCriticalEventEvent {
  /** field 1, wire `canonical_ent_recovery_critical_event_metadata` */
  canonicalEntRecoveryCriticalEventMetadata?: string
  /** field 2, wire `canonical_ent_recovery_critical_event_name` */
  canonicalEntRecoveryCriticalEventName?: string
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
  /** field 8, wire `trace_id_int` */
  traceIdInt?: number
}
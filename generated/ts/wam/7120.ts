export const WamCertificateValidationEvent = 7120 as const

export interface CertificateValidationEventEvent {
  /** field 1, wire `cert_chain_length` */
  certChainLength?: number
  /** field 2, wire `cert_verification_result` */
  certVerificationResult?: CERTVERIFICATIONRESULTTYPE
  /** field 3, wire `leaf_cert_common_name` */
  leafCertCommonName?: string
  /** field 4, wire `leaf_cert_id` */
  leafCertId?: string
  /** field 5, wire `leaf_cert_ttl_days` */
  leafCertTtlDays?: number
  /** field 6, wire `signature_version` */
  signatureVersion?: string
  /** field 7, wire `verification_latency` */
  verificationLatency?: string
  /** field 8, wire `raw_error_code` */
  rawErrorCode?: string
}
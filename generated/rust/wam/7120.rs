pub const WAM_CERTIFICATE_VALIDATION_EVENT: u32 = 7120;

#[derive(Debug, Default)]
pub struct CertificateValidationEventEvent {
    /// field 1, wire `cert_chain_length`
    pub cert_chain_length: Option<i64>,
    /// field 2, wire `cert_verification_result`
    pub cert_verification_result: Option<CERTVERIFICATIONRESULTTYPE>,
    /// field 3, wire `leaf_cert_common_name`
    pub leaf_cert_common_name: Option<String>,
    /// field 4, wire `leaf_cert_id`
    pub leaf_cert_id: Option<String>,
    /// field 5, wire `leaf_cert_ttl_days`
    pub leaf_cert_ttl_days: Option<i64>,
    /// field 6, wire `signature_version`
    pub signature_version: Option<String>,
    /// field 7, wire `verification_latency`
    pub verification_latency: Option<String>,
    /// field 8, wire `raw_error_code`
    pub raw_error_code: Option<String>,
}
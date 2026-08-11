const WamCertificateValidationEvent = 7120 // channel: regular

type CertificateValidationEventEvent struct {
	CertChainLength int64 `wam:"cert_chain_length"` // field 1
	CertVerificationResult CERTVERIFICATIONRESULTTYPE `wam:"cert_verification_result"` // field 2
	LeafCertCommonName string `wam:"leaf_cert_common_name"` // field 3
	LeafCertId string `wam:"leaf_cert_id"` // field 4
	LeafCertTtlDays int64 `wam:"leaf_cert_ttl_days"` // field 5
	SignatureVersion string `wam:"signature_version"` // field 6
	VerificationLatency string `wam:"verification_latency"` // field 7
	RawErrorCode string `wam:"raw_error_code"` // field 8
}
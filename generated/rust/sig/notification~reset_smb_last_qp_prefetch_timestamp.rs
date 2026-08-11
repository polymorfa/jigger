/// Matches `<notification>`. Server-initiated; nothing sends it.
pub fn parse_psa_reset_smb_last_qp_prefetch_timestamp_request(n: &Node) -> Option<PsaResetSmbLastQpPrefetchTimestampRequest>
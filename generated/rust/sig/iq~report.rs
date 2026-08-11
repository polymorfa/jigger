/// Matches `<iq>`. Server-initiated; nothing sends it.
pub fn parse_spam_report_id_mixin(n: &Node) -> Option<SpamReportIdMixin>
/// Matches `<iq>`. Server-initiated; nothing sends it.
pub fn parse_newsletters_get_newsletter_statuses_response_success(n: &Node) -> Option<NewslettersGetNewsletterStatusesResponseSuccess>
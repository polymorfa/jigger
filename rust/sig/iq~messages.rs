/// Matches `<iq>`. Server-initiated; nothing sends it.
pub fn parse_newsletters_get_newsletter_messages_response_success(n: &Node) -> Option<NewslettersGetNewsletterMessagesResponseSuccess>
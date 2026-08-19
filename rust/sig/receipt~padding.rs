/// Matches `<receipt>`. Server-initiated; nothing sends it.
pub fn parse_receipt_padding_mixin(n: &Node) -> Option<ReceiptPaddingMixin>
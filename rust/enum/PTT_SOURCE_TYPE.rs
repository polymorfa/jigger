#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PTTSOURCETYPE {
    FROMCONVERSATION = 0,
    FROMVOICEMAIL = 1,
}
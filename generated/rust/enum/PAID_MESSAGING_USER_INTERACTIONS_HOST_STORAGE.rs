#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PAIDMESSAGINGUSERINTERACTIONSHOSTSTORAGE {
    NONE = 0,
    ONPREMISE = 1,
    FACEBOOK = 2,
}
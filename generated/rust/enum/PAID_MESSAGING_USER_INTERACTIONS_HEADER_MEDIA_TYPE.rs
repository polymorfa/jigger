#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PAIDMESSAGINGUSERINTERACTIONSHEADERMEDIATYPE {
    TEXT = 0,
    IMAGE = 1,
    VIDEO = 2,
    LOCATION = 3,
    DOCUMENT = 4,
    GIF = 5,
}
#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PAIDMESSAGINGUSERINTERACTIONSCOMPONENTTYPE {
    NONE = 0,
    HEADER = 1,
    BUTTON = 2,
    BODY = 3,
    FOOTER = 4,
}
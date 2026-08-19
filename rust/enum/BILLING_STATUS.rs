#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BILLINGSTATUS {
    UNKNOWN = 1,
    NOACTIONREQUIRED = 2,
    HASPENDINGACTIONS = 3,
}
#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CTWAADACCOUNTTYPE {
    CTWAFBPAGELINKEDACCOUNT = 0,
    CTWAFBPAGELESSACCOUNT = 1,
    CTWAWAADACCOUNT = 2,
}
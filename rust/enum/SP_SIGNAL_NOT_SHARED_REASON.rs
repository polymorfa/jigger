#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SPSIGNALNOTSHAREDREASON {
    VALUENOTAVAILABLE = 0,
    WINDOWEXPIRED = 1,
    TOKENEXPIRED = 2,
    SIGNALNOTALLOWLISTED = 3,
    INVALIDURL = 4,
}
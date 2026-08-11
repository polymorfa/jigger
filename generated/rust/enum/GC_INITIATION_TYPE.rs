#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum GCINITIATIONTYPE {
    ONEONONETOGCUPGRADE = 0,
    ADHOC = 1,
    LINKED = 2,
    CALLLINK = 3,
    VOICECHAT = 4,
}
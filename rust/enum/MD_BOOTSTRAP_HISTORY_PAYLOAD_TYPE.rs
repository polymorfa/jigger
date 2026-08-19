#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MDBOOTSTRAPHISTORYPAYLOADTYPE {
    INITIAL = 1,
    RECENTHISTORY = 2,
    FULLHISTORY = 3,
    PUSHNAME = 4,
    STATUSV3 = 5,
    NONBLOCKINGDATA = 6,
    ONDEMAND = 7,
}
#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PEERDATARESPONSEAPPLYRESULTTYPE {
    SUCCESS = 1,
    OTHERERROR = 2,
    INVALIDRESPONSE = 3,
    FAILTODOWNLOAD = 4,
    REQUESTTIMEOUT = 5,
}
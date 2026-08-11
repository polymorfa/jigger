#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SIGNCREDENTIALRESULT {
    SUCCESS = 1,
    ERRORBADREQUEST = 2,
    ERRORSERVER = 3,
    ERROROTHER = 4,
    ERRORCLIENTNETWORK = 5,
}
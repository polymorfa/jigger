#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBHYBRIDAPPRATEANDREVIEWSTATUSRESULT {
    SUCCEEDED = 0,
    CANCELEDBYUSER = 1,
    NETWORKERROR = 2,
    ERROR = 3,
}
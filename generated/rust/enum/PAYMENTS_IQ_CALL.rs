#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PAYMENTSIQCALL {
    REQUEST = 0,
    FAILURERESPONSE = 1,
    SUCCESSRESPONSE = 2,
}
#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CUSTOMPAYMENTMETHODSSYNCSTATUS {
    ATTEMPT = 0,
    SUCCESS = 1,
    FAILURE = 2,
}
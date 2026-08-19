#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CADMINDEMOTERESULTTYPE {
    SUCCESS = 1,
    FAILURE = 2,
    CANCEL = 3,
    RETRYSUCCESS = 4,
    RETRYFAILURE = 5,
    RETRYCANCEL = 6,
}
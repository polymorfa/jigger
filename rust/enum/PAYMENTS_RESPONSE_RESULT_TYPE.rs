#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PAYMENTSRESPONSERESULTTYPE {
    OK = 1,
    ERROR = 2,
}
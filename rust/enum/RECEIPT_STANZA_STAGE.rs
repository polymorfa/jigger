#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum RECEIPTSTANZASTAGE {
    OVERALL = 0,
    WAITINGINE2EQUEUE = 6,
    WAITINGINUNORDEREDQUEUE = 7,
    PARSE = 1,
    WAITINGTOPROCESS = 2,
    PROCESS = 3,
    WAITINGTOACK = 5,
    ACK = 4,
}
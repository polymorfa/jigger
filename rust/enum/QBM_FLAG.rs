#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum QBMFLAG {
    OTHER = 0,
    TRANSACTIONAL = 1,
    PROMOTIONAL = 2,
    OTP = 3,
    MARKETINGMESSAGESMB = 4,
}
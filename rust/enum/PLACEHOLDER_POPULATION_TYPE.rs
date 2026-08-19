#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PLACEHOLDERPOPULATIONTYPE {
    OTHER = 0,
    RETRY = 1,
    PEERMESSAGE = 2,
    RESEND = 3,
}
#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SIGNALMESSAGETYPE {
    NFM = 0,
    HSM = 1,
}
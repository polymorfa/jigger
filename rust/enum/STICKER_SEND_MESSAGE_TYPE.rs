#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STICKERSENDMESSAGETYPE {
    REGULAR = 1,
    PAYMENTS = 2,
    ANNOTATION = 3,
}
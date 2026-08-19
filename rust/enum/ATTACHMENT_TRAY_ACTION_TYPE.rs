#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ATTACHMENTTRAYACTIONTYPE {
    CLICK = 1,
    SEND = 2,
    CANCEL = 3,
}
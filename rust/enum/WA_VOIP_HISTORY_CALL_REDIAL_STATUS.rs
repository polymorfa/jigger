#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WAVOIPHISTORYCALLREDIALSTATUS {
    UNKNOWN = 0,
    ISREDIAL = 1,
    NOTREDIAL = 2,
}
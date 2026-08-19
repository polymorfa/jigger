#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CRASHLOGTYPE {
    UNKNOWN = 0,
    ZEROEVENTEXPECTED = 1,
    TRACKING = 2,
}
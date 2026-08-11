#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CALLNETWORKMEDIUM {
    CELLULAR = 1,
    WIFI = 2,
    NONE = 3,
}
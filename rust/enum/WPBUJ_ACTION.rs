#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WPBUJACTION {
    VIEW = 1,
    DOWNLOAD = 2,
    APPLY = 3,
    SELECT = 4,
}
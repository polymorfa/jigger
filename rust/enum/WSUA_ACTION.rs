#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WSUAACTION {
    CLICK = 1,
    DISMISS = 2,
    VIEW = 3,
}
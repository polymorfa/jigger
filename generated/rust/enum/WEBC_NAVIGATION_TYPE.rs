#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBCNAVIGATIONTYPE {
    NAVIGATENEXT = 0,
    RELOAD = 1,
    BACKFORWARD = 2,
    UNDEFINED = 255,
}
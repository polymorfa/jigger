#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum VOMESSAGETYPE {
    PHOTO = 1,
    VIDEO = 2,
    PTT = 3,
}
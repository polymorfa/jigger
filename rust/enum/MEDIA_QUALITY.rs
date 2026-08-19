#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MEDIAQUALITY {
    AUTO = 0,
    DATASAVER = 1,
    HIGHQUALITY = 2,
    HIGHESTQUALITY = 3,
}
#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MEDIAAUTODOWNLOADQUALITY {
    AUTO = 0,
    SDQUALITY = 1,
    HDQUALITY = 2,
}
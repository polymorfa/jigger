#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STATUSTYPE {
    IMAGE = 1,
    VIDEO = 2,
    GIF = 3,
    AUDIO = 4,
    TEXT = 5,
    MUSICSTANDALONE = 6,
    FUTURE = 7,
    PLACEHOLDER = 8,
    INLINEVIDEO = 9,
    LOCATION = 10,
}
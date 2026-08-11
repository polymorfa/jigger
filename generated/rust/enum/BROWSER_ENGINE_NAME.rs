#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BROWSERENGINENAME {
    BLINK = 0,
    GECKO = 1,
    WEBKIT = 2,
    UNKNOWN = 3,
}
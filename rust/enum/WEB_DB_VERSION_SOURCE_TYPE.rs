#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBDBVERSIONSOURCETYPE {
    KNOB = 1,
    LOCAL = 2,
    STATIC = 3,
    KNOBWITHLOCALOVERRIDE = 4,
}
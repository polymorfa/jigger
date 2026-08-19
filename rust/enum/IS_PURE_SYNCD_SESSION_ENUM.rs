#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ISPURESYNCDSESSIONENUM {
    UNKNOWN = 1,
    YES = 2,
    NO = 3,
    PROBABLYYES = 4,
    PROBABLYNO = 5,
}
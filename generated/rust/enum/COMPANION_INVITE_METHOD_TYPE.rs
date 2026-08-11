#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum COMPANIONINVITEMETHODTYPE {
    UNKNOWN = 0,
    NATIVESMS = 1,
    SERVERSMS = 2,
}
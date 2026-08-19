#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum VALIDATIONSTATUS {
    UNKNOWN = 1,
    NOACTIONREQUIRED = 2,
    HASERRORS = 3,
}
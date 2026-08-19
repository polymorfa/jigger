#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MUTATIONDIRECTIONTYPE {
    INCOMING = 0,
    OUTGOING = 1,
}
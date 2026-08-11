#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum KICACTIONTYPE {
    KEEPMESSAGE = 1,
    UNKEEPMESSAGE = 2,
}
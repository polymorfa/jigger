#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum GASTATUS {
    NEW = 0,
    RETAINED = 1,
    RESURRECTED = 2,
}
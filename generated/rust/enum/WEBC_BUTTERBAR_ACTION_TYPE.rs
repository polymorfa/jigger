#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBCBUTTERBARACTIONTYPE {
    IMPRESSION = 1,
    CLICKCTA = 2,
    CLICKDISMISS = 3,
    AUTODISMISS = 4,
}
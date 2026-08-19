#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum LASTMESSAGEDIRECTION {
    OPPOSITEPARTYINITIATED = 0,
    SELFINITIATED = 1,
}
#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PSUPLOADREASON {
    REASONPSPINGER = 0,
    REASONPSOFFCYCLE = 1,
}
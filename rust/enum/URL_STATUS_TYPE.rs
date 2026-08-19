#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum URLSTATUSTYPE {
    NOPREVIEW = 1,
    TRUNCATED = 2,
    NONTRUNCATED = 3,
    INTERACTABLE = 4,
    TOPBARATTRIBUTION = 5,
    INLINEVIDEOCTA = 6,
}
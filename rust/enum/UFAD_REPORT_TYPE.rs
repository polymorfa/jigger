#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum UFADREPORTTYPE {
    NSUSERDEFAULT = 1,
    MMAP = 2,
    NSUSERDEFAULTANDMMAP = 3,
}
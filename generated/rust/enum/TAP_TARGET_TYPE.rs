#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum TAPTARGETTYPE {
    FULL = 0,
    WITHOUTTITLE = 1,
    WITHOUTTHUMBNAIL = 2,
    WITHOUTTITLEANDTHUMBNAIL = 3,
}
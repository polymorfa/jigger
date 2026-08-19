#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum GROUPTYPECLIENT {
    REGULARGROUP = 1,
    SUBGROUP = 2,
    DEFAULTSUBGROUP = 3,
    PARENTGROUP = 4,
}
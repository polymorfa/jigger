#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum TYPEOFGROUPENUM {
    GROUP = 1,
    SUBGROUP = 2,
    DEFAULTSUBGROUP = 3,
}
#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum OPTIMISTICFLAGTYPE {
    NONE = 0,
    OPTIMISTIC = 1,
    OPTUSED = 2,
    OPTTAKEOVER = 3,
    OPTDISABLED = 4,
}
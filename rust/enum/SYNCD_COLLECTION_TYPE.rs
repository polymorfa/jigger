#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SYNCDCOLLECTIONTYPE {
    REGULAR = 1,
    REGULARLOW = 2,
    REGULARHIGH = 3,
    CRITICALBLOCK = 4,
    CRITICALUNBLOCKLOW = 5,
}
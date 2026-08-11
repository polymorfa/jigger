#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum USERJOURNEYCHATTYPE {
    INDIVIDUAL = 1,
    GROUP = 2,
    BROADCAST = 3,
    STATUS = 4,
    CHANNEL = 5,
    INTEROP = 6,
    MULTIPLE = 7,
    FLOWS = 8,
    CATALOG = 9,
    METAAI = 10,
}
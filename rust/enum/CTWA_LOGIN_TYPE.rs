#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CTWALOGINTYPE {
    CTWALOGINTYPEFBNATIVE = 0,
    CTWALOGINTYPEFBWEB = 1,
    CTWALOGINTYPEWAADACCOUNT = 2,
}
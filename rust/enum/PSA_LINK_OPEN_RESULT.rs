#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PSALINKOPENRESULT {
    SUCCESS = 1,
    CANCEL = 2,
    ERROR = 3,
}
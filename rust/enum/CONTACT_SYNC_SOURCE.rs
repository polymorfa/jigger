#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CONTACTSYNCSOURCE {
    CONTACTFORM = 1,
    CTWAOPENDEEPLINK = 2,
    CTWAPOSTDEEPLINK = 3,
}
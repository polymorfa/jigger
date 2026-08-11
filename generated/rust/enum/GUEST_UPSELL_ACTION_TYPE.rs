#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum GUESTUPSELLACTIONTYPE {
    VIEW = 1,
    CLICK = 2,
    DISMISS = 3,
    DOWNLOADCTACLICK = 4,
}
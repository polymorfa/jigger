#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SEARCHUJDISMISSTYPE {
    BACKPRESSED = 1,
    OTHER = 2,
    SWIPE = 3,
}
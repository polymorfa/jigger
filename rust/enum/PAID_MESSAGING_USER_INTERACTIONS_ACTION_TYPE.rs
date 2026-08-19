#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PAIDMESSAGINGUSERINTERACTIONSACTIONTYPE {
    VIEW = 0,
    CLICK = 1,
    READ = 2,
    FORWARD = 3,
    MEDIAPLAYBACK = 4,
    SHOWMORECLICKED = 5,
    CAROUSELSCROLLED = 6,
}
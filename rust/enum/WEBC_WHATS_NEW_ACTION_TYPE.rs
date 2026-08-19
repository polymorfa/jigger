#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBCWHATSNEWACTIONTYPE {
    IMPRESSION = 1,
    DISMISSBUTTON = 2,
    DISMISSOVERLAY = 3,
    BANNERCLICK = 4,
    BANNERDISMISS = 5,
}
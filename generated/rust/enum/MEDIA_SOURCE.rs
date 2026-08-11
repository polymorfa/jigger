#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MEDIASOURCE {
    LOCALMEDIAGALLERY = 1,
    NEWMEDIACAMERA = 2,
    CATALOGMEDIA = 3,
    STATUSMEDIA = 4,
    BIZPROFILEIMAGE = 5,
    FBMEDIA = 6,
    IGMEDIA = 7,
}
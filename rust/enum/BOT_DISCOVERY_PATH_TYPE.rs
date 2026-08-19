#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BOTDISCOVERYPATHTYPE {
    CURATEDDISPLAY = 1,
    SEARCH = 2,
    VIEWALL = 3,
    DEEPLINKUSERSHARED = 4,
    INFINITESCROLL = 5,
}
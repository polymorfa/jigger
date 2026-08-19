#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DEEPLINKSOURCE {
    INSTAGRAMSTORIES = 0,
    INSTAGRAMSTATUSRESHARE = 1,
    INSTAGRAMPROFILE = 2,
    INSTAGRAMADS = 3,
    INSTAGRAMQP = 4,
    INSTAGRAMDM = 5,
}
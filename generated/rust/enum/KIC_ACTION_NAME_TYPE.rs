#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum KICACTIONNAMETYPE {
    KEEPMESSAGE = 1,
    UNKEEPMESSAGE = 2,
    VIEWKEPTMESSAGES = 3,
    SEARCHRESULTSDISPLAY = 4,
    SEARCHRESULTSTAP = 5,
}
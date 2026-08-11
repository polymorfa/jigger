#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBCQUERYTRIGGERTYPE {
    UNKNOWN = 0,
    USERSCROLL = 1,
    NEWMESSAGEPREFETCH = 2,
    SEARCHRESULTCLICK = 3,
}
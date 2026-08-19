#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum UPDATETABSEARCHEVENTTYPE {
    SEARCHTAP = 1,
    SEARCH = 5,
    SERPLOADED = 6,
    SEARCHRESULTSCROLL = 7,
    SEARCHSUBMIT = 8,
    ITEMTAP = 9,
    ITEMREMOVE = 10,
    FOLLOW = 11,
    UNFOLLOW = 12,
}
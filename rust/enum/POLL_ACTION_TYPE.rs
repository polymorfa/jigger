#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum POLLACTIONTYPE {
    OPENCREATEMODAL = 1,
    CREATEPOLL = 2,
    VIEWRESULTSMODAL = 4,
    REMOVEVOTE = 5,
    VOTE = 6,
    CHANGEVOTE = 7,
    EDITPOLLINITIATED = 8,
    EDITPOLLCOMPLETED = 9,
}
#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MMUSERCONTROLSACTION {
    INTERESTED = 1,
    NOTINTERESTED = 2,
    STOP = 3,
    BLOCK = 4,
    BLOCKANDREPORT = 5,
    RESUME = 6,
    DISMISS = 7,
    UNDO = 8,
    IMPRESSION = 9,
    STOPCONFIRMATION = 10,
    RESUMECONFIRMATION = 11,
    FEEDBACK = 12,
    LEARNMORE = 13,
    MANAGEMESSAGES = 14,
}
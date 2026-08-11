#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum LABELOPERATIONS {
    ADD = 1,
    EDIT = 2,
    DELETE = 3,
    VIEW = 4,
    CLICKPOSITIVE = 5,
    CLICKNEGATIVE = 6,
    UPDATELABELCOUNT = 7,
    AUTOADDED = 8,
    REORDER = 9,
    RENAME = 10,
    UPDATEMEMBERS = 11,
    MUTE = 12,
    UNMUTE = 13,
    SUGGESTIONCLICKED = 14,
    UPDATEDCOLOR = 15,
    SWIPE = 16,
}
#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ACTIONCODE {
    OPENMEDIAHUB = 1,
    SEARCH = 2,
    LIST = 3,
    ICON = 4,
    SCROLL = 5,
    CLICK = 6,
    CLOSEMEDIAHUB = 7,
    REPLY = 8,
    FORWARD = 9,
    DOWNLOAD = 10,
    STAR = 11,
    DELETE = 12,
    OPEN = 13,
    GOTOMESSAGE = 14,
    MULTISELECT = 15,
    SORT = 16,
    OPENMENU = 17,
    FILTER = 18,
}
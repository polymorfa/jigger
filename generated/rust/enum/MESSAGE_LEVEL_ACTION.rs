#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MESSAGELEVELACTION {
    STAR = 0,
    FORWARD = 1,
    COPY = 2,
    REPORT = 3,
    DELETE = 4,
    BUTTONCLICK = 5,
    LINKCLICK = 6,
    MESSAGEVIEW = 7,
    UNSTAR = 8,
    SHARE = 9,
    ADDCONTACT = 10,
    RATE = 11,
    PINMESSAGE = 12,
    UNPINMESSAGE = 13,
    DOWNLOADHDMEDIA = 14,
    URLFRICTIONBANNERVIEW = 15,
}
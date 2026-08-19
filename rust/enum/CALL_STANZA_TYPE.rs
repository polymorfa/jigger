#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CALLSTANZATYPE {
    OFFER = 0,
    ACCEPT = 1,
    REJECT = 2,
    VIDEO = 3,
    TERMINATE = 4,
    ENCREKEY = 5,
    RELAYLATENCY = 6,
    TRANSPORT = 7,
    PREACCEPT = 8,
    GROUPUPDATE = 9,
    MUTEV2 = 10,
    INTERRUPTION = 11,
    FLOWCONTROL = 12,
    NOTIFY = 13,
    OFFERNOTICE = 14,
    CALLRELAY = 15,
    MUTE = 16,
    SCREENSHARE = 17,
    UNKNOWN = 18,
}
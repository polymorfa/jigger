#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum UPLOADORIGINTYPE {
    UNKNOWN = 1,
    CHATPERSONAL = 2,
    CHATGROUP = 3,
    STATUSUSER = 4,
    PRODUCTCATALOG = 5,
    STICKERWEB = 6,
    PAYMENTSKYC = 7,
    MESSAGEHISTORYSYNC = 8,
    COMMUNITY = 9,
    CHANNEL = 10,
    BROADCAST = 11,
    MULTICHAT = 12,
    INTEROP = 13,
    WABACKUP = 14,
}
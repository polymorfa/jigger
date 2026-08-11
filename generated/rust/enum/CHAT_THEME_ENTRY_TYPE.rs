#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CHATTHEMEENTRYTYPE {
    ONETOONE = 1,
    GROUP = 2,
    APPWIDE = 3,
    APPTHEME = 4,
    LISTTHEME = 5,
}
#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PERIPHERALDISPLAYCONNECTIVITYTYPE {
    UNKNOWN = 0,
    TETHERED = 1,
    WHATSAPI = 2,
}
#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BUNDLESENDSOURCE {
    NOTIFICATION = 1,
    IQRESPONSE = 2,
    SYSTEMMESSAGE = 3,
    CONTACTCARD = 4,
    DROPDOWNMENU = 5,
}
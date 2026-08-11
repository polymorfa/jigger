#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DISCLOSUREACTION {
    SCREENVIEW = 0,
    CLICKONCONTINUE = 1,
    CANCEL = 2,
    BACKBUTTONTOOLBAR = 3,
    BACKBUTTONSYSTEM = 4,
    DISMISS = 5,
    DISCLOSUREINFOVIEW = 6,
}
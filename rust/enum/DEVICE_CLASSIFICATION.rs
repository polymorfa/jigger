#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DEVICECLASSIFICATION {
    MOBILE = 0,
    TABLET = 1,
    WEARABLES = 2,
    VR = 3,
    DESKTOP = 4,
    FOLDABLE = 5,
    ARGLASS = 6,
    WEARABLESWHATSAPI = 7,
    UNDEFINED = 100,
}
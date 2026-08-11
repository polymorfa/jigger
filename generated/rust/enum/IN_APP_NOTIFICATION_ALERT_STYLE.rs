#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum INAPPNOTIFICATIONALERTSTYLE {
    NONE = 1,
    BANNERS = 2,
    ALERTS = 3,
}
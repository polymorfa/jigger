#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SETTINGSPAGETYPE {
    SETTINGS = 0,
    METAB = 1,
    AVATARCOINFLIP = 2,
}
#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum METAAIUPSELLCTAOPERATIONTYPE {
    IMPRESSION = 1,
    BUTTONCLICK = 2,
    DISMISS = 3,
}
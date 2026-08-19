#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MESSAGESENDSOURCE {
    NONE = 1,
    UNANSWEREDCALLUPSELL = 2,
    UNANSWEREDCALLUPSELLREST = 3,
    VIEWALLREPLIES = 4,
}
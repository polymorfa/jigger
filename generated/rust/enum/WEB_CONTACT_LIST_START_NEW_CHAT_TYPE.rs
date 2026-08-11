#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBCONTACTLISTSTARTNEWCHATTYPE {
    CONTACT = 1,
    GROUP = 2,
    CONTACTLESS = 3,
}
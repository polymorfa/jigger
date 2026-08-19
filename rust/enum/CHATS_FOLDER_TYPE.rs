#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CHATSFOLDERTYPE {
    INBOX = 1,
    ARCHIVED = 2,
    BUSINESSFOLDER = 3,
}
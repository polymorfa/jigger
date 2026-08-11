#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CONSUMERBIZENTRYPOINTENUM {
    CHATLIST = 0,
    CHATTHREAD = 1,
    CONTACTINFO = 2,
    SEARCHBAR = 3,
    SHARESHEET = 4,
    NEWCHAT = 5,
}
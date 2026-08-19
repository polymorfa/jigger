#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum GROUPMEMBERTAGENTRYPOINTTYPE {
    MEMBERLIST = 1,
    NEWMEMBERPROMPT = 2,
    CONTACTCARD = 3,
    SNACKBAREDIT = 4,
    OTHER = 5,
}
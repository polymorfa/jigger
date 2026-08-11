#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PYTORCHEDGELIBLOADSTATUS {
    PTLOADSTATUSNONE = 0,
    PTLOADSTATUSSUCCESS = 1,
    PTLOADSTATUSFAILED = 2,
}
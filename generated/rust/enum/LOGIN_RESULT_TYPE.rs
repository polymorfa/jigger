#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum LOGINRESULTTYPE {
    OK = 1,
    ERRORUNKNOWN = 2,
    SERVERERROR = 3,
    SERVERGOAWAY = 4,
    NETWORKERROR = 5,
    ANDROIDKEYSTOREERROR = 6,
    CERTIFICATEERROR = 7,
}
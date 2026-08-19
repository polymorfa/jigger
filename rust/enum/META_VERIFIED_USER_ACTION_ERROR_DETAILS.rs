#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum METAVERIFIEDUSERACTIONERRORDETAILS {
    IQREQUESTFAILED = 1,
    INELIGIBLE = 2,
    USERCANCELLED = 3,
}
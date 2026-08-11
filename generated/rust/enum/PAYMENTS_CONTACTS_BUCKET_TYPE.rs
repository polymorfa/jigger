#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PAYMENTSCONTACTSBUCKETTYPE {
    SMALL = 1,
    MEDIUM = 2,
    LARGE = 3,
    EXTRALARGE = 4,
}
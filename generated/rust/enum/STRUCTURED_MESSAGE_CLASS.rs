#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STRUCTUREDMESSAGECLASS {
    HSM = 0,
    BUTTON = 1,
    LIST = 2,
    PRODUCTLIST = 3,
    BUTTONNFM = 4,
    PRODUCTITEM = 5,
    SHOPSTOREFRONT = 6,
}
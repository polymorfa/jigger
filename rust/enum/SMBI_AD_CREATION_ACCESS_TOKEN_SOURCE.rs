#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SMBIADCREATIONACCESSTOKENSOURCE {
    WAACCOUNTACCESSTOKEN = 1,
    FBACCESSTOKEN = 2,
}
#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum GIFSEARCHPROVIDER {
    GIPHY = 0,
    TENOR = 1,
    KLIPY = 2,
}
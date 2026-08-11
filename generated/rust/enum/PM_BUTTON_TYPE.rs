#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PMBUTTONTYPE {
    QUICKREPLY = 0,
    CTAURL = 1,
    CTACALL = 2,
    CTACATALOG = 3,
    CTACATALOGITEM = 4,
}
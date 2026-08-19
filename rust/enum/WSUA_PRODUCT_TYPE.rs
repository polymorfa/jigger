#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WSUAPRODUCTTYPE {
    NOVA = 1,
    WAPLUS = 2,
    METAAI = 3,
    METAONE = 4,
    METAONECONSUMER = 5,
    METAONEBUSINESS = 6,
}
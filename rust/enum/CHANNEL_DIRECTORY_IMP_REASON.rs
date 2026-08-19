#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CHANNELDIRECTORYIMPREASON {
    PILLSELECTION = 1,
    COUNTRYSELECTION = 2,
    NOTAPPLICABLE = 3,
}
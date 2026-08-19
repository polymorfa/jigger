#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CLIENTIPVERSION {
    IPV4 = 1,
    IPV6 = 2,
}
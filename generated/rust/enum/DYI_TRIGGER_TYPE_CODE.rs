#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DYITRIGGERTYPECODE {
    ADHOC = 1,
    SCHEDULED = 2,
}
#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum E2EDEVICETYPE {
    MYPRIMARY = 1,
    OTHERPRIMARY = 2,
    MYCOMPANION = 3,
    OTHERCOMPANION = 4,
    MYHOSTEDCOMPANION = 5,
    OTHERHOSTEDCOMPANION = 6,
    MYCOEXV2 = 7,
    OTHERCOEXV2 = 8,
}
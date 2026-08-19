#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BACKUPENCRYPTIONMETHOD {
    NOTE2EE = 1,
    E2EEPASSWORD = 2,
    E2EE64DIGIT = 3,
    E2EEPASSKEY = 4,
}
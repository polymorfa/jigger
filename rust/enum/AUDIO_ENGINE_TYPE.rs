#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum AUDIOENGINETYPE {
    JNI = 1,
    OPENSLES = 2,
    OBOEOPENSL = 3,
    OBOEUNSPECIFIED = 4,
    JNIINOBOEOPENSLOUT = 5,
    JNIINOBOEUNSPECIFIEDOUT = 6,
}
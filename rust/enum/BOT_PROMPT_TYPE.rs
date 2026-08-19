#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BOTPROMPTTYPE {
    TEXT = 1,
    VOICE = 2,
    VOICEBACKGROUND = 3,
    VOICECONVERSATIONSTARTER = 4,
    TEXTCONVERSATIONSTARTER = 5,
    TEXTFROMVOICE = 6,
    IMAGE = 8,
    PTT = 9,
    COLLECTION = 10,
    DOCUMENT = 11,
}
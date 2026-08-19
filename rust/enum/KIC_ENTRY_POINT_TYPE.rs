#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum KICENTRYPOINTTYPE {
    CHATINFO = 1,
    SEARCH = 2,
    CHAT = 3,
    MEDIA = 4,
    DOCS = 5,
    LINKS = 6,
    PHOTOS = 7,
    VIDEOS = 8,
    STICKERS = 9,
    ALLMEDIA = 10,
}
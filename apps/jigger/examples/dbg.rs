fn main() -> anyhow::Result<()> {
    let store = cellar_core::Store::open(None)?;
    let id = store.latest(cellar_core::Platform::Whatsapp)?;
    let b = store.open_bundle(id)?;
    let idx = b.index()?;
    let pb: Vec<_> = idx.modules.iter().filter(|e| e.name.ends_with(".pb")).collect();
    println!("modules ending .pb: {}", pb.len());
    for e in pb.iter().take(3) { println!("  {}", e.name); }
    if let Some(e) = idx.modules.iter().find(|e| e.name == "WAWebProtobufsE2E.pb") {
        let src = b.read_module(e)?;
        println!("E2E src len {}", src.len());
        println!("has internalSpec: {}", src.contains("internalSpec"));
        let i = src.find("internalSpec").unwrap_or(0);
        println!("{}", &src[i.saturating_sub(120)..(i+160).min(src.len())]);
    }
    Ok(())
}
